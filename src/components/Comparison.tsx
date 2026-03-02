import { useEffect, useRef } from 'react';
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
    <section ref={sectionRef} className="section-padding bg-[#F5F5F5]">
      <div className="container-xaid">
        {/* Title */}
        <div className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Two AI layers + radiologist review —<br className="hidden md:block" />
            <span className="text-xaid-blue"> at the price of narrow AI.</span>
          </h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto">
            Compare xAID against what you're currently using.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="fade-up hidden md:block overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-[#888] text-sm font-medium w-[28%]"></th>
                <th className="py-4 px-6 text-center bg-white rounded-t-xl text-[#1A1A1A] font-semibold text-base w-[24%]">
                  Traditional Teleradiology
                </th>
                <th className="py-4 px-6 text-center bg-white text-[#1A1A1A] font-semibold text-base w-[24%]">
                  Narrow AI Overlays
                </th>
                <th className="py-4 px-6 text-center bg-xaid-blue rounded-t-xl text-white font-bold text-base w-[24%]">
                  xAID
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.label}>
                  <td className="py-4 px-6 text-[#444] font-medium text-sm border-b border-[#E5E5E5]">
                    {row.label}
                  </td>
                  <td className={`py-4 px-6 text-center text-sm text-[#555] bg-white border-b border-[#E5E5E5] ${index === rows.length - 1 ? 'rounded-b-xl' : ''}`}>
                    {row.teleradiology}
                  </td>
                  <td className={`py-4 px-6 text-center text-sm text-[#555] bg-white border-b border-[#E5E5E5] ${index === rows.length - 1 ? 'rounded-b-xl' : ''}`}>
                    {row.narrowAI}
                  </td>
                  <td className={`py-4 px-6 text-center text-sm font-semibold text-white bg-xaid-blue border-b border-xaid-blue/70 ${index === rows.length - 1 ? 'rounded-b-xl' : ''}`}>
                    <span className="flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      {row.xaid}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="fade-up md:hidden space-y-3">
          {/* Column headers */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-white rounded-xl p-3 text-center text-xs font-semibold text-[#1A1A1A]">Traditional Teleradiology</div>
            <div className="bg-white rounded-xl p-3 text-center text-xs font-semibold text-[#1A1A1A]">Narrow AI Overlays</div>
            <div className="bg-xaid-blue rounded-xl p-3 text-center text-xs font-bold text-white">xAID</div>
          </div>

          {rows.map((row) => (
            <div key={row.label} className="bg-white rounded-xl overflow-hidden">
              <div className="px-4 py-2 bg-[#F0F0F0] border-b border-[#E5E5E5]">
                <span className="text-xs font-semibold text-[#444] uppercase tracking-wider">{row.label}</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-3 text-center text-xs text-[#555] border-r border-[#E5E5E5]">
                  {row.teleradiology}
                </div>
                <div className="p-3 text-center text-xs text-[#555] border-r border-[#E5E5E5]">
                  {row.narrowAI}
                </div>
                <div className="p-3 text-center text-xs font-semibold text-white bg-xaid-blue flex flex-col items-center justify-center gap-1">
                  <Check className="w-3 h-3 flex-shrink-0" />
                  {row.xaid}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
