import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FAQAccordion from '@/components/FAQAccordion';

const compliancePoints = [
  {
    title: 'HIPAA compliant',
    desc: 'All PHI handled in compliance with HIPAA. US-based AWS infrastructure, encrypted in transit and at rest. No data leaves US servers',
    badge: 'HIPAA',
  },
  {
    title: 'ISO 27001 certified',
    desc: 'xAID is ISO 27001 certified — an internationally recognized information security standard, verified by annual third-party audit',
    badge: 'ISO 27001',
  },
  {
    title: 'BAA available',
    desc: 'Business Associate Agreement available before you begin — including the free pilot. No commitment required to sign a BAA',
    badge: 'BAA Ready',
  },
  {
    title: 'US-based infrastructure',
    desc: 'All data processed and stored on AWS infrastructure in the United States. Zero-footprint viewers — no images or reports cached outside US servers',
    badge: 'US-Based',
  },
  {
    title: 'Radiologist review on every report',
    desc: 'Every xAID report is reviewed by our licensed, credentialed in-house European radiologist. AI-assisted, not autonomous — your radiologist delivers the final report',
    badge: 'Radiologist Reviewed',
  },
  {
    title: 'Access controls & audit logs',
    desc: 'Role-based access control, full audit logging, and session management across all data interactions. Supports your HIPAA compliance program',
    badge: 'Audit Ready',
  },
];

const Compliance = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>HIPAA Compliant AI Radiology Reporting | xAID</title>
        <meta
          name="description"
          content="HIPAA compliant AI CT reporting — US-based infrastructure, ISO 27001 certified, BAA before pilot, radiologist review on every report. See the full checklist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HIPAA Compliant AI Radiology Reporting | xAID" />
        <meta property="og:description" content="HIPAA compliant AI CT reporting — US-based infrastructure, ISO 27001 certified, BAA before pilot, radiologist review on every report. See the full checklist." />
        <meta property="og:url" content="https://xaid.ai/compliance" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HIPAA Compliant AI Radiology Reporting | xAID" />
        <meta name="twitter:description" content="HIPAA compliant AI CT reporting — US-based infrastructure, ISO 27001 certified, BAA before pilot, radiologist review on every report. See the full checklist." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Compliance & Security", "item": "https://xaid.ai/compliance" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is AI CT reporting HIPAA compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. xAID is fully HIPAA compliant. All PHI is processed on US-based AWS infrastructure, encrypted in transit and at rest, with zero-footprint viewers — no data leaves US servers. A Business Associate Agreement (BAA) is available before you begin, including the free pilot."
              }
            },
            {
              "@type": "Question",
              "name": "What is a BAA and do I need one for AI radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Business Associate Agreement (BAA) is a HIPAA-required contract between a covered entity (your imaging center or radiology group) and any vendor that handles Protected Health Information (PHI). Because xAID processes PHI in CT reports, a BAA is required and available from xAID before your pilot begins."
              }
            },
            {
              "@type": "Question",
              "name": "Who is liable for an AI-generated radiology report?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID is AI-assisted, not autonomous. Every report is reviewed by our licensed, credentialed in-house European radiologist before delivery. The reviewing radiologist is professionally and legally responsible for the report content."
              }
            },
            {
              "@type": "Question",
              "name": "Does AI CT reporting require FDA clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID's workflow includes radiologist review on every report. The output is a complete preliminary report reviewed by our in-house European radiologist — ready for your radiologist to review and sign. Contact xAID for specific questions about regulatory context for your use case."
              }
            },
            {
              "@type": "Question",
              "name": "Is xAID ISO 27001 certified?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. xAID is ISO 27001 certified, verified by annual third-party audit. ISO 27001 is an internationally recognized information security management standard."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid text-center">
            <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Compliance & Security</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              HIPAA compliant<br />
              <span className="text-white/60">AI radiology reporting</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65] max-w-2xl mx-auto mb-10">
              Every xAID CT report is HIPAA compliant, processed on US-based infrastructure, and reviewed by our in-house radiologist. BAA available before your pilot begins — no commitment required
            </p>
            <Link
              to="/#contact-us"
              className="bg-xaid-blue-strong hover:bg-xaid-blue-strong-hover text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
            >
              Request BAA & start pilot
            </Link>
          </div>
        </section>

        {/* Compliance grid */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-12 text-center">
                Security & compliance at every level
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {compliancePoints.map((item) => (
                  <div key={item.title} className="bg-[#FAFAFA] border border-gray-100 rounded-xl p-6 md:p-7">
                    <span className="inline-block text-xs font-medium text-xaid-blue-strong-hover bg-xaid-blue/10 rounded-full px-3 py-1 mb-4">
                      {item.badge}
                    </span>
                    <h3 className="font-medium text-[#0D0D0D] text-lg mb-3">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Liability & Sign-off */}
        <section className="section-padding">
          <div className="container-xaid">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white mb-8 text-center">
                Radiologist review on every report
              </h2>
              <p className="text-white/60 text-lg font-light leading-[1.65] mb-6 text-center">
                xAID is AI-assisted, not autonomous. The final report is always reviewed by our in-house European radiologist — making the accountability model identical to traditional teleradiology
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch mt-10">
                {[
                  { title: 'AI analyzes the study', desc: 'Two AI layers process 100+ findings across head, chest, or abdomen CT' },
                  { title: 'Radiologist reviews', desc: 'Licensed, credentialed European radiologist reviews the AI draft and all findings' },
                  { title: 'Radiologist signs off', desc: 'The radiologist is professionally accountable for the report content and approves it before delivery' },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col h-full"
                  >
                    <div className="text-xaid-blue text-[26px] font-medium mb-4 leading-none">
                      0{i + 1}
                    </div>
                    <h3 className="text-white font-medium text-[18px] mb-3 leading-[1.3]">{item.title}</h3>
                    <p className="text-white/70 text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BAA section */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto text-center">
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                BAA before your first study
              </h2>
              <p className="text-[#666] leading-relaxed mb-8">
                We provide a Business Associate Agreement before you send a single study — including the free 5-study pilot. No integration required, no commitment. Your compliance requirements are covered from day one
              </p>
              <Link
                to="/#contact-us"
                className="bg-xaid-blue-strong hover:bg-xaid-blue-strong-hover text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
              >
                Request BAA & free pilot
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-10 text-center">Compliance questions</h2>
            <FAQAccordion
              variant="dark"
              faqs={[
                {
                  q: 'Is xAID AI CT reporting HIPAA compliant?',
                  a: 'Yes. All PHI is processed on US-based AWS infrastructure, encrypted in transit and at rest. Zero-footprint viewers — no data leaves US servers. BAA available before you begin',
                },
                {
                  q: 'Do I need a BAA to use xAID?',
                  a: 'Yes — as with any vendor that handles PHI, a BAA is required under HIPAA. xAID provides the BAA before your pilot begins. It covers the full scope of data handling and takes minutes to execute',
                },
                {
                  q: 'Who is responsible if an AI radiology report contains an error?',
                  a: 'The European radiologist who reviews the report is professionally accountable for its content. xAID is AI-assisted, not autonomous. No report is delivered without radiologist review',
                },
                {
                  q: 'Does xAID use cloud infrastructure outside the US?',
                  a: 'No. All data is processed and stored on AWS infrastructure in the United States. Zero-footprint viewers — CT images and reports are never cached on devices or transferred outside US servers',
                },
                {
                  q: 'Is xAID ISO 27001 certified?',
                  a: 'Yes. xAID is ISO 27001 certified, verified by annual third-party audit. ISO 27001 is the internationally recognized standard for information security management systems',
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
              <Link to="/blog/is-ai-radiology-reporting-hipaa-compliant/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Blog</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Is AI radiology reporting HIPAA compliant?</div>
              </Link>
              <Link to="/integrations/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Integrations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">DICOM & HL7 integration details</div>
              </Link>
              <Link to="/for-small-hospitals/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">For small hospitals</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">HIPAA & ISO 27001 — compliance for small hospitals</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Compliance;
