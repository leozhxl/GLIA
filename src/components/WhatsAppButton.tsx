import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setTipOpen(true), 800);
    const close = setTimeout(() => setTipOpen(false), 7000);
    return () => {
      clearTimeout(timer);
      clearTimeout(close);
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'
      }`}
    >
      {/* Tip bubble */}
      <div
        className={`relative mb-1 max-w-[200px] rounded-2xl bg-white p-3.5 shadow-xl transition-all duration-300 sm:max-w-[240px] ${
          tipOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
        }`}
      >
        <button
          onClick={() => setTipOpen(false)}
          className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-glia-100 text-glia-600 hover:bg-glia-200"
          aria-label="Fechar"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <p className="text-sm font-semibold text-glia-900">
          Olá! Posso te ajudar?
        </p>
        <p className="mt-0.5 text-xs text-glia-800/60">
          Tire dúvidas ou agende pelo WhatsApp.
        </p>
      </div>

      {/* Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-7 w-7" strokeWidth={2.2} />
      </a>
    </div>
  );
}