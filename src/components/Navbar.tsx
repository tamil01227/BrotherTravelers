import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Globe, MapPin } from 'lucide-react';
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
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'vehicles', label: t.nav.vehicles },
    { id: 'tours', label: t.nav.tours },
    { id: 'destinations', label: t.nav.destinations },
    { id: 'events', label: t.nav.events },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              {language === 'ta' ? 'கோவை முழுவதும் இலவச பிக்கப் வசதி' : 'Free Pickup Throughout Coimbatore'}
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">
              {language === 'ta' ? 'அகில இந்திய சுற்றுலா பர்மிட்' : 'All India Tourist Permit & 24x7 Support'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span className="font-semibold text-white tracking-wide">{BUSINESS_INFO.primaryPhone}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">·</span>
            <span className="text-slate-300 hidden md:inline">
              Owner: <strong className="text-white">{BUSINESS_INFO.owner}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-sky-950 group-hover:text-sky-800 transition-colors">
                BROTHER'S
              </span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-orange-600">
                TRAVELS
              </span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
              Coimbatore · All India
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-Line Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap cursor-pointer transition-colors ${
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

          {/* Zone 3: Language Switcher & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Selector Toggle */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
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
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  language === 'ta'
                    ? 'bg-white text-sky-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="தமிழுக்கு மாறவும்"
              >
                தமிழ்
              </button>
            </div>

            {/* Quick Call Action for Mobile/Tablet */}
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-sky-800 transition-colors"
              title="Call BROTHER'S TRAVELS"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
              <span>{t.nav.bookNow}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-sky-50 text-sky-900 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg bg-sky-900 text-white hover:bg-sky-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.primaryPhone} (DINESHKUMAR R)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
                <span>Free Pickup in Coimbatore</span>
                <span className="font-semibold text-slate-700">24x7 Booking</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
