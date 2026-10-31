import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RucSurveyAiRadiologyReimbursement = () => {
  const post = {
    title: 'AI Is Cutting Radiology Report Time. Does That Cut Reimbursement Too?',
    dateIso: '2026-10-31',
    date: 'October 31, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 8,
    description: "ACR and SIR launched RUC surveys on radiologist time, the input behind Medicare work RVUs. Could AI-shortened reporting time cut radiology reimbursement?",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Report Time and Radiology Reimbursement | xAID</title>
        <meta name="description" content="ACR and SIR launched RUC time surveys pricing radiology by the minute. Could AI-shortened report time cut radiology reimbursement, or free up higher-value work?" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Report Time and Radiology Reimbursement | xAID" />
        <meta property="og:description" content="ACR and SIR launched RUC time surveys pricing radiology by the minute. Could AI-shortened report time cut radiology reimbursement, or free up higher-value work?" />
        <meta property="og:url" content="https://xaid.ai/blog/ruc-survey-ai-radiology-reimbursement" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Report Time and Radiology Reimbursement | xAID" />
        <meta name="twitter:description" content="ACR and SIR launched RUC time surveys pricing radiology by the minute. Could AI-shortened report time cut radiology reimbursement, or free up higher-value work?" />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ruc-survey-ai-radiology-reimbursement" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ruc-survey-ai-radiology-reimbursement",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology reimbursement, RUC survey radiology, physician work RVU, Medicare Physician Fee Schedule, AI radiology reporting time"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a RUC survey, and why does it affect radiologist pay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The RVS Update Committee (RUC) is the AMA-convened, 32-member physician panel that recommends how much physician work each CPT code is worth under Medicare's Resource-Based Relative Value Scale. It builds those recommendations mainly from specialty-society surveys of practicing physicians — at least 30 respondents per code — who report how much time, skill, judgment, and stress a service takes. CMS has historically accepted more than 90% of RUC's recommendations into the Medicare Physician Fee Schedule."
              }
            },
            {
              "@type": "Question",
              "name": "What did ACR and SIR ask radiology members to do in October 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Both groups launched RUC surveys to members in late October 2026 ahead of the January 2027 RUC meeting. The American College of Radiology (ACR) is running five surveys covering bone age studies, central venous catheter insertion, deep venous arterialization, renal nerve denervation, and stab phlebectomy. The Society of Interventional Radiology (SIR) launched surveys on October 26 covering four of those same interventional-radiology services. ACR said the data would help CMS set physician reimbursement for these procedures in the 2028 Medicare Physician Fee Schedule."
              }
            },
            {
              "@type": "Question",
              "name": "Could AI-shortened report-drafting time reduce radiology reimbursement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is a real mechanical risk worth watching, not a current fact. Work RVUs are built from physician-reported time, and RUC's own potentially-misvalued-services process already revalues — and cuts — codes once evidence shows a service takes less time than previously assumed; it has flagged nearly 3,000 such services and redistributed more than $5 billion since 2009. Independent studies already show AI-drafted reports cutting measured reporting time by roughly 14.6% to 15.5% in real clinical use. If that kind of time saving ever shows up in a diagnostic-code RUC survey the way ACR and SIR are gathering time data for IR procedures right now, it could push that code's work RVU down."
              }
            },
            {
              "@type": "Question",
              "name": "Is there a case that AI should raise radiology's valuation instead of cutting it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Work RVUs are defined as time combined with intensity — technical skill, mental effort and judgment, and stress tied to patient risk — not elapsed minutes alone, and physician work is only about half of a code's total relative value. Minutes an AI draft saves on producing text can shift toward verification, discrepancy resolution against priors, and oversight of the AI's output — work that a bare time question won't capture unless radiology societies document it and bring that evidence into the next relevant RUC survey."
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
                Policy &amp; Reimbursement
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              AI is cutting radiology report time.<br />
              <span className="text-white/60">Does that cut reimbursement too?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              ACR and SIR just asked members to fill out RUC time surveys — the exact mechanism that turns minutes spent per study into Medicare's radiology reimbursement rates. If AI-drafted reporting is shrinking those minutes, the open question is what happens the next time someone measures them.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '2028', label: 'Fee schedule these surveys feed', sub: 'per ACR member alert' },
            { stat: '15.5%', label: 'AI cut on report documentation time', sub: 'JAMA Netw Open, 23,960 studies' },
            { stat: '14.6%', label: 'Drop in chest CT reporting time', sub: 'Radiology journal, 2026' },
            { stat: '90%+', label: 'RUC recommendations CMS adopts', sub: 'historical average, AMA' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What ACR and SIR just asked their members to do
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In late October 2026, the American College of Radiology and the Society of Interventional Radiology both <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/radiology-societies-seek-help-valuing-physician-services" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">launched RUC surveys to members</a> ahead of January's Relative Value Scale Update Committee (RUC) meeting. ACR is running five surveys covering bone age studies, central venous catheter insertion, deep venous arterialization, renal nerve denervation, and stab phlebectomy. SIR launched its surveys on October 26, covering four of those same interventional-radiology services.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ACR told members that <strong>"strong physician participation is what makes the RUC process effective,"</strong> and that responses would help CMS "determine physician reimbursement for these procedures when they are addressed by CMS as part of the 2028 Medicare Physician Fee Schedule." SIR framed it the same way: member input "helps inform recommendations to CMS on the physician time, intensity, complexity and overall work required to provide these services." Both societies pushed for speed — ACR noted the response window is short — and asked physicians who receive duplicate surveys from more than one specialty to complete only one, since the data gets pooled.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this is unusual. Societies run RUC surveys like this routinely to keep new and existing codes priced. What makes this particular cycle worth a closer look is the metric at its center: physician time per study — the same number generative AI is starting to measurably change in diagnostic reporting.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How a stopwatch becomes a payment rate
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Under Medicare's Resource-Based Relative Value Scale, every CPT code's value is split into physician work, practice expense, and malpractice cost. Physician work — on average <strong>50.9%</strong> of a code's total relative value, according to the <a href="https://www.ama-assn.org/system/files/ruc-update-booklet.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AMA's own RUC overview</a> — is defined by time to perform the service, technical skill and physical effort, required mental effort and judgment, and stress tied to risk to the patient. Time is the one factor physicians report as a hard number.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That number comes from the same survey mechanism ACR and SIR just used: specialty societies are required to survey at least 30 practicing physicians per code, asking how long the pre-service, intra-service, and post-service work actually takes. The RUC — 32 physician members in total — reviews that data after each CPT Editorial Panel meeting and sends recommendations to CMS, which has historically accepted more than 90% of them into the Medicare Physician Fee Schedule.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Critically, this isn't a one-way ratchet toward higher pay. The RUC's own "potentially misvalued services" initiative has identified nearly 3,000 services as possibly overvalued, reviewed roughly 95% of the entire Medicare Physician Payment Schedule, and redistributed more than $5 billion since 2009 — proof that once credible data shows a service takes less time or work than its current value assumes, the committee's process is built to revalue it downward.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The mechanical tension AI creates
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The October 2026 surveys are about interventional procedures, not diagnostic reporting time broadly — but they're a live demonstration of the exact process that will eventually have to confront generative AI in diagnostic radiology. Most of a radiologist's work RVUs come from interpretation-and-reporting codes, priced on how long interpretation and dictation take. That is precisely the window independent studies now show AI-drafted reports compressing.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A 2026 study in <em>Radiology</em> found that commercial AI software cut the adjusted median reporting time for chest CT pulmonary nodule evaluation from 21.3 to 18.2 minutes — a <strong>14.6%</strong> reduction (p&lt;.001) — in a real-world, before-and-after deployment at a European academic center, as <Link to="/blog/ai-lung-nodule-detection-time-savings/" className="text-xaid-blue-strong underline underline-offset-2">reported in detail here</Link>. Separately, a prospective study in <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2834943" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Network Open</em></a> tracked 23,960 radiographs read by 27 radiologists in live clinical practice and found generative-AI-assisted reporting cut mean report time from 189.2 to 159.8 seconds — a <strong>15.5%</strong> documentation-efficiency gain (P=.02) — with no drop in accuracy.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                If that kind of time saving ever shows up inside a diagnostic-code RUC time survey — radiologists honestly reporting that a now-AI-assisted interpretation takes less time than the value currently on file assumes — it feeds the same misvalued-services mechanism ACR and SIR are activating for IR procedures today. Nothing requires that outcome, but nothing in the process prevents it either; the time survey doesn't know, or care, why the number came down.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Or: the saved minutes belong to a different line item
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                There's a credible counter-argument, and it's built into the RUC's own definition of work. Physician work isn't elapsed minutes — it's time combined with intensity: technical skill, mental effort and judgment, and stress tied to patient risk. An AI-drafted report doesn't remove the radiologist's workload; it moves it. The minutes no longer spent producing a first-pass description of normal anatomy can go toward verifying the AI's findings against the images and the prior exam, resolving discrepancies, flagging incidental findings, and being the physician who is accountable for the final read — work that a single "how long did this take" question won't capture unless someone documents it separately.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                There's also a volume argument that has nothing to do with per-code value: time saved on drafting can convert into more studies read per shift, which raises a group's total reimbursement without touching the work RVU of any single code. RUC prices the service, not the radiologist's day — a distinction that matters when "AI will cut radiology reimbursement" headlines conflate the two.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Where the RUC's own time categories would have to draw the line
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RUC surveys already split a service into pre-service, intra-service, and post-service time — a structure that happens to map cleanly onto where AI-drafted reporting does, and doesn't, change the work:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">RUC time segment</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">What it covers</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Effect of AI-drafted reporting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Pre-service', 'Reviewing the order, prior imaging, and clinical history', 'Largely unchanged — AI needs the same context a radiologist does'],
                      ['Intra-service', 'Interpreting the images and producing the report', 'The segment measured shrinking 14.6%–15.5% in the studies above'],
                      ['Post-service', 'Verifying findings, finalizing, and signing the report', 'Unchanged or larger — reviewing an AI draft is still distinct, documented work'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[1]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for practices before it becomes a RUC line item
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Track review time separately from drafting time',
                    desc: "Groups adopting AI-assisted reporting should log turnaround time and radiologist review/oversight time as distinct numbers, not one blended figure. If a time question ever reaches a diagnostic code, that data is the difference between 'this service got faster' and 'drafting got faster, verification didn't.'",
                  },
                  {
                    title: 'Expect procedural codes to lead diagnostic codes here',
                    desc: "IR procedures have a cleaner time signal — an operator performing a defined task in a room — which is why they tend to get surveyed first. The October 2026 ACR/SIR cycle is a preview of a process, not evidence it's already reaching diagnostic interpretation codes.",
                  },
                  {
                    title: 'Document the work that replaces drafting, now',
                    desc: 'The specialty societies best positioned if this question reaches a diagnostic RUC survey will be the ones with existing data on what radiologists do with recovered time: more exams reviewed, more incidental findings caught, more discrepancies resolved — the intensity side of the work RVU equation.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is exactly the fork AI-assisted CT reporting sits on. xAID's foundation models draft a structured, comprehensive report from the full CT volume, xAID's in-house radiologist reviews every preliminary, and it reaches the client ready-to-sign. The minutes a radiologist doesn't spend re-describing normal anatomy aren't minutes erased from the job — they're minutes available for verifying findings against priors, weighing an incidental finding, and exercising the judgment a time survey can't see on its own. Whether the next RUC cycle counts that as "faster" or as "different, still-skilled work" will depend on whether radiology brings evidence of it to the table before someone else fills in the blank.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is a RUC survey, and why does it affect radiologist pay?',
                    a: 'The RVS Update Committee (RUC) is the AMA-convened, 32-member physician panel that recommends how much physician work each CPT code is worth under Medicare\'s Resource-Based Relative Value Scale. It builds those recommendations mainly from specialty-society surveys of practicing physicians — at least 30 respondents per code — who report how much time, skill, judgment, and stress a service takes. CMS has historically accepted more than 90% of RUC\'s recommendations into the Medicare Physician Fee Schedule.',
                  },
                  {
                    q: 'What did ACR and SIR ask radiology members to do in October 2026?',
                    a: 'Both groups launched RUC surveys to members in late October 2026 ahead of the January 2027 RUC meeting. The American College of Radiology (ACR) is running five surveys covering bone age studies, central venous catheter insertion, deep venous arterialization, renal nerve denervation, and stab phlebectomy. The Society of Interventional Radiology (SIR) launched surveys on October 26 covering four of those same interventional-radiology services. ACR said the data would help CMS set physician reimbursement for these procedures in the 2028 Medicare Physician Fee Schedule.',
                  },
                  {
                    q: 'Could AI-shortened report-drafting time reduce radiology reimbursement?',
                    a: "It is a real mechanical risk worth watching, not a current fact. Work RVUs are built from physician-reported time, and RUC's own potentially-misvalued-services process already revalues — and cuts — codes once evidence shows a service takes less time than previously assumed; it has flagged nearly 3,000 such services and redistributed more than $5 billion since 2009. Independent studies already show AI-drafted reports cutting measured reporting time by roughly 14.6% to 15.5% in real clinical use. If that kind of time saving ever shows up in a diagnostic-code RUC survey the way ACR and SIR are gathering time data for IR procedures right now, it could push that code's work RVU down.",
                  },
                  {
                    q: "Is there a case that AI should raise radiology's valuation instead of cutting it?",
                    a: 'Yes. Work RVUs are defined as time combined with intensity — technical skill, mental effort and judgment, and stress tied to patient risk — not elapsed minutes alone, and physician work is only about half of a code\'s total relative value. Minutes an AI draft saves on producing text can shift toward verification, discrepancy resolution against priors, and oversight of the AI\'s output — work that a bare time question won\'t capture unless radiology societies document it and bring that evidence into the next relevant RUC survey.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/radiology-societies-seek-help-valuing-physician-services" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "Radiology Societies Seek Help in Valuing Physician Services" (2026); AMA, <a href="https://www.ama-assn.org/system/files/ruc-update-booklet.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RVS Update Committee overview</a>; Paramasamy J, et al., "Impact of Commercial Artificial Intelligence on Radiologist Reading Time for Pulmonary Nodule Evaluation at Chest CT," <em>Radiology</em> (2026), DOI: <a href="https://doi.org/10.1148/radiol.260484" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1148/radiol.260484</a>; and <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2834943" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>JAMA Network Open</em></a>, DOI: <a href="https://doi.org/10.1001/jamanetworkopen.2025.13921" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1001/jamanetworkopen.2025.13921</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Give radiologists back their minutes, with judgment intact"
          sub="xAID drafts a comprehensive, structured CT report so radiologists spend time on verification and judgment, not re-describing normal anatomy. Try it on 5 free studies."
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
              <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">2027 Medicare Physician Fee Schedule: What It Means for Radiology</div>
              </Link>
              <Link to="/blog/ai-lung-nodule-detection-time-savings/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Commercial AI Cut Chest CT Reporting Time Up to 25%</div>
              </Link>
              <Link to="/blog/radiologist-pay-stagnation-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Labor Market</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">42% of Millennial Radiologists Say Pay Stagnated</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RucSurveyAiRadiologyReimbursement;
