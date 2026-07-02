import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from "lucide-react";
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const painPoints = [
  {
    problem: 'CT volume is growing faster than your radiologist pool',
    solution: 'Route overflow CT studies to xAID — your AI teleradiology service for CT. Ready-to-sign reports back in 2–12 hours, no additional hires needed',
  },
  {
    problem: 'After-hours CT coverage is expensive and unreliable',
    solution: 'xAID provides 24/7 AI radiology reporting with SLA-backed turnaround. Consistent quality on night, weekend, and overflow reads — without locum costs',
  },
  {
    problem: 'You\'re turning away new clients because you can\'t add CT capacity fast enough',
    solution: 'xAID adds immediate CT read capacity — ready-to-sign reports in 2–12 hours, no new hires, no credentialing. Take on more clients without growing your radiologist pool',
  },
  {
    problem: 'You need HIPAA-compliant, clinically-verified CT coverage you can depend on',
    solution: '95% accuracy verified by peer-reviewed studies. ISO 27001 certified, BAA available. SLA-backed TAT',
  },
];

const workflow = [
  { step: '1', title: 'Route CT via DICOM', desc: 'Send overflow or designated studies via standard DICOM push. No new equipment required' },
  { step: '2', title: 'Two AI layers analyze the study', desc: 'Foundation model + secondary AI review 100+ findings across head, chest, or abdomen CT' },
  { step: '3', title: 'Radiologist reviews', desc: 'Every report reviewed by our in-house European radiologist before delivery' },
  { step: '4', title: 'Report returned via HL7', desc: 'Ready-to-sign report delivered to your system within 2–12 hours' },
];

const stats = [
  { stat: '95%', label: 'accuracy — or we reimburse' },
  { stat: '2–12 hr', label: 'SLA-backed turnaround time' },
  { stat: '<1 week', label: 'From contract to first report' },
];

const ForTeleradiologyCompanies = () => {
  return (
    <>
      <Helmet>
        <title>AI CT Reporting for Teleradiology Companies | Scale CT Coverage | xAID</title>
        <meta
          name="description"
          content="AI radiology reporting for teleradiology companies. Ready-to-sign head, chest & abdomen CT reports at narrow AI pricing — 2–12 hr TAT, 95% accuracy verified, radiologist review included. Scale CT coverage without hiring."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI CT Reporting for Teleradiology Companies | xAID" />
        <meta property="og:description" content="Scale CT coverage without hiring. Ready-to-sign AI radiology reports for teleradiology providers — 2–12 hr TAT, 95% accuracy verified, radiologist review included." />
        <meta property="og:url" content="https://xaid.ai/for-teleradiology-companies" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI CT Reporting for Teleradiology Companies | xAID" />
        <meta name="twitter:description" content="Scale CT coverage without hiring. Ready-to-sign AI radiology reports for teleradiology providers — 2–12 hr TAT, 95% accuracy verified." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "For Teleradiology Companies", "item": "https://xaid.ai/for-teleradiology-companies" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can teleradiology companies use AI to scale CT coverage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID provides ready-to-sign preliminary reports for teleradiology providers — head, chest, and abdomen CT with 2–12 hour turnaround. Route overflow or designated studies via DICOM; reports return via HL7 within your SLA."
              }
            },
            {
              "@type": "Question",
              "name": "Can teleradiology companies white-label xAID CT reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact xAID to discuss white-label and integration options. xAID is HIPAA compliant, ISO 27001 certified, and BAA-ready, making it suitable for teleradiology provider partnerships."
              }
            },
            {
              "@type": "Question",
              "name": "What accuracy do preliminary reports from xAID achieve for teleradiology providers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID achieves 95% accuracy verified by peer-reviewed studies. Every report is reviewed by our in-house European radiologist before delivery."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can a teleradiology company integrate with xAID?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard DICOM/HL7 integration. Our team handles the technical setup — typical go-live is under one week, with minimal IT involvement required on your side."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid">
            <div className="max-w-3xl">
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">AI Teleradiology Service</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                Scale CT coverage.<br />
                <span className="text-white/60">Without scaling headcount</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] max-w-2xl mb-8">
                xAID is an AI teleradiology service for CT reporting — delivering ready-to-sign head, chest, and abdomen CT reports at narrow AI pricing, with radiologist review included. 24/7 coverage, SLA-backed TAT, and 95% accuracy verified by peer-reviewed studies
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact-us"
                  className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  Talk to Us About Volume Pricing
                </Link>
                <Link
                  to="/ai-vs-teleradiology"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  Compare providers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {stats.map((item) => (
                <div key={item.stat}>
                  <div className="text-4xl font-medium text-xaid-blue mb-2">{item.stat}</div>
                  <div className="text-white/60 text-[15px] font-light">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-12">
                Teleradiology AI reporting that solves real problems
              </h2>
              <div className="grid gap-5 md:gap-6">
                {painPoints.map((item) => (
                  <div
                    key={item.problem}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-0 items-stretch"
                  >
                    {/* Challenge card */}
                    <div className="flex flex-col h-full rounded-xl bg-[#F4F4F4] border border-[#E5E5E5] p-6 md:p-7">
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-[#8A8A8A] uppercase mb-3">
                        Challenge
                      </span>
                      <p className="text-[#1A1A1A] text-[15px] leading-[1.6]">
                        {item.problem}
                      </p>
                    </div>

                    {/* Connector desktop */}
                    <div className="hidden md:flex items-center justify-center px-4" aria-hidden="true">
                      <ArrowRight className="w-5 h-5 text-xaid-blue/50" strokeWidth={2} />
                    </div>
                    {/* Connector mobile */}
                    <div className="flex md:hidden items-center justify-center" aria-hidden="true">
                      <ArrowDown className="w-5 h-5 text-xaid-blue/50" strokeWidth={2} />
                    </div>

                    {/* Solution card */}
                    <div className="flex flex-col h-full rounded-xl bg-xaid-blue/[0.06] border border-xaid-blue/30 p-6 md:p-7">
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-xaid-blue uppercase mb-3">
                        With xAID
                      </span>
                      <p className="text-[#1A1A1A] text-[15px] leading-[1.6]">
                        {item.solution}
                      </p>
                    </div>
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
              How it works for teleradiology providers
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

        {/* What you get */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-8">What teleradiology providers get</h2>
              <ul className="space-y-4 mb-10">
                {[
                  'Ready-to-sign CT reports — head, chest, and abdomen — at narrow AI pricing',
                  'Radiologist review included in every report, not billed separately',
                  '95% accuracy verified by peer-reviewed studies — the only AI CT reporting service with published clinical evidence',
                  '2–12 hour SLA-backed turnaround, configurable to your operational requirements',
                  'Standard DICOM/HL7 integration, live in under one week',
                  'HIPAA compliant, ISO 27001 certified, BAA available',
                  'Volume-based pricing that scales with your CT workload',
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
                  q: 'How does xAID handle overflow CT volume for teleradiology providers?',
                  a: 'You route studies via standard DICOM push — selectively or in bulk. xAID processes them through two AI layers and radiologist review, returning reports via HL7 within your configured SLA window',
                },
                {
                  q: 'Can xAID integrate with our existing teleradiology platform?',
                  a: 'Yes. xAID uses standard DICOM/HL7 — the same integration your current clients use. Our team handles the technical setup, typically live in under one week',
                },
                {
                  q: 'What modalities and body parts does xAID cover?',
                  a: 'CT only today — head, chest, and abdomen. 100+ findings per report. MRI is on the roadmap. We go deep on CT coverage rather than broad across all modalities',
                },
                {
                  q: 'What accuracy does xAID provide for teleradiology operations?',
                  a: 'xAID achieves 95% accuracy verified by peer-reviewed studies. Every report is reviewed by our in-house European radiologist before delivery',
                },
              ]}
            />
          </div>
        </section>

        {/* Modality links */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">CT coverage</span>
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-white leading-[1.15] mb-3">
                Head, chest & abdomen CT
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] font-light">
                100+ findings per report across all three modalities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { title: 'Head CT', sub: 'Stroke, hemorrhage, fractures, brain parenchyma', href: '/head-ct-ai-report' },
                { title: 'Chest CT', sub: 'Lung nodules, coronary calcium, pleural effusion, fractures', href: '/chest-ct-ai-report', badge: 'Peer-reviewed' },
                { title: 'Abdomen CT', sub: 'Liver, kidneys, pancreas, bowel, aorta, lymph nodes', href: '/abdomen-ct-ai-report' },
              ].map((m) => (
                <Link
                  key={m.title}
                  to={m.href}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-white/20 transition-all group flex flex-col"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-white font-medium text-[20px] group-hover:text-xaid-blue transition-colors">{m.title}</h3>
                    {m.badge && (
                      <span className="bg-xaid-blue/15 text-xaid-blue text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap">
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-[14px] leading-[1.65] font-light mb-6 flex-1">{m.sub}</p>
                  <span className="text-xaid-blue text-sm font-medium group-hover:underline self-start">Learn more →</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/accuracy" className="text-xaid-blue text-sm font-medium hover:underline">See peer-reviewed accuracy data for AI CT reporting →</Link>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/after-hours-radiology-coverage-options" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">After-hours coverage</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">After-hours radiology coverage options — no surcharges</div>
              </Link>
              <Link to="/ai-vs-teleradiology" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market overview</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT reporting vs teleradiology — full comparison</div>
              </Link>
              <Link to="/accuracy" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">95% accuracy — peer-reviewed study data</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ForTeleradiologyCompanies;
