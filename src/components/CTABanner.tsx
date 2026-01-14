import { MapPin } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 text-center lg:text-left">
            <div className="bg-medical-600 p-3 sm:p-4 rounded-xl">
              <MapPin size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl">Now Serving Multiple States</div>
              <div className="text-navy-300 font-medium text-sm sm:text-base">Florida • Georgia • Wisconsin</div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="font-bold text-sm sm:text-lg">Florida</div>
              <div className="text-xs sm:text-sm text-navy-200 hidden sm:block">In-Person & Telemedicine</div>
              <div className="text-xs text-navy-200 sm:hidden">Both</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="font-bold text-sm sm:text-lg">Georgia</div>
              <div className="text-xs sm:text-sm text-navy-200">Telemedicine $60</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="font-bold text-sm sm:text-lg">Wisconsin</div>
              <div className="text-xs sm:text-sm text-navy-200">Telemedicine $60</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
