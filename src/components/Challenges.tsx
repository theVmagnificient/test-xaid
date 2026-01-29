import { useEffect, useRef } from 'react';

const challenges = [
  {
    title: 'Rising Costs',
    description: 'Hiring American Board–Certified radiologists has become increasingly difficult as imaging volumes outpace the U.S. radiology workforce, driving staffing pressure and rising costs',
  },
  {
    title: 'Inconsistent Quality',
    description: 'Different readers and vendors produce highly variable preliminary reports, leading to errors, discrepancies, and extra work during final reads',
  },
  {
    title: 'Overnight coverage gaps',
    description: 'Maintaining stable night and weekend coverage is difficult and costly, resulting in gaps that directly impact ER and trauma workflows',
  },
  {
    title: 'Unpredictable turnaround times',
    description: 'Turnaround times fluctuate significantly across shifts and workload, disrupting clinical operations and creating inconsistent performance',
  },
  {
    title: 'Accuracy & Standardization Gaps',
    description: 'Radiology groups struggle to maintain accurate prelims, standardize reporting, and ensure clear audit trails — making quality hard to scale',
  },
  {
    title: 'Limited Quality Visibility',
    description: 'Leadership lacks transparent insight into quality issues by reader, modality, or case type, making systematic quality control difficult',
  },
];

const Challenges = () => {
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
    <section id="challenges" ref={sectionRef} className="section-padding bg-background">
      <div className="container-xaid">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 fade-up">
          <span className="tag mb-4">Challenges</span>
          <h2 className="heading-section text-foreground">
            Radiology groups face mounting pressure
          </h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className="card-dark fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="heading-card text-foreground mb-3">{challenge.title}</h3>
              <p className="body-regular">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
