import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const TeleradiologyMalpracticeLiabilityChain = () => {
  const post = {
    title: 'One CT Read, Three Defendants: Teleradiology’s Liability Chain',
    dateIso: '2026-11-09',
    date: 'November 9, 2026',
    category: 'Risk & Liability',
    readingTime: 8,
    description: "A stroke patient's lawsuit names a hospital, teleradiology firm, and telemedicine platform over one CT misread. What it means for multi-vendor liability risk.",
  };

  const canonical = 'https://xaid.ai/blog/teleradiology-malpractice-liability-chain/';

  return (
    <>
      <Helmet defer={false}>
        <title>Teleradiology Malpractice Liability: One CT Lawsuit | xAID</title>
        <meta name="description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Teleradiology Malpractice Liability: One CT Lawsuit | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teleradiology Malpractice Liability: One CT Lawsuit | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <link rel="canonical" href={canonical} />
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
          "keywords": "teleradiology malpractice liability, teleradiology lawsuit, stroke CT misread, radiology liability chain, outsourced radiology reading risk"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the lawsuit against the teleradiology firm about?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tammy Carnley and her husband are suing over a stroke-care delay that began on October 7, 2024, when Carnley arrived at St. Francis hospital in Columbus, Georgia, with right-sided weakness, facial droop, and an inability to speak. A noncontrast head CT was reported as normal at 8:15 a.m. by a teleradiologist working for Direct Radiology. The complaint alleges the stroke was recognized later that morning through a neurology consult and CT angiography, not a fresh imaging read, and that Carnley was not transferred for a thrombectomy evaluation until roughly eight hours after arrival, by which point imaging showed the stroke had progressed too far for the procedure. A formal re-read addendum filed roughly six weeks later found a large hypodensity on the original CT that the complaint says the first read had missed. She was left with permanent paralysis and profound language impairment. The suit was filed in September 2026 in the Superior Court of Muscogee County, Georgia."
              }
            },
            {
              "@type": "Question",
              "name": "Why does the lawsuit name three separate companies for one CT read?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The complaint names the hospital (St. Francis-Emory Healthcare), the teleradiology company that read the scan (Direct Radiology, since acquired by OnRad), and a separate telemedicine platform (Vesta Telemedicine) used for specialist consult coverage, along with individual physicians. That is typical of outsourced imaging: a hospital contracts its overnight or emergency reads to one vendor and its tele-consult coverage to another, so a single time-critical study passes through multiple separately contracted parties before a diagnosis is finalized — and each one becomes a distinct defendant when the chain breaks down."
              }
            },
            {
              "@type": "Question",
              "name": "Does teleradiology actually carry higher malpractice risk than in-person radiology reads?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2024 analysis in RSNA's journal Radiology, using CRICO's Candello claims database, compared 135 closed teleradiology malpractice claims with 3,474 non-teleradiology radiology claims from 2010–2022. Teleradiology claims closed with an indemnity payment 58.5% of the time versus 40.8% for other radiology claims, carried a higher median payout ($339,230 versus $214,063), more often involved patient death (35.6% versus 19.7%), more often involved a cerebrovascular diagnosis (9.6% versus 3.6%), and more often involved a communication failure (25.9% versus 12.6%). A 2026 follow-up analysis argues the gap reflects teleradiology's after-hours, high-acuity caseload and weaker communication infrastructure rather than remote reading itself being less accurate — but on either reading, communication and accountability structure, not geography, is what the data says drives the risk."
              }
            },
            {
              "@type": "Question",
              "name": "How can imaging organizations reduce the liability risk of multi-vendor outsourced reading?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The structural fix is collapsing handoffs, not adding more vendors to a chain. A single draft-then-review workflow — one contracted relationship producing a documented, auditable report from first draft to final sign — removes the ambiguity about which party was responsible for which step. That is the model xAID is built on: a foundation-model-drafted report is reviewed by xAID's in-house radiologist before delivery, and the client's own reading radiologist signs the final version, with one continuous record rather than a chain of separately contracted vendors."
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
              One CT read. Three defendants.<br />
              <span className="text-white/60">What a stroke-care lawsuit reveals about teleradiology's liability chain</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A Georgia woman's malpractice suit over a misread stroke CT names a hospital, a teleradiology company, and a telemedicine platform as separate defendants. The case is a clean illustration of how liability — and time — fragments when a single time-critical read is outsourced across multiple vendors.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '~8 hrs', label: 'Arrival to transfer', sub: 'after CT read as "normal"' },
            { stat: '3', label: 'Companies named as defendants', sub: 'hospital, telerad firm, platform' },
            { stat: '35.6%', label: 'Teleradiology claims involve death', sub: 'vs 19.7% non-telerad claims' },
            { stat: '$339K', label: 'Median teleradiology payout', sub: 'vs $214K non-telerad claims' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                One CT, nearly eight hours, three defendants
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                According to a lawsuit covered by <a href="https://radiologybusiness.com/topics/healthcare-management/legal-news/patient-sues-teleradiology-firm-claiming-ct-misread-delayed-critical-stroke-care" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, Tammy Carnley, then 47 and a Muscogee County School District employee, was found unresponsive at home on October 7, 2024, with right-sided weakness, facial droop, and global aphasia — textbook stroke signs. She arrived by ambulance at St. Francis hospital, part of St. Francis-Emory Healthcare in Columbus, Georgia, at approximately 6:36 a.m.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A noncontrast head CT was read and reported as normal at 8:15 a.m. by a radiologist working for the teleradiology firm Direct Radiology, which was later acquired by OnRad in 2025. The complaint alleges the stroke was recognized later that morning through a neurology consult and CT angiography confirming a large-vessel occlusion — not through a fresh read of the original CT — and that Carnley was not transferred to Piedmont Columbus Regional Midtown Hospital for a mechanical thrombectomy evaluation until roughly 2:22 p.m., nearly eight hours after she first arrived. By then, imaging showed the stroke had progressed too far for the procedure. A formal re-read addendum to the original CT, filed roughly six weeks later, found a large, ill-marginated hypodensity in the left frontal lobe — evidence, the complaint argues, that the initial 8:15 a.m. read had missed a stroke that was already visible.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Carnley subsequently required emergency surgery to relieve brain swelling, a tracheostomy, and a feeding tube. The suit, filed in September 2026 in the Superior Court of Muscogee County by the Bell Law Firm as reported by <a href="https://www.prnewswire.com/news-releases/lawsuit-filed-by-bell-law-firm-alleges-delayed-stroke-care-at-st-francis-emory-left-columbus-woman-permanently-disabled-302928251.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">PR Newswire</a>, names St. Francis-Emory Healthcare, Direct Radiology, and Vesta Telemedicine — a separate telemedicine provider used for specialist consult coverage — along with individual physicians, as defendants. The complaint alleges delayed vascular imaging, delayed neurological consultation, the misread initial CT, and a failure by nursing staff to activate or maintain a stroke alert once early warning signs were present.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The complaint puts the clinical argument bluntly: "a normal or reportedly normal noncontrast head CT does not exclude an acute ischemic stroke," and the nursing duty to recognize stroke symptoms and escalate did not end just because the scan came back clean. The complaint alleges that timely diagnosis and transfer would have allowed treatment while brain tissue remained salvageable and would have substantially reduced her permanent injuries. In the firm's statement, Bell Law Firm founding partner Lloyd Bell said: "We believe evidence will show that critical delays cost her the chance to preserve brain function and live independently."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why minutes mattered this much
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Early ischemic changes on a noncontrast head CT are notoriously subtle — that is precisely why "normal" reads get challenged in stroke litigation more than in almost any other diagnosis. And the clinical clock is unforgiving: a widely cited modeling estimate published in the AHA/ASA journal <em>Stroke</em> put the average cost of an untreated large-vessel stroke at roughly <strong>1.9 million neurons</strong> lost per minute (<a href="https://doi.org/10.1161/01.str.0000196957.55928.ab" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Saver, 2006</a>). Current AHA/ASA guidelines allow mechanical thrombectomy up to 24 hours from last-known-normal in carefully selected patients with favorable perfusion imaging, but eligibility narrows as salvageable brain tissue shrinks over time — which is exactly what the complaint alleges happened here: by the time Carnley reached a thrombectomy-capable hospital, the window had already closed for her.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This case is not an isolated data point on time-sensitive reads going wrong under outsourced coverage. In 2025, a Georgia jury awarded <strong>$15.5 million</strong> in a separate gross-negligence case against a teleradiology group and its remote radiologist, after an audit showed the radiologist had read two emergency CT scans in about five minutes combined — a case made possible in part by a 2024 Georgia appellate ruling holding that a provider's physical location doesn't matter when they're delivering emergency care to a patient in an ED, as reported by <a href="https://www.law.com/dailyreportonline/2025/04/04/leveraging-georgias-er-statute-litigators-secure-155m-gross-negligence-verdict-against-remote-doctor/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Law.com</a>. Courts are increasingly treating a remote read of an emergency scan the same way they'd treat a radiologist standing in the ED.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why one read produces three defendants
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The structural reason this case names three separate companies isn't unusual — it's how outsourced imaging is typically built. A hospital contracts its overnight or emergency CT reads to one teleradiology vendor, contracts a separate telemedicine platform for specialist tele-consult coverage, and keeps its own nursing and escalation protocols in-house. Each vendor has its own contract, its own credentialing process, and its own system of record. As one legal analysis of teleradiology claims put it, several parties can be responsible for a single bad outcome: "the remote radiologist, a teleradiology company, the hospital or healthcare system, and in some cases the treating physician" (<a href="https://www.leventhal-law.com/blog/can-you-sue-for-a-missed-diagnosis-by-a-remote-radiologist/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Leventhal Law</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                Each additional contracted party is also an additional handoff — and in a stroke workup, a handoff is time. The table below contrasts that fragmented model with a single, auditable draft-then-review chain of custody for a report:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-[#0D0D0D]/10">
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Dimension</th>
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Fragmented outsourced-reading chain</th>
                      <th className="text-left py-3 text-[#0D0D0D] font-medium">Single draft-then-review chain of custody</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#0D0D0D]/10">
                      <td className="py-3 pr-4 text-[#444] font-light">Who touches the image</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Separate teleradiology vendor, separate telemedicine/consult vendor, hospital nursing/escalation</td>
                      <td className="py-3 text-[#444] font-light">One documented draft, one in-house review, one contracted relationship</td>
                    </tr>
                    <tr className="border-b border-[#0D0D0D]/10">
                      <td className="py-3 pr-4 text-[#444] font-light">Who is accountable if it's wrong</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Unclear until litigation sorts out which vendor's contract covered which step</td>
                      <td className="py-3 text-[#444] font-light">Defined by design: draft, review, and final sign are tracked in one record</td>
                    </tr>
                    <tr className="border-b border-[#0D0D0D]/10">
                      <td className="py-3 pr-4 text-[#444] font-light">Audit trail across handoffs</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Fragmented across each vendor's own systems</td>
                      <td className="py-3 text-[#444] font-light">Continuous, from first draft to signature</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Time added per additional vendor</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Every contracted handoff is a queue, a credentialing check, a system login</td>
                      <td className="py-3 text-[#444] font-light">No added vendor handoff between draft and sign-ready report</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the broader malpractice data says
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This case doesn't stand alone statistically either. A 2024 analysis published in RSNA's journal <em>Radiology</em> (<a href="https://doi.org/10.1148/radiol.232806" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Schaffer et al.</a>), drawing on CRICO's national Candello malpractice claims database, compared 135 closed teleradiology claims with 3,474 non-teleradiology radiology claims closed between 2010 and 2022. Teleradiology claims closed with an indemnity payment <strong>58.5%</strong> of the time (79 of 135) versus <strong>40.8%</strong> for other radiology claims (1,416 of 3,474). The median payout was higher too: <strong>$339,230</strong> for teleradiology claims versus <strong>$214,063</strong> for the rest. Teleradiology claims also more often involved patient death (<strong>35.6%</strong> versus <strong>19.7%</strong>), more often involved a cerebrovascular diagnosis (<strong>9.6%</strong> versus <strong>3.6%</strong>) — the exact category this stroke case falls into — and more often involved a documented communication failure (<strong>25.9%</strong> versus <strong>12.6%</strong>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                An accompanying <a href="https://doi.org/10.1148/radiol.240651" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">editorial</a> in the same journal, and a 2026 follow-up analysis in <a href="https://doi.org/10.1186/s13244-025-02032-3" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Insights into Imaging</em></a>, argue the gap likely reflects teleradiology's after-hours, higher-acuity caseload and weaker integrated communication infrastructure rather than remote radiologists being inherently less accurate. Either reading points to the same operational lesson: it's the communication and accountability structure around a read — not simply where the radiologist sits — that drives liability. That structure is precisely what multiplies, rather than simplifies, every time an additional vendor is added to a single read.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where a single chain of custody fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The structural fix this case points toward isn't adding another layer of oversight — it's collapsing handoffs. That's the model behind xAID's reporting workflow: a foundation-model-drafted report is reviewed by xAID's in-house radiologist before it's delivered ready-to-sign, with one continuous, auditable record from first draft to final signature, rather than a chain of separately contracted vendors whose individual responsibility only gets sorted out after a bad outcome lands in court. The client's reading radiologist still signs the final report; what changes is how many parties, systems, and queues the study passed through to get there.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the lawsuit against the teleradiology firm about?',
                    a: "Tammy Carnley and her husband are suing over a stroke-care delay that began on October 7, 2024, when Carnley arrived at St. Francis hospital in Columbus, Georgia, with right-sided weakness, facial droop, and an inability to speak. A noncontrast head CT was reported as normal at 8:15 a.m. by a teleradiologist working for Direct Radiology. The complaint alleges the stroke was recognized later that morning through a neurology consult and CT angiography, not a fresh imaging read, and that Carnley was not transferred for a thrombectomy evaluation until roughly eight hours after arrival, by which point imaging showed the stroke had progressed too far for the procedure. A formal re-read addendum filed roughly six weeks later found a large hypodensity on the original CT that the complaint says the first read had missed. She was left with permanent paralysis and profound language impairment. The suit was filed in September 2026 in the Superior Court of Muscogee County, Georgia.",
                  },
                  {
                    q: 'Why does the lawsuit name three separate companies for one CT read?',
                    a: "The complaint names the hospital (St. Francis-Emory Healthcare), the teleradiology company that read the scan (Direct Radiology, since acquired by OnRad), and a separate telemedicine platform (Vesta Telemedicine) used for specialist consult coverage, along with individual physicians. That is typical of outsourced imaging: a hospital contracts its overnight or emergency reads to one vendor and its tele-consult coverage to another, so a single time-critical study passes through multiple separately contracted parties before a diagnosis is finalized — and each one becomes a distinct defendant when the chain breaks down.",
                  },
                  {
                    q: 'Does teleradiology actually carry higher malpractice risk than in-person radiology reads?',
                    a: "A 2024 analysis in RSNA's journal Radiology, using CRICO's Candello claims database, compared 135 closed teleradiology malpractice claims with 3,474 non-teleradiology radiology claims from 2010–2022. Teleradiology claims closed with an indemnity payment 58.5% of the time versus 40.8% for other radiology claims, carried a higher median payout ($339,230 versus $214,063), more often involved patient death (35.6% versus 19.7%), more often involved a cerebrovascular diagnosis (9.6% versus 3.6%), and more often involved a communication failure (25.9% versus 12.6%). A 2026 follow-up analysis argues the gap reflects teleradiology's after-hours, high-acuity caseload and weaker communication infrastructure rather than remote reading itself being less accurate — but on either reading, communication and accountability structure, not geography, is what the data says drives the risk.",
                  },
                  {
                    q: 'How can imaging organizations reduce the liability risk of multi-vendor outsourced reading?',
                    a: "The structural fix is collapsing handoffs, not adding more vendors to a chain. A single draft-then-review workflow — one contracted relationship producing a documented, auditable report from first draft to final sign — removes the ambiguity about which party was responsible for which step. That is the model xAID is built on: a foundation-model-drafted report is reviewed by xAID's in-house radiologist before delivery, and the client's own reading radiologist signs the final version, with one continuous record rather than a chain of separately contracted vendors.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/legal-news/patient-sues-teleradiology-firm-claiming-ct-misread-delayed-critical-stroke-care" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "Patient sues teleradiology firm, claiming CT misread delayed critical stroke care"; <a href="https://www.prnewswire.com/news-releases/lawsuit-filed-by-bell-law-firm-alleges-delayed-stroke-care-at-st-francis-emory-left-columbus-woman-permanently-disabled-302928251.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">PR Newswire</a> (Bell Law Firm release); Schaffer et al., "Assessment of Claimant, Clinical, and Financial Characteristics of Teleradiology Medical Malpractice Cases," <em>Radiology</em> (2024), <a href="https://doi.org/10.1148/radiol.232806" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1148/radiol.232806</a>; Mezrich, "Malpractice From Afar: Teleradiology May Increase Malpractice Risk," <em>Radiology</em> (2024), <a href="https://doi.org/10.1148/radiol.240651" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1148/radiol.240651</a>; Alhasan et al., "Teleradiology and malpractice: interpreting the risk in context," <em>Insights into Imaging</em> (2026), <a href="https://doi.org/10.1186/s13244-025-02032-3" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1186/s13244-025-02032-3</a>; Saver, "Time Is Brain — Quantified," <em>Stroke</em> (2006), <a href="https://doi.org/10.1161/01.str.0000196957.55928.ab" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1161/01.str.0000196957.55928.ab</a>; and <a href="https://www.law.com/dailyreportonline/2025/04/04/leveraging-georgias-er-statute-litigators-secure-155m-gross-negligence-verdict-against-remote-doctor/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Law.com</a> (Daily Report), on the 2025 Georgia teleradiology verdict. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="One contracted relationship. One auditable record."
          sub="See how a single draft-then-review chain of custody works, from AI draft to radiologist-reviewed, ready-to-sign report. Try it on 5 free studies."
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
              <Link to="/blog/average-radiology-malpractice-claim-cost/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Risk &amp; Liability</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Malpractice Claims Average $456,000</div>
              </Link>
              <Link to="/blog/radiology-report-turnaround-time-ed-length-of-stay/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Report Turnaround Time and ED Length of Stay</div>
              </Link>
              <Link to="/blog/radiology-outsourcing-gone-wrong/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">When Radiology Outsourcing Goes Wrong</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default TeleradiologyMalpracticeLiabilityChain;
