import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  language: 'en' | 'ta';
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  language,
}) => {
  const directWhatsAppLink = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello BROTHER'S TRAVELS, I would like to enquire about vehicle booking and tour packages from Coimbatore."
  )}`;

  return (
    <a
      href={directWhatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-30 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#16865C] px-4 text-white shadow-lg transition-colors hover:bg-[#116B49] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16865C]"
      aria-label={language === 'ta' ? 'வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்' : 'Chat on WhatsApp with BROTHER’S TRAVELS'}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="font-bold text-sm tracking-wide">
        {language === 'ta' ? 'வாட்ஸ்அப்' : 'Chat on WhatsApp'}
      </span>
    </a>
  );
};
