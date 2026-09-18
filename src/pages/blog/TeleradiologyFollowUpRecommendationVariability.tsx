import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const TeleradiologyFollowUpRecommendationVariability = () => {
  const post = {
    title: 'Teleradiologists Recommend More Follow-Up Imaging. The Real Problem Is Variability, Not Location.',
    dateIso: '2026-09-18',
    date: 'September 18, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A 24,146-scan study found teleradiologists recommend follow-up imaging 4x more than on-site radiologists, but with lower adherence and cancer yield.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Teleradiology Follow-Up Recommendations: The Data | xAID</title>
        <meta name="description" content="A 24,146-scan study found teleradiologists recommend follow-up imaging 4x more than on-site radiologists, but with lower adherence and cancer yield." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Teleradiology Follow-Up Recommendations: The Data | xAID" />
        <meta property="og:description" content="A 24,146-scan study found teleradiologists recommend follow-up imaging 4x more than on-site radiologists, but with lower adherence and cancer yield." />
        <meta property="og:url" content="https://xaid.ai/blog/teleradiology-follow-up-recommendation-variability" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teleradiology Follow-Up Recommendations: The Data | xAID" />
        <meta name="twitter:description" content="A 24,146-scan study found teleradiologists recommend follow-up imaging 4x more than on-site radiologists, but with lower adherence and cancer yield." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/teleradiology-follow-up-recommendation-variability" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/teleradiology-follow-up-recommendation-variability",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "teleradiology follow-up recommendations, radiologist practice variability, follow-up imaging recommendation rate, structured radiology reporting, teleradiology quality"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do teleradiologists recommend more follow-up imaging than on-site radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A 2026 study in Academic Radiology of 24,146 outpatient abdominopelvic CT interpretations found teleradiologists recommended additional imaging in 5.5% of reports, versus 1.5% for on-site radiologists reading the same exam type at the same institution — nearly four times the odds (odds ratio 3.91)."
              }
            },
            {
              "@type": "Question",
              "name": "Does a higher recommendation rate mean teleradiologists find more disease?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No — the opposite. Follow-up exams recommended by teleradiologists were significantly less likely to be completed (odds ratio 0.42) and, when completed, significantly less likely to turn up a malignancy (oncologic clinical effectiveness odds ratio 0.36) compared with recommendations from on-site radiologists."
              }
            },
            {
              "@type": "Question",
              "name": "Is the gap a teleradiology quality problem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study frames it as a variability problem rather than a quality problem. Inter-radiologist variability in recommendation behavior, measured by intraclass correlation coefficient, was higher among teleradiologists (0.24) than on-site radiologists (0.16) — meaning which individual reader interpreted the scan mattered more for teleradiologists than for on-site readers. The authors attribute this partly to teleradiologists covering multiple sites with different protocols and less access to clinical context, prompting more cautious, inconsistent follow-up language."
              }
            },
            {
              "@type": "Question",
              "name": "How can imaging groups reduce follow-up recommendation variability regardless of where the reader sits?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standardizing follow-up language against evidence-based criteria — rather than leaving wording to each reader's individual judgment — reduces reader-to-reader variability whether the radiologist is on-site or remote. AI-drafted structured reports that propose standardized, guideline-anchored follow-up recommendations for the radiologist to review and finalize are one way to apply that consistency at scale, without changing who is accountable for the signed report."
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
              Teleradiologists recommend more follow-up imaging.<br />
              <span className="text-white/60">The real problem is variability, not location.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 24,146-scan study found teleradiologists recommend follow-up CT nearly four times more often than on-site radiologists at the same hospital — yet those recommendations are completed less and find cancer less. The data points squarely at reader-to-reader variability, not a telerad quality gap.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '3.91x', label: 'Higher odds of a follow-up rec', sub: 'teleradiologists vs on-site' },
            { stat: '5.5% vs 1.5%', label: 'Follow-up recommendation rate', sub: 'teleradiology vs on-site reads' },
            { stat: '0.24 vs 0.16', label: 'Inter-reader variability (ICC)', sub: 'higher among teleradiologists' },
            { stat: '24,146', label: 'Outpatient CT scans studied', sub: '14,871 patients, 2023–2024' },
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
                Researchers at Seoul National University Bundang Hospital analyzed <strong>24,146 outpatient abdominopelvic CT interpretations</strong> from <strong>14,871 patients</strong>, reported between February 2023 and January 2024. Exams were randomly assigned to either on-site radiologists or teleradiologists, letting the team isolate the effect of interpretation setting from case mix. The results were published Sept. 16, 2026 in <a href="https://doi.org/10.1016/j.acra.2026.08.105" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Academic Radiology</em></a> and covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/teleradiologists-recommend-more-follow-imaging-lower-clinical-yield" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Teleradiologists recommended additional imaging in <strong>5.5%</strong> of reports, compared with <strong>1.5%</strong> for on-site radiologists — an odds ratio of <strong>3.91</strong>, or nearly four times the odds of issuing a follow-up recommendation. But the higher rate did not translate into more disease found. Recommendations from teleradiologists were significantly less likely to be completed (adherence odds ratio <strong>0.42</strong>) and, when completed, significantly less likely to yield a positive oncologic finding — what the authors call oncologic clinical effectiveness (odds ratio <strong>0.36</strong>). A subgroup analysis limited to liver MRI recommendations showed the same pattern.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                As corresponding author Jungheum Cho, MD, PhD, of Seoul National University College of Medicine, and colleagues noted, teleradiology's role has expanded well beyond its original purpose: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/teleradiologists-recommend-more-follow-imaging-lower-clinical-yield" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Initially developed to provide after-hours coverage and for areas deprived of specialized medical services, teleradiology has evolved into a service model that supports not only emergency department images, but also elective imaging interpretation for outpatients in tertiary care hospitals."</a> That expansion is exactly why the size of this dataset — and the randomized assignment of routine outpatient elective reads — matters: this is not an emergency after-hours coverage gap, it's routine daytime practice.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                On-site vs. teleradiology: the three metrics side by side
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Metric</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">On-site radiologists</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Teleradiologists</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Recommendation proportion', '1.5%', '5.5% (OR 3.91)'],
                      ['Adherence proportion', 'Reference', 'Significantly lower (OR 0.42)'],
                      ['Oncologic clinical effectiveness', 'Reference', 'Significantly lower (OR 0.36)'],
                      ['Inter-radiologist variability (ICC)', '0.16', '0.24'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[1]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Source: Chee CG, Kim J, Cho J, et al. <em>Academic Radiology</em>, 2026. DOI: <a href="https://doi.org/10.1016/j.acra.2026.08.105" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1016/j.acra.2026.08.105</a>. On-site figures shown as reference group; odds ratios describe teleradiology relative to on-site.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this reads as a variability problem, not a quality problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The single statistic most easily missed in coverage of this study is the inter-radiologist variability figure: an intraclass correlation coefficient of <strong>0.24</strong> among teleradiologists versus <strong>0.16</strong> among on-site radiologists. In plain terms, which individual radiologist happened to read a given scan explained more of the difference in recommendation behavior among teleradiologists than it did among on-site readers. The setting itself — remote versus on-site — is a proxy for something more specific: inconsistent individual practice patterns that show up more sharply when readers lack shared local context.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The study's authors point to plausible mechanisms rather than a competence gap: teleradiologists commonly cover multiple facilities with different protocols and less direct access to a patient's electronic health record, prior imaging, or the ordering clinician — conditions that push individual readers toward more cautious, and more individually variable, follow-up language. That is a description of workflow conditions, not diagnostic skill. Two well-trained radiologists reading the same ambiguous finding under those conditions can reasonably land on different follow-up wording — one recommends a repeat CT "in 3 months," another suggests "clinical correlation," a third says nothing specific at all. None of those three is necessarily wrong; they are simply inconsistent, and inconsistency compounds when it isn't visible until a study like this one lines up thousands of interpretations side by side.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Reframed this way, the finding is less "teleradiology is worse" and more "practice-pattern variability in follow-up recommendations is larger than most groups can see, and remote reading conditions amplify it." That distinction matters for what a fix looks like — a quality problem is solved by changing who reads; a variability problem is solved by standardizing what gets written, regardless of who or where the reader is.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually reduces reader-to-reader variability
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A durable fix targets the variance itself, not the location of the reader:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Standardize follow-up language against evidence-based criteria',
                    desc: 'When follow-up recommendations are drafted from a consistent, guideline-anchored template rather than each reader\'s individual phrasing, the same finding tends to generate the same recommendation — whether the reader is on-site or a thousand miles away.',
                  },
                  {
                    title: 'Make recommendation rate a tracked quality metric',
                    desc: 'Most groups can report turnaround time by reader; few track recommendation proportion or adherence proportion by reader. This study shows that gap can hide meaningful variability. Surfacing it, on-site and remote alike, is the first step to closing it.',
                  },
                  {
                    title: 'Treat clinical context gaps as a workflow problem to fix, not accept',
                    desc: 'If limited access to EHR data and referring-clinician communication is a documented driver of more cautious, inconsistent recommendations, closing that access gap for remote readers reduces the variability directly — independent of any reporting tool.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured, AI-drafted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This study is a clean illustration of why structured, template-driven reporting matters beyond formatting. AI CT reporting drafts findings into a structured report with standardized, evidence-based follow-up language proposed for each finding type, so the recommendation a patient receives depends on the finding — not on which individual radiologist, on-site or remote, happened to be reading that day. The reading radiologist still reviews, adjusts, and signs every report; standardization narrows the variance in the draft they start from, which is exactly the lever this study points to.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Do teleradiologists recommend more follow-up imaging than on-site radiologists?',
                    a: 'Yes. A 2026 study in Academic Radiology of 24,146 outpatient abdominopelvic CT interpretations found teleradiologists recommended additional imaging in 5.5% of reports, versus 1.5% for on-site radiologists reading the same exam type at the same institution — nearly four times the odds (odds ratio 3.91).',
                  },
                  {
                    q: 'Does a higher recommendation rate mean teleradiologists find more disease?',
                    a: 'No — the opposite. Follow-up exams recommended by teleradiologists were significantly less likely to be completed (odds ratio 0.42) and, when completed, significantly less likely to turn up a malignancy (oncologic clinical effectiveness odds ratio 0.36) compared with recommendations from on-site radiologists.',
                  },
                  {
                    q: 'Is the gap a teleradiology quality problem?',
                    a: 'The study frames it as a variability problem rather than a quality problem. Inter-radiologist variability in recommendation behavior, measured by intraclass correlation coefficient, was higher among teleradiologists (0.24) than on-site radiologists (0.16) — meaning which individual reader interpreted the scan mattered more for teleradiologists than for on-site readers. The authors attribute this partly to teleradiologists covering multiple sites with different protocols and less access to clinical context, prompting more cautious, inconsistent follow-up language.',
                  },
                  {
                    q: 'How can imaging groups reduce follow-up recommendation variability regardless of where the reader sits?',
                    a: "Standardizing follow-up language against evidence-based criteria — rather than leaving wording to each reader's individual judgment — reduces reader-to-reader variability whether the radiologist is on-site or remote. AI-drafted structured reports that propose standardized, guideline-anchored follow-up recommendations for the radiologist to review and finalize are one way to apply that consistency at scale, without changing who is accountable for the signed report.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Chee CG, Kim J, Cho J, Kim Y, Kim M, Hwang J, Lee Y, Do Y, Lee JW, Kim YH. "Follow-up Examination Recommendation and Clinical Effectiveness of On-Site Versus Teleradiology Interpretation for Outpatient Abdominopelvic CT." <em>Academic Radiology</em>, published online Sept. 16, 2026. DOI: <a href="https://doi.org/10.1016/j.acra.2026.08.105" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1016/j.acra.2026.08.105</a>. Covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/teleradiologists-recommend-more-follow-imaging-lower-clinical-yield" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Standardized recommendations, radiologist-reviewed reports."
          sub="AI CT reporting drafts findings with consistent, evidence-based follow-up language for your radiologist to review and sign — try it on 5 free studies."
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
              <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Teleradiology vs Traditional Teleradiology</div>
              </Link>
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why the Words Radiologists Use Can Delay Care</div>
              </Link>
              <Link to="/blog/radiology-second-opinion-discrepancy-rate/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">More Than 1 in 5 Neuroradiology Second Opinions Turn Up a Major Discrepancy</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default TeleradiologyFollowUpRecommendationVariability;
