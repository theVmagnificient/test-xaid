import { useEffect, useRef } from 'react';
const features = [{
  tag: 'Reports',
  title: 'Ready-to-sign reports',
  description: 'AI-generated preliminary reports reviewed by our in-house radiologist before delivery. Built on our own proprietary AI - not third-party tools.'
}, {
  tag: 'Clinicians',
  title: 'Academic intelligence',
  description: 'Our clinicians are predominantly subspecialty trained, with many holding academic and leadership roles at leading institutions'
}, {
  tag: 'AI Algorithms',
  title: '100+ AI findings',
  description: 'AI that comprehensively covers 100+ pathologies across emergency and opportunistic findings'
}];
const Solution = () => {
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
  return <section id="our-solution" ref={sectionRef} className="section-padding bg-[#0D0D0D]">
      <div className="container-xaid">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 fade-up">
          <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Our solution</span>
          <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-white mb-6 leading-[1.15]">
            <span className="text-xaid-blue ">Ready-to-sign preliminary reports</span><br />
            <span className="text-xaid-blue">with human</span>{' '}
            <span className="text-white">in the loop</span>
          </h2>
          <p className="text-white/60 text-[15px] leading-[1.65] font-light max-w-3xl mx-auto">
            xAID integrates directly into the client's infrastructure, delivering ready-to-sign preliminary reports — validated by AI and reviewed by our radiologist before delivery, and formatted strictly to the client's reporting templates
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => <div key={feature.title} className="bg-xaid-blue rounded-2xl p-6 md:p-8 min-h-[320px] flex flex-col justify-start items-start fade-up" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-transparent border border-white/30 text-white mb-6">
                {feature.tag}
              </span>
              <h3 className="text-[18px] font-medium leading-[1.3] text-white mb-3 min-h-[3.5rem] md:min-h-[4rem]">{feature.title}</h3>
              <p className="text-white/80 text-[15px] leading-[1.65] font-light">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Solution;