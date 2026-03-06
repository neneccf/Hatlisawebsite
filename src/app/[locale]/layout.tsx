import { ReactNode } from "react";
import { Montserrat, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://hatlisagroup.co.mz"),
    title: {
      default: t("home.title"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("home.description"),
    keywords: [
      "execution",
      "business functions",
      "technology",
      "finance",
      "procurement",
      "marketing",
      "logistics",
      "Mozambique",
      "Southern Africa",
      "emerging markets",
    ],
    authors: [{ name: "Hatlisa Group" }],
    openGraph: {
      type: "website" as const,
      locale: locale === "pt" ? "pt_MZ" : "en_US",
      siteName: "Hatlisa Group",
      title: t("home.title"),
      description: t("home.ogDescription"),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t("home.title"),
      description: t("home.ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
