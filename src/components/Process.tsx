import { useEffect, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'You Send Us the CT',
    description: 'Push scans via standard DICOM. Setup takes under a week.',
  },
  {
    number: 2,
    title: 'AI + Radiologist Produce the Report',
    description: 'Our foundation models analyze 150+ findings. An in-house radiologist reviews every report.',
  },
  {
    number: 3,
    title: 'Ready-to-Sign Report in Your System',
    description: 'Delivered via HL7 directly into your reporting system. You review and sign.',
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
              <span className="text-xaid-blue font-semibold text-sm uppercase tracking-wider mb-6 block">
                How it Works
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.4] text-[#0D0D0D]">
                <span className="bg-xaid-blue text-white px-1 py-1 inline-block">Three simple steps</span>
                <br />
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
                    <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-white font-semibold text-lg z-10">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0 flex-1 border-l-2 border-dashed border-[#0D0D0D]/40 my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pt-2 ${index < steps.length - 1 ? 'pb-8' : ''}`}>
                    <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-white/70 text-base leading-relaxed">{step.description}</p>
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
