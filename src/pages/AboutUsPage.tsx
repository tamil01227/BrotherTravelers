import React from 'react';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO } from '../data/travelData';

interface AboutUsPageProps {
  language: Language;
  onOpenBooking: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ language, onOpenBooking }) => {
  const isTamil = language === 'ta';

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-800">
          {isTamil ? 'எங்களைப் பற்றி' : "About BROTHER'S TRAVELS"}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#142B49] sm:text-5xl">
          {isTamil ? 'கோயம்புத்தூரிலிருந்து உங்கள் பயணத்தைத் திட்டமிடுங்கள்' : 'Plan a trip from Coimbatore'}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          {isTamil
            ? 'கோயம்புத்தூர், தமிழ்நாட்டை மையமாகக் கொண்டு குடும்பச் சுற்றுலா, குழுப் பயணம் மற்றும் வெளியூர் பயணங்களுக்கு உதவுகிறோம். உங்கள் வழித்தடம் மற்றும் பயணத் தேதியுடன் விசாரிக்கவும்.'
            : "BROTHER'S TRAVELS is based in Coimbatore, Tamil Nadu. We help plan family trips, group journeys and outstation travel. Share your route and travel dates to discuss your trip."}
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-bold text-slate-950">
              {isTamil ? 'சேவை மையம்' : 'Service base'}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{BUSINESS_INFO.baseLocation}</p>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
          {isTamil
            ? 'பயணத் திட்டம், பிக்கப் விவரங்கள் மற்றும் இறுதி கட்டணம் ஆகியவை ஒவ்வொரு விசாரணைக்கும் நேரடியாக உறுதி செய்யப்படும்.'
            : 'Trip arrangements, pickup details and the final quotation are confirmed directly for each enquiry.'}
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {isTamil ? 'பயண விவரங்களுடன் விசாரிக்கவும்' : 'Enquire about a trip'}
        </button>
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {isTamil ? 'அழைக்க' : 'Call'} {BUSINESS_INFO.primaryPhone}
        </a>
      </div>
    </article>
  );
};
