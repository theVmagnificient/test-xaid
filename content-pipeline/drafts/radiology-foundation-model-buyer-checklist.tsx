import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const RadiologyFoundationModelBuyerChecklist = () => {
  const post = {
    title: "HOPPR's Chest CT Model and What to Ask Any Radiology Foundation Model Vendor",
    dateIso: '2026-07-24',
    date: 'July 24, 2026',
    category: 'AI Technology',
    readingTime: 7,
    description: "HOPPR's new chest CT foundation model is a case study in what to ask any radiology foundation model vendor: training data, site generalization, and validation.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Foundation Model Vendor Checklist | xAID</title>
        <meta name="description" content="HOPPR's new chest CT foundation model is a case study in what to ask any radiology foundation model vendor: training data, site generalization, and validation." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Foundation Model Vendor Checklist | xAID" />
        <meta property="og:description" content="HOPPR's new chest CT foundation model is a case study in what to ask any radiology foundation model vendor: training data, site generalization, and validation." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-foundation-model-buyer-checklist" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Foundation Model Vendor Checklist | xAID" />
        <meta name="twitter:description" content="HOPPR's new chest CT foundation model is a case study in what to ask any radiology foundation model vendor: training data, site generalization, and validation." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-foundation-model-buyer-checklist" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-foundation-model-buyer-checklist",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology foundation model, foundation model AI reporting, chest CT AI, HOPPR, AI vendor evaluation radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is HOPPR's new chest CT foundation model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The HOPPR EF Chest CT Narrative Model, announced on July 23, 2026, is a foundation model that processes 3D chest CT volumes and generates narrative language describing findings across the pulmonary, mediastinal, cardiac, upper-abdominal, osseous, and soft-tissue regions, including lung nodule characterization and aortic measurements. It is HOPPR's fifth foundation model, extending a portfolio that already covered chest X-ray and mammography."
              }
            },
            {
              "@type": "Question",
              "name": "Has HOPPR published validation data or accuracy metrics for the chest CT model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not in the launch materials. HOPPR describes the model as trained on a proprietary dataset of chest CT studies from multiple U.S. clinical sites, with deliberate emphasis on ensuring less common but serious findings — aortic injury, pulmonary embolism, rib fractures, and pneumothorax — are well represented. No site count, demographic breakdown, scanner-vendor mix, sensitivity/specificity figures, or peer-reviewed validation study accompanied the announcement."
              }
            },
            {
              "@type": "Question",
              "name": "Is HOPPR's chest CT foundation model FDA cleared?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No FDA clearance was mentioned in the launch coverage. HOPPR positions the model as a developer component distributed through its AI Foundry platform, and the platform's own documentation states that customers are responsible for validating model performance and obtaining any regulatory authorizations before commercial use — this is a foundation model for developers to build on, not a cleared diagnostic device."
              }
            },
            {
              "@type": "Question",
              "name": "What should buyers ask before adopting a radiology foundation model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Three questions matter most: where the training data came from and how diverse it is (site count, scanner vendors, patient demographics); whether performance has been validated on data from sites the model never trained on, not just held-out data from the same sources; and whether independent or peer-reviewed evidence exists, versus vendor-reported claims alone. A vendor that can answer all three with specifics, not just descriptions, has done meaningfully more validation work than one that hasn't."
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
                AI Technology
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              HOPPR's chest CT model and what to ask<br />
              <span className="text-white/60">any radiology foundation model vendor</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new chest-CT-specific foundation model launched this week with a lot of description and very little published evidence. That gap is a useful template for the questions every buyer evaluating foundation-model AI reporting should be asking.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '5th', label: 'foundation model', sub: 'in HOPPR\'s portfolio' },
                { stat: '3', label: 'modalities covered', sub: 'chest X-ray, mammography, chest CT' },
                { stat: '6', label: 'anatomical regions', sub: 'described per chest CT study' },
                { stat: '0', label: 'published accuracy figures', sub: 'in the launch materials' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1">{s.label}</div>
                  <div className="text-white/60 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What HOPPR announced
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 23, 2026, medical-imaging AI company HOPPR introduced the <strong>HOPPR EF Chest CT Narrative Model</strong>, a foundation model that processes 3D chest CT volumes and generates narrative language describing findings across the pulmonary, mediastinal, cardiac, upper-abdominal, osseous, and soft-tissue regions, according to coverage in <a href="https://www.auntminnie.com/clinical-news/ct/news/15830752/hoppr-launches-foundation-model-for-chest-ct" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. Per <a href="https://healthtechnologynet.com/2026/07/23/hoppr-brings-ai-foundation-models-to-chest-ct-expanding-developer-access-across-its-growing-medical-imaging-portfolio/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Health Technology Net</a>, the model also characterizes lung nodules and produces aortic measurements, covering the range of findings in a routine chest CT study.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's HOPPR's fifth foundation model, extending a portfolio that already spanned chest X-ray and mammography, per <a href="https://healthtechnologynet.com/2026/07/23/hoppr-brings-ai-foundation-models-to-chest-ct-expanding-developer-access-across-its-growing-medical-imaging-portfolio/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Health Technology Net</a>. HOPPR's CEO, Khan Siddiqui, M.D., described the underlying challenge directly: chest CT, he said, is "one of the most information-dense studies in radiology," and getting a model to work reliably across everything it captures is, in his words, "a genuinely hard problem."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The model is distributed through <strong>HOPPR Forward Deployed Services</strong>, which HOPPR describes, per <a href="https://www.auntminnie.com/clinical-news/ct/news/15830752/hoppr-launches-foundation-model-for-chest-ct" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>, as providing support "from evaluation through integration," and is hosted on the <strong>HOPPR AI Foundry</strong> — a developer platform that also hosts third-party models such as CheXagent, MedGemma, MedImageInsight, and NVIDIA's NV-Reason and NV-Generate. RadiologyOne's chief operating officer, Kevin Kadakia, told <a href="https://healthtechnologynet.com/2026/07/23/hoppr-brings-ai-foundation-models-to-chest-ct-expanding-developer-access-across-its-growing-medical-imaging-portfolio/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Health Technology Net</a> that working with HOPPR's services team "allowed us to evaluate the Chest CT Narrative Model against our own data without needing to build that capability internally."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the announcement is a useful test case, not just news
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                What's notable about the launch isn't the model itself — it's what the launch materials do and don't say. HOPPR discloses that the model was trained on "a large proprietary dataset of chest CT studies from multiple U.S. clinical sites," with deliberate emphasis on ensuring less common but serious conditions — aortic injury, pulmonary embolism, rib fractures, and pneumothorax — are well represented. That's a real, specific claim about training-data design.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What's absent is everything that would let a buyer independently check that claim: how many sites, what scanner vendors and protocols, what patient demographics, and — most importantly — how the model performs on data from a site it never saw during training. None of that appeared in the announcement or the coverage of it. That's not unusual for a launch press release, but it's exactly the gap a buyer evaluating any foundation model for AI reporting needs to close before adopting one, and it's a gap the field's existing <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model-versus-narrow-AI debate</Link> tends to skip past in the abstract.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Three questions to ask any foundation model vendor
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Question</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Why it matters</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">What's publicly known about HOPPR's chest CT model</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 text-[#444] font-light">Training-data provenance</td>
                      <td className="py-3 pr-4 text-[#666] font-light">A model trained on data from one health system's population, scanners, and protocols can behave very differently elsewhere.</td>
                      <td className="py-3 text-[#666] font-light">Described as "multiple U.S. clinical sites"; no site count, demographic mix, or scanner-vendor breakdown disclosed publicly.</td>
                    </tr>
                    <tr className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 text-[#444] font-light">Generalization across sites</td>
                      <td className="py-3 pr-4 text-[#666] font-light">Accuracy on held-out data from the same training sites is a much weaker signal than accuracy on a site the model never saw.</td>
                      <td className="py-3 text-[#666] font-light">Not demonstrated in public materials. RadiologyOne's COO described evaluating the model against its own data through HOPPR's services team — a customer-side check, not a published cross-site study.</td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 text-[#444] font-light">Independent validation</td>
                      <td className="py-3 pr-4 text-[#666] font-light">Vendor-reported claims and peer-reviewed or independently audited results are not the same category of evidence.</td>
                      <td className="py-3 text-[#666] font-light">No accuracy, sensitivity/specificity, or peer-reviewed figures accompanied the launch. No FDA clearance was mentioned; HOPPR's own AI Foundry documentation states customers are responsible for validating performance and securing regulatory authorizations themselves.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this makes HOPPR's model unusual — most foundation-model launches in imaging read this way, and HOPPR is transparent that the product is a developer component meant to be fine-tuned and validated by whoever deploys it, not a finished, cleared diagnostic tool. That's precisely the point: a foundation model description at launch is a starting point for due diligence, not a substitute for it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's chest CT reporting is built on foundation-model AI, and the same three questions apply to it as to any vendor: where the training data comes from, whether performance has been checked across sites, and what independent review exists. xAID's answer to the validation question is structural rather than a one-time study — every AI-drafted report gets an in-house radiologist review before it's delivered ready-to-sign, so a human clinician is checking the model's output on every single case, not just in a pre-launch validation set.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is HOPPR's new chest CT foundation model?",
                    a: "The HOPPR EF Chest CT Narrative Model, announced on July 23, 2026, is a foundation model that processes 3D chest CT volumes and generates narrative language describing findings across the pulmonary, mediastinal, cardiac, upper-abdominal, osseous, and soft-tissue regions, including lung nodule characterization and aortic measurements. It is HOPPR's fifth foundation model, extending a portfolio that already covered chest X-ray and mammography.",
                  },
                  {
                    q: 'Has HOPPR published validation data or accuracy metrics for the chest CT model?',
                    a: 'Not in the launch materials. HOPPR describes the model as trained on a proprietary dataset of chest CT studies from multiple U.S. clinical sites, with deliberate emphasis on ensuring less common but serious findings — aortic injury, pulmonary embolism, rib fractures, and pneumothorax — are well represented. No site count, demographic breakdown, scanner-vendor mix, sensitivity/specificity figures, or peer-reviewed validation study accompanied the announcement.',
                  },
                  {
                    q: "Is HOPPR's chest CT foundation model FDA cleared?",
                    a: "No FDA clearance was mentioned in the launch coverage. HOPPR positions the model as a developer component distributed through its AI Foundry platform, and the platform's own documentation states that customers are responsible for validating model performance and obtaining any regulatory authorizations before commercial use — this is a foundation model for developers to build on, not a cleared diagnostic device.",
                  },
                  {
                    q: 'What should buyers ask before adopting a radiology foundation model?',
                    a: "Three questions matter most: where the training data came from and how diverse it is (site count, scanner vendors, patient demographics); whether performance has been validated on data from sites the model never trained on, not just held-out data from the same sources; and whether independent or peer-reviewed evidence exists, versus vendor-reported claims alone. A vendor that can answer all three with specifics, not just descriptions, has done meaningfully more validation work than one that hasn't.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/ct/news/15830752/hoppr-launches-foundation-model-for-chest-ct" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, "HOPPR launches foundation model for chest CT" (July 23, 2026); additional detail from <a href="https://healthtechnologynet.com/2026/07/23/hoppr-brings-ai-foundation-models-to-chest-ct-expanding-developer-access-across-its-growing-medical-imaging-portfolio/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Health Technology Net</a>. Figures are rounded and quoted as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Ready to see radiologist-reviewed AI CT reporting?"
          sub="Ask us the same three questions — training data, cross-site generalization, and review. Start with 5 free studies."
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
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: What Chest X-ray Studies Show About Draft-Then-Sign</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyFoundationModelBuyerChecklist;
