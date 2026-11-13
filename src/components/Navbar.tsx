import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  MoreVertical,
  X,
  MapPin,
  Home,
  Info,
  Car,
  Compass,
  HeartHandshake,
  ChevronRight,
  Navigation,
} from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navLinks = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'about', label: t.nav.about, icon: Info },
    { id: 'vehicles', label: t.nav.vehicles, icon: Car },
    { id: 'tours', label: t.nav.tours, icon: Compass },
    { id: 'destinations', label: t.nav.destinations, icon: Navigation },
    { id: 'events', label: t.nav.events, icon: HeartHandshake },
    { id: 'contact', label: t.nav.contact, icon: Phone },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Announcement Bar (Desktop / Tablet only for airy mobile header) */}
      <div className="hidden md:block bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              {language === 'ta' ? 'கோவை முழுவதும் இலவச பிக்கப் வசதி' : 'Free Pickup Throughout Coimbatore'}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              {language === 'ta' ? 'அகில இந்திய சுற்றுலா பர்மிட்' : 'All India Tourist Permit & 24x7 Support'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span className="font-semibold text-white tracking-wide tabular-nums">{BUSINESS_INFO.primaryPhone}</span>
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">
              Owner: <strong className="text-white">{BUSINESS_INFO.owner}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Clean, single-line on mobile) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden min-w-0 shrink-0"
          >
            <div className="flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-[17px] sm:text-xl lg:text-2xl font-extrabold tracking-tight text-sky-950 group-hover:text-sky-800 transition-colors">
                BROTHER'S
              </span>
              <span className="text-[17px] sm:text-xl lg:text-2xl font-black tracking-tight text-orange-600">
                TRAVELS
              </span>
            </div>
            <div className="hidden lg:block text-[11px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
              Coimbatore · All India
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-Line Desktop) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                    isActive
                      ? 'text-sky-900 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher, Primary CTA & Redesigned Three-Dots Menu */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Language Selector Toggle (Tablet/Desktop) */}
            <div className="hidden sm:flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              <button
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-white text-sky-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ta')}
                aria-pressed={language === 'ta'}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  language === 'ta'
                    ? 'bg-white text-sky-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="தமிழுக்கு மாறவும்"
              >
                தமிழ்
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              aria-label={t.nav.bookNow}
              title={t.nav.bookNow}
              className="inline-flex items-center justify-center gap-1.5 min-h-[40px] sm:min-h-[42px] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{language === 'ta' ? 'முன்பதிவு' : 'Book Now'}</span>
            </button>

            {/* Redesigned Three-Dots Menu Button (Mobile & Tablet) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-sheet"
              aria-label={language === 'ta' ? 'வழிசெலுத்தல் மெனுவைத் திற' : 'Open menu'}
              className="xl:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:border-slate-300 active:scale-95 transition-all cursor-pointer"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Redesigned Mobile Navigation Sheet (Bottom Sheet on mobile, Right Drawer on sm–lg) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={language === 'ta' ? 'மொபைல் மெனு' : 'Navigation menu'}
        >
          {/* Scrim Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sheet / Drawer Panel */}
          <div
            id="mobile-navigation-sheet"
            className="fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto sm:w-full sm:max-w-sm bg-white rounded-t-3xl sm:rounded-t-none sm:rounded-l-3xl shadow-2xl border-t sm:border-t-0 sm:border-l border-slate-200 max-h-[88dvh] sm:max-h-none flex flex-col overflow-hidden"
          >
            {/* Mobile Drag Handle Indicator */}
            <div className="sm:hidden pt-3 pb-1 flex justify-center shrink-0">
              <span className="w-10 h-1 bg-slate-300 rounded-full" aria-hidden="true" />
            </div>

            {/* Sheet Header */}
            <div className="px-5 pt-3 pb-4 border-b border-slate-100 flex items-center justify-between gap-3 shrink-0">
              <div className="min-w-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-extrabold tracking-tight text-sky-950">
                    BROTHER'S
                  </span>
                  <span className="text-lg font-black tracking-tight text-orange-600">
                    TRAVELS
                  </span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                  <span>
                    {language === 'ta' ? 'கோவை முழுவதும் இலவச பிக்கப்' : 'Free pickup across Coimbatore'}
                  </span>
                </p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label={language === 'ta' ? 'மெனுவை மூடு' : 'Close menu'}
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Selector inside Sheet */}
            <div className="px-5 py-3 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs font-semibold text-slate-600">
                {language === 'ta' ? 'மொழி தேர்வு' : 'Language'}
              </span>
              <div className="flex items-center bg-slate-200/70 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  className={`min-h-[34px] px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    language === 'en'
                      ? 'bg-white text-sky-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ta')}
                  aria-pressed={language === 'ta'}
                  className={`min-h-[34px] px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    language === 'ta'
                      ? 'bg-white text-sky-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </div>

            {/* Touch-Friendly Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full min-h-[48px] flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-sky-50 text-sky-950 font-bold border border-sky-200/80'
                        : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100 border border-transparent font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-sky-700 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-sm truncate">{link.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-sky-700' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Thumb-Zone Bottom Quick Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3 shrink-0">
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="min-h-[48px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{language === 'ta' ? 'முன்பதிவு' : 'Get Quote'}</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="min-h-[48px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-sky-400" />
                  <span className="tabular-nums">{language === 'ta' ? 'அழைக்க' : 'Call Now'}</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>{BUSINESS_INFO.owner}</span>
                <span className="tabular-nums font-medium text-slate-700">{BUSINESS_INFO.primaryPhone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
