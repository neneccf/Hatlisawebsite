import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us - Built On Experience",
  description:
    "Hatlisa Group is founded on over 15 years of hands-on operational work across Southern Africa. The firm is new. The operational experience behind it is not.",
};

export default function AboutPage() {
  return <AboutContent />;
}
