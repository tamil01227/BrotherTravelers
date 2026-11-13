import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { Language, BookingEnquiry } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';
import { VEHICLES_DATA } from '../data/vehicles';
import { generateWhatsAppUrl, openWhatsApp, PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { focusFirstInvalidField } from '../utils/formValidation';

interface ContactUsPageProps {
  language: Language;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const [contactForm, setContactForm] = useState<BookingEnquiry>({
    customerName: '',
    mobileNumber: '',
    pickupLocation: 'Coimbatore',
    destination: '',
    travelDate: '',
    returnDate: '',
    passengers: 4,
    selectedVehicle: VEHICLES_DATA[0].name,
    travelType: 'Tour/Outstation',
    additionalRequirements: '',
  });

  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactForm.customerName.trim() || !contactForm.mobileNumber.trim()) {
      setFormError(
        language === 'ta'
          ? 'தயவுசெய்து உங்கள் பெயர் மற்றும் எண்ணை உள்ளிடவும்'
          : 'Please provide your name and mobile number.'
      );
      focusFirstInvalidField(e.currentTarget);
      return;
    }
    if (contactForm.mobileNumber.replace(/\D/g, '').length !== 10) {
      setFormError(
        language === 'ta'
          ? 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்'
          : 'Please enter a valid 10-digit mobile number.'
      );
      focusFirstInvalidField(e.currentTarget);
      return;
    }

    setFormError('');
    setFormSent(true);
    const url = generateWhatsAppUrl(contactForm);
    setTimeout(() => {
      openWhatsApp(url, 'contact_form');
      setFormSent(false);
    }, 400);
  };

  const handleDirectWhatsApp = () => {
    const url = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello BROTHER'S TRAVELS, I am contacting you regarding travel and vehicle booking across India."
    )}`;
    openWhatsApp(url, 'other');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <Phone className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'தொடர்பு விவரங்கள்' : 'Direct contact'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' ? 'எங்களை தொடர்பு கொள்ள' : 'Contact BROTHER\'S TRAVELS'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? 'வாகன விருப்பங்கள் மற்றும் பயணக் கட்டணத்தைப் பற்றி பேச, வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் தொடர்பு கொள்ளுங்கள்.'
            : 'Contact BROTHER\'S TRAVELS by phone or WhatsApp to discuss vehicle options and request a quotation. Availability and trip arrangements are confirmed directly.'}
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Info & Numbers */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-xl font-extrabold text-sky-950 tracking-tight">BROTHER'S</span>
                <span className="text-xl font-black text-sky-950 tracking-tight">TRAVELS</span>
              </div>
            </div>

            {/* Primary Phone / WhatsApp */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-green-900 block">
                Primary WhatsApp & Booking Line
              </span>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="text-2xl font-black text-green-800 hover:text-green-950 flex items-center gap-2"
              >
                <Phone className="w-6 h-6 text-green-700 shrink-0" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>
              <div className="pt-1 flex items-center gap-2">
                <button
                  onClick={handleDirectWhatsApp}
                  className="flex-1 min-h-[44px] py-2 px-3 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Now</span>
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="flex-1 min-h-[44px] py-2 px-3 rounded-lg text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Additional Numbers */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Additional Phone Contacts
              </span>
              <div className="space-y-1.5">
                {BUSINESS_INFO.additionalPhones.map((phone, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-800">+91 {phone}</span>
                    <a
                      href={`tel:${phone}`}
                      className="text-xs font-bold text-sky-700 hover:underline"
                    >
                      Call Line {idx + 1}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Service & Pickup Details */}
            <div className="space-y-3 text-xs text-slate-600 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">{language === 'ta' ? 'சேவை மையம்:' : 'Service base:'}</strong>
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Instant Contact Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              {language === 'ta' ? 'விரைவு முன்பதிவு படிவம்' : 'Send Direct Booking Enquiry'}
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              {language === 'ta'
                ? 'உங்கள் பயண விவரங்களை உள்ளிடவும். படிவத்தை அனுப்பியவுடன் அது நேரடியாக வாட்ஸ்அப்பில் திறக்கும்.'
                : 'Fill in your journey requirements below. Submitting automatically opens WhatsApp with your pre-formatted enquiry.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.customerName}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, customerName: e.target.value });
                      if (formError) setFormError('');
                    }}
                    placeholder="Your Full Name"
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    aria-invalid={Boolean(formError && contactForm.mobileNumber.replace(/\D/g, '').length !== 10)}
                    aria-describedby={
                      formError && contactForm.mobileNumber.replace(/\D/g, '').length !== 10
                        ? 'contact-phone-error'
                        : undefined
                    }
                    value={contactForm.mobileNumber}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, mobileNumber: e.target.value });
                      if (formError) setFormError('');
                    }}
                    placeholder="Your 10-digit Mobile Number"
                    className={`w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 ${
                      formError && contactForm.mobileNumber.replace(/\D/g, '').length !== 10
                        ? 'border-rose-400'
                        : 'border-slate-300'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.pickupLabel}
                  </label>
                  <input
                    type="text"
                    value={contactForm.pickupLocation}
                    onChange={(e) => setContactForm({ ...contactForm, pickupLocation: e.target.value })}
                    placeholder="e.g. Coimbatore Airport / Gandhipuram"
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.destinationLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.destination}
                    onChange={(e) => setContactForm({ ...contactForm, destination: e.target.value })}
                    placeholder="e.g. Ooty, Munnar, Bangalore, Rameswaram"
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.travelDateLabel}
                  </label>
                  <input
                    type="date"
                    value={contactForm.travelDate}
                    onChange={(e) => setContactForm({ ...contactForm, travelDate: e.target.value })}
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.passengersLabel}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={contactForm.passengers}
                    onChange={(e) => setContactForm({ ...contactForm, passengers: e.target.value })}
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.vehicleLabel}
                  </label>
                  <select
                    value={contactForm.selectedVehicle}
                    onChange={(e) => setContactForm({ ...contactForm, selectedVehicle: e.target.value })}
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  >
                    {VEHICLES_DATA.map((v) => (
                      <option key={v.id} value={v.name}>{v.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={contactForm.additionalRequirements}
                  onChange={(e) => setContactForm({ ...contactForm, additionalRequirements: e.target.value })}
                  placeholder="e.g. Return trip required, multiple stops, AC preferences"
                  className="w-full px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>

              {formError && (
                <p
                  id={contactForm.mobileNumber.replace(/\D/g, '').length !== 10 ? 'contact-phone-error' : undefined}
                  role="alert"
                  className="text-xs font-medium text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2"
                >
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={formSent}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 transition-all text-sm sm:text-base shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{formSent ? 'Opening WhatsApp...' : 'Submit Booking Enquiry via WhatsApp'}</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                Sending this form opens a WhatsApp draft for you to review. A quote and availability must be confirmed directly.
              </p>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};
