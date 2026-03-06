import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import ServicesContent from "./ServicesContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("services.title"),
    description: t("services.description"),
  };
}

export default function ServicesPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return <ServicesContent />;
}
