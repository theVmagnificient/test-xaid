import { useEffect, useRef } from 'react';

const features = [
  {
    tag: 'Reports',
    title: 'Ready-to-sign reports',
    description: 'AI-enhanced AI reports with human validation. Built on our own proprietary AI - not third-party tools.',
  },
  {
    tag: 'Сlinicians',
    title: 'Academic Intelligence',
    description: 'Our clinicians are predominantly subspecialty trained, with many holding academic and leadership roles at leading institutions',
  },
  {
    tag: 'AI Algorithms',
    title: '100+ AI Findings',
    description: 'AI that comprehensively covers 100+ pathologies across emergency and opportunistic findings',
  },
  {
    tag: 'AI Algorithms',
    title: '< 0.1% discrepancy rate',
    description: 'We consistently deliver high-quality reads with a discrepancy rate well below industry norms, reflecting a strong commitment to accuracy and clinical reliability',
  },
];

const Solution = () => {
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
    <section id="our-solution" ref={sectionRef} className="section-padding bg-[#0D0D0D]">
      <div className="container-xaid">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 fade-up">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4 block">Our solution</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            <span className="italic text-xaid-blue">Ready-to-sign AI reports</span><br />
            <span className="italic text-xaid-blue">with human</span>{' '}
            <span className="text-white">in the loop</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-[800px] mx-auto leading-relaxed">
            xAID integrates directly into the client's infrastructure, enabling fully automated delivery of ready-to-sign reports — validated by multiple AI models and our radiologists, and formatted strictly to the client's reporting templates
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-xaid-blue rounded-2xl p-6 md:p-8 min-h-[320px] flex flex-col fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium w-fit bg-transparent border border-white/30 text-white mb-6">
                {feature.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
