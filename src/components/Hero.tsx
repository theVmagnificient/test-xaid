import { useEffect } from 'react';

const SPLINE_VIEWER_SRC = 'https://unpkg.com/@splinetool/viewer@1.12.61/build/spline-viewer.js';

// Load the Spline viewer lazily and only where the 3D scene exists (this Hero).
// Loading it globally in index.html cost every page 636KB + ~10s of main-thread
// CPU and put the homepage at Lighthouse 25. The <spline-viewer> elements below
// stay inert until the custom element is defined by this script.
const loadSplineViewer = () => {
  if (document.querySelector(`script[src="${SPLINE_VIEWER_SRC}"]`)) return;
  const s = document.createElement('script');
  s.type = 'module';
  s.src = SPLINE_VIEWER_SRC;
  document.head.appendChild(s);
};

const Hero = () => {
  useEffect(() => {
    // Skip during react-snap prerender (script would be baked into the HTML and load eagerly)
    if (navigator.userAgent.includes('ReactSnap')) return;
    // Respect reduced-motion: the scene is decorative animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    if (idle) idle(loadSplineViewer, { timeout: 2500 });
    else setTimeout(loadSplineViewer, 1200);
  }, []);

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

      {/* Content */}
      <div className="container-xaid relative z-10 pt-[80px] pb-[60px] md:pt-[100px] md:pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-xaid-blue flex-shrink-0"></span>
              <span className="font-['Poppins'] text-white/90 text-[11px] font-medium uppercase tracking-[0.12em]">For outpatient & teleradiology CT</span>
            </div>

            <h1 className="font-['Poppins'] text-[32px] md:text-[42px] lg:text-[52px] font-medium text-white leading-[1.1] tracking-[-0.02em] mb-6 animate-fade-in-up" style={{ animationDelay: '50ms' }}>
              Ready-to-sign CT reports.<br />
              <span className="text-white/60">Not an overlay.</span><br />
              A full report.
            </h1>

            <p
              className="font-['Poppins'] font-light text-white/60 text-[15px] leading-[1.65] max-w-[480px] mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '150ms' }}
            >
              AI radiology reporting for outpatient imaging centers and teleradiology providers. Head, chest, and abdomen CT — two AI layers + radiologist review at narrow AI pricing. 2–12 hr TAT
            </p>

            {/* CTAs (mobile: under subtitle) */}
            <div
              className="flex flex-wrap gap-4 mb-6 lg:mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <button
                onClick={scrollToReport}
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                See a sample report
              </button>
              <button
                onClick={scrollToContact}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                Book a demo
              </button>
            </div>

            {/* 3D element (mobile) — under CTAs */}
            <div className="lg:hidden h-[350px] mx-auto max-w-[400px] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <spline-viewer
                url="https://prod.spline.design/NTXqycpZhjx9GyOF/scene.splinecode"
                style={{ width: '100%', height: '100%', display: 'block' }}
              ></spline-viewer>
            </div>

            {/* Stats bar (mobile: under 3D) */}
            <div
              className="flex flex-wrap gap-2 mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              {[
                '95% accuracy — or we reimburse',
                '2–12 hr TAT',
                'HIPAA + ISO 27001',
              ].map((stat) => (
                <span
                  key={stat}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-xs md:text-sm font-light px-3 py-1.5 rounded-full"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — 3D element (desktop) */}
          <div className="hidden lg:block h-[600px] opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <spline-viewer
              url="https://prod.spline.design/NTXqycpZhjx9GyOF/scene.splinecode"
              style={{ width: '100%', height: '100%', display: 'block' }}
            ></spline-viewer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
