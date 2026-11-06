import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyReportTurnaroundTimeEdLengthOfStay = () => {
  const post = {
    title: 'Radiology Report Turnaround Time and ED Length of Stay: What a New Study Shows',
    dateIso: '2026-11-06',
    date: 'November 6, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "New trauma data: CT scan speed didn't predict ED length of stay, but report turnaround time did — each delayed hour added 30+ minutes of ED stay.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Report Turnaround Time & ED Length of Stay | xAID</title>
        <meta name="description" content="New trauma data: CT scan speed didn't predict ED length of stay, but report turnaround time did — each delayed hour added 30+ minutes of ED stay." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Report Turnaround Time & ED Length of Stay | xAID" />
        <meta property="og:description" content="New trauma data: CT scan speed didn't predict ED length of stay, but report turnaround time did — each delayed hour added 30+ minutes of ED stay." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-report-turnaround-time-ed-length-of-stay" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Report Turnaround Time & ED Length of Stay | xAID" />
        <meta name="twitter:description" content="New trauma data: CT scan speed didn't predict ED length of stay, but report turnaround time did — each delayed hour added 30+ minutes of ED stay." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-report-turnaround-time-ed-length-of-stay" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-report-turnaround-time-ed-length-of-stay",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology report turnaround time, CT report turnaround time, ED length of stay, emergency department CT reporting, radiology reporting delay outcomes"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the study find about CT reporting and ED length of stay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A retrospective study of 1,246 adult trauma patients treated at an academic hospital in Johannesburg, South Africa (January–March 2022) found that emergency department length of stay averaged 8.9 hours overall. Patients who had a CT scan stayed nearly 11 hours on average, versus about 6 hours for those who did not. After statistical adjustment, only preliminary CT report turnaround time — not the CT scan itself — remained independently associated with how long patients stayed."
              }
            },
            {
              "@type": "Question",
              "name": "Does CT scan speed (acquisition time) affect ED length of stay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not independently, according to this study. Median CT time (order to completed scan) was about 5 hours. But once researchers adjusted for age, sex, shock index, Glasgow Coma Scale score, and CT time together, CT time dropped out as a significant factor — only preliminary report turnaround time remained independently linked to length of stay."
              }
            },
            {
              "@type": "Question",
              "name": "How much does report turnaround time affect ED stay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study found that each additional hour of preliminary report turnaround time was associated with more than a half-hour increase in emergency department length of stay. Median preliminary report turnaround was about 2 hours in the cohort, while median final report turnaround ran past 11 hours."
              }
            },
            {
              "@type": "Question",
              "name": "Does this trauma-center finding apply to routine CT and other EDs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study is a single-center, retrospective analysis of trauma patients in South Africa, so it cannot prove causation and may not generalize directly to every ED or imaging setting — the authors note this limitation themselves. But the mechanism it isolates, that the interval between a completed scan and a readable report drives occupancy more than the scan itself, matches what turnaround-time benchmarking research shows across practice types, which is why reporting speed, not scanner throughput, is the metric worth tracking."
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
                Clinical Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Report turnaround time, not CT speed,<br />
              <span className="text-white/60">is what's stretching ED stays</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A study of 1,246 trauma patients set out to test an assumption the radiology-operations world has made for years: that a faster scan means a faster discharge. The scan wasn't the independent driver. The report was.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,246', label: 'Adult trauma patients studied', sub: 'Jan–Mar 2022' },
            { stat: '729', label: 'Underwent CT imaging', sub: '59% of the cohort' },
            { stat: '8.9 hrs', label: 'Average ED length of stay', sub: 'full cohort' },
            { stat: '>30 min', label: 'Added ED-LOS per hour of report delay', sub: 'independent of CT time' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study actually measured
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The research, published in <a href="https://doi.org/10.1016/j.crad.2026.107514" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Clinical Radiology</em></a> and first covered by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/study-links-ct-reporting-slowdowns-longer-emergency-department-stays" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, is a retrospective cohort of 1,246 adult trauma patients admitted to an academic hospital in Johannesburg, South Africa between January and March 2022. Of that group, 729 patients — 59% — underwent CT imaging.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Instead of treating "imaging" as one block of time, the researchers broke the CT workflow into three separate intervals and tested each one against emergency department length of stay (ED-LOS): <strong>CT time</strong> (order to completed scan), <strong>preliminary report turnaround time</strong> (scan to the first readable report), and <strong>final report turnaround time</strong> (scan to the signed final). That decomposition is what makes the finding useful — it isolates which part of the imaging pipeline actually moves the outcome that matters to ED throughput.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Who gets stuck longest: CT patients vs. everyone else
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Across the full cohort, average ED-LOS was 8.9 hours. But needing a CT scan at all was already a strong predictor of a longer stay:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Group</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Mean ED length of stay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Full cohort (n=1,246)', '8.9 hours'],
                      ['Patients who received a CT (n=729)', '≈11 hours'],
                      ['Patients who did not receive a CT', '≈6 hours'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Nearly a five-hour gap between the CT and non-CT groups is a large signal on its own. The more interesting question — and the one the study was really built to answer — is which part of the CT pipeline is responsible for it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Three intervals, one independent driver
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Among the patients who underwent CT, the three workflow intervals looked very different from one another:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Interval</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Median time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['CT time (order → completed scan)', '≈5 hours'],
                      ['Preliminary report turnaround time', '≈2 hours'],
                      ['Final report turnaround time', '>11 hours'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In an unadjusted analysis, CT time looked like it mattered — patients waited longest for the scan itself. But that's the kind of correlation that's easy to misread as causal. Once the researchers ran a secondary analysis adjusting for age, sex, shock index, Glasgow Coma Scale score, and CT time together, CT time dropped out as a significant factor. <strong>Only preliminary report turnaround time remained independently associated with ED length of stay.</strong>
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The size of that effect: each additional hour of preliminary report turnaround time corresponded to more than a half-hour increase in emergency department stay. The scan itself — the part of the pipeline that capital spending and scanner throughput initiatives typically target — was not the independent lever. The time it took to get a readable report back was.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "report-drafting speed," not scanner throughput, is the metric
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This matters because most imaging capacity conversations still default to the scanner: more slots, more machines, faster acquisition protocols. Those investments shorten CT time — the interval this study found was <em>not</em> the independent driver of ED-LOS once reporting speed was accounted for.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The interval that <em>did</em> survive adjustment — preliminary report turnaround time — sits entirely on the reading-room side of the workflow: the minutes between a completed scan landing in PACS and a radiologist (or a radiologist reviewing an AI-generated draft) producing a report a clinician can act on. That's consistent with separate research on the benchmarks side of this question: ACR guidance calls for routine CT reads to be signed within 24 hours, but actual <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">turnaround benchmarks</Link> frequently run 36–72 hours, and a separate study found ED CT turnaround ran <Link to="/blog/on-site-radiologist-ct-turnaround-time/" className="text-xaid-blue-strong underline underline-offset-2">34% longer without an on-site radiologist</Link> — both pointing at drafting capacity, not scanner capacity, as the bottleneck.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For EDs and the imaging-center or teleradiology partners that serve them, the practical implication is a measurement one: track the scan-to-preliminary-report interval as its own KPI, separate from door-to-scan or scanner utilization. This study suggests it's the interval most tightly tied to how long a patient occupies a bed.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study can't tell us
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It's a single-center, retrospective analysis of trauma patients at one academic hospital in South Africa over a three-month window — not a multi-site U.S. trial, and not a study of routine (non-trauma) CT. The authors themselves note that a retrospective design can show association, not causation: it's possible that sicker or more complex patients both generate longer reports and stay longer for reasons unrelated to the report itself. But the mechanism the study isolates — that the gap between a completed scan and a usable report, not the scan, tracks with how long a patient stays — lines up with what turnaround benchmarking research shows in other settings, which is why it's a reasonable signal for imaging and ED leaders to act on rather than dismiss.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This finding describes exactly the interval AI-assisted CT reporting is built to compress: the time between a completed scan and a structured first draft. xAID's foundation-model system generates that draft immediately, an in-house radiologist reviews every preliminary before it goes out, and the report arrives ready-to-sign for the client's reading radiologist — shortening the interval this study flags as the one independently tied to how long a trauma patient occupies an ED bed, without touching scanner throughput at all.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the study find about CT reporting and ED length of stay?',
                    a: 'A retrospective study of 1,246 adult trauma patients treated at an academic hospital in Johannesburg, South Africa (January–March 2022) found that emergency department length of stay averaged 8.9 hours overall. Patients who had a CT scan stayed nearly 11 hours on average, versus about 6 hours for those who did not. After statistical adjustment, only preliminary CT report turnaround time — not the CT scan itself — remained independently associated with how long patients stayed.',
                  },
                  {
                    q: 'Does CT scan speed (acquisition time) affect ED length of stay?',
                    a: 'Not independently, according to this study. Median CT time (order to completed scan) was about 5 hours. But once researchers adjusted for age, sex, shock index, Glasgow Coma Scale score, and CT time together, CT time dropped out as a significant factor — only preliminary report turnaround time remained independently linked to length of stay.',
                  },
                  {
                    q: 'How much does report turnaround time affect ED stay?',
                    a: 'The study found that each additional hour of preliminary report turnaround time was associated with more than a half-hour increase in emergency department length of stay. Median preliminary report turnaround was about 2 hours in the cohort, while median final report turnaround ran past 11 hours.',
                  },
                  {
                    q: 'Does this trauma-center finding apply to routine CT and other EDs?',
                    a: "The study is a single-center, retrospective analysis of trauma patients in South Africa, so it cannot prove causation and may not generalize directly to every ED or imaging setting — the authors note this limitation themselves. But the mechanism it isolates, that the interval between a completed scan and a readable report drives occupancy more than the scan itself, matches what turnaround-time benchmarking research shows across practice types, which is why reporting speed, not scanner throughput, is the metric worth tracking.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Sherry et al., "Computed Tomography in the Trauma Emergency Department and Its Association with Length-of-Stay," <a href="https://doi.org/10.1016/j.crad.2026.107514" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>Clinical Radiology</em></a> (2026), as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/study-links-ct-reporting-slowdowns-longer-emergency-department-stays" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Compress the interval that actually moves ED-LOS"
          sub="See how AI-drafted, radiologist-reviewed CT reports shorten the scan-to-preliminary-report gap. Try it on 5 free studies."
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
              <Link to="/blog/on-site-radiologist-ct-turnaround-time/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">On-Site Radiologists and CT Scan Turnaround Time</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: What Draft-Then-Sign Studies Show</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyReportTurnaroundTimeEdLengthOfStay;
