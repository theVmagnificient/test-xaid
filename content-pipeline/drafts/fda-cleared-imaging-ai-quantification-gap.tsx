import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaClearedImagingAiQuantificationGap = () => {
  const post = {
    title: 'FDA-Cleared Imaging AI in 2026: Mostly Measurement, Not Reports',
    dateIso: '2026-08-20',
    date: 'August 20, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "A new FDA clearance for automated brain-PET quantification is the latest entry in a long pattern: most cleared imaging AI measures and flags, it doesn't draft the report. Here's what that split looks like across modalities — and where CT still stands.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA-Cleared Imaging AI: Mostly Measurement, Not Reports | xAID</title>
        <meta name="description" content="A new FDA clearance for automated brain-PET quantification fits a pattern: most FDA-cleared imaging AI measures or flags findings, not drafts full reports. What that means for CT." />
        <link rel="canonical" href="https://xaid.ai/blog/fda-cleared-imaging-ai-quantification-gap" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA-Cleared Imaging AI: Mostly Measurement, Not Reports | xAID" />
        <meta property="og:description" content="A new FDA clearance for automated brain-PET quantification fits a pattern: most FDA-cleared imaging AI measures or flags findings, not drafts full reports. What that means for CT." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA-Cleared Imaging AI: Mostly Measurement, Not Reports | xAID" />
        <meta name="twitter:description" content="A new FDA clearance for automated brain-PET quantification fits a pattern: most FDA-cleared imaging AI measures or flags findings, not drafts full reports. What that means for CT." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-cleared-imaging-ai-quantification-gap" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-cleared-imaging-ai-quantification-gap",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fda cleared imaging ai, fda cleared radiology ai, ai imaging algorithms fda, radiology ai fda clearance, ai ct reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA just clear for brain-PET imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On August 18, 2026, the FDA granted 510(k) clearance (K261916) to Cortechs.ai's NeuroQuant PET, a fully automated quantification tool for amyloid PET scans. It standardizes uptake measurements (SUVRs) and Centiloid scores across three amyloid tracers — flutemetamol, florbetaben, and florbetapir — and outputs a structured, PACS-ready result for PET-CT, PET-MR, and PET-only workflows."
              }
            },
            {
              "@type": "Question",
              "name": "Is NeuroQuant PET a report-writing AI, like the tools used for CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. It's a quantification tool: it turns amyloid PET images into standardized numeric measurements a physician then interprets. It doesn't generate the narrative diagnostic report itself. That distinction — measuring versus drafting — describes most FDA-cleared imaging AI to date, not just this clearance."
              }
            },
            {
              "@type": "Question",
              "name": "How much of FDA-cleared AI is radiology, and what does most of it actually do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As of December 31, 2025, the FDA had authorized 1,451 AI-enabled medical devices, and 1,104 of them — about 76% — were radiology devices. The large majority fall into detection/triage (flagging a finding for review) or quantification/measurement (turning an image into a structured number), rather than full report drafting."
              }
            },
            {
              "@type": "Question",
              "name": "Has any FDA-cleared AI tool fully automated CT report drafting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not at scale. The CT-specific tools cleared to date are overwhelmingly detection and triage algorithms that flag a finding for a radiologist to review, or measurement tools that quantify something in the image — not systems that draft the full narrative report. Report generation remains an early, largely unsettled category across imaging AI, with the clearances that exist concentrated outside CT."
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
              Another FDA clearance for imaging AI.<br />
              <span className="text-white/60">Still not for writing the report.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The FDA's newest imaging-AI clearance automates brain-PET measurement — a real, useful advance. It also fits a pattern that has held for years: most cleared imaging AI quantifies or flags. Almost none of it drafts the report.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,104', label: 'FDA-cleared radiology AI devices', sub: '76% of all AI devices, as of Dec 2025' },
            { stat: 'Aug 2026', label: 'Newest clearance', sub: 'Automated amyloid PET quantification' },
            { stat: '3', label: 'PET tracers standardized', sub: 'Flutemetamol, florbetaben, florbetapir' },
            { stat: '0', label: 'Full CT report-drafting tools', sub: 'Cleared at scale, as of Aug 2026' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What just got cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 18, 2026, the FDA granted <a href="https://www.itnonline.com/content/fda-clears-cortechsais-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">510(k) clearance (K261916)</a> to imaging-analytics vendor Cortechs.ai for NeuroQuant PET, an automated quantification platform for amyloid PET scans. The software generates standardized uptake value ratios (SUVRs) and Centiloid scores for three amyloid tracers — flutemetamol, florbetaben, and florbetapir — so results are comparable across tracers, scanners, and follow-up visits, and delivers a structured, PACS-ready output into PET-CT, PET-MR, or PET-only workflows, as <a href="https://www.auntminnie.com/clinical-news/molecular-imaging/news/15832906/cortechsai-cortechsai-wins-fda-clearance-for-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie reported</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The timing isn't incidental. Amyloid PET is now a gatekeeping scan for anti-amyloid Alzheimer's drugs such as lecanemab and donanemab — a positive scan is generally required before starting treatment, and the same scan is often repeated to monitor for amyloid-related imaging abnormalities during therapy. Automating the measurement side of that workflow addresses a real, growing volume problem in neuroradiology. It is a narrower claim than it might sound: the tool standardizes a number, it does not write the diagnostic narrative around it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A pattern, not an anomaly
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Zoom out and this clearance looks less like news about one vendor and more like a data point confirming where the entire FDA-cleared imaging-AI category sits. As of December 31, 2025, the agency had authorized 1,451 AI-enabled medical devices since it began tracking them in 1995, and radiology accounted for 1,104 of them — roughly <strong>76%</strong> — according to FDA data reported by <a href="https://theimagingwire.com/2026/03/11/numbers-from-the-fda-show-radiology-is-maintaining-its-lead/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Imaging Wire</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What that large body of clearances mostly does is narrower than the headline count suggests. Trade coverage of the FDA's ongoing algorithm list has repeatedly described the bulk of clearances as detection and triage tools — flagging a stroke, a pulmonary embolism, or intracranial hemorrhage for faster review — plus automation of "time-consuming functions such as quantification, contouring, and auto-complete of text in reports," per <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-gets-68-new-fda-cleared-algorithms" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. The same coverage describes full report generation, prior-study summarization, and reading-workflow decision support as a category that is still "wide open" — an area of active development, not one with a settled track record of clearances.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Where the current wave of clearances sits
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Clearance category</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">What it automates</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">What the radiologist still does</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        cat: 'Detection / triage (CADe, CADt)',
                        does: 'Flags a suspected finding (e.g., a large-vessel occlusion or nodule) and reprioritizes the worklist',
                        role: 'Reviews the flag, confirms or dismisses it, writes the full report',
                      },
                      {
                        cat: 'Quantification / measurement',
                        does: 'Turns an image into a standardized number — SUVR, Centiloid, calcium score, nodule volume',
                        role: 'Interprets the number in clinical context, writes the full report',
                      },
                      {
                        cat: 'Image quality / reconstruction',
                        does: 'Denoises, reconstructs, or accelerates the underlying scan',
                        role: 'Reads the improved image, writes the full report',
                      },
                      {
                        cat: 'Full narrative report drafting',
                        does: 'Assembles findings and impression into a draft report',
                        role: 'Reviews, edits, and signs — clearances remain rare and largely outside CT',
                      },
                    ].map((row) => (
                      <tr key={row.cat} className="border-b border-gray-100">
                        <td className="text-[#0D0D0D] text-[14px] font-medium py-3 pr-4 align-top">{row.cat}</td>
                        <td className="text-[#666] text-[14px] leading-[1.6] font-light py-3 pr-4 align-top">{row.does}</td>
                        <td className="text-[#666] text-[14px] leading-[1.6] font-light py-3 align-top">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                NeuroQuant PET sits squarely in the second row. So do most of the CT-specific clearances on the FDA's list — the tools that exist for CT are almost entirely detection, triage, or measurement algorithms, not systems that draft the narrative report. One recent exception, an AI tool cleared in July 2026 that both localizes findings and generates a draft report, applies to breast ultrasound — not CT — per <a href="https://www.medtechdive.com/news/deephealth-gets-fda-nod-for-ai-tool-that-reads-ultrasounds-creates-reports/826958/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>. The pattern holds: report drafting is the least-cleared category in imaging AI, and CT in particular still has no full-report clearance at scale.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the gap persists
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this is a knock on quantification tools — standardized amyloid measurement is a genuine clinical need, and CorTechs.ai's own earlier product, NeuroQuant 5.0, was cleared in 2024 specifically to quantify amyloid-related imaging abnormalities (ARIA) for patients on anti-amyloid drugs, a similarly narrow but useful problem. The point is structural: a detection or measurement algorithm has one job and a bounded output, which is easier to validate and clear than a system that has to synthesize findings, prior comparisons, and clinical context into a coherent report — especially for CT, where a single study can carry dozens of findings across multiple organ systems.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is also why CT reporting — as opposed to CT detection — remains the least automated part of the imaging pipeline, even as detection and quantification tools multiply around it. Radiology groups evaluating AI vendors are increasingly running into this distinction directly: a tool can carry an FDA clearance and still only solve one narrow slice of the workflow, not the report itself.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the gap xAID is built around: a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model approach</Link> that drafts the full structured CT report — findings and impression — rather than a single measurement or flag. Every draft gets an in-house radiologist review before it reaches the client ready-to-sign, so the report a reading radiologist signs is complete, not a number they still have to write the narrative around. As the FDA clearance list keeps growing on the detection and quantification side, the report-drafting gap for CT is exactly where that difference matters.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the FDA just clear for brain-PET imaging?',
                    a: "On August 18, 2026, the FDA granted 510(k) clearance (K261916) to Cortechs.ai's NeuroQuant PET, a fully automated quantification tool for amyloid PET scans. It standardizes uptake measurements (SUVRs) and Centiloid scores across three amyloid tracers — flutemetamol, florbetaben, and florbetapir — and outputs a structured, PACS-ready result for PET-CT, PET-MR, and PET-only workflows.",
                  },
                  {
                    q: 'Is NeuroQuant PET a report-writing AI, like the tools used for CT?',
                    a: "No. It's a quantification tool: it turns amyloid PET images into standardized numeric measurements a physician then interprets. It doesn't generate the narrative diagnostic report itself. That distinction — measuring versus drafting — describes most FDA-cleared imaging AI to date, not just this clearance.",
                  },
                  {
                    q: 'How much of FDA-cleared AI is radiology, and what does most of it actually do?',
                    a: 'As of December 31, 2025, the FDA had authorized 1,451 AI-enabled medical devices, and 1,104 of them — about 76% — were radiology devices. The large majority fall into detection/triage (flagging a finding for review) or quantification/measurement (turning an image into a structured number), rather than full report drafting.',
                  },
                  {
                    q: 'Has any FDA-cleared AI tool fully automated CT report drafting?',
                    a: 'Not at scale. The CT-specific tools cleared to date are overwhelmingly detection and triage algorithms that flag a finding for a radiologist to review, or measurement tools that quantify something in the image — not systems that draft the full narrative report. Report generation remains an early, largely unsettled category across imaging AI, with the clearances that exist concentrated outside CT.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/molecular-imaging/news/15832906/cortechsai-cortechsai-wins-fda-clearance-for-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> and <a href="https://www.itnonline.com/content/fda-clears-cortechsais-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Imaging Technology News</a> on the NeuroQuant PET clearance (FDA 510(k) K261916, Aug. 18, 2026); FDA AI-device counts via <a href="https://theimagingwire.com/2026/03/11/numbers-from-the-fda-show-radiology-is-maintaining-its-lead/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>; clearance-category context via <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-gets-68-new-fda-cleared-algorithms" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; breast-ultrasound report-drafting clearance via <a href="https://www.medtechdive.com/news/deephealth-gets-fda-nod-for-ai-tool-that-reads-ultrasounds-creates-reports/826958/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="The CT report is still the automation gap."
          sub="See how xAID drafts the full structured CT report — ready-to-sign — instead of a single flag or measurement. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Generative AI Report Drafting: Draft-Then-Sign</div>
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

export default FdaClearedImagingAiQuantificationGap;
