import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const findings = [
  'Ischemic stroke and early infarct signs',
  'Intracranial hemorrhage (epidural, subdural, subarachnoid)',
  'Brain parenchyma and white matter changes',
  'Midline shift and herniation',
  'Ventricular system assessment',
  'Skull and facial bone fractures',
  'Sinuses and mastoids',
  'Orbits and optic nerves',
  'Scalp and soft tissue abnormalities',
  'Incidental vascular findings',
];

const headFaqs = [
  {
    q: 'What does a head CT AI report include?',
    a: 'An xAID head CT report covers all major intracranial and extracranial findings: ischemic changes, hemorrhage (epidural, subdural, subarachnoid, intraparenchymal), brain parenchyma, ventricular assessment, midline shift, skull fractures, and incidental vascular findings. Delivered as ready-to-sign preliminary reports in standard radiology report format, reviewed by our in-house radiologist before delivery',
  },
  {
    q: 'How fast is AI head CT report turnaround?',
    a: 'AI-generated structured drafts are produced within minutes of DICOM receipt. Full preliminary reports are delivered within 2–12 hours. 24/7 coverage available for after-hours and overnight reads',
  },
  {
    q: 'Can AI detect stroke on CT?',
    a: 'xAID analyzes head CT for early ischemic stroke signs, including subtle parenchymal hypodensity and loss of grey-white matter differentiation. The AI-generated findings are reviewed by our in-house radiologist before the final report is delivered',
  },
  {
    q: 'Is AI head CT reporting suitable for emergency use?',
    a: 'Yes. xAID is available 24/7, including after-hours and overnight reads. The AI analysis is immediate — findings are structured the moment DICOM arrives, allowing the reviewing radiologist to work from an AI-generated draft rather than starting from scratch',
  },
  {
    q: 'Does xAID cover non-contrast and contrast-enhanced head CT?',
    a: 'xAID covers non-contrast head CT (the most common emergency head CT protocol). Support for contrast-enhanced head CT is available — confirm current protocol coverage during onboarding',
  },
];

const HeadCtReport = () => {
  return (
    <>
      <Helmet>
        <title>AI Head CT Reporting — Reports in 2–12 Hours | xAID</title>
        <meta
          name="description"
          content="AI head CT reporting: structured, preliminary reports in 2–12 hours. Covers stroke signs, intracranial hemorrhage, fractures, and more. 24/7. HIPAA compliant. Free 5-study pilot."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Head CT Reporting Service | xAID" />
        <meta property="og:description" content="AI head CT preliminary reports in 2–12 hours — structured, radiologist-reviewed, ready to sign. HIPAA compliant, 24/7 coverage. Free 5-study pilot." />
        <meta property="og:url" content="https://xaid.ai/head-ct-ai-report" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Head CT Reporting Service | xAID" />
        <meta name="twitter:description" content="Structured AI head CT reports in 2–12 hours. Radiologist-reviewed, HIPAA compliant, 24/7." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Head CT AI Reporting", "item": "https://xaid.ai/head-ct-ai-report" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": headFaqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid">
            <div className="max-w-3xl">
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Head CT AI Reporting</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                AI head CT reports.<br />
                <span className="text-white/60">Structured. Ready to sign.</span><br />
                <span className="text-white/60">2–12 hours</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] mb-10 max-w-xl">
                Structured head CT reports generated by AI, reviewed by our in-house European radiologist before delivery. Coverage for stroke, hemorrhage, fractures, and full intracranial assessment. Available 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact-us" className="bg-xaid-blue hover:bg-xaid-blue/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 text-center">
                  Start free pilot
                </Link>
                <Link to="/accuracy" className="border border-white/20 text-white hover:bg-white/5 font-medium px-8 py-4 rounded-full transition-all duration-200 text-center">
                  View clinical evidence
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key metrics */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                { stat: '2–12 hrs', label: 'Report turnaround', sub: '24/7, including overnight' },
                { stat: '100+', label: 'Findings analyzed', sub: 'per report' },
                { stat: '24/7', label: 'Coverage', sub: 'no after-hours surcharge' },
                { stat: '95%', label: 'Accuracy', sub: 'or we reimburse' },
              ].map((item) => (
                <div key={item.stat} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex flex-col h-full">
                  <div className="text-3xl md:text-4xl font-medium text-xaid-blue mb-2">{item.stat}</div>
                  <div className="text-white text-sm font-medium mb-1">{item.label}</div>
                  <div className="text-white/40 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's covered */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What's covered in every head CT report
              </h2>
              <p className="text-[#666] mb-10 max-w-2xl">
                xAID analyzes 100+ findings per head CT and structures them into a complete, radiologist-ready report. Head CT analysis includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {findings.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-xaid-blue flex-shrink-0" />
                    <span className="text-[#0D0D0D] text-[15px] font-light">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4 text-center">Who uses xAID for head CT</h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">Head CT is among the most common urgent reads. xAID covers the full range of use cases</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Outpatient imaging centers',
                  desc: 'Expand head CT read capacity without hiring a radiologist. Send studies to xAID and receive preliminary reports back within 2–12 hours',
                },
                {
                  title: 'After-hours & overnight coverage',
                  desc: 'Replace expensive after-hours teleradiology services. xAID is available 24/7 — no per-study surcharges for off-hours',
                },
                {
                  title: 'Teleradiology overflow',
                  desc: 'Scale read volume during peak periods without adding headcount. AI handles the initial analysis; our radiologist reviews the preliminary before delivery — ready for your team to sign',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-white font-medium text-[18px] leading-[1.3] mb-3">{item.title}</h3>
                  <p className="text-white/60 text-[15px] leading-[1.65] font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-10 text-center">Head CT reporting questions</h2>
              <FAQAccordion variant="light" faqs={headFaqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Start with 5 free head CT reads</h2>
            <p className="text-white/60 mb-8">
              Send us your first 5 head CT studies. No commitment, no setup fee. Evaluate report quality before you decide
            </p>
            <Link
              to="/#contact-us"
              className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
            >
              Request free pilot
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HeadCtReport;
