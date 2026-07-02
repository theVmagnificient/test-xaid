import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const comparisonData = [
  {
    category: 'Cost per radiologist / service',
    locum: '$500K–$650K / yr',
    teleradiology: '$40–$80 / CT study',
    xaid: 'Narrow AI pricing / study',
    xaidWins: true,
  },
  {
    category: 'Output',
    locum: 'Full report',
    teleradiology: 'Full report',
    xaid: 'Full ready-to-sign report',
    xaidWins: true,
  },
  {
    category: 'Radiologist review included',
    locum: 'Yes',
    teleradiology: 'Yes (billed separately)',
    xaid: 'Yes (included)',
    xaidWins: true,
  },
  {
    category: 'Turnaround time',
    locum: 'Depends on radiologist',
    teleradiology: '1–24 hrs',
    xaid: '2–12 hrs (guaranteed SLA)',
    xaidWins: true,
  },
  {
    category: 'Accuracy',
    locum: 'None published',
    teleradiology: 'None published',
    xaid: '95% accuracy — or we reimburse',
    xaidWins: true,
  },
  {
    category: 'Setup time',
    locum: '6–18 months to hire',
    teleradiology: '2–8 weeks',
    xaid: 'Under one week',
    xaidWins: true,
  },
  {
    category: 'Modalities',
    locum: 'All',
    teleradiology: 'All',
    xaid: 'CT focus (head, chest, abdomen)',
    xaidWins: false,
  },
  {
    category: 'HIPAA compliant',
    locum: 'Yes',
    teleradiology: 'Yes',
    xaid: 'Yes — ISO 27001 + BAA',
    xaidWins: true,
  },
];

const roiStats = [
  { stat: '$400K+', label: 'Annual savings vs. one locum radiologist' },
  { stat: '95%', label: 'accuracy — or we reimburse' },
  { stat: '<1 week', label: 'From contract to first report' },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>AI CT Reporting Pricing vs Locum & Teleradiology | xAID</title>
        <meta
          name="description"
          content="Compare AI CT reporting costs: xAID vs locum radiologist ($500K+/yr) vs traditional teleradiology ($40–80/study). See the ROI of ready-to-sign AI radiology reports."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI CT Reporting Pricing — xAID vs Locum vs Teleradiology" />
        <meta property="og:description" content="Full cost comparison: AI radiology reporting vs locum radiologists vs traditional teleradiology. Free 5-study pilot." />
        <meta property="og:url" content="https://xaid.ai/pricing" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI CT Reporting Pricing — xAID vs Locum vs Teleradiology" />
        <meta name="twitter:description" content="Full cost comparison: AI radiology reporting vs locum radiologists vs traditional teleradiology. Free 5-study pilot." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "AI CT Reporting Pricing", "item": "https://xaid.ai/pricing" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does AI CT reporting cost per study?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID pricing is competitive with narrow AI overlay solutions — despite including radiologist review on every report. Contact us for volume-based pricing specific to your CT workload."
              }
            },
            {
              "@type": "Question",
              "name": "Is there a minimum volume requirement for AI CT reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. You can start with our free 5-study pilot (no integration, no commitment) and scale from there. Pricing scales with volume."
              }
            },
            {
              "@type": "Question",
              "name": "How does xAID compare to teleradiology pricing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional teleradiology typically runs $40–$80 per CT study — without published accuracy data. xAID delivers comparable output with 95% accuracy verified by peer-reviewed studies, DICOM/HL7 integration, and faster average TAT."
              }
            },
            {
              "@type": "Question",
              "name": "What is the ROI of AI CT reporting vs hiring a locum radiologist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A locum radiologist costs $500,000–$650,000 per year in compensation alone. xAID delivers comparable CT coverage at a fraction of that cost, with setup under one week instead of 12+ months."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid text-center">
            <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Pricing & ROI</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              AI CT reporting pricing:<br />
              <span className="text-white/60">What you actually pay</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65] max-w-2xl mx-auto mb-10">
              Per-study pricing at narrow AI rates — with radiologist review included. Compare the real cost of AI CT reporting vs locum radiologists and traditional teleradiology
            </p>
            <a
              href="https://xaid.ai/#contact-us"
              className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
            >
              Get Pricing — Free 5-Study Pilot
            </a>
          </div>
        </section>

        {/* ROI Stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {roiStats.map((item) => (
                <div key={item.stat} className="text-center">
                  <div className="text-4xl md:text-5xl font-medium text-xaid-blue mb-2">{item.stat}</div>
                  <div className="text-white/60 text-[15px] font-light leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding">
          <div className="container-xaid max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white mb-4">
                Full cost comparison
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] max-w-2xl mx-auto">
                AI radiology reporting vs locum radiologist vs traditional teleradiology
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/15">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead>
                    <tr>
                      <th className="text-left px-5 py-4 text-[11px] font-medium tracking-wider text-white/50 uppercase bg-white/[0.08] w-[28%]">Category</th>
                      <th className="text-center px-5 py-4 text-[11px] font-medium tracking-wider text-white/50 uppercase bg-white/[0.08] border-l border-white/15">Locum radiologist</th>
                      <th className="text-center px-5 py-4 text-[11px] font-medium tracking-wider text-white/50 uppercase bg-white/[0.08] border-l border-white/15">Traditional teleradiology</th>
                      <th className="text-center px-5 py-4 text-[11px] font-medium tracking-wider text-xaid-blue bg-xaid-blue/[0.15] border-l border-xaid-blue/30">xAID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row) => (
                      <tr key={row.category} className="border-t border-white/10">
                        <td className="px-5 py-4 text-white/90 text-[14px] font-medium align-top leading-snug">{row.category}</td>
                        <td className="px-5 py-4 text-center text-white/60 text-[14px] align-top leading-snug border-l border-white/10">{row.locum}</td>
                        <td className="px-5 py-4 text-center text-white/60 text-[14px] align-top leading-snug border-l border-white/10">{row.teleradiology}</td>
                        <td className="px-5 py-4 text-center text-[14px] font-medium align-top leading-snug border-l border-xaid-blue/25 bg-xaid-blue/[0.06] text-xaid-blue">
                          {row.xaid}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Model */}
        <section className="section-padding bg-white/[0.03]">
          <div className="container-xaid max-w-5xl mx-auto">
            <h2 className="text-[22px] md:text-[28px] font-normal text-white text-center mb-10 leading-[1.3]">
              How xAID pricing works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch mb-10">
              {[
                {
                  title: 'Per-study pricing',
                  body: 'Pay only for the CT studies you send. No monthly minimums, no seat licenses. Priced at narrow AI rates — with radiologist review already included',
                },
                {
                  title: 'Free 5-study pilot',
                  body: 'No integration required, no commitment. Send 5 studies and get back ready-to-sign reports to evaluate quality before you decide',
                },
                {
                  title: '95% accuracy — verified',
                  body: '95% accuracy verified by peer-reviewed studies. The only AI radiology service with published clinical evidence from independent research',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col h-full"
                >
                  <div className="text-xaid-blue text-[26px] font-medium mb-4 leading-none">
                    0{i + 1}
                  </div>
                  <h3 className="text-white font-medium text-[18px] mb-3 leading-[1.3]">{item.title}</h3>
                  <p className="text-white/70 text-[15px] leading-[1.65] font-light">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/#contact-us"
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
              >
                Get exact pricing for your volume
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-10 text-center">
                Pricing questions
              </h2>
              <FAQAccordion
                variant="light"
                faqs={[
                  {
                    q: 'How much does AI CT reporting cost per study?',
                    a: 'xAID pricing is competitive with narrow AI overlay solutions — despite including radiologist review on every report. Contact us for volume-based pricing specific to your CT workload',
                  },
                  {
                    q: 'Is there a minimum volume requirement?',
                    a: 'No. You can start with our free 5-study pilot (no integration, no commitment) and scale from there. Pricing scales with volume',
                  },
                  {
                    q: 'How does xAID compare to teleradiology pricing?',
                    a: 'Traditional teleradiology typically runs $40–$80 per CT study — without published accuracy data. xAID delivers comparable output with 95% accuracy verified by peer-reviewed studies, DICOM/HL7 integration, and faster average TAT',
                  },
                  {
                    q: 'What is the ROI vs hiring a locum radiologist?',
                    a: 'A locum radiologist costs $500,000–$650,000 per year in compensation alone. xAID delivers comparable CT coverage at a fraction of that cost, with setup under one week instead of 12+ months',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Before you decide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/ct-radiology-coverage-costs-2026" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Cost analysis</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT radiology coverage costs 2026 — full breakdown</div>
              </Link>
              <Link to="/accuracy" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Accuracy — 95% verified by peer-reviewed studies</div>
              </Link>
              <Link to="/ai-vs-locum-radiologist" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Comparison</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT reporting vs locum radiologist — cost, speed & risk</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
