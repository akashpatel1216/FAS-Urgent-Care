"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Clock, Heart } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-navy-800 text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:8132647300" className="hover:text-medical-300 transition font-medium">
                  (813) 264-7300
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Clock size={16} />
                <span className="font-medium">Open 7 Days • Telemedicine Available</span>
              </div>
            </div>
            <Link href="#appointment" className="hover:text-medical-300 transition font-semibold">
              Schedule Appointment →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-medical-600 text-white font-bold text-2xl w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-medical-700 transition-all duration-300">
                F
              </div>
              <Heart className="absolute -top-1 -right-1 text-coral-500 fill-coral-500" size={16} />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-navy-900">F.A.S Urgent Care</div>
              <div className="text-xs text-medical-600 font-semibold">Quality Healthcare Since 2017</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-navy-700 hover:text-medical-600 font-semibold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medical-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="#appointment"
              className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-navy-700 hover:text-medical-600"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-navy-700 hover:text-medical-600 font-semibold transition-colors duration-200 px-2"
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="#appointment"
                onClick={() => setIsMenuOpen(false)}
                className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
