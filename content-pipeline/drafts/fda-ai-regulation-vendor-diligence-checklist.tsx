import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaAiRegulationVendorDiligenceChecklist = () => {
  const post = {
    title: "FDA AI Regulation Is Still Unsettled — What to Ask an Imaging AI Vendor While It Gets Sorted Out",
    dateIso: '2026-08-19',
    date: 'August 19, 2026',
    category: 'Regulatory & Compliance',
    readingTime: 8,
    description: "Radiology Partners' Mosaic unit just petitioned the FDA for clarity on imaging AI rules, and the FDA itself opened a discussion paper on regulating generative AI devices. Here's what that ambiguity means when you're evaluating an AI-reporting vendor today.",
  };

  const canonical = 'https://xaid.ai/blog/fda-ai-regulation-vendor-diligence-checklist/';

  return (
    <>
      <Helmet defer={false}>
        <title>FDA AI Regulation Unsettled — Vendor Diligence Guide | xAID</title>
        <meta name="description" content="Radiology Partners petitioned the FDA for imaging-AI clarity while FDA opened its own genAI discussion paper — what that means for vetting AI vendors." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA AI Regulation Unsettled — Vendor Diligence Guide | xAID" />
        <meta property="og:description" content="Radiology Partners petitioned the FDA for imaging-AI clarity while FDA opened its own genAI discussion paper — what that means for vetting AI vendors." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA AI Regulation Unsettled — Vendor Diligence Guide | xAID" />
        <meta name="twitter:description" content="Radiology Partners petitioned the FDA for imaging-AI clarity while FDA opened its own genAI discussion paper — what that means for vetting AI vendors." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": canonical,
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fda ai regulation, imaging ai vendor diligence, radiology ai fda clearance, generative ai medical devices, radiology ai regulatory pathway"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Radiology Partners' Mosaic unit ask the FDA for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On August 12, 2026, Mosaic Clinical Technologies — Radiology Partners' technology and AI division — filed a citizen petition asking the FDA to clarify how existing medical device rules apply to vision-language models used for diagnostic image analysis, including whether models marketed for institution-specific fine-tuning count as medical devices requiring premarket clearance, and to set consistent standards for validating performance, transparency, and quality management across vendors."
              }
            },
            {
              "@type": "Question",
              "name": "Is the FDA also reviewing how it regulates generative AI medical devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. On August 18, 2026, the FDA's Digital Health Center of Excellence issued a discussion paper seeking public feedback on regulating generative AI-enabled medical devices, covering risk assessment, premarket evaluation, postmarket monitoring, and considerations specific to foundation models and agentic AI. Comments are open under docket FDA-2026-N-7874 through October 19, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "What should an imaging center ask an AI-reporting vendor about FDA clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask which specific product and version holds FDA clearance or authorization, what device category and intended use it covers, whether newer generative or fine-tuned capabilities were included in that clearance or added afterward, and how the vendor validates and monitors performance after deployment. A vendor should be able to answer all four without hedging."
              }
            },
            {
              "@type": "Question",
              "name": "Does regulatory ambiguity mean AI-reporting tools are unsafe to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Ambiguity is about how new categories of AI models get classified and reviewed going forward, not a finding that deployed tools are unsafe. The practical de-risking factor for buyers is workflow design: a radiologist-in-the-loop model, where a qualified physician reviews every AI-drafted report before it is signed, keeps clinical accountability with a human regardless of how a given model's regulatory classification eventually shakes out."
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
                Regulatory &amp; Compliance
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              FDA AI regulation is still unsettled.<br />
              <span className="text-white/60">Here's what to ask a vendor while it gets sorted out.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A major radiology group just told the FDA its own imaging-AI rules are unclear — and the FDA agrees enough to open its own comment period. For imaging centers evaluating an AI-reporting vendor right now, that gap isn't background noise. It's a due-diligence checklist.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Aug 12, 2026', label: 'Mosaic files FDA petition', sub: 'on imaging AI/VLM clarity' },
            { stat: 'Aug 18, 2026', label: 'FDA opens genAI discussion paper', sub: 'docket FDA-2026-N-7874' },
            { stat: 'Oct 19, 2026', label: 'Public comment deadline', sub: 'on FDA\'s discussion paper' },
            { stat: '1,094', label: 'Radiology AI devices ever cleared', sub: '76.5% of all FDA AI/ML devices' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two things happened the same week
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 12, 2026, Mosaic Clinical Technologies — the technology and AI division of Radiology Partners — filed a citizen petition asking the FDA to clarify how existing medical device rules apply to vision-language models (VLMs) used for diagnostic image analysis, according to <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-partners-petitions-fda-greater-clarity-around-imaging-ai-regulations" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. Mosaic's petition specifically asks the FDA to determine whether models marketed for institution-specific fine-tuning constitute medical devices requiring premarket clearance, and to apply device requirements consistently across vendors rather than case by case.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Mike Peresie, Mosaic's president, put the problem plainly: "differing interpretations have emerged regarding the application of existing FDA medical device requirements, creating uncertainty for developers, healthcare organizations, clinicians and patients." He also added that models introduced without premarket review may not have demonstrated the baseline safety and effectiveness required for FDA authorization.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Six days later, on August 18, 2026, the FDA's own Digital Health Center of Excellence issued a discussion paper seeking public feedback on regulating generative AI-enabled medical devices — covering risk assessment, premarket evaluation, postmarket monitoring, and considerations specific to foundation models and agentic AI systems. The agency is taking comment under docket <a href="https://www.aha.org/news/headline/2026-08-18-fda-seeks-feedback-potential-regulatory-approaches-generative-ai-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA-2026-N-7874</a> through October 19, 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two organizations, one week, the same underlying question: what does it mean for a generative or foundation-model-based imaging AI tool to be "cleared," and does today's framework — built for narrower, single-purpose CAD software — actually fit these newer models. Neither the petition nor the discussion paper changes what's cleared today. What they confirm is that the category itself is still being defined, which is exactly the kind of moment where a buyer needs sharper questions, not fewer.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this isn't the first time the FDA has pushed back
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Mosaic's ask is narrower and more conservative than it might first appear — it's requesting clarity on what requires review, not less review. That's a notable contrast with an earlier, separate petition: in April 2026 the FDA denied a citizen petition (filed by another radiology AI vendor) that had asked to exempt certain CAD device types from new 510(k) submissions when a manufacturer already held a prior clearance in that category, according to <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15822031/fda-strikes-down-radiology-ai-510k-exemption-arguments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. The agency's response letter rejected the idea that a manufacturer's track record with one device type automatically demonstrates the processes needed to safely evaluate future devices, noting that CADe, CADx, and combined CADe/x software "cannot be treated interchangeably." More than 45 public comments were filed on that petition, most opposed.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read together, the two episodes point the same direction: the FDA is not loosening premarket review for imaging AI, and it is actively being asked — by industry itself, from more than one direction — to say more clearly where the lines are for newer model types. That is the regulatory environment any imaging AI purchase is being made in today.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The scale of what's already been cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This isn't a new or fringe category. An analysis of FDA authorizations from September 1995 through December 2025, reported by <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15830219/radiology-dominates-thirty-years-of-fda-ai-device-approvals" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>, found 1,430 AI/ML-enabled devices cleared or authorized in total, with radiology accounting for 1,094 of them — 76.5% of everything the FDA has authorized in this space. The pace has accelerated sharply: from an average of about 1.8 authorizations a year between 1995 and 2014 to roughly 264 a year between 2023 and 2025, with 331 authorizations in 2025 alone. Radiology, cardiovascular, and neurology together made up 90.6% of all AI/ML device authorizations. The infrastructure for reviewing imaging AI is mature; what's unsettled is specifically how that infrastructure applies to generative and foundation-model-based tools, which behave differently from the narrower detection and triage software the framework was originally built around.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this actually changes for a buyer evaluating an AI-reporting vendor
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Nothing changes about what's legally required today — a petition and a discussion paper are not new rules. What changes is how much weight vendor diligence should carry, because "FDA clearance" is not a single, uniform label. Three questions matter more than the marketing page:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'What, specifically, is cleared — and is it the version you\'d actually use?',
                    desc: 'A clearance attaches to a specific device, intended use, and version — not to a company or a product family. Ask the vendor to name the exact 510(k) or De Novo number, the cleared indication, and whether the generative or drafting features you\'d be deploying were part of that submission or added afterward without a new filing.',
                  },
                  {
                    title: 'What risk category does the workflow actually fall into?',
                    desc: 'Detection/triage software (CADe, CADt), diagnostic software (CADx), and a report-drafting tool sit in different regulatory buckets with different evidentiary bars. A vendor should be able to explain, in plain terms, which bucket its product occupies and why — not just that it is "FDA cleared" in the abstract.',
                  },
                  {
                    title: 'How does the vendor validate and monitor performance after go-live?',
                    desc: 'FDA\'s discussion paper explicitly raises postmarket monitoring for generative AI as an open question. Ask what the vendor tracks post-deployment, how often models are updated, and how customers are notified when they are — regardless of what premarket pathway eventually applies to that update.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A quick reference for the diligence conversation
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                These are the categories a vendor's answers will typically fall into, and roughly what level of comfort each should give a buyer:
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Vendor answer pattern</th>
                      <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">What it signals</th>
                      <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Diligence response</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Names an exact clearance/authorization number and indication', 'Traceable regulatory record for the specific product', 'Verify it independently; confirm the version deployed matches'],
                      ['"Our platform is FDA cleared" with no specifics', 'Likely refers to one component, not every feature in use', 'Ask which specific capability the clearance covers'],
                      ['Positions the product as "not a device" / clinical decision support only', 'May be accurate, or may be an unresolved classification question', 'Ask how the vendor would respond if that determination changed'],
                      ['Describes a defined human-review step before any report leaves the system', 'Workflow-level safeguard independent of classification debates', 'Confirm who reviews, what they can change, and who is accountable for the final report'],
                    ].map(([pattern, signal, response]) => (
                      <tr key={pattern as string} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-[#444] font-medium text-xs">{pattern}</td>
                        <td className="py-3 px-4 text-[#666] text-xs">{signal}</td>
                        <td className="py-3 px-4 text-[#666] text-xs">{response}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The one factor that de-risks the ambiguity regardless of how it resolves
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Regulatory classification determines what a manufacturer must file and prove before market. It does not determine what happens in the reading room. Whatever the FDA eventually decides about foundation models and generative AI risk tiers, the workflow variable a buyer controls today is whether a qualified radiologist reviews every AI-drafted report before it becomes final. That's the model xAID is built on: AI produces a structured draft, xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign — accountability stays with a licensed physician no matter how a given model's regulatory pathway eventually gets classified. A vendor-diligence conversation that confirms this workflow detail is arguably more protective, right now, than a debate over which docket number applies.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What did Radiology Partners' Mosaic unit ask the FDA for?",
                    a: 'On August 12, 2026, Mosaic Clinical Technologies — Radiology Partners\' technology and AI division — filed a citizen petition asking the FDA to clarify how existing medical device rules apply to vision-language models used for diagnostic image analysis, including whether models marketed for institution-specific fine-tuning count as medical devices requiring premarket clearance, and to set consistent standards for validating performance, transparency, and quality management across vendors.',
                  },
                  {
                    q: 'Is the FDA also reviewing how it regulates generative AI medical devices?',
                    a: "Yes. On August 18, 2026, the FDA's Digital Health Center of Excellence issued a discussion paper seeking public feedback on regulating generative AI-enabled medical devices, covering risk assessment, premarket evaluation, postmarket monitoring, and considerations specific to foundation models and agentic AI. Comments are open under docket FDA-2026-N-7874 through October 19, 2026.",
                  },
                  {
                    q: 'What should an imaging center ask an AI-reporting vendor about FDA clearance?',
                    a: 'Ask which specific product and version holds FDA clearance or authorization, what device category and intended use it covers, whether newer generative or fine-tuned capabilities were included in that clearance or added afterward, and how the vendor validates and monitors performance after deployment. A vendor should be able to answer all four without hedging.',
                  },
                  {
                    q: 'Does regulatory ambiguity mean AI-reporting tools are unsafe to use?',
                    a: 'No. Ambiguity is about how new categories of AI models get classified and reviewed going forward, not a finding that deployed tools are unsafe. The practical de-risking factor for buyers is workflow design: a radiologist-in-the-loop model, where a qualified physician reviews every AI-drafted report before it is signed, keeps clinical accountability with a human regardless of how a given model\'s regulatory classification eventually shakes out.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-partners-petitions-fda-greater-clarity-around-imaging-ai-regulations" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (Mosaic/Radiology Partners FDA petition, August 2026); <a href="https://www.aha.org/news/headline/2026-08-18-fda-seeks-feedback-potential-regulatory-approaches-generative-ai-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Hospital Association</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15832741/fda-issues-discussion-paper-on-regulating-genai-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> (FDA discussion paper, docket FDA-2026-N-7874); <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15822031/fda-strikes-down-radiology-ai-510k-exemption-arguments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> (FDA denial of separate 510(k) exemption petition); <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15830219/radiology-dominates-thirty-years-of-fda-ai-device-approvals" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> (30-year FDA AI/ML device authorization analysis). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A radiologist reviews every report, by design"
          sub="Whatever the regulatory pathway, xAID's workflow puts a qualified radiologist between every AI draft and your final, ready-to-sign report. Try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Vendor Evaluation</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: A Buyer's Guide</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/is-ai-radiology-reporting-hipaa-compliant/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Compliance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Is AI Radiology Reporting HIPAA Compliant?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaAiRegulationVendorDiligenceChecklist;
