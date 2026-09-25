import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MriRepeatScanCost = () => {
  const post = {
    title: 'MRI Repeat Scan Cost: The Measured Waste and the Bigger, Unmeasured One',
    dateIso: '2026-09-24',
    date: 'September 24, 2026',
    category: 'Workflow & Throughput',
    readingTime: 7,
    description: "A new 85,300-exam study puts a hard number on motion-driven MRI repeats: 4.8% of scans, 115 scanner-hours lost in six months. Reporting-side waste — backlog, re-reads, turnaround — is the bigger twin nobody tracks the same way.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MRI Repeat Scan Cost vs. Reporting Backlog | xAID</title>
        <meta name="description" content="A new study puts a hard number on motion-driven MRI repeats — 4.8% of scans, 115 scanner-hours lost. Reporting-side waste is the bigger, less-tracked twin." />
        <link rel="canonical" href="https://xaid.ai/blog/mri-repeat-scan-cost/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MRI Repeat Scan Cost vs. Reporting Backlog | xAID" />
        <meta property="og:description" content="A new study puts a hard number on motion-driven MRI repeats — 4.8% of scans, 115 scanner-hours lost. Reporting-side waste is the bigger, less-tracked twin." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MRI Repeat Scan Cost vs. Reporting Backlog | xAID" />
        <meta name="twitter:description" content="A new study puts a hard number on motion-driven MRI repeats — 4.8% of scans, 115 scanner-hours lost. Reporting-side waste is the bigger, less-tracked twin." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/mri-repeat-scan-cost" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/mri-repeat-scan-cost",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "mri repeat scan cost, motion artifact MRI, MRI repeat rate, radiology reporting backlog, imaging capacity"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study on repeat MRI sequences find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers from NYU Grossman School of Medicine, working with Siemens Healthineers, analyzed 85,300 MRI exams over six months using sequence-level scanner log-file analytics, published in the Journal of the American College of Radiology. About 4.8% of exams (roughly 4,000) included at least one sequence repeated for motion. Repeats consumed about 115 additional scanner hours over the six months, equivalent to about 268 lost MRI appointment slots. Pediatric exams had the highest repeat rate (9.9%); breast MRI had the lowest (3.5%)."
              }
            },
            {
              "@type": "Question",
              "name": "How much does patient motion cost per MRI scanner per year?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A separate, earlier analysis by University of Washington researchers, published in JACR in 2015, modeled the annual cost of motion-related repeats at roughly $115,000 per scanner (sensitivity range about $92,600 to $139,000), based on an estimated $592 per hour of lost scanner revenue. That study found significant motion artifacts in 7.5% of outpatient exams and 29.4% of inpatient/emergency-department exams."
              }
            },
            {
              "@type": "Question",
              "name": "Do repeat MRI sequences actually fix the motion problem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not always. In the new study's brain MRI sub-analysis (87 baseline-repeat pairs from 77 patients), repeats generally improved image quality and diagnostic confidence, but about 20% of repeat sequences did not improve anything. In the MRCP sub-analysis (30 pairs from 27 patients), repeats did not significantly improve quality or confidence, and both readers agreed roughly half of the repeats would still have needed another acquisition."
              }
            },
            {
              "@type": "Question",
              "name": "Why does reporting-side waste matter as much as scanner-side waste?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Motion repeats are easy to measure because they show up as scanner minutes on a specific machine. Reporting-side waste — backlog, escalations, addenda, and turnaround delay — is spread across radiologist hours and worklists instead of a single piece of equipment, so it rarely gets the same per-unit accounting. That does not make it smaller; capacity planning that only counts scanner throughput is solving half the problem."
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
              MRI repeat scans cost roughly $115K a scanner, a year.<br />
              <span className="text-white/60">The reporting backlog costs more — and almost no one measures it.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new 85,300-exam study just put a hard, current number on motion-driven MRI repeats. That's the acquisition side of imaging waste — and it's the side getting measured, tracked, and engineered against. The reporting side isn't getting the same treatment, even though nothing suggests it's smaller.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '4.8%', label: 'MRI exams with a repeat', sub: '85,300 exams, 6 months' },
            { stat: '115 hrs', label: 'Scanner hours lost', sub: '≈268 lost MRI slots' },
            { stat: '$115K', label: 'Modeled cost per scanner/year', sub: 'earlier motion-cost study' },
            { stat: '~20%', label: "Repeats that didn't improve", sub: 'brain MRI sub-study' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the new study measured
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers from NYU Grossman School of Medicine, working with Siemens Healthineers, pulled sequence-level analytics from scanner log files across 85,300 MRI exams over a six-month period and published the results in the <a href="https://www.jacr.org/article/S1546-1440(26)00479-5/fulltext" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of the American College of Radiology</a>, as first reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/motion-related-repeat-mri-sequences-create-considerable-operational-burden" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                About <strong>4.8%</strong> of all exams — roughly 4,000 — included at least one sequence repeated because of patient motion. That's actually a lower rate than earlier work had found: a widely cited 2015 analysis reported significant motion artifacts in <strong>7.5%</strong> of outpatient exams and <strong>29.4%</strong> of inpatient/emergency-department exams (more on that study below). The authors attribute the improvement partly to newer acquisition technology — shorter protocols, parallel imaging, compressed sensing, and deep learning reconstruction — that makes scans less vulnerable to a fidgeting patient in the first place.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The repeat rate wasn't uniform. Pediatric imaging had the highest rate at <strong>9.9%</strong> — unsurprising, given how hard it is to keep a child still for several minutes — while breast MRI had the lowest, at <strong>3.5%</strong>. Overall, motion-driven repeats consumed about <strong>115 additional scanner hours</strong> over the six months, which the study equates to roughly <strong>268 lost MRI appointment slots</strong> — capacity that never went to a new patient.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The uncomfortable detail: a chunk of the repeats didn't help
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The study went a step further than counting repeats — it asked whether they were worth it. Two independent readers reviewed baseline-versus-repeat image pairs for brain MRI (87 pairs from 77 patients) and MRCP (30 pairs from 27 patients).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For brain MRI, repeats generally did improve image quality and diagnostic confidence — but about <strong>20%</strong> of the repeat sequences didn't improve anything. For MRCP, it was worse: repeats didn't significantly improve quality or confidence overall, and both readers agreed that roughly half of the repeated sequences would still have needed yet another acquisition to be diagnostic. In other words, some of the "fix" for motion waste is itself waste — scanner time spent a second time for no clinical gain.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This is what happens when a number gets studied for a decade
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The $115,000-a-year figure didn't come from the new study — it comes from an earlier, separate analysis. In 2015, University of Washington researchers reviewed <a href="https://pubmed.ncbi.nlm.nih.gov/25963225/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">192 clinical MR exams</a> and modeled the institutional cost of motion artifacts at roughly <strong>$115,000 per scanner per year</strong> (sensitivity range about $92,600–$139,000), based on an estimated <strong>$592 per hour</strong> of lost scanner revenue — a figure repeat-sequence studies have cited ever since.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That single number is arguably why acquisition-side motion waste keeps getting instrumented: a 2016 study on abdominal MRI, a 2022 analysis correlating radiologist-assessed motion with log-file-documented repeats, and now this 85,000-exam sequence-level study. A decade of follow-on research has steadily narrowed down exactly which sequences repeat, why, and what fraction of those repeats are worth the scanner time — which is precisely how you get to concrete engineering fixes like protocol reordering, motion-robust acquisition, and AI-based motion correction, all of which this latest study recommends.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The reporting side hasn't gotten the same treatment
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Motion repeats are easy to quantify because the unit of waste is obvious: a sequence either has to run again or it doesn't, and that shows up as minutes on a specific scanner. Reporting waste doesn't have that clean unit. A study that sits in a backlog, gets flagged for a second read, comes back for an addendum, or simply waits its turn on an overloaded worklist doesn't register as "115 hours on Scanner 3" — it registers as turnaround time and radiologist hours, spread across a whole department instead of a single machine. That's harder to isolate, not smaller.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID has covered that side of the ledger directly: ACR guidance calls for routine CT reads to be signed within 24 hours, but <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">actual turnaround often runs 36–72 hours</Link>, and a projected physician shortage — <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">up to 86,000 by 2036</Link> — is only going to widen that gap. None of that shows up in a per-scanner cost model, because it isn't a scanner problem.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Acquisition waste vs. reporting waste, side by side
              </h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Acquisition-side (motion repeats)</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Reporting-side (backlog, re-reads)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Unit of waste', 'Scanner minutes, per machine', 'Radiologist hours, spread across a worklist'],
                      ['Quantified how', '115 scanner-hrs / 268 slots over 6 months (85,300 exams)', 'No equivalent per-unit figure in routine use'],
                      ['Modeled dollar cost', '~$115K per scanner per year (2015 estimate)', 'No comparable per-radiologist or per-worklist figure exists'],
                      ['Research attention', 'A decade of studies (2015, 2016, 2022, 2026)', 'Turnaround-time studies exist, but far less standardized'],
                      ['Fix being engineered', 'Sequence-level analytics, motion-robust acquisition, AI motion correction', 'AI-drafted reports, worklist prioritization — newer, less uniform'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[1]}</td>
                        <td className="py-3 text-[#666] text-[15px] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Acquisition-side figures per the studies cited above. Reporting-side figures are xAID's synthesis of the comparison, not from a single study measuring both sides at once.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why capacity math has to include both stages
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Fixing acquisition-side waste is worth doing on its own terms — fewer repeats means less patient time in the bore and more slots available. But it doesn't shrink the total workload; it just gets more exams to the reporting stage faster. xAID has made this point before in the context of acquisition-speed AI: <Link to="/blog/how-ai-cuts-mri-wait-times/" className="text-xaid-blue-strong underline underline-offset-2">a health system that cut MRI wait times by more than 60%</Link> didn't reduce the number of studies that eventually needed a radiologist's eyes — it just moved the bottleneck downstream. The same logic applies to a scanner that wastes fewer hours on motion repeats: those saved hours produce more completed exams, all of which still have to be read.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Capacity planning that stops at the scanner — as with <Link to="/blog/philips-ct-recall-imaging-capacity/" className="text-xaid-blue-strong underline underline-offset-2">equipment-side disruptions to imaging capacity</Link> more broadly — is only modeling half the pipeline. The other half is the queue of studies waiting to be read, and it deserves the same per-unit rigor this MRI motion research applied to scanner minutes.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's AI CT reporting is built for the stage this research doesn't cover: once a study is acquired, it drafts a structured, comprehensive report, xAID's in-house radiologist reviews every preliminary, and the result is delivered ready-to-sign — turning the reporting stage into something that can be measured and improved with the same discipline this study just applied to scanner minutes.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study on repeat MRI sequences find?',
                    a: 'Researchers from NYU Grossman School of Medicine, working with Siemens Healthineers, analyzed 85,300 MRI exams over six months using sequence-level scanner log-file analytics, published in the Journal of the American College of Radiology. About 4.8% of exams (roughly 4,000) included at least one sequence repeated for motion. Repeats consumed about 115 additional scanner hours over the six months, equivalent to about 268 lost MRI appointment slots. Pediatric exams had the highest repeat rate (9.9%); breast MRI had the lowest (3.5%).',
                  },
                  {
                    q: 'How much does patient motion cost per MRI scanner per year?',
                    a: 'A separate, earlier analysis by University of Washington researchers, published in JACR in 2015, modeled the annual cost of motion-related repeats at roughly $115,000 per scanner (sensitivity range about $92,600 to $139,000), based on an estimated $592 per hour of lost scanner revenue. That study found significant motion artifacts in 7.5% of outpatient exams and 29.4% of inpatient/emergency-department exams.',
                  },
                  {
                    q: 'Do repeat MRI sequences actually fix the motion problem?',
                    a: "Not always. In the new study's brain MRI sub-analysis (87 baseline-repeat pairs from 77 patients), repeats generally improved image quality and diagnostic confidence, but about 20% of repeat sequences did not improve anything. In the MRCP sub-analysis (30 pairs from 27 patients), repeats did not significantly improve quality or confidence, and both readers agreed roughly half of the repeats would still have needed another acquisition.",
                  },
                  {
                    q: 'Why does reporting-side waste matter as much as scanner-side waste?',
                    a: 'Motion repeats are easy to measure because they show up as scanner minutes on a specific machine. Reporting-side waste — backlog, escalations, addenda, and turnaround delay — is spread across radiologist hours and worklists instead of a single piece of equipment, so it rarely gets the same per-unit accounting. That does not make it smaller; capacity planning that only counts scanner throughput is solving half the problem.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: NYU Grossman School of Medicine / Siemens Healthineers study, <a href="https://www.jacr.org/article/S1546-1440(26)00479-5/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Journal of the American College of Radiology</a> (2026), as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/motion-related-repeat-mri-sequences-create-considerable-operational-burden" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://theimagingwire.com/2026/09/23/the-operational-toll-of-repeat-mri-scans/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>. Per-scanner cost estimate from Andre et al., <a href="https://pubmed.ncbi.nlm.nih.gov/25963225/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Journal of the American College of Radiology</a> (2015). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="The scanner isn't the only place capacity gets lost."
          sub="xAID drafts the report the moment a CT is acquired, with in-house radiologist review on every preliminary — ready-to-sign for your reading radiologist. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Cut MRI Wait Times 60% — But Faster Scans Just Move the Bottleneck</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/philips-ct-recall-imaging-capacity/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Philips CT Recall Is a Capacity Problem, Not Just a Device Problem</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MriRepeatScanCost;
