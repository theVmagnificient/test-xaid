import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyFollowUpRecommendationTracking = () => {
  const post = {
    title: "The Radiologist Got It Right. The Follow-Up Never Happened. What a New Lung Cancer Lawsuit Says About Radiology Follow-Up Recommendations",
    dateIso: '2026-09-20',
    date: 'September 20, 2026',
    category: 'Risk & Liability',
    readingTime: 7,
    description: "A South Carolina lawsuit alleges a radiologist correctly flagged an 8mm lung nodule and recommended follow-up CT — then the recommendation sat unactioned for nearly three years until stage 4 cancer was found. The failure wasn't a misread. It was a tracking gap.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Why Radiology Follow-Up Recommendations Get Lost | xAID</title>
        <meta name="description" content="A radiologist flagged a lung nodule and recommended follow-up CT. Three years later it was stage 4 cancer. Why follow-up recommendations get lost." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-follow-up-recommendation-tracking" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Why Radiology Follow-Up Recommendations Get Lost | xAID" />
        <meta property="og:description" content="A radiologist flagged a lung nodule and recommended follow-up CT. Three years later it was stage 4 cancer. Why follow-up recommendations get lost." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Radiology Follow-Up Recommendations Get Lost | xAID" />
        <meta name="twitter:description" content="A radiologist flagged a lung nodule and recommended follow-up CT. Three years later it was stage 4 cancer. Why follow-up recommendations get lost." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-follow-up-recommendation-tracking" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-follow-up-recommendation-tracking",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology follow-up recommendations, closed-loop communication radiology, incidental lung nodule follow-up, Fleischner criteria follow-up tracking, radiology malpractice follow-up failure"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does the Shannon James lawsuit against Roper St. Francis allege?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "According to Radiology Business and local news reporting, South Carolina patient Shannon James is suing Roper St. Francis Hospital and her primary care physician, Dr. Alexis Jesup, after a radiologist correctly identified an 8mm lung nodule on a July 2022 CT scan and recommended follow-up chest CT in 6-12 months per Fleischner criteria. The lawsuit alleges the recommendation was never communicated to the patient or acted on, through two subsequent annual exams and a visit for respiratory symptoms, until a pulmonologist discovered the original scan in the chart nearly three years later. By then imaging showed a 3.1cm tumor and the patient was diagnosed with stage 4 metastatic lung cancer. These are allegations in an active lawsuit filed in September 2026; attorneys for Roper St. Francis have since filed a response denying the allegations and asking the court to dismiss the claims."
              }
            },
            {
              "@type": "Question",
              "name": "How is a follow-up failure different from a missed radiology read?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a missed read, the radiologist fails to perceive or correctly characterize a finding — the report itself is wrong. In a follow-up failure, the report is correct: a finding is identified, a follow-up exam is recommended with a specific modality and timeframe, but no one acts on it. The James lawsuit alleges the second pattern — the radiologist's interpretation and recommendation are not in dispute. The error is downstream, in communication and tracking, which is why the fix is different: closed-loop tracking of recommendations, not better interpretation."
              }
            },
            {
              "@type": "Question",
              "name": "How often do recommended follow-up imaging exams actually get completed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Published data shows a persistent gap. A 2017 AJR study by Wandtke and Spinelli found only 43.1% of recommended follow-up exams were completed on time at baseline; a multistage tracking system raised completion to 70.5%. A separate study of the FIND incidental-findings tracking program found follow-up completion rose from 30.8% before tracking to over 50% after it was implemented, and RSNA has reported that as few as 17% of emergency department patients with incidental findings receive appropriate follow-up without a dedicated system."
              }
            },
            {
              "@type": "Question",
              "name": "How can structured, trackable follow-up recommendations prevent this?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Three things need to happen: the recommendation needs to be written in a consistent, machine-findable field rather than buried in narrative text; it needs to be tracked against a clock with escalation when the deadline passes; and every recommendation needs to end in a documented outcome — completed, deliberately deferred, or patient unreachable — rather than silence. Structured radiology reports make the first step possible at scale, because a tracking system can only act on a recommendation it can reliably locate."
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
                Risk &amp; Liability
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              The radiologist got it right.<br />
              <span className="text-white/60">The follow-up never happened.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new lawsuit against a South Carolina hospital alleges an 8mm lung nodule was correctly flagged for follow-up CT in 2022 — and that the recommendation sat untouched for nearly three years, until it was stage 4 cancer. This is not a missed-read story. It's a tracking-failure story, and the data says it's common.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '8mm', label: 'Lung nodule found on CT', sub: 'flagged correctly, July 2022' },
            { stat: '~3 yrs', label: 'Recommendation went unactioned', sub: 'through two annual exams' },
            { stat: '43%→71%', label: 'On-time follow-up completion', sub: 'before vs after tracking, AJR 2017' },
            { stat: 'Stage 4', label: 'Cancer stage at diagnosis', sub: 'vs a 6–12 month follow-up window' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The finding, and what happened to it
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                As <a href="https://radiologybusiness.com/topics/healthcare-management/legal-news/radiologists-rec-follow-ct-falls-through-cracks-leading-patients-terminal-diagnosis-3-years-later" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> and local outlets including <a href="https://www.live5news.com/2026/09/15/lawsuit-woman-diagnosed-with-terminal-cancer-after-roper-st-francis-doctor-missed-scan-results/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Live 5 News</a> and <a href="https://www.wfsb.com/2026/09/16/woman-was-not-told-about-lung-nodule-years-before-terminal-cancer-diagnosis-lawsuit-alleges/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">WFSB</a> report, South Carolina patient Shannon James — a non-smoker — went to primary care physician Dr. Alexis Jesup for an annual physical on June 15, 2022. Because of elevated triglycerides and a family history of coronary disease, Jesup ordered a cardiac CT scoring study, performed July 26, 2022 at a Roper St. Francis facility.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The cardiac score came back at zero. But the radiologist's report documented something else: <strong>"There is a lobular nodule within the left lower lobe measuring up to 8 mm in size. Per Fleischner criteria, recommended follow-up chest CT 6-12 months for further evaluation."</strong> That recommendation follows the widely used <a href="https://doi.org/10.1148/radiol.2017161659" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2017 Fleischner Society guidelines</a> for incidental pulmonary nodules to the letter — an 8mm solid nodule in a low-risk adult calls for a single follow-up CT within that window.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The lawsuit alleges that follow-up never happened. Dr. Jesup allegedly never communicated the nodule to the patient and never ordered the recommended scan. The nodule went unmentioned at her next annual exam in June 2023. In 2024, when James developed a cough, wheezing, and shortness of breath, the complaint alleges those symptoms were attributed to allergies rather than investigated against the flagged finding sitting in her chart.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The recommendation surfaced by accident. In early 2025, a pulmonologist reviewing James's history found the original 2022 report and ordered a new CT, performed May 7, 2025. The nodule had grown to a 3.1cm mass with extensive mediastinal lymph node enlargement. Follow-up scans and biopsy confirmed stage 4A metastatic adenocarcinoma with spread to the pelvis; an MD Anderson oncologist documented the treatment plan as palliative, not curative. James and her husband filed suit against Roper St. Francis and Dr. Jesup on September 8, 2026, alleging gross negligence and medical malpractice. These are allegations in an active case; attorneys for Roper St. Francis filed a response on September 16 denying the allegations and moving to dismiss all claims.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Notice what isn't in dispute
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most radiology malpractice coverage — including <Link to="/blog/radiology-malpractice-ai-reporting/" className="text-xaid-blue-strong underline underline-offset-2">a $7M verdict we've covered before</Link> — centers on an interpretation error: a finding a radiologist missed or mischaracterized. That's not the allegation here. The radiologist's read, the nodule measurement, and the Fleischner-guideline recommendation are not in dispute in this case. The complaint instead alleges, per plaintiff attorneys' characterization reported by Radiology Business, that the hospital and its physicians failed to have adequate protocols and systems in place to ensure incidental radiologic findings result in specific imaging follow-up recommendations that get acted on within the required timeframe.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a categorically different failure mode, and it needs a categorically different fix. An accurate report that never gets acted on produces the same outcome as an inaccurate one — a patient who needed a 6-12 month scan gets one three years late — but no amount of improving radiologist accuracy would have prevented it. The recommendation already existed. It just wasn't tracked.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">&nbsp;</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Missed read</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Missed follow-up</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Where the error happens</td>
                      <td className="py-3 pr-4">At interpretation — the finding is missed or mischaracterized</td>
                      <td className="py-3">After interpretation — a correct recommendation is never actioned</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">What the report says</td>
                      <td className="py-3 pr-4">The wrong thing</td>
                      <td className="py-3">The right thing — and it goes nowhere</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Who is exposed</td>
                      <td className="py-3 pr-4">Primarily the interpreting radiologist</td>
                      <td className="py-3">Ordering clinician, care team, and the institution's systems</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">Primary safeguard</td>
                      <td className="py-3 pr-4">Interpretation quality: second reads, AI assistance, peer review</td>
                      <td className="py-3">Structured, findable recommendations + closed-loop tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This gap is measured, and it's large
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The James case is severe, but the underlying failure rate is not rare. In a 2017 <em>AJR</em> study, Wandtke and Spinelli audited what happened to radiologist follow-up recommendations at their institution: only <strong>43.1%</strong> were completed on time at baseline. After a multistage tracking system — automated checks plus escalating human outreach — completion rose to <strong>70.5%</strong> (<a href="https://doi.org/10.2214/AJR.17.18332" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Wandtke &amp; Spinelli, AJR 2017</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A separate audit of the FIND incidental-findings tracking program, covered by <a href="https://www.rsna.org/news/2025/march/communicating-incidental-findings" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RSNA</a>, found follow-up completion rose from <strong>30.8%</strong> before tracking to over <strong>50%</strong> after it was implemented. The same RSNA reporting cites Dr. Christopher Moore, chief of the Section of Emergency Ultrasound in Yale's Department of Emergency Medicine, on why these findings fall through: patients often present for an unrelated complaint, care spans different shifts and providers, and "it can make it difficult to ensure that incidental findings are reliably communicated and followed" — with as few as <strong>17%</strong> of ED patients' incidental findings receiving appropriate follow-up absent a dedicated system.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read those baselines again: 43.1%, 30.8%, 17%. Without active tracking, a substantial share — in some settings a majority — of correct radiologist follow-up recommendations are not completed on time. The James lawsuit is what the tail end of that distribution looks like when the delayed exam would have caught a cancer early.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually closes the loop
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. A structured, findable recommendation',
                    desc: 'A recommendation embedded in narrative prose — "consider follow-up if clinically indicated" — is easy to lose. A recommendation with an explicit modality and timeframe, in a consistent, dedicated field, is something a person or a tracking system can locate months or years later without re-reading the whole report.',
                  },
                  {
                    title: '2. Tracking with an actual clock and escalation',
                    desc: 'A recommendation that lives only in a PDF report has no deadline. A tracking workflow logs the due date, checks whether the exam was scheduled, and escalates to the ordering clinician — and eventually the patient — when it isn\'t. Wandtke\'s multistage design is what moved completion from 43.1% to 70.5%; a single, one-time notification did far less.',
                  },
                  {
                    title: '3. Documented closure on every recommendation',
                    desc: 'Every recommendation should end in a recorded state: exam completed, deliberately deferred with documented reasoning, or patient unreachable after logged attempts. "No one knows what happened to it" is the state that turns into a three-year gap — and, as this case shows, a lawsuit.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                All three of those ingredients depend on the report itself being structured rather than free text. A tracking system, or a human reviewing a chart years later, can only act on a recommendation it can reliably find. That's the premise behind <Link to="/how-ai-ct-reporting-works/" className="text-xaid-blue-strong underline underline-offset-2">AI CT reporting the way xAID builds it</Link>: every study produces a structured report where findings and follow-up recommendations sit in a consistent, machine-readable section — never buried mid-paragraph — so a downstream tracking workflow can surface and flag them automatically, ready-to-sign by the reading radiologist. A structured field doesn't schedule the CT itself; that still takes a tracking process on the clinical side. But it removes the exact failure this lawsuit alleges: a correct recommendation that the system around it couldn't see.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What does the Shannon James lawsuit against Roper St. Francis allege?',
                    a: "According to Radiology Business and local news reporting, South Carolina patient Shannon James is suing Roper St. Francis Hospital and her primary care physician, Dr. Alexis Jesup, after a radiologist correctly identified an 8mm lung nodule on a July 2022 CT scan and recommended follow-up chest CT in 6-12 months per Fleischner criteria. The lawsuit alleges the recommendation was never communicated to the patient or acted on, through two subsequent annual exams and a visit for respiratory symptoms, until a pulmonologist discovered the original scan in the chart nearly three years later. By then imaging showed a 3.1cm tumor and the patient was diagnosed with stage 4 metastatic lung cancer. These are allegations in an active lawsuit filed in September 2026; attorneys for Roper St. Francis have since filed a response denying the allegations and asking the court to dismiss the claims.",
                  },
                  {
                    q: 'How is a follow-up failure different from a missed radiology read?',
                    a: 'In a missed read, the radiologist fails to perceive or correctly characterize a finding — the report itself is wrong. In a follow-up failure, the report is correct: a finding is identified, a follow-up exam is recommended with a specific modality and timeframe, but no one acts on it. The James lawsuit alleges the second pattern — the radiologist\'s interpretation and recommendation are not in dispute. The error is downstream, in communication and tracking, which is why the fix is different: closed-loop tracking of recommendations, not better interpretation.',
                  },
                  {
                    q: 'How often do recommended follow-up imaging exams actually get completed?',
                    a: 'Published data shows a persistent gap. A 2017 AJR study by Wandtke and Spinelli found only 43.1% of recommended follow-up exams were completed on time at baseline; a multistage tracking system raised completion to 70.5%. A separate study of the FIND incidental-findings tracking program found follow-up completion rose from 30.8% before tracking to over 50% after it was implemented, and RSNA has reported that as few as 17% of emergency department patients with incidental findings receive appropriate follow-up without a dedicated system.',
                  },
                  {
                    q: 'How can structured, trackable follow-up recommendations prevent this?',
                    a: 'Three things need to happen: the recommendation needs to be written in a consistent, machine-findable field rather than buried in narrative text; it needs to be tracked against a clock with escalation when the deadline passes; and every recommendation needs to end in a documented outcome — completed, deliberately deferred, or patient unreachable — rather than silence. Structured radiology reports make the first step possible at scale, because a tracking system can only act on a recommendation it can reliably locate.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/legal-news/radiologists-rec-follow-ct-falls-through-cracks-leading-patients-terminal-diagnosis-3-years-later" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.live5news.com/2026/09/15/lawsuit-woman-diagnosed-with-terminal-cancer-after-roper-st-francis-doctor-missed-scan-results/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Live 5 News</a>, and <a href="https://www.wfsb.com/2026/09/16/woman-was-not-told-about-lung-nodule-years-before-terminal-cancer-diagnosis-lawsuit-alleges/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">WFSB</a> (allegations from an active lawsuit; Roper St. Francis has since filed a response denying the allegations and moving to dismiss). Fleischner criteria: <a href="https://doi.org/10.1148/radiol.2017161659" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MacMahon et al., Radiology 2017</a>. Follow-up completion data: <a href="https://doi.org/10.2214/AJR.17.18332" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Wandtke &amp; Spinelli, AJR 2017</a>; <a href="https://www.rsna.org/news/2025/march/communicating-incidental-findings" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RSNA, 2025</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Recommendations that can't get lost in prose."
          sub="xAID reports are structured by design — findings and follow-up recommendations in consistent, flaggable fields, in-house review on every preliminary, delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/teleradiology-follow-up-recommendation-variability/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Teleradiologists Recommend More Follow-Up Imaging</div>
              </Link>
              <Link to="/blog/radiology-malpractice-ai-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Risk &amp; Liability</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Anatomy of a $7M Missed-Cancer Verdict</div>
              </Link>
              <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Malignancy Risk Models for Incidental Lung Nodules</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyFollowUpRecommendationTracking;
