import React from 'react';
import { Car, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO, VEHICLES_DATA } from '../data/travelData';

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
            ? 'குடும்பம், சிறு குழு அல்லது பெரிய குழுப் பயணத்திற்கான வாகன விருப்பங்களை ஆராய்ந்து, உங்கள் வழித்தடம் மற்றும் தேதியுடன் விசாரிக்கவும்.'
            : "BROTHER'S TRAVELS is based in Coimbatore, Tamil Nadu. Explore the listed passenger vehicles and share your route, travel dates and group size to discuss a trip quotation."}
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
            ? 'கிடைக்கும் நிலை, பயண அனுமதிகள், பிக்கப் விவரங்கள் மற்றும் இறுதி கட்டணம் ஆகியவை ஒவ்வொரு பயணத்திற்கும் நேரடியாக உறுதி செய்யப்படும்.'
            : 'Vehicle availability, pickup arrangements, applicable permits and the final quotation are confirmed directly for each requested itinerary.'}
        </p>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <Car className="h-5 w-5 text-teal-700" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-[#142B49]">
            {isTamil ? 'பட்டியலிடப்பட்ட வாகனங்கள்' : 'Listed vehicle options'}
          </h2>
        </div>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES_DATA.map((vehicle) => (
            <li key={vehicle.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img src={vehicle.image} alt={vehicle.name} className="aspect-[16/9] w-full object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-slate-950">{vehicle.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{vehicle.shortDescription[language]}</p>
              </div>
            </li>
          ))}
        </ul>
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
