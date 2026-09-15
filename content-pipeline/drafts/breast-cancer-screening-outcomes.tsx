import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const BreastCancerScreeningOutcomes = () => {
  const post = {
    title: 'Screening-Detected Breast Cancer Has Far Better Outcomes. The Reporting Pipeline Decides Who Actually Gets Them.',
    dateIso: '2026-09-14',
    date: 'September 14, 2026',
    category: 'Clinical Evidence',
    readingTime: 8,
    description: 'Two 2025 outcomes studies show screening-detected breast cancer sharply cuts mortality risk — but only if reporting and treatment keep pace with detection.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Screening-Detected Breast Cancer: The Reporting Gap | xAID</title>
        <meta name="description" content="Two 2025 studies show screening-detected breast cancer sharply cuts mortality risk — but only if reporting and treatment keep pace with detection." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Screening-Detected Breast Cancer: The Reporting Gap | xAID" />
        <meta property="og:description" content="Two 2025 studies show screening-detected breast cancer sharply cuts mortality risk — but only if reporting and treatment keep pace with detection." />
        <meta property="og:url" content="https://xaid.ai/blog/breast-cancer-screening-outcomes" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Screening-Detected Breast Cancer: The Reporting Gap | xAID" />
        <meta name="twitter:description" content="Two 2025 studies show screening-detected breast cancer sharply cuts mortality risk — but only if reporting and treatment keep pace with detection." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/breast-cancer-screening-outcomes" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/breast-cancer-screening-outcomes",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "breast cancer screening outcomes, screening-detected breast cancer, mammography survival data, breast cancer reporting delay, breast imaging radiologist shortage"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does screening-detected breast cancer really have better outcomes than symptom-detected cancer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, across multiple 2025 studies. An 821-patient Ottawa Hospital cohort published in Radiology: Imaging Cancer found symptom-detected breast cancer carried a 63% higher likelihood of death than screening-detected cancer over a mean 6.7-year follow-up. A separate propensity-matched analysis of 507 patients per group at Stony Brook, published in AJR, found 5-year overall survival of 94.4% for screening-detected cancer versus 79.6% for clinically detected cancer, and 10-year survival of 82.7% versus 66.1%."
              }
            },
            {
              "@type": "Question",
              "name": "Why do screening-detected breast cancers have better outcomes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mainly stage and tumor size at diagnosis. In the Stony Brook AJR cohort, 42% of screening-detected tumors were 1-10mm versus 13% of clinically detected tumors, and 35.5% of screening-detected cases were non-invasive versus 8.9% of clinically detected cases, while 7.7% of clinically detected cases were already distant metastatic versus 0% of screening-detected cases. Smaller, earlier-stage disease needs less aggressive treatment — 66.1% of the screening-detected group had lumpectomy alone versus 39.3% of the clinically detected group, and only 15% needed chemotherapy versus 40.2%."
              }
            },
            {
              "@type": "Question",
              "name": "Does finding cancer early on a screening mammogram guarantee a fast start to treatment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. A SEER-Medicare analysis of 31,306 women with stage I-III breast cancer found a median time-to-treatment of 27 days, but the 7.5% of patients whose treatment started 60 days or more after diagnosis had a 45% higher risk of breast-cancer-specific mortality. Separately, a single-center workflow study documented screening-to-diagnostic-imaging waits averaging 21 days and screening mammogram sign-off delayed up to 7-8 days during radiologist staffing shortages — against a national breast-imaging workforce where a February 2026 Medicus Healthcare Solutions report found 79% of practices short-staffed. Detection speed and reporting-to-treatment speed are separate variables, and only one of them is what screening statistics usually measure."
              }
            },
            {
              "@type": "Question",
              "name": "Where does xAID fit into the breast cancer screening pipeline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID's product is CT reporting, not mammography, so it doesn't sit directly in this pipeline. But the pattern these studies expose — that early detection's value depends on how fast reporting and treatment keep up, not just on screening uptake — is the same constraint xAID addresses on CT: its AI drafts a structured, ready-to-sign report within minutes of a study reaching the queue, with in-house radiologist review on every preliminary and the client's reading radiologist signing the final. Detection is only the first stage of a pipeline; the reporting stage behind it needs its own fix."
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
              Screening-detected breast cancer has far better outcomes.<br />
              <span className="text-white/60">The reporting pipeline decides who actually gets them.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Two 2025 outcomes studies put hard numbers on what screening advocates have argued for years: catching breast cancer on a mammogram, before symptoms appear, sharply lowers the risk of dying from it. But neither study measures the weeks between an abnormal finding and the start of treatment — and separate data show that gap is where some of the benefit gets lost.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '63%', label: 'Higher death risk, symptom-detected', sub: 'vs screening-detected, Ottawa cohort' },
            { stat: '94.4% vs 79.6%', label: '5-year survival', sub: 'screening- vs clinically-detected' },
            { stat: '45%', label: 'Higher mortality risk', sub: 'if treatment starts 60+ days out' },
            { stat: '79%', label: 'Breast imaging practices short-staffed', sub: 'Medicus report, Feb 2026' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What two 2025 outcomes studies found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A retrospective cohort study out of The Ottawa Hospital, published in RSNA's <a href="https://doi.org/10.1148/rycan.240046" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology: Imaging Cancer</em></a>, followed <strong>821</strong> women aged 40 and older diagnosed with breast cancer in 2016, for a mean of <strong>6.7 years</strong>. Just over half (50.1%) of the cancers were symptom-detected rather than found on screening — including 72.9% of cases in women aged 40-49 and 70.4% in women 75 and older, the two age groups where routine screening is least consistently used or recommended. Nearly 20% of all patients died during follow-up, about half from breast cancer itself, and the study's central finding was stark: patients whose cancer was <strong>symptom-detected had a 63% higher likelihood of dying</strong> than those whose cancer was caught on screening, alongside significantly lower odds of advanced-stage disease and mastectomy in the screening-detected group.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A separate propensity-score-matched analysis from Stony Brook University Hospital, published in the <a href="https://doi.org/10.2214/AJR.25.33245" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Journal of Roentgenology</a>, reached the same conclusion with a different design. Researchers started with 1,460 women with biopsy-proven breast cancer diagnosed between 2010 and 2020, then matched 507 screening-detected patients to 507 clinically detected patients on baseline characteristics. Five-year overall survival was <strong>94.4%</strong> in the screening-detected group versus <strong>79.6%</strong> in the clinically detected group; ten-year survival was <strong>82.7%</strong> versus <strong>66.1%</strong>, with Kaplan-Meier analysis showing significantly greater overall survival in the screening-detected cohort. As the authors put it, "the findings provide strong evidence supporting mammographic screening."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why: smaller tumors, earlier stage, less aggressive treatment
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Stony Brook data show mechanism, not just outcome. Screening-detected tumors were far more likely to be caught small and early, which in turn meant less invasive treatment:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-[#0D0D0D] font-medium">Measure</th>
                      <th className="text-left py-3 px-4 text-[#0D0D0D] font-medium">Screening-detected</th>
                      <th className="text-left py-3 px-4 text-[#0D0D0D] font-medium">Clinically detected</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Tumor 1-10mm at diagnosis', '42%', '13%'],
                      ['Non-invasive stage', '35.5%', '8.9%'],
                      ['Distant metastatic stage', '0%', '7.7%'],
                      ['Treated with lumpectomy alone', '66.1%', '39.3%'],
                      ['Required chemotherapy', '15%', '40.2%'],
                      ['5-year overall survival', '94.4%', '79.6%'],
                      ['10-year overall survival', '82.7%', '66.1%'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`py-3 px-4 ${i === 0 ? 'text-[#0D0D0D] font-medium' : 'text-[#666]'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that is a new theory — smaller, node-negative, non-invasive disease has always carried a better prognosis. What these two 2025 studies add is registry-scale confirmation, with matched or adjusted comparisons, that the survival gap tied to detection method is large and consistent across two different health systems and study designs.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What neither study measures: the weeks after the mammogram
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Both studies compare patients by how their cancer was found, then track survival for years afterward. Neither measures how long it took, after an abnormal finding, to get a diagnostic workup, a biopsy result, and a treatment start date — and other registry data show that interval is not free of consequence. A SEER-Medicare analysis of <strong>31,306</strong> women with stage I-III invasive breast cancer, published in <a href="https://doi.org/10.1007/s12282-023-01456-3" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Breast Cancer</em></a>, found a median time-to-treatment of 27 days — but the 7.5% of patients whose treatment started 60 days or more after diagnosis had a <strong>45% higher risk of breast-cancer-specific death</strong> (subdistribution hazard ratio 1.45) than those treated sooner, widening the gap in cumulative mortality by 1.2 percentage points at 5 years and 1.9 points at 10 years.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A single-center workflow study published in <a href="https://doi.org/10.1053/j.sult.2022.11.004" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Seminars in Ultrasound, CT and MR</a> shows why that 60-day tail exists. Tracking its own screening-to-biopsy pathway between October 2021 and September 2022, the center measured an average of 21 days from screening to diagnostic imaging and another 12 days from diagnostic imaging to biopsy — a combined 33 days, against a national quality benchmark (NQMBC) of roughly 12.5 days and a commonly cited 30-day European guideline threshold. The authors were candid about the cause: "during periods of adequate staffing, our screening mammograms are signed off in 2 days' time," but during the study period, screening mammogram reads sometimes took 7-8 days, with only 6 full-time-equivalent radiologists covering the caseload of what should have been nine.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That single-center strain reflects a national pattern. A February 2026 report from <a href="https://medicushcs.com/resources/breast-imaging-radiologist-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Medicus Healthcare Solutions</a> found <strong>79%</strong> of radiology practices short-staffed in breast imaging, with roughly 7,500 breast imaging radiologists covering the entire U.S. — about four per 100,000 women aged 40 and older. That workforce is now reading for a larger pool of patients than it was two years ago: the <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">U.S. Preventive Services Task Force's April 2024 recommendation</a> lowered the routine starting age for biennial screening from 50 to 40, moving millions of women in their 40s from an individualized-decision recommendation to a routine one — without a corresponding increase in breast imaging radiologists to read their mammograms and follow-up studies.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The pipeline argument, not just the screening argument
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Put the two sets of findings together and a more complete picture emerges than either study alone supports. Screening-detected cancer has a large, real survival advantage over symptom-detected cancer — that much is well established and getting stronger evidence behind it. But that advantage is realized through a pipeline with several links: detection, diagnostic workup, reporting, biopsy, and treatment start. A workforce that's 79% short-staffed and taking 7-8 days to sign off routine screening reads, feeding into a system where a 60-day treatment delay carries a 45% higher mortality risk, is a pipeline under strain at more than one point. Expanding who gets screened, as the 2024 USPSTF change did, increases pressure on that pipeline; it doesn't relieve it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's product is CT reporting, not mammography — it doesn't sit inside this specific pipeline. But the constraint these studies describe is the same one xAID is built to address on CT: early detection only pays off if reporting and the steps that follow keep pace with it, and a radiologist workforce running short-staffed is a bottleneck no amount of additional screening volume fixes on its own. On CT, xAID's AI drafts a structured, ready-to-sign report within minutes of a study reaching the queue, with in-house radiologist review on every preliminary before the client's reading radiologist signs the final. The lesson from this breast cancer data generalizes: detection is the first stage of a pipeline, not the whole of it, and the reporting stage behind it needs its own fix.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Does screening-detected breast cancer really have better outcomes than symptom-detected cancer?',
                    a: 'Yes, across multiple 2025 studies. An 821-patient Ottawa Hospital cohort published in Radiology: Imaging Cancer found symptom-detected breast cancer carried a 63% higher likelihood of death than screening-detected cancer over a mean 6.7-year follow-up. A separate propensity-matched analysis of 507 patients per group at Stony Brook, published in AJR, found 5-year overall survival of 94.4% for screening-detected cancer versus 79.6% for clinically detected cancer, and 10-year survival of 82.7% versus 66.1%.',
                  },
                  {
                    q: 'Why do screening-detected breast cancers have better outcomes?',
                    a: 'Mainly stage and tumor size at diagnosis. In the Stony Brook AJR cohort, 42% of screening-detected tumors were 1-10mm versus 13% of clinically detected tumors, and 35.5% of screening-detected cases were non-invasive versus 8.9% of clinically detected cases, while 7.7% of clinically detected cases were already distant metastatic versus 0% of screening-detected cases. Smaller, earlier-stage disease needs less aggressive treatment — 66.1% of the screening-detected group had lumpectomy alone versus 39.3% of the clinically detected group, and only 15% needed chemotherapy versus 40.2%.',
                  },
                  {
                    q: 'Does finding cancer early on a screening mammogram guarantee a fast start to treatment?',
                    a: 'No. A SEER-Medicare analysis of 31,306 women with stage I-III breast cancer found a median time-to-treatment of 27 days, but the 7.5% of patients whose treatment started 60 days or more after diagnosis had a 45% higher risk of breast-cancer-specific mortality. Separately, a single-center workflow study documented screening-to-diagnostic-imaging waits averaging 21 days and screening mammogram sign-off delayed up to 7-8 days during radiologist staffing shortages — against a national breast-imaging workforce where a February 2026 Medicus Healthcare Solutions report found 79% of practices short-staffed. Detection speed and reporting-to-treatment speed are separate variables, and only one of them is what screening statistics usually measure.',
                  },
                  {
                    q: 'Where does xAID fit into the breast cancer screening pipeline?',
                    a: "xAID's product is CT reporting, not mammography, so it doesn't sit directly in this pipeline. But the pattern these studies expose — that early detection's value depends on how fast reporting and treatment keep up, not just on screening uptake — is the same constraint xAID addresses on CT: its AI drafts a structured, ready-to-sign report within minutes of a study reaching the queue, with in-house radiologist review on every preliminary and the client's reading radiologist signing the final. Detection is only the first stage of a pipeline; the reporting stage behind it needs its own fix.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: "Impact of Method of Detection of Breast Cancer on Clinical Outcomes in Individuals Aged 40 Years or Older," <em>Radiology: Imaging Cancer</em> (2025), <a href="https://doi.org/10.1148/rycan.240046" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1148/rycan.240046</a>, as covered by <a href="https://www.rsna.org/news/2025/may/breast-screening-brings-better-outcomes" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RSNA</a> and <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/screening-detected-breast-cancer-linked-better-outcomes" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. "Associations of Breast Cancer Method of Detection With Tumor Characteristics, Treatments, and Overall Survival," <em>AJR</em> (2025), <a href="https://doi.org/10.2214/AJR.25.33245" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.2214/AJR.25.33245</a>. Pathak et al., "Increased breast cancer mortality due to treatment delay and needle biopsy type," <em>Breast Cancer</em> (2023), <a href="https://doi.org/10.1007/s12282-023-01456-3" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s12282-023-01456-3</a>. Vijayaraghavan et al., <em>Seminars in Ultrasound, CT and MR</em> (2023), <a href="https://doi.org/10.1053/j.sult.2022.11.004" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1053/j.sult.2022.11.004</a>. Breast imaging workforce data via <a href="https://medicushcs.com/resources/breast-imaging-radiologist-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medicus Healthcare Solutions</a>. Screening guideline via <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">USPSTF</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Detection is the first stage. Reporting is the next one."
          sub="See how xAID's AI drafts a structured, ready-to-sign CT report within minutes of a study landing in the queue — with in-house radiologist review on every preliminary."
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
              <Link to="/blog/incidental-findings-chest-ct-breast-lesions/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Findings on Chest CT: The Breast Lesions Radiologists Are Missing</div>
              </Link>
              <Link to="/blog/portable-mri-icu-reporting-bottleneck/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Portable MRI Is Safe at the ICU Bedside. The Reporting Wait Isn't Solved.</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BreastCancerScreeningOutcomes;
