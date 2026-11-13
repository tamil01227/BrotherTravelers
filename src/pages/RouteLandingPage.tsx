import React from 'react';
import { ArrowRight, ImageOff, MapPin } from 'lucide-react';
import { Language, TouristDestination, Vehicle } from '../types/travel';
import { POPULAR_DESTINATIONS, VEHICLES_DATA } from '../data/travelData';
import routeMetadata from '../data/routeMetadata.json';

type RouteMetadata = (typeof routeMetadata)[number];

interface RouteLandingPageProps {
  route: RouteMetadata;
  language: Language;
  onOpenBooking: (prefill?: { destination?: string; vehicle?: string }) => void;
}

export const RouteLandingPage: React.FC<RouteLandingPageProps> = ({
  route,
  language,
  onOpenBooking,
}) => {
  const isTamil = language === 'ta';
  const destinationId = 'destinationId' in route ? route.destinationId : route.slug;
  const destination: TouristDestination | undefined = POPULAR_DESTINATIONS.find(
    (item) => item.id === destinationId
  );
  const vehicles: Vehicle[] = 'vehicleIds' in route
    ? VEHICLES_DATA.filter((vehicle) => route.vehicleIds.includes(vehicle.id))
    : Array.from(new Set((destination?.recommendedVehicleTypes ?? []).flatMap((name) => {
        const normalized = name.toLowerCase();
        const id = normalized.includes('urbania')
          ? 'force-urbania-16'
          : normalized.includes('traveller')
            ? 'force-traveller-14'
            : normalized.includes('coach') || normalized.includes('sml')
              ? 'sml-coach-21'
              : normalized.includes('ertiga')
                ? 'maruti-ertiga-7'
                : normalized.includes('innova')
                  ? 'toyota-innova-7'
                  : undefined;
        return id ? [id] : [];
      }))).flatMap((id) => VEHICLES_DATA.filter((vehicle) => vehicle.id === id));
  const heading = isTamil
    ? destination
      ? `கோயம்புத்தூரிலிருந்து ${destination.name.ta} பயணம்`
      : vehicles[0]
        ? `${vehicles[0].category.ta} வாடகை`
        : route.heading
    : route.heading;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="rounded-3xl bg-[#142B49] px-6 py-10 text-white sm:px-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
          {isTamil ? 'கோயம்புத்தூரிலிருந்து பயணம்' : 'Travel from Coimbatore'}
        </p>
        <h1 className="mt-3 max-w-3xl break-words text-3xl font-extrabold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
          {isTamil
            ? destination
              ? destination.description.ta
              : 'உங்கள் பயணத் தேதி, பயணிகள் எண்ணிக்கை மற்றும் வழித்தடத்தைப் பகிர்ந்து, தனிப்பயன் வாகனக் கட்டணத்தைக் கேளுங்கள்.'
            : route.description}
        </p>
        <button
          type="button"
          onClick={() => onOpenBooking({
            ...(destination ? { destination: destination.name[language] } : {}),
            ...(vehicles[0] ? { vehicle: vehicles[0].name } : {}),
          })}
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300"
        >
          {isTamil ? 'பயணக் கட்டணம் கேளுங்கள்' : 'Request a trip quote'}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </header>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        {destination && (
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              {destination.image ? (
                <img
                  src={destination.image}
                  alt={destination.name[language]}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-sm text-slate-500">
                  <ImageOff className="h-6 w-6" aria-hidden="true" />
                  <span>{isTamil ? 'படம் விரைவில் சேர்க்கப்படும்' : 'Destination photo not available'}</span>
                </div>
              )}
              {destination.imageCredit && (
                <div className="absolute bottom-2 right-2 rounded-md bg-slate-950/75 px-2 py-1 text-[10px] text-white">
                  Photo: <a href={destination.imageCredit.sourceUrl} target="_blank" rel="noreferrer" className="underline">{destination.imageCredit.author}</a>
                  {' · '}
                  <a href={destination.imageCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline">{destination.imageCredit.license}</a>
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-800">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {destination.state}
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">{destination.name[language]}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{destination.description[language]}</p>
              <h3 className="mt-5 text-sm font-bold text-slate-900">
                {isTamil ? 'பார்வையிட வேண்டிய இடங்கள்' : 'Places to explore'}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {destination.topAttractions.map((attraction) => (
                  <li key={attraction} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-700">
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <h2 className="text-xl font-bold text-slate-950">
            {isTamil ? 'குழு அளவுக்கு ஏற்ற வாகனம்' : 'Vehicle options for your group'}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {isTamil
              ? 'இருக்கை எண்ணிக்கை மற்றும் பயணத் தேவைகளை ஒப்பிட்டு, உங்கள் பயணத்திற்கான வாகனத்தைத் தேர்வு செய்யுங்கள்.'
              : 'Compare listed seating and vehicle features. Availability and the final quotation are confirmed directly for your dates and route.'}
          </p>
          {vehicles.length > 0 ? (
            <ul className="mt-5 space-y-3">
              {vehicles.map((vehicle) => (
                <li key={vehicle.id} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <img src={vehicle.image} alt="" className="h-16 w-24 rounded-lg object-cover" loading="lazy" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900">{vehicle.name}</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      {vehicle.seatsCount} {isTamil ? 'இருக்கைகள்' : 'seats'} · {vehicle.luggageCapacity[language]}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">{vehicle.shortDescription[language]}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              {isTamil
                ? 'உங்கள் பயண விவரங்களின் அடிப்படையில் வாகன விருப்பங்களைப் பரிந்துரைக்கிறோம்.'
                : 'Vehicle options can be matched to your passenger count and itinerary when you enquire.'}
            </p>
          )}
          <button
            type="button"
            onClick={() => onOpenBooking({
              ...(destination ? { destination: destination.name[language] } : {}),
              ...(vehicles[0] ? { vehicle: vehicles[0].name } : {}),
            })}
            className="mt-6 min-h-12 w-full rounded-xl bg-[#142B49] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#203b5e]"
          >
            {isTamil ? 'விவரங்களுடன் விசாரிக்கவும்' : 'Enquire with trip details'}
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">
            {isTamil ? 'விலை மற்றும் கிடைக்கும் நிலை நேரடியாக உறுதி செய்யப்படும்.' : 'No online price or availability is assumed.'}
          </p>
        </section>
      </div>
    </article>
  );
};
