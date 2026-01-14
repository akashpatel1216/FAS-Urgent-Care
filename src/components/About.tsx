import { Heart, Target, Award, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
      color: "bg-coral-100 text-coral-600"
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Honest and transparent healthcare services with no hidden costs or surprises.",
      color: "bg-primary-100 text-primary-600"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality medical care to all our patients.",
      color: "bg-medical-100 text-medical-600"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Affordable healthcare for everyone, regardless of insurance status.",
      color: "bg-navy-100 text-navy-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Urgent Care Center in Tampa, Florida
            </h2>
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p className="text-lg">
                F.A.S. Urgent Care offers telemedicine to patients in the whole state of Florida. 
                We also offer in-person visits for patients in the Tampa Bay Area.
              </p>
              <p>
                Since 2017, we have been dedicated to providing quality healthcare services with 
                honesty, integrity, and passion. Our mission is to deliver ultimate, compassionate 
                care to all patients, regardless of their insurance status or ability to pay.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 bg-gradient-to-br from-medical-50 to-medical-100 rounded-xl p-6 border-l-4 border-medical-600">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Our Mission</h3>
              <p className="text-navy-700 italic font-medium">
                "To provide the ultimate, compassionate care to all patients."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-medical-600 mb-1">7+</div>
                <div className="text-sm text-navy-600">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-coral-600 mb-1">3</div>
                <div className="text-sm text-navy-600">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">24/7</div>
                <div className="text-sm text-navy-600">Care Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Values */}
          <div>
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="card p-6"
                  >
                    <div className="flex gap-4">
                      <div className={`${value.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-navy-600 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info Box */}
            <div className="mt-6 bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3">What We Do</h4>
              <p className="text-sm leading-relaxed text-navy-200">
                We provide comprehensive urgent care and primary care services including 
                telemedicine consultations, in-person visits, DOT physicals, immigration 
                examinations, vaccinations, and much more. Our team is dedicated to making 
                quality healthcare accessible and affordable for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
