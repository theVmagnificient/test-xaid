import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyResearchFundingVendorDiligence = () => {
  const post = {
    title: 'Radiology Research Funding Is Concentrated. Does Your Vendor’s Evidence Match Your Site?',
    dateIso: '2026-11-08',
    date: 'November 8, 2026',
    category: 'Buyer Guide',
    readingTime: 7,
    description: "Five academic centers hold 38% of $1.65B in NIH radiology funding since 2012 — what that means for evaluating an AI reporting vendor's evidence.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Research Funding and AI Vendor Evidence | xAID</title>
        <meta name="description" content="Five academic centers hold 38% of $1.65B in NIH radiology funding since 2012 — what that means for evaluating an AI reporting vendor's evidence." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-research-funding-vendor-diligence/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Research Funding and AI Vendor Evidence | xAID" />
        <meta property="og:description" content="Five academic centers hold 38% of $1.65B in NIH radiology funding since 2012 — what that means for evaluating an AI reporting vendor's evidence." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-research-funding-vendor-diligence/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Research Funding and AI Vendor Evidence | xAID" />
        <meta name="twitter:description" content="Five academic centers hold 38% of $1.65B in NIH radiology funding since 2012 — what that means for evaluating an AI reporting vendor's evidence." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-research-funding-vendor-diligence" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-research-funding-vendor-diligence",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology research funding, radiology AI vendor evaluation, AI validation evidence radiology, NIH radiology funding, radiology AI generalizability"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How concentrated is radiology research funding in the US?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Heavily. An analysis of NIH funding to radiology clinician-scientists from 2012 through 2025 found that practicing-clinician investigators in diagnostic radiology, interventional radiology, and radiation oncology received a combined $1.65 billion, and just five academic medical centers — Stanford, UC San Francisco, the University of Michigan, Washington University in St. Louis, and the University of Pennsylvania — held about 38.4% of that total. The top 10 institutions held close to 59%. Stanford alone received roughly $182 million across 277 grants, more than any other institution."
              }
            },
            {
              "@type": "Question",
              "name": "Why does funding concentration matter for radiology AI validation evidence?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because the grant dollars, labeled imaging archives, data-science staff, and institutional review board infrastructure that make large AI validation studies possible are concentrated at the same handful of academic centers that win most NIH funding. A separate systematic review of 535 published radiology AI studies (the RAISE review, European Radiology, 2022) found 44% relied on data from a single hospital and only 31% used any external validation — a pattern consistent with evidence being generated at a small number of well-resourced sites rather than broadly across community and outpatient settings."
              }
            },
            {
              "@type": "Question",
              "name": "Does evidence from an academic medical center generalize to a community hospital or outpatient center?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not automatically. The RAISE review found that among studies reporting both internal and external validation, performance dropped by an average of 6% at external validation, with declines reaching as much as 44% in some studies. A flagship academic center's case mix, scanner fleet, and patient population can differ substantially from a smaller or independent provider's, so a vendor's cited study is evidence about the setting where it was run — not a guarantee of the same performance everywhere else."
              }
            },
            {
              "@type": "Question",
              "name": "What should a smaller imaging provider ask an AI reporting vendor before buying?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask where and on how many sites the validation data was collected, whether performance was reported on an external cohort rather than only internally, whether the vendor discloses any drop in accuracy between internal and external testing, and who reviews each AI-generated draft before it reaches a signing radiologist. FDA clearance alone is a weak signal here: a 2025 JAMA Network Open review found only 5% of cleared radiology AI/ML devices underwent prospective testing, and a separate npj Digital Medicine audit found 51.6% of FDA-reviewed devices disclosed no clinical performance metrics at all."
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
                Buyer Guide
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Radiology research funding is concentrated at a few campuses.<br />
              <span className="text-white/60">Does your AI vendor's evidence come from somewhere like your site?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new analysis puts a number on something radiology has long suspected: most of the $1.65 billion in NIH radiology research funding since 2012 flows to a short list of academic flagships. That same geography shows up in where radiology AI gets validated — and it changes the questions a smaller or independent provider should ask before buying.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$1.65B', label: 'NIH radiology funding', sub: 'clinician-led, 2012–2025' },
            { stat: '38.4%', label: 'Held by just 5 institutions', sub: 'of the $1.65B total' },
            { stat: '$182M', label: "Stanford's total, the most", sub: '277 grants since 2012' },
            { stat: '31%', label: 'Radiology AI studies', sub: 'used any external validation' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the funding analysis found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team led by Yale School of Medicine radiologist Ajay Malhotra pulled every NIH grant issued from 2012 through 2025 in the "Radiation-Diagnostic/Oncology" category and cross-referenced principal investigators to identify which were practicing clinicians. Among 14,105 NIH-funded projects, only 437 of 3,434 investigators — about 12.7% — were practicing clinicians in diagnostic radiology, interventional radiology, or radiation oncology, as reported in{' '}
                <a href="https://doi.org/10.1016/j.acra.2026.07.035" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Academic Radiology</em></a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A companion paper in the{' '}
                <a href="https://doi.org/10.1016/j.jacr.2026.10.026" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of the American College of Radiology</a>{' '}
                (JACR) put a cumulative number on those same 437 clinician-scientists: a combined <strong>$1.65 billion</strong> in NIH funding over the 13-year window, broken down by institution. The concentration is stark. Stanford led every institution with roughly <strong>$182 million</strong> across 277 grants since 2012, as first reported by{' '}
                <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/stanford-top-radiology-research-funding-182m-2012" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. UC San Francisco followed with $117 million, the University of Michigan with $116 million, Washington University in St. Louis with $114 million, and the University of Pennsylvania with $104 million.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Together, those five institutions held about <strong>38.4%</strong> of the $1.65 billion total and roughly 34.5% of all grants, and the top 10 institutions accounted for close to <strong>59%</strong>, according to{' '}
                <a href="https://www.auntminnie.com/clinical-news/article/16050495/5-institutions-command-38-of-nih-radiology-research-funding" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie's</a>{' '}
                coverage of the same data. Over the full 13-year window, only 58 institutions nationwide received any clinician-linked NIH radiology funding at all — a small fraction of the roughly 200 academic diagnostic radiology residency programs in the US, before even counting the thousands of community hospitals and independent imaging centers with no residency program at all.
              </p>

              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Institution</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">NIH funding, 2012–2025</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Share of $1.65B</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Stanford University</td>
                      <td className="py-3 pr-4">$182M (277 grants)</td>
                      <td className="py-3">~11.0%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">UC San Francisco</td>
                      <td className="py-3 pr-4">$117M</td>
                      <td className="py-3">~7.1%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">University of Michigan</td>
                      <td className="py-3 pr-4">$116M</td>
                      <td className="py-3">~7.0%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Washington University in St. Louis</td>
                      <td className="py-3 pr-4">$114M</td>
                      <td className="py-3">~6.9%</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">University of Pennsylvania</td>
                      <td className="py-3 pr-4">$104M</td>
                      <td className="py-3">~6.3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Figures as reported by Radiology Business and AuntMinnie from the underlying JACR institutional-distribution analysis; per-institution shares are calculated against the $1.65B total and rounded.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Funding concentration and evidence concentration travel together
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This matters beyond academic bookkeeping because the same ingredients that NIH funding buys — labeled imaging archives, dedicated data-science teams, institutional review board capacity, and years of iterative model-building — are exactly what's required to generate and validate a radiology AI model. A hospital with decades of grant-funded research infrastructure can run a multi-site validation study. A hospital without it, whatever its clinical quality, usually can't.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Independent of this specific funding analysis, the published AI-validation literature shows the same pattern. The RAISE systematic review of 535 radiology AI studies, published in{' '}
                <a href="https://doi.org/10.1007/s00330-022-08784-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>European Radiology</em></a>, found that 44% of studies used data from a single hospital and only <strong>31%</strong> used any external validation at all. Among the studies that did report both internal and external performance, accuracy dropped by an average of 6% at external validation — and by as much as 44% in the worst cases. A single well-conducted study, in other words, is evidence about the site where it was run. It is not, by itself, evidence about every site a vendor might sell into.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                FDA clearance doesn't close the gap
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to treat "FDA-cleared" as a proxy for "independently validated," but the regulatory record doesn't support that shortcut for most devices. A 2025 systematic review in{' '}
                <a href="https://doi.org/10.1001/jamanetworkopen.2025.42338" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Network Open</em></a>{' '}
                examined submission documentation for 717 FDA-authorized radiology AI/ML devices and found that only 33 (about 5%) underwent prospective testing, and just 208 (29%) included any clinical testing at all. Most devices reach the market through the 510(k) pathway, which requires showing substantial equivalence to an existing device, not fresh clinical evidence.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A separate audit in{' '}
                <a href="https://doi.org/10.1038/s41746-025-02052-9" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>npj Digital Medicine</em></a>{' '}
                reviewed 1,012 FDA submission summaries across specialties and found 53.1% reported any clinical study at all, just 14% of those used a prospective approach, and 51.6% disclosed no clinical performance metrics whatsoever. For a buyer outside the small set of institutions that generate most of the underlying evidence, a clearance letter and a single cited study are a thinner foundation than they look.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Four questions worth asking before you cite a vendor's study as proof
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this means a vendor's cited research is wrong — it means a smaller or independent provider needs to check whether that evidence was generated somewhere comparable to their own setting before assuming it transfers.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'How many sites, and what kind?',
                    desc: "A single academic flagship's case mix, scanner protocols, and patient population can look very different from an outpatient center's or a community hospital's. Ask how many distinct sites contributed validation data, and whether any resemble your setting.",
                  },
                  {
                    title: 'Was performance measured externally?',
                    desc: 'An internal train/test split on one institution’s data is a weaker signal than performance reported on a genuinely external, out-of-sample cohort. Ask which one the vendor is citing.',
                  },
                  {
                    title: 'Is the internal-to-external performance gap disclosed?',
                    desc: 'Given that published studies show an average 6% accuracy drop at external validation — and far larger drops in some cases — a vendor that discloses its own gap is offering a materially stronger evidence base than one that only reports its best number.',
                  },
                  {
                    title: 'Who reviews the draft before it reaches your chart?',
                    desc: "Whatever site a model was trained and validated on, a radiologist review step between the AI's output and your reading radiologist is what catches a performance gap at your specific site before it becomes a finished report.",
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
                The response to concentrated evidence isn't to distrust published research — it's to keep a human check between any model's output and a patient's chart, regardless of where that model was built or validated. With AI CT reporting, a{' '}
                <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation model</Link>{' '}
                drafts the report, xAID's in-house radiologist reviews every preliminary, and it arrives ready-to-sign for the client's reading radiologist. That review step doesn't replace the diligence above — buyers should still ask where and how a vendor's evidence was generated — but it means a site-specific gap gets caught by a radiologist before it reaches a report, not after.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How concentrated is radiology research funding in the US?',
                    a: "Heavily. An analysis of NIH funding to radiology clinician-scientists from 2012 through 2025 found that practicing-clinician investigators in diagnostic radiology, interventional radiology, and radiation oncology received a combined $1.65 billion, and just five academic medical centers — Stanford, UC San Francisco, the University of Michigan, Washington University in St. Louis, and the University of Pennsylvania — held about 38.4% of that total. The top 10 institutions held close to 59%. Stanford alone received roughly $182 million across 277 grants, more than any other institution.",
                  },
                  {
                    q: 'Why does funding concentration matter for radiology AI validation evidence?',
                    a: 'Because the grant dollars, labeled imaging archives, data-science staff, and institutional review board infrastructure that make large AI validation studies possible are concentrated at the same handful of academic centers that win most NIH funding. A separate systematic review of 535 published radiology AI studies (the RAISE review, European Radiology, 2022) found 44% relied on data from a single hospital and only 31% used any external validation — a pattern consistent with evidence being generated at a small number of well-resourced sites rather than broadly across community and outpatient settings.',
                  },
                  {
                    q: 'Does evidence from an academic medical center generalize to a community hospital or outpatient center?',
                    a: "Not automatically. The RAISE review found that among studies reporting both internal and external validation, performance dropped by an average of 6% at external validation, with declines reaching as much as 44% in some studies. A flagship academic center's case mix, scanner fleet, and patient population can differ substantially from a smaller or independent provider's, so a vendor's cited study is evidence about the setting where it was run — not a guarantee of the same performance everywhere else.",
                  },
                  {
                    q: 'What should a smaller imaging provider ask an AI reporting vendor before buying?',
                    a: 'Ask where and on how many sites the validation data was collected, whether performance was reported on an external cohort rather than only internally, whether the vendor discloses any drop in accuracy between internal and external testing, and who reviews each AI-generated draft before it reaches a signing radiologist. FDA clearance alone is a weak signal here: a 2025 JAMA Network Open review found only 5% of cleared radiology AI/ML devices underwent prospective testing, and a separate npj Digital Medicine audit found 51.6% of FDA-reviewed devices disclosed no clinical performance metrics at all.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: Malhotra et al., "National Trends in NIH Funding and Clinician-Scientist Participation Across Diagnostic Radiology, Interventional Radiology, and Radiation Oncology (2012–2025)," <em>Academic Radiology</em> (2026), <a href="https://doi.org/10.1016/j.acra.2026.07.035" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.acra.2026.07.035</a>. "Where the Money Goes: Institutional Distribution of NIH Funding Among Radiology Clinician-Scientists (2012–2025)," <em>Journal of the American College of Radiology</em> (2026), <a href="https://doi.org/10.1016/j.jacr.2026.10.026" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2026.10.026</a>, as reported with the institutional funding breakdown by{' '}
                <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/stanford-top-radiology-research-funding-182m-2012" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>{' '}
                and{' '}
                <a href="https://www.auntminnie.com/clinical-news/article/16050495/5-institutions-command-38-of-nih-radiology-research-funding" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Kelly et al., "Radiology artificial intelligence: a systematic review and evaluation of methods (RAISE)," <em>European Radiology</em> (2022), <a href="https://doi.org/10.1007/s00330-022-08784-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s00330-022-08784-6</a>. Sivakumar et al., "FDA Approval of Artificial Intelligence and Machine Learning Devices in Radiology: A Systematic Review," <em>JAMA Network Open</em> (2025), <a href="https://doi.org/10.1001/jamanetworkopen.2025.42338" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1001/jamanetworkopen.2025.42338</a>. Mehta et al., "Evaluating transparency in AI/ML model characteristics for FDA-reviewed medical devices," <em>npj Digital Medicine</em> (2025), <a href="https://doi.org/10.1038/s41746-025-02052-9" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1038/s41746-025-02052-9</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A radiologist checks every draft, wherever the model trained"
          sub="A review step between the AI's draft and your chart is what closes the site-to-site gap the evidence above describes. Try it on 5 free studies."
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
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiology AI Vendor Evaluation Checklist</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyResearchFundingVendorDiligence;
