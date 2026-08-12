import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologistAiOverreliance = () => {
  const post = {
    title: "What Makes a Radiologist Catch an AI's Mistake? New Research",
    dateIso: '2026-08-12',
    date: 'August 12, 2026',
    category: 'AI Safety & Oversight',
    readingTime: 8,
    description:
      "A Radiology study on radiologist AI overreliance: a reader's track record and confidence, not AI persuasiveness, predict who catches its errors.",
  };

  const canonical = 'https://xaid.ai/blog/radiologist-ai-overreliance';

  return (
    <>
      <Helmet defer={false}>
        <title>Radiologist AI Overreliance: What New Research Finds | xAID</title>
        <meta
          name="description"
          content="A Radiology study on radiologist AI overreliance: a reader's track record and confidence, not AI persuasiveness, predict who catches its errors."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiologist AI Overreliance: What New Research Finds | xAID" />
        <meta
          property="og:description"
          content="A Radiology study on radiologist AI overreliance: a reader's track record and confidence, not AI persuasiveness, predict who catches its errors."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiologist AI Overreliance: What New Research Finds | xAID" />
        <meta
          name="twitter:description"
          content="A Radiology study on radiologist AI overreliance: a reader's track record and confidence, not AI persuasiveness, predict who catches its errors."
        />
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
          "keywords": "radiologist AI overreliance, automation bias radiology, AI literacy radiology, radiologist confidence calibration, AI CT reporting review"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the study find about radiologists and AI overreliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 study in RSNA's journal Radiology had 10 radiologists interpret 100 chest imaging cases with and without help from a large language model. Reader expertise (odds ratio 2.06) and the AI's own confidence (odds ratio 3.82) independently predicted whether a radiologist correctly accepted or rejected the AI's suggestion. Higher reader expertise and higher reader confidence were both protective against accepting a wrong suggestion."
              }
            },
            {
              "@type": "Question",
              "name": "Does a well-explained AI answer make radiologists more likely to be misled?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, in this study. A higher-quality rationale from the LLM increased the odds of correctly accepting a right suggestion, but it also increased the odds of accepting a wrong one (odds ratio 1.71) and reduced the odds of rejecting a correct suggestion in favor of the radiologist's own read (odds ratio 0.79). A persuasive explanation was not the same as a correct one."
              }
            },
            {
              "@type": "Question",
              "name": "Does years of experience protect against AI overreliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In this study, 'reader expertise' was defined as each radiologist's own baseline (session 1, unaided) diagnostic accuracy — a continuous performance measure, not years in practice or training level. It was one of the strongest protective factors against accepting an incorrect AI suggestion. For the specific high- vs. low-expertise comparison, the higher-expertise group included three thoracic radiologists and two residents, and the lower-expertise group included two general radiologists and three residents — grouped by individual accuracy, not training category. The study did not test generic 'AI literacy' training as a separate variable."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for AI-assisted radiology reporting workflows?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It suggests that draft-then-sign review works best when the reviewing radiologist has a strong diagnostic track record in the area being read, and when reviewers are trained to treat a fluent, confident-sounding AI rationale as a prompt for scrutiny rather than reassurance. The study did not test generic AI-literacy training as a separate safeguard; what it found protective was reader expertise and calibrated confidence."
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
                AI Safety &amp; Oversight
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              What makes a radiologist catch an AI's mistake?<br />
              <span className="text-white/60">New research narrows it to expertise and calibrated confidence</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new multireader study didn't just measure whether radiologists could be fooled by a large language model — it measured which radiologists, and why. The answer has direct implications for how imaging centers staff and train the review step in any AI-assisted reporting workflow.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '10', label: 'Radiologists studied', sub: 'chest imaging, 100 cases' },
            { stat: '76% vs 27%', label: 'Accuracy, GPT-5 vs GPT-4o', sub: 'the two tested LLM setups' },
            { stat: '2.06x', label: 'Odds ratio for expertise', sub: 'predicting correct AI calls' },
            { stat: '1.71x', label: 'Odds a slick rationale misled', sub: 'accepting a wrong suggestion' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study actually tested
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A multi-institution South Korean research team, publishing in RSNA's journal{' '}
                <a href="https://doi.org/10.1148/radiol.253397" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology</em></a>, ran a retrospective multireader study rather than a simple accuracy contest. Ten radiologists — three fellowship-trained thoracic radiologists, two board-certified general radiologists, and five residents — interpreted <strong>100 chest imaging cases</strong> (radiography, CT, MRI, and PET, drawn from the Korean Society of Thoracic Radiology's case archive) in two sessions: once unaided, then again with suggestions from a large language model.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The design deliberately varied how good the AI actually was. In one condition, GPT-5 worked from the case's text and was right <strong>76%</strong> of the time. In the other, GPT-4o worked from the images alone and was right just <strong>27%</strong> of the time. That gap let the researchers isolate what happens when radiologists face a confident, competent AI versus a confident, wrong one — the more clinically relevant question than a single overall accuracy number.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                AI help raised accuracy overall — unevenly
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Unaided, the 10 readers averaged <strong>47.1%</strong> accuracy on these cases (range 31.0%–64.0%), which reflects how deliberately difficult the case set was, not a realistic baseline for routine reads. With LLM input added, accuracy rose for everyone — but not by the same amount. Readers with lower baseline (session 1) accuracy gained more in absolute terms than higher-baseline readers, narrowing much of the gap: the lower-expertise group (a mix of general radiologists and residents, grouped by their own session 1 performance) reached <strong>57.0%</strong>, versus <strong>63.4%</strong> for the higher-expertise group (a mix of thoracic radiologists and residents).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read on its own, that looks like AI narrowing the experience gap. The more important finding is what separated a radiologist who used the AI's suggestion well from one who didn't — because that's the behavior an imaging center actually needs from its review step.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Three factors, not one, decided who got it right
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The authors modeled "adequate interaction" — correctly accepting a right suggestion or correctly rejecting a wrong one — against several variables at once. Two factors stood out independently: how confident the model appeared (odds ratio 3.82, 95% CI 1.58–9.25) and how much expertise the reader brought (odds ratio 2.06, 95% CI 1.38–3.07). Model confidence mattered less for the most experienced readers than for the least — an interaction effect (odds ratio 0.79, 95% CI 0.67–0.94) suggesting expertise partly substitutes for, rather than adds to, trusting a confident-sounding model.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Factor</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">What it predicted</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Odds ratio (95% CI)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Model confidence', 'Correctly accepting or rejecting the AI’s call', '3.82 (1.58–9.25)'],
                      ['Reader expertise', 'Correctly accepting or rejecting the AI’s call', '2.06 (1.38–3.07)'],
                      ['Rationale quality', 'Accepting an incorrect suggestion (risk factor)', '1.71 (1.47–1.99)'],
                      ['Reader expertise', 'Lower odds of accepting a wrong suggestion (protective)', '0.54 (0.41–0.70)'],
                      ['Reader confidence', 'Lower odds of accepting a wrong suggestion (protective)', '0.80 (0.67–0.94)'],
                      ['Rationale quality', 'Lower odds of rejecting a correct suggestion (protective)', '0.79 (0.67–0.93)'],
                    ].map((row) => (
                      <tr key={row[0] + row[1]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] font-light">{row[1]}</td>
                        <td className="py-3 text-[#444] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Reader expertise here is each radiologist's own baseline (session 1) diagnostic accuracy — a continuous performance measure, not training level or years of practice. For the high- vs. low-expertise split above, the higher group comprised three thoracic radiologists and two residents, and the lower group two general radiologists and three residents, split by individual performance rather than training category.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The uncomfortable part: a good explanation cuts both ways
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The study's sharpest finding is a paradox. A higher-quality rationale from the LLM made radiologists more likely to accept a suggestion whether it was right or wrong. It raised the odds of correctly accepting a right call, but it also raised the odds of accepting an incorrect one (odds ratio 1.71) and lowered the odds of a radiologist sticking with their own correct read over the AI's wrong one (odds ratio 0.79 for rejecting a correct suggestion). In plain terms: a fluent, well-reasoned explanation is persuasive independent of whether the underlying answer is true.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is precisely why the study frames expertise and reader confidence as separate, protective counterweights (odds ratios 0.54 and 0.80, respectively, against accepting a wrong suggestion) rather than treating "explainability" as a safeguard on its own. Explainability without a reader equipped to critically evaluate the explanation is not a safety feature — it's a more convincing way to be wrong.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for staffing and training an AI-drafting review step
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this argues against AI-assisted reporting — accuracy rose for every reader in the study, including the most experienced ones. It argues for being deliberate about who does the reviewing and how they're trained to do it. Four practical implications follow for any imaging center, teleradiology group, or hospital department adding AI drafting to its workflow:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Route review by subspecialty depth, not just seniority',
                    desc: 'The protective effect in this study tracked each reader\'s own diagnostic accuracy in the modality being read, not seniority or a completed "AI literacy" course. A radiologist reviewing a chest CT draft should have a demonstrated track record in chest imaging, not just general experience.',
                  },
                  {
                    title: 'Train reviewers to distrust fluency, not just distrust AI',
                    desc: 'The failure mode wasn’t "the AI sounded confident" alone — a well-reasoned rationale was the more dangerous signal. Review protocols should flag persuasive-but-unverified reasoning as a prompt for a second look, not treat coherence as evidence of correctness.',
                  },
                  {
                    title: 'Measure catch rates, not just usage rates',
                    desc: 'Quality programs that only track whether radiologists use an AI draft miss the behavior that matters: how often they correctly override it. Auditing disagreement-and-correction patterns, not just adoption, is what actually surfaces overreliance.',
                  },
                  {
                    title: 'Don’t substitute AI literacy training for domain expertise',
                    desc: 'This study did not test whether generic AI-literacy training (teaching radiologists "how AI works") protects against AI errors — it was not a variable in the model. What it did find protective was each reader\'s own diagnostic track record and calibrated confidence in their own judgment, which is at least as much a staffing and case-assignment question as a training one.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting is built
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This study was conducted with a general-purpose LLM answering multiple-choice diagnostic questions, not a purpose-built <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">radiology-specific reporting model</Link> generating a structured draft — a meaningfully different setup. But its core lesson generalizes to any draft-then-review pipeline: the review step only catches errors if the reviewer has real domain expertise and isn't swayed by how confident or well-explained the draft sounds. That's the reasoning behind putting an in-house radiologist review on every xAID preliminary before a report reaches the client's reading radiologist ready-to-sign — a second qualified set of eyes, not a rubber stamp on a fluent draft.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the study find about radiologists and AI overreliance?',
                    a: 'A 2026 study in RSNA’s journal Radiology had 10 radiologists interpret 100 chest imaging cases with and without help from a large language model. Reader expertise (odds ratio 2.06) and the AI’s own confidence (odds ratio 3.82) independently predicted whether a radiologist correctly accepted or rejected the AI’s suggestion. Higher reader expertise and higher reader confidence were both protective against accepting a wrong suggestion.',
                  },
                  {
                    q: 'Does a well-explained AI answer make radiologists more likely to be misled?',
                    a: 'Yes, in this study. A higher-quality rationale from the LLM increased the odds of correctly accepting a right suggestion, but it also increased the odds of accepting a wrong one (odds ratio 1.71) and reduced the odds of rejecting a correct suggestion in favor of the radiologist’s own read (odds ratio 0.79). A persuasive explanation was not the same as a correct one.',
                  },
                  {
                    q: 'Does years of experience protect against AI overreliance?',
                    a: 'In this study, “reader expertise” was defined as each radiologist’s own baseline (session 1, unaided) diagnostic accuracy — a continuous performance measure, not years in practice or training level. It was one of the strongest protective factors against accepting an incorrect AI suggestion. For the specific high- vs. low-expertise comparison, the higher-expertise group included three thoracic radiologists and two residents, and the lower-expertise group included two general radiologists and three residents — grouped by individual accuracy, not training category. The study did not test generic “AI literacy” training as a separate variable.',
                  },
                  {
                    q: 'What does this mean for AI-assisted radiology reporting workflows?',
                    a: 'It suggests that draft-then-sign review works best when the reviewing radiologist has a strong diagnostic track record in the area being read, and when reviewers are trained to treat a fluent, confident-sounding AI rationale as a prompt for scrutiny rather than reassurance. The study did not test generic AI-literacy training as a separate safeguard; what it found protective was reader expertise and calibrated confidence.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Song J, Jeong WG, Han DH, et al. Retrospective multireader study, published in RSNA's{' '}
                <em>Radiology</em> (2026), DOI:{' '}
                <a href="https://doi.org/10.1148/radiol.253397" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1148/radiol.253397</a>, as covered by{' '}
                <a href="https://radiologybusiness.com/topics/artificial-intelligence/factors-make-radiologists-less-likely-be-fooled-large-language-models" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A review step is only as good as the reviewer"
          sub="xAID pairs every AI draft with an in-house radiologist review before it reaches your reading radiologist, ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologistAiOverreliance;
