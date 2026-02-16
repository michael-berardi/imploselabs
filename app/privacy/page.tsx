import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ImploseLabs",
  description: "Privacy policy for ImploseLabs. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://imploselabs.com/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      
      <main className="py-16 lg:py-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-400">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: February 15, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                ImploseLabs ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, company name, and other information you provide when contacting us or filling out forms.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, time spent on pages, and referring website.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and manage your projects</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist us in operating our business</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Government authorities when required by law</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at mike@libertydesignstudio.com.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="mt-4 text-white">
                <strong>ImploseLabs</strong><br />
                A Liberty Design Studio Company<br />
                Email: mike@libertydesignstudio.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
