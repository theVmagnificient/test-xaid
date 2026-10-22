import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaGenerativeAiEvaluationStandard = () => {
  const post = {
    title: "FDA AI Guidance Is Coming: Gen AI to Be Judged Like a Physician",
    dateIso: '2026-10-22',
    date: 'October 22, 2026',
    category: 'Regulatory & Policy',
    readingTime: 8,
    description: "FDA's Digital Health Center director says draft guidance on evaluating generative AI — benchmarked against physician performance, not static accuracy — is coming within months. What it means for AI-drafted CT reports.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA AI Guidance: Gen AI Judged Like a Physician | xAID</title>
        <meta name="description" content="FDA's Rick Abramson says draft guidance on evaluating generative AI — benchmarked against physician performance, not static accuracy — is coming within months." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA AI Guidance: Gen AI Judged Like a Physician | xAID" />
        <meta property="og:description" content="FDA's Rick Abramson says draft guidance on evaluating generative AI — benchmarked against physician performance, not static accuracy — is coming within months." />
        <meta property="og:url" content="https://xaid.ai/blog/fda-generative-ai-evaluation-standard" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA AI Guidance: Gen AI Judged Like a Physician | xAID" />
        <meta name="twitter:description" content="FDA's Rick Abramson says draft guidance on evaluating generative AI — benchmarked against physician performance, not static accuracy — is coming within months." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <link rel="canonical" href="https://xaid.ai/blog/fda-generative-ai-evaluation-standard" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-generative-ai-evaluation-standard" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-generative-ai-evaluation-standard",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "FDA AI guidance, generative AI FDA evaluation, FDA generative AI radiology, AI-drafted radiology reports FDA, narrow AI vs generative AI FDA"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did FDA's Rick Abramson say about generative AI guidance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Speaking at AdvaMed's MedTech Conference in Boston on October 20, 2026, Rick Abramson, director of FDA's Digital Health Center of Excellence, said generative AI policy is a priority at the highest levels of the administration, \"the level of the secretary and the White House,\" and that the agency intends to draft guidance on evaluating generative AI-enabled devices soon."
              }
            },
            {
              "@type": "Question",
              "name": "When will FDA publish draft guidance on evaluating generative AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Abramson did not give an exact date but indicated it would arrive in a matter of months, not weeks or years, after the agency finishes reviewing more than 500 public comments on its August 2026 discussion paper on regulating generative AI-enabled medical devices. The comment period closed October 19, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "How is generative AI different from narrow AI in FDA's evaluation approach?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Narrow, locked-algorithm AI (most detection and triage tools) behaves like traditional hardware: a fixed input produces a fixed output, so it can be validated once against a test set, similar to how FDA evaluates a heart valve or a defibrillator. Generative AI produces open-ended text in response to open-ended inputs, which Abramson said makes it behave more like a physician than a device — so FDA is exploring evaluation modeled on physician competency assessment rather than a single accuracy metric."
              }
            },
            {
              "@type": "Question",
              "name": "What does physician-level evaluation mean for AI-drafted radiology reports specifically?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Report-drafting generative AI sits squarely in the category Abramson described: it synthesizes findings across an entire study into free text rather than flagging a single finding, so it is more likely to be evaluated on report-level concordance, omission and addition rates against a radiologist's read, and adherence to safety boundaries — not just a sensitivity/specificity number from one validation set."
              }
            },
            {
              "@type": "Question",
              "name": "What should imaging centers ask AI report-drafting vendors before FDA's guidance lands?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask how the vendor measures agreement with radiologist ground truth at the report level (not just word-overlap scores), whether evaluation is ongoing and post-market or a one-time validation, how the vendor tests for hallucinated or omitted findings, and whether every report is reviewed by a radiologist before it reaches the client's reading radiologist for signature."
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
                Regulatory &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              FDA's next AI guidance will judge generative AI<br />
              <span className="text-white/60">like a physician, not a device</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              FDA's digital health director says draft policy on evaluating generative AI is coming within months — and it won't look like the agency's old locked-algorithm playbook. Here's what a physician-equivalence standard would mean for AI-drafted CT reports specifically, and what to ask vendors before the guidance lands.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '500+', label: 'Public comments received', sub: "on FDA's gen-AI paper" },
            { stat: 'Oct 19', label: 'Comment period closed', sub: '2026, discussion paper' },
            { stat: 'FY2027', label: 'Target for draft guidance', sub: 'related CDRH priorities' },
            { stat: 'Feb 2026', label: 'New CDRH digital health lead', sub: 'Harvard-trained radiologist' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What Abramson actually said
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Speaking on a panel at AdvaMed's <a href="https://www.medtechdive.com/news/gen-ai-policy-is-a-white-house-priority-cdrh-digital-health-leader-says/833551/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Conference in Boston on October 20, 2026</a>, Rick Abramson — director of FDA's Digital Health Center of Excellence and a Harvard-trained radiologist who took the role in February 2026 — said generative AI policy has reached the top of the administration's agenda. "This is a priority at the highest levels of the administration," he said. "… I'm talking about the level of the secretary and the White House."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On timing, Abramson was direct without committing to a date: "We intend to draft policy, and it'll come soon." According to <a href="https://medcitynews.com/2026/10/fda-official-believes-genai-enabled-tools-will-need-to-be-assessed-like-a-physician/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedCity News's</a> coverage of the same panel, he put the horizon at a matter of months, not weeks or years — after the agency works through more than <strong>500</strong> public comments it had received, as of the panel date, on its discussion paper on regulating generative AI-enabled medical devices. That comment period closed on <strong>October 19, 2026</strong>, roughly two months after FDA's Center for Devices and Radiological Health released the paper on August 18, 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                FDA's device center has also named two generative-AI guidances among its priorities for fiscal 2027: a draft on gen-AI-enabled devices for mental health disorders (already on the agency's "A list," per MedTech Dive, following last year's digital-health advisory committee discussions on mental health chatbots), and a broader "umbrella guidance" on risk assessment and evidence generation for generative AI-enabled devices generally. The agency is separately finishing a lifecycle-management guidance drafted in early 2025 — but that one, Abramson noted, was built for "static" AI devices, which is precisely the category generative AI doesn't fit.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why generative AI breaks FDA's old evaluation playbook
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                FDA's existing framework for AI-as-a-medical-device was built for what the industry calls "narrow" or locked-algorithm AI: software that takes one defined input and produces one defined output — flag this nodule, measure this ejection fraction, yes or no on this fracture. That model can be validated the way FDA validates hardware. As Abramson put it, describing the shift in thinking at FDA: "We ended up putting out this idea that maybe these devices are starting to behave a little bit more like me as a physician than a heart valve or a defibrillator," a quote reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologist-fda-leader-believes-generative-ai-should-be-evaluated-human-docs" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A heart valve or a locked detection algorithm has a bounded set of possible outputs you can test exhaustively. Generative AI doesn't: it accepts open-ended inputs and produces open-ended text, so a single pass/fail accuracy number on one validation set can't capture how it behaves across the range of cases it will actually see in practice. MedCity News's reporting on the panel described FDA's emerging alternative: evaluating generative devices the way a physician's competency is assessed — through ongoing review of knowledge, clinical judgment, communication, and adherence to safety boundaries — rather than a single test against every conceivable scenario. The American Medical Association, for its part, has told FDA that accountability shouldn't become diffuse across the whole ecosystem just because generative outputs are probabilistic rather than deterministic.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Narrow AI vs. generative AI: how FDA's evaluation logic differs
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Narrow / locked AI (detection, triage)</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Generative AI (report drafting)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Output shape', 'Fixed: one flag, one measurement, one label', 'Open-ended: free-text synthesis across an entire study'],
                      ['Evaluation model', 'Device-style: test against a fixed validation set once', 'Physician-style: ongoing assessment of judgment and safety boundaries'],
                      ['Typical metric today', 'Sensitivity / specificity on a benchmark dataset', 'Report-level concordance, omission/addition rate vs. radiologist read'],
                      ['FDA analogy used', 'A heart valve or a defibrillator', '"A little bit more like me as a physician," per Abramson'],
                      ['Guidance status', 'Covered by existing AI/ML device framework', 'Draft guidance in development, expected within months'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#0D0D0D] text-[14px] font-medium align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#666] text-[14px] leading-[1.6] font-light align-top">{row[1]}</td>
                        <td className="py-3 text-[#666] text-[14px] leading-[1.6] font-light align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means specifically for AI-drafted CT reports
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This distinction isn't abstract for xAID's buyer audience — it's a direct description of the category split inside radiology AI today. A single-finding detection or triage tool (flag the possible pulmonary embolism, flag the possible large-vessel occlusion) is the narrow-AI case: bounded input, bounded output, testable the old way. A tool that reads an entire CT study and drafts a full, structured report is the generative case Abramson was describing — it has to synthesize dozens of findings into coherent, clinically appropriate language, which is exactly the kind of open-ended behavior that doesn't reduce to one accuracy percentage.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                If FDA's draft guidance follows the physician-equivalence logic Abramson described, report-drafting AI is likely to be evaluated less like a single-metric device and more on the things that make a physician's output trustworthy: does the draft agree with what an expert radiologist would report on the same images, does it omit or fabricate findings, does it stay inside its clinical scope, and is that performance monitored on an ongoing basis rather than certified once and left alone. Detection and triage tools, by contrast, should keep looking mostly like they do today under the existing device framework.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What to ask AI report-drafting vendors now, before the guidance lands
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Imaging centers, teleradiology groups, and hospital systems evaluating AI report-drafting tools don't have to wait for FDA's final text to start asking the right diligence questions. Four are worth raising with every vendor now:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'How is agreement with a radiologist measured?',
                    desc: 'Ask for report-level concordance and critical-finding omission/addition rates against expert radiologist reads — not just text-similarity scores like ROUGE or BLEU, which can look good while missing a clinically important finding.',
                  },
                  {
                    title: 'Is evaluation ongoing, or a one-time snapshot?',
                    desc: 'A validation study run once on a fixed dataset tells you less than a vendor that tracks performance in production and can show how it has evolved. Physician-style evaluation, per the FDA framing, is continuous — ask vendors to show they treat it that way too.',
                  },
                  {
                    title: 'How are hallucinations and omissions tested?',
                    desc: 'Generative report drafting can fabricate a finding that isn’t there or drop one that is. Ask specifically how the vendor measures and reports each failure mode, not just an aggregate accuracy figure.',
                  },
                  {
                    title: 'Who reviews the draft before it reaches your radiologist?',
                    desc: 'The physician-equivalence standard FDA is exploring presumes a human stays accountable for the output. A report-drafting workflow with an independent radiologist review on every preliminary — delivered ready-to-sign for your reading radiologist — already matches that expectation.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting already works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                FDA's physician-equivalence framing describes a workflow that already exists for <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model report drafting</Link>, distinct from the FY2027 lifecycle-management priorities covered in our <Link to="/blog/fda-ai-guidance-priorities-2027/" className="text-xaid-blue-strong underline underline-offset-2">earlier look at FDA's guidance calendar</Link>: AI drafts a comprehensive report, xAID's in-house radiologist reviews every preliminary, and the output is delivered ready-to-sign to the client's reading radiologist. That structure doesn't need to be retrofitted if FDA formalizes a physician-style evaluation standard for generative AI — it's built around the same premise, that a report-drafting model's output is judged, and ultimately vouched for, the way a physician's work is.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What did FDA's Rick Abramson say about generative AI guidance?",
                    a: 'Speaking at AdvaMed’s MedTech Conference in Boston on October 20, 2026, Rick Abramson, director of FDA’s Digital Health Center of Excellence, said generative AI policy is a priority at the highest levels of the administration, "the level of the secretary and the White House," and that the agency intends to draft guidance on evaluating generative AI-enabled devices soon.',
                  },
                  {
                    q: 'When will FDA publish draft guidance on evaluating generative AI?',
                    a: "Abramson did not give an exact date but indicated it would arrive in a matter of months, not weeks or years, after the agency finishes reviewing more than 500 public comments on its August 2026 discussion paper on regulating generative AI-enabled medical devices. The comment period closed October 19, 2026.",
                  },
                  {
                    q: "How is generative AI different from narrow AI in FDA's evaluation approach?",
                    a: 'Narrow, locked-algorithm AI (most detection and triage tools) behaves like traditional hardware: a fixed input produces a fixed output, so it can be validated once against a test set, similar to how FDA evaluates a heart valve or a defibrillator. Generative AI produces open-ended text in response to open-ended inputs, which Abramson said makes it behave more like a physician than a device — so FDA is exploring evaluation modeled on physician competency assessment rather than a single accuracy metric.',
                  },
                  {
                    q: 'What does physician-level evaluation mean for AI-drafted radiology reports specifically?',
                    a: "Report-drafting generative AI sits squarely in the category Abramson described: it synthesizes findings across an entire study into free text rather than flagging a single finding, so it is more likely to be evaluated on report-level concordance, omission and addition rates against a radiologist's read, and adherence to safety boundaries — not just a sensitivity/specificity number from one validation set.",
                  },
                  {
                    q: "What should imaging centers ask AI report-drafting vendors before FDA's guidance lands?",
                    a: "Ask how the vendor measures agreement with radiologist ground truth at the report level (not just word-overlap scores), whether evaluation is ongoing and post-market or a one-time validation, how the vendor tests for hallucinated or omitted findings, and whether every report is reviewed by a radiologist before it reaches the client's reading radiologist for signature.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/gen-ai-policy-is-a-white-house-priority-cdrh-digital-health-leader-says/833551/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>, "Gen AI policy is a White House priority, CDRH digital health leader says" (Oct. 21, 2026); <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologist-fda-leader-believes-generative-ai-should-be-evaluated-human-docs" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "Radiologist FDA leader believes generative AI should be evaluated like human docs"; <a href="https://medcitynews.com/2026/10/fda-official-believes-genai-enabled-tools-will-need-to-be-assessed-like-a-physician/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedCity News</a>, "FDA Official Believes GenAI-enabled Tools Will Need to Be Assessed Like a Physician"; and <a href="https://www.cov.com/en/news-and-insights/insights/2026/08/fda-releases-highly-anticipated-discussion-paper-on-generative-ai-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Covington &amp; Burling</a> on FDA's August 18, 2026 discussion paper. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Built for a physician-style evaluation standard, already"
          sub="xAID's report drafts get an in-house radiologist review on every preliminary, delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/fda-ai-guidance-priorities-2027/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">FDA's FY2027 AI Guidance Priorities: What Imaging Buyers Should Watch</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: What Chest X-ray Studies Show About Draft-Then-Sign</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaGenerativeAiEvaluationStandard;
