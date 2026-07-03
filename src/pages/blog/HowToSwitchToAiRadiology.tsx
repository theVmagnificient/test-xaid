import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Run a free pilot — no integration required',
    body: 'The fastest way to evaluate AI CT reporting is to run a pilot before touching your existing workflow. xAID offers a free 5-study pilot with no DICOM integration required — you send CT studies manually, receive preliminary reports, and compare them directly to your current reads. Most facilities complete their pilot evaluation within two weeks.',
    detail: 'What to evaluate: report completeness (are all findings captured?), format match (does the structure fit your RIS?), accuracy on your specific CT mix (head-heavy vs. chest-heavy centers see different validation points), and turnaround time against your current SLA.',
  },
  {
    number: '02',
    title: 'Assess your current teleradiology contract terms',
    body: 'Before committing to a switch, review your existing teleradiology agreement. Key questions: What is your contract end date and auto-renewal window? Are there volume commitments or minimum spend clauses? What is the penalty or notice period for termination?',
    detail: 'Most teleradiology contracts run 1–3 years with 60–90 day termination notice requirements. A parallel pilot during the final 90 days of a contract is the cleanest transition path — it lets you validate AI performance while fulfilling existing obligations.',
  },
  {
    number: '03',
    title: 'Complete DICOM/HL7 integration — typically under one week',
    body: 'Full integration with xAID uses standard protocols your PACS already supports: DICOM C-STORE for study transmission and HL7 ORU for report delivery back to your RIS. No custom middleware required, no new software to install.',
    detail: 'The typical integration checklist: configure PACS routing rule to forward CT studies to xAID DICOM node, configure xAID to return HL7 reports to your RIS HL7 listener, test end-to-end with 2–3 studies, validate report format in your RIS. Most installations go live within 3–5 business days.',
  },
  {
    number: '04',
    title: 'Sign the Business Associate Agreement (BAA)',
    body: 'HIPAA requires a signed BAA before any PHI is transmitted to a third-party service provider. xAID provides and signs a BAA before your first study — this is a standard step in onboarding, not an optional add-on. The BAA covers your entire relationship, including the pilot.',
    detail: 'The BAA establishes xAID as a Business Associate under HIPAA, defines permitted uses of PHI, outlines breach notification obligations, and confirms US-only data processing. You should not transmit any patient studies — even for a pilot — without a signed BAA in place.',
  },
  {
    number: '05',
    title: 'Run a parallel period (optional but recommended)',
    body: 'For a low-risk transition, run AI CT reporting in parallel with your existing teleradiology service for 2–4 weeks. Route a subset of CT studies (typically 20–30%) to xAID while the remainder continue through your current provider. Compare report quality, turnaround time, and radiologist feedback directly.',
    detail: 'Parallel periods are especially valuable for facilities with in-house radiologists who will be the signing reviewers on AI-generated reports. It gives them 2–4 weeks to calibrate their review process and confirm that report quality meets their standard before full cutover.',
  },
  {
    number: '06',
    title: 'Establish routing rules and SLA configurations',
    body: 'Once integration is confirmed, set your PACS routing rules to define which CT studies go to xAID versus your backup pathway. Configure your preferred SLA window (standard 2–12 hours, or a tighter window for urgent studies). Define escalation contacts for STAT reads.',
    detail: 'Most facilities route all head, chest, and abdomen CT studies to xAID automatically. Studies that don\'t match the coverage criteria (MRI, X-ray, nuclear) continue on their existing pathway. The routing configuration in your PACS is a simple modality/body-part filter — no IT development required.',
  },
  {
    number: '07',
    title: 'Monitor the first 30 days — accuracy rate',
    body: 'In the first billing period, track your accuracy rate — the percentage of delivered reports that required zero edits from the reviewing radiologist. xAID achieves 95% accuracy verified by peer-reviewed studies. This metric tells you, quantitatively, whether AI report quality is meeting your standard.',
    detail: 'If you observe consistent findings being missed or incorrectly stated, report them to xAID. The model is updated continuously and performance feedback directly improves outputs on your case mix.',
  },
];

const faqs = [
  {
    q: 'How long does it take to switch from teleradiology to AI CT reporting?',
    a: 'For a clean transition with full DICOM/HL7 integration, 2–3 weeks total: one week for the pilot evaluation (no integration required), 3–5 days for technical integration, and 5–10 days for parallel testing if desired. The fastest path is 7 days from first contact to live integration, which xAID has done for facilities with straightforward PACS setups.',
  },
  {
    q: 'Do we need IT involvement to switch?',
    a: 'Minimal involvement. The integration requires configuring a DICOM routing rule in your PACS (forward matching CTs to xAID\'s DICOM node) and setting up an HL7 ORU receiver for report return. In most PACS systems this is a 30–60 minute configuration task for a PACS administrator. No custom development, no new servers, no vendor-specific APIs.',
  },
  {
    q: 'What happens to studies outside xAID\'s coverage (MRI, X-ray)?',
    a: 'Studies outside xAID\'s CT coverage continue through your existing pathway. PACS routing rules are modality-specific — MRI, X-ray, ultrasound, and nuclear medicine studies route to your existing teleradiology provider or in-house coverage. xAID only receives DICOM studies matching your configured filter (typically CT body regions you specify).',
  },
  {
    q: 'Can we keep our existing teleradiology contract and add AI for overflow?',
    a: 'Yes. Many facilities use xAID for specific coverage windows (after-hours CT, overflow during busy periods) while maintaining an existing teleradiology relationship for other modalities or primary hours. This is a common first step before a full transition. xAID\'s per-study pricing works equally well for 10 studies per month or 10,000.',
  },
  {
    q: 'What if report quality is not meeting our standard after the switch?',
    a: 'xAID achieves 95% accuracy verified by peer-reviewed studies. xAID tracks quality metrics per facility and escalates any performance issues directly. If accuracy is not meeting your standard, you can route studies back to your previous provider while the issue is resolved — there is no penalty for doing so.',
  },
];

const HowToSwitchToAiRadiology = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
      { "@type": "ListItem", "position": 3, "name": "How to Switch to AI CT Reporting", "item": "https://xaid.ai/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting" },
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Switch from Teleradiology to AI CT Reporting",
    "description": "Step-by-step guide to transitioning from traditional teleradiology to AI CT reporting: pilot evaluation, contract review, DICOM integration, BAA signing, and quality monitoring.",
    "url": "https://xaid.ai/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting",
    "totalTime": "P2W",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.body
    }))
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
        <title>Switch from Teleradiology to AI CT Reporting | xAID</title>
        <meta
          name="description"
          content="How to switch from teleradiology to AI CT reporting — free 5-study pilot, DICOM integration in under a week, BAA, parallel testing, quality monitoring."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Switch from Teleradiology to AI CT Reporting | xAID" />
        <meta property="og:description" content="How to switch from teleradiology to AI CT reporting — free 5-study pilot, DICOM integration in under a week, BAA, parallel testing, quality monitoring." />
        <meta property="og:url" content="https://xaid.ai/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Switch from Teleradiology to AI CT Reporting | xAID" />
        <meta name="twitter:description" content="How to switch from teleradiology to AI CT reporting — free 5-study pilot, DICOM integration in under a week, BAA, parallel testing, quality monitoring." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        <article>
          {/* Hero */}
          <section className="pt-32 md:pt-40 pb-10">
            <div className="container-xaid max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="text-xaid-blue text-xs font-medium uppercase tracking-wider">Implementation guide</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                How to Switch from Teleradiology to AI CT Reporting: A Step-by-Step Guide
              </h1>
              <p className="text-gray-400 text-[15px] leading-[1.65] font-light mb-6">
                Transitioning from a traditional teleradiology provider to AI CT reporting is simpler than most facilities expect. DICOM integration typically completes in under one week, and a structured pilot lets you validate report quality before any contract change. Here is the complete transition process — from evaluation to full cutover.
              </p>
              <div className="flex items-center gap-4 text-white/60 text-sm border-t border-white/10 pt-6">
                <span>xAID</span>
                <span>·</span>
                <span>April 14, 2026</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
            </div>
          </section>

          {/* Timeline summary */}
          <section className="section-padding bg-white/[0.03]">
            <div className="container-xaid max-w-3xl mx-auto">
              <div className="bg-xaid-blue/10 border border-xaid-blue/20 rounded-2xl p-7">
                <h2 className="text-white font-normal text-base mb-5">Typical transition timeline</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { phase: 'Week 1', label: 'Pilot evaluation', detail: 'No integration required. 5 free studies. Evaluate report quality.' },
                    { phase: 'Week 2', label: 'Integration & BAA', detail: 'DICOM/HL7 setup (3–5 days). BAA signed. Test end-to-end.' },
                    { phase: 'Weeks 3–4', label: 'Parallel period (optional)', detail: 'Run AI and current provider in parallel. Build confidence before cutover.' },
                  ].map((item, i) => (
                    <div key={i} className="text-sm">
                      <div className="text-xaid-blue font-medium mb-1">{item.phase}</div>
                      <div className="text-white font-medium mb-1">{item.label}</div>
                      <div className="text-gray-400 leading-snug">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="section-padding">
            <div className="container-xaid max-w-3xl mx-auto">
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="border-l-2 border-xaid-blue/30 pl-8">
                    <div className="text-xaid-blue text-xs font-medium uppercase tracking-widest mb-2">Step {step.number}</div>
                    <h2 className="text-xl md:text-[28px] font-normal leading-[1.15] text-white mb-4">{step.title}</h2>
                    <p className="text-gray-300 text-[15px] leading-[1.65] font-light mb-4">{step.body}</p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="text-xaid-blue text-xs font-medium mb-2 uppercase tracking-wider">In Practice</div>
                      <p className="text-gray-400 text-[15px] leading-[1.65] font-light">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What you need from IT */}
          <section className="section-padding bg-white/[0.03]">
            <div className="container-xaid max-w-3xl mx-auto">
              <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-6">What your IT team actually needs to do</h2>
              <p className="text-gray-300 text-[15px] leading-[1.65] font-light mb-6">
                The most common concern we hear from facilities considering a switch is IT complexity. In practice, the integration is straightforward for any PACS administrator familiar with DICOM routing:
              </p>
              <div className="space-y-4">
                {[
                  {
                    task: 'PACS routing configuration',
                    what: 'Add xAID as a DICOM destination in your PACS. Create a routing rule that forwards CT studies matching your target criteria (modality = CT, body part = HEAD/CHEST/ABDOMEN) to xAID\'s DICOM node.',
                    time: '15–30 minutes',
                    who: 'PACS admin',
                  },
                  {
                    task: 'HL7 receiver configuration',
                    what: 'Configure your RIS to accept HL7 ORU messages from xAID\'s HL7 sender. Map the incoming report fields to your RIS report fields. Most RIS platforms handle this in the HL7 interface configuration screen.',
                    time: '30–60 minutes',
                    who: 'RIS admin or IT',
                  },
                  {
                    task: 'Firewall rule (if applicable)',
                    what: 'If your PACS is behind a strict outbound firewall, you may need to add a rule permitting DICOM traffic to xAID\'s DICOM node IP and port (provided during onboarding). Most cloud-hosted PACS platforms require no firewall changes.',
                    time: '15–30 minutes',
                    who: 'Network/IT',
                  },
                  {
                    task: 'End-to-end test',
                    what: 'Send 2–3 test studies through the integration. Verify that (1) studies arrive at xAID, (2) preliminary reports return to your RIS, and (3) the report fields match your expected format. xAID provides a dedicated integration support contact during this phase.',
                    time: '1–2 hours with xAID support',
                    who: 'PACS/RIS admin + xAID',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <span className="text-white font-medium text-sm">{item.task}</span>
                      <div className="flex gap-3">
                        <span className="text-xaid-blue text-xs">{item.time}</span>
                        <span className="text-white/60 text-xs">{item.who}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-[15px] leading-[1.65] font-light">{item.what}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                Total IT time: typically <strong className="text-white">2–4 hours</strong> for a PACS administrator. xAID provides step-by-step integration documentation and a dedicated onboarding contact for the duration of setup. See <Link to="/integrations/" className="text-xaid-blue underline underline-offset-2">Integrations</Link> for the full technical reference.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding bg-[#EBEBEB]">
            <div className="container-xaid">
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-8">Common questions about switching</h2>
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
                <Link to="/integrations/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">Technical</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">DICOM & HL7 Integration — Technical Reference</div>
                </Link>
                <Link to="/how-ai-ct-reporting-works/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">How it works</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI CT Reporting Works — Full 5-Step Workflow</div>
                </Link>
                <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">Cost analysis</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Radiology Coverage Costs 2026 — Full Breakdown</div>
                </Link>
              </div>
            </div>
          </section>
        </article>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Start with 5 free studies</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              No integration required. Send 5 CT studies, receive preliminary reports, and evaluate quality before committing to any transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact-us"
                className="btn-primary px-8 py-3 text-base"
              >
                Request free pilot
              </Link>
              <Link
                to="/integrations/"
                className="btn-outline px-8 py-3 text-base"
              >
                Integration Details
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HowToSwitchToAiRadiology;
