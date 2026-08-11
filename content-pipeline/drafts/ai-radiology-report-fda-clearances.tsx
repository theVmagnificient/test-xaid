import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const AiRadiologyReportFdaClearances = () => {
  const post = {
    title: "DeepHealth's FDA Clearance for AI Radiology Reports: What It Means for CT",
    dateIso: '2026-08-05',
    date: 'August 5, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "DeepHealth just won FDA 510(k) clearance for AI that reads breast ultrasounds and drafts the report — a full clearance, not just a fast-track designation. Here's how that compares to chest X-ray and CT AI report tools, and what it signals for timelines.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Radiology Report FDA Clearances, by Modality | xAID</title>
        <meta name="description" content="DeepHealth won FDA clearance for an AI radiology report tool in breast ultrasound — see how it compares to chest X-ray and CT AI report tools." />
        <link rel="canonical" href="https://xaid.ai/blog/ai-radiology-report-fda-clearances" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Radiology Report FDA Clearances, by Modality | xAID" />
        <meta property="og:description" content="DeepHealth won FDA clearance for an AI radiology report tool in breast ultrasound — see how it compares to chest X-ray and CT AI report tools." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Radiology Report FDA Clearances, by Modality | xAID" />
        <meta name="twitter:description" content="DeepHealth won FDA clearance for an AI radiology report tool in breast ultrasound — see how it compares to chest X-ray and CT AI report tools." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-radiology-report-fda-clearances" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-radiology-report-fda-clearances",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "AI radiology report, AI radiology report generation, FDA clearance AI radiology, AI report generation CT, breast ultrasound AI FDA"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did DeepHealth get FDA clearance for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On July 30, 2026, DeepHealth (a RadNet subsidiary) received FDA 510(k) clearance for DeepHealth Breast Ultrasound, an AI tool that localizes and characterizes breast lesions on ultrasound and generates a findings report, while the radiologist retains control of the final assessment. In FDA submission testing, the tool localized lesions with greater than 98% accuracy, improved breast cancer detection sensitivity by 8%, and cut radiologist interpretation time by 37% in a multi-reader study with 16 board-certified radiologists."
              }
            },
            {
              "@type": "Question",
              "name": "Is this the same as the chest X-ray AI report tools from Aidoc and Cognita?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Aidoc's First Read and Cognita's CXR tool, which draft chest X-ray reports, hold FDA Breakthrough Device Designation — a program that speeds up FDA review but is not a clearance to market. DeepHealth's breast ultrasound tool has actually cleared the FDA under a 510(k), which is a higher regulatory bar than a breakthrough designation."
              }
            },
            {
              "@type": "Question",
              "name": "Has any AI tool for CT been cleared by the FDA to generate full reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not yet, as of August 2026. FDA-cleared CT AI tools to date are detection and triage tools — for example, Aidoc's abdominal CT tool cleared in January 2026 flags 14 critical findings — or image-quality tools like SubtleHD(CT). None of the current FDA-cleared CT algorithms generate a structured narrative report the way DeepHealth's breast ultrasound tool or the chest X-ray breakthrough-designation tools do."
              }
            },
            {
              "@type": "Question",
              "name": "Why did report-generating AI reach full clearance in breast ultrasound before chest X-ray or CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Breast ultrasound reporting follows a well-defined structure (BI-RADS lesion descriptors: shape, orientation, margin), which narrows what the AI has to generate and makes it easier to validate against ground truth. Chest X-ray and CT findings are more varied and the report text is more open-ended, which is part of why those efforts are still moving through FDA's breakthrough pathway rather than a full clearance."
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
              DeepHealth's FDA clearance for AI radiology reports<br />
              <span className="text-white/60">and what it means for CT</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              DeepHealth just cleared the FDA for AI that reads breast ultrasounds and drafts the report — a full clearance, not a fast-track promise. Chest X-ray report-drafting tools are still on the breakthrough-designation runway, and CT has no report-generating clearance at all. Here's how the modality-by-modality timeline actually looks.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: 'Jul 30, 2026', label: 'FDA cleared DeepHealth Breast Ultrasound', sub: '510(k), full clearance' },
                { stat: '>98%', label: 'Lesion localization accuracy', sub: 'per FDA submission data' },
                { stat: '37%', label: 'Cut in radiologist read time', sub: '16-radiologist study' },
                { stat: '0', label: 'CT report-generation tools cleared', sub: 'as of August 2026' },
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
                What DeepHealth actually cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 30, 2026, DeepHealth — RadNet's AI subsidiary, which absorbed the technology through its 2025 acquisition of See-Mode Technologies — received FDA <strong>510(k) clearance</strong> for DeepHealth Breast Ultrasound, according to the company's <a href="https://www.globenewswire.com/news-release/2026/07/30/3336456/0/en/DeepHealth-Receives-FDA-Clearance-for-AI-Powered-Breast-Ultrasound.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announcement</a> and coverage in <a href="https://www.medtechdive.com/news/deephealth-gets-fda-nod-for-ai-tool-that-reads-ultrasounds-creates-reports/826958/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>. The tool localizes and characterizes suspicious breast lesions on ultrasound — shape, orientation, margin — and generates a findings-and-impressions report, while the radiologist keeps control of the final assessment.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The numbers behind the clearance, per the same release and cross-reported by <a href="https://www.itnonline.com/content/ai-powered-breast-ultrasound-receives-fda-clearance" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ITN</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15831375/deephealth-lands-fda-nod-for-breast-ultrasound-ai-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>: greater than <strong>98%</strong> accuracy localizing lesions, an <strong>8%</strong> improvement in breast cancer detection sensitivity, and a <strong>37%</strong> cut in radiologist interpretation time, in a multi-reader, multi-case study with 16 U.S. board-certified radiologists at select imaging centers and hospitals. RadNet plans to roll the tool out across its national network by the end of 2026, covering an estimated <strong>700,000+</strong> annual breast ultrasound exams, and intends to pursue reimbursement under an existing Category III CPT code for quantitative ultrasound tissue characterization, subject to payer policy.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The distinction that matters here is regulatory, not clinical: this is a full clearance to market, the same bar every diagnostic AI device in radiology has to clear. It's not a promise of future clearance — it's the thing itself.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Full clearance vs. a "breakthrough" head start
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two other report-drafting AI tools have made regulatory news this year, and it's easy to conflate their status with DeepHealth's. Both are chest X-ray tools that generate draft report text for a radiologist to review, and both hold FDA <strong>Breakthrough Device Designation</strong> — Aidoc's "First Read" (designated in June 2026) and Cognita's chest X-ray model from Radiology Partners' Mosaic Clinical Technologies (designated in March 2026), as reported by <a href="https://www.statnews.com/2026/06/25/radiology-generative-ai-cognita-aidoc-fda-breakthrough-designation/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">STAT News</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Breakthrough designation is real and useful — <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">per the FDA</a>, it fast-tracks the agency's engagement on the path to a 510(k), De Novo, or PMA decision. But it is a queue position, not a clearance. Neither First Read nor Cognita's chest X-ray tool is cleared to market yet. DeepHealth's breast ultrasound tool already is. That gap is the clearest evidence yet that report-generating AI is arriving modality by modality, on very different timelines, rather than as one industry-wide milestone.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The scorecard, modality by modality
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Modality / product</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">What it does</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">FDA status</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Breast ultrasound<br /><span className="text-[#888] text-xs">DeepHealth Breast Ultrasound</span></td>
                      <td className="py-3 pr-4">Localizes and characterizes lesions, drafts findings report</td>
                      <td className="py-3 pr-4"><strong>510(k) cleared</strong></td>
                      <td className="py-3">Jul 2026</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Chest X-ray<br /><span className="text-[#888] text-xs">Aidoc First Read</span></td>
                      <td className="py-3 pr-4">Drafts preliminary report text for radiologist review</td>
                      <td className="py-3 pr-4">Breakthrough designation only</td>
                      <td className="py-3">Jun 2026</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Chest X-ray<br /><span className="text-[#888] text-xs">Cognita CXR</span></td>
                      <td className="py-3 pr-4">Generative model drafts report across multiple findings</td>
                      <td className="py-3 pr-4">Breakthrough designation only</td>
                      <td className="py-3">Mar 2026</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Abdominal CT<br /><span className="text-[#888] text-xs">Aidoc triage tool</span></td>
                      <td className="py-3 pr-4">Flags 14 critical findings for triage — no report drafted</td>
                      <td className="py-3 pr-4">510(k) cleared</td>
                      <td className="py-3">Jan 2026</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">CT, any vendor<br /><span className="text-[#888] text-xs">report generation</span></td>
                      <td className="py-3 pr-4">End-to-end structured report drafting</td>
                      <td className="py-3 pr-4">No clearance yet</td>
                      <td className="py-3">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Reported <a href="https://www.statnews.com/2026/01/21/fda-clears-aidoc-tool-detect-multiple-conditions-from-ct-scan/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">by STAT News</a>, the January 2026 abdominal CT clearance is instructive by contrast: it's a detection/triage tool that flags findings like liver injury, splenic injury, bowel obstruction, and appendicitis for prioritization — it doesn't draft a report. CT has cleared AI for detection and for image-quality processing (such as noise-reduction tools like SubtleHD(CT)), but as of this writing no CT algorithm has FDA clearance — or even a breakthrough designation — to generate the kind of structured findings report that DeepHealth's ultrasound tool or the chest X-ray candidates produce.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why ultrasound got there first
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The order isn't random. Breast ultrasound reporting already runs on a standardized descriptor set — BI-RADS lesion shape, orientation, and margin — so the AI's job is closer to populating a structured template than composing open-ended prose. That narrows what needs validating and makes ground truth easier to define for an FDA submission.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Chest X-ray and CT findings are more varied, and generating the full narrative — not just tagging a template field — is what STAT News described as work that is <a href="https://www.statnews.com/2026/06/25/radiology-generative-ai-cognita-aidoc-fda-breakthrough-designation/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"challenging traditional validation and regulatory frameworks."</a> That's a reasonable read on why chest X-ray report drafting is still moving through the breakthrough queue, and why CT — with its higher slice counts, broader differential, and more open-ended reporting language — hasn't reached even that stage yet for full report generation.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for CT reporting adoption timelines
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Three things follow for anyone tracking when AI-drafted CT reports become a mainstream, FDA-cleared category rather than a pilot:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The pathway is proven, not theoretical',
                    desc: "DeepHealth's clearance shows the FDA will grant a full 510(k) to a tool that both detects findings and drafts the report, with the radiologist retaining sign-off on the final read. That's the regulatory template CT report-generation vendors are working toward — it now has a live precedent.",
                  },
                  {
                    title: 'Structure first, then free text',
                    desc: 'The modality that cleared first is the one with the most standardized reporting language. Expect CT clearances for report generation to arrive first in the narrower, more structured indications (e.g., a single organ or a bounded finding set) before anything approaching a full comprehensive CT report.',
                  },
                  {
                    title: 'Detection clearances are not report-generation clearances',
                    desc: "A vendor's existing CT clearance for detection or triage doesn't carry over to reporting. Buyers evaluating CT AI should ask specifically what a product is cleared to do — flag a finding, or draft the report — since those are different FDA submissions with different evidence bars.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits in this picture
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's approach to CT — a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model architecture</Link> generating a comprehensive draft report across a whole scan, rather than a single detection algorithm bolted onto a template — sits in exactly the harder, less-structured category this landscape describes. It's also why the workflow is built the way regulators and this DeepHealth clearance both point to: the AI drafts, xAID's in-house radiologist reviews every preliminary, and the report goes out ready-to-sign, with the client's reading radiologist keeping the final signature.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did DeepHealth get FDA clearance for?',
                    a: 'On July 30, 2026, DeepHealth (a RadNet subsidiary) received FDA 510(k) clearance for DeepHealth Breast Ultrasound, an AI tool that localizes and characterizes breast lesions on ultrasound and generates a findings report, while the radiologist retains control of the final assessment. In FDA submission testing, the tool localized lesions with greater than 98% accuracy, improved breast cancer detection sensitivity by 8%, and cut radiologist interpretation time by 37% in a multi-reader study with 16 board-certified radiologists.',
                  },
                  {
                    q: 'Is this the same as the chest X-ray AI report tools from Aidoc and Cognita?',
                    a: "No. Aidoc's First Read and Cognita's CXR tool, which draft chest X-ray reports, hold FDA Breakthrough Device Designation — a program that speeds up FDA review but is not a clearance to market. DeepHealth's breast ultrasound tool has actually cleared the FDA under a 510(k), which is a higher regulatory bar than a breakthrough designation.",
                  },
                  {
                    q: 'Has any AI tool for CT been cleared by the FDA to generate full reports?',
                    a: "Not yet, as of August 2026. FDA-cleared CT AI tools to date are detection and triage tools — for example, Aidoc's abdominal CT tool cleared in January 2026 flags 14 critical findings — or image-quality tools like SubtleHD(CT). None of the current FDA-cleared CT algorithms generate a structured narrative report the way DeepHealth's breast ultrasound tool or the chest X-ray breakthrough-designation tools do.",
                  },
                  {
                    q: 'Why did report-generating AI reach full clearance in breast ultrasound before chest X-ray or CT?',
                    a: 'Breast ultrasound reporting follows a well-defined structure (BI-RADS lesion descriptors: shape, orientation, margin), which narrows what the AI has to generate and makes it easier to validate against ground truth. Chest X-ray and CT findings are more varied and the report text is more open-ended, which is part of why those efforts are still moving through FDA\'s breakthrough pathway rather than a full clearance.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/deephealth-gets-fda-nod-for-ai-tool-that-reads-ultrasounds-creates-reports/826958/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>; DeepHealth/RadNet <a href="https://www.globenewswire.com/news-release/2026/07/30/3336456/0/en/DeepHealth-Receives-FDA-Clearance-for-AI-Powered-Breast-Ultrasound.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">press release</a>; additional reporting from <a href="https://www.itnonline.com/content/ai-powered-breast-ultrasound-receives-fda-clearance" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ITN</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15831375/deephealth-lands-fda-nod-for-breast-ultrasound-ai-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; chest X-ray breakthrough designations reported by <a href="https://www.statnews.com/2026/06/25/radiology-generative-ai-cognita-aidoc-fda-breakthrough-designation/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">STAT News</a>; abdominal CT clearance reported by <a href="https://www.statnews.com/2026/01/21/fda-clears-aidoc-tool-detect-multiple-conditions-from-ct-scan/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">STAT News</a>; Breakthrough Devices Program description from the <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A comprehensive CT report draft, radiologist-reviewed, ready to sign."
          sub="See how xAID's foundation-model approach to CT reporting works — try it on 5 free studies."
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
              <Link to="/blog/fda-approved-ai-radiology-funding-bill/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Congress Wants to Pay for FDA-Cleared Imaging AI</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiRadiologyReportFdaClearances;
