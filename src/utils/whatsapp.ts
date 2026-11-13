import { BookingEnquiry } from '../types/travel';

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

  return `Hello BROTHER'S TRAVELS,

I would like to enquire about a booking.

Customer Name: ${enquiry.customerName || 'Customer'}
Mobile Number: ${enquiry.mobileNumber || 'Not specified'}
Pickup Location: ${enquiry.pickupLocation || 'Coimbatore'}
Destination: ${enquiry.destination || 'Not specified'}
Travel Date: ${enquiry.travelDate || 'Flexible'}
${returnDateLine}
Passengers: ${enquiry.passengers || '1'}
Vehicle: ${enquiry.selectedVehicle || 'Any available'}
Travel Type: ${enquiry.travelType || 'Tour/Outstation'}${notesLine}

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
    text = `Hello BROTHER'S TRAVELS,

I would like to check the availability and best quotation for:
Vehicle: ${subject}
Pickup: Coimbatore (Free Pickup)

Please share your rates and package details.
Thank you.`;
  } else if (type === 'tour') {
    text = `Hello BROTHER'S TRAVELS,

I am interested in planning a trip for:
Tour: ${subject}
Starting from: Coimbatore

Please share itinerary details, vehicle options, and best quotation.
Thank you.`;
  } else {
    text = `Hello BROTHER'S TRAVELS,

I would like to enquire about your travel and vehicle rental services across India.
Pickup Location: Coimbatore

Please contact me with details.
Thank you.`;
  }

  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Safely redirects the browser to the WhatsApp URL.
 */
export function openWhatsApp(url: string): void {
  // Opening in new tab or direct window depending on viewport
  window.open(url, '_blank', 'noopener,noreferrer');
}
