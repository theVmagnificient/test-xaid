import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const AiInRadiology = () => {
  const post = {
    title: 'AI in Radiology: The Complete 2026 Guide',
    dateIso: '2026-07-19',
    date: 'July 19, 2026',
    category: 'Reference',
    readingTime: 10,
    description: 'A complete 2026 guide to AI in radiology: detection vs. drafting vs. triage, the FDA/CE regulatory landscape, the evidence base, and how practices adopt it safely.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI in Radiology: The Complete 2026 Guide | xAID</title>
        <meta name="description" content="A complete 2026 guide to AI in radiology: detection vs. drafting vs. triage, FDA/CE regulation, the evidence base, and how practices adopt it safely." />
        <link rel="canonical" href="https://xaid.ai/blog/ai-in-radiology" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI in Radiology: The Complete 2026 Guide | xAID" />
        <meta property="og:description" content="A complete 2026 guide to AI in radiology: detection vs. drafting vs. triage, FDA/CE regulation, the evidence base, and how practices adopt it safely." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-in-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI in Radiology: The Complete 2026 Guide | xAID" />
        <meta name="twitter:description" content="A complete 2026 guide to AI in radiology: detection vs. drafting vs. triage, FDA/CE regulation, the evidence base, and how practices adopt it safely." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-in-radiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-in-radiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "AI in radiology, radiology AI, AI radiology, AI for radiology, radiology artificial intelligence"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is AI in radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI in radiology refers to software that analyzes medical images or generates report text to support a radiologist's interpretation. It spans three broad jobs: detection (flagging a specific finding, like a nodule or fracture), drafting (generating structured or narrative report text from a full study), and triage (reordering a worklist so urgent cases are read first). As of 2026, essentially all clinically deployed radiology AI is designed to assist a radiologist, not replace one — no algorithm has FDA or CE authorization for autonomous, unreviewed final reporting."
              }
            },
            {
              "@type": "Question",
              "name": "What are the main types of radiology AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology AI generally falls into three categories. Narrow detection tools find one finding type on one modality, such as intracranial hemorrhage on head CT. Generative drafting tools take a full study and produce a structured, editable report draft covering all findings. Triage and notification tools don't diagnose at all — they flag a study as likely-positive and move it up the reading queue or alert a specialist. Foundation-model systems increasingly combine detection and drafting into a single comprehensive report rather than a stack of separate point solutions."
              }
            },
            {
              "@type": "Question",
              "name": "Is AI radiology reporting FDA-approved or CE-marked?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Individual algorithms can be, but there is no single blanket approval for \"AI radiology reporting\" as a category. In the US, the FDA has authorized 1,451 AI/ML-enabled medical devices through the end of 2025, and radiology accounts for 1,104 of them (about 76%), each cleared for a specific intended use via the 510(k) or De Novo pathway. In the EU, most diagnostic radiology AI software is CE-marked as a medical device under MDR Rule 11, typically Class IIb, and is now also subject to a phase-in of EU AI Act high-risk obligations. Buyers should check the specific cleared indication for each tool rather than assuming general-purpose approval."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is AI for radiology compared to a radiologist reading alone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2025 systematic review and meta-analysis in BJR|Artificial Intelligence pooling 23 studies of AI-assisted cancer detection on chest X-ray, CT, and MRI found pooled sensitivity rose from 0.67 without AI assistance to 0.79 with it, while specificity rose from 0.82 to 0.87. That pattern — AI assistance improving sensitivity more than it costs in specificity — is consistent with other published radiology AI evidence, though performance varies by finding type, and 17 of the 34 studies in the broader systematic review (of which those 23 are a subset) carried some risk of bias by QUADAS-C criteria, so results should be read as directional rather than a universal guarantee."
              }
            },
            {
              "@type": "Question",
              "name": "Will AI replace radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No currently authorized system removes the radiologist from the loop for final diagnosis. Regulatory clearances, professional-society guidance, and the published evidence base all describe AI as a detection, drafting, or triage aid that a radiologist reviews before a report is finalized. The workforce data points the same way: the AAMC projects a physician shortage of up to 86,000 by 2036, with radiology grouped among the specialties facing that projected shortfall, which is why AI is being adopted mainly to add capacity rather than cut headcount."
              }
            },
            {
              "@type": "Question",
              "name": "How do radiology practices start using AI safely?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In May 2026, the ACR and SIIM approved the first practice parameter for imaging AI, which lays out a governance structure, a tool inventory, local acceptance testing before go-live, and ongoing real-world performance monitoring — supported by ACR's Assess-AI registry, which lets a site benchmark its algorithm's live performance against national data. In practice, that means starting with a defined pilot, validating output quality on your own cases before any contract change, and keeping a radiologist accountable for every signed report."
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
                Reference
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              AI in radiology:<br />
              <span className="text-white/60">the complete 2026 guide</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              AI in radiology is not one product category. It's at least three different jobs — detecting a finding, drafting a report, and triaging a worklist — running under two different regulatory regimes, with a published evidence base that supports assistance, not autonomy. Here's the full landscape in one place.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '76%', label: 'Of FDA AI device clearances', sub: 'are radiology, through 2025' },
                { stat: '47.9%', label: 'Of EU radiologists use AI', sub: 'up from 20.4% in 2018' },
                { stat: '0.79', label: 'Pooled sensitivity with AI', sub: 'vs 0.67 without, cancer detection' },
                { stat: 'Class IIb', label: 'Typical EU MDR risk class', sub: 'for diagnostic radiology AI' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1 break-words">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1 break-words">{s.label}</div>
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
                What is AI in radiology, exactly?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "AI in radiology" gets used as a catch-all, but the software living under that label does genuinely different jobs. Some tools look at one modality and flag one finding. Others read a whole study and write a draft report. Others don't interpret anything — they just decide which study a radiologist should open first. Confusing these three is the most common reason a buyer picks the wrong tool for the wrong problem.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What all of them share, in every jurisdiction that regulates them today, is the same design constraint: a radiologist reviews the output before it becomes a final report. Terms and definitions used throughout this guide — DICOM, sensitivity/specificity, structured reporting, and more — are collected in the <Link to="/blog/ai-radiology-terminology-glossary/" className="text-xaid-blue-strong underline underline-offset-2">AI radiology terminology glossary</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Detection vs. drafting vs. triage: the three jobs radiology AI does
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Detection',
                    desc: 'Narrow, single-finding tools trained to flag one abnormality on one modality — a lung nodule on chest CT, a fracture on an X-ray, intracranial hemorrhage on a head CT. Most FDA-cleared radiology AI still falls in this category: one algorithm, one finding, one indication for use.',
                  },
                  {
                    title: 'Drafting',
                    desc: 'Generative tools that take an entire study and produce a structured or narrative report draft — not just a flag, but findings, measurements, and an impression a radiologist edits and signs. Foundation-model systems that cover many findings at once sit here, replacing what used to require a stack of separate detection tools.',
                  },
                  {
                    title: 'Triage',
                    desc: "Tools that don't diagnose at all. They score a study as likely-positive for a time-sensitive condition — large-vessel-occlusion stroke, pulmonary embolism, pneumothorax — and reorder the worklist or push a notification so a radiologist reads it sooner, without waiting in the standard queue.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The evidence for each job looks different. On detection, a 2025 systematic review in <a href="https://doi.org/10.1093/bjrai/ubaf016" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">BJR|Artificial Intelligence</a> pooled 23 studies of AI-assisted cancer detection across chest X-ray, CT, and MRI and found pooled sensitivity rose from <strong>0.67 to 0.79</strong> with AI assistance, and specificity rose from <strong>0.82 to 0.87</strong> — a meaningful gain, though 17 of the 34 studies in the broader systematic review (of which those 23 are a subset) carried some risk of bias by QUADAS-C criteria.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                On triage, a peer-reviewed before-and-after study published in the <a href="https://doi.org/10.3390/jcm14041281" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of Clinical Medicine</a> found that adding an AI large-vessel-occlusion detection and notification tool at a stroke center cut door-to-endovascular-therapy time by 30.2 minutes and CT-to-neurologist-exam time by 16.4 minutes, alongside a larger improvement in stroke-severity scores. On drafting, two independent chest X-ray studies covered in <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="text-xaid-blue-strong underline underline-offset-2">a separate deep dive</Link> show the same draft-then-sign pattern: faster reads, a sensitivity lift, radiologist review unchanged.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How widely is radiology AI actually used today?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Adoption has moved from pilot projects to routine use, but unevenly. A 2024 European Society of Radiology survey published in <a href="https://doi.org/10.1186/s13244-024-01801-w" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Insights into Imaging</em></a> found <strong>47.9%</strong> of 572 responding radiologists were using AI in clinical practice — up from just <strong>20.4%</strong> in the same survey's 2018 predecessor, a jump of roughly 28 percentage points in six years. CT and radiography were the most common modalities for certified AI use.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Leadership is planning around it, too: a <a href="https://pubmed.ncbi.nlm.nih.gov/39800091/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2025 JACR survey</a> of academic radiology department chairs found all 43 responding chairs planned to use AI to improve quality and efficiency, and 95% cited reducing burnout as a driver — with the interpretation workflow and postprocessing steps named as the most likely places AI would be applied first.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But adoption isn't evenly distributed. Where reimbursement gates access — as with Medicare's temporary add-on payment for stroke-AI, which <Link to="/blog/radiology-ai-access-disparities/" className="text-xaid-blue-strong underline underline-offset-2">peaked at just 21% of eligible cases</Link> in 2022 and concentrated at large, well-resourced hospitals — smaller and community sites lag. And with the workforce under strain (the AAMC projects a shortage of up to <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">86,000 physicians by 2036</Link>, with radiology grouped among the specialties facing that projected shortfall), the sites that could use added reporting capacity most are often the ones with the least capital to buy it. That workforce pressure is also behind the question of whether AI could eventually take over the job outright — covered in more depth in <Link to="/blog/will-ai-replace-radiologists/" className="text-xaid-blue-strong underline underline-offset-2">will AI replace radiologists?</Link>
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The regulatory landscape: FDA clearance and CE marking
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In the US, the <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA's public list</a> of AI/ML-enabled medical devices had grown to <strong>1,451</strong> cumulative authorizations through the end of 2025, and radiology accounted for <strong>1,104</strong> of them — about <strong>76%</strong>, the largest single specialty by a wide margin, cleared through the 510(k) or De Novo pathway. Each clearance covers a specific indication for use; there is no blanket approval that covers "AI radiology" as a category, which is why the ACR's <a href="https://www.acr.org/Data-Science-and-Informatics/AI-in-Your-Practice/Performance-Monitoring" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AI Central</a> directory exists — to let practices look up what, specifically, a given product is cleared to do.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In the EU, diagnostic radiology software is classified under MDR Annex VIII Rule 11, per the European Commission's <a href="https://health.ec.europa.eu/system/files/2020-09/md_mdcg_2019_11_guidance_en_0.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MDCG 2019-11</a> guidance: software that informs diagnostic decisions is Class IIa by default, escalating to <strong>Class IIb</strong> when a wrong output could cause serious deterioration in health — the bracket most diagnostic imaging AI falls into. On top of MDR, the EU AI Act layers high-risk obligations onto the same products; under the Digital Omnibus agreement reached by the Council and Parliament in May 2026, medical-device AI now has until <strong>August 2, 2028</strong> to meet the Act's full high-risk requirements, a year later than originally planned, while harmonized technical standards are finalized.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Regulatory approval, in both regions, answers a narrower question than buyers often assume: it says a specific tool met a specific safety and performance bar for a specific use — not that any AI system is cleared to finalize a report without a radiologist.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Workflow integration: what it takes to deploy AI safely
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Clearance is table stakes; deployment is where most of the real risk sits. In May 2026, the ACR and SIIM approved the <strong>first practice parameter for imaging AI</strong>, which asks facilities to set up an AI governance structure, maintain a tool inventory, run local acceptance testing before go-live, and monitor real-world performance on an ongoing basis. ACR's companion <strong>Assess-AI</strong> registry operationalizes that last step, letting a site benchmark its algorithm's live performance against national data drawn from other facilities and flag drift before it becomes a quality problem.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That governance burden multiplies with every point solution a practice bolts on — a separate vendor, integration, and monitoring workflow for each single-finding detector, an architecture explained in more depth in the <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models vs. narrow AI comparison</Link>. Practices evaluating vendors should also work through a structured checklist — accuracy data, pricing model, radiologist-review process, and compliance — covered in the <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="text-xaid-blue-strong underline underline-offset-2">2026 buyer's guide</Link>, and the practical integration steps in <Link to="/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">how to switch from teleradiology to AI CT reporting</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID sits in the drafting category above, built as a single foundation model rather than a bundle of narrow detectors: it produces one comprehensive report draft covering the full CT study, with in-house radiologist review on every preliminary before it's delivered ready-to-sign — final signature stays with your reading radiologist. That's the same detection-and-drafting evidence and the same human-in-the-loop regulatory posture described throughout this guide, applied to a single per-study workflow instead of a stack of point tools.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is AI in radiology?',
                    a: "AI in radiology refers to software that analyzes medical images or generates report text to support a radiologist's interpretation. It spans three broad jobs: detection (flagging a specific finding, like a nodule or fracture), drafting (generating structured or narrative report text from a full study), and triage (reordering a worklist so urgent cases are read first). As of 2026, essentially all clinically deployed radiology AI is designed to assist a radiologist, not replace one — no algorithm has FDA or CE authorization for autonomous, unreviewed final reporting.",
                  },
                  {
                    q: 'What are the main types of radiology AI?',
                    a: "Radiology AI generally falls into three categories. Narrow detection tools find one finding type on one modality, such as intracranial hemorrhage on head CT. Generative drafting tools take a full study and produce a structured, editable report draft covering all findings. Triage and notification tools don't diagnose at all — they flag a study as likely-positive and move it up the reading queue or alert a specialist. Foundation-model systems increasingly combine detection and drafting into a single comprehensive report rather than a stack of separate point solutions.",
                  },
                  {
                    q: 'Is AI radiology reporting FDA-approved or CE-marked?',
                    a: 'Individual algorithms can be, but there is no single blanket approval for "AI radiology reporting" as a category. In the US, the FDA has authorized 1,451 AI/ML-enabled medical devices through the end of 2025, and radiology accounts for 1,104 of them (about 76%), each cleared for a specific intended use via the 510(k) or De Novo pathway. In the EU, most diagnostic radiology AI software is CE-marked as a medical device under MDR Rule 11, typically Class IIb, and is now also subject to a phase-in of EU AI Act high-risk obligations. Buyers should check the specific cleared indication for each tool rather than assuming general-purpose approval.',
                  },
                  {
                    q: 'How accurate is AI for radiology compared to a radiologist reading alone?',
                    a: 'A 2025 systematic review and meta-analysis in BJR|Artificial Intelligence pooling 23 studies of AI-assisted cancer detection on chest X-ray, CT, and MRI found pooled sensitivity rose from 0.67 without AI assistance to 0.79 with it, while specificity rose from 0.82 to 0.87. That pattern — AI assistance improving sensitivity more than it costs in specificity — is consistent with other published radiology AI evidence, though performance varies by finding type, and 17 of the 34 studies in the broader systematic review (of which those 23 are a subset) carried some risk of bias by QUADAS-C criteria, so results should be read as directional rather than a universal guarantee.',
                  },
                  {
                    q: 'Will AI replace radiologists?',
                    a: 'No currently authorized system removes the radiologist from the loop for final diagnosis. Regulatory clearances, professional-society guidance, and the published evidence base all describe AI as a detection, drafting, or triage aid that a radiologist reviews before a report is finalized. The workforce data points the same way: the AAMC projects a physician shortage of up to 86,000 by 2036, with radiology grouped among the specialties facing that projected shortfall, which is why AI is being adopted mainly to add capacity rather than cut headcount.',
                  },
                  {
                    q: 'How do radiology practices start using AI safely?',
                    a: "In May 2026, the ACR and SIIM approved the first practice parameter for imaging AI, which lays out a governance structure, a tool inventory, local acceptance testing before go-live, and ongoing real-world performance monitoring — supported by ACR's Assess-AI registry, which lets a site benchmark its algorithm's live performance against national data. In practice, that means starting with a defined pilot, validating output quality on your own cases before any contract change, and keeping a radiologist accountable for every signed report.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA AI/ML-Enabled Medical Devices list</a> (via <a href="https://theimagingwire.com/2026/03/11/numbers-from-the-fda-show-radiology-is-maintaining-its-lead/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>); European Society of Radiology 2024 survey, <em>Insights into Imaging</em>, <a href="https://doi.org/10.1186/s13244-024-01801-w" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1186/s13244-024-01801-w</a>; <em>BJR|Artificial Intelligence</em> systematic review, <a href="https://doi.org/10.1093/bjrai/ubaf016" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1093/bjrai/ubaf016</a>; <em>Journal of Clinical Medicine</em>, <a href="https://doi.org/10.3390/jcm14041281" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.3390/jcm14041281</a>; European Commission <a href="https://health.ec.europa.eu/system/files/2020-09/md_mdcg_2019_11_guidance_en_0.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MDCG 2019-11</a>; Council of the EU, <a href="https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Digital Omnibus on AI agreement</a>, May 7, 2026; ACR <a href="https://www.acr.org/News-and-Publications/Media-Center/2026/first-practice-parameter-for-imaging-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Practice Parameter for Imaging AI</a>, May 5, 2026; JACR leadership survey, <a href="https://pubmed.ncbi.nlm.nih.gov/39800091/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">PubMed 39800091</a>; AAMC, <a href="https://www.aamc.org/media/75236/download" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"The Complexities of Physician Supply and Demand: Projections From 2021 to 2036"</a> (2024); Neiman Health Policy Institute, <em>AJNR</em>, <a href="https://doi.org/10.3174/ajnr.A9494" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.3174/ajnr.A9494</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="One model. One draft. Radiologist-reviewed, ready to sign."
          sub="See how xAID's foundation model handles detection and drafting in a single CT report — try it on 5 free studies."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting Software: A 2026 Buyer's Guide</div>
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

export default AiInRadiology;
