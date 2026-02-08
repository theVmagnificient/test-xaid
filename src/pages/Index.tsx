import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solution from '@/components/Solution';
import Comparison from '@/components/Comparison';
import ReportExample from '@/components/ReportExample';
import ReliableReports from '@/components/ReliableReports';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Challenges />
      <Solution />
      <Benefits />
      <Comparison />
      <ReportExample />
      <ReliableReports />
      <Process />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
