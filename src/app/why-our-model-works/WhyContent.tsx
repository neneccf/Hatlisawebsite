"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const connections = [
  {
    from: "Marketing",
    to: "Logistics",
    impact: "Campaign execution requires distribution readiness. We align marketing deployment with logistics capacity.",
  },
  {
    from: "Procurement",
    to: "Finance",
    impact: "Sourcing decisions directly shape cost structure. Our procurement integrates financial visibility from day one.",
  },
  {
    from: "Technology",
    to: "Operations",
    impact: "Digital systems must work in real environments. We build technology adapted to actual operating conditions.",
  },
  {
    from: "Field Execution",
    to: "Financial Performance",
    impact: "On-the-ground operations shape the bottom line. We connect execution metrics to financial outcomes.",
  },
];

export default function WhyContent() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-light text-sm font-medium mb-6">
              Our Approach
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Why This Model{" "}
              <span className="gradient-text">Works</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              In emerging and developing markets, operational gaps rarely sit
              inside one department.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Interconnected diagram */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
                Decisions{" "}
                <span className="gradient-text">Connect</span>{" "}
                Across Functions
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Marketing affects logistics. Procurement impacts cost
                structure. Field execution shapes financial performance.
              </p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Because we operate across these functions, we understand how
                decisions in one area affect the others. That perspective
                strengthens even single-function engagements.
              </p>
              <div className="section-divider mb-6" />
              <p className="text-navy font-heading font-semibold text-lg">
                One integrated partner. Stronger outcomes across every
                function.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Connection lines with gradient */}
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Outer ring */}
                  <circle cx="200" cy="200" r="160" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="2 6" />

                  {/* All connection lines */}
                  <line x1="200" y1="60" x2="333" y2="152" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="200" y1="60" x2="282" y2="315" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="200" y1="60" x2="118" y2="315" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="200" y1="60" x2="67" y2="152" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="333" y1="152" x2="282" y2="315" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="333" y1="152" x2="118" y2="315" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="333" y1="152" x2="67" y2="152" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="282" y1="315" x2="118" y2="315" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="282" y1="315" x2="67" y2="152" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />
                  <line x1="118" y1="315" x2="67" y2="152" stroke="#00B4D8" strokeWidth="1" opacity="0.2" />

                  {/* Center */}
                  <circle cx="200" cy="200" r="50" fill="#001B48" stroke="#00B4D8" strokeWidth="2" />
                  <text x="200" y="195" textAnchor="middle" fill="#00B4D8" fontSize="11" fontWeight="700" fontFamily="system-ui">HATLISA</text>
                  <text x="200" y="212" textAnchor="middle" fill="#00B4D8" fontSize="11" fontWeight="700" fontFamily="system-ui">GROUP</text>

                  {/* Nodes */}
                  {[
                    { x: 200, y: 60, label: "Technology" },
                    { x: 333, y: 152, label: "Finance" },
                    { x: 282, y: 315, label: "Procurement" },
                    { x: 118, y: 315, label: "Marketing" },
                    { x: 67, y: 152, label: "Logistics" },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.x} cy={node.y} r="36" fill="white" stroke="#00B4D8" strokeWidth="2" />
                      <text x={node.x} y={node.y + 5} textAnchor="middle" fill="#001B48" fontSize="10" fontWeight="600" fontFamily="system-ui">
                        {node.label}
                      </text>
                    </g>
                  ))}

                  {/* Connection lines to center */}
                  {[
                    { x: 200, y: 60 },
                    { x: 333, y: 152 },
                    { x: 282, y: 315 },
                    { x: 118, y: 315 },
                    { x: 67, y: 152 },
                  ].map((node, i) => (
                    <line key={`center-${i}`} x1="200" y1="200" x2={node.x} y2={node.y} stroke="#00B4D8" strokeWidth="1.5" opacity="0.4" />
                  ))}
                </svg>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Connections Detail */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
              How Functions <span className="gradient-text">Interconnect</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Every operational decision has ripple effects. Our integrated
              model ensures those effects strengthen — not undermine — your
              outcomes.
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
                    <span className="px-3 py-1 rounded-full bg-gold/10 text-gold-light text-sm font-semibold">
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

      {/* CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Experience the{" "}
              <span className="gradient-text">Integrated Advantage</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Whether you need one function or five, our cross-functional
              perspective ensures stronger outcomes.
            </p>
            <Link
              href="/contact"
              className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-2"
            >
              Partner With Us
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
