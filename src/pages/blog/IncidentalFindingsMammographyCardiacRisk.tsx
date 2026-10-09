import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const IncidentalFindingsMammographyCardiacRisk = () => {
  const post = {
    title: 'Maryland Just Made an Incidental Finding a Legal Requirement',
    dateIso: '2026-10-09',
    date: 'October 9, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "Maryland's new mammography law requires flagging breast arterial calcification, a cardiac risk marker, in every results letter. It's the mammography-side version of a problem xAID has tracked on CT: incidental findings only help patients if the report catches them every time.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Maryland Mandates Incidental Findings Reporting | xAID</title>
        <meta name="description" content="Maryland's new law requires flagging breast arterial calcification on mammograms, a sign incidental-finding capture is becoming a regulatory baseline." />
        <link rel="canonical" href="https://xaid.ai/blog/incidental-findings-mammography-cardiac-risk" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Maryland Mandates Incidental Findings Reporting | xAID" />
        <meta property="og:description" content="Maryland's new law requires flagging breast arterial calcification on mammograms, a sign incidental-finding capture is becoming a regulatory baseline." />
        <meta property="og:url" content="https://xaid.ai/blog/incidental-findings-mammography-cardiac-risk" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maryland Mandates Incidental Findings Reporting | xAID" />
        <meta name="twitter:description" content="Maryland's new law requires flagging breast arterial calcification on mammograms, a sign incidental-finding capture is becoming a regulatory baseline." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/incidental-findings-mammography-cardiac-risk" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/incidental-findings-mammography-cardiac-risk",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "incidental findings, breast arterial calcification, mammography cardiovascular risk, Maryland mammography law, opportunistic screening"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does Maryland's new mammography law require?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Maryland's HB 1364, effective October 1, 2026, requires mammography providers to notify patients in their results letter when breast arterial calcification (BAC) is detected, describing it as a common finding that may indicate increased cardiovascular disease risk and encouraging patients to discuss it with a physician. Maryland is the first U.S. state with this requirement. The law does not mandate any specific additional test or treatment."
              }
            },
            {
              "@type": "Question",
              "name": "What is breast arterial calcification and why does it matter for heart disease risk?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Breast arterial calcification (BAC) is calcium buildup in the walls of breast arteries that is visible as an incidental finding on routine mammograms. A 2026 multicenter study of 21,514 women published in JACC: Cardiovascular Imaging found BAC in 22.7% of women screened, rising from 8% under age 50 to 61% over age 70, and found that each 10-percentile increase in age-adjusted BAC was associated with a 17% relative increase in major adverse cardiovascular events, independent of conventional risk factors."
              }
            },
            {
              "@type": "Question",
              "name": "Why wasn't BAC already being reported consistently before this law?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Surveys show a gap between awareness and consistent reporting. An American College of Radiology survey of 598 radiologists found 87% include BAC in at least some mammogram reports, but only 41% report it always or most of the time. A European Society of Breast Imaging survey of 378 radiologists found 80.7% were aware BAC signals cardiovascular risk, yet only 61.9% routinely documented it and just 45.5% told patients directly."
              }
            },
            {
              "@type": "Question",
              "name": "What does the Maryland law suggest about the future of incidental findings in radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It signals that opportunistic capture of clinically significant incidental findings — a marker visible on a scan already being done for another reason — is moving from a best-practice discussion to a legal expectation. The same pattern applies to CT: incidental lung nodules, renal masses, and vertebral bone density only become actionable if the structured report captures them on every study, not only when a radiologist happens to notice."
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
                Market &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Maryland just made an incidental finding<br />
              <span className="text-white/60">a legal requirement</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Starting October 1, 2026, Maryland mammography providers must flag breast arterial calcification — a cardiac risk marker — in every results letter. It's the mammography-side version of a problem xAID has argued applies to CT: incidental findings only protect patients if the report catches them every time, not just when a radiologist happens to notice.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Oct 1, 2026', label: 'Maryland BAC law took effect', sub: 'first U.S. state mandate' },
            { stat: '22.7%', label: 'Of women screened have BAC', sub: '21,514-patient study, 2026' },
            { stat: '41%', label: 'Radiologists report it consistently', sub: 'vs 87% who ever report it' },
            { stat: '17%', label: 'Higher cardiac event risk', sub: 'per 10-percentile BAC rise' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What Maryland's law actually requires
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/breast-imaging/maryland-mammography-law-turns-incidental-cardiac-findings-new-screening-opportunity" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Maryland has become the first U.S. state</a> to require mammography providers to tell patients when they have breast arterial calcification, or BAC — calcium buildup in the walls of breast arteries that shows up as a routine, incidental finding on a mammogram taken for cancer screening. House Bill 1364 was introduced in February 2026, passed both chambers of the Maryland legislature unanimously, and took effect October 1, 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The mechanism mirrors the FDA's existing breast-density notification requirement: providers must tell patients, in their results letter, when BAC is present, describe it as a common finding that may indicate increased cardiovascular disease risk, and encourage them to discuss it with a physician. The law does not mandate a specific follow-up test or treatment — it mandates that the information reaches the patient at all. As Maryland House Speaker Joseline Pena-Melnyk put it, the bill exists to "provide that needed uniformity" to a finding that, until now, different radiologists and practices have handled inconsistently.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That inconsistency is the real story. BAC has been visible on mammograms for decades. What changed is that lawmakers decided noticing it isn't good enough — it has to be captured and communicated every time.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why BAC is a real cardiac signal, not a footnote
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                BAC is a form of medial arterial calcification distinct from the calcifications radiologists look for as signs of breast cancer, and a growing body of evidence ties it to cardiovascular outcomes. A multicenter retrospective cohort study led by Nitesh Nerlekar and colleagues, published in <a href="https://doi.org/10.1016/j.jcmg.2026.03.008" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JACC: Cardiovascular Imaging</em></a> in 2026, followed 21,514 women aged 40 and older with no known cardiovascular disease across sites in the United States and Australia. BAC was identified in <strong>22.7%</strong> of women overall, rising sharply with age — from about 8% in women under 50 to 61% in women over 70.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Over a mean follow-up of 4.7 years, the cohort accrued 828 major adverse cardiovascular events. Each 10-percentile increase in age-adjusted BAC was associated with a <strong>17%</strong> relative increase in that risk (adjusted hazard ratio 1.17), independent of conventional cardiovascular risk factors. Adding BAC to a standard risk model improved its discriminative accuracy (the C-statistic rose from 0.67 to 0.71), with the biggest benefit in reclassifying women who otherwise looked low- or intermediate-risk.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In other words: a scan that nearly a quarter of women already get for cancer screening is quietly carrying a second, measurable cardiac risk signal — one most of those women have never been told about.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The gap the law is trying to close
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiologists are not unaware of BAC. The problem is that awareness has never reliably translated into consistent reporting. A survey of 598 American College of Radiology members, published in <a href="https://doi.org/10.1016/j.acra.2021.01.027" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Academic Radiology</em></a>, found that 87% include BAC in at least some mammogram reports — but only 41% report it "always" or "most of the time." A separate survey of 378 radiologists by the European Society of Breast Imaging, published in <a href="https://doi.org/10.1007/s00330-020-07136-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>European Radiology</em></a>, found 80.7% aware of the BAC–cardiovascular link, yet only 61.9% routinely documented it in the report and just 45.5% ever told the patient directly.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That 40-point-plus gap between "I know this matters" and "I write it down every time" is exactly what a legal mandate is built to close — and exactly why some radiologists pushed back on Maryland's bill. Critics quoted in trade press raised a fair concern: there is still no single standardized method for quantifying BAC and no agreed clinical pathway for what happens after a patient is told, which risks inconsistent, anxiety-inducing follow-up even after notification becomes mandatory.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Both things can be true. The mandate forces capture; it doesn't, by itself, standardize the method. That second half of the problem — making a judgment call reproducible across every radiologist, every shift, every study — is a workflow and tooling question, not a legislative one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The same pattern, a different modality
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Mammography is not the only modality where a clinically significant signal is sitting in images acquired for an unrelated reason. Chest and abdominal CT carry the same structural problem: an <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="text-xaid-blue-strong underline underline-offset-2">incidental lung nodule's malignancy risk</Link>, an <Link to="/blog/incidental-renal-mass-ct-report/" className="text-xaid-blue-strong underline underline-offset-2">incidental renal mass</Link> that needs a defined follow-up pathway, or <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">vertebral bone density visible on a routine chest CT</Link> are all opportunistic data that only becomes clinically useful if the report captures it consistently.
              </p>

              <div className="overflow-x-auto mb-8 -mx-2 px-2">
                <table className="w-full text-left border-collapse min-w-[520px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Incidental finding</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Modality</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">What it flags</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">2026 status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        finding: 'Breast arterial calcification',
                        modality: 'Mammography',
                        flags: 'Cardiovascular event risk (MACE)',
                        status: 'Legally mandated patient notification (Maryland, Oct 2026)',
                      },
                      {
                        finding: 'Lung nodule',
                        modality: 'Chest CT',
                        flags: 'Lung cancer risk',
                        status: 'Best-practice risk scoring; no capture mandate',
                      },
                      {
                        finding: 'Renal mass',
                        modality: 'Abdominal CT',
                        flags: 'Malignancy risk, follow-up imaging need',
                        status: 'Best-practice follow-up guidelines; no capture mandate',
                      },
                      {
                        finding: 'Vertebral bone density',
                        modality: 'Chest/abdominal CT',
                        flags: 'Osteoporosis and fracture risk',
                        status: 'Opportunistic-screening research; no capture mandate',
                      },
                    ].map((row) => (
                      <tr key={row.finding} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row.finding}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row.modality}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row.flags}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Breast arterial calcification is simply the first of these to cross from "something a careful radiologist might mention" into "something the law says must be in the report." The underlying argument for the rest — that opportunistic findings are only as good as the report that captures them — doesn't need a statute to be true. Maryland just made it official for one finding, on one modality.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured AI drafting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Notably, the Nerlekar study didn't rely on radiologists eyeballing each mammogram for calcification — BAC was quantified using an <a href="https://pubmed.ncbi.nlm.nih.gov/42033436/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AI detection model</a>, applied the same way to every scan in the cohort. That's the operational lesson behind mandates like Maryland's: a reporting requirement that depends on individual attentiveness — "did this radiologist happen to notice and write it down this time" — will keep producing the 40-point awareness-to-reporting gap the surveys above describe, no matter how many statutes get passed. A structured reporting process that checks for the same defined set of findings on every single study, every time, is what makes a mandate like this operationally durable rather than aspirational. That is the premise xAID's foundation-model approach to CT reporting is built on: drafts are structured to flag defined incidental findings consistently, with in-house radiologist review on every preliminary before the report reaches the client's reading radiologist ready-to-sign.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What does Maryland's new mammography law require?",
                    a: 'Maryland\'s HB 1364, effective October 1, 2026, requires mammography providers to notify patients in their results letter when breast arterial calcification (BAC) is detected, describing it as a common finding that may indicate increased cardiovascular disease risk and encouraging patients to discuss it with a physician. Maryland is the first U.S. state with this requirement. The law does not mandate any specific additional test or treatment.',
                  },
                  {
                    q: 'What is breast arterial calcification and why does it matter for heart disease risk?',
                    a: 'Breast arterial calcification (BAC) is calcium buildup in the walls of breast arteries that is visible as an incidental finding on routine mammograms. A 2026 multicenter study of 21,514 women published in JACC: Cardiovascular Imaging found BAC in 22.7% of women screened, rising from 8% under age 50 to 61% over age 70, and found that each 10-percentile increase in age-adjusted BAC was associated with a 17% relative increase in major adverse cardiovascular events, independent of conventional risk factors.',
                  },
                  {
                    q: "Why wasn't BAC already being reported consistently before this law?",
                    a: 'Surveys show a gap between awareness and consistent reporting. An American College of Radiology survey of 598 radiologists found 87% include BAC in at least some mammogram reports, but only 41% report it always or most of the time. A European Society of Breast Imaging survey of 378 radiologists found 80.7% were aware BAC signals cardiovascular risk, yet only 61.9% routinely documented it and just 45.5% told patients directly.',
                  },
                  {
                    q: 'What does the Maryland law suggest about the future of incidental findings in radiology?',
                    a: 'It signals that opportunistic capture of clinically significant incidental findings — a marker visible on a scan already being done for another reason — is moving from a best-practice discussion to a legal expectation. The same pattern applies to CT: incidental lung nodules, renal masses, and vertebral bone density only become actionable if the structured report captures them on every study, not only when a radiologist happens to notice.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/breast-imaging/maryland-mammography-law-turns-incidental-cardiac-findings-new-screening-opportunity" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; bill details via <a href="https://www.auntminnie.com/clinical-news/womens-imaging/breast/news/15819599/maryland-first-state-to-consider-bac-notification-after-mammogram" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> and <a href="https://radiologybusiness.com/topics/healthcare-management/legal-news/maryland-becomes-first-state-pass-bac-notification-mandate-mammography-despite-radiologist-pushback" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; clinical data from Nerlekar et al., <a href="https://doi.org/10.1016/j.jcmg.2026.03.008" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">JACC: Cardiovascular Imaging</a> (2026), as summarized by <a href="https://www.diagnosticimaging.com/view/breast-imaging-in-focus-multicenter-research-breast-arterial-calcification-mammography" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Diagnostic Imaging</a>; reporting-gap surveys from Brown et al., <a href="https://doi.org/10.1016/j.acra.2021.01.027" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Academic Radiology</a> (2022), and Trimboli et al., <a href="https://doi.org/10.1007/s00330-020-07136-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">European Radiology</a> (2021). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured capture, every study, every finding."
          sub="See how xAID's foundation-model CT reports flag incidental findings consistently, reviewed in-house before they reach your radiologist ready-to-sign."
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
              <Link to="/blog/incidental-renal-mass-ct-report/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Renal Mass on CT: Why the Report Matters</div>
              </Link>
              <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Malignancy Risk Models for Incidental Lung Nodules</div>
              </Link>
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT Bone Density Predicts Brain Aging</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default IncidentalFindingsMammographyCardiacRisk;
