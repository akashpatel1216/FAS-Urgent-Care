import Image from "next/image";
import { Stethoscope, Video, Syringe, FileText, Truck, Users, HeartPulse, Pill } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Urgent Care",
      description: "Walk-in or scheduled appointments for immediate medical attention. No appointment necessary.",
      color: "bg-coral-100 text-coral-600 border-coral-300"
    },
    {
      icon: Users,
      title: "Primary Care",
      description: "Comprehensive primary care services for ages 18 and above. Monday to Friday, 9AM-5PM.",
      color: "bg-primary-100 text-primary-600 border-primary-300"
    },
    {
      icon: Video,
      title: "Telemedicine",
      description: "Virtual consultations available for Florida, Georgia, and Wisconsin. Get care from home.",
      color: "bg-medical-100 text-medical-600 border-medical-300"
    },
    {
      icon: Truck,
      title: "DOT Physicals",
      description: "Department of Transportation physical examinations for commercial drivers.",
      color: "bg-navy-100 text-navy-600 border-navy-300"
    },
    {
      icon: FileText,
      title: "Immigration Exams",
      description: "Complete immigration medical examinations and required documentation.",
      color: "bg-coral-100 text-coral-600 border-coral-300"
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Full range of vaccines for children and adults, including flu shots and travel vaccines.",
      color: "bg-primary-100 text-primary-600 border-primary-300"
    },
    {
      icon: HeartPulse,
      title: "Lab Services",
      description: "On-site laboratory testing with quick results for accurate diagnosis.",
      color: "bg-medical-100 text-medical-600 border-medical-300"
    },
    {
      icon: Pill,
      title: "Medications",
      description: "Prescription services and medication management for chronic conditions.",
      color: "bg-navy-100 text-navy-600 border-navy-300"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Comprehensive Healthcare Services</h2>
          <p className="section-subtitle">
            Quality medical care with honesty, integrity, and passion
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`card p-6 group cursor-pointer border-2 ${service.color.split(' ')[2]}`}
              >
                <div className={`${service.color.split(' ')[0]} ${service.color.split(' ')[1]} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Primary Care Highlight with Image */}
        <div className="mt-16 card overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-full min-h-[300px]">
              <Image 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop" 
                alt="Primary Care Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-medical-600/90 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
                <h3 className="text-3xl font-bold mb-4">Saint Vil Medical Care Services</h3>
                <p className="text-lg mb-6">
                  Our Primary Care services provide comprehensive healthcare for adults 18 years and above.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Monday to Friday: 9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Ages 18 and above</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Located at 15415 N Florida Ave, Tampa FL 33613</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* CTA Side */}
            <div className="bg-gradient-to-br from-medical-600 to-primary-600 p-8 flex flex-col justify-center items-center text-white text-center">
              <div className="font-semibold mb-2 text-lg">Call for Appointment</div>
              <div className="text-4xl font-bold mb-6">(813) 264-5600</div>
              <button className="bg-white text-medical-600 px-8 py-4 rounded-lg font-bold hover:bg-medical-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Schedule Now
              </button>
              <p className="mt-6 text-sm text-medical-100">
                Walk-ins welcome • Same-day appointments available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
