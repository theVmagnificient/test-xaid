import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from "lucide-react";
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const painPoints = [
  {
    problem: 'You can\'t recruit or retain a full-time radiologist',
    solution: 'xAID adds AI CT read capacity in under one week — no recruiting, no credentialing, no hiring dependency',
  },
  {
    problem: 'Locum radiologists cost $500K–$650K per year and are hard to schedule',
    solution: 'Replace locum CT reads with per-study AI reporting at a fraction of the cost. Radiologist review included on every report',
  },
  {
    problem: 'After-hours teleradiology surcharges make 24/7 coverage unaffordable',
    solution: 'xAID charges flat per-study pricing with no after-hours premium. Same rate at 3 AM as at 3 PM',
  },
  {
    problem: 'Your budget can\'t support enterprise AI contracts or long commitments',
    solution: 'No enterprise contracts. Per-study pricing — pay for what you use. Free 5-study pilot before any commitment',
  },
];

const workflow = [
  { step: '1', title: 'Send CT via DICOM', desc: 'Standard DICOM push. Works with your existing PACS — no new hardware' },
  { step: '2', title: 'Two AI layers analyze', desc: 'Foundation model + secondary AI screen 100+ findings. Every CT. Every time' },
  { step: '3', title: 'Radiologist reviews', desc: 'In-house European radiologist reviews every report before delivery' },
  { step: '4', title: 'Preliminary report via HL7', desc: 'Delivered into your system in 2–12 hours. Ready to act on immediately' },
];

const ForSmallHospitals = () => {
  return (
    <>
      <Helmet>
        <title>AI CT Reporting for Small & Community Hospitals | xAID</title>
        <meta
          name="description"
          content="AI radiology reporting for small hospitals, critical access hospitals, and community hospitals. Ready-to-sign CT reports — 2–12 hr TAT, no after-hours surcharge, radiologist review included. Setup under 1 week."
        />
        <link rel="canonical" href="https://xaid.ai/for-small-hospitals" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI CT Reporting for Small & Community Hospitals | xAID" />
        <meta property="og:description" content="CT radiology coverage for small and community hospitals — no after-hours surcharge, no enterprise contract, radiologist review on every report." />
        <meta property="og:url" content="https://xaid.ai/for-small-hospitals" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI CT Reporting for Small & Community Hospitals | xAID" />
        <meta name="twitter:description" content="CT radiology coverage for small and community hospitals — no after-hours surcharge, no enterprise contract, radiologist review on every report." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "For Small & Community Hospitals", "item": "https://xaid.ai/for-small-hospitals" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can small hospitals get radiology coverage without a full-time radiologist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID provides AI-powered CT radiology reporting for small hospitals at per-study pricing with no long-term contract. Setup takes under one week via standard DICOM integration. Every report is reviewed by an in-house European radiologist before delivery, with 2–12 hour turnaround time."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of AI CT reporting compared to a locum radiologist for a small hospital?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Locum radiologists cost $500,000–$650,000 per year plus after-hours premiums. xAID charges per-study pricing at narrow AI rates — with radiologist review included — and no after-hours surcharge. A small hospital reading 2,000 CT studies per year typically saves 60–75% on radiology coverage costs vs. locum or traditional teleradiology."
              }
            },
            {
              "@type": "Question",
              "name": "Is AI CT reporting HIPAA compliant for hospital use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. xAID is HIPAA compliant with US-based AWS infrastructure. ISO 27001 certified with annual third-party audit. Business Associate Agreement (BAA) available before any pilot begins. Zero-footprint viewers — no PHI leaves US servers."
              }
            },
            {
              "@type": "Question",
              "name": "Can a small hospital use AI CT reporting for after-hours coverage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. xAID delivers 24/7 CT read coverage with no after-hours surcharge — the same per-study rate applies at any hour. Traditional teleradiology providers charge 30–100% surcharges for nighttime and weekend reads. xAID eliminates that variable."
              }
            },
            {
              "@type": "Question",
              "name": "How does a small hospital integrate AI CT reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Integration uses standard DICOM push from your existing PACS. Reports return via HL7. Typical setup time is under one week with minimal IT involvement. No new hardware required. xAID provides a dedicated onboarding contact for the full setup process."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid">
            <div className="max-w-3xl">
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">AI Radiology for Small & Community Hospitals</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
                24/7 CT coverage.<br />
                <span className="text-white/60">No radiologist on staff required</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] max-w-2xl mb-8">
                xAID provides AI-powered CT radiology reporting for small and community hospitals — delivering ready-to-sign reports in 2–12 hours at per-study pricing, with no after-hours surcharge and no long-term contract
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact-us"
                  className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  Start free 5-study pilot
                </Link>
                <Link
                  to="/blog/ct-radiology-coverage-costs-2026"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  Compare coverage costs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { stat: '$0', label: 'After-hours surcharge' },
                { stat: '95%', label: 'accuracy — or we reimburse' },
                { stat: '2–12 hr', label: 'Turnaround time' },
                { stat: '<1 week', label: 'Setup time' },
              ].map((item) => (
                <div key={item.stat}>
                  <div className="text-4xl font-medium text-xaid-blue mb-2">{item.stat}</div>
                  <div className="text-white/60 text-[15px] font-light">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-12">
                Built for the constraints small hospitals actually face
              </h2>
              <div className="grid gap-5 md:gap-6">
                {painPoints.map((item) => (
                  <div
                    key={item.problem}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-0 items-stretch"
                  >
                    {/* Challenge card */}
                    <div className="flex flex-col h-full rounded-xl bg-[#F4F4F4] border border-[#E5E5E5] p-6 md:p-7">
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-[#8A8A8A] uppercase mb-3">
                        Challenge
                      </span>
                      <p className="text-[#1A1A1A] text-[15px] leading-[1.6]">
                        {item.problem}
                      </p>
                    </div>

                    {/* Connector desktop */}
                    <div className="hidden md:flex items-center justify-center px-4" aria-hidden="true">
                      <ArrowRight className="w-5 h-5 text-xaid-blue/50" strokeWidth={2} />
                    </div>
                    {/* Connector mobile */}
                    <div className="flex md:hidden items-center justify-center" aria-hidden="true">
                      <ArrowDown className="w-5 h-5 text-xaid-blue/50" strokeWidth={2} />
                    </div>

                    {/* Solution card */}
                    <div className="flex flex-col h-full rounded-xl bg-xaid-blue/[0.06] border border-xaid-blue/30 p-6 md:p-7">
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-xaid-blue uppercase mb-3">
                        With xAID
                      </span>
                      <p className="text-[#1A1A1A] text-[15px] leading-[1.6]">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost comparison */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white text-center mb-4">
              What CT radiology coverage actually costs
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              For a small hospital reading 3,000 CT studies per year, the coverage cost gap between models is significant
            </p>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/15">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead>
                    <tr>
                      <th className="text-left px-6 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 bg-white/[0.08]">Coverage model</th>
                      <th className="text-left px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 bg-white/[0.08] border-l border-white/15">Annual cost</th>
                      <th className="text-left px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 bg-white/[0.08] border-l border-white/15">After-hours surcharge</th>
                      <th className="text-left px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 bg-white/[0.08] border-l border-white/15">Quality guarantee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: 'In-house radiologist', cost: '$450K–$600K salary + benefits', surcharge: 'N/A (fixed cost)', guarantee: 'None' },
                      { model: 'Locum radiologist', cost: '$500K–$650K equivalent', surcharge: '30–50% premium', guarantee: 'None' },
                      { model: 'Traditional teleradiology', cost: '$120K–$480K ($40–$160/study)', surcharge: '30–100% per study', guarantee: 'None' },
                      { model: 'xAID AI CT reporting', cost: 'Narrow AI pricing + radiologist review', surcharge: '$0 — flat per-study rate', guarantee: '95% accuracy — or we reimburse', highlight: true },
                    ].map((row) => (
                      <tr
                        key={row.model}
                        className={`border-t border-white/10 ${row.highlight ? 'bg-xaid-blue/[0.06]' : ''}`}
                      >
                        <td className={`px-6 py-5 align-top text-[14px] leading-snug font-medium relative ${row.highlight ? 'text-xaid-blue' : 'text-white/90'}`}>
                          {row.highlight && (
                            <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-xaid-blue" aria-hidden="true" />
                          )}
                          {row.model}
                        </td>
                        <td className={`px-5 py-5 align-top text-[14px] leading-snug border-l ${row.highlight ? 'text-xaid-blue font-medium border-xaid-blue/25' : 'text-white/70 border-white/10'}`}>
                          {row.cost}
                        </td>
                        <td className={`px-5 py-5 align-top text-[14px] leading-snug border-l ${row.highlight ? 'text-xaid-blue font-medium border-xaid-blue/25' : 'text-white/70 border-white/10'}`}>
                          {row.surcharge}
                        </td>
                        <td className={`px-5 py-5 align-top text-[14px] leading-snug border-l ${row.highlight ? 'text-xaid-blue font-medium border-xaid-blue/25' : 'text-white/55 border-white/10'}`}>
                          {row.guarantee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-white/40 text-[12px] text-center mt-6 max-w-2xl mx-auto">
              Annual cost estimate based on 3,000 CT studies. Actual figures depend on study volume, modality mix, and provider rates
            </p>
          </div>
        </section>

        {/* Workflow */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white text-center mb-12">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {workflow.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-xaid-blue/20 border border-xaid-blue/40 flex items-center justify-center text-xaid-blue font-medium text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-white/60 text-[15px] leading-[1.65] font-light">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/how-ai-ct-reporting-works" className="text-xaid-blue text-sm font-medium hover:underline">
                Full workflow overview — How AI CT Reporting Works →
              </Link>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="section-padding">
          <div className="container-xaid">
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white mb-6">Compliance & security</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Hospital procurement teams ask hard compliance questions. Here are the answers
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'HIPAA', value: 'Fully compliant — US-based AWS infrastructure only, zero-footprint viewers' },
                  { label: 'ISO 27001', value: 'Certified — annual third-party security audit' },
                  { label: 'BAA', value: 'Business Associate Agreement available — sign before pilot begins' },
                  { label: 'Radiologist accountability', value: 'Every report reviewed by our in-house European radiologist' },
                  { label: 'Data residency', value: 'All PHI stays on US servers — no data leaves US infrastructure' },
                  { label: 'DICOM/HL7', value: 'Standard DICOM input / HL7 output — no proprietary formats required' },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-xaid-blue/40 pl-4">
                    <div className="text-xaid-blue text-xs font-medium uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white/70 text-[15px] leading-[1.65] font-light">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/compliance" className="text-xaid-blue text-sm font-medium hover:underline">
                  Full compliance documentation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-8 text-center">Frequently asked questions</h2>
            <FAQAccordion
              variant="dark"
              faqs={[
                {
                  q: 'How can a small hospital get radiology coverage without a full-time radiologist?',
                  a: 'xAID provides AI-powered CT reporting at per-study pricing with no FTE commitment. Setup takes under one week via standard DICOM integration. Our in-house European radiologist reviews every report before delivery. The output is a ready-to-sign preliminary report — comparable to teleradiology in workflow, at lower cost, and with 95% accuracy verified by peer-reviewed studies',
                },
                {
                  q: 'What is the cost of AI CT reporting vs a locum radiologist?',
                  a: 'Locum radiologists cost $500,000–$650,000 per year equivalent, plus after-hours premiums. xAID charges per-study at narrow AI rates with no after-hours surcharge. For a hospital reading 3,000 CT studies annually, the typical savings vs locum coverage is 60–75%',
                },
                {
                  q: 'Is there a contract or minimum volume commitment?',
                  a: 'No enterprise contract required. xAID operates on per-study pricing — you pay for studies read, with no minimum volume floor. A free 5-study pilot is available before any commitment is made',
                },
                {
                  q: 'Can AI CT reporting cover after-hours reads without a surcharge?',
                  a: 'Yes. xAID charges a flat per-study rate with no after-hours, weekend, or holiday surcharge. Traditional teleradiology providers typically add 30–100% surcharges for nighttime and weekend reads. For hospitals running 24/7 operations, eliminating that variable can produce significant annual savings',
                },
                {
                  q: 'What IT resources are required for integration?',
                  a: 'Integration uses standard DICOM push from your existing PACS. Reports return via HL7 into your system. Typical setup requires 2–4 hours of PACS administrator time. xAID provides a dedicated onboarding contact for the full setup process',
                },
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white mb-4">
                Start with a 5-study pilot
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Send five CT studies. Receive complete preliminary reports. No integration required, no commitment, no risk. See the output before any decision
              </p>
              <Link
                to="/#contact-us"
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-10 py-4 rounded-full transition-all duration-200 inline-block"
              >
                Request free pilot
              </Link>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/ct-radiology-coverage-costs-2026" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Cost analysis</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT radiology coverage costs 2026 — full breakdown</div>
              </Link>
              <Link to="/blog/ai-radiology-for-small-hospitals-2026" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Blog</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI radiology for small hospitals 2026 — full guide</div>
              </Link>
              <Link to="/compliance" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Compliance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">HIPAA, ISO 27001, BAA — full compliance details</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ForSmallHospitals;
