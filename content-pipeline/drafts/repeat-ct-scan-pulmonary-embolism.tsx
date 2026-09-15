import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RepeatCtScanPulmonaryEmbolism = () => {
  const post = {
    title: 'Repeat CT Scans for Pulmonary Embolism Rarely Change the Answer',
    dateIso: '2026-09-14',
    date: 'September 14, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description:
      'A 2026 study of 3,112 ED patients found repeat CT scans for pulmonary embolism rarely catch anything a negative first read missed.',
  };

  const canonical = 'https://xaid.ai/blog/repeat-ct-scan-pulmonary-embolism';

  return (
    <>
      <Helmet defer={false}>
        <title>Repeat CT Scan for Pulmonary Embolism: Does It Help? | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Repeat CT Scan for Pulmonary Embolism: Does It Help? | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Repeat CT Scan for Pulmonary Embolism: Does It Help? | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": canonical,
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "repeat CT scan pulmonary embolism, repeat CTPA diagnostic yield, CT pulmonary angiography overuse, negative CTPA, ED imaging backlog, radiology report turnaround"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does repeating a CT scan for pulmonary embolism after a negative result help find missed clots?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rarely, according to a 2026 study in Emergency Radiology. Among 2,412 emergency department patients with a negative initial CTPA, only 297 (12.3%) went on to have a repeat CTPA within two years, and the positive rate on those repeats stayed low across every time window studied — well below the 10.6% positive rate seen on patients' very first scan."
              }
            },
            {
              "@type": "Question",
              "name": "How often do repeat CTPA scans come back positive after an initial negative scan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the study, repeat CTPA performed in the same emergency department was positive in 3.8% of cases at one month (1 of 26), 6.0% at one year (9 of 150), and 6.4% at two years (13 of 202). Counting repeat scans done in any care setting, the overall yield was 8.1% (24 of 297) — still lower than the 10.6% yield of the first scan."
              }
            },
            {
              "@type": "Question",
              "name": "Why do clinicians order repeat CT scans for pulmonary embolism despite low yield?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "This particular study didn't collect data on why individual repeats were ordered, but persistent symptoms, diagnostic uncertainty, and defensive medicine are commonly cited drivers of reflexive re-imaging even when the first CTPA was negative and technically adequate. Researchers note that CT pulmonary angiography is among the imaging tests most often flagged as overused, and that repeat testing has been identified as a potential area of overuse by the Medicare Payment Advisory Commission."
              }
            },
            {
              "@type": "Question",
              "name": "What actually reduces unnecessary repeat imaging for suspected pulmonary embolism?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Structured clinical risk assessment before ordering a second scan, rather than reflexive repetition. But the upstream fix matters just as much: a fast, confident, clearly worded first report reduces the diagnostic uncertainty that pushes clinicians toward a repeat CT in the first place. Standardized negative-study language and shorter turnaround times address the root cause instead of adding another scan to the queue."
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
              <Link to="/blog/" className="text-white/60 hover:text-white text-[15px] font-light transition-colors">← Blog</Link>
              <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                Clinical Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A negative CT for pulmonary embolism,<br />
              <span className="text-white/60">then a second one anyway</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              New research tracking 3,112 emergency department patients found that repeating a CT pulmonary angiogram after a negative first read almost never changes the answer. The real problem it points to isn't the second scan — it's what made clinicians doubt the first one.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '10.6%', label: 'Positive on the first CTPA', sub: 'of 3,112 ED patients' },
            { stat: '12.3%', label: 'Negative patients rescanned', sub: 'within 2 years' },
            { stat: '6.4%', label: '2-year repeat CTPA yield', sub: 'vs 10.6% initial yield' },
            { stat: '3.8%', label: '1-month repeat yield', sub: 'lowest of any window' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study looked at
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team led by Natalia Gorelik at McGill University tracked <strong>3,112</strong> adults who underwent CT pulmonary angiography (CTPA) for suspected pulmonary embolism (PE) across three emergency departments between 2016 and 2017, published in <a href="https://doi.org/10.1007/s10140-026-02541-8" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Emergency Radiology</em></a>. Of that group, <strong>331</strong> patients (10.6%) had a positive index scan. The researchers then followed the remaining <strong>2,412</strong> patients with a negative initial CTPA for up to two years to see how many came back for a repeat scan, and how often that repeat scan actually found a clot.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                <strong>297</strong> of those 2,412 patients — about 12.3% — underwent at least one repeat CTPA within two years. The study didn't collect the clinical or pretest-probability data needed to say exactly why each repeat was ordered, but the question it set out to answer is a practical one for any emergency department: is a second scan actually finding disease the first one missed, or is it mostly reflexive imaging?
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The repeat-scan yield barely moves off the floor
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The answer, across every time window the researchers checked, is that the yield stays low — and stays well under the 10.6% positive rate patients had on their very first scan:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Time since negative index CTPA</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Repeat CTPAs (ED)</th>
                      <th className="py-3 text-[#0D0D0D] font-medium text-sm">Positive on repeat</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">1 month</td>
                      <td className="py-3 pr-4">26</td>
                      <td className="py-3">3.8% (1 of 26)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">1 year</td>
                      <td className="py-3 pr-4">150</td>
                      <td className="py-3">6.0% (9 of 150)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">2 years</td>
                      <td className="py-3 pr-4">202</td>
                      <td className="py-3">6.4% (13 of 202)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Any setting, any time</td>
                      <td className="py-3 pr-4">297</td>
                      <td className="py-3">8.1% (24 of 297)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Even the best-case figure — 8.1% when every repeat CTPA across any hospital or clinical setting is counted — is well below the 10.6% yield of the first scan patients ever received. Repeating the test after a negative read does not recover anything close to the original diagnostic yield. It mostly adds low-probability studies to CT queues that are already under pressure.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the second scan gets ordered anyway
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The researchers point to a familiar dynamic: "CT pulmonary angiography is among the imaging tests most frequently identified as potentially overused." The study itself didn't capture why individual repeats were ordered, but in general emergency medicine, persistent chest pain, shortness of breath, or a patient who "just doesn't look right" after a negative scan can push a clinician toward another CTPA rather than a clinical reassessment — a pattern clinicians and researchers commonly attribute to diagnostic uncertainty and defensive medicine as much as to objective new findings.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That instinct isn't free. The authors note that "repeat testing has been identified as a potential area of overuse by the Medicare Payment Advisory Commission" — every additional CTPA carries radiation dose, iodinated contrast risk, and a marginal cost, on top of adding to reporting queues that are already stretched. Their recommendation is to weigh clinical pretest probability before repeating a negative CTPA, rather than repeating it by default.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The real fix isn't a second scan — it's a better first one
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A clinician who orders a repeat CTPA after a negative result usually isn't second-guessing the imaging technology. They're second-guessing whether the first report closed the loop — whether it read as fast, definitive, and clearly worded, or as a hedge that left room for doubt. <Link to="/blog/radiology-report-language-precision/" className="text-xaid-blue-strong underline underline-offset-2">Separate research on report language</Link> found that imprecise wording drives exactly that kind of downstream uncertainty, including more procedures ordered on the strength of vague phrasing rather than a clear finding.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Turnaround time compounds the problem. When a definitive negative CTPA report takes hours to reach the ordering clinician — ACR guidance calls for routine CT reads within 24 hours, but <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">real-world turnaround often runs 36–72 hours</Link> — a symptomatic patient sitting in an ED bed generates pressure to act, and a repeat scan can look like the fastest available action. Standardized, unambiguous negative-study language delivered quickly closes that gap before it turns into a second order.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is a distinct problem from appropriate-use algorithms that decide whether a CT happens at all — it's about what happens after a scan has already been done and read as negative. AI CT reporting speeds up exactly the step this study implicates: it produces a structured, comprehensive report draft using consistent, standardized language, xAID's in-house radiologist reviews every preliminary, and the report reaches the ordering clinician ready-to-sign rather than sitting in a backlog. A faster, clearer, more confident first read is the intervention that keeps a negative CTPA from turning into two.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Does repeating a CT scan for pulmonary embolism after a negative result help find missed clots?',
                    a: "Rarely, according to a 2026 study in Emergency Radiology. Among 2,412 emergency department patients with a negative initial CTPA, only 297 (12.3%) went on to have a repeat CTPA within two years, and the positive rate on those repeats stayed low across every time window studied — well below the 10.6% positive rate seen on patients' very first scan.",
                  },
                  {
                    q: 'How often do repeat CTPA scans come back positive after an initial negative scan?',
                    a: 'In the study, repeat CTPA performed in the same emergency department was positive in 3.8% of cases at one month (1 of 26), 6.0% at one year (9 of 150), and 6.4% at two years (13 of 202). Counting repeat scans done in any care setting, the overall yield was 8.1% (24 of 297) — still lower than the 10.6% yield of the first scan.',
                  },
                  {
                    q: 'Why do clinicians order repeat CT scans for pulmonary embolism despite low yield?',
                    a: "This particular study didn't collect data on why individual repeats were ordered, but persistent symptoms, diagnostic uncertainty, and defensive medicine are commonly cited drivers of reflexive re-imaging even when the first CTPA was negative and technically adequate. Researchers note that CT pulmonary angiography is among the imaging tests most often flagged as overused, and that repeat testing has been identified as a potential area of overuse by the Medicare Payment Advisory Commission.",
                  },
                  {
                    q: 'What actually reduces unnecessary repeat imaging for suspected pulmonary embolism?',
                    a: 'Structured clinical risk assessment before ordering a second scan, rather than reflexive repetition. But the upstream fix matters just as much: a fast, confident, clearly worded first report reduces the diagnostic uncertainty that pushes clinicians toward a repeat CT in the first place. Standardized negative-study language and shorter turnaround times address the root cause instead of adding another scan to the queue.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Gorelik N, et al. "Diagnostic yield of repeat CT pulmonary angiography after a negative examination in the emergency department," <em>Emergency Radiology</em> (2026), <a href="https://doi.org/10.1007/s10140-026-02541-8" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s10140-026-02541-8</a>; as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/study-questions-value-repeat-ct-exams-after-initial-scan-shows-negative-pulmonary-embolism" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A faster, clearer first read beats a second scan."
          sub="AI-drafted, radiologist-reviewed CT reports delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/ct-scan-for-pulmonary-embolism-cancer-patients/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Scans for Pulmonary Embolism: When Cancer Patients Can Safely Skip Them</div>
              </Link>
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety & QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why the Words Radiologists Use Can Delay Care</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RepeatCtScanPulmonaryEmbolism;
