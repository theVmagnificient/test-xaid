import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FAQAccordion from '@/components/FAQAccordion';

const rows = [
  { aspect: 'Annual cost', locum: '$500,000–$650,000/yr (salary + benefits + agency fee)', xaid: 'Per-study pricing — scales with volume, no fixed overhead' },
  { aspect: 'Time to start', locum: '2–4+ months (agency sourcing + credentialing/privileging)', xaid: 'Under 1 week (DICOM/HL7 integration)' },
  { aspect: 'After-hours coverage', locum: 'Requires additional locum or on-call premium pay', xaid: 'Flat per-study rate 24/7 — no surcharge' },
  { aspect: 'Quality guarantee', locum: 'None — individual radiologist variability', xaid: '95% accuracy — or we reimburse' },
  { aspect: 'Staffing risk', locum: 'High — cancellations, no-shows, contract gaps', xaid: 'None — AI + in-house radiologist team, no single point of failure' },
  { aspect: 'Scalability', locum: 'Linear — one more radiologist per X studies', xaid: 'Elastic — same per-study rate regardless of volume spikes' },
  { aspect: 'Radiologist sign-off', locum: 'Yes', xaid: 'In-house review on every preliminary — your radiologist signs the final' },
  { aspect: 'Modalities', locum: 'Depends on recruited radiologist\'s subspecialty', xaid: 'CT only (head, chest, abdomen — 100+ findings)' },
  { aspect: 'No commitment pilot', locum: 'Not applicable', xaid: 'Free 5-study pilot, no integration required' },
];

const faqs = [
  {
    q: 'How much does a locum radiologist cost per year?',
    a: 'Locum radiologist costs typically range from $500,000 to $650,000 per year when you factor in agency fees (25–40% of salary), benefits, licensing, credentialing, malpractice coverage, and housing/travel allowances for out-of-area locums. This is for a single FTE covering standard hours — after-hours and holiday coverage requires additional arrangement and cost',
  },
  {
    q: 'How long does it take to hire a locum radiologist?',
    a: 'Sourcing a locum radiologist takes 2–8 weeks through a staffing agency, and facility credentialing and privileging typically add another 60–120 days — 2–4+ months to first read in practice. A permanent radiologist hire takes 6–18 months from initial outreach to first read. Credentialing alone averages 90–120 days. During that window, your facility carries the coverage gap. AI CT reporting (xAID) can be integrated in under one week via standard DICOM C-STORE and HL7 ORU — no credentialing process required',
  },
  {
    q: 'Does AI CT reporting require a radiologist?',
    a: 'Yes. In xAID\'s model, AI generates the complete structured report and an in-house European radiologist reviews and delivers every report. The radiologist is the accountable clinician. AI reduces the dictation and structuring workload — it does not remove radiologist accountability',
  },
  {
    q: 'Is AI CT reporting cheaper than a locum radiologist?',
    a: 'For CT-focused facilities, yes — typically significantly. A locum radiologist costs $500,000–$650,000 per year regardless of study volume. AI CT reporting (xAID) is per-study pricing at narrow AI rates with no fixed overhead. The breakeven point depends on your CT volume; at typical outpatient imaging center volumes, AI CT reporting is substantially lower cost than a locum FTE',
  },
  {
    q: 'What accuracy does AI CT reporting offer vs a locum radiologist?',
    a: 'xAID achieves 95% accuracy — or we reimburse. No locum staffing agency offers equivalent published clinical accuracy data or accountability for individual radiologist performance',
  },
];

const AiVsLocumRadiologist = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
      { "@type": "ListItem", "position": 2, "name": "AI vs Locum Radiologist", "item": "https://xaid.ai/ai-vs-locum-radiologist" },
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI CT Reporting vs Locum Radiologist Costs | xAID</title>
        <meta
          name="description"
          content="AI CT reporting vs a locum radiologist: $500K–$650K a year vs per-study pricing, months vs under a week to start. Compare cost, speed, and risk."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI CT Reporting vs Locum Radiologist Costs | xAID" />
        <meta property="og:description" content="AI CT reporting vs a locum radiologist: $500K–$650K a year vs per-study pricing, months vs under a week to start. Compare cost, speed, and risk." />
        <meta property="og:url" content="https://xaid.ai/ai-vs-locum-radiologist" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-10">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-xaid-blue font-medium">Comparison</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              AI CT reporting vs locum radiologist
            </h1>
            <p className="text-white/60 text-[15px] leading-[1.65] font-light mb-4">
              A locum radiologist costs $500,000–$650,000 per year and takes months to source and credential — and a permanent hire takes 6–18 months. AI CT reporting starts in under one week at per-study pricing with no fixed overhead
            </p>
            <p className="text-white/60 text-[15px] leading-[1.65] font-light">
              Both deliver complete preliminary CT reports — radiologist-reviewed and ready to sign. The difference is cost structure, setup time, and what happens when demand spikes or the locum cancels
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding pt-0">
          <div className="container-xaid max-w-4xl mx-auto">
            {/* Column headers */}
            <div className="hidden md:flex items-center gap-4 mb-3 px-5">
              <div className="w-[180px] flex-shrink-0" />
              <div className="flex-1">
                <span className="text-[11px] font-medium tracking-widest text-white/60 uppercase">Locum Radiologist</span>
              </div>
              <div className="w-8 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-[11px] font-medium tracking-widest text-xaid-blue">xAID</span>
              </div>
            </div>
            {/* Rows */}
            <div className="space-y-3">
              {[
                { aspect: 'Annual cost', sub: 'Total all-in per year', locumValue: '$500K–$650K', locumSub: 'Salary + agency + benefits', xaidValue: 'Per study', xaidSub: 'No fixed overhead' },
                { aspect: 'Time to start', sub: 'From outreach to first read', locumValue: '2–4+ months', locumSub: 'Sourcing & credentialing', xaidValue: 'Under 1 week', xaidSub: 'DICOM/HL7 integration' },
                { aspect: 'Quality guarantee', sub: 'Contractual accuracy commitment', locumValue: 'None', locumSub: 'No published data', xaidValue: '95% accuracy', xaidSub: 'Or we reimburse' },
              ].map((row) => (
                <div key={row.aspect} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-4">
                  {/* Aspect label */}
                  <div className="md:w-[180px] md:flex-shrink-0">
                    <div className="text-white font-medium text-sm">{row.aspect}</div>
                    <div className="text-white/60 text-xs mt-0.5 leading-snug">{row.sub}</div>
                  </div>
                  <div className="flex items-stretch gap-3 flex-1">
                    {/* Locum card */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-[10px] text-white/60 mb-1 md:hidden">Locum Radiologist</p>
                      <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4 flex-1">
                        <div className="text-white/70 font-medium text-xl leading-tight">{row.locumValue}</div>
                        <div className="text-white/60 text-xs mt-1">{row.locumSub}</div>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="text-white/60 text-base flex-shrink-0 flex items-center">→</div>
                    {/* xAID card */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-[10px] text-xaid-blue mb-1 md:hidden">xAID</p>
                      <div className="bg-xaid-blue/10 border border-xaid-blue/40 rounded-xl p-4 flex-1 shadow-[0_0_20px_0_rgba(107,137,250,0.08)]">
                        <div className="text-xaid-blue font-semibold text-xl leading-tight">{row.xaidValue}</div>
                        <div className="text-white/50 text-xs mt-1">{row.xaidSub}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full comparison table */}
        <section className="section-padding">
          <div className="container-xaid max-w-4xl mx-auto">
            <h2 className="text-[22px] md:text-[28px] font-normal leading-[1.15] text-white mb-8 text-center">
              AI CT reporting vs locum radiologist — full comparison
            </h2>
            <div className="rounded-2xl overflow-hidden border border-white/15">
              <div className="table-scroll table-scroll--light overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left px-5 py-4 text-[11px] font-medium tracking-wider text-white/50 uppercase bg-white/[0.08] w-[28%]">Factor</th>
                      <th className="text-left px-5 py-4 text-[11px] font-medium tracking-wider text-white/50 uppercase bg-white/[0.08] border-l border-white/15 w-[36%]">Locum Radiologist</th>
                      <th className="text-left px-5 py-4 text-[11px] font-medium tracking-wider text-xaid-blue bg-xaid-blue/[0.15] border-l border-xaid-blue/30 w-[36%]">xAID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.aspect} className="border-t border-white/10">
                        <td className="px-5 py-4 text-white/90 text-[14px] font-medium align-top leading-snug">{row.aspect}</td>
                        <td className="px-5 py-4 text-white/60 text-[14px] align-top leading-snug border-l border-white/10">{row.locum}</td>
                        <td className="px-5 py-4 text-xaid-blue text-[14px] font-medium align-top leading-snug border-l border-xaid-blue/25 bg-xaid-blue/[0.06]">{row.xaid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-10 text-center">Common questions</h2>
              <FAQAccordion variant="light" faqs={faqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Add CT coverage in under a week</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Free 5-study pilot. No integration, no contract. See exactly what xAID reports look like before making any hiring or procurement decision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact-us"
                className="bg-xaid-blue-strong hover:bg-xaid-blue-strong-hover text-white font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                Start free pilot
              </Link>
              <Link
                to="/pricing/"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                See pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Cost analysis</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT radiology coverage costs 2026 — full breakdown</div>
              </Link>
              <Link to="/for-small-hospitals/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">For small hospitals</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">24/7 CT coverage for small & community hospitals</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiologist shortage</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist shortage 2026 — AI solutions</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiVsLocumRadiologist;
