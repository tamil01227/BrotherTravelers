import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, BookingEnquiry } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';
import { VEHICLES_DATA } from '../data/vehicles';
import { generateWhatsAppUrl, openWhatsApp, PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.customerName.trim() || !contactForm.mobileNumber.trim()) {
      setFormError(
        language === 'ta'
          ? 'தயவுசெய்து உங்கள் பெயர் மற்றும் எண்ணை உள்ளிடவும்'
          : 'Please provide your name and mobile number.'
      );
      return;
    }

    setFormError('');
    setFormSent(true);
    const url = generateWhatsAppUrl(contactForm);
    setTimeout(() => {
      openWhatsApp(url);
      setFormSent(false);
    }, 400);
  };

  const handleDirectWhatsApp = () => {
    const url = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello BROTHER'S TRAVELS, I am contacting you regarding travel and vehicle booking across India."
    )}`;
    openWhatsApp(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <Phone className="w-3.5 h-3.5" />
          <span>24x7 Customer Support</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' ? 'எங்களை தொடர்பு கொள்ள' : 'Contact BROTHER\'S TRAVELS'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? 'வாகன முன்பதிவு மற்றும் பயணத் திட்டங்களுக்கு உரிமையாளர் தினேஷ்குமார் ஆர் அவர்களை நேரடியாக வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் தொடர்பு கொள்ளலாம்.'
            : 'Get in touch directly with owner DINESHKUMAR R for quick quotations, vehicle inspections, and tour customizations. Serving all of India with free Coimbatore pickup.'}
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
              <p className="text-xs font-bold text-slate-700">
                Proprietor: <span className="text-sky-900 font-extrabold">{BUSINESS_INFO.owner}</span>
              </p>
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
                  <strong className="text-slate-900 block">Headquarters:</strong>
                  <span>Coimbatore, Tamil Nadu, India (PIN: 641012)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Service Coverage:</strong>
                  <span>{BUSINESS_INFO.serviceCoverage[language]}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Free Doorstep Pickup:</strong>
                  <span>{BUSINESS_INFO.pickupFacility[language]}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Working Hours:</strong>
                  <span>{BUSINESS_INFO.operatingHours}</span>
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
                    value={contactForm.mobileNumber}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, mobileNumber: e.target.value });
                      if (formError) setFormError('');
                    }}
                    placeholder="Your 10-digit Mobile Number"
                    className="w-full min-h-[44px] px-3 py-2 text-base sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
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
                <p role="alert" className="text-xs font-medium text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
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
                Direct WhatsApp enquiry to owner DINESHKUMAR R. You will receive quotation and availability confirmation immediately.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Location Section (Allows business owner to customize later) */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Coimbatore Hub</span>
            <h3 className="text-xl font-bold">BROTHER'S TRAVELS Base & Pickup Network</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Serving Coimbatore Railway Station, Coimbatore Airport (CJB), Gandhipuram, RS Puram, and all surrounding areas.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-sky-700 hover:bg-sky-600 text-white transition-colors self-start sm:self-auto"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Embedded Interactive Map Frame (Coimbatore) */}
        <div className="relative w-full h-80 bg-slate-100">
          <iframe
            title="BROTHER'S TRAVELS Coimbatore Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173113175!2d76.89719875971439!3d11.014298150414902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          />
        </div>
      </div>
    </div>
  );
};
