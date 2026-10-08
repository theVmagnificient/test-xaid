import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const DiagnosticImagingDelayReductionLessons = () => {
  const post = {
    title: "What Mass General's Breast-Imaging Fix Reveals About Diagnostic Imaging Delay Reduction",
    dateIso: '2026-10-08',
    date: 'October 8, 2026',
    category: 'Workflow & Throughput',
    readingTime: 7,
    description: 'Mass General Brigham cut diagnostic imaging delays from 18 to 14 days with a scheduling fix, not new capacity — a lesson that applies to CT reporting backlogs.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Diagnostic Imaging Delay Reduction: A Case Study | xAID</title>
        <meta name="description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Diagnostic Imaging Delay Reduction: A Case Study | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/diagnostic-imaging-delay-reduction-lessons" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diagnostic Imaging Delay Reduction: A Case Study | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/diagnostic-imaging-delay-reduction-lessons" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/diagnostic-imaging-delay-reduction-lessons",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "diagnostic imaging delay reduction, imaging scheduling triage, diagnostic breast imaging timeliness, CT reporting backlog, radiology workflow redesign"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Mass General Brigham find about diagnostic breast imaging delays?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A study published in the Journal of the American College of Radiology found that before a scheduling fix, patients with concerning symptoms (a new breast mass, nipple changes, skin dimpling) were less likely to get diagnostic imaging within 3 weeks (49.5%) than patients without those symptoms (61%). The queue wasn't sorting by urgency — it was sorting by something else."
              }
            },
            {
              "@type": "Question",
              "name": "What did Mass General Brigham actually change?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In August 2024, following a safety event analysis, the system rolled out a standardized scheduling guideline requiring high-priority diagnostic breast imaging to be completed within 3 weeks of the order. Schedulers were trained to recognize qualifying criteria and given an escalation workflow. No new appointment slots were added and no lower-priority exams were bumped."
              }
            },
            {
              "@type": "Question",
              "name": "What were the measured results of the scheduling guideline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Across 70,823 exams (34,101 before, 36,722 after), 3-week completion rose from 57.4% to 65.3% and median time to completion fell from 18 to 14 days. For symptomatic, high-priority patients specifically, 3-week completion rose from 49.5% to 61.1% — overtaking the rate for lower-priority exams, which fell to 50%."
              }
            },
            {
              "@type": "Question",
              "name": "Does this lesson apply to CT reporting, not just mammography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, as a generalizable operational pattern rather than a direct study finding. The MGH case shows that an unmanaged queue can leave urgent cases waiting no faster than routine ones even when average turnaround looks acceptable. The same risk exists in CT reporting: a practice can hit a reasonable average turnaround time while an actionable finding still sits in an undifferentiated worklist. Explicit triage — flagging which studies need fast resolution, not just reading everything in order — is the fix in both settings."
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
              A hospital system cut diagnostic imaging delays without adding capacity.<br />
              <span className="text-white/60">Here's where the bottleneck actually was.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Mass General Brigham didn't buy another scanner or hire more radiologists to speed up diagnostic breast imaging. It fixed how the queue decided who went first. The result is a case study in where imaging delays actually live — and the lesson travels straight to CT reporting backlogs.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '57% → 65%', label: 'Overall, 3-wk done', sub: 'before vs. after the guideline' },
            { stat: '18 → 14 days', label: 'Median time to completion', sub: 'a 4-day system-wide cut' },
            { stat: '50% → 61%', label: 'Symptomatic pts, 3-wk done', sub: 'had trailed asymptomatic pts' },
            { stat: '~20%', label: 'Exams flagged high-priority', sub: 'no new slots, no bumping' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A scheduling fix, not a new scanner
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A study published in the <a href="https://doi.org/10.1016/j.jacr.2026.09.031" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of the American College of Radiology</a> by Manisha Bahl and colleagues at Mass General Brigham describes a quality-improvement project that most imaging operators will recognize: after a safety event analysis flagged delays in reaching a breast cancer diagnosis, the multisite system built a standardized scheduling guideline rather than adding capacity.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Rolled out in August 2024, the guideline requires that diagnostic breast imaging ordered for specific high-priority indications — a new breast or axillary mass, new nipple changes or unilateral nipple discharge, new skin dimpling or indentation, or new symptoms during active breast cancer treatment — be completed within 3 weeks of the order. Schedulers were trained to recognize those criteria and given an escalation workflow to use when a case qualified. Notably, the system did not create dedicated high-priority appointment slots and did not bump or reschedule lower-priority exams to make room, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/how-mass-general-slashed-delays-diagnostic-breast-imaging" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The detail that makes this worth reading
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The before-and-after averages are good: across 70,823 exams — 34,101 in the year before the guideline, 36,722 in the year after — the 3-week completion rate rose from 57.4% to 65.3%, and median time to completion dropped from 18 to 14 days.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But the number that actually explains why delays existed is the one about symptomatic patients. Before the guideline, patients with a qualifying symptom — the ones with an actual palpable mass or nipple discharge, not a routine follow-up — completed diagnostic imaging within 3 weeks only <strong>49.5%</strong> of the time, a <em>lower</em> rate than the <strong>61%</strong> achieved by patients without those concerning signs. After the guideline, the two rates swapped: symptomatic, high-priority patients reached 3-week completion <strong>61.1%</strong> of the time, while the lower-priority group fell to <strong>50%</strong>.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Metric</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Before guideline</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">After guideline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: 'Overall 3-week completion', before: '57.4%', after: '65.3%' },
                      { metric: 'Median days to completion', before: '18 days', after: '14 days' },
                      { metric: 'Symptomatic (high-priority) 3-week completion', before: '49.5%', after: '61.1%' },
                      { metric: 'Lower-priority exams, 3-week completion', before: '61%', after: '50%' },
                      { metric: 'Exams flagged high-priority', before: '—', after: '~20% (7,200+)' },
                    ].map((row) => (
                      <tr key={row.metric} className="border-b border-gray-100 align-top">
                        <td className="text-[#444] text-[15px] leading-[1.6] font-light py-3 pr-4">{row.metric}</td>
                        <td className="text-[#444] text-[15px] leading-[1.6] font-light py-3 pr-4">{row.before}</td>
                        <td className="text-[#444] text-[15px] leading-[1.6] font-light py-3">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why an unmanaged queue inverts urgency
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The study doesn't editorialize on the pre-implementation inversion, but the operational shape is familiar to anyone who has run a scheduling desk: without an explicit rule telling schedulers which cases are urgent, a queue defaults to sorting by something other than clinical risk — whoever called first, whichever slot was open, whichever exam was easiest to fit in. That can leave a patient with a new palpable mass waiting behind a round of routine follow-ups, simply because nothing in the system flagged the mass as more urgent. Mass General Brigham didn't fix this by working faster or adding staff; it fixed it by adding a rule that named which cases needed to jump the line, and then held schedulers to it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this lesson lands in CT reporting, not mammography
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This is a breast-imaging scheduling study, not a CT study, and nothing here measures CT report turnaround directly. The reason it's worth a CT-reporting operator's attention is structural: the same inversion risk exists wherever work queues up without an explicit urgency signal — and in CT, that queue is the radiologist's reading worklist, not an appointment calendar.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A practice can post a perfectly respectable <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">average turnaround time</Link> and still have an actionable finding — a new pulmonary embolism, a worrisome mass — sitting in an undifferentiated stack of routine reads, exactly the way a symptomatic breast-imaging patient once waited behind routine follow-ups at Mass General Brigham. The average hides the problem because most studies in the queue genuinely are routine; it's the minority that needs to move faster, and an average can't tell you whether it did.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The MGH fix generalizes cleanly: name the criteria that make a case urgent, build an explicit rule that routes those cases ahead of the rest, and measure the resolution pathway for that subgroup specifically — not just the system-wide average. In CT reporting, that means a worklist that flags studies with time-sensitive findings for priority read, rather than relying on first-in-first-out order and hoping the average stays acceptable.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                AI-assisted CT reporting addresses this at the drafting stage rather than the scheduling desk: a structured, comprehensive report draft is produced as soon as the study lands, so a time-sensitive finding doesn't have to wait behind routine studies to get a first read. xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign — which shortens the path from "study acquired" to "finding resolved" for the cases where that path matters most, without requiring a hospital-wide scheduling overhaul to do it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did Mass General Brigham find about diagnostic breast imaging delays?',
                    a: "A study published in the Journal of the American College of Radiology found that before a scheduling fix, patients with concerning symptoms (a new breast mass, nipple changes, skin dimpling) were less likely to get diagnostic imaging within 3 weeks (49.5%) than patients without those symptoms (61%). The queue wasn't sorting by urgency — it was sorting by something else.",
                  },
                  {
                    q: 'What did Mass General Brigham actually change?',
                    a: 'In August 2024, following a safety event analysis, the system rolled out a standardized scheduling guideline requiring high-priority diagnostic breast imaging to be completed within 3 weeks of the order. Schedulers were trained to recognize qualifying criteria and given an escalation workflow. No new appointment slots were added and no lower-priority exams were bumped.',
                  },
                  {
                    q: 'What were the measured results of the scheduling guideline?',
                    a: 'Across 70,823 exams (34,101 before, 36,722 after), 3-week completion rose from 57.4% to 65.3% and median time to completion fell from 18 to 14 days. For symptomatic, high-priority patients specifically, 3-week completion rose from 49.5% to 61.1% — overtaking the rate for lower-priority exams, which fell to 50%.',
                  },
                  {
                    q: 'Does this lesson apply to CT reporting, not just mammography?',
                    a: 'Yes, as a generalizable operational pattern rather than a direct study finding. The MGH case shows that an unmanaged queue can leave urgent cases waiting no faster than routine ones even when average turnaround looks acceptable. The same risk exists in CT reporting: a practice can hit a reasonable average turnaround time while an actionable finding still sits in an undifferentiated worklist. Explicit triage — flagging which studies need fast resolution, not just reading everything in order — is the fix in both settings.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: M. Bahl et al., "Impact of a High-Priority Scheduling Guideline on Diagnostic Breast Imaging Timeliness Across a Multisite System," <em>Journal of the American College of Radiology</em> (2026), <a href="https://doi.org/10.1016/j.jacr.2026.09.031" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2026.09.031</a>, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/how-mass-general-slashed-delays-diagnostic-breast-imaging" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Don't let urgent findings wait in a routine queue."
          sub="AI-drafted, radiologist-reviewed CT reports that are ready-to-sign as soon as a study lands. Try it on 5 free studies."
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
              <Link to="/blog/radiology-efficiency-ai-adoption-study/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow & Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A 20-Center Study Measured Real Radiology Efficiency Gains From AI</div>
              </Link>
              <Link to="/blog/reduce-patient-no-shows-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow & Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A New Calculator to Reduce Patient No-Shows in Imaging</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default DiagnosticImagingDelayReductionLessons;
