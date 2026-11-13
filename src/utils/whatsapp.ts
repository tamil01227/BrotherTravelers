import { BookingEnquiry } from '../types/travel';
import { trackAnalyticsEvent } from './analytics';

export const PRIMARY_WHATSAPP_NUMBER = '916381186895';
export const DISPLAY_PHONE_NUMBERS = [
  '6381186895',
  '9677373602',
  '8220405252',
];

/**
 * Builds the structured WhatsApp enquiry message as requested.
 */
export function buildWhatsAppMessage(enquiry: BookingEnquiry): string {
  const returnDateLine = enquiry.returnDate && enquiry.returnDate.trim() !== ''
    ? `Return Date: ${enquiry.returnDate.trim()}`
    : 'Return Date: Same Day / Single Way';

  const notesLine = enquiry.additionalRequirements && enquiry.additionalRequirements.trim() !== ''
    ? `\nSpecial Notes: ${enquiry.additionalRequirements.trim()}`
    : '';
  const durationLine = enquiry.duration && enquiry.duration.trim() !== ''
    ? `Trip Duration: ${enquiry.duration.trim()}`
    : '';

  return `Hello BROTHER'S TRAVELS 👋

🧳 Trip Booking Enquiry

👤 Customer: ${enquiry.customerName || 'Customer'}
📞 Mobile: ${enquiry.mobileNumber || 'Not specified'}
📍 Pickup: ${enquiry.pickupLocation || 'Coimbatore'}
🗺️ Destination: ${enquiry.destination || 'Not specified'}
📅 Travel Date: ${enquiry.travelDate || 'Flexible'}
${returnDateLine.replace('Return Date:', '🔁 Return Date:')}
${durationLine ? `\n⏱️ ${durationLine}` : ''}
👥 Passengers: ${enquiry.passengers || '1'}
🚘 Vehicle: ${enquiry.selectedVehicle || 'Any available'}
🎒 Trip Type: ${enquiry.travelType || 'Tour/Outstation'}${notesLine.replace('Special Notes:', '📝 Special Notes:')}

Please share the availability and quotation.

Thank you.`;
}

/**
 * Generates the wa.me deep link with URL-encoded query.
 */
export function generateWhatsAppUrl(enquiry: BookingEnquiry): string {
  const message = buildWhatsAppMessage(enquiry);
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a quick single-click vehicle or tour enquiry message URL.
 */
export function generateQuickWhatsAppUrl(subject: string, type: 'vehicle' | 'tour' | 'general' = 'vehicle'): string {
  let text = '';
  if (type === 'vehicle') {
    text = `Hello BROTHER'S TRAVELS 👋

🚘 Vehicle Enquiry
Vehicle: ${subject}
📍 Pickup: Coimbatore

Please share your rates and package details.
Thank you.`;
  } else if (type === 'tour') {
    text = `Hello BROTHER'S TRAVELS 👋

🧳 Trip Enquiry
🗺️ Tour: ${subject}
📍 Starting from: Coimbatore

Please share itinerary details, vehicle options, and best quotation.
Thank you.`;
  } else {
    text = `Hello BROTHER'S TRAVELS 👋

🧳 Travel Enquiry
📍 Pickup: Coimbatore

Please contact me with details.
Thank you.`;
  }

  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Safely redirects the browser to the WhatsApp URL.
 */
export function openWhatsApp(
  url: string,
  source: 'trip_form' | 'booking_form' | 'contact_form' | 'vehicle_quote' | 'journey_planner' | 'tour_quote' | 'other' = 'other'
): void {
  trackAnalyticsEvent('whatsapp_click', { source });
  if (source === 'trip_form' || source === 'booking_form' || source === 'contact_form') {
    trackAnalyticsEvent('booking_form_submit', { source });
  }
  if (source === 'vehicle_quote') {
    trackAnalyticsEvent('vehicle_quote_request', { source });
  }
  // Opening in new tab or direct window depending on viewport
  window.open(url, '_blank', 'noopener,noreferrer');
}
