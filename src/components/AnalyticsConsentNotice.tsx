import React from 'react';
import { setAnalyticsConsent } from '../utils/analytics';
import { Language } from '../types/travel';

interface AnalyticsConsentNoticeProps {
  language: Language;
  onClose: () => void;
  onOpenPrivacy: () => void;
}

export const AnalyticsConsentNotice: React.FC<AnalyticsConsentNoticeProps> = ({
  language,
  onClose,
  onOpenPrivacy,
}) => {
  const isTamil = language === 'ta';
  return <aside
    aria-labelledby="analytics-consent-title"
    className="fixed inset-x-3 bottom-24 z-40 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:inset-x-6 sm:bottom-6"
  >
    <h2 id="analytics-consent-title" className="text-sm font-bold text-slate-950">
      {isTamil ? 'விருப்பமான இணையதளப் பயன்பாட்டு அளவீடு' : 'Optional website analytics'}
    </h2>
    <p className="mt-1 text-xs leading-relaxed text-slate-600">
      {isTamil
        ? 'நீங்கள் அனுமதி அளித்த பிறகே Google Analytics பொதுவான பக்க மற்றும் பொத்தான் பயன்பாட்டை அளவிடும். பயண விவரங்கள் அல்லது படிவ உள்ளடக்கம் அனுப்பப்படாது. இந்தத் தேர்வை பின்னர் மாற்றலாம்.'
        : 'If enabled for this site, Google Analytics will measure general page and button usage only after you opt in. Trip details and form contents are not sent as analytics events. You can change this choice later.'}
    </p>
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => {
          setAnalyticsConsent('granted');
          onClose();
        }}
        className="min-h-11 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white"
      >
        {isTamil ? 'அளவீட்டை அனுமதிக்கவும்' : 'Allow optional analytics'}
      </button>
      <button
        type="button"
        onClick={() => {
          setAnalyticsConsent('denied');
          onClose();
        }}
        className="min-h-11 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
      >
        {isTamil ? 'வேண்டாம்' : 'No thanks'}
      </button>
      <button
        type="button"
        onClick={() => {
          onClose();
          onOpenPrivacy();
        }}
        className="min-h-11 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 underline underline-offset-2"
      >
        {isTamil ? 'தனியுரிமை விவரங்கள்' : 'Privacy details'}
      </button>
    </div>
  </aside>
};
