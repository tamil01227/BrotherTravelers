import React, { useState } from 'react';
import { Compass, Clock, MapPin, CheckCircle, Car, Users, MessageCircle, ArrowRight, Filter } from 'lucide-react';
import { Language, TourCategory } from '../types/travel';
import { TOUR_PACKAGES_DATA, TRANSLATIONS, BUSINESS_INFO } from '../data/travelData';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface TourPackagesPageProps {
  language: Language;
  onOpenBookingModal: (prefill?: { tour?: string; vehicle?: string; destination?: string }) => void;
}

export const TourPackagesPage: React.FC<TourPackagesPageProps> = ({
  language,
  onOpenBookingModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = TRANSLATIONS[language];

  const categories: { id: string; labelEn: string; labelTa: string }[] = [
    { id: 'all', labelEn: 'All Tours', labelTa: 'அனைத்து சுற்றுலாகள்' },
    { id: 'hill_station', labelEn: 'Hill Station Trips', labelTa: 'மலை வாசஸ்தல சுற்றுலா' },
    { id: 'temple', labelEn: 'Temple Pilgrimages', labelTa: 'ஆன்மீக யாத்திரை' },
    { id: 'outstation', labelEn: 'Outstation & Kerala', labelTa: 'கேரளா & வெளிவட்டாரம்' },
    { id: 'wedding', labelEn: 'Wedding & Events', labelTa: 'திருமண போக்குவரத்து' },
    { id: 'all_india', labelEn: 'All India Tours', labelTa: 'அகில இந்திய சுற்றுலா' },
  ];

  const filteredPackages = TOUR_PACKAGES_DATA.filter((pkg) => {
    if (selectedCategory === 'all') return true;
    return pkg.category === selectedCategory;
  });

  const handleQuickWhatsApp = (pkgTitle: string) => {
    const url = generateQuickWhatsAppUrl(pkgTitle, 'tour');
    openWhatsApp(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated South & All-India Itineraries</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' ? 'பிரபலமான சுற்றுலா திட்டங்கள்' : 'Tour Packages & Custom Charters'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? 'கோவையிலிருந்து தொடங்கும் மலைவாசஸ்தல சுற்றுலா, கோயில் யாத்திரைகள் மற்றும் அகில இந்திய பயணங்களுக்கான பிரத்யேக வாகன சேவைகள்.'
            : 'Handcrafted itineraries departing from Coimbatore with 100% free doorstep pickup. Customized for family comfort, group pilgrimages, and scenic hill station expeditions.'}
        </p>
      </div>

      {/* Category Filter Tabs (Horizontal swipe on mobile) */}
      <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-sky-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {language === 'ta' ? cat.labelTa : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Tour Packages Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="p-6 sm:p-8 space-y-4">
              {/* Category & Duration Row */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-md">
                  {pkg.categoryLabel[language]}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{pkg.duration[language]}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {pkg.title[language]}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pkg.description[language]}
              </p>

              {/* Starting & Pickup */}
              <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg font-medium">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Starting Point: <strong>{pkg.startingFrom}</strong></span>
              </div>

              {/* Key Itinerary Route */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Route Destinations
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700 font-medium">
                  {pkg.destinations.map((dest, i) => (
                    <React.Fragment key={i}>
                      <span className="bg-slate-100 px-2.5 py-1 rounded-md">{dest}</span>
                      {i < pkg.destinations.length - 1 && <span className="text-slate-400">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Trip Highlights
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {pkg.highlights[language].map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Fleet */}
              <div className="pt-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Recommended Vehicles: </span>
                <span>{pkg.recommendedVehicles.join(', ')}</span>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                <span className="font-bold text-slate-900 block">Personalized Package Quote</span>
                <span>Fuel, toll & permit options included transparently</span>
              </div>

              <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onOpenBookingModal({ tour: pkg.title[language] })}
                  className="min-h-[44px] px-4 py-2.5 rounded-lg text-xs font-bold text-sky-950 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
                >
                  Custom Plan
                </button>
                <button
                  onClick={() => handleQuickWhatsApp(pkg.title[language])}
                  className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 transition-colors shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span className="truncate">WhatsApp Quote</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
