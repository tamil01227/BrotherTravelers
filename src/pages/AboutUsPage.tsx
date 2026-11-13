import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageCircle, Award, Users, CheckCircle, Car } from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';

interface AboutUsPageProps {
  language: Language;
  onOpenBooking: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  language,
  onOpenBooking,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <span>{language === 'ta' ? 'நம்பகமான பயண பங்குதாரர்' : 'About BROTHER\'S TRAVELS'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' 
            ? 'அமைதியான, பாதுகாப்பான மற்றும் நம்பகமான பயணம்' 
            : 'Committed to Safe, Reliable & Comfortable Travel Across India'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? 'கோவை மாநகரை தலைமையிடமாக கொண்டு செயல்படும் பிரதர்ஸ் டிராவல்ஸ், உரிமையாளர் தினேஷ்குமார் ஆர் தலைமையில் இந்தியா முழுவதும் சிறப்பான சுற்றுலா வாகன சேவைகளை வழங்கி வருகிறது.'
            : 'Headquartered in Coimbatore, Tamil Nadu, BROTHER\'S TRAVELS is founded and actively managed by DINESHKUMAR R with a dedicated fleet of luxury passenger vehicles serving tourists, families, and organizations nationwide.'}
        </p>
      </div>

      {/* Founder & Business Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Visual Banner */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-4/3 lg:aspect-auto lg:h-full min-h-[320px]">
          <img
            src="/src/assets/images/fleet_force_urbania_1794284646206.jpg"
            alt="BROTHER'S TRAVELS Luxury Commercial Fleet"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
            <div className="text-white">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Proprietor & Operator</div>
              <div className="text-xl font-bold">{BUSINESS_INFO.owner}</div>
              <div className="text-xs text-slate-300">BROTHER'S TRAVELS, Coimbatore</div>
            </div>
          </div>
        </div>

        {/* Right Core Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">
              {language === 'ta' ? 'எங்கள் நிறுவனம் பற்றி' : 'Our Story & Operating Philosophy'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'ta'
                ? 'பிரதர்ஸ் டிராவல்ஸ் வாடிக்கையாளர்களின் தேவைகளை அறிந்து, எவ்வித மறைமுக கட்டணங்களும் இன்றி மிக நேர்மையான முறையில் தொடங்கப்பட்டது. குடும்ப சுற்றுலா, திருமண நிகழ்வுகள், பள்ளி-கல்லூரி சுற்றுலா மற்றும் ஆன்மீக பயணங்களுக்கு தேவையான அனைத்து வாகனங்களையும் ஒரே இடத்தில் வழங்குகிறோம்.'
                : 'Founded with the core belief that long-distance travel should be relaxing rather than stressful, BROTHER\'S TRAVELS delivers transparent vehicle rentals with zero hidden commissions. Every trip is planned meticulously—from early morning Coimbatore doorstep pickup to smooth highway cruising and safe hill ascent.'}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'ta'
                ? 'எங்களின் அனைத்து வாகனங்களும் முறையான ஆவணங்கள், அகில இந்திய சுற்றுலா அனுமதி மற்றும் குளிர்ந்த ஏசி வசதியுடன் பராமரிக்கப்படுகின்றன.'
                : 'We operate pristine 14-seater Force Travellers, next-generation 16-seater Force Urbanias, 21-seater SML Tourist Coaches, and premium 7-seater Toyota Innovas and Maruti Ertigas. Every passenger seat is inspected for clean upholstery, functional air conditioning, and smooth suspension.'}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="text-2xl font-extrabold text-sky-900">100%</div>
              <div className="text-xs text-slate-600 mt-0.5">Free Coimbatore Pickup</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="text-2xl font-extrabold text-sky-900">All India</div>
              <div className="text-xs text-slate-600 mt-0.5">National Tourist Permits</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="text-2xl font-extrabold text-sky-900">8+ Yrs</div>
              <div className="text-xs text-slate-600 mt-0.5">Ghat-Road Driving Expertise</div>
            </div>
          </div>

          {/* Direct Contact Button */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact via WhatsApp</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm border border-slate-300 text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-700" />
              <span>Call DINESHKUMAR R ({BUSINESS_INFO.primaryPhone})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Verified Business Information Card */}
      <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold text-sky-950 mb-4">
          {language === 'ta' ? 'அங்கீகரிக்கப்பட்ட வணிக தகவல்கள்' : 'Verified Business Details'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div>
            <span className="font-semibold text-slate-500 block">Registered Trade Name:</span>
            <span className="font-bold text-slate-900 text-base">BROTHER'S TRAVELS</span>
          </div>

          <div>
            <span className="font-semibold text-slate-500 block">Managing Proprietor:</span>
            <span className="font-bold text-slate-900 text-base">{BUSINESS_INFO.owner}</span>
          </div>

          <div>
            <span className="font-semibold text-slate-500 block">Primary & WhatsApp:</span>
            <span className="font-bold text-slate-900 text-base">{BUSINESS_INFO.primaryPhone}</span>
          </div>

          <div>
            <span className="font-semibold text-slate-500 block">Additional Contact Numbers:</span>
            <span className="font-semibold text-slate-800">{BUSINESS_INFO.additionalPhones.join(', ')}</span>
          </div>

          <div>
            <span className="font-semibold text-slate-500 block">Primary Service Coverage:</span>
            <span className="font-semibold text-slate-800">All Over India (Interstate Commercial Carriage)</span>
          </div>

          <div>
            <span className="font-semibold text-slate-500 block">Coimbatore Special Facility:</span>
            <span className="font-semibold text-emerald-700 font-bold">100% Free Pickup Across Coimbatore</span>
          </div>
        </div>
      </div>
    </div>
  );
};
