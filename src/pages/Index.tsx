import Hero from '@/components/Hero';
import WhoWeServe from '@/components/WhoWeServe';
import Challenges from '@/components/Challenges';
import Process from '@/components/Process';
import Guarantee from '@/components/Guarantee';
import Comparison from '@/components/Comparison';
import ReportExample from '@/components/ReportExample';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LatestFromBlog from '@/components/LatestFromBlog';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Homepage JSON-LD (Organization/SoftwareApplication/FAQ) is injected into the
          prerendered HTML at build time by scripts/fix-html.mjs from
          src/data/homepageSchema.json — react-snap does not capture Helmet head on "/". */}
      <Hero />
      <WhoWeServe />
      <Challenges />
      <Process />
      <Guarantee />
      <Comparison />
      <ReportExample />
      <FAQ />
      <CTA />
      <Contact />
      <LatestFromBlog />
      <Footer />
    </div>
  );
};

export default Index;
