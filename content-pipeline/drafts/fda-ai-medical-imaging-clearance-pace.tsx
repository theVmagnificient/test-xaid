import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaAiMedicalImagingClearancePace = () => {
  const post = {
    title: 'FDA AI Medical Imaging Clearances: The 2026 Pace',
    dateIso: '2026-11-08',
    date: 'November 8, 2026',
    category: 'Regulatory & Policy',
    readingTime: 7,
    description: 'Two FDA AI imaging clearances landed in six weeks, an IVUS platform and a CTA tool. What the pace of FDA AI medical imaging clearance means for buyers.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{post.title} | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/fda-ai-medical-imaging-clearance-pace/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | xAID`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | xAID`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-ai-medical-imaging-clearance-pace" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-ai-medical-imaging-clearance-pace",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fda ai medical imaging clearance, fda ai device list, fda 510k ai imaging, ai clearance trends radiology, radiology ai regulation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA clear for intravascular ultrasound in November 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On November 4, 2026, the FDA granted 510(k) clearance to the Evident Vascular Guidance System and Evident peripheral imaging catheters, made by San Jose-based Evident Vascular. The system is intended for intravascular ultrasound (IVUS) examination during peripheral vascular interventions, pairing high-fidelity imaging with NVIDIA-accelerated real-time processing, flush-less plug-and-play catheters, and hands-free voice control."
              }
            },
            {
              "@type": "Question",
              "name": "What does Deep Reasoning AI's NeuroDR software do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NeuroDR, cleared by the FDA in October 2026, is CT angiography software that automatically visualizes the arteries of the head and neck once a scan is complete. It removes bone, soft tissue, and veins from the dataset, then sends 3D maximum intensity projections, volume renderings, and curved planar reformats of the carotid and vertebral arteries to PACS as DICOM images."
              }
            },
            {
              "@type": "Question",
              "name": "How many AI-enabled medical devices has the FDA authorized overall?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA states it has authorized more than 1,600 AI-enabled medical devices for marketing in the US as of September 2026. Independent analysis of the FDA's public list shows 335 new authorizations in 2025 alone, up from just 6 in 2015, pushing the cumulative count to 1,433 devices by the end of that year."
              }
            },
            {
              "@type": "Question",
              "name": "Why does radiology dominate FDA AI device clearances?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Imaging is data-rich, standardized, and well-suited to pattern recognition, and most imaging AI clearances go through the lower-friction 510(k) pathway by showing substantial equivalence to an existing device. One industry tracking analysis found radiology accounted for about 77% of the roughly 1,356 AI devices the FDA had authorized through September 2025."
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
                Regulatory &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              FDA AI medical imaging clearance:<br />
              <span className="text-white/60">what the 2026 pace actually shows</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              In a six-week stretch this fall, the FDA cleared an AI-guided catheter platform for vascular interventions and a CT angiography tool that auto-renders head-and-neck arteries. Neither is a CT reporting system. Together with the FDA's own device count, they're a useful snapshot of how fast — and how narrowly — imaging AI clearances are piling up.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,600+', label: 'FDA-authorized AI devices', sub: 'as of September 2026' },
            { stat: '76-77%', label: 'Share that are radiology', sub: 'per independent tracking' },
            { stat: '335', label: 'New authorizations in 2025', sub: 'up from 6 in 2015' },
            { stat: '2', label: 'New imaging clearances', sub: 'in six weeks, Oct–Nov 2026' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two clearances, two corners of imaging AI
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On November 4, 2026, the FDA granted <a href="https://radiologybusiness.com/topics/medical-imaging/interventional-radiology/fda-clears-ai-powered-intravascular-ultrasound-imaging-platform" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">510(k) clearance</a> to the Evident Vascular Guidance System and its peripheral imaging catheters, built by San Jose-based <a href="https://vascularnews.com/evident-vascular-receives-us-fda-clearance-for-high-fidelity-ai-powered-ivus-imaging-platform/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Evident Vascular</a>. It's an intravascular ultrasound (IVUS) platform used during peripheral vascular interventions — the catheter goes inside the vessel during a procedure, pairing custom imaging electronics with NVIDIA-accelerated real-time processing, flush-less plug-and-play catheters, and hands-free voice control. Eric A. Secemsky, MD, Director of Vascular Intervention at Beth Israel Deaconess Medical Center, said in the company's release that "the vessel-edge clarity and consistency across the field of view are remarkable," adding that the imaging helps physicians measure vessels, plan therapy, and assess procedural results.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A few weeks earlier, Sarasota-based Deep Reasoning AI received 510(k) clearance for <a href="https://www.auntminnie.com/clinical-news/ct/news/16050236/fda-clears-deep-reasoning-ais-neurovascular-cta-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">NeuroDR</a>, software that runs automatically once a head-and-neck CT angiography (CTA) scan finishes. It strips out bone, soft tissue, and veins, then generates 3D maximum intensity projections, volume renderings, and curved planar reformats of the carotid and vertebral arteries and sends them to PACS as DICOM images. Both are real, useful, narrowly scoped tools — one for a cath lab procedure, one for a single vascular-visualization step. Neither drafts a diagnostic report.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The bigger number behind both clearances
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Zoom out and these two clearances are drops in a fast-filling bucket. The FDA's own <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/artificial-intelligence-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AI-enabled medical device page</a> states the agency has authorized more than 1,600 such devices for marketing in the US as of September 2026. An <a href="https://aiadoption.org/data/fda-ai-medical-devices-per-year/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">independent analysis</a> of that public list found 335 new authorizations in 2025 alone — a 43% jump over 2024's 235 — up from just 6 authorizations in 2015, pushing the cumulative count to 1,433 devices by the end of 2025. Through June 29, 2026, the same tracker counted 181 more.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Imaging drives most of that growth, and radiology specifically is the biggest single category. One <a href="https://theimagingwire.com/2025/12/10/ai-enabled-medical-devices-granted-fda-marketing-authorization/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">tracking analysis</a> found that of the roughly 1,356 AI devices the FDA had authorized through September 2025, 1,039 — about 77% — were radiology devices. Almost all of these clearances, across every modality, go through the lower-friction 510(k) pathway rather than the more rigorous De Novo or premarket-approval routes, by showing the new device is substantially equivalent to one already on the market.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                What this bundle of clearances is — and what it isn't
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Clearance</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Modality / setting</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">What it outputs</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Evident Vascular Guidance System</td>
                      <td className="py-3 pr-4 text-[#444] font-light">IVUS catheter, cath lab</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Live vessel images during the procedure</td>
                      <td className="py-3 text-[#444] font-light">Single interventional step</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Deep Reasoning AI NeuroDR</td>
                      <td className="py-3 pr-4 text-[#444] font-light">CTA, head &amp; neck</td>
                      <td className="py-3 pr-4 text-[#444] font-light">3D renderings sent to PACS</td>
                      <td className="py-3 text-[#444] font-light">Single visualization step</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Comprehensive CT reporting workflows</td>
                      <td className="py-3 pr-4 text-[#444] font-light">CT, reading room</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Structured report draft, every finding</td>
                      <td className="py-3 text-[#444] font-light">Full study, end-to-end</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the pattern worth noticing: the vast majority of the FDA's 1,600-plus AI clearances, including these two, cover a single task on a single piece of anatomy — detect this, render that, enhance this image. Very few cover a complete diagnostic report across an entire study. A high clearance count is a real signal of regulatory momentum in imaging AI broadly, but it isn't a proxy for how much of the actual reporting workload any single tool addresses.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this matters for radiology groups and imaging centers
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For buyers evaluating AI, the practical takeaway is to ask what a clearance actually covers before assuming it solves a reporting bottleneck. A 510(k) for a visualization or acquisition tool says nothing about whether a system can produce a comprehensive, ready-to-sign CT report draft across the full range of findings a radiologist has to address — that's a different category of product, built around covering an entire study rather than one task within it, with a radiologist reviewing the draft before the reading radiologist signs. As the FDA's AI device count keeps climbing, distinguishing "point tool" clearances from full-study reporting tools will matter more, not less, to anyone building a vendor shortlist.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the FDA clear for intravascular ultrasound in November 2026?',
                    a: "On November 4, 2026, the FDA granted 510(k) clearance to the Evident Vascular Guidance System and Evident peripheral imaging catheters, made by San Jose-based Evident Vascular. The system is intended for intravascular ultrasound (IVUS) examination during peripheral vascular interventions, pairing high-fidelity imaging with NVIDIA-accelerated real-time processing, flush-less plug-and-play catheters, and hands-free voice control.",
                  },
                  {
                    q: "What does Deep Reasoning AI's NeuroDR software do?",
                    a: 'NeuroDR, cleared by the FDA in October 2026, is CT angiography software that automatically visualizes the arteries of the head and neck once a scan is complete. It removes bone, soft tissue, and veins from the dataset, then sends 3D maximum intensity projections, volume renderings, and curved planar reformats of the carotid and vertebral arteries to PACS as DICOM images.',
                  },
                  {
                    q: 'How many AI-enabled medical devices has the FDA authorized overall?',
                    a: "The FDA states it has authorized more than 1,600 AI-enabled medical devices for marketing in the US as of September 2026. Independent analysis of the FDA's public list shows 335 new authorizations in 2025 alone, up from just 6 in 2015, pushing the cumulative count to 1,433 devices by the end of that year.",
                  },
                  {
                    q: 'Why does radiology dominate FDA AI device clearances?',
                    a: 'Imaging is data-rich, standardized, and well-suited to pattern recognition, and most imaging AI clearances go through the lower-friction 510(k) pathway by showing substantial equivalence to an existing device. One industry tracking analysis found radiology accounted for about 77% of the roughly 1,356 AI devices the FDA had authorized through September 2025.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/medical-imaging/interventional-radiology/fda-clears-ai-powered-intravascular-ultrasound-imaging-platform" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://vascularnews.com/evident-vascular-receives-us-fda-clearance-for-high-fidelity-ai-powered-ivus-imaging-platform/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Vascular News</a>, <a href="https://www.auntminnie.com/clinical-news/ct/news/16050236/fda-clears-deep-reasoning-ais-neurovascular-cta-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, the <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/artificial-intelligence-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA's AI-Enabled Medical Devices list</a>, independent tracking by <a href="https://aiadoption.org/data/fda-ai-medical-devices-per-year/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">aiadoption.org</a>, and <a href="https://theimagingwire.com/2025/12/10/ai-enabled-medical-devices-granted-fda-marketing-authorization/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Point tools clear fast. Full reports take a different kind of AI."
          sub="xAID drafts a comprehensive, ready-to-sign CT report across the whole study — reviewed in-house before it reaches your reading radiologist. Try it on 5 free studies."
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
              <Link to="/blog/fda-ai-regulation-radiology-societies/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">What RSNA Told the FDA About Regulating Generative AI</div>
              </Link>
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">ECRI's AI Error Tracker and the Vendor Evaluation Checklist</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaAiMedicalImagingClearancePace;
