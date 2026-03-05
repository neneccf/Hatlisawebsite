import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Service Domains",
  description:
    "Hatlisa Group provides execution across technology, finance, procurement, marketing, and logistics. Each service stands on its own. When required, they integrate seamlessly.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
