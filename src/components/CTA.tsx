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
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#0D0D0D]">
      <div className="container-xaid">
        <div className="text-center max-w-[700px] mx-auto fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Ready to transform<br />your radiology workflow?
          </h2>
          <p className="text-white/60 text-lg">
            Join leading radiology groups who've reduced costs and improved quality with our AI-powered platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
