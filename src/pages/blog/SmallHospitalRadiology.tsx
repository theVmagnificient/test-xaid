import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SmallHospitalRadiology = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>AI Radiology for Small Hospitals: 2026 Guide | xAID</title>
        <meta
          name="description"
          content="Radiology coverage options for small and community hospitals in 2026 — costs, teleradiology surcharges, and how AI CT reporting keeps 24/7 reads affordable."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Radiology for Small Hospitals: 2026 Guide | xAID" />
        <meta property="og:description" content="Radiology coverage options for small and community hospitals in 2026 — costs, teleradiology surcharges, and how AI CT reporting keeps 24/7 reads affordable." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-radiology-for-small-hospitals-2026" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Radiology for Small Hospitals: 2026 Guide | xAID" />
        <meta name="twitter:description" content="Radiology coverage options for small and community hospitals in 2026 — costs, teleradiology surcharges, and how AI CT reporting keeps 24/7 reads affordable." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "AI Radiology for Small and Community Hospitals 2026: Coverage Options, Costs, and Implementation",
          "description": "Small hospitals and critical access hospitals face the same radiology coverage problem: can't hire a full-time radiologist, can't afford locum rates, and traditional teleradiology surcharges make 24/7 coverage unaffordable. Here's what actually works.",
          "datePublished": "2026-03-19",
          "dateModified": "2026-03-19",
          "author": { "@type": "Organization", "name": "xAID" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "url": "https://xaid.ai/blog/ai-radiology-for-small-hospitals-2026",
          "keywords": ["small hospital radiology", "community hospital CT coverage", "critical access hospital radiology", "AI radiology hospital", "hospital radiology coverage 2026"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can a small hospital get radiology coverage without hiring a radiologist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI CT reporting services like xAID provide per-study radiology coverage for small hospitals — delivering ready-to-sign CT reports with radiologist review included in 2–12 hours. Setup takes under one week via standard DICOM integration, with no minimum volume commitment. This gives small hospitals access to 24/7 CT coverage at predictable per-study cost, without any hiring or credentialing process."
              }
            },
            {
              "@type": "Question",
              "name": "What does radiology coverage cost for a small hospital?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A small hospital reading 2,000–5,000 CT studies per year faces annual radiology coverage costs ranging from $200,000–$1.2 million depending on the model: in-house radiologist ($450K–$600K salary plus benefits), locum radiologist ($500K–$650K equivalent), traditional teleradiology ($80K–$800K at $40–$160/study plus after-hours surcharges), or AI CT reporting at narrow AI rates with no surcharge. AI CT reporting typically reduces coverage costs by 40–70% compared to locum or traditional teleradiology for small hospitals."
              }
            },
            {
              "@type": "Question",
              "name": "What is a critical access hospital and what are its radiology challenges?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Critical Access Hospital (CAH) is a rural hospital designated by CMS with 25 or fewer acute care inpatient beds. CAHs face intense radiology coverage pressure: geographic isolation makes recruiting radiologists nearly impossible, and CMS reimbursement rates make high-cost locum and teleradiology models financially unsustainable. AI CT reporting offers a viable alternative: per-study pricing, no after-hours surcharge, setup under one week, and HIPAA-compliant US-based infrastructure."
              }
            },
            {
              "@type": "Question",
              "name": "Can AI replace a teleradiology service at a small hospital?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. AI CT reporting services deliver the same output as traditional teleradiology — a ready-to-sign CT report reviewed by our in-house European radiologist — at lower per-study cost, with no after-hours surcharge, and with 95% accuracy verified by peer-reviewed studies. The integration uses the same DICOM/HL7 interface as existing teleradiology providers, making the transition operationally straightforward for most small hospital IT teams."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to set up AI CT reporting at a small hospital?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard DICOM integration for AI CT reporting typically takes under one week. The process requires a PACS administrator to configure a DICOM push to the AI provider's PACS; reports return via HL7 into the hospital's existing system. A dedicated onboarding contact manages the integration. Most small hospitals complete setup with 2–4 hours of IT time total."
              }
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": "AI Radiology for Small and Community Hospitals 2026", "item": "https://xaid.ai/blog/ai-radiology-for-small-hospitals-2026" }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        <article className="pt-24">
          {/* Header */}
          <header className="section-padding pb-0">
            <div className="container-xaid max-w-3xl mx-auto">
              <div className="mb-6">
                <Link to="/blog/" className="text-white/60 hover:text-white/60 text-[15px] font-light transition-colors">← Blog</Link>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">Operations</span>
                <span className="text-white/60 text-xs">March 19, 2026</span>
                <span className="text-white/60 text-xs">9 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                AI Radiology for Small and Community Hospitals 2026: Coverage Options, Costs, and Implementation
              </h1>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-8">
                Small hospitals and critical access hospitals face the same radiology coverage problem: impossible to recruit a full-time radiologist, locum rates eat the budget, and traditional teleradiology after-hours surcharges make 24/7 CT coverage unaffordable. Here's what the options actually look like in 2026 — and what's working.
              </p>
            </div>
          </header>

          {/* Body */}
          <div className="section-padding">
            <div className="container-xaid max-w-3xl mx-auto">

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">The small hospital radiology coverage problem</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                There are approximately 1,300 Critical Access Hospitals (CAHs) in the United States, plus thousands of additional small community and rural hospitals. For all of them, radiology coverage follows the same painful math: CT volume doesn't justify a full-time radiologist, locum costs exceed budget, and traditional teleradiology contracts include after-hours surcharges that add 30–100% to read costs.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                The result is predictable: coverage gaps, delayed reads, or paying rates that compress an already thin margin. The AAMC projects a shortage of 54,100–139,000 physicians by 2034 — with radiology among the hardest-hit specialties. In rural and small-hospital markets, that shortage already exists.
              </p>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">The four coverage models — and what they actually cost</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                For a small hospital reading 3,000 CT studies per year, annual coverage costs vary significantly by model.
              </p>

              <div className="table-scroll table-scroll--light overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-white/60 font-medium">Coverage Model</th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">Annual Cost (3K studies)</th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">After-Hours</th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">Setup Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: 'In-house radiologist', cost: '$450K–$600K', afterhours: 'No surcharge (fixed)', setup: '12+ months to recruit' },
                      { model: 'Locum radiologist', cost: '$500K–$650K equiv.', afterhours: '30–50% premium', setup: 'Weeks to schedule' },
                      { model: 'Traditional teleradiology', cost: '$120K–$480K', afterhours: '30–100% surcharge', setup: '2–6 weeks' },
                      { model: 'AI CT reporting (xAID)', cost: 'Narrow AI rates', afterhours: '$0 — flat rate', setup: 'Under 1 week' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-white/10 ${i === 3 ? 'bg-xaid-blue/10' : ''}`}>
                        <td className={`py-3 px-4 font-medium ${i === 3 ? 'text-xaid-blue' : 'text-white'}`}>{row.model}</td>
                        <td className="py-3 px-4 text-white/70">{row.cost}</td>
                        <td className={`py-3 px-4 ${i === 3 ? 'text-xaid-blue font-medium' : i < 3 ? 'text-red-400' : 'text-white/70'}`}>{row.afterhours}</td>
                        <td className="py-3 px-4 text-white/70">{row.setup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-xs">Source: Published teleradiology rate ranges; AAMC workforce data. Costs vary by volume, geography, and provider.</p>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Option 1: In-house radiologist</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                Hiring a full-time radiologist costs $450,000–$600,000 per year in salary and benefits, before accounting for malpractice insurance. In 2026, the average radiologist job takes 4–6 months to fill nationally; in rural markets, positions can remain open for over a year.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                For a small hospital reading under 5,000 CT studies per year, a full-time radiologist is also inefficient — you're paying a fixed cost for variable volume. After-hours coverage becomes a second problem: a single in-house radiologist can't provide true 24/7 availability without call pay or scheduling complexity.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                <strong className="text-white">When this works:</strong> Hospitals with high CT volume (10,000+ studies/year), competitive geographic markets for recruiting, and the administrative resources to manage a physician employee.
              </p>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Option 2: Locum radiologist</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                Locum radiology rates typically run $200–$250 per hour, with after-hours and weekend availability costing significantly more. For full-time equivalent coverage of a small hospital, annual locum costs approach $500,000–$650,000 — comparable to an in-house hire, but without the stability. Schedule gaps, last-minute cancellations, and credentialing requirements at each facility add operational overhead.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                <strong className="text-white">When this works:</strong> Short-term coverage gaps, maternity/medical leave backfill, or high-volume facilities that occasionally need additional capacity. Not a sustainable primary coverage model for most small hospitals.
              </p>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Option 3: Traditional teleradiology</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                Traditional teleradiology services charge $40–$160 per routine study and add 30–100% surcharges for after-hours reads. For a small hospital where 40–50% of emergency CT reads happen after hours, those surcharges significantly increase effective per-study cost.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                A hospital sending 3,000 CT studies per year to a teleradiology provider at $60 per routine study and $90 per after-hours study (50% after-hours at 50% surcharge) pays approximately $225,000 annually — before any STAT fees or premium service tiers. Contracts typically require volume commitments and multi-year agreements.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                There is no quality guarantee from any major US teleradiology provider. Report accuracy is assumed but not contractually guaranteed.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                <strong className="text-white">When this works:</strong> Established facilities with predictable daytime volume, existing teleradiology relationships, and adequate IT infrastructure for provider integration. After-hours cost is the main constraint to evaluate.
              </p>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Option 4: AI CT reporting</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                AI CT reporting services deliver the same output as traditional teleradiology — a complete, ready-to-sign CT report reviewed by our in-house European radiologist — at lower per-study cost and with no after-hours premium. The two-AI-layer approach (foundation model + secondary verification) generates 100+ finding flags per study, which the radiologist reviews before delivery.
              </p>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                The key difference for small hospitals is the economic structure:
              </p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">No after-hours surcharge</strong> — flat per-study rate at any hour</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">No minimum volume commitment</strong> — per-study pricing only</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">95% accuracy</strong> — verified by peer-reviewed studies (the only AI CT reporting service with published clinical evidence)</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Setup under one week</strong> — standard DICOM integration, 2–4 hours of IT time</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">HIPAA compliant</strong> — ISO 27001 certified, BAA available</li>
              </ul>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                Clinical evidence for the AI layer: xAID achieves 95% accuracy verified by independent peer-reviewed studies — the only AI CT reporting service with published clinical evidence. Full study details are available at <Link to="/accuracy/" className="text-xaid-blue-strong hover:underline">xaid.ai/accuracy</Link>.
              </p>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Critical Access Hospital (CAH) considerations</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                Critical Access Hospitals have specific constraints that make per-study AI reporting particularly well-suited:
              </p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">CMS cost-based reimbursement</strong> — CAHs receive 101% of reasonable costs for outpatient services, which includes radiology interpretation. Per-study AI pricing maps directly to this billing model.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Geographic isolation</strong> — Rural market recruiting timelines can exceed 18 months for radiologists. AI reporting eliminates the recruiting dependency entirely.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Emergency CT reads</strong> — CAHs divert complex emergency cases to regional centers, but routine emergency CTs (head trauma, PE rule-out, abdominal pain) still require coverage. A 2–12 hour TAT is appropriate for most CAH emergency CT workflows.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">IT constraints</strong> — Many CAHs operate with limited IT staff. Under-one-week DICOM integration that requires only PACS configuration is manageable for most CAH IT environments.</li>
              </ul>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Implementation: how a small hospital switches</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                The operational transition from teleradiology to AI CT reporting mirrors a teleradiology provider change — same DICOM interface, same HL7 output format, same radiologist workflow. The five steps:
              </p>
              <ol className="list-decimal pl-5 my-4 space-y-2">
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Sign BAA</strong> — Business Associate Agreement executed before any PHI is transmitted. Standard hospital procurement step.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Configure DICOM push</strong> — PACS administrator sets up outbound DICOM routing to the AI provider's endpoint. Typically 1–2 hours of IT work.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Configure HL7 receive</strong> — RIS/PACS configured to receive preliminary reports via HL7. Another 1–2 hours.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Run pilot studies</strong> — 5–10 CT studies sent and reports reviewed before full go-live. Quality validation before volume commitment.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Go live</strong> — All CT studies route to AI CT reporting. Existing teleradiology contract wound down per notice period.</li>
              </ol>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Quality and compliance</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                Hospital compliance officers and CMOs evaluating AI CT reporting typically ask the same questions:
              </p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Is a licensed radiologist signing every report?</strong> Yes — in AI CT reporting, the radiologist reviews the AI output and signs off. The AI does not issue reports autonomously.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Is it HIPAA compliant?</strong> Yes — US-based infrastructure only, BAA available, zero-footprint viewers, ISO 27001 certified.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">Is there published accuracy data?</strong> xAID has 95% accuracy verified by peer-reviewed studies. No traditional teleradiology provider publishes equivalent evidence.</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]"><strong className="text-white">What's the turnaround time SLA?</strong> 2–12 hours for routine reads, with configurable SLA tiers. Critical findings trigger urgent radiologist review.</li>
              </ul>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">The bottom line for small hospitals</h2>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                For a small hospital or critical access hospital reading 2,000–6,000 CT studies per year, AI CT reporting represents the most cost-effective path to 24/7 radiologist-reviewed CT coverage in 2026:
              </p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li className="text-white/60 text-[15px] font-light leading-[1.65]">40–70% lower annual cost than locum or traditional teleradiology (before after-hours surcharge savings)</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]">No hiring timeline — from contract to first report in under one week</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]">No volume commitment — scale up or down as census changes</li>
                <li className="text-white/60 text-[15px] font-light leading-[1.65]">95% accuracy verified by peer-reviewed studies — the only AI CT reporting service with published clinical evidence</li>
              </ul>
              <p className="text-white/60 text-[15px] font-light leading-[1.65] mb-4">
                The free 5-study pilot lets hospital administrators and CMOs validate report quality against their clinical standards before any contract change — same DICOM integration, no volume requirement.
              </p>

              <h2 className="text-[22px] font-medium text-white leading-[1.3] mt-10 mb-3">Frequently asked questions</h2>
              <div className="space-y-4 mt-6">
                {[
                  {
                    q: 'How can a small hospital get radiology coverage without hiring a radiologist?',
                    a: 'AI CT reporting services provide per-study coverage at a fraction of hiring cost. Every report is reviewed by our in-house European radiologist. Setup takes under one week via standard DICOM integration, with no minimum volume or long-term commitment.'
                  },
                  {
                    q: 'What does radiology coverage cost for a small hospital?',
                    a: 'A hospital reading 3,000 CT studies per year pays approximately $225,000–$480,000 per year for traditional teleradiology, or $500,000–$650,000 equivalent for locum coverage. AI CT reporting typically reduces that cost by 40–70%, with no after-hours surcharge and no minimum volume floor.'
                  },
                  {
                    q: 'What is a Critical Access Hospital and what are its radiology options?',
                    a: 'A Critical Access Hospital (CAH) is a CMS-designated rural hospital with 25 or fewer acute care beds. CAHs face acute radiologist staffing shortages due to geographic isolation. AI CT reporting with per-study pricing and no volume minimums is particularly well-suited to CAH workflows and CMS cost-based reimbursement.'
                  },
                  {
                    q: 'Can AI CT reporting replace teleradiology for a small hospital?',
                    a: 'Yes. AI CT reporting delivers the same output as teleradiology — a complete, radiologist-reviewed preliminary report — at lower cost, with no after-hours surcharge, and with a quality guarantee. The integration uses the same DICOM/HL7 interface as existing teleradiology providers.'
                  },
                  {
                    q: 'How long does integration take for a small hospital?',
                    a: 'Standard DICOM integration takes under one week, requiring approximately 2–4 hours of IT time from a PACS administrator. No new hardware is required. A dedicated onboarding contact manages the process end-to-end.'
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-white/10 rounded-xl p-5">
                    <h3 className="text-white font-medium mb-2 text-[18px] leading-[1.3]">{item.q}</h3>
                    <p className="text-white/60 text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Related */}
          <section className="section-padding bg-white/5">
            <div className="container-xaid max-w-3xl mx-auto">
              <h2 className="text-[18px] font-medium text-white leading-[1.3] mb-6">Related resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/for-small-hospitals/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">For Small Hospitals</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT Reporting for Small & Community Hospitals</div>
                </Link>
                <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">Cost analysis</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Radiology Coverage Costs 2026 — Full Breakdown</div>
                </Link>
                <Link to="/blog/after-hours-radiology-coverage-options/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">After-Hours</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">After-Hours Radiology Coverage Options 2026</div>
                </Link>
              </div>
            </div>
          </section>

        </article>
      </div>
    </>
  );
};

export default SmallHospitalRadiology;
