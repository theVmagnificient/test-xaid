import { useEffect, useRef } from 'react';
const ReliableReports = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="section-padding bg-[#0D0D0D]">
      <div className="container-xaid">
        <div className="max-w-[1200px]">
          {/* Header */}
          <div className="mb-8 fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-2">
              <span className="bg-xaid-blue text-white px-2 py-1 inline-block">Built for reliable reports.</span>
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              AI accelerates detection, but radiologists own the final interpretation
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 fade-up">
            <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">Pure AI lacks clinical accountability. xAID was built to close this gap</p>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              Our process combines three tightly integrated layers: advanced AI models across multiple body parts, review and final decision-making by highly qualified Western-trained radiologists, and client-specific reporting templates enforced at the system level
            </p>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">The result is ready-to-sign reports that are accurate, consistent, auditable, and tailored to each client's clinical and operational needs</p>
          </div>
        </div>
      </div>
    </section>;
};
export default ReliableReports;