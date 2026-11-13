import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  Calendar,
  Users,
  Check,
  MessageCircle,
  Phone,
  Clock,
  Minus,
  Plus,
  Compass,
} from 'lucide-react';
import { Language, TouristDestination, BookingEnquiry } from '../types/travel';
import { BUSINESS_INFO } from '../data/travelData';
import { VEHICLES_DATA } from '../data/vehicles';
import { generateWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface JourneyPlannerDrawerProps {
  destination: TouristDestination | null;
  language: Language;
  onClose: () => void;
}

export const JourneyPlannerDrawer: React.FC<JourneyPlannerDrawerProps> = ({
  destination,
  language,
  onClose,
}) => {
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [pickupLocation, setPickupLocation] = useState('Coimbatore (Free Doorstep Pickup)');
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [passengers, setPassengers] = useState(4);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES_DATA[0].name);
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!destination) return;

    setSelectedStops(destination.topAttractions);
    setPickupLocation('Coimbatore (Free Doorstep Pickup)');
    setTravelDate('');
    setReturnDate('');
    setIsMultiDay(false);
    setPassengers(4);

    const preferredKeyword = destination.recommendedVehicleTypes[0]?.toLowerCase() || '';
    const matchedVehicle =
      VEHICLES_DATA.find((v) => v.name.toLowerCase().includes(preferredKeyword)) ||
      VEHICLES_DATA[0];
    setSelectedVehicle(matchedVehicle.name);
    setCustomerName('');
    setMobileNumber('');
    setNotes('');
    setErrors({});
    setIsSubmitting(false);
  }, [destination]);

  useEffect(() => {
    if (!destination) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [destination, onClose]);

  if (!destination) return null;

  const toggleStop = (stop: string) => {
    setSelectedStops((prev) =>
      prev.includes(stop) ? prev.filter((item) => item !== stop) : [...prev, stop]
    );
  };

  const handlePassengerChange = (delta: number) => {
    setPassengers((prev) => {
      const next = Math.min(50, Math.max(1, prev + delta));
      return next;
    });
  };

  const isRecommendedVehicle = (vehicleName: string) => {
    const lower = vehicleName.toLowerCase();
    return destination.recommendedVehicleTypes.some((rec) =>
      lower.includes(rec.toLowerCase().split(' ')[0])
    );
  };

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!customerName.trim()) {
      nextErrors.customerName =
        language === 'ta' ? 'உங்கள் பெயரை உள்ளிடவும்' : 'Please enter your name';
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      nextErrors.mobileNumber =
        language === 'ta'
          ? 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்'
          : 'Please enter a valid 10-digit mobile number';
    }
    if (!travelDate.trim()) {
      nextErrors.travelDate =
        language === 'ta' ? 'பயண தேதியைத் தேர்ந்தெடுக்கவும்' : 'Please pick a travel date';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const stopsSummary =
      selectedStops.length > 0
        ? `Planned Sights: ${selectedStops.join(', ')}`
        : 'Flexible sightseeing itinerary';

    const combinedNotes = [stopsSummary, notes.trim()].filter(Boolean).join(' | ');

    const enquiry: BookingEnquiry = {
      customerName: customerName.trim(),
      mobileNumber: mobileNumber.trim(),
      pickupLocation: pickupLocation.trim() || 'Coimbatore',
      destination: destination.name[language],
      travelDate,
      returnDate: isMultiDay ? returnDate : '',
      passengers,
      selectedVehicle,
      travelType: `${destination.name.en} Guided Journey`,
      additionalRequirements: combinedNotes,
    };

    const url = generateWhatsAppUrl(enquiry);
    setTimeout(() => {
      openWhatsApp(url);
      setIsSubmitting(false);
      onClose();
    }, 350);
  };

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="journey-planner-title"
    >
      {/* Backdrop Scrim */}
      <div
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer / Bottom Sheet */}
      <div className="fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto sm:w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-t-none sm:rounded-l-3xl border-t sm:border-t-0 sm:border-l border-slate-200 shadow-2xl max-h-[92dvh] sm:max-h-none flex flex-col overflow-hidden">
        {/* Mobile Drag Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center shrink-0">
          <span className="w-10 h-1 bg-slate-300 rounded-full" aria-hidden="true" />
        </div>

        {/* Drawer Header */}
        <div className="px-5 sm:px-6 pt-3 pb-4 border-b border-slate-200 flex items-start justify-between gap-4 shrink-0 bg-white">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-sky-700 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 shrink-0" />
              <span>{language === 'ta' ? 'பயணத் திட்டமிடல்' : 'Guided Journey Planner'}</span>
            </p>
            <h2
              id="journey-planner-title"
              className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mt-0.5 truncate"
            >
              {destination.name[language]}
            </h2>
            <p className="text-xs text-slate-500 mt-1 tabular-nums">
              {destination.state} <span aria-hidden="true">·</span> {destination.distanceFromCoimbatore} from CBE{' '}
              <span aria-hidden="true">·</span> {destination.approxTravelTime}{' '}
              <span aria-hidden="true">·</span> Best: {destination.bestTimeToVisit}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label={language === 'ta' ? 'மூடு' : 'Close journey planner'}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Planner Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-6">
          {/* Step 1: Sightseeing Stops */}
          <section aria-labelledby="planner-stops-heading" className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 id="planner-stops-heading" className="text-sm font-bold text-slate-900">
                  {language === 'ta' ? '1. பார்க்க வேண்டிய இடங்கள்' : '1. Sightseeing stops to include'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'ta'
                    ? 'நீங்கள் செல்ல விரும்பும் இடங்களைத் தேர்வு செய்யவும்'
                    : 'Tap places you want covered on your route'}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setSelectedStops(
                    selectedStops.length === destination.topAttractions.length
                      ? []
                      : destination.topAttractions
                  )
                }
                className="text-xs font-semibold text-sky-800 hover:text-sky-950 cursor-pointer whitespace-nowrap"
              >
                {selectedStops.length === destination.topAttractions.length
                  ? language === 'ta'
                    ? 'அனைத்தையும் நீக்கு'
                    : 'Clear all'
                  : language === 'ta'
                  ? 'அனைத்தையும் தேர்ந்தெடு'
                  : 'Select all'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.topAttractions.map((stop) => {
                const isSelected = selectedStops.includes(stop);
                return (
                  <button
                    key={stop}
                    type="button"
                    onClick={() => toggleStop(stop)}
                    aria-pressed={isSelected}
                    className={`min-h-[44px] px-3 py-2 rounded-xl border text-left text-xs font-medium flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-sky-600 bg-sky-50/70 text-sky-950'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="truncate">{stop}</span>
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected
                          ? 'bg-sky-700 border-sky-700 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Step 2: Schedule & Pickup */}
          <section aria-labelledby="planner-schedule-heading" className="space-y-4">
            <h3 id="planner-schedule-heading" className="text-sm font-bold text-slate-900">
              {language === 'ta' ? '2. தேதி மற்றும் பயண விவரம்' : '2. Pickup, dates & group size'}
            </h3>

            {/* Pickup Location */}
            <div>
              <label htmlFor="planner-pickup" className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'ta' ? 'பிக்கப் இடம் (கோவை இலவசம்)' : 'Pickup location in Coimbatore'}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  id="planner-pickup"
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Gandhipuram / Railway Station / Airport"
                  className="w-full min-h-[44px] pl-9 pr-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Trip Length Segmented Toggle */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setIsMultiDay(false)}
                className={`flex-1 min-h-[40px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  !isMultiDay
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'ta' ? 'ஒரு நாள் பயணம்' : 'Day trip'}
              </button>
              <button
                type="button"
                onClick={() => setIsMultiDay(true)}
                className={`flex-1 min-h-[40px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isMultiDay
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'ta' ? 'பல நாட்கள் சுற்றுலா' : 'Multi-day trip'}
              </button>
            </div>

            {/* Date Pickers */}
            <div className={`grid grid-cols-1 ${isMultiDay ? 'sm:grid-cols-2' : ''} gap-3`}>
              <div>
                <label htmlFor="planner-start-date" className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'ta' ? 'புறப்படும் தேதி' : 'Start date'} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="planner-start-date"
                    type="date"
                    value={travelDate}
                    onChange={(e) => {
                      setTravelDate(e.target.value);
                      if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                    }}
                    className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-xl border bg-slate-50/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 ${
                      errors.travelDate ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.travelDate && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.travelDate}</p>
                )}
              </div>

              {isMultiDay && (
                <div>
                  <label htmlFor="planner-return-date" className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'ta' ? 'திரும்பும் தேதி' : 'Return date'}
                  </label>
                  <input
                    id="planner-return-date"
                    type="date"
                    value={returnDate}
                    min={travelDate || undefined}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              )}
            </div>

            {/* Passenger Counter */}
            <div className="flex items-center justify-between gap-4 p-3 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-sky-700 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    {language === 'ta' ? 'பயணிகள் எண்ணிக்கை' : 'Travellers'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {language === 'ta' ? 'சரியான வாகனத்தை பரிந்துரைக்க' : 'Helps match seat capacity'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePassengerChange(-1)}
                  aria-label="Decrease passengers"
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-bold text-slate-950 tabular-nums">
                  {passengers}
                </span>
                <button
                  type="button"
                  onClick={() => handlePassengerChange(1)}
                  aria-label="Increase passengers"
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Step 3: Recommended Vehicle Picker */}
          <section aria-labelledby="planner-vehicle-heading" className="space-y-3">
            <div>
              <h3 id="planner-vehicle-heading" className="text-sm font-bold text-slate-900">
                {language === 'ta' ? '3. வாகனத்தைத் தேர்வு செய்யவும்' : '3. Choose your vehicle'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'ta'
                  ? 'இந்த வழித்தடத்திற்கான பரிந்துரைக்கப்பட்ட வாகனங்கள்'
                  : `Suggested for ${destination.name.en} and ${passengers} travellers`}
              </p>
            </div>

            <div className="space-y-2">
              {VEHICLES_DATA.map((vehicle) => {
                const isSelected = selectedVehicle === vehicle.name;
                const matchesRoute = isRecommendedVehicle(vehicle.name);
                const fitsGroup = vehicle.seatsCount >= passengers;

                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => setSelectedVehicle(vehicle.name)}
                    aria-pressed={isSelected}
                    className={`w-full p-3 rounded-xl border text-left transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-sky-700 bg-sky-50/70'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-slate-950">{vehicle.name}</span>
                        {matchesRoute && fitsGroup && (
                          <span className="text-[11px] font-semibold text-sky-800">
                            · {language === 'ta' ? 'சிறந்த தேர்வு' : 'Recommended fit'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 tabular-nums">
                        {vehicle.seatsCount} {language === 'ta' ? 'இருக்கைகள்' : 'seats'} · {vehicle.luggageCapacity[language]}
                      </p>
                    </div>

                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-sky-700' : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-sky-700" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Step 4: Contact Details */}
          <section aria-labelledby="planner-contact-heading" className="space-y-3 pb-2">
            <h3 id="planner-contact-heading" className="text-sm font-bold text-slate-900">
              {language === 'ta' ? '4. உங்கள் தொடர்பு விவரம்' : '4. Your contact details'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="planner-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'ta' ? 'பெயர்' : 'Your name'} <span className="text-rose-500">*</span>
                </label>
                <input
                  id="planner-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (errors.customerName) setErrors({ ...errors, customerName: '' });
                  }}
                  placeholder="e.g. Karthik"
                  className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-xl border bg-slate-50/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 ${
                    errors.customerName ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                  }`}
                />
                {errors.customerName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.customerName}</p>
                )}
              </div>

              <div>
                <label htmlFor="planner-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'ta' ? 'மொபைல் எண்' : 'Mobile number'} <span className="text-rose-500">*</span>
                </label>
                <input
                  id="planner-phone"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                    if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                  }}
                  placeholder="10-digit number"
                  className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-xl border bg-slate-50/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 ${
                    errors.mobileNumber ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.mobileNumber}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="planner-notes" className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'ta' ? 'கூடுதல் குறிப்புகள் (விருப்பம்)' : 'Additional notes (optional)'}
              </label>
              <textarea
                id="planner-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  language === 'ta'
                    ? 'பிக்கப் நேரம் அல்லது கூடுதல் நிறுத்தங்கள்'
                    : 'Preferred pickup time or extra stops'
                }
                className="w-full px-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 resize-none"
              />
            </div>
          </section>
        </form>

        {/* Sticky Bottom CTA Footer */}
        <div className="px-5 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 space-y-2.5 shrink-0">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-bold text-sm transition-colors cursor-pointer disabled:opacity-75"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>
              {isSubmitting
                ? language === 'ta'
                  ? 'வாட்ஸ்அப் திறக்கிறது...'
                  : 'Opening WhatsApp...'
                : language === 'ta'
                ? 'வாட்ஸ்அப்பில் பயணத் திட்டத்தை அனுப்புக'
                : 'Send Trip Plan on WhatsApp'}
            </span>
          </button>

          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              {selectedStops.length} {language === 'ta' ? 'இடங்கள்' : 'stops'} · {selectedVehicle}
            </span>
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1 font-semibold text-sky-900 hover:underline tabular-nums"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
