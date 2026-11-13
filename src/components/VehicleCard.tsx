import React, { useState } from 'react';
import { Users, Briefcase, MessageCircle, Check, BadgeCheck } from 'lucide-react';
import { Vehicle, Language } from '../types/travel';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  language: Language;
  isRecommended?: boolean;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  language,
  isRecommended = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const displayName = vehicle.name.split(' – ')[0];

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateQuickWhatsAppUrl(vehicle.name, 'vehicle');
    openWhatsApp(url);
  };

  return (
    <article className={`group bg-white rounded-2xl border overflow-hidden shadow-xs flex flex-col h-full transition-colors ${
      isRecommended ? 'border-sky-700 ring-2 ring-sky-700/20' : 'border-slate-200'
    }`}>
      <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
        {!imageError ? (
          <img
            src={vehicle.image}
            alt={`${displayName} available for trips from Coimbatore`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-500 p-6 text-center">
            <Briefcase className="w-8 h-8 mb-2 text-sky-700" aria-hidden="true" />
            <span className="font-bold text-slate-800 text-base">{displayName}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {vehicle.category[language]}
            </p>
            <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-950 leading-snug">
              {displayName}
            </h3>
          </div>
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-800">
            {language === 'ta' ? `${vehicle.passengerRange.max} பயணிகள் வரை` : `Up to ${vehicle.passengerRange.max} passengers`}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-500">
          {vehicle.luggageCapacity[language]}
        </p>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {vehicle.shortDescription[language]}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {vehicle.amenities[language].slice(0, 2).map((amenity) => (
            <span key={amenity} className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700">
              <Check className="w-3 h-3 shrink-0 text-teal-700" aria-hidden="true" />
              {amenity}
            </span>
          ))}
          {vehicle.suitableFor[language][0] && (
            <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700">
              <Users className="w-3 h-3 shrink-0 text-sky-700" aria-hidden="true" />
              {vehicle.suitableFor[language][0]}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
          {isRecommended && (
            <p className="col-span-2 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-900" role="status">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              {language === 'ta' ? 'உங்கள் குழுவிற்கு ஏற்ற இருக்கைகள்' : 'Fits your group size'}
            </p>
          )}
          <button
            onClick={handleQuickWhatsApp}
            className="col-span-2 min-h-12 flex items-center justify-center gap-2 rounded-xl bg-[#203B4A] px-3 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#142B49] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#203B4A] cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>{vehicle.whatsappLabel[language]}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
