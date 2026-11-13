import React from 'react';
import { Phone, MessageCircle, MapPin, Shield, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS, SEO_LANDING_PAGES } from '../data/travelData';

interface FooterProps {
  language: Language;
  onNavigate: (tab: string, slug?: string) => void;
  onOpenBooking: () => void;
  onOpenSitemap: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenBooking,
  onOpenSitemap,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Free Coimbatore Pickup Banner */}
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 rounded-2xl p-6 sm:p-8 mb-12 border border-sky-800/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              <MapPin className="w-3.5 h-3.5" />
              {t.hero.freePickupBadge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {language === 'ta' ? 'கோவையில் நீங்கள் இருக்கும் இடத்திற்கே வந்து பிக்கப் செய்கிறோம்!' : 'Zero Dead Mileage – Free Pickup Across All Coimbatore Suburbs'}
            </h3>
            <p className="text-xs sm:text-sm text-sky-200/90 max-w-2xl">
              {t.hero.freePickupDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.nav.bookNow}</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Business Brand & Owner Profile */}
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold text-white tracking-tight">BROTHER'S</span>
                <span className="text-xl font-black text-orange-500 tracking-tight">TRAVELS</span>
              </div>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">
                Proprietor: <span className="text-white">{BUSINESS_INFO.owner}</span>
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>All India National Tourist Permit (NTP)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified Veteran Mountain Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Sanitized & AC Maintained Fleet</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Navigation Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vehicles')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.vehicles}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.tours}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.destinations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.events}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: SEO Landing Pages / Popular Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {t.footer.seoPages}
            </h4>
            <ul className="space-y-2 text-xs">
              {SEO_LANDING_PAGES.map((page) => (
                <li key={page.slug}>
                  <button
                    onClick={() => onNavigate('seo-page', page.slug)}
                    className="hover:text-sky-400 transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-sky-400">›</span>
                    <span>{page.h1[language]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.footer.contactTitle}
            </h4>

            <div className="space-y-2 text-xs">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-0.5">Primary & WhatsApp:</span>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="text-base font-bold text-white hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>{BUSINESS_INFO.primaryPhone}</span>
                </a>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block">Additional Lines:</span>
                {BUSINESS_INFO.additionalPhones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="block font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu – Serving All Over India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & SEO Utilities */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} BROTHER'S TRAVELS · Owner: {BUSINESS_INFO.owner} · {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSitemap}
              className="hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.footer.viewSitemap}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
