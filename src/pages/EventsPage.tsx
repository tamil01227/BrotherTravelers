import React from 'react';
import { CheckCircle2, MessageCircle, Phone, Sparkles, Building, GraduationCap, HeartHandshake } from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO } from '../data/travelData';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface EventsPageProps {
  language: Language;
  onOpenBookingModal: (prefill?: { tour?: string; vehicle?: string }) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  language,
  onOpenBookingModal,
}) => {
  const handleQuickWhatsApp = (eventTitle: string) => {
    const url = generateQuickWhatsAppUrl(eventTitle, 'tour');
    openWhatsApp(url);
  };

  const eventServices = [
    {
      id: 'weddings',
      icon: HeartHandshake,
      titleEn: 'Wedding & Reception Logistics',
      titleTa: 'திருமண வரவேற்பு & விருந்தினர் போக்குவரத்து',
      descEn: 'Share the event date, pickup locations and passenger count to discuss vehicle options for your wedding or reception.',
      descTa: 'திருமண நாள், பிக்கப் இடங்கள் மற்றும் பயணிகள் எண்ணிக்கையைப் பகிர்ந்து வாகன விருப்பங்களைப் பேசுங்கள்.',
      recommended: 'Force Urbania (16 Seater) & SML Coach (21 Seater)',
      featuresEn: [
        'Event date and schedule',
        'Pickup and drop locations',
        'Estimated passenger count',
        'Vehicle preferences',
      ],
      featuresTa: [
        'நிகழ்வு தேதி மற்றும் அட்டவணை',
        'பிக்கப் மற்றும் டிராப் இடங்கள்',
        'பயணிகள் எண்ணிக்கை',
        'வாகன விருப்பங்கள்',
      ],
    },
    {
      id: 'corporate',
      icon: Building,
      titleEn: 'Corporate Outings & Executive Transit',
      titleTa: 'கார்ப்பரேட் நிறுவன சுற்றுலா & அதிகாரிகளுக்கான சேவை',
      descEn: 'Share your group size, route and schedule to discuss vehicle choices for a company outing or business event.',
      descTa: 'நிறுவனப் பயணம் அல்லது நிகழ்வுக்கான குழு அளவு, வழித்தடம் மற்றும் அட்டவணையைப் பகிர்ந்து வாகனங்களைப் பேசுங்கள்.',
      recommended: 'Force Urbania (16S) & Toyota Innova (7S)',
      featuresEn: [
        'Passenger count',
        'Trip route and stops',
        'Schedule and pickup locations',
        'Preferred vehicle size',
      ],
      featuresTa: [
        'பயணிகள் எண்ணிக்கை',
        'வழித்தடம் மற்றும் நிறுத்தங்கள்',
        'அட்டவணை மற்றும் பிக்கப் இடங்கள்',
        'விரும்பும் வாகன அளவு',
      ],
    },
    {
      id: 'college',
      icon: GraduationCap,
      titleEn: 'School & College Industrial Tours',
      titleTa: 'பள்ளி மற்றும் கல்லூரி கல்வி சுற்றுலா',
      descEn: 'Discuss passenger numbers, destination, supervision needs and dates for a school or college group journey.',
      descTa: 'பள்ளி அல்லது கல்லூரிக் குழுப் பயணத்திற்கான பயணிகள் எண்ணிக்கை, இடம், தேவைகள் மற்றும் தேதியைப் பேசுங்கள்.',
      recommended: 'SML Coach (21 Seater) & Force Traveller (14 Seater)',
      featuresEn: [
        'Passenger count',
        'Trip route and stops',
        'Schedule and pickup locations',
        'Preferred vehicle size',
      ],
      featuresTa: [
        'பயணிகள் எண்ணிக்கை',
        'வழித்தடம் மற்றும் நிறுத்தங்கள்',
        'அட்டவணை மற்றும் பிக்கப் இடங்கள்',
        'விரும்பும் வாகன அளவு',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'கோயம்புத்தூரிலிருந்து நிகழ்வு பயணங்கள்' : 'Event travel from Coimbatore'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' ? 'நிகழ்வு & திருமண போக்குவரத்து' : 'Wedding & Event Transportation'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? 'திருமணம், நிறுவன நிகழ்வு அல்லது கல்விச் சுற்றுலாவிற்கான தேதி, இடங்கள் மற்றும் குழு அளவைப் பகிர்ந்து வாகன விருப்பங்களை விசாரிக்கவும்.'
            : 'Share your event schedule, pickup locations and passenger count to discuss suitable vehicle options. Multi-vehicle needs and availability must be confirmed directly.'}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {eventServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-sky-700" />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  {language === 'ta' ? service.titleTa : service.titleEn}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'ta' ? service.descTa : service.descEn}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-slate-800 block mb-0.5">Possible vehicle options:</span>
                  <span className="text-sky-900 font-semibold">{service.recommended}</span>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Details to share
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {(language === 'ta' ? service.featuresTa : service.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenBookingModal({ tour: service.titleEn })}
                  className="py-2.5 px-3 rounded-lg text-xs font-bold text-sky-950 bg-sky-50 hover:bg-sky-100 transition-colors text-center cursor-pointer"
                >
                  Plan Event
                </button>
                <button
                  onClick={() => handleQuickWhatsApp(service.titleEn)}
                  className="py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold">
            {language === 'ta' ? 'உங்கள் நிகழ்வு விவரங்களைப் பகிருங்கள்' : 'Discuss your event transport'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            {language === 'ta'
              ? 'பயணிகள் எண்ணிக்கை, வழித்தடம் மற்றும் அட்டவணையைத் தெரிவித்து கிடைக்கும் வாகனங்களை உறுதி செய்யுங்கள்.'
              : 'Call to discuss passenger numbers, pickup points, schedule and vehicle availability for your event.'}
          </p>
        </div>

        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-sky-700 hover:bg-sky-600 text-white transition-colors shrink-0"
        >
          <Phone className="w-4 h-4" />
          <span>{language === 'ta' ? 'அழைக்க' : 'Call'}: {BUSINESS_INFO.primaryPhone}</span>
        </a>
      </div>
    </div>
  );
};
