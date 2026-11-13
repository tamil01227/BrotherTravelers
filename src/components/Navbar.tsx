import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Home,
  Info,
  Car,
  Compass,
  HeartHandshake,
  ChevronRight,
  Navigation,
  ChevronDown,
} from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';
import { BrandLogo } from './BrandLogo';

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
  const [desktopDestinationsOpen, setDesktopDestinationsOpen] = useState(false);
  const t = TRANSLATIONS[language];
  const mobileMenuPanelRef = useRef<HTMLDivElement>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const desktopDestinationsRef = useRef<HTMLDetailsElement>(null);
  const closeDesktopDestinations = () => {
    setDesktopDestinationsOpen(false);
    desktopDestinationsRef.current?.removeAttribute('open');
  };

  const navLinks = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'about', label: t.nav.about, icon: Info },
    { id: 'vehicles', label: t.nav.vehicles, icon: Car },
    { id: 'tours', label: t.nav.tours, icon: Compass },
    { id: 'destinations', label: t.nav.destinations, icon: Navigation },
    { id: 'events', label: t.nav.events, icon: HeartHandshake },
    { id: 'contact', label: t.nav.contact, icon: Phone },
  ];
  const desktopNavLinks = navLinks.filter((link) => link.id !== 'tours' && link.id !== 'destinations');

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const firstFocusable = mobileMenuPanelRef.current?.querySelector<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
    );
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        const focusableElements = Array.from(
          mobileMenuPanelRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
          ) ?? []
        );
        if (focusableElements.length === 0) return;
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      mobileMenuTriggerRef.current?.focus();
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const closeDesktopMenu = (event: MouseEvent) => {
      if (!desktopDestinationsRef.current?.contains(event.target as Node)) {
        closeDesktopDestinations();
      }
    };
    const closeDesktopMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && desktopDestinationsRef.current?.open) {
        closeDesktopDestinations();
        desktopDestinationsRef.current.querySelector('summary')?.focus();
      }
    };

    document.addEventListener('click', closeDesktopMenu);
    document.addEventListener('keydown', closeDesktopMenuOnEscape);
    return () => {
      document.removeEventListener('click', closeDesktopMenu);
      document.removeEventListener('keydown', closeDesktopMenuOnEscape);
    };
  }, []);

  const handleNavClick = (id: string) => {
    closeDesktopDestinations();
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand and wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            aria-label="BROTHER'S TRAVELS home"
            className="text-left group cursor-pointer focus:outline-hidden min-w-0 shrink-0"
          >
            <BrandLogo />
          </button>

          {/* Zone 2: Navigation Links (Single-Line Desktop) */}
          <nav className="hidden 2xl:flex items-center gap-5 text-sm font-medium text-slate-700">
            {desktopNavLinks.slice(0, 3).map((link) => {
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
            <details
              ref={desktopDestinationsRef}
              open={desktopDestinationsOpen}
              onToggle={(event) => setDesktopDestinationsOpen(event.currentTarget.open)}
              className="relative"
            >
              <summary className={`flex min-h-10 cursor-pointer list-none items-center gap-1 whitespace-nowrap ${
                currentTab === 'tours' || currentTab === 'destinations'
                  ? 'font-bold text-sky-900'
                  : 'text-slate-600 hover:text-slate-950'
              }`}>
                {language === 'ta' ? 'சுற்றுலா தலங்கள்' : 'Destinations'}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </summary>
              <div className="absolute left-0 top-full z-50 mt-2 min-w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {navLinks.filter((link) => link.id === 'tours' || link.id === 'destinations').map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`block min-h-11 w-full rounded-lg px-3 py-2 text-left text-sm ${
                      currentTab === link.id ? 'bg-sky-50 font-semibold text-sky-950' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </details>
            {desktopNavLinks.slice(3).map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                    isActive ? 'text-sky-900 font-bold' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-700 rounded-full" />}
                </button>
              );
            })}
          </nav>

          {/* Language, call and primary booking actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Language Selector Toggle (Tablet/Desktop) */}
            <div className="hidden 2xl:flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
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

            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="hidden min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950 2xl:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{language === 'ta' ? 'அழைக்க' : 'Call Now'}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              aria-label={language === 'ta' ? 'முன்பதிவு' : 'Book Now'}
              title={language === 'ta' ? 'முன்பதிவு' : 'Book Now'}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 min-h-12 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#203B4A] bg-amber-500 hover:bg-amber-600 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{language === 'ta' ? 'முன்பதிவு' : 'Book Now'}</span>
            </button>

            {/* Mobile and tablet menu button */}
            <button
              ref={mobileMenuTriggerRef}
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-sheet"
              aria-label={mobileMenuOpen
                ? (language === 'ta' ? 'வழிசெலுத்தல் மெனுவை மூடு' : 'Close menu')
                : (language === 'ta' ? 'வழிசெலுத்தல் மெனுவைத் திற' : 'Open menu')}
              className="2xl:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:border-slate-300 active:scale-95 transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 2xl:hidden"
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
            ref={mobileMenuPanelRef}
            id="mobile-navigation-sheet"
            className="fixed inset-y-0 right-0 flex w-[84vw] max-w-[360px] flex-col overflow-hidden border-l border-slate-200 bg-white shadow-2xl"
          >
            {/* Sheet Header */}
            <div className="px-5 pt-3 pb-4 border-b border-slate-100 flex items-center justify-between gap-3 shrink-0">
              <BrandLogo variant="drawer" />

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
                  className="min-h-12 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-[#203B4A] font-bold text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{language === 'ta' ? 'இலவச விலை கேளுங்கள்' : 'Get Free Quote'}</span>
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
                <span className="tabular-nums font-medium text-slate-700">{BUSINESS_INFO.primaryPhone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
