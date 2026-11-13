import React, { useState } from 'react';
import { ArrowRight, Compass, MapPin } from 'lucide-react';
import { Language, TourCategory } from '../types/travel';
import { TOUR_PACKAGES_DATA } from '../data/travelData';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface TourPackagesPageProps {
  language: Language;
  onOpenBookingModal: (prefill?: { tour?: string; vehicle?: string; destination?: string }) => void;
}

export const TourPackagesPage: React.FC<TourPackagesPageProps> = ({ language, onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const isTamil = language === 'ta';
  const categories: { id: string; labelEn: string; labelTa: string }[] = [
    { id: 'all', labelEn: 'All route ideas', labelTa: 'அனைத்து வழித்தடங்கள்' },
    { id: 'hill_station', labelEn: 'Hill stations', labelTa: 'மலைப்பகுதிகள்' },
    { id: 'temple', labelEn: 'Temple routes', labelTa: 'கோயில் வழித்தடங்கள்' },
    { id: 'outstation', labelEn: 'Outstation', labelTa: 'வெளியூர்' },
    { id: 'wedding', labelEn: 'Weddings & events', labelTa: 'திருமணம் மற்றும் நிகழ்வுகள்' },
    { id: 'all_india', labelEn: 'Long-distance trips', labelTa: 'நீண்ட தூரப் பயணங்கள்' },
  ];
  const filteredRoutes = TOUR_PACKAGES_DATA.filter(
    (route) => selectedCategory === 'all' || route.category === selectedCategory as TourCategory
  );

  const openRouteEnquiry = (title: string) => {
    openWhatsApp(generateQuickWhatsAppUrl(title, 'tour'), 'tour_quote');
  };

  return (
    <main className="mx-auto max-w-7xl space-y-9 px-4 py-10 sm:px-6 sm:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-900">
          <Compass className="h-4 w-4" aria-hidden="true" />
          {isTamil ? 'கோயம்புத்தூரிலிருந்து பயண வழித்தடங்கள்' : 'Route ideas from Coimbatore'}
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#142B49] sm:text-5xl">
          {isTamil ? 'உங்கள் பயணத் திட்டத்தை உருவாக்குங்கள்' : 'Build a trip around your plans'}
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
          {isTamil
            ? 'கீழே உள்ள வழித்தடங்களைத் தொடக்க யோசனைகளாகப் பாருங்கள். பயண நாட்கள், வாகனக் கிடைக்கும் நிலை மற்றும் கட்டணம் நேரடியாக உறுதி செய்யப்படும்.'
            : 'Use these example routes as starting points. Share your dates, group size and preferred stops to discuss a suitable itinerary; duration, availability and quotation are confirmed directly.'}
        </p>
      </header>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            aria-pressed={selectedCategory === category.id}
            className={`min-h-11 shrink-0 rounded-xl px-4 py-2 text-sm font-semibold ${
              selectedCategory === category.id
                ? 'bg-[#142B49] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isTamil ? category.labelTa : category.labelEn}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 lg:grid-cols-2">
        {filteredRoutes.map((route) => (
          <li key={route.id} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-teal-800">
              {route.categoryLabel[language]}
            </p>
            <h2 className="mt-2 text-xl font-bold leading-snug text-slate-950">{route.title[language]}</h2>
            <div className="mt-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                <MapPin className="h-4 w-4 text-teal-700" aria-hidden="true" />
                {isTamil ? 'மாதிரி வழித்தடம்' : 'Example route'}
              </p>
              <ol className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-700">
                {route.destinations.map((destination, index) => (
                  <React.Fragment key={`${route.id}-${destination}`}>
                    <li className="rounded-lg bg-slate-100 px-2.5 py-1.5">{destination}</li>
                    {index < route.destinations.length - 1 && <li aria-hidden="true" className="text-slate-400">→</li>}
                  </React.Fragment>
                ))}
              </ol>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {isTamil
                ? 'விரும்பும் நிறுத்தங்கள் மற்றும் பயணத் தேவைகளைப் பகிர்ந்து தனிப்பயன் திட்டத்தைக் கேளுங்கள்.'
                : 'Share your preferred stops and travel requirements to ask about a customised plan for this route.'}
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => onOpenBookingModal({ tour: route.title[language] })}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#142B49] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#203b5e]"
              >
                {isTamil ? 'பயண விவரங்களைக் கொடுக்கவும்' : 'Plan with trip details'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => openRouteEnquiry(route.title.en)}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {isTamil ? 'வாட்ஸ்அப்பில் விசாரிக்கவும்' : 'Ask on WhatsApp'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
