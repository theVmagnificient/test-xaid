import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FAQAccordion from '@/components/FAQAccordion';

const integrationFaqs = [
  {
    q: 'What DICOM protocols does xAID support?',
    a: 'xAID supports DICOM C-STORE (SCU/SCP), DICOM WADO-RS, and DICOMweb for image delivery. Studies can be sent directly from your PACS or modality via standard DICOM push or pull. No custom connectors or middleware required for most installations',
  },
  {
    q: 'How are completed reports returned to my RIS?',
    a: 'Completed preliminary reports are returned via HL7 ORU message to your RIS, or as PDF — whichever your workflow requires. HL7 FHIR DiagnosticReport is available for modern integrations. The report appears in your system just like any other read',
  },
  {
    q: 'How long does xAID integration take?',
    a: 'Most installations are complete within one week. Standard DICOM/HL7 integration requires no custom development on your side. Your IT team configures the DICOM sending destination; xAID handles the receiving configuration. A test study is used to confirm end-to-end delivery before go-live',
  },
  {
    q: 'Does xAID integrate with specific PACS or RIS vendors?',
    a: 'xAID integrates via standard DICOM and HL7 protocols, which means it is compatible with any PACS or RIS that supports these standards — including Sectra, Fujifilm Synapse, Intelerad, Ambra, Carestream, Agfa, and others. No vendor-specific plugins required',
  },
  {
    q: 'Is the integration secure and HIPAA compliant?',
    a: 'Yes. All data transmission uses TLS encryption. xAID is HIPAA-compliant and ISO 27001 certified. A Business Associate Agreement (BAA) is signed before your first study. Patient data is processed in US-based, HIPAA-certified infrastructure only',
  },
];

const Integrations = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>DICOM & HL7 Integration for AI CT Reporting | xAID</title>
        <meta
          name="description"
          content="DICOM and HL7 integration for AI CT reporting — works with any PACS or RIS, no custom middleware, live in under a week. HIPAA compliant by design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DICOM & HL7 Integration for AI CT Reporting | xAID" />
        <meta property="og:description" content="DICOM and HL7 integration for AI CT reporting — works with any PACS or RIS, no custom middleware, live in under a week. HIPAA compliant by design." />
        <meta property="og:url" content="https://xaid.ai/integrations" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DICOM & HL7 Integration | xAID" />
        <meta name="twitter:description" content="DICOM and HL7 integration for AI CT reporting — works with any PACS or RIS, no custom middleware, live in under a week. HIPAA compliant by design." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://xaid.ai/integrations" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": integrationFaqs.map(f => ({
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
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Integrations</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                DICOM in.<br />
                <span className="text-white/60">HL7 out.</span><br />
                <span className="text-white/60">Setup under one week</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] mb-10 max-w-xl">
                xAID connects to your existing PACS and RIS via standard DICOM and HL7 protocols. No custom middleware, no long IT projects. Studies flow in automatically; preliminary reports come back the same way
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact-us" className="bg-xaid-blue-strong hover:bg-xaid-blue-strong-hover text-white font-medium px-8 py-4 rounded-full transition-all duration-200 text-center">
                  Start integration
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Integration flow */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                { stat: '<1 week', label: 'Setup time', sub: 'standard installations' },
                { stat: 'DICOM', label: 'Input standard', sub: 'C-STORE, WADO-RS, DICOMweb' },
                { stat: 'HL7 / FHIR', label: 'Output standard', sub: 'ORU or DiagnosticReport' },
                { stat: 'Any PACS', label: 'Compatible with', sub: 'Sectra, Fuji, Intelerad, Ambra & more' },
              ].map((item) => (
                <div key={item.stat} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex flex-col h-full">
                  <div className="text-3xl md:text-4xl font-medium text-xaid-blue mb-2">{item.stat}</div>
                  <div className="text-white text-sm font-medium mb-1">{item.label}</div>
                  <div className="text-white/60 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How integration works */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <span className="text-xaid-blue-strong-hover font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">
                    Integration
                  </span>
                  <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.1] text-[#0D0D0D] mb-5">
                    How the integration works
                  </h2>
                  <p className="text-[#666] text-[15px] leading-[1.65] font-light">
                    xAID fits into your existing radiology workflow as an external read provider. No workflow changes required on your end
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      step: '1',
                      title: 'Configure DICOM send destination',
                      desc: 'Your IT team adds xAID as a DICOM destination in your PACS or modality. This is a standard configuration — no software installation or middleware. Takes 30–60 minutes',
                    },
                    {
                      step: '2',
                      title: 'Studies route automatically',
                      desc: 'CT studies that meet your routing rules (modality, body part, worklist criteria) are pushed to xAID automatically via DICOM C-STORE. No manual uploads',
                    },
                    {
                      step: '3',
                      title: 'AI analysis begins immediately',
                      desc: 'xAID receives the study and begins AI-assisted analysis. The foundation model processes the DICOM series and generates a structured draft report',
                    },
                    {
                      step: '4',
                      title: 'Radiologist review',
                      desc: 'Our in-house European radiologist reviews the AI-generated report before delivery. The report is returned as HL7 ORU or PDF — formatted to match your RIS expectations',
                    },
                    {
                      step: '5',
                      title: 'Report returned to your RIS',
                      desc: 'The preliminary report is delivered back to your RIS via HL7. It appears in your workflow like any other result. Turnaround 2–12 hours from study receipt',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full bg-xaid-blue/10 border border-xaid-blue/30 flex items-center justify-center text-xaid-blue font-medium flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-[#0D0D0D] font-medium text-[18px] mb-2 leading-[1.3]">{item.title}</h3>
                        <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported systems */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4 text-center">Supported protocols & systems</h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">
              Any system that supports standard DICOM or HL7 protocols is compatible with xAID
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  title: 'DICOM protocols',
                  items: ['DICOM C-STORE (SCU and SCP)', 'DICOM WADO-RS', 'DICOMweb (STOW-RS, WADO-RS, QIDO-RS)', 'TLS-encrypted DICOM transfer'],
                },
                {
                  title: 'Report delivery',
                  items: ['HL7 v2 ORU message to RIS', 'HL7 FHIR DiagnosticReport', 'PDF report via secure link or HL7', 'Direct PACS note annotation'],
                },
                {
                  title: 'Compatible PACS / systems',
                  items: ['Sectra IDS7 / UniView', 'Fujifilm Synapse', 'Intelerad InteleOne', 'Ambra Health / Intelerad Cloud', 'Carestream Vue', 'Agfa Enterprise Imaging', 'Any DICOM-compliant system'],
                },
                {
                  title: 'Security & compliance',
                  items: ['TLS 1.2+ in transit', 'AES-256 encryption at rest', 'US-based HIPAA infrastructure', 'ISO 27001 certified', 'BAA signed before first study'],
                },
              ].map((group) => (
                <div key={group.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-white font-medium mb-4">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-xaid-blue flex-shrink-0" />
                        <span className="text-white/60 text-[15px] font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-10 text-center">Integration questions</h2>
              <FAQAccordion variant="light" faqs={integrationFaqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Ready to connect your PACS?</h2>
            <p className="text-white/60 mb-8">
              Tell us what PACS and RIS you're running. We'll confirm compatibility and walk your IT team through the configuration in a 30-minute call
            </p>
            <Link
              to="/#contact-us"
              className="bg-xaid-blue-strong hover:bg-xaid-blue-strong-hover text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
            >
              Discuss integration
            </Link>
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Implementation guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How to switch from teleradiology to AI — step-by-step</div>
              </Link>
              <Link to="/compliance/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Compliance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">HIPAA, ISO 27001, and BAA Requirements</div>
              </Link>
              <Link to="/ai-vs-teleradiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Comparison</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT reporting vs traditional teleradiology — full comparison</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Integrations;
