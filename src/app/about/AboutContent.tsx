"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Execution Excellence",
    description: "Unwavering focus on delivering tangible, measurable results.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Integration",
    description: "Seamless coordination across diverse business functions to provide holistic solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Experience-Driven",
    description: "Leveraging deep, hands-on operational experience to inform strategies and actions.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Adaptability",
    description: "Tailoring solutions to the unique challenges and opportunities of emerging markets.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Client-Centricity",
    description: "Prioritizing client needs and delivering solutions without unnecessary layers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "15+ Years", description: "Of hands-on operational work across Southern Africa" },
  { year: "Field Execution", description: "Deep experience in on-the-ground operations and deployment" },
  { year: "Distribution", description: "Building and managing distribution networks at scale" },
  { year: "Procurement", description: "Developing procurement systems and supplier relationships" },
  { year: "Technology", description: "Deploying operational technology solutions in real environments" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-20">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Built On{" "}
              <span className="text-gold-light">Experience</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              The firm is new. The operational experience behind it is not.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                Our <span className="text-gold-light">Foundation</span>
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Hatlisa Group is founded on over 15 years of hands-on
                operational work across Southern Africa — in field execution,
                distribution networks, procurement systems, and technology
                deployment.
              </p>
              <p className="text-navy font-heading font-semibold text-xl mb-6">
                The firm is new. The operational experience behind it is not.
              </p>
              <p className="text-slate text-lg leading-relaxed">
                This depth of experience means we don&apos;t just understand
                business functions in theory — we&apos;ve built, managed, and
                optimized them in the demanding environments of emerging and
                developing markets.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-navy">{item.year}</h4>
                      <p className="text-slate text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/10 to-teal/20 flex items-center justify-center text-teal mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-slate leading-relaxed">
                  To drive critical business execution across technology,
                  finance, procurement, marketing, and logistics for
                  organizations operating in emerging and developing markets,
                  particularly in Southern Africa. We aim to bridge operational
                  gaps and deliver precise, impactful results.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/20 flex items-center justify-center text-gold mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-slate leading-relaxed">
                  To be the leading execution partner for businesses navigating
                  complex operational landscapes in emerging and developing
                  markets, recognized for our integrated capabilities and
                  unwavering commitment to client success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
              Our <span className="text-gold-light">Values</span>
            </h2>
            <div className="section-divider mx-auto" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="card-hover bg-white border border-gray-100 rounded-2xl p-8 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center text-teal mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="section-container max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to{" "}
              <span className="text-gold-light">Work Together</span>?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Leverage our 15+ years of operational experience for your next
              mandate.
            </p>
            <Link
              href="/contact"
              className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
            >
              Contact Us
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
