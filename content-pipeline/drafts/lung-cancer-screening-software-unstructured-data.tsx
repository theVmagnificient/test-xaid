import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const LungCancerScreeningSoftwareUnstructuredData = () => {
  const post = {
    title: 'AI Finds 3x More Lung Screening Patients Hiding in the EHR',
    dateIso: '2026-10-16',
    date: 'October 16, 2026',
    category: 'Screening & Capacity',
    readingTime: 7,
    description: "A UC Irvine NLP tool found 3x more lung-screening-eligible patients in EHR notes than structured fields alone — and why reporting has the same problem.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Finds 3x More Lung Screening Patients in the EHR | xAID</title>
        <meta name="description" content="A UC Irvine NLP tool found 3x more lung-screening-eligible patients in EHR notes than structured fields alone — and why reporting has the same problem." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Finds 3x More Lung Screening Patients in the EHR | xAID" />
        <meta property="og:description" content="A UC Irvine NLP tool found 3x more lung-screening-eligible patients in EHR notes than structured fields alone — and why reporting has the same problem." />
        <meta property="og:url" content="https://xaid.ai/blog/lung-cancer-screening-software-unstructured-data" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Finds 3x More Lung Screening Patients in the EHR | xAID" />
        <meta name="twitter:description" content="A UC Irvine NLP tool found 3x more lung-screening-eligible patients in EHR notes than structured fields alone — and why reporting has the same problem." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/lung-cancer-screening-software-unstructured-data" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/lung-cancer-screening-software-unstructured-data",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "lung cancer screening software, lung cancer screening EHR, NLP lung cancer screening eligibility, structured radiology reporting, AI CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How did UC Irvine use AI to find lung cancer screening patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers at UC Irvine's Department of Radiological Sciences built a natural language processing pipeline that reads free-text clinical notes to extract smoking history — current/former status, pack-years, quit date — and flags patients who meet USPSTF lung cancer screening eligibility criteria. The study, published in the Journal of the American College of Radiology (October 2026), analyzed nearly 28,000 patients and about 41,000 EHR notes from 2018 to 2023."
              }
            },
            {
              "@type": "Question",
              "name": "How many more eligible patients did the NLP tool find compared to structured EHR data alone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The NLP approach identified more than three times as many screening-eligible patients as structured EHR fields alone, with 84% agreement against manual chart review. Two human reviewers independently re-checked the discordant cases and agreed with each other 96% of the time, reinforcing that the gap is a documentation problem, not a measurement error."
              }
            },
            {
              "@type": "Question",
              "name": "Why do structured EHR fields miss lung-screening-eligible patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Smoking history is frequently recorded as a sentence in a progress note — 'quit two years ago after 30 years, a pack a day' — rather than as a discrete pack-years field a screening algorithm can query. If a clinician documents it in prose instead of a structured intake field, rules-based eligibility screens miss it entirely, even though the information exists in the chart."
              }
            },
            {
              "@type": "Question",
              "name": "Does finding eligible patients fix the lung cancer screening shortfall?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It addresses one of at least two separate bottlenecks. Only about 18% of eligible US adults are up to date with lung cancer screening, and prior research has already shown that expanding or simplifying eligibility criteria alone does not close that gap. Identifying who qualifies is necessary but not sufficient — the scans still have to be scheduled, read, and reported with enough consistency to support tracking, follow-up, and registry reporting downstream."
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
                Screening &amp; Capacity
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              AI found 3x more lung screening patients<br />
              <span className="text-white/60">hiding in the EHR's free text</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A UC Irvine study used natural language processing to mine clinical notes for smoking history — and surfaced three times as many screening-eligible patients as the structured EHR fields alone. The finding reframes the lung-screening bottleneck: it isn't only scanner capacity, it's unstructured data, and it shows up twice in the same pathway.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '~28K', label: 'Patients in the EHR cohort', sub: '2018–2023, UC Irvine' },
            { stat: '~41K', label: 'Clinical notes mined', sub: 'for smoking-history text' },
            { stat: '3x', label: 'More eligible patients found', sub: 'vs structured fields alone' },
            { stat: '18%', label: 'US adults up to date on LCS', sub: 'among those eligible, 2022' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What UC Irvine built
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team at UC Irvine's Department of Radiological Sciences, led by Dr. Gelareh Sadigh, published a study in the <a href="https://doi.org/10.1016/j.jacr.2026.10.011" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of the American College of Radiology</a> (October 2026) describing a natural language processing pipeline built to solve a specific, unglamorous problem: finding out who in a hospital's patient population actually qualifies for low-dose CT lung cancer screening.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                USPSTF eligibility hinges on smoking history — current or former smoker, age range, pack-years, time since quitting. That information exists in nearly every chart. The problem is where it lives. The team analyzed close to <strong>28,000 patients</strong> and roughly <strong>41,000 EHR notes</strong> spanning 2018 to 2023, as <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-department-uses-ai-identify-lung-cancer-screening-patients-ehr" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>, and validated the NLP output against roughly 2,000 manually reviewed notes.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The result: <strong>84% agreement</strong> between the NLP classification and manual chart review. When two human reviewers independently re-checked the cases where the tool and the first reviewer disagreed, they agreed with each other <strong>96%</strong> of the time — a sign the discordance is mostly a documentation gap the model is closing, not model error.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The number that matters: 3x
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The headline figure isn't the accuracy score — it's the yield. Using free-text notes in addition to structured EHR fields, the NLP approach identified <strong>more than three times as many</strong> lung-screening-eligible patients than structured data alone would have surfaced. The authors put it plainly: "Our findings support NLP as a practical and scalable approach to improving LCS eligibility ascertainment from existing clinical documentation without changing physician workflow."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read that carefully. The patients were always in the system. A clinician had already documented "quit smoking three years ago after a pack a day for 25 years" in a progress note. No new data entry, no new clinic visit, no new checkbox was needed to find them — the information was simply written in a sentence instead of a structured field, and a rules-based eligibility query can't read a sentence.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Unstructured data hits the screening pathway twice
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to read this as a story about patient intake and stop there. It's more useful read as a pattern. The same structural problem — clinically important information trapped in free text instead of a queryable field — shows up again later in the same pathway, after the scan has already happened.
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Pathway stage</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Where the data goes unstructured</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">What closes the gap</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Finding eligible patients (intake)</td>
                      <td className="py-3 pr-4">Smoking pack-years written in a progress-note sentence, not a discrete field</td>
                      <td className="py-3">NLP mining of free-text notes, as in the UC Irvine study</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Reading and reporting the CT</td>
                      <td className="py-3 pr-4">Nodule size, location, and Lung-RADS-relevant detail buried in narrative dictation</td>
                      <td className="py-3">A structured, comprehensive report drafted with consistent fields from the start</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Follow-up and registry tracking</td>
                      <td className="py-3 pr-4">Recommended next steps described in prose a scheduling system can't trigger on</td>
                      <td className="py-3">Discrete, machine-readable recommendation fields carried through the report</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The intake-side fix and the reporting-side fix look different — one is a text-mining layer over existing notes, the other is how the report is produced in the first place — but they're solving the same category of problem: unstructured clinical language that downstream systems, schedulers, and registries can't act on without a human re-reading and re-typing it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why identification alone won't close the screening gap
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Lung cancer screening uptake remains low: only about <strong>18%</strong> of eligible US adults were up to date as of 2022, per American Cancer Society analysis published in <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2819820" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Internal Medicine</em></a>. That shortfall has multiple causes, and this study addresses exactly one of them — making sure a health system actually knows who in its population qualifies.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It doesn't address CT scanner throughput, radiologist reading capacity, or what happens to the report once the scan is read — gaps covered in a related analysis of <Link to="/blog/lung-cancer-screening-ct-criteria/" className="text-xaid-blue-strong underline underline-offset-2">how screening-criteria changes affect CT volume</Link> and in a separate look at <Link to="/blog/lung-cancer-screening-program-integration/" className="text-xaid-blue-strong underline underline-offset-2">why screening programs struggle to keep patients on a completed care pathway</Link>. Finding more eligible patients without the downstream capacity to scan, read, and track them just moves the bottleneck one stage later.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The UC Irvine study is evidence for a broader point that matters for any lung cancer screening software: free-text clinical documentation is a liability at every stage of a screening pathway unless something turns it into structured, queryable output. On the reporting side, that's the problem <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">structured AI CT reporting</Link> is built to solve — a comprehensive, consistently formatted draft report instead of free-text dictation, with xAID's in-house radiologist reviewing every preliminary before it reaches the client's reading radiologist, ready-to-sign. Solving the intake-side identification problem only pays off if the reporting side produces output a scheduling system, a registry, or a follow-up tracker can actually read.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How did UC Irvine use AI to find lung cancer screening patients?',
                    a: "Researchers at UC Irvine's Department of Radiological Sciences built a natural language processing pipeline that reads free-text clinical notes to extract smoking history — current/former status, pack-years, quit date — and flags patients who meet USPSTF lung cancer screening eligibility criteria. The study, published in the Journal of the American College of Radiology (October 2026), analyzed nearly 28,000 patients and about 41,000 EHR notes from 2018 to 2023.",
                  },
                  {
                    q: 'How many more eligible patients did the NLP tool find compared to structured EHR data alone?',
                    a: 'The NLP approach identified more than three times as many screening-eligible patients as structured EHR fields alone, with 84% agreement against manual chart review. Two human reviewers independently re-checked the discordant cases and agreed with each other 96% of the time, reinforcing that the gap is a documentation problem, not a measurement error.',
                  },
                  {
                    q: 'Why do structured EHR fields miss lung-screening-eligible patients?',
                    a: "Smoking history is frequently recorded as a sentence in a progress note — 'quit two years ago after 30 years, a pack a day' — rather than as a discrete pack-years field a screening algorithm can query. If a clinician documents it in prose instead of a structured intake field, rules-based eligibility screens miss it entirely, even though the information exists in the chart.",
                  },
                  {
                    q: 'Does finding eligible patients fix the lung cancer screening shortfall?',
                    a: 'It addresses one of at least two separate bottlenecks. Only about 18% of eligible US adults are up to date with lung cancer screening, and prior research has already shown that expanding or simplifying eligibility criteria alone does not close that gap. Identifying who qualifies is necessary but not sufficient — the scans still have to be scheduled, read, and reported with enough consistency to support tracking, follow-up, and registry reporting downstream.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: B. Liu, R. Sabour, T. Pham, et al., "Natural Language Processing for Automated Lung Cancer Screening Eligibility Classification from Electronic Health Record," <em>Journal of the American College of Radiology</em> (2026), <a href="https://doi.org/10.1016/j.jacr.2026.10.011" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2026.10.011</a>; as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-department-uses-ai-identify-lung-cancer-screening-patients-ehr" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. National screening-uptake figure (18.1% in 2022) from the American Cancer Society analysis in <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2819820" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>JAMA Internal Medicine</em></a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Identification is half the pathway. Reporting is the other half."
          sub="xAID turns every chest CT into a structured, comprehensive, ready-to-sign report — no free-text bottleneck downstream. Try it on 5 free studies."
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
              <Link to="/blog/lung-cancer-screening-ct-criteria/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Screening &amp; Capacity</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Simpler Lung Cancer Screening Criteria Could Mean a Lot More Chest CTs</div>
              </Link>
              <Link to="/blog/lung-cancer-screening-program-integration/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Screening &amp; Capacity</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Integrating Breast and Lung Cancer Screening: The Operational Playbook</div>
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

export default LungCancerScreeningSoftwareUnstructuredData;
