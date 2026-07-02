import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const findings = [
  'Lung nodules (solid, ground-glass, sub-solid)',
  'Parenchymal opacifications and consolidation',
  'Pneumothorax detection and sizing',
  'Pleural and pericardial effusion',
  'Pulmonary artery dilatation',
  'Coronary artery calcification (Agatston scoring)',
  'Aortic diameter and morphology',
  'Rib and vertebral fractures',
  'Lymph node enlargement',
  'Interstitial lung changes',
];

const chestFaqs = [
  {
    q: 'How accurate is AI chest CT reporting?',
    a: 'xAID achieves 95% accuracy verified by peer-reviewed studies. AI-assisted chest CT detection outperformed unaided radiologists across multiple pathology categories including coronary calcifications, pulmonary artery dilatation, and vertebral fractures. See full clinical evidence at xaid.ai/accuracy',
  },
  {
    q: 'What does a chest CT AI report include?',
    a: 'An xAID chest CT preliminary report includes structured findings for all major chest pathologies: lung nodules (with size, density, and location), opacifications, pleural and pericardial effusion, pneumothorax, coronary calcium scoring, aortic and pulmonary artery measurements, lymph nodes, and vertebral fractures. Reviewed by our in-house radiologist before delivery. Preliminary reports follow standard radiology report format and are delivered as HL7 FHIR or PDF — ready for your radiologist to review and sign',
  },
  {
    q: 'How fast is AI chest CT report turnaround?',
    a: 'AI-generated report drafts are produced within minutes of DICOM receipt. Full preliminary reports are typically delivered within 2–12 hours, depending on queue and complexity',
  },
  {
    q: 'Does xAID support emergency chest CT reads?',
    a: 'Yes. The validation study was specifically conducted in an emergency radiology setting. xAID provides 24/7 coverage, including after-hours and overnight reads for urgent chest CT cases',
  },
  {
    q: 'Is xAID chest CT reporting HIPAA compliant?',
    a: 'Yes. xAID is HIPAA-compliant, ISO 27001 certified, and signs a Business Associate Agreement (BAA) before your first study. All data is processed in US-based, HIPAA-certified infrastructure',
  },
];

const ChestCtReport = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>AI Chest CT Reports in 2–12 Hours | xAID</title>
        <meta
          name="description"
          content="AI chest CT reporting: structured preliminary reports in 2–12 hours. 95% accuracy verified, HIPAA compliant, 24/7 coverage. Start with a free 5-study pilot."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Chest CT Reports in 2–12 Hours | xAID" />
        <meta property="og:description" content="AI chest CT reporting: structured preliminary reports in 2–12 hours. 95% accuracy verified, HIPAA compliant, 24/7 coverage. Start with a free 5-study pilot." />
        <meta property="og:url" content="https://xaid.ai/chest-ct-ai-report" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Chest CT Reports in 2–12 Hours | xAID" />
        <meta name="twitter:description" content="AI chest CT reporting: structured preliminary reports in 2–12 hours. 95% accuracy verified, HIPAA compliant, 24/7 coverage. Start with a free 5-study pilot." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Chest CT AI Reporting", "item": "https://xaid.ai/chest-ct-ai-report" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": chestFaqs.map(f => ({
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
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Chest CT AI Reporting</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                AI chest CT reports.<br />
                <span className="text-white/60">Structured and reviewed.</span><br />
                <span className="text-white/60">2–12 hour delivery</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] mb-10 max-w-xl">
                AI-generated chest CT preliminary reports, reviewed by our in-house radiologist — structured, ready to sign, delivered within 2–12 hours. Validated in a peer-reviewed emergency radiology study
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

        {/* Stats from study */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                { stat: '95%', label: 'Accuracy', sub: 'or we reimburse' },
                { stat: '100+', label: 'Findings analyzed', sub: 'per report' },
                { stat: '10+', label: 'Pathology categories', sub: 'covered per report' },
                { stat: '2–12 hrs', label: 'Report turnaround', sub: '24/7 availability' },
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

        {/* What's in the report */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What's covered in every chest CT report
              </h2>
              <p className="text-[#666] mb-10 max-w-2xl">
                xAID analyzes 100+ findings per report and structures them into a ready-to-sign report. Chest CT findings include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {findings.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-xaid-blue flex-shrink-0" />
                    <span className="text-[#0D0D0D] text-[15px] font-light">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#999] text-sm mt-8">
                Preliminary reports are structured, radiologist-reviewed, and delivered as HL7 FHIR or PDF to your RIS/PACS — ready for your radiologist to review and sign
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4 text-center">From DICOM to preliminary report</h2>
            <p className="text-white/60 text-center mb-12">Your workflow, unchanged. xAID fits in as a read provider</p>
            <div className="space-y-6">
              {[
                { step: '1', title: 'DICOM received', desc: 'Chest CT images arrive via DICOM to xAID. No manual uploads — fully automated ingest' },
                { step: '2', title: 'AI analysis', desc: 'Two AI layers — foundation model and secondary verification — analyze the study across 100+ findings. Results are structured into a report draft' },
                { step: '3', title: 'Radiologist review', desc: 'Our in-house European radiologist reviews the AI-generated report before delivery' },
                { step: '4', title: 'Preliminary report delivered', desc: 'Preliminary report returned via HL7 or PDF to your RIS. Turnaround 2–12 hours' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-xaid-blue/20 border border-xaid-blue/40 flex items-center justify-center text-xaid-blue font-medium flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-white/60 text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-10 text-center">Chest CT reporting questions</h2>
              <FAQAccordion variant="light" faqs={chestFaqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Start with 5 free chest CT reads</h2>
            <p className="text-white/60 mb-8">
              Send us your first 5 chest CT studies. No commitment, no setup fee. Evaluate report quality before you decide
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

export default ChestCtReport;
