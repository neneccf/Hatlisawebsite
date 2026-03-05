import { Metadata } from "next";
import WhyContent from "./WhyContent";

export const metadata: Metadata = {
  title: "Why This Model Works",
  description:
    "In emerging markets, operational gaps rarely sit inside one department. Hatlisa Group's integrated approach ensures decisions across functions strengthen each other.",
};

export default function WhyOurModelWorksPage() {
  return <WhyContent />;
}
