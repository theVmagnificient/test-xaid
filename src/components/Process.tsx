import { useEffect, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'You send us the CT',
    description: 'Push scans via standard DICOM. Setup takes under a week',
  },
  {
    number: 2,
    title: 'AI + radiologist produce the report',
    description: 'Our foundation models analyze 100+ findings. An in-house radiologist reviews every report',
  },
  {
    number: 3,
    title: 'Ready-to-sign report in your system',
    description: 'Delivered via HL7 directly into your reporting system. You review and sign',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding bg-xaid-blue">
      <div className="container-xaid">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left: White Card */}
          <div className="lg:w-[45%] fade-up">
            <div className="bg-white rounded-2xl p-8 md:p-12 h-full">
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-6 block">
                How it works
              </span>
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D]">
                <span className="text-white box-decoration-clone bg-[linear-gradient(180deg,transparent_0_0.22em,hsl(227_92%_71%)_0.22em_calc(100%_-_0.22em),transparent_calc(100%_-_0.22em))]">Three simple steps</span>{' '}
                <span>from scan to ready-to-sign report</span>
              </h2>
            </div>
          </div>

          {/* Right: Timeline Steps */}
          <div className="lg:w-[55%]">
            <div className="relative">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-5 fade-up relative"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Number and Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-white font-medium text-lg z-10">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0 flex-1 border-l-2 border-dashed border-[#0D0D0D]/40 my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pt-2 ${index < steps.length - 1 ? 'pb-8' : ''}`}>
                    <h3 className="text-[18px] font-medium leading-[1.3] text-white mb-1">{step.title}</h3>
                    <p className="text-white/80 text-[15px] leading-[1.65] font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
