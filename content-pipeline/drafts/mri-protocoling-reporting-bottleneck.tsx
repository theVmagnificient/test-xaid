import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MriProtocolingReportingBottleneck = () => {
  const post = {
    title: 'LLMs Match Radiologists at MRI Protocoling | xAID',
    dateIso: '2026-11-10',
    date: 'November 10, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A 1,201-case European Radiology study found LLMs match radiologists at MRI protocol selection — exposing how far structured CT reporting still lags.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>LLMs Match Radiologists at MRI Protocoling | xAID</title>
        <meta name="description" content="A 1,201-case European Radiology study found LLMs match radiologists at MRI protocol selection — exposing how far structured CT reporting still lags." />
        <link rel="canonical" href="https://xaid.ai/blog/mri-protocoling-reporting-bottleneck" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="LLMs Match Radiologists at MRI Protocoling | xAID" />
        <meta property="og:description" content="A 1,201-case European Radiology study found LLMs match radiologists at MRI protocol selection — exposing how far structured CT reporting still lags." />
        <meta property="og:url" content="https://xaid.ai/blog/mri-protocoling-reporting-bottleneck" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LLMs Match Radiologists at MRI Protocoling | xAID" />
        <meta name="twitter:description" content="A 1,201-case European Radiology study found LLMs match radiologists at MRI protocol selection — exposing how far structured CT reporting still lags." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/mri-protocoling-reporting-bottleneck" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "LLMs can pick the right MRI protocol. The report is still the bottleneck.",
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/mri-protocoling-reporting-bottleneck",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "MRI protocoling, LLM radiology workflow, MRI protocol selection AI, structured CT reporting, AI radiology report automation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can large language models select the right MRI protocol?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a 2026 European Radiology study of 1,201 consecutive MRI referrals, the two best-performing open-weight LLMs (GPT-OSS-120B and Qwen3-235B-A22B-Instruct-2507) each matched expert radiologist consensus on protocol selection 94% of the time, with a Jaccard overlap of 0.96 against the reference protocol and sequence list."
              }
            },
            {
              "@type": "Question",
              "name": "Do all LLMs perform the same at MRI protocoling?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Performance varied sharply by model size and type. The medically fine-tuned MedGemma-27B-Text-IT reached 79% accuracy, while the smaller general-purpose Gemma-3-27B-IT reached only 58%, with unacceptable protocol selections ranging from 5.8% (best model) to 68.3% (weakest model)."
              }
            },
            {
              "@type": "Question",
              "name": "What mistakes do LLMs make when selecting MRI protocols?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The most common error, accounting for roughly 58-71% of mistakes depending on the model, was selecting a protocol that was anatomically correct but clinically suboptimal — the right body part, the wrong level of detail for the clinical question. Wrong-region and sequence errors made up the remainder."
              }
            },
            {
              "@type": "Question",
              "name": "If AI can pick the MRI protocol, can it also write the report?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not to the same degree yet. Protocol selection is a closed-list classification task — the model picks from a fixed menu of institutional protocols. Structured report generation requires open-ended, image-grounded clinical reasoning and carries direct diagnostic liability, which is why report drafting still requires in-house radiologist review before a report is ready for a client radiologist to sign."
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
              LLMs can pick the right MRI protocol.<br />
              <span className="text-white/60">The report is still the bottleneck.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 1,201-case European Radiology study found top open-weight language models matching radiologist consensus on MRI protocol selection 94% of the time. It's the clearest evidence yet that the front end of imaging — ordering and protocoling — is being automated fast. The back end, the structured report itself, is a harder problem that isn't solved the same way.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '94%', label: 'Top LLM accuracy', sub: 'vs radiologist consensus' },
            { stat: '1,201', label: 'Referrals tested', sub: 'University Hospital Bonn' },
            { stat: '5.8%', label: 'Unacceptable picks', sub: 'best model, GPT-OSS-120B' },
            { stat: '68.3%', label: 'Unacceptable picks', sub: 'weakest model, Gemma-3-27B' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The study: four LLMs, 1,201 real referrals, one task
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team led by researchers at University Hospital Bonn, Germany, published the results in{' '}
                <a href="https://doi.org/10.1007/s00330-026-13039-9" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>European Radiology</em></a>
                , as first reported by{' '}
                <a href="https://radiologybusiness.com/topics/artificial-intelligence/large-language-models-show-potential-mri-protocoling" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
                The team tested four open-weight (locally deployable, privacy-compliant) LLMs on <strong>1,201 consecutive MRI referral forms</strong>, feeding each model the unaltered referral text and asking it to choose an institutional protocol and any optional sequences from the department's predefined list. A consensus of two board-certified radiologists served as the reference standard.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The two largest, general-purpose models — GPT-OSS-120B and Qwen3-235B-A22B-Instruct-2507 — each matched that expert consensus on <strong>94%</strong> of cases, with a Jaccard overlap of 0.96 against the reference protocol and sequence set. Notably, the smaller, medically fine-tuned MedGemma-27B-Text-IT model trailed at 79% accuracy, and the smallest general model, Gemma-3-27B-IT, managed only 58%. Bigger, broadly-trained models beat a narrower medical model at this task — a pattern the authors tie to stronger general reasoning and more consistent instruction-following, not domain fine-tuning.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where it held up, and where it didn't
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Accuracy alone understates the gap between models. The study also counted outright "unacceptable" selections — protocols a radiologist would reject, not just quibble with. GPT-OSS-120B produced 70 unacceptable picks out of 1,201 cases (5.8%); Qwen3 produced 71 (5.9%). MedGemma's unacceptable rate jumped to 24.7%, and Gemma-3's reached 68.3% — meaning the weakest model got more than two in three cases wrong by the study's own bar.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Even among the strong models, errors had a pattern: the single most common mistake, across most models, was choosing a protocol that was anatomically correct but clinically suboptimal — the right body part, but not the acquisition tailored to the actual clinical question — accounting for roughly 58–71% of all errors depending on the model. Wrong-region and sequence-level mistakes made up the rest. On timing, the top model's chosen protocols ran close to the radiologists' own choice (GPT-OSS matched expert scan duration; Qwen3's picks ran slightly shorter, about 19 minutes 15 seconds versus 19 minutes 58 seconds on average) — evidence the better models aren't just accurate on paper, they're not quietly padding scan time either.
              </p>

              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Model</th>
                      <th className="text-center py-3 px-4 text-[#0D0D0D] font-medium">Accuracy</th>
                      <th className="text-center py-3 px-4 text-[#0D0D0D] font-medium">Jaccard</th>
                      <th className="text-center py-3 px-4 text-xaid-blue-strong font-medium">Unacceptable picks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['GPT-OSS-120B', '94%', '0.96', '5.8%'],
                      ['Qwen3-235B-A22B-Instruct-2507', '94%', '0.96', '5.9%'],
                      ['MedGemma-27B-Text-IT', '79%', '0.85', '24.7%'],
                      ['Gemma-3-27B-IT', '58%', '0.61', '68.3%'],
                    ].map(([model, acc, jac, unacc], i) => (
                      <tr key={model} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="py-3 pr-4 text-[#444] font-medium">{model}</td>
                        <td className="py-3 px-4 text-center text-[#666]">{acc}</td>
                        <td className="py-3 px-4 text-center text-[#666]">{jac}</td>
                        <td className="py-3 px-4 text-center text-xaid-blue-strong font-medium">{unacc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Figures: Bendella et al., <em>European Radiology</em> (2026), 1,201 referrals, reference = consensus of two board-certified radiologists.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The authors' own caveat
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The researchers were careful not to oversell the result. They noted the dataset came from a single institution with its own protocol library and ground truth, that 14.2% of initially retrieved referrals had to be excluded for incomplete clinical information, that each model only ran once per case (so run-to-run variability wasn't measured), and that the reference radiologists partially overlapped with those used for concordance scoring. Their conclusion: the variation across models, and the frequency of unacceptable selections even among the better ones, show the real risk of leaning on automated protocol recommendations without a human checking the output.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That caveat matters for how the result should be read. This is not "LLMs can run MRI protocoling unsupervised." It's "the best current open-weight LLMs are close enough to expert-level on a closed-list classification task that it's now a credible decision-support tool" — provided a radiologist stays in the loop for the harder cases.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why protocoling is the easy end of the workflow
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's worth being precise about what this study actually automates. MRI protocol selection is a <em>closed-list classification problem</em>: the model reads a referral and picks from a fixed, finite menu of institutional protocols and sequences. There's a right answer, a known answer set, and a straightforward way to score agreement. That's exactly the kind of task LLMs are good at — and it's the same reason two other, distinct LLM-automation studies in radiology have shown strong results recently: LLMs <Link to="/blog/clinical-indication-radiology-orders/" className="text-xaid-blue-strong underline underline-offset-2">writing more complete clinical indications</Link> for imaging orders than the ordering clinicians themselves, and LLMs <Link to="/blog/ai-radiology-quality-assurance/" className="text-xaid-blue-strong underline underline-offset-2">catching quality-control errors</Link> in finished reports faster and more consistently than manual review. Protocoling, order-writing, and QC auditing sit at the edges of the radiology workflow — structured inputs or structured checks, not open-ended report generation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Structured CT reporting — the actual diagnostic narrative a radiologist signs — is a different kind of problem. It's open-ended: the model has to reason over image findings, synthesize them into prose with the right level of certainty, flag incidental findings, and produce something a referring clinician will act on. It carries direct diagnostic liability in a way protocol selection never will, because an unacceptable protocol choice delays or recaptures a scan, while an unacceptable report finding can delay a diagnosis. That gap in stakes and structure is a large part of why even purely human-authored structured reporting has been slow to spread: a 2024 <em>European Radiology</em> survey of <a href="https://link.springer.com/article/10.1007/s00330-023-10397-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">200 oncologic-imaging radiologists across 51 countries</a> found only 57% used structured reporting in daily practice at all, and just 51% among European respondents — years into the push for it, without AI in the mix.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Put together, the picture across all three LLM-automation studies is consistent: the steps around the report — what to order, what protocol to run, whether the finished report is clean — are converging on automation faster than the report itself. The report remains the place where a radiologist's judgment is hardest to replace and where oversight matters most.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the problem xAID's foundation-model approach to CT reporting is built around: rather than treating report drafting as a classification task, the model generates a full structured report directly from the imaging data, xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign. Protocol selection and order QC can be checklist problems for an LLM; a diagnostic CT report can't be — which is why the review step doesn't disappear as the surrounding workflow automates, it becomes the whole point.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can large language models select the right MRI protocol?',
                    a: 'In a 2026 European Radiology study of 1,201 consecutive MRI referrals, the two best-performing open-weight LLMs (GPT-OSS-120B and Qwen3-235B-A22B-Instruct-2507) each matched expert radiologist consensus on protocol selection 94% of the time, with a Jaccard overlap of 0.96 against the reference protocol and sequence list.',
                  },
                  {
                    q: 'Do all LLMs perform the same at MRI protocoling?',
                    a: 'No. Performance varied sharply by model size and type. The medically fine-tuned MedGemma-27B-Text-IT reached 79% accuracy, while the smaller general-purpose Gemma-3-27B-IT reached only 58%, with unacceptable protocol selections ranging from 5.8% (best model) to 68.3% (weakest model).',
                  },
                  {
                    q: 'What mistakes do LLMs make when selecting MRI protocols?',
                    a: 'The most common error, accounting for roughly 58-71% of mistakes depending on the model, was selecting a protocol that was anatomically correct but clinically suboptimal — the right body part, the wrong level of detail for the clinical question. Wrong-region and sequence errors made up the remainder.',
                  },
                  {
                    q: 'If AI can pick the MRI protocol, can it also write the report?',
                    a: 'Not to the same degree yet. Protocol selection is a closed-list classification task — the model picks from a fixed menu of institutional protocols. Structured report generation requires open-ended, image-grounded clinical reasoning and carries direct diagnostic liability, which is why report drafting still requires in-house radiologist review before a report is ready for a client radiologist to sign.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Bendella et al., "Accuracy and reliability of privacy-compliant large language models for MRI protocol selection in radiological workflows," <em>European Radiology</em> (2026), <a href="https://doi.org/10.1007/s00330-026-13039-9" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1007/s00330-026-13039-9</a>, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/large-language-models-show-potential-mri-protocoling" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Structured-reporting adoption figures from <a href="https://link.springer.com/article/10.1007/s00330-023-10397-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">a 2024 European Radiology survey of ESOI members</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="The report is still the hard part. xAID is built for it."
          sub="xAID's foundation model drafts the full structured CT report — reviewed in-house on every preliminary, delivered ready for your radiologist to sign. Try it on 5 free studies."
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
              <Link to="/blog/clinical-indication-radiology-orders/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">LLMs Beat Clinicians at Writing Radiology Order Indications</div>
              </Link>
              <Link to="/blog/ai-radiology-quality-assurance/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Can an LLM Catch Radiology QC Errors? New Study</div>
              </Link>
              <Link to="/blog/radiology-report-turnaround-time-ed-length-of-stay/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Report Turnaround Time and ED Length of Stay</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MriProtocolingReportingBottleneck;
