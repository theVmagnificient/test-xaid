import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AorticCalcificationCtScanSmoking = () => {
  const post = {
    title: 'Aortic Calcification on CT Scans: Why Location and Modality Matter for Smokers',
    dateIso: '2026-09-24',
    date: 'September 24, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A new ARIC cohort analysis finds smoking’s link to aortic calcification on CT is stronger than its link to coronary calcium — visible on scans no one ordered a cardiac workup for.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Aortic Calcification on CT Scans & Smoking | xAID</title>
        <meta name="description" content="A new ARIC analysis finds smoking's link to aortic calcification on CT is stronger than its link to coronary calcium — visible on routine, non-cardiac scans." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Aortic Calcification on CT Scans & Smoking | xAID" />
        <meta property="og:description" content="A new ARIC analysis finds smoking's link to aortic calcification on CT is stronger than its link to coronary calcium — visible on routine, non-cardiac scans." />
        <meta property="og:url" content="https://xaid.ai/blog/aortic-calcification-ct-scan-smoking" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aortic Calcification on CT Scans & Smoking | xAID" />
        <meta name="twitter:description" content="A new ARIC analysis finds smoking's link to aortic calcification on CT is stronger than its link to coronary calcium — visible on routine, non-cardiac scans." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/aortic-calcification-ct-scan-smoking" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/aortic-calcification-ct-scan-smoking",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "aortic calcification ct scan, thoracic aortic calcification smoking, incidental findings CT scan, opportunistic CT screening, cardiovascular risk CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study find about aortic calcification and smoking?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 analysis of the Atherosclerosis Risk in Communities (ARIC) Study, published in the journal Atherosclerosis, found that current smokers had roughly four times the odds of high thoracic aortic calcification and aortic valve ring calcification compared with never-smokers on CT, versus about 2.6 times the odds for coronary artery calcium. The association with valve leaflet and mitral valve calcification was weaker and less consistent."
              }
            },
            {
              "@type": "Question",
              "name": "Why does the location of the calcification matter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The researchers found smoking's effect was not uniform across vascular beds. The odds ratios for thoracic aortic and aortic valve ring calcification in current smokers were roughly 4.0-4.1, well above the 2.6 seen for coronary artery calcium, and the dose-response with pack-years was linear for the aorta but plateaued after 20 pack-years for coronary calcium. Valve leaflet and mitral calcification showed weaker, less consistent associations with smoking."
              }
            },
            {
              "@type": "Question",
              "name": "Why does imaging modality matter for detecting aortic calcification?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Coronary artery calcium scoring requires a dedicated cardiac-gated CT protocol. Thoracic aortic calcification does not: the study authors note it \"can be identified by regular chest X-ray,\" and it is routinely visible on ordinary non-contrast chest CT ordered for lung cancer screening or any other indication. That makes it a far more scalable opportunistic signal than coronary calcium scoring alone."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for routine CT reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aortic calcification shows up incidentally on a huge volume of routine, non-cardiac chest and abdominal CT scans, but it rarely gets a structured cardiovascular-risk callout unless the scan was specifically ordered for cardiac calcium scoring. Turning it into a reliable, structured part of every applicable report — not a finding that depends on whether a radiologist happens to flag it — is what makes opportunistic screening operational at scale."
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
              Smoking and aortic calcification:<br />
              <span className="text-white/60">location and imaging modality change the picture</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new analysis of the ARIC cohort finds that smoking's link to calcification in the thoracic aorta is stronger — and more linear — than its well-known link to coronary artery calcium. The aortic signal is also visible on far more routine scans, including plain chest X-ray, than coronary calcium scoring ever will be.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,901', label: 'ARIC participants studied', sub: 'chest CT, mean age 81' },
            { stat: '4.1x', label: 'higher odds, valve ring', sub: 'current vs never smokers' },
            { stat: '2.6x', label: 'higher odds, CAC', sub: 'current vs never smokers' },
            { stat: '20', label: 'pack-years: CAC plateaus', sub: 'aorta risk stayed linear' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the new analysis looked at
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Cigarette smoking's link to coronary artery calcium (CAC) is well established. What has been less clear is whether smoking affects the rest of the cardiovascular system the same way. A team led by Mengkun Chen, M.D., M.H.S., analyzed <strong>1,901</strong> participants in the Atherosclerosis Risk in Communities (ARIC) Study — mean age 81, 62% female, 20% Black, none with a prior diagnosis of coronary heart disease — using non-contrast, cardiac-gated CT scans collected at ARIC's seventh study visit (2018–2019). The results were published in the journal <a href="https://doi.org/10.1016/j.atherosclerosis.2026.120673" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Atherosclerosis</em></a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The cohort included <strong>1,000</strong> never-smokers (52.6%), <strong>807</strong> former smokers (42.5%), and <strong>94</strong> current smokers (4.9%). Using Agatston scoring, the researchers didn't stop at coronary calcium. They also measured calcification in the ascending and descending thoracic aorta, the aortic valve ring, the aortic valve leaflets, and the mitral valve — the vascular and valvular sites collectively described as "extra-coronary calcification."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That broader net is what let the researchers ask a question routine CAC studies can't answer: does smoking damage every part of the cardiovascular system equally, or does the risk concentrate somewhere specific?
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Location changes the picture
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It doesn't concentrate where most cardiovascular risk conversations focus. Compared with never-smokers, current smokers had roughly <strong>2.6 times</strong> the adjusted odds of high coronary artery calcium (aOR 2.57, 95% CI 1.58–4.19) — but closer to <strong>4 times</strong> the odds of high calcification in the thoracic aorta and aortic valve ring:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Site</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Current vs never smokers</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Former vs never smokers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Coronary artery calcium</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">aOR 2.57 (1.58–4.19)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">aOR 1.66 (1.30–2.12)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Ascending aorta</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">aOR 4.07 (2.56–6.46)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">aOR 1.36 (1.06–1.73)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Descending aorta</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">aOR 3.97 (2.45–6.43)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">aOR 1.65 (1.29–2.12)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Aortic valve ring</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">aOR 4.10 (2.57–6.55)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">aOR 1.40 (1.10–1.78)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Aortic valve leaflets</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">aOR 1.26 (0.74–2.14), n.s.</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">aOR 1.30 (1.03–1.65)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Mitral valve</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">aOR 1.70 (1.03–2.79)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">aOR 1.10 (0.87–1.40), n.s.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                As the authors put it in their conclusion, smoking "was strongly associated with vascular calcification, especially calcification in the aorta, but less so for valvular calcification" — evidence, they argue, of "unique pathophysiology across different vascular beds and cardiac valves." A CAC score alone would have understated how hard smoking hits the aorta specifically.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Dose and quitting also play out differently by site
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Pack-years told a similar location-dependent story. The dose-response relationship between cumulative smoking and calcification plateaued after about 20 pack-years for coronary artery calcium — heavier smoking beyond that point didn't add much additional CAC risk. For the ascending aorta, descending aorta, and aortic valve ring, the relationship stayed roughly linear: more pack-years kept translating into higher odds of calcification, with no plateau in the range the study could measure.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Quitting helped, but not quickly or completely. The odds of high calcification generally declined the longer someone had been smoke-free, yet for coronary artery calcium specifically, even quitting more than 30 years earlier still left the odds of high CAC significantly elevated (aOR 1.55, 95% CI 1.16–2.07) compared with never having smoked.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why imaging modality matters, too
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Coronary artery calcium scoring is only available where someone ordered a dedicated cardiac-gated CT — a specific protocol, ordered for a specific reason. Thoracic aortic calcification is not nearly as constrained. The study authors note directly that thoracic aorta calcification "can be identified by regular chest X-ray," and in practice it is visible on any non-contrast chest CT, whatever the scan was ordered for — lung cancer screening, a pulmonary nodule follow-up, a pre-operative workup, or an unrelated abdominal CT that includes part of the aorta in its field of view.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Put the two findings together and the practical implication is straightforward: the calcification signal that tracks smoking exposure most strongly (the aorta) is also the one that shows up on the widest range of imaging studies most hospitals already perform every day, on scans nobody ordered for a cardiac workup at all.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The reporting gap opportunistic screening runs into
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That widespread visibility is also the problem. Aortic calcification appears incidentally on an enormous volume of routine, non-cardiac chest and abdominal CT scans — but it typically earns a structured cardiovascular-risk callout only when the scan was specifically ordered for cardiac calcium scoring or a related cardiac indication. On everything else, whether it gets mentioned depends on whether the finding happens to catch a radiologist's attention on a study read primarily for something else. A biomarker this strongly tied to smoking-related cardiovascular risk shouldn't be reported inconsistently just because of what box was checked on the order.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured, AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Findings like this only become useful in practice if the reporting workflow captures them the same way every time, on every applicable study, not only when a finding is the reason a scan was ordered. That is the case for building opportunistic-finding extraction — aortic calcification alongside <Link to="/blog/incidental-renal-mass-ct-report/" className="text-xaid-blue-strong underline underline-offset-2">renal masses</Link>, <Link to="/blog/incidental-findings-chest-ct-breast-lesions/" className="text-xaid-blue-strong underline underline-offset-2">breast lesions</Link>, and <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">vertebral bone density</Link> — into structured CT reporting by default. <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">Foundation-model based reporting</Link> is built to draft a comprehensive read of the whole study rather than only the primary indication; xAID's in-house radiologist reviews every preliminary, and the report reaches the client's reading radiologist ready-to-sign.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study find about aortic calcification and smoking?',
                    a: 'A 2026 analysis of the Atherosclerosis Risk in Communities (ARIC) Study, published in the journal Atherosclerosis, found that current smokers had roughly four times the odds of high thoracic aortic calcification and aortic valve ring calcification compared with never-smokers on CT, versus about 2.6 times the odds for coronary artery calcium. The association with valve leaflet and mitral valve calcification was weaker and less consistent.',
                  },
                  {
                    q: "Why does the location of the calcification matter?",
                    a: "The researchers found smoking's effect was not uniform across vascular beds. The odds ratios for thoracic aortic and aortic valve ring calcification in current smokers were roughly 4.0-4.1, well above the 2.6 seen for coronary artery calcium, and the dose-response with pack-years was linear for the aorta but plateaued after 20 pack-years for coronary calcium. Valve leaflet and mitral calcification showed weaker, less consistent associations with smoking.",
                  },
                  {
                    q: 'Why does imaging modality matter for detecting aortic calcification?',
                    a: 'Coronary artery calcium scoring requires a dedicated cardiac-gated CT protocol. Thoracic aortic calcification does not: the study authors note it "can be identified by regular chest X-ray," and it is routinely visible on ordinary non-contrast chest CT ordered for lung cancer screening or any other indication. That makes it a far more scalable opportunistic signal than coronary calcium scoring alone.',
                  },
                  {
                    q: 'What does this mean for routine CT reporting?',
                    a: "Aortic calcification shows up incidentally on a huge volume of routine, non-cardiac chest and abdominal CT scans, but it rarely gets a structured cardiovascular-risk callout unless the scan was specifically ordered for cardiac calcium scoring. Turning it into a reliable, structured part of every applicable report — not a finding that depends on whether a radiologist happens to flag it — is what makes opportunistic screening operational at scale.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Chen M, et al. "Associations of cigarette smoking with coronary artery and extra-coronary calcification in older adults: The Atherosclerosis Risk in Communities study." <em>Atherosclerosis</em>, Vol. 414, 120673 (2026). <a href="https://doi.org/10.1016/j.atherosclerosis.2026.120673" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1016/j.atherosclerosis.2026.120673</a>. As covered by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/aortic-calcification-and-smoking-location-and-imaging-modality-matter-new-data-show" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Every routine CT contains more than the study asked for"
          sub="See how AI-assisted, radiologist-reviewed reporting surfaces incidental findings consistently. Try it on 5 free studies."
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
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT Bone Density Predicts Brain Aging</div>
              </Link>
              <Link to="/blog/incidental-renal-mass-ct-report/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Renal Mass on CT: Why the Report Matters</div>
              </Link>
              <Link to="/blog/incidental-findings-chest-ct-breast-lesions/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Findings on Chest CT: The Breast Lesions Radiologists Are Missing</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AorticCalcificationCtScanSmoking;
