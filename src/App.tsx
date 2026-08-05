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
import { WhatsAppButton } from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
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
      <WhatsAppButton />
    </div>
  );
}

export default App;