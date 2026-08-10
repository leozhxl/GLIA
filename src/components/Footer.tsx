import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { whatsappLink } from '@/lib/constants';
import { SPECIALTIES } from '@/data/specialties';

export function Footer() {
  return (
    <footer className="relative bg-glia-950 text-glia-100/70">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sun-600 via-sun-300 to-sun-600" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-glia-100/60">
              Centro Integrado de Desenvolvimento Infantil. Avaliação
              Funcional Integrada para reorganizar a comunicação, o
              desenvolvimento e a rotina familiar — de 0 a 15 anos.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href="https://www.instagram.com/gliacentroclinico/" label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={whatsappLink} label="WhatsApp">
                <Phone className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="font-display text-base font-bold text-white">
              Especialidades
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SPECIALTIES.map((s) => (
                <li key={s.name}>
                  <a
                    href="#especialidades"
                    className="transition-colors hover:text-white"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-display text-base font-bold text-white">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#sobre" className="transition-colors hover:text-white">Sobre a GLIA</a></li>
              <li><a href="#como-funciona" className="transition-colors hover:text-white">Como funciona</a></li>
              <li><a href="#equipe" className="transition-colors hover:text-white">Equipe</a></li>
              <li><a href="#depoimentos" className="transition-colors hover:text-white">Depoimentos</a></li>
              <li><a href="#faq" className="transition-colors hover:text-white">Dúvidas frequentes</a></li>
              <li><a href="#agendar" className="transition-colors hover:text-white">Agende Diagnóstico Funcional</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-base font-bold text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-glia-400" />
                <span>R. Antônio Simão, 87 · São José<br />Sombrio - SC · 88960-000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-glia-400" />
                <a href="tel:+554896347879" className="transition-colors hover:text-white">
                  (48) 9634-7879
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-glia-400" />
                <a href="mailto:gliacentroclinico1@gmail.com" className="transition-colors hover:text-white">
                  gliacentroclinico1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-glia-400" />
                <span>Seg a Sex: 08h–18h<br />Sáb e Dom: fechado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-glia-800">
          <iframe
            title="Mapa da clínica GLIA"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-49.6465,-29.0089,-49.6165,-28.9889&amp;layer=mapnik&amp;marker=-28.9989,-49.6314"
            className="h-56 w-full grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-glia-800 pt-8 text-xs text-glia-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} GLIA · Centro Integrado de Desenvolvimento Infantil. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-white">Política de privacidade</a>
            <a href="#" className="transition-colors hover:text-white">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-glia-200 transition-all hover:bg-glia-500 hover:text-white"
    >
      {children}
    </a>
  );
}
