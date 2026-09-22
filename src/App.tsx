import { useEffect, useState } from 'react';
import { EbookPage } from '@/components/EbookPage';
import { MaintenancePage } from '@/components/MaintenancePage';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { WhenToSeek } from '@/components/WhenToSeek';
import { ValueProp } from '@/components/ValueProp';
import { Specialties } from '@/components/Specialties';
import { Process } from '@/components/Process';
import { Team } from '@/components/Team';
import { KitFono } from '@/components/KitFono';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

function getEbookSlug() {
  const match = window.location.hash.match(/^#\/ebook\/(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

// Site em manutenção até esta data (inclusive). Remova este bloqueio para reativar antes.
const MAINTENANCE_UNTIL = new Date('2026-09-27T00:00:00-03:00');

function App() {
  const [ebookSlug, setEbookSlug] = useState(getEbookSlug);
  const inMaintenance = Date.now() < MAINTENANCE_UNTIL.getTime();

  useEffect(() => {
    const onHashChange = () => {
      const slug = getEbookSlug();
      setEbookSlug(slug);
      if (slug) window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (ebookSlug) return;
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [ebookSlug]);

  if (inMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollReveal />
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      {ebookSlug && <EbookPage slug={ebookSlug} />}
      <main id="conteudo" hidden={Boolean(ebookSlug)}>
        <Hero />
        <TrustStrip />
        <KitFono />
        <WhenToSeek />
        <ValueProp />
        <Specialties />
        <Process />
        <Team />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
