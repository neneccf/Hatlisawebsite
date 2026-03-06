"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/AnimatedSection";

export default function HowWeWorkContent() {
  const t = useTranslations("HowWeWork");

  const steps = [
    { number: "01", title: t("step1Title"), description: t("step1Desc") },
    { number: "02", title: t("step2Title"), description: t("step2Desc") },
    { number: "03", title: t("step3Title"), description: t("step3Desc") },
    { number: "04", title: t("step4Title"), description: t("step4Desc") },
  ];

  const engagementTypes = [
    {
      title: t("singleTitle"),
      description: t("singleDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t("multiTitle"),
      description: t("multiDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="hero-gradient pt-48 pb-24">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6">
              {t("badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              {t.rich("heroTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("heroDescription")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
              {t("processTitle")}
            </h2>
            <div className="section-divider mx-auto" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-heading font-bold text-teal/10 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 text-teal/20">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
              {t("modelsTitle")}
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              {t("modelsDescription")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {engagementTypes.map((type, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 card-hover h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center text-teal mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                    {type.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="section-container max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              {t.rich("differentiatorTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              {t("differentiatorP1")}
            </p>
            <p className="text-white text-xl font-heading font-semibold mb-8">
              {t("differentiatorP2")}
            </p>
            <Link
              href="/contact"
              className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
            >
              {t("startConversation")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
