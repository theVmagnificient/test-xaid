import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const rows = [
  { aspect: 'Per-study cost (CT)', teleradiology: '$40–$350', xaid: 'Narrow AI rates — flat per study' },
  { aspect: 'After-hours surcharge', teleradiology: '30–100% on nights, weekends, holidays', xaid: 'None — same rate 24/7' },
  { aspect: 'Clinical accuracy', teleradiology: 'No published data — variable, unverified', xaid: '95% accuracy — verified by peer-reviewed studies' },
  { aspect: 'Quality guarantee', teleradiology: 'None — no contractual commitment', xaid: '95% accuracy — or we reimburse' },
  { aspect: 'Setup time', teleradiology: '2–8 weeks (credentialing, contracting)', xaid: 'Under 1 week via DICOM C-STORE / HL7 ORU' },
  { aspect: 'Radiologist review', teleradiology: 'Yes — radiologist reads and dictates', xaid: 'Yes — in-house European radiologist reviews every report' },
  { aspect: 'Report output', teleradiology: 'Signed report (dictated)', xaid: 'Ready-to-sign preliminary report (radiologist-reviewed)' },
  { aspect: 'Coverage hours', teleradiology: '24/7 (with surcharge)', xaid: '24/7 flat rate' },
  { aspect: 'Modalities', teleradiology: 'CT, MRI, X-ray, nuclear (full suite)', xaid: 'CT only (head, chest, abdomen)' },
  { aspect: 'Volume minimums', teleradiology: 'Often required (annual contracts)', xaid: 'None — per-study pricing, no minimums' },
  { aspect: 'Free pilot', teleradiology: 'Rarely', xaid: 'Free 5-study pilot, no integration required' },
];

const faqs = [
  {
    q: 'Is AI CT reporting the same as teleradiology?',
    a: 'They are different approaches to CT coverage. Overseas teleradiology uses remote human radiologists who read scans and dictate reports manually. AI CT reporting (xAID) uses AI to generate the complete structured report from the DICOM series, and an in-house European radiologist reviews before delivery. The key differences are accuracy (xAID: 95% verified by peer-reviewed studies vs. no published data for overseas services), pricing (no after-hours surcharge with AI), and setup time (days vs. weeks)',
  },
  {
    q: 'Does AI replace the radiologist in AI CT reporting?',
    a: 'No. In xAID\'s model, AI generates the complete structured report and our in-house European radiologist reviews and edits if needed before delivery. The radiologist is the accountable clinician. AI eliminates the dictation and structuring workload — it does not remove radiologist accountability',
  },
  {
    q: 'Why is AI CT reporting cheaper than teleradiology for after-hours?',
    a: 'Overseas teleradiology services employ radiologists who are paid shift differentials for nights, weekends, and holidays — those costs are passed through as 30–100% after-hours surcharges. AI CT reporting generates the report regardless of time of day at the same cost, so there is no basis for a time-based surcharge. xAID charges the same flat per-study rate 24/7',
  },
  {
    q: 'What quality accuracy does xAID provide?',
    a: 'xAID achieves 95% accuracy verified by peer-reviewed studies. No overseas teleradiology company publishes equivalent clinical accuracy evidence — accuracy is unverified and variable',
  },
  {
    q: 'Should I switch from teleradiology to AI CT reporting?',
    a: 'AI CT reporting is a strong fit if: (1) CT is 70–90%+ of your read volume, (2) you have significant after-hours volume and pay surcharges, (3) you want a contractual quality guarantee backed by published accuracy data, or (4) you need fast setup without multi-year contracting. If you need MRI, X-ray, or nuclear reads covered in the same contract, overseas teleradiology still covers more modalities',
  },
];

const AiVsTeleradiology = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
      { "@type": "ListItem", "position": 2, "name": "AI vs Teleradiology", "item": "https://xaid.ai/ai-vs-teleradiology" },
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
        <title>AI CT Reporting vs Teleradiology: Cost & Accuracy | xAID</title>
        <meta
          name="description"
          content="AI CT reporting vs teleradiology: 95% verified accuracy, flat per-study rate vs 30–100% after-hours surcharges, setup in under a week. Full comparison."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI CT Reporting vs Overseas Teleradiology: Full Comparison" />
        <meta property="og:description" content="AI CT reporting vs teleradiology: 95% verified accuracy, flat per-study rate vs 30–100% after-hours surcharges, setup in under a week. Full comparison." />
        <meta property="og:url" content="https://xaid.ai/ai-vs-teleradiology" />
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
              AI CT reporting vs overseas teleradiology
            </h1>
            <p className="text-white/60 text-[15px] leading-[1.65] font-light mb-4">
              Both AI CT reporting and overseas teleradiology deliver complete CT coverage — the differences are in accuracy, cost structure, and what guarantees come with it
            </p>
            <p className="text-white/60 text-[15px] leading-[1.65] font-light">
              Overseas teleradiology adds a 30–100% surcharge for after-hours reads and publishes no clinical accuracy data. AI CT reporting charges a flat per-study rate 24/7 with 95% accuracy verified by peer-reviewed studies. For facilities with significant after-hours volume, the cost difference alone is often $50,000–$300,000+ per year
            </p>
          </div>
        </section>

        {/* Key difference callout */}
        <section className="section-padding pt-0">
          <div className="container-xaid max-w-4xl mx-auto">
            {/* Column headers */}
            <div className="hidden md:flex items-center gap-4 mb-3 px-5">
              <div className="w-[180px] flex-shrink-0" />
              <div className="flex-1">
                <span className="text-[11px] font-medium tracking-widest text-white/35 uppercase">Overseas Teleradiology</span>
              </div>
              <div className="w-8 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-[11px] font-medium tracking-widest text-xaid-blue">xAID</span>
              </div>
            </div>
            {/* Rows */}
            <div className="space-y-3">
              {[
                { aspect: 'Clinical accuracy', sub: 'Independent reporting accuracy', teleValue: 'No published data', teleSub: 'Not disclosed', xaidValue: '95% verified', xaidSub: 'Peer-reviewed studies' },
                { aspect: 'After-hours surcharge', sub: 'Premium for nights, weekends, holidays', teleValue: '+30–100%', teleSub: 'Per-study premium', xaidValue: '$0', xaidSub: 'Flat rate, 24/7' },
                { aspect: 'Setup time', sub: 'From contract to first read', teleValue: '2–8 weeks', teleSub: 'Credentialing & onboarding', xaidValue: 'Under 1 week', xaidSub: 'PACS-native deployment' },
              ].map((row) => (
                <div key={row.aspect} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-4">
                  {/* Aspect label */}
                  <div className="md:w-[180px] md:flex-shrink-0">
                    <div className="text-white font-medium text-sm">{row.aspect}</div>
                    <div className="text-white/45 text-xs mt-0.5 leading-snug">{row.sub}</div>
                  </div>
                  <div className="flex items-stretch gap-3 flex-1">
                    {/* Competitor card */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-[10px] text-white/35 mb-1 md:hidden">Overseas Teleradiology</p>
                      <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4 flex-1">
                        <div className="text-white/70 font-medium text-xl leading-tight">{row.teleValue}</div>
                        <div className="text-white/40 text-xs mt-1">{row.teleSub}</div>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="text-white/30 text-base flex-shrink-0 flex items-center">→</div>
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
              AI CT reporting vs overseas teleradiology — full comparison
            </h2>
            <div className="rounded-2xl overflow-hidden border border-white/15">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left px-5 py-4 text-[11px] font-medium tracking-wider text-white/50 uppercase bg-white/[0.08] w-[28%]">Factor</th>
                      <th className="text-left px-5 py-4 text-[11px] font-medium tracking-wider text-white/50 uppercase bg-white/[0.08] border-l border-white/15 w-[36%]">Overseas Teleradiology</th>
                      <th className="text-left px-5 py-4 text-[11px] font-medium tracking-wider text-xaid-blue bg-xaid-blue/[0.15] border-l border-xaid-blue/30 w-[36%]">xAID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.aspect} className="border-t border-white/10">
                        <td className="px-5 py-4 text-white/90 text-[14px] font-medium align-top leading-snug">{row.aspect}</td>
                        <td className="px-5 py-4 text-white/60 text-[14px] align-top leading-snug border-l border-white/10">{row.teleradiology}</td>
                        <td className="px-5 py-4 text-xaid-blue text-[14px] font-medium align-top leading-snug border-l border-xaid-blue/25 bg-xaid-blue/[0.06]">{row.xaid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* When to choose */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-6">When to choose AI CT reporting</h2>
            <div className="space-y-3">
              {[
                'CT is 70–90%+ of your read volume (AI CT reporting covers head, chest, abdomen)',
                'You have significant after-hours volume and pay 30–100% surcharges on those reads',
                'You want peer-reviewed accuracy data — no teleradiology provider publishes equivalent evidence',
                'You need fast setup: DICOM integration in under one week',
                'You want per-study pricing with no volume minimums or multi-year contracts',
                'You want a free pilot to evaluate report quality before committing',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-xaid-blue font-medium flex-shrink-0 mt-0.5">→</span>
                  <span className="text-gray-300 text-[15px] leading-[1.65] font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to choose teleradiology */}
        <section className="section-padding bg-white/[0.03]">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-6">When overseas teleradiology is still the right fit</h2>
            <div className="space-y-3">
              {[
                'You need MRI, X-ray, or nuclear reads covered in the same contract',
                'Your facility is a large hospital system requiring full multi-modality radiology coverage',
                'Your clinical workflows require on-call radiologist consultation, not just report delivery',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-gray-500 font-medium flex-shrink-0 mt-0.5">—</span>
                  <span className="text-gray-400 text-[15px] leading-[1.65] font-light">{item}</span>
                </div>
              ))}
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
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">See AI CT reporting in practice</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Free 5-study pilot. No integration required, no commitment. Compare xAID reports directly to your current teleradiology reads before making any decision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact-us"
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                Start free pilot
              </Link>
              <Link
                to="/blog/"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                Explore all resources
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Deep dive</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI teleradiology vs overseas teleradiology — full comparison</div>
              </Link>
              <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Cost analysis</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT radiology coverage costs 2026 — full breakdown</div>
              </Link>
              <Link to="/how-ai-ct-reporting-works/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">How it works</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI CT reporting works — 5-step workflow</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiVsTeleradiology;
