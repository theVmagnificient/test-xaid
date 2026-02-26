import { useEffect, useRef } from 'react';

const Guarantee = () => {
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
    <section id="results" ref={sectionRef} className="section-padding bg-[#0D0D0D]">
      <div className="container-xaid">
        <div className="max-w-[900px] mx-auto text-center fade-up">
          {/* Big stat */}
          <div className="inline-flex items-center justify-center bg-xaid-blue/15 border border-xaid-blue/30 rounded-2xl px-8 py-4 mb-8">
            <span className="font-['Poppins'] text-xaid-blue text-6xl md:text-8xl font-semibold leading-none">90%</span>
          </div>

          <h2 className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            No-Edit Rate — Guaranteed.
          </h2>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-4 max-w-[680px] mx-auto">
            9 out of 10 reports require zero downstream edits.
            If we fall below that threshold, we reimburse.
          </p>

          <p className="text-white/40 text-base leading-relaxed max-w-[560px] mx-auto">
            The only radiology AI that puts its money where its algorithm is. Neither Aidoc, Avicenna, nor Rad AI offer this.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
