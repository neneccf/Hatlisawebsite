"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceIcon from "@/components/ServiceIcon";

const serviceKeys = ["technology", "finance", "procurement", "marketing", "logistics"] as const;

export default function HomeContent() {
  const t = useTranslations("Home");
  const tc = useTranslations("Common");

  const services = serviceKeys.map((key) => ({
    icon: key,
    title: tc(key),
    description: t(`${key}Desc`),
  }));

  const stats = [
    { value: t("statsYearsValue"), label: t("statsYearsLabel") },
    { value: t("statsDomainsValue"), label: t("statsDomainsLabel") },
    { value: t("statsFocusValue"), label: t("statsFocusLabel") },
    { value: t("statsRegionValue"), label: t("statsRegionLabel") },
  ];

  const workCards = [
    { label: t("singleMandate"), desc: t("singleMandateDesc") },
    { label: t("multiFunction"), desc: t("multiFunctionDesc") },
    { label: t("internalCoordination"), desc: t("internalCoordinationDesc") },
    { label: t("clientSimplicity"), desc: t("clientSimplicityDesc") },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="section-container relative z-10 pt-36 pb-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse" />
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
            >
              {t.rich("heroTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
              >
                {t("contactUs")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-outline px-8 py-4 rounded-xl font-semibold text-lg"
              >
                {t("ourServices")}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="text-teal-dark font-semibold text-sm uppercase tracking-widest">
              {t("servicesLabel")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mt-3 mb-4">
              {t.rich("servicesTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h2>
            <p className="text-slate max-w-2xl mx-auto text-lg">
              {t("servicesDescription")}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.icon} delay={i * 0.1}>
                <div className="card-hover bg-white border border-gray-100 rounded-2xl p-8 h-full group">
                  <div className="service-icon w-16 h-16 rounded-xl flex items-center justify-center text-teal-dark mb-6">
                    <ServiceIcon type={service.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-navy-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-teal-dark font-semibold hover:gap-3 transition-all">
              {t("exploreAllServices")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work Snippet */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="text-teal-dark font-semibold text-sm uppercase tracking-widest">
                {t("howWeWorkLabel")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mt-3 mb-6">
                {t.rich("howWeWorkTitle", {
                  highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
                })}
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">{t("howWeWorkP1")}</p>
              <p className="text-slate text-lg leading-relaxed mb-8">{t("howWeWorkP2")}</p>
              <Link href="/how-we-work" className="inline-flex items-center gap-2 text-teal-dark font-semibold hover:gap-3 transition-all">
                {t("learnHowWeWork")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <div className="grid grid-cols-2 gap-4">
                {workCards.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 card-hover">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center text-teal-dark font-heading font-bold text-sm mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="font-heading font-semibold text-navy text-sm mb-1">{item.label}</h4>
                    <p className="text-slate text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Our Model Works Snippet */}
      <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="text-white/70 font-semibold text-sm uppercase tracking-widest">{t("whyLabel")}</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-3 mb-6">
                {t.rich("whyTitle", {
                  highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
                })}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">{t("whyP1")}</p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">{t("whyP2")}</p>
              <Link href="/why-our-model-works" className="inline-flex items-center gap-2 text-white/70 font-semibold hover:gap-3 transition-all">
                {t("learnMore")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <line x1="200" y1="200" x2="200" y2="70" stroke="rgba(0,119,182,0.25)" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="200" y1="200" x2="324" y2="160" stroke="rgba(0,119,182,0.25)" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="200" y1="200" x2="276" y2="305" stroke="rgba(0,119,182,0.25)" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="200" y1="200" x2="124" y2="305" stroke="rgba(0,119,182,0.25)" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="200" y1="200" x2="76" y2="160" stroke="rgba(0,119,182,0.25)" strokeWidth="1" strokeDasharray="4 3" />
                  <path d="M 200 70 Q 290 80 324 160" fill="none" stroke="rgba(0,119,182,0.3)" strokeWidth="1.5" />
                  <path d="M 324 160 Q 330 250 276 305" fill="none" stroke="rgba(0,119,182,0.3)" strokeWidth="1.5" />
                  <path d="M 276 305 Q 200 340 124 305" fill="none" stroke="rgba(0,119,182,0.3)" strokeWidth="1.5" />
                  <path d="M 124 305 Q 70 250 76 160" fill="none" stroke="rgba(0,119,182,0.3)" strokeWidth="1.5" />
                  <path d="M 76 160 Q 110 80 200 70" fill="none" stroke="rgba(0,119,182,0.3)" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="42" fill="rgba(0,119,182,0.1)" stroke="rgba(0,119,182,0.35)" strokeWidth="1.5" />
                  <text x="200" y="196" textAnchor="middle" fill="rgba(0,119,182,0.9)" fontSize="10" fontWeight="600" fontFamily="system-ui">HATLISA</text>
                  <text x="200" y="210" textAnchor="middle" fill="rgba(0,119,182,0.9)" fontSize="10" fontWeight="600" fontFamily="system-ui">GROUP</text>
                  {[
                    { x: 200, y: 70, key: "technology" as const },
                    { x: 324, y: 160, key: "finance" as const },
                    { x: 276, y: 305, key: "procurement" as const },
                    { x: 124, y: 305, key: "marketing" as const },
                    { x: 76, y: 160, key: "logistics" as const },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.x} cy={node.y} r="30" fill="rgba(0,27,72,0.8)" stroke="rgba(0,119,182,0.5)" strokeWidth="2" />
                      <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="500" fontFamily="system-ui">
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

      {/* Built on Experience Snippet */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-teal-dark font-semibold text-sm uppercase tracking-widest">{t("aboutLabel")}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mt-3 mb-6">
              {t.rich("aboutTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-4">{t("aboutP1")}</p>
            <p className="text-navy font-heading font-semibold text-xl mb-8">{t("aboutP2")}</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-teal-dark font-semibold hover:gap-3 transition-all">
              {t("aboutHatlisaGroup")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-dark to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
        </div>
        <div className="section-container max-w-4xl text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              {t.rich("ctaTitle", {
                highlight: (chunks) => <span className="text-gold-light">{chunks}</span>,
              })}
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{t("ctaDescription")}</p>
            <Link href="/contact" className="btn-gradient px-10 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2">
              {t("getInTouch")}
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
