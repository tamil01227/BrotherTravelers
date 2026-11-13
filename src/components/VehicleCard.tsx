import React, { useState } from 'react';
import { Users, Briefcase, Wind, MessageCircle, Check, ChevronRight } from 'lucide-react';
import { Vehicle, Language } from '../types/travel';
import { TRANSLATIONS } from '../data/travelData';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  language: Language;
  onBookClick: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  language,
  onBookClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const t = TRANSLATIONS[language];

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateQuickWhatsAppUrl(vehicle.name, 'vehicle');
    openWhatsApp(url);
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col h-full">
      {/* Vehicle Image Container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        {!imageError ? (
          <img
            src={vehicle.image}
            alt={`${vehicle.name} tourist rental vehicle in Coimbatore`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-sky-50 text-slate-500 p-6 text-center">
            <span className="text-4xl mb-2">🚐</span>
            <span className="font-bold text-slate-800 text-base">{vehicle.name}</span>
            <span className="text-xs text-slate-500 mt-1">{vehicle.seatingCapacity}</span>
          </div>
        )}

        {/* Capacity Floating Tag */}
        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-sky-400" />
          <span>{vehicle.seatingCapacity}</span>
        </div>

        {/* Pricing Badge (Transparent "Request Best Quote" without fake prices) */}
        <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider">
          {t.fleetSection.requestQuote}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Title & Capacity */}
        <div className="mb-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
            {vehicle.name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <span>{vehicle.idealGroup}</span>
            <span aria-hidden="true">·</span>
            <span>{vehicle.luggageCapacity}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {vehicle.shortDescription[language]}
        </p>

        {/* Key Amenities */}
        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {language === 'ta' ? 'சிறப்பம்சங்கள்' : 'Vehicle Highlights'}
          </div>
          <div className="grid grid-cols-1 gap-1 text-xs text-slate-700">
            {vehicle.amenities[language].slice(0, 3).map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suitable Travel Types */}
        <div className="mb-5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            {language === 'ta' ? 'பொருத்தமான பயணங்கள்' : 'Suitable Travel Types'}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {vehicle.suitableFor[language].slice(0, 3).map((useCase, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>

        {/* Actions - Pushed to Bottom */}
        <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
          {/* Quick Enquire Popup Modal */}
          <button
            onClick={() => onBookClick(vehicle.name)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-sky-950 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors cursor-pointer"
          >
            <span>{language === 'ta' ? 'விவரம் பெற' : 'Enquire Form'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Direct WhatsApp Book Button */}
          <button
            onClick={handleQuickWhatsApp}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 transition-colors shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="truncate">{t.fleetSection.bookWhatsApp}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
