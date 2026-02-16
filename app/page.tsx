import Link from "next/link";
import { 
  Brain, 
  Laptop, 
  Globe, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Code2,
  Sparkles,
  Cpu
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions that automate workflows, analyze data, and solve complex problems. From machine learning models to intelligent agents.",
  },
  {
    icon: Laptop,
    title: "Mac App Development",
    description: "Native macOS applications built with Swift. We craft performant, beautiful Mac apps that users love.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web applications with modern architecture. Scalable, secure, and built for performance.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your business, your users, and your technical requirements.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We design the architecture and select the right technologies for your solution.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop with clean code, regular demos, and continuous integration.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description: "We launch your product and provide ongoing maintenance and optimization.",
  },
];

const results = [
  { metric: "80%", label: "Avg. efficiency gain" },
  { metric: "50+", label: "Projects delivered" },
  { metric: "100%", label: "Client satisfaction" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#0f172a] overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#581c87]/20 via-[#0f172a] to-[#06b6d4]/10" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-[#06b6d4]" />
                <span className="text-[#06b6d4] text-sm font-medium">Creators of Overseer</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Intelligent Systems{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]">
                  Crafted
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
                We build AI-powered applications and custom software that solve real business problems. From concept to deployment, we craft solutions that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-4 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Overseer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                What We Build
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                End-to-end development services for companies that need intelligent, reliable software.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#06b6d4]/50 hover:bg-white/10 transition-all"
                >
                  <div className="w-14 h-14 bg-[#06b6d4]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#06b6d4]/30 transition-colors">
                    <service.icon className="h-7 w-7 text-[#06b6d4]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overseer Spotlight */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0f172a] to-[#581c87]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-full px-4 py-2 mb-6">
                  <Cpu className="h-4 w-4 text-[#06b6d4]" />
                  <span className="text-[#06b6d4] text-sm font-medium">Our Flagship Product</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Meet Overseer
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  Overseer is an AI-powered development platform that amplifies developer productivity. Built by our team to solve real problems we faced every day.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "AI-powered code assistance",
                    "Automated workflow management",
                    "Intelligent monitoring",
                    "Developer productivity tools",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#06b6d4]" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-[#06b6d4] font-semibold hover:text-[#22d3ee] transition-colors"
                >
                  Learn more about Overseer
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#581c87] to-[#06b6d4] rounded-2xl p-1">
                  <div className="w-full h-full bg-[#0f172a] rounded-xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <Cpu className="h-24 w-24 text-[#06b6d4] mx-auto mb-6" />
                      <h3 className="font-display text-2xl font-bold text-white mb-2">Overseer</h3>
                      <p className="text-gray-400">AI-Powered Development Platform</p>
                    </div>
                  </div>
                </div>
              </div>
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
                A proven process that delivers results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="text-5xl font-bold text-[#06b6d4]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result) => (
                <div key={result.label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#06b6d4] mb-2">
                    {result.metric}
                  </div>
                  <div className="text-gray-400">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#581c87]/30 to-[#06b6d4]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Intelligent?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you leverage AI and build software that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-4 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="mailto:mike@libertydesignstudio.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
