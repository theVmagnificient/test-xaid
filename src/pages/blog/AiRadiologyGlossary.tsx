import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const terms = [
  {
    term: 'AI CT Reporting',
    definition: 'A service that delivers complete, ready-to-sign CT radiology reports using AI-generated report drafts reviewed by our in-house European radiologist before delivery. Distinct from AI detection tools, which produce alerts but no complete structured report. The output of AI CT reporting is a complete, ready-to-sign preliminary report — reviewed by our in-house European radiologist and formatted identically to traditional teleradiology reports.',
    relatedTerms: ['Detection AI', 'Teleradiology', 'Ready-to-Sign Report'],
  },
  {
    term: 'DICOM (Digital Imaging and Communications in Medicine)',
    definition: 'The international standard for transmitting, storing, retrieving, and sharing medical imaging data. CT studies are stored and transmitted as DICOM files. AI CT reporting services receive studies via DICOM C-STORE — your PACS pushes the study to the service exactly as it would push to any other DICOM destination.',
    relatedTerms: ['PACS', 'DICOM C-STORE', 'WADO-RS'],
  },
  {
    term: 'HL7 (Health Level Seven)',
    definition: 'A set of international standards for the exchange and integration of clinical and administrative data in healthcare systems. AI CT reporting services return preliminary reports via HL7 ORU (Observation Result Unsolicited) messages to your Radiology Information System — exactly how traditional teleradiology services return reports.',
    relatedTerms: ['RIS', 'HL7 FHIR', 'DiagnosticReport'],
  },
  {
    term: 'PACS (Picture Archiving and Communication System)',
    definition: 'Medical imaging technology providing storage and access to CT, MRI, and other radiology images from multiple source machines. Your PACS is the source system that sends CT studies to AI CT reporting services via DICOM. Compatible systems include Sectra IDS7, Fujifilm Synapse, Intelerad InteleOne, Ambra Health, Carestream Vue, and any DICOM-compliant system.',
    relatedTerms: ['DICOM', 'RIS', 'DICOM C-STORE'],
  },
  {
    term: 'RIS (Radiology Information System)',
    definition: 'Software that manages radiology workflow, scheduling, patient data, and report distribution. AI CT reporting services deliver preliminary reports directly to your RIS via HL7, where they appear alongside any other radiology result. No workflow changes are required at the RIS level.',
    relatedTerms: ['PACS', 'HL7', 'Ready-to-Sign Report'],
  },
  {
    term: 'Teleradiology',
    definition: 'The electronic transmission of radiological images and data from one location to another for remote interpretation and diagnosis. Traditional teleradiology employs remote radiologists who read scans and dictate reports manually. AI CT reporting is a form of teleradiology where AI generates the complete report draft and our in-house European radiologist reviews before delivery.',
    relatedTerms: ['Remote Radiologist', 'After-Hours Surcharge', 'AI CT Reporting'],
  },
  {
    term: 'AI Detection Tool / Narrow AI Overlay',
    definition: 'A category of AI radiology products that analyze CT or MRI scans for specific high-acuity findings (e.g., intracranial hemorrhage, pulmonary embolism, aortic dissection) and send alerts to reprioritize the radiologist worklist. Detection tools do not produce a complete report — the radiologist still reads the full scan and dictates the report from scratch after seeing the alert. Designed primarily for hospital emergency departments.',
    relatedTerms: ['AI CT Reporting', 'AI Detection Tool', 'Worklist Prioritizer'],
  },
  {
    term: 'Foundation Model',
    definition: 'A large-scale AI model trained on broad data that can be adapted to a range of downstream tasks. In AI CT reporting, a foundation model is trained on volumetric CT data to identify and characterize findings across multiple anatomical regions and pathology categories — rather than being limited to a single finding type like a narrow AI detection model.',
    relatedTerms: ['Swin Transformer', 'Macro F1', 'Narrow AI'],
  },
  {
    term: 'Swin Transformer',
    definition: 'A hierarchical vision transformer architecture particularly effective for analyzing 3D volumetric medical imaging data. Swin transformers process CT data as overlapping 3D patches rather than 2D slices, preserving spatial relationships across the full scan volume. Used in AI CT reporting foundation models for volumetric CT interpretation.',
    relatedTerms: ['Foundation Model', 'Macro F1', 'Volumetric Analysis'],
  },
  {
    term: 'Sensitivity and Specificity',
    definition: 'Clinical performance metrics for diagnostic tests. Sensitivity = the proportion of actual positive cases correctly identified (true positive rate). Specificity = the proportion of actual negative cases correctly identified (true negative rate). xAID achieves 95% accuracy verified by peer-reviewed studies, outperforming unaided radiologists across multiple pathology categories. Full study data is available at xaid.ai/accuracy.',
    relatedTerms: ['Clinical Evidence', 'Accuracy'],
  },
  {
    term: 'Macro F1 Score',
    definition: 'The unweighted mean of F1 scores across all classes — used to evaluate classification performance when classes are imbalanced. F1 is the harmonic mean of precision and recall. A high macro F1 indicates strong performance across all pathology categories, treating each category equally regardless of how common it is in the training data.',
    relatedTerms: ['Swin Transformer', 'Sensitivity', 'Foundation Model'],
  },
  {
    term: '95% Accuracy — Verified',
    definition: 'xAID achieves 95% accuracy verified by independent peer-reviewed studies. Full methodology, study details, and results are available at xaid.ai/accuracy. No traditional teleradiology provider or AI detection tool publishes equivalent clinical evidence.',
    relatedTerms: ['Accuracy', 'Report Quality', 'Clinical Evidence'],
  },
  {
    term: 'Ready-to-Sign Report',
    definition: 'A CT radiology report that is complete, structured, and requires no further dictation or editing by the reviewing radiologist before signature. xAID achieves 95% accuracy verified by peer-reviewed studies, meaning the vast majority of reports are ready to sign as delivered. Distinct from a report draft that requires substantial radiologist editing before it can be signed.',
    relatedTerms: ['Accuracy', 'Report Quality', 'AI CT Reporting'],
  },
  {
    term: 'BAA (Business Associate Agreement)',
    definition: 'A legally required contract under HIPAA between a covered entity (e.g., imaging center) and a business associate (e.g., AI CT reporting service) that handles protected health information (PHI). The BAA defines how PHI must be handled, secured, and reported in case of breach. xAID signs a BAA before the first study is processed — as standard, not as a formality.',
    relatedTerms: ['HIPAA', 'PHI', 'Covered Entity'],
  },
  {
    term: 'After-Hours Surcharge',
    definition: 'A premium pricing tier charged by traditional teleradiology providers for CT studies read outside standard business hours — typically nights, weekends, and holidays. Industry-standard surcharges range from 30–100% above the base daytime per-study rate. For a center reading 500 CTs per month with 40% after-hours volume at a $60 base rate and 50% surcharge, the annual surcharge cost reaches approximately $72,000. AI CT reporting services like xAID charge a flat per-study rate 24/7 — no after-hours surcharge.',
    relatedTerms: ['Teleradiology', 'Per-Study Pricing', 'Traditional Teleradiology'],
  },
  {
    term: 'Turnaround Time (TAT)',
    definition: 'The time from a CT study being received to delivery of the completed report. ACR guideline for routine CT: 24 hours. xAID typical TAT: 2–12 hours from DICOM receipt to report delivery, 24/7. Traditional teleradiology TAT: typically 30 minutes–4 hours for STAT reads; 1–12 hours for routine reads. TAT can degrade during peak demand periods for traditional teleradiology; AI CT reporting TAT is consistent because AI processing begins immediately on receipt.',
    relatedTerms: ['ACR Guidelines', 'STAT', 'SLA'],
  },
  {
    term: 'Per-Study Pricing',
    definition: 'A pricing model where the customer pays per completed CT report rather than a monthly subscription, seat license, or annual enterprise contract. xAID uses per-study pricing at narrow AI rates — with no volume minimums, no setup fees, and radiologist review included in the per-study price. Traditional teleradiology pricing is also per-study, but at higher base rates and with after-hours surcharges.',
    relatedTerms: ['After-Hours Surcharge', 'Volume Pricing', 'Narrow AI Rates'],
  },
  {
    term: 'ISO 27001',
    definition: 'An international standard for information security management systems (ISMS). ISO 27001 certification means an organization has implemented a systematic approach to managing sensitive information, including regular third-party audits. xAID is ISO 27001 certified — a standard relevant to healthcare AI vendors because it covers how patient data is handled beyond the minimum HIPAA requirements.',
    relatedTerms: ['HIPAA', 'BAA', 'Security Compliance'],
  },
];

const faqs = [
  {
    q: 'What is the difference between AI CT reporting and AI detection tools?',
    a: 'AI detection tools analyze CT scans for specific high-acuity findings and send alerts or reprioritize the worklist — but the radiologist still reads the full scan and dictates the complete report from scratch. AI CT reporting services (xAID) generate the complete structured CT report using AI, which our in-house European radiologist then reviews before delivery. The key difference: detection tools produce alerts; AI CT reporting services produce complete ready-to-sign preliminary reports.',
  },
  {
    q: 'What does DICOM integration mean for AI CT reporting?',
    a: 'DICOM integration means your PACS sends CT studies to the AI CT reporting service via the same DICOM C-STORE protocol it uses to route studies anywhere else in your network. No custom software or middleware is required. Most PACS administrators can configure a new DICOM destination in 30–60 minutes. For AI CT reporting, you add xAID as a DICOM destination; studies that meet your routing rules (body part, modality) push to xAID automatically. Preliminary reports are returned via HL7 to your RIS.',
  },
  {
    q: 'What accuracy does xAID achieve and how is it verified?',
    a: 'xAID achieves 95% accuracy verified by peer-reviewed studies. No traditional teleradiology provider publishes equivalent clinical accuracy data. Full study details are available at xaid.ai/accuracy.',
  },
  {
    q: 'What do "sensitivity" and "specificity" mean for AI CT reporting accuracy?',
    a: 'Sensitivity is the proportion of actual positive findings that the AI correctly identifies. Specificity is the proportion of true negatives — cases without a finding — that the AI correctly classifies as negative. A high sensitivity means very few real findings are missed. A high specificity means very few false alarms. Both matter: low sensitivity means missed diagnoses; low specificity means unnecessary follow-up. xAID achieves 95% accuracy verified by peer-reviewed studies, with AI-assisted detection consistently outperforming unaided radiologists across pathology categories.',
  },
];

const AiRadiologyGlossary = () => {
  const publishDate = '2026-03-04';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
      { "@type": "ListItem", "position": 3, "name": "AI Radiology Glossary", "item": "https://xaid.ai/blog/ai-radiology-terminology-glossary" },
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "AI Radiology Terminology Glossary: Key Terms Explained",
    "description": "Definitions of key terms in AI radiology and CT reporting — DICOM, HL7, PACS, teleradiology, AI detection vs AI reporting, sensitivity/specificity, accuracy, and more.",
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": { "@type": "Organization", "name": "xAID" },
    "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
    "url": "https://xaid.ai/blog/ai-radiology-terminology-glossary",
    "image": "https://xaid.ai/og-image.png",
    "keywords": ["AI radiology terms", "radiology glossary", "DICOM definition", "teleradiology glossary", "AI radiology terminology"],
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
      <Helmet>
        <title>AI Radiology Terminology Glossary: Key Terms Explained | xAID</title>
        <meta
          name="description"
          content="Definitions of key AI radiology and CT reporting terms: DICOM, HL7, PACS, teleradiology, AI detection vs AI reporting, sensitivity/specificity, accuracy, BAA, and more — clearly explained."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Radiology Terminology Glossary — Key Terms Explained" />
        <meta property="og:description" content="Clear definitions of key AI radiology terms: DICOM, HL7, PACS, teleradiology, AI detection vs reporting, sensitivity/specificity, accuracy, and more." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-radiology-terminology-glossary" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Radiology Terminology Glossary" />
        <meta name="twitter:description" content="Key AI radiology terms clearly defined — DICOM, HL7, PACS, teleradiology, AI detection vs reporting, sensitivity/specificity, and more." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-10">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-xaid-blue font-medium">Reference</span>
              <span className="text-gray-500 text-sm self-center">March 4, 2026 · 10 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              AI Radiology Terminology Glossary: Key Terms Explained
            </h1>
            <p className="text-lg text-gray-300 text-[15px] leading-[1.65] font-light">
              Reference guide to the terminology used in AI CT reporting, teleradiology, and medical imaging workflows — from DICOM and HL7 to sensitivity/specificity and verified accuracy. Each term is defined in plain language with clinical and operational context.
            </p>
          </div>
        </section>

        {/* Glossary */}
        <section className="section-padding pt-0">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="space-y-0">
              {terms.map((item, i) => (
                <div key={i} className="border-b border-white/10 py-8">
                  <h2 className="text-white font-normal text-xl mb-3">{item.term}</h2>
                  <p className="text-gray-300 text-[15px] leading-[1.65] font-light mb-3">{item.definition}</p>
                  {item.relatedTerms && item.relatedTerms.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-gray-500 text-xs">See also:</span>
                      {item.relatedTerms.map((rt, j) => (
                        <span key={j} className="text-xaid-blue text-xs font-medium">{rt}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-8">AI Radiology Terms — Common Questions</h2>
              <div className="space-y-0">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 py-6 last:border-0">
                    <h3 className="text-[#0D0D0D] font-medium text-[18px] leading-[1.3] mb-3">{faq.q}</h3>
                    <p className="text-gray-600 text-[15px] leading-[1.65] font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/how-ai-ct-reporting-works" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">How it works</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI CT Reporting Works — 5-Step Workflow</div>
              </Link>
              <Link to="/accuracy" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Accuracy Data — Peer-Reviewed Studies</div>
              </Link>
              <Link to="/how-ai-ct-reporting-works" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">How it works</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI CT Reporting Works — 5-Step Workflow</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">See AI CT Reporting in Practice</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Free 5-study pilot. Send CT studies, receive preliminary reports in 2–12 hours, compare against your current workflow. No integration required to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact-us" className="btn-primary px-8 py-3 text-base">
                Request free pilot
              </Link>
              <Link to="/how-ai-ct-reporting-works" className="btn-outline px-8 py-3 text-base">
                How it works
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiRadiologyGlossary;
