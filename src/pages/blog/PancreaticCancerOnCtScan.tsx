import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const PancreaticCancerOnCtScan = () => {
  const post = {
    title: 'Pancreatic Cancer on CT Scan: The Signal Most Patients Fall Outside Screening For',
    dateIso: '2026-10-24',
    date: 'October 24, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A Mayo Clinic study of 1,825 cases found CT-visible muscle and fat changes years before pancreatic cancer diagnosis, in patients outside high-risk screening.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Pancreatic Cancer on CT Scan: An Early Signal | xAID</title>
        <meta name="description" content="A Mayo Clinic study of 1,825 cases found CT-visible muscle and fat changes years before pancreatic cancer diagnosis, in patients outside high-risk screening." />
        <link rel="canonical" href="https://xaid.ai/blog/pancreatic-cancer-on-ct-scan/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pancreatic Cancer on CT Scan: An Early Signal | xAID" />
        <meta property="og:description" content="A Mayo Clinic study of 1,825 cases found CT-visible muscle and fat changes years before pancreatic cancer diagnosis, in patients outside high-risk screening." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pancreatic Cancer on CT Scan: An Early Signal | xAID" />
        <meta name="twitter:description" content="A Mayo Clinic study of 1,825 cases found CT-visible muscle and fat changes years before pancreatic cancer diagnosis, in patients outside high-risk screening." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/pancreatic-cancer-on-ct-scan" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/pancreatic-cancer-on-ct-scan",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "pancreatic cancer on ct scan, pancreatic cancer early detection, CT body composition, opportunistic CT screening, sarcopenia pancreatic cancer"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can a CT scan show pancreatic cancer risk before diagnosis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 Mayo Clinic study in Pancreatology compared abdominal CT scans from 1,825 patients later diagnosed with pancreatic ductal adenocarcinoma (PDAC) against 3,650 matched controls. Patients who went on to be diagnosed showed steeper declines in subcutaneous and visceral fat over the three years before diagnosis, and in skeletal muscle over the final 12 months, than matched controls — a pattern visible on routine CT scans taken for unrelated reasons, years before anyone suspected cancer."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is the CT body-composition signal for pancreatic cancer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Moderate, not diagnostic. In a matched 581-case, 581-control subsample used for individual-level analysis, the combined change in skeletal muscle, visceral fat and subcutaneous fat produced an AUC of 0.76 (95% CI, 0.73-0.78) for distinguishing future PDAC patients from controls. That is well above chance but far short of a standalone test — the researchers describe it as a candidate input for a future risk-prediction algorithm, not a screening tool on its own."
              }
            },
            {
              "@type": "Question",
              "name": "Why don't most future pancreatic cancer patients qualify for existing screening?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Only about 5-10% of pancreatic cancer cases are linked to an inherited mutation or strong family history, which is what qualifies a person for today's high-risk surveillance programs using endoscopic ultrasound or MRI. The large majority of future patients have no family history or known genetic risk factor, so they have no criteria-based pathway into any surveillance program — they are only ever seen by a scanner incidentally, for an unrelated reason."
              }
            },
            {
              "@type": "Question",
              "name": "How would a body-composition risk signal actually get used in practice?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Only if it is captured as a structured, numeric measurement on every abdominal CT, not just scans ordered for cancer surveillance. Because most future PDAC patients fall outside hereditary high-risk criteria, a signal confined to a targeted screening population would miss nearly all of them. Extracting muscle and fat indices routinely from every abdominal CT — regardless of why the scan was ordered — is what would let a longitudinal trend be flagged automatically instead of reconstructed years later by researchers."
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
                {post.category}
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Pancreatic cancer on CT scan:<br />
              <span className="text-white/60">the signal most patients fall outside screening for</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A Mayo Clinic study found that people who later developed pancreatic cancer were already losing muscle and fat, in a measurable pattern, on CT scans taken years before diagnosis. The uncomfortable detail: almost none of those patients would have qualified for any existing high-risk surveillance program.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,825 vs 3,650', label: 'Cases vs. matched controls' },
            { stat: '581 vs 581', label: 'AUC subsample size' },
            { stat: 'AUC 0.76', label: 'Case/control discrimination', sub: '95% CI 0.73–0.78' },
            { stat: '~90%', label: 'Outside hereditary risk', sub: 'no surveillance pathway' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study looked at
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers at Mayo Clinic, led by former research fellow Aleksander Bogdanski with senior author Yan Bi, M.D., Ph.D., and corresponding author Michael Wallace, M.D., published a case-control analysis in <a href="https://doi.org/10.1016/j.pan.2026.09.008" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Pancreatology</em></a> comparing abdominal CT scans from <strong>1,825 patients</strong> later diagnosed with pancreatic ductal adenocarcinoma (PDAC) against <strong>3,650 matched controls</strong> across Mayo Clinic sites in Arizona, Florida and Minnesota — described by the authors as the largest controlled study to date of pre-diagnostic body-composition trajectories in PDAC, as <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/body-composition-changes-ct-could-signal-pancreatic-cancer-years-diagnosis" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                An AI-based body-composition tool quantified skeletal muscle, visceral fat and subcutaneous fat on each patient's prior abdominal CT scans — scans originally ordered for unrelated reasons — then tracked how those measurements changed in the years leading up to diagnosis.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "Pancreatic cancer often develops silently, making early detection extremely challenging," Dr. Bi said. "These findings suggest that routine CT scans may capture physiological changes associated with pancreatic cancer before patients are diagnosed."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Fat declines first, muscle follows — and the signal is real but moderate
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Compared with controls, patients who went on to be diagnosed with PDAC had significantly steeper declines in both subcutaneous and visceral fat over the <strong>three years</strong> before diagnosis. Skeletal muscle loss only separated clearly from controls in the <strong>final 12 months</strong> before diagnosis — consistent with muscle wasting as a later, more acute process layered on top of a slower fat decline.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Our study shows that body composition changes associated with pancreatic cancer are detectable on routine CT scans and differ from the changes observed in similar patients without cancer," said Dr. Wallace.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In a matched individual-level subsample of <strong>581 cases and 581 controls</strong>, the combined longitudinal change in skeletal muscle, visceral fat and subcutaneous fat gave what the researchers call moderate discriminatory ability: an area under the curve of <strong>0.76</strong> (95% CI, 0.73–0.78). That's well above chance (0.5) but far from a diagnostic test on its own — it says the pattern is real and detectable, not that it can reliably flag an individual patient by itself.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The real finding: most of these patients were never going to be screened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The researchers are explicit that current pancreatic cancer surveillance is built around inherited genetic risk and family history — and that most people who develop the disease sit entirely outside it. Only about <strong>5–10%</strong> of pancreatic cancer cases are linked to an identifiable hereditary mutation or strong family-history pattern, per the <a href="https://pancan.org/news/pancreatic-cancer-hereditary/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Pancreatic Cancer Action Network</a> — the group of patients eligible for existing endoscopic-ultrasound or MRI surveillance programs. That leaves roughly <strong>90%</strong> of future PDAC patients with no criteria-based pathway into any surveillance program at all, discoverable only incidentally, on a scan ordered for something else.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That gap is exactly why pancreatic cancer still has no general-population screening test and why outcomes remain so poor. Per the American Cancer Society's figures cited in its 2026 <a href="https://www.cancer.org/cancer/types/pancreatic-cancer/detection-diagnosis-staging/survival-rates.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">survival-rate data</a>, an estimated <strong>67,530</strong> Americans will be diagnosed with pancreatic cancer in 2026 and <strong>52,740</strong> will die of it; only about <strong>15%</strong> are diagnosed at a localized stage, according to <a href="https://seer.cancer.gov/statfacts/html/pancreas.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">SEER</a>, where five-year survival reaches 44%, while the overall five-year relative survival rate across all stages remains stalled at <strong>13%</strong>. A risk signal confined to the ~10% already inside a hereditary surveillance pathway would, by construction, never reach the patients who make up the large majority of the disease's toll.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "targeted screening" is the wrong frame for this signal
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The researchers' own next step underlines the point: they describe combining body-composition trajectories with other clinical and imaging biomarkers into a risk-prediction algorithm — not restricting the measurement to a pre-selected high-risk population. A trend that only exists for patients already flagged as high-risk is of limited value, because those patients are a small, already-monitored slice of who eventually gets PDAC. The signal only becomes useful at the scale the disease actually occurs at if muscle and fat indices are captured as routine, structured output on <em>every</em> abdominal CT — regardless of why it was ordered — not layered onto a dedicated screening protocol a small subset of patients will ever receive.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That distinction — opportunistic extraction from routine imaging versus a targeted screening program — is the same gap xAID has pointed to in other incidental findings on CT: a missed <Link to="/blog/incidental-findings-chest-ct-breast-lesions/" className="text-xaid-blue-strong underline underline-offset-2">breast lesion visible on a chest CT</Link> ordered for chest pain, an <Link to="/blog/incidental-renal-mass-ct-report/" className="text-xaid-blue-strong underline underline-offset-2">incidental renal mass</Link> on a scan done for something unrelated, or <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">vertebral bone density on a routine chest CT</Link> tracking with cognitive decline. In every case, the clinically useful signal was sitting in imaging the patient had already received for an unrelated reason — the only question was whether the report captured it as data.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Targeted high-risk surveillance</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Opportunistic extraction from routine CT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Reaches ~5–10% of future PDAC patients (hereditary/family history)', 'Reaches every patient who gets an abdominal CT for any reason'],
                      ['Requires a dedicated EUS or MRI protocol and visit', 'Uses imaging the patient already received'],
                      ['Depends on genetic counseling or family-history intake first', 'Depends only on the scan being read with structured measurements'],
                      ['Narrative CT reports can\'t trend muscle/fat change over years', 'Numeric indices are directly comparable scan to scan'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This study only exists because researchers could retroactively mine thousands of abdominal CTs for a consistent muscle and fat number, years apart, across three sites. A report that says "soft tissues unremarkable" can't be plotted on a three-year curve — it isn't a measurement. Making a signal like this usable in practice, for the roughly 90% of future PDAC patients with no surveillance pathway, means abdominal CT reports need to produce those numbers as a matter of routine, not as a research reconstruction a decade later. That's the case for comprehensive, structured report drafting on every study: xAID's AI generates a structured report draft for each CT, an in-house radiologist reviews every preliminary, and it goes out ready-to-sign for the client's reading radiologist. The clinical question — does this trend predict pancreatic cancer reliably enough to act on — is still years of validation away. The reporting-infrastructure question — does the read capture the numbers that would even make that validation possible — is one structured reporting already answers.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can a CT scan show pancreatic cancer risk before diagnosis?',
                    a: 'A 2026 Mayo Clinic study in Pancreatology compared abdominal CT scans from 1,825 patients later diagnosed with pancreatic ductal adenocarcinoma (PDAC) against 3,650 matched controls. Patients who went on to be diagnosed showed steeper declines in subcutaneous and visceral fat over the three years before diagnosis, and in skeletal muscle over the final 12 months, than matched controls — a pattern visible on routine CT scans taken for unrelated reasons, years before anyone suspected cancer.',
                  },
                  {
                    q: 'How accurate is the CT body-composition signal for pancreatic cancer?',
                    a: 'Moderate, not diagnostic. In a matched 581-case, 581-control subsample used for individual-level analysis, the combined change in skeletal muscle, visceral fat and subcutaneous fat produced an AUC of 0.76 (95% CI, 0.73-0.78) for distinguishing future PDAC patients from controls. That is well above chance but far short of a standalone test — the researchers describe it as a candidate input for a future risk-prediction algorithm, not a screening tool on its own.',
                  },
                  {
                    q: "Why don't most future pancreatic cancer patients qualify for existing screening?",
                    a: "Only about 5-10% of pancreatic cancer cases are linked to an inherited mutation or strong family history, which is what qualifies a person for today's high-risk surveillance programs using endoscopic ultrasound or MRI. The large majority of future patients have no family history or known genetic risk factor, so they have no criteria-based pathway into any surveillance program — they are only ever seen by a scanner incidentally, for an unrelated reason.",
                  },
                  {
                    q: 'How would a body-composition risk signal actually get used in practice?',
                    a: 'Only if it is captured as a structured, numeric measurement on every abdominal CT, not just scans ordered for cancer surveillance. Because most future PDAC patients fall outside hereditary high-risk criteria, a signal confined to a targeted screening population would miss nearly all of them. Extracting muscle and fat indices routinely from every abdominal CT — regardless of why the scan was ordered — is what would let a longitudinal trend be flagged automatically instead of reconstructed years later by researchers.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Bogdanski et al., "Longitudinal body composition changes distinguish pancreatic ductal adenocarcinoma from controls in a pre-diagnostic CT cohort," <em>Pancreatology</em> (2026), <a href="https://doi.org/10.1016/j.pan.2026.09.008" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.pan.2026.09.008</a>; as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/body-composition-changes-ct-could-signal-pancreatic-cancer-years-diagnosis" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Pancreatic cancer survival figures from the American Cancer Society, via <a href="https://www.cancer.org/cancer/types/pancreatic-cancer/detection-diagnosis-staging/survival-rates.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">cancer.org</a>; stage-at-diagnosis distribution via <a href="https://seer.cancer.gov/statfacts/html/pancreas.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">SEER</a>. Hereditary/familial share of cases via the <a href="https://pancan.org/news/pancreatic-cancer-hereditary/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Pancreatic Cancer Action Network</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports capture what narrative impressions miss"
          sub="xAID's AI drafts a comprehensive, structured report for every CT study. Try it on 5 free studies and see the radiologist-reviewed difference."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Findings on Chest CT: The Breast Lesions Radiologists Are Missing</div>
              </Link>
              <Link to="/blog/incidental-renal-mass-ct-report/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Renal Mass on CT: Why the Report Matters</div>
              </Link>
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT Bone Density Predicts Brain Aging</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PancreaticCancerOnCtScan;
