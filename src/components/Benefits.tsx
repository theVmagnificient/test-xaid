import { useEffect, useRef } from 'react';

const benefits = [
  {
    title: 'Consistent Quality',
    description: 'AI-powered reports combined with continuous oversight by boarded radiologists ensure reproducible, clinically reliable results across every case',
  },
  {
    title: 'Highly experienced radiologists',
    description: 'AI reports are reviewed and finalized by highly experienced radiologists trained in Western Europe and other leading international healthcare systems',
  },
  {
    title: '24/7 Coverage',
    description: 'Time-zone flexibility enables continuous 24/7 coverage across the U.S. aligned to your demand',
  },
  {
    title: 'Measurable ROI',
    description: 'Your team spends less time creating reports from scratch, increasing margin per study by ~15–20%.',
  },
  {
    title: 'Predictable turn-around-times',
    description: 'A standardized workflow delivers stable turnaround times across shifts and volumes, reducing variability and easing staffing pressure',
  },
  {
    title: 'Faster turn-around-times',
    description: 'Our proprietary AI tooling shortens turnaround times compared to traditional teleradiology workflows',
  },
];

const Benefits = () => {
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
    <section id="benefits" ref={sectionRef} className="section-padding bg-background">
      <div className="container-xaid">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 fade-up">
          <span className="tag mb-4">Benefits</span>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-dark fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="heading-card text-foreground mb-3">{benefit.title}</h3>
              <p className="body-regular">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
