import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const PhotonCountingCtRuralImagingAccess = () => {
  const post = {
    title: 'Portable Photon-Counting CT Just Reached Its First Clinic',
    dateIso: '2026-08-06',
    date: 'August 6, 2026',
    category: 'CT Technology',
    readingTime: 7,
    description: "MARS Bioimaging has installed the first portable photon-counting CT scanner outside a hospital, months after its FDA clearance. Sharper images and smaller footprints both point the same direction — more findings per scan, in more places, without more radiologists to report them.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Photon-Counting CT Goes Portable | xAID</title>
        <meta name="description" content="MARS Bioimaging installed the first portable photon-counting CT scanner at a community clinic — what it means for reporting capacity at small, rural programs." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Photon-Counting CT Goes Portable | xAID" />
        <meta property="og:description" content="MARS Bioimaging installed the first portable photon-counting CT scanner at a community clinic — what it means for reporting capacity at small, rural programs." />
        <meta property="og:url" content="https://xaid.ai/blog/photon-counting-ct-rural-imaging-access" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photon-Counting CT Goes Portable | xAID" />
        <meta name="twitter:description" content="MARS Bioimaging installed the first portable photon-counting CT scanner at a community clinic — what it means for reporting capacity at small, rural programs." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/photon-counting-ct-rural-imaging-access" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/photon-counting-ct-rural-imaging-access",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "photon-counting CT, portable CT scanner, CT reporting capacity, rural radiology, community imaging AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is photon-counting CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Photon-counting CT (PCCT) uses detectors that register and measure the energy of individual x-ray photons rather than converting the whole beam into an averaged signal, the way conventional CT detectors do. That produces higher-resolution, better-differentiated images of bone, cartilage, soft tissue, blood vessels, and metallic implants in a single scan. MARS Bioimaging's system uses photon-counting detector technology called Medipix3, originally developed through particle-physics research at CERN, under an exclusive license to commercialize it for medical imaging."
              }
            },
            {
              "@type": "Question",
              "name": "What did MARS Bioimaging just install, and where?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MARS Bioimaging installed its MARS Extremity Imaging System, a portable photon-counting CT scanner for upper-extremity imaging, at Reform Radiology in Christchurch, New Zealand. It is the system's first clinical placement following FDA 510(k) clearance in March 2026."
              }
            },
            {
              "@type": "Question",
              "name": "Is portable photon-counting CT FDA cleared?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, for a specific use. The FDA granted 510(k) clearance in March 2026 to MARS Bioimaging's portable photon-counting CT scanner for upper-extremity imaging, intended for community and point-of-care settings such as clinics, sports medicine practices, and ambulatory units, supporting pre- and post-surgical planning, fracture-healing assessment, and evaluation of implant-related complications."
              }
            },
            {
              "@type": "Question",
              "name": "Does more portable, higher-resolution CT make the radiologist shortage worse?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It adds to the same pressure from a different angle. Photon-counting CT produces denser, more detailed studies to interpret, and portability is designed to put CT in more community and point-of-care sites that previously had none — both increase the volume and complexity of reads. Meanwhile, U.S. radiologist attrition rose from 1.1% to 2.5% a year between 2014 and 2022, and imaging demand is projected to keep climbing. AI-assisted, radiologist-reviewed reporting is one way small and community programs are keeping report turnaround manageable as scan volume and detail both increase."
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
                CT Technology
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Portable photon-counting CT just reached its first clinic.<br />
              <span className="text-white/60">The reporting math didn't get any easier.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              MARS Bioimaging has installed the first portable photon-counting CT scanner at a community imaging practice, months after its FDA clearance. CT hardware is getting sharper and smaller at the same time — and for small and rural imaging programs, both trends point at the same bottleneck: reporting capacity.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: 'Sub-0.1mm', label: 'Resolution', sub: 'of the new portable PCCT scanner' },
                { stat: 'March 2026', label: 'FDA 510(k) clearance', sub: 'for upper-extremity imaging' },
                { stat: '2.5%/yr', label: 'US radiologist attrition (2022)', sub: 'up from 1.1% in 2014' },
                { stat: '17–27%', label: 'Projected imaging demand growth', sub: 'by 2055, per Neiman HPI modeling' },
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
                What just happened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                New Zealand–based <a href="https://www.auntminnie.com/clinical-news/ct/news/15831720/mars-bioimaging-installs-first-portable-photoncounting-ct-system" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MARS Bioimaging has installed its MARS Extremity Imaging System</a> — a portable photon-counting CT scanner for upper-extremity imaging — at <a href="https://biopharmaapac.com/news/120/8277/mars-bioimaging-secures-first-clinical-sale-of-portable-photon-counting-ct-system.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Reform Radiology, a private imaging practice in Christchurch, New Zealand</a>. It's the system's first clinical placement, coming a few months after the FDA granted it <a href="https://www.auntminnie.com/clinical-news/ct/news/15820362/mars-bioimaging-gains-fda-clearance-for-portable-pcct-scanner" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">510(k) clearance in March 2026</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two things about this scanner matter for reporting workflows, and they pull in the same direction. It's <strong>higher-resolution</strong> than the CT most community sites have used before, and it's <strong>portable</strong> — designed for clinics, sports medicine practices, and ambulatory units that have never had CT on-site at all.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What photon-counting CT actually changes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Conventional CT detectors absorb an x-ray beam and convert its total energy into a single averaged signal. Photon-counting detectors register individual photons and their energy levels, which is what lets a photon-counting CT (PCCT) scan resolve more material types — bone, cartilage, soft tissue, blood vessels, and metallic implants — at higher spatial resolution than a conventional scan of the same body part.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                MARS Bioimaging's scanner reports <strong>sub-0.1mm resolution</strong> with color-enabled 3D reconstruction, built on photon-counting detector technology called Medipix3 — <a href="https://www.marsbioimaging.com/article/mars-bioimaging-fda-clearance-photon-counting-ct" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">originally developed through particle-physics research at CERN</a>, which MARS holds an exclusive license to commercialize for medical imaging. The FDA clearance covers upper-extremity imaging — elbow to wrist — for pre- and post-surgical planning, fracture-healing assessment, and evaluating implant-related complications.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
Reform Radiology's general manager, Paul Mouthaan, <a href="https://biopharmaapac.com/news/120/8277/mars-bioimaging-secures-first-clinical-sale-of-portable-photon-counting-ct-system.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">called it "an important new imaging technology that simply hasn't been available before,"</a> and MARS Bioimaging CEO Dr. Ojas Mahapatra said the install shows <a href="https://biopharmaapac.com/news/120/8277/mars-bioimaging-secures-first-clinical-sale-of-portable-photon-counting-ct-system.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"clinicians are beginning to use our technology to improve patient journeys."</a> Both quotes point at the same thing: a scan that surfaces more clinically relevant detail than what community-based clinics have had access to.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "portable" is the part that matters most for capacity planning
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Photon-counting CT itself isn't new — hospital-grade PCCT systems have been clinically deployed since 2021. What's new here is the setting. This scanner is <a href="https://www.itnonline.com/content/fda-approves-portable-photon-counting-ct-scanner" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">cleared for community and point-of-care settings</a> — clinical offices, sports medicine practices, ambulatory service units — the kind of sites that route patients to a hospital or imaging center for any CT today, simply because they don't have one.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the pattern to watch, independent of this specific device: as CT hardware gets more compact and clears for lower-acuity, non-hospital settings, CT access expands into places that never generated CT reporting volume before. Every one of those new sites needs the same thing a hospital radiology department needs — a qualified read, on a reasonable timeline.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The reporting math doesn't reset
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Higher resolution and more material differentiation are diagnostic wins, but they aren't free at the reporting desk. A scan that resolves cartilage, small vessels, and implant margins in addition to bone gives a radiologist more to describe, measure, and reconcile per study than a lower-resolution equivalent — denser findings sections, more structured measurements, more potential incidental findings to characterize.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That lands on a workforce that was already stretched before this scanner existed. <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR Bulletin data show U.S. radiologist attrition more than doubled</a> from 1.1% a year in 2014 to 2.5% a year in 2022, and subspecialists are 37% more likely to leave the workforce than generalists. At the same time, <a href="https://www.neimanhpi.org/press-releases/new-studies-shed-light-on-the-future-radiologist-workforce-shortage-by-projecting-future-radiologist-supply-and-demand-for-imaging/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Neiman Institute–funded modeling projects imaging utilization growing 17%–27% by 2055</a>, depending on modality, with the current national radiologist shortage persisting absent a change in workforce growth or per-person imaging use.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Those are long-horizon, national figures — they don't say who reads a wrist CT generated at a sports medicine clinic in a town with no radiology group. That's the practical question new point-of-care CT capacity raises well before 2055: more diagnostically rich studies, produced in more places, without a matching increase in radiologists available to read them there.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Conventional fixed CT</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Portable photon-counting CT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Typical setting', 'Hospital or imaging center', 'Clinics, sports medicine practices, ambulatory units'],
                      ['Material differentiation', 'Bone vs. soft tissue, broadly', 'Bone, cartilage, soft tissue, vessels, implants'],
                      ['Sites with no prior CT access', 'Refer out for any scan', 'Can scan on-site, still must refer out to read it'],
                      ['Findings per study', 'Baseline', 'More granular detail to describe and measure'],
                      ['Who typically reads it', 'On-staff or contracted radiologist', 'Same pool, now serving more originating sites'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`py-3 ${i < 2 ? 'pr-4' : ''} text-[#444] font-light`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this requires a specific device to be the trigger — it's the trajectory of CT hardware generally: more granular per scan, more portable into settings that never had it. That trajectory is exactly why <Link to="/blog/ai-radiology-for-small-hospitals-2026/" className="text-xaid-blue-strong underline underline-offset-2">small and community imaging programs</Link> are the segment leaning hardest into AI-assisted reporting — it's a way to absorb denser studies and new originating sites without a 1:1 increase in radiologist headcount. xAID's foundation-model reports are drafted from the scan, reviewed in-house by xAID's radiologist on every preliminary, and delivered ready-to-sign so the client's reading radiologist signs the final — the same accountable structure, applied to a growing volume of increasingly detailed studies.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is photon-counting CT?',
                    a: "Photon-counting CT (PCCT) uses detectors that register and measure the energy of individual x-ray photons rather than converting the whole beam into an averaged signal, the way conventional CT detectors do. That produces higher-resolution, better-differentiated images of bone, cartilage, soft tissue, blood vessels, and metallic implants in a single scan. MARS Bioimaging's system uses photon-counting detector technology called Medipix3, originally developed through particle-physics research at CERN, under an exclusive license to commercialize it for medical imaging.",
                  },
                  {
                    q: 'What did MARS Bioimaging just install, and where?',
                    a: "MARS Bioimaging installed its MARS Extremity Imaging System, a portable photon-counting CT scanner for upper-extremity imaging, at Reform Radiology in Christchurch, New Zealand. It is the system's first clinical placement following FDA 510(k) clearance in March 2026.",
                  },
                  {
                    q: 'Is portable photon-counting CT FDA cleared?',
                    a: 'Yes, for a specific use. The FDA granted 510(k) clearance in March 2026 to MARS Bioimaging\'s portable photon-counting CT scanner for upper-extremity imaging, intended for community and point-of-care settings such as clinics, sports medicine practices, and ambulatory units, supporting pre- and post-surgical planning, fracture-healing assessment, and evaluation of implant-related complications.',
                  },
                  {
                    q: 'Does more portable, higher-resolution CT make the radiologist shortage worse?',
                    a: 'It adds to the same pressure from a different angle. Photon-counting CT produces denser, more detailed studies to interpret, and portability is designed to put CT in more community and point-of-care sites that previously had none — both increase the volume and complexity of reads. Meanwhile, U.S. radiologist attrition rose from 1.1% to 2.5% a year between 2014 and 2022, and imaging demand is projected to keep climbing. AI-assisted, radiologist-reviewed reporting is one way small and community programs are keeping report turnaround manageable as scan volume and detail both increase.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/ct/news/15831720/mars-bioimaging-installs-first-portable-photoncounting-ct-system" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, <a href="https://biopharmaapac.com/news/120/8277/mars-bioimaging-secures-first-clinical-sale-of-portable-photon-counting-ct-system.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">BioPharmaAPAC</a>, <a href="https://www.auntminnie.com/clinical-news/ct/news/15820362/mars-bioimaging-gains-fda-clearance-for-portable-pcct-scanner" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie (FDA clearance)</a>, <a href="https://www.itnonline.com/content/fda-approves-portable-photon-counting-ct-scanner" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Imaging Technology News</a>, <a href="https://www.marsbioimaging.com/article/mars-bioimaging-fda-clearance-photon-counting-ct" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MARS Bioimaging</a>, <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR Bulletin</a>, and <a href="https://www.neimanhpi.org/press-releases/new-studies-shed-light-on-the-future-radiologist-workforce-shortage-by-projecting-future-radiologist-supply-and-demand-for-imaging/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Harvey L. Neiman Health Policy Institute</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More scan detail, more sites, same reporting deadline"
          sub="See how AI-assisted, radiologist-reviewed reporting keeps turnaround steady as CT volume and complexity both grow. Try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-for-small-hospitals-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Small & Community Hospitals</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology for Small and Community Hospitals 2026</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
              <Link to="/blog/radiology-ai-access-disparities/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Access & Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Who Gets Radiology AI? Reimbursement Design and Disparities</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PhotonCountingCtRuralImagingAccess;
