import React from 'react';
import { Users, Calendar, Award, CheckCircle2, MessageCircle, Phone, Sparkles, Building, GraduationCap, HeartHandshake } from 'lucide-react';
import { Language } from '../types/travel';
import { BUSINESS_INFO, TRANSLATIONS } from '../data/travelData';
import { generateQuickWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface EventsPageProps {
  language: Language;
  onOpenBookingModal: (prefill?: { tour?: string; vehicle?: string }) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  language,
  onOpenBookingModal,
}) => {
  const t = TRANSLATIONS[language];

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
      descEn: 'End-to-end guest shuttling from Coimbatore Airport & Railway Station to wedding venues, hotels, and marriage halls across Tamil Nadu.',
      descTa: 'விமான நிலையம் மற்றும் ரயில் நிலையத்திலிருந்து திருமண மண்டபங்களுக்கு விருந்தினர்களை சரியான நேரத்தில் அழைத்துச் செல்லும் சிறப்பான சேவை.',
      recommended: 'Force Urbania (16 Seater) & SML Coach (21 Seater)',
      featuresEn: [
        'Punctual airport & station pickups',
        'Impeccably clean, air-conditioned vehicles',
        'Optional floral decorations for bride/groom cars',
        'Dedicated WhatsApp coordination team',
      ],
      featuresTa: [
        'நேரந்தவறாத பிக்கப் மற்றும் டிராப்',
        'மிகவும் சுத்தமான குளிர்ந்த ஏசி வாகனங்கள்',
        'மணமக்கள் கார்களுக்கு மலர் அலங்கார வசதி',
        'வாட்ஸ்அப் மூலம் தொடர் ஒருங்கிணைப்பு',
      ],
    },
    {
      id: 'corporate',
      icon: Building,
      titleEn: 'Corporate Outings & Executive Transit',
      titleTa: 'கார்ப்பரேட் நிறுவன சுற்றுலா & அதிகாரிகளுக்கான சேவை',
      descEn: 'Reliable group transit for IT company retreats, business conventions, executive delegations, and offsite team building events.',
      descTa: 'ஐடி நிறுவனங்களின் குழு சுற்றுலா, கருத்தரங்குகள் மற்றும் அதிகாரிகளுக்கான வசதியான சொகுசு வாகனங்கள்.',
      recommended: 'Force Urbania (16S) & Toyota Innova (7S)',
      featuresEn: [
        'Business-class individual reclining seats',
        'USB charging ports at every row',
        'Quiet cabin for mobile work on the go',
        'Formal GST billing support on request',
      ],
      featuresTa: [
        'பிசினஸ் கிளாஸ் சொகுசு சாய்வு இருக்கைகள்',
        'அனைத்து இருக்கைகளிலும் சார்ஜிங் வசதி',
        'அமைதியான சொகுசு சவாரி',
        'முறையான ஜிஎஸ்டி பில் வசதி',
      ],
    },
    {
      id: 'college',
      icon: GraduationCap,
      titleEn: 'School & College Industrial Tours',
      titleTa: 'பள்ளி மற்றும் கல்லூரி கல்வி சுற்றுலா',
      descEn: 'Safe, supervised group travel for engineering student industrial visits (IV) to Bangalore, Mysore, Chennai, and national research centres.',
      descTa: 'பொறியியல் மற்றும் கலை அறிவியல் கல்லூரி மாணவர்களின் தொழிற்சாலை பார்வை மற்றும் கல்வி சுற்றுலா.',
      recommended: 'SML Coach (21 Seater) & Force Traveller (14 Seater)',
      featuresEn: [
        'High-capacity 21-seater SML coaches',
        'Senior highway drivers with clean safety records',
        'Public address PA system for teachers & guides',
        'Economical transparent group pricing',
      ],
      featuresTa: [
        'அதிக இடவசதி கொண்ட 21 சீட்டர் பஸ்கள்',
        'பாதுகாப்பான நெடுஞ்சாலை ஓட்டுநர்கள்',
        'ஆசிரியர்களுக்கான மைக் & ஆடியோ வசதி',
        'மாணவர்களுக்கு ஏற்ற சிக்கனமான கட்டணம்',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 border border-sky-100">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Coimbatore Bulk & Event Fleet Hire</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
          {language === 'ta' ? 'நிகழ்வு & திருமண போக்குவரத்து' : 'Wedding & Event Transportation'}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
          {language === 'ta'
            ? 'திருமணங்கள், கார்ப்பரேட் நிகழ்வுகள் மற்றும் கல்லூரி சுற்றுலாக்களுக்கு பல வாகனங்களை சரியான நேரத்தில் ஒருங்கிணைக்கும் நம்பகமான சேவை.'
            : 'Coordinated passenger fleet management for weddings, corporate offsites, and educational visits. Let BROTHER\'S TRAVELS handle guest logistics while you celebrate.'}
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
                  <span className="font-bold text-slate-800 block mb-0.5">Recommended Vehicle:</span>
                  <span className="text-sky-900 font-semibold">{service.recommended}</span>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Service Highlights
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

      {/* Free Coimbatore Coordination Notice */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold">
            {language === 'ta' ? 'பெரிய நிகழ்வுகளுக்கான பிரத்யேக ஒருங்கிணைப்பு' : 'Need Multi-Vehicle Fleet Coordination in Coimbatore?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            {language === 'ta'
              ? 'ஒரே நேரத்தில் பல வாகனங்கள் தேவைப்படும் பெரிய திருமணங்கள் மற்றும் நிறுவன நிகழ்வுகளுக்கு தினேஷ்குமார் நேரடியாக திட்டமிடுவார்.'
              : 'Owner DINESHKUMAR R personally coordinates complex schedules, staggered guest arrivals, and multi-vehicle convoys for marriage halls across Coimbatore.'}
          </p>
        </div>

        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-sky-700 hover:bg-sky-600 text-white transition-colors shrink-0"
        >
          <Phone className="w-4 h-4" />
          <span>Call DINESHKUMAR: {BUSINESS_INFO.primaryPhone}</span>
        </a>
      </div>
    </div>
  );
};
