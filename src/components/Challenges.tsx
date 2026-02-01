import { useEffect, useRef } from 'react';

const challenges = [
  {
    title: 'Hiring ABR radiologists is structurally broken',
    description: 'Imaging volumes keep growing while the pool of American Board–Certified radiologists does not. Recruiting, onboarding, and retaining ABR talent has become slow, expensive, and increasingly unpredictable—directly pressuring margins and coverage.',
  },
  {
    title: 'Pure AI in medical imaging is too narrow to move the needle',
    description: 'Most AI tools solve isolated tasks or single findings. They rarely integrate into end-to-end reporting workflows, which means limited operational impact, added complexity, and no meaningful reduction in cost or variability.',
  },
  {
    title: 'Turnaround times are inherently unpredictable',
    description: 'TAT fluctuates across shifts, modalities, and workload spikes. Night and weekend coverage amplify the problem, leading to operational bottlenecks, inconsistent service levels, and downstream disruption for clinical teams.',
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
