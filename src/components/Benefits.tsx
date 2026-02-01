import { useEffect, useRef } from 'react';
import { Asterisk } from 'lucide-react';

const benefits = [
  {
    title: 'Measurable ROI',
    description: 'Your team spends less time creating reports from scratch, increasing margin per study by ~15–20%.',
  },
  {
    title: 'Faster turn-around-times',
    description: 'Our clients achieve faster, more predictable turnaround times by removing workflow bottlenecks rather than adding reader headcount.',
  },
  {
    title: 'Consistent Quality',
    description: 'AI-powered reports combined with continuous oversight by boarded radiologists ensure reproducible, clinically reliable results across every case',
  },
  {
    title: '24/7 Coverage',
    description: 'Time-zone flexibility enables continuous 24/7 coverage across the U.S. aligned to your demand',
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
    <section id="benefits" ref={sectionRef} className="section-padding bg-[#0D0D0D]">
      <div className="container-xaid">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 fade-up">
          <span className="text-xaid-blue font-semibold text-base md:text-lg uppercase tracking-wider">Benefits you get</span>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex gap-5 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1A1A2E] flex items-center justify-center">
                <Asterisk className="w-7 h-7 text-xaid-blue" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
