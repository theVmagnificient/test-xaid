import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const DoorToCtTimeStroke = () => {
  const post = {
    title: "Door-to-CT Time in Stroke Care: Why It's Not Enough",
    dateIso: '2026-07-27',
    date: 'July 27, 2026',
    category: 'Clinical Workflow',
    readingTime: 7,
    description: "A new study shows relocating CT scanners near the ED cuts door-to-CT time. But door-to-CT is only half the stroke clock; reporting speed is the other half.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Door-to-CT Time in Stroke Care: Why It's Not Enough | xAID</title>
        <meta name="description" content="A new study shows relocating CT scanners near the ED cuts door-to-CT time. But door-to-CT is only half the stroke clock; reporting speed is the other half." />
        <link rel="canonical" href="https://xaid.ai/blog/door-to-ct-time-stroke" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Door-to-CT Time in Stroke Care: Why It's Not Enough | xAID" />
        <meta property="og:description" content="A new study shows relocating CT scanners near the ED cuts door-to-CT time. But door-to-CT is only half the stroke clock; reporting speed is the other half." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Door-to-CT Time in Stroke Care: Why It's Not Enough | xAID" />
        <meta name="twitter:description" content="A new study shows relocating CT scanners near the ED cuts door-to-CT time. But door-to-CT is only half the stroke clock; reporting speed is the other half." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/door-to-ct-time-stroke" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/door-to-ct-time-stroke",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "door to CT time stroke, door-to-CT time, stroke imaging workflow, CT report turnaround, time to diagnosis stroke"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is door-to-CT time in stroke care, and why does it matter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Door-to-CT time is the interval between a patient's arrival in the emergency department and the start of their CT scan. In suspected stroke, it matters because CT (or MRI) must rule out hemorrhage before clot-busting drugs or thrombectomy can be considered, so every minute added to door-to-CT time delays the treatment decision. The American Heart Association/American Stroke Association's Target: Stroke initiative sets a goal of door-to-CT within 25 minutes of ED arrival."
              }
            },
            {
              "@type": "Question",
              "name": "Does moving the CT scanner closer to the ED actually reduce delays?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, according to a 2026 retrospective study in Clinical Imaging from the University of Illinois Chicago. After relocating a CT scanner adjacent to the ED, median door-to-CT time across 522 cases fell from 17 to 14 minutes, and for code-stroke activations specifically it fell from 16 to 12 minutes (p<0.001). Door-to-CT-interpretation time for all cases fell from 31 to 26 minutes."
              }
            },
            {
              "@type": "Question",
              "name": "What are the AHA/ASA targets for door-to-CT and door-to-CT interpretation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The AHA/ASA Target: Stroke initiative calls for brain imaging to begin within 25 minutes of ED arrival and for that imaging to be interpreted within 45 minutes of arrival — the latter is also tracked as a CMS hospital outpatient quality measure. The 45-minute interpretation goal is a separate clock from the 25-minute acquisition goal, and it is the one that depends on reporting speed, not scanner location."
              }
            },
            {
              "@type": "Question",
              "name": "If CT acquisition gets faster, why does time-to-diagnosis still lag?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because acquisition and interpretation are two separate steps with two separate clocks, and only code-stroke or code-brain activations get the expedited, page-triggered interpretation queue that studies like the UIC one measured. The much larger volume of everyday ED and inpatient CT studies that are not activated as a stroke code do not get that same priority routing, so their report turnaround can still run into hours even when the scan itself was fast. Relocating a scanner fixes the acquisition clock; it does not touch the reporting clock."
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
                Clinical Workflow
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Door-to-CT time in stroke care:<br />
              <span className="text-white/60">why it's not enough</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new study shows that moving a CT scanner next to the ED shaves minutes off door-to-CT time — and every minute counts in stroke. But hospitals framing this purely as a facility fix are missing the other half of the clock: what happens to the images after they're acquired.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '16→12 min', label: 'Door-to-CT, code-stroke cases', sub: 'after scanner relocation (p<0.001)' },
                { stat: '31→26 min', label: 'Door-to-CT-interpretation, all cases', sub: 'UIC study, 522 patients' },
                { stat: '25 / 45 min', label: 'AHA/ASA Target: Stroke goals', sub: 'door-to-CT / door-to-CT-interpretation' },
                { stat: '4%', label: 'Higher odds of independent ambulation', sub: 'per 15 min faster tPA (JAMA, 2013)' },
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
                What the new study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers at the University of Illinois Chicago tracked time-stamped electronic health records before and after relocating a CT scanner to sit adjacent to the emergency department, publishing the results in <em>Clinical Imaging</em> in July 2026 (<a href="https://doi.org/10.1016/j.clinimag.2026.110909" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">DOI: 10.1016/j.clinimag.2026.110909</a>), first reported by <a href="https://www.auntminnie.com/clinical-news/ct/article/15830794/ct-scanner-placement-near-ed-cuts-stroke-imaging-times" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a> and later covered by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/relocating-ct-scanners-closer-ed-cuts-turnaround-times-potential-save-lives" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. The study spanned February 2023 through June 2024, with the scanner move occurring in October 2023, and covered 522 total cases (247 before, 275 after), including 318 code-stroke and 204 code-brain activations.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The improvements were consistent and statistically significant. Across all 522 cases, median door-to-CT time fell from <strong>17 to 14 minutes</strong> and page-to-CT time fell from <strong>10 to 7 minutes</strong>. Door-to-CT-interpretation dropped from <strong>31 to 26 minutes</strong>, and page-to-CT-interpretation from <strong>23 to 19 minutes</strong>. For code-stroke activations specifically, door-to-CT time dropped from <strong>16 to 12 minutes</strong> and page-to-CT time from <strong>9 to 5 minutes</strong> (both p&lt;0.001). For code-brain activations, page-to-CT-interpretation fell from <strong>32 to 22 minutes</strong> (p&lt;0.001).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The authors' conclusion, as quoted by <a href="https://www.auntminnie.com/clinical-news/ct/article/15830794/ct-scanner-placement-near-ed-cuts-stroke-imaging-times" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>, was direct: "These findings underscore the importance of imaging accessibility in time-sensitive conditions like acute stroke, where every minute matters." That's a real, measured effect — moving hardware measurably moved the acquisition clock. What the study did not measure is patient outcomes; it's a workflow-timing analysis, not an outcomes trial.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Door-to-CT is only half the stroke clock
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The reason "every minute matters" in stroke isn't folklore — it's built into national quality benchmarks with two separate targets, not one. The American Heart Association/American Stroke Association's <a href="https://www.heart.org/-/media/Files/Professional/Quality-Improvement/Target-Stroke/Target-Stroke-Phase-III/9-17-Update/DS14860-Time-Interval-One-Pager_v2.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Target: Stroke Phase III suggested time interval goals</a> call for brain imaging to begin within <strong>25 minutes</strong> of ED arrival. That's the acquisition clock, and it's the one a scanner relocation directly attacks.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But there's a second clock sitting right behind it: CMS's Hospital Outpatient Quality Reporting measure, tracked since 2012, for the <a href="https://p4qm.org/measures/0661" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">percentage of stroke patients whose head CT or MRI is interpreted within 45 minutes</a> of ED arrival — not just acquired. Getting the scan done faster only helps the overall time-to-diagnosis clock if the report that follows it doesn't eat up the minutes the scanner just saved. The UIC data shows this tension directly: even after relocation, door-to-CT-interpretation for all cases (26 minutes) took nearly twice as long as door-to-CT itself (14 minutes) — the gap between acquisition and a read is where most of the remaining clock lives.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "every minute matters" doesn't stop at the scanner
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The clinical logic behind "time is brain" comes from the treatment side of the pathway, not the imaging side, and it's worth being precise about which study says what. A 2013 <em>JAMA</em> analysis of 58,353 stroke patients in the Get With the Guidelines-Stroke registry found that each <strong>15-minute</strong> acceleration in starting IV tPA was associated with <strong>4% higher odds</strong> of independent ambulation at discharge, <strong>3% higher odds</strong> of discharge to home, and <strong>4% lower odds</strong> of in-hospital death and of symptomatic hemorrhage (<a href="https://doi.org/10.1001/jama.2013.6959" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">DOI: 10.1001/jama.2013.6959</a>). That's the evidence base behind the idea that shaving minutes anywhere in the stroke pathway compounds into better odds at discharge — imaging is simply the step that has to clear before treatment timing can start.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Which is exactly why the interpretation side of the clock deserves the same scrutiny the acquisition side just got. The fast interpretation numbers in the UIC study — 26 minutes door-to-interpretation, 19 minutes page-to-interpretation — reflect a code-stroke or code-brain activation, meaning a radiologist was paged and prioritized the read. That expedited routing is exactly why those numbers beat the 45-minute CMS target. It is not, however, how the vast majority of ED and inpatient CT studies get read. Routine and even urgent (non-activated) CT studies queue normally, and <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">typical CT report turnaround runs well beyond an hour</Link> once a study isn't coded as an emergency. Relocating the scanner does nothing to change that queue.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Two levers, two different problems
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Lever</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">What it fixes</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">What it doesn't fix</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">Effort</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        lever: 'Relocate the CT scanner near the ED',
                        fixes: 'Door-to-CT acquisition time (17→14 min in the UIC study)',
                        doesnt: 'Report drafting and interpretation time after the scan is taken',
                        effort: 'Capital construction, months to years',
                      },
                      {
                        lever: 'Code-stroke / code-brain paging protocols',
                        fixes: 'Priority queueing for interpretation on activated cases (page-to-interpretation 23→19 min)',
                        doesnt: 'Every other ED and inpatient CT that isn’t coded as an activation',
                        effort: 'Workflow/staffing change, low capital',
                      },
                      {
                        lever: 'AI-assisted report drafting',
                        fixes: 'The drafting step for every CT study, not only activated ones',
                        doesnt: 'Image acquisition time itself',
                        effort: 'Software integration, no construction',
                      },
                    ].map((row) => (
                      <tr key={row.lever} className="border-b border-gray-100">
                        <td className="text-[#0D0D0D] text-[14px] font-medium py-3 pr-4 align-top">{row.lever}</td>
                        <td className="text-[#666] text-[14px] font-light py-3 pr-4 align-top leading-[1.5]">{row.fixes}</td>
                        <td className="text-[#666] text-[14px] font-light py-3 pr-4 align-top leading-[1.5]">{row.doesnt}</td>
                        <td className="text-[#666] text-[14px] font-light py-3 align-top leading-[1.5]">{row.effort}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The UIC study is a genuinely useful proof point for facility planning — proximity to the ED measurably shortens the acquisition clock. But total time-to-diagnosis is acquisition plus reporting, and only one of those two legs scales with priority paging alone. AI-assisted reporting is built for the leg that doesn't: it generates a structured report draft within minutes of DICOM receipt on every study, not just the ones flagged as a code activation, and xAID's in-house radiologist reviews every preliminary before it reaches the client's reading radiologist ready-to-sign. A hospital that spends capital moving a scanner but leaves the reporting queue untouched has fixed half the clock.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is door-to-CT time in stroke care, and why does it matter?',
                    a: "Door-to-CT time is the interval between a patient's arrival in the emergency department and the start of their CT scan. In suspected stroke, it matters because CT (or MRI) must rule out hemorrhage before clot-busting drugs or thrombectomy can be considered, so every minute added to door-to-CT time delays the treatment decision. The American Heart Association/American Stroke Association's Target: Stroke initiative sets a goal of door-to-CT within 25 minutes of ED arrival.",
                  },
                  {
                    q: 'Does moving the CT scanner closer to the ED actually reduce delays?',
                    a: 'Yes, according to a 2026 retrospective study in Clinical Imaging from the University of Illinois Chicago. After relocating a CT scanner adjacent to the ED, median door-to-CT time across 522 cases fell from 17 to 14 minutes, and for code-stroke activations specifically it fell from 16 to 12 minutes (p<0.001). Door-to-CT-interpretation time for all cases fell from 31 to 26 minutes.',
                  },
                  {
                    q: 'What are the AHA/ASA targets for door-to-CT and door-to-CT interpretation?',
                    a: 'The AHA/ASA Target: Stroke initiative calls for brain imaging to begin within 25 minutes of ED arrival and for that imaging to be interpreted within 45 minutes of arrival — the latter is also tracked as a CMS hospital outpatient quality measure. The 45-minute interpretation goal is a separate clock from the 25-minute acquisition goal, and it is the one that depends on reporting speed, not scanner location.',
                  },
                  {
                    q: 'If CT acquisition gets faster, why does time-to-diagnosis still lag?',
                    a: 'Because acquisition and interpretation are two separate steps with two separate clocks, and only code-stroke or code-brain activations get the expedited, page-triggered interpretation queue that studies like the UIC one measured. The much larger volume of everyday ED and inpatient CT studies that are not activated as a stroke code do not get that same priority routing, so their report turnaround can still run into hours even when the scan itself was fast. Relocating a scanner fixes the acquisition clock; it does not touch the reporting clock.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Khosla et al., <em>Clinical Imaging</em> (2026), <a href="https://doi.org/10.1016/j.clinimag.2026.110909" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1016/j.clinimag.2026.110909</a>, first reported by <a href="https://www.auntminnie.com/clinical-news/ct/article/15830794/ct-scanner-placement-near-ed-cuts-stroke-imaging-times" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> and also covered by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/relocating-ct-scanners-closer-ed-cuts-turnaround-times-potential-save-lives" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; Saver et al., <em>JAMA</em> (2013), <a href="https://doi.org/10.1001/jama.2013.6959" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1001/jama.2013.6959</a>; AHA/ASA <a href="https://www.heart.org/-/media/Files/Professional/Quality-Improvement/Target-Stroke/Target-Stroke-Phase-III/9-17-Update/DS14860-Time-Interval-One-Pager_v2.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Target: Stroke Phase III suggested time interval goals</a>; CMS measure via <a href="https://p4qm.org/measures/0661" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Partnership for Quality Measurement</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Acquisition speed is half the clock. Reporting is the other half."
          sub="See how AI-assisted CT reporting compresses the drafting step on every study — not just the ones flagged as an emergency. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Cut MRI Wait Times 60% — But Faster Scans Just Move the Bottleneck</div>
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

export default DoorToCtTimeStroke;
