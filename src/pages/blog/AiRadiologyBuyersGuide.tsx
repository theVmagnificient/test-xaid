import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const AiRadiologyBuyersGuide = () => {
  return (
    <>
      <Helmet>
        <title>AI Radiology Reporting Software: A 2026 Buyer's Guide | xAID</title>
        <meta
          name="description"
          content="How to evaluate AI radiology reporting software in 2026. Compare detection-only tools vs full reporting services, pricing models, accuracy data, radiologist review, and quality guarantees before committing."
        />
        <link rel="canonical" href="https://xaid.ai/blog/ai-radiology-reporting-buyers-guide-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Radiology Reporting Software: A 2026 Buyer's Guide" />
        <meta property="og:description" content="How to evaluate AI radiology reporting software — detection tools vs full report services, pricing, accuracy data, and quality guarantees." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-radiology-reporting-buyers-guide-2026" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Radiology Reporting Software: 2026 Buyer's Guide" />
        <meta name="twitter:description" content="How to evaluate AI radiology reporting software in 2026 — accuracy data, pricing models, output types, and quality guarantees." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": "AI Radiology Reporting Buyer's Guide 2026", "item": "https://xaid.ai/blog/ai-radiology-reporting-buyers-guide-2026" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "AI Radiology Reporting Software: A 2026 Buyer's Guide for Imaging Centers",
          "description": "How to evaluate AI radiology reporting software in 2026 — comparing detection-only tools vs full reporting services, pricing models, accuracy data, and quality guarantees.",
          "datePublished": "2026-04-28",
          "dateModified": "2026-04-28",
          "author": { "@type": "Organization", "name": "xAID" },
          "publisher": {
            "@type": "Organization",
            "name": "xAID",
            "url": "https://xaid.ai"
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://xaid.ai/blog/ai-radiology-reporting-buyers-guide-2026" },
          "keywords": ["AI radiology software", "best AI radiology reporting", "AI CT reporting comparison", "radiology AI buyer guide"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the difference between a radiology AI detection tool and an AI reporting service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A radiology AI detection tool analyzes imaging scans and flags suspected findings (e.g., 'suspected intracranial hemorrhage'), but does not generate the final report — a radiologist still reads each scan and creates the report from scratch. An AI reporting service generates the complete structured radiology report, which our in-house radiologist then reviews and edits if needed before delivery. AI detection tools are designed for hospital triage; AI reporting services like xAID are designed for outpatient imaging centers and teleradiology providers that need the complete document delivered."
              }
            },
            {
              "@type": "Question",
              "name": "What accuracy data should I ask AI radiology vendors to provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask vendors for: (1) peer-reviewed published studies, not just internal validation data; (2) sensitivity and specificity numbers with confidence intervals; (3) the study population — emergency CTs vs routine outpatient vs multi-site; (4) whether the comparison group was unaided radiologists or AI-assisted. Red flags: accuracy data from the vendor's own retrospective review without external peer review, sensitivity numbers without specificity, or no published data at all. For reference, xAID achieves 95% accuracy verified by independent peer-reviewed studies — full clinical evidence is available at xaid.ai/accuracy."
              }
            },
            {
              "@type": "Question",
              "name": "How should AI radiology reporting be priced?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There are three main pricing models: (1) Per-study pricing — you pay for each CT study processed, with radiologist review included or excluded. This is the most transparent model for outpatient and teleradiology workflows. (2) Enterprise SaaS — annual contracts, typically sold to hospital systems, with per-module or per-scanner pricing. Costs range from $75,000–$200,000+ per year. (3) Per-seat or per-radiologist pricing — less common. For outpatient imaging centers with variable volume, per-study pricing is almost always more cost-effective than enterprise annual contracts."
              }
            },
            {
              "@type": "Question",
              "name": "Does the AI radiology vendor need to sign a BAA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Any AI radiology vendor that receives, processes, or stores protected health information (PHI) — which includes DICOM imaging files — is a Business Associate under HIPAA. A Business Associate Agreement (BAA) must be signed before any PHI is shared. If a vendor cannot or will not sign a BAA before your first study, they are not a viable HIPAA-compliant vendor. The BAA should be offered as a standard part of the contract, not an enterprise add-on."
              }
            },
            {
              "@type": "Question",
              "name": "What is a reasonable quality guarantee for AI radiology reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most AI radiology vendors offer no published accuracy data. The benchmark to ask for: peer-reviewed clinical evidence of accuracy, and published sensitivity/specificity figures from independent studies. xAID achieves 95% accuracy verified by peer-reviewed studies — the only AI CT reporting service with published independent clinical evidence."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        <article>
          {/* Hero */}
          <section className="pt-32 md:pt-40 pb-10">
            <div className="container-xaid">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">Buyer Guide</span>
                  <span className="text-white/40 text-sm">April 28, 2026 · 11 min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6">
                  AI Radiology Reporting Software: A 2026 Buyer's Guide for Imaging Centers
                </h1>
                <p className="text-white/60 text-[15px] font-light leading-[1.65]">
                  Not all AI radiology tools produce the same output. Some flag findings and reprioritize the worklist. Others deliver complete, ready-to-sign reports. The pricing models differ. The accuracy data differs. The compliance posture differs. This guide tells you what to evaluate — and what to watch out for — before committing.
                </p>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="section-padding bg-[#EBEBEB]">
            <div className="container-xaid">
              <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

                {/* Section 1 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">1. Detection Tool vs Full Reporting Service: The Most Important Distinction</h2>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                  The single most important question to ask any AI radiology vendor: <strong>What is the output?</strong>
                </p>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                  There are two fundamentally different types of AI radiology products, and confusing them is the most common buying mistake:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-medium text-[#0D0D0D] mb-2 text-base">Type 1: Detection / Triage Tools</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light mb-3">Examples: AI detection and triage tools (worklist prioritizers)</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-[#666]">
                      <li>Analyzes scan and flags suspected urgent findings</li>
                      <li>Reprioritizes the radiologist's worklist</li>
                      <li>Radiologist still reads and dictates every report from scratch</li>
                      <li>Reduces time to diagnosis for urgent findings, not workload</li>
                      <li>Designed for hospital emergency/acute settings</li>
                    </ul>
                  </div>
                  <div className="bg-xaid-blue/5 border border-xaid-blue/20 rounded-xl p-6">
                    <h3 className="font-medium text-[#0D0D0D] mb-2 text-base">Type 2: AI Reporting Services</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light mb-3">Examples: xAID and AI reporting services</p>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-[#666]">
                      <li>Generates a complete structured radiology report</li>
                      <li>Radiologist reviews AI draft — does not dictate from scratch</li>
                      <li>Delivers ready-to-sign document covering 100+ findings</li>
                      <li>Reduces report generation workload, not just prioritization</li>
                      <li>Designed for outpatient, teleradiology, high-volume routing</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                  If you run an outpatient imaging center that needs reports delivered — not an ED looking to triage faster — you need a Type 2 product. No detection tool will eliminate the reporting step.
                </p>

                {/* Section 2 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4 mt-10">2. How to Evaluate Accuracy Claims</h2>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                  Every AI radiology vendor claims high accuracy. Most of those claims are backed by internal validation data — not independent peer-reviewed studies. Here's how to tell the difference:
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-medium text-[#0D0D0D] mb-3 text-base">What to Ask Every Vendor</h3>
                  <div className="space-y-3">
                    {[
                      'Is the accuracy data published in a peer-reviewed journal? (If not, treat it as unverified.)',
                      'What was the study population? (Emergency CT vs routine outpatient vs multicenter — these produce very different numbers.)',
                      'What is both sensitivity AND specificity? (High sensitivity / low specificity = too many false positives.)',
                      'What was the comparison group? (AI vs unaided radiologist vs AI-assisted radiologist?)',
                      'Was the study funded by the vendor or conducted independently?',
                      'What is the confidence interval on the reported accuracy numbers?',
                    ].map((q, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[#444]">
                        <span className="text-xaid-blue font-medium flex-shrink-0">{i + 1}.</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                  For reference: xAID achieves 95% accuracy verified by independent peer-reviewed studies — AI-assisted detection consistently outperformed unaided radiologists across multiple pathology categories. Full methodology and results are available at <Link to="/accuracy" className="text-xaid-blue hover:underline">xaid.ai/accuracy</Link>.
                </p>

                {/* Section 3 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4 mt-10">3. Pricing Models Compared</h2>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                  AI radiology pricing varies dramatically. The right model depends on your volume, use case, and risk tolerance.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      model: 'Per-study pricing (pay-as-you-go)',
                      best: 'Outpatient imaging centers, teleradiology providers, variable volume',
                      risk: 'Low — no minimum commitment. Easy to compare cost against teleradiology alternatives.',
                      watch: 'Make sure radiologist review is included in the per-study price, not billed separately.',
                    },
                    {
                      model: 'Enterprise annual SaaS contract',
                      best: 'Hospital systems, large radiology groups with predictable high volume',
                      risk: 'High — typically $75K–$200K+ per year regardless of study volume. Vendor lock-in risk.',
                      watch: 'Per-module pricing means you pay separately for each AI condition covered (ICH, PE, LVO, etc.).',
                    },
                    {
                      model: 'Per-radiologist / per-seat licensing',
                      best: 'Large practices with many radiologists using the same tool',
                      risk: 'Medium — costs scale with headcount, not usage.',
                      watch: 'Less common for full reporting services; more common for worklist management tools.',
                    },
                  ].map(m => (
                    <div key={m.model} className="border border-gray-200 rounded-xl p-5">
                      <h3 className="font-medium text-[#0D0D0D] mb-2 text-sm">{m.model}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#666]">
                        <div><span className="font-medium text-[#444]">Best for: </span>{m.best}</div>
                        <div><span className="font-medium text-[#444]">Risk level: </span>{m.risk}</div>
                        <div><span className="font-medium text-amber-600">Watch for: </span>{m.watch}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 4 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4 mt-10">4. Does the Vendor Include Radiologist Review?</h2>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                  This is a crucial distinction that affects both cost and liability:
                </p>

                <ul className="space-y-3 mb-6 text-[#444] text-[15px] font-light">
                  <li className="flex items-start gap-2"><span className="text-xaid-blue mt-0.5 flex-shrink-0">→</span><span><strong>AI detection tools:</strong> No radiologist review included. Your in-house radiologists still read and sign every study.</span></li>
                  <li className="flex items-start gap-2"><span className="text-xaid-blue mt-0.5 flex-shrink-0">→</span><span><strong>Traditional teleradiology:</strong> Radiologist review included, but billed separately per study ($40–$80/study range).</span></li>
                  <li className="flex items-start gap-2"><span className="text-xaid-blue mt-0.5 flex-shrink-0">→</span><span><strong>AI reporting services like xAID:</strong> Radiologist review included in the per-study price. The AI generates the report; a European radiologist reviews it before delivery. No additional cost.</span></li>
                </ul>

                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                  Centers that don't have in-house radiologists — or that are trying to reduce radiologist workload — need a vendor that includes radiologist review in their offering. A detection tool without your own radiologists on staff will not deliver a complete structured report.
                </p>

                {/* Section 5 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4 mt-10">5. Accuracy Evidence: Most Vendors Have None</h2>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                  As of 2026, the vast majority of AI radiology vendors offer no published peer-reviewed accuracy data. If reports are inaccurate or require extensive editing, there is no vendor accountability — you absorb the cost of corrections and the liability for any clinical impact.
                </p>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                  Ask vendors directly: <em>"Do you have peer-reviewed published studies on your accuracy?"</em> Most cannot answer this question.
                </p>

                <div className="bg-xaid-blue/10 border border-xaid-blue/20 rounded-xl p-6 mb-8">
                  <h3 className="text-[#0D0D0D] font-medium mb-2 text-sm">xAID's Accuracy Evidence</h3>
                  <p className="text-[#444] text-[15px] leading-[1.65] font-light">
                    95% accuracy verified by independent peer-reviewed studies. xAID is the only AI CT reporting service with published independent clinical evidence. Full study details are available at <Link to="/accuracy" className="text-xaid-blue hover:underline">xaid.ai/accuracy</Link>.
                  </p>
                </div>

                {/* Section 6 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4 mt-10">6. Compliance Checklist: What Every Vendor Must Provide</h2>

                <div className="space-y-2 mb-8">
                  {[
                    { req: 'BAA (Business Associate Agreement)', why: 'Legally required before any PHI (DICOM images) is transmitted. Must be signed before your first study.', required: true },
                    { req: 'HIPAA-compliant infrastructure', why: 'US-based servers, encrypted transmission, zero-footprint access. Ask where data is stored and processed.', required: true },
                    { req: 'ISO 27001 certification', why: 'Independent third-party information security audit. Annual certification. Not just self-assessed.', required: false },
                    { req: 'Audit logging and access controls', why: 'Required for HIPAA. Every access to PHI must be logged.', required: true },
                    { req: 'Radiologist review on every report', why: 'Licensed radiologist maintains professional accountability. AI alone cannot sign a clinical report.', required: true },
                    { req: 'Data retention and deletion policy', why: 'How long is PHI retained? What is the deletion process after the reporting relationship ends?', required: false },
                  ].map(item => (
                    <div key={item.req} className="flex items-start gap-4 py-3 border-b border-gray-100">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${item.required ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                        {item.required ? 'HIPAA Required' : 'Best Practice'}
                      </span>
                      <div>
                        <div className="font-medium text-[#0D0D0D] text-sm">{item.req}</div>
                        <div className="text-[#666] text-xs mt-0.5">{item.why}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 7 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4 mt-10">7. Setup Time and Integration Requirements</h2>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                  Implementation time varies significantly between vendors:
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border-collapse border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Vendor Type</th>
                        <th className="text-center py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Typical setup time</th>
                        <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Requirements</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Enterprise AI detection tools', '4–12 weeks', 'Deep IT integration, PACS/EHR connection, clinical workflow configuration, staff training'],
                        ['Traditional teleradiology', 'Days to 2 weeks', 'DICOM send destination setup, HL7 delivery config'],
                        ['AI reporting services (xAID)', '<1 week', 'DICOM push to xAID destination, HL7 output routing — standard configuration your IT team already knows'],
                        ['Locum radiologist', '12+ months to hire', 'Credentialing, contracting, onboarding, malpractice coverage'],
                      ].map(([type, time, req]) => (
                        <tr key={type} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-[#444] font-medium text-xs">{type}</td>
                          <td className="py-3 px-4 text-center text-xaid-blue font-medium text-xs">{time}</td>
                          <td className="py-3 px-4 text-[#666] text-xs">{req}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 8 */}
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4 mt-10">8. The 10-Question Vendor Evaluation Checklist</h2>
                <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                  Use this list before any vendor demo or contract discussion:
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'What is the exact output — detection flag or complete preliminary report?',
                    'Is radiologist review included in the price, or billed separately?',
                    'Can you provide peer-reviewed published accuracy data (not internal validation)?',
                    'Do you have peer-reviewed published studies on your accuracy?',
                    'Will you sign a BAA before we share any PHI or DICOM files?',
                    'Where is data processed and stored — US-only?',
                    'Are you ISO 27001 certified? Can you provide the certificate?',
                    'What is the typical setup time to first report?',
                    'Is there a free pilot with no integration required?',
                    'What are the contract terms — per-study, annual, or minimum commitment?',
                  ].map((q, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#444] py-2 border-b border-gray-100">
                      <div className="w-6 h-6 rounded-full bg-xaid-blue/15 border border-xaid-blue/30 flex items-center justify-center text-xaid-blue font-medium text-xs flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding">
            <div className="container-xaid max-w-3xl mx-auto">
              <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-8">Buyer's Guide Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the difference between a radiology AI detection tool and an AI reporting service?',
                    a: 'A detection tool flags suspected findings and reprioritizes the worklist — the radiologist still reads every scan and creates the report. An AI reporting service generates the complete structured report, which our in-house European radiologist reviews before delivery. Detection tools are designed for hospital ED triage; reporting services are designed for outpatient and teleradiology workflows where the complete document needs to be delivered.',
                  },
                  {
                    q: 'What accuracy data should I ask AI radiology vendors for?',
                    a: 'Ask for: peer-reviewed published studies (not internal validation), sensitivity AND specificity numbers with confidence intervals, the study population (emergency vs routine outpatient), and whether studies were conducted independently of the vendor. For reference, xAID achieves 95% accuracy verified by independent peer-reviewed studies. Full clinical evidence is available at xaid.ai/accuracy.',
                  },
                  {
                    q: 'Does the vendor need to sign a BAA?',
                    a: 'Yes. Any vendor receiving DICOM files (which contain PHI) is a Business Associate under HIPAA and must sign a BAA before any PHI is shared. A vendor that cannot or will not sign a BAA before your first study is not a viable HIPAA-compliant partner. The BAA should be standard, not an enterprise add-on.',
                  },
                  {
                    q: 'What accuracy evidence should I expect from an AI radiology vendor?',
                    a: 'Most AI radiology vendors offer no published peer-reviewed accuracy data. Ask: "Do you have independent peer-reviewed studies published on your accuracy?" As of 2026, xAID is the only AI CT reporting service with published clinical evidence: 95% accuracy verified by peer-reviewed studies. Full details are available at xaid.ai/accuracy.',
                  },
                  {
                    q: 'How long should AI radiology setup take?',
                    a: 'For AI reporting services using standard DICOM/HL7, setup should take under one week — the same integration protocol your center uses for teleradiology providers today. Enterprise AI detection tools typically require 4–12 weeks of IT implementation. If a vendor quotes more than a week for a standard DICOM send setup, ask specifically what is driving the delay.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-white/10 pb-6">
                    <h3 className="text-white font-medium mb-2">{item.q}</h3>
                    <p className="text-white/60 text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>

        {/* Related */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/ai-vs-teleradiology" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT Reporting vs Teleradiology — Full Comparison</div>
              </Link>
              <Link to="/accuracy" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Accuracy & Published Study Data</div>
              </Link>
              <Link to="/pricing" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Pricing</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Per-Study Pricing vs Enterprise AI Contracts</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiRadiologyBuyersGuide;
