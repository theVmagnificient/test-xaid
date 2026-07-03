import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import BlogCTA from '@/components/BlogCTA';

const RadiologyAiAccessDisparities = () => {
  const post = {
    title: 'Who Gets Radiology AI? Why Reimbursement Design Could Deepen Healthcare Disparities',
    dateIso: '2026-07-02',
    date: 'July 2, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description:
      "New Neiman Institute research in AJNR finds Medicare's add-on payment for stroke AI reached just 21% of eligible cases at its 2022 peak — concentrated at large comprehensive stroke centers, while hospitals in more deprived areas were significantly less likely to use it. Here's how reimbursement design gates access to radiology AI, and what a non-capital, per-study model changes for smaller providers.",
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | xAID Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-ai-access-disparities" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-ai-access-disparities" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-ai-access-disparities" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-ai-access-disparities",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology AI, radiology AI access, NTAP reimbursement radiology, AI healthcare disparities, community hospital AI, per-study AI pricing"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does the Neiman Institute study say about access to radiology AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 study by the Harvey L. Neiman Health Policy Institute, published in the American Journal of Neuroradiology, analyzed 2,116 inpatient acute ischemic stroke episodes across 1,076 facilities from October 2020 through December 2023. It found that use of AI billed through Medicare's New Technology Add-on Payment (NTAP) program peaked at just 21% of eligible cases in 2022 and was concentrated at comprehensive stroke centers and large hospitals, while hospitals serving more socioeconomically deprived areas were significantly less likely to use it. Lead author Casey Pelzl said access depends more on where a patient is treated than on their clinical needs."
              }
            },
            {
              "@type": "Question",
              "name": "What is NTAP and why does it limit who gets radiology AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NTAP, the Medicare New Technology Add-on Payment, is a temporary inpatient-only payment that can cover up to 65% of the cost of a qualifying new technology for no more than three years. Because it applies only to inpatient stays and sunsets after a few years, it favors hospitals with inpatient stroke volume, capital, and coding infrastructure — typically large, resource-rich centers. Outpatient imaging centers and community hospitals see little to none of it, so a reimbursement mechanism designed to spur adoption can end up concentrating access."
              }
            },
            {
              "@type": "Question",
              "name": "Did the study find disparities by patient demographics?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The researchers found no differences in NTAP-billed AI use across patient sex, age, or race/ethnicity, or across measures of stroke severity. The disparities were driven by facility-level factors — hospital size, comprehensive stroke center designation, region, and area-level socioeconomic deprivation — meaning the gap is about which sites can adopt AI, not which patients clinically need it."
              }
            },
            {
              "@type": "Question",
              "name": "How does per-study or performance-based pricing improve access to AI radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A per-study or performance-based model turns AI from a capital purchase into a variable, per-report cost that scales with volume. It removes the upfront hardware and licensing spend that reimbursement gates like NTAP were meant to offset, so an outpatient imaging center or community hospital can adopt AI CT reporting without depending on a temporary inpatient add-on payment. Access then tracks clinical demand rather than a site's capital position."
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
              <Link to="/blog" className="text-white/40 hover:text-white/60 text-[15px] font-light transition-colors">← Blog</Link>
              <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                Market &amp; Policy
              </span>
              <span className="text-white/40 text-sm">{post.date}</span>
              <span className="text-white/30 text-sm">{post.readingTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Who gets radiology AI?<br />
              <span className="text-white/60">Why reimbursement design could deepen healthcare disparities</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              New Neiman Institute research shows a Medicare add-on payment meant to spur AI adoption reached only a fraction of eligible cases — and mostly at large, well-resourced hospitals. When a payment code decides who gets AI, the sites that can least afford to fall behind are the ones left out.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '21%', label: 'Peak NTAP-billed AI use', sub: 'of eligible cases, 2022' },
                { stat: '2,116', label: 'Stroke episodes analyzed', sub: 'across 1,076 facilities' },
                { stat: '≤3 yrs', label: 'NTAP is temporary', sub: 'inpatient-only add-on' },
                { stat: '65%', label: 'Max share of cost NTAP covers', sub: 'then it sunsets' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1">{s.label}</div>
                  <div className="text-white/40 text-xs">{s.sub}</div>
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
                What the research found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A new study from the <a href="https://www.neimanhpi.org/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue hover:underline">Harvey L. Neiman Health Policy Institute</a>, published in the <a href="https://doi.org/10.3174/ajnr.A9494" target="_blank" rel="noopener noreferrer" className="text-xaid-blue hover:underline"><em>American Journal of Neuroradiology</em></a> on June 24, 2026, looked at how one of radiology's most-watched AI reimbursement experiments actually played out. The team analyzed <strong>2,116</strong> inpatient acute ischemic stroke episodes across <strong>1,076</strong> facilities from October 2020 through December 2023 — the window in which Medicare offered a New Technology Add-on Payment (NTAP) for AI that flags suspected large vessel occlusion.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Adoption grew year over year but stayed low. NTAP-billed AI use <strong>peaked at 21%</strong> of eligible cases in 2022, then declined in 2023 as the temporary code began to sunset. Where the AI was used followed a clear pattern: it clustered at <strong>comprehensive stroke centers</strong> and at hospitals with <strong>1,000 or more beds</strong>, and in the Stroke Belt. In adjusted models, the odds of NTAP-billed AI use were roughly <strong>6&times; higher in 2022</strong>, about <strong>2&times; higher</strong> for patients in the Stroke Belt, and around <strong>1.5&times; higher</strong> at comprehensive stroke centers.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The most important result is what did <em>not</em> predict access. The researchers found <strong>no disparities</strong> in NTAP-billed AI use by patient sex, age, or race/ethnicity, and none by stroke severity. Instead, hospitals serving more <strong>socioeconomically deprived areas were significantly less likely</strong> to use the AI. As lead author Casey Pelzl, MPH, put it, "access to these technologies depends more on where a patient is treated than on their clinical needs." The gap isn't about which patients need AI — it's about which sites can afford to adopt it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How the payment design gates access
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                To see why access concentrated, look at how NTAP works. It is a <strong>temporary, inpatient-only</strong> add-on that pays a hospital above the standard DRG amount — covering up to <strong>65%</strong> of the qualifying technology's cost for <strong>no more than three years</strong>, after which it sunsets. For stroke AI, the per-case add-on for Viz LVO was capped at roughly <a href="https://www.viz.ai/news/viz-ai-receives-new-technology-add-on-payment-renewal-for-stroke-ai-software-from-cms" target="_blank" rel="noopener noreferrer" className="text-xaid-blue hover:underline">$1,040</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That structure quietly selects for a certain kind of provider. Capturing the payment requires inpatient stroke volume, the coding and billing infrastructure to submit NTAP claims correctly, and the capital to buy and integrate the software while the add-on offsets only part of the cost — and only for a few years. Large academic and comprehensive stroke centers clear those bars easily. <Link to="/blog/small-hospital-radiology" className="text-xaid-blue hover:underline">Community hospitals</Link> and outpatient imaging centers often don't: much of their imaging is outpatient (where NTAP doesn't apply at all), their case volumes are thinner, and a temporary add-on is a shaky basis for a capital decision.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The result is a reimbursement mechanism intended to spur adoption that, in practice, concentrates it. When the code disappears, sites that leaned on it are exposed — and sites that never qualified were never in the game. That is how an access gap becomes a disparity: not through any clinical decision, but through the design of a payment.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Capital-gated adoption vs. per-study access
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The underlying problem is that AI adoption has been priced like a capital purchase and financed through a narrow, temporary payment. Change the pricing and the access math changes with it. The contrast:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]"> </th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Capital + NTAP-gated model</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Per-study / performance-based model</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Upfront cost</td>
                      <td className="py-3 pr-4">Hardware + licensing capital outlay</td>
                      <td className="py-3">None; cost is per report</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Who can adopt</td>
                      <td className="py-3 pr-4">Large hospitals with capital &amp; inpatient volume</td>
                      <td className="py-3">Any site, including outpatient &amp; community</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Depends on temporary code</td>
                      <td className="py-3 pr-4">Yes — exposed when NTAP sunsets</td>
                      <td className="py-3">No — cost scales with actual use</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Setting</td>
                      <td className="py-3 pr-4">Inpatient only</td>
                      <td className="py-3">Inpatient and outpatient</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Access tracks</td>
                      <td className="py-3 pr-4">Site resources</td>
                      <td className="py-3">Clinical demand</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A <Link to="/blog/performance-based-pricing-radiology-ai" className="text-xaid-blue hover:underline">per-study or performance-based price</Link> turns AI from a line item on a capital budget into a variable cost that rises and falls with volume. That removes the exact barrier the NTAP research exposes: the need for capital and inpatient scale before a site can even start. A smaller provider can adopt AI CT reporting on the same per-report terms as a large one, without betting on a payment code that expires.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Access is only half the equation; the other half is what the AI actually delivers once a site can use it. AI CT reporting is built so a <Link to="/blog/foundation-models-vs-narrow-ai-radiology" className="text-xaid-blue hover:underline">foundation model</Link> produces a structured, comprehensive report draft across findings — not a single narrow flag — and a radiologist reviews and signs every report before it reaches the chart. Priced per study rather than as capital, that model lets a community hospital or outpatient center get the same ready-to-sign, radiologist-reviewed output as a large center. Reimbursement can still evolve; access shouldn't have to wait for it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What does the Neiman Institute study say about access to radiology AI?',
                    a: "A 2026 study by the Harvey L. Neiman Health Policy Institute, published in the American Journal of Neuroradiology, analyzed 2,116 inpatient acute ischemic stroke episodes across 1,076 facilities from October 2020 through December 2023. It found that use of AI billed through Medicare's New Technology Add-on Payment (NTAP) program peaked at just 21% of eligible cases in 2022 and was concentrated at comprehensive stroke centers and large hospitals, while hospitals serving more socioeconomically deprived areas were significantly less likely to use it. Lead author Casey Pelzl said access depends more on where a patient is treated than on their clinical needs.",
                  },
                  {
                    q: 'What is NTAP and why does it limit who gets radiology AI?',
                    a: 'NTAP, the Medicare New Technology Add-on Payment, is a temporary inpatient-only payment that can cover up to 65% of the cost of a qualifying new technology for no more than three years. Because it applies only to inpatient stays and sunsets after a few years, it favors hospitals with inpatient stroke volume, capital, and coding infrastructure — typically large, resource-rich centers. Outpatient imaging centers and community hospitals see little to none of it, so a reimbursement mechanism designed to spur adoption can end up concentrating access.',
                  },
                  {
                    q: 'Did the study find disparities by patient demographics?',
                    a: 'No. The researchers found no differences in NTAP-billed AI use across patient sex, age, or race/ethnicity, or across measures of stroke severity. The disparities were driven by facility-level factors — hospital size, comprehensive stroke center designation, region, and area-level socioeconomic deprivation — meaning the gap is about which sites can adopt AI, not which patients clinically need it.',
                  },
                  {
                    q: 'How does per-study or performance-based pricing improve access to AI radiology?',
                    a: 'A per-study or performance-based model turns AI from a capital purchase into a variable, per-report cost that scales with volume. It removes the upfront hardware and licensing spend that reimbursement gates like NTAP were meant to offset, so an outpatient imaging center or community hospital can adopt AI CT reporting without depending on a temporary inpatient add-on payment. Access then tracks clinical demand rather than a site’s capital position.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#999] text-[13px] leading-[1.6] font-light mt-10">
                Source: Pelzl C, Sanmartin M, et al., "Patient and Facility Factors Associated with Uptake of NTAP-Billed AI to Identify Suspected LVO in Ischemic Stroke," <em>American Journal of Neuroradiology</em> (2026), <a href="https://doi.org/10.3174/ajnr.A9494" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.3174/ajnr.A9494</a>, via the <a href="https://www.neimanhpi.org/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Harvey L. Neiman Health Policy Institute</a>, and as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/uneven-access-radiology-ai-could-deepen-healthcare-disparities" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.auntminnie.com/clinical-news/ct/article/15828746/hospital-resources-tied-to-ai-adoption-for-stroke-detection" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Access shouldn't wait for a payment code."
          sub="xAID prices AI CT reporting per study — no capital outlay, no dependence on a temporary add-on. Try it on 5 free studies and see the radiologist-reviewed reports."
          primaryLabel="Request free pilot"
          primaryTo="/#contact-us"
          secondaryLabel="See performance-based pricing"
          secondaryTo="/blog/performance-based-pricing-radiology-ai"
        />

        {/* Related */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/performance-based-pricing-radiology-ai" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Pricing</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Performance-Based Pricing for Radiology AI</div>
              </Link>
              <Link to="/blog/small-hospital-radiology" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Community Care</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology for Small &amp; Community Hospitals</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RadiologyAiAccessDisparities;
