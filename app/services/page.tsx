import type { Metadata } from "next";
import Link from "next/link";
import { 
  Brain, 
  Laptop, 
  Globe, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | ImploseLabs - AI & App Development",
  description: "AI development, Mac app development, and custom web application services. We build intelligent systems that solve real business problems.",
  openGraph: {
    title: "Services | ImploseLabs - AI & App Development",
    description: "AI development, Mac app development, and custom web application services.",
  },
  alternates: {
    canonical: "https://imploselabs.com/services"
  }
};

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions that automate workflows, analyze data, and solve complex problems. From machine learning models to intelligent agents.",
    features: [
      "Machine learning model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "AI integration with existing systems",
      "Custom AI agents",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    price: "Starting at $25,000",
  },
  {
    icon: Laptop,
    title: "Mac App Development",
    description: "Native macOS applications built with Swift. We craft performant, beautiful Mac apps that users love and that integrate seamlessly with the Apple ecosystem.",
    features: [
      "Native Swift development",
      "App Store submission",
      "macOS system integration",
      "iCloud and CloudKit",
      "Core Data and persistence",
      "Accessibility support",
    ],
    technologies: ["Swift", "SwiftUI", "AppKit", "Core Data", "Combine"],
    price: "Starting at $15,000",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Full-stack web applications with modern architecture. Scalable, secure, and built for performance from day one.",
    features: [
      "Full-stack development",
      "API design and development",
      "Database architecture",
      "Real-time features",
      "Authentication & authorization",
      "Cloud deployment",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS/Vercel"],
    price: "Starting at $20,000",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Clean architecture, rigorous testing, and industry best practices in every line of code.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Security built in from the start, not bolted on later. Your data and users are protected.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We set realistic timelines and meet them. No surprises, no missed deadlines.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0f172a] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Services Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]">
                  Results
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                From AI to Mac apps to web applications—we deliver intelligent systems that solve real problems.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-[#06b6d4]/20 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-[#06b6d4]" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 text-lg mb-6">
                      {service.description}
                    </p>
                    <p className="text-[#06b6d4] font-semibold text-lg mb-6">
                      {service.price}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#06b6d4] text-[#0f172a] px-6 py-3 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
                    >
                      Get a Quote
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                  
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                      <h3 className="font-semibold text-lg text-white mb-6">
                        What's Included
                      </h3>
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="font-semibold text-lg text-white mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#06b6d4]/20 text-[#06b6d4] rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0f172a] to-[#581c87]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Why Choose ImploseLabs
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We bring more than just coding skills to your project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-[#06b6d4]" />
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build something great.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-4 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
            >
              Schedule a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
