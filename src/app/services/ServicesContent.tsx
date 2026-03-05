"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceIcon from "@/components/ServiceIcon";

const services = [
  {
    id: "technology",
    icon: "technology" as const,
    title: "Technology",
    description:
      "Development and deployment of operational platforms, automation tools, and digital systems built for real operating environments.",
    details: [
      "Operational platform development",
      "Automation tools & workflows",
      "Digital system deployment",
      "Technology adapted for emerging market conditions",
    ],
  },
  {
    id: "finance",
    icon: "finance" as const,
    title: "Finance",
    description:
      "Financial structuring support, performance visibility systems, and operational cost optimization.",
    details: [
      "Financial structuring support",
      "Performance visibility systems",
      "Operational cost optimization",
      "Data-driven financial reporting",
    ],
  },
  {
    id: "procurement",
    icon: "procurement" as const,
    title: "Procurement",
    description:
      "Supplier sourcing, contract structuring, cost control frameworks, and purchasing oversight.",
    details: [
      "Supplier sourcing & vetting",
      "Contract structuring",
      "Cost control frameworks",
      "Purchasing oversight & compliance",
    ],
  },
  {
    id: "marketing",
    icon: "marketing" as const,
    title: "Marketing",
    description:
      "Field marketing, campaign execution, activation teams, and structured market research.",
    details: [
      "Field marketing deployment",
      "Campaign execution & management",
      "Activation team coordination",
      "Structured market research",
    ],
  },
  {
    id: "logistics",
    icon: "logistics" as const,
    title: "Logistics",
    description:
      "Distribution design, last-mile coordination, and operational movement management.",
    details: [
      "Distribution network design",
      "Last-mile delivery coordination",
      "Operational movement management",
      "Supply chain optimization",
    ],
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-light text-sm font-medium mb-6">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Our Service <span className="gradient-text">Domains</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Each service stands on its own. When required, they integrate
              seamlessly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                          <svg
                            className="w-5 h-5 text-teal mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
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

      {/* Integration */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Integrated <span className="gradient-text">Capability</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Because we operate across these functions, we understand how
              decisions in one area affect the others. That perspective
              strengthens even single-function engagements.
            </p>
            <Link
              href="/contact"
              className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
            >
              Discuss Your Needs
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
