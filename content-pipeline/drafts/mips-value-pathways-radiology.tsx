import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MipsValuePathwaysRadiology = () => {
  const post = {
    title: "MIPS Value Pathways: A New Pay Risk for Radiology",
    dateIso: '2026-09-05',
    date: 'September 5, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 8,
    description: "A new JACR analysis says CMS's radiology-specific MIPS Value Pathways could close the reporting workaround radiologists rely on today — and cut Medicare pay. What the data shows, and the one lever practices still control.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MIPS Value Pathways: A New Pay Risk for Radiology | xAID</title>
        <meta name="description" content="A new JACR study says CMS's radiology MIPS Value Pathways could close radiologists' scoring workaround and cut Medicare pay. What practices can still control." />
        <link rel="canonical" href="https://xaid.ai/blog/mips-value-pathways-radiology" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MIPS Value Pathways: A New Pay Risk for Radiology | xAID" />
        <meta property="og:description" content="A new JACR study says CMS's radiology MIPS Value Pathways could close radiologists' scoring workaround and cut Medicare pay. What practices can still control." />
        <meta property="og:url" content="https://xaid.ai/blog/mips-value-pathways-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIPS Value Pathways: A New Pay Risk for Radiology | xAID" />
        <meta name="twitter:description" content="A new JACR study says CMS's radiology MIPS Value Pathways could close radiologists' scoring workaround and cut Medicare pay. What practices can still control." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/mips-value-pathways-radiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/mips-value-pathways-radiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "MIPS value pathways, MVP MIPS radiology, MIPS radiology reporting, CMS quality payment program radiology, diagnostic radiology MVP"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are MIPS Value Pathways (MVPs) and what changed for radiology in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MIPS Value Pathways are CMS's specialty-specific alternative to traditional MIPS reporting under Medicare's Quality Payment Program: a group reports four quality measures from a curated, specialty-relevant set instead of six from a broad general list, alongside cost, improvement activities, and Promoting Interoperability data. In the 2026 Medicare Physician Fee Schedule final rule, CMS added the first two radiology-specific pathways — a Diagnostic Radiology MVP (nine measures total) and an Interventional Radiology MVP — as an optional reporting option, with a group enrollment window running April 1 to December 1, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "Why does a new study say MIPS Value Pathways could cut radiology's Medicare pay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A JACR analysis of 2023 MIPS data covering roughly 25,000 diagnostic radiologists found that radiologists already rank 28th of 62 specialties on average payment adjustment, and that most radiologists currently offset radiology's thin measure set by reporting nonradiology quality measures through multispecialty groups — about 68% do. Radiologists who instead reported radiology-only measures scored lower on average (71.4 vs. 85.1 out of 100) and 27.3% of them were penalized. MVPs are built around a curated radiology-specific measure set, which the study's authors say will push more radiologists toward radiology-only reporting and away from the multispecialty workaround that currently helps many of them avoid a penalty."
              }
            },
            {
              "@type": "Question",
              "name": "Is MVP reporting mandatory for radiologists now?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not yet. MVP participation is optional for the 2026 performance year. But in the CY 2027 Medicare Physician Fee Schedule proposed rule, CMS proposed sunsetting traditional MIPS reporting after the 2028 performance period, making MVPs the primary reporting pathway for clinicians outside an Advanced Payment Model starting with the 2029 performance year. None of the three additional MVPs CMS proposed for 2027 — covering diabetic disease, hospitalist care, and hypertension — apply to radiology."
              }
            },
            {
              "@type": "Question",
              "name": "What can radiology groups do now to protect their MIPS score under MVPs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Report as a group rather than individually — prior Neiman Health Policy Institute research found individual reporting scored roughly 28 points lower on average than group reporting. Beyond that, the Diagnostic Radiology MVP's mandatory outcome measure and the follow-up-recommendation measures both depend on the same thing: radiation-dose parameters, image quality, and follow-up recommendations captured consistently on every CT report, not reconstructed later for an audit. Groups can reduce risk by making sure that documentation is captured the same way on every study rather than only on the ones someone remembers to check."
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
              MIPS Value Pathways got radiology its own track.<br />
              <span className="text-white/60">A new study says that could still cost it money.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              CMS built radiology a specialty-specific reporting pathway through Medicare's Quality Payment Program in 2026. New research suggests it may close the one workaround most radiologists currently use to avoid a low score — right as CMS moves to make the new pathway mandatory.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '28th', label: 'of 62 specialties', sub: "radiology's MIPS pay rank, 2023 data" },
            { stat: '68.1%', label: 'Report through mixed groups', sub: 'the workaround MVPs close' },
            { stat: '9', label: 'Quality measures available', sub: 'to diagnostic radiology, vs. 65 for family medicine' },
            { stat: '2029', label: 'Year MVPs become mandatory', sub: 'as CMS proposes sunsetting traditional MIPS' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually changed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                MIPS Value Pathways (MVPs) are CMS's specialty-specific alternative to traditional MIPS reporting inside Medicare's Quality Payment Program. Instead of picking from a broad, largely primary-care-oriented list of quality measures, a group reports a curated set built for its specialty: four quality measures instead of six, alongside cost, improvement activities, and Promoting Interoperability data. In the 2026 Medicare Physician Fee Schedule final rule, CMS added the first two pathways built specifically for imaging — a <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Diagnostic Radiology MVP and an Interventional Radiology MVP</a> — the Diagnostic Radiology MVP draws on nine measures (six MIPS quality measures plus three QCDR measures), and the Interventional Radiology MVP draws on ten (six MIPS quality measures plus four QCDR measures). Reporting through either MVP is optional for the 2026 performance year, with a group enrollment window CMS set from April 1 to December 1, 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                On paper, that's the fix radiology has been asking for. A dedicated pathway is supposed to level a long-standing gap: for 2021, diagnostic radiology had only <strong>9</strong> available MIPS quality measures to choose from, compared with <strong>65</strong> for family medicine, according to <a href="https://ajronline.org/doi/10.2214/AJR.23.30809" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">research published in the American Journal of Roentgenology</a>. Whether the new pathway actually closes that gap, or just repackages it, is the question a newer analysis puts real numbers on.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The workaround most radiologists use today — and why MVPs may close it
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A study by Rebecca Smith-Bindman, MD, of UCSF, and co-author Carly Stewart, published in the <em>Journal of the American College of Radiology</em> and <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/changes-medicares-quality-payment-program-may-disadvantage-radiologists" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">covered by Radiology Business</a>, analyzed 2023 MIPS data covering roughly 250,000 physicians, including about 25,000 diagnostic radiologists. The headline finding: radiology ranked <strong>28th of 62 specialties</strong> in average MIPS payment adjustment that year, at just <strong>+0.39%</strong>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The reason radiology isn't ranked lower is a workaround, not a strength. Because diagnostic radiology's own measure set is thin and quickly "tops out" (six of the 20 radiology-relevant measures were already topped out in 2023), most radiologists currently report through multispecialty groups and pick up nonradiology quality measures instead — about <strong>68.1%</strong> of diagnostic radiologists do this today. Radiologists who reported that way ("mixed" reporters, 40.1% of the group studied) averaged a <strong>85.1-out-of-100</strong> quality score and a <strong>+0.9%</strong> payment adjustment. Radiologists who reported radiology-only measures (15.8% of the group) averaged a lower <strong>71.4</strong> score, and <strong>27.3%</strong> of them were penalized.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                MVPs are built around a curated, specialty-specific measure set — which is exactly the structure that removes the multispecialty option. As Smith-Bindman put it, radiologists' current MIPS performance has "depended on multispecialty group reporting of nonradiology measures, a strategy MVPs will largely eliminate." The Diagnostic Radiology MVP's mandatory outcome measure, ExRad (eCQM 494, which scores excessive radiation dose or inadequate image quality on diagnostic CT), is modeled to partially offset the loss — but even at a maximum score, the simulation found it would let only about <strong>40%</strong> of penalized radiology-only reporters avoid a negative adjustment, leaving most of them still penalized.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The outcome measure is a chokepoint',
                    desc: "With only eCQM 494 available as the mandatory Outcome measure in the Diagnostic Radiology MVP, a group's Quality score depends on consistently documenting radiation dose parameters and image quality on every diagnostic CT — not just the studies someone remembers to check.",
                  },
                  {
                    title: 'ACR has already flagged the measure set as too thin',
                    desc: "The American College of Radiology told CMS the draft pathway \"does not provide enough Clinical Quality Measures applicable or feasible for a substantial number of diagnostic radiology practices,\" proposing additional measures such as CTPA interpretation for pulmonary embolism and TI-RADS thyroid nodule reporting for diagnostic radiology, plus ten more measures for interventional radiology covering things like medication documentation and 30-day unplanned readmissions.",
                  },
                  {
                    title: 'The 2027 proposal adds urgency, not more radiology measures',
                    desc: "CMS's CY 2027 proposed rule adds three more MVPs — for diabetic disease, hospitalist care, and hypertension — and none apply to radiology, while the timeline to make MVPs mandatory keeps moving forward.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The disadvantage already had a paper trail
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology's MIPS disadvantage isn't a new theory. The same AJR study behind the 9-vs-65 measure gap analyzed more than 35,000 radiologist-practice pairs in 2021 and found that among radiologists in diverse multispecialty practices, only about <strong>1.8%</strong> of the quality measures they reported were radiology measures at all — the rest were measures like blood pressure control or diabetes management, borrowed from colleagues in other specialties because they were easier to score well on. That's the same workaround the newer JACR study puts a number on for 2023, and the one MVPs are built to close.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Separately, a Harvey L. Neiman Health Policy Institute study of nearly 23,000 radiologists' 2019 MIPS data, published in <a href="https://www.jacr.org/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">JACR</a>, found reporting structure was one of the strongest predictors of score: individual reporting was associated with a <strong>28.3-point</strong> lower final score than group reporting, and radiologists in practices of more than 500 clinicians scored <strong>10.3 points</strong> higher than those in practices of 10 or fewer. CMS's own current data shows how thin the overall margin has already become: for the 2024 performance year (paid out in 2026), the maximum positive MIPS payment adjustment was just <strong>+1.05%</strong>, the lowest in the program's history, while the negative adjustment cap remained <strong>-9%</strong>, according to a <a href="https://blog.healthmonix.com/2024-mips-performance-results-and-2026-payment-adjustments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Healthmonix analysis of the released adjustment data</a>. Looking ahead, CMS estimates roughly <strong>12%</strong> of eligible clinicians will land in negative territory for the 2026 performance year — with solo practitioners facing a nearly 1-in-2 chance of a penalty, according to a summary of the <a href="https://college.acaai.org/2026-mips-final-policies/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2026 final rule</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Traditional MIPS vs. the Diagnostic Radiology MVP
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Requirement</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Traditional MIPS</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Diagnostic Radiology MVP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Quality measures reported', '6, from a broad general list — can include nonradiology measures', '4, from a 9-measure radiology-specific set'],
                      ['Outcome measure required', 'Recommended, more options available', 'Mandatory — only eCQM 494 currently qualifies'],
                      ['Performance categories', 'Quality, Cost, Improvement Activities, Promoting Interoperability', 'Same four categories, radiology-specific measure set'],
                      ['2026 status', 'Available, mandatory outcome not required', 'Optional; enrollment window April 1 – Dec 1, 2026'],
                      ['Proposed future', 'CMS proposes sunsetting after 2028 performance period', 'Would become the default pathway from 2029 for non-APM clinicians'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#0D0D0D] font-medium align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#666] font-light align-top">{row[1]}</td>
                        <td className="py-3 text-[14px] text-[#666] font-light align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Sources: <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR</a>, <a href="https://college.acaai.org/2026-mips-final-policies/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2026 QPP final rule summary</a>, <a href="https://www.appliedpolicy.com/quality-payment-program-provisions-in-the-cy-2027-physician-fee-schedule-proposed-rule/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CY 2027 QPP proposed rule summary</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The 2027 proposal raises the stakes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                CMS's CY 2027 Medicare Physician Fee Schedule proposed rule, released in July 2026, proposes sunsetting traditional MIPS reporting after the 2028 performance period, making MVPs the primary reporting option for MIPS-eligible clinicians who aren't in an Advanced Payment Model starting with the 2029 performance year, according to a <a href="https://www.appliedpolicy.com/quality-payment-program-provisions-in-the-cy-2027-physician-fee-schedule-proposed-rule/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">summary of the proposed rule</a>. Three new MVPs are proposed for 2027 — covering diabetic disease, hospitalist care, and hypertension — and none of them apply to radiology, leaving the Diagnostic Radiology and Interventional Radiology MVPs as the only specialty-built options once the traditional pathway disappears and the multispecialty workaround goes with it. Smith-Bindman's recommendation for the interim: "practices should use the transition period, during which traditional MIPS and subgroup MVP reporting can run in parallel, to develop the reporting and CT dose optimization infrastructure that MVP participation will require."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where consistent reporting throughput fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Once the multispecialty workaround is gone, radiology's MVP score comes down to a documentation-consistency problem more than a clinical-judgment one: the mandatory outcome measure and the follow-up-recommendation measures both depend on the same underlying data — radiation dose parameters, image quality, follow-up recommendations — being captured the same way on every study, not just the ones someone remembers to double-check under deadline pressure. That's where structured, AI-drafted reporting is built to help: the draft carries the relevant technique, dose, and follow-up fields through by default on every study, xAID's in-house radiologist reviews every preliminary, and the report reaches the client's reading radiologist ready-to-sign. A radiology group's MVP score shouldn't hinge on whether a given report was dictated in a rush.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What are MIPS Value Pathways (MVPs) and what changed for radiology in 2026?',
                    a: 'MIPS Value Pathways are CMS\'s specialty-specific alternative to traditional MIPS reporting under Medicare\'s Quality Payment Program: a group reports four quality measures from a curated, specialty-relevant set instead of six from a broad general list, alongside cost, improvement activities, and Promoting Interoperability data. In the 2026 Medicare Physician Fee Schedule final rule, CMS added the first two radiology-specific pathways — a Diagnostic Radiology MVP (nine measures total) and an Interventional Radiology MVP — as an optional reporting option, with a group enrollment window running April 1 to December 1, 2026.',
                  },
                  {
                    q: 'Why does a new study say MIPS Value Pathways could cut radiology\'s Medicare pay?',
                    a: "A JACR analysis of 2023 MIPS data covering roughly 25,000 diagnostic radiologists found that radiologists already rank 28th of 62 specialties on average payment adjustment, and that most radiologists currently offset radiology's thin measure set by reporting nonradiology quality measures through multispecialty groups — about 68% do. Radiologists who instead reported radiology-only measures scored lower on average (71.4 vs. 85.1 out of 100) and 27.3% of them were penalized. MVPs are built around a curated radiology-specific measure set, which the study's authors say will push more radiologists toward radiology-only reporting and away from the multispecialty workaround that currently helps many of them avoid a penalty.",
                  },
                  {
                    q: 'Is MVP reporting mandatory for radiologists now?',
                    a: 'Not yet. MVP participation is optional for the 2026 performance year. But in the CY 2027 Medicare Physician Fee Schedule proposed rule, CMS proposed sunsetting traditional MIPS reporting after the 2028 performance period, making MVPs the primary reporting pathway for clinicians outside an Advanced Payment Model starting with the 2029 performance year. None of the three additional MVPs CMS proposed for 2027 — covering diabetic disease, hospitalist care, and hypertension — apply to radiology.',
                  },
                  {
                    q: 'What can radiology groups do now to protect their MIPS score under MVPs?',
                    a: 'Report as a group rather than individually — prior Neiman Health Policy Institute research found individual reporting scored roughly 28 points lower on average than group reporting. Beyond that, the Diagnostic Radiology MVP\'s mandatory outcome measure and the follow-up-recommendation measures both depend on the same thing: radiation-dose parameters, image quality, and follow-up recommendations captured consistently on every CT report, not reconstructed later for an audit. Groups can reduce risk by making sure that documentation is captured the same way on every study rather than only on the ones someone remembers to check.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/changes-medicares-quality-payment-program-may-disadvantage-radiologists" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, with additional reporting from <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/acr-wants-medicare-add-more-radiology-measures-mips-quality-pay-program" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, the <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a>, the <a href="https://www.appliedpolicy.com/quality-payment-program-provisions-in-the-cy-2027-physician-fee-schedule-proposed-rule/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CY 2027 QPP proposed rule summary</a>, the <a href="https://college.acaai.org/2026-mips-final-policies/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2026 QPP final rule summary</a>, and a study published in the <a href="https://ajronline.org/doi/10.2214/AJR.23.30809" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Journal of Roentgenology</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports, built for every measure — not just the easy ones."
          sub="See how AI-drafted, structured reporting keeps the documentation MVP measures depend on consistent across every study. Try it on 5 free studies."
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
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained</div>
              </Link>
              <Link to="/blog/radiology-revenue-cycle-management/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Practice Economics</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The $2.6M Radiology Billing Gap Is Also a Reporting Problem</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MipsValuePathwaysRadiology;
