import React, { useState } from 'react';
import { Users, MapPin, Route, MessageCircle, Info } from 'lucide-react';
import { Language } from '../types/travel';
import { VEHICLES_DATA } from '../data/travelData';
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
          {language === 'ta' ? 'எங்களின் சொகுசு வாகனங்கள்' : 'Tourist Vehicle Rental in Coimbatore'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? '4 முதல் 21 பயணிகள் வரை பயணிக்க ஏற்ற சுத்தமான, குளிர்ந்த ஏசி வசதியுடன் கூடிய நவீன வாகனங்கள். கோவையில் எங்கும் இலவச பிக்கப் வசதி.'
            : 'Looking for vehicle rental in Coimbatore? Choose a 7-seater car, Force Traveller, Urbania or group coach for local events, airport transfers and outstation tours.'}
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

      <section aria-labelledby="coimbatore-trip-benefits" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="max-w-3xl mb-5">
          <h2 id="coimbatore-trip-benefits" className="text-lg sm:text-xl font-bold text-slate-950">
            {language === 'ta' ? 'கோவையிலிருந்து புறப்படும் பயணங்களுக்கு' : 'Plan your trip from Coimbatore'}
          </h2>
          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
            {language === 'ta'
              ? 'உள்ளூர் பிக்கப் முதல் வெளியூர் சுற்றுலா வரை, உங்கள் பயணத் தேவைக்கு ஏற்ற வாகனத்தைத் தேர்வு செய்யுங்கள்.'
              : 'One local starting point for Coimbatore vehicle hire, family trips, group tours and outstation travel.'}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <MapPin className="w-5 h-5 text-sky-700 mb-2" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              {language === 'ta' ? 'கோவையில் பிக்கப்' : 'Coimbatore pickup'}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {language === 'ta' ? 'கோவை மற்றும் சுற்றுப்புறங்களில் இலவச பிக்கப் வசதி.' : 'Free pickup across Coimbatore city and nearby suburbs.'}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <Users className="w-5 h-5 text-sky-700 mb-2" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              {language === 'ta' ? 'குடும்பம் அல்லது குழு' : 'Vehicles for your group'}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {language === 'ta' ? '7, 14, 16 மற்றும் 21 இருக்கை வாகனங்களை ஒப்பிடுங்கள்.' : 'Compare 7, 14, 16 and 21-seat options for your travellers.'}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <Route className="w-5 h-5 text-sky-700 mb-2" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              {language === 'ta' ? 'பிரபலமான சுற்றுலா வழிகள்' : 'Popular trip routes'}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {language === 'ta' ? 'ஊட்டி, வால்பாறை, மூணார் மற்றும் கோயில் சுற்றுலாக்கள்.' : 'Ask about Coimbatore trips to Ooty, Valparai, Munnar and temple destinations.'}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <MessageCircle className="w-5 h-5 text-sky-700 mb-2" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              {language === 'ta' ? 'பயண விவரத்தின் அடிப்படையில் விலை' : 'A quote for your itinerary'}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {language === 'ta' ? 'பயண தேதி, வழி மற்றும் வாகனத்தைப் பகிர்ந்து நேரடியாக விலை கேளுங்கள்.' : 'Share your dates, route and vehicle preference to request a quote. No prices are guessed online.'}
            </p>
          </div>
        </div>
      </section>

      <div>
        <h2 className="mb-3 text-sm font-bold text-slate-800">
          {language === 'ta' ? 'பயணிகளின் எண்ணிக்கையின்படி வாகனத்தைத் தேர்வு செய்யுங்கள்' : 'Choose a vehicle by group size'}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-semibold">
          <button
            onClick={() => setCapacityFilter('all')}
            aria-pressed={capacityFilter === 'all'}
            className={`min-h-12 rounded-xl border px-3 py-2 text-left transition-colors cursor-pointer ${
              capacityFilter === 'all'
                ? 'border-sky-700 bg-sky-50 text-sky-950'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {language === 'ta' ? 'அனைத்து வாகனங்கள் · 5' : 'All vehicles · 5'}
          </button>
          <button
            onClick={() => setCapacityFilter('small')}
            aria-pressed={capacityFilter === 'small'}
            className={`min-h-12 rounded-xl border px-3 py-2 text-left transition-colors cursor-pointer ${
              capacityFilter === 'small'
                ? 'border-sky-700 bg-sky-50 text-sky-950'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {language === 'ta' ? 'கார்கள் · 7 இருக்கைகள்' : 'Cars · up to 7 seats'}
          </button>
          <button
            onClick={() => setCapacityFilter('medium')}
            aria-pressed={capacityFilter === 'medium'}
            className={`min-h-12 rounded-xl border px-3 py-2 text-left transition-colors cursor-pointer ${
              capacityFilter === 'medium'
                ? 'border-sky-700 bg-sky-50 text-sky-950'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {language === 'ta' ? 'வேன்கள் · 14–16 இருக்கைகள்' : 'Vans · 14–16 seats'}
          </button>
          <button
            onClick={() => setCapacityFilter('large')}
            aria-pressed={capacityFilter === 'large'}
            className={`min-h-12 rounded-xl border px-3 py-2 text-left transition-colors cursor-pointer ${
              capacityFilter === 'large'
                ? 'border-sky-700 bg-sky-50 text-sky-950'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {language === 'ta' ? 'கோச் · 21 இருக்கைகள்' : 'Coach · 21 seats'}
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
