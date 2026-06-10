import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const useCases = [
  {
    title: 'CT overflow & after-hours coverage',
    desc: 'Route overflow or after-hours CT studies to xAID. Reports return in 2–12 hours via HL7 — ready for your radiologists to review and sign, not dictate',
  },
  {
    title: 'Reducing radiologist burnout',
    desc: 'AI handles the analysis and xAID\'s radiologist reviews before delivery. Your radiologists review a finished preliminary — not a raw AI output — freeing bandwidth for complex, high-value reads',
  },
  {
    title: 'Second read & overread',
    desc: 'Use xAID as an AI overread layer on CT studies. Two independent AI layers plus radiologist review give you a quality check with 100+ findings analyzed per report',
  },
  {
    title: 'Staffing gap coverage',
    desc: 'Vacation, illness, or sudden departure — xAID fills CT coverage gaps in under a week with no recruiting, credentialing, or locum placement fees',
  },
];

const workflow = [
  { step: '1', title: 'Send CT via DICOM', desc: 'Standard DICOM push to xAID. No new equipment or workflow changes required' },
  { step: '2', title: 'AI analyzes 100+ findings', desc: 'Foundation model + secondary AI layer process the study. Head, chest, or abdomen CT' },
  { step: '3', title: 'Radiologist reviews', desc: 'Every report reviewed by our in-house European radiologist. Your radiologists review — they don\'t dictate' },
  { step: '4', title: 'Report returned via HL7', desc: 'Ready-to-sign report in your system within 2–12 hours' },
];

const stats = [
  { stat: '100+', label: 'CT findings analyzed per report' },
  { stat: '95%', label: 'accuracy — or we reimburse' },
  { stat: '2–12 hr', label: 'Turnaround on every study' },
  { stat: '<1 week', label: 'From contract to first report' },
];

const ForRadiologyGroups = () => {
  return (
    <>
      <Helmet>
        <title>AI CT Reporting for Radiology Groups — Reduce Burnout & Scale Reads | xAID</title>
        <meta
          name="description"
          content="AI CT reporting for radiology groups. Handle overflow, after-hours coverage, and radiologist burnout with ready-to-sign AI reports — 2–12 hr TAT, 95% accuracy verified, European radiologist review included."
        />
        <link rel="canonical" href="https://xaid.ai/for-radiology-groups" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI CT Reporting for Radiology Groups | xAID" />
        <meta property="og:description" content="Handle CT overflow and after-hours coverage without new hires. Ready-to-sign AI radiology reports — 2–12 hr TAT, 95% accuracy verified." />
        <meta property="og:url" content="https://xaid.ai/for-radiology-groups" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI CT Reporting for Radiology Groups | xAID" />
        <meta name="twitter:description" content="Handle CT overflow and after-hours coverage without new hires. Ready-to-sign AI radiology reports — 2–12 hr TAT, 95% accuracy verified." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "For Radiology Groups", "item": "https://xaid.ai/for-radiology-groups" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can AI CT reporting reduce radiologist burnout?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID delivers the complete ready-to-sign CT report — radiologists review and sign rather than dictating from scratch. This reduces the cognitive load on routine CT reads, freeing time for complex cases and reducing per-shift fatigue."
              }
            },
            {
              "@type": "Question",
              "name": "Can radiology groups use AI for after-hours CT coverage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. xAID provides AI radiology reporting with 2–12 hour turnaround and configurable SLA. Route after-hours or overnight CT studies via DICOM — reports return via HL7 within your SLA window, ready for radiologist sign-off."
              }
            },
            {
              "@type": "Question",
              "name": "What is an AI overread service for radiology groups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An AI overread runs a second, independent analysis on CT studies. xAID uses two AI layers (foundation model + secondary AI) analyzing 100+ findings, followed by radiologist review — functioning as a comprehensive quality check on every report."
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
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">For radiology groups</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                AI CT reporting<br />
                <span className="text-white/60">for radiology groups</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] max-w-2xl mb-8">
                Handle CT overflow, after-hours coverage, and radiologist burnout without adding headcount. xAID delivers ready-to-sign preliminary reports — your radiologists review and sign, not dictate
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact-us"
                  className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  Start free 5-study pilot
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((item) => (
                <div key={item.stat}>
                  <div className="text-4xl font-medium text-xaid-blue mb-2">{item.stat}</div>
                  <div className="text-white/60 text-[15px] font-light">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-12">
                How radiology groups use xAID
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((item) => (
                  <div key={item.title} className="bg-[#FAFAFA] border border-gray-100 rounded-xl p-6 md:p-7">
                    <h3 className="font-medium text-[#0D0D0D] text-lg mb-3">{item.title}</h3>
                    <p className="text-[#666] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white text-center mb-12">
              How it works for radiology groups
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
          </div>
        </section>

        {/* What's included */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-8">What radiology groups get</h2>
              <ul className="space-y-4 mb-10">
                {[
                  'Ready-to-sign CT reports — head, chest, abdomen — at narrow AI pricing',
                  'Two AI layers analyzing 100+ findings per report — foundation model + secondary AI',
                  'European radiologist review included on every report before delivery',
                  '95% accuracy verified by peer-reviewed studies — the only AI CT reporting service with published clinical evidence',
                  '2–12 hour SLA-backed turnaround, configurable to your schedule',
                  'Standard DICOM/HL7 — typically live in under one week',
                  'HIPAA compliant, ISO 27001 certified, BAA available',
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-[#444]">
                    <span className="text-xaid-blue font-medium mt-0.5">✓</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact-us"
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
              >
                Start a free 5-study pilot
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-10 text-center">Common questions</h2>
            <FAQAccordion
              variant="dark"
              faqs={[
                {
                  q: 'How does AI CT reporting reduce radiologist workload?',
                  a: 'xAID delivers the complete report — not detection flags. Your radiologists review a fully drafted ready-to-sign report instead of dictating from a blank screen. On routine CT, this significantly reduces per-read time and cognitive load',
                },
                {
                  q: 'Can we use xAID only for overflow or after-hours reads?',
                  a: 'Yes. You can route specific study types, time windows, or volume overflow selectively. xAID works alongside your existing radiology workflow — it doesn\'t require you to replace anything',
                },
                {
                  q: 'What CT types does xAID cover for radiology groups?',
                  a: 'Head, chest, and abdomen CT — 100+ findings per report. MRI is on the roadmap. We focus on depth of CT coverage rather than breadth across all modalities',
                },
                {
                  q: 'Is there a minimum volume commitment for radiology groups?',
                  a: 'No minimum. Start with a free 5-study pilot, no integration required. Volume-based pricing scales with how many studies you route to xAID each month',
                },
              ]}
            />
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/accuracy" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Accuracy — 95% verified by peer-reviewed studies</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Blog</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist shortage 2026</div>
              </Link>
              <Link to="/ai-vs-teleradiology" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Comparison</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT reporting vs traditional teleradiology — full comparison</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ForRadiologyGroups;
