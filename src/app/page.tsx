"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceIcon from "@/components/ServiceIcon";

const services = [
  {
    icon: "technology" as const,
    title: "Technology",
    description:
      "Development and deployment of operational platforms, automation tools, and digital systems built for real operating environments.",
  },
  {
    icon: "finance" as const,
    title: "Finance",
    description:
      "Financial structuring support, performance visibility systems, and operational cost optimization.",
  },
  {
    icon: "procurement" as const,
    title: "Procurement",
    description:
      "Supplier sourcing, contract structuring, cost control frameworks, and purchasing oversight.",
  },
  {
    icon: "marketing" as const,
    title: "Marketing",
    description:
      "Field marketing, campaign execution, activation teams, and structured market research.",
  },
  {
    icon: "logistics" as const,
    title: "Logistics",
    description:
      "Distribution design, last-mile coordination, and operational movement management.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-light text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                Mozambique-Based Execution Firm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
            >
              Execution Across{" "}
              <span className="gradient-text">Critical Business</span>{" "}
              Functions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
            >
              Hatlisa Group operates across technology, finance, procurement,
              marketing, and logistics. Organizations engage us when execution
              matters — whether for a single mandate or a coordinated
              multi-function deployment.
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
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-outline px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5", label: "Core Domains" },
              { value: "100%", label: "Execution Focus" },
              { value: "Southern Africa", label: "Regional Expertise" },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-teal font-semibold text-sm uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mt-3 mb-4">
              Focused Mandates.{" "}
              <span className="gradient-text">Integrated Capability.</span>
            </h2>
            <p className="text-slate max-w-2xl mx-auto text-lg">
              Each service stands on its own. When required, they integrate
              seamlessly.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="card-hover bg-white border border-gray-100 rounded-2xl p-8 h-full group">
                  <div className="service-icon w-16 h-16 rounded-xl flex items-center justify-center text-teal mb-6">
                    <ServiceIcon type={service.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
            >
              Explore all services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work Snippet */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="text-teal font-semibold text-sm uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mt-3 mb-6">
                Precisely What Is Required —{" "}
                <span className="gradient-text">Without Unnecessary Layers</span>
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Some clients engage us for procurement support only. Others
                require field marketing deployment. Some need structured
                operational technology. We execute precisely what is required.
              </p>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Where multiple functions intersect, we coordinate internally so
                the client does not have to.
              </p>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
              >
                Learn how we work
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Single Mandate", desc: "Focused execution on one function" },
                  { label: "Multi-Function", desc: "Coordinated deployment across domains" },
                  { label: "Internal Coordination", desc: "We manage the complexity" },
                  { label: "Client Simplicity", desc: "One partner, integrated results" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 border border-gray-100 card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center text-teal font-heading font-bold text-sm mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="font-heading font-semibold text-navy text-sm mb-1">
                      {item.label}
                    </h4>
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="text-teal-light font-semibold text-sm uppercase tracking-widest">
                Why Our Model Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-3 mb-6">
                Because{" "}
                <span className="gradient-text">Decisions Connect</span>{" "}
                Across Functions
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                In emerging and developing markets, operational gaps rarely sit
                inside one department. Marketing affects logistics. Procurement
                impacts cost structure. Field execution shapes financial
                performance.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Because we operate across these functions, we understand how
                decisions in one area affect the others. That perspective
                strengthens even single-function engagements.
              </p>
              <Link
                href="/why-our-model-works"
                className="inline-flex items-center gap-2 text-teal-light font-semibold hover:gap-3 transition-all"
              >
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              {/* Interconnected diagram */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Connection lines */}
                  <line x1="200" y1="80" x2="330" y2="170" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" />
                  <line x1="200" y1="80" x2="70" y2="170" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" />
                  <line x1="330" y1="170" x2="290" y2="320" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" />
                  <line x1="70" y1="170" x2="110" y2="320" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" />
                  <line x1="110" y1="320" x2="290" y2="320" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" />
                  <line x1="70" y1="170" x2="330" y2="170" stroke="rgba(0,180,216,0.15)" strokeWidth="1" />
                  <line x1="200" y1="80" x2="110" y2="320" stroke="rgba(0,180,216,0.15)" strokeWidth="1" />
                  <line x1="200" y1="80" x2="290" y2="320" stroke="rgba(0,180,216,0.15)" strokeWidth="1" />
                  <line x1="70" y1="170" x2="290" y2="320" stroke="rgba(0,180,216,0.15)" strokeWidth="1" />
                  <line x1="330" y1="170" x2="110" y2="320" stroke="rgba(0,180,216,0.15)" strokeWidth="1" />

                  {/* Center circle */}
                  <circle cx="200" cy="200" r="40" fill="rgba(0,180,216,0.1)" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" />
                  <text x="200" y="196" textAnchor="middle" fill="rgba(0,180,216,0.9)" fontSize="10" fontWeight="600" fontFamily="system-ui">HATLISA</text>
                  <text x="200" y="210" textAnchor="middle" fill="rgba(0,180,216,0.9)" fontSize="10" fontWeight="600" fontFamily="system-ui">GROUP</text>

                  {/* Nodes */}
                  {[
                    { x: 200, y: 80, label: "Technology" },
                    { x: 330, y: 170, label: "Finance" },
                    { x: 290, y: 320, label: "Procurement" },
                    { x: 110, y: 320, label: "Marketing" },
                    { x: 70, y: 170, label: "Logistics" },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.x} cy={node.y} r="30" fill="rgba(0,27,72,0.8)" stroke="rgba(0,180,216,0.5)" strokeWidth="2" />
                      <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="500" fontFamily="system-ui">
                        {node.label}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-teal font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mt-3 mb-6">
              Built On{" "}
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-4">
              Hatlisa Group is founded on over 15 years of hands-on operational
              work across Southern Africa — in field execution, distribution
              networks, procurement systems, and technology deployment.
            </p>
            <p className="text-navy font-heading font-semibold text-xl mb-8">
              The firm is new. The operational experience behind it is not.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
            >
              About Hatlisa Group
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Partner with Hatlisa Group for{" "}
              <span className="gradient-text">Unmatched Execution</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need a focused single-function engagement or
              coordinated multi-domain deployment, we deliver precisely what is
              required.
            </p>
            <Link
              href="/contact"
              className="btn-gradient px-10 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
            >
              Get In Touch
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
