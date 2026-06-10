import { useEffect, useRef } from 'react';

const challenges = [
  {
    title: 'Hiring takes 12+ months',
    description: 'The average time-to-hire for a radiologist exceeds 12 months. Meanwhile your CT volume grows and revenue walks out the door',
  },
  {
    title: 'On-demand coverage is eating your margins',
    description: 'Locum and on-call radiologists are expensive — and unpredictable. Every extra shift chips away at profit you\'ve already earned',
  },
  {
    title: 'Current AI doesn\'t save time',
    description: 'AI overlays improve detection rates — but radiologists still dictate the full report. TAT stays exactly the same',
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
        <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 fade-up">
            <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Why radiology groups are stuck</span>
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-[#0D0D0D] leading-[1.15]">
              Radiology groups face <span className="bg-xaid-blue text-white box-decoration-clone px-2 py-[3px]">mounting pressure</span>
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
                <h3 className="text-[18px] font-medium leading-[1.3] text-[#0D0D0D] mb-3 min-h-[2.6em]">{challenge.title}</h3>
                <p className="text-[#666666] text-[15px] leading-[1.65] font-light">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
