import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | ImploseLabs",
  description: "Terms of service for ImploseLabs. Please read these terms carefully before using our website or services.",
  alternates: {
    canonical: "https://imploselabs.com/terms"
  }
};

export default function TermsPage() {
  return (
    <>
      <Header />
      
      <main className="py-16 lg:py-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-400">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: February 15, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the ImploseLabs website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
              <p>
                ImploseLabs provides AI development, Mac application development, and custom web application development services. All services are subject to these Terms of Service and any additional agreements entered into between you and ImploseLabs.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Our Content</h3>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of ImploseLabs or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Client Work</h3>
              <p>
                Upon full payment, clients receive ownership rights to the final deliverables created specifically for their project. ImploseLabs retains the right to display the work in our portfolio and marketing materials unless otherwise agreed in writing.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Third-Party Assets</h3>
              <p>
                Any third-party assets (libraries, frameworks, etc.) used in client projects are subject to their respective licenses. Clients are responsible for obtaining appropriate licenses for any assets they provide.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment terms will be specified in your project proposal or contract.</li>
                <li>A deposit is typically required before work begins.</li>
                <li>Late payments may result in project delays or suspension of services.</li>
                <li>All fees are non-refundable unless otherwise stated in writing.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Project Timeline</h2>
              <p>
                Project timelines are estimates based on the scope of work and timely client feedback. Delays in providing content, feedback, or approvals may extend the project timeline. ImploseLabs is not responsible for delays caused by client inaction.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Revisions and Changes</h2>
              <p>
                The number of revisions included in a project will be specified in your proposal. Additional revisions or scope changes may incur additional fees. Major scope changes may require a change order and adjusted timeline.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                ImploseLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability shall not exceed the amount paid by you for the specific services giving rise to the liability.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p>
                Either party may terminate a project with written notice. Upon termination, you will be responsible for payment for all work completed up to the termination date. Any deposits paid are non-refundable.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any changes indicates your acceptance of the new terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
