import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const BreastCancerRiskAssessmentSoftware = () => {
  const post = {
    title: "FDA Clears Breast Cancer Risk Assessment Software. Here's What It Signals for Reporting",
    dateIso: '2026-10-18',
    date: 'October 18, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "FDA cleared SimBioSys's TumorSight Risk breast cancer risk assessment software — and what it signals for AI risk scores entering reporting workflows.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA Clears Breast Cancer Risk Assessment Software | xAID</title>
        <meta name="description" content="FDA cleared SimBioSys's TumorSight Risk breast cancer risk assessment software — and what it signals for AI risk scores entering reporting workflows." />
        <link rel="canonical" href="https://xaid.ai/blog/breast-cancer-risk-assessment-software/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA Clears Breast Cancer Risk Assessment Software | xAID" />
        <meta property="og:description" content="FDA cleared SimBioSys's TumorSight Risk breast cancer risk assessment software — and what it signals for AI risk scores entering reporting workflows." />
        <meta property="og:url" content="https://xaid.ai/blog/breast-cancer-risk-assessment-software" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA Clears Breast Cancer Risk Assessment Software | xAID" />
        <meta name="twitter:description" content="FDA cleared SimBioSys's TumorSight Risk breast cancer risk assessment software — and what it signals for AI risk scores entering reporting workflows." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/breast-cancer-risk-assessment-software" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/breast-cancer-risk-assessment-software",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "breast cancer risk assessment software, FDA cleared AI risk stratification, prognostic AI radiology, structured radiology reporting, AI risk score reporting workflow"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What breast cancer risk assessment software did the FDA clear?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On September 25, 2026, the FDA granted 510(k) clearance (K260023) to TumorSight Risk, cloud-based software from Chicago-based SimBioSys. It combines breast MRI with pathology and clinical data to produce a 0-100 score and a high-, intermediate-, or low-risk classification estimating recurrence-free survival at five and ten years in adult women with hormone receptor-positive, HER2-negative, Stage I-IIIA breast cancer."
              }
            },
            {
              "@type": "Question",
              "name": "Is this the only FDA-cleared AI risk-stratification tool in oncology imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, and that is the broader point. A 2026 study in the Journal of Medical Internet Research found that among 1,430 FDA AI/ML-enabled device authorizations from 1995 through 2025, radiology's share of new authorizations slipped from 85.5% in 2020-2022 to 77.5% in 2023-2025 (the first statistically significant decline, P=.001), while categories like pathology grew roughly sixfold over the same period. Risk-stratification and prognostic scoring is an expanding device category, not a one-off."
              }
            },
            {
              "@type": "Question",
              "name": "What validation evidence supported the TumorSight Risk clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SimBioSys's clearance was supported by a blinded, multi-institutional validation study of 2,129 patients across Mayo Clinic, Emory University, Stanford Medicine and Mercy Medical Cedar Rapids. Patients the software classified as high-risk had a 3.3-fold greater recurrence rate than those classified low-risk, each 10-point increase in the 0-100 score tracked a 22% increase in relative recurrence risk, and the score remained an independent predictor of recurrence-free survival after adjusting for standard prognostic factors (p=0.002)."
              }
            },
            {
              "@type": "Question",
              "name": "Why does a risk score change how a radiology report has to be built?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A detected finding is typically a sentence in the impression, tied to one image. A risk score is a discrete numeric value and a categorical tier that needs to persist as structured data, be consumed by people who never open the original images (oncologists, tumor boards, surgeons), and stay traceable to the version of the model that produced it. Reporting systems built only for narrative text have nowhere consistent to put that, which is why structured, discrete-field reporting is becoming a prerequisite rather than a nice-to-have as more of these tools clear FDA review."
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
                Market &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              FDA clears new breast cancer risk assessment software.<br />
              <span className="text-white/60">The bigger story is where its output has to go.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A single 510(k) clearance for one company's MRI-derived risk score is not, by itself, news a reporting workflow needs to care about. A pattern of them is. Here's what this clearance is actually evidence of — and what it means for how structured risk scores get into a report at all.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '2,129', label: 'Patients in validation study', sub: '4 institutions' },
            { stat: '3.3x', label: 'Higher recurrence risk', sub: 'high- vs low-risk group' },
            { stat: '22%', label: 'Risk increase per 10 points', sub: 'on the 0–100 score' },
            { stat: '6x', label: 'Pathology AI growth rate', sub: "2023–25 vs 2020–22, JMIR" },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA actually cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 25, 2026, the FDA granted 510(k) clearance (<a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K260023" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">K260023</a>) to breast cancer risk assessment software from Chicago-based SimBioSys, publicly announced on October 15 and first covered by <a href="https://www.auntminnie.com/clinical-news/womens-imaging/breast/news/15837701/fda-clears-simbiosyss-breast-cancer-risk-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. The product, TumorSight Risk, is cloud-based software that combines a patient's breast MRI with pathology results and clinical factors to estimate recurrence-free survival at five and ten years, outputting a proprietary 0-100 score and a high-, intermediate-, or low-risk classification. Per the <a href="https://simbiosys.com/2026/10/15/simbiosys-secures-fda-clearance-for-tumorsight-risk/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">company's announcement</a>, it is indicated for adult women with hormone receptor-positive, HER2-negative, Stage I-IIIA breast cancer — a subtype that accounts for roughly 75% of U.S. breast cancers — and builds on the company's earlier-cleared TumorSight Viz surgical-visualization platform.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two regulatory details matter more than the headline. First, the software runs on data a patient already has — an MRI, a pathology report, clinical stage — so it adds no new procedure. Second, and less obviously, FDA's own database lists the device under product code SHW, a pathology-software-algorithm category, even though its primary input is an imaging study. That is a small but telling sign of where this category of tool actually sits: on the seam between radiology and pathology, not cleanly inside either one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This clearance is evidence of a pattern, not a product review
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to read a single clearance as a verdict on a single company. The more useful read is structural: regulators are clearing a growing number of tools whose output is not "finding present" or "finding absent" but a continuous risk score and a care-planning category. A 2026 longitudinal analysis published in the <em>Journal of Medical Internet Research</em> examined all 1,430 FDA AI/ML-enabled device authorizations between 1995 and 2025 and found that radiology's share of new authorizations — long the dominant specialty — actually declined from 85.5% of devices cleared in 2020-2022 to 77.5% in 2023-2025, the first statistically significant drop in the dataset (<a href="https://doi.org/10.2196/103040" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">P=.001</a>). Over that same window, pathology-category authorizations grew at roughly six times their prior annual rate.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read alongside each other, those two facts describe the same shift a single clearance announcement can't: imaging-derived AI is increasingly producing outputs that belong to oncology decision-making rather than image interpretation alone — scores, risk tiers, and prognostic indices that have to travel beyond the radiology report to be useful at all.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The validation behind this specific clearance
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                SimBioSys's filing rests on a blinded, multi-institutional validation study of <strong>2,129 patients</strong> diagnosed between 2010 and 2024 across Mayo Clinic, Emory University, Stanford Medicine, and Mercy Medical Cedar Rapids, with results presented at the 2026 ASCO Annual Meeting, as <a href="https://www.unite.ai/simbiosys-wins-fda-clearance-for-breast-cancer-recurrence-ai-tool/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Unite.AI</a>. Patients classified high-risk had a <strong>3.3-fold</strong> greater recurrence rate than those classified low-risk, and each 10-point increase in the 0-100 score tracked a <strong>22%</strong> increase in relative recurrence risk. Estimated five-year recurrence risk ranged from <strong>2.2%</strong> at the lowest scores to <strong>13.6%</strong> at the highest; the ten-year range was <strong>6.2% to 34.2%</strong>. The score remained a statistically independent predictor of recurrence-free survival after adjustment for standard prognostic factors — stage, grade, age, race, and treatment (<strong>p=0.002</strong>), per the company's release.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Mayo Clinic's Dr. Matthew Goetz, quoted in <a href="https://simbiosys.com/2026/10/15/simbiosys-secures-fda-clearance-for-tumorsight-risk/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">SimBioSys's announcement</a>, framed the finding conservatively: MRI-derived assessment "may provide prognostic information beyond standard clinicopathologic factors" — additive, not a replacement for what oncologists already use. SimBioSys describes the tool as complementing existing tissue-based genomic assays with an imaging-native assessment available earlier in the care pathway, since it requires no added biopsy procedure.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                A different kind of output needs a different home in the report
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The practical problem these tools create isn't clinical validity — FDA clearance is a floor for that. It's where the output lives once it exists. A detected finding and a risk score behave differently inside a reporting workflow:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#0D0D0D]">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Finding-detection AI</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Risk-stratification AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Core output', 'Present / absent, tied to an image location', 'A continuous score plus a risk tier'],
                      ['Claim horizon', 'What is true on this scan, today', 'What is likely to happen years out'],
                      ['Natural home', 'A sentence in the findings/impression', 'A discrete, versioned data element'],
                      ['Who else needs it', 'The reading radiologist', 'Oncologist, tumor board, surgeon — people who never open the images'],
                      ['Evidence type', 'Sensitivity/specificity vs. a reader panel', 'Outcomes cohort, risk separation, adjustment for known factors'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`py-3 pr-4 text-[15px] font-light leading-[1.6] ${i === 0 ? 'text-[#0D0D0D] font-normal' : 'text-[#444]'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A narrative mention — "risk score: 62, high-risk" buried in a paragraph of prose — technically satisfies a reporting requirement and fails everyone downstream who needs to pull that value into a tumor-board slide, an EHR flowsheet, or a treatment-decision tool without retyping it. As more risk-stratification and prognostic devices clear FDA review across both radiology and pathology product codes, the reporting layer that ingests their output has to be built for discrete fields from the start, not patched after the fact.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's CT reporting AI doesn't generate outcome-prediction scores like TumorSight Risk — it produces <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">structured, comprehensive report drafts</Link> for the studies radiologists already read. The relevant point for this trend is architectural rather than clinical: a reporting system built around structured, discrete data fields — rather than free text — is what lets a new input like a third-party risk score get incorporated cleanly as these tools proliferate, instead of requiring a rebuild every time a new device clears. Every xAID report stays ready-to-sign, with the reading radiologist as the one who finalizes what goes on the chart.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What breast cancer risk assessment software did the FDA clear?',
                    a: 'On September 25, 2026, the FDA granted 510(k) clearance (K260023) to TumorSight Risk, cloud-based software from Chicago-based SimBioSys. It combines breast MRI with pathology and clinical data to produce a 0-100 score and a high-, intermediate-, or low-risk classification estimating recurrence-free survival at five and ten years in adult women with hormone receptor-positive, HER2-negative, Stage I-IIIA breast cancer.',
                  },
                  {
                    q: 'Is this the only FDA-cleared AI risk-stratification tool in oncology imaging?',
                    a: 'No, and that is the broader point. A 2026 study in the Journal of Medical Internet Research found that among 1,430 FDA AI/ML-enabled device authorizations from 1995 through 2025, radiology\'s share of new authorizations slipped from 85.5% in 2020-2022 to 77.5% in 2023-2025 (the first statistically significant decline, P=.001), while categories like pathology grew roughly sixfold over the same period. Risk-stratification and prognostic scoring is an expanding device category, not a one-off.',
                  },
                  {
                    q: 'What validation evidence supported the TumorSight Risk clearance?',
                    a: "SimBioSys's clearance was supported by a blinded, multi-institutional validation study of 2,129 patients across Mayo Clinic, Emory University, Stanford Medicine and Mercy Medical Cedar Rapids. Patients the software classified as high-risk had a 3.3-fold greater recurrence rate than those classified low-risk, each 10-point increase in the 0-100 score tracked a 22% increase in relative recurrence risk, and the score remained an independent predictor of recurrence-free survival after adjusting for standard prognostic factors (p=0.002).",
                  },
                  {
                    q: 'Why does a risk score change how a radiology report has to be built?',
                    a: 'A detected finding is typically a sentence in the impression, tied to one image. A risk score is a discrete numeric value and a categorical tier that needs to persist as structured data, be consumed by people who never open the original images (oncologists, tumor boards, surgeons), and stay traceable to the version of the model that produced it. Reporting systems built only for narrative text have nowhere consistent to put that, which is why structured, discrete-field reporting is becoming a prerequisite rather than a nice-to-have as more of these tools clear FDA review.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/womens-imaging/breast/news/15837701/fda-clears-simbiosyss-breast-cancer-risk-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; <a href="https://simbiosys.com/2026/10/15/simbiosys-secures-fda-clearance-for-tumorsight-risk/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">SimBioSys press release</a> (October 15, 2026); FDA 510(k) database, <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K260023" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">K260023</a>; <a href="https://www.unite.ai/simbiosys-wins-fda-clearance-for-breast-cancer-recurrence-ai-tool/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Unite.AI</a>; Lee &amp; Youn, "Clinical Specialty Expansion of AI-Enabled and Machine Learning-Enabled Medical Devices Authorized by the US FDA From 1995 to 2025," <em>Journal of Medical Internet Research</em> (2026), <a href="https://doi.org/10.2196/103040" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.2196/103040</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured by design, ready-to-sign every time"
          sub="See how xAID's structured CT report drafts work, and try it on 5 free studies."
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
              <Link to="/blog/bi-rads-pediatric-structured-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">ACR: BI-RADS Wasn't Built for Kids</div>
              </Link>
              <Link to="/blog/pediatric-radiology-ai-fda-labeling-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Pediatric Radiology AI: The FDA Labeling Gap</div>
              </Link>
              <Link to="/blog/software-as-a-medical-device-warning-letter-case-study/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">SaMD Warning Letter: A Change-Control Case Study</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BreastCancerRiskAssessmentSoftware;
