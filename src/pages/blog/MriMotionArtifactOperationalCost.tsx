import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MriMotionArtifactOperationalCost = () => {
  const post = {
    title: 'MRI Motion Artifact Repeats Cost About $115K a Scanner, a Year',
    dateIso: '2026-09-27',
    date: 'September 27, 2026',
    category: 'Workflow & Throughput',
    readingTime: 6,
    description: "A new 85,300-exam study puts a current number on MRI motion artifact repeats: 4.8% of scans, 115 lost scanner-hours in six months. An older $115K-a-scanner estimate still holds up — and the reporting-side twin of this waste isn't measured the same way.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MRI Motion Artifact Repeats Cost $115K/Scanner | xAID</title>
        <meta name="description" content="A new 85,300-exam study measures MRI motion artifact repeats: 4.8% of scans, 115 lost scanner-hours. An older $115K-a-scanner estimate still holds up." />
        <link rel="canonical" href="https://xaid.ai/blog/mri-motion-artifact-operational-cost/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MRI Motion Artifact Repeats Cost $115K/Scanner | xAID" />
        <meta property="og:description" content="A new 85,300-exam study measures MRI motion artifact repeats: 4.8% of scans, 115 lost scanner-hours. An older $115K-a-scanner estimate still holds up." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MRI Motion Artifact Repeats Cost $115K/Scanner | xAID" />
        <meta name="twitter:description" content="A new 85,300-exam study measures MRI motion artifact repeats: 4.8% of scans, 115 lost scanner-hours. An older $115K-a-scanner estimate still holds up." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/mri-motion-artifact-operational-cost" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/mri-motion-artifact-operational-cost",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "MRI motion artifact, mri repeat scan cost, motion related repeat MRI, radiology reporting backlog, imaging capacity"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new 2026 study find about motion-related repeat MRI sequences?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers from NYU Grossman School of Medicine, working with Siemens Healthineers, analyzed sequence-level scanner log files across 85,300 MRI exams over six months and published the results in the Journal of the American College of Radiology. About 4.8% of exams — roughly 4,000 — included at least one sequence repeated for motion, consuming about 115 additional scanner hours, equivalent to roughly 268 lost MRI appointment slots. Pediatric MRI had the highest repeat rate at 9.9%; breast MRI had the lowest at 3.5%."
              }
            },
            {
              "@type": "Question",
              "name": "Do repeat MRI sequences actually fix the motion artifact?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not always. In the study's brain MRI sub-analysis (77 patients), repeats improved image quality and diagnostic confidence in about 80% of cases — meaning roughly one in five repeats didn't help. A smaller MRCP sub-analysis (27 patients) found repeats were less successful, without a significant overall improvement in image quality or confidence."
              }
            },
            {
              "@type": "Question",
              "name": "How much does MRI motion artifact cost an imaging center per year?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A separate, earlier analysis by University of Washington researchers, published in JACR in 2015, reviewed 192 clinical MR exams from a single week and modeled the cost of motion artifacts at roughly $592 per hour of lost scanner revenue — equivalent to about $115,000 per scanner per year (sensitivity range about $92,600 to $139,000). That study found significant motion artifacts on sequences in 7.5% of outpatient exams and 29.4% of inpatient/emergency-department exams, with about 20% of all exams needing at least one repeated sequence."
              }
            },
            {
              "@type": "Question",
              "name": "Why isn't reporting-side waste measured the same way as scanner-side motion waste?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Motion repeats have an obvious per-unit measure: a sequence either reruns or it doesn't, and that shows up as minutes on a specific scanner. Reporting-side waste — backlog, re-reads, addenda, turnaround delay — is spread across radiologist hours and a shared worklist instead of one piece of equipment, so it rarely gets tracked with the same per-unit rigor. That makes it harder to attribute, not smaller."
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
              MRI motion artifacts cost about $115,000 per scanner, a year.<br />
              <span className="text-white/60">The reporting-side twin of that waste isn't measured the same way.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new 85,300-exam study just put a current number on motion-driven MRI repeats. That's the acquisition side of imaging waste, and it's the side getting instrumented, studied, and engineered against. The reporting side of the pipeline hasn't gotten the same treatment — and there's no reason to assume it's smaller.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '4.8%', label: 'MRI exams with a motion repeat', sub: '85,300 exams, 6 months' },
            { stat: '115 hrs', label: 'Scanner hours lost', sub: '≈268 lost MRI slots' },
            { stat: '$115K', label: 'Modeled cost per scanner/year', sub: '2015 UW estimate' },
            { stat: '9.9%', label: 'Pediatric MRI repeat rate', sub: 'highest of any exam type' },
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
                Researchers from NYU Grossman School of Medicine, working with Siemens Healthineers, pulled sequence-level analytics from scanner log files across 85,300 MRI exams over a six-month period and published the results in the Journal of the American College of Radiology, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/motion-related-repeat-mri-sequences-create-considerable-operational-burden" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> and <a href="https://theimagingwire.com/2026/09/23/the-operational-toll-of-repeat-mri-scans/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Imaging Wire</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                About <strong>4.8%</strong> of all exams — roughly 4,000 — included at least one sequence repeated because of patient motion. Motion-driven repeats consumed about <strong>115 additional scanner hours</strong> over the six months, which the study equates to roughly <strong>268 lost MRI appointment slots</strong> — capacity that never went to a new patient.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The repeat rate wasn't uniform across exam types. Pediatric imaging had the highest rate, at <strong>9.9%</strong> — unsurprising, given how hard it is to keep a young child still for several minutes — while breast MRI had the lowest, at <strong>3.5%</strong>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A repeat doesn't always fix the problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The study went a step further than counting repeats — it asked whether they were worth it. In a brain MRI sub-analysis covering 77 patients, repeats generally did improve image quality and diagnostic confidence, in about <strong>80%</strong> of cases. Read the flip side of that number: roughly one in five repeat sequences didn't improve anything, meaning the scanner time was spent twice for no clinical gain.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A smaller MRCP sub-analysis, covering 27 patients, found repeats were less successful still — quality and diagnostic confidence did not significantly improve overall. Some of the "fix" for motion waste is itself waste.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The number behind the number: $115,000 a year, per scanner
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The dollar figure attached to MRI motion waste didn't come from the new study — it comes from an older, separate analysis that keeps getting cited because nothing has replaced it. In 2015, University of Washington researchers reviewed <a href="https://pubmed.ncbi.nlm.nih.gov/25963225/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">192 clinical MR exams</a> from a single week and modeled the cost of motion artifacts at roughly <strong>$592 per hour</strong> of lost scanner revenue — equivalent to about <strong>$115,000 per scanner per year</strong> (sensitivity range about $92,600–$139,000), a figure <a href="https://www.radiologybusiness.com/topics/care-delivery/patient-motion-during-mri-115000-problem" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business covered under the headline "$115,000 problem"</a> and one later repeat-sequence research has continued to reference.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That 2015 study found significant motion artifacts on sequences in <strong>7.5%</strong> of outpatient exams versus <strong>29.4%</strong> of inpatient and emergency-department exams — and that roughly <strong>20%</strong> of all exams needed at least one repeated sequence. The new 85,300-exam study's <strong>4.8%</strong> repeat rate is markedly lower, which the authors attribute in part to newer acquisition technology — shorter protocols, parallel imaging, and better reconstruction — that makes scans less vulnerable to a fidgeting patient in the first place. Improvement, but not elimination: motion waste is smaller than a decade ago, not gone.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Acquisition-side waste vs. reporting-side waste
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Motion repeats are easy to quantify because the unit of waste is obvious: a sequence either has to run again or it doesn't, and that shows up as minutes on a specific scanner. Reporting-side waste doesn't have that clean unit. A study that sits in a backlog, gets flagged for a second read, comes back for an addendum, or simply waits its turn on an overloaded worklist doesn't register as "115 hours on Scanner 3" — it registers as turnaround time and radiologist hours, spread across a department instead of a single machine. That makes it harder to isolate. It doesn't make it smaller.
              </p>
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
                      ['Fix being engineered', 'Sequence-level log analytics, motion-robust acquisition', 'AI-drafted reports, worklist prioritization — newer, less uniform'],
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
                Acquisition-side figures per the studies cited above. Reporting-side cells describe the state of measurement, not a competing dollar figure — no single study has priced both sides of the pipeline at once.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Fixing the scanner doesn't shrink the queue
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Fixing acquisition-side waste is worth doing on its own terms — fewer repeats means less time in the bore and more available slots. But it doesn't reduce the total amount of reporting work; it just gets more exams to that stage faster. xAID has made a version of this point before, in the context of acquisition-speed AI: a 37-hospital system that <Link to="/blog/how-ai-cuts-mri-wait-times/" className="text-xaid-blue-strong underline underline-offset-2">cut MRI wait times by more than 60%</Link> with faster scanning didn't reduce the number of studies that eventually needed a radiologist's read — it moved the bottleneck downstream. Better motion handling would do the same: saved scanner hours become more completed exams, all of which still have to be read.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Capacity planning that stops at the scanner — much like <Link to="/blog/philips-ct-recall-imaging-capacity/" className="text-xaid-blue-strong underline underline-offset-2">equipment-side disruptions to imaging capacity</Link> more broadly — is only modeling half the pipeline. The other half is the queue of studies waiting to be read, and it deserves the same per-unit rigor motion research has applied to scanner minutes.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits — and where it doesn't
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                To be direct about scope: xAID's AI CT reporting has nothing to do with the acquisition-side problem this research describes — that's an MRI protocol and hardware question, and the right fixes are motion-robust sequences, better patient prep, and log-file analytics like the study above, not a report-drafting tool. xAID's footprint is the other half of the pipeline: once a CT study is acquired, its AI drafts a structured report, an in-house radiologist reviews every preliminary, and the result is delivered ready-to-sign for the reading radiologist. Fix the acquisition-side waste with better protocols and motion correction; let AI absorb the reporting-side surge that follows. Both halves of the pipeline lose money today — treating only one of them doesn't make the imaging center whole.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new 2026 study find about motion-related repeat MRI sequences?',
                    a: 'Researchers from NYU Grossman School of Medicine, working with Siemens Healthineers, analyzed sequence-level scanner log files across 85,300 MRI exams over six months and published the results in the Journal of the American College of Radiology. About 4.8% of exams — roughly 4,000 — included at least one sequence repeated for motion, consuming about 115 additional scanner hours, equivalent to roughly 268 lost MRI appointment slots. Pediatric MRI had the highest repeat rate at 9.9%; breast MRI had the lowest at 3.5%.',
                  },
                  {
                    q: 'Do repeat MRI sequences actually fix the motion artifact?',
                    a: "Not always. In the study's brain MRI sub-analysis (77 patients), repeats improved image quality and diagnostic confidence in about 80% of cases — meaning roughly one in five repeats didn't help. A smaller MRCP sub-analysis (27 patients) found repeats were less successful, without a significant overall improvement in image quality or confidence.",
                  },
                  {
                    q: 'How much does MRI motion artifact cost an imaging center per year?',
                    a: 'A separate, earlier analysis by University of Washington researchers, published in JACR in 2015, reviewed 192 clinical MR exams from a single week and modeled the cost of motion artifacts at roughly $592 per hour of lost scanner revenue — equivalent to about $115,000 per scanner per year (sensitivity range about $92,600 to $139,000). That study found significant motion artifacts on sequences in 7.5% of outpatient exams and 29.4% of inpatient/emergency-department exams, with about 20% of all exams needing at least one repeated sequence.',
                  },
                  {
                    q: "Why isn't reporting-side waste measured the same way as scanner-side motion waste?",
                    a: "Motion repeats have an obvious per-unit measure: a sequence either reruns or it doesn't, and that shows up as minutes on a specific scanner. Reporting-side waste — backlog, re-reads, addenda, turnaround delay — is spread across radiologist hours and a shared worklist instead of one piece of equipment, so it rarely gets tracked with the same per-unit rigor. That makes it harder to attribute, not smaller.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: NYU Grossman School of Medicine / Siemens Healthineers study, Journal of the American College of Radiology (2026), as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/motion-related-repeat-mri-sequences-create-considerable-operational-burden" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://theimagingwire.com/2026/09/23/the-operational-toll-of-repeat-mri-scans/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>. Per-scanner cost estimate from Andre et al., <a href="https://pubmed.ncbi.nlm.nih.gov/25963225/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Journal of the American College of Radiology</a> (2015), also covered by <a href="https://www.radiologybusiness.com/topics/care-delivery/patient-motion-during-mri-115000-problem" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
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

export default MriMotionArtifactOperationalCost;
