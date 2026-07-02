import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const findings = [
  'Liver: size, parenchyma, focal lesions (cysts, hemangiomas, masses)',
  'Gallbladder and biliary ducts',
  'Pancreas: morphology, ductal dilatation, masses',
  'Spleen: size, morphology, focal lesions',
  'Kidneys: size, stones, hydronephrosis, masses',
  'Adrenal glands: size and morphology',
  'Bowel wall thickening and free fluid',
  'Aorta and major vessel assessment',
  'Lymph node enlargement',
  'Skeletal findings (vertebral, pelvic)',
];

const abdomenFaqs = [
  {
    q: 'What does an AI abdomen CT report include?',
    a: 'An xAID abdomen CT report covers the full abdominal cavity: liver (including focal lesions and morphology), gallbladder, biliary system, pancreas, spleen, kidneys (stones, masses, hydronephrosis), adrenals, bowel, peritoneal fluid, vascular structures, lymph nodes, and vertebral findings. Delivered as ready-to-sign preliminary reports in standard radiology report format, reviewed by our in-house radiologist before delivery',
  },
  {
    q: 'How fast is AI abdominal CT report turnaround?',
    a: 'AI-generated structured drafts are produced within minutes of DICOM receipt. Full preliminary reports are delivered within 2–12 hours. 24/7 coverage is available for after-hours and overnight reads',
  },
  {
    q: 'Does xAID cover both non-contrast and contrast abdomen CT?',
    a: 'xAID supports abdomen CT reporting across standard acquisition protocols. Confirm specific protocol coverage (non-contrast, portal venous phase, multi-phase) during the onboarding call',
  },
  {
    q: 'Can AI abdomen CT reporting replace a radiologist?',
    a: 'No — xAID is AI-assisted, not autonomous. Every report is reviewed by our in-house European radiologist before delivery. AI handles structured analysis and draft generation; xAID\'s radiologist is accountable for the preliminary report, and your radiologist reviews and signs the final clinical report',
  },
  {
    q: 'Is xAID abdomen CT HIPAA compliant?',
    a: 'Yes. xAID is HIPAA-compliant, ISO 27001 certified, and signs a Business Associate Agreement (BAA) before your first study. Patient data is processed exclusively in US-based, HIPAA-certified infrastructure',
  },
];

const AbdomenCtReport = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>AI Abdomen CT Reports in 2–12 Hours | xAID</title>
        <meta
          name="description"
          content="AI abdomen CT reporting: structured preliminary reports in 2–12 hours. Liver, kidneys, pancreas, bowel and more — HIPAA compliant, 24/7. Free 5-study pilot."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Abdomen CT Reports in 2–12 Hours | xAID" />
        <meta property="og:description" content="AI abdomen CT reporting: structured preliminary reports in 2–12 hours. Liver, kidneys, pancreas, bowel and more — HIPAA compliant, 24/7. Free 5-study pilot." />
        <meta property="og:url" content="https://xaid.ai/abdomen-ct-ai-report" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Abdomen CT Reports in 2–12 Hours | xAID" />
        <meta name="twitter:description" content="AI abdomen CT reporting: structured preliminary reports in 2–12 hours. Liver, kidneys, pancreas, bowel and more — HIPAA compliant, 24/7. Free 5-study pilot." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Abdomen CT AI Reporting", "item": "https://xaid.ai/abdomen-ct-ai-report" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": abdomenFaqs.map(f => ({
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
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Abdomen CT AI Reporting</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                AI abdominal CT reports.<br />
                <span className="text-white/60">Full coverage.</span><br />
                <span className="text-white/60">2–12 hours</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] mb-10 max-w-xl">
                Structured abdomen CT reports generated by AI, reviewed by our in-house European radiologist before delivery. Full abdominal cavity coverage — liver to pelvis. Available 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact-us" className="bg-xaid-blue hover:bg-xaid-blue/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 text-center">
                  Start free pilot
                </Link>
                <Link to="/accuracy/" className="border border-white/20 text-white hover:bg-white/5 font-medium px-8 py-4 rounded-full transition-all duration-200 text-center">
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
                What's covered in every abdomen CT report
              </h2>
              <p className="text-[#666] mb-10 max-w-2xl">
                xAID analyzes 100+ findings per abdomen CT and structures them into a complete, radiologist-ready report. Coverage includes:
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
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4 text-center">Who uses xAID for abdomen CT</h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">Abdomen CT is one of the highest-volume elective and urgent reads. xAID handles both — scheduled and after-hours</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Outpatient imaging centers',
                  desc: 'Cover abdomen CT read volume without a full-time radiologist on staff. Scheduled studies returned within 12 hours',
                },
                {
                  title: 'After-hours coverage',
                  desc: 'Urgent abdominal CTs don\'t stop at 5 PM. xAID is available overnight and on weekends — no after-hours surcharges',
                },
                {
                  title: 'Teleradiology scale-up',
                  desc: 'Handle abdomen CT overflow during peak volume periods. AI reads the scan; xAID\'s in-house radiologist reviews the preliminary and delivers faster',
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
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-10 text-center">Abdomen CT reporting questions</h2>
              <FAQAccordion variant="light" faqs={abdomenFaqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Start with 5 free abdomen CT reads</h2>
            <p className="text-white/60 mb-8">
              Send us your first 5 abdominal CT studies. No commitment, no setup fee. Evaluate report quality before you decide
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

export default AbdomenCtReport;
