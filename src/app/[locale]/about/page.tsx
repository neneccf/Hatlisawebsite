import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AboutContent from "./AboutContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default function AboutPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return <AboutContent />;
}
