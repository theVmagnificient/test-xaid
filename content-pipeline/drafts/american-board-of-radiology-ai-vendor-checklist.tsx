import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AmericanBoardOfRadiologyAiVendorChecklist = () => {
  const post = {
    title: "The Board That Certifies US Radiologists Has No AI Standard Yet: A Vendor Checklist for Imaging Centers",
    dateIso: '2026-08-17',
    date: 'August 17, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description:
      "The American Board of Radiology says it has no AI competency framework for radiologists today, and is deliberately cautious even about using AI in its own certification process. That leaves vendor due diligence to the buyer. Here's a checklist keyed to the specific gaps the ABR itself flags — validation, human-in-the-loop design, and audit trails.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>ABR's AI Caution: A Vendor Checklist | xAID</title>
        <meta name="description" content="The American Board of Radiology has no AI competency standard yet, leaving vendor vetting to buyers. A due-diligence checklist for AI-reporting tools." />
        <link rel="canonical" href="https://xaid.ai/blog/american-board-of-radiology-ai-vendor-checklist/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ABR's AI Caution: A Vendor Checklist | xAID" />
        <meta property="og:description" content="The American Board of Radiology has no AI competency standard yet, leaving vendor vetting to buyers. A due-diligence checklist for AI-reporting tools." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ABR's AI Caution: A Vendor Checklist | xAID" />
        <meta name="twitter:description" content="The American Board of Radiology has no AI competency standard yet, leaving vendor vetting to buyers. A due-diligence checklist for AI-reporting tools." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/american-board-of-radiology-ai-vendor-checklist/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/american-board-of-radiology-ai-vendor-checklist/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "american board of radiology ai, ABR AI policy, AI vendor due diligence radiology, AI radiology reporting vendor checklist, radiologist AI competency framework"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Has the American Board of Radiology set an AI competency standard for radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. As of August 2026, the American Board of Radiology (ABR) has not established a competency requirement or exam component tied to how radiologists use clinical AI tools. Its FAQ on AI states the field is still too inconsistent across institutions to standardize, and commits only to publicly announcing any change to exam blueprints when the time comes. Assessing candidates on the 'if, when, and how' of using clinically available AI tools remains something the board is exploring, not something it has implemented."
              }
            },
            {
              "@type": "Question",
              "name": "What does the ABR require for its own certification decisions today?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ABR leadership has described an 'inviolable requirement to have score determinations and certification decisions within the sphere of human responsibility,' and the board's FAQ confirms certification decisions and scoring 'must remain the responsibility of qualified human experts.' Generative AI is also prohibited for producing exam content, including images. Any future pilot use of AI would be introduced gradually, first in low-risk areas, and subject to human oversight."
              }
            },
            {
              "@type": "Question",
              "name": "Is there any framework imaging centers can borrow for vetting AI vendors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, though it is voluntary and facility-level rather than an individual competency mandate. In May 2026, the American College of Radiology and the Society for Imaging Informatics in Medicine approved the first-ever Practice Parameter for Imaging Artificial Intelligence, which recommends AI governance groups, an inventory of tools and versions, local acceptance testing before deployment, ongoing performance monitoring with defined stop rules, and logging and access controls. Imaging centers can apply the same questions to a vendor during procurement, ahead of any board mandate."
              }
            },
            {
              "@type": "Question",
              "name": "What should an imaging center ask an AI-reporting vendor given the lack of a board standard?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At minimum: what validation data backs the model's real-world performance, not just a published benchmark; whether the vendor supports local acceptance testing on your own case mix before go-live; exactly where a human radiologist sits in the workflow and whether that step can ever be bypassed; what audit trail exists for every report, including model version and reviewer; how the vendor monitors for performance drift after deployment and what its stop rules are; how tightly scoped its generative AI use is; and whether it already keeps documentation (like a model card) that would let it adapt quickly if a formal standard arrives."
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
                Market &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              The board that certifies US radiologists has no AI standard yet.<br />
              <span className="text-white/60">Here's the vendor checklist that fills the gap</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The American Board of Radiology is deliberately slow-walking AI — even inside its own certification process. That "study first, regulate later" posture means no board is telling imaging centers what to demand from an AI-reporting vendor. Here's a due-diligence checklist built from the specific gaps the ABR itself flags.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'None', label: 'ABR AI competency exam', sub: 'as of Aug. 2026' },
            { stat: 'May 2026', label: 'First ACR AI parameter', sub: 'facility-level, voluntary' },
            { stat: 'Human-only', label: 'ABR certification calls', sub: '"inviolable" per policy' },
            { stat: '7', label: 'Vendor due-diligence asks', sub: 'validation to audit trails' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the ABR actually said
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The <a href="https://www.theabr.org/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Board of Radiology (ABR)</a> — the body that certifies practicing radiologists across the US — is taking a deliberately measured approach to AI, as <a href="https://radiologybusiness.com/topics/artificial-intelligence/american-board-radiology-taking-cautious-approach-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>. In an <a href="https://www.theabr.org/beam/from-the-board-of-governors-august-2026/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">August 2026 Board of Governors statement</a>, ABR President-elect John A. Kaufman, MD, MS, President Cheri L. Canon, MD, and Executive Director Brent Wagner, MD, MBA, described an "inviolable requirement to have score determinations and certification decisions within the sphere of human responsibility," and confirmed the board is "prohibiting the use of generative AI to produce exam content, including images."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The board's own <a href="https://www.theabr.org/blogs/a-few-faqs-about-the-abr-and-ai/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FAQ on AI</a> is just as direct: asked whether AI is used in certification decisions today, the answer is "No. We continue to study potential applications while maintaining strict safeguards to ensure that certification decisions remain the responsibility of human experts." Any future change would be "introduced gradually," "first in low-risk areas," under "rigorous human oversight" — and the board commits to publicly announcing any AI addition to exam blueprints, rather than phasing it in quietly.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That caution extends to the one place buyers of AI-reporting software might expect ABR to move fastest: testing radiologists on how they actually use clinical AI tools. In a <a href="https://www.theabr.org/beam/from-the-board-of-governors-february-2026/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">February 2026 update</a>, ABR Board of Trustees Chair Matthew B. Podgorsak, PhD, and Wagner said the board may eventually find it appropriate to assess competency in "if, when, and how" candidates use clinically available AI tools in practice — but that remains an idea under discussion, not an exam requirement. There is no timeline.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "no standard yet" is a buyer problem, not just a policy footnote
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For an imaging center or teleradiology group signing a contract with an AI-reporting vendor this quarter, ABR's caution translates into a plain fact: no certifying board is going to hand you a checklist for whether a given AI tool, or the radiologist supervising it, meets a validated competency bar. That test doesn't exist yet, and the ABR has been explicit that it won't exist until the underlying practice is consistent enough across institutions to standardize.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That gap doesn't sit with the ABR. It sits with whoever is buying. One related body has moved further: in May 2026, the <a href="https://www.acr.org/News-and-Publications/Media-Center/2026/first-practice-parameter-for-imaging-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology and the Society for Imaging Informatics in Medicine approved the first-ever Practice Parameter for Imaging AI</a>. Committee chair Dr. Tessa Cook said it "outlines steps that imaging facilities can follow to help implement, use, and continually update AI to successfully deploy these rapidly evolving technologies in clinical care," and it recommends an AI governance group, an inventory of tools and versions, local acceptance testing before deployment, ongoing performance monitoring for drift with defined stop rules, and logging with access controls. But that parameter governs how a practice manages a tool it already bought — it's voluntary, facility-level, and separate from ABR's individual certification track. Neither body is telling a buyer what to ask a vendor before signing. That's the checklist below.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A vendor checklist keyed to the gaps ABR itself flags
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                This isn't a general buyer's-guide list of pricing models and integration timelines — that ground is covered in our <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="text-xaid-blue-strong underline underline-offset-2">2026 buyer's guide</Link>. It's narrower on purpose: seven questions mapped directly to the specific themes ABR and ACR have put on record — validation, human-in-the-loop design, and audit trails — so due diligence doesn't depend on a board mandate that hasn't been written yet.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Ask the vendor</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Why it matters</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Watch for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        ask: 'What validation data backs real-world performance, not just a benchmark paper?',
                        why: 'No board vouches for any AI tool\'s clinical competency yet — the validation burden sits entirely with the buyer.',
                        watch: 'Only internal or vendor-run benchmarks, with nothing independently verifiable',
                      },
                      {
                        ask: 'Will you support local acceptance testing on our own case mix before go-live?',
                        why: 'ACR\'s new practice parameter recommends exactly this before deployment — a voluntary standard buyers can adopt themselves.',
                        watch: 'Vendor resists letting you test on your own data before signing',
                      },
                      {
                        ask: 'Where does a human radiologist sit in the workflow, and can that step ever be bypassed?',
                        why: 'ABR\'s own rule for its certification program is that decisions stay "within the sphere of human responsibility" — the same principle a buyer should demand of a clinical AI pipeline.',
                        watch: 'Any path where AI output can reach a chart without a mandatory review step',
                      },
                      {
                        ask: 'What audit trail exists for every report — model version, reviewer, and edits?',
                        why: 'ACR\'s parameter calls for a version inventory plus logging and access controls; without one, you can\'t reconstruct what happened if a report is later questioned.',
                        watch: 'No versioned record of which model produced a report or who reviewed it',
                      },
                      {
                        ask: 'How do you monitor for performance drift after deployment, and what are your stop rules?',
                        why: 'ACR\'s Assess-AI framework is built around ongoing concordance monitoring, not a one-time validation event.',
                        watch: 'Validation treated as a single event, with no ongoing monitoring plan',
                      },
                      {
                        ask: 'Is your use of generative AI scoped to well-defined drafting tasks, with clear boundaries?',
                        why: 'Even ABR — acting on its own comparatively low-stakes internal processes — restricts generative AI to low-risk, human-overseen pilots.',
                        watch: 'Vague answers about what parts of the pipeline are generative versus deterministic',
                      },
                      {
                        ask: 'If a formal standard lands, are you already positioned to adapt — documentation, model cards, and the like?',
                        why: 'No mandate exists today, but ABR has signaled change may come; a vendor already keeping this documentation carries less downstream risk.',
                        watch: 'No documentation plan and no readiness for a future requirement',
                      },
                    ].map((row) => (
                      <tr key={row.ask} className="border-b border-gray-100 align-top">
                        <td className="py-3 pr-4 text-[#444] font-light">{row.ask}</td>
                        <td className="py-3 pr-4 text-[#666] font-light">{row.why}</td>
                        <td className="py-3 text-[#666] font-light">{row.watch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Most of this checklist reduces to one underlying question: who is accountable for the report, and can you verify it. That's structural to how AI CT reporting is built at xAID — every report is drafted by AI, reviewed by xAID's in-house radiologist, and delivered ready-to-sign, with the client's reading radiologist holding final sign-off. A vendor that can answer these seven questions clearly, without waiting for a board to force the issue, is answering the exact question ABR's own caution is pointing at: is a qualified human still in charge of the decision that matters.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Has the American Board of Radiology set an AI competency standard for radiologists?',
                    a: "No. As of August 2026, the American Board of Radiology (ABR) has not established a competency requirement or exam component tied to how radiologists use clinical AI tools. Its FAQ on AI states the field is still too inconsistent across institutions to standardize, and commits only to publicly announcing any change to exam blueprints when the time comes. Assessing candidates on the 'if, when, and how' of using clinically available AI tools remains something the board is exploring, not something it has implemented.",
                  },
                  {
                    q: 'What does the ABR require for its own certification decisions today?',
                    a: 'ABR leadership has described an "inviolable requirement to have score determinations and certification decisions within the sphere of human responsibility," and the board\'s FAQ confirms certification decisions and scoring "must remain the responsibility of qualified human experts." Generative AI is also prohibited for producing exam content, including images. Any future pilot use of AI would be introduced gradually, first in low-risk areas, and subject to human oversight.',
                  },
                  {
                    q: 'Is there any framework imaging centers can borrow for vetting AI vendors?',
                    a: 'Yes, though it is voluntary and facility-level rather than an individual competency mandate. In May 2026, the American College of Radiology and the Society for Imaging Informatics in Medicine approved the first-ever Practice Parameter for Imaging Artificial Intelligence, which recommends AI governance groups, an inventory of tools and versions, local acceptance testing before deployment, ongoing performance monitoring with defined stop rules, and logging and access controls. Imaging centers can apply the same questions to a vendor during procurement, ahead of any board mandate.',
                  },
                  {
                    q: 'What should an imaging center ask an AI-reporting vendor given the lack of a board standard?',
                    a: "At minimum: what validation data backs the model's real-world performance, not just a published benchmark; whether the vendor supports local acceptance testing on your own case mix before go-live; exactly where a human radiologist sits in the workflow and whether that step can ever be bypassed; what audit trail exists for every report, including model version and reviewer; how the vendor monitors for performance drift after deployment and what its stop rules are; how tightly scoped its generative AI use is; and whether it already keeps documentation (like a model card) that would let it adapt quickly if a formal standard arrives.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: American Board of Radiology, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/american-board-radiology-taking-cautious-approach-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (August 2026); ABR, <a href="https://www.theabr.org/beam/from-the-board-of-governors-august-2026/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"From the Board of Governors: AI Presents Opportunities and Challenges for Medical Specialty Boards"</a> (August 2026); ABR, <a href="https://www.theabr.org/blogs/a-few-faqs-about-the-abr-and-ai/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"A Few FAQs About the ABR and AI"</a>; Podgorsak MB, Wagner B., <a href="https://www.theabr.org/beam/from-the-board-of-governors-february-2026/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"From the Board of Governors: ABR Plans to Use AI – Carefully"</a> (February 2026); American College of Radiology, <a href="https://www.acr.org/News-and-Publications/Media-Center/2026/first-practice-parameter-for-imaging-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"ACR Approves First Practice Parameter for Imaging Artificial Intelligence"</a> (May 2026). Quotes are as published; figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="No board mandate yet. A radiologist in the loop, every time."
          sub="Every xAID report is drafted by AI, reviewed by our in-house radiologist, and delivered ready-to-sign. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Coalition for Health AI's New Security Work Group: A Vendor Checklist</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer's Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting Software: A 2026 Buyer's Guide</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AmericanBoardOfRadiologyAiVendorChecklist;
