import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaClearedBreastCancerRecurrenceRiskSoftware = () => {
  const post = {
    title: "FDA Cleared Breast Cancer Recurrence Risk Software. Here's the Evidence Bar It Set",
    dateIso: '2026-10-19',
    date: 'October 19, 2026',
    category: 'FDA & Regulatory',
    readingTime: 7,
    description: "FDA cleared SimBioSys's TumorSight Risk breast cancer recurrence score via 510(k). What the validation data and predicate chain reveal about risk-scoring AI.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA-Cleared Breast Cancer Recurrence Risk Software | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/fda-cleared-breast-cancer-recurrence-risk-software/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA-Cleared Breast Cancer Recurrence Risk Software | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA-Cleared Breast Cancer Recurrence Risk Software | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-cleared-breast-cancer-recurrence-risk-software" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-cleared-breast-cancer-recurrence-risk-software",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "FDA cleared breast cancer recurrence risk software, prognostic imaging AI, breast cancer recurrence risk calculator, FDA 510k AI radiology, risk-scoring CT AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA clear for breast cancer recurrence risk?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA granted 510(k) clearance to TumorSight Risk, software from Chicago-based SimBioSys that analyzes a pre-treatment breast MRI alongside pathology and clinical factors (age, race, tumor stage, nodal stage, histologic grade) to produce a 0-100 score and a low/intermediate/high recurrence-risk category at five and ten years. It is indicated for adult women with hormone receptor-positive, HER2-negative, node-negative or node-positive, Stage I-IIIA breast cancer, a subtype representing roughly 75% of U.S. breast cancers."
              }
            },
            {
              "@type": "Question",
              "name": "What evidence supported the clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A blinded, prospectively-designed retrospective, multi-institutional validation study of 2,129 patients from Mayo Clinic, Emory University, Stanford Medicine, and Mercy Medical Cedar Rapids. High-risk patients had about 3.3 times the recurrence risk of low-risk patients, each 10-point increase in score was associated with a 22% relative increase in recurrence risk, and the score remained statistically significant after adjusting for standard prognostic factors. Reported negative predictive values were 97.0% at five years and 91.4% at ten years."
              }
            },
            {
              "@type": "Question",
              "name": "Did the FDA require a new regulatory pathway for this tool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. TumorSight Risk went through a standard 510(k), not a De Novo. It cited ArteraAI Breast — a pathology-image-based prognostic tool cleared under the same product code months earlier — as its predicate, even though TumorSight Risk reads MRI rather than pathology slides. The underlying classification regulation describes the input generically as digital images rather than naming a modality, which let an MRI-based tool claim substantial equivalence to a pathology-based predicate."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for CT-based risk-scoring and draft-report AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It previews the evidence FDA will expect from any imaging AI that outputs a risk score or prognosis rather than just flagging a finding: multi-institutional validation cohorts in the thousands, externally reported calibration statistics like hazard ratios and negative predictive value, and a documented predicate rationale. For draft-report CT AI, the clearance reinforces that prognostic claims carry a higher evidentiary bar than detection claims, and that a radiologist still reviews and signs off on what reaches a patient's chart."
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
                FDA &amp; Regulatory
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              FDA cleared breast cancer recurrence risk software.<br />
              <span className="text-white/60">Here's the evidence bar it set</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 510(k) clearance for an MRI-derived breast cancer recurrence score is a case study in how the FDA is starting to evaluate prognostic imaging AI — not just detection tools. The validation data and the predicate chain behind it are a useful preview of the bar that risk-scoring and draft-report CT AI will increasingly be held to.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '510(k)', label: 'Clearance pathway', sub: 'not a new De Novo' },
            { stat: '2,129', label: 'Patients validated', sub: '4 U.S. academic sites' },
            { stat: '22%', label: 'Risk increase per 10 pts', sub: 'in the recurrence score' },
            { stat: '97.0%', label: 'Negative predictive value', sub: '91.4% at 10 years' },
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
                On <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K260023" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">September 25, 2026</a>, the FDA granted 510(k) clearance to TumorSight Risk, cloud-based software from Chicago-based SimBioSys, <a href="https://www.diagnosticimaging.com/view/fda-first-mri-derived-ai-software-assessing-breast-cancer-recurrence-risk" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announced publicly</a> on October 15, 2026. It's described as the first MRI-derived AI tool cleared to assess breast cancer recurrence risk — a prognostic claim, not a detection or diagnosis claim.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The device works in sequence with an earlier-cleared companion, TumorSight Viz, which segments a patient's pre-treatment contrast-enhanced breast MRI into a tissue map. TumorSight Risk then combines imaging-derived values from that map with age, race, clinical tumor stage, nodal stage, and tumor histologic grade in a regression-based machine learning model, producing a score from 0 to 100 and a low-, intermediate-, or high-risk category for recurrence at five and ten years. It's indicated for adult women with hormone receptor-positive, HER2-negative, node-negative or node-positive, Stage I-IIIA breast cancer — a subtype that accounts for <a href="https://radiologybusiness.com/topics/artificial-intelligence/fda-clears-tool-assessing-breast-cancer-recurrence-risk-mri" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">roughly 75% of U.S. breast cancers</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "For the first time, clinicians can use the rich biological and spatial information already captured in a patient's breast MRI — together with standard pathology and clinical factors — to gain personalized insight into recurrence risk," said SimBioSys president and CEO Stacey Stevens, <a href="https://www.unite.ai/simbiosys-wins-fda-clearance-for-breast-cancer-recurrence-ai-tool/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">quoted in trade coverage</a> of the clearance. The company has positioned the score as a complement to tissue-based genomic assays, available earlier in the care pathway, before a patient even has surgery; a Mayo Clinic oncologist involved in the validation work was quoted separately saying MRI-derived risk assessments "may provide prognostic information beyond standard clinicopathologic factors."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The evidence bar: what "validated" actually meant here
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                FDA's 510(k) summary describes a blinded, prospectively-designed retrospective, multi-institutional validation study of 2,129 patients diagnosed between 2010 and 2024 at four sites — Mayo Clinic, Emory University, Stanford Medicine, and Mercy Medical Cedar Rapids — separate from the 1,133-patient, six-site cohort used to train the model. That training/validation split, across independent institutions, is itself part of the evidence bar: a model that only performs well on the data it was built from doesn't clear.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The reported performance is prognostic, not diagnostic — it's about separating outcomes, not finding a lesion. High-risk patients had about <strong>3.3 times</strong> the recurrence risk of low-risk patients, and each 10-point increase in score was associated with a <strong>22%</strong> relative increase in recurrence risk. Five-year recurrence risk ranged from roughly 2.2% in the lowest score band to 13.6% in the highest; ten-year risk ranged from about 6.2% to 34.2%. The score stayed statistically significant after adjusting for standard prognostic factors, and reported negative predictive values were <strong>97.0%</strong> at five years and <strong>91.4%</strong> at ten — a relevant number for a tool meant to help identify patients who may need less aggressive treatment, not just more. A separate precision analysis reported 99.4% agreement across repeated runs on the same images.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that is sensitivity/specificity for catching a finding on a scan. It's survival-curve statistics: hazard ratios, dose-response by score, and predictive values calculated against real follow-up outcomes in thousands of patients. That's the shape of evidence FDA is asking for when a device's claim is "this patient's risk is X," rather than "this scan contains a finding."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The more interesting part: how it avoided a new regulatory pathway
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                TumorSight Risk didn't need a De Novo review, which is typically required when no legally marketed predicate exists for a novel device type. Instead, it went through a standard 510(k) by citing a predicate that had been cleared only months earlier: ArteraAI Breast, a pathology-image-based prognostic tool cleared under <a href="https://fda.innolitics.com/device/K254115" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">510(k) K254115</a> in May 2026, which itself traced back to a De Novo decision for a prostate-cancer version of the same underlying technology. Both products share FDA product code SHW, under the regulation covering pathology software that analyzes digital images to generate a cancer-prognosis score.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Here's the detail that matters beyond breast imaging: that classification regulation describes its input generically — "digital images" — rather than naming a modality, with pathology slides appearing only as a parenthetical example. Independent regulatory analysis of the clearance has pointed out that this wording let SimBioSys argue substantial equivalence between an MRI-derived score and a pathology-slide-derived predicate, despite the two tools reading entirely different kinds of images to reach a similar kind of output (<a href="https://innolitics.com/articles/september-2026-ai-ml-fda-clearances/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Innolitics, September 2026 AI/ML clearances review</a>). In effect, once FDA writes a product-code regulation around an output type instead of an input type, a predicate chain for that output can absorb new imaging modalities through 510(k) rather than forcing each one through its own De Novo.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a reusable pattern, not a one-off. It is also precisely the mechanism by which the regulatory bar for one modality gets exported to another — exactly the kind of structural detail that matters for anyone tracking where risk-scoring CT AI is headed.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Anatomy of the 510(k): TumorSight Risk vs. its predicate
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Attribute</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">TumorSight Risk</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Predicate: ArteraAI Breast</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Input modality</td>
                      <td className="py-3 pr-4">Pre-treatment contrast-enhanced breast MRI</td>
                      <td className="py-3">Digitized H&amp;E pathology slides</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Clearance pathway</td>
                      <td className="py-3 pr-4">510(k) (K260023), Sept. 2026</td>
                      <td className="py-3">510(k) (K254115), May 2026</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Product code / regulation</td>
                      <td className="py-3 pr-4">SHW / 21 CFR 864.3755</td>
                      <td className="py-3">SHW / 21 CFR 864.3755</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Validation cohort</td>
                      <td className="py-3 pr-4">2,129 patients, 4 sites</td>
                      <td className="py-3">1,271 patients, 3 sites</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Output</td>
                      <td className="py-3 pr-4">0-100 score; low/intermediate/high, 5- &amp; 10-yr recurrence risk</td>
                      <td className="py-3">Score; low/high, 5- &amp; 10-yr distant-metastasis risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Figures per FDA 510(k) records K260023 and <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K254115" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">K254115</a>, cross-referenced with <a href="https://www.medtechdive.com/news/artera-gets-fda-clearance-for-ai-breast-cancer-risk-prediction-tool/819665/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">trade reporting on the earlier clearance</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this previews for CT-based risk scoring
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CT-AI today is mostly built around detection and triage: find the nodule, flag the bleed, sort the worklist. But draft-report systems that produce structured findings across a whole study are a natural precursor to the next step — attaching a quantified risk estimate to a finding, the way TumorSight Risk attaches a recurrence estimate to a breast MRI. This clearance is a useful early marker of what FDA will expect when that happens on CT: thousand-patient, multi-institutional, externally validated cohorts; calibration metrics reported as hazard ratios and predictive values rather than accuracy alone; and a documented, defensible predicate rationale rather than a claim of total novelty.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It's also a reminder of where the evidentiary bar sits relative to the clinical workflow. A prognostic score — on MRI or, eventually, CT — is an input to a radiologist's and oncologist's decision, not a replacement for it. That's consistent with how AI CT reporting already operates: a foundation model produces a comprehensive, structured draft across the full study, xAID's in-house radiologist reviews every preliminary, and it reaches the client ready-to-sign — the client's reading radiologist signs the final report. Whatever a future risk-scoring layer adds to that draft, the chart of custody for the final clinical call doesn't change.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the FDA clear for breast cancer recurrence risk?',
                    a: 'The FDA granted 510(k) clearance to TumorSight Risk, software from Chicago-based SimBioSys that analyzes a pre-treatment breast MRI alongside pathology and clinical factors (age, race, tumor stage, nodal stage, histologic grade) to produce a 0-100 score and a low/intermediate/high recurrence-risk category at five and ten years. It is indicated for adult women with hormone receptor-positive, HER2-negative, node-negative or node-positive, Stage I-IIIA breast cancer, a subtype representing roughly 75% of U.S. breast cancers.',
                  },
                  {
                    q: 'What evidence supported the clearance?',
                    a: 'A blinded, prospectively-designed retrospective, multi-institutional validation study of 2,129 patients from Mayo Clinic, Emory University, Stanford Medicine, and Mercy Medical Cedar Rapids. High-risk patients had about 3.3 times the recurrence risk of low-risk patients, each 10-point increase in score was associated with a 22% relative increase in recurrence risk, and the score remained statistically significant after adjusting for standard prognostic factors. Reported negative predictive values were 97.0% at five years and 91.4% at ten years.',
                  },
                  {
                    q: 'Did the FDA require a new regulatory pathway for this tool?',
                    a: 'No. TumorSight Risk went through a standard 510(k), not a De Novo. It cited ArteraAI Breast — a pathology-image-based prognostic tool cleared under the same product code months earlier — as its predicate, even though TumorSight Risk reads MRI rather than pathology slides. The underlying classification regulation describes the input generically as digital images rather than naming a modality, which let an MRI-based tool claim substantial equivalence to a pathology-based predicate.',
                  },
                  {
                    q: 'What does this mean for CT-based risk-scoring and draft-report AI?',
                    a: 'It previews the evidence FDA will expect from any imaging AI that outputs a risk score or prognosis rather than just flagging a finding: multi-institutional validation cohorts in the thousands, externally reported calibration statistics like hazard ratios and negative predictive value, and a documented predicate rationale. For draft-report CT AI, the clearance reinforces that prognostic claims carry a higher evidentiary bar than detection claims, and that a radiologist still reviews and signs off on what reaches a patient\'s chart.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: <a href="https://radiologybusiness.com/topics/artificial-intelligence/fda-clears-tool-assessing-breast-cancer-recurrence-risk-mri" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; <a href="https://www.diagnosticimaging.com/view/fda-first-mri-derived-ai-software-assessing-breast-cancer-recurrence-risk" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Diagnostic Imaging</a>; <a href="https://www.unite.ai/simbiosys-wins-fda-clearance-for-breast-cancer-recurrence-ai-tool/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Unite.AI</a>; <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K260023" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA 510(k) K260023</a>; <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K254115" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA 510(k) K254115</a>; <a href="https://www.medtechdive.com/news/artera-gets-fda-clearance-for-ai-breast-cancer-risk-prediction-tool/819665/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>; <a href="https://innolitics.com/articles/september-2026-ai-ml-fda-clearances/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Innolitics regulatory analysis</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A radiologist still reviews every draft. Every time."
          sub="That's the model FDA-cleared prognostic AI assumes too — a score or a draft feeding a clinical decision, not replacing it. See how xAID's ready-to-sign CT reports work, free for 5 studies."
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
              <Link to="/blog/software-as-a-medical-device-warning-letter-case-study/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">FDA &amp; Regulatory</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">What an FDA Warning Letter Teaches About SaMD Change Control</div>
              </Link>
              <Link to="/blog/pediatric-radiology-ai-fda-labeling-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">FDA &amp; Regulatory</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Pediatric Radiology AI: Why Only 17% of Cleared Devices Are Labeled for Kids</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaClearedBreastCancerRecurrenceRiskSoftware;
