import { useEffect, useRef } from 'react';

const challenges = [
  {
    title: 'Hiring Takes 12+ Months',
    description: 'The average time-to-hire for a radiologist exceeds 12 months. Meanwhile your CT volume grows and revenue walks out the door.',
  },
  {
    title: 'On-Demand Coverage Is Eating Your Margins',
    description: 'Locum and on-call radiologists are expensive — and unpredictable. Every extra shift chips away at profit you\'ve already earned.',
  },
  {
    title: 'Current AI Doesn\'t Save Time',
    description: 'AI overlays improve detection rates — but radiologists still dictate the full report. TAT stays exactly the same.',
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
            <span className="text-xaid-blue font-semibold text-sm uppercase tracking-wider mb-4 block">Why Radiology Groups Are Stuck</span>
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
