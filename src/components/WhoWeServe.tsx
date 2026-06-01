import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Radio, Stethoscope, Hospital } from 'lucide-react';

const audiences = [
  {
    title: 'Outpatient imaging centers',
    description: 'Expand CT capacity without adding headcount. Get ready-to-sign reports back in 2–12 hours — reduce radiologist hours without sacrificing coverage',
    Icon: Building2,
    href: '/for-outpatient-imaging-centers',
  },
  {
    title: 'Teleradiology providers',
    description: 'Scale your read volume with AI CT reporting that delivers full radiologist-reviewed preliminary reports, not just detection flags. DICOM in, HL7 out — setup under one week',
    Icon: Radio,
    href: '/for-teleradiology-companies',
  },
  {
    title: 'Radiology groups',
    description: 'Cover overflow, after-hours, and scheduled CT reads without locum costs. Free your radiologists for complex cases',
    Icon: Stethoscope,
    href: '/for-radiology-groups',
  },
  {
    title: 'Small & community hospitals',
    description: '24/7 CT coverage with no after-hours surcharge and no FTE commitment. Per-study pricing, setup under one week, BAA included',
    Icon: Hospital,
    href: '/for-small-hospitals',
  },
];

const WhoWeServe = () => {
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
    <section id="who-we-serve" ref={sectionRef} className="section-padding bg-white/5">
      <div className="container-xaid">
        <div className="mb-10 fade-up">
          <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Who we serve</span>
          <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-white leading-[1.15]">
            Built for outpatient CT workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 fade-up flex flex-col hover:bg-white/[0.07] hover:border-white/15 transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-xaid-blue/10 border border-xaid-blue/20 flex items-center justify-center mb-5">
                <audience.Icon className="w-5 h-5 text-xaid-blue" strokeWidth={1.75} />
              </div>
              <h3 className="text-white font-medium text-[18px] leading-[1.3] mb-3">{audience.title}</h3>
              <p className="text-white/60 text-[15px] leading-[1.65] font-light mb-5 flex-grow">{audience.description}</p>
              <Link to={audience.href} className="text-xaid-blue text-sm font-medium hover:underline self-start">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
