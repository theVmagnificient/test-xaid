import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const PulmonaryFibrosisCtScanDataReportsMiss = () => {
  const post = {
    title: 'A Pulmonary Fibrosis CT Scan Study Shows Treatment Response Was There All Along',
    dateIso: '2026-10-06',
    date: 'October 6, 2026',
    category: 'Research',
    readingTime: 7,
    description: "A 474-patient trial substudy found quantitative CT scoring tracked antifibrotic treatment effect in progressive pulmonary fibrosis at 24 and 52 weeks. The signal was always in the pulmonary fibrosis CT scan — narrative reports just never captured it.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>What a New Pulmonary Fibrosis CT Scan Study Reveals | xAID</title>
        <meta name="description" content="A 474-patient INBUILD substudy shows quantitative CT scoring tracks pulmonary fibrosis treatment response — data most narrative CT reports never capture." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What a New Pulmonary Fibrosis CT Scan Study Reveals | xAID" />
        <meta property="og:description" content="A 474-patient INBUILD substudy shows quantitative CT scoring tracks pulmonary fibrosis treatment response — data most narrative CT reports never capture." />
        <meta property="og:url" content="https://xaid.ai/blog/pulmonary-fibrosis-ct-scan-data-reports-miss" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What a New Pulmonary Fibrosis CT Scan Study Reveals | xAID" />
        <meta name="twitter:description" content="A 474-patient INBUILD substudy shows quantitative CT scoring tracks pulmonary fibrosis treatment response — data most narrative CT reports never capture." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/pulmonary-fibrosis-ct-scan-data-reports-miss" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/pulmonary-fibrosis-ct-scan-data-reports-miss",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "pulmonary fibrosis CT scan, quantitative CT, progressive pulmonary fibrosis, structured radiology reporting, CT biomarkers"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can a pulmonary fibrosis CT scan measure whether treatment is working?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 analysis of 474 patients from the Phase III INBUILD trial's high-resolution CT substudy, published in the American Journal of Respiratory and Critical Care Medicine, found that quantitative CT scoring detected a treatment effect from the antifibrotic nintedanib as early as 24 weeks and sustained through 52 weeks. One quantitative extent-of-fibrosis score showed roughly a 7% relative difference favoring treatment at 24 weeks (95% CI -11 to -2; p=0.005), and a second measure of total disease extent showed roughly an 8% relative difference (95% CI -12 to -4; p<0.001)."
              }
            },
            {
              "@type": "Question",
              "name": "What is progressive pulmonary fibrosis (PPF)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Progressive pulmonary fibrosis describes interstitial lung diseases, other than idiopathic pulmonary fibrosis, that worsen over time despite treatment — with increasing scarring, declining lung function, and a prognosis that can approach that of IPF. The INBUILD trial established nintedanib as an approved antifibrotic treatment for this group."
              }
            },
            {
              "@type": "Question",
              "name": "Why don't standard CT reports capture quantitative treatment response?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Routine chest CT reports for interstitial lung disease are typically dictated narrative text — terms like 'stable' or 'mild progression' rather than a reproducible numeric score. The INBUILD substudy shows the underlying CT data already contains a quantifiable, trackable signal; the bottleneck is that unstructured reporting doesn't systematically extract and record it in a comparable form across scans."
              }
            },
            {
              "@type": "Question",
              "name": "Does quantitative CT predict lung function decline in pulmonary fibrosis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. In the same substudy, patients with higher baseline quantitative CT scores had a faster rate of decline in forced vital capacity (FVC) over 52 weeks, with restricted mean survival time differences of roughly 40 to 65 days between patients above versus below the median baseline score."
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
                Research
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A pulmonary fibrosis CT scan study shows<br />
              <span className="text-white/60">treatment response was there all along</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 474-patient trial substudy found that quantitative scoring of chest CT scans tracked antifibrotic treatment effect at 24 and 52 weeks. The scans weren't new. What was new was a method for measuring what was already in them — a gap standard narrative reporting still leaves open.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '474', label: 'Patients in the CT substudy', sub: 'Phase III INBUILD trial' },
            { stat: '-8%', label: 'Disease-extent difference', sub: 'at 24 weeks (p<0.001)' },
            { stat: '-7%', label: 'Fibrosis-extent difference', sub: 'at 24 weeks (p=0.005)' },
            { stat: '40–65 days', label: 'Survival-time difference', sub: 'by baseline CT score' },
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
                The analysis drew on the high-resolution CT substudy of the Phase III <strong>INBUILD</strong> trial, a double-blind, randomized, placebo-controlled study of the antifibrotic drug nintedanib in patients with progressive pulmonary fibrosis (PPF) — interstitial lung diseases, other than idiopathic pulmonary fibrosis, that keep worsening despite treatment. Researchers applied two independent quantitative CT methods to baseline, 24-week, and 52-week scans from <strong>474 patients</strong>, publishing the results in the <a href="https://doi.org/10.1093/ajrccm/aamag526" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Journal of Respiratory and Critical Care Medicine</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Both methods scored the same scans for extent of fibrotic disease. One measure of quantitative fibrosis extent showed roughly a <strong>7% relative difference</strong> favoring the treated group at 24 weeks (95% CI -11 to -2; p=0.005), persisting through 52 weeks. A second, independently developed total-disease-extent score showed a similar pattern — roughly an <strong>8% relative difference</strong> at 24 weeks (95% CI -12 to -4; p&lt;0.001) and about 7% at 52 weeks (p&lt;0.05). Related reticulovascular scoring also showed a significant treatment effect at 24 weeks, as reported by <a href="https://www.auntminnie.com/clinical-news/ct/news/15836397/brainomix-highlights-study-using-elung-ct-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">trade-press coverage</a> of the findings.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The two independently built scoring methods — one validated against a UCLA research algorithm — moved together, which is itself notable: it means the signal isn't an artifact of one vendor's math. It's a property of the scans.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The finding underneath the finding
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to read this as a story about a clever new algorithm. It's really a story about data that already existed. Every patient in this substudy had the same chest CT scans a routine PPF monitoring protocol would order anyway — at baseline, 24 weeks, and 52 weeks. Nothing about the scanning changed. What changed was whether anyone systematically measured, scored, and compared what the images showed over time.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That's the detail easy to miss in a vendor press cycle: the researchers didn't discover a new biomarker hiding somewhere exotic. They extracted a <strong>quantitative, longitudinal signal</strong> — disease extent and reticulovascular pattern, tracked scan-over-scan — from the same CT data radiologists have been reading for this disease for years. The substudy also found that patients with higher baseline scores had a faster rate of forced vital capacity (FVC) decline over 52 weeks, with restricted mean survival time differences of roughly <strong>40 to 65 days</strong> between patients above and below the median score. That's prognostic information sitting in the imaging, waiting to be captured consistently.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that requires a new scanner, a new contrast protocol, or a new patient visit. It requires turning an image into a number — the same number, scored the same way, every time — instead of into a paragraph of prose that varies by who dictated it and how they were feeling that day.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why narrative reports throw most of that signal away
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A standard chest CT report for interstitial lung disease is dictated narrative text: "extent of fibrosis appears stable compared to prior," "mild interval progression of reticulation," "ground-glass opacities grossly unchanged." Useful shorthand for a single read — but none of it is a number, and none of it is reliably comparable to the same radiologist's own wording six months later, let alone a different radiologist's.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the bottleneck this research actually exposes. The imaging already generates the longitudinal, quantifiable data that trial-grade quantitative CT scoring extracted. A dictated narrative report just isn't built to carry it forward — there's no structured field for "percent disease extent," no persistent score a clinic can trend visit over visit, no reproducible number a payer or a tumor board (or in this case, a fibrosis clinic) can act on without re-reading every prior scan by eye.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">What's needed to track PPF treatment response</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Narrative dictated report</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">Structured, quantitative report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Disease extent as a number', 'Rarely — described in words ("mild," "extensive")', 'Scored and recorded each read'],
                      ['Comparable across visits', 'Depends on consistent wording by the same reader', 'Same metric, same scale, every scan'],
                      ['Trendable over 24–52 weeks', 'Requires manually re-reading prior reports', 'Plotted automatically as a series'],
                      ['Usable as a trial-grade endpoint', 'No', 'Yes — as this substudy demonstrates'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`text-[15px] leading-[1.6] font-light py-3 pr-4 ${i === 0 ? 'text-[#0D0D0D] font-normal' : 'text-[#666]'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting actually works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the clinical-trial version of a gap that shows up in everyday reads across every organ system, not just the lung: imaging already contains quantifiable, comparable detail that narrative dictation compresses into prose and discards. AI CT reporting built on a foundation model is designed to close exactly that gap at the point of care — producing a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">structured, comprehensive report draft</Link> with measurements captured consistently rather than described loosely, so findings stay comparable from one scan to the next. xAID's in-house radiologist reviews every preliminary before it reaches the client's reading radiologist, who signs the final — the structure doesn't replace clinical judgment, it gives that judgment a consistent number to work from.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can a pulmonary fibrosis CT scan measure whether treatment is working?',
                    a: "A 2026 analysis of 474 patients from the Phase III INBUILD trial's high-resolution CT substudy, published in the American Journal of Respiratory and Critical Care Medicine, found that quantitative CT scoring detected a treatment effect from the antifibrotic nintedanib as early as 24 weeks and sustained through 52 weeks. One quantitative extent-of-fibrosis score showed roughly a 7% relative difference favoring treatment at 24 weeks (95% CI -11 to -2; p=0.005), and a second measure of total disease extent showed roughly an 8% relative difference (95% CI -12 to -4; p<0.001).",
                  },
                  {
                    q: 'What is progressive pulmonary fibrosis (PPF)?',
                    a: 'Progressive pulmonary fibrosis describes interstitial lung diseases, other than idiopathic pulmonary fibrosis, that worsen over time despite treatment — with increasing scarring, declining lung function, and a prognosis that can approach that of IPF. The INBUILD trial established nintedanib as an approved antifibrotic treatment for this group.',
                  },
                  {
                    q: "Why don't standard CT reports capture quantitative treatment response?",
                    a: "Routine chest CT reports for interstitial lung disease are typically dictated narrative text — terms like 'stable' or 'mild progression' rather than a reproducible numeric score. The INBUILD substudy shows the underlying CT data already contains a quantifiable, trackable signal; the bottleneck is that unstructured reporting doesn't systematically extract and record it in a comparable form across scans.",
                  },
                  {
                    q: 'Does quantitative CT predict lung function decline in pulmonary fibrosis?',
                    a: 'Yes. In the same substudy, patients with higher baseline quantitative CT scores had a faster rate of decline in forced vital capacity (FVC) over 52 weeks, with restricted mean survival time differences of roughly 40 to 65 days between patients above versus below the median baseline score.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Devaraj A, et al. "Quantitative Computed Tomography in Progressive Pulmonary Fibrosis: Data from a Sub-Study of the Double Blind, Randomized, Placebo-controlled INBUILD Trial," <em>American Journal of Respiratory and Critical Care Medicine</em> (2026), <a href="https://doi.org/10.1093/ajrccm/aamag526" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1093/ajrccm/aamag526</a>; as reported by <a href="https://www.auntminnie.com/clinical-news/ct/news/15836397/brainomix-highlights-study-using-elung-ct-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structure turns imaging data into a number you can track"
          sub="xAID's foundation-model reporting captures findings consistently across studies — see how structured, ready-to-sign drafts compare to narrative dictation."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Research</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why the Words Radiologists Use Can Delay Care</div>
              </Link>
              <Link to="/blog/lung-cancer-screening-ct-criteria/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Simpler Lung Cancer Screening Criteria and Chest CT Volume</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PulmonaryFibrosisCtScanDataReportsMiss;
