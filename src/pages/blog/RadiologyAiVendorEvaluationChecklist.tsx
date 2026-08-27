import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyAiVendorEvaluationChecklist = () => {
  const post = {
    title: "ECRI's New AI Error Tracker Changes the Radiology AI Vendor Evaluation Checklist",
    dateIso: '2026-08-27',
    date: 'August 27, 2026',
    category: 'Buyer Guide',
    readingTime: 7,
    description: "ECRI now tracks AI errors and near-misses across every AI vendor. Here's what belongs on your radiology AI vendor evaluation checklist now.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology AI Vendor Evaluation Checklist | xAID</title>
        <meta name="description" content="ECRI now tracks AI errors and near-misses across every AI vendor. Here's what belongs on your radiology AI vendor evaluation checklist now." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-ai-vendor-evaluation-checklist/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology AI Vendor Evaluation Checklist | xAID" />
        <meta property="og:description" content="ECRI now tracks AI errors and near-misses across every AI vendor. Here's what belongs on your radiology AI vendor evaluation checklist now." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology AI Vendor Evaluation Checklist | xAID" />
        <meta name="twitter:description" content="ECRI now tracks AI errors and near-misses across every AI vendor. Here's what belongs on your radiology AI vendor evaluation checklist now." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-ai-vendor-evaluation-checklist/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-ai-vendor-evaluation-checklist/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology ai vendor evaluation checklist, ECRI problem reporting network, AI error reporting healthcare, radiology AI postmarket surveillance, radiology AI vendor due diligence"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is ECRI's Problem Reporting Network?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ECRI is an independent, nonprofit patient-safety organization. Its Problem Reporting Network, running since 1972, accepts free, confidential reports from healthcare providers about device and technology problems; ECRI's clinical and engineering staff triage and investigate submissions and issue hazard reports to manufacturers, providers, and regulators. On August 25, 2026, ECRI announced it expanded the network to specifically capture and investigate errors, malfunctions, and near misses involving AI tools and AI-enabled devices used in patient care, including radiology and other diagnostic imaging applications."
              }
            },
            {
              "@type": "Question",
              "name": "How is ECRI's AI error tracking different from FDA clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FDA clearance (typically via the 510(k) or De Novo pathway) is a premarket review — it evaluates a device before it reaches the market and does not continuously track how it performs in day-to-day clinical use. ECRI's Problem Reporting Network is a postmarket, cross-vendor channel: it collects real-world reports of AI errors and near-misses after a tool is already deployed, independent of any single vendor's internal QA program, and can escalate hazard findings to manufacturers and to regulators including the FDA."
              }
            },
            {
              "@type": "Question",
              "name": "What did ECRI's survey find about AI errors in hospitals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a survey of 124 hospital quality, safety, risk, and compliance leaders that ECRI cited alongside the expansion, 31% said they had encountered an AI output they believed was incorrect or misleading in the past year, and 9% said an AI error actually reached a patient or affected a care decision. Another 35% said they were unsure whether an AI-related error had occurred — which ECRI points to as evidence that AI mistakes are often hard to detect in real time. The most commonly flagged tools were ambient scribes (37%), EHR-embedded clinical decision support (31%), and clinical LLM assistants or chatbots (31%)."
              }
            },
            {
              "@type": "Question",
              "name": "What should buyers ask a radiology AI vendor now?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Beyond FDA clearance status, buyers should ask whether a vendor participates in independent postmarket error tracking such as ECRI's Problem Reporting Network, how the vendor captures and escalates its own errors and near-misses, and — critically — what the human-review safety net is when the AI is wrong. A workflow where a radiologist reviews every AI-drafted report before it reaches a signing physician is a structural answer to the exact failure mode ECRI's network is now built to catch."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">

        {/* Header */}
        <section className="pt-32 md:pt-40 pb-10">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link to="/blog/" className="text-white/60 hover:text-white/60 text-[15px] font-light transition-colors">← Blog</Link>
              <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                Buyer Guide
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              ECRI just built a cross-vendor error tracker for clinical AI.<br />
              <span className="text-white/60">Here's what to ask your radiology AI vendor now.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new, independent channel for reporting AI errors and near-misses in patient care — including in imaging — moves the vendor-evaluation question past "is it FDA-cleared" to "what happens when it's wrong."
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '31%', label: 'Saw a misleading AI output', sub: 'in the past year' },
            { stat: '9%', label: 'AI error reached a patient', sub: 'or affected a care decision' },
            { stat: '35%', label: 'Were unsure', sub: 'if an AI error occurred' },
            { stat: '1972', label: "ECRI's network founded", sub: 'now expanded to AI tools' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What ECRI just changed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15833340/ecri-expands-reporting-network-to-track-ai-errors-in-patient-care" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ECRI</a>, the independent, nonprofit patient-safety organization, has run a Problem Reporting Network since 1972 — a free, confidential channel where clinicians and health systems can report device and technology problems. ECRI's clinical and engineering staff triage and investigate what comes in, then issue hazard reports back to manufacturers, providers, and regulators when they find a real safety risk.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 25, 2026, ECRI <a href="https://www.prnewswire.com/news-releases/ecri-expands-problem-reporting-network-and-calls-for-more-data-on-ai-errors-in-patient-care-302859649.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announced it expanded</a> that network specifically to capture and investigate errors, malfunctions, and near misses involving AI tools and AI-enabled devices in patient care — explicitly including diagnostic imaging, alongside areas like clinical decision support and ambient documentation. The pathway is cross-vendor by design: it accepts reports on any AI tool a provider encounters, not just products from organizations that opt in.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                ECRI paired the expansion with survey data underscoring why it thinks the gap needs filling. Of 124 hospital quality, safety, risk, and compliance leaders ECRI surveyed, <strong>31%</strong> said they'd encountered an AI output they believed was incorrect or misleading in the past year, and <strong>9%</strong> said an AI error actually reached a patient or affected a care decision. Another <strong>35%</strong> said they simply weren't sure whether an error had occurred. "Although we appreciate AI's tremendous potential, we don't yet have a clear picture of its downstream impact in healthcare," Scott Lucas, PhD, ECRI's vice president of devices, therapeutics, and technology, said in the announcement. The tools respondents flagged most often were ambient scribes (37%), EHR-embedded clinical decision support (31%), and clinical LLM assistants or chatbots (31%).
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Premarket clearance and postmarket tracking are two different questions
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                FDA clearance answers one question: does the evidence submitted before launch support the device's claims well enough to reach the market. It doesn't answer a second, separate question: how the tool actually performs, week after week, once it's running on real patients across different sites, protocols, and case mixes. Historically, that second question has mostly been answered by each vendor's own internal QA program — reported, if at all, on the vendor's own terms.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                ECRI's expanded network is the first independent, cross-vendor channel built specifically to catch that gap for healthcare AI: a postmarket surveillance mechanism that sits outside both the FDA's premarket process and any single vendor's QA loop, with the explicit goal of building a shared, de-identified picture of where clinical AI is actually failing. It follows ECRI's own March 2026 <em>Top 10 Patient Safety Concerns</em> report, which ranked AI diagnostic risk as its top concern for the year — citing, among other findings, that some machine learning models <a href="https://healthjournalism.org/blog/2026/03/ai-diagnostic-risks-top-ecris-2026-patient-safety-concerns/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">failed to recognize 66% of critical or deteriorating conditions</a> in simulated cases, and that certain cancers and rare diseases remain particularly hard for AI to catch in imaging studies. (In a separate annual list, ECRI's <em>Top 10 Health Technology Hazards</em>, misuse of AI chatbots — not diagnostic imaging AI — topped the 2026 ranking.)
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The vendor-evaluation question this changes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For a hospital or imaging center evaluating an AI-reporting vendor, "is it FDA-cleared" has been the default first question for years. It's still worth asking — but on its own it only tells you the tool passed a premarket bar, not how it behaves in production or what happens the day it produces a wrong or misleading output. ECRI's expansion gives buyers a second, more operational question to add: does this vendor's category participate in independent postmarket error tracking, and separately, what is the vendor's own answer for what happens when the AI is wrong.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Old checklist question</th>
                      <th className="text-left py-3 text-[#0D0D0D] font-medium">Better question after ECRI's expansion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Is the AI FDA-cleared?', "Is it FDA-cleared, and is the vendor's category subject to independent postmarket error tracking (e.g., ECRI's Problem Reporting Network)?"],
                      ["What's the AI's accuracy on a validation set?", 'How does the vendor capture and act on errors and near-misses that surface in live clinical use, not just at launch?'],
                      ['Does a radiologist "review" the output?', 'What specifically happens before a report reaches a signing radiologist when the AI draft is wrong?'],
                      ['Who is liable if the AI errs?', "If an error occurred here, would it be the kind of incident ECRI's network is now built to catch — and would the vendor support reporting it?"],
                    ].map(([oldQ, newQ]) => (
                      <tr key={oldQ} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#666] font-light align-top">{oldQ}</td>
                        <td className="py-3 text-[#666] font-light align-top">{newQ}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this replaces FDA clearance as a baseline requirement. It adds a second layer: evidence that a vendor's category is being watched after deployment, not only before it, and clarity on the human step that catches an error before it reaches a patient's chart.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                ECRI's network is built to catch the failure mode that matters most in a story like this: an AI output that's wrong and reaches a patient with no human check in between. That's the exact gap a radiologist-in-the-loop workflow is designed to close. With xAID, the AI produces a structured draft, xAID's in-house radiologist reviews every preliminary, and the report is delivered ready-to-sign — your reading radiologist signs the final. Independent postmarket tracking like ECRI's is a valuable external check on the industry; a documented human-review step before a report ever reaches a chart is the structural safeguard for any single case.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is ECRI's Problem Reporting Network?",
                    a: "ECRI is an independent, nonprofit patient-safety organization. Its Problem Reporting Network, running since 1972, accepts free, confidential reports from healthcare providers about device and technology problems; ECRI's clinical and engineering staff triage and investigate submissions and issue hazard reports to manufacturers, providers, and regulators. On August 25, 2026, ECRI announced it expanded the network to specifically capture and investigate errors, malfunctions, and near misses involving AI tools and AI-enabled devices used in patient care, including radiology and other diagnostic imaging applications.",
                  },
                  {
                    q: "How is ECRI's AI error tracking different from FDA clearance?",
                    a: "FDA clearance (typically via the 510(k) or De Novo pathway) is a premarket review — it evaluates a device before it reaches the market and does not continuously track how it performs in day-to-day clinical use. ECRI's Problem Reporting Network is a postmarket, cross-vendor channel: it collects real-world reports of AI errors and near-misses after a tool is already deployed, independent of any single vendor's internal QA program, and can escalate hazard findings to manufacturers and to regulators including the FDA.",
                  },
                  {
                    q: "What did ECRI's survey find about AI errors in hospitals?",
                    a: "In a survey of 124 hospital quality, safety, risk, and compliance leaders that ECRI cited alongside the expansion, 31% said they had encountered an AI output they believed was incorrect or misleading in the past year, and 9% said an AI error actually reached a patient or affected a care decision. Another 35% said they were unsure whether an AI-related error had occurred — which ECRI points to as evidence that AI mistakes are often hard to detect in real time. The most commonly flagged tools were ambient scribes (37%), EHR-embedded clinical decision support (31%), and clinical LLM assistants or chatbots (31%).",
                  },
                  {
                    q: 'What should buyers ask a radiology AI vendor now?',
                    a: "Beyond FDA clearance status, buyers should ask whether a vendor participates in independent postmarket error tracking such as ECRI's Problem Reporting Network, how the vendor captures and escalates its own errors and near-misses, and — critically — what the human-review safety net is when the AI is wrong. A workflow where a radiologist reviews every AI-drafted report before it reaches a signing physician is a structural answer to the exact failure mode ECRI's network is now built to catch.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15833340/ecri-expands-reporting-network-to-track-ai-errors-in-patient-care" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, "ECRI expands reporting network to track AI errors in patient care" (August 2026); ECRI, <a href="https://www.prnewswire.com/news-releases/ecri-expands-problem-reporting-network-and-calls-for-more-data-on-ai-errors-in-patient-care-302859649.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"ECRI Expands Problem Reporting Network and Calls for More Data on AI Errors in Patient Care"</a> (PR Newswire, August 25, 2026); Association of Health Care Journalists, <a href="https://healthjournalism.org/blog/2026/03/ai-diagnostic-risks-top-ecris-2026-patient-safety-concerns/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"AI diagnostic risks top ECRI's 2026 patient safety concerns"</a> (March 2026). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI drafts. A radiologist reviews. Ready to sign."
          sub="That's the human-review safety net ECRI's network is built to check for. Try it on 5 free studies."
          primaryLabel="Request free pilot"
          primaryTo="/#contact-us"
          secondaryLabel="See how it works"
          secondaryTo="/how-ai-ct-reporting-works/"
        />

        {/* Related */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/coalition-for-health-ai-vendor-security-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CHAI's Security Work Group: A Vendor Checklist for Imaging Centers</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
              <Link to="/blog/how-to-choose-a-teleradiology-company/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How to Choose a Teleradiology Company: A Buyer's Guide</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyAiVendorEvaluationChecklist;
