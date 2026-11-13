export type AnalyticsConsent = 'granted' | 'denied' | null;
export type AnalyticsEventName =
  | 'page_view'
  | 'whatsapp_click'
  | 'booking_form_submit'
  | 'call_now_click'
  | 'vehicle_quote_request';

const CONSENT_STORAGE_KEY = 'brother-travels-analytics-consent';
const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
const validMeasurementId = measurementId ? /^G-[A-Z0-9]+$/.test(measurementId) : false;

if (measurementId && !validMeasurementId) {
  console.error('Google Analytics is disabled because VITE_GA4_MEASUREMENT_ID is invalid.');
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isAnalyticsConfigured(): boolean {
  return validMeasurementId;
}

export function getAnalyticsConsent(): AnalyticsConsent {
  if (!isAnalyticsConfigured()) return null;
  const consent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return consent === 'granted' || consent === 'denied' ? consent : null;
}

export function setAnalyticsConsent(consent: Exclude<AnalyticsConsent, null>): void {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  if (consent === 'granted') {
    initializeAnalytics();
  } else if (window.gtag) {
    window.gtag('consent', 'update', { analytics_storage: 'denied' });
  }
}

export function initializeAnalytics(): void {
  if (!validMeasurementId || !measurementId || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag('js', new Date());
  window.gtag('consent', 'default', { analytics_storage: 'denied' });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('config', measurementId, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.onerror = () => console.error('Google Analytics could not be loaded.');
  document.head.appendChild(script);
}

export function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  parameters: Record<string, string | number | boolean> = {}
): void {
  if (!validMeasurementId || !measurementId || getAnalyticsConsent() !== 'granted' || !window.gtag) return;
  window.gtag('event', eventName, parameters);
}
