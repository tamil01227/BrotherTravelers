import React, { useState } from 'react';
import { Users, Briefcase, Wind, Check, MessageCircle, Phone, Info } from 'lucide-react';
import { Language, Vehicle } from '../types/travel';
import { VEHICLES_DATA, BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';
import { VehicleCard } from '../components/VehicleCard';

interface VehiclesPageProps {
  language: Language;
  onOpenBookingModal: (prefill?: { vehicle?: string }) => void;
}

export const VehiclesPage: React.FC<VehiclesPageProps> = ({
  language,
  onOpenBookingModal,
}) => {
  const [capacityFilter, setCapacityFilter] = useState<'all' | 'small' | 'medium' | 'large'>('all');
  const t = TRANSLATIONS[language];

  const filteredVehicles = VEHICLES_DATA.filter((v) => {
    if (capacityFilter === 'small') return v.seatsCount <= 7;
    if (capacityFilter === 'medium') return v.seatsCount > 7 && v.seatsCount <= 16;
    if (capacityFilter === 'large') return v.seatsCount > 16;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <span>{language === 'ta' ? 'அனைத்து சொகுசு வாகனங்கள்' : 'Commercial Fleet Portfolio'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' ? 'எங்களின் சொகுசு வாகனங்கள்' : 'Our Tourist Vehicles & Coaches'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? '4 முதல் 21 பயணிகள் வரை பயணிக்க ஏற்ற சுத்தமான, குளிர்ந்த ஏசி வசதியுடன் கூடிய நவீன வாகனங்கள். கோவையில் எங்கும் இலவச பிக்கப் வசதி.'
            : 'Explore our fleet of impeccably maintained Force Travellers, Urbanias, SML tourist coaches, and luxury MPVs. 100% free doorstep pickup throughout Coimbatore.'}
        </p>

        {/* Pricing Strategy Notice */}
        <div className="mt-5 inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs">
          <Info className="w-4 h-4 text-sky-700 shrink-0" />
          <span>
            {language === 'ta'
              ? 'பயண தூரம் மற்றும் நாட்களுக்கு ஏற்ப நியாயமான சிறந்த கட்டணத்தை வாட்ஸ்அப்பில் அறியலாம்.'
              : 'Transparent, tailored quotations based on your specific itinerary. Click any vehicle to request a quick WhatsApp quotation.'}
          </span>
        </div>
      </div>

      {/* Capacity Filter Segmented Controls */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setCapacityFilter('all')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              capacityFilter === 'all'
                ? 'bg-white text-sky-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'ta' ? 'அனைத்து வாகனங்கள் (5)' : 'All Vehicles (5)'}
          </button>
          <button
            onClick={() => setCapacityFilter('small')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              capacityFilter === 'small'
                ? 'bg-white text-sky-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'ta' ? '7 சீட்டர் MPVs' : '7 Seater MPVs (Innova/Ertiga)'}
          </button>
          <button
            onClick={() => setCapacityFilter('medium')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              capacityFilter === 'medium'
                ? 'bg-white text-sky-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'ta' ? '14 - 16 சீட்டர் வேன்கள்' : '14–16 Seaters (Traveller/Urbania)'}
          </button>
          <button
            onClick={() => setCapacityFilter('large')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              capacityFilter === 'large'
                ? 'bg-white text-sky-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'ta' ? '21 சீட்டர் பஸ்கள்' : '21 Seater Buses (SML Coach)'}
          </button>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            language={language}
            onBookClick={(name) => onOpenBookingModal({ vehicle: name })}
          />
        ))}
      </div>

      {/* Fleet Amenities Summary Table */}
      <div className="mt-16 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="bg-slate-900 text-white p-5 sm:p-6">
          <h2 className="text-xl font-bold">
            {language === 'ta' ? 'வாகன ஒப்பீடு மற்றும் விவரங்கள்' : 'Fleet Comparison & Specifications'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Compare seating capacity, luggage capacity, and primary use cases across all 5 vehicles.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
              <tr>
                <th className="p-4">Vehicle Model</th>
                <th className="p-4">Seating Capacity</th>
                <th className="p-4">Luggage Capacity</th>
                <th className="p-4">Best For</th>
                <th className="p-4 text-right">Direct Enquiry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {VEHICLES_DATA.map((v) => (
                <tr key={v.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 font-bold text-slate-900">
                    {v.name}
                  </td>
                  <td className="p-4 text-slate-600">
                    {v.seatingCapacity}
                  </td>
                  <td className="p-4 text-slate-600">
                    {v.luggageCapacity}
                  </td>
                  <td className="p-4 text-slate-600">
                    {v.suitableFor[language][0]}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => onOpenBookingModal({ vehicle: v.name })}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-green-600 hover:bg-green-700 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Quote</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
