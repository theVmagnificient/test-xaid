import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const GenerativeAiRadiologyOversight = () => {
  const post = {
    title: 'Generative AI in Radiology Manuscripts More Than Doubled: Why Disclosure Isn’t Enough',
    dateIso: '2026-07-09',
    date: 'July 9, 2026',
    category: 'AI Governance',
    readingTime: 6,
    description: 'Disclosed generative AI use in AJR radiology manuscripts rose from about 1.1% in 2024 to 7.5% by mid-2026 — and the editor warns disclosure alone won’t protect integrity.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Generative AI in Radiology: Beyond Disclosure | xAID</title>
        <meta name="description" content="Disclosed generative AI use in AJR radiology manuscripts jumped from 1.1% to 7.5%. Why clinical AI needs mandatory human oversight, not disclosure alone." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Generative AI in Radiology: Beyond Disclosure | xAID" />
        <meta property="og:description" content="Disclosed generative AI use in AJR radiology manuscripts jumped from 1.1% to 7.5%. Why clinical AI needs mandatory human oversight, not disclosure alone." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Generative AI in Radiology: Beyond Disclosure | xAID" />
        <meta name="twitter:description" content="Disclosed generative AI use in AJR radiology manuscripts jumped from 1.1% to 7.5%. Why clinical AI needs mandatory human oversight, not disclosure alone." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <link rel="canonical" href="https://xaid.ai/blog/generative-ai-in-radiology-oversight" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/generative-ai-in-radiology-oversight" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/generative-ai-in-radiology-oversight",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "generative AI in radiology, AI governance radiology, research integrity AI, radiologist oversight AI, AI accountability radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much has generative AI use in radiology manuscripts increased?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the American Journal of Roentgenology (AJR), disclosed generative AI use rose from about 1.1% of manuscripts in 2024 to more than double that in 2025, reaching 7.5% of all submissions by the midpoint of 2026. Roughly 3% of the nearly 4,000 manuscripts received since March 2024 disclosed using the technology. AJR editor-in-chief Andrew B. Rosenkrantz, MD, notes these figures likely underestimate true use because some authors may still be hesitant to admit it."
              }
            },
            {
              "@type": "Question",
              "name": "What did the AJR editor mean by warning that disclosure isn't enough?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rosenkrantz cautioned that disclosure may soon not be sufficient on its own to ensure manuscript integrity, and that authors who use generative AI should do so judiciously and with integrity. Disclosure reveals that AI was involved, but it does not by itself guarantee accuracy, originality, or freedom from bias — the risks he flags. Ensuring those requires a competent human who reviews the output and takes responsibility for it."
              }
            },
            {
              "@type": "Question",
              "name": "How is generative AI being used in radiology scientific writing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "According to AJR's data, generative AI was most often used for editing to improve readability and conciseness, check for errors, and meet journal-specific formatting requirements. ChatGPT was the most common tool (59.7%), followed by Claude (8.4%) and Gemini (6.7%). Among full-length research and review submissions, manuscripts that disclosed AI use were accepted at a similar rate (about 4.4%) to those that did not disclose it (about 5%)."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for accountability in clinical radiology AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It reinforces that transparency and accountability are not the same thing. For scholarly writing and clinical reporting alike, disclosing that AI was involved does not remove the need for a qualified human to review and stand behind the result. In AI CT reporting, that means an in-house radiologist reviews every preliminary and the client's reading radiologist signs the final — human accountability is built into the workflow, not left to disclosure alone."
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
                AI Governance
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Generative AI in radiology manuscripts more than doubled.<br />
              <span className="text-white/60">Why disclosure isn’t enough</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new report from the editor-in-chief of a leading radiology journal shows disclosed generative-AI use climbing fast — and warns that saying AI was used won’t, by itself, keep the work trustworthy. The same distinction decides how AI belongs in the reading room.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '1.1%', label: 'Of manuscripts used AI', sub: 'disclosed, 2024' },
                { stat: '7.5%', label: 'Of manuscripts used AI', sub: 'by mid-2026' },
                { stat: '~4,000', label: 'Manuscripts analyzed', sub: 'AJR, since Mar 2024' },
                { stat: '59.7%', label: 'Used ChatGPT', sub: 'most common tool' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1">{s.label}</div>
                  <div className="text-white/60 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the AJR data shows
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In March 2024, the <em>American Journal of Roentgenology</em> (<em>AJR</em>) added a required question to its submission system: did the authors use generative AI, and if so, how? In a new editorial, editor-in-chief Andrew B. Rosenkrantz, MD, reports what nearly <strong>4,000 manuscripts</strong> since then have revealed (<a href="https://doi.org/10.2214/AJR.26.35529" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">DOI 10.2214/AJR.26.35529</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                About <strong>3%</strong> of all submissions disclosed generative-AI use overall — but the trend line is steep. Disclosed use ran near <strong>1.1%</strong> of manuscripts in 2024, <strong>more than doubled</strong> in 2025, and reached <strong>7.5%</strong> of all submissions by the midpoint of 2026. Rosenkrantz cautions the real numbers are almost certainly higher: some authors, he suggests, still hesitate to admit AI use for fear of stigma or a harder ride through peer review.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The technology showed up most in full-length research and reviews, where it was used mainly for editing — tightening readability and conciseness, catching errors, and meeting formatting rules. The most common tools were ChatGPT (<strong>59.7%</strong>), Claude (<strong>8.4%</strong>), and Gemini (<strong>6.7%</strong>). Notably, disclosing AI carried no visible penalty: among these submissions, manuscripts that declared it were accepted at roughly <strong>4.4%</strong>, close to the <strong>5%</strong> rate for those that did not disclose any.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The editor’s real warning: disclosure isn’t enough
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Rosenkrantz is not anti-AI. He acknowledges concrete benefits — clearer manuscripts, fewer language-fluency disparities, and, citing published analyses, roughly <strong>40% time savings</strong> on writing plus markedly higher output for researchers who adopt the tools. He describes generative AI’s potential to <em>&ldquo;democratize both the creation and consumption of scientific knowledge.&rdquo;</em>
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                But he is blunt about the risks he calls <em>&ldquo;well-recognized&rdquo;</em>: <em>&ldquo;loss of originality, perpetuation of biases, and creation of inaccurate or misleading information.&rdquo;</em> And his central caution is the one worth dwelling on: that disclosure may soon <strong>not be enough</strong> to protect the integrity of the work, and that anyone using AI should do so judiciously and with integrity.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is a governance point disguised as an editorial note. A disclosure checkbox tells a reader <em>that</em> AI was involved. It does not tell them the output is accurate, original, or unbiased. Closing that gap takes a competent human who reads the result critically and puts their name behind it. Transparency is necessary. It is not sufficient.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Transparency vs. accountability
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The two are easy to conflate and worth separating cleanly, because they answer different questions and fail in different ways.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium"></th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Disclosure (transparency)</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Human oversight (accountability)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Answers</td>
                      <td className="py-3 pr-4">Was AI used?</td>
                      <td className="py-3">Is the output correct, and who is responsible?</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Guarantees</td>
                      <td className="py-3 pr-4">Awareness</td>
                      <td className="py-3">Accuracy, originality, bias control</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Failure mode</td>
                      <td className="py-3 pr-4">A disclosed error is still an error</td>
                      <td className="py-3">Requires qualified time and attention</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">In clinical AI</td>
                      <td className="py-3 pr-4">Patient is told AI assisted</td>
                      <td className="py-3">In-house review on every preliminary; the reading radiologist signs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the reading room shares this lesson
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Scholarly writing and clinical reporting are different jobs with the same failure surface: generative AI models can produce fluent, confident text that is wrong. In a manuscript, that risks a misleading paper. In a report on a CT scan, it risks a patient. The higher the stakes, the less a disclosure line can carry on its own.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Three implications follow for imaging centers, teleradiology providers, and hospital imaging departments evaluating AI:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Disclosure is the floor, not the ceiling',
                    desc: 'Telling patients and referrers that AI assisted a report is the right baseline. But it settles a transparency question, not a quality one. The harder commitment — and the one that actually protects the patient — is a named clinician accountable for every result.',
                  },
                  {
                    title: 'Oversight has to be mandatory, not optional',
                    desc: 'The AJR data shows adoption outrunning norms: use is climbing faster than the guardrails around it. In a clinical setting, human review cannot be a step teams skip under volume pressure. It has to be built into the workflow so it happens every time, by design.',
                  },
                  {
                    title: 'Ask vendors who signs — and who reviewed',
                    desc: 'When assessing any AI reporting tool, the governance question is concrete: does a qualified radiologist review the output before it reaches a chart, and who signs the final read? Autonomous, unreviewed AI reporting is neither approved nor accountable today.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How this maps to AI CT reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The accountability model the <em>AJR</em> editorial points toward — disclose, but do not rely on disclosure alone — is the model AI CT reporting is built on. The AI produces a structured, comprehensive preliminary; xAID’s in-house radiologist reviews every preliminary; and the report is delivered ready-to-sign so the client’s reading radiologist reviews it and signs the final before it reaches a patient’s chart. Human oversight isn’t a disclosure line bolted on afterward — it is a mandatory step in the workflow. That is a distinct question from whether patients are <em>told</em> AI was used, explored separately in <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="text-xaid-blue-strong underline underline-offset-2">what a patient survey reveals about AI disclosure and trust</Link>. Transparency and oversight are both needed; only one of them stands behind the result.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How much has generative AI use in radiology manuscripts increased?',
                    a: 'In the American Journal of Roentgenology (AJR), disclosed generative AI use rose from about 1.1% of manuscripts in 2024 to more than double that in 2025, reaching 7.5% of all submissions by the midpoint of 2026. Roughly 3% of the nearly 4,000 manuscripts received since March 2024 disclosed using the technology. AJR editor-in-chief Andrew B. Rosenkrantz, MD, notes these figures likely underestimate true use because some authors may still be hesitant to admit it.',
                  },
                  {
                    q: "What did the AJR editor mean by warning that disclosure isn't enough?",
                    a: 'Rosenkrantz cautioned that disclosure may soon not be sufficient on its own to ensure manuscript integrity, and that authors who use generative AI should do so judiciously and with integrity. Disclosure reveals that AI was involved, but it does not by itself guarantee accuracy, originality, or freedom from bias — the risks he flags. Ensuring those requires a competent human who reviews the output and takes responsibility for it.',
                  },
                  {
                    q: 'How is generative AI being used in radiology scientific writing?',
                    a: "According to AJR's data, generative AI was most often used for editing to improve readability and conciseness, check for errors, and meet journal-specific formatting requirements. ChatGPT was the most common tool (59.7%), followed by Claude (8.4%) and Gemini (6.7%). Among full-length research and review submissions, manuscripts that disclosed AI use were accepted at a similar rate (about 4.4%) to those that did not disclose it (about 5%).",
                  },
                  {
                    q: 'What does this mean for accountability in clinical radiology AI?',
                    a: "It reinforces that transparency and accountability are not the same thing. For scholarly writing and clinical reporting alike, disclosing that AI was involved does not remove the need for a qualified human to review and stand behind the result. In AI CT reporting, that means an in-house radiologist reviews every preliminary and the client's reading radiologist signs the final — human accountability is built into the workflow, not left to disclosure alone.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: A. B. Rosenkrantz, &ldquo;Author Disclosure of Use of Generative Artificial Intelligence Technologies in Submissions to <em>AJR</em>: Reflections From the <em>AJR</em> Editor in Chief,&rdquo; <em>American Journal of Roentgenology</em> (July 8, 2026), <a href="https://doi.org/10.2214/AJR.26.35529" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI 10.2214/AJR.26.35529</a>, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/generative-ai-use-radiology-manuscript-writing-has-more-doubled" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI drafts. A radiologist reviews. Yours signs."
          sub="Disclosure is the floor. Mandatory human oversight is the model — and it’s how xAID works. Try it on 5 free studies and see the radiologist-reviewed reports."
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
              <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Patients Be Told When AI Reads Their Scan?</div>
              </Link>
              <Link to="/blog/teleradiology-companies-policy-watchlist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Teleradiology Companies: A Policy Watchlist</div>
              </Link>
              <Link to="/blog/radiologist-salary-transparency-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Salary Transparency in 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default GenerativeAiRadiologyOversight;
