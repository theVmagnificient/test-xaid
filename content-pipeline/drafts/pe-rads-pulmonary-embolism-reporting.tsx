import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const PeRadsPulmonaryEmbolismReporting = () => {
  const post = {
    title: 'PE-RADS: A New Standardized Reporting Framework for Pulmonary Embolism',
    dateIso: '2026-07-23',
    date: 'July 23, 2026',
    category: 'Reference',
    readingTime: 7,
    description: "The ACR and six partner societies published PE-RADS on July 21, 2026 — a BI-RADS-style 0-4 grading scale plus RV+/T+ modifiers for CTPA reports. What the framework covers, and why it's a preview of how AI-drafted reports will be structured.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>PE-RADS Explained: New PE Reporting Framework | xAID</title>
        <meta name="description" content="PE-RADS is a new BI-RADS-style, 0-4 grading scale for pulmonary embolism reports on CTPA, published by the ACR and six partner societies. Here's how it works." />
        <link rel="canonical" href="https://xaid.ai/blog/pe-rads-pulmonary-embolism-reporting" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PE-RADS Explained: New PE Reporting Framework | xAID" />
        <meta property="og:description" content="PE-RADS is a new BI-RADS-style, 0-4 grading scale for pulmonary embolism reports on CTPA, published by the ACR and six partner societies. Here's how it works." />
        <meta property="og:url" content="https://xaid.ai/blog/pe-rads-pulmonary-embolism-reporting" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PE-RADS Explained: New PE Reporting Framework | xAID" />
        <meta name="twitter:description" content="PE-RADS is a new BI-RADS-style, 0-4 grading scale for pulmonary embolism reports on CTPA, published by the ACR and six partner societies. Here's how it works." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/pe-rads-pulmonary-embolism-reporting" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/pe-rads-pulmonary-embolism-reporting",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "PE-RADS reporting, pulmonary embolism reporting, CTPA structured reporting, PE-RADS grading scale, standardized radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is PE-RADS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PE-RADS (Pulmonary Embolism Reporting and Data System) is a standardized lexicon and grading framework for reporting acute pulmonary embolism on CT and MR pulmonary angiography. It was developed by the American College of Radiology together with six partner medical societies and published in the journal Radiology on July 21, 2026. It works like BI-RADS or PI-RADS in other subspecialties — a shared vocabulary and category structure instead of free-text description."
              }
            },
            {
              "@type": "Question",
              "name": "How does the PE-RADS 0-4 grading scale work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PE-RADS grades the most proximal clot location on a hierarchical 0-4 ordinal scale: 0 for no PE, 1 for subsegmental, 2 for segmental, 3 for lobar or interlobar involvement, and 4 for central (main, right, or left pulmonary artery) clot. An 'N' designation flags a nondiagnostic study."
              }
            },
            {
              "@type": "Question",
              "name": "What do the RV+ and T+ modifiers in PE-RADS mean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RV+ indicates right ventricular enlargement, defined as an RV-to-LV diameter ratio of 1.0 or greater, a marker used in PE risk stratification. T+ indicates definitive thrombus in transit in the right atrium or right ventricle. Additional modifiers flag limited image quality and non-PE causes of pulmonary arterial disease."
              }
            },
            {
              "@type": "Question",
              "name": "Who developed PE-RADS and why does it matter for AI-assisted reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PE-RADS was developed by the American College of Radiology in collaboration with the American College of Emergency Physicians, the American College of Chest Physicians, the PERT Consortium, the Society of Thoracic Radiology, the Society for Cardiovascular Angiography and Interventions, and the Society of Interventional Radiology. It matters for AI-assisted reporting because it converts a narrative finding into a small set of discrete, reproducible categories — the same structured format that AI report-drafting tools are built to populate consistently."
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
                Reference
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              PE-RADS: a new standardized<br />
              <span className="text-white/60">reporting framework for pulmonary embolism</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The ACR and six partner societies just gave CTPA reads their own BI-RADS-style lexicon — a 0-4 grading scale plus right-heart modifiers. It's a small change to one report field, and a useful preview of where structured reporting is headed everywhere else.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '0–4', label: 'Ordinal grading scale', sub: 'for most proximal clot location' },
                { stat: '7', label: 'Medical societies', sub: 'ACR plus 6 partner organizations' },
                { stat: '≥1.0', label: 'RV/LV ratio threshold', sub: 'triggers the "RV+" modifier' },
                { stat: 'Jul 21, 2026', label: 'Published in Radiology', sub: 'PE-RADS v2026' },
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
                A BI-RADS-style system arrives for pulmonary embolism
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology already has *-RADS lexicons for breast (BI-RADS), prostate (PI-RADS), liver (LI-RADS), and lung nodules (Lung-RADS) — structured category systems that replace free-text impressions with a shared, reproducible vocabulary. On July 21, 2026, the <a href="https://www.acr.org" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology</a> extended the model to acute pulmonary embolism, publishing <strong>PE-RADS</strong> (Pulmonary Embolism Reporting and Data System) in RSNA's journal <a href="https://doi.org/10.1148/radiol.252721" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology</em></a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                PE-RADS wasn't written by radiologists in isolation. The ACR developed it together with six partner organizations: the American College of Emergency Physicians, the American College of Chest Physicians, the Pulmonary Embolism Response Team (PERT) Consortium, the Society of Thoracic Radiology, the Society for Cardiovascular Angiography and Interventions, and the Society of Interventional Radiology — the full roster of specialties that actually act on a PE report, as covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/experts-unveil-pe-rads-new-reporting-framework-pulmonary-embolism" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> and the <a href="https://www.rsna.org/news/2026/july/new-pulmonary-embolism-framework" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RSNA</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "Standard terminology reduces variability in reporting and understanding the radiology report," said Lynne M. Koweek, MD, of Duke University, who chaired the ACR's PE-RADS committee, in the RSNA announcement. That's the entire pitch: a PE report that says "PE-RADS 3, RV+" means the same thing in every emergency department and PERT huddle that reads it, regardless of which radiologist or which hospital wrote it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How the grading scale works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                PE-RADS v2026 assigns a single ordinal grade based on the most proximal location of clot found on CT or MR pulmonary angiography, then layers on modifiers describing right-heart strain. The base scale, as reported by <a href="https://www.auntminnie.com/clinical-news/mri/article/15830337/acr-rolls-out-perads-for-pulmonary-embolism-care" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a> and the RSNA:
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Grade</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Most proximal clot location</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">0</td>
                      <td className="py-3">No pulmonary embolism</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">1</td>
                      <td className="py-3">Subsegmental artery</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">2</td>
                      <td className="py-3">Segmental artery</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">3</td>
                      <td className="py-3">Lobar or interlobar artery</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">4</td>
                      <td className="py-3">Central pulmonary artery (main, right, or left)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">N</td>
                      <td className="py-3">Nondiagnostic study</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two modifiers sit on top of the grade. <strong>RV+</strong> flags right ventricular enlargement, defined as an RV-to-LV diameter ratio of 1.0 or greater — a well-established marker in PE risk stratification. <strong>T+</strong> flags definitive thrombus in transit within the right atrium or right ventricle, a finding that changes management urgency on its own. Additional modifiers note limited image quality and non-PE causes of pulmonary arterial disease, so the category system doesn't force a false-positive call when the real answer is "can't tell" or "something else is going on."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Put together, a full PE-RADS call — for example, "PE-RADS 4, RV+" — packs clot burden and right-heart strain into a few characters that any downstream reader can parse instantly, instead of a paragraph they have to interpret.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why PE reporting specifically needed this
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Acute PE is a multidisciplinary problem before it's a radiology problem. A single CTPA report gets read by an emergency physician deciding on admission, a hospitalist or intensivist managing anticoagulation, and — for higher-severity cases — a Pulmonary Embolism Response Team weighing thrombolysis or catheter-directed therapy, often within the hour. Free-text impressions ("extensive bilateral pulmonary emboli with probable right heart strain") ask each of those readers to separately judge severity from prose. PE-RADS instead gives every one of them the same discrete category to anchor a decision on, which is precisely why the framework was co-authored by emergency medicine, pulmonology, interventional and cardiovascular societies rather than radiology alone.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The RSNA and ACR describe PE-RADS as designed for "easy adoption," aligned with existing PE management guidelines, and open to refinement as real-world outcomes and resource-utilization data accumulate — the same iterative path BI-RADS and Lung-RADS followed after their first releases.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                From published lexicon to reporting template
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Publishing a *-RADS system in a journal is step one. Getting radiologists to actually produce "PE-RADS 3, RV+, T-" on every relevant CTPA — instead of reverting to prose under time pressure — is the harder, slower step, and it's the same operational gap every prior *-RADS rollout has faced. It happens through structured reporting templates built into RIS and dictation software, macro libraries distributed by radiology groups, and, increasingly, drafting tools that populate the categorical fields automatically from the images rather than relying on a radiologist to remember and type the exact syntax.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That last path is where AI-assisted reporting has a structural advantage. A radiologist dictating under caseload pressure can reasonably use a category system inconsistently — some reports get the full "PE-RADS 3, RV+" tag, others get a plain-language equivalent that a downstream system can't parse. A model generating the first draft doesn't have that variability: given a defined lexicon, it can populate the same discrete fields on every study, every time, with a radiologist reviewing and correcting the output before it goes out. New *-RADS frameworks like this one are effectively a preview of the reporting format AI drafting tools are already built to produce — the industry is converging on structured, discrete-category reports either way; PE-RADS just names the categories for one more modality.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                AI CT reporting is built around this same idea: a structured, comprehensive draft rather than a free-text impression, with xAID's in-house radiologist reviewing every preliminary before it's delivered ready-to-sign to the client's reading radiologist. As frameworks like PE-RADS give radiology one more standardized category system to populate consistently, that's the exact kind of discrete, repeatable field an AI-generated draft is built to fill in — on every study, not just the ones read under less time pressure.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is PE-RADS?',
                    a: 'PE-RADS (Pulmonary Embolism Reporting and Data System) is a standardized lexicon and grading framework for reporting acute pulmonary embolism on CT and MR pulmonary angiography. It was developed by the American College of Radiology together with six partner medical societies and published in the journal Radiology on July 21, 2026. It works like BI-RADS or PI-RADS in other subspecialties — a shared vocabulary and category structure instead of free-text description.',
                  },
                  {
                    q: 'How does the PE-RADS 0-4 grading scale work?',
                    a: "PE-RADS grades the most proximal clot location on a hierarchical 0-4 ordinal scale: 0 for no PE, 1 for subsegmental, 2 for segmental, 3 for lobar or interlobar involvement, and 4 for central (main, right, or left pulmonary artery) clot. An 'N' designation flags a nondiagnostic study.",
                  },
                  {
                    q: 'What do the RV+ and T+ modifiers in PE-RADS mean?',
                    a: 'RV+ indicates right ventricular enlargement, defined as an RV-to-LV diameter ratio of 1.0 or greater, a marker used in PE risk stratification. T+ indicates definitive thrombus in transit in the right atrium or right ventricle. Additional modifiers flag limited image quality and non-PE causes of pulmonary arterial disease.',
                  },
                  {
                    q: 'Who developed PE-RADS and why does it matter for AI-assisted reporting?',
                    a: 'PE-RADS was developed by the American College of Radiology in collaboration with the American College of Emergency Physicians, the American College of Chest Physicians, the PERT Consortium, the Society of Thoracic Radiology, the Society for Cardiovascular Angiography and Interventions, and the Society of Interventional Radiology. It matters for AI-assisted reporting because it converts a narrative finding into a small set of discrete, reproducible categories — the same structured format that AI report-drafting tools are built to populate consistently.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: American College of Radiology, PE-RADS v2026, published in RSNA's <em>Radiology</em> (July 21, 2026), <a href="https://doi.org/10.1148/radiol.252721" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1148/radiol.252721</a>. As covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/experts-unveil-pe-rads-new-reporting-framework-pulmonary-embolism" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, the <a href="https://www.rsna.org/news/2026/july/new-pulmonary-embolism-framework" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RSNA</a>, and <a href="https://www.auntminnie.com/clinical-news/mri/article/15830337/acr-rolls-out-perads-for-pulmonary-embolism-care" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured drafts, every study, no exceptions."
          sub="See how AI CT reporting turns categorical frameworks like PE-RADS into a consistent, ready-to-sign draft. Try it on 5 free studies."
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
              <Link to="/blog/radiology-reporting-guide/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Reporting</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Reporting: A Complete Guide</div>
              </Link>
              <Link to="/blog/ct-scan-for-pulmonary-embolism-cancer-patients/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Scans for Pulmonary Embolism: When Cancer Patients Can Safely Skip Them</div>
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

export default PeRadsPulmonaryEmbolismReporting;
