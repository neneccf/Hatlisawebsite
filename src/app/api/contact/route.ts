import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA v3 token (skip if secret key not configured)
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "reCAPTCHA verification required" },
          { status: 400 }
        );
      }

      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success || verifyData.score < 0.5) {
        console.error("reCAPTCHA failed:", verifyData);
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: parseInt(process.env.SMTP_PORT || "25"),
      secure: process.env.SMTP_SECURE === "true",
      tls: {
        rejectUnauthorized: false,
      },
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

    // Email to Hatlisa Group (primary - must succeed)
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Hatlisa Website" <noreply@hatlisa.com>`,
      to: process.env.CONTACT_EMAIL || "info@hatlisa.com",
      replyTo: email,
      subject: `New Contact Form: ${name} from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a192f; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}">${phone}</a></td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: 600;">Company:</td>
                <td style="padding: 8px 0; color: #333;">${company}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e9ecef; margin: 16px 0;" />
            <p style="color: #666; font-weight: 600; margin-bottom: 8px;">Message:</p>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="background: #0a192f; padding: 16px 24px; border-radius: 0 0 12px 12px;">
            <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 12px;">Sent from hatlisa.com contact form</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender (best-effort - don't fail the whole request if this fails)
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"Hatlisa Group" <noreply@hatlisa.com>`,
        to: email,
        subject: "Thank you for contacting Hatlisa Group",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0a192f; padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #c9a84c; margin: 0; font-size: 20px;">Hatlisa Group</h1>
            </div>
            <div style="background: #ffffff; padding: 24px; border: 1px solid #e9ecef;">
              <p style="color: #333; line-height: 1.6;">Dear ${name},</p>
              <p style="color: #333; line-height: 1.6;">Thank you for reaching out to Hatlisa Group. We have received your message and will get back to you shortly.</p>
              <p style="color: #333; line-height: 1.6;">Best regards,<br/><strong>Hatlisa Group</strong><br/>Maputo, Mozambique</p>
            </div>
            <div style="background: #0a192f; padding: 16px 24px; border-radius: 0 0 12px 12px;">
              <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 12px;">info@hatlisa.com | +258 87 410 8945</p>
            </div>
          </div>
        `,
      });
    } catch (replyError) {
      console.error("Auto-reply failed (non-critical):", replyError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
