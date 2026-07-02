import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const steps = [
  {
    number: '1',
    title: 'DICOM study received',
    body: 'Your PACS pushes the CT series to xAID via standard DICOM C-STORE — the same protocol used to send studies to any teleradiology provider. No custom middleware, no manual uploads. The study arrives and queues for AI processing automatically',
  },
  {
    number: '2',
    title: 'Foundation model analysis',
    body: 'The first AI layer — a foundation model designed for volumetric CT analysis — analyzes the full DICOM series. It identifies 100+ potential findings across anatomical structures: lung nodules, coronary calcium, stroke signs, hemorrhage, organ findings, fractures, vascular measurements',
  },
  {
    number: '3',
    title: 'Secondary AI verification',
    body: 'A second AI layer cross-checks the foundation model\'s findings for consistency and completeness. This dual-verification step catches false positives and ensures no significant finding is missed. The output is a structured, finding-by-finding report draft',
  },
  {
    number: '4',
    title: 'Radiologist review',
    body: 'Our in-house radiologist reviews the complete AI-generated report against the DICOM series. They can modify, add, or remove findings. Once satisfied, they approve the report for delivery',
  },
  {
    number: '5',
    title: 'Preliminary report delivered',
    body: 'The preliminary report is returned to your RIS via HL7 ORU message — or as PDF if preferred. It appears in your system exactly as a teleradiology report would. Turnaround 2–12 hours from study receipt, 24/7 at flat per-study rate',
  },
];

const differences = [
  {
    category: 'AI Detection Tools (worklist prioritizers)',
    output: 'Alert or worklist flag',
    report: 'No — radiologist still reads from scratch',
    signed: 'No',
    afterHours: 'N/A — continuous monitoring',
    cost: '$75,000–$200,000+/yr contract',
    guarantee: 'None',
  },
  {
    category: 'Traditional Teleradiology',
    output: 'Signed CT report',
    report: 'Yes — dictated manually',
    signed: 'Yes',
    afterHours: '30–100% surcharge',
    cost: '$40–$350/study',
    guarantee: 'None',
  },
  {
    category: 'AI CT Reporting (xAID)',
    output: 'Ready-to-sign preliminary report',
    report: 'Yes — AI generates, radiologist reviews',
    signed: 'Reviewed by our radiologist',
    afterHours: 'Zero — flat rate 24/7',
    cost: 'Narrow AI rates',
    guarantee: '95% accuracy verified',
  },
];

const faqs = [
  {
    q: 'What is AI CT reporting and how is it different from regular AI radiology tools?',
    a: 'AI CT reporting is a service that delivers complete ready-to-sign preliminary reports using AI, with radiologist review on every study. "AI radiology" covers two very different products: (1) AI detection tools, which flag suspected high-acuity findings and reprioritize the worklist but do not produce a complete report; and (2) AI CT reporting services like xAID, which generate the complete structured preliminary report using AI — with a radiologist reviewing before delivery. The key question is: does the AI produce a complete preliminary report, or just an alert? xAID produces the complete preliminary report',
  },
  {
    q: 'Can AI replace a radiologist for CT interpretation?',
    a: 'xAID does not replace the radiologist — it changes their role. Instead of spending 15–20 minutes dictating a report from a blank page, the radiologist reviews a complete AI-generated structured report in 3–5 minutes and delivers it. The radiologist is still the accountable physician for every report. The AI does not act autonomously; it generates the draft that the radiologist reviews. This human-in-the-loop model is why xAID is HIPAA compliant and achieves 95% accuracy verified by peer-reviewed studies',
  },
  {
    q: 'How accurate is AI CT reporting compared to a human radiologist?',
    a: 'xAID achieves 95% accuracy verified by independent peer-reviewed studies. These figures reflect AI-plus-radiologist performance, not autonomous AI, since every xAID report is reviewed by our in-house European radiologist before delivery. Full clinical evidence is available at xaid.ai/accuracy',
  },
  {
    q: 'What AI model does xAID use for CT interpretation?',
    a: 'xAID uses a volumetric foundation model designed specifically for 3D CT interpretation, not a repurposed 2D model. A secondary AI layer cross-checks the primary model\'s output for consistency before the radiologist review stage. This two-layer verification underpins the 95% accuracy verified by peer-reviewed studies',
  },
  {
    q: 'How long does AI CT reporting take?',
    a: 'From DICOM receipt to report delivery: 2–12 hours. This covers AI processing, radiologist review queue, and report delivery. Configurable SLAs are available for urgent studies. The 2–12 hour range applies 24/7 — nights, weekends, and holidays at no additional cost. The ACR guideline for routine CT turnaround is 24 hours; xAID typically delivers well within that window',
  },
];

const HowAiCtReportingWorks = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
      { "@type": "ListItem", "position": 2, "name": "How AI CT Reporting Works", "item": "https://xaid.ai/how-ai-ct-reporting-works" },
    ]
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How AI CT Reporting Works: From DICOM Study to AI CT Report",
    "description": "The step-by-step workflow for AI-assisted CT radiology reporting — from DICOM receipt through AI analysis, radiologist review, and preliminary report delivery.",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.body,
    }))
  };

  return (
    <>
      <Helmet>
        <title>How AI CT Reporting Works: From DICOM to AI CT Report | xAID</title>
        <meta
          name="description"
          content="What is AI CT reporting and how does it work? Complete explainer: two-AI-layer analysis, radiologist review, preliminary report delivery — and how it differs from AI detection tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="How AI CT Reporting Works: From DICOM to AI CT Report" />
        <meta property="og:description" content="AI CT reporting explained: how two AI layers plus radiologist review deliver complete ready-to-sign preliminary reports — and how this differs from detection-only tools." />
        <meta property="og:url" content="https://xaid.ai/how-ai-ct-reporting-works" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How AI CT Reporting Works" />
        <meta name="twitter:description" content="AI CT reporting: DICOM in, ready-to-sign preliminary report out — with two AI layers and radiologist review on every study." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-10">
          <div className="container-xaid max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-xaid-blue font-medium mb-6">
              How it works
            </div>
            <h1 className="heading-hero mb-6">
              How AI CT reporting works
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              AI CT reporting is not a detection overlay or an alert system. It is a complete reporting service: your DICOM series goes in, a ready-to-sign preliminary report comes out — produced by two AI layers and reviewed by our in-house radiologist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact-us" className="btn-primary px-8 py-3 text-base">
                Request free pilot
              </Link>
              <Link to="/accuracy" className="btn-outline px-8 py-3 text-base">
                Clinical evidence
              </Link>
            </div>
          </div>
        </section>

        {/* Key definition */}
        <section className="section-padding pt-12 md:pt-20">
          <div className="container-xaid max-w-5xl mx-auto">
            <h2 className="text-[22px] md:text-[28px] font-normal text-white text-center mb-10 leading-[1.3]">
              AI radiology has two very different categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch">

              {/* AI detection tools */}
              <div className="flex flex-col h-full rounded-2xl bg-white/[0.04] border border-white/10 p-7 md:p-9">
                <span className="text-[12px] font-semibold tracking-[0.12em] text-white/70 uppercase mb-2">
                  AI detection tools
                </span>
                <p className="text-white/55 text-[13px] font-light mb-7">worklist prioritizers</p>

                <ul className="space-y-4 flex-1 mb-7">
                  {[
                    'Analyze CT for specific high-acuity findings',
                    'Send alerts and reprioritize the worklist',
                    'Radiologist still reads scan and dictates full report',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-white/45 flex-shrink-0" />
                      <span className="text-white/80 text-[15px] leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-white/10 min-h-[3.5em] flex items-center">
                  <p className="text-white text-[15px] font-medium leading-snug">
                    No complete report is delivered
                  </p>
                </div>
              </div>

              {/* xAID */}
              <div className="flex flex-col h-full rounded-2xl bg-xaid-blue/[0.08] border border-xaid-blue/30 p-7 md:p-9">
                <span className="text-[12px] font-semibold tracking-[0.12em] text-xaid-blue uppercase mb-2">
                  xAID
                </span>
                <p className="text-xaid-blue/80 text-[13px] font-light mb-7">AI CT reporting</p>

                <ul className="space-y-4 flex-1 mb-7">
                  {[
                    'AI generates complete structured CT report',
                    'European radiologist reviews the report',
                    'Preliminary report returned via HL7 to your RIS',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-xaid-blue flex-shrink-0" />
                      <span className="text-white text-[15px] leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-xaid-blue/25 min-h-[3.5em] flex items-center">
                  <p className="text-xaid-blue text-[15px] font-medium leading-snug">
                    Complete ready-to-sign preliminary report delivered
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Step-by-step workflow */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">
                    Workflow
                  </span>
                  <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.1] text-[#0D0D0D] mb-5">
                    From DICOM to ready-to-sign report
                  </h2>
                  <p className="text-[#666] text-[15px] leading-[1.65] font-light">
                    Every xAID study follows this exact workflow — 24/7, including after-hours and weekends, at no surcharge
                  </p>
                </div>

                <div className="space-y-8">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full bg-xaid-blue/10 border border-xaid-blue/30 flex items-center justify-center text-xaid-blue font-medium flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-[#0D0D0D] font-medium text-[18px] mb-2 leading-[1.3]">{step.title}</h3>
                        <p className="text-[#666] text-[15px] leading-[1.65] font-light">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats callout */}
        <section className="section-padding bg-white/[0.03]">
          <div className="container-xaid max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-medium text-xaid-blue mb-2">100+</div>
                <div className="text-gray-400 text-sm leading-snug">Findings analyzed per CT study</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-xaid-blue mb-2">24/7</div>
                <div className="text-gray-400 text-sm leading-snug">Coverage — flat rate, no surcharge</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-xaid-blue mb-2">2–12h</div>
                <div className="text-gray-400 text-sm leading-snug">DICOM to report delivery</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-xaid-blue mb-2">95%</div>
                <div className="text-gray-400 text-sm leading-snug">95% accuracy — or we reimburse</div>
              </div>
            </div>
          </div>
        </section>

        {/* The AI model */}
        <section className="section-padding">
          <div className="container-xaid max-w-5xl mx-auto">
            <h2 className="text-[22px] md:text-[28px] font-normal text-white text-center mb-10 leading-[1.3]">
              The AI model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
              {[
                {
                  title: 'Foundation model',
                  body: 'Volumetric foundation model designed for 3D CT interpretation — not a repurposed 2D medical imaging model. Analyzes the full CT series across 100+ finding categories with high accuracy verified by peer-reviewed studies',
                },
                {
                  title: 'Second AI layer',
                  body: 'A secondary model cross-verifies the foundation model output for consistency and completeness. Catches potential missed findings and reduces false positives before the report reaches the radiologist',
                },
                {
                  title: 'Radiologist review',
                  body: 'A radiologist reviews the complete AI-generated report against the original DICOM series. Any finding can be modified, added, or removed. The radiologist is the accountable physician for every report',
                },
              ].map((item, i) => (
                <div
                  key={i}
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
          </div>
        </section>

        {/* Comparison: three categories */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                AI detection vs teleradiology vs AI CT reporting
              </h2>
              <p className="text-[#666] text-[15px] leading-[1.65] max-w-2xl mx-auto">
                Understanding the three categories helps you evaluate the right solution for your workflow
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead>
                    <tr className="bg-[#FAFAFA] border-b border-gray-200">
                      <th className="text-left px-6 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] w-[26%]">Category</th>
                      <th className="text-left px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A]">Output</th>
                      <th className="text-left px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A]">Radiologist reports?</th>
                      <th className="text-left px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A]">After-hours surcharge</th>
                      <th className="text-left px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A]">Quality guarantee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {differences.map((row, i) => {
                      const isXaid = row.category.includes('xAID');
                      return (
                        <tr
                          key={i}
                          className={`border-t border-gray-100 ${isXaid ? 'bg-xaid-blue/[0.06]' : ''}`}
                        >
                          <td className={`px-6 py-5 align-top text-[14px] leading-snug font-medium relative ${isXaid ? 'text-xaid-blue' : 'text-[#0D0D0D]'}`}>
                            {isXaid && (
                              <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-xaid-blue" aria-hidden="true" />
                            )}
                            {row.category}
                          </td>
                          <td className={`px-5 py-5 align-top text-[13px] leading-snug ${isXaid ? 'text-[#1A1A1A]' : 'text-[#666]'}`}>
                            {row.output}
                          </td>
                          <td className={`px-5 py-5 align-top text-[13px] leading-snug ${isXaid ? 'text-[#1A1A1A]' : 'text-[#666]'}`}>
                            {row.report}
                          </td>
                          <td className={`px-5 py-5 align-top text-[13px] leading-snug ${isXaid ? 'text-xaid-blue font-medium' : 'text-[#666]'}`}>
                            {row.afterHours}
                          </td>
                          <td className={`px-5 py-5 align-top text-[13px] leading-snug ${isXaid ? 'text-xaid-blue font-medium' : 'text-[#666]'}`}>
                            {row.guarantee}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical evidence */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="bg-xaid-blue/10 border border-xaid-blue/20 rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-normal text-white mb-4">Clinical evidence: published, peer-reviewed</h2>
              <p className="text-gray-300 text-[15px] leading-[1.65] font-light mb-6">
                xAID achieves 95% accuracy verified by independent peer-reviewed studies — not internal benchmarks. Full methodology, study details, and results are available on the clinical evidence page
              </p>
              <div className="mt-6">
                <Link to="/accuracy" className="text-xaid-blue text-sm font-medium hover:underline">
                  Full clinical evidence page →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-10 text-center">Questions about AI CT reporting</h2>
              <FAQAccordion variant="light" faqs={faqs} />
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/accuracy" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Peer-reviewed clinical evidence — full study data</div>
              </Link>
              <Link to="/integrations" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Integration</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">DICOM & HL7 integration — setup under one week</div>
              </Link>
              <Link to="/pricing" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Pricing</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Pricing & free 5-study pilot</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">See AI CT reporting in practice</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Free 5-study pilot. Send CT studies from your actual case mix — head, chest, or abdomen. Receive preliminary reports within 12 hours. No integration or commitment required to start
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact-us" className="btn-primary px-8 py-3 text-base">
                Request free pilot
              </Link>
              <Link to="/pricing" className="btn-outline px-8 py-3 text-base">
                See pricing
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HowAiCtReportingWorks;
