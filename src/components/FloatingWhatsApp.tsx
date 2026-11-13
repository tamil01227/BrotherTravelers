import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';
import { PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  onOpenBookingModal: () => void;
  language: 'en' | 'ta';
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenBookingModal,
  language,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsAppLink = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello BROTHER'S TRAVELS, I would like to enquire about vehicle booking and tour packages from Coimbatore."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 max-w-xs animate-bounce">
          <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
          <span>
            {language === 'ta'
              ? 'வாட்ஸ்அப்பில் உடனடி கட்டண விவரம் பெறுக!'
              : 'Chat directly on WhatsApp for instant quote!'}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Cluster */}
      <div className="flex items-center gap-2">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-sky-900 text-white shadow-lg hover:bg-sky-800 transition-all hover:scale-105"
          title={`Call ${BUSINESS_INFO.primaryPhone}`}
          aria-label="Call BROTHER'S TRAVELS"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Main Button */}
        <a
          href={directWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          aria-label="Chat on WhatsApp with BROTHER'S TRAVELS"
        >
          <MessageCircle className="w-6 h-6 fill-current shrink-0" />
          <span className="font-bold text-sm tracking-wide hidden sm:inline">
            {language === 'ta' ? 'வாட்ஸ்அப் சாட்' : 'WhatsApp Us'}
          </span>
        </a>
      </div>
    </div>
  );
};
