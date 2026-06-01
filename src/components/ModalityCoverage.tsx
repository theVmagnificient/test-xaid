import { Link } from 'react-router-dom';

const modalities = [
  {
    title: 'Head CT',
    desc: 'Stroke, hemorrhage, fractures, brain parenchyma, ventricles, sinuses',
    href: '/head-ct-ai-report',
  },
  {
    title: 'Chest CT',
    desc: 'Peer-reviewed accuracy. Lung nodules, coronary calcium, effusions, vertebral fractures',
    href: '/chest-ct-ai-report',
    badge: 'Peer-reviewed',
  },
  {
    title: 'Abdomen CT',
    desc: 'Liver, kidneys, pancreas, spleen, adrenals, bowel, aorta, lymph nodes',
    href: '/abdomen-ct-ai-report',
  },
];

const ModalityCoverage = () => {
  return (
    <section className="section-padding bg-white/5">
      <div className="container-xaid">
        <div className="mb-10">
          <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">CT Coverage</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-white leading-[1.15]">
              Head, Chest & Abdomen CT
            </h2>
            <Link to="/accuracy" className="text-xaid-blue text-sm font-medium hover:underline flex-shrink-0">
              View clinical evidence →
            </Link>
          </div>
          <p className="text-white/60 text-[15px] leading-[1.65] font-light mt-3 max-w-xl">
            100+ findings per report across all three modalities. Every study processed by two AI layers and reviewed by our in-house radiologist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modalities.map((m) => (
            <Link
              key={m.title}
              to={m.href}
              className="block bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-white font-medium text-[18px] leading-[1.3] group-hover:text-xaid-blue transition-colors">{m.title}</h3>
                {m.badge && (
                  <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-2 py-0.5 rounded-full">{m.badge}</span>
                )}
              </div>
              <p className="text-white/60 text-[15px] leading-[1.65] font-light mb-4">{m.desc}</p>
              <span className="text-xaid-blue text-sm font-medium group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalityCoverage;
