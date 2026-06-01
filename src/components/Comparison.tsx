import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const rows = [
  {
    label: 'Price/study',
    teleradiology: 'Expensive',
    narrowAI: 'Narrow AI pricing',
    xaid: 'Narrow AI pricing',
  },
  {
    label: 'Output',
    teleradiology: 'Full report',
    narrowAI: 'Detection flags only',
    xaid: 'Full report',
  },
  {
    label: 'Human review included',
    teleradiology: 'Yes (billed separately)',
    narrowAI: 'No',
    xaid: 'Yes (included)',
  },
  {
    label: 'Pathologies covered',
    teleradiology: 'Full report',
    narrowAI: '3–5 specific findings',
    xaid: 'Full report',
  },
];

const Comparison = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#EBEBEB]">
      <div className="container-xaid">

        {/* Title */}
        <div className="text-center mb-14 fade-up">
          <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-[#1A1A1A] mb-6" style={{ lineHeight: '1.15' }}>
            Two AI layers + radiologist review —<br />
            at the price of narrow AI
          </h2>
          <p className="text-[#666] text-[15px] leading-[1.65] font-light max-w-xl mx-auto mt-4">
            Compare xAID against what you're currently using
          </p>
        </div>

        {/* Desktop Table */}
        <div className="fade-up hidden md:block w-full mx-auto relative">

          {/* Column background + shadow layer (absolute, behind content) */}
          <div className="absolute inset-0 grid grid-cols-[28fr_24fr_24fr_24fr] gap-x-3 pointer-events-none">
            <div />
            <div className="bg-[#F5F5F5] rounded-xl shadow-sm" />
            <div className="bg-[#F5F5F5] rounded-xl shadow-sm" />
            <div className="bg-xaid-blue rounded-xl shadow-sm" />
          </div>

          {/* Content grid (z-10, transparent cells so bg shows through) */}
          <div className="relative z-10">

            {/* Header row */}
            <div className="grid grid-cols-[28fr_24fr_24fr_24fr] gap-x-3">
              <div className="py-5" />
              <div className="py-5 px-6 flex items-center justify-center text-[#1A1A1A] font-normal text-sm text-center">
                Traditional Teleradiology
              </div>
              <div className="py-5 px-6 flex items-center justify-center text-[#1A1A1A] font-normal text-sm text-center">
                Narrow AI Overlays
              </div>
              <div className="py-5 px-6 flex items-center justify-center text-white font-medium text-sm text-center">
                xAID
              </div>
            </div>

            {/* Body rows */}
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[28fr_24fr_24fr_24fr] gap-x-3 border-t border-[#D4D4D4]">
                <div className="py-5 pr-6 text-[#1A1A1A] font-normal text-sm flex items-center">
                  {row.label}
                </div>
                <div className="py-5 px-6 text-center text-sm font-light text-[#666] flex items-center justify-center">
                  {row.teleradiology}
                </div>
                <div className="py-5 px-6 text-center text-sm font-light text-[#666] flex items-center justify-center">
                  {row.narrowAI}
                </div>
                <div className="py-5 px-6 text-sm font-light text-white flex items-center relative">
                  <span className="absolute left-4 w-5 h-5 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="block w-full text-center">{row.xaid}</span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Mobile Cards */}
        <div className="fade-up md:hidden space-y-3">
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-[#F5F5F5] rounded-xl p-3 text-center text-xs font-medium text-[#1A1A1A]">Traditional Teleradiology</div>
            <div className="bg-[#F5F5F5] rounded-xl p-3 text-center text-xs font-medium text-[#1A1A1A]">Narrow AI Overlays</div>
            <div className="bg-xaid-blue rounded-xl p-3 text-center text-xs font-medium text-white">xAID</div>
          </div>
          {rows.map((row) => (
            <div key={row.label} className="bg-[#F5F5F5] rounded-xl overflow-hidden">
              <div className="px-4 py-2 bg-[#F0F0F0] border-b border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#444] uppercase tracking-wider">{row.label}</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-3 text-center text-xs text-[#555] border-r border-[#E5E5E5]">{row.teleradiology}</div>
                <div className="p-3 text-center text-xs text-[#555] border-r border-[#E5E5E5]">{row.narrowAI}</div>
                <div className="p-3 text-center text-xs font-medium text-white bg-xaid-blue flex flex-col items-center justify-center gap-1">
                  <Check className="w-3 h-3 flex-shrink-0" />
                  {row.xaid}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="fade-up text-center mt-10 flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
          <Link to="/ai-vs-teleradiology" className="text-xaid-blue text-sm font-normal hover:underline">
            AI CT Reporting vs Teleradiology →
          </Link>
          <Link to="/blog/ct-radiology-coverage-costs-2026" className="text-xaid-blue text-sm font-normal hover:underline">
            CT Coverage Cost Comparison →
          </Link>
          <Link to="/blog/after-hours-radiology-coverage-options" className="text-xaid-blue text-sm font-normal hover:underline">
            After-hours coverage options →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Comparison;
