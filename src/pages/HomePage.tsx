import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Users, 
  Calendar, 
  Compass, 
  Car, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Language, Vehicle, TourCategory } from '../types/travel';
import { 
  BUSINESS_INFO, 
  VEHICLES_DATA, 
  POPULAR_DESTINATIONS, 
  TRANSLATIONS 
} from '../data/travelData';
import { VehicleCard } from '../components/VehicleCard';
import heroImage from '../assets/images/hero_travel_coimbatore_1794284646361-optimized.jpg';

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

  // Search & Discovery State
  const [searchDestination, setSearchDestination] = useState('');
  const [searchPickup, setSearchPickup] = useState('Coimbatore (Free Pickup)');
  const [searchDate, setSearchDate] = useState('');
  const [searchPassengers, setSearchPassengers] = useState('4');
  const [searchVehicle, setSearchVehicle] = useState('All');
  const [searchCategory, setSearchCategory] = useState<string>('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      vehicle: searchVehicle !== 'All' ? searchVehicle : undefined,
      tour: searchCategory !== 'All' ? searchCategory : undefined,
      destination: searchDestination || undefined,
      pickupLocation: searchPickup || undefined,
      travelDate: searchDate || undefined,
      passengers: searchPassengers,
    });
  };

  return (
    <div className="space-y-12 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-900 mb-3 sm:mb-4">
              <MapPin className="w-4 h-4 text-sky-700 shrink-0" />
              <span>{t.hero.tag}</span>
            </p>
            <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-950 tracking-tight text-balance leading-[1.12]">
              {t.hero.h1}
            </h1>
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-slate-600 max-w-xl leading-relaxed text-balance">
              {t.hero.p}
            </p>
            <p className="mt-3 sm:mt-4 flex items-center gap-2 text-sm font-semibold text-sky-900">
              <MapPin className="w-4 h-4 text-sky-700 shrink-0" />
              {language === 'ta' ? 'கோவையில் இலவச பிக்கப் வசதி' : 'Free pickup throughout Coimbatore'}
            </p>
            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
              <button
                onClick={() => onOpenBookingModal()}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.nav.bookNow}</span>
              </button>
              <button
                onClick={() => onNavigate('vehicles')}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
              >
                <Car className="w-5 h-5 text-sky-700" />
                <span>{t.hero.exploreVehicles}</span>
              </button>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                {language === 'ta' ? 'அகில இந்திய பயண சேவை' : 'Travel across India'}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-700" />
                <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="font-semibold text-slate-900 hover:underline">
                  {BUSINESS_INFO.primaryPhone}
                </a>
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-w-0">
            <img
              src={heroImage}
              alt="Scenic Ooty hill country, a popular trip from Coimbatore"
              className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover rounded-2xl sm:rounded-3xl shadow-md"
              width="1200"
              height="750"
              loading="eager"
              fetchPriority="high"
            />
            <div className="mt-3 sm:mt-0 sm:absolute sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 border border-slate-200 sm:border-0 shadow-xs sm:shadow-sm">
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {language === 'ta' ? 'உங்கள் பயணத்திற்கான வாகனம்' : 'The right vehicle for your trip'}
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  {language === 'ta' ? 'குடும்பம், குழு மற்றும் சுற்றுலா பயணங்கள்' : 'Family, group and sightseeing journeys'}
                </p>
              </div>
              <button
                onClick={() => onNavigate('tours')}
                className="shrink-0 min-h-[40px] px-2 inline-flex items-center text-xs sm:text-sm font-bold text-sky-900 hover:text-sky-700 transition-colors cursor-pointer"
              >
                {language === 'ta' ? 'சுற்றுலாக்கள்' : 'Explore trips'}
                <span className="sr-only"> and tour packages</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & ENQUIRY DISCOVERY BAR (Below Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 sm:-mt-14 lg:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg sm:shadow-xl border border-slate-200 p-4 sm:p-7">
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              {t.searchWidget.title}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.searchWidget.subtitle}
            </p>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {/* Pickup */}
            <div className="lg:col-span-1">
              <label htmlFor="search-pickup" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'ta' ? 'பிக்கப் இடம்' : 'Pickup'}
              </label>
              <input
                id="search-pickup"
                type="text"
                value={searchPickup}
                onChange={(e) => setSearchPickup(e.target.value)}
                placeholder="Coimbatore"
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Destination */}
            <div className="lg:col-span-1">
              <label htmlFor="search-destination" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'ta' ? 'செல்லும் இடம்' : 'Destination'}
              </label>
              <input
                id="search-destination"
                type="text"
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
                placeholder="e.g. Ooty / Munnar"
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Date */}
            <div className="lg:col-span-1">
              <label htmlFor="search-date" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {t.searchWidget.dateLabel}
              </label>
              <input
                id="search-date"
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Passengers */}
            <div className="lg:col-span-1">
              <label htmlFor="search-passengers" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {t.searchWidget.passengersLabel}
              </label>
              <select
                id="search-passengers"
                value={searchPassengers}
                onChange={(e) => setSearchPassengers(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 cursor-pointer"
              >
                <option value="4">1 - 4 Passengers</option>
                <option value="7">5 - 7 Passengers (Innova/Ertiga)</option>
                <option value="14">8 - 14 Passengers (Traveller)</option>
                <option value="16">15 - 16 Passengers (Urbania)</option>
                <option value="21">17 - 21 Passengers (SML Coach)</option>
              </select>
            </div>

            {/* Vehicle Preference */}
            <div className="lg:col-span-1">
              <label htmlFor="search-vehicle" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {t.searchWidget.vehicleLabel}
              </label>
              <select
                id="search-vehicle"
                value={searchVehicle}
                onChange={(e) => setSearchVehicle(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 cursor-pointer"
              >
                <option value="All">{t.searchWidget.allVehicles}</option>
                {VEHICLES_DATA.map((v) => (
                  <option key={v.id} value={v.name}>{v.name}</option>
                ))}
              </select>
            </div>

            {/* Submit Action */}
            <div className="lg:col-span-1 flex items-end pt-1 sm:pt-0">
              <button
                type="submit"
                className="w-full min-h-[48px] sm:min-h-[44px] py-2.5 px-4 rounded-xl sm:rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Quote</span>
              </button>
            </div>
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
              onBookClick={(name) => onOpenBookingModal({ vehicle: name })}
            />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US - VALUE PROPOSITIONS */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Coimbatore's Reliable Partner
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
                <Award className="w-6 h-6 text-indigo-700" />
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
                <img
                  src={dest.image}
                  alt={`${dest.name[language]} tourism from Coimbatore`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                  {dest.distanceFromCoimbatore} from CBE
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {dest.name[language]}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Approx {dest.approxTravelTime} · Best: {dest.bestTimeToVisit}
                </p>

                <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                  {dest.description[language]}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Recommended: <strong className="text-slate-700">{dest.recommendedVehicleTypes[0]}</strong>
                  </span>

                  <button
                    onClick={() => onOpenBookingModal({ destination: dest.name[language] })}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-900 hover:text-sky-700 cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Customer feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {language === 'ta' ? 'வாடிக்கையாளர் கருத்துகள்' : 'Customer reviews'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {language === 'ta'
                ? 'வாடிக்கையாளர்களின் உண்மையான கருத்துகள் பகிரப்பட்டதும் இங்கே சேர்க்கப்படும்.'
                : 'We’re not showing unverified ratings or testimonials. Contact us to discuss your route, vehicle options and pickup before you decide.'}
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-xl border border-slate-700 bg-slate-800/60 p-5 sm:p-7 text-center">
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
              {language === 'ta'
                ? 'உங்கள் பயணத் தேவைகளை எங்களுடன் பகிர்ந்து, சரியான வாகனம் மற்றும் பயணத் திட்டத்தைப் பற்றி நேரடியாகப் பேசுங்கள்.'
                : 'Tell us where you’re going and how many people are travelling. We’ll help you discuss a suitable vehicle and trip plan directly.'}
            </p>
            <button
              onClick={() => onOpenBookingModal()}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-600 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              {t.nav.bookNow}
            </button>
          </div>
        </div>
      </section>

      {/* 7. QUICK CONTACT & WHATSAPP ACTION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-slate-950 rounded-2xl sm:rounded-3xl p-7 sm:p-12 text-white shadow-md text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-900 text-sky-100 border border-sky-700 px-3.5 py-1 rounded-full text-xs font-bold">
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Ask about your trip on WhatsApp</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {language === 'ta' ? 'உங்கள் அடுத்த பயணத்தை இன்றே திட்டமிடுங்கள்' : 'Ready to Plan Your Next Journey Across India?'}
            </h2>

            <p className="text-xs sm:text-base text-sky-200 max-w-xl mx-auto leading-relaxed">
              {language === 'ta' 
                ? 'தினேஷ்குமார் அவர்களை நேரடியாக தொடர்பு கொண்டு உங்கள் பயணத்திற்கான சிறந்த கட்டணத்தை உடனே பெறுங்கள்.'
                : 'Connect directly with owner DINESHKUMAR R on WhatsApp (6381186895) for prompt custom quotations and vehicle availability.'}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenBookingModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.nav.bookNow}</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
