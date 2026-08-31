import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const ReducePatientNoShowsRadiology = () => {
  const post = {
    title: 'A New Calculator to Reduce Patient No-Shows in Imaging',
    dateIso: '2026-08-31',
    date: 'August 31, 2026',
    category: 'Workflow & Throughput',
    readingTime: 7,
    description: "A JACR study out of University Hospitals Cleveland built a calculator that flags which imaging appointments are likely to no-show before they happen. It closes one leak in scanner capacity — but the reporting backlog behind every scan that does happen is still open.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>New Calculator to Reduce Patient No-Shows in Imaging | xAID</title>
        <meta name="description" content="A JACR study built a calculator that flags high-risk imaging no-shows before they happen — but the reporting backlog behind completed scans is still open." />
        <link rel="canonical" href="https://xaid.ai/blog/reduce-patient-no-shows-radiology/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="New Calculator to Reduce Patient No-Shows in Imaging | xAID" />
        <meta property="og:description" content="A JACR study built a calculator that flags high-risk imaging no-shows before they happen — but the reporting backlog behind completed scans is still open." />
        <meta property="og:url" content="https://xaid.ai/blog/reduce-patient-no-shows-radiology/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Calculator to Reduce Patient No-Shows in Imaging | xAID" />
        <meta name="twitter:description" content="A JACR study built a calculator that flags high-risk imaging no-shows before they happen. It fixes one capacity leak — the reporting backlog is still open." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/reduce-patient-no-shows-radiology/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/reduce-patient-no-shows-radiology/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "reduce patient no-shows, imaging no-show calculator, radiology scheduling AI, CT report turnaround time, radiology capacity"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the new radiology no-show calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers at University Hospitals Cleveland, led by first author Charit Tippareddy with corresponding author Wyatt Anderson, MD, built a predictive model — published in the Journal of the American College of Radiology on August 27, 2026 — that scores each scheduled outpatient imaging appointment on its likelihood of becoming a no-show. It uses 16 predictors, including the Area Deprivation Index, and reached an area-under-the-curve of 0.76 on a dataset of nearly 33,000 appointments from about 10,000 patients."
              }
            },
            {
              "@type": "Question",
              "name": "How much do patient no-shows cost imaging providers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The JACR study authors estimated no-shows cost their health system about $58 million a year. A separate, earlier study in Current Problems in Diagnostic Radiology estimated a typical U.S. academic medical center loses roughly $1 million a year in uncaptured revenue to imaging no-shows, concentrated in high-value exams like MRI, ultrasound, and mammography."
              }
            },
            {
              "@type": "Question",
              "name": "Does reducing no-shows also reduce reporting delays?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. No-shows and reporting delays are two separate leaks in imaging capacity. A no-show wastes a scanner slot that was never used. A reporting backlog wastes a scan that already happened but is waiting for a radiologist to read it. Fixing scheduling with a no-show calculator does not touch the second problem — a scan filled by better scheduling still has to be read and reported before it delivers any clinical or financial value."
              }
            },
            {
              "@type": "Question",
              "name": "What can imaging centers do about both leaks at once?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On the demand side, predictive no-show models let staff target outreach — reminder calls, transportation help, or overbooking — at the appointments most likely to be missed, rather than treating every patient the same. On the supply side, AI-assisted CT reporting produces a structured, ready-to-sign draft for every completed scan so the radiologist's time goes toward final review and signature rather than dictating from scratch, shortening the time between a scan happening and a report reaching the patient's chart."
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
              Imaging is fixing the scheduling leak.<br />
              <span className="text-white/60">The reporting leak is still open.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new calculator out of University Hospitals Cleveland flags which patients are likely to miss their scan before it happens. It's a genuine fix for wasted scanner slots — but it doesn't touch the backlog of scans that already happened and are still waiting on a report.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '0.76 AUC', label: 'Model accuracy', sub: 'predicting no-shows' },
            { stat: '$58M/yr', label: 'No-show cost, estimated', sub: 'per the study authors' },
            { stat: '15% vs 32%', label: 'No-show rate by area', sub: 'least vs most deprived' },
            { stat: 'Top 10%', label: 'Highest-risk appointments', sub: 'catch ~26% of no-shows' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the calculator actually does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team at University Hospitals Cleveland's Department of Radiology, with Charit Tippareddy as first author and Wyatt Anderson, MD, as corresponding author, built a prediction model aimed squarely at a problem every outpatient imaging center recognizes: patients who book a scan and never show up. The study was published <a href="https://doi.org/10.1016/j.jacr.2026.08.015" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">in the <em>Journal of the American College of Radiology</em></a> on August 27, 2026, and covered by <a href="https://radiologybusiness.com/topics/patient-care/radiologists-develop-calculator-predicting-imaging-no-shows" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The researchers analyzed nearly <strong>33,000</strong> outpatient radiology appointments across roughly <strong>10,000</strong> patients scheduled in 2023 and 2024. The sample was built as a 1:1 case-control set — half of the patients had missed at least one appointment in that window and half had not — a design choice made to give the model enough no-show examples to learn from; it does not mean half of all real-world appointments are missed (the study's underlying population no-show rate was 3.9%). From that data, the team built a model using <strong>16 predictors</strong>, notably including the Area Deprivation Index (ADI), a composite measure of neighborhood socioeconomic disadvantage. No-show rates ranged from <strong>15%</strong> in the least deprived neighborhoods to <strong>32%</strong> in the most deprived — more than double.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The model reached an area under the receiver operating characteristic curve (AUC) of <strong>0.76</strong> — moderate discrimination in statistical terms, but operationally useful: targeting just the top 10% highest-risk appointments would catch about <strong>26%</strong> of all no-shows that occur. The authors also reported a "number needed to intervene" of <strong>1.8</strong>, meaning outreach would need to reach fewer than two of the flagged, high-risk appointments, on average, to find one that would otherwise have been a no-show. In their own words, the authors concluded the calculator "demonstrates moderate discrimination for predicting no-shows and enables prospective targeted outreach."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The stakes are not small. The study authors put the annual cost of no-shows to their health system at roughly <strong>$58 million</strong>. That figure is consistent with earlier research: a study in <em>Current Problems in Diagnostic Radiology</em>, led by Rebecca J. Mieloszyk, PhD, and covered by <a href="https://radiologybusiness.com/topics/medical-practice-management/annual-uncaptured-revenues-radiology-exams-could-equal-1m" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, estimated a typical U.S. academic medical center loses about <strong>$1 million</strong> a year in uncaptured revenue to no-shows, concentrated in high-value exams like brain MRI, abdominal ultrasound, and mammography screening.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two leaks, not one
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's worth being precise about what a no-show calculator fixes, because it's easy to conflate it with the industry's other capacity problem. Outpatient imaging capacity leaks at two distinct points, and they sit on opposite sides of the same scan:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The scheduling leak — a scan that never happens',
                    desc: "A no-show is a booked scanner slot that goes unused. The exam is never acquired, the revenue is never earned, and — more importantly for the patient — the diagnostic question the scan was ordered to answer goes unanswered. This is the demand-side problem the JACR calculator targets: predict who is unlikely to show, then intervene (a reminder call, transportation help, a backup patient on standby) before the appointment time arrives.",
                  },
                  {
                    title: 'The reporting leak — a scan that happens but sits unread',
                    desc: "A completed scan that sits in a queue waiting for a radiologist to dictate a report is a different kind of waste. The scanner time was spent, the patient showed up, but the clinical and financial value of that exam is delayed — sometimes for days — until a signed report exists. This is the supply-side problem: not enough radiologist time relative to scan volume.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Both leaks reduce the same thing — the effective throughput of an imaging center — but a fix for one does nothing for the other. A calculator that fills every open slot with a patient who actually shows up simply produces more completed scans. Every one of those still has to be read, and the radiologist workforce reading them hasn't grown. Full context on how large that reporting gap already is — ACR guidance calls for routine CT reads within 24 hours, and <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">actual turnaround often runs 36–72 hours</Link> — shows why closing the scheduling leak without also addressing reporting capacity just moves the bottleneck downstream.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this matters for outpatient imaging centers specifically
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Outpatient centers have more incentive than most to solve the scheduling side: no-shows are pure lost revenue with no offsetting benefit, and the ADI-linked disparity the JACR study found (32% no-shows in the most deprived areas versus 15% in the least) means the problem is not evenly distributed — it concentrates in the patient populations centers most need to reach effectively.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But a center that adopts a no-show calculator and stops there is optimizing only the front half of the pipeline. Every additional completed scan the calculator produces is also an additional report that needs to be read, checked, and signed. Centers that have already trimmed scheduling waste and are now hitting a reporting ceiling — long turnaround times, radiologists behind on dictation, after-hours studies piling up — are running into the second leak, not the first.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's AI CT reporting doesn't touch the scheduling side of the problem at all — that's exactly the kind of workflow the JACR calculator is built for, and outpatient centers should be looking at tools like it. What xAID addresses is the second leak: for every scan that does get completed, the AI drafts a structured, comprehensive report, xAID's in-house radiologist reviews the preliminary, and it arrives ready-to-sign — so a completed scan converts into a finished, billable report faster, instead of sitting in a reporting queue. Fixing the scheduling leak fills the pipe; fixing the reporting leak keeps what flows through it from backing up.
              </p>

              {/* Comparison table */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The two leaks, side by side
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Scheduling leak (no-shows)</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Reporting leak (backlog)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Side of the pipeline', 'Demand-side: patient behavior', 'Supply-side: radiologist capacity'],
                      ['What is wasted', 'A booked scanner slot, never used', 'A completed scan, sitting unread'],
                      ['2026 evidence', 'JACR calculator, AUC 0.76, ~33,000 appointments', 'ACR 24-hour target vs. real-world 36–72 hour reads'],
                      ['Typical fix', 'Risk scoring, targeted reminders, overbooking', 'AI-drafted, ready-to-sign reports for radiologist review'],
                      ['Estimated cost', '~$1M/year at a typical academic center', 'Delayed diagnosis, delayed billing, after-hours backlog'],
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

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the new radiology no-show calculator?',
                    a: 'Researchers at University Hospitals Cleveland, led by first author Charit Tippareddy with corresponding author Wyatt Anderson, MD, built a predictive model — published in the Journal of the American College of Radiology on August 27, 2026 — that scores each scheduled outpatient imaging appointment on its likelihood of becoming a no-show. It uses 16 predictors, including the Area Deprivation Index, and reached an area-under-the-curve of 0.76 on a dataset of nearly 33,000 appointments from about 10,000 patients.',
                  },
                  {
                    q: 'How much do patient no-shows cost imaging providers?',
                    a: 'The JACR study authors estimated no-shows cost their health system about $58 million a year. A separate, earlier study in Current Problems in Diagnostic Radiology estimated a typical U.S. academic medical center loses roughly $1 million a year in uncaptured revenue to imaging no-shows, concentrated in high-value exams like MRI, ultrasound, and mammography.',
                  },
                  {
                    q: 'Does reducing no-shows also reduce reporting delays?',
                    a: 'No. No-shows and reporting delays are two separate leaks in imaging capacity. A no-show wastes a scanner slot that was never used. A reporting backlog wastes a scan that already happened but is waiting for a radiologist to read it. Fixing scheduling with a no-show calculator does not touch the second problem — a scan filled by better scheduling still has to be read and reported before it delivers any clinical or financial value.',
                  },
                  {
                    q: 'What can imaging centers do about both leaks at once?',
                    a: "On the demand side, predictive no-show models let staff target outreach — reminder calls, transportation help, or overbooking — at the appointments most likely to be missed, rather than treating every patient the same. On the supply side, AI-assisted CT reporting produces a structured, ready-to-sign draft for every completed scan so the radiologist's time goes toward final review and signature rather than dictating from scratch, shortening the time between a scan happening and a report reaching the patient's chart.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: study by Charit Tippareddy et al. (corresponding author Wyatt Anderson, MD), <em>Journal of the American College of Radiology</em> (August 27, 2026), as reported by <a href="https://radiologybusiness.com/topics/patient-care/radiologists-develop-calculator-predicting-imaging-no-shows" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; earlier no-show revenue estimate from Rebecca J. Mieloszyk, PhD, et al., <em>Current Problems in Diagnostic Radiology</em>, as reported by <a href="https://radiologybusiness.com/topics/medical-practice-management/annual-uncaptured-revenues-radiology-exams-could-equal-1m" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Close the other leak"
          sub="If scheduling is under control and reporting turnaround is now the bottleneck, see what AI-drafted, ready-to-sign CT reports do to your queue. Start with 5 free studies."
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
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/how-ai-cuts-mri-wait-times/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow &amp; Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Cut MRI Wait Times 60% — But Moved the Bottleneck</div>
              </Link>
              <Link to="/blog/radiology-practice-consolidation-wait-times/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Practice Management</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A Hospital Bought a Radiology Practice. Wait Times Got Worse.</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ReducePatientNoShowsRadiology;
