import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const LiquidBiopsyVsImagingCancerSurveillance = () => {
  const post = {
    title: 'Liquid Biopsy vs Imaging for Cancer Surveillance: What a Blood Test Still Can\'t See',
    dateIso: '2026-10-28',
    date: 'October 28, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "Abbott's new MRD blood test claims earlier recurrence detection than imaging. Here is what liquid biopsy can, and cannot, replace in cancer surveillance.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Liquid Biopsy vs Imaging for Cancer Surveillance | xAID</title>
        <meta name="description" content="Abbott's new MRD blood test claims earlier recurrence detection than imaging. Here is what liquid biopsy can, and cannot, replace in cancer surveillance." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Liquid Biopsy vs Imaging for Cancer Surveillance | xAID" />
        <meta property="og:description" content="Abbott's new MRD blood test claims earlier recurrence detection than imaging. Here is what liquid biopsy can, and cannot, replace in cancer surveillance." />
        <meta property="og:url" content="https://xaid.ai/blog/liquid-biopsy-vs-imaging-cancer-surveillance" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liquid Biopsy vs Imaging for Cancer Surveillance | xAID" />
        <meta name="twitter:description" content="Abbott's new MRD blood test claims earlier recurrence detection than imaging. Here is what liquid biopsy can, and cannot, replace in cancer surveillance." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/liquid-biopsy-vs-imaging-cancer-surveillance" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/liquid-biopsy-vs-imaging-cancer-surveillance",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "liquid biopsy vs imaging cancer surveillance, ctDNA MRD testing, cancer recurrence detection, structured radiology reporting, molecular residual disease"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can a liquid biopsy blood test replace imaging for cancer recurrence monitoring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. ASCO's 2026 clinical practice guideline on circulating tumor DNA (ctDNA) testing states it is not recommended as a replacement for any other form of testing, including imaging. ctDNA can flag a systemic molecular signal of recurrence, often months before it is visible on a scan, but it does not tell clinicians where in the body disease has returned, which imaging is still needed to determine."
              }
            },
            {
              "@type": "Question",
              "name": "How much earlier can ctDNA detect recurrence compared to imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the CIRCULATE-Japan GALAXY study of 2,240 resected colorectal cancer patients, published in Nature Medicine (2024), a positive ctDNA result preceded radiological confirmation of recurrence by a median of 5.9 months (about six months). Other colorectal and lung cancer cohorts have reported similar ctDNA-to-imaging lead times, generally in the 3-to-11-month range."
              }
            },
            {
              "@type": "Question",
              "name": "Does ctDNA ever miss recurrences that imaging catches?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A 2026 analysis of ctDNA surveillance after pancreatic cancer surgery, published in Abdominal Radiology, found that imaging detected local (surgical-bed) and lung recurrences that blood testing missed: only about 67% of imaging-confirmed local recurrences and 17% of imaging-confirmed lung metastases were also flagged by a positive ctDNA test. Site-specific blind spots like these are why imaging remains the spatial layer of surveillance."
              }
            },
            {
              "@type": "Question",
              "name": "If imaging still matters, why does reporting quality matter as much as scan frequency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because imaging's advantage over a blood test is the ability to localize and characterize disease, and that advantage only holds if findings are reported consistently. A 2020 study in Insights into Imaging found oncologists rated structured follow-up reports positively 89% of the time versus 67% for narrative reports, with far higher agreement between readers. A scan that is read inconsistently narrows the gap that makes imaging worth doing at all."
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
                Market &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Liquid biopsy vs imaging for cancer surveillance:<br />
              <span className="text-white/60">what a blood test still can't see</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Abbott's newest MRD blood test is marketed on catching recurrence earlier than "traditional methods like imaging scans." The data backs an earlier molecular signal — but earlier isn't the same as complete. Here's what liquid biopsy can and can't replace in cancer surveillance, and why imaging's edge depends on how consistently it's reported.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '5,000', label: 'Patient-specific variants tracked', sub: "Abbott's new Oncodetect test, up from 200" },
            { stat: '<1 ppm', label: 'ctDNA detection limit', sub: '30x more sensitive than prior version' },
            { stat: '~6 months', label: 'Median ctDNA lead time over imaging', sub: '2,240-patient GALAXY study, Nature Medicine' },
            { stat: '17%', label: 'Imaging-confirmed lung mets also flagged by ctDNA', sub: 'Abdominal Radiology, 2026' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The news: a more sensitive blood test, pitched against imaging
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On October 26, 2026, Abbott <a href="https://abbott.mediaroom.com/2026-10-26-Abbott-launches-whole-genome-sequencing-Oncodetect-R-molecular-residual-disease-MRD-test-to-detect-traces-of-cancer-during-and-after-treatment" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">launched the next generation of its Oncodetect</a> molecular residual disease (MRD) test, a tumor-informed liquid biopsy that uses whole-genome sequencing to track up to <strong>5,000</strong> patient-specific mutations in a patient's blood, up from roughly 200 in the prior whole-exome version. Abbott says the new assay can detect circulating tumor DNA (ctDNA) at concentrations below <strong>one part per million</strong> — about a 30-fold improvement over the first-generation test's 15-to-50 parts-per-million floor. In a colorectal cancer sub-study called Beta-CORRECT, presented alongside the launch, Abbott reported a roughly <strong>30-percentage-point</strong> absolute improvement in sensitivity for detecting recurrence within two years, measured at a single post-surgical timepoint in stage II-IV patients, as <a href="https://www.medtechdive.com/news/abbott-launches-mrd-test-with-improved-cancer-detection-tech/872867/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by MedTech Dive</a>. Abbott estimates more than 3 million U.S. patients with solid tumors could potentially benefit from MRD testing. The test is a laboratory-developed test run at a CLIA-certified lab; it has not been cleared or approved by the FDA.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The framing in Abbott's own coverage is explicit: the goal is to "detect recurring disease earlier than traditional methods like imaging scans." That's a real and measurable claim about speed. It is also, on its own, an incomplete comparison — because speed and completeness are different axes, and imaging wins on the second one in ways a blood draw structurally cannot.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What ctDNA genuinely does better: an earlier systemic signal
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The lead-time advantage is not a marketing invention. In the CIRCULATE-Japan <a href="https://doi.org/10.1038/s41591-024-03254-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">GALAXY study</a>, published in <em>Nature Medicine</em> (2024) and tracking 2,240 patients with resected colorectal cancer, a positive post-surgical ctDNA result preceded radiological confirmation of recurrence by a median of 5.9 months (about six months). Similar colorectal and lung cancer cohorts have reported ctDNA-to-imaging lead times ranging from about 3 to 11 months, depending on tumor type, assay, and testing interval. That gap matters clinically: it is time in which a clinician could, in principle, intervene before a lesion is large enough to see.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What ctDNA is detecting, though, is a molecular signature of disease shed into the bloodstream — a systemic "yes, something is there" signal. It does not come with an address.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What it still can't do: tell anyone where
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A positive MRD test cannot localize disease, stage it, measure it, or distinguish a resectable single lesion from diffuse metastatic spread. That localization step is unavoidable before any treatment decision — surgery, radiation, or even watchful monitoring — and today only imaging provides it. ASCO's first clinical practice guideline on ctDNA testing, published in 2026 in <em><a href="https://ascopubs.org/doi/10.1200/OP-26-00311" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">JCO Oncology Practice</a></em>, is direct about this: ctDNA testing "is not recommended as a replacement for any other form of testing," and the guideline's authors describe it as a complementary tool alongside standard-of-care imaging, not a substitute for it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                There's also a site-specific blind spot that doesn't get much attention in launch coverage. A 2026 analysis of ctDNA surveillance after pancreatic cancer resection, published in <em><a href="https://doi.org/10.1007/s00261-026-05470-9" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Abdominal Radiology</a></em>, found that recurrences in the lymph nodes, liver, peritoneum, and bone tracked well with positive ctDNA — but recurrences in the lungs or the surgical bed frequently did not. Of imaging-confirmed local (surgical-bed) recurrences, only about <strong>67%</strong> were also flagged by a positive ctDNA test; for imaging-confirmed lung metastases, the concordance dropped to roughly <strong>17%</strong>. In other words, for two of the most clinically important recurrence sites, a patient could be ctDNA-negative and still have disease that only a scan would catch.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this makes Abbott's sensitivity numbers wrong. It means the honest comparison isn't "blood test versus scan" — it's a systemic early-warning layer paired with a spatial confirmation-and-localization layer that still has to be read well to do its job.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The part competitive framing skips: reporting quality, not just scan frequency
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                If imaging's remaining advantage is localization and characterization, that advantage is only as good as the report that comes out of it. This is where imaging surveillance programs are more vulnerable than the "scan less often, test blood more often" framing suggests — not because CT and MRI can't see recurrence, but because follow-up reports vary widely in how consistently they describe what was found, compared, and measured against the prior study.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A 2020 study in <em><a href="https://doi.org/10.1186/s13244-020-00907-1" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Insights into Imaging</a></em> compared structured oncology follow-up reports against conventional narrative reports, rated by six medical oncologists. Structured reports were rated positively <strong>89%</strong> of the time overall versus <strong>67%</strong> for narrative reports, with even larger gaps on tumor-measurement clarity and treatment-response decisiveness. Agreement between raters was also substantially higher for structured reports (agreement coefficient 0.81) than for narrative ones (0.56) — direct evidence that standardizing the report, not just performing the scan, is what makes serial comparison reliable from one follow-up to the next.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the part a "blood test beats imaging" headline leaves out. Oncodetect's sensitivity gains came from engineering — more variants tracked, a lower detection floor. Imaging has an equivalent lever sitting unused in most practices: consistent, comparable reporting of what a follow-up scan actually shows, scan after scan, reader after reader. A faster blood test doesn't close that gap. Better reporting does.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the specific gap AI-assisted CT reporting is built to close: a comprehensive, structured draft on every scan — consistent measurements, consistent comparison to priors, consistent language for recurrence-relevant findings — reviewed in-house and delivered ready-to-sign, so imaging's localization advantage doesn't depend on which radiologist happened to dictate that day's report. Liquid biopsy and imaging aren't rivals competing for the same job; they're complementary layers, and imaging only holds its half of the bargain if the reporting behind it is as consistent as the lab assay on the other side.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Liquid biopsy MRD vs imaging surveillance, side by side
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Liquid biopsy (ctDNA/MRD)</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Imaging (CT/MRI)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['What it detects', 'A systemic molecular signal that disease is present somewhere', 'Location, size, extent, and character of a specific lesion'],
                      ['Typical lead time', '~6 months earlier than imaging (GALAXY, median)', 'Confirms and localizes what the signal implied'],
                      ['Known blind spots', 'Lung and surgical-bed recurrences under-detected', 'Requires a scan to be ordered, performed, and read consistently'],
                      ['Regulatory status (this test)', 'Laboratory-developed test, not FDA cleared/approved', 'Established standard of care across guidelines'],
                      ['What drives accuracy', 'Variants tracked, detection limit (parts per million)', 'Structured, consistent reporting against priors'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#0D0D0D] font-medium">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#666] font-light">{row[1]}</td>
                        <td className="py-3 text-[#666] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can a liquid biopsy blood test replace imaging for cancer recurrence monitoring?',
                    a: "No. ASCO's 2026 clinical practice guideline on circulating tumor DNA (ctDNA) testing states it is not recommended as a replacement for any other form of testing, including imaging. ctDNA can flag a systemic molecular signal of recurrence, often months before it is visible on a scan, but it does not tell clinicians where in the body disease has returned, which imaging is still needed to determine.",
                  },
                  {
                    q: 'How much earlier can ctDNA detect recurrence compared to imaging?',
                    a: 'In the CIRCULATE-Japan GALAXY study of 2,240 resected colorectal cancer patients, published in Nature Medicine (2024), a positive ctDNA result preceded radiological confirmation of recurrence by a median of 5.9 months (about six months). Other colorectal and lung cancer cohorts have reported similar ctDNA-to-imaging lead times, generally in the 3-to-11-month range.',
                  },
                  {
                    q: 'Does ctDNA ever miss recurrences that imaging catches?',
                    a: 'Yes. A 2026 analysis of ctDNA surveillance after pancreatic cancer surgery, published in Abdominal Radiology, found that imaging detected local (surgical-bed) and lung recurrences that blood testing missed: only about 67% of imaging-confirmed local recurrences and 17% of imaging-confirmed lung metastases were also flagged by a positive ctDNA test. Site-specific blind spots like these are why imaging remains the spatial layer of surveillance.',
                  },
                  {
                    q: "If imaging still matters, why does reporting quality matter as much as scan frequency?",
                    a: "Because imaging's advantage over a blood test is the ability to localize and characterize disease, and that advantage only holds if findings are reported consistently. A 2020 study in Insights into Imaging found oncologists rated structured follow-up reports positively 89% of the time versus 67% for narrative reports, with far higher agreement between readers. A scan that is read inconsistently narrows the gap that makes imaging worth doing at all.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Abbott's Oncodetect MRD test launch, as reported by <a href="https://abbott.mediaroom.com/2026-10-26-Abbott-launches-whole-genome-sequencing-Oncodetect-R-molecular-residual-disease-MRD-test-to-detect-traces-of-cancer-during-and-after-treatment" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Abbott</a> and <a href="https://www.medtechdive.com/news/abbott-launches-mrd-test-with-improved-cancer-detection-tech/872867/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a> (October 2026); ctDNA lead-time data from <a href="https://doi.org/10.1038/s41591-024-03254-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Nature Medicine</a> (2024, CIRCULATE-Japan GALAXY study); ctDNA site-specific blind spots from <a href="https://doi.org/10.1007/s00261-026-05470-9" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Abdominal Radiology</a> (2026); ASCO ctDNA guideline from <a href="https://ascopubs.org/doi/10.1200/OP-26-00311" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">JCO Oncology Practice</a> (2026); structured-reporting data from <a href="https://doi.org/10.1186/s13244-020-00907-1" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Insights into Imaging</a> (2020). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Make imaging's advantage count on every report"
          sub="Consistent, structured, ready-to-sign reports on every CT — so imaging's localization edge doesn't depend on who read it that day. Try it on 5 free studies."
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
              <Link to="/blog/pancreatic-cancer-on-ct-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Pancreatic Cancer on CT Scan: The Signal Most Patients Fall Outside Screening For</div>
              </Link>
              <Link to="/blog/teleradiology-follow-up-recommendation-variability/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Teleradiologists Recommend More Follow-Up Imaging. The Real Problem Is Variability.</div>
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

export default LiquidBiopsyVsImagingCancerSurveillance;
