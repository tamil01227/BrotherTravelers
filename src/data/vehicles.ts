import { Vehicle } from '../types/travel';
import fleetTravellerImage from '../assets/images/fleet_force_traveller_1794284646646-optimized.jpg';
import fleetUrbaniaImage from '../assets/images/fleet_force_urbania_1794284646206-optimized.jpg';
import fleetSmlCoachImage from '../assets/images/fleet_sml_coach_1794284664007-optimized.jpg';
import fleetInnovaImage from '../assets/images/fleet_toyota_innova_1794284663766-optimized.jpg';
import fleetErtigaImage from '../assets/images/fleet_maruti_ertiga_1794284663239-optimized.jpg';

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: 'force-traveller-14',
    name: 'Force Traveller – 14 Seater',
    category: { en: 'Tempo Traveller', ta: 'டெம்போ டிராவலர்' },
    seatsCount: 14,
    passengerRange: { min: 1, max: 14 },
    image: fleetTravellerImage,
    shortDescription: {
      en: 'A 14-passenger van for family outings, hill-station trips, temple tours and group travel.',
      ta: 'குடும்பச் சுற்றுலா, மலைப்பயணம், கோயில் பயணம் மற்றும் குழுப் பயணங்களுக்கு 14 பயணிகள் வாகனம்.',
    },
    suitableFor: {
      en: ['Family Outings', 'Hill Station Trips', 'Temple Tours', 'Airport Transfers', 'Group Expeditions'],
      ta: ['குடும்ப சுற்றுலா', 'மலை வாசஸ்தல பயணங்கள்', 'கோயில் சுற்றுலா', 'விமான நிலைய பிக்கப்', 'குழு பயணங்கள்'],
    },
    amenities: {
      en: ['Pushback Seats', 'Dual AC', 'Stereo Sound System', 'Luggage Space', 'Charging Ports'],
      ta: ['புஷ்பேக் இருக்கைகள்', 'இரட்டை ஏசி வசதி', 'மியூசிக் சிஸ்டம்', 'லக்கேஜ் வசதி', 'மொபைல் சார்ஜிங்'],
    },
    luggageCapacity: { en: '10–12 large suitcases', ta: '10–12 பெரிய சூட்கேஸ்கள்' },
    idealGroup: '10–14 passengers',
    whatsappLabel: { en: 'Get Free Quote', ta: 'இலவச விலை கேளுங்கள்' },
  },
  {
    id: 'force-urbania-16',
    name: 'Force Urbania – 16 Seater',
    category: { en: 'Larger Group Vehicle', ta: 'பெரிய குழு வாகனம்' },
    seatsCount: 16,
    passengerRange: { min: 1, max: 16 },
    image: fleetUrbaniaImage,
    shortDescription: {
      en: 'A 16-passenger van for group journeys, corporate travel, wedding guests and longer trips.',
      ta: 'குழுப் பயணம், நிறுவனப் பயணம், திருமண விருந்தினர் மற்றும் நீண்ட பயணங்களுக்கு 16 பயணிகள் வாகனம்.',
    },
    suitableFor: {
      en: ['Corporate Travel', 'Wedding Guests', 'Long-Distance Tours', 'Group Travel'],
      ta: ['கார்ப்பரேட் பயணம்', 'திருமண விருந்தினர்', 'நீண்ட தூர சுற்றுலா', 'குழு பயணம்'],
    },
    amenities: {
      en: ['Reclining Seats', 'Individual AC Louvers', 'USB Chargers', 'Premium Audio System'],
      ta: ['சாய்வு இருக்கைகள்', 'தனித்தனி ஏசி வசதி', 'யுஎஸ்பி சார்ஜர்', 'பிரீமியம் ஆடியோ'],
    },
    luggageCapacity: { en: '12–14 medium luggage bags', ta: '12–14 நடுத்தர பயணப் பைகள்' },
    idealGroup: '12–16 passengers',
    whatsappLabel: { en: 'Get Free Quote', ta: 'இலவச விலை கேளுங்கள்' },
  },
  {
    id: 'sml-coach-21',
    name: 'SML Coach – 21 Seater',
    category: { en: 'Group Coach', ta: 'குழு கோச்' },
    seatsCount: 21,
    passengerRange: { min: 1, max: 21 },
    image: fleetSmlCoachImage,
    shortDescription: {
      en: 'A 21-passenger coach for large family groups, pilgrimages, school or college trips and group tours.',
      ta: 'பெரிய குடும்பக் குழுக்கள், ஆன்மீகப் பயணம், பள்ளி அல்லது கல்லூரிச் சுற்றுலா மற்றும் குழுப் பயணங்களுக்கு 21 பயணிகள் கோச்.',
    },
    suitableFor: {
      en: ['Group Pilgrimages', 'Wedding Guests', 'School & College Trips', 'Corporate Outings'],
      ta: ['பெரிய ஆன்மீக சுற்றுலா', 'திருமண விருந்தினர்', 'பள்ளி & கல்லூரி சுற்றுலா', 'கார்ப்பரேட் சுற்றுலா'],
    },
    amenities: {
      en: ['2x2 Pushback Seats', 'Air Conditioning', 'Overhead Luggage Racks', 'Tour Audio System'],
      ta: ['2x2 குஷன் புஷ்பேக் இருக்கைகள்', 'ஏசி வசதி', 'மேல்புற லக்கேஜ் ரேக்', 'ஆடியோ வசதி'],
    },
    luggageCapacity: { en: '18–22 large travel bags', ta: '18–22 பெரிய பயணப் பைகள்' },
    idealGroup: '16–21 passengers',
    whatsappLabel: { en: 'Get Free Quote', ta: 'இலவச விலை கேளுங்கள்' },
  },
  {
    id: 'toyota-innova-7',
    name: 'Toyota Innova – 7 Seater',
    category: { en: 'SUV / Innova', ta: 'எஸ்யூவி / இன்னோவா' },
    seatsCount: 7,
    passengerRange: { min: 1, max: 7 },
    image: fleetInnovaImage,
    shortDescription: {
      en: 'A 7-passenger option for family holidays, hill-station drives, business travel and airport trips.',
      ta: 'குடும்பச் சுற்றுலா, மலைப்பயணம், வணிகப் பயணம் மற்றும் விமான நிலையப் பயணங்களுக்கு 7 பயணிகள் வாகனம்.',
    },
    suitableFor: {
      en: ['Family Vacations', 'Hill Station Trips', 'Business Travel', 'Airport Transfers'],
      ta: ['குடும்ப சுற்றுலா', 'மலைப்பயணம்', 'வியாபார பயணங்கள்', 'விமான நிலைய சேவை'],
    },
    amenities: {
      en: ['Captain Seats', 'Rear AC', 'Boot Luggage Space', 'Bluetooth Infotainment'],
      ta: ['கேப்டன் இருக்கைகள்', 'பின்புற ஏசி வசதி', 'பூட் லக்கேஜ் இடம்', 'மியூசிக் இணைப்பு'],
    },
    luggageCapacity: { en: '4–5 medium travel bags', ta: '4–5 நடுத்தர பயணப் பைகள்' },
    idealGroup: '4–7 passengers',
    whatsappLabel: { en: 'Get Free Quote', ta: 'இலவச விலை கேளுங்கள்' },
  },
  {
    id: 'maruti-ertiga-7',
    name: 'Maruti Ertiga – 7 Seater',
    category: { en: 'MPV', ta: 'எம்பிவி' },
    seatsCount: 7,
    passengerRange: { min: 1, max: 6 },
    image: fleetErtigaImage,
    shortDescription: {
      en: 'A 7-passenger option for small-family trips, local sightseeing, outstation travel and airport transfers.',
      ta: 'சிறு குடும்பச் சுற்றுலா, உள்ளூர் பார்வையிடல், வெளியூர் மற்றும் விமான நிலையப் பயணங்களுக்கு 7 பயணிகள் வாகனம்.',
    },
    suitableFor: {
      en: ['Family Trips', 'Weekend Outstation Travel', 'Local Sightseeing', 'Airport Transfers'],
      ta: ['குடும்ப சுற்றுலா', 'வார இறுதி பயணங்கள்', 'கோவை உள்ளூர் பயணம்', 'விமான நிலைய பிக்கப்'],
    },
    amenities: {
      en: ['AC', 'Folding Rear Seats', 'Charging Sockets'],
      ta: ['ஏசி வசதி', 'மடக்கக்கூடிய பின்புற இருக்கைகள்', 'சார்ஜிங் வசதி'],
    },
    luggageCapacity: { en: '3–4 medium travel bags', ta: '3–4 நடுத்தர பயணப் பைகள்' },
    idealGroup: '3–6 passengers',
    whatsappLabel: { en: 'Get Free Quote', ta: 'இலவச விலை கேளுங்கள்' },
  },
];
