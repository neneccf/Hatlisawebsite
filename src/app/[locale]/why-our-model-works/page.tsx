import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import WhyContent from "./WhyContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("whyOurModelWorks.title"),
    description: t("whyOurModelWorks.description"),
  };
}

export default function WhyOurModelWorksPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return <WhyContent />;
}
