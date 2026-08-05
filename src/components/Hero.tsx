import { CalendarHeart, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/supabase';

const HERO_IMAGE = '/clinica-recepcao.jpg';

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[640px] items-center overflow-hidden lg:min-h-[760px]">
      {/* Background photo */}
      <img
        src={HERO_IMAGE}
        alt="Recepção acolhedora da Glia, com poltronas confortáveis e a marca da clínica na parede"
        loading="eager"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-glia-950/85 via-glia-950/60 to-glia-950/25" />

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-coral-300/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-coral-300">
            Clínica multidisciplinar infantil
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
            Cuidado que acompanha cada conquista do seu filho, com uma equipe{' '}
            <span className="text-coral-300">verdadeiramente integrada</span>
          </h1>

          <p className="mt-6 flex items-center gap-3 font-display text-lg italic text-sand-100/80">
            <span className="h-px w-8 bg-coral-300/60" />
            Juliana Fernandes
          </p>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-sand-100/85 sm:text-lg">
            Fonoaudiologia, Psicologia, Neuropsicologia, Terapia ABA, Nutrição e
            Pediatria — sob o mesmo teto, com um plano terapêutico só do seu filho.
            Sem correr entre clínicas, sem respostas soltas.
          </p>

          <div className="mt-9">
            <a
              href="#agendar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-coral-950/30 transition-all hover:bg-coral-600 active:scale-95"
            >
              <CalendarHeart className="h-5 w-5" />
              Agende uma avaliação
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp pill */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-2xl shadow-black/30 transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="h-4 w-4" />
        Agendar pelo WhatsApp
      </a>
    </section>
  );
}