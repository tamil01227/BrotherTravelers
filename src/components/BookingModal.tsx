import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Users, MapPin, Car, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, BookingEnquiry } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';
import { VEHICLES_DATA } from '../data/vehicles';
import { generateWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialVehicle?: string;
  initialTour?: string;
  initialDestination?: string;
  initialPickupLocation?: string;
  initialTravelDate?: string;
  initialPassengers?: string | number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  language,
  initialVehicle,
  initialTour,
  initialDestination,
  initialPickupLocation,
  initialTravelDate,
  initialPassengers,
}) => {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<BookingEnquiry>({
    customerName: '',
    mobileNumber: '',
    pickupLocation: initialPickupLocation || 'Coimbatore (Free Doorstep Pickup)',
    destination: initialDestination || '',
    travelDate: initialTravelDate || '',
    returnDate: '',
    passengers: initialPassengers || 4,
    selectedVehicle: initialVehicle || VEHICLES_DATA[0].name,
    travelType: initialTour || 'Family Holiday / Outstation',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setFormData({
      customerName: '',
      mobileNumber: '',
      pickupLocation: initialPickupLocation || 'Coimbatore (Free Doorstep Pickup)',
      destination: initialDestination || '',
      travelDate: initialTravelDate || '',
      returnDate: '',
      passengers: initialPassengers || 4,
      selectedVehicle: initialVehicle || VEHICLES_DATA[0].name,
      travelType: initialTour || 'Family Holiday / Outstation',
      additionalRequirements: '',
    });
    setErrors({});
    setIsSubmitted(false);
  }, [isOpen, initialVehicle, initialTour, initialDestination, initialPickupLocation, initialTravelDate, initialPassengers]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = language === 'ta' ? 'பெயரை உள்ளிடவும்' : 'Please enter your name';
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = language === 'ta' ? 'மொபைல் எண்ணை உள்ளிடவும்' : 'Please enter your mobile number';
    } else if (formData.mobileNumber.replace(/\D/g, '').length < 10) {
      newErrors.mobileNumber = language === 'ta' ? 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்' : 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.destination.trim()) {
      newErrors.destination = language === 'ta' ? 'செல்ல வேண்டிய இடத்தை உள்ளிடவும்' : 'Please enter your destination';
    }
    if (!formData.travelDate.trim()) {
      newErrors.travelDate = language === 'ta' ? 'பயண தேதியை தேர்ந்தெடுக்கவும்' : 'Please select your travel date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    const whatsappUrl = generateWhatsAppUrl(formData);

    // Give visual confirmation feedback, then launch WhatsApp
    setTimeout(() => {
      openWhatsApp(whatsappUrl);
      setIsSubmitted(false);
      onClose();
    }, 400);
  };

  const travelTypeOptions = [
    { value: 'Family Holiday / Outstation', labelEn: 'Family Holiday / Outstation', labelTa: 'குடும்ப சுற்றுலா / வெளிவட்டார பயணம்' },
    { value: 'Hill Station (Ooty / Kodaikanal / Munnar)', labelEn: 'Hill Station Trip (Ooty / Kodai / Munnar)', labelTa: 'மலை வாசஸ்தல சுற்றுலா (ஊட்டி / மூணார்)' },
    { value: 'Temple Pilgrimage Tour', labelEn: 'Temple Pilgrimage Tour', labelTa: 'ஆன்மீக கோயில் சுற்றுலா' },
    { value: 'Wedding & Reception Transportation', labelEn: 'Wedding & Reception Transportation', labelTa: 'திருமண விருந்தினர் போக்குவரத்து' },
    { value: 'Corporate & Team Outing', labelEn: 'Corporate & Team Outing', labelTa: 'கார்ப்பரேட் நிறுவன சுற்றுலா' },
    { value: 'Friends & Weekend Getaway', labelEn: 'Friends & Weekend Getaway', labelTa: 'நண்பர்கள் வார இறுதி சுற்றுலா' },
    { value: 'School / College Educational Tour', labelEn: 'School / College Educational Tour', labelTa: 'பள்ளி / கல்லூரி சுற்றுலா' },
    { value: 'All India Interstate Tour', labelEn: 'All India Interstate Tour', labelTa: 'அகில இந்திய நெடுந்தூர சுற்றுலா' },
    { value: 'Airport / Railway Station Transfer', labelEn: 'Airport / Railway Transfer', labelTa: 'விமான / ரயில் நிலைய பிக்கப்' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden sm:my-6 max-h-[92dvh] overflow-y-auto transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-slate-950 text-white px-5 sm:px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-400">
                <MessageCircle className="w-3 h-3 fill-current" />
                WhatsApp Direct Booking
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-xs text-sky-200">
                {language === 'ta' ? 'கோவை பிக்கப் இலவசம்' : 'Free Coimbatore Pickup'}
              </span>
            </div>
            <h2 id="modal-title" className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {t.bookingModal.modalTitle}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              {t.bookingModal.modalSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer shrink-0 -mr-2 -mt-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label htmlFor="booking-name" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.nameLabel} <span className="text-rose-500">*</span>
              </label>
              <input
                id="booking-name"
                type="text"
                aria-invalid={Boolean(errors.customerName)}
                aria-describedby={errors.customerName ? 'booking-name-error' : undefined}
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all ${
                  errors.customerName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.customerName && (
                <p id="booking-name-error" className="text-[11px] text-rose-500 mt-1">{errors.customerName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="booking-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.phoneLabel} <span className="text-rose-500">*</span>
              </label>
              <input
                id="booking-phone"
                type="tel"
                aria-invalid={Boolean(errors.mobileNumber)}
                aria-describedby={errors.mobileNumber ? 'booking-phone-error' : undefined}
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                placeholder="e.g. 9876543210"
                className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all ${
                  errors.mobileNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.mobileNumber && (
                <p id="booking-phone-error" className="text-[11px] text-rose-500 mt-1">{errors.mobileNumber}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pickup Location */}
            <div>
              <label htmlFor="booking-pickup" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.pickupLabel}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  id="booking-pickup"
                  type="text"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  placeholder="e.g. Gandhipuram / RS Puram / Airport"
                  className="w-full min-h-[44px] pl-9 pr-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label htmlFor="booking-destination" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.destinationLabel} <span className="text-rose-500">*</span>
              </label>
              <input
                id="booking-destination"
                type="text"
                aria-invalid={Boolean(errors.destination)}
                aria-describedby={errors.destination ? 'booking-destination-error' : undefined}
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder="e.g. Ooty, Munnar, Palani, Rameswaram"
                className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all ${
                  errors.destination ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.destination && (
                <p id="booking-destination-error" className="text-[11px] text-rose-500 mt-1">{errors.destination}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Travel Date */}
            <div>
              <label htmlFor="booking-travel-date" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.travelDateLabel} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="booking-travel-date"
                  type="date"
                  aria-invalid={Boolean(errors.travelDate)}
                  aria-describedby={errors.travelDate ? 'booking-travel-date-error' : undefined}
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 ${
                    errors.travelDate ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
              </div>
              {errors.travelDate && (
                <p id="booking-travel-date-error" className="text-[11px] text-rose-500 mt-1">{errors.travelDate}</p>
              )}
            </div>

            {/* Return Date (Optional) */}
            <div>
              <label htmlFor="booking-return-date" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.returnDateLabel}
              </label>
              <input
                id="booking-return-date"
                type="date"
                value={formData.returnDate}
                onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Selected Vehicle */}
            <div>
              <label htmlFor="booking-vehicle" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.vehicleLabel}
              </label>
              <select
                id="booking-vehicle"
                value={formData.selectedVehicle}
                onChange={(e) => setFormData({ ...formData, selectedVehicle: e.target.value })}
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 cursor-pointer"
              >
                {VEHICLES_DATA.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Number of Passengers */}
            <div>
              <label htmlFor="booking-passengers" className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.passengersLabel}
              </label>
              <input
                id="booking-passengers"
                type="number"
                min="1"
                max="50"
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Travel / Event Type */}
          <div>
            <label htmlFor="booking-trip-type" className="block text-xs font-semibold text-slate-700 mb-1">
              {t.bookingModal.tourTypeLabel}
            </label>
            <select
              id="booking-trip-type"
              value={formData.travelType}
              onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
              className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 cursor-pointer"
            >
              {travelTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {language === 'ta' ? opt.labelTa : opt.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Requirements */}
          <div>
            <label htmlFor="booking-notes" className="block text-xs font-semibold text-slate-700 mb-1">
              {t.bookingModal.notesLabel}
            </label>
            <textarea
              id="booking-notes"
              rows={2}
              value={formData.additionalRequirements}
              onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
              placeholder={language === 'ta' ? 'ஏதேனும் குறிப்பிட்ட தேவைகள் (உதா. அதிக லக்கேஜ், முதியவர்கள், கூடுதல் நிறுத்தங்கள்)' : 'e.g. Extra luggage space, elderly passengers, specific pickup timing'}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 resize-none"
            />
          </div>

          {/* Trust Banner & WhatsApp Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 shadow-md hover:shadow-lg transition-colors text-sm sm:text-base cursor-pointer disabled:opacity-75"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>
                {isSubmitted
                  ? (language === 'ta' ? 'வாட்ஸ்அப்பிற்கு இணைக்கிறது...' : 'Redirecting to WhatsApp...')
                  : t.bookingModal.submitBtn}
              </span>
            </button>

            <p className="text-[11px] text-slate-500 text-center mt-2.5 leading-relaxed">
              {t.bookingModal.disclaimer}
            </p>
          </div>
        </form>

        {/* Quick Contact Footer Strip */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-600">
          <span>Need immediate phone assistance?</span>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="font-bold text-sky-900 hover:text-sky-700 transition-colors"
          >
            Call {BUSINESS_INFO.primaryPhone}
          </a>
        </div>
      </div>
    </div>
  );
};
