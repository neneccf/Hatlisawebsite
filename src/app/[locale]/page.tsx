import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import HomeContent from "./HomeContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return <HomeContent />;
}
