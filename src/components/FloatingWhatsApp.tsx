import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';
import { PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  onOpenBookingModal: () => void;
  language: 'en' | 'ta';
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  language,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsAppLink = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello BROTHER'S TRAVELS, I would like to enquire about vehicle booking and tour packages from Coimbatore."
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-30 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Desktop-only subtle tooltip bubble (calm, non-bouncing) */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 max-w-xs">
          <span>
            {language === 'ta'
              ? 'வாட்ஸ்அப்பில் உடனடி கட்டண விவரம் பெறுக'
              : 'Chat on WhatsApp for a quick quote'}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Cluster */}
      <div className="flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-sky-900 text-white shadow-lg hover:bg-sky-800 active:scale-95 transition-all"
          title={`Call ${BUSINESS_INFO.primaryPhone}`}
          aria-label="Call BROTHER'S TRAVELS"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={directWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white w-12 h-12 sm:w-auto sm:h-12 sm:px-4 rounded-full shadow-xl hover:shadow-2xl active:scale-95 transition-all cursor-pointer"
          aria-label="Chat on WhatsApp with BROTHER'S TRAVELS"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span className="font-bold text-sm tracking-wide hidden sm:inline whitespace-nowrap">
            {language === 'ta' ? 'வாட்ஸ்அப் சாட்' : 'WhatsApp Us'}
          </span>
        </a>
      </div>
    </div>
  );
};
