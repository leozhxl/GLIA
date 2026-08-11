import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { WhenToSeek } from '@/components/WhenToSeek';
import { ValueProp } from '@/components/ValueProp';
import { Specialties } from '@/components/Specialties';
import { Process } from '@/components/Process';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustStrip />
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
