import { useEffect, useRef } from 'react';
import { Check, Minus } from 'lucide-react';

const rows = [
  {
    label: 'Price/study',
    teleradiology: 'Expensive',
    narrowAI: 'Narrow AI pricing',
    xaid: 'Narrow AI pricing',
    xaidHighlight: true,
  },
  {
    label: 'Output',
    teleradiology: 'Full report',
    narrowAI: 'Detection flags only',
    xaid: 'Full report',
    xaidHighlight: true,
  },
  {
    label: 'Human review included',
    teleradiology: 'Yes (billed separately)',
    narrowAI: 'No',
    xaid: 'Yes (included)',
    xaidHighlight: true,
  },
  {
    label: 'Pathologies covered',
    teleradiology: 'Full report',
    narrowAI: '3–5 specific findings',
    xaid: 'Full report',
    xaidHighlight: true,
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Two AI layers + radiologist review —<br className="hidden md:block" />
            <span className="text-xaid-blue"> at the price of narrow AI.</span>
          </h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto">
            Compare xAID against what you're currently using.
          </p>
        </div>

        {/* Table */}
        <div className="fade-up overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-[#888] text-sm font-medium w-[28%]"></th>
                <th className="py-4 px-6 text-center bg-white rounded-t-xl text-[#1A1A1A] font-semibold text-base w-[24%]">
                  Traditional Teleradiology
                </th>
                <th className="py-4 px-6 text-center bg-white mx-2 text-[#1A1A1A] font-semibold text-base w-[24%]">
                  Narrow AI Overlays
                </th>
                <th className="py-4 px-6 text-center bg-xaid-blue rounded-t-xl text-white font-bold text-base w-[24%]">
                  xAID
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.label} className={index % 2 === 0 ? '' : ''}>
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
      </div>
    </section>
  );
};

export default Comparison;
