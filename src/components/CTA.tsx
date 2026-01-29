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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-xaid">
        <div className="text-center max-w-[700px] mx-auto fade-up">
          <h2 className="heading-section text-foreground mb-6">
            Ready to transform your radiology workflow?
          </h2>
          <p className="body-large">
            Join leading radiology groups who've reduced costs and improved quality with our AI-powered platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
