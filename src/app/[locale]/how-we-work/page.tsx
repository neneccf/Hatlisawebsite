import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import HowWeWorkContent from "./HowWeWorkContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("howWeWork.title"),
    description: t("howWeWork.description"),
  };
}

export default function HowWeWorkPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return <HowWeWorkContent />;
}
