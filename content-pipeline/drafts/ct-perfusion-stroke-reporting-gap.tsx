import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CtPerfusionStrokeReportingGap = () => {
  const post = {
    title: 'A Reopened Artery Isn’t the Whole Story: What New CT Perfusion Data Means for Stroke Reports',
    dateIso: '2026-10-21',
    date: 'October 21, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A study found 21% of thrombectomy patients had no-reflow on CT perfusion with 79% poor outcomes. Why stroke CT reports need structured perfusion fields.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CT Perfusion Stroke Reporting After Thrombectomy | xAID</title>
        <meta name="description" content="A study found 21% of thrombectomy patients had no-reflow on CT perfusion with 79% poor outcomes. Why stroke CT reports need structured perfusion fields." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CT Perfusion Stroke Reporting After Thrombectomy | xAID" />
        <meta property="og:description" content="A study found 21% of thrombectomy patients had no-reflow on CT perfusion with 79% poor outcomes. Why stroke CT reports need structured perfusion fields." />
        <meta property="og:url" content="https://xaid.ai/blog/ct-perfusion-stroke-reporting-gap" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CT Perfusion Stroke Reporting After Thrombectomy | xAID" />
        <meta name="twitter:description" content="A study found 21% of thrombectomy patients had no-reflow on CT perfusion with 79% poor outcomes. Why stroke CT reports need structured perfusion fields." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ct-perfusion-stroke-reporting-gap" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ct-perfusion-stroke-reporting-gap",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "ct perfusion stroke, no-reflow thrombectomy, stroke CT reporting, structured radiology reporting, CT perfusion mismatch"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can CT perfusion predict poor outcomes after a successful thrombectomy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A secondary analysis of two prospective registries, published in Radiology, followed 67 stroke patients who all achieved successful recanalization on thrombectomy. On perfusion imaging taken 24 hours later, a delay time greater than four seconds was the strongest predictor of a poor 90-day outcome (area under the curve of 0.72), even though the treated vessel had already been reopened."
              }
            },
            {
              "@type": "Question",
              "name": "What is no-reflow after thrombectomy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No-reflow is impaired blood flow at the tissue level that persists even after a blocked artery has been successfully reopened. In the study, 21% of patients (14 of 67) showed no-reflow on CT or MR perfusion despite technically successful recanalization, meaning the angiogram looked successful but the brain tissue downstream was still not being adequately perfused."
              }
            },
            {
              "@type": "Question",
              "name": "How much worse are outcomes with no-reflow after a successful thrombectomy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Substantially worse. Poor functional outcomes (a modified Rankin Scale score greater than 2 at 90 days) occurred in 79% of patients with no-reflow versus 21% of patients without it — and the odds of a poor outcome were more than 12 times higher in the no-reflow group, after a vessel that was, by angiographic criteria, successfully reopened."
              }
            },
            {
              "@type": "Question",
              "name": "Why should stroke CT reports include structured perfusion fields instead of a narrative summary?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because the number that predicted outcome — delay time greater than four seconds on follow-up perfusion — is a discrete, extractable value, not an impression. A narrative line like \"perfusion study redemonstrates reperfusion\" can be true and still miss a tissue-level no-reflow signal that was present in the underlying data. Structured, quantitative perfusion fields (core volume, mismatch ratio, delay-time volume, a no-reflow flag) make that signal queryable at the point of care and across a registry, instead of buried in prose."
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
                Clinical Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A reopened artery isn’t the whole story<br />
              <span className="text-white/60">what new CT perfusion data means for stroke reports</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new study found that 21% of stroke patients had no-reflow on perfusion imaging despite a successfully reopened vessel — and nearly 4 in 5 of them had a poor outcome anyway. The finding is a quantitative CT metric, and it makes the case for building perfusion data into stroke report structure, not just its narrative.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '67', label: 'Patients studied', sub: 'all with successful recanalization' },
            { stat: '21%', label: 'Had no-reflow', sub: 'despite reopened artery' },
            { stat: '79% vs 21%', label: 'Poor-outcome rate', sub: 'no-reflow vs none' },
            { stat: '12x', label: 'Higher odds of poor outcome', sub: 'with no-reflow present' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A study published in RSNA's <a href="https://doi.org/10.1148/radiol.253025" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology</em></a>, led by Tianqi Xu, MD, of the Sydney Brain Centre, revisited a question stroke imaging has circled for years: why do roughly half of patients still have a poor outcome after a thrombectomy that, by angiographic criteria, worked? The team ran a secondary analysis of two prospective, multicenter imaging registries, covering 67 patients (median age 69) treated between 2016 and 2022 who all achieved successful recanalization of the blocked vessel. Every patient underwent CT or MR perfusion imaging before treatment and again 24 hours after the procedure, with eight perfusion maps evaluated across multiple thresholds, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/new-ct-perfusion-findings-may-predict-poor-outcomes-after-thrombectomy" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The researchers identified <strong>no-reflow</strong> — impaired blood flow at the tissue level despite a technically successful reopening of the artery — in <strong>21%</strong> of the cohort, 14 of 67 patients. On the 24-hour perfusion scan, a <strong>delay time greater than four seconds</strong> was the strongest single predictor of a poor outcome, with an area under the curve of <strong>0.72</strong>. Outcome was defined as a modified Rankin Scale score greater than 2 at 90 days.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The magnitude is what makes the finding hard to file away as a footnote: <strong>79%</strong> of patients with no-reflow had a poor outcome, versus <strong>21%</strong> of patients without it — an odds ratio the authors put at more than <strong>12 times</strong> higher for the no-reflow group. The takeaway, as <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/new-ct-perfusion-findings-may-predict-poor-outcomes-after-thrombectomy" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business summarized</a> it: successful large vessel recanalization does not necessarily mean that tissue-level perfusion has been fully restored.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a reporting problem, not just a clinical one
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A successful thrombectomy report typically centers on the angiographic result — vessel reopened, modified Thrombolysis in Cerebral Infarction (mTICI) grade recorded, procedure complete. Follow-up perfusion imaging, when it's reviewed at all, is often summarized narratively: "perfusion study redemonstrates improved flow" or "no significant residual deficit." That kind of sentence can be accurate in the sense that the artery is open, and still miss the exact signal this study says matters most — a delay-time threshold on the follow-up perfusion map.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The problem with narrative-only perfusion summaries is that a quantitative threshold like "delay time &gt; 4 seconds" doesn't survive translation into prose unless someone deliberately writes the number down. A radiologist can look at the same color map, judge it "grossly unremarkable," and move on — and the referring neurologist managing post-thrombectomy care never sees the specific metric that, in this cohort, carried a 12-fold difference in outcome odds.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is exactly the gap structured reporting is designed to close: separating the fields that drive a decision from the surrounding prose, so a value like core-infarct volume, mismatch ratio, or delay-time volume is captured as discrete, extractable data — not just implied by an adjective.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Narrative-only vs. structured perfusion reporting
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Report element</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Narrative-only summary</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Structured quantitative field</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Post-procedure perfusion', '"Perfusion redemonstrates improved flow"', 'Delay-time volume &gt; 4s reported as a discrete value'],
                      ['Tissue-level reperfusion', 'Implied by vessel patency alone', 'Explicit no-reflow flag, independent of mTICI grade'],
                      ['Core vs. penumbra', 'Described qualitatively ("small residual core")', 'Core volume (mL) and mismatch ratio as separate fields'],
                      ['Downstream usability', 'Requires re-reading prose to extract a number', 'Queryable across a worklist, registry, or outcomes audit'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[14px] font-light align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#666] text-[14px] font-light align-top" dangerouslySetInnerHTML={{ __html: row[1] }} />
                        <td className="py-3 text-[#666] text-[14px] font-light align-top" dangerouslySetInnerHTML={{ __html: row[2] }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for stroke report templates
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Three practical implications follow for stroke imaging workflows and the templates that structure them:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Post-thrombectomy perfusion needs its own structured fields',
                    desc: 'If a single threshold on a 24-hour perfusion map can carry a 12-fold outcome difference, that threshold belongs in a discrete field — not folded into a sentence about overall impression. Core volume, delay-time volume, mismatch ratio, and a no-reflow indicator are each independently useful data points.',
                  },
                  {
                    title: 'Recanalization success and tissue reperfusion are two different facts',
                    desc: 'An mTICI grade describes the vessel. A delay-time or no-reflow metric describes the tissue it feeds. Templates that only capture the former leave the stronger predictor of outcome, in this study, unrecorded.',
                  },
                  {
                    title: 'Quantitative fields make outcomes auditable',
                    desc: 'A structured value can be pulled into a registry, tracked against 90-day modified Rankin Scale outcomes, and used to refine thresholds over time. A narrative description cannot be aggregated the same way without manual chart review.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting actually works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This finding is a small-cohort result that needs validation before it changes clinical thresholds — but the reporting lesson doesn't wait on that. Any workflow that produces a <Link to="/blog/radiology-report-language-precision/" className="text-xaid-blue-strong underline underline-offset-2">structured report</Link> can carry a dedicated perfusion field from the first draft, rather than retrofitting one after the fact. That is the model xAID's structured CT reporting is built on: a comprehensive, field-level draft that captures quantitative values like these alongside the narrative, reviewed in-house before it reaches the client's reading radiologist ready-to-sign.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can CT perfusion predict poor outcomes after a successful thrombectomy?',
                    a: 'Yes. A secondary analysis of two prospective registries, published in Radiology, followed 67 stroke patients who all achieved successful recanalization on thrombectomy. On perfusion imaging taken 24 hours later, a delay time greater than four seconds was the strongest predictor of a poor 90-day outcome (area under the curve of 0.72), even though the treated vessel had already been reopened.',
                  },
                  {
                    q: 'What is no-reflow after thrombectomy?',
                    a: 'No-reflow is impaired blood flow at the tissue level that persists even after a blocked artery has been successfully reopened. In the study, 21% of patients (14 of 67) showed no-reflow on CT or MR perfusion despite technically successful recanalization, meaning the angiogram looked successful but the brain tissue downstream was still not being adequately perfused.',
                  },
                  {
                    q: 'How much worse are outcomes with no-reflow after a successful thrombectomy?',
                    a: 'Substantially worse. Poor functional outcomes (a modified Rankin Scale score greater than 2 at 90 days) occurred in 79% of patients with no-reflow versus 21% of patients without it — and the odds of a poor outcome were more than 12 times higher in the no-reflow group, after a vessel that was, by angiographic criteria, successfully reopened.',
                  },
                  {
                    q: 'Why should stroke CT reports include structured perfusion fields instead of a narrative summary?',
                    a: 'Because the number that predicted outcome — delay time greater than four seconds on follow-up perfusion — is a discrete, extractable value, not an impression. A narrative line like "perfusion study redemonstrates reperfusion" can be true and still miss a tissue-level no-reflow signal that was present in the underlying data. Structured, quantitative perfusion fields (core volume, mismatch ratio, delay-time volume, a no-reflow flag) make that signal queryable at the point of care and across a registry, instead of buried in prose.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Xu T, et al. <em>Radiology</em> (2026), <a href="https://doi.org/10.1148/radiol.253025" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1148/radiol.253025</a>, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/new-ct-perfusion-findings-may-predict-poor-outcomes-after-thrombectomy" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Quantitative fields, not just narrative summaries."
          sub="xAID's structured CT reports capture the numbers that drive outcomes, reviewed in-house before they reach your reading radiologist ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why the Words Radiologists Use Can Delay Care</div>
              </Link>
              <Link to="/blog/bi-rads-pediatric-structured-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why Rigid Reporting Criteria Break in Subpopulations</div>
              </Link>
              <Link to="/blog/glioblastoma-imaging-tumor-extent-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Neuro-Oncology Imaging</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Real Bottleneck Is Reporting Extent, Not Detection</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CtPerfusionStrokeReportingGap;
