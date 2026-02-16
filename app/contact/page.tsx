import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight, Cpu, Clock, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | ImploseLabs - AI & App Development",
  description: "Get in touch with ImploseLabs. Schedule a consultation to discuss your AI or application development project.",
  openGraph: {
    title: "Contact | ImploseLabs - AI & App Development",
    description: "Get in touch with ImploseLabs. Schedule a consultation to discuss your AI or application development project.",
  },
  alternates: {
    canonical: "https://imploselabs.com/contact"
  }
};

const projectTypes = [
  "AI Development",
  "Mac App Development",
  "Web Application",
  "Consulting",
  "Overseer Enterprise",
  "Other",
];

const budgetRanges = [
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0f172a] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Discuss Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]">
                  Project
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                Ready to build something intelligent? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#06b6d4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email Us</h3>
                      <a
                        href="mailto:mike@libertydesignstudio.com"
                        className="text-gray-400 hover:text-[#06b6d4] transition-colors"
                      >
                        mike@libertydesignstudio.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#06b6d4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Response Time</h3>
                      <p className="text-gray-400">We typically respond within 24 hours during business days.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cpu className="h-6 w-6 text-[#06b6d4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">A Liberty Design Studio Company</h3>
                      <p className="text-gray-400">
                        ImploseLabs is part of{" "}
                        <Link href="https://libertydesignstudio.com" className="text-[#06b6d4] hover:underline">
                          Liberty Design Studio
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-semibold text-white mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "Free technical consultation",
                      "Detailed project proposal",
                      "Transparent pricing",
                      "Clear timeline",
                      "No pressure or obligation",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#06b6d4]" />
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <form className="space-y-6" action="mailto:mike@libertydesignstudio.com" method="post" encType="text/plain">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 outline-none transition-all placeholder-gray-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 outline-none transition-all placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 outline-none transition-all placeholder-gray-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 outline-none transition-all placeholder-gray-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 outline-none transition-all"
                    >
                      <option value="" className="bg-[#0f172a]">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0f172a]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 outline-none transition-all"
                    >
                      <option value="" className="bg-[#0f172a]">Select a budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#0f172a]">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 outline-none transition-all resize-none placeholder-gray-500"
                      placeholder="Describe your project, goals, and any technical requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-4 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
                  >
                    Send Message
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="text-[#06b6d4] hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
