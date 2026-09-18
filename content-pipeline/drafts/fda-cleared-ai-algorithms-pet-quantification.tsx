import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaClearedAiAlgorithmsPetQuantification = () => {
  const post = {
    title: 'FDA Clears AI Platform for PET Quantification',
    dateIso: '2026-09-17',
    date: 'September 17, 2026',
    category: 'Market & Policy',
    readingTime: 6,
    description: "FDA cleared an AI platform to auto-generate Centiloid and CenTauR PET scores. What it signals for FDA-cleared AI algorithms and AI-generated reports.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA Clears AI Platform for PET Quantification | xAID</title>
        <meta name="description" content="FDA cleared an AI platform to auto-generate Centiloid and CenTauR PET scores. What it signals for FDA-cleared AI algorithms and AI-generated reports." />
        <link rel="canonical" href="https://xaid.ai/blog/fda-cleared-ai-algorithms-pet-quantification" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA Clears AI Platform for PET Quantification | xAID" />
        <meta property="og:description" content="FDA cleared an AI platform to auto-generate Centiloid and CenTauR PET scores. What it signals for FDA-cleared AI algorithms and AI-generated reports." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA Clears AI Platform for PET Quantification | xAID" />
        <meta name="twitter:description" content="FDA cleared an AI platform to auto-generate Centiloid and CenTauR PET scores. What it signals for FDA-cleared AI algorithms and AI-generated reports." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-cleared-ai-algorithms-pet-quantification" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-cleared-ai-algorithms-pet-quantification",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fda cleared ai algorithms, fda cleared imaging ai, ai pet quantification, centiloid centaur ai, ai generated radiology reports"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA clear MICSI-PET to do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On September 15, 2026, the FDA granted 510(k) clearance to MICSI-PET, from Microstructure Imaging, Inc. (MICSI). The platform uses structural MRI to guide PET denoising and super-resolution, then automatically generates Centiloid scores for amyloid PET, CenTauR scores for tau PET, plus regional SUVr measurements and z-scores versus normative controls. It supports amyloid, tau, and FDG PET tracers."
              }
            },
            {
              "@type": "Question",
              "name": "What are the Centiloid and CenTauR scales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Centiloid is a standardized 0-100+ scale for amyloid PET burden, and CenTauR is its tau-PET counterpart, both designed so a scan read on one scanner or tracer produces a comparable number to a scan read on another. FDA-cleared software that calculates these scores automatically is generating a standardized value intended to be cited directly in a diagnostic report."
              }
            },
            {
              "@type": "Question",
              "name": "Is MICSI-PET the only FDA-cleared PET quantification AI cleared in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Cortechs.ai's NeuroQuant PET was cleared under 510(k) K261916 on August 18, 2026 -- four weeks earlier -- to report SUVRs and Centiloid scores for three FDA-approved amyloid tracers with atlas-based regional quantification. Two independent clearances for automated PET quantification arrived within 28 days of each other."
              }
            },
            {
              "@type": "Question",
              "name": "Does this mean the FDA is close to clearing AI-generated report narratives?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not directly. Both clearances cover a bounded, standardized numeric output -- a defined scale, not open-ended report text -- which is a narrower regulatory question than clearing free-text narrative generation. But the pattern is a precedent worth tracking: the FDA is demonstrably willing to clear AI whose output is consumed as-is inside a diagnostic report, provided it is standardized and validated, which is the direction broader AI-generated report content is moving."
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
              FDA-cleared AI algorithms are starting to<br />
              <span className="text-white/60">do the diagnostic math, not just flag it</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new 510(k) clearance lets an AI platform auto-generate Centiloid and CenTauR scores from PET scans — the second such clearance in four weeks. Here's what the shift from detection to quantification signals for where FDA-cleared AI algorithms are headed next.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Sept 15, 2026', label: 'MICSI-PET FDA clearance', sub: '510(k), MR-guided PET' },
            { stat: '2', label: 'PET quantification clearances', sub: 'in a 4-week span, 2026' },
            { stat: '3', label: 'PET tracer types supported', sub: 'amyloid, tau, FDG' },
            { stat: '$2.275M', label: 'Anticipated NCI SBIR award', sub: 'Phase II validation' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA actually cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 15, 2026, the FDA granted 510(k) clearance to <strong>MICSI-PET</strong>, a neurological PET software platform from Microstructure Imaging, Inc. (MICSI), led by CEO Gregory Lemberskiy, PhD, according to a company release covered by <a href="https://www.biospace.com/press-releases/microstructure-imaging-receives-fda-clearance-for-micsi-pet-bringing-mr-guided-enhancement-and-automated-quantification-to-neurological-pet" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">BioSpace</a> and <a href="https://www.itnonline.com/content/mr-guided-pet-enhancement-software-gets-fda-clearance" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Imaging Technology News</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The platform uses structural MRI to guide PET denoising and super-resolution, producing sharper PET images while preserving the underlying quantitative signal. On top of the enhanced image, it automatically generates a <strong>Centiloid</strong> score for amyloid PET and a <strong>CenTauR</strong> score for tau PET, along with regional standardized uptake value ratios (SUVr) and z-scores measured against normative controls. It supports amyloid, tau, and FDG PET tracers, and MICSI says it was validated across PET and MRI systems from multiple vendors and scanner generations.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Neuroradiologist Dr. Lawrence N. Tanenbaum, MD, FACR, described the practical effect in the same coverage: <em>"The difference can be dramatic in borderline amyloid cases. When you're trying to determine whether there is true cortical sparing, MICSI-PET can make the pattern substantially easier to see."</em> MICSI also said it anticipates a $2.275 million Phase II SBIR award from the National Cancer Institute to fund multi-center validation with NYU Langone Health and Memorial Sloan Kettering Cancer Center.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The second quantification clearance in four weeks
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                MICSI-PET isn't the only entrant. Four weeks earlier, on August 18, 2026, the FDA cleared <strong>Cortechs.ai's NeuroQuant PET</strong> under 510(k) K261916, as reported by <a href="https://www.itnonline.com/content/fda-clears-cortechsais-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Imaging Technology News</a> and <a href="https://www.auntminnie.com/clinical-news/molecular-imaging/news/15832906/cortechsai-cortechsai-wins-fda-clearance-for-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. That software reports SUVRs and Centiloid scores for three FDA-approved amyloid tracers — flutemetamol, florbetaben, and florbetapir — with atlas-based regional quantification and structured reporting.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two unrelated companies, two separate 510(k) clearances, one shared proposition: an algorithm that outputs a standardized number destined for the report, not a flag destined for a worklist. Cortechs.ai CEO Kyle Frye framed the goal as "expanding access to standardized PET quantification that supports precision medicine in Alzheimer's disease and related dementias" — language that treats the AI's output as a biomarker value, on par with a lab result, rather than a triage signal.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "quantification" is a different regulatory category than "detection"
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most FDA-cleared imaging AI to date has been cleared as a computer-aided triage or detection tool: it flags a study, prioritizes a worklist, or measures a single lesion for a radiologist to confirm. Centiloid and CenTauR are a different kind of output. They're standardized, clinically interpretable scales — designed so a scan read on one scanner, with one tracer, produces a number comparable to a scan read on different hardware elsewhere. Clearing software to generate that number automatically is clearing an algorithm to produce a value that can be cited directly in the diagnostic record.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's worth tracking as a regulatory precedent, not overreading as a settled trend. Two clearances in one modality over four weeks don't prove the FDA is opening the door to open-ended, AI-generated report narratives across radiology. What they do show is that the agency is comfortable clearing algorithmic output that lands, largely as-is, inside a diagnostic report — as long as that output is standardized, bounded to a defined scale, and independently validated, rather than free-text prose.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Detection AI vs. quantification AI
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Attribute</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Traditional CADt / detection AI</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">MICSI-PET / NeuroQuant PET (2026)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Primary output', 'Flag, heatmap, or priority score', 'Standardized score (Centiloid, CenTauR, SUVr, z-score)'],
                      ['How it enters the report', 'Supporting reference for a radiologist decision', 'Value a radiologist can cite directly'],
                      ['Clinical analogy', 'An alert', 'A lab-like biomarker'],
                      ['Radiologist role', 'Reviews the flag, makes the call', 'Interprets the standardized number, still authors the narrative'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`py-3 ${i < 2 ? 'pr-4' : ''} text-[#444] text-[15px] leading-[1.6] font-light`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with AI CT reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Full structured CT report generation — <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">xAID's category</Link> — is a larger step than a bounded numeric scale, and no clearance yet covers AI-authored narrative report text at that scope. But the direction these two PET clearances point in is instructive: regulators are demonstrably willing to clear AI whose output is used directly inside a diagnostic report, once it is standardized and validated with clinician oversight documented. That's the same model xAID's structured CT report drafts follow today — an in-house radiologist reviews every preliminary before the client's reading radiologist signs the final, ready-to-sign report.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the FDA clear MICSI-PET to do?',
                    a: 'On September 15, 2026, the FDA granted 510(k) clearance to MICSI-PET, from Microstructure Imaging, Inc. (MICSI). The platform uses structural MRI to guide PET denoising and super-resolution, then automatically generates Centiloid scores for amyloid PET, CenTauR scores for tau PET, plus regional SUVr measurements and z-scores versus normative controls. It supports amyloid, tau, and FDG PET tracers.',
                  },
                  {
                    q: 'What are the Centiloid and CenTauR scales?',
                    a: "Centiloid is a standardized 0-100+ scale for amyloid PET burden, and CenTauR is its tau-PET counterpart, both designed so a scan read on one scanner or tracer produces a comparable number to a scan read on another. FDA-cleared software that calculates these scores automatically is generating a standardized value intended to be cited directly in a diagnostic report.",
                  },
                  {
                    q: 'Is MICSI-PET the only FDA-cleared PET quantification AI cleared in 2026?',
                    a: "No. Cortechs.ai's NeuroQuant PET was cleared under 510(k) K261916 on August 18, 2026 — four weeks earlier — to report SUVRs and Centiloid scores for three FDA-approved amyloid tracers with atlas-based regional quantification. Two independent clearances for automated PET quantification arrived within 28 days of each other.",
                  },
                  {
                    q: 'Does this mean the FDA is close to clearing AI-generated report narratives?',
                    a: 'Not directly. Both clearances cover a bounded, standardized numeric output — a defined scale, not open-ended report text — which is a narrower regulatory question than clearing free-text narrative generation. But the pattern is a precedent worth tracking: the FDA is demonstrably willing to clear AI whose output is consumed as-is inside a diagnostic report, provided it is standardized and validated, which is the direction broader AI-generated report content is moving.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: MICSI-PET FDA clearance as reported by <a href="https://www.biospace.com/press-releases/microstructure-imaging-receives-fda-clearance-for-micsi-pet-bringing-mr-guided-enhancement-and-automated-quantification-to-neurological-pet" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">BioSpace</a>, <a href="https://www.itnonline.com/content/mr-guided-pet-enhancement-software-gets-fda-clearance" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Imaging Technology News</a>, and <a href="https://radiologybusiness.com/topics/medical-imaging/nuclear-medicine/pet-ct/fda-clears-ai-platform-pet-imaging-enhancement-and-quantification" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; Cortechs.ai NeuroQuant PET clearance as reported by <a href="https://www.itnonline.com/content/fda-clears-cortechsais-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Imaging Technology News</a> and <a href="https://www.auntminnie.com/clinical-news/molecular-imaging/news/15832906/cortechsai-cortechsai-wins-fda-clearance-for-neuroquant-pet" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports, radiologist-reviewed, ready to sign"
          sub="See how xAID's foundation-model AI drafts full CT reports — reviewed in-house before your radiologist signs. Try it on 5 free studies."
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
              <Link to="/blog/fda-approved-ai-radiology-funding-bill/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Congress Wants to Pay for FDA-Cleared Imaging AI</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
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

export default FdaClearedAiAlgorithmsPetQuantification;
