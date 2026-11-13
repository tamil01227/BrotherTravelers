import React, { useState } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Users, 
  Car, 
  ShieldCheck, 
  ChevronRight,
  Route,
  Headset,
  ImageOff
} from 'lucide-react';
import { Language, BookingEnquiry } from '../types/travel';
import { 
  BUSINESS_INFO, 
  POPULAR_DESTINATIONS, 
  TRANSLATIONS 
} from '../data/travelData';
import { VEHICLES_DATA } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import heroImage from '../assets/images/hero_travel_coimbatore_1794284646361-optimized.jpg';
import { generateWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import { getPassengerRecommendation } from '../utils/vehicleRecommendations';

interface HomePageProps {
  language: Language;
  onNavigate: (tab: string, slug?: string) => void;
  onOpenBookingModal: (prefill?: {
    vehicle?: string;
    tour?: string;
    destination?: string;
    pickupLocation?: string;
    travelDate?: string;
    passengers?: string | number;
  }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onNavigate,
  onOpenBookingModal,
}) => {
  const t = TRANSLATIONS[language];

  const [searchDestination, setSearchDestination] = useState('');
  const [searchPickup, setSearchPickup] = useState('Coimbatore');
  const [searchDate, setSearchDate] = useState('');
  const [searchPassengers, setSearchPassengers] = useState('');
  const [searchVehicle, setSearchVehicle] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripDuration, setTripDuration] = useState('');
  const [tripPurpose, setTripPurpose] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enquiry: BookingEnquiry = {
      customerName: '',
      mobileNumber: '',
      pickupLocation: searchPickup.trim(),
      destination: searchDestination.trim(),
      travelDate: searchDate,
      returnDate,
      duration: tripDuration,
      passengers: Number(searchPassengers),
      selectedVehicle: searchVehicle,
      travelType: tripPurpose || 'Not specified',
      additionalRequirements,
    };
    openWhatsApp(generateWhatsAppUrl(enquiry), 'trip_form');
    setFormMessage(language === 'ta'
      ? 'உங்கள் பயண விவரங்கள் வாட்ஸ்அப்பில் தயாராக உள்ளன. சரிபார்த்து அனுப்புங்கள்.'
      : 'Your trip details are ready in WhatsApp. Review the enquiry and send it there.');
  };

  const passengerRecommendation = getPassengerRecommendation(searchPassengers);
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  const minTravelDate = today.toISOString().slice(0, 10);

  return (
    <div className="space-y-10 sm:space-y-16 pb-8">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-950 tracking-tight text-balance leading-[1.12]">
              {language === 'ta' ? 'கோவையில் குழுப் பயணம் மற்றும் வாகன வாடகை' : 'Group Travel & Vehicle Rental in Coimbatore'}
            </h1>
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-slate-600 max-w-xl leading-relaxed text-balance">
              {language === 'ta'
                ? 'குடும்பச் சுற்றுலா, குழுப் பயணம் மற்றும் வெளியூர் பயணங்களுக்கு வசதியான, நம்பகமான வாகனங்கள்.'
                : 'Comfortable and reliable vehicles for family trips, group tours and outstation journeys across India.'}
            </p>
            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('trip-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="min-h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm sm:text-base font-bold text-[#203B4A] shadow-sm transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#203B4A] cursor-pointer"
              >
                <span>{language === 'ta' ? 'இலவச விலை கேளுங்கள்' : 'Get Free Quote'}</span>
              </button>
              <button
                onClick={() => onNavigate('vehicles')}
                className="min-h-12 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm sm:text-base font-bold text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#203B4A] cursor-pointer"
              >
                <Car className="h-5 w-5 text-sky-700" aria-hidden="true" />
                <span>{language === 'ta' ? 'வாகனங்களைப் பாருங்கள்' : 'Explore Vehicles'}</span>
              </button>
            </div>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm text-slate-700">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />{language === 'ta' ? 'கோயம்புத்தூரை மையமாகக் கொண்ட பயணங்கள்' : 'Trips starting in Coimbatore'}</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />{language === 'ta' ? 'பயண விவரங்களுடன் வாகன விருப்பங்கள்' : 'Vehicle options matched to trip details'}</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />{language === 'ta' ? 'பல குழு அளவுகளுக்கான வாகனங்கள்' : 'Vehicles for different group sizes'}</span>
              <span className="inline-flex items-center gap-2"><Headset className="h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />{language === 'ta' ? 'நேரடி முன்பதிவு உதவி' : 'Direct booking assistance'}</span>
              <span className="inline-flex items-center gap-2 sm:col-span-2"><Route className="h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />{language === 'ta' ? 'வெளியூர் மற்றும் மாநிலங்களுக்கு இடையிலான பயணங்கள்' : 'Outstation and interstate travel'}</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-w-0">
            <img
              src={heroImage}
              alt="Scenic Ooty hill country, a popular trip from Coimbatore"
              className="w-full aspect-[16/10] object-cover rounded-2xl sm:rounded-3xl shadow-md"
              width="1200"
              height="750"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section id="trip-enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
          <div className="mb-5">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              {language === 'ta' ? 'உங்கள் பயணத்திற்கான விலை கேளுங்கள்' : 'Plan your trip and get a quote'}
            </h2>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              {language === 'ta'
                ? 'பயண விவரங்களைப் பகிர்ந்து தனிப்பயன் விலை கேளுங்கள். ஆன்லைனில் விலை அல்லது வாகனக் கிடைக்கும் நிலை ஊகிக்கப்படாது.'
                : 'Share your trip details to request a customised quotation. Prices and vehicle availability are not estimated online.'}
            </p>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            onInvalid={() => setFormMessage(language === 'ta'
              ? 'தொடர்வதற்கு தேவையான பயண விவரங்களை நிரப்புங்கள்.'
              : 'Please complete the required trip details to continue.')}
            onInput={() => setFormMessage('')}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
          >
            <div className="lg:col-span-2">
              <label htmlFor="search-pickup" className="mb-1 block text-xs font-semibold text-slate-700">
                {language === 'ta' ? 'பிக்கப் இடம்' : 'Pickup location'} <span aria-hidden="true">*</span>
              </label>
              <input
                id="search-pickup"
                type="text"
                value={searchPickup}
                onChange={(e) => setSearchPickup(e.target.value)}
                autoComplete="address-level2"
                required
                className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm"
              />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="search-destination" className="mb-1 block text-xs font-semibold text-slate-700">
                {language === 'ta' ? 'செல்லும் இடம்' : 'Destination'} <span aria-hidden="true">*</span>
              </label>
              <input
                id="search-destination"
                type="text"
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
                placeholder={language === 'ta' ? 'எ.கா. ஊட்டி' : 'e.g. Ooty or Munnar'}
                required
                className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm"
              />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="search-date" className="mb-1 block text-xs font-semibold text-slate-700">
                {language === 'ta' ? 'பயண தேதி' : 'Travel date'} <span aria-hidden="true">*</span>
              </label>
              <input
                id="search-date"
                type="date"
                value={searchDate}
                min={minTravelDate}
                onChange={(e) => setSearchDate(e.target.value)}
                required
                className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm"
              />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="search-passengers" className="mb-1 block text-xs font-semibold text-slate-700">
                {language === 'ta' ? 'பயணிகள் எண்ணிக்கை' : 'Number of passengers'} <span aria-hidden="true">*</span>
              </label>
              <input
                id="search-passengers"
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                value={searchPassengers}
                onChange={(e) => setSearchPassengers(e.target.value)}
                required
                aria-describedby="passenger-suggestion"
                className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm"
              />
              <p id="passenger-suggestion" className="mt-2 min-h-5 text-xs text-slate-600" aria-live="polite">
                {passengerRecommendation.status === 'single' && (
                  <>
                    {language === 'ta' ? 'பரிந்துரை: ' : 'Suggested option: '}
                    {passengerRecommendation.items[0].vehicle.name}
                  </>
                )}
                {passengerRecommendation.status === 'combination' && (
                  <>
                    {language === 'ta' ? 'குழு கொள்ளளவு பரிந்துரை: ' : 'Capacity-based suggestion: '}
                    {passengerRecommendation.items.map(({ vehicle, quantity }) =>
                      `${quantity > 1 ? `${quantity} × ` : ''}${vehicle.name}`
                    ).join(' + ')}
                    {language === 'ta'
                      ? ' · இது கொள்ளளவு அடிப்படையிலான பரிந்துரை; வாகனக் கிடைக்கும் நிலை மற்றும் பிரிப்பை உறுதிப்படுத்த எங்களைத் தொடர்புகொள்ளுங்கள்.'
                      : ' · Capacity suggestion only; contact us to confirm availability and the vehicle split.'}
                  </>
                )}
                {passengerRecommendation.status === 'invalid' && (
                  language === 'ta'
                    ? 'பரிந்துரையைப் பெற 0-ஐ விட அதிகமான முழு எண்ணை உள்ளிடுங்கள்.'
                    : 'Enter a whole number greater than 0 to see a vehicle suggestion.'
                )}
              </p>
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="search-vehicle" className="mb-1 block text-xs font-semibold text-slate-700">
                {language === 'ta' ? 'விரும்பும் வாகனம்' : 'Vehicle preference'} <span aria-hidden="true">*</span>
              </label>
              <select
                id="search-vehicle"
                value={searchVehicle}
                onChange={(e) => setSearchVehicle(e.target.value)}
                required
                className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm"
              >
                <option value="" disabled>{language === 'ta' ? 'வாகனத்தைத் தேர்வு செய்யுங்கள்' : 'Choose a vehicle option'}</option>
                <option value="Any available">{language === 'ta' ? 'வாகனத்தைப் பரிந்துரைக்கவும்' : 'Please recommend a vehicle'}</option>
                {VEHICLES_DATA.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.name}>{vehicle.name}</option>
                ))}
              </select>
            </div>
            <details className="sm:col-span-2 lg:col-span-6">
              <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold text-sky-950">
                {language === 'ta' ? 'கூடுதல் பயண விவரங்களைச் சேர்க்கவும் (விருப்பம்)' : 'Add optional trip details'}
              </summary>
              <div className="grid grid-cols-1 gap-4 border-t border-slate-200 pt-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label htmlFor="return-date" className="mb-1 block text-xs font-semibold text-slate-700">{language === 'ta' ? 'திரும்பும் தேதி' : 'Return date'}</label>
                  <input id="return-date" type="date" min={searchDate || minTravelDate} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="trip-duration" className="mb-1 block text-xs font-semibold text-slate-700">{language === 'ta' ? 'பயண காலம்' : 'Trip duration'}</label>
                  <input id="trip-duration" type="text" value={tripDuration} onChange={(e) => setTripDuration(e.target.value)} placeholder={language === 'ta' ? 'எ.கா. 3 நாட்கள்' : 'e.g. 3 days'} className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="trip-purpose" className="mb-1 block text-xs font-semibold text-slate-700">{language === 'ta' ? 'பயண நோக்கம்' : 'Trip purpose'}</label>
                  <select id="trip-purpose" value={tripPurpose} onChange={(e) => setTripPurpose(e.target.value)} className="min-h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm">
                    <option value="">{language === 'ta' ? 'தேர்வு செய்யுங்கள்' : 'Select if useful'}</option>
                    <option value="Family">{language === 'ta' ? 'குடும்பம்' : 'Family'}</option>
                    <option value="Friends">{language === 'ta' ? 'நண்பர்கள்' : 'Friends'}</option>
                    <option value="Corporate">{language === 'ta' ? 'நிறுவனம்' : 'Corporate'}</option>
                    <option value="Pilgrimage">{language === 'ta' ? 'ஆன்மீகம்' : 'Pilgrimage'}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="trip-requirements" className="mb-1 block text-xs font-semibold text-slate-700">{language === 'ta' ? 'கூடுதல் தேவைகள்' : 'Additional requirements'}</label>
                  <textarea id="trip-requirements" value={additionalRequirements} onChange={(e) => setAdditionalRequirements(e.target.value)} rows={2} className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm" />
                </div>
              </div>
            </details>
            <button
              type="submit"
              className="min-h-12 w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-[#203B4A] shadow-sm transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#203B4A] sm:col-span-2 lg:col-span-6"
            >
              {language === 'ta' ? 'வாட்ஸ்அப்பில் இலவச விலை கேளுங்கள்' : 'Get Free Quote'}
            </button>
            {formMessage && (
              <p className="text-sm text-slate-700 sm:col-span-2 lg:col-span-6" role="status" aria-live="polite">
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* 3. FEATURED FLEET SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-1">
              {language === 'ta' ? 'முன்னணி சொகுசு வாகனங்கள்' : 'Commercial Tourist Fleet'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t.fleetSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {t.fleetSection.subtitle}
            </p>
          </div>

          <button
            onClick={() => onNavigate('vehicles')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-900 hover:text-sky-700 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>{language === 'ta' ? 'அனைத்து வாகனங்களையும் பார்க்க' : 'View Complete Fleet'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Vehicle Cards Grid (All 5 vehicles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VEHICLES_DATA.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              language={language}
              isRecommended={passengerRecommendation.items.some((suggestion) => suggestion.vehicle.id === vehicle.id)}
              recommendationMode={passengerRecommendation.status === 'combination' ? 'combination' : 'single'}
            />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US - VALUE PROPOSITIONS */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              {language === 'ta' ? 'கோயம்புத்தூரிலிருந்து பயணங்கள்' : 'Travel from Coimbatore'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              {t.features.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {t.features.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-sky-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {t.features.item1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.features.item1Desc}
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {t.features.item2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.features.item2Desc}
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {t.features.item3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.features.item3Desc}
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-800 flex items-center justify-center mb-4">
                <Route className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {t.features.item4Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.features.item4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR DESTINATIONS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-1">
              Top Travel Circuits
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t.destinationsSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {t.destinationsSection.subtitle}
            </p>
          </div>

          <button
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-900 hover:text-sky-700 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>{language === 'ta' ? 'அனைத்து சுற்றுலா தலங்கள்' : 'View All Destinations'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_DESTINATIONS.slice(0, 3).map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                {dest.image ? (
                  <img
                    src={dest.image}
                    alt={`${dest.name[language]} tourism from Coimbatore`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500">
                    <ImageOff className="h-6 w-6" aria-hidden="true" />
                    <span className="text-xs">{language === 'ta' ? 'படம் இல்லை' : 'Photo unavailable'}</span>
                  </div>
                )}
                {dest.imageCredit && (
                  <div className="absolute bottom-2 right-2 rounded-md bg-slate-950/75 px-2 py-1 text-[10px] text-white">
                    Photo: <a href={dest.imageCredit.sourceUrl} target="_blank" rel="noreferrer" className="underline">{dest.imageCredit.author}</a>
                    {' · '}
                    <a href={dest.imageCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline">{dest.imageCredit.license}</a>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {dest.name[language]}
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                  {dest.description[language]}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500">
                    Recommended: <strong className="text-slate-700">{dest.recommendedVehicleTypes[0]}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('route-detail', dest.id)}
                    className="mb-2 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-teal-700 hover:bg-teal-50"
                  >
                    {language === 'ta' ? 'இட விவரங்கள்' : 'Explore destination'}
                  </button>
                  <button
                    onClick={() => onOpenBookingModal({ destination: dest.name[language] })}
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-[#203B4A] transition-colors hover:bg-amber-600 cursor-pointer"
                  >
                    {language === 'ta' ? 'என் பயணத்தைத் திட்டமிடுங்கள்' : 'Plan My Trip'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. QUICK CONTACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-slate-950 rounded-2xl sm:rounded-3xl p-7 sm:p-12 text-white shadow-md text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {language === 'ta' ? 'உங்கள் பயணத்தைத் திட்டமிட உதவுகிறோம்' : 'Need help planning your trip?'}
            </h2>

            <p className="text-xs sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              {language === 'ta'
                ? 'உங்கள் வழி மற்றும் வாகனத் தேவையைப் பற்றி நேரடியாகப் பேசுங்கள்.'
                : 'Call us to discuss your route and vehicle requirements.'}
            </p>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white px-6 py-3 font-bold text-sm sm:text-base text-slate-900 transition-colors hover:bg-slate-100"
              >
                <span>{language === 'ta' ? 'இப்போது அழைக்கவும்' : 'Call Now'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
