import { Metadata } from "next";
import HowWeWorkContent from "./HowWeWorkContent";

export const metadata: Metadata = {
  title: "How Clients Work With Us",
  description:
    "Hatlisa Group executes precisely what is required — without unnecessary layers. From single mandates to coordinated multi-function deployments.",
};

export default function HowWeWorkPage() {
  return <HowWeWorkContent />;
}
