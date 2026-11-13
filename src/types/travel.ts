export type Language = 'en' | 'ta';

export interface Vehicle {
  id: string;
  name: string;
  seatingCapacity: string;
  seatsCount: number;
  image: string;
  shortDescription: {
    en: string;
    ta: string;
  };
  suitableFor: {
    en: string[];
    ta: string[];
  };
  amenities: {
    en: string[];
    ta: string[];
  };
  luggageCapacity: string;
  idealGroup: string;
}

export type TourCategory = 
  | 'family'
  | 'friends'
  | 'group'
  | 'temple'
  | 'hill_station'
  | 'weekend'
  | 'wedding'
  | 'corporate'
  | 'school_college'
  | 'event'
  | 'outstation'
  | 'all_india';

export interface TourPackage {
  id: string;
  title: {
    en: string;
    ta: string;
  };
  category: TourCategory;
  categoryLabel: {
    en: string;
    ta: string;
  };
  duration: {
    en: string;
    ta: string;
  };
  startingFrom: string;
  destinations: string[];
  recommendedVehicles: string[];
  highlights: {
    en: string[];
    ta: string[];
  };
  description: {
    en: string;
    ta: string;
  };
}

export interface TouristDestination {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  state: string;
  distanceFromCoimbatore: string;
  approxTravelTime: string;
  bestTimeToVisit: string;
  image: string;
  description: {
    en: string;
    ta: string;
  };
  topAttractions: string[];
  recommendedVehicleTypes: string[];
}

export interface BookingEnquiry {
  customerName: string;
  mobileNumber: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  passengers: number | string;
  selectedVehicle: string;
  travelType: string;
  additionalRequirements?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  trip: string;
  vehicle: string;
  review: {
    en: string;
    ta: string;
  };
  rating: number;
  date: string;
}

export interface SEOLandingData {
  slug: string;
  title: {
    en: string;
    ta: string;
  };
  metaTitle: string;
  metaDescription: string;
  h1: {
    en: string;
    ta: string;
  };
  subtitle: {
    en: string;
    ta: string;
  };
  keywords: string[];
  recommendedVehicleId: string;
  content: {
    en: string[];
    ta: string[];
  };
  faqs: {
    question: { en: string; ta: string };
    answer: { en: string; ta: string };
  }[];
}
