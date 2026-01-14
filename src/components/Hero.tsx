"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Video, Clock, MapPin, Award, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&h=1080&fit=crop",
      title: "Professional Healthcare Services"
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=1080&fit=crop",
      title: "Modern Medical Facility"
    },
    {
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1920&h=1080&fit=crop",
      title: "Expert Medical Team"
    },
    {
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&h=1080&fit=crop",
      title: "Quality Patient Care"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-[100vh] md:min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image 
              src={slide.image} 
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 shadow-lg border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 shadow-lg border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "bg-white w-8 sm:w-12 h-2 sm:h-3" 
                : "bg-white/50 hover:bg-white/75 w-2 sm:w-3 h-2 sm:h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-medical-600/90 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              <Award size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="whitespace-nowrap">Quality Healthcare Since 2017</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              We Are Committed to{" "}
              <span className="text-medical-300">Affordable</span>{" "}
              <span className="text-coral-400">Ultimate Care</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              Quality Healthcare Services for Children & Adults. Serving Tampa Bay, Florida, Georgia, and Wisconsin with comprehensive in-person visits and telemedicine.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href="#appointment" className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                <Calendar size={18} className="sm:w-5 sm:h-5" />
                Book Appointment
              </Link>
              <Link href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                <Video size={18} className="sm:w-5 sm:h-5" />
                Our Services
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-medical-300">7+</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Years Serving</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-coral-400">3</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">States</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-300">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Info Cards - Hidden on mobile, shown on tablet+ */}
          <div className="hidden lg:block space-y-4">
            {/* Location Card */}
            <div className="card p-8 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-medical-600 p-3 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Visit Our Center</h3>
              </div>
              <p className="mb-4 text-navy-700 font-medium">15415 N. Florida Avenue, Tampa, FL 33613</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-navy-600">Phone:</span>
                  <a href="tel:8132647300" className="font-bold text-medical-600 hover:text-medical-700">(813) 264-7300</a>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-navy-600">Email:</span>
                  <a href="mailto:info@fasurgentcarecenter.com" className="font-semibold text-medical-600 hover:text-medical-700 text-xs">info@fasurgentcarecenter.com</a>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <Video className="mb-3" size={32} />
                <div className="font-bold text-lg">Telemedicine</div>
                <div className="text-3xl font-bold">$60-$100</div>
              </div>

              <div className="card p-6 bg-gradient-to-br from-coral-600 to-coral-700 text-white">
                <Clock className="mb-3" size={32} />
                <div className="font-bold text-lg">Open Daily</div>
                <div className="text-3xl font-bold">9AM-9PM</div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="card p-6 bg-white/95 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-4 text-navy-900">Operating Hours</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-medical-600 mb-1">In-Person Visits</div>
                  <div className="text-navy-600">Mon-Fri: 9:00 AM - 9:00 PM</div>
                  <div className="text-navy-600">Sat-Sun: 12:00 PM - 9:00 PM</div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="font-semibold text-primary-600 mb-1">Telemedicine</div>
                  <div className="text-navy-600">Mon-Fri: 8:00 AM - 12:00 AM</div>
                  <div className="text-navy-600">Sat-Sun: 8:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
