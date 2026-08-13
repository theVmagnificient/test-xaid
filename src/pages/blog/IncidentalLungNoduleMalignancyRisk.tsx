import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const IncidentalLungNoduleMalignancyRisk = () => {
  const post = {
    title: 'AI Malignancy Risk Models for Incidental Lung Nodules',
    dateIso: '2026-08-13',
    date: 'August 13, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A new multicentre European Radiology study tested two deep learning models against the established Brock risk score on 269 incidental lung nodules from three hospitals. The AI models beat Brock on discrimination and, unlike Brock, held steady from site to site.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Malignancy Risk Models for Incidental Lung Nodules | xAID</title>
        <meta name="description" content="Deep learning models scored incidental lung nodules more consistently than the Brock risk score across three CT centres, per a new European Radiology study." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Malignancy Risk Models for Incidental Lung Nodules | xAID" />
        <meta property="og:description" content="Deep learning models scored incidental lung nodules more consistently than the Brock risk score across three CT centres, per a new European Radiology study." />
        <meta property="og:url" content="https://xaid.ai/blog/incidental-lung-nodule-malignancy-risk-ai" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Malignancy Risk Models for Incidental Lung Nodules | xAID" />
        <meta name="twitter:description" content="Deep learning models scored incidental lung nodules more consistently than the Brock risk score across three CT centres, per a new European Radiology study." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/incidental-lung-nodule-malignancy-risk-ai" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/incidental-lung-nodule-malignancy-risk-ai",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "incidental lung nodule, lung nodule malignancy risk, deep learning pulmonary nodule, Brock model, incidental findings CT"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study find about AI and incidental lung nodules?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a multicentre European Radiology study, two deep learning models scored incidental pulmonary nodules with AUCs of 0.74 and 0.72, both significantly better than the 0.63 AUC of the established Brock risk model. At a matched sensitivity of 77.5%, the deep learning models reached 60% specificity versus 44% for Brock."
              }
            },
            {
              "@type": "Question",
              "name": "Did the AI models perform consistently across different hospitals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Across the three participating centres, the deep learning models' AUCs stayed in a narrow 0.71-0.76 band. The Brock model's accuracy varied far more by site, ranging from 0.74 at one centre down to 0.55 and 0.59 at the other two, where CT protocols and patient populations differed."
              }
            },
            {
              "@type": "Question",
              "name": "Is an incidental lung nodule the same as one found on lung cancer screening?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Screening-detected nodules come from patients already enrolled in a lung cancer screening program using standardized low-dose CT. Incidental nodules turn up unexpectedly on CT scans ordered for an unrelated reason, in patients with far more varied scanners, protocols, ages, and comorbidities — which is why models validated only on screening data don't automatically generalize to incidental findings."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for how incidental lung nodules get reported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It reinforces that malignancy-risk scoring for incidental nodules works best when it happens automatically and consistently, on every chest CT, rather than depending on which radiologist notices a nodule and remembers to apply a risk calculator. Structured, whole-volume CT reporting is built around flagging and risk-stratifying incidental findings like this by default."
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
              Deep learning holds up on incidental lung nodules<br />
              <span className="text-white/60">where a clinical risk score didn't</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A three-hospital study put two deep learning models up against the widely used Brock risk score on real incidental nodules — the kind that turn up unannounced on a chest CT ordered for something else entirely.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '0.74', label: 'DL1 AUC across 3 centres', sub: 'vs 0.63 for Brock model' },
            { stat: '60% vs 44%', label: 'Specificity vs Brock', sub: 'at matched sensitivity' },
            { stat: '269', label: 'Incidental nodules tested', sub: '231 patients, 3 Dutch centres' },
            { stat: '89', label: 'Malignant among the 269', sub: 'cancer-enriched dataset' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The problem: nodule-risk models are usually built for screening, not the real world
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most deep learning tools for pulmonary nodule malignancy risk are trained and validated on lung cancer screening cohorts, where CT protocols are standardized and the population is a defined age and smoking-history bracket. But the majority of pulmonary nodules radiologists actually report are found incidentally — on a chest CT, or even a CT of the abdomen or spine, ordered for an unrelated complaint. Those patients are more varied in age, scanner type, and disease burden than any screening trial, which is exactly where a model trained on narrower data tends to lose accuracy.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A study from researchers at Radboud University Medical Center and collaborators at Maastricht UMC and University Medical Center Utrecht, published in <a href="https://doi.org/10.1007/s00330-026-12787-y" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>European Radiology</em></a>, set out to test that generalization gap directly — across three hospitals instead of one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study tested
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The team built a retrospective, multicentre case-control dataset of incidental pulmonary nodules, sampled across three size buckets (5-10 mm, 10-15 mm, 15-30 mm) and aiming for roughly one malignant nodule for every two benign ones per bucket, per centre. The final dataset held <strong>269 nodules from 231 patients</strong>, of which <strong>89 were malignant</strong> — a deliberately cancer-enriched mix built to stress-test discrimination, not to mimic the low real-world prevalence of malignancy in incidental nodules.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two deep learning models were compared against the <strong>Brock model</strong>, the widely used clinical risk-prediction score derived from the Pan-Canadian Early Detection of Lung Cancer Study:
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li className="text-[#444] text-[15px] leading-[1.65] font-light"><strong>DL1</strong> — a deep learning model trained on screening data, which had previously shown good discrimination on a single-centre dataset of incidental nodules.</li>
                <li className="text-[#444] text-[15px] leading-[1.65] font-light"><strong>DL2</strong> — an updated version of the same model, retrained on both screening data and clinical (non-screening) data.</li>
              </ul>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The result: both AI models beat Brock, and stayed consistent doing it
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                Across the pooled multicentre dataset, DL1 reached an AUC of <strong>0.74</strong> and DL2 reached <strong>0.72</strong>, both significantly higher than the Brock model's <strong>0.63</strong> (p &lt; 0.01 for both comparisons, DeLong method). At the sensitivity Brock's standard 10% risk threshold produces (77.5%), both deep learning models held <strong>60% specificity</strong> versus <strong>44%</strong> for Brock — meaning that at the same catch-rate for cancer, the AI models flagged roughly a third fewer benign nodules as suspicious.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Centre</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">DL1 AUC</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">DL2 AUC</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Brock AUC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Centre 1</td>
                      <td className="py-3 pr-4 text-[#444] font-light">0.76</td>
                      <td className="py-3 pr-4 text-[#444] font-light">0.75</td>
                      <td className="py-3 text-[#444] font-light">0.74</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Centre 2</td>
                      <td className="py-3 pr-4 text-[#444] font-light">0.72</td>
                      <td className="py-3 pr-4 text-[#444] font-light">0.71</td>
                      <td className="py-3 text-[#444] font-light">0.55</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Centre 3</td>
                      <td className="py-3 pr-4 text-[#444] font-light">0.73</td>
                      <td className="py-3 pr-4 text-[#444] font-light">0.71</td>
                      <td className="py-3 text-[#444] font-light">0.59</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That per-centre breakdown is the real finding. Both deep learning models stayed inside a tight 0.71-0.76 band regardless of which hospital's scans they saw. Brock's accuracy, by contrast, swung from 0.74 at the first centre down to 0.55 and 0.59 at the other two — a collapse the authors tie to differences in CT protocols and patient populations between sites. A risk score can look solid in the hospital where it was built and still lose most of its edge somewhere else; in this dataset, the AI models didn't.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Narrower validation looked stronger — and that's the point
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's worth comparing this to an earlier, single-centre validation of essentially the same screening-trained model, published by an overlapping author group in <a href="https://doi.org/10.1007/s00330-025-11829-1" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>European Radiology</em></a>. Tested on 408 incidental nodules from one Dutch academic centre, that model reached an AUC of 0.89 overall (0.78 on a nodule-size-matched subset) versus 0.86 (0.58 matched) for Brock — an even larger apparent gap. The authors of that paper also flagged that the model overestimated malignancy probability and would likely need recalibration before clinical use.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The multicentre study's more modest 0.74/0.72 AUCs aren't a step backward — they're a harder, more honest test. A single centre can flatter a model trained partly on similar data; three centres with different scanners and case mixes are a closer proxy for what happens when a tool ships broadly. That the AI models' advantage over Brock survived that harder test, while Brock's own accuracy did not stay consistent, is the more clinically meaningful result. It's also notable that DL2 — retrained on additional clinical data specifically to improve on incidental cases — performed no better than the original screening-trained DL1, suggesting the generalization gain came from the model architecture and screening-scale training data, not from clinical retraining alone.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with structured, whole-volume CT reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This study is about a standalone risk score, not a deployed reporting product, and its authors are explicit that prospective validation at real-world (lower) cancer prevalence is still needed before clinical use. But the direction of the finding matters for how incidental nodules get handled day to day: an incidental lung nodule is currently caught, described, and risk-stratified only if the reading radiologist notices it, thinks to apply a risk model, and documents a follow-up recommendation — on a CT ordered for something unrelated, under time pressure. A model that keeps its discrimination steady across scanners and patient populations is a better fit for that reality than one that only works well on the data it was built with. That is the same principle behind <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">structured, whole-volume CT reporting</Link>: incidental findings, including pulmonary nodules, are surfaced and risk-stratified on every study by default, with xAID's in-house radiologist reviewing every preliminary report before it goes out ready-to-sign.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study find about AI and incidental lung nodules?',
                    a: 'In a multicentre European Radiology study, two deep learning models scored incidental pulmonary nodules with AUCs of 0.74 and 0.72, both significantly better than the 0.63 AUC of the established Brock risk model. At a matched sensitivity of 77.5%, the deep learning models reached 60% specificity versus 44% for Brock.',
                  },
                  {
                    q: 'Did the AI models perform consistently across different hospitals?',
                    a: "Yes. Across the three participating centres, the deep learning models' AUCs stayed in a narrow 0.71-0.76 band. The Brock model's accuracy varied far more by site, ranging from 0.74 at one centre down to 0.55 and 0.59 at the other two, where CT protocols and patient populations differed.",
                  },
                  {
                    q: 'Is an incidental lung nodule the same as one found on lung cancer screening?',
                    a: "No. Screening-detected nodules come from patients already enrolled in a lung cancer screening program using standardized low-dose CT. Incidental nodules turn up unexpectedly on CT scans ordered for an unrelated reason, in patients with far more varied scanners, protocols, ages, and comorbidities — which is why models validated only on screening data don't automatically generalize to incidental findings.",
                  },
                  {
                    q: 'What does this mean for how incidental lung nodules get reported?',
                    a: 'It reinforces that malignancy-risk scoring for incidental nodules works best when it happens automatically and consistently, on every chest CT, rather than depending on which radiologist notices a nodule and remembers to apply a risk calculator. Structured, whole-volume CT reporting is built around flagging and risk-stratifying incidental findings like this by default.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Dinnessen R, et al. "Multicentre performance and consistency of two deep learning models for malignancy probability estimation of incidental pulmonary nodules." <em>European Radiology</em> (2026), <a href="https://doi.org/10.1007/s00330-026-12787-y" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s00330-026-12787-y</a>. Prior single-centre validation: <a href="https://doi.org/10.1007/s00330-025-11829-1" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s00330-025-11829-1</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Incidental findings, caught by default"
          sub="Structured, whole-volume CT reporting flags and risk-stratifies incidental findings on every study — reviewed by xAID's in-house radiologist before it reaches your reading radiologist ready to sign. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Findings on Chest CT: Breast Lesions</div>
              </Link>
              <Link to="/blog/lung-cancer-screening-ct-criteria/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Screening & Capacity</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Lung Cancer Screening CT Eligibility Criteria</div>
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

export default IncidentalLungNoduleMalignancyRisk;
