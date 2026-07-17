import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const RadiologyReportingGuide = () => {
  const post = {
    title: 'Radiology Reporting: A Complete Guide',
    dateIso: '2026-07-16',
    date: 'July 16, 2026',
    category: 'Radiology Reporting',
    readingTime: 9,
    description:
      'Radiology reporting explained: narrative vs structured reports, ACR and RSNA standards, turnaround, and how AI drafting is changing the report workflow.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Reporting: A Complete Guide | xAID</title>
        <meta name="description" content="Radiology reporting explained: narrative vs structured reports, ACR and RSNA standards, turnaround, and how AI drafting is changing the report workflow." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-reporting-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Reporting: A Complete Guide | xAID" />
        <meta property="og:description" content="Radiology reporting explained: narrative vs structured reports, ACR and RSNA standards, turnaround, and how AI drafting is changing the report workflow." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-reporting-guide" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Reporting: A Complete Guide | xAID" />
        <meta name="twitter:description" content="Radiology reporting explained: narrative vs structured reports, ACR and RSNA standards, turnaround, and how AI drafting is changing the report workflow." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-reporting-guide" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-reporting-guide",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology reporting, structured reporting radiology, radiology report, radiology reporting software, AI radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is radiology reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology reporting is the process of documenting the findings of an imaging study — such as a CT, MRI, X-ray, or ultrasound — in a formal written report that communicates the results and their clinical significance to the referring clinician. The American College of Radiology recommends a formal, written report for all studies, and treats that report as the definitive documentation of the examination."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between narrative and structured radiology reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Narrative (free-text) reporting is a radiologist's prose description of the findings, written or dictated in the reader's own words. Structured reporting organizes the same information into standardized headings, sections, and data elements — often using shared templates. A 2022 systematic review in European Radiology found that structured reporting can improve report quality and completeness, though radiologists sometimes perceive templates as rigid or slower for complex cases."
              }
            },
            {
              "@type": "Question",
              "name": "What is radiology reporting software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology reporting software is the platform a radiologist uses to create the report: it typically combines dictation or speech recognition, structured templates, prior-report comparison, and integration with the PACS and RIS. Modern systems increasingly add AI that drafts a structured report from the images for the radiologist to review, edit, and finalize."
              }
            },
            {
              "@type": "Question",
              "name": "How is AI changing radiology reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI is shifting the report from something dictated from a blank page to something drafted in advance. Foundation-model systems can generate a structured preliminary report directly from a CT study, which the radiologist then verifies and edits. This can reduce dictation time and typographical error, but the radiologist remains responsible for the content and the final signature."
              }
            },
            {
              "@type": "Question",
              "name": "Does AI sign the radiology report?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. AI drafts; a human radiologist signs. In the xAID workflow the AI produces a structured preliminary report, an in-house radiologist reviews every preliminary, and the report is delivered ready-to-sign so the client's reading radiologist signs the final report. No AI system is cleared for autonomous final reporting without radiologist sign-off in the United States."
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
                Radiology Reporting
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Radiology reporting: a complete guide<br />
              <span className="text-white/60">from narrative dictation to AI drafting</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Radiology reporting is where imaging becomes care: the moment a study turns into a document a clinician can act on. This guide explains what a radiology report is, how narrative and structured reports differ, the standards that govern them, and how AI is changing the way reports are produced — without changing who signs them.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '1899', label: 'First calls to standardize reports', sub: 'Preston Hickey, Detroit' },
                { stat: '44.2%', label: 'Speech-recognition reports with ≥1 error', sub: '2024 study, 3,233 reports' },
                { stat: '3.2%', label: 'Carried a clinically significant error', sub: 'same study' },
                { stat: '3', label: 'ACR categories needing urgent comms', sub: 'critical, discrepant, unexpected' },
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
                What is a radiology report?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A radiology report is the formal written document a radiologist produces after interpreting an imaging study — a CT, MRI, X-ray, ultrasound, or nuclear medicine exam. It is the product of radiology reporting: the process of translating pixels into a clinical narrative that a referring physician can act on. The <a href="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Practice-Parameters-and-Technical-Standards" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology (ACR)</a> recommends that radiologists prepare a formal, written report for all studies, including review and comparison with prior imaging where possible.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most reports share a familiar skeleton: clinical history and indication, comparison, technique, findings (usually organized by organ system), and an impression that summarizes the clinically important conclusions. The impression is what referring clinicians read first — and often the only section they read in full.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The report is also the medico-legal record of the exam. Under the ACR practice parameter for communication, the final report is the definitive documentation of an imaging examination, while urgent or unexpected findings warrant additional, non-routine communication. The ACR describes three scenarios that call for this: critical findings, findings that are discrepant with a preliminary read, and unexpected findings that would materially change management if not acted on promptly.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Narrative vs structured radiology reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The central debate in radiology reporting is style. <strong>Narrative</strong> (free-text) reporting is the radiologist's prose, dictated in their own words — flexible, fast for experienced readers, and able to capture nuance, but variable from reader to reader. <strong>Structured</strong> reporting organizes the same content into standardized headings and discrete data elements, often from a shared template.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The tension is old. As early as 1899, Detroit radiologist Preston Hickey — credited with introducing the terms "radiograph" and "interpretation" — argued that variability in language and style kept reports from being reused for analysis, and called for a more standardized approach. A century later, radiology has swung between "Hemingway" free text and template-driven structure, as reviewed in <a href="https://doi.org/10.1007/s13244-018-0596-3" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">a 2018 history of radiology reporting</a> in <em>Insights into Imaging</em>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The evidence generally favors structure for completeness. A <a href="https://doi.org/10.1007/s00330-021-08327-5" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2022 systematic review in <em>European Radiology</em></a> concluded that structured reporting has clear potential to improve report quality and completeness, while noting real adoption barriers — radiologists often find rigid templates slower for complex or unusual cases. An earlier <a href="https://doi.org/10.2214/AJR.14.12636" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">evaluation in the <em>American Journal of Roentgenology</em></a> similarly found structured reports to be more complete and more effective than unstructured ones.
              </p>

              <div className="bg-gray-50 rounded-xl p-5 mb-8 overflow-x-auto">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-2 pr-4 text-[#0D0D0D] font-medium">Dimension</th>
                      <th className="py-2 pr-4 text-[#0D0D0D] font-medium">Narrative report</th>
                      <th className="py-2 text-[#0D0D0D] font-medium">Structured report</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Format</td>
                      <td className="py-2 pr-4">Free-text prose</td>
                      <td className="py-2">Standard headings + data elements</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Completeness</td>
                      <td className="py-2 pr-4">Variable by reader</td>
                      <td className="py-2">More consistent</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Flexibility</td>
                      <td className="py-2 pr-4">High — captures nuance</td>
                      <td className="py-2">Lower for atypical cases</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Data reuse / analytics</td>
                      <td className="py-2 pr-4">Hard to mine</td>
                      <td className="py-2">Machine-readable</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Referrer comprehension</td>
                      <td className="py-2 pr-4">Depends on writing</td>
                      <td className="py-2">Predictable layout</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The standards behind radiology reporting: ACR, RSNA, and RADS
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Structured reporting is not something each practice invents alone. The <a href="https://www.rsna.org/practice-tools/data-tools-and-standards/radreport-reporting-templates" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RSNA RadReport template library</a> is a free set of best-practice report templates reviewed by an international panel of radiologists and shared with the European Society of Radiology. Many templates use RSNA's RadLex terminology and RadElement common data elements, developed with the ACR and subspecialty societies so that the same finding is described the same way across institutions.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Layered on top are the ACR <a href="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Reporting and Data Systems (RADS)</a> — BI-RADS for breast, Lung-RADS for lung screening, LI-RADS for liver, PI-RADS for prostate, and others. These give radiologists standardized assessment categories that translate directly into management recommendations, turning a subjective impression into a shared, actionable vocabulary. For readers new to these acronyms, our <Link to="/blog/ai-radiology-terminology-glossary/" className="text-xaid-blue-strong underline underline-offset-2">AI radiology terminology glossary</Link> defines the common terms.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How reports get created: dictation, speech recognition, and AI drafting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For decades the report was born from dictation. The radiologist spoke; a transcriptionist typed. Speech recognition then removed the transcriptionist — and, with them, a layer of error-catching. That trade-off is measurable. A <a href="https://doi.org/10.1148/ryai.230205" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2024 study in <em>Radiology: Artificial Intelligence</em></a> reviewing 3,233 CT and MRI reports found that 44.2% contained at least one error, and 3.2% carried a clinically significant error, with longer reports, resident dictation, and overnight shifts all associated with higher error rates.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The next shift inverts the workflow. Instead of dictating from a blank page, the radiologist starts from a draft. AI reporting software — increasingly built on <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models rather than narrow single-finding detectors</Link> — generates a structured preliminary report directly from the study. The radiologist verifies, edits, and finalizes it. The goal is not to remove the reader but to remove the blank page.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the "draft-then-sign" model, examined in depth in our piece on <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="text-xaid-blue-strong underline underline-offset-2">generative AI radiology reporting and the draft-then-sign workflow</Link>. It changes where the radiologist spends time — less on dictation mechanics, more on judgment — without changing who is accountable for the content.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Turnaround time: why radiology reporting is also an operations problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A report is only useful when it arrives in time to change a decision. Report turnaround time — from study completion to a finalized, signed report — is one of the most watched quality metrics in imaging, and one of the first things a referring service notices. Rising imaging volume and workforce pressure have made it harder to hold, which is exactly where drafting AI is aimed: shrinking the interpretation-to-report step rather than the reading itself. We break down realistic benchmarks in our guide to <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT report turnaround time</Link>, and the accuracy question in <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="text-xaid-blue-strong underline underline-offset-2">how accurate AI radiology reporting is</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What "ready-to-sign" means in an AI radiology reporting workflow
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The most important thing to understand about AI in radiology reporting is what it does <em>not</em> do: it does not sign. In the xAID workflow, the AI produces a structured preliminary report from the CT study; an in-house radiologist reviews every preliminary; and the report is delivered <strong>ready-to-sign</strong>, so the client's reading radiologist signs the final report that enters the patient's chart.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That distinction is not just editorial caution — it is the regulatory reality. No AI system is cleared for autonomous final reporting without radiologist sign-off in the United States. Reporting AI is best understood as a tool that reshapes the draft, not the responsibility. If you want to see the mechanics end to end, our overview of <Link to="/how-ai-ct-reporting-works/" className="text-xaid-blue-strong underline underline-offset-2">how AI CT reporting works</Link> walks through each step.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is radiology reporting?',
                    a: 'Radiology reporting is the process of documenting the findings of an imaging study — such as a CT, MRI, X-ray, or ultrasound — in a formal written report that communicates the results and their clinical significance to the referring clinician. The American College of Radiology recommends a formal, written report for all studies, and treats that report as the definitive documentation of the examination.',
                  },
                  {
                    q: 'What is the difference between narrative and structured radiology reporting?',
                    a: "Narrative (free-text) reporting is a radiologist's prose description of the findings, written or dictated in the reader's own words. Structured reporting organizes the same information into standardized headings, sections, and data elements — often using shared templates. A 2022 systematic review in European Radiology found that structured reporting can improve report quality and completeness, though radiologists sometimes perceive templates as rigid or slower for complex cases.",
                  },
                  {
                    q: 'What is radiology reporting software?',
                    a: 'Radiology reporting software is the platform a radiologist uses to create the report: it typically combines dictation or speech recognition, structured templates, prior-report comparison, and integration with the PACS and RIS. Modern systems increasingly add AI that drafts a structured report from the images for the radiologist to review, edit, and finalize.',
                  },
                  {
                    q: 'How is AI changing radiology reporting?',
                    a: 'AI is shifting the report from something dictated from a blank page to something drafted in advance. Foundation-model systems can generate a structured preliminary report directly from a CT study, which the radiologist then verifies and edits. This can reduce dictation time and typographical error, but the radiologist remains responsible for the content and the final signature.',
                  },
                  {
                    q: 'Does AI sign the radiology report?',
                    a: "No. AI drafts; a human radiologist signs. In the xAID workflow the AI produces a structured preliminary report, an in-house radiologist reviews every preliminary, and the report is delivered ready-to-sign so the client's reading radiologist signs the final report. No AI system is cleared for autonomous final reporting without radiologist sign-off in the United States.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: ACR Practice Parameters and Technical Standards and ACR Reporting and Data Systems (<a href="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">acr.org</a>); RSNA <a href="https://www.rsna.org/practice-tools/data-tools-and-standards/radreport-reporting-templates" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RadReport</a>; Brady, "Radiology reporting—from Hemingway to HAL?", <em>Insights into Imaging</em> 2018 (<a href="https://doi.org/10.1007/s13244-018-0596-3" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s13244-018-0596-3</a>); Nobel et al., structured reporting systematic review, <em>European Radiology</em> 2022 (<a href="https://doi.org/10.1007/s00330-021-08327-5" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s00330-021-08327-5</a>); Marcovici &amp; Taylor, <em>AJR</em> 2014 (<a href="https://doi.org/10.2214/AJR.14.12636" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.2214/AJR.14.12636</a>); speech-recognition error study, <em>Radiology: Artificial Intelligence</em> 2024 (<a href="https://doi.org/10.1148/ryai.230205" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1148/ryai.230205</a>). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A structured report, drafted for you. Signed by your radiologist."
          sub="xAID turns a CT study into a structured, ready-to-sign preliminary report — reviewed in-house before it reaches you. Try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Workflow</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Generative AI Radiology Reporting: Draft, Then Sign</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks</div>
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

export default RadiologyReportingGuide;
