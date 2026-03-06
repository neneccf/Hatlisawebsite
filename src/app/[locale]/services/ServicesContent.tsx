"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceIcon from "@/components/ServiceIcon";

const serviceKeys = ["technology", "finance", "procurement", "marketing", "logistics"] as const;

export default function ServicesContent() {
  const t = useTranslations("Services");

  const services = serviceKeys.map((key) => ({
    id: key,
    icon: key,
    title: t(`${key}Title`),
    description: t(`${key}Desc`),
    details: [
      t(`${key}Detail1`),
      t(`${key}Detail2`),
      t(`${key}Detail3`),
      t(`${key}Detail4`),
    ],
  }));

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
          <div className="space-y-20">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={0.1}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="service-icon w-20 h-20 rounded-2xl flex items-center justify-center text-teal mb-6">
                      <ServiceIcon type={service.icon} className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
                      {service.title}
                    </h2>
                    <p className="text-slate text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-charcoal">
                          <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 flex items-center justify-center aspect-[4/3]">
                      <div className="text-teal/20">
                        <ServiceIcon type={service.icon} className="w-40 h-40" />
                      </div>
                    </div>
                  </div>
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
              {t.rich("integrationTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {t("integrationDescription")}
            </p>
            <Link
              href="/contact"
              className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
            >
              {t("discussYourNeeds")}
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
