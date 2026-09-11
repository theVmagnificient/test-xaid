import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaGuidanceAiVendorChecklist = () => {
  const post = {
    title: "There's Still No FDA Guidance on AI Report-Drafting — A Checklist for Vetting a Vendor Anyway",
    dateIso: '2026-09-10',
    date: 'September 10, 2026',
    category: 'Regulatory & Compliance',
    readingTime: 8,
    description: "The FDA still has no finalized framework for generative-AI medical devices. Four open regulatory questions — validation, predicate devices, post-market monitoring, transparency — translated into a practical checklist for imaging centers vetting an AI-report-drafting vendor today.",
  };

  const canonical = 'https://xaid.ai/blog/fda-guidance-ai-vendor-checklist/';

  return (
    <>
      <Helmet defer={false}>
        <title>FDA Guidance on AI Is Unwritten — Vendor Checklist | xAID</title>
        <meta name="description" content="There's no finalized FDA guidance on AI report-drafting yet. A 4-part vendor checklist: validation, predicates, monitoring, transparency." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA Guidance on AI Is Unwritten — Vendor Checklist | xAID" />
        <meta property="og:description" content="There's no finalized FDA guidance on AI report-drafting yet. A 4-part vendor checklist: validation, predicates, monitoring, transparency." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA Guidance on AI Is Unwritten — Vendor Checklist | xAID" />
        <meta name="twitter:description" content="There's no finalized FDA guidance on AI report-drafting yet. A 4-part vendor checklist: validation, predicates, monitoring, transparency." />
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
          "keywords": "fda guidance on ai, fda generative ai medical devices, ai radiology vendor checklist, fda ai regulation imaging, ai report drafting fda"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is there finalized FDA guidance on AI report-drafting devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. As of September 2026, the FDA has authorized more than 1,500 AI-enabled medical devices overall, but none using generative AI in a regulated manner. The agency's August 2026 discussion paper on generative-AI-enabled devices explicitly is not draft or final guidance — it is a request for public feedback, with comments open under docket FDA-2026-N-7874 through October 19, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "What are the FDA's open questions about validating generative AI medical devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA's discussion paper proposes a competency-based approach, similar to how physicians are trained and evaluated, combining benchmarking against standardized test sets with clinical confirmation methods such as retrospective evaluation, shadow deployment, or prospective studies. It has not decided how much of that evidence should be required before a product reaches market."
              }
            },
            {
              "@type": "Question",
              "name": "Why do predicate devices matter for AI report-drafting tools?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most FDA-cleared AI/ML devices reach market via the 510(k) pathway by showing substantial equivalence to an existing predicate device — one 2025 review of 691 cleared AI/ML devices found 96.7% went through 510(k) and only 2.9% through the no-predicate De Novo pathway. Because no generative-AI report-drafting tool has been authorized as such yet, there is no established predicate for that category, which affects how a vendor's product can legally reach market and what evidence backs its clearance claims."
              }
            },
            {
              "@type": "Question",
              "name": "What should an imaging center ask an AI vendor about post-market monitoring and transparency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask how the vendor tracks model performance after deployment (re-benchmarking, drift detection, sample-based clinician review), how and when customers are notified of model updates, and what documentation exists on the underlying model's training and limitations. The FDA's discussion paper raises a voluntary 'foundation model device master file' concept for exactly this kind of disclosure, and proposes accepting more premarket uncertainty only where postmarket monitoring is strong."
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
              There's still no FDA guidance on AI report-drafting.<br />
              <span className="text-white/60">Here's a checklist for vetting a vendor anyway.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The FDA has authorized more than 1,500 AI-enabled medical devices — and none of them are generative AI, regulated as such. Four open questions about how that changes translate directly into what an imaging center or teleradiology group should ask before signing a contract.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,500+', label: 'AI devices FDA-authorized', sub: 'none yet as generative AI' },
            { stat: '26', label: 'Discussion questions posed', sub: 'FDA\'s Aug 2026 paper' },
            { stat: '96.7%', label: 'Cleared via 510(k) pathway', sub: 'i.e., needed a predicate' },
            { stat: 'Oct 19, 2026', label: 'Public comment deadline', sub: 'docket FDA-2026-N-7874' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The gap MedTech Dive just put a number on
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In September 2026, <a href="https://www.medtechdive.com/news/4-questions-about-the-fdas-approach-to-generative-ai/829871/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a> laid out four open questions about how the FDA plans to regulate generative AI in medical devices — what the category looks like today, what's new in the agency's discussion paper, whether industry actually wants guidance, and what patients and clinicians want. The framing understates how consequential the gap already is: the FDA has cleared more than 1,500 AI-enabled devices to date, but as of that reporting, none using generative AI in a regulated manner.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That doesn't mean generative AI is absent from imaging and clinical workflows — it means it's largely operating in a space the FDA hasn't yet drawn hard lines around. Several tools have received breakthrough device designation, a status that speeds up FDA interaction without constituting clearance: chest X-ray interpretation and radiology report-drafting features from an established radiology AI vendor, a similar report-drafting tool from a large radiology group's technology subsidiary, and a pathology image-analysis assistant from Modella AI. Meanwhile, plenty of AI features reach clinicians and patients without any FDA submission at all, when a vendor determines the function falls outside the device definition.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA's discussion paper actually proposes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 18, 2026, the FDA's Digital Health Center of Excellence released <em>Considerations for the Regulation of Generative AI-Enabled Medical Devices</em>, a discussion paper posing 26 questions to industry and the public under docket <a href="https://www.regulations.gov/docket/FDA-2026-N-7874" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA-2026-N-7874</a>, with comments open through October 19, 2026. The agency is explicit that the paper "does not represent draft or final guidance" — it's a request for input before any policy is set, according to <a href="https://www.thefdalawblog.com/2026/09/regulating-a-moving-target-fda-seeks-comments-on-possible-framework-for-regulation-of-genai/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The FDA Law Blog</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Three concepts in the paper are genuinely new territory for device regulation. <strong>Competency-based assessment</strong>, modeled loosely on how physicians are trained and evaluated, would combine high-throughput benchmarking with clinical confirmation methods of varying rigor — from retrospective evaluation up to prospective studies — rather than requiring one fixed evidence bar for every product. <strong>Foundation model device master files</strong> would let a model developer voluntarily share confidential architecture and training-data information with the FDA, similar to how drug ingredient makers already do, so a downstream device sponsor doesn't have to disclose a partner's proprietary model publicly to reference it in a submission. And <strong>enhanced post-market monitoring</strong> — periodic re-benchmarking, sample-based clinician review, drift detection — is floated as a trade-off: the agency may accept more premarket uncertainty if a company commits to watching the product closely after it ships. As one attorney told MedTech Dive, generative AI in medical devices is "a totally different beast" than the software the FDA's existing framework was built to review.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Industry is split on whether it even wants the guidance
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Reaction isn't uniform. Smaller and more risk-averse developers are, in MedTech Dive's framing, "dancing around the FDA-regulated space" — building administrative and workflow tools specifically designed to sit outside the device definition, because, as regulatory attorney Suzanne Levy Friedman put it, "no one really wants to be the guinea pig." Companies already committed to going through FDA review tend to want more clarity, not less: Aidoc's CEO, Elad Walach, called generative-AI-specific guidance helpful but not critical, while UpDoc CEO Sharif Vakili argued that regulatory leadership from the FDA matters most — without it, he said, companies face either a patchwork of inconsistent rules or bad actors and reactionary crackdowns. On the other side of the table, patient and clinician stakeholders want the opposite of a lighter touch: stronger post-market monitoring and, notably, FDA oversight extended to commercial AI chatbots currently outside its jurisdiction — a live concern given that roughly a quarter of large-language-model users report using them for mental health support, some of which falsely present themselves as licensed therapists.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Four open questions, translated into a vendor checklist
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this changes what's required today — a discussion paper isn't a rule. What it does is confirm that the questions a buyer should be asking an AI-report-drafting vendor right now map almost exactly onto the categories the FDA itself is still working through.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. Validation — what evidence backs the accuracy claim?',
                    desc: 'A marketing page citing an internal accuracy number is not the same as benchmarking against a defined test set plus clinical confirmation (retrospective evaluation, shadow deployment, or a prospective study). Ask which of these the vendor has actually done, on what population, and whether results are published or independently reviewed — not just quoted.',
                  },
                  {
                    title: '2. Predicate devices — what pathway did this specific product use?',
                    desc: 'Most AI/ML devices reach market by showing substantial equivalence to a prior predicate; almost none use the no-predicate De Novo route. Because no generative-AI report-drafting device has been authorized as such yet, ask a vendor point-blank whether its report-drafting capability is FDA-cleared at all, under what device category, and whether that clearance covers the generative features you would actually be using — or only an earlier, narrower version of the product.',
                  },
                  {
                    title: '3. Post-market monitoring — what happens after go-live?',
                    desc: "The FDA's own discussion paper treats postmarket monitoring as the safety valve for premarket uncertainty. Ask what the vendor tracks after deployment, how model updates are validated and communicated, and whether performance drift would even be detected before it affected a report.",
                  },
                  {
                    title: '4. Transparency — can the vendor explain what the model actually is?',
                    desc: "If a vendor relies on a third-party foundation model, ask whether that model's provenance, training data sourcing, and known limitations are documented anywhere a buyer or auditor can see — the same information the FDA's proposed device master file concept is meant to surface. A vendor who can't answer isn't necessarily unsafe, but the burden of proof shifts entirely to workflow safeguards.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How today's AI/ML device landscape actually looks, in evidence
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                A September 2025 review in <em>JAMA Health Forum</em> of 691 FDA-cleared AI/ML devices found the evidence base behind "FDA cleared" is thinner, and the predicate pathway more dominant, than the label alone suggests:
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Metric</th>
                      <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Finding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Cleared via 510(k) (needs a predicate)', '96.7% (668 of 691 devices)'],
                      ['Cleared via De Novo (no predicate exists)', '2.9% (20 of 691 devices)'],
                      ['Cleared via PMA (highest-evidence pathway)', '0.4% (3 of 691 devices)'],
                      ['Cited randomized clinical trial data', '1.6% (6 of 691 devices)'],
                      ['Reported actual patient health outcomes', '<1% (3 of 691 devices)'],
                      ['Did not report demographic representation of training data', '95.5% (660 of 691 devices)'],
                    ].map(([metric, finding]) => (
                      <tr key={metric as string} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-[#444] font-medium text-xs">{metric}</td>
                        <td className="py-3 px-4 text-[#666] text-xs">{finding}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of these devices are the generative-AI report-drafting tools this checklist is about — they're the broader AI/ML device base the FDA's existing framework was built around. That's exactly the point: even with a predicate pathway and 30 years of precedent, evidence reporting for "FDA cleared" AI devices is uneven today. A category with no predicate at all, and no finalized guidance, deserves at least that much scrutiny before it reaches your reading workflow.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits while the framework gets settled
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Regulatory classification determines what a vendor must file and prove before market — it doesn't determine what happens in the reading room. Whatever the FDA eventually decides about competency-based assessment, foundation model device master files, or how generative report-drafting tools get classified, the workflow variable a buyer controls today is whether a qualified radiologist stands between an AI draft and the final report. That's the model xAID runs on: the AI produces a structured draft, xAID's in-house radiologist reviews every preliminary, and the client's reading radiologist receives it ready-to-sign. A vendor conversation that confirms this kind of human-in-the-loop design is, right now, more protective than any single docket number.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Is there finalized FDA guidance on AI report-drafting devices?',
                    a: "No. As of September 2026, the FDA has authorized more than 1,500 AI-enabled medical devices overall, but none using generative AI in a regulated manner. The agency's August 2026 discussion paper on generative-AI-enabled devices explicitly is not draft or final guidance — it is a request for public feedback, with comments open under docket FDA-2026-N-7874 through October 19, 2026.",
                  },
                  {
                    q: "What are the FDA's open questions about validating generative AI medical devices?",
                    a: "The FDA's discussion paper proposes a competency-based approach, similar to how physicians are trained and evaluated, combining benchmarking against standardized test sets with clinical confirmation methods such as retrospective evaluation, shadow deployment, or prospective studies. It has not decided how much of that evidence should be required before a product reaches market.",
                  },
                  {
                    q: 'Why do predicate devices matter for AI report-drafting tools?',
                    a: 'Most FDA-cleared AI/ML devices reach market via the 510(k) pathway by showing substantial equivalence to an existing predicate device — one 2025 review of 691 cleared AI/ML devices found 96.7% went through 510(k) and only 2.9% through the no-predicate De Novo pathway. Because no generative-AI report-drafting tool has been authorized as such yet, there is no established predicate for that category, which affects how a vendor\'s product can legally reach market and what evidence backs its clearance claims.',
                  },
                  {
                    q: 'What should an imaging center ask an AI vendor about post-market monitoring and transparency?',
                    a: "Ask how the vendor tracks model performance after deployment (re-benchmarking, drift detection, sample-based clinician review), how and when customers are notified of model updates, and what documentation exists on the underlying model's training and limitations. The FDA's discussion paper raises a voluntary 'foundation model device master file' concept for exactly this kind of disclosure, and proposes accepting more premarket uncertainty only where postmarket monitoring is strong.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/4-questions-about-the-fdas-approach-to-generative-ai/829871/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a> ("4 questions about the FDA's approach to generative AI," September 2026); <a href="https://www.thefdalawblog.com/2026/09/regulating-a-moving-target-fda-seeks-comments-on-possible-framework-for-regulation-of-genai/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The FDA Law Blog</a> and <a href="https://innolitics.com/articles/fda-generative-ai-medical-devices-discussion-paper/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Innolitics</a> (FDA discussion paper analysis, docket FDA-2026-N-7874); <a href="https://doi.org/10.1001/jamahealthforum.2025.3351" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Lin et al., <em>JAMA Health Forum</em> (2025)</a> (691-device benefit-risk reporting review). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A radiologist reviews every report, by design"
          sub="No matter how the FDA's generative-AI framework settles, xAID's workflow puts a qualified radiologist between every AI draft and your final, ready-to-sign report. Try it on 5 free studies."
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
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Vendor Evaluation</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI Vendor Evaluation Checklist</div>
              </Link>
              <Link to="/blog/fda-approved-ai-radiology-funding-bill/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">FDA-Approved AI Radiology Funding Bill</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaGuidanceAiVendorChecklist;
