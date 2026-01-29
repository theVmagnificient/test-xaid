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
    <section id="challenges" ref={sectionRef} className="section-padding bg-[#EBEBEB]">
      <div className="container-xaid">
        {/* Card Container */}
        <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 fade-up">
            <span className="text-xaid-blue font-semibold text-sm uppercase tracking-wider mb-4 block">Challenges</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0D0D0D] leading-tight">
              Radiology groups face <span className="bg-xaid-blue text-white px-2 py-1">mounting pressure</span>
            </h2>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="fade-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-[#0D0D0D] mb-3">{challenge.title}</h3>
                <p className="text-[#666666] text-base leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
