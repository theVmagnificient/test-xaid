import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const BreastCancerRecurrencePredictionTools = () => {
  const post = {
    title: "FDA Clears a Breast Cancer Recurrence Prediction Tool — What It Signals for AI Validation",
    dateIso: '2026-10-17',
    date: 'October 17, 2026',
    category: 'Regulatory & Policy',
    readingTime: 7,
    description: "FDA cleared SimBioSys's TumorSight Risk, an MRI-derived breast cancer recurrence prediction tool — not a lesion-detection device. Here's what the validation bar for prognostic imaging AI means for anyone buying AI that touches a radiology report.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA Clears Breast Cancer Recurrence Prediction AI | xAID</title>
        <meta name="description" content="FDA cleared an MRI-derived breast cancer recurrence prediction tool, not a detection device — what the validation bar means for report-facing AI buyers." />
        <link rel="canonical" href="https://xaid.ai/blog/breast-cancer-recurrence-prediction-tools/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA Clears Breast Cancer Recurrence Prediction AI | xAID" />
        <meta property="og:description" content="FDA cleared an MRI-derived breast cancer recurrence prediction tool, not a detection device — what the validation bar means for report-facing AI buyers." />
        <meta property="og:url" content="https://xaid.ai/blog/breast-cancer-recurrence-prediction-tools" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA Clears Breast Cancer Recurrence Prediction AI | xAID" />
        <meta name="twitter:description" content="FDA cleared an MRI-derived breast cancer recurrence prediction tool, not a detection device — what the validation bar means for report-facing AI buyers." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/breast-cancer-recurrence-prediction-tools" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/breast-cancer-recurrence-prediction-tools",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "breast cancer recurrence prediction tools, FDA cleared prognostic AI, breast MRI AI, imaging AI validation, AI radiology report evidence"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA clear for SimBioSys's TumorSight Risk?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA granted 510(k) clearance to TumorSight Risk, cloud-based software from Chicago-based SimBioSys that analyzes breast MRI alongside pathology and clinical data to estimate a patient's five- and ten-year risk of breast cancer recurrence. It is indicated for adult women with hormone receptor-positive, HER2-negative, Stage I-IIIA breast cancer and outputs a 0-100 score with a high/intermediate/low risk classification."
              }
            },
            {
              "@type": "Question",
              "name": "Is TumorSight Risk a cancer-detection tool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. TumorSight Risk is a prognostic, risk-stratification tool used after a cancer diagnosis is already established — it estimates how likely recurrence is over five and ten years, not whether a lesion is present. That distinction matters because prognostic claims require different validation evidence than detection claims: longitudinal outcomes data rather than lesion-level sensitivity and specificity."
              }
            },
            {
              "@type": "Question",
              "name": "What evidence did FDA require for this prognostic clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SimBioSys's clearance was supported by a blinded, multi-institutional validation study of 2,129 patients across Mayo Clinic, Emory University, Stanford Medicine and Mercy Medical Cedar Rapids. The high-risk group showed a 3.3-fold greater recurrence risk than the low-risk group, each 10-point increase in score tracked a 22% increase in relative recurrence risk, and the score remained an independent predictor of recurrence-free survival after adjusting for standard prognostic factors (p=0.002). The five-year negative predictive value was 97.0%."
              }
            },
            {
              "@type": "Question",
              "name": "What should buyers look for when any AI tool touches a radiology report?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The same questions a prognostic clearance forces: what outcome is the AI actually predicting, how large and how independent was the validation cohort, did performance hold up after adjusting for factors clinicians already use, and does a radiologist still review and finalize anything the AI contributes before it reaches a patient's chart. A clearance letter is a floor, not a substitute for reading the underlying validation data."
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
                Regulatory &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              FDA clears a breast cancer recurrence prediction tool.<br />
              <span className="text-white/60">It isn't a detection device — and that's the point.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              SimBioSys's TumorSight Risk just cleared FDA review on the strength of outcomes data, not lesion-finding accuracy. That's a quiet but telling marker of where the imaging-AI clearance bar is heading — and a useful checklist for anyone evaluating AI that ends up in a report.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '2,129', label: 'Patients in validation cohort', sub: '4 institutions' },
            { stat: '3.3x', label: 'Higher recurrence risk', sub: 'high- vs low-risk group' },
            { stat: '97.0%', label: '5-year negative predictive value', sub: '91.4% at 10 years' },
            { stat: '~75%', label: 'Of US breast cancers', sub: 'are the targeted HR+/HER2- subtype' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What FDA actually cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On October 15, 2026, Chicago-based <a href="https://simbiosys.com/2026/10/15/simbiosys-secures-fda-clearance-for-tumorsight-risk/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">SimBioSys announced</a> that its TumorSight Risk software received 510(k) clearance from the FDA, as first reported by <a href="https://www.auntminnie.com/clinical-news/womens-imaging/breast/news/15837701/fda-clears-simbiosyss-breast-cancer-risk-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. The cloud-based software analyzes a patient's breast MRI alongside pathology and clinical data to estimate five- and ten-year risk of recurrence, producing a proprietary 0-100 score and a high-, intermediate- or low-risk classification. It's indicated for adult women with hormone receptor-positive, HER2-negative, Stage I-IIIA breast cancer — a subtype that accounts for roughly <a href="https://www.unite.ai/simbiosys-wins-fda-clearance-for-breast-cancer-recurrence-ai-tool/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">75% of US breast cancers</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's worth pausing on, because it is not what most imaging-AI headlines describe. TumorSight Risk doesn't find a tumor on a scan. It runs after a cancer diagnosis is already made, using imaging the patient already has as one input into a prognosis — how likely the disease is to come back. SimBioSys describes it as the first AI-powered, MRI-derived tool of its kind to reach clearance for this use, building on the company's earlier-cleared <a href="https://simbiosys.com/2026/10/15/simbiosys-secures-fda-clearance-for-tumorsight-risk/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">TumorSight Viz</a> surgical-visualization platform and a Mayo Clinic collaboration on breast cancer decision support.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Detection AI proves it can find things. Prognostic AI has to prove something harder.
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most imaging-AI clearances to date — lung nodules, intracranial hemorrhage, pulmonary embolism triage — answer a bounded question: is the finding present on this image, yes or no, and how sensitive and specific is the model at calling it. That's a one-time read against a ground truth a radiologist can establish today.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A recurrence-risk score makes a claim that can only be checked years later, against real patient outcomes, and only means something if it adds information a clinician doesn't already have from tumor grade, stage, and nodal status. TumorSight Risk isn't the first device to clear FDA on that basis — its own predicate, <a href="https://www.medtechdive.com/news/artera-gets-fda-clearance-for-ai-breast-cancer-risk-prediction-tool/819665/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ArteraAI Breast</a>, a digital-pathology tool that scores distant-metastasis risk from biopsy slides, cleared in May 2026 and established the product-code category it sits in. Two prognostic breast-cancer clearances in five months is a small sample, but it's a directional signal: FDA's imaging-adjacent AI bar is widening from "can it find the lesion" to "can it predict what happens to the patient" — a claim regulators and insurers alike generally price as medically weightier, because it can influence decisions about chemotherapy or endocrine therapy rather than just flagging a study for a closer look.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Two kinds of claim, two kinds of evidence
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#0D0D0D]">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Detection / triage AI</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Prognostic / risk AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Core claim', 'Is the finding present on this image?', 'What is the likely future outcome for this patient?'],
                      ['Ground truth', 'Established by expert read at time of exam', 'Established years later, by what actually happened'],
                      ['Headline metrics', 'Sensitivity, specificity, AUC vs. a reader panel', 'Hazard ratios, risk stratification, negative predictive value'],
                      ['TumorSight Risk evidence', '—', '2,129 patients, 4 institutions, 3.3x risk separation, p=0.002 after adjustment'],
                      ['Report impact', 'Flags a study for prioritized or closer review', 'Can inform treatment decisions (e.g., chemotherapy)'],
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

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The validation data behind the clearance
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                SimBioSys's clearance rests on a blinded, multi-institutional validation study of <strong>2,129 patients</strong> diagnosed between 2010 and 2024 across Mayo Clinic, Emory University, Stanford Medicine and Mercy Medical Cedar Rapids, with results presented at the <a href="https://www.unite.ai/simbiosys-wins-fda-clearance-for-breast-cancer-recurrence-ai-tool/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2026 ASCO Annual Meeting</a>. Patients the model classified as high-risk had a <strong>3.3-fold</strong> greater rate of recurrence than those classified low-risk, and each 10-point increase in the 0-100 score tracked a <strong>22%</strong> increase in relative recurrence risk. Five-year recurrence risk ranged from <strong>2.2%</strong> in the lowest score band to <strong>13.6%</strong> in the highest; the ten-year range was <strong>6.2% to 34.2%</strong>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two details matter more than the headline separation. First, the score stayed a statistically independent predictor of recurrence-free survival (<strong>p=0.002</strong>) after adjusting for the prognostic factors clinicians already use — evidence it adds information rather than restating what's already on the pathology report. Second, its negative predictive value was <strong>97.0%</strong> at five years and <strong>91.4%</strong> at ten, the figure that matters most for a tool meant to help rule patients out of more aggressive treatment. A separate precision study found 99.4% agreement across repeated runs on the same images under simulated noise — a reproducibility check, not a clinical-outcomes one, but relevant for any software whose output a clinician will act on.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Mayo Clinic's Dr. Matthew Goetz, quoted in the company's release, framed the clinical rationale as MRI-derived assessment adding prognostic information beyond standard factors — not replacing them. SimBioSys positions TumorSight Risk as a complement to tissue-based genomic assays, available earlier in the care pathway since it doesn't require an additional biopsy procedure or added turnaround time.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this should mean for anyone buying AI that touches the report
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A 510(k) clearance letter establishes substantial equivalence to a predicate — it is a regulatory floor, not a guarantee that a given tool's evidence is strong, large, or independent. The TumorSight Risk filing is useful precisely because the underlying numbers are public and checkable: cohort size, number of sites, whether performance held after adjustment, and what the negative predictive value actually was. Those are the same questions worth asking of any AI, prognostic or otherwise, before letting its output reach a report:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'What is it actually claiming?',
                    desc: 'Detection, triage, prognosis, and quantification are different claims that warrant different evidence. A clearance for one does not imply validation for another — read the indication, not just the headline.',
                  },
                  {
                    title: 'How big and how independent was the validation?',
                    desc: 'Single-site, single-vendor-curated datasets are a weaker claim than a blinded, multi-institutional cohort like the 2,129-patient study behind this clearance. More sites generally means less risk the result is an artifact of one population or one scanner.',
                  },
                  {
                    title: 'Did it beat what clinicians already know?',
                    desc: "A score that correlates with outcome but adds nothing after adjusting for stage, grade, and nodal status isn't clinically useful — it's redundant. Look for evidence of independent predictive value, not just raw separation between risk groups.",
                  },
                  {
                    title: 'Does a radiologist still finalize it?',
                    desc: 'Whatever an AI tool contributes to a report — a measurement, a risk score, a drafted finding — it should go in front of the radiologist who signs the final report, not straight to the chart.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's CT reporting AI doesn't make outcome-prediction claims like TumorSight Risk — it drafts structured, <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">comprehensive findings</Link> for the studies radiologists already read. But the same evaluation discipline applies regardless of what an AI tool claims: check what it was actually validated on, at what scale, and whether a radiologist remains the one who reviews and finalizes every report before it reaches a patient's chart — which is how every xAID report is built, ready-to-sign by the client's reading radiologist.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What did the FDA clear for SimBioSys's TumorSight Risk?",
                    a: "The FDA granted 510(k) clearance to TumorSight Risk, cloud-based software from Chicago-based SimBioSys that analyzes breast MRI alongside pathology and clinical data to estimate a patient's five- and ten-year risk of breast cancer recurrence. It is indicated for adult women with hormone receptor-positive, HER2-negative, Stage I-IIIA breast cancer and outputs a 0-100 score with a high/intermediate/low risk classification.",
                  },
                  {
                    q: 'Is TumorSight Risk a cancer-detection tool?',
                    a: "No. TumorSight Risk is a prognostic, risk-stratification tool used after a cancer diagnosis is already established — it estimates how likely recurrence is over five and ten years, not whether a lesion is present. That distinction matters because prognostic claims require different validation evidence than detection claims: longitudinal outcomes data rather than lesion-level sensitivity and specificity.",
                  },
                  {
                    q: 'What evidence did FDA require for this prognostic clearance?',
                    a: "SimBioSys's clearance was supported by a blinded, multi-institutional validation study of 2,129 patients across Mayo Clinic, Emory University, Stanford Medicine and Mercy Medical Cedar Rapids. The high-risk group showed a 3.3-fold greater recurrence risk than the low-risk group, each 10-point increase in score tracked a 22% increase in relative recurrence risk, and the score remained an independent predictor of recurrence-free survival after adjusting for standard prognostic factors (p=0.002). The five-year negative predictive value was 97.0%.",
                  },
                  {
                    q: 'What should buyers look for when any AI tool touches a radiology report?',
                    a: 'The same questions a prognostic clearance forces: what outcome is the AI actually predicting, how large and how independent was the validation cohort, did performance hold up after adjusting for factors clinicians already use, and does a radiologist still review and finalize anything the AI contributes before it reaches a patient\'s chart. A clearance letter is a floor, not a substitute for reading the underlying validation data.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/womens-imaging/breast/news/15837701/fda-clears-simbiosyss-breast-cancer-risk-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, <a href="https://simbiosys.com/2026/10/15/simbiosys-secures-fda-clearance-for-tumorsight-risk/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">SimBioSys press release</a> (October 15, 2026), <a href="https://www.unite.ai/simbiosys-wins-fda-clearance-for-breast-cancer-recurrence-ai-tool/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Unite.AI</a>, and <a href="https://www.medtechdive.com/news/artera-gets-fda-clearance-for-ai-breast-cancer-risk-prediction-tool/819665/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a> on the ArteraAI Breast predicate clearance. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Evidence you can read, not just a clearance letter"
          sub="See the validation data behind xAID's CT reporting AI and try it on 5 free studies."
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
              <Link to="/blog/pediatric-radiology-ai-fda-labeling-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Pediatric Radiology AI: The FDA Labeling Gap</div>
              </Link>
              <Link to="/blog/software-as-a-medical-device-warning-letter-case-study/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">SaMD Warning Letter: A Change-Control Case Study</div>
              </Link>
              <Link to="/blog/misleading-imaging-claims-ai-vendor-marketing/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Misleading Imaging Claims in AI Vendor Marketing</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BreastCancerRecurrencePredictionTools;
