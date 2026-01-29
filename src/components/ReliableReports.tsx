import { useEffect, useRef } from 'react';

const ReliableReports = () => {
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
        <div className="max-w-[900px]">
          {/* Header */}
          <div className="mb-10 md:mb-14 fade-up">
            <h2 className="heading-section text-foreground mb-6">
              Built for reliable reports.
            </h2>
            <p className="text-[24px] md:text-[32px] font-medium leading-[1.3] text-foreground mb-8">
              AI accelerates detection, but radiologists own the final interpretation
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 fade-up">
            <p className="body-large">
              Pure AI lacks clinical accountability, while traditional teleradiology often sacrifices consistency and quality to scale. xAID was built to close this gap
            </p>
            <p className="body-large">
              Our process combines three tightly integrated layers: advanced AI models across multiple body parts, review and final decision-making by highly qualified Western-trained radiologists, and client-specific reporting templates enforced at the system level
            </p>
            <p className="body-large">
              The result is preliminary reports that are accurate, consistent, auditable, and tailored to each client's clinical and operational needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliableReports;
