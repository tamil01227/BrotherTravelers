import React from 'react';
import { ChevronRight, Home, MapPin, CheckCircle, MessageCircle, Phone, ArrowLeft, Shield, Clock } from 'lucide-react';
import { Language, SEOLandingData } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS, SEO_LANDING_PAGES } from '../data/travelData';
import { VEHICLES_DATA } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface SEOLandingPageProps {
  pageData: SEOLandingData;
  language: Language;
  onNavigateHome: () => void;
  onNavigatePage: (tab: string, slug?: string) => void;
  onOpenBookingModal: (prefill?: { vehicle?: string; tour?: string }) => void;
}

export const SEOLandingPage: React.FC<SEOLandingPageProps> = ({
  pageData,
  language,
  onNavigateHome,
  onNavigatePage,
  onOpenBookingModal,
}) => {
  const t = TRANSLATIONS[language];
  const recommendedVehicle = VEHICLES_DATA.find((v) => v.id === pageData.recommendedVehicleId) || VEHICLES_DATA[0];

  const handleQuickWhatsApp = () => {
    const url = generateQuickWhatsAppUrl(pageData.h1[language], 'tour');
    openWhatsApp(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap pb-2">
        <button
          onClick={onNavigateHome}
          className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
        <button
          onClick={() => onNavigatePage('vehicles')}
          className="hover:text-slate-900 transition-colors cursor-pointer"
        >
          Services
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
        <span className="font-semibold text-sky-950 truncate max-w-xs sm:max-w-none">
          {pageData.h1[language]}
        </span>
      </nav>

      {/* Hero Title & Subtitle */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Coimbatore's Premier Choice · Free City Pickup</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {pageData.h1[language]}
          </h1>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {pageData.subtitle[language]}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBookingModal({ vehicle: recommendedVehicle.name, tour: pageData.h1[language] })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book on WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-sky-600/20 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content & Recommended Vehicle 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Unique Informational Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {language === 'ta' ? 'சேவை விவரங்கள் மற்றும் நன்மைகள்' : 'Complete Service Overview & Booking Guide'}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {pageData.content[language].map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Why Book with BROTHER'S TRAVELS Box */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">
                Key Advantages with BROTHER'S TRAVELS:
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free doorstep pickup across Coimbatore city and Coimbatore Airport</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Experienced drivers with dedicated ghat-road experience for Nilgiris & Kerala</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct quote from owner DINESHKUMAR R on WhatsApp (no hidden agent commission)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full All India tourist permits for hassle-free interstate boundary crossing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Frequently Asked Questions (FAQ) with Schema-ready structure */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-slate-900">
              {language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)' : 'Frequently Asked Questions (FAQs)'}
            </h2>

            <div className="space-y-4">
              {pageData.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold text-sm text-slate-900 mb-1">
                    {faq.question[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Featured Vehicle Card & Quick Action */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-24 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Recommended Vehicle for This Service
              </div>
              <VehicleCard
                vehicle={recommendedVehicle}
                language={language}
              />
            </div>

            {/* Quick Keyword Cloud / Related Searches */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 text-xs">
              <span className="font-bold text-slate-800 block mb-2">Related Search Queries:</span>
              <div className="flex flex-wrap gap-1.5">
                {pageData.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="bg-white text-slate-600 border border-slate-200 px-2.5 py-1 rounded-md text-[11px]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center space-y-3">
              <div className="font-bold text-sm text-green-950">
                Need Fast Confirmation for Today or Tomorrow?
              </div>
              <p className="text-xs text-green-800">
                Call or message owner DINESHKUMAR R directly for urgent vehicle allocations.
              </p>
              <button
                onClick={handleQuickWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-green-600 hover:bg-green-700 text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp (6381186895)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
