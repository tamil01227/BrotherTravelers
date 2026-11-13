import React from 'react';
import { Language } from '../types/travel';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  language: Language;
  analyticsConfigured: boolean;
  onManageAnalytics: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  type,
  language,
  analyticsConfigured,
  onManageAnalytics,
}) => {
  const isTamil = language === 'ta';
  const isPrivacy = type === 'privacy';

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="mb-8">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-800">
          BROTHER'S TRAVELS
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#142B49]">
          {isPrivacy
            ? (isTamil ? 'தனியுரிமைக் கொள்கை' : 'Privacy policy')
            : (isTamil ? 'பயன்பாட்டு விதிமுறைகள்' : 'Terms of use')}
        </h1>
      </header>

      {isPrivacy ? (
        <div className="space-y-7 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-950">{isTamil ? 'பயண விசாரணைகள்' : 'Travel enquiries'}</h2>
            <p className="mt-2">
              {isTamil
                ? 'இந்த இணையதளம் விசாரணைப் படிவங்களை இணையதள தரவுத்தளத்தில் சேமிப்பதில்லை. விசாரணையைத் தேர்வு செய்தால், WhatsApp செய்தி வரைவு திறக்கப்படும் அல்லது தொலைபேசி அழைப்பு தொடங்கும். வரைவை அனுப்புவது உங்கள் முடிவு. நீங்கள் பகிரும் விவரங்கள் தொடர்புடைய செய்தி அல்லது தொலைபேசி சேவை வழங்குநராலும், வணிகத்தாலும் உங்கள் விசாரணைக்கு பதிலளிக்க பயன்படுத்தப்படும்.'
                : 'This website does not submit enquiry forms to a website database. When you choose to send an enquiry, the site opens WhatsApp with a message draft or starts a phone call. You decide whether to send the draft. Details you share are handled by the relevant messaging or phone provider and by the business to respond to your enquiry.'}
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-slate-950">{isTamil ? 'விருப்பமான பயன்பாட்டு அளவீடு' : 'Optional analytics'}</h2>
            <p className="mt-2">
              {analyticsConfigured
                ? isTamil
                  ? 'நீங்கள் அனுமதி அளித்தால் மட்டுமே Google Analytics ஏற்றப்படும். இயக்கப்பட்டால், பொதுவான பக்கப் பார்வைகள் மற்றும் WhatsApp, அழைப்பு, கட்டண விசாரணை பொத்தான் போன்ற தொடர்புகள் அளவிடப்படும். பெயர், தொலைபேசி எண், பயண வழி, தேதி, பயணிகள் எண்ணிக்கை அல்லது செய்தி உள்ளடக்கம் அனுப்பப்படாது.'
                  : 'Google Analytics is available only if you opt in. If enabled, the site records general page views and interactions such as WhatsApp, call and quote-button clicks. It does not send names, phone numbers, trip routes, dates, passenger counts or message contents as analytics event details.'
                : isTamil
                  ? 'இந்த இணையதளத்தில் Google Analytics தற்போது அமைக்கப்படவில்லை; எனவே விருப்பமான பயன்பாட்டு அளவீடு ஏற்றப்படவில்லை.'
                  : 'Google Analytics is not currently configured for this website, so optional analytics are not being loaded.'}
              {' '}{isTamil
                ? 'உங்கள் தேர்வு இந்த உலாவியில் சேமிக்கப்படும். கீழே உள்ள கட்டுப்பாட்டைப் பயன்படுத்தி அனுமதியை மாற்றலாம் அல்லது திரும்பப் பெறலாம்.'
                : 'Your choice is stored in this browser. You can update or withdraw consent using the control below.'}
            </p>
            {analyticsConfigured && (
              <button
                type="button"
                onClick={onManageAnalytics}
                className="mt-4 min-h-11 rounded-xl border border-slate-300 px-4 py-2 font-semibold text-[#142B49] hover:bg-slate-50"
              >
                {isTamil ? 'பகுப்பாய்வு அனுமதியை நிர்வகிக்கவும்' : 'Manage analytics consent'}
              </button>
            )}
          </section>
          <section>
            <h2 className="text-lg font-bold text-slate-950">{isTamil ? 'வெளிப்புற சேவைகள் மற்றும் தொடர்பு' : 'External services and contact'}</h2>
            <p className="mt-2">
              {isTamil
                ? 'WhatsApp, தொலைபேசி இணைப்புகள், Google Fonts மற்றும் பிற வெளிப்புற சேவைகள் அவற்றின் வழங்குநர்களின் தனியுரிமை விதிகளுக்கு உட்பட்டவை. நீங்கள் அனுப்பிய விசாரணை குறித்து கேள்விகள் இருந்தால் BROTHER’S TRAVELS-ஐ '
                : "WhatsApp, telephone links, Google Fonts and other external services are governed by their providers' own privacy terms. For questions about an enquiry you sent to the business, contact BROTHER'S TRAVELS at "}
              <a className="font-semibold text-teal-800 underline" href="tel:6381186895">6381186895</a>.
            </p>
          </section>
          <p className="text-xs text-slate-500">
            {isTamil
              ? 'இந்தப் பக்கம் தற்போதைய விசாரணை மற்றும் பயன்பாட்டு அளவீட்டு செயல்முறையை விளக்குகிறது; இது சட்ட ஆலோசனை அல்ல.'
              : "This page describes the website's current enquiry and analytics behavior; it is not legal advice."}
          </p>
        </div>
      ) : (
        <div className="space-y-7 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-950">{isTamil ? 'இணையதளத் தகவல்' : 'Website information'}</h2>
            <p className="mt-2">
              {isTamil
                ? 'விசாரணையைத் தயாரிக்க உதவ வாகனம், இருக்கைகள், வசதிகள், இடங்கள் மற்றும் வழித்தடத் தகவல்கள் வழங்கப்படுகின்றன. உங்கள் தேவைகள், சாலை நிலை, அனுமதிகள் மற்றும் உள்ளூர் கட்டுப்பாடுகளின்படி வழித்தடங்கள் மற்றும் எடுத்துக்காட்டு பயணத் திட்டங்கள் மாறக்கூடும்.'
                : 'Vehicle, seating, feature, destination and route information is provided to help you prepare an enquiry. Routes and example itineraries are informational and may need to change based on your requirements, road conditions, permissions and local restrictions.'}
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-slate-950">{isTamil ? 'கட்டணம் மற்றும் பயண ஏற்பாடுகள்' : 'Quotes and travel arrangements'}</h2>
            <p className="mt-2">
              {isTamil
                ? 'இந்த இணையதளம் விலை, வாகனக் கிடைக்கும் நிலை அல்லது முன்பதிவு உறுதியை வழங்காது. பயணத்திற்கு முன் வாகனம், வழித்தடம், தேதிகள், பொருந்தும் கட்டணங்கள், கட்டண விதிமுறைகள் மற்றும் பிற ஏற்பாடுகளை வணிகத்துடன் நேரடியாக உறுதி செய்ய வேண்டும்.'
                : 'No price, vehicle availability or booking confirmation is promised by this website. The business must confirm the vehicle, route, dates, applicable charges, payment terms and other arrangements directly with you before travel.'}
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-slate-950">{isTamil ? 'இணையதளப் பயன்பாடு' : 'Use of the site'}</h2>
            <p className="mt-2">
              {isTamil
                ? 'தொடர்பு இணைப்புகளை உங்கள் விருப்பப்படி பயன்படுத்தி, கட்டண விசாரணையில் சரியான விவரங்களை வழங்குங்கள். இந்தத் தளத்திலிருந்து திறக்கும் மூன்றாம் தரப்பு சேவைகள் அவற்றின் விதிமுறைகள் மற்றும் கிடைக்கும் நிலைக்கு உட்பட்டவை.'
                : 'Use the contact links voluntarily and provide accurate information when requesting a quotation. Third-party services opened from this site are subject to their own terms and availability.'}
            </p>
          </section>
        </div>
      )}
    </article>
  );
};
