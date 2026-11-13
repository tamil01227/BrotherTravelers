import React from 'react';
import { MapPin, Clock, Calendar, ImageOff, ArrowRight } from 'lucide-react';
import { Language } from '../types/travel';
import { POPULAR_DESTINATIONS, TRANSLATIONS } from '../data/travelData';

interface DestinationsPageProps {
  language: Language;
  onOpenBookingModal: (prefill?: { destination?: string; tour?: string }) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  language,
  onOpenBookingModal,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <MapPin className="w-3.5 h-3.5" />
          <span>Top South India Circuits from Coimbatore</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' ? 'பிரபல சுற்றுலா தலங்கள்' : 'Tourist Destinations & Getaways'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? 'கோவையிலிருந்து எளிதாக செல்லக்கூடிய மலைவாசஸ்தலங்கள், கடற்கரைகள் மற்றும் ஆன்மீக தலங்கள் பற்றிய விரிவான வழிகாட்டி.'
            : 'Explore scenic hill escapes, wildlife corridors, and sacred temple circuits easily accessible with BROTHER\'S TRAVELS door-to-door vehicle rentals.'}
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POPULAR_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image banner */}
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                {dest.image ? (
                  <img
                    src={dest.image}
                    alt={`${dest.name[language]} tourism from Coimbatore`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500">
                    <ImageOff className="h-6 w-6" aria-hidden="true" />
                    <span className="text-xs">{language === 'ta' ? 'படம் இல்லை' : 'Photo unavailable'}</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                  {dest.state}
                </div>
                <div className="absolute top-3 right-3 bg-sky-900/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  {dest.distanceFromCoimbatore} from CBE
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {dest.name[language]}
                </h2>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{dest.approxTravelTime}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Best: {dest.bestTimeToVisit}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {dest.description[language]}
                </p>

                {/* Top Attractions List */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Top Sightseeing Sights
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {dest.topAttractions.map((attraction, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 mt-4">
              <button
                onClick={() => onOpenBookingModal({ destination: dest.name[language] })}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-[#203B4A] transition-colors hover:bg-amber-600 cursor-pointer"
              >
                <span>{language === 'ta' ? 'என் பயணத்தைத் திட்டமிடுங்கள்' : 'Plan My Trip'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
