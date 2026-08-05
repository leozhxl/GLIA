import { useEffect, useState } from 'react';
import { Menu, X, CalendarHeart, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { whatsappLink } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 bg-sand-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-glia-950/10' : ''
      }`}
    >
      {/* Top info strip */}
      <div className="hidden text-sand-100 sm:block" style={{ backgroundColor: '#20584c' }}>
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-2 text-xs font-medium sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-sand-100/70" />
            Sombrio-SC: (48) 9634-7879
          </span>
          <span className="h-3 w-px bg-white/15" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-sand-100/70" />
            Atendimento com hora marcada
          </span>
        </div>
      </div>

      {/* Main nav row */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <a href="#top" aria-label="GLIA - início" className="shrink-0">
          <Logo tagline="Terapia Multidisciplinar Infantil" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`border-b-2 px-3.5 py-2 text-sm font-semibold transition-colors ${
                i === 0
                  ? 'border-coral-500 text-coral-600'
                  : 'border-transparent text-glia-700 hover:border-coral-200 hover:text-coral-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="#agendar"
            className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-coral-500/30 transition-all hover:bg-coral-600 hover:shadow-coral-500/40 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl bg-glia-100 text-glia-800 lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-sand-50/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 pt-2 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-glia-800 transition-colors hover:bg-glia-100"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border-2 border-glia-200 px-4 py-3 text-center text-base font-bold text-glia-700"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#agendar"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-coral-500 px-4 py-3 text-base font-bold text-white shadow-lg shadow-coral-500/30"
            >
              <CalendarHeart className="h-5 w-5" />
              Agendar avaliação
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}