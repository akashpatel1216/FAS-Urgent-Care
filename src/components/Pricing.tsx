import { Check, CreditCard, Users, DollarSign, Heart } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Membership Patient",
      price: "$150",
      period: "Yearly",
      icon: Heart,
      bgColor: "bg-gradient-to-br from-coral-50 to-coral-100",
      borderColor: "border-coral-300",
      iconBg: "bg-coral-600",
      textColor: "text-coral-600",
      features: [
        "Unlimited visits for 1 year",
        "Priority scheduling",
        "Telemedicine included",
        "No hidden fees",
        "Family discounts available"
      ]
    },
    {
      title: "Self Pay Patients",
      price: "$99.99",
      period: "Per Visit",
      icon: DollarSign,
      bgColor: "bg-gradient-to-br from-medical-50 to-medical-100",
      borderColor: "border-medical-300",
      iconBg: "bg-medical-600",
      textColor: "text-medical-600",
      popular: true,
      features: [
        "No insurance needed",
        "Telemedicine or in-person",
        "Same-day appointments",
        "Transparent pricing",
        "*Price may vary based on visit"
      ]
    },
    {
      title: "Private Insurance",
      price: "Free",
      period: "With Coverage",
      icon: CreditCard,
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100",
      borderColor: "border-primary-300",
      iconBg: "bg-primary-600",
      textColor: "text-primary-600",
      features: [
        "We accept PPO plans",
        "Medicare accepted",
        "United Healthcare",
        "Cigna Healthcare",
        "And more insurances"
      ]
    },
    {
      title: "Medicaid Patients",
      price: "Free",
      period: "With Coverage",
      icon: Users,
      bgColor: "bg-gradient-to-br from-navy-50 to-navy-100",
      borderColor: "border-navy-300",
      iconBg: "bg-navy-700",
      textColor: "text-navy-700",
      features: [
        "Straight Medicaid accepted",
        "Florida Medicaid",
        "Sunshine Health",
        "Simply Healthcare",
        "Aetna Better Health"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Affordable Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the payment option that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`card relative overflow-hidden ${plan.bgColor} border-2 ${plan.borderColor} ${
                  plan.popular ? "ring-2 ring-medical-400 lg:scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-medical-600 text-white px-4 py-1 text-xs font-bold rounded-bl-xl">
                    POPULAR
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div className={`${plan.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {plan.title}
                  </h3>

                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.textColor}`}>
                      {plan.price}
                    </span>
                    <span className="text-navy-600 ml-2">/ {plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="text-medical-600 flex-shrink-0 mt-1" size={16} />
                        <span className="text-sm text-navy-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full ${plan.iconBg} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telemedicine Rates */}
        <div className="mt-12 bg-gradient-to-r from-medical-600 to-primary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Special Telemedicine Rates by State
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="font-bold text-lg mb-2">Florida</div>
              <div className="text-3xl font-bold mb-2">$100</div>
              <div className="text-sm text-medical-100">In-person or Telemedicine</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="font-bold text-lg mb-2">Georgia</div>
              <div className="text-3xl font-bold mb-2">$60</div>
              <div className="text-sm text-medical-100">Telemedicine Only</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="font-bold text-lg mb-2">Wisconsin</div>
              <div className="text-3xl font-bold mb-2">$60</div>
              <div className="text-sm text-medical-100">Telemedicine Only</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
