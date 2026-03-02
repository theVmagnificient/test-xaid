import reportText from '@/assets/report-example-text.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReport = () => {
    const element = document.querySelector('#report-example');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer
          url="https://prod.spline.design/gJ1DETcTJKYEDidA/scene.splinecode"
          style={{ width: '100%', height: '100%', display: 'block' }}
        ></spline-viewer>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container-xaid relative z-10 pt-[80px] pb-[60px] md:pt-[100px] md:pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-xaid-blue flex-shrink-0"></span>
              <span className="font-['Poppins'] text-white/90 text-sm font-medium">For Outpatient & Teleradiology CT</span>
            </div>

            <h1 className="font-['Poppins'] text-[38px] md:text-[50px] lg:text-[62px] font-normal text-white leading-[1.1] tracking-[-0.02em] mb-6 animate-fade-in-up" style={{ animationDelay: '50ms' }}>
              Ready-to-Sign CT Reports.<br />
              <span className="text-white/60">Not an Overlay.</span><br />
              A Full Report.
            </h1>

            <p
              className="font-['Poppins'] text-white/60 text-base md:text-lg max-w-[480px] leading-relaxed mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '150ms' }}
            >
              Head, chest, and abdomen CT. Two AI layers + radiologist review — at the price of narrow AI. 2–12 hr TAT.
            </p>

            {/* Stats bar */}
            <div
              className="flex flex-wrap gap-2 mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '250ms' }}
            >
              {[
                '62% more CT capacity',
                '90% no-edit rate',
                '<0.1% discrepancy',
                '2–12 hr TAT',
              ].map((stat) => (
                <span
                  key={stat}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-xs md:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {stat}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '350ms' }}
            >
              <button
                onClick={scrollToReport}
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                See a Sample Report
              </button>
              <button
                onClick={scrollToContact}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Right column — report preview */}
          <div
            className="hidden lg:block opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={reportText}
                  alt="Sample ready-to-sign CT radiology report"
                  className="w-full h-auto max-h-[520px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
