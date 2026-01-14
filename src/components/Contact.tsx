"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Calendar } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "15415 N. Florida Avenue, Tampa, Florida 33613",
      color: "bg-coral-600"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "(813) 264-7300 • (813) 264-5600",
      color: "bg-medical-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@fasurgentcarecenter.com",
      color: "bg-primary-600"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Open 7 Days a Week - Telemedicine & In-Person",
      color: "bg-navy-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We&apos;re here to help. Contact us for appointments or questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="card p-6">
                  <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{info.title}</h3>
                  <p className="text-navy-600 text-sm">{info.content}</p>
                </div>
              );
            })}

            {/* Book Appointment CTA */}
            <div id="appointment" className="card p-6 bg-gradient-to-br from-medical-600 to-medical-700 text-white">
              <Calendar className="mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
              <p className="text-sm mb-4 text-medical-100">
                Schedule your appointment online or give us a call.
              </p>
              <button className="w-full bg-white text-medical-600 py-3 rounded-lg font-semibold hover:bg-medical-50 transition-colors duration-300">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-200"
                    placeholder="(813) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-medical-600 hover:bg-medical-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Operating Hours Detail */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="card p-6 bg-gradient-to-br from-primary-50 to-white border border-primary-200">
                <h4 className="font-bold text-navy-900 mb-4">Telemedicine Hours</h4>
                <div className="space-y-2 text-sm text-navy-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-semibold">8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="card p-6 bg-gradient-to-br from-medical-50 to-white border border-medical-200">
                <h4 className="font-bold text-navy-900 mb-4">In-Person Visit Hours</h4>
                <div className="space-y-2 text-sm text-navy-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-semibold">12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
