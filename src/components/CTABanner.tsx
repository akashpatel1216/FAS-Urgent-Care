import { MapPin } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-medical-600 p-4 rounded-xl">
              <MapPin size={28} />
            </div>
            <div>
              <div className="font-bold text-xl">Now Serving Multiple States</div>
              <div className="text-navy-300 font-medium">Florida • Georgia • Wisconsin</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="font-bold text-lg">Florida</div>
              <div className="text-sm text-navy-200">In-Person & Telemedicine</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="font-bold text-lg">Georgia</div>
              <div className="text-sm text-navy-200">Telemedicine $60</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="font-bold text-lg">Wisconsin</div>
              <div className="text-sm text-navy-200">Telemedicine $60</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
