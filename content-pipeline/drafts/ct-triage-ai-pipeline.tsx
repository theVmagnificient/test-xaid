import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const CtTriageAiPipeline = () => {
  const post = {
    title: 'CT Triage AI: Where Queue Prioritization Fits Next to Report Drafting',
    dateIso: '2026-07-26',
    date: 'July 26, 2026',
    category: 'AI Workflow & Triage',
    readingTime: 7,
    description:
      "A Stanford simulation study found AI-based CT queue prioritization cut the 90th-percentile wait for the most urgent ED patients by 43 minutes. Here's how that acquisition-side lever fits next to reading-worklist AI and report-drafting AI in the CT pipeline — three tools, three different clocks.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CT Triage AI: Where It Fits in Radiology | xAID</title>
        <meta name="description" content="A Stanford study cut ED CT wait times with queue-prioritization AI. See how that acquisition-side lever complements reading-worklist AI and report-drafting AI." />
        <link rel="canonical" href="https://xaid.ai/blog/ct-triage-ai-pipeline/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CT Triage AI: Where It Fits in Radiology | xAID" />
        <meta property="og:description" content="A Stanford study cut ED CT wait times with queue-prioritization AI. See how that acquisition-side lever complements reading-worklist AI and report-drafting AI." />
        <meta property="og:url" content="https://xaid.ai/blog/ct-triage-ai-pipeline/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CT Triage AI: Where It Fits in Radiology | xAID" />
        <meta name="twitter:description" content="A Stanford study cut ED CT wait times with queue-prioritization AI. See how that acquisition-side lever complements reading-worklist AI and report-drafting AI." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ct-triage-ai-pipeline" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ct-triage-ai-pipeline",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "ct triage ai, CT queue prioritization, AI worklist reprioritization, radiology reading queue, AI report drafting, emergency department CT wait times"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is CT triage AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "\"CT triage AI\" covers at least two different tools that are often lumped together: acquisition-queue prioritization, which decides which ordered CT gets scanned next, and reading-worklist reprioritization, which decides which completed scan a radiologist reads next. Both reorder a queue by predicted urgency instead of arrival time, but they act on different points in the pipeline before a report exists."
              }
            },
            {
              "@type": "Question",
              "name": "What did the Stanford study find about AI-based CT queue prioritization?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers at Stanford trained a machine-learning model on about 314,000 emergency department visits to predict, at the moment a CT is ordered, whether it will likely show an actionable finding. In a discrete-event simulation run on a 20,795-study held-out test set, using that prediction to reorder the scanner queue cut the median wait for actionable scans by about 10.8 minutes and cut the 90th-percentile wait for the most urgent cases by 43.36 minutes. For lower-priority, non-actionable studies, median wait also improved slightly (about 5.8 minutes), but the 90th-percentile wait for that group increased by about 14.5 minutes. The study was published in Radiology: Artificial Intelligence in July 2026."
              }
            },
            {
              "@type": "Question",
              "name": "How is this different from AI that reorders a radiologist's reading worklist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Stanford study targets the wait before the scan is acquired — which patient gets on the scanner next. Reading-worklist reprioritization is a separate, earlier-established category that acts after the scan exists, reordering which completed study a radiologist opens next. A 2021 RSNA study on head CT for intracranial hemorrhage found active worklist reprioritization cut turnaround for AI-flagged positive cases to about 12.0 minutes versus about 15.75 minutes under standard ordering — and found that simply flagging a case without reordering the queue had no measurable effect."
              }
            },
            {
              "@type": "Question",
              "name": "Where does report-drafting AI fit if queue-prioritization AI already exists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Queue-prioritization tools change the order studies are scanned or read in; they don't write the report. Once a radiologist opens a case, report-drafting AI produces a structured, comprehensive draft for review rather than a blank template, aiming to cut the time from opened case to ready-to-sign report. The three levers — acquisition queue, reading queue, and report drafting — address different clocks in the same pipeline and can run at the same time without conflicting."
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
                AI Workflow &amp; Triage
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              CT triage AI is having a moment.<br />
              <span className="text-white/60">Here's exactly where it saves time — and where it doesn't.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new Stanford simulation study reorders the emergency-department CT queue before a patient is even scanned. It's a real result — and a chance to map the whole pipeline. AI can touch the CT clock in at least three distinct places, and they're not competing for the same job.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '43 min', label: '90th-percentile wait cut', sub: 'for the most urgent CT patients' },
                { stat: '10.8 min', label: 'Median wait cut', sub: 'for scans with actionable findings' },
                { stat: '48% → 57%', label: 'Actionable exams read', sub: 'within one hour of order' },
                { stat: '~314,000', label: 'ED visits', sub: 'used to build the model' },
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
                A wait nobody had optimized: before the scan even happens
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most AI triage coverage is about what happens after a CT is acquired — flagging an abnormal image so a radiologist reads it sooner. A study out of Stanford, published in <em>Radiology: Artificial Intelligence</em> and <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-based-exam-queue-tool-prioritizes-ct-scans-ed" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">covered by <em>Radiology Business</em></a>, targets an earlier and less-examined wait: the time between when an emergency-department clinician orders a CT and when the patient actually gets scanned.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers trained a machine-learning model (LightGBM) on roughly <strong>314,000</strong> emergency department visits from August 2020 to August 2024 to predict, at the moment a CT is <em>ordered</em>, whether the scan will likely reveal an actionable finding. On a held-out test set of 20,795 studies — of which about 37% turned out to be actionable — the model reached an AUROC of 0.766, per <a href="https://doi.org/10.1148/ryai.260110" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">the published study</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That prediction becomes the input to a scanner queue: instead of scanning patients strictly first-come-first-served, the busiest CT scanner in the ED reorders around predicted urgency.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the simulation found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Because reordering a live ED scanner queue is hard to test directly, the team ran a discrete-event simulation on that same 20,795-study held-out test set, comparing AI-driven queue order against standard first-in-first-out scheduling. (An earlier Stanford AIMI talk describing this research referenced a larger, 131,027-study simulation cohort used to build and calibrate the model; the headline figures below are the ones reported in the peer-reviewed paper for the 20,795-study test set.) The results, as reported in the study:
              </p>
              <ul className="list-disc pl-5 text-[#444] text-[15px] leading-[1.65] font-light mb-4 space-y-2">
                <li>Median wait time for actionable studies dropped by about <strong>10.8 minutes</strong>.</li>
                <li>The 90th-percentile wait — the tail that captures the sickest, most time-sensitive patients — dropped by about <strong>43.36 minutes</strong>.</li>
                <li>The share of actionable exams completed within an hour of being ordered rose from about <strong>48%</strong> to <strong>57%</strong>.</li>
                <li>Lower-priority, non-actionable studies saw a mixed result: their median wait also improved slightly, by about 5.8 minutes — but the 90th-percentile (tail) wait for this group increased by about 14.5 minutes, meaning some lower-priority patients waited longer under the AI-ordered queue even as the typical case got faster.</li>
                <li>The model captured an estimated <strong>80–87%</strong> of the theoretical maximum benefit possible with a perfect predictor, and the approach runs on data already captured at order time, with no new imaging hardware required.</li>
              </ul>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Worth stating plainly: this is a retrospective simulation, not a live clinical trial. It shows what a reordered queue would have done to historical wait times, not a measured outcome from running the system on real patients. That's a reasonable first step for a workflow change this operationally disruptive — but it's a different level of evidence than a deployed system audit.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Three places AI touches the CT clock — and they're not the same tool
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "CT triage AI" is used loosely enough that it's worth separating what's actually being reordered. A CT study passes through at least three distinct queues before a signed report exists, and each one has its own AI category with its own evidence base:
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Pipeline stage</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Order → Scan</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Scan → Read</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Read → Signed report</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">What's reordered</td>
                      <td className="py-3 pr-4">Which patient gets scanned next</td>
                      <td className="py-3 pr-4">Which completed study is read next</td>
                      <td className="py-3">Nothing reordered — the report itself is drafted</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">AI category</td>
                      <td className="py-3 pr-4">Acquisition-queue prioritization</td>
                      <td className="py-3 pr-4">Reading-worklist reprioritization</td>
                      <td className="py-3">Report-drafting AI</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Evidence cited here</td>
                      <td className="py-3 pr-4">Stanford ED simulation, 2026</td>
                      <td className="py-3 pr-4">RSNA head-CT/ICH worklist study, 2021</td>
                      <td className="py-3">Structured draft generation, radiologist-reviewed</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">Patient feels it as</td>
                      <td className="py-3 pr-4">Shorter wait before the scan</td>
                      <td className="py-3 pr-4">Shorter wait after the scan, before it's read</td>
                      <td className="py-3">Shorter wait for the finished, signed report</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The middle column has the longer track record. A 2021 study in <em>Radiology: Artificial Intelligence</em> tested active reprioritization of the radiologist's reading worklist for head CTs, using an AI tool to flag likely intracranial hemorrhage. Across roughly 6,700 exams, turnaround time for AI-positive cases fell to about <strong>12.0 minutes</strong> versus about <strong>15.75 minutes</strong> under the historical baseline — but only when the system actively reordered the queue. Simply notifying a radiologist with a flag, without moving the case up the list, <a href="https://doi.org/10.1148/ryai.2020200024" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">produced no measurable benefit</a>. It's a useful reminder that "the AI flagged it" and "the AI reordered the queue" are not the same intervention, and the evidence supports the latter, not the former.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The right-hand column — report drafting — is a different job entirely. It doesn't decide who gets scanned or read first; it changes how much time a radiologist spends producing the report once a case is already open.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why these levers stack instead of compete
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of these three tools does the other's job, and none of them requires ripping out the others. A department could run acquisition-queue prioritization to decide who gets scanned next, reading-worklist reprioritization to decide which completed study a radiologist opens next, and report-drafting AI to cut the time spent producing each report once it's open — three separate levers, each shortening a different segment of the order-to-signed-report clock.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'They act on different queues',
                    desc: "Acquisition-queue AI reorders the scanner schedule. Reading-worklist AI reorders the radiologist's inbox. Report-drafting AI doesn't reorder anything — it shortens the work inside whichever case is already open. There's no scheduling conflict between them.",
                  },
                  {
                    title: 'The savings are additive, not redundant',
                    desc: 'A minute saved getting a patient onto the scanner sooner and a minute saved drafting the report are both minutes off the total time to diagnosis. Stacking the three levers compounds the total reduction rather than double-counting the same minute.',
                  },
                  {
                    title: 'Evidence quality differs by lever — check which you\'re buying',
                    desc: "The Stanford result above is a simulation; the 2021 worklist study is a prospective implementation with real turnaround data. Before adopting any triage-labeled tool, it's worth asking which queue it actually reorders and what kind of evidence backs the claim.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI report drafting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Queue-prioritization tools — whether they reorder the scanner or the reading list — get the right study in front of the right radiologist sooner. They stop there; they don't write anything. The remaining segment of the clock is the time a radiologist spends turning an open case into a finished report, and that's the segment <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">AI report drafting</Link> addresses: a structured, comprehensive draft generated from the images, ready for the radiologist to review, edit, and turn into a ready-to-sign report — with xAID's in-house radiologist reviewing every preliminary before it reaches that stage. It's a complementary lever to CT triage AI, not a substitute for it, and not a competitor to it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is CT triage AI?',
                    a: '"CT triage AI" covers at least two different tools that are often lumped together: acquisition-queue prioritization, which decides which ordered CT gets scanned next, and reading-worklist reprioritization, which decides which completed scan a radiologist reads next. Both reorder a queue by predicted urgency instead of arrival time, but they act on different points in the pipeline before a report exists.',
                  },
                  {
                    q: 'What did the Stanford study find about AI-based CT queue prioritization?',
                    a: 'Researchers at Stanford trained a machine-learning model on about 314,000 emergency department visits to predict, at the moment a CT is ordered, whether it will likely show an actionable finding. In a discrete-event simulation run on a 20,795-study held-out test set, using that prediction to reorder the scanner queue cut the median wait for actionable scans by about 10.8 minutes and cut the 90th-percentile wait for the most urgent cases by 43.36 minutes. For lower-priority, non-actionable studies, median wait also improved slightly (about 5.8 minutes), but the 90th-percentile wait for that group increased by about 14.5 minutes. The study was published in Radiology: Artificial Intelligence in July 2026.',
                  },
                  {
                    q: "How is this different from AI that reorders a radiologist's reading worklist?",
                    a: 'The Stanford study targets the wait before the scan is acquired — which patient gets on the scanner next. Reading-worklist reprioritization is a separate, earlier-established category that acts after the scan exists, reordering which completed study a radiologist opens next. A 2021 RSNA study on head CT for intracranial hemorrhage found active worklist reprioritization cut turnaround for AI-flagged positive cases to about 12.0 minutes versus about 15.75 minutes under standard ordering — and found that simply flagging a case without reordering the queue had no measurable effect.',
                  },
                  {
                    q: 'Where does report-drafting AI fit if queue-prioritization AI already exists?',
                    a: "Queue-prioritization tools change the order studies are scanned or read in; they don't write the report. Once a radiologist opens a case, report-drafting AI produces a structured, comprehensive draft for review rather than a blank template, aiming to cut the time from opened case to ready-to-sign report. The three levers — acquisition queue, reading queue, and report drafting — address different clocks in the same pipeline and can run at the same time without conflicting.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Stanford CT acquisition-queue prioritization study, published in <em>Radiology: Artificial Intelligence</em> (<a href="https://doi.org/10.1148/ryai.260110" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI 10.1148/ryai.260110</a>), as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-based-exam-queue-tool-prioritizes-ct-scans-ed" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Reading-worklist reprioritization figures from a 2021 study in <em>Radiology: Artificial Intelligence</em> (<a href="https://doi.org/10.1148/ryai.2020200024" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI 10.1148/ryai.2020200024</a>). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Triage gets the study to the radiologist. xAID gets the report out."
          sub="Report-drafting AI is the complementary lever to CT triage — a structured, radiologist-reviewed draft the moment a case is opened. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Cut MRI Wait Times — But Faster Scans Just Move the Bottleneck</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CtTriageAiPipeline;
