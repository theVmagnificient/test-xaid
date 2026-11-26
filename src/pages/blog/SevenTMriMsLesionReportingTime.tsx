import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const SevenTMriMsLesionReportingTime = () => {
  const post = {
    title: "7T MRI Finds 27% More MS Lesions. That's More to Report, Not Just More to Detect",
    dateIso: '2026-11-26',
    date: 'November 26, 2026',
    category: 'Workflow & Throughput',
    readingTime: 7,
    description: 'A Radiology study found 7T MRI detects 27% more MS lesions than 3T (2,268 vs 1,779), with cortical lesions up 135.7% — more to report per scan.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>7T MRI Finds 27% More MS Lesions to Report | xAID</title>
        <meta name="description" content="A Radiology study found 7T MRI detects 27% more MS lesions than 3T (2,268 vs 1,779), with cortical lesions up 135.7% — more to report per scan." />
        <link rel="canonical" href="https://xaid.ai/blog/7t-mri-ms-lesion-reporting-time" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="7T MRI Finds 27% More MS Lesions to Report | xAID" />
        <meta property="og:description" content="A Radiology study found 7T MRI detects 27% more MS lesions than 3T (2,268 vs 1,779), with cortical lesions up 135.7% — more to report per scan." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="7T MRI Finds 27% More MS Lesions to Report | xAID" />
        <meta name="twitter:description" content="A Radiology study found 7T MRI detects 27% more MS lesions than 3T (2,268 vs 1,779), with cortical lesions up 135.7% — more to report per scan." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/7t-mri-ms-lesion-reporting-time" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/7t-mri-ms-lesion-reporting-time",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "7T MRI, MS lesion detection, multiple sclerosis MRI reporting, central vein sign, radiology reporting time, AI radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How many more MS lesions does 7T MRI find compared to 3T?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 27% more. A study published in the journal Radiology, led by researchers at Capital Medical University in Beijing, scanned the same 30 multiple sclerosis patients on both 7T and 3T systems on the same day and counted 2,268 lesions at 7T versus 1,779 at 3T."
              }
            },
            {
              "@type": "Question",
              "name": "Which type of MS lesion increased the most at 7T?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cortical lesions, by far. The study found cortical lesion counts rose 135.7% from 3T to 7T, compared with 33.5% for infratentorial lesions, 26.1% for juxtacortical lesions, and 18.8% for periventricular lesions. Cortical lesions are also the hardest lesion type to characterize on a report, so the fastest-growing category is the most labor-intensive one."
              }
            },
            {
              "@type": "Question",
              "name": "Did 7T also find more central-vein-sign-positive lesions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The central vein sign (CVS) is a thin vein visible at the center of a lesion that helps distinguish MS lesions from other white-matter changes. In the study, 64.0% of lesions found at 7T were CVS-positive versus 33.3% at 3T — 1,451 CVS-positive lesions at 7T compared with 592 at 3T, nearly 2.5 times as many. Paramagnetic rim lesions, a separate marker, showed no significant difference in proportion between field strengths (28.0% at 7T vs 26.3% at 3T, p = 0.057)."
              }
            },
            {
              "@type": "Question",
              "name": "Does finding more MS lesions on a scan mean more radiology reporting time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, directly. Each additional lesion a scanner resolves is a finding a radiologist has to locate, measure, classify by region and biomarker, and compare against the patient's prior scan before the report is complete. As MS surveillance programs adopt higher-field MRI, the number of findings per study rises even though the number of studies doesn't — which is a reporting-capacity question, not just an image-quality one."
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
                Workflow &amp; Throughput
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              7T MRI finds 27% more MS lesions.<br />
              <span className="text-white/60">That's more to report, not just more to detect.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Scanning the same multiple sclerosis patients at 7 tesla instead of 3 tesla turned up hundreds more lesions per cohort — and the increase wasn't spread evenly. Cortical lesions, the hardest lesion type to characterize on a report, grew the fastest of all. That's a resolution story and a reporting-workload story at the same time.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '27%', label: 'More MS lesions found', sub: '7T vs 3T, same patients' },
            { stat: '2,268 vs 1,779', label: 'Lesions counted', sub: 'identical cohort, same day' },
            { stat: '+135.7%', label: 'Cortical lesion increase', sub: 'the hardest type to characterize' },
            { stat: '1,451 vs 592', label: 'CVS-positive lesions', sub: '7T vs 3T, ~2.5x more' },
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
                A team led by Xinyao Liu at Capital Medical University in Beijing scanned 30 participants from the China National Registry of Neuro-Inflammatory Diseases on both 7T and 3T MRI on the same day, then compared what each field strength detected in identical patients. The overall gap was large: 7T found <strong>2,268</strong> MS lesions where 3T found <strong>1,779</strong> — about <strong>27% more</strong> lesions from the stronger magnet and finer resolution alone, as <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/7t-mri-detects-28-more-multiple-sclerosis-lesions-3t-systems" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a> on the study published in RSNA's <em>Radiology</em>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The detection gap widened further on one specific diagnostic marker. The central vein sign (CVS) — a thin vein visible at the core of a lesion, used to help distinguish MS lesions from other white-matter changes — was far more visible at 7T. CVS-positive lesions made up <strong>64.0%</strong> of everything found at 7T versus <strong>33.3%</strong> at 3T, which in absolute terms was <strong>1,451</strong> CVS-positive lesions at 7T against <strong>592</strong> at 3T — roughly 2.5 times as many, according to <a href="https://www.auntminnie.com/clinical-news/mri/article/16425115/7t-mri-finds-more-ms-lesions" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie's coverage</a> of the same research.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Not every marker moved the same way. Paramagnetic rim lesions (PRLs) — a separate finding linked to chronic, "smoldering" inflammation at a lesion's edge — showed no statistically significant difference in proportion between field strengths: <strong>28.0%</strong> of lesions at 7T versus <strong>26.3%</strong> at 3T (p = 0.057). Because 7T simply found more lesions overall, it still turned up more PRLs in raw count — just not a higher rate of PRL-positivity once a lesion was already visible.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The part the headline number skips: where the extra lesions are
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A single "27% more lesions" figure hides how unevenly that increase landed. The study broke the gain down by brain region, and the spread is wide — from under 20% in one region to well over 100% in another:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Lesion region</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Increase at 7T vs 3T</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Cortical', '+135.7%'],
                      ['Infratentorial', '+33.5%'],
                      ['Juxtacortical', '+26.1%'],
                      ['Periventricular', '+18.8%'],
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
                Cortical lesions — notoriously the hardest MS lesion type to see and characterize even with good sequences, because cortical gray matter has lower lesion-to-tissue contrast than white matter — more than doubled in count. That's not a uniform resolution bump across the brain; it's a disproportionate jump in exactly the lesion type that takes a radiologist the most time and judgment to describe confidently per <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/7t-mri-detects-28-more-multiple-sclerosis-lesions-3t-systems" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">the reported regional breakdown</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                More detected lesions is more report, not just more pixels
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Coverage of this study has focused, reasonably, on diagnostic yield: 7T sees things 3T misses, and that matters for an accurate MS diagnosis. What gets less attention is what happens after the scan is acquired. Every one of those 2,268 lesions — not just the 489 the stronger magnet added — is a discrete item a radiologist has to locate, size, assign to a brain region, flag for CVS or PRL status where relevant, and, on a surveillance scan, compare against the prior study to call new, stable, or resolved.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of that dictation work shrinks because the scanner got better at finding lesions. If anything it grows faster than the topline percentage suggests, because the regional mix skews toward cortical lesions — the category that takes the longest to characterize per finding, not just the category that grew the most in count.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the same dynamic xAID has tracked in <Link to="/blog/mri-motion-artifact-operational-cost/" className="text-xaid-blue-strong underline underline-offset-2">MRI motion-artifact repeat costs</Link> (cleaner acquisition cuts rescans but doesn't touch the reporting queue) and in <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">incidental-finding extraction from routine chest CT</Link> (a scan ordered for one reason surfacing a second finding to report). Acquisition technology keeps getting better at seeing things. Reporting capacity is the part of the pipeline that has to keep pace with what there now is to see.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this is headed as 7T systems reach MS surveillance
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                7T remains a small fraction of installed MRI capacity next to 1.5T and 3T, but the install base is growing, and MS surveillance — recurring scans, read against priors, for a condition tracked over years — is exactly the use case where a per-scan lesion-count increase compounds. If one scanner swap adds dozens of lesions per study, and the biggest gain lands in the category that's slowest to characterize, the added reporting time scales across every follow-up a patient gets, not just the first scan.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that makes higher-field acquisition a problem to avoid — catching more of the pathology that's actually there is the point. It does mean structured, template-driven reporting needs to absorb the added detail without adding proportional radiologist time per finding, because the region-by-region breakdown shows the increase isn't evenly distributed load; it's concentrated in the hardest category to report quickly. A model that drafts the structured first pass — location, region, CVS/PRL status, comparison to prior — across every lesion a scan contains, reviewed in-house before it reaches the client ready-to-sign, is built for exactly this kind of finding-dense, prior-comparison-heavy study.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How many more MS lesions does 7T MRI find compared to 3T?',
                    a: 'About 27% more. A study published in the journal Radiology, led by researchers at Capital Medical University in Beijing, scanned the same 30 multiple sclerosis patients on both 7T and 3T systems on the same day and counted 2,268 lesions at 7T versus 1,779 at 3T.',
                  },
                  {
                    q: 'Which type of MS lesion increased the most at 7T?',
                    a: 'Cortical lesions, by far. The study found cortical lesion counts rose 135.7% from 3T to 7T, compared with 33.5% for infratentorial lesions, 26.1% for juxtacortical lesions, and 18.8% for periventricular lesions. Cortical lesions are also the hardest lesion type to characterize on a report, so the fastest-growing category is the most labor-intensive one.',
                  },
                  {
                    q: 'Did 7T also find more central-vein-sign-positive lesions?',
                    a: 'Yes. The central vein sign (CVS) is a thin vein visible at the center of a lesion that helps distinguish MS lesions from other white-matter changes. In the study, 64.0% of lesions found at 7T were CVS-positive versus 33.3% at 3T — 1,451 CVS-positive lesions at 7T compared with 592 at 3T, nearly 2.5 times as many. Paramagnetic rim lesions, a separate marker, showed no significant difference in proportion between field strengths (28.0% at 7T vs 26.3% at 3T, p = 0.057).',
                  },
                  {
                    q: 'Does finding more MS lesions on a scan mean more radiology reporting time?',
                    a: "Yes, directly. Each additional lesion a scanner resolves is a finding a radiologist has to locate, measure, classify by region and biomarker, and compare against the patient's prior scan before the report is complete. As MS surveillance programs adopt higher-field MRI, the number of findings per study rises even though the number of studies doesn't — which is a reporting-capacity question, not just an image-quality one.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: study published in RSNA's <em>Radiology</em> (2026), led by Xinyao Liu and colleagues at Capital Medical University, Beijing, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/7t-mri-detects-28-more-multiple-sclerosis-lesions-3t-systems" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.auntminnie.com/clinical-news/mri/article/16425115/7t-mri-finds-more-ms-lesions" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More findings per study shouldn't mean more unassisted hours per report"
          sub="xAID drafts the structured first pass on finding-dense, prior-comparison-heavy studies — in-house radiologist-reviewed, delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/mri-motion-artifact-operational-cost/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow &amp; Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">MRI Motion Artifact Repeats Cost About $115K a Scanner, a Year</div>
              </Link>
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT Bone Density Predicts Brain Aging</div>
              </Link>
              <Link to="/blog/mri-protocoling-reporting-bottleneck/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">LLMs Match Radiologists at MRI Protocoling</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default SevenTMriMsLesionReportingTime;
