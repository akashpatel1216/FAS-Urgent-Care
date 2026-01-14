import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const siteLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  const quickLinks = [
    { name: "Book Appointment", href: "#appointment" },
    { name: "DOT Physicals", href: "#services" },
    { name: "Immigration Exam", href: "#services" },
    { name: "Primary Care", href: "#services" },
    { name: "Career Opportunities", href: "#contact" }
  ];

  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with Health Tips
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for health tips and updates.
              </p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 focus:border-medical-500 focus:ring-2 focus:ring-medical-500 transition-all duration-200 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-medical-600 text-white font-bold text-2xl w-12 h-12 rounded-lg flex items-center justify-center">
                F
              </div>
              <div>
                <div className="text-xl font-bold text-white">F.A.S</div>
                <div className="text-xs text-gray-400">Urgent Care Center</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Providing quality, compassionate healthcare to the Tampa Bay community and beyond since 2017.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-navy-800 hover:bg-medical-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-navy-800 hover:bg-medical-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-navy-800 hover:bg-medical-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Site Links</h4>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-medical-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-medical-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={20} className="text-medical-400 flex-shrink-0" />
                <span>15415 N. Florida Avenue Tampa, Florida 33613</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={20} className="text-medical-400 flex-shrink-0" />
                <div>
                  <div>(813) 264-7300</div>
                  <div>(813) 264-5600</div>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={20} className="text-medical-400 flex-shrink-0" />
                <a href="mailto:info@fasurgentcarecenter.com" className="hover:text-medical-400 transition-colors duration-200">
                  info@fasurgentcarecenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-400">
              © {currentYear} F.A.S. Urgent Care Center. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-medical-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-medical-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
