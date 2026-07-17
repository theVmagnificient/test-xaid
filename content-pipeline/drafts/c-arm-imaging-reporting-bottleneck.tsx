import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const CArmImagingReportingBottleneck = () => {
  const post = {
    title: "Provect AI's C-Arm Imaging Clearance Is Another Acquisition-Side Fix — Not a Reporting One",
    dateIso: '2026-07-17',
    date: 'July 17, 2026',
    category: 'Workflow & Throughput',
    readingTime: 7,
    description: "Provect AI's FDA-cleared C-arm-to-3D software is the second such clearance in six weeks. It skips the CT scanner — not the interpretation step after every scan.",
  };

  const canonical = 'https://xaid.ai/blog/c-arm-imaging-reporting-bottleneck';

  return (
    <>
      <Helmet defer={false}>
        <title>C-Arm Imaging's 3D Upgrade, Not a Reporting Fix | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="C-Arm Imaging's 3D Upgrade, Not a Reporting Fix | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="C-Arm Imaging's 3D Upgrade, Not a Reporting Fix | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": canonical,
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "c-arm imaging, 3D imaging FDA clearance, Provect AI, intraoperative 3D imaging, imaging capacity, radiology reporting bottleneck, AI CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Provect AI receive FDA clearance for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In July 2026, Palo Alto-based Provect AI received FDA 510(k) clearance for 3D-Anywhere, software that reconstructs 3D intraoperative images from standard C-arm x-ray systems for spine and orthopedic image-guided surgery. It requires no CT scanner, no new imaging hardware, and no change to existing workflow, and it outputs standard DICOM images compatible with hospital PACS and third-party navigation systems."
              }
            },
            {
              "@type": "Question",
              "name": "Is Provect AI the only company converting C-arm x-rays into 3D imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. About six weeks earlier, Pulmera received FDA 510(k) clearance (K252735) for its CBeam platform, which uses a position sensor on existing C-arms to reconstruct a rotational x-ray scan into a 3D dataset. Both clearances follow the same strategy: extract volumetric, CT-like imaging from cheaper, faster 2D acquisition hardware instead of adding CT scanner throughput."
              }
            },
            {
              "@type": "Question",
              "name": "Does faster or cheaper 3D image acquisition reduce the radiology reporting workload?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No — if anything it adds to it. Acquisition-side innovations like C-arm-to-3D reconstruction and accelerated MRI sequencing generate more volumetric data, but every added volume still has to be interpreted — by a surgeon in the OR or a radiologist in the reading room — before it changes patient care. A 2025 Journal of the American College of Radiology analysis projects total US imaging utilization 17-27% higher by 2055 than 2023 under current trends, so the demand for interpretation is rising as acquisition gets faster and cheaper, not falling."
              }
            },
            {
              "@type": "Question",
              "name": "Where does xAID fit into this trend?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID addresses the reporting side of the same capacity problem, for diagnostic CT rather than intraoperative navigation. A foundation-model approach drafts a structured, comprehensive CT report that xAID's in-house radiologist reviews, delivered ready-to-sign for the client's own reading radiologist. As acquisition-side tools generate more volumetric imaging across the industry, that reporting layer is the capacity radiologists are actually short on."
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
                Workflow &amp; Throughput
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Provect AI's C-arm imaging clearance is another acquisition-side fix.<br />
              <span className="text-white/60">It still doesn't touch the reporting bottleneck.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The FDA just cleared software that turns a standard C-arm x-ray into a 3D intraoperative image — no CT scanner required. It's the second such clearance in six weeks, and part of a wider pattern: vendors are getting very good at generating volumetric imaging data faster and cheaper. None of them add a minute of capacity to interpret it.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '510(k)', label: 'FDA clearance type', sub: "for Provect AI's 3D-Anywhere" },
                { stat: '~6 weeks', label: 'Since a near-identical clearance', sub: 'Pulmera CBeam, June 5, 2026' },
                { stat: '$7M', label: 'Raised for commercial rollout', sub: 'Arteria Capital-led round' },
                { stat: '17–27%', label: 'Projected imaging demand rise', sub: 'by 2055 vs. 2023 (JACR)' },
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
                What the clearance actually does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Palo Alto-based <a href="https://www.auntminnie.com/clinical-news/digital-x-ray/news/15830239/provect-ai-wins-fda-clearance-for-3d-imaging-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Provect AI has received FDA 510(k) clearance</a> for 3D-Anywhere, a software platform that generates 3D intraoperative images from a standard C-arm x-ray system. According to <a href="https://www.beckersspine.com/spine/fda-clears-ct-free-3d-imaging-software-for-spine-orthopedic-surgery/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Becker's Spine Review</a>, it reconstructs volumetric, CT-like 3D data from 2D C-arm x-rays without a CT scanner, additional hardware, or a change to the existing surgical workflow, and it outputs standard DICOM images compatible with hospital PACS and third-party navigation systems. It's intended for spine and orthopedic image-guided surgical procedures.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The timing tracks a real structural shift: more spine and orthopedic procedures are moving to ambulatory surgery centers, which have traditionally lacked access to intraoperative CT. Becker's notes that <a href="https://www.beckersspine.com/spine/fda-clears-ct-free-3d-imaging-software-for-spine-orthopedic-surgery/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CMS added key spine CPT codes to the ASC-approved list in 2026</a>, accelerating that migration — and creating exactly the gap a CT-free, C-arm-based 3D workaround is built to fill. Provect AI also raised <strong>$7 million</strong>, led by Arteria Capital and ValueStream Ventures with participation from Newfund Capital and Sand Hill Angels, earmarked for commercial expansion, customer deployments, and product development.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                It's not the only one doing this
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                About six weeks earlier, on June 5, 2026, Pulmera received its own FDA 510(k) clearance (K252735) for CBeam, a platform that attaches a position-sensor mechanism to an existing surgical C-arm and, <a href="https://24x7mag.com/standards/fda-updates/clearances/fda-clears-3d-imaging-platform-existing-surgical-c-arms/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">during a rotational scan, reconstructs the captured x-ray images into a 3D dataset</a>. Two clearances, two companies, the same underlying move: substitute software for a second imaging modality.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It's also not a new category of move — just a new instance of it. In an <Link to="/blog/how-ai-cuts-mri-wait-times/" className="text-xaid-blue-strong underline underline-offset-2">earlier example on the MRI side</Link>, a 37-hospital system used FDA-cleared, noise-reduction acquisition AI to cut scan time from roughly 45 to 30 minutes and reduce wait times by more than 60%, without buying a single additional scanner. Different modality, different hardware, identical logic: get more volumetric imaging out of equipment you already own or can buy cheaply, rather than adding capital-intensive scanner throughput.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The bottleneck none of this moves
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Here's the part the press releases skip. A 3D reconstruction is not a finished clinical decision — it is data that still has to be read. For intraoperative C-arm reconstructions like 3D-Anywhere and CBeam, that reading happens in real time: the surgeon interprets the volume to verify hardware placement and anatomy, on top of everything else the operation already demands. It's a genuinely different task from a radiologist's diagnostic report, and it's fair to note this use case sits in the OR and interventional suite — adjacent to, not inside, the outpatient and hospital CT reporting queue radiologists spend most of a shift on. But it is still an interpretation task layered onto an already busy team, and the resulting DICOM volume lands in the same PACS infrastructure that keeps accumulating imaging data enterprise-wide.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Zoom out and the pattern holds across settings. Whether the extra volume shows up on a surgeon's OR monitor or a radiologist's diagnostic worklist, none of these acquisition-side clearances creates a single additional minute of interpretation capacity. And that capacity is not sitting idle waiting to absorb more volume: a 2025 <em>Journal of the American College of Radiology</em> analysis projects <a href="https://doi.org/10.1016/j.jacr.2024.10.017" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">total US imaging utilization 17-27% higher in 2055 than in 2023</a> under current trends, driven mostly by population growth and aging. Cheaper, faster acquisition adds to that curve; it doesn't bend it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Three acquisition wins, one unsolved step
              </h2>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">&nbsp;</th>
                      <th className="py-3 px-3 text-[#0D0D0D] text-sm font-medium">Provect AI (3D-Anywhere)</th>
                      <th className="py-3 px-3 text-[#0D0D0D] text-sm font-medium">Pulmera (CBeam)</th>
                      <th className="py-3 pl-3 text-[#0D0D0D] text-sm font-medium">Kaiser Permanente (MRI AI)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Acquisition win</td>
                      <td className="py-3 px-3">C-arm 2D→3D, no CT needed</td>
                      <td className="py-3 px-3">C-arm 2D→3D, no CT needed</td>
                      <td className="py-3 pl-3">~45 → ~30 min scan time</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Setting</td>
                      <td className="py-3 px-3">OR / ASC, spine &amp; ortho</td>
                      <td className="py-3 px-3">OR / ASC, spine &amp; ortho</td>
                      <td className="py-3 pl-3">Outpatient / hospital MRI</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Who reads the extra volume</td>
                      <td className="py-3 px-3">Surgeon, in real time</td>
                      <td className="py-3 px-3">Surgeon, in real time</td>
                      <td className="py-3 pl-3">Radiologist, full report</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">Net new interpretation capacity</td>
                      <td className="py-3 px-3">None</td>
                      <td className="py-3 px-3">None</td>
                      <td className="py-3 pl-3">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Three vendors, three clearances, three genuinely useful acquisition-side products. And in every row, the last line is the same.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID sits on the reporting side of this exact gap — for diagnostic CT rather than intraoperative navigation. Instead of a narrow tool bolted onto one finding, a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model approach</Link> drafts a structured, comprehensive CT report, xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign for their own reading radiologist. Acquisition-side vendors keep finding new ways to make volumetric imaging cheaper and faster to generate; every one of those wins still ends at the same unsolved step — someone has to turn the volume into a report. That's the capacity layer that hasn't caught up, <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">radiologist shortage</Link> included, and it's the one xAID is built to add to.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did Provect AI receive FDA clearance for?',
                    a: "In July 2026, Palo Alto-based Provect AI received FDA 510(k) clearance for 3D-Anywhere, software that reconstructs 3D intraoperative images from standard C-arm x-ray systems for spine and orthopedic image-guided surgery. It requires no CT scanner, no new imaging hardware, and no change to existing workflow, and it outputs standard DICOM images compatible with hospital PACS and third-party navigation systems.",
                  },
                  {
                    q: 'Is Provect AI the only company converting C-arm x-rays into 3D imaging?',
                    a: 'No. About six weeks earlier, Pulmera received FDA 510(k) clearance (K252735) for its CBeam platform, which uses a position sensor on existing C-arms to reconstruct a rotational x-ray scan into a 3D dataset. Both clearances follow the same strategy: extract volumetric, CT-like imaging from cheaper, faster 2D acquisition hardware instead of adding CT scanner throughput.',
                  },
                  {
                    q: 'Does faster or cheaper 3D image acquisition reduce the radiology reporting workload?',
                    a: 'No — if anything it adds to it. Acquisition-side innovations like C-arm-to-3D reconstruction and accelerated MRI sequencing generate more volumetric data, but every added volume still has to be interpreted — by a surgeon in the OR or a radiologist in the reading room — before it changes patient care. A 2025 Journal of the American College of Radiology analysis projects total US imaging utilization 17-27% higher by 2055 than 2023 under current trends, so the demand for interpretation is rising as acquisition gets faster and cheaper, not falling.',
                  },
                  {
                    q: 'Where does xAID fit into this trend?',
                    a: "xAID addresses the reporting side of the same capacity problem, for diagnostic CT rather than intraoperative navigation. A foundation-model approach drafts a structured, comprehensive CT report that xAID's in-house radiologist reviews, delivered ready-to-sign for the client's own reading radiologist. As acquisition-side tools generate more volumetric imaging across the industry, that reporting layer is the capacity radiologists are actually short on.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Provect AI's FDA 510(k) clearance for 3D-Anywhere, as reported by <a href="https://www.auntminnie.com/clinical-news/digital-x-ray/news/15830239/provect-ai-wins-fda-clearance-for-3d-imaging-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> and <a href="https://www.beckersspine.com/spine/fda-clears-ct-free-3d-imaging-software-for-spine-orthopedic-surgery/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Becker's Spine Review</a>. Pulmera CBeam clearance details via <a href="https://24x7mag.com/standards/fda-updates/clearances/fda-clears-3d-imaging-platform-existing-surgical-c-arms/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">24x7 Magazine</a>. Kaiser Permanente MRI figures via <Link to="/blog/how-ai-cuts-mri-wait-times/" className="text-[#666] underline hover:text-xaid-blue">xAID's prior coverage</Link>. Imaging-utilization projection from Christensen et al., "Projected US Imaging Utilization, 2025 to 2055," <em>Journal of the American College of Radiology</em> (2025), <a href="https://doi.org/10.1016/j.jacr.2024.10.017" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI 10.1016/j.jacr.2024.10.017</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Acquisition keeps getting faster. Reporting needs to keep up."
          sub="xAID drafts a structured, comprehensive CT report from every study — an in-house radiologist reviews it, and it reaches you ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/how-ai-cuts-mri-wait-times/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow &amp; Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Cut a 37-Hospital System's MRI Wait Times — But Moved the Bottleneck</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CArmImagingReportingBottleneck;
