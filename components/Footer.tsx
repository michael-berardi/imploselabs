import Link from "next/link";
import { Cpu, Mail, Github, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services", label: "AI Development" },
    { href: "/services", label: "Mac Apps" },
    { href: "/services", label: "Web Applications" },
    { href: "/services", label: "Consulting" },
  ],
  products: [
    { href: "/products", label: "Overseer" },
    { href: "/products", label: "Features" },
    { href: "/products", label: "Documentation" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/about", label: "Our Process" },
    { href: "/contact", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Cpu className="h-8 w-8 text-[#06b6d4]" />
              <span className="font-display text-xl font-bold text-white">ImploseLabs</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Intelligent systems, crafted. We build AI-powered applications and custom software that solves real business problems.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:mike@libertydesignstudio.com" className="flex items-center gap-2 text-gray-400 hover:text-[#06b6d4] transition-colors">
                <Mail className="h-4 w-4" />
                mike@libertydesignstudio.com
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/imploselabs" className="text-gray-400 hover:text-[#06b6d4] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/imploselabs" className="text-gray-400 hover:text-[#06b6d4] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#06b6d4] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#06b6d4] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#06b6d4] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ImploseLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-[#06b6d4] text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-gray-500 text-sm">
              A{" "}
              <Link
                href="https://libertydesignstudio.com"
                className="text-[#06b6d4] hover:text-white transition-colors"
              >
                Liberty Design Studio
              </Link>{" "}
              company
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
