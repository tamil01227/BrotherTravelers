import { Vehicle, TourPackage, TouristDestination, Testimonial, SEOLandingData } from '../types/travel';

export const BUSINESS_INFO = {
  name: "BROTHER'S TRAVELS",
  tamilName: "பிரதர்ஸ் டிராவல்ஸ்",
  owner: "DINESHKUMAR R",
  primaryPhone: "6381186895",
  whatsappNumber: "6381186895",
  additionalPhones: ["9677373602", "8220405252"],
  serviceCoverage: {
    en: "All Over India (Special Tourist Permits & Experienced Drivers)",
    ta: "இந்தியா முழுவதும் (அனைத்து மாநில அனுமதிகள் & அனுபவம் வாய்ந்த ஓட்டுநர்கள்)",
  },
  pickupFacility: {
    en: "Free Pickup Throughout Coimbatore City & Suburbs",
    ta: "கோவை மாநகரம் முழுவதும் இலவச பிக்கப் வசதி",
  },
  baseLocation: "Coimbatore, Tamil Nadu, India",
  operatingHours: "24x7 Customer Support & Emergency Assistance",
  establishedYear: 2018,
};

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: "force-traveller-14",
    name: "Force Traveller – 14 Seater",
    seatingCapacity: "14 Passengers + 1 Driver",
    seatsCount: 14,
    image: "/src/assets/images/fleet_force_traveller_1794284646646.jpg",
    shortDescription: {
      en: "Spacious 14-seater luxury Force Traveller featuring high-back pushback seats, dual AC chilling, wide panoramic windows, and ample luggage rack for comfortable group & family journeys.",
      ta: "14 பேர் அமரக்கூடிய சொகுசு போர்ஸ் டிராவலர். புஷ்பேக் இருக்கைகள், சக்திவாய்ந்த ஏசி, அகன்ற ஜன்னல்கள் மற்றும் போதுமான லக்கேஜ் இடவசதியுடன் கூடிய பயணம்.",
    },
    suitableFor: {
      en: ["Family Outings", "Hill Station Trips (Ooty/Kodaikanal)", "Temple Tours", "Airport Transfers", "Group Expeditions"],
      ta: ["குடும்ப சுற்றுலா", "மலை வாசஸ்தல பயணங்கள் (ஊட்டி/கொடைக்கானல்)", "கோயில் சுற்றுலா", "விமான நிலைய பிக்கப்", "குழு பயணங்கள்"],
    },
    amenities: {
      en: ["Comfort Pushback Seats", "Powerful Dual AC", "Stereo Sound System", "Spacious Roof & Rear Luggage Space", "Charging Ports"],
      ta: ["புஷ்பேக் இருக்கைகள்", "இரட்டை ஏசி வசதி", "மியூசிக் சிஸ்டம்", "போதுமான லக்கேஜ் வசதி", "மொபைல் சார்ஜிங்"],
    },
    luggageCapacity: "10-12 Large Suitcases",
    idealGroup: "10 - 14 Passengers",
  },
  {
    id: "force-urbania-16",
    name: "Force Urbania – 16 Seater",
    seatingCapacity: "16 Passengers + 1 Driver",
    seatsCount: 16,
    image: "/src/assets/images/fleet_force_urbania_1794284646206.jpg",
    shortDescription: {
      en: "Next-generation European-styled ultra-luxury van. World-class ride comfort, individual reclining seats with armrests, whisper-quiet cabin, and premium ambient LED lighting.",
      ta: "அதிநவீன ஐரோப்பிய வடிவமைப்பு கொண்ட பிரீமியம் 16 சீட்டர் போர்ஸ் அர்பானியா. சொகுசு இருக்கைகள், அமைதியான உள்பகுதி மற்றும் சிறப்பான பயண அனுபவம்.",
    },
    suitableFor: {
      en: ["Executive Corporate Travel", "Luxury Wedding Guests", "Long-Distance All India Tours", "VIP Delegations", "Celebrity Transit"],
      ta: ["கார்ப்பரேட் நிறுவன பயணங்கள்", "திருமண விருந்தினர் வரவேற்பு", "நீண்ட தூர சுற்றுலா", "விஐபி பயணங்கள்"],
    },
    amenities: {
      en: ["Ultra-Comfort Reclining Seats", "Individual AC Louvers & Lights", "USB Fast Chargers at Every Seat", "Quiet Monocoque Suspension", "Premium Audio System"],
      ta: ["சொகுசு சாய்வு இருக்கைகள்", "தனித்தனி ஏசி & விளக்குகள்", "ஒவ்வொரு இருக்கையிலும் யுஎஸ்பி சார்ஜர்", "மென்மையான சவாரி", "பிரீமியம் ஆடியோ"],
    },
    luggageCapacity: "12-14 Medium Luggage Bags",
    idealGroup: "12 - 16 Passengers",
  },
  {
    id: "sml-coach-21",
    name: "SML Coach – 21 Seater",
    seatingCapacity: "21 Passengers + 1 Driver + 1 Guide",
    seatsCount: 21,
    image: "/src/assets/images/fleet_sml_coach_1794284664007.jpg",
    shortDescription: {
      en: "Heavy-duty 21-seater tourist mini-coach bus engineered for large family reunions, corporate outings, pilgrimage groups, and school/college industrial tours across all Indian states.",
      ta: "21 பேர் பயணிக்கக்கூடிய எஸ்எம்எல் சொகுசு மினி பஸ். பெரிய குடும்பங்கள், திருமண குழுக்கள், பள்ளி/கல்லூரி சுற்றுலா மற்றும் கோயில் யாத்திரைகளுக்கு மிகச் சிறந்தது.",
    },
    suitableFor: {
      en: ["Large Group Pilgrimages", "Wedding Guest Shuttles", "School & College Industrial Visits", "Corporate Team Outings", "Multi-Day Interstate Tours"],
      ta: ["பெரிய ஆன்மீக சுற்றுலா", "திருமண வரவேற்பு பஸ்", "பள்ளி & கல்லூரி சுற்றுலா", "கார்ப்பரேட் சுற்றுலா"],
    },
    amenities: {
      en: ["Cushioned 2x2 Pushback Seating", "Central Air Conditioning", "Overhead Luggage Racks & Boot", "Mic & PA Tour Audio System", "Spacious Aisle"],
      ta: ["2x2 குஷன் புஷ்பேக் இருக்கைகள்", "முழு ஏசி வசதி", "மேல்புற லக்கேஜ் ரேக்", "மைக் மற்றும் ஆடியோ வசதி", "அகன்ற நடைபாதை"],
    },
    luggageCapacity: "18-22 Large Travel Bags",
    idealGroup: "16 - 21 Passengers",
  },
  {
    id: "toyota-innova-7",
    name: "Toyota Innova – 7 Seater",
    seatingCapacity: "6-7 Passengers + 1 Driver",
    seatsCount: 7,
    image: "/src/assets/images/fleet_toyota_innova_1794284663766.jpg",
    shortDescription: {
      en: "The undisputed king of Indian highway travel. Legendary reliability, plush middle-row captain seats, superior hill climbing performance on ghat roads, and silent cabin comfort.",
      ta: "இந்திய நெடுஞ்சாலைகளின் நம்பகமான டொயோட்டா இன்னோவா 7 சீட்டர். மலைப் பாதைகளில் சுலபமான இயக்கம் மற்றும் குடும்பங்களுக்கு மிகச் சிறந்த சௌகரியம்.",
    },
    suitableFor: {
      en: ["Family Vacationing", "Hill Station Driving (Ooty / Valparai / Munnar)", "Business Executive Travel", "Airport Fast Transit", "Weekend Getaways"],
      ta: ["குடும்ப சுற்றுலா", "ஊட்டி/வால்பாறை மலைப்பயணம்", "வியாபார பயணங்கள்", "விமான நிலைய சேவை"],
    },
    amenities: {
      en: ["Plush Captain Seating", "Rear Dual Blower AC", "Smooth Ghat-Road Suspension", "Generous Boot Luggage Space", "Bluetooth Infotainment"],
      ta: ["சொகுசு கேப்டன் சீட்கள்", "பின்புற ஏசி வசதி", "சிறந்த சஸ்பென்ஷன்", "பூட் லக்கேஜ் இடம்", "மியூசிக் கனெக்ஷன்"],
    },
    luggageCapacity: "4-5 Medium Travel Bags",
    idealGroup: "4 - 7 Passengers",
  },
  {
    id: "maruti-ertiga-7",
    name: "Maruti Ertiga – 7 Seater",
    seatingCapacity: "6 Passengers + 1 Driver",
    seatsCount: 7,
    image: "/src/assets/images/fleet_maruti_ertiga_1794284663239.jpg",
    shortDescription: {
      en: "Smart, fuel-efficient, and budget-friendly 7-seater MPV ideal for city errands, small family weekend getaways, outstation cab booking, and quick airport transfers from Coimbatore.",
      ta: "சிக்கனமான மற்றும் வசதியான மாருதி எர்டிகா 7 சீட்டர். சிறு குடும்பங்களின் வார இறுதி சுற்றுலா மற்றும் வெளிவட்டார பயணங்களுக்கு உகந்தது.",
    },
    suitableFor: {
      en: ["Budget Family Trips", "Weekend Outstation Travels", "City Pickup & Local Sightseeing", "Coimbatore Airport & Railway Drops"],
      ta: ["பட்ஜெட் குடும்ப சுற்றுலா", "வார இறுதி பயணங்கள்", "கோவை உள்ளூர் பயணம்", "விமான நிலைய பிக்கப்"],
    },
    amenities: {
      en: ["Smart Hybrid AC Cooling", "Flexible Folding Rear Seats", "Clean Interiors & Charging Sockets", "Smooth City & Highway Ride"],
      ta: ["குளிர்ந்த ஏசி வசதி", "மடக்கக்கூடிய பின்புற இருக்கைகள்", "சுத்தமான உள்பகுதி", "மென்மையான சவாரி"],
    },
    luggageCapacity: "3-4 Medium Travel Bags",
    idealGroup: "3 - 6 Passengers",
  },
];

export const TOUR_PACKAGES_DATA: TourPackage[] = [
  {
    id: "ooty-mudumalai-hill-station",
    title: {
      en: "Coimbatore to Ooty & Mudumalai Hill Station Expedition",
      ta: "கோவை முதல் ஊட்டி & முதுமலை மலை வாசஸ்தல சுற்றுலா",
    },
    category: "hill_station",
    categoryLabel: {
      en: "Hill Station Trips",
      ta: "மலை வாசஸ்தல சுற்றுலா",
    },
    duration: {
      en: "2 Days / 1 Night or 3 Days",
      ta: "2 நாட்கள் / 1 இரவு அல்லது 3 நாட்கள்",
    },
    startingFrom: "Coimbatore (Free Doorstep Pickup)",
    destinations: ["Coimbatore", "Mettupalayam Ghat", "Coonoor", "Ooty", "Pykara Lake", "Mudumalai Forest"],
    recommendedVehicles: ["Toyota Innova – 7 Seater", "Force Traveller – 14 Seater", "Force Urbania – 16 Seater"],
    highlights: {
      en: ["Botanical Gardens & Rose Garden", "Doddabetta Peak Viewpoint", "Nilgiri Mountain Railway Crossing", "Pykara Waterfalls & Speedboating", "Scenic hairpin bends with veteran drivers"],
      ta: ["தாவரவியல் பூங்கா & ரோஜா தோட்டம்", "தொட்டபெட்டா காட்சி முனை", "பைக்காரா அருவி & படகு சவாரி", "அனுபவம் வாய்ந்த ஓட்டுநருடன் மலைப்பாதை பயணம்"],
    },
    description: {
      en: "Experience the Queen of Hill Stations with zero driving stress. Our experienced mountain drivers navigate the 36 hairpin bends of Kallatti/Kotagiri safely. Free pickup from any home or hotel in Coimbatore.",
      ta: "எவ்வித ஓட்டுநர் சிரமமும் இன்றி ஊட்டியை கண்டு மகிழுங்கள். எங்கள் அனுபவமிக்க ஓட்டுநர்கள் பாதுகாப்பாக உங்களை அழைத்துச் செல்வார்கள். கோவையில் எங்கும் இலவச பிக்கப்.",
    },
  },
  {
    id: "kerala-munnar-alleppey-circuit",
    title: {
      en: "Coimbatore to Kerala: Munnar Tea Hills & Alleppey Backwaters",
      ta: "கோவை முதல் கேரளா: மூணார் தேயிலை தோட்டம் & ஆலப்புழா படகு இல்லம்",
    },
    category: "outstation",
    categoryLabel: {
      en: "Outstation Trips",
      ta: "வெளிவட்டார சுற்றுலா",
    },
    duration: {
      en: "3 Days / 2 Nights or 4 Days",
      ta: "3 நாட்கள் / 2 இரவுகள்",
    },
    startingFrom: "Coimbatore (Free Pickup)",
    destinations: ["Coimbatore", "Palakkad", "Munnar", "Mattupetty Dam", "Alleppey Houseboat"],
    recommendedVehicles: ["Force Traveller – 14 Seater", "Toyota Innova – 7 Seater", "Force Urbania – 16 Seater"],
    highlights: {
      en: ["Eravikulam National Park (Nilgiri Tahr)", "Lush organic tea garden viewpoints", "Mattupetty & Kundala Lake boating", "Traditional Kerala spice plantation visits", "Alleppey backwaters luxury day cruise"],
      ta: ["இரவிகுளம் தேசிய பூங்கா", "பசுமையான தேயிலை தோட்டங்கள்", "மாட்டுப்பட்டி அணை படகு சவாரி", "ஆலப்புழா படகு இல்ல உலா"],
    },
    description: {
      en: "A mesmerizing South Indian getaway crossing the Palakkad gap into God's Own Country. Includes all Kerala inter-state permit clearances and toll management handled seamlessly.",
      ta: "கேரள மாநில சுற்றுலா அனுமதி மற்றும் சுங்கவரி நடைமுறைகள் அனைத்தும் முறையாக கவனிக்கப்படும். முழுமையான மன அமைதியுடன் கூடிய சுற்றுலா.",
    },
  },
  {
    id: "tamil-nadu-temple-tour",
    title: {
      en: "Grand Tamil Nadu Temple Pilgrimage (Madurai – Rameswaram – Kanyakumari)",
      ta: "தமிழ்நாடு ஆன்மீக யாத்திரை (மதுரை – ராமேஸ்வரம் – கன்னியாகுமரி)",
    },
    category: "temple",
    categoryLabel: {
      en: "Temple Tours",
      ta: "கோயில் யாத்திரை",
    },
    duration: {
      en: "3 Days / 2 Nights or 4 Days",
      ta: "3 நாட்கள் அல்லது 4 நாட்கள்",
    },
    startingFrom: "Coimbatore (Any Location Pickup)",
    destinations: ["Coimbatore", "Palani Murugan Temple", "Madurai Meenakshi Amman", "Rameswaram Ramanathaswamy", "Dhanushkodi", "Kanyakumari"],
    recommendedVehicles: ["SML Coach – 21 Seater", "Force Traveller – 14 Seater", "Maruti Ertiga – 7 Seater"],
    highlights: {
      en: ["Palani Adivaram & Hill Temple Darshan", "Madurai Meenakshi Temple Architecture", "Pamban Sea Bridge Panoramic Drive", "22 Theertham holy baths in Rameswaram", "Kanyakumari Sunrise & Vivekananda Memorial"],
      ta: ["பழனி தண்டாயுதபாணி சுவாமி தரிசனம்", "மதுரை மீனாட்சி அம்மன் கோயில்", "பாம்பன் கடல் பாலம் பயணம்", "ராமேஸ்வரம் புனித நீராடல்", "கன்னியாகுமரி சூரிய உதயம்"],
    },
    description: {
      en: "Thoughtfully curated pilgrimage timing allowing peaceful morning and evening darshans without rushed highway transit. Perfect for elders and large extended families.",
      ta: "பெரியவர்கள் மற்றும் குடும்பத்தினருக்கு உகந்த வகையில் அமைதியான முறையில் ஆன்மீக தரிசனம் செய்ய ஏதுவான திட்டமிடல்.",
    },
  },
  {
    id: "kodaikanal-hill-escape",
    title: {
      en: "Coimbatore to Kodaikanal Princess of Hill Stations Tour",
      ta: "கோவை முதல் கொடைக்கானல் மலைவாசஸ்தல சுற்றுலா",
    },
    category: "hill_station",
    categoryLabel: {
      en: "Hill Station Trips",
      ta: "மலை வாசஸ்தல சுற்றுலா",
    },
    duration: {
      en: "2 Days / 1 Night or 3 Days",
      ta: "2 அல்லது 3 நாட்கள்",
    },
    startingFrom: "Coimbatore",
    destinations: ["Coimbatore", "Dharapuram", "Palani Foothills", "Silver Cascade", "Kodaikanal Lake", "Pillar Rocks"],
    recommendedVehicles: ["Toyota Innova – 7 Seater", "Force Traveller – 14 Seater", "Maruti Ertiga – 7 Seater"],
    highlights: {
      en: ["Kodai Star Lake cycling & pedal boats", "Pillar Rocks & Guna Caves walk", "Bryant Botanical Park flowers", "Coaker's Walk panoramic valley mist", "Pine forest walking trail"],
      ta: ["கொடைக்கானல் ஏரி படகு சவாரி", "தூண் பாறைகள் & குணா குகை", "கோக்கர்ஸ் வாக் பள்ளத்தாக்கு காட்சி", "பைன் காடுகள் உலா"],
    },
    description: {
      en: "Enjoy the crisp pine-scented air of Kodaikanal with effortless pickup from your Coimbatore residence or airport. Safe, reliable hill transit guaranteed.",
      ta: "குளிர்ந்த கொடைக்கானல் மலைக்காற்றை அனுபவியுங்கள். உங்கள் வீட்டிலிருந்தே இலவச பிக்கப் வசதியுடன் தொடங்குகிறது.",
    },
  },
  {
    id: "wedding-fleet-transportation",
    title: {
      en: "Coimbatore Wedding & Reception Guest Transportation Service",
      ta: "கோவை திருமண வரவேற்பு மற்றும் விருந்தினர் போக்குவரத்து சேவை",
    },
    category: "wedding",
    categoryLabel: {
      en: "Wedding Transportation",
      ta: "திருமண போக்குவரத்து",
    },
    duration: {
      en: "Flexible (1 Day to Multiple Days)",
      ta: "தேவைக்கேற்ப (1 நாள் அல்லது பல நாட்கள்)",
    },
    startingFrom: "Coimbatore Wedding Halls, Hotels & Airports",
    destinations: ["Airport", "Railway Station", "Hotels", "Marriage Mandapams", "Outstation Groom/Bride Transit"],
    recommendedVehicles: ["Force Urbania – 16 Seater", "SML Coach – 21 Seater", "Toyota Innova – 7 Seater"],
    highlights: {
      en: ["Uniformed, polite, and punctual drivers", "Spotless, sanitized vehicles with flower decorations on request", "Dedicated logistics coordinator on WhatsApp", "Punctual airport & railway station guest pickups", "Multi-venue shuttle options"],
      ta: ["நேரந்தவறாத பண்பான ஓட்டுநர்கள்", "மிகவும் சுத்தமான மற்றும் அலங்கரிக்கப்பட்ட வாகனங்கள்", "விமான நிலையம் & ரயில் நிலைய பிக்கப்", "சிறப்பான ஒருங்கிணைப்பு"],
    },
    description: {
      en: "Make your family wedding seamless. We handle guest pickups from Coimbatore International Airport and Railway Station to marriage halls across Tamil Nadu and Kerala.",
      ta: "உங்கள் வீட்டு திருமணத்தை சிறப்பாக்க, விருந்தினர்களை சரியான நேரத்தில் மண்டபத்திற்கு அழைத்து வர முழு பொறுப்பையும் பிரதர்ஸ் டிராவல்ஸ் ஏற்கிறது.",
    },
  },
  {
    id: "all-india-custom-tour",
    title: {
      en: "All India Grand Tour: North & South India Long-Distance Charters",
      ta: "இந்தியா முழுமைக்குமான நீண்ட தூர சுற்றுலா சேவை",
    },
    category: "all_india",
    categoryLabel: {
      en: "All India Tours",
      ta: "அகில இந்திய சுற்றுலா",
    },
    duration: {
      en: "5 to 15 Days Custom Itineraries",
      ta: "5 முதல் 15 நாட்கள் விருப்பத்திற்கேற்ப",
    },
    startingFrom: "Coimbatore to Anywhere in India",
    destinations: ["Goa", "Karnataka (Mysore/Coorg/Hampi)", "Andhra (Tirupati)", "Maharashtra (Shirdi)", "North India circuits"],
    recommendedVehicles: ["Force Urbania – 16 Seater", "Force Traveller – 14 Seater", "SML Coach – 21 Seater"],
    highlights: {
      en: ["All India National Tourist Permit (NTP)", "Dual experienced highway drivers for non-stop comfort", "State tax, border checkpoints and toll handling", "Clean, comfortable sleeper & pushback coaches", "Transparent billing with zero hidden surprises"],
      ta: ["அனைத்து இந்திய சுற்றுலா அனுமதி", "இரு அனுபவம் வாய்ந்த நெடுஞ்சாலை ஓட்டுநர்கள்", "மாநில வரிகள் & சுங்கச்சாவடி மேலாண்மை", "நம்பகமான மற்றும் நேர்மையான சேவை"],
    },
    description: {
      en: "Cross state borders with zero hassle. BROTHER'S TRAVELS holds legitimate All-India commercial tourist permits with experienced interstate drivers.",
      ta: "மாநில எல்லைகளை எளிதாக கடக்க அனைத்து மாநில அனுமதியுடன் கூடிய வாகனங்கள் மற்றும் அனுபவமிக்க ஓட்டுநர்கள்.",
    },
  },
];

export const POPULAR_DESTINATIONS: TouristDestination[] = [
  {
    id: "ooty",
    name: {
      en: "Ooty (Udhagamandalam)",
      ta: "ஊட்டி (உதகமண்டலம்)",
    },
    state: "Tamil Nadu",
    distanceFromCoimbatore: "86 km",
    approxTravelTime: "2.5 - 3 Hours",
    bestTimeToVisit: "October to June",
    image: "/src/assets/images/destination_ooty_hills_1794284647653.jpg",
    description: {
      en: "Nestled in the blue Nilgiri mountains, Ooty is famous for vast tea estates, heritage toy train routes, cool misty weather, and the scenic Doddabetta peak.",
      ta: "நீலகிரி மலையின் பேரழகான ஊட்டி, பரந்த தேயிலைத் தோட்டங்கள், பாரம்பரிய டாய் ரயில் மற்றும் குளிர்ந்த காலநிலைக்கு பெயர் பெற்றது.",
    },
    topAttractions: ["Botanical Garden", "Rose Garden", "Ooty Lake & Boating", "Doddabetta Peak", "Pykara Falls"],
    recommendedVehicleTypes: ["Toyota Innova", "Force Traveller 14S", "Force Urbania"],
  },
  {
    id: "munnar",
    name: {
      en: "Munnar Tea Valley",
      ta: "மூணார் தேயிலை பள்ளத்தாக்கு",
    },
    state: "Kerala",
    distanceFromCoimbatore: "155 km",
    approxTravelTime: "4.5 Hours",
    bestTimeToVisit: "September to May",
    image: "/src/assets/images/hero_travel_coimbatore_1794284646361.jpg",
    description: {
      en: "Famous for rolling carpet-like tea gardens, Anamudi peak, waterfalls, and fresh mountain breezes in God's Own Country, easily accessible from Coimbatore via Pollachi.",
      ta: "பசுமையான தேயிலை தோட்டங்கள், அருவிகள் மற்றும் இயற்கை எழில் கொஞ்சும் கேரளாவின் மூணார், கோவையிலிருந்து பொள்ளாச்சி வழியாக எளிதில் சென்றடையலாம்.",
    },
    topAttractions: ["Eravikulam National Park", "Mattupetty Dam", "Top Station", "Echo Point", "Tea Museum"],
    recommendedVehicleTypes: ["Toyota Innova", "Force Traveller 14S", "Maruti Ertiga"],
  },
  {
    id: "kodaikanal",
    name: {
      en: "Kodaikanal (Princess of Hills)",
      ta: "கொடைக்கானல் (மலைகளின் இளவரசி)",
    },
    state: "Tamil Nadu",
    distanceFromCoimbatore: "170 km",
    approxTravelTime: "4.5 Hours",
    bestTimeToVisit: "Throughout the Year",
    image: "/src/assets/images/destination_ooty_hills_1794284647653.jpg",
    description: {
      en: "Situated in the Palani hills at 2,133m elevation, Kodaikanal charms visitors with star-shaped lakes, cool waterfalls, deep green valleys, and quiet pine forests.",
      ta: "பழனி மலையில் அமைந்துள்ள கொடைக்கானல், நட்சத்திர வடிவ ஏரி, குளிர்ந்த நீர்வீழ்ச்சிகள் மற்றும் பைன் காடுகளுடன் மனதை மயக்கும் சுற்றுலா தலம்.",
    },
    topAttractions: ["Kodai Lake", "Coaker's Walk", "Pillar Rocks", "Silver Cascade Falls", "Bryant Park"],
    recommendedVehicleTypes: ["Force Traveller 14S", "Toyota Innova", "SML Coach 21S"],
  },
  {
    id: "valparai",
    name: {
      en: "Valparai & Topslip Wild Circuit",
      ta: "வால்பாறை & டாப்ஸ்லிப் வன சுற்றுலா",
    },
    state: "Tamil Nadu",
    distanceFromCoimbatore: "105 km",
    approxTravelTime: "3.5 Hours",
    bestTimeToVisit: "October to March",
    image: "/src/assets/images/hero_travel_coimbatore_1794284646361.jpg",
    description: {
      en: "Known for 40 thrilling hairpin bends, endless tea plantations, wild elephants, and lion-tailed macaques near the Anamalai Tiger Reserve.",
      ta: "40 கொண்டை ஊசி வளைவுகள், ஆனைமலை புலிகள் காப்பகம் மற்றும் வன விலங்குகளுடன் கூடிய சிலிர்ப்பான மலைப்பயணம்.",
    },
    topAttractions: ["Aliyar Dam", "Solaiyar Dam", "Nallamudi Poonjolai Viewpoint", "Monkey Falls", "Balaji Temple"],
    recommendedVehicleTypes: ["Toyota Innova", "Force Traveller 14S", "Maruti Ertiga"],
  },
  {
    id: "rameswaram",
    name: {
      en: "Rameswaram & Madurai Pilgrimage",
      ta: "ராமேஸ்வரம் & மதுரை ஆன்மீக பயணம்",
    },
    state: "Tamil Nadu",
    distanceFromCoimbatore: "380 km",
    approxTravelTime: "7.5 Hours",
    bestTimeToVisit: "October to April",
    image: "/src/assets/images/destination_ooty_hills_1794284647653.jpg",
    description: {
      en: "The divine coastal town connected by the iconic Pamban Bridge, home to 22 sacred teerthams and the historic ghost town of Dhanushkodi.",
      ta: "பாம்பன் பாலம், 22 புனித தீர்த்தங்கள் மற்றும் தனுஷ்கோடி கொண்ட புகழ்பெற்ற புண்ணிய பூமி.",
    },
    topAttractions: ["Ramanathaswamy Temple", "Pamban Sea Bridge", "Dhanushkodi Beach", "Dr. APJ Abdul Kalam Memorial", "Agnitheertham"],
    recommendedVehicleTypes: ["SML Coach 21S", "Force Urbania 16S", "Force Traveller 14S"],
  },
  {
    id: "mysore-coorg",
    name: {
      en: "Mysore & Coorg (Scotland of India)",
      ta: "மைசூர் & கூர்க் (கர்நாடகா)",
    },
    state: "Karnataka",
    distanceFromCoimbatore: "195 km",
    approxTravelTime: "5 Hours",
    bestTimeToVisit: "September to April",
    image: "/src/assets/images/fleet_force_urbania_1794284646206.jpg",
    description: {
      en: "The historic city of grand palaces and Chamundi hills, paired with the coffee-scented evergreen slopes and waterfalls of Coorg.",
      ta: "அழகிய மைசூர் அரண்மனை மற்றும் காபி தோட்டங்கள் நிறைந்த கூர்க் மலைவாசஸ்தலம்.",
    },
    topAttractions: ["Mysore Palace", "Chamundeshwari Temple", "Abbey Falls Coorg", "Raja's Seat", "Dubare Elephant Camp"],
    recommendedVehicleTypes: ["Force Urbania 16S", "Toyota Innova", "Force Traveller 14S"],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Karthikeyan Shanmugam",
    location: "R.S. Puram, Coimbatore",
    trip: "Family Trip to Ooty (3 Days)",
    vehicle: "Force Traveller – 14 Seater",
    review: {
      en: "Booked a 14-seater Force Traveller for our family trip to Ooty. Driver arrived right at our doorstep in RS Puram 15 minutes before time. He was extremely skilled on the Kallatti hairpin curves. Vehicles were clean, AC worked flawlessly. Free pickup in Coimbatore is a big plus!",
      ta: "எங்கள் குடும்ப ஊட்டி சுற்றுலாவுக்காக 14 சீட்டர் போர்ஸ் டிராவலர் புக் செய்தோம். ஓட்டுநர் சொன்ன நேரத்திற்கு முன்பே ஆர்.எஸ்.புரத்திற்கு வந்தார். கொண்டை ஊசி வளைவுகளில் மிக பாதுகாப்பாக ஓட்டினார். வாகனம் மிகவும் சுத்தமாக இருந்தது.",
    },
    rating: 5,
    date: "February 2026",
  },
  {
    id: "t2",
    name: "Senthil Nathan & Priya",
    location: "Saravanampatti, Coimbatore",
    trip: "Wedding Guest Shuttles",
    vehicle: "Force Urbania (16 Seater) & SML Coach",
    review: {
      en: "DINESHKUMAR brother managed the transportation for my sister's wedding at Codissia. Coordinated guest pickups from Coimbatore Airport smoothly. The Force Urbania impressed all our VIP guests with its luxury seating. Highly recommended for weddings!",
      ta: "எனது தங்கை திருமணத்திற்கு விருந்தினர் போக்குவரத்துக்காக பிரதர்ஸ் டிராவல்ஸை அணுகினோம். தினேஷ்குமார் அவர்கள் மிகச் சிறப்பாக ஒருங்கிணைத்தார். அர்பானியா வண்டி மிகவும் சொகுசாக இருந்தது.",
    },
    rating: 5,
    date: "January 2026",
  },
  {
    id: "t3",
    name: "Vigneshwaran M",
    location: "Gandhipuram, Coimbatore",
    trip: "Kerala Munnar & Alleppey Tour",
    vehicle: "Toyota Innova – 7 Seater",
    review: {
      en: "Had a great 4-day vacation in Munnar and Alleppey with Innova. Smooth driving, no hidden toll or permit hassles, everything was clearly communicated on WhatsApp beforehand. Genuine service!",
      ta: "இன்னோவாவில் மூணார் மற்றும் ஆலப்புழா சுற்றுலா சென்றோம். ஓட்டுநர் மிகவும் பண்பானவர். மறைமுக கட்டணங்கள் எதுவும் இல்லை, வாட்ஸ்அப்பில் தெளிவான விளக்கம் கிடைத்தது.",
    },
    rating: 5,
    date: "December 2025",
  },
];

export const SEO_LANDING_PAGES: SEOLandingData[] = [
  {
    slug: "force-traveller-rental-coimbatore",
    title: {
      en: "Force Traveller Rental in Coimbatore – 14 Seater Luxury Hire",
      ta: "கோவையில் போர்ஸ் டிராவலர் வாடகை – 14 சீட்டர் சொகுசு பஸ்",
    },
    metaTitle: "14 Seater Force Traveller Rental in Coimbatore | BROTHER'S TRAVELS",
    metaDescription: "Hire 14 seater Force Traveller in Coimbatore with BROTHER'S TRAVELS. Free Coimbatore doorstep pickup, pushback seats, dual AC & mountain drivers for Ooty, Kerala & temple trips.",
    h1: {
      en: "14 Seater Force Traveller Rental in Coimbatore",
      ta: "கோவையில் 14 சீட்டர் போர்ஸ் டிராவலர் வாடகைக்கு",
    },
    subtitle: {
      en: "The preferred luxury tourist vehicle for families, corporate outings, and hill station holidays across South India.",
      ta: "தென்னிந்தியா முழுவதும் குடும்ப சுற்றுலா மற்றும் மலை வாசஸ்தல பயணங்களுக்கு மிகச் சிறந்த சொகுசு வாகனம்.",
    },
    keywords: [
      "Force Traveller rental in Coimbatore",
      "14 seater Traveller rental",
      "Tourist vehicle booking in Coimbatore",
      "Travels in Coimbatore",
      "Coimbatore to Ooty travels",
    ],
    recommendedVehicleId: "force-traveller-14",
    content: {
      en: [
        "Looking for a reliable, clean, and spacious 14-seater Force Traveller for your upcoming family holiday or corporate retreat? BROTHER'S TRAVELS provides well-maintained, pushback AC Force Travellers with free doorstep pickup across every corner of Coimbatore city.",
        "Whether you are heading up the 36 hairpin curves of the Nilgiris to Ooty and Coonoor, exploring the tea valleys of Munnar, or embarking on a holy pilgrimage to Palani, Madurai, and Rameswaram, our veteran hill-certified drivers ensure total comfort, punctuality, and passenger safety.",
        "All our Travellers are equipped with pristine dual-air-conditioning systems, generous overhead and rear luggage space, individual mobile charging points, and clear sound systems. Book with zero booking fees directly via WhatsApp.",
      ],
      ta: [
        "உங்கள் குடும்ப சுற்றுலா அல்லது நிறுவன பயணங்களுக்கு நம்பகமான 14 சீட்டர் போர்ஸ் டிராவலர் வேண்டுமா? பிரதர்ஸ் டிராவல்ஸ் கோவை மாநகரம் முழுவதும் இலவச பிக்கப் வசதியுடன் கூடிய சுத்தமான வாகனங்களை வழங்குகிறது.",
        "ஊட்டி, கொடைக்கானல், மூணார் போன்ற மலைப்பகுதிகள் மற்றும் பழனி, மதுரை, ராமேஸ்வரம் போன்ற ஆன்மீகத் தலங்களுக்கு அனுபவம் வாய்ந்த ஓட்டுநர்களுடன் பாதுகாப்பாக பயணிக்கலாம்.",
        "அனைத்து வாகனங்களிலும் புஷ்பேக் இருக்கைகள், குளிர்ந்த ஏசி மற்றும் போதுமான லக்கேஜ் இடவசதி உள்ளது. வாட்ஸ்அப் மூலம் உடனடியாக கட்டண விபரங்களை கேட்டுப் பெறலாம்.",
      ],
    },
    faqs: [
      {
        question: {
          en: "Is doorstep pickup really free across Coimbatore?",
          ta: "கோவை முழுவதும் பிக்கப் உண்மையிலேயே இலவசமா?",
        },
        answer: {
          en: "Yes! BROTHER'S TRAVELS provides 100% free pickup and drop across all residential and hotel locations throughout Coimbatore city including Gandhipuram, RS Puram, Peelamedu, Saravanampatti, Singanallur, and Coimbatore Airport.",
          ta: "ஆம்! காந்திபுரம், ஆர்.எஸ்.புரம், பீளமேடு, சரவணம்பட்டி, சிங்காநல்லூர் மற்றும் விமான நிலையம் உட்பட கோவை முழுவதும் இலவச பிக்கப் வசதி உண்டு.",
        },
      },
      {
        question: {
          en: "Are the drivers experienced in driving ghat roads and hairpin bends?",
          ta: "ஓட்டுநர்களுக்கு மலைப்பாதை அனுபவம் உள்ளதா?",
        },
        answer: {
          en: "Absolutely. Our professional drivers have 8+ years of dedicated mountain driving experience on steep ghat roads including Ooty, Valparai, Kodaikanal, and Munnar.",
          ta: "நிச்சயமாக. எங்கள் ஓட்டுநர்கள் ஊட்டி, வால்பாறை, கொடைக்கானல் மற்றும் மூணார் மலைப்பாதைகளில் 8 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்டவர்கள்.",
        },
      },
      {
        question: {
          en: "How do I book and confirm a Force Traveller?",
          ta: "போர்ஸ் டிராவலரை எவ்வாறு புக் செய்வது?",
        },
        answer: {
          en: "Simply click the 'Book on WhatsApp' button, enter your travel dates, passenger count, and destinations. Owner DINESHKUMAR R will personally provide an all-inclusive custom quotation and lock in your reservation.",
          ta: "வாட்ஸ்அப் பட்டனை கிளிக் செய்து உங்கள் பயண தேதி மற்றும் இடங்களை அனுப்புங்கள். உரிமையாளர் தினேஷ்குமார் உடனடியாக சிறந்த கட்டண விவரத்தை வழங்குவார்.",
        },
      },
    ],
  },
  {
    slug: "sml-21-seater-bus-rental-coimbatore",
    title: {
      en: "21 Seater Bus Rental in Coimbatore – SML Coach Booking",
      ta: "கோவையில் 21 சீட்டர் பஸ் வாடகை – SML கோச் புக்கிங்",
    },
    metaTitle: "21 Seater Bus Rental in Coimbatore | SML Coach Hire | BROTHER'S TRAVELS",
    metaDescription: "Rent comfortable 21-seater SML Tourist Coach bus in Coimbatore. Ideal for marriage functions, college industrial tours & pilgrimage groups. Free Coimbatore pickup.",
    h1: {
      en: "21 Seater SML Coach Bus Rental in Coimbatore",
      ta: "கோவையில் 21 சீட்டர் SML மினி பஸ் வாடகைக்கு",
    },
    subtitle: {
      en: "Spacious, heavy-duty mini-coaches equipped for wedding parties, college industrial trips, and long-distance group tours across India.",
      ta: "திருமணம், கல்லூரி இண்டஸ்ட்ரியல் விசிட் மற்றும் குழு ஆன்மீக பயணங்களுக்கு ஏற்ற 21 சீட்டர் சொகுசு பஸ்.",
    },
    keywords: [
      "21 seater bus rental",
      "Tourist vehicle booking in Coimbatore",
      "Group tour vehicle booking",
      "Wedding and event transportation",
      "Travel agency in Coimbatore",
    ],
    recommendedVehicleId: "sml-coach-21",
    content: {
      en: [
        "When organizing travel for 15 to 21 passengers, a compact car or single traveller isn't enough. Our 21-seater SML Tourist Coach delivers the perfect balance of panoramic comfort, expansive luggage compartments, and easy maneuverability through city streets and highways.",
        "BROTHER'S TRAVELS frequently coordinates wedding shuttle transportation across Coimbatore marriage halls and temples, university industrial visits to Bangalore and Chennai, and temple tours covering Tirupati, Palani, and Rameswaram.",
        "Equipped with 2x2 cushioned pushback seating, central climate control, high-fidelity public address systems, and wide windows for sightseeing. Request your tailored group fare on WhatsApp with zero obligation.",
      ],
      ta: [
        "15 முதல் 21 பேர் வரை பயணிக்கும் போது எங்களின் 21 சீட்டர் SML கோச் மிகச் சிறந்த தேர்வாகும். விசாலமான இடவசதி மற்றும் பாதுகாப்பான நெடுஞ்சாலை பயணம்.",
        "திருமண மண்டபங்கள், கல்லூரி மாணவர்களின் தொழிற்சாலை சுற்றுலா மற்றும் திருப்பதி, பழனி, ராமேஸ்வரம் போன்ற ஆன்மீக பயணங்களுக்கு அதிகம் பயன்படுத்தப்படுகிறது.",
        "2x2 குஷன் இருக்கைகள், ஏசி வசதி மற்றும் மைக் வசதியுடன் கூடியது. சிறந்த கட்டணத்தை வாட்ஸ்அப்பில் கேட்டுப் பெறுங்கள்.",
      ],
    },
    faqs: [
      {
        question: {
          en: "Can the 21 seater SML Coach accommodate large wedding luggage?",
          ta: "திருமணத்திற்கு தேவையான பெரிய லக்கேஜ்கள் வைக்க இடவசதி உள்ளதா?",
        },
        answer: {
          en: "Yes, our SML coaches feature both deep under-chassis boot luggage space and long overhead parcel racks inside the cabin.",
          ta: "ஆம், பெரிய பூட் லக்கேஜ் வசதி மற்றும் உள்பகுதியில் ரேக் வசதி உள்ளது.",
        },
      },
    ],
  },
  {
    slug: "coimbatore-to-ooty-travels",
    title: {
      en: "Coimbatore to Ooty Travels – Cab & Traveller Hire",
      ta: "கோவை முதல் ஊட்டி சுற்றுலா வண்டிகள் வாடகை",
    },
    metaTitle: "Coimbatore to Ooty Travels & Cab Booking | BROTHER'S TRAVELS",
    metaDescription: "Book Coimbatore to Ooty travels with BROTHER'S TRAVELS. Hire Innova, Ertiga, Force Traveller or Urbania. Free pickup in Coimbatore with ghat-road expert drivers.",
    h1: {
      en: "Coimbatore to Ooty Travels & Sightseeing Cab Booking",
      ta: "கோவை முதல் ஊட்டி சுற்றுலா வண்டி முன்பதிவு",
    },
    subtitle: {
      en: "Safe, scenic, and reliable mountain transit with door-to-door pickup and tailored Nilgiris sightseeing itineraries.",
      ta: "வீட்டிற்கே வந்து அழைத்துச் செல்லும் இலவச பிக்கப் வசதியுடன் கூடிய ஊட்டி மலைவாசஸ்தல பயணம்.",
    },
    keywords: [
      "Coimbatore to Ooty travels",
      "Travels in Coimbatore",
      "Innova rental in Coimbatore",
      "Force Traveller rental in Coimbatore",
      "Tourist vehicle booking in Coimbatore",
    ],
    recommendedVehicleId: "toyota-innova-7",
    content: {
      en: [
        "Ooty is just 86 km from Coimbatore, but navigating the 36 steep hairpin turns of Kallatti or Kotagiri ghat road demands a trustworthy vehicle and a seasoned driver. BROTHER'S TRAVELS specializes in stress-free Coimbatore to Ooty tour packages.",
        "Choose between Toyota Innova, Maruti Ertiga, 14-seater Force Traveller, or 16-seater Force Urbania according to your family size. We pick you up directly from Coimbatore Airport (CJB), Coimbatore Junction Railway Station, or your residence at no extra fee.",
        "Enjoy famous sights including Botanical Gardens, Rose Garden, Doddabetta Peak, Pykara Falls speedboating, and Tea Factory tours at your own relaxed pace without fixed rushed schedules.",
      ],
      ta: [
        "கோவையிலிருந்து ஊட்டி 86 கி.மீ தொலைவில் உள்ளது. 36 கொண்டை ஊசி வளைவுகளில் பாதுகாப்பாக ஓட்டும் திறமையான ஓட்டுநர்களுடன் எங்களது பயணம் அமையும்.",
        "இன்னோவா, எர்டிகா அல்லது போர்ஸ் டிராவலர் வாகனங்களை உங்கள் விருப்பத்திற்கேற்ப தேர்வு செய்யலாம். விமான நிலையம் மற்றும் ரயில் நிலையத்திலிருந்து இலவச பிக்கப் உண்டு.",
      ],
    },
    faqs: [
      {
        question: {
          en: "What is the travel time from Coimbatore to Ooty?",
          ta: "கோவையிலிருந்து ஊட்டி செல்ல எவ்வளவு நேரம் ஆகும்?",
        },
        answer: {
          en: "Typically 2.5 to 3 hours depending on traffic and route (via Mettupalayam - Coonoor or Kotagiri).",
          ta: "சுமார் 2.5 முதல் 3 மணி நேரம் ஆகும்.",
        },
      },
    ],
  },
  {
    slug: "force-urbania-rental-coimbatore",
    title: {
      en: "Force Urbania Rental in Coimbatore – 16 Seater Luxury Van",
      ta: "கோவையில் போர்ஸ் அர்பானியா வாடகை – 16 சீட்டர் சொகுசு வேன்",
    },
    metaTitle: "Force Urbania Rental in Coimbatore | 16 Seater VIP Van | BROTHER'S TRAVELS",
    metaDescription: "Hire 16 seater Force Urbania in Coimbatore with BROTHER'S TRAVELS. World-class luxury, individual reclining seats, ambient lighting for VIPs, corporate & weddings.",
    h1: {
      en: "Force Urbania 16 Seater Luxury Rental in Coimbatore",
      ta: "கோவையில் 16 சீட்டர் போர்ஸ் அர்பானியா சொகுசு வேன்",
    },
    subtitle: {
      en: "Step into modern luxury travel with the European-engineered Force Urbania. Available for corporate VIPs, NRI families, and wedding entourages.",
      ta: "ஐரோப்பிய தரத்தில் அமைந்த மிகச் சிறந்த சொகுசு வாகனம். விஐபி மற்றும் கார்ப்பரேட் பயணங்களுக்கு மிகச் சிறந்தது.",
    },
    keywords: [
      "Urbania rental in Coimbatore",
      "Travels in Coimbatore",
      "Tourist vehicle booking in Coimbatore",
      "Wedding and event transportation",
      "All India tour travels",
    ],
    recommendedVehicleId: "force-urbania-16",
    content: {
      en: [
        "The Force Urbania is the most modern, technologically advanced passenger van in India. Designed with European monocoque safety architecture, individual plush reclining seats, dedicated USB fast chargers at every row, and whispered acoustic sound-proofing.",
        "BROTHER'S TRAVELS offers the pristine 16-seater Force Urbania for discerning clients in Coimbatore who value comfort, style, and status. It is particularly popular for celebrity arrivals, corporate executive retreats, NRI family tours, and destination weddings.",
        "Contact DINESHKUMAR R on WhatsApp (6381186895) to check date availability and receive our transparent custom quotation.",
      ],
      ta: [
        "போர்ஸ் அர்பானியா இந்தியாவின் அதிநவீன சொகுசு பயணிகள் வேன் ஆகும். சர்வதேச தரத்தில் வடிவமைக்கப்பட்ட சாய்வு இருக்கைகள், தனித்தனி ஏசி மற்றும் சார்ஜிங் வசதிகள் கொண்டது.",
        "முக்கிய பிரமுகர்கள், கார்ப்பரேட் அதிகாரிகள் மற்றும் திருமண விருந்தினர்களுக்கு மிகவும் உகந்தது.",
      ],
    },
    faqs: [
      {
        question: {
          en: "Why choose Force Urbania over standard traveller vans?",
          ta: "சாதாரண வேன்களை விட அர்பானியாவை ஏன் தேர்வு செய்ய வேண்டும்?",
        },
        answer: {
          en: "Force Urbania offers significantly smoother suspension, individual business-class reclining seats, whisper-quiet cabin acoustics, and high-roof stand-up walkthrough capability.",
          ta: "அர்பானியாவில் குலுங்காத மென்மையான சவாரி, பிசினஸ் கிளாஸ் இருக்கைகள் மற்றும் சத்தமில்லாத அமைதியான உள்பகுதி உள்ளது.",
        },
      },
    ],
  },
];

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      vehicles: "Our Vehicles",
      tours: "Tour Packages",
      destinations: "Tourist Destinations",
      events: "Event Transportation",
      contact: "Contact Us",
      bookNow: "Book on WhatsApp",
      callNow: "Call Now",
    },
    hero: {
      tag: "Free Coimbatore Pickup · All India Tourist Permits",
      h1: "Explore India with BROTHER'S TRAVELS",
      p: "Comfortable, Reliable and Affordable Travel Services Across India. Book pristine Force Traveller, Urbania, SML Coach, Innova & Ertiga with zero fuss directly on WhatsApp.",
      exploreVehicles: "Explore Our Fleet",
      planTrip: "Plan Your Trip",
      whatsappDirect: "Direct WhatsApp Booking",
      callUs: "Call 6381186895",
      freePickupBadge: "Free Pickup Across Coimbatore",
      freePickupDesc: "We pick you up from any home, hotel, railway station or airport in Coimbatore at no additional charge.",
    },
    searchWidget: {
      title: "Find Your Ideal Vehicle & Tour",
      subtitle: "Filter vehicles and instant quotes tailored to your group",
      pickupPlaceholder: "Pickup Location (e.g. Coimbatore, RS Puram, Airport)",
      destinationPlaceholder: "Destination (e.g. Ooty, Munnar, Rameswaram)",
      passengersLabel: "Passengers",
      vehicleLabel: "Vehicle Preference",
      tourTypeLabel: "Tour Category",
      dateLabel: "Travel Date",
      searchBtn: "Check Availability & Get Quote",
      allVehicles: "All Vehicles",
      allCategories: "All Tour Categories",
    },
    features: {
      heading: "Why Choose BROTHER'S TRAVELS?",
      subheading: "Committed to passenger safety, transparent pricing, and punctual service since 2018.",
      item1Title: "Free Coimbatore Pickup",
      item1Desc: "Doorstep pickup from anywhere in Coimbatore without hidden dead-mileage charges.",
      item2Title: "All India Tourist Permit",
      item2Desc: "Full legal permits and experienced interstate drivers for seamless travel across any Indian state.",
      item3Title: "Transparent Quotes on WhatsApp",
      item3Desc: "No middlemen fees. Receive honest, clear quotations directly from owner DINESHKUMAR R.",
      item4Title: "Verified Mountain Drivers",
      item4Desc: "Drivers with 8+ years of dedicated hill station ghat road experience for total peace of mind.",
    },
    fleetSection: {
      title: "Our Premium Vehicle Fleet",
      subtitle: "Spotless, sanitized, and well-maintained vehicles for groups from 4 to 21 passengers.",
      requestQuote: "Request Best Quote",
      viewDetails: "Vehicle Details",
      bookWhatsApp: "Book on WhatsApp",
      seats: "Seater",
    },
    destinationsSection: {
      title: "Popular Tourist Destinations",
      subtitle: "Explore scenic hill stations, beaches, and historic pilgrimage circuits departing from Coimbatore.",
      viewTours: "View Itinerary & Quote",
      distance: "Distance from Coimbatore",
      duration: "Approx Travel Time",
    },
    testimonialsSection: {
      title: "What Our Travelers Say",
      subtitle: "Genuine customer experiences from families, wedding hosts, and corporate clients.",
    },
    footer: {
      aboutText: "BROTHER'S TRAVELS is Coimbatore's premier tourist vehicle rental and tour planning service, operated by DINESHKUMAR R. Offering comfortable Force Travellers, Urbanias, SML coaches, and luxury MPVs across India.",
      quickLinks: "Quick Navigation",
      seoPages: "Popular Rental Services",
      contactTitle: "Get in Touch",
      pickupNote: "Free pickup throughout Coimbatore city, airport, and railway stations.",
      rights: "All rights reserved. Regulated commercial tourist carriage.",
      viewSitemap: "View Sitemap (XML & HTML)",
    },
    bookingModal: {
      modalTitle: "Enquire & Book via WhatsApp",
      modalSubtitle: "Fill in your details below. You will be redirected directly to WhatsApp with your customized booking details.",
      nameLabel: "Your Name",
      phoneLabel: "Mobile Number",
      pickupLabel: "Pickup Location in Coimbatore",
      destinationLabel: "Destination / Trip Route",
      travelDateLabel: "Travel Date",
      returnDateLabel: "Return Date (Optional)",
      passengersLabel: "Number of Passengers",
      vehicleLabel: "Preferred Vehicle",
      tourTypeLabel: "Trip Type",
      notesLabel: "Additional Requirements (AC, halts, luggage)",
      submitBtn: "Send Enquiry via WhatsApp",
      disclaimer: "Note: Submitting this form opens your WhatsApp with pre-filled details. No booking is confirmed until the business owner reviews availability and shares the quotation.",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      about: "எங்களைப் பற்றி",
      vehicles: "வாகனங்கள்",
      tours: "சுற்றுலா திட்டங்கள்",
      destinations: "சுற்றுலா தலங்கள்",
      events: "நிகழ்வு போக்குவரத்து",
      contact: "தொடர்புக்கு",
      bookNow: "வாட்ஸ்அப்பில் புக் செய்க",
      callNow: "உடனே அழைக்க",
    },
    hero: {
      tag: "கோவை முழுவதும் இலவச பிக்கப் · அகில இந்திய அனுமதி",
      h1: "பிரதர்ஸ் டிராவல்ஸ் உடன் இந்தியாவை சுற்றிப் பாருங்கள்",
      p: "சௌகரியமான, நம்பகமான மற்றும் நியாயமான பயணச் சேவை. போர்ஸ் டிராவலர், அர்பானியா, SML கோச், இன்னோவா மற்றும் எர்டிகா வாகனங்களை எளிதாக வாட்ஸ்அப்பில் புக் செய்யுங்கள்.",
      exploreVehicles: "வாகனங்களை பார்க்க",
      planTrip: "பயணத்தை திட்டமிட",
      whatsappDirect: "நேரடி வாட்ஸ்அப் புக்கிங்",
      callUs: "அழைக்க 6381186895",
      freePickupBadge: "கோவை முழுவதும் இலவச பிக்கப்",
      freePickupDesc: "உங்கள் வீடு, ஹோட்டல், ரயில் நிலையம் அல்லது விமான நிலையத்திற்கு எவ்வித கூடுதல் கட்டணமும் இன்றி வந்து அழைத்துச் செல்கிறோம்.",
    },
    searchWidget: {
      title: "உங்களுக்கான வாகனத்தை தேர்வு செய்யுங்கள்",
      subtitle: "உங்கள் குழுவிற்கு ஏற்ற வாகனத்தையும் கட்டணத்தையும் உடனடியாக அறியுங்கள்",
      pickupPlaceholder: "பிக்கப் செய்யும் இடம் (உதா. கோவை, ஆர்.எஸ்.புரம்)",
      destinationPlaceholder: "செல்ல வேண்டிய இடம் (உதா. ஊட்டி, மூணார், ராமேஸ்வரம்)",
      passengersLabel: "பயணிகள் எண்ணிக்கை",
      vehicleLabel: "வாகன விருப்பம்",
      tourTypeLabel: "பயண வகை",
      dateLabel: "பயண தேதி",
      searchBtn: "விவரங்களை வாட்ஸ்அப்பில் பெறுக",
      allVehicles: "அனைத்து வாகனங்கள்",
      allCategories: "அனைத்து சுற்றுலா வகைகள்",
    },
    features: {
      heading: "பிரதர்ஸ் டிராவல்ஸை ஏன் தேர்வு செய்ய வேண்டும்?",
      subheading: "பயணிகள் பாதுகாப்பு, வெளிப்படையான கட்டணம் மற்றும் நேரந்தவறாமை எங்கள் அடையாளம்.",
      item1Title: "கோவை முழுவதும் இலவச பிக்கப்",
      item1Desc: "கோவையில் நீங்கள் இருக்கும் இடத்திற்கே வந்து கூடுதல் கட்டணமின்றி பிக்கப் செய்கிறோம்.",
      item2Title: "அகில இந்திய சுற்றுலா அனுமதி",
      item2Desc: "எந்த மாநிலத்திற்கும் எவ்வித தடையுமின்றி பயணிக்க உரிய அரசு அனுமதிகள்.",
      item3Title: "வாட்ஸ்அப்பில் வெளிப்படையான கட்டணம்",
      item3Desc: "இடைத்தரகர் இல்லை. உரிமையாளர் தினேஷ்குமார் நேரடியாக கட்டண விபரங்களை வழங்குவார்.",
      item4Title: "அனுபவம் வாய்ந்த ஓட்டுநர்கள்",
      item4Desc: "ஊட்டி, கொடைக்கானல் மலைப்பாதைகளில் 8+ ஆண்டுகள் அனுபவம் வாய்ந்த ஓட்டுநர்கள்.",
    },
    fleetSection: {
      title: "எங்களின் சிறந்த வாகனங்கள்",
      subtitle: "4 முதல் 21 பயணிகள் வரை பயணிக்க சுத்தமான மற்றும் சொகுசான வாகனங்கள்.",
      requestQuote: "சிறந்த கட்டணத்தை அறிய",
      viewDetails: "வாகன விபரங்கள்",
      bookWhatsApp: "வாட்ஸ்அப்பில் புக் செய்க",
      seats: "இருக்கைகள்",
    },
    destinationsSection: {
      title: "பிரபலமான சுற்றுலா தலங்கள்",
      subtitle: "கோவையிலிருந்து எளிதாக செல்லக்கூடிய மலைவாசஸ்தலங்கள் மற்றும் ஆன்மீக தலங்கள்.",
      viewTours: "சுற்றுலா விவரங்களை அறிய",
      distance: "கோவையிலிருந்து தூரம்",
      duration: "பயண நேரம்",
    },
    testimonialsSection: {
      title: "வாடிக்கையாளர்களின் கருத்துக்கள்",
      subtitle: "எங்களுடன் பயணித்த வாடிக்கையாளர்களின் உண்மையான அனுபவங்கள்.",
    },
    footer: {
      aboutText: "பிரதர்ஸ் டிராவல்ஸ், கோவை மாவட்டத்தின் முன்னணி சுற்றுலா வாகன சேவை நிறுவனம். உரிமையாளர் தினேஷ்குமார் ஆர் தலைமையில் இந்தியா முழுவதும் பாதுகாப்பான சேவை.",
      quickLinks: "முக்கிய இணைப்புகள்",
      seoPages: "பிரபலமான சேவைகள்",
      contactTitle: "தொடர்பு விபரங்கள்",
      pickupNote: "கோவை மாநகரம் மற்றும் விமான நிலையம் முழுவதும் இலவச பிக்கப் வசதி உண்டு.",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      viewSitemap: "தள வரைபடத்தை பார்க்க (Sitemap)",
    },
    bookingModal: {
      modalTitle: "வாட்ஸ்அப் மூலம் முன்பதிவு விவரம் பெற",
      modalSubtitle: "உங்கள் விவரங்களை நிரப்பவும். இது உங்களை நேரடியாக வாட்ஸ்அப்பிற்கு அழைத்துச் செல்லும்.",
      nameLabel: "உங்கள் பெயர்",
      phoneLabel: "மொபைல் எண்",
      pickupLabel: "கோவையில் பிக்கப் செய்யும் இடம்",
      destinationLabel: "செல்ல வேண்டிய இடம்",
      travelDateLabel: "பயண தேதி",
      returnDateLabel: "திரும்பும் தேதி (விருப்பப்பட்டால்)",
      passengersLabel: "பயணிகள் எண்ணிக்கை",
      vehicleLabel: "விருப்பமான வாகனம்",
      tourTypeLabel: "பயண வகை",
      notesLabel: "கூடுதல் தேவைகள் (ஏசி, கூடுதல் நிறுத்தங்கள்)",
      submitBtn: "வாட்ஸ்அப்பில் அனுப்பவும்",
      disclaimer: "குறிப்பு: இந்த படிவத்தை அனுப்பியவுடன் உங்கள் வாட்ஸ்அப்பில் விவரங்கள் தயாராக இருக்கும். உரிமையாளர் உறுதி செய்த பிறகே முன்பதிவு இறுதியாகும்.",
    },
  },
};
