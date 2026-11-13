import React, { useState, useEffect } from 'react';
import { Language, SEOLandingData } from './types/travel';
import { SEO_LANDING_PAGES, TRANSLATIONS, BUSINESS_INFO } from './data/travelData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SitemapModal } from './components/SitemapModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { VehiclesPage } from './pages/VehiclesPage';
import { TourPackagesPage } from './pages/TourPackagesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { EventsPage } from './pages/EventsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { SEOLandingPage } from './pages/SEOLandingPage';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedSeoSlug, setSelectedSeoSlug] = useState<string>(SEO_LANDING_PAGES[0].slug);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    vehicle?: string;
    tour?: string;
    destination?: string;
  }>({});

  // Sitemap Modal State
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false);

  // Sync document title and html lang on state changes
  useEffect(() => {
    document.documentElement.lang = language;
    if (currentTab === 'seo-page') {
      const page = SEO_LANDING_PAGES.find((p) => p.slug === selectedSeoSlug);
      if (page) {
        document.title = `${page.metaTitle} | BROTHER'S TRAVELS`;
        return;
      }
    }

    const titles: Record<string, string> = {
      home: "BROTHER'S TRAVELS – Travel & Vehicle Booking in Coimbatore",
      about: "About Us | BROTHER'S TRAVELS Coimbatore (DINESHKUMAR R)",
      vehicles: "Our Vehicles & Tourist Coaches | BROTHER'S TRAVELS Coimbatore",
      tours: "Tour Packages & Outstation Charters | BROTHER'S TRAVELS",
      destinations: "Tourist Destinations from Coimbatore | BROTHER'S TRAVELS",
      events: "Wedding & Event Transportation Coimbatore | BROTHER'S TRAVELS",
      contact: "Contact BROTHER'S TRAVELS – 6381186895 (DINESHKUMAR R)",
    };

    document.title = titles[currentTab] || "BROTHER'S TRAVELS – Travel & Vehicle Booking in Coimbatore";
  }, [currentTab, selectedSeoSlug, language]);

  const handleOpenBooking = (prefill?: { vehicle?: string; tour?: string; destination?: string }) => {
    if (prefill) {
      setBookingPrefill(prefill);
    } else {
      setBookingPrefill({});
    }
    setBookingModalOpen(true);
  };

  const handleNavigate = (tab: string, slug?: string) => {
    if (tab === 'seo-page' && slug) {
      setSelectedSeoSlug(slug);
      setCurrentTab('seo-page');
    } else {
      setCurrentTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        return (
          <AboutUsPage
            language={language}
            onOpenBooking={() => handleOpenBooking()}
          />
        );
      case 'vehicles':
        return (
          <VehiclesPage
            language={language}
            onOpenBookingModal={handleOpenBooking}
          />
        );
      case 'tours':
        return (
          <TourPackagesPage
            language={language}
            onOpenBookingModal={handleOpenBooking}
          />
        );
      case 'destinations':
        return (
          <DestinationsPage
            language={language}
            onOpenBookingModal={handleOpenBooking}
          />
        );
      case 'events':
        return (
          <EventsPage
            language={language}
            onOpenBookingModal={handleOpenBooking}
          />
        );
      case 'contact':
        return (
          <ContactUsPage
            language={language}
          />
        );
      case 'seo-page': {
        const pageData = SEO_LANDING_PAGES.find((p) => p.slug === selectedSeoSlug) || SEO_LANDING_PAGES[0];
        return (
          <SEOLandingPage
            pageData={pageData}
            language={language}
            onNavigateHome={() => handleNavigate('home')}
            onNavigatePage={handleNavigate}
            onOpenBookingModal={handleOpenBooking}
          />
        );
      }
      default:
        return (
          <HomePage
            language={language}
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBooking}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Sticky Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenSitemap={() => setSitemapModalOpen(true)}
      />

      {/* Interactive Booking Enquiry Modal (Direct WhatsApp Generator) */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        language={language}
        initialVehicle={bookingPrefill.vehicle}
        initialTour={bookingPrefill.tour}
        initialDestination={bookingPrefill.destination}
      />

      {/* Sitemap & Robots.txt SEO Inspector Modal */}
      <SitemapModal
        isOpen={sitemapModalOpen}
        onClose={() => setSitemapModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp and Call Action Cluster */}
      <FloatingWhatsApp
        onOpenBookingModal={() => handleOpenBooking()}
        language={language}
      />
    </div>
  );
}
