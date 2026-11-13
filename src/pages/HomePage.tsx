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
  Star, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Language, Vehicle, TourCategory } from '../types/travel';
import { 
  BUSINESS_INFO, 
  VEHICLES_DATA, 
  POPULAR_DESTINATIONS, 
  TESTIMONIALS_DATA, 
  TRANSLATIONS 
} from '../data/travelData';
import { VehicleCard } from '../components/VehicleCard';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface HomePageProps {
  language: Language;
  onNavigate: (tab: string, slug?: string) => void;
  onOpenBookingModal: (prefill?: { vehicle?: string; tour?: string; destination?: string }) => void;
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
    });
  };

  const handleQuickWhatsAppChat = () => {
    const url = generateQuickWhatsAppUrl("General Tour & Vehicle Rental", "general");
    openWhatsApp(url);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_travel_coimbatore_1794284646361.jpg"
            alt="Explore India with BROTHER'S TRAVELS Coimbatore"
            className="w-full h-full object-cover opacity-35 transform scale-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          {/* Coimbatore Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-sky-950/80 backdrop-blur-md border border-sky-600/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-sky-200 mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{t.hero.tag}</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight text-balance max-w-4xl mx-auto leading-tight">
            {t.hero.h1}
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            {t.hero.p}
          </p>

          {/* Free Coimbatore Pickup Highlight Callout */}
          <div className="mt-6 inline-flex items-center gap-2.5 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.hero.freePickupBadge}: <strong>{language === 'ta' ? 'எவ்வித கூடுதல் கட்டணமும் இன்றி உங்கள் இடத்திற்கே வருகிறோம்' : 'Zero dead-mileage charges across Coimbatore'}</strong></span>
          </div>

          {/* Action CTAs Cluster */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary WhatsApp Booking Button */}
            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-green-600 hover:bg-green-700 active:bg-green-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.hero.whatsappDirect}</span>
            </button>

            {/* Explore Vehicles Button */}
            <button
              onClick={() => onNavigate('vehicles')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-sky-900/80 hover:bg-sky-800 backdrop-blur-md border border-sky-700/60 transition-all cursor-pointer"
            >
              <Car className="w-5 h-5 text-sky-400" />
              <span>{t.hero.exploreVehicles}</span>
            </button>

            {/* Plan Your Trip Button */}
            <button
              onClick={() => onNavigate('tours')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700 transition-all cursor-pointer"
            >
              <Compass className="w-5 h-5 text-amber-400" />
              <span>{t.hero.planTrip}</span>
            </button>
          </div>

          {/* Contact Direct Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800/70 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-sky-400" />
              Call Directly: <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="text-white font-bold hover:underline">{BUSINESS_INFO.primaryPhone}</a>
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span>Owner: <strong className="text-white">{BUSINESS_INFO.owner}</strong></span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span>Additional: {BUSINESS_INFO.additionalPhones.join(', ')}</span>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & ENQUIRY DISCOVERY BAR (Below Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 sm:p-7">
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              {t.searchWidget.title}
            </h2>
            <p className="text-xs text-slate-500">
              {t.searchWidget.subtitle}
            </p>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
            {/* Pickup */}
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'ta' ? 'பிக்கப் இடம்' : 'Pickup'}
              </label>
              <input
                type="text"
                value={searchPickup}
                onChange={(e) => setSearchPickup(e.target.value)}
                placeholder="Coimbatore"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Destination */}
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'ta' ? 'செல்லும் இடம்' : 'Destination'}
              </label>
              <input
                type="text"
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
                placeholder="e.g. Ooty / Munnar"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Date */}
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {t.searchWidget.dateLabel}
              </label>
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Passengers */}
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {t.searchWidget.passengersLabel}
              </label>
              <select
                value={searchPassengers}
                onChange={(e) => setSearchPassengers(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 cursor-pointer"
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
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                {t.searchWidget.vehicleLabel}
              </label>
              <select
                value={searchVehicle}
                onChange={(e) => setSearchVehicle(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 cursor-pointer"
              >
                <option value="All">{t.searchWidget.allVehicles}</option>
                {VEHICLES_DATA.map((v) => (
                  <option key={v.id} value={v.name}>{v.name}</option>
                ))}
              </select>
            </div>

            {/* Submit Action */}
            <div className="lg:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-sky-900 hover:bg-sky-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-green-400 fill-current" />
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
      <section className="bg-slate-900 text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Verified Client Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {t.testimonialsSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {t.testimonialsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-4">
                    "{item.review[language]}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700 text-xs">
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-[11px] text-slate-400">{item.location}</div>
                  <div className="text-[11px] text-sky-400 mt-0.5">{item.trip} · {item.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUICK CONTACT & WHATSAPP ACTION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-gradient-to-r from-sky-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-sky-800/40 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/30 px-3.5 py-1 rounded-full text-xs font-bold">
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Instant Availability Check on WhatsApp</span>
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
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
