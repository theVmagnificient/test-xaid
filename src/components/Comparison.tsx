import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';

const comparisonData = [
  {
    label: 'OUTPUT',
    left: 'Findings, overlays, alerts',
    right: 'Full report delivered',
  },
  {
    label: 'REPORT CREATION',
    left: 'Still requires full report creation',
    right: 'No report written from scratch',
  },
  {
    label: 'WORKFLOW',
    left: 'Additional step in existing flow',
    right: 'Replaces report creation work',
  },
  {
    label: 'SIGN-OFF',
    left: 'Requires radiologist interpretation',
    right: 'Ready for sign-off',
  },
];

const Comparison = () => {
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
    <section ref={sectionRef} className="section-padding bg-[#F5F5F5]">
      <div className="container-xaid">
        {/* Title */}
        <div className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            This is not a pure AI tool.
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto fade-up">
          {/* Left Card - Pure AI Vendors */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E5E5]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center">
                <X className="w-6 h-6 text-[#666666]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">Pure AI Vendors</h3>
            </div>

            <div className="space-y-0">
              {comparisonData.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-6 text-center ${
                    index !== comparisonData.length - 1 ? 'border-b border-[#E5E5E5]' : ''
                  }`}
                >
                  <p className="text-xs font-medium tracking-wider text-[#888888] mb-2">
                    {item.label}
                  </p>
                  <p className="text-[#1A1A1A] font-medium">{item.left}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - xAID */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#10B981]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#10B981] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">xAID</h3>
            </div>

            <div className="space-y-0">
              {comparisonData.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-6 text-center ${
                    index !== comparisonData.length - 1 ? 'border-b border-[#E5E5E5]' : ''
                  }`}
                >
                  <p className="text-xs font-medium tracking-wider text-[#888888] mb-2">
                    {item.label}
                  </p>
                  <p className="text-[#1A1A1A] font-medium">{item.right}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
