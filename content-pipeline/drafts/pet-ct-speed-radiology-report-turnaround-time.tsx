import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const PetCtSpeedRadiologyReportTurnaroundTime = () => {
  const post = {
    title: "1-Minute PET/CT Scans Push Report Turnaround Time",
    dateIso: '2026-10-20',
    date: 'October 20, 2026',
    category: 'Workflow & Throughput',
    readingTime: 7,
    description: "A new PET/CT scans the whole body in about 1 minute, down from 5-6 bed positions. Why radiology report turnaround time, not acquisition, is now the real limit.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{post.title} | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/pet-ct-speed-radiology-report-turnaround-time/" />
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
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/pet-ct-speed-radiology-report-turnaround-time" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/pet-ct-speed-radiology-report-turnaround-time",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology report turnaround time, PET/CT scan time, total-body PET/CT, radiology reporting bottleneck, AI radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How fast is the new PET/CT system's whole-body scan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a study presented at EANM'26, a next-generation 128cm long-axial field-of-view PET/CT system (GE HealthCare's Omni Legend 128) produced diagnostic-quality images from just 1 minute of whole-body acquisition in 24 patients at Peter MacCallum Cancer Centre in Melbourne. Average image quality scored 4.5 out of 5 at 1 minute, still above the 3.9 score for a conventional scanner's full acquisition."
              }
            },
            {
              "@type": "Question",
              "name": "How many bed positions does a conventional PET/CT scan need?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard short-axial field-of-view PET/CT scanner typically needs 5 to 6 bed positions, repositioning the patient through the scanner to image the head-to-thigh region in sections. The long-axial system used in the EANM'26 study covers the same region in a single pass."
              }
            },
            {
              "@type": "Question",
              "name": "Is radiology report turnaround time increasing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Research from the ACR's Harvey L. Neiman Health Policy Institute, published in the Journal of the American College of Radiology and based on 2.9 million Medicare outpatient claims, found that imaging report turnaround time rose 27% between 2023 and 2024 and 177% over the full 2014-2024 decade, with CT turnaround up 381% over that period."
              }
            },
            {
              "@type": "Question",
              "name": "Does a faster PET/CT scanner reduce the time to get results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not by itself. Cutting acquisition time compresses the minutes a patient spends on the table, but it does not add radiologist capacity to read the resulting study. With turnaround time already rising faster than imaging volume in national data, buyers of faster scanners need AI-assisted reporting capacity alongside the hardware, or the saved scanner minutes simply pile up in the reading queue."
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
              PET/CT scans now take about 1 minute.<br />
              <span className="text-white/60">Radiology report turnaround time didn't get the memo.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A next-generation PET/CT system presented at EANM'26 compresses a whole-body scan that used to take 5-6 bed positions into roughly 60 seconds. Meanwhile, national data shows radiology report turnaround time climbing faster than imaging volume itself. Acquisition speed isn't the constraint anymore — reporting capacity is.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '~60 sec', label: 'Whole-body PET/CT scan', sub: 'vs 5-6 bed positions today' },
            { stat: '4.5/5', label: 'Image quality at 1 minute', sub: 'beat conventional scan (3.9/5)' },
            { stat: '27%', label: 'Report turnaround rose', sub: '2023 to 2024 (JACR)' },
            { stat: '177%', label: 'Turnaround time increase', sub: 'over the 2014-2024 decade' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A whole-body scan in about 60 seconds
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                At the 39th Annual Congress of the European Association of Nuclear Medicine (EANM'26) in Vienna on October 18, 2026, researchers presented results from the <strong>EQUIP study</strong>, run at Peter MacCallum Cancer Centre in Melbourne, Australia, evaluating a next-generation 128cm long-axial field-of-view PET/CT system (GE HealthCare's Omni Legend 128), as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/molecular-imaging/experts-say-petct-system-conducts-whole-body-scans-little-1-minute" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> and <a href="https://www.auntminnieeurope.com/clinical-news/molecular-imaging/article/15837735/eanm-nextgeneration-pet-scanner-cuts-imaging-time-to-one-minute" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie Europe</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Twenty-four patients scheduled for oncology PET/CT were scanned for 10 minutes on the new system, and the researchers then reconstructed images from progressively shorter slices of that same acquisition — 5, 3, 2 and 1 minute — to see how much time could be cut before image quality suffered. It barely did. Average diagnostic quality scored <strong>5.0 out of 5</strong> at 10 and 5 minutes, <strong>4.9</strong> at 3 and 2 minutes, and <strong>4.5</strong> at just 1 minute — still above the <strong>3.9</strong> score recorded for a conventional short-axial PET/CT scanner's standard acquisition, according to <a href="https://medicalxpress.com/news/2026-10-generation-total-body-pet-scanner.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Medical Xpress</a>'s coverage of the presentation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "Even when we cut the acquisition time by 90%, image quality exceeded current standard-of-care methods," lead author Cameron Pain of Peter MacCallum Cancer Centre said, per the same coverage.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What that 1 minute actually replaces
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The comparison isn't abstract. A conventional PET/CT scanner typically needs <strong>5 to 6 bed positions</strong> to cover the head-to-thigh region patients are imaged for in oncology work — the table moves the patient through the scanner in sections, each position adding its own acquisition time, as <a href="https://www.auntminnieeurope.com/clinical-news/molecular-imaging/article/15837735/eanm-nextgeneration-pet-scanner-cuts-imaging-time-to-one-minute" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie Europe</a> noted in its account of the EQUIP results. The long-axial system covers that same anatomy in a single pass.
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Acquisition</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Diagnostic quality (of 5)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Conventional scanner, 5-6 bed positions</td>
                      <td className="py-3">3.9</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Long-axial system, 10 min</td>
                      <td className="py-3">5.0</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Long-axial system, 5 min</td>
                      <td className="py-3">5.0</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Long-axial system, 3 min</td>
                      <td className="py-3">4.9</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Long-axial system, 2 min</td>
                      <td className="py-3">4.9</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">Long-axial system, 1 min</td>
                      <td className="py-3">4.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a genuine engineering win: less time on the table, lower radiation dose potential, fewer motion artifacts, and — for busy oncology imaging centers — more scanner slots per day. None of it, on its own, gets a patient their result any faster.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The constraint that doesn't move: radiology report turnaround time
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                While acquisition keeps getting faster, radiology report turnaround time — the interval between a scan being performed and a radiologist's report being finalized — is moving in the opposite direction. Research from the ACR's Harvey L. Neiman Health Policy Institute, published in the <em>Journal of the American College of Radiology</em> and based on an analysis of 2.9 million office and hospital outpatient Medicare fee-for-service imaging claims from 2014 to 2024, found that turnaround time rose from an average of <strong>0.091 days</strong> in 2014 to <strong>0.251 days</strong> by the end of 2024 — a <strong>177%</strong> increase over the decade, including a <strong>27%</strong> single-year jump from 2023 to 2024 alone, as detailed by <a href="https://theimagingwire.com/2026/08/05/radiologists-are-taking-much-longer-to-interpret-medical-images/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Imaging Wire</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The increase wasn't even across modalities — it tracked roughly with how imaging-heavy the study type is:
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Modality</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Turnaround time increase, 2014-2024</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">CT</td>
                      <td className="py-3">381%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">MRI</td>
                      <td className="py-3">278%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Ultrasound</td>
                      <td className="py-3">267%</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">X-ray</td>
                      <td className="py-3">126%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The study's authors put it plainly: the data suggest "the radiology workforce may be operating at or near maximum capacity," and that short-term fixes like moonlighting shifts can't close a structural supply-demand gap, per <a href="https://theimagingwire.com/2026/08/05/radiologists-are-taking-much-longer-to-interpret-medical-images/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Imaging Wire</a>'s reporting. PET/CT itself isn't in that modality breakdown, but there is no reason to think a scanner that produces diagnostic-quality studies 90% faster will somehow exempt its own reports from a radiologist workforce already described as near capacity.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this matters for outpatient and teleradiology buyers specifically
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Total-body PET/CT systems like the one studied in EQUIP are capital equipment aimed squarely at oncology-heavy outpatient imaging centers, academic cancer centers, and the teleradiology groups that read for them. The pitch is more patients scanned per day with better image quality and lower dose. That pitch is real — but it's a half-pitch if it stops at the scanner.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A department that doubles its PET/CT throughput by shrinking acquisition from 30-45 minutes to roughly a minute per patient has just created more finished studies than it had before — studies that still need a radiologist to read, interpret, and finalize. If report turnaround time is already rising nationally even without that extra volume, adding scanner throughput without adding reporting capacity doesn't close the gap between scan and result. It widens it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The practical takeaway for groups evaluating this generation of scanners: budget for reporting capacity in the same purchase decision as the scanner itself, whether that means staffing, outsourced coverage, or AI-assisted drafting that lets existing radiologists clear more studies per shift. Buying scanner speed and leaving reporting capacity flat just moves the bottleneck from the gantry to the worklist.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the same throughput math xAID is built around, applied to CT reporting: AI drafts a structured, comprehensive report from the completed study, xAID's in-house radiologist reviews every preliminary, and the output arrives ready-to-sign for the client's reading radiologist. For outpatient imaging centers and teleradiology groups adding PET/CT or CT acquisition speed, pairing it with AI-assisted reporting capacity is how the faster scan actually turns into a faster result for the patient — not just a faster scan.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How fast is the new PET/CT system's whole-body scan?",
                    a: "In a study presented at EANM'26, a next-generation 128cm long-axial field-of-view PET/CT system (GE HealthCare's Omni Legend 128) produced diagnostic-quality images from just 1 minute of whole-body acquisition in 24 patients at Peter MacCallum Cancer Centre in Melbourne. Average image quality scored 4.5 out of 5 at 1 minute, still above the 3.9 score for a conventional scanner's full acquisition.",
                  },
                  {
                    q: 'How many bed positions does a conventional PET/CT scan need?',
                    a: 'A standard short-axial field-of-view PET/CT scanner typically needs 5 to 6 bed positions, repositioning the patient through the scanner to image the head-to-thigh region in sections. The long-axial system used in the EANM’26 study covers the same region in a single pass.',
                  },
                  {
                    q: 'Is radiology report turnaround time increasing?',
                    a: "Yes. Research from the ACR's Harvey L. Neiman Health Policy Institute, published in the Journal of the American College of Radiology and based on 2.9 million Medicare outpatient claims, found that imaging report turnaround time rose 27% between 2023 and 2024 and 177% over the full 2014-2024 decade, with CT turnaround up 381% over that period.",
                  },
                  {
                    q: 'Does a faster PET/CT scanner reduce the time to get results?',
                    a: 'Not by itself. Cutting acquisition time compresses the minutes a patient spends on the table, but it does not add radiologist capacity to read the resulting study. With turnaround time already rising faster than imaging volume in national data, buyers of faster scanners need AI-assisted reporting capacity alongside the hardware, or the saved scanner minutes simply pile up in the reading queue.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: EQUIP study results presented at EANM'26 (Vienna, October 18, 2026), as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/molecular-imaging/experts-say-petct-system-conducts-whole-body-scans-little-1-minute" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.auntminnieeurope.com/clinical-news/molecular-imaging/article/15837735/eanm-nextgeneration-pet-scanner-cuts-imaging-time-to-one-minute" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie Europe</a> and <a href="https://medicalxpress.com/news/2026-10-generation-total-body-pet-scanner.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medical Xpress</a>; radiology report turnaround time data from the ACR's Harvey L. Neiman Health Policy Institute, published in the <em>Journal of the American College of Radiology</em>, as reported by <a href="https://theimagingwire.com/2026/08/05/radiologists-are-taking-much-longer-to-interpret-medical-images/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Faster scans don't have to mean a longer wait for results."
          sub="Pair acquisition speed with AI-assisted reporting capacity. Try xAID on 5 free studies and see the radiologist-reviewed, ready-to-sign reports."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI Cuts MRI Wait Times — and Where the Wait Goes Next</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks</div>
              </Link>
              <Link to="/blog/radiology-viewer-software-reporting-bottleneck/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Strategy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">PACS/Viewer Spend vs. the Reporting Bottleneck</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PetCtSpeedRadiologyReportTurnaroundTime;
