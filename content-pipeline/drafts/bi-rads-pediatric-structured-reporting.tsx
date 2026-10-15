import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const BiRadsPediatricStructuredReporting = () => {
  const post = {
    title: "ACR: BI-RADS Wasn't Built for Kids — Why Rigid Reporting Criteria Break in Subpopulations",
    dateIso: '2026-10-15',
    date: 'October 15, 2026',
    category: 'AI Technology',
    readingTime: 7,
    description: 'ACR guidance says adult BI-RADS categories overestimate cancer risk in kids. The lesson for any structured-reporting system, including AI: criteria built for one population do not travel safely to another.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>BI-RADS Wasn't Built for Kids, ACR Warns | xAID</title>
        <meta name="description" content="ACR guidance: adult BI-RADS categories overestimate cancer risk in pediatric breast masses, driving unnecessary biopsies. What it means for AI reporting design." />
        <link rel="canonical" href="https://xaid.ai/blog/bi-rads-pediatric-structured-reporting/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BI-RADS Wasn't Built for Kids, ACR Warns | xAID" />
        <meta property="og:description" content="ACR guidance: adult BI-RADS categories overestimate cancer risk in pediatric breast masses, driving unnecessary biopsies. What it means for AI reporting design." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BI-RADS Wasn't Built for Kids, ACR Warns | xAID" />
        <meta name="twitter:description" content="ACR guidance: adult BI-RADS categories overestimate cancer risk in pediatric breast masses, driving unnecessary biopsies. What it means for AI reporting design." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/bi-rads-pediatric-structured-reporting" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/bi-rads-pediatric-structured-reporting",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "bi-rads, bi-rads pediatric, structured radiology reporting, BI-RADS category 4, pediatric breast imaging, AI structured reporting design"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the ACR say about BI-RADS and pediatric patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In October 2026, the American College of Radiology published guidance, led by Stamatia Destounis, MD, stating that BI-RADS assessment categories and their associated malignancy probabilities were developed and validated for adult screening populations, not for diagnostic evaluation of a palpable breast mass in a child or adolescent. The ACR said management of pediatric breast masses should be based on clinical presentation and pediatric-specific imaging features, not on BI-RADS category-driven biopsy thresholds."
              }
            },
            {
              "@type": "Question",
              "name": "Why do BI-RADS categories overestimate cancer risk in children?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BI-RADS malignancy probabilities are calibrated to adult breast-cancer base rates. Pediatric breast cancer is exceedingly rare, with an incidence of about 0.08 newly diagnosed cases per 100,000 people, so applying the same category-to-risk mapping to a population with a near-zero baseline inflates the apparent probability of malignancy and pushes otherwise benign findings into higher-risk categories than the underlying biology supports."
              }
            },
            {
              "@type": "Question",
              "name": "What does the research show about BI-RADS 4 in pediatric patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A multicenter study of 227 patients younger than 21 who underwent pre-operative ultrasound found that 84% were assigned a BI-RADS category, and BI-RADS 4 — a category that by adult definition carries a 2% to 95% likelihood of malignancy — was the single most frequent assignment, given to 55% of the cohort. On pathology, every lesion in the study was benign. The authors, writing in the Journal of Pediatric Surgery in 2021, concluded that adult BI-RADS categories and their biopsy recommendations should not be routinely applied to pediatric patients."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for structured reporting and AI in radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The BI-RADS-in-children mismatch is a case study in a broader risk: any structured-reporting schema, including an AI system's risk categories and templates, encodes assumptions from the population it was built and validated on. Applying that same template unchanged to a different subpopulation, whether defined by age, anatomy, or clinical context, can systematically misclassify risk. Reporting systems, human or AI-assisted, need criteria that adapt to the population being read rather than one-size-fits-all adult-validated thresholds."
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
              BI-RADS wasn't built for kids<br />
              <span className="text-white/60">and the ACR just said so</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              New ACR guidance warns that applying adult breast-imaging risk categories to children overstates cancer risk and drives unnecessary biopsies. The underlying problem — a structured-reporting schema validated on one population, misapplied to another — is exactly what any AI reporting system has to design around.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '55%', label: 'Assigned BI-RADS 4', sub: 'in a 227-patient pediatric cohort' },
            { stat: '0%', label: 'Were malignant on pathology', sub: 'of lesions biopsied in that cohort' },
            { stat: '2–95%', label: 'BI-RADS 4 malignancy range', sub: 'as defined for adult screening' },
            { stat: '0.08', label: 'Cases per 100,000', sub: 'pediatric breast cancer incidence' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The warning: a well-validated criteria set, applied to the wrong population
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On October 14, 2026, the American College of Radiology published <a href="https://www.auntminnie.com/clinical-news/ultrasound/news/15837484/acr-birads-for-adults-not-children" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">guidance</a>, authored by Stamatia Destounis, MD, FACR, and colleagues, on what it called the misuse of BI-RADS assessment categories on pediatric and adolescent breast masses. Breast lesions are not rare in children — the guidance puts their incidence at roughly 0.1% to 3.25% of the pediatric and adolescent population — but primary breast malignancy in that age group is exceedingly rare, with an incidence of about <strong>0.08</strong> newly diagnosed cases per 100,000 people.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The ACR's point is narrow and specific: BI-RADS ultrasound descriptors can still be useful for describing what a pediatric mass looks like, but the BI-RADS <em>assessment categories</em> — and the malignancy probability each one implies — were developed and validated for screening adult populations, not for diagnostic workup of a palpable mass in a child. As <a href="https://www.newswise.com/articles/acr-urges-caution-when-using-bi-rads-for-pediatric-breast-masses" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Destounis put it</a>: "Children and adolescents are not simply small adults. Using adult risk assessment tools in young patients may create unnecessary concern and lead to procedures that do not improve care."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What happens when the category doesn't fit the population
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The ACR guidance points to a concrete illustration: a multicenter study of patients younger than 21 who underwent pre-operative breast ultrasound, published in the <em>Journal of Pediatric Surgery</em> in 2021. Of 227 patients, 84% were assigned a BI-RADS category, and <strong>BI-RADS 4</strong> — the category that, by adult definition, carries a 2% to 95% likelihood of malignancy — was the single most frequently assigned category, given to <strong>55%</strong> of the cohort. On pathology, every lesion in the study was benign. The investigators, writing in <a href="https://doi.org/10.1016/j.jpedsurg.2020.12.025" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">their paper</a>, concluded that adult BI-RADS categories and their corresponding biopsy recommendations should not be routinely applied to pediatric patients.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That gap is the mechanism, not an anomaly. BI-RADS 4's malignancy range was calibrated against adult breast-cancer prevalence. Drop a population with a baseline cancer risk near zero into that same categorical scale, and the scale stops meaning what it was built to mean — a mass that would sit comfortably in a low-concern bucket in an adult-calibrated world gets pushed into a "probably biopsy this" category by the structure of the criteria itself, not by the biology of the lesion.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The cost of a mismatched category isn't abstract
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The ACR guidance is explicit about the downstream effects of applying adult-calibrated BI-RADS 4 thresholds to pediatric lesions: unnecessary biopsy or excision with potential injury to developing breast tissue, recommendations for additional surveillance imaging that consume resources and drive up cost, and patient and family anxiety that a near-zero-risk finding does not warrant. None of that reflects a failure of ultrasound as an imaging modality — the ACR still recommends targeted ultrasound as the preferred pediatric exam because it avoids ionizing radiation. The failure sits specifically in using an adult-validated category-to-risk mapping as if it transfers unchanged to a population it was never tested on.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Adult-validated criteria, applied as-is vs. adapted to the population
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Applied as-is to a new subpopulation</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Adapted to the subpopulation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { q: 'Baseline risk assumption', hype: 'Inherited from the original (adult) validation cohort', ok: 'Re-grounded in the actual population being read' },
                      { q: 'Category-to-risk mapping', hype: 'Unchanged — same thresholds, new population', ok: 'Recalibrated or supplemented with population-specific context' },
                      { q: 'Observed outcome (pediatric BI-RADS 4 example)', hype: '55% of a 227-patient cohort flagged as "probably malignant" range', ok: '0% of that same cohort was actually malignant' },
                      { q: 'Downstream effect', hype: 'Unnecessary biopsy, surveillance imaging, cost, anxiety', ok: 'Management guided by clinical presentation and population-specific evidence' },
                    ].map((row) => (
                      <tr key={row.q} className="border-b border-gray-100 align-top">
                        <td className="py-3 pr-4 text-[#444] font-light">{row.q}</td>
                        <td className="py-3 pr-4 text-[#666] font-light">{row.hype}</td>
                        <td className="py-3 text-[#666] font-light">{row.ok}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a structured-reporting problem, not just a breast-imaging one
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                BI-RADS is one of several structured reporting-and-data systems radiology relies on — alongside analogues like Lung-RADS, PI-RADS, TI-RADS, and O-RADS — that compress a radiologist's impression into a standardized category with an implied management pathway. That standardization is valuable precisely because it's consistent: a BI-RADS 4 means roughly the same thing from one adult mammography report to the next. The pediatric case shows what breaks when that consistency gets exported to a population the schema was never validated against: the category stays the same, but what it predicts does not.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is a design problem any structured-reporting system has to account for, whether the categories are assigned by a radiologist applying a published atlas or generated by software. A risk category, a severity bucket, or a recommended-follow-up template is only as trustworthy as the population it was calibrated on. Age is one axis where that calibration can fail, as the ACR guidance shows — but anatomy, scanner protocol, and clinical indication can just as easily shift a population away from whatever baseline a reporting template assumed.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this applies to AI-generated reports
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The same risk applies directly to AI systems that generate structured report drafts: a model trained and tuned on an adult chest CT population will carry those population assumptions into its findings and risk language unless it's explicitly built to recognize when a study falls outside that calibration — different age group, different anatomy, different clinical context — and adapt accordingly, rather than forcing every case through one static template. A <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model approach</Link> that reasons across a full study, instead of applying a narrow, rigidly-templated detector built for one population, is better positioned to flag that mismatch rather than silently misapply it. It's also exactly the kind of failure mode that keeps a radiologist in the review loop: xAID's reports are generated as structured drafts and reviewed by xAID's in-house radiologist before reaching a client ready-to-sign, so a category that doesn't fit the population in front of the reader gets caught before it drives a decision.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the ACR say about BI-RADS and pediatric patients?',
                    a: 'In October 2026, the American College of Radiology published guidance, led by Stamatia Destounis, MD, stating that BI-RADS assessment categories and their associated malignancy probabilities were developed and validated for adult screening populations, not for diagnostic evaluation of a palpable breast mass in a child or adolescent. The ACR said management of pediatric breast masses should be based on clinical presentation and pediatric-specific imaging features, not on BI-RADS category-driven biopsy thresholds.',
                  },
                  {
                    q: 'Why do BI-RADS categories overestimate cancer risk in children?',
                    a: 'BI-RADS malignancy probabilities are calibrated to adult breast-cancer base rates. Pediatric breast cancer is exceedingly rare, with an incidence of about 0.08 newly diagnosed cases per 100,000 people, so applying the same category-to-risk mapping to a population with a near-zero baseline inflates the apparent probability of malignancy and pushes otherwise benign findings into higher-risk categories than the underlying biology supports.',
                  },
                  {
                    q: 'What does the research show about BI-RADS 4 in pediatric patients?',
                    a: 'A multicenter study of 227 patients younger than 21 who underwent pre-operative ultrasound found that 84% were assigned a BI-RADS category, and BI-RADS 4 — a category that by adult definition carries a 2% to 95% likelihood of malignancy — was the single most frequent assignment, given to 55% of the cohort. On pathology, every lesion in the study was benign. The authors, writing in the Journal of Pediatric Surgery in 2021, concluded that adult BI-RADS categories and their biopsy recommendations should not be routinely applied to pediatric patients.',
                  },
                  {
                    q: 'What does this mean for structured reporting and AI in radiology?',
                    a: "The BI-RADS-in-children mismatch is a case study in a broader risk: any structured-reporting schema, including an AI system's risk categories and templates, encodes assumptions from the population it was built and validated on. Applying that same template unchanged to a different subpopulation, whether defined by age, anatomy, or clinical context, can systematically misclassify risk. Reporting systems, human or AI-assisted, need criteria that adapt to the population being read rather than one-size-fits-all adult-validated thresholds.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: American College of Radiology guidance on misuse of BI-RADS assessment categories on pediatric and adolescent breast masses (Destounis et al., October 2026), as reported by <a href="https://www.auntminnie.com/clinical-news/ultrasound/news/15837484/acr-birads-for-adults-not-children" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> and <a href="https://www.newswise.com/articles/acr-urges-caution-when-using-bi-rads-for-pediatric-breast-masses" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Newswise</a>; underlying data from Davis et al., <a href="https://doi.org/10.1016/j.jpedsurg.2020.12.025" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>Journal of Pediatric Surgery</em></a> (2021). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports should fit the population, not the other way around."
          sub="See how xAID's foundation-model reports adapt to the study in front of them — reviewed by an in-house radiologist, delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiology AI Vendor Evaluation Checklist</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BiRadsPediatricStructuredReporting;
