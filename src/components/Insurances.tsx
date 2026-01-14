import { Shield, CheckCircle } from "lucide-react";

export default function Insurances() {
  const urgentCareInsurances = [
    "Aetna Better Health",
    "United Healthcare",
    "Florida Blue Medicare",
    "Simply Healthcare",
    "Sunshine Health",
    "Straight Medicare",
    "Florida Medicaid"
  ];

  const primaryCareInsurances = [
    "Cigna Healthcare",
    "Straight Medicare",
    "Florida Medicaid"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-medical-600 p-4 rounded-xl shadow-lg">
              <Shield className="text-white" size={40} />
            </div>
          </div>
          <h2 className="section-title">Insurance We Accept</h2>
          <p className="section-subtitle">
            We accept PPO, Medicare, and Medicaid from various insurance providers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Urgent Care Insurances */}
          <div className="card p-8 bg-gradient-to-br from-medical-50 to-white border-2 border-medical-200">
            <div className="inline-block bg-medical-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-6">
              F.A.S URGENT CARE CENTER
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              In Network With
            </h3>
            <div className="space-y-3">
              {urgentCareInsurances.map((insurance, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-medical-50 transition-colors duration-200 border border-gray-200"
                >
                  <CheckCircle className="text-medical-600 flex-shrink-0" size={20} />
                  <span className="font-semibold text-navy-700">{insurance}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-medical-100 border-l-4 border-medical-600 rounded-lg">
              <p className="text-sm text-navy-700">
                <strong>Note:</strong> We accept PPO, Medicare, and Medicaid patients from all these private insurances.
              </p>
            </div>
          </div>

          {/* Primary Care Insurances */}
          <div className="card p-8 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
            <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-6">
              F.A.S PRIMARY CARE
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              In Network With
            </h3>
            <div className="space-y-3">
              {primaryCareInsurances.map((insurance, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors duration-200 border border-gray-200"
                >
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="font-semibold text-navy-700">{insurance}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-primary-100 border-l-4 border-primary-600 rounded-lg">
                <h4 className="font-bold text-navy-900 mb-2">Saint Vil Medical Care</h4>
                <ul className="text-sm text-navy-700 space-y-1">
                  <li>• Monday - Friday: 9:00 AM - 5:00 PM</li>
                  <li>• Ages 18 and above</li>
                  <li>• Call (813) 264-5600 for appointments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Pay Option */}
        <div className="mt-12 bg-gradient-to-r from-coral-600 to-coral-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">No Insurance? No Problem!</h3>
          <p className="text-lg mb-8 text-coral-100">
            We offer affordable self-pay options and yearly memberships for patients without insurance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[200px] border border-white/20">
              <div className="text-4xl font-bold mb-2">$99.99</div>
              <div className="text-sm text-coral-100">Per Visit (Self-Pay)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[200px] border border-white/20">
              <div className="text-4xl font-bold mb-2">$150</div>
              <div className="text-sm text-coral-100">Yearly Membership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
