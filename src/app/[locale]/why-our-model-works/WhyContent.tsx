"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/AnimatedSection";

export default function WhyContent() {
  const t = useTranslations("WhyOurModelWorks");
  const tc = useTranslations("Common");

  const connections = [
    { from: t("conn1From"), to: t("conn1To"), impact: t("conn1Impact") },
    { from: t("conn2From"), to: t("conn2To"), impact: t("conn2Impact") },
    { from: t("conn3From"), to: t("conn3To"), impact: t("conn3Impact") },
    { from: t("conn4From"), to: t("conn4To"), impact: t("conn4Impact") },
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                {t.rich("connectTitle", {
                  highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
                })}
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                {t("connectP1")}
              </p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                {t("connectP2")}
              </p>
              <div className="section-divider mb-6" />
              <p className="text-navy font-heading font-semibold text-lg">
                {t("connectConclusion")}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0077B6" />
                      <stop offset="100%" stopColor="#005f8f" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="155" fill="none" stroke="#0077B6" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
                  <path d="M 230,65 Q 310,60 328,120" fill="none" stroke="#0077B6" strokeWidth="1.5" opacity="0.3" />
                  <path d="M 345,177 Q 360,260 300,305" fill="none" stroke="#0077B6" strokeWidth="1.5" opacity="0.3" />
                  <path d="M 257,325 Q 200,365 143,325" fill="none" stroke="#0077B6" strokeWidth="1.5" opacity="0.3" />
                  <path d="M 100,305 Q 40,260 55,177" fill="none" stroke="#0077B6" strokeWidth="1.5" opacity="0.3" />
                  <path d="M 72,120 Q 90,60 170,65" fill="none" stroke="#0077B6" strokeWidth="1.5" opacity="0.3" />
                  {[
                    { x: 200, y: 55 },
                    { x: 338, y: 147 },
                    { x: 287, y: 310 },
                    { x: 113, y: 310 },
                    { x: 62, y: 147 },
                  ].map((node, i) => (
                    <line key={`spoke-${i}`} x1="200" y1="200" x2={node.x} y2={node.y} stroke="#0077B6" strokeWidth="1.5" opacity="0.35" />
                  ))}
                  <circle cx="200" cy="200" r="50" fill="#001B48" stroke="#0077B6" strokeWidth="2" />
                  <text x="200" y="195" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui">HATLISA</text>
                  <text x="200" y="212" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui">GROUP</text>
                  {[
                    { x: 200, y: 55, key: "technology" as const },
                    { x: 338, y: 147, key: "finance" as const },
                    { x: 287, y: 310, key: "procurement" as const },
                    { x: 113, y: 310, key: "marketing" as const },
                    { x: 62, y: 147, key: "logistics" as const },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.x} cy={node.y} r="36" fill="#001B48" stroke="#0077B6" strokeWidth="2" />
                      <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui">
                        {tc(node.key)}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
              {t.rich("interconnectTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              {t("interconnectDescription")}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {connections.map((conn, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 card-hover h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal/10 text-teal text-sm font-semibold">
                      {conn.from}
                    </span>
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                    <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-semibold">
                      {conn.to}
                    </span>
                  </div>
                  <p className="text-slate leading-relaxed">{conn.impact}</p>
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
              {t.rich("ctaTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {t("ctaDescription")}
            </p>
            <Link
              href="/contact"
              className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
            >
              {t("partnerWithUs")}
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
