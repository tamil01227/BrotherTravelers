import React from 'react';
import { FileText, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO } from '../data/travelData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  language: Language;
  onNavigate: (tab: string, slug?: string) => void;
  onOpenBooking: () => void;
  onOpenSitemap: () => void;
  onManageAnalytics: () => void;
  analyticsConfigured: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenBooking,
  onOpenSitemap,
  onManageAnalytics,
  analyticsConfigured,
}) => {
  const isTamil = language === 'ta';
  const links = [
    { label: isTamil ? 'முகப்பு' : 'Home', tab: 'home' },
    { label: isTamil ? 'வாகனங்கள்' : 'Vehicles', tab: 'vehicles' },
    { label: isTamil ? 'சுற்றுலா' : 'Tours', tab: 'tours' },
    { label: isTamil ? 'இடங்கள்' : 'Destinations', tab: 'destinations' },
    { label: isTamil ? 'தொடர்பு' : 'Contact', tab: 'contact' },
    { label: isTamil ? 'தனியுரிமை' : 'Privacy policy', tab: 'privacy' },
    { label: isTamil ? 'விதிமுறைகள்' : 'Terms of use', tab: 'terms' },
  ];

  return (
    <footer className="border-t border-slate-800 bg-[#142B49] pb-24 pt-9 text-slate-200 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
              {isTamil
                ? 'கோயம்புத்தூரிலிருந்து உள்ளூர் மற்றும் வெளியூர் பயணங்களுக்கு வாகன விருப்பங்களை விசாரிக்கவும்.'
                : 'Ask about vehicle options for local travel and journeys from Coimbatore. Quotes and availability are confirmed directly for each trip.'}
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-amber-300"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {isTamil ? 'விசாரிக்கவும்' : 'Request a quote'}
            </button>
          </div>

          <nav aria-label={isTamil ? 'அடிக்குறிப்பு இணைப்புகள்' : 'Footer'}>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {isTamil ? 'இணைப்புகள்' : 'Explore'}
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.tab}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.tab)}
                    className="min-h-8 text-left text-slate-200 underline-offset-4 hover:text-white hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {isTamil ? 'தொடர்பு' : 'Contact'}
            </h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-slate-200">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              Coimbatore, Tamil Nadu
            </p>
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="mt-2 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              <Phone className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {BUSINESS_INFO.primaryPhone}
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("BROTHER'S TRAVELS Coimbatore")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline"
            >
              {isTamil ? 'வரைபடத்தில் தேடுங்கள்' : 'Find on Google Maps'}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BROTHER'S TRAVELS · Coimbatore</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {analyticsConfigured && (
              <button
                type="button"
                onClick={onManageAnalytics}
                className="inline-flex min-h-8 items-center gap-1.5 hover:text-white"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {isTamil ? 'பகுப்பாய்வு விருப்பங்கள்' : 'Analytics preferences'}
              </button>
            )}
            <button type="button" onClick={onOpenSitemap} className="min-h-8 hover:text-white">
              {isTamil ? 'தள வரைபடம்' : 'Sitemap'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
