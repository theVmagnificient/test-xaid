import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from "lucide-react";
import Footer from '@/components/Footer';

const painPoints = [
  {
    problem: 'CT volume is growing, but you can\'t hire fast enough',
    solution: 'xAID adds immediate read capacity. No recruiting, no credentialing — first report in under a week',
  },
  {
    problem: 'Locum and on-call radiologists are eating your margins',
    solution: 'Replace or reduce locum spend. xAID delivers the same ready-to-sign output at narrow AI pricing',
  },
  {
    problem: 'Your AI overlay didn\'t reduce TAT — radiologists still dictate everything',
    solution: 'xAID delivers a complete radiologist-reviewed preliminary report — ready to sign, not just detection flags. Your radiologists sign, not dictate',
  },
];

const workflow = [
  { step: '1', title: 'Send CT via DICOM', desc: 'Standard DICOM push to our PACS. No new equipment, no workflow changes' },
  { step: '2', title: 'Two AI layers process the study', desc: 'Foundation model + secondary AI analyze 100+ findings across head, chest, or abdomen CT' },
  { step: '3', title: 'Radiologist reviews', desc: 'Every report reviewed by our in-house European radiologist before delivery' },
  { step: '4', title: 'Report delivered via HL7', desc: 'Ready-to-sign report arrives in your system within 2–12 hours' },
];

const ForOutpatientCenters = () => {
  return (
    <>
      <Helmet>
        <title>AI CT Reporting for Outpatient Imaging Centers | xAID</title>
        <meta
          name="description"
          content="AI radiology reporting built for outpatient imaging centers. Ready-to-sign head, chest & abdomen CT reports — 2–12 hr TAT, 95% accuracy verified, radiologist review included. HIPAA compliant."
        />
        <link rel="canonical" href="https://xaid.ai/for-outpatient-imaging-centers" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI CT Reporting for Outpatient Imaging Centers | xAID" />
        <meta property="og:description" content="Expand CT read capacity without hiring. Ready-to-sign AI radiology reports for outpatient centers — 2–12 hr TAT, 95% accuracy verified." />
        <meta property="og:url" content="https://xaid.ai/for-outpatient-imaging-centers" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI CT Reporting for Outpatient Imaging Centers | xAID" />
        <meta name="twitter:description" content="Expand CT read capacity without hiring. Ready-to-sign AI radiology reports for outpatient centers — 2–12 hr TAT, 95% accuracy verified." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "For Outpatient Imaging Centers", "item": "https://xaid.ai/for-outpatient-imaging-centers" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can outpatient imaging centers add CT read capacity without hiring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID provides ready-to-sign preliminary reports for outpatient imaging centers — head, chest, and abdomen CT with 2–12 hour turnaround. Setup takes under one week via standard DICOM/HL7 integration, with no new equipment required."
              }
            },
            {
              "@type": "Question",
              "name": "What is the setup process for AI CT reporting at an outpatient imaging center?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard DICOM push to xAID's PACS. Reports return via HL7 into your system. Our team handles the technical integration with minimal IT involvement on your side. Typical setup time is under one week."
              }
            },
            {
              "@type": "Question",
              "name": "Is AI radiology reporting HIPAA compliant for outpatient centers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. xAID is fully HIPAA compliant with US-based AWS infrastructure. BAA available. ISO 27001 certified. Zero-footprint viewers — no data leaves US servers."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid">
            <div className="max-w-3xl">
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">AI Radiology Service for Imaging Centers</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                Expand CT capacity.<br />
                <span className="text-white/60">Without expanding headcount</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.65] max-w-2xl mb-8">
                xAID is an AI radiology service for outpatient imaging centers — delivering ready-to-sign head, chest, and abdomen CT reports in 2–12 hours with radiologist review included, at narrow AI pricing
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact-us"
                  className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  Start free 5-study pilot
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
                >
                  See pricing vs locum
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {[
                { stat: '95%', label: 'accuracy — or we reimburse' },
                { stat: '2–12 hr', label: 'Turnaround time' },
                { stat: '<1 week', label: 'Setup time' },
              ].map((item) => (
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
                Built around your real problems
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
              How it works for outpatient centers
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
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/after-hours-radiology-coverage-options" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">After-hours coverage</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">After-hours radiology coverage options — no surcharge</div>
              </Link>
              <Link to="/accuracy" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Peer-reviewed clinical evidence — 95% accuracy verified</div>
              </Link>
              <Link to="/ai-vs-teleradiology" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Comparison</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT reporting vs teleradiology — full comparison</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 text-center max-w-2xl mx-auto">
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Start with 5 free studies
              </h2>
              <p className="text-[#666] leading-relaxed mb-8">
                No integration required. No commitment. Send 5 CT studies and evaluate the reports before you decide
              </p>
              <Link
                to="/#contact-us"
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
              >
                Start free pilot
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ForOutpatientCenters;
