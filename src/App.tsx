import React, { useEffect, useState } from 'react';
import { Language } from './types/travel';
import routeMetadata from './data/routeMetadata.json';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SitemapModal } from './components/SitemapModal';
import { AnalyticsConsentNotice } from './components/AnalyticsConsentNotice';
import { AboutUsPage } from './pages/AboutUsPage';
import { VehiclesPage } from './pages/VehiclesPage';
import { TourPackagesPage } from './pages/TourPackagesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { EventsPage } from './pages/EventsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { RouteLandingPage } from './pages/RouteLandingPage';
import {
  AnalyticsConsent,
  getAnalyticsConsent,
  initializeAnalytics,
  isAnalyticsConfigured,
  trackAnalyticsEvent,
} from './utils/analytics';

type RouteMetadata = (typeof routeMetadata)[number];

const getRoute = (pathname: string): RouteMetadata | undefined => {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return routeMetadata.find((route) => route.path === normalizedPath);
};

const getTabForRoute = (route?: RouteMetadata): string => {
  if (!route) return 'not-found';
  return route.type === 'destination' || route.type === 'service'
    ? 'route-detail'
    : ('tab' in route ? route.tab : 'not-found');
};

const getSiteUrl = (): string =>
  (import.meta.env.VITE_SITE_URL || 'https://brothertravelers.tamilselvir932.workers.dev').replace(/\/+$/, '');

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeRoute, setActiveRoute] = useState<RouteMetadata | undefined>(() => getRoute(window.location.pathname));
  const [currentTab, setCurrentTab] = useState<string>(() => getTabForRoute(getRoute(window.location.pathname)));
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    vehicle?: string;
    tour?: string;
    destination?: string;
    pickupLocation?: string;
    travelDate?: string;
    passengers?: string | number;
  }>({});
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState<AnalyticsConsent>(() => getAnalyticsConsent());
  const [consentNoticeOpen, setConsentNoticeOpen] = useState(
    () => isAnalyticsConfigured() && getAnalyticsConsent() === null
  );

  const handleOpenBooking = (prefill?: {
    vehicle?: string;
    tour?: string;
    destination?: string;
    pickupLocation?: string;
    travelDate?: string;
    passengers?: string | number;
  }) => {
    setBookingPrefill(prefill ?? {});
    setBookingModalOpen(true);
  };

  const handleNavigate = (tab: string, slug?: string) => {
    const route = tab === 'seo-page'
      ? routeMetadata.find((item) => item.path === `/services/${slug}`)
      : tab === 'route-detail'
        ? routeMetadata.find((item) => 'slug' in item && item.slug === slug)
        : routeMetadata.find((item) => 'tab' in item && item.tab === tab);
    if (!route) {
      setCurrentTab('not-found');
      setActiveRoute(undefined);
      return;
    }

    if (window.location.pathname !== route.path) {
      window.history.pushState({}, '', route.path);
    }
    setActiveRoute(route);
    setCurrentTab(getTabForRoute(route));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const route = getRoute(window.location.pathname);
      setActiveRoute(route);
      setCurrentTab(getTabForRoute(route));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (!activeRoute) {
      document.title = "Page not found | BROTHER'S TRAVELS";
      return;
    }

    const canonicalUrl = new URL(activeRoute.path, `${getSiteUrl()}/`).href;
    const setMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
      const element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      element?.setAttribute(attribute, value);
    };
    document.documentElement.lang = language;
    document.title = activeRoute.title;
    setMeta('meta[name="description"]', 'content', activeRoute.description);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', activeRoute.title);
    setMeta('meta[property="og:description"]', 'content', activeRoute.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', activeRoute.title);
    setMeta('meta[name="twitter:description"]', 'content', activeRoute.description);

    const schema = document.getElementById('business-schema');
    if (schema) {
      const business = {
        '@type': ['TravelAgency', 'LocalBusiness'],
        '@id': `${getSiteUrl()}/#business`,
        name: "BROTHER'S TRAVELS",
        url: getSiteUrl(),
        telephone: '+916381186895',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Coimbatore',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        areaServed: { '@type': 'City', name: 'Coimbatore' },
      };
      const structuredData = activeRoute.type === 'service'
        ? {
            '@context': 'https://schema.org',
            '@graph': [
              business,
              {
                '@type': 'Service',
                name: activeRoute.heading,
                description: activeRoute.description,
                areaServed: { '@type': 'City', name: 'Coimbatore' },
                provider: { '@id': `${getSiteUrl()}/#business` },
                url: canonicalUrl,
              },
            ],
          }
        : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: activeRoute.title,
        description: activeRoute.description,
        url: canonicalUrl,
        ...(activeRoute.path === '/' ? { mainEntity: business } : {}),
      };
      schema.textContent = JSON.stringify(structuredData);
    }
  }, [activeRoute, language]);

  useEffect(() => {
    if (!activeRoute || analyticsConsent !== 'granted') return;
    initializeAnalytics();
    trackAnalyticsEvent('page_view', { page_path: activeRoute.path });
  }, [activeRoute, analyticsConsent]);

  useEffect(() => {
    const handleTrackedLink = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      if (link.href.startsWith('tel:')) {
        trackAnalyticsEvent('call_now_click', { page_path: window.location.pathname });
      } else if (/https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(link.href)) {
        trackAnalyticsEvent('whatsapp_click', { source: 'link', page_path: window.location.pathname });
      }
    };

    document.addEventListener('click', handleTrackedLink);
    return () => document.removeEventListener('click', handleTrackedLink);
  }, []);

  const handleConsentNoticeClose = () => {
    setConsentNoticeOpen(false);
    setAnalyticsConsent(getAnalyticsConsent());
  };

  const openAnalyticsPreferences = () => {
    if (isAnalyticsConfigured()) {
      setConsentNoticeOpen(true);
    } else {
      handleNavigate('privacy');
    }
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomePage
            language={language}
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBooking}
          />
        );
      case 'about':
        return <AboutUsPage language={language} onOpenBooking={() => handleOpenBooking()} />;
      case 'vehicles':
        return <VehiclesPage language={language} />;
      case 'tours':
        return <TourPackagesPage language={language} onOpenBookingModal={handleOpenBooking} />;
      case 'destinations':
        return (
          <DestinationsPage
            language={language}
            onOpenBookingModal={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        );
      case 'events':
        return <EventsPage language={language} onOpenBookingModal={handleOpenBooking} />;
      case 'contact':
        return <ContactUsPage language={language} />;
      case 'route-detail':
        return activeRoute ? (
          <RouteLandingPage
            route={activeRoute}
            language={language}
            onOpenBooking={handleOpenBooking}
          />
        ) : null;
      case 'privacy':
      case 'terms':
        return (
          <LegalPage
            type={currentTab}
            language={language}
            analyticsConfigured={isAnalyticsConfigured()}
            onManageAnalytics={openAnalyticsPreferences}
          />
        );
      default:
        return (
          <main className="mx-auto max-w-3xl px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-slate-950">Page not found</h1>
            <p className="mt-3 text-slate-600">The page may have moved or is not available.</p>
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              className="mt-6 min-h-11 rounded-xl bg-[#142B49] px-5 py-3 font-semibold text-white"
            >
              Return home
            </button>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => handleNavigate(tab)}
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />
      <main className="flex-1">{renderActiveView()}</main>
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenSitemap={() => setSitemapModalOpen(true)}
        onManageAnalytics={openAnalyticsPreferences}
        analyticsConfigured={isAnalyticsConfigured()}
      />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        language={language}
        initialVehicle={bookingPrefill.vehicle}
        initialTour={bookingPrefill.tour}
        initialDestination={bookingPrefill.destination}
        initialPickupLocation={bookingPrefill.pickupLocation}
        initialTravelDate={bookingPrefill.travelDate}
        initialPassengers={bookingPrefill.passengers}
      />
      <SitemapModal
        isOpen={sitemapModalOpen}
        onClose={() => setSitemapModalOpen(false)}
      />
      <FloatingWhatsApp language={language} />
      {consentNoticeOpen && isAnalyticsConfigured() && (
        <AnalyticsConsentNotice
          language={language}
          onClose={handleConsentNoticeClose}
          onOpenPrivacy={() => handleNavigate('privacy')}
        />
      )}
    </div>
  );
}
