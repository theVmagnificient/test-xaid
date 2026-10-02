import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologistWorkflowInterruptions = () => {
  const post = {
    title: 'Radiologist Workflow Interruptions: What a New JACR Study on Phone Calls Found',
    dateIso: '2026-10-02',
    date: 'October 2, 2026',
    category: 'Workflow & Throughput',
    readingTime: 7,
    description: "A JACR study cut daily phone interruptions to radiologists by 55% with EMR chat and education. What it reveals about radiologist workflow interruptions.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiologist Workflow Interruptions: What JACR Found | xAID</title>
        <meta name="description" content="A JACR study cut daily phone interruptions to radiologists by 55% with EMR chat and education. What it reveals about radiologist workflow interruptions." />
        <link rel="canonical" href="https://xaid.ai/blog/radiologist-workflow-interruptions" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiologist Workflow Interruptions: What JACR Found | xAID" />
        <meta property="og:description" content="A JACR study cut daily phone interruptions to radiologists by 55% with EMR chat and education. What it reveals about radiologist workflow interruptions." />
        <meta property="og:url" content="https://xaid.ai/blog/radiologist-workflow-interruptions" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiologist Workflow Interruptions: What JACR Found | xAID" />
        <meta name="twitter:description" content="A JACR study cut daily phone interruptions to radiologists by 55% with EMR chat and education. What it reveals about radiologist workflow interruptions." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiologist-workflow-interruptions" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiologist-workflow-interruptions",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiologist workflow interruptions, radiology phone call interruptions, radiologist interruptions study, radiology workflow efficiency, JACR radiology study"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the JACR study on radiologist workflow interruptions find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 study in the Journal of the American College of Radiology, known as REDUCE-CALL, compared 20 matched weekdays before and after a Melbourne hospital's radiology department added an EMR-integrated chat tool plus targeted staff education. Median daily telephone calls to the duty radiologist fell from 181 to 82 — a 55% drop — while the number of studies protocolled per day was essentially unchanged."
              }
            },
            {
              "@type": "Question",
              "name": "Did fewer phone calls mean radiologists got less done?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Studies protocolled per day held steady, 92 before versus 97 after the change, a difference the researchers found was not statistically significant. Total communication volume, calls plus chat messages combined, also dropped 43%, and workload-adjusted contacts fell 44% (rate ratio 0.56), showing the reduction was not just calls shifting to another channel."
              }
            },
            {
              "@type": "Question",
              "name": "Why are phone calls considered a tax on radiologist read time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every call to a reporting radiologist forces a context switch away from image interpretation — a disruption pattern widely understood in clinical workflow research to slow turnaround and raise error risk. The REDUCE-CALL authors describe frequent telephone calls to radiology departments as 'a major source of workflow interruption and inefficiency' — a cost that rarely appears in productivity metrics because it is measured in reporting minutes, not an explicit line item."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI-assisted reporting relate to reducing radiologist interruptions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study tested a communication fix, not AI reporting, and that distinction matters. But a documented share of radiology check-ins are referrers asking what a scan shows or when it will be ready — questions a clearer, faster-available report answers before the phone rings. A structured, comprehensive AI-drafted report that reaches a radiologist's worklist quickly, reviewed in-house and delivered ready-to-sign, is a complementary way to shrink that same category of interruption rather than a substitute for communication-workflow fixes like REDUCE-CALL."
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
              Radiologist workflow interruptions:<br />
              <span className="text-white/60">what a new JACR study on phone calls found</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A Melbourne hospital cut daily phone calls to its duty radiologist by more than half without protocolling a single study less. The study behind it puts a number on something radiology has long suspected: the phone, not the workload, is often the bottleneck.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '-55%', label: 'Daily phone calls', sub: '181 → 82 calls/day' },
            { stat: '-43%', label: 'Total interruptions', sub: 'calls + chat combined' },
            { stat: '0.56', label: 'Adjusted contact rate ratio', sub: 'per 100 studies protocolled' },
            { stat: '20', label: 'Weekdays compared', sub: 'matched pre- vs post-intervention' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The call nobody counts as "work"
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Turnaround time gets measured. Volume gets measured. The phone ringing in the middle of a report rarely does — even though every radiologist who has taken an on-call shift knows it is one of the biggest drags on actually getting through the worklist. A referring clinician calling to check on a protocol, ask when a scan will be read, or confirm a finding forces a context switch away from image interpretation, and that switch has a cost even after the call ends.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A study newly published in the <em>Journal of the American College of Radiology</em> (JACR) puts a concrete number on that cost — and on what happens when a department actually targets it, as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/how-radiology-department-drastically-reduced-incoming-calls-rest-hospital" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The REDUCE-CALL study: what Royal Melbourne Hospital changed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers from the Royal Melbourne Hospital and the University of Melbourne ran a retrospective pre- and post-intervention study — nicknamed <a href="https://doi.org/10.1016/j.jacr.2026.09.028" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">REDUCE-CALL</a> — comparing workflow metrics across 20 matched weekdays before and after the radiology department rolled out an EMR-integrated chat function for asynchronous messaging, paired with targeted staff education on when a message beats a phone call.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The primary outcome was simple: how many in-hours telephone calls reached the duty radiologist per weekday. Secondary outcomes tracked whether cutting calls came at the cost of getting studies protocolled, and how quickly staff actually read and responded to the new chat channel — because a communication fix that just gets ignored isn't a fix.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The numbers: calls down, output unchanged
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The headline result is the kind of "drastic" reduction the department set out to achieve, and it held up statistically:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[15px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">Metric (per weekday)</th>
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">Before</th>
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">After</th>
                      <th className="text-left py-3 font-medium text-[#0D0D0D]">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Telephone calls to duty radiologist</td>
                      <td className="py-3 pr-4 text-[#444] font-light">181 (median)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">82 (median)</td>
                      <td className="py-3 text-[#666] font-light">-55%, p&lt;0.001</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Total communication events (calls + chat)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">181 (median)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">104 (median)</td>
                      <td className="py-3 text-[#666] font-light">-43%, p&lt;0.001</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Studies protocolled</td>
                      <td className="py-3 pr-4 text-[#444] font-light">92 (median)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">97 (median)</td>
                      <td className="py-3 text-[#666] font-light">Not significant, p=0.29</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Workload-adjusted contacts (per 100 studies)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">205</td>
                      <td className="py-3 pr-4 text-[#444] font-light">114</td>
                      <td className="py-3 text-[#666] font-light">Rate ratio 0.56, p&lt;0.001</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two details make the result more convincing than a simple before/after headline. First, total communication volume — calls plus the new chat messages combined — still fell 43%, which means staff weren't just routing the same number of interruptions through a new channel; the overall contact burden genuinely shrank. Second, the number of studies protocolled per day was statistically unchanged, so the drop in calls wasn't a side effect of radiologists doing less work.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The chat channel itself was answered promptly rather than left to languish: the median time for a message to be read was 8 minutes, and the median time to get a reply was 14 minutes — fast enough to replace a phone call for most non-urgent requests without leaving the sender waiting.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is bigger than one Melbourne hospital
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The REDUCE-CALL authors frame the underlying problem plainly: "frequent telephone calls to radiology departments are a major source of workflow interruption and inefficiency." That framing matters because the fix they tested — an EMR chat channel and some education — is deliberately low-tech. It didn't require new imaging software or a change to how reports are generated. It required making it easy to ask a non-urgent question asynchronously instead of by phone, and telling staff that was now the expectation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A related JACR project gets at why so many of those calls happen in the first place. Researchers at the University of Pennsylvania built a real-time dashboard showing emergency department staff the status of pending radiology exams, after finding that <a href="https://doi.org/10.1016/j.jacr.2024.11.024" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">report status information wasn't readily available to ED staff</a> any other way. Once deployed across four EDs, the dashboard drew an average of roughly 9,400 unique views per week in its first year — a sign of how much appetite there is simply to check on a study's status without picking up the phone, if a faster alternative exists.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                REDUCE-CALL tested a communication channel, not AI-assisted reporting, and it would overstate the evidence to credit AI with this result. But the category of interruption it targeted overlaps with one AI-drafted reporting is positioned to shrink from a different angle: referrers who call because they don't yet know what a scan shows, or when the report will land. A structured, comprehensive report draft that reaches the worklist quickly — reviewed by xAID's in-house radiologist and delivered ready-to-sign — gives the reading radiologist a complete answer sooner, which is one fewer reason for the phone to ring mid-report. Fixing the communication channel and shortening the path to a finished draft are complementary moves against the same tax on read time, not competing ones.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the JACR study on radiologist workflow interruptions find?',
                    a: "A 2026 study in the Journal of the American College of Radiology, known as REDUCE-CALL, compared 20 matched weekdays before and after a Melbourne hospital's radiology department added an EMR-integrated chat tool plus targeted staff education. Median daily telephone calls to the duty radiologist fell from 181 to 82 — a 55% drop — while the number of studies protocolled per day was essentially unchanged.",
                  },
                  {
                    q: 'Did fewer phone calls mean radiologists got less done?',
                    a: 'No. Studies protocolled per day held steady, 92 before versus 97 after the change, a difference the researchers found was not statistically significant. Total communication volume, calls plus chat messages combined, also dropped 43%, and workload-adjusted contacts fell 44% (rate ratio 0.56), showing the reduction was not just calls shifting to another channel.',
                  },
                  {
                    q: 'Why are phone calls considered a tax on radiologist read time?',
                    a: "Every call to a reporting radiologist forces a context switch away from image interpretation — a disruption pattern widely understood in clinical workflow research to slow turnaround and raise error risk. The REDUCE-CALL authors describe frequent telephone calls to radiology departments as 'a major source of workflow interruption and inefficiency' — a cost that rarely appears in productivity metrics because it is measured in reporting minutes, not an explicit line item.",
                  },
                  {
                    q: 'How does AI-assisted reporting relate to reducing radiologist interruptions?',
                    a: 'The study tested a communication fix, not AI reporting, and that distinction matters. But a documented share of radiology check-ins are referrers asking what a scan shows or when it will be ready — questions a clearer, faster-available report answers before the phone rings. A structured, comprehensive AI-drafted report that reaches a radiologist\'s worklist quickly, reviewed in-house and delivered ready-to-sign, is a complementary way to shrink that same category of interruption rather than a substitute for communication-workflow fixes like REDUCE-CALL.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: S. Sreedharan, L. Chan, A. Coote, C. Umstad, A. Le, M. McCusker, D. Pascoe, S.B. Heinze, "REducing Disruptive and Unnecessary Calls with Education and Electronic Chat for Asynchronous Liaison with RadioLogy: The REDUCE-CALL Study," <em>Journal of the American College of Radiology</em> (October 2026), <a href="https://doi.org/10.1016/j.jacr.2026.09.028" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2026.09.028</a>, as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/how-radiology-department-drastically-reduced-incoming-calls-rest-hospital" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. ED dashboard figures from A.H. Dhanaliwala et al., <em>Journal of the American College of Radiology</em> (2025), <a href="https://doi.org/10.1016/j.jacr.2024.11.024" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2024.11.024</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Fewer reasons for the phone to ring mid-report"
          sub="A complete, structured report draft reaches the worklist faster — reviewed by xAID's in-house radiologist and delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/radiology-efficiency-ai-adoption-study/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow &amp; Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A 20-Center, Multi-Vendor Study Just Measured Real Radiology Efficiency Gains From AI</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologistWorkflowInterruptions;
