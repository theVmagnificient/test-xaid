import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const MedicareFeeSchedule2027Radiology = () => {
  const post = {
    title: '2027 Medicare Physician Fee Schedule: What It Means for Radiology',
    dateIso: '2026-07-15',
    date: 'July 15, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: "The proposed 2027 Medicare Physician Fee Schedule cuts the conversion factor 1.68%, yet CMS estimates a net +2% overall impact for radiology. What the numbers mean for imaging-group margins — and why revenue per study, not headcount, is the real story.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>2027 Medicare Physician Fee Schedule: Radiology | xAID</title>
        <meta name="description" content="The proposed 2027 Medicare Physician Fee Schedule cuts the conversion factor 1.68%, yet CMS estimates a net +2% overall impact for radiology. What it means." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="2027 Medicare Physician Fee Schedule: Radiology | xAID" />
        <meta property="og:description" content="The proposed 2027 Medicare Physician Fee Schedule cuts the conversion factor 1.68%, yet CMS estimates a net +2% overall impact for radiology. What it means." />
        <meta property="og:url" content="https://xaid.ai/blog/2027-medicare-physician-fee-schedule-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2027 Medicare Physician Fee Schedule: Radiology | xAID" />
        <meta name="twitter:description" content="The proposed 2027 Medicare Physician Fee Schedule cuts the conversion factor 1.68%, yet CMS estimates a net +2% overall impact for radiology. What it means." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/2027-medicare-physician-fee-schedule-radiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/2027-medicare-physician-fee-schedule-radiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "2027 medicare physician fee schedule radiology, MPFS 2027, radiology conversion factor 2027, radiology reimbursement cuts, professional fee radiology, imaging group margins"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does the 2027 Medicare Physician Fee Schedule cut radiology payments?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The headline conversion factor falls. In the proposed CY 2027 Medicare Physician Fee Schedule, released July 14, 2026, the conversion factor for clinicians who are not qualifying APM participants drops to $32.84, a decrease of $0.56 or 1.68% from the 2026 rate of $33.40; for qualifying APM participants it falls to $33.17, down $0.40 or 1.19%. But the overall picture for radiology is not a cut: CMS estimates a net positive overall impact of roughly +2% for radiology under the 2027 proposed rule, because practice-expense and other RVU changes offset the conversion-factor reduction and the efficiency adjustment does not apply to the technical component. The ACR summarized the proposal as indicating overall positive updates for radiology. The rule is a proposal open to public comment through September 14, 2026, not a final number."
              }
            },
            {
              "@type": "Question",
              "name": "What is driving the 2027 conversion-factor cut?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The main driver is the expiration of a one-year statutory increase. Congress added a 2.50% bump to the conversion factor for CY 2026 only, and that increase is not in effect for CY 2027. That expiring bump outweighs the smaller statutory updates for 2027 (0.75% for qualifying APM participants and 0.25% for others) plus a 0.53% adjustment CMS proposes to account for changes in work RVUs, producing a net decrease."
              }
            },
            {
              "@type": "Question",
              "name": "What is the efficiency adjustment and how does it affect radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the CY 2026 final rule, CMS finalized a negative 2.5% efficiency adjustment to the work RVUs of most services that are not billed based on time — on the premise that productivity has risen with better technology and workflows. Diagnostic imaging and many procedural radiology services are not time-based, so they fall within the adjustment's scope. CMS has said it plans to recalculate the efficiency adjustment every three years, so it continues to weigh on 2027 professional-fee values even though the next recalculation is not scheduled until 2029. The ACR has argued the theorized efficiencies are outweighed by the growing number of images and reconstructions performed per study."
              }
            },
            {
              "@type": "Question",
              "name": "How can imaging groups protect margins as per-study reimbursement falls?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Even when a specialty nets out positive in a given year, the conversion factor keeps eroding and the payment attached to any single study trends down over time, so a group's margin depends on how many studies each radiologist-hour can turn into a signed, billable report. Hiring more radiologists raises cost in a supply-constrained market; the more durable lever is throughput. AI that drafts a structured, comprehensive report lets a radiologist review and sign more studies per hour rather than dictate each one from scratch. With xAID, the AI produces a ready-to-sign draft, an in-house European radiologist reviews every preliminary, and the client's reading radiologist signs the final report."
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
                Policy &amp; Reimbursement
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              The 2027 Medicare fee schedule cuts the conversion factor — but nets positive for radiology.<br />
              <span className="text-white/60">The durable pressure is revenue per study, and the response is throughput.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              CMS's proposed 2027 Physician Fee Schedule trims the conversion factor another 1.68% — the dollar value behind every read — yet CMS's own estimate shows a net <strong className="text-white">+2% overall impact for radiology</strong>, because practice-expense and other RVU changes more than offset the cut. This is the professional-fee story, distinct from the site-neutral facility cuts. Here's what the numbers actually say, and why revenue per study — not headcount — is the lever a group controls as the conversion factor keeps eroding.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '-1.68%', label: 'Conversion-factor cut', sub: 'non-QP clinicians, 2027 vs 2026' },
                { stat: '+2%', label: 'Net radiology impact', sub: 'CMS estimate, 2027 proposed rule' },
                { stat: '$32.84', label: 'Proposed 2027 factor', sub: 'down from $33.40' },
                { stat: 'Sept 14', label: 'Comment deadline', sub: '2026' },
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
                What the proposed rule actually says
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 14, 2026, CMS released the <a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-proposed-rule" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Calendar Year 2027 Medicare Physician Fee Schedule proposed rule</a>. The headline for physicians is another drop in the conversion factor — the single dollar multiplier that converts every relative value unit (RVU) into a payment. For clinicians who are not qualifying Alternative Payment Model (APM) participants, the proposed 2027 factor is <strong>$32.84</strong>, a decrease of $0.56 or <strong>1.68%</strong> from the 2026 rate of $33.40. For qualifying APM participants it falls to $33.17, down $0.40 or 1.19%.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Because the conversion factor is a flat multiplier, a cut here flows straight through the <em>professional (reading) component</em> of every imaging code — the part a radiologist earns for interpreting the study and producing the report. The reaction from procedural specialties was sharp: the <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/medicare-releases-2027-physician-fee-schedule-devastating-cuts-radiologist-payments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Society of Interventional Radiology urged members to "act immediately to halt this devastating proposal,"</a> a characterization Radiology Business carried in its coverage. The rule is a proposal, open to public comment through <strong>September 14, 2026</strong>, so the final numbers can shift.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But the conversion factor is not the whole story — and it is important not to read the headline cut as an overall cut to radiology. In its own impact estimates for the 2027 proposed rule, CMS projects a net <strong>+2% overall impact for radiology</strong> (roughly +2% for nuclear medicine, +3% for interventional radiology, and +3% for radiation oncology), because proposed practice-expense and other RVU changes more than offset the conversion-factor reduction, and the negative efficiency adjustment does not apply to the technical component. The ACR's own read of the proposal — <a href="https://www.acr.org/Advocacy/Radiology-Economics/Medicare-Medicaid/MPFS" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Proposal Indicates Overall Positive Updates for Radiology"</a> — reflects the same conclusion. The durable pressure is structural: the conversion factor that sets revenue <em>per study</em> keeps eroding year over year, even in a year the specialty nets out ahead.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the factor is falling
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most of the 2027 decrease is not a new cut — it is the expiration of a temporary one. Congress attached a <strong>2.50%</strong> increase to the conversion factor for 2026 alone, and that bump simply is not in effect for 2027. It outweighs the modest statutory updates for the new year (0.75% for qualifying APM participants, 0.25% for everyone else) plus a 0.53% adjustment CMS proposes to account for changes in work RVUs. The arithmetic nets out to a decrease.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the recurring pattern radiology has lived with for years: a temporary patch props up the factor for twelve months, then lapses, and the baseline resets lower. The <a href="https://www.acr.org/Advocacy/Radiology-Economics/Medicare-Medicaid/MPFS" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology</a> and other physician groups have repeatedly urged Congress to replace the cycle with a stable, inflation-linked update. Until that happens, planning around a flat or rising conversion factor is planning around an exception, not the rule.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The efficiency adjustment still hangs over imaging
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Layered on top of the conversion factor is the "efficiency adjustment" CMS finalized in the 2026 final rule — a negative <strong>2.5%</strong> applied to the work RVUs of most services that are <em>not</em> billed based on time, on the theory that productivity has risen as technology and workflows improve. Diagnostic imaging and many procedural radiology services are not time-based, so their <em>work</em> RVUs sit inside the adjustment's scope. Importantly, it applies to the work component only — not to the technical component — which is part of why radiology still nets out positive overall in 2027. CMS has said it plans to recalculate the efficiency adjustment every three years, meaning the next reset is not due until 2029, so the reduction carries into the 2027 work values.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Radiology organizations have pushed back on the premise. The ACR has argued that any efficiencies CMS theorizes are outweighed by the growing number of images and reconstructions now generated per study — a modern CT or MRI produces far more to interpret than the volumes those RVUs were originally built on. It is worth being precise about the year-over-year direction here: under the earlier <strong>2026 final rule</strong>, CMS estimated an overall impact of roughly −2% for radiology and −1% for nuclear medicine, with interventional radiology closer to +2%. That was the prior-year outlook. For the <strong>2027 proposed rule</strong>, CMS's estimate flips positive overall (about +2% for radiology), so the two years should not be conflated — the efficiency adjustment weighs on specific work values without dragging the specialty's overall estimate negative for 2027.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This is the professional fee — not the site-neutral story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It is worth separating two policy tracks that often get blurred. The Physician Fee Schedule governs the <em>professional</em> component — what the radiologist earns for the read. A separate proposed rule, the Hospital Outpatient Prospective Payment System, governs <em>facility</em> payments; that is where the proposed <Link to="/blog/site-neutral-payments-imaging/" className="text-xaid-blue-strong underline underline-offset-2">site-neutral imaging cuts</Link> live. A hospital-affiliated imaging department can feel both at once, from different directions. This article is strictly about the reading fee. Both tracks, though, point at the same operational conclusion: when the payment attached to a study shrinks, the number of studies a group can accurately read per radiologist-hour becomes the variable that decides margin.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "hire more radiologists" is the wrong first move
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The instinctive answer to falling per-study pay is volume: read more studies to make up the difference. But if each study takes the same radiologist-minutes as before, more volume means more radiologists — and radiologists are the scarcest, most expensive input a group has. Job listings increasingly omit salary in a supply-constrained market, and the shortage is projected to widen through the decade. Solving a reimbursement cut by expanding the most cost-inflated line item just relocates the margin problem.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The durable lever is throughput economics: reading more studies per radiologist-hour without proportionally growing headcount. A specialty can net out positive in a single year and still watch the conversion factor — the dollar value behind each read — erode over the longer run. If a radiologist can accurately clear meaningfully more studies in the same hour, revenue-per-hour holds — or rises — even as revenue-per-study drifts down. That is the response that scales when the payment curve keeps bending down.
              </p>

              {/* Comparison table */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two ways to answer a reimbursement cut
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm"></th>
                      <th className="py-3 px-4 text-[#0D0D0D] font-medium text-sm">Add headcount / volume</th>
                      <th className="py-3 pl-4 text-[#0D0D0D] font-medium text-sm">Add throughput (AI-drafted reports)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Cost driver</td>
                      <td className="py-3 px-4">Scales with the scarcest, priciest input</td>
                      <td className="py-3 pl-4">Per-study software cost, no new salaries</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Revenue-per-study</td>
                      <td className="py-3 px-4">Still falls with the fee schedule</td>
                      <td className="py-3 pl-4">Still falls — but offset by more reads/hour</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Time to effect</td>
                      <td className="py-3 px-4">Months to recruit in a shortage</td>
                      <td className="py-3 pl-4">DICOM integration in about a week</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Accountability</td>
                      <td className="py-3 px-4">Radiologist reads and signs</td>
                      <td className="py-3 pl-4">AI drafts; your radiologist signs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-drafted structured reports fit
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A structured, comprehensive AI draft changes the unit economics of the read itself. Instead of dictating each study from a blank page, the radiologist opens a complete, ready-to-sign report — findings organized, measurements populated, normal structures accounted for — and works as an editor and verifier. That is a fundamentally faster motion than authoring from scratch, and it is why a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model approach that produces one complete draft</Link> matters more here than a stack of narrow detectors that each flag a single finding but still leave the report unwritten.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Accountability does not move. With xAID, the AI produces the preliminary draft, an in-house European radiologist reviews every preliminary, and the report is delivered ready to sign — the client's reading radiologist signs the final. What changes is the minutes-per-study, and in a world where the payment per study keeps ratcheting down, minutes-per-study is the number that decides whether the margin math works. Groups weighing the trade can start from the <Link to="/blog/ct-radiology-coverage-costs-2026/" className="text-xaid-blue-strong underline underline-offset-2">full coverage-cost comparison</Link> before committing.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Does the 2027 Medicare Physician Fee Schedule cut radiology payments?',
                    a: 'The headline conversion factor falls. In the proposed CY 2027 Medicare Physician Fee Schedule, released July 14, 2026, the conversion factor for clinicians who are not qualifying APM participants drops to $32.84, a decrease of $0.56 or 1.68% from the 2026 rate of $33.40; for qualifying APM participants it falls to $33.17, down $0.40 or 1.19%. But the overall picture for radiology is not a cut: CMS estimates a net positive overall impact of roughly +2% for radiology under the 2027 proposed rule, because practice-expense and other RVU changes offset the conversion-factor reduction and the efficiency adjustment does not apply to the technical component. The ACR summarized the proposal as indicating overall positive updates for radiology. The rule is a proposal open to public comment through September 14, 2026, not a final number.',
                  },
                  {
                    q: 'What is driving the 2027 conversion-factor cut?',
                    a: 'The main driver is the expiration of a one-year statutory increase. Congress added a 2.50% bump to the conversion factor for CY 2026 only, and that increase is not in effect for CY 2027. That expiring bump outweighs the smaller statutory updates for 2027 (0.75% for qualifying APM participants and 0.25% for others) plus a 0.53% adjustment CMS proposes to account for changes in work RVUs, producing a net decrease.',
                  },
                  {
                    q: 'What is the efficiency adjustment and how does it affect radiology?',
                    a: 'In the CY 2026 final rule, CMS finalized a negative 2.5% efficiency adjustment to the work RVUs of most services that are not billed based on time — on the premise that productivity has risen with better technology and workflows. Diagnostic imaging and many procedural radiology services are not time-based, so they fall within the adjustment\'s scope. CMS has said it plans to recalculate the efficiency adjustment every three years, so it continues to weigh on 2027 professional-fee values even though the next recalculation is not scheduled until 2029. The ACR has argued the theorized efficiencies are outweighed by the growing number of images and reconstructions performed per study.',
                  },
                  {
                    q: 'How can imaging groups protect margins as per-study reimbursement falls?',
                    a: "Even when a specialty nets out positive in a given year, the conversion factor keeps eroding and the payment attached to any single study trends down over time, so a group's margin depends on how many studies each radiologist-hour can turn into a signed, billable report. Hiring more radiologists raises cost in a supply-constrained market; the more durable lever is throughput. AI that drafts a structured, comprehensive report lets a radiologist review and sign more studies per hour rather than dictate each one from scratch. With xAID, the AI produces a ready-to-sign draft, an in-house European radiologist reviews every preliminary, and the client's reading radiologist signs the final report.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: CMS <a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-proposed-rule" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CY 2027 Medicare Physician Fee Schedule proposed rule fact sheet</a>; the net +2% overall radiology impact and "overall positive updates" read from the <a href="https://www.acr.org/Advocacy/Radiology-Economics/Medicare-Medicaid/MPFS" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a>; the "devastating proposal" characterization from the Society of Interventional Radiology, as carried in coverage by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/medicare-releases-2027-physician-fee-schedule-devastating-cuts-radiologist-payments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; rule-issuance context from <a href="https://www.aha.org/news/headline/2026-07-14-cms-issues-cy-2027-physician-fee-schedule-proposed-rule" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">the American Hospital Association</a>. Prior-year (CY 2026 final rule) specialty impacts are labeled as historical context. Figures are rounded as reported and reflect a proposed rule subject to change.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="When pay per study falls, reads per hour is the lever."
          sub="xAID delivers structured, ready-to-sign CT report drafts so your radiologists review and sign more studies per hour — no new hires. Try it on 5 free studies."
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
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments: The $260M Imaging Cut, Explained</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/radiology-private-equity-stay-independent/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology and Private Equity: Staying Independent</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MedicareFeeSchedule2027Radiology;
