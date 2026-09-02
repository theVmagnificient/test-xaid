import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AiLungNoduleDetectionTimeSavings = () => {
  const post = {
    title: 'Commercial AI Cut Chest CT Reporting Time Up to 25% — Here’s What That Number Covers',
    dateIso: '2026-09-02',
    date: 'September 2, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A Radiology study of 39,000+ chest CTs found nodule-detection AI cut reporting time up to 25% — but that is not the same as a faster signed report.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Lung Nodule Detection: What the New Study Measured | xAID</title>
        <meta name="description" content="A Radiology study of 39,000+ chest CTs found nodule-detection AI cut reporting time up to 25% — but that is not the same as a faster signed report." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Lung Nodule Detection: What the New Study Measured | xAID" />
        <meta property="og:description" content="A Radiology study of 39,000+ chest CTs found nodule-detection AI cut reporting time up to 25% — but that is not the same as a faster signed report." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-lung-nodule-detection-time-savings" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Lung Nodule Detection: What the New Study Measured | xAID" />
        <meta name="twitter:description" content="A Radiology study of 39,000+ chest CTs found nodule-detection AI cut reporting time up to 25% — but that is not the same as a faster signed report." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-lung-nodule-detection-time-savings" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-lung-nodule-detection-time-savings",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "AI lung nodule detection, pulmonary nodule AI, chest CT reporting time, AI radiology efficiency, commercial AI radiology evidence"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new pulmonary nodule AI study actually find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A retrospective study of 39,323 chest CT exams at Erasmus MC in Rotterdam, published in RSNA's journal Radiology, found that deploying a commercial pulmonary-nodule detection and measurement AI tool was followed by a drop in adjusted median reporting time from 21.3 to 18.2 minutes — a 14.6% reduction overall. The largest reduction, up to 25.0%, was seen among thoracic radiologists specifically."
              }
            },
            {
              "@type": "Question",
              "name": "Does the 'up to 25%' figure apply to every radiologist reading chest CTs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The 25.0% figure was the largest subgroup reduction, seen in thoracic radiologists; ECG-gated thoracic exams saw an even larger 41.1% reduction. The overall average across all readers and exam types was 14.6%, and emergency department exams actually got 7.1% slower after AI deployment."
              }
            },
            {
              "@type": "Question",
              "name": "Did the study measure how much faster a full radiology report could be drafted?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not directly. The study measured 'reporting time' as the interval from opening the exam in PACS to report authorization — a whole-workflow clock. But the AI tool itself only detects, measures, and tracks pulmonary nodules; it does not draft report text. Radiologists still wrote the full chest CT report themselves, so the time saved reflects a faster nodule sub-task inside an otherwise unchanged reporting workflow, not a faster-drafted, ready-to-sign report."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for evaluating AI radiology efficiency claims?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It means efficiency headlines need context: a single-task detection tool produces single-task time savings that show up unevenly across exam types and reader subspecialties, and can even coincide with slower turnaround in some settings. Larger, more consistent gains generally require AI that drafts the complete structured report, ready-to-sign, not just one finding category within it."
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
              Commercial AI cut chest CT reporting time by up to 25%<br />
              <span className="text-white/60">Here's what that number actually covers</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new peer-reviewed study of nearly 40,000 chest CT exams found real time savings after a hospital deployed nodule-detection AI. The headline number is real — but it isn't the same claim as "AI drafts the report faster."
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '14.6%', label: 'Overall reporting-time drop', sub: '21.3 → 18.2 min median' },
            { stat: '25.0%', label: 'Largest reader-group drop', sub: 'thoracic radiologists' },
            { stat: '41.1%', label: 'Largest exam-type drop', sub: 'ECG-gated thoracic CT' },
            { stat: '39,323', label: 'Chest CTs studied', sub: 'Erasmus MC, 2021–2024' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study actually measured
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The study, <a href="https://doi.org/10.1148/radiol.260484" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Impact of Commercial Artificial Intelligence on Radiologist Reading Time for Pulmonary Nodule Evaluation at Chest CT,"</a> was published in RSNA's journal <em>Radiology</em> on September 1, 2026, by a team at Erasmus MC in Rotterdam, the Netherlands (Paramasamy et al.). It's a retrospective, single-institution, before-and-after analysis — not a randomized trial.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers compared one full year of chest CT reads before the hospital deployed a commercial pulmonary-nodule detection and measurement tool against one full year after, covering September 2021 through May 2024: 19,433 patients and 39,323 exams in total (19,190 pre-AI, 20,133 post-AI). The primary outcome was "reporting time" — the interval from opening the exam in PACS to the radiologist authorizing the final report.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The result: adjusted median reporting time fell from 21.3 minutes to 18.2 minutes, a <strong>14.6%</strong> reduction (p&lt;.001), as first reported by <a href="https://www.auntminnie.com/clinical-news/ct/article/15833859/ai-cuts-chest-ct-reporting-time" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a> and <a href="https://radiologybusiness.com/topics/artificial-intelligence/commercial-ai-cuts-pulmonary-nodule-assessment-times-25" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                "Up to 25%" is a subgroup, not the average
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                The 14.6% overall figure is the honest headline. The "up to 25%" framing comes from one subgroup, and the full breakdown shows the gains were far from uniform:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Segment</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Change in reporting time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['All exams (overall median)', '−14.6%'],
                      ['Thoracic radiologists', '−25.0%'],
                      ['ECG-gated thoracic CT exams', '−41.1%'],
                      ['Emergency department exams', '+7.1%'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two things stand out. First, the biggest gains clustered around readers and exam types where nodule work is a larger share of the read — thoracic subspecialists and gated thoracic protocols. Second, emergency department exams got <em>slower</em>, not faster, a reminder that a tool built for one workflow doesn't automatically speed up every workflow it touches.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What "reporting time" does — and doesn't — tell you
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Reporting time" here is a whole-workflow clock: PACS-open to report-authorized. That sounds like it should settle the "faster signed report" question. It doesn't, because of what the underlying tool actually does. The AI evaluated in this study detects, measures, and tracks pulmonary nodules on chest CT — it does not generate report text for the exam's other findings, and it doesn't draft the report itself. The radiologist still dictates or types the full chest CT report by hand; the AI's job is narrower: find the nodules, measure them, and flag change from a prior scan faster than a human scrolling through slices.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                So the 14.6% reduction is real, but it's evidence that <em>one time-consuming sub-task inside the read got faster</em> — not evidence that a comprehensive, ready-to-sign report gets produced faster end to end. That distinction matters for anyone evaluating AI efficiency claims: "faster nodule call" and "faster signed report" are different claims, and this study, despite measuring a whole-workflow time metric, only directly supports the first.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It's also worth noting what the analysis didn't set out to do: it reported efficiency, not diagnostic accuracy or miss rate, and as a retrospective before/after comparison at a single center, it can't fully rule out other things that changed over the nearly three-year window — staffing, case mix, or workflow tweaks unrelated to the AI tool. None of that undermines the time-savings finding, but it does mean the study answers a narrower question than the "up to 25%" headline implies.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Not the same evidence as risk-scoring AI
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It's also worth separating this from a different strand of nodule-AI evidence: studies that test whether AI can estimate a nodule's <em>malignancy risk</em> more accurately than tools like the Brock score. That's a classification-accuracy question, covered in a <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="text-xaid-blue-strong underline underline-offset-2">separate multicentre study</Link> xAID has covered before. This Erasmus MC study asks a workflow-speed question instead: given a nodule-detection tool a radiologist already trusts, how much faster does the read finish? The two questions — "is the AI's call more accurate" and "does the AI make the radiologist faster" — need separate evidence, and this study only speaks to the second.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits in the AI-CT-reporting landscape
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Point tools like the one in this study are common precisely because they're easy to bolt onto an existing PACS workflow, and this data shows they can produce a real, if uneven, time benefit on the task they target. The alternative approach — and the one behind <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model CT reporting</Link> — is to draft the complete structured report across all findings in the study, not just nodules, with xAID's in-house radiologist reviewing every preliminary before it reaches the client's reading radiologist ready-to-sign. The efficiency case for that broader approach still needs its own head-to-head evidence; this study is a useful data point on what a narrow tool can and can't deliver, not a substitute for it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new pulmonary nodule AI study actually find?',
                    a: "A retrospective study of 39,323 chest CT exams at Erasmus MC in Rotterdam, published in RSNA's journal Radiology, found that deploying a commercial pulmonary-nodule detection and measurement AI tool was followed by a drop in adjusted median reporting time from 21.3 to 18.2 minutes — a 14.6% reduction overall. The largest reduction, up to 25.0%, was seen among thoracic radiologists specifically.",
                  },
                  {
                    q: "Does the 'up to 25%' figure apply to every radiologist reading chest CTs?",
                    a: 'No. The 25.0% figure was the largest subgroup reduction, seen in thoracic radiologists; ECG-gated thoracic exams saw an even larger 41.1% reduction. The overall average across all readers and exam types was 14.6%, and emergency department exams actually got 7.1% slower after AI deployment.',
                  },
                  {
                    q: 'Did the study measure how much faster a full radiology report could be drafted?',
                    a: "Not directly. The study measured 'reporting time' as the interval from opening the exam in PACS to report authorization — a whole-workflow clock. But the AI tool itself only detects, measures, and tracks pulmonary nodules; it does not draft report text. Radiologists still wrote the full chest CT report themselves, so the time saved reflects a faster nodule sub-task inside an otherwise unchanged reporting workflow, not a faster-drafted, ready-to-sign report.",
                  },
                  {
                    q: 'What does this mean for evaluating AI radiology efficiency claims?',
                    a: 'It means efficiency headlines need context: a single-task detection tool produces single-task time savings that show up unevenly across exam types and reader subspecialties, and can even coincide with slower turnaround in some settings. Larger, more consistent gains generally require AI that drafts the complete structured report, ready-to-sign, not just one finding category within it.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Paramasamy J, Odink AE, Mulders TA, et al. "Impact of Commercial Artificial Intelligence on Radiologist Reading Time for Pulmonary Nodule Evaluation at Chest CT." <em>Radiology</em> (2026). DOI: <a href="https://doi.org/10.1148/radiol.260484" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1148/radiol.260484</a>. As reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/commercial-ai-cuts-pulmonary-nodule-assessment-times-25" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.auntminnie.com/clinical-news/ct/article/15833859/ai-cuts-chest-ct-reporting-time" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="One draft, every finding — not just the nodules"
          sub="See how xAID's foundation-model reports cover the whole chest CT, ready-to-sign for your reading radiologist. Try it on 5 free studies."
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
              <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Malignancy Risk Models for Incidental Lung Nodules</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/lung-cancer-screening-ct-criteria/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Screening &amp; Capacity</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Simpler Lung Cancer Screening Criteria Could Mean a Lot More Chest CTs</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiLungNoduleDetectionTimeSavings;
