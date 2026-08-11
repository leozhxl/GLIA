import { useEffect, useState } from 'react';
import { CalendarHeart, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, whatsappLink } from '@/lib/constants';

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
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 bg-sand-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-glia-950/10' : ''
      }`}
    >
      {/* Main nav row */}
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-4 sm:h-24 sm:px-6 xl:px-8">
        <a href="#top" aria-label="GLIA - início" className="min-w-0">
          <Logo tagline="Centro Integrado de Desenvolvimento Infantil" />
        </a>

        {/* Desktop actions */}
        <div className="ml-auto hidden items-center gap-4 xl:flex">
          <nav aria-label="Navegação principal" className="flex items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent px-2.5 py-2 text-sm font-semibold text-glia-700 transition-colors hover:border-coral-200 hover:text-coral-600 2xl:px-3.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#agendar"
            className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-coral-600 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            Agende Diagnóstico Funcional
          </a>
        </div>

        {/* Mobile/tablet toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="ml-auto grid h-11 w-11 place-items-center text-glia-800 xl:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                menuOpen ? '-translate-y-1/2 rotate-45' : '-translate-y-[7px]'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-out ${
                menuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                menuOpen ? '-translate-y-1/2 -rotate-45' : 'translate-y-[6px]'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden ${
          menuOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'pointer-events-none grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Navegação móvel"
            className={`flex max-h-[80vh] flex-col gap-1 overflow-y-auto bg-sand-50/95 px-4 pb-6 pt-2 backdrop-blur-md transition-transform duration-300 ease-out sm:px-6 ${
              menuOpen ? 'translate-y-0' : '-translate-y-3'
            }`}
          >
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-coral-500 px-4 py-3 text-base font-bold text-white"
              >
                <CalendarHeart className="h-5 w-5" />
                Agende Diagnóstico Funcional
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
