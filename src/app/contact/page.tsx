import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hatlisa Group. Whether you need a focused single-function engagement or coordinated multi-domain deployment, we're ready to discuss your needs.",
};

export default function ContactPage() {
  return <ContactContent />;
}
