import type { Metadata } from "next";
import Link from "next/link";
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Shield,
  Code2,
  Terminal,
  Workflow
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products | ImploseLabs - Overseer",
  description: "Overseer is an AI-powered development platform built by ImploseLabs. Intelligent systems for modern development workflows.",
  openGraph: {
    title: "Products | ImploseLabs - Overseer",
    description: "Overseer is an AI-powered development platform built by ImploseLabs.",
  },
  alternates: {
    canonical: "https://imploselabs.com/products"
  }
};

const features = [
  {
    icon: Code2,
    title: "AI Code Assistance",
    description: "Intelligent code suggestions, completions, and refactoring powered by advanced language models.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive development tasks with intelligent workflows that learn from your patterns.",
  },
  {
    icon: Terminal,
    title: "Smart CLI",
    description: "Command-line interface with natural language understanding. Just describe what you want to do.",
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    description: "Continuous code analysis and suggestions as you work, not after you commit.",
  },
  {
    icon: Shield,
    title: "Security Scanning",
    description: "AI-powered security analysis that catches vulnerabilities before they reach production.",
  },
  {
    icon: Cpu,
    title: "Performance Insights",
    description: "Intelligent performance recommendations based on your specific codebase and patterns.",
  },
];

const useCases = [
  {
    title: "For Developers",
    description: "Ship code faster with AI assistance that understands your codebase and coding style.",
  },
  {
    title: "For Teams",
    description: "Standardize practices and onboard new team members with intelligent guidance.",
  },
  {
    title: "For Startups",
    description: "Move fast without breaking things. AI-powered code review and quality assurance.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0f172a] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-full px-4 py-2 mb-6">
                <Cpu className="h-4 w-4 text-[#06b6d4]" />
                <span className="text-[#06b6d4] text-sm font-medium">Our Flagship Product</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Overseer
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                An AI-powered development platform that amplifies developer productivity. Built by developers, for developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-4 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
                >
                  Request Access
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="mailto:mike@libertydesignstudio.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Visual */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0f172a] to-[#581c87]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/products/overseer-hero.svg"
                  alt="Overseer AI Development Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Features
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to supercharge your development workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#06b6d4]/50 transition-all"
                >
                  <div className="w-12 h-12 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#06b6d4]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0f172a] to-[#581c87]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Who It's For
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Overseer is designed for modern development teams.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-8 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Built With Modern Tech
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Overseer leverages cutting-edge technology to deliver a seamless experience.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#581c87]/30 to-[#06b6d4]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Try Overseer?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join the waitlist for early access or contact us for enterprise licensing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-4 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
              >
                Request Early Access
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="mailto:mike@libertydesignstudio.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
