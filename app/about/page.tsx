import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Target, Users, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | ImploseLabs - AI & App Development Studio",
  description: "Learn about ImploseLabs, an AI and application development studio. We craft intelligent systems and are the creators of Overseer.",
  openGraph: {
    title: "About | ImploseLabs - AI & App Development Studio",
    description: "Learn about ImploseLabs, an AI and application development studio.",
  },
  alternates: {
    canonical: "https://imploselabs.com/about"
  }
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve, leveraging emerging technologies to solve problems in new ways.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Attention to detail in everything we do. Clean code, thoughtful architecture, polished products.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you, not just for you. Your success is our success.",
  },
  {
    icon: Cpu,
    title: "Excellence",
    description: "We hold ourselves to the highest standards. Good enough is never enough.",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "8+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "3", label: "Products Launched" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0f172a] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                We Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]">
                  Intelligent Systems
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                ImploseLabs is an AI and application development studio. We combine technical excellence with strategic thinking to craft software that drives business results.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    ImploseLabs was founded on a simple belief: that the best software comes from combining deep technical expertise with genuine understanding of business problems.
                  </p>
                  <p>
                    We started as a small team of developers who were frustrated with projects that looked good on paper but failed to deliver real value. We set out to do things differently.
                  </p>
                  <p>
                    Today, we're a specialized studio that helps companies leverage AI and build custom applications. We're the creators of Overseer, our flagship AI-powered development platform.
                  </p>
                  <p>
                    As a Liberty Design Studio company, we bring world-class design and development capabilities to every project. But we remain focused on what we do best: building intelligent systems that work.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl lg:text-5xl font-bold text-[#06b6d4] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0f172a] to-[#581c87]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#06b6d4]/50 transition-all"
                >
                  <div className="w-12 h-12 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-[#06b6d4]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                How We Work
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A collaborative process designed to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We start by understanding your business, your users, and your technical requirements. No shortcuts, no assumptions.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "We design the architecture and select the right technologies. Every decision is intentional and justified.",
                },
                {
                  step: "03",
                  title: "Build",
                  description: "We develop with clean code, regular demos, and continuous integration. You're involved every step of the way.",
                },
                {
                  step: "04",
                  title: "Deploy & Support",
                  description: "We launch your product and provide ongoing maintenance, optimization, and support.",
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-5xl font-bold text-[#06b6d4]/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Company Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0f172a] to-[#581c87]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl font-bold text-white mb-4">
                  Part of the Liberty Design Studio Family
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  ImploseLabs is the technical powerhouse sub-brand of Liberty Design Studio, focused on AI and application development.
                </p>
                <p className="text-gray-400 mb-8">
                  While ImploseLabs focuses on development and AI, our connection to Liberty Design Studio means you get access to world-class design expertise when you need it. It's the best of both worlds.
                </p>
                <Link
                  href="https://libertydesignstudio.com"
                  className="inline-flex items-center gap-2 text-[#06b6d4] font-semibold hover:text-[#22d3ee] transition-colors"
                >
                  Visit Liberty Design Studio
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your business with AI or custom software? We'd love to hear about your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-4 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
