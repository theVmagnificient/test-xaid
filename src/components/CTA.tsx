import { useEffect, useRef } from 'react';

const CTA = () => {
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
    <section ref={sectionRef} className="pt-16 md:pt-24 pb-6 md:pb-8 bg-[#0D0D0D]">
      <div className="container-xaid">
        <div className="text-center max-w-[700px] mx-auto fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Get a Free<br />5-Study Pilot
          </h2>
          <p className="text-white/60 text-lg mb-4">
            Send us 5 CT studies. See the reports.
          </p>
          <p className="text-white/40 text-base">
            No integration required. No commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
