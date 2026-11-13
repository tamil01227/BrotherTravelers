import React, { useState } from 'react';
import { Users, Briefcase, MessageCircle, Check } from 'lucide-react';
import { Vehicle, Language } from '../types/travel';
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

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateQuickWhatsAppUrl(vehicle.name, 'vehicle');
    openWhatsApp(url);
  };

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col h-full">
      <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
        {!imageError ? (
          <img
            src={vehicle.image}
            alt={`${vehicle.name} available for trips from Coimbatore`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-500 p-6 text-center">
            <Briefcase className="w-8 h-8 mb-2 text-sky-700" aria-hidden="true" />
            <span className="font-bold text-slate-800 text-base">{vehicle.name}</span>
            <span className="text-xs text-slate-500 mt-1">{vehicle.seatingCapacity}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
            {vehicle.name}
          </h3>
          <span className="shrink-0 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-900">
            {vehicle.seatsCount} {language === 'ta' ? 'இருக்கைகள்' : 'seats'}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-500">
          {vehicle.idealGroup} <span aria-hidden="true">·</span> {vehicle.luggageCapacity}
        </p>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {vehicle.shortDescription[language]}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {vehicle.amenities[language].slice(0, 2).map((amenity) => (
            <span key={amenity} className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700">
              <Check className="w-3 h-3 shrink-0 text-emerald-700" aria-hidden="true" />
              {amenity}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700">
            <Users className="w-3 h-3 shrink-0 text-sky-700" aria-hidden="true" />
            {vehicle.suitableFor[language][0]}
          </span>
        </div>

        <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onBookClick(vehicle.name)}
            className="min-h-11 flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 transition-colors cursor-pointer"
          >
            <span>{language === 'ta' ? 'விலை கேட்க' : 'Get a quote'}</span>
          </button>
          <button
            onClick={handleQuickWhatsApp}
            className="min-h-11 flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="truncate">{language === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
