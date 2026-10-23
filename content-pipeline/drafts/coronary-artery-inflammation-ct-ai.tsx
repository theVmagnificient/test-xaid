import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CoronaryArteryInflammationCtAi = () => {
  const post = {
    title: "What AI Finds in Coronary Artery Inflammation on CT",
    dateIso: '2026-10-23',
    date: 'October 23, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A CT study flags coronary artery inflammation AI-detected in 43% of low-risk adults whom blood tests and risk scores missed — what it means for CT reporting.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>What AI Finds in Coronary Artery Inflammation on CT | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/coronary-artery-inflammation-ct-ai/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What AI Finds in Coronary Artery Inflammation on CT | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/coronary-artery-inflammation-ct-ai/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What AI Finds in Coronary Artery Inflammation on CT | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/coronary-artery-inflammation-ct-ai" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/coronary-artery-inflammation-ct-ai",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "coronary artery inflammation ct ai, coronary CT angiography AI, fat attenuation index, incidental findings CT, opportunistic CT screening"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the Biograph and Caristo Diagnostics CT study find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a preprint study posted to medRxiv (not yet peer-reviewed), Biograph used Caristo Diagnostics' FDA-authorized CaRi-Heart software to analyze coronary CT angiography scans from asymptomatic, low-risk adults. It found elevated coronary inflammation in 42.9% of participants, with 17.9% showing very high inflammation in at least one major coronary artery."
              }
            },
            {
              "@type": "Question",
              "name": "Why didn't blood tests or standard risk calculators catch this inflammation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "According to the study, cholesterol markers, hemoglobin A1c, high-sensitivity C-reactive protein, and the American Heart Association's PREVENT-ASCVD risk calculator showed no correlation with the presence of coronary inflammation detected on CT. About 47% of participants with no detectable coronary plaque still had elevated perivascular inflammation — a signal that only showed up on the scan itself."
              }
            },
            {
              "@type": "Question",
              "name": "What tool was used to detect the coronary inflammation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study used Caristo Diagnostics' CaRi-Heart, an AI platform that received FDA De Novo marketing authorization to quantify coronary inflammation from routine coronary CT angiography. It analyzes pericoronary fat to produce a fat attenuation index, a biomarker validated in the Lancet-published CRISP-CT and ORFAN studies as an independent predictor of cardiac mortality."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for how CT scans get reported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It adds to a growing body of evidence that routine CT exams carry clinically actionable signal beyond their original indication. As AI analysis extracts more of that signal, the reporting structure has to keep pace: findings need to be captured consistently in the report and routed to a radiologist who reviews and finalizes it, not left to a manual judgment call on a case-by-case basis."
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
              AI reads routine heart CTs and finds inflammation blood tests miss<br />
              <span className="text-white/60">in more than 4 of 10 "low-risk" adults</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new study layering AI analysis onto coronary CT angiography found elevated coronary artery inflammation in asymptomatic, conventionally low-risk patients — invisible to cholesterol panels, blood sugar tests, and standard risk calculators. It's a clean example of CT carrying more clinically useful signal than a routine read extracts, and a preview of the reporting problem that signal creates.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '42.9%', label: 'Low-risk adults with elevated inflammation', sub: 'on routine coronary CTA' },
            { stat: '17.9%', label: 'Had very high inflammation', sub: 'in at least one major artery' },
            { stat: '47%', label: 'Inflamed with zero plaque', sub: 'no blockage on the same scan' },
            { stat: '4', label: 'Standard risk tools that missed it', sub: 'cholesterol, A1c, hs-CRP, risk score' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Preventive-health clinic Biograph ran what it describes as the first U.S. study applying Caristo Diagnostics' AI-based coronary inflammation software to its coronary CT angiography (CCTA) program, layering it on top of routine plaque and stenosis analysis for asymptomatic, conventionally low-risk patients, as <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15838207/biograph-highlights-cardiac-ai-ct-study" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie reported</a>. The results were posted as a preprint on medRxiv and have not yet been peer-reviewed.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The topline number: <strong>42.9%</strong> of participants — all asymptomatic and classified low-risk by conventional measures — showed elevated coronary inflammation. <strong>17.9%</strong> had very high inflammation in at least one major coronary artery. These weren't patients flagged by symptoms or by a worrying lab panel; they were found because the scan was analyzed for a signal that routine reads don't typically quantify.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The most striking sub-finding: about <strong>47%</strong> of participants with no detectable coronary plaque at all — a clean-looking scan by conventional criteria — still had elevated perivascular inflammation. Inflammation and plaque burden are evidently not the same signal, and a scan read only for the second can miss the first entirely.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The disconnect: blood tests didn't see it either
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                What makes this more than a CT-specific curiosity is what the study says didn't correlate with the finding. Cholesterol markers, hemoglobin A1c, high-sensitivity C-reactive protein, and the American Heart Association's PREVENT-ASCVD risk calculator — the standard toolkit for stratifying cardiovascular risk in primary care — showed no correlation with which patients had coronary inflammation on CT.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In other words, the patients most likely to be waved through as "low risk" on paper were exactly the population where the imaging-based signal and the lab-based signal diverged. That gap is the clinical argument for why this is worth reporting at all: if standard risk tools can't predict who has it, the scan is the only place the information currently lives.
              </p>

              <div className="overflow-x-auto mb-8 -mx-2 px-2">
                <table className="w-full text-left border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Risk signal</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">What it measures</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Correlation with CT-detected inflammation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { signal: 'Cholesterol markers (ApoB, non-HDL-C)', measures: 'Lipid-driven atherosclerotic risk', result: 'None found' },
                      { signal: 'Hemoglobin A1c', measures: 'Long-term blood sugar / metabolic risk', result: 'None found' },
                      { signal: 'High-sensitivity CRP', measures: 'Systemic, vessel-nonspecific inflammation', result: 'None found' },
                      { signal: 'AHA PREVENT-ASCVD calculator', measures: '10-year composite cardiovascular risk score', result: 'None found' },
                      { signal: 'CT-based fat attenuation index', measures: 'Localized inflammation in the coronary vessel wall', result: 'Flagged in 42.9% of the same cohort' },
                    ].map((row) => (
                      <tr key={row.signal} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row.signal}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row.measures}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is plausible, not just a preprint headline
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A single, not-yet-peer-reviewed preprint from a commercial study would normally warrant caution. But the underlying measurement — pericoronary fat attenuation as a marker of vessel-wall inflammation — already has a peer-reviewed track record. The <a href="https://doi.org/10.1016/S0140-6736(18)31114-0" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CRISP-CT study</a>, published in <em>The Lancet</em> in 2018, derived the fat attenuation index in 1,872 patients and validated it in a separate cohort of 2,040 patients, showing that elevated perivascular inflammation around the right coronary artery independently predicted cardiac mortality. The <a href="https://doi.org/10.1016/S0140-6736(24)00596-8" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ORFAN study</a>, also in <em>The Lancet</em> (2024), extended that finding across more than 40,000 patients — the largest CCTA outcomes cohort assembled to date — and found the same fat-attenuation signal improved cardiac risk reclassification even after accounting for traditional risk factors and visible plaque.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That history is also why the underlying technology has regulatory standing of its own: Caristo's CaRi-Heart received FDA De Novo marketing authorization as <a href="https://www.auntminnie.com/clinical-news/ct/news/15831154/caristo-diagnostics-secures-fda-coronary-inflammation-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie reported</a>, with its companion plaque- and stenosis-analysis software separately FDA-cleared. The new Biograph numbers are a preprint and should be read as preliminary, but they're measuring a biomarker that peer-reviewed, multi-thousand-patient Lancet studies already link to real cardiac outcomes — not a novel, unvalidated metric.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The real story is a reporting-structure problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Strip away the cardiology specifics and this is a familiar shape: a routine CT exam, read for one purpose, contains a second layer of clinically meaningful signal that a standard interpretation doesn't systematically capture. Radiology already has close analogues in <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="text-xaid-blue-strong underline underline-offset-2">incidental lung nodules</Link>, <Link to="/blog/incidental-renal-mass-ct-report/" className="text-xaid-blue-strong underline underline-offset-2">incidental renal masses</Link>, and <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">vertebral bone density on a routine chest CT</Link> — findings that are only useful if the report structure captures them the same way every time, regardless of which radiologist is reading or how busy the worklist is that day.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Coronary inflammation adds a new wrinkle: unlike a nodule or a mass, it isn't something a radiologist can simply eyeball and flag more carefully. Quantifying it requires the kind of pixel-level, model-driven analysis this study ran — which means the finding only exists in the chart at all if the reporting workflow is built to run that analysis and route the result into a structured place in the report, not as a footnote a reader has to remember to add.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the exact problem AI-assisted CT reporting is built to address: extracting the full set of clinically relevant findings a scan contains — not just the ones tied to the original indication — and putting them into a consistent, structured report every time. xAID's foundation-model-based reports are drafted against the whole study, reviewed in-house, and delivered ready-to-sign so the findings that matter don't depend on which radiologist happened to notice them on a busy shift.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the Biograph and Caristo Diagnostics CT study find?',
                    a: "In a preprint study posted to medRxiv (not yet peer-reviewed), Biograph used Caristo Diagnostics' FDA-authorized CaRi-Heart software to analyze coronary CT angiography scans from asymptomatic, low-risk adults. It found elevated coronary inflammation in 42.9% of participants, with 17.9% showing very high inflammation in at least one major coronary artery.",
                  },
                  {
                    q: "Why didn't blood tests or standard risk calculators catch this inflammation?",
                    a: "According to the study, cholesterol markers, hemoglobin A1c, high-sensitivity C-reactive protein, and the American Heart Association's PREVENT-ASCVD risk calculator showed no correlation with the presence of coronary inflammation detected on CT. About 47% of participants with no detectable coronary plaque still had elevated perivascular inflammation — a signal that only showed up on the scan itself.",
                  },
                  {
                    q: 'What tool was used to detect the coronary inflammation?',
                    a: "The study used Caristo Diagnostics' CaRi-Heart, an AI platform that received FDA De Novo marketing authorization to quantify coronary inflammation from routine coronary CT angiography. It analyzes pericoronary fat to produce a fat attenuation index, a biomarker validated in the Lancet-published CRISP-CT and ORFAN studies as an independent predictor of cardiac mortality.",
                  },
                  {
                    q: 'What does this mean for how CT scans get reported?',
                    a: 'It adds to a growing body of evidence that routine CT exams carry clinically actionable signal beyond their original indication. As AI analysis extracts more of that signal, the reporting structure has to keep pace: findings need to be captured consistently in the report and routed to a radiologist who reviews and finalizes it, not left to a manual judgment call on a case-by-case basis.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15838207/biograph-highlights-cardiac-ai-ct-study" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, reporting on a Biograph/Caristo Diagnostics preprint posted to medRxiv (2026, not yet peer-reviewed); FDA authorization status via <a href="https://www.auntminnie.com/clinical-news/ct/news/15831154/caristo-diagnostics-secures-fda-coronary-inflammation-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; validation evidence from the CRISP-CT study, <em>The Lancet</em> (2018), <a href="https://doi.org/10.1016/S0140-6736(18)31114-0" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/S0140-6736(18)31114-0</a>, and the ORFAN study, <em>The Lancet</em> (2024), <a href="https://doi.org/10.1016/S0140-6736(24)00596-8" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/S0140-6736(24)00596-8</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More signal per scan. Every finding in the report."
          sub="See how foundation-model CT reporting surfaces the full picture — reviewed in-house, delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/incidental-findings-mammography-cardiac-risk/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Findings: Mammography and Cardiac Risk</div>
              </Link>
              <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Lung Nodule Malignancy Risk and AI</div>
              </Link>
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT, Vertebral Bone Density, and Brain Aging</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CoronaryArteryInflammationCtAi;
