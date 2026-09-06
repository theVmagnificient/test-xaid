import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MipsValuePathwaysRadiology = () => {
  const post = {
    title: 'MIPS Value Pathways Are Supposed to Simplify Radiology Reporting. Do They?',
    dateIso: '2026-09-06',
    date: 'September 6, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 8,
    description: 'CMS built radiology its first MIPS Value Pathways in 2026. New research shows radiology-only reporting already scores worse than the multispecialty workaround MVPs are designed to close.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MIPS Value Pathways for Radiology, Explained | xAID</title>
        <meta name="description" content="MIPS Value Pathways promise simpler radiology reporting, but new JACR and AJR data show radiology-only practices already score worse than multispecialty groups." />
        <link rel="canonical" href="https://xaid.ai/blog/mips-value-pathways-radiology" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MIPS Value Pathways for Radiology, Explained | xAID" />
        <meta property="og:description" content="MIPS Value Pathways promise simpler radiology reporting, but new JACR and AJR data show radiology-only practices already score worse than multispecialty groups." />
        <meta property="og:url" content="https://xaid.ai/blog/mips-value-pathways-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIPS Value Pathways for Radiology, Explained | xAID" />
        <meta name="twitter:description" content="MIPS Value Pathways promise simpler radiology reporting, but new JACR and AJR data show radiology-only practices already score worse than multispecialty groups." />
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
          "keywords": "MIPS value pathways radiology, MVP MIPS radiology, MIPS quality measures radiology, Medicare Quality Payment Program radiology, diagnostic radiology MVP"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are MIPS Value Pathways (MVPs) and how do they differ from traditional MIPS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MIPS Value Pathways are CMS's specialty-aligned alternative to traditional MIPS reporting inside Medicare's Quality Payment Program. Instead of choosing from a broad, largely primary-care-oriented measure list, a group reports a curated, specialty-specific set: four quality measures instead of six, plus cost, improvement activities, and Promoting Interoperability data. MVPs have existed since 2023 for more than 25 specialties, but radiology had none until the CY 2026 Medicare Physician Fee Schedule final rule added a Diagnostic Radiology MVP and an Interventional Radiology MVP."
              }
            },
            {
              "@type": "Question",
              "name": "What do the new Diagnostic Radiology and Interventional Radiology MVPs include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Diagnostic Radiology MVP draws on 6 MIPS quality measures plus 3 QCDR quality measures, 11 improvement activities, and 1 cost measure, organized into three clinical groups (general diagnostic radiology, body imaging, and advancing health and wellness). The Interventional Radiology MVP draws on 6 MIPS quality measures plus 4 QCDR quality measures, 19 improvement activities, and 3 cost measures across four clinical groups. Participation is optional for the 2026 performance year, with a group enrollment window CMS set from April 1 to December 1, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "Do radiology-only practices already score worse in MIPS than multispecialty groups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A 2024 American Journal of Roentgenology analysis of 2021 Medicare data found diagnostic radiology had only 9 available MIPS measures versus 65 for family medicine, and that radiologists in radiology-focused practices scored significantly lower than those in multispecialty practices. A newer JACR analysis of 2023 data found most radiologists (68.1%) offset this by reporting nonradiology measures through multispecialty groups, scoring 85.1 out of 100 on average, versus 71.4 for radiologists who reported radiology-only measures — who were penalized at a 27.3% rate versus 9.8% for the mixed-reporting group."
              }
            },
            {
              "@type": "Question",
              "name": "Why does documentation burden matter for radiology quality reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MVP quality measures like the mandatory CT dose/image-quality outcome measure depend on structured data — dose parameters, technique, follow-up recommendations — being captured consistently on every report, not reconstructed later for an audit. That data entry work competes directly with the volume and turnaround-time pressure radiologists already face, which is why reporting workflows that capture these fields by default, rather than relying on a radiologist to remember, reduce the operational risk MVPs introduce."
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
              MIPS Value Pathways are supposed to simplify radiology reporting.<br />
              <span className="text-white/60">Do they?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Radiology finally has its own track through Medicare's Quality Payment Program. New research suggests the fix may not close the gap it's meant to — because most radiologists have been scoring well by reporting someone else's measures, and the new pathway is built to stop that.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '4 vs 6', label: 'Quality measures required', sub: 'MVP vs. traditional MIPS' },
            { stat: '68.1%', label: 'Use the multispecialty workaround', sub: 'report nonradiology measures, 2023' },
            { stat: '9 vs 65', label: 'Available measures, 2021', sub: 'diagnostic radiology vs. family medicine' },
            { stat: '27.3%', label: 'Penalty rate, radiology-only', sub: 'vs. 9.8% for mixed reporters' },
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
                MIPS Value Pathways (MVPs) are CMS's specialty-specific alternative to traditional MIPS reporting inside Medicare's Quality Payment Program. Instead of picking from a broad, largely primary-care-oriented list of quality measures, a group reports a curated set built for its specialty — <a href="https://nrdrsupport.acr.org/support/solutions/articles/11000135023-mips-value-pathways-mvp-overview" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">four quality measures instead of six</a>, alongside cost, improvement activities, and Promoting Interoperability data. MVPs have existed since 2023 for more than 25 specialties. Radiology had none of its own until the <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CY 2026 Medicare Physician Fee Schedule final rule</a> added a Diagnostic Radiology MVP and an Interventional Radiology MVP among six new pathways that year.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The Diagnostic Radiology MVP draws on 6 MIPS quality measures plus 3 QCDR quality measures, 11 improvement activities, and 1 cost measure, organized into three clinical groups: general diagnostic radiology, body imaging, and advancing health and wellness. The Interventional Radiology MVP draws on 6 MIPS quality measures plus 4 QCDR quality measures, 19 improvement activities, and 3 cost measures, across four clinical groups. Reporting through either pathway is optional for the 2026 performance year, with a group enrollment window CMS set from April 1 to December 1, 2026, <a href="https://ecqi.healthit.gov/cms-publishes-2026-policy-changes-quality-payment-program" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">per CMS's 2026 Quality Payment Program policy summary</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The workaround MVPs are built to close
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On paper, a dedicated pathway is the fix radiology has been asking for. But an analysis by Rebecca Smith-Bindman, MD, and Carly Stewart, published in the <em>Journal of the American College of Radiology</em> and <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/changes-medicares-quality-payment-program-may-disadvantage-radiologists" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">covered by Radiology Business</a>, suggests the new structure could remove the very mechanism most radiologists currently rely on to score well. Looking at 2023 MIPS data covering roughly 250,000 physicians, including about 25,000 diagnostic radiologists, the study found radiology ranked <strong>28th of 62 specialties</strong> in average payment adjustment that year — a respectable-looking result that depends almost entirely on a workaround.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Diagnostic radiology's own measure set is thin and quickly "tops out": 6 of 20 radiology-relevant measures were already topped out in 2023, meaning near-universal high performance leaves little room to score above average. So most radiologists — <strong>68.1%</strong> of diagnostic radiologists, per the study — report through multispecialty groups and pick up nonradiology measures instead. Those "mixed" reporters (40.1% of the group studied) averaged an <strong>85.1-out-of-100</strong> quality score. Radiologists who reported radiology-only measures (15.8% of the group) averaged a lower <strong>71.4</strong> score and were penalized at a <strong>27.3%</strong> rate, versus <strong>9.8%</strong> for mixed reporters. Among radiologists reporting as individuals, <strong>87.3%</strong> submitted no measures at all, averaging a <strong>-1.99%</strong> payment adjustment.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                MVPs are built around a curated, specialty-specific measure set — which is exactly the structure that removes the multispecialty option. As Smith-Bindman put it, radiologists' MIPS performance has "depended on multispecialty group reporting of nonradiology measures, a strategy MVPs will largely eliminate." Smith-Bindman and Stewart's recommendation for groups in the interim: use the window while traditional MIPS and MVP reporting can run in parallel "to develop the reporting and CT dose optimization infrastructure that MVP participation will require."
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The gap in available measures isn\'t new',
                    desc: 'For 2021, diagnostic radiology had only 9 available MIPS quality measures to choose from, compared with 65 for family medicine, according to a Harvey L. Neiman Health Policy Institute analysis of 2,333 practices and 35,578 radiologist-practice pairs published in the American Journal of Roentgenology.',
                  },
                  {
                    title: 'The multispecialty workaround already showed up in the data',
                    desc: 'The same AJR study found that among radiologists in diverse multispecialty practices, only about 1.8% of reported measures were radiology measures — and zero radiology measures appeared in the top ten most-reported. Radiologists in radiology-focused practices scored significantly lower than those in multispecialty practices.',
                  },
                  {
                    title: 'How you report matters as much as what you report',
                    desc: 'A separate Neiman Health Policy Institute study of 22,875 radiologists’ 2019 MIPS data, published in JACR, found individual reporting was associated with a 28.3-point lower final score than group reporting, and individual radiologists were 7.4 times more likely to miss "exceptional" status. Radiologists in practices of more than 500 clinicians scored 10.3 points higher on average than those in practices of 10 or fewer, and hospital-based radiologists were less than half as likely to underperform.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Traditional MIPS vs. the new radiology MVPs
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
                      ['Quality measures reported', '6, from a broad general list — can include nonradiology measures', '4, from a curated 9-measure radiology set (6 MIPS + 3 QCDR)'],
                      ['Outcome measure', 'Not mandatory; more options available', 'Mandatory — CT dose/image-quality measure (eCQM 494)'],
                      ['Improvement activities', 'Chosen from a general list', '11 activities specific to diagnostic radiology'],
                      ['Cost measures', 'General cost category', '1 radiology-specific cost measure'],
                      ['2026 status', 'Still available', 'Optional; enrollment window April 1 – Dec. 1, 2026'],
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
                Sources: <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a>, <a href="https://nrdrsupport.acr.org/support/solutions/articles/11000135023-mips-value-pathways-mvp-overview" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR NRDR support</a>, <a href="https://ecqi.healthit.gov/cms-publishes-2026-policy-changes-quality-payment-program" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">eCQI Resource Center</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The clock is already moving toward mandatory
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                MVP reporting is optional today, but not for long. CMS's CY 2027 Medicare Physician Fee Schedule proposed rule, released in July 2026, proposes sunsetting traditional MIPS reporting starting with the 2029 performance year, making MVPs the default pathway for clinicians outside an Advanced Payment Model entity. Three new MVPs are proposed for 2027 — covering diabetic disease, hospitalist care, and hypertension — and none apply to radiology, leaving the Diagnostic Radiology and Interventional Radiology MVPs as the only specialty-built options once the traditional pathway, and the multispecialty workaround that comes with it, is gone. The ACR has already asked CMS to add more measures and improvement activities to both radiology MVPs before that happens.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where the reporting burden actually lands
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Strip away the policy mechanics and the pattern across all three studies is the same: radiology's MIPS score has depended less on clinical quality than on how consistently a group captures structured data — dose parameters, image quality, follow-up recommendations — on every study, not just the ones someone remembers to check before a deadline. That's a documentation-throughput problem, and it competes directly with the same radiologist time that volume and turnaround pressure already claims. Structured, AI-drafted reporting is built to close that gap by carrying the relevant technique, dose, and follow-up fields through by default on every study; xAID's in-house radiologist reviews every preliminary before it reaches the client's reading radiologist ready-to-sign. A group's MVP score shouldn't hinge on whether a given report was dictated in a rush.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What are MIPS Value Pathways (MVPs) and how do they differ from traditional MIPS?',
                    a: "MIPS Value Pathways are CMS's specialty-aligned alternative to traditional MIPS reporting inside Medicare's Quality Payment Program. Instead of choosing from a broad, largely primary-care-oriented measure list, a group reports a curated, specialty-specific set: four quality measures instead of six, plus cost, improvement activities, and Promoting Interoperability data. MVPs have existed since 2023 for more than 25 specialties, but radiology had none until the CY 2026 Medicare Physician Fee Schedule final rule added a Diagnostic Radiology MVP and an Interventional Radiology MVP.",
                  },
                  {
                    q: 'What do the new Diagnostic Radiology and Interventional Radiology MVPs include?',
                    a: 'The Diagnostic Radiology MVP draws on 6 MIPS quality measures plus 3 QCDR quality measures, 11 improvement activities, and 1 cost measure, organized into three clinical groups (general diagnostic radiology, body imaging, and advancing health and wellness). The Interventional Radiology MVP draws on 6 MIPS quality measures plus 4 QCDR quality measures, 19 improvement activities, and 3 cost measures across four clinical groups. Participation is optional for the 2026 performance year, with a group enrollment window CMS set from April 1 to December 1, 2026.',
                  },
                  {
                    q: 'Do radiology-only practices already score worse in MIPS than multispecialty groups?',
                    a: 'Yes. A 2024 American Journal of Roentgenology analysis of 2021 Medicare data found diagnostic radiology had only 9 available MIPS measures versus 65 for family medicine, and that radiologists in radiology-focused practices scored significantly lower than those in multispecialty practices. A newer JACR analysis of 2023 data found most radiologists (68.1%) offset this by reporting nonradiology measures through multispecialty groups, scoring 85.1 out of 100 on average, versus 71.4 for radiologists who reported radiology-only measures — who were penalized at a 27.3% rate versus 9.8% for the mixed-reporting group.',
                  },
                  {
                    q: 'Why does documentation burden matter for radiology quality reporting?',
                    a: 'MVP quality measures like the mandatory CT dose/image-quality outcome measure depend on structured data — dose parameters, technique, follow-up recommendations — being captured consistently on every report, not reconstructed later for an audit. That data entry work competes directly with the volume and turnaround-time pressure radiologists already face, which is why reporting workflows that capture these fields by default, rather than relying on a radiologist to remember, reduce the operational risk MVPs introduce.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/changes-medicares-quality-payment-program-may-disadvantage-radiologists" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, reporting on an analysis by Rebecca Smith-Bindman, MD, and Carly Stewart published in the <a href="https://www.jacr.org/article/S1546-1440(26)00434-5/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Journal of the American College of Radiology</a> (2026). Additional data from a Harvey L. Neiman Health Policy Institute study published in the <a href="https://doi.org/10.2214/AJR.23.30809" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Journal of Roentgenology</a> (2024) and a separate Neiman HPI study published in <a href="https://doi.org/10.1016/j.jacr.2025.01.011" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">JACR</a> (2025). MVP structure per the <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a> and the <a href="https://ecqi.healthit.gov/cms-publishes-2026-policy-changes-quality-payment-program" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">eCQI Resource Center</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports, built for every measure — not just the easy ones."
          sub="See how AI-drafted, structured reporting keeps dose, technique, and follow-up documentation consistent on every study. Try it on 5 free studies."
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
