import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MipsValuePathwaysRadiology = () => {
  const post = {
    title: "MIPS Value Pathways: What CMS's Shift Means for Radiology",
    dateIso: '2026-09-03',
    date: 'September 3, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: "CMS added radiology-specific MIPS Value Pathways in 2026 and has proposed making them mandatory by 2029. What the new measures require, why radiology's measure set is thin, and how reporting quality affects the score.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MIPS Value Pathways: What They Mean for Radiology | xAID</title>
        <meta name="description" content="CMS added radiology-specific MIPS Value Pathways in 2026 and plans to make them mandatory by 2029 — what the new measures require." />
        <link rel="canonical" href="https://xaid.ai/blog/mips-value-pathways-radiology" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MIPS Value Pathways: What They Mean for Radiology | xAID" />
        <meta property="og:description" content="CMS added radiology-specific MIPS Value Pathways in 2026 and plans to make them mandatory by 2029 — what the new measures require." />
        <meta property="og:url" content="https://xaid.ai/blog/mips-value-pathways-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIPS Value Pathways: What They Mean for Radiology | xAID" />
        <meta name="twitter:description" content="CMS added radiology-specific MIPS Value Pathways in 2026 and plans to make them mandatory by 2029 — what the new measures require." />
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
          "keywords": "MIPS value pathways radiology, MVP MIPS radiology, MIPS radiology reporting, CMS quality payment program radiology, diagnostic radiology MVP"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are MIPS Value Pathways (MVPs)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MIPS Value Pathways are CMS's specialty-specific alternative to traditional MIPS reporting under Medicare's Quality Payment Program. Instead of choosing from a large general list of quality measures, a group reports a curated set built around its specialty — four quality measures instead of six, plus cost, improvement activities, and Promoting Interoperability data. CMS added the first two radiology-specific pathways, a Diagnostic Radiology MVP and an Interventional Radiology MVP, in the 2026 Medicare Physician Fee Schedule final rule."
              }
            },
            {
              "@type": "Question",
              "name": "Why do the new radiology MVPs raise reimbursement risk?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Diagnostic Radiology MVP measure set has only nine quality measures to choose from, and one of the four a group must report has to be an Outcome measure — but currently only one Outcome measure, eCQM 494 (excessive radiation dose or inadequate image quality for diagnostic CT), qualifies. The American College of Radiology told CMS the draft pathway 'does not provide enough Clinical Quality Measures applicable or feasible for a substantial number of diagnostic radiology practices,' and has asked for more options. A thin, outcome-anchored measure set leaves less room to absorb inconsistent documentation."
              }
            },
            {
              "@type": "Question",
              "name": "Is MVP reporting mandatory for radiologists now?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not yet. MVP participation is optional for the 2026 performance year, with an enrollment window CMS set from April 1 to December 1, 2026. But in the CY 2027 Medicare Physician Fee Schedule proposed rule, CMS proposed sunsetting traditional MIPS reporting after the 2028 performance period, making MVPs the primary reporting pathway for clinicians outside an Advanced Payment Model starting with the 2029 performance year. None of the three additional MVPs proposed for 2027 apply to radiology."
              }
            },
            {
              "@type": "Question",
              "name": "How can radiology groups reduce reporting risk under MVPs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Research from the Harvey L. Neiman Health Policy Institute found individual reporting scored 28.3 points lower on average than group reporting in MIPS, and larger practices consistently outscored smaller ones. Groups can reduce risk by reporting together rather than individually, tracking which measures CMS has 'topped out' before they lose points, and making sure the documentation each MVP measure depends on — radiation dose parameters, image quality, follow-up recommendations — is captured consistently on every report rather than reconstructed later for an audit."
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
              MIPS Value Pathways just got a radiology track.<br />
              <span className="text-white/60">The measure set is thinner than the stakes.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              CMS built radiology its own pathway through Medicare's Quality Payment Program in 2026 — then proposed making that pathway mandatory by 2029. Radiology groups now have a narrower window to prove their reporting can consistently hit measures that used to be optional.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '2', label: 'New radiology MVPs in 2026', sub: 'Diagnostic Radiology & Interventional Radiology' },
            { stat: '28.3 pts', label: 'Lower average MIPS score', sub: 'individual vs. group reporting, 2019 data' },
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
                MIPS Value Pathways (MVPs) are CMS's specialty-specific alternative to traditional MIPS reporting inside Medicare's Quality Payment Program. Instead of picking from a broad, largely primary-care-oriented list of quality measures, a group reports a curated set built for its specialty: four quality measures instead of six, alongside cost, improvement activities, and Promoting Interoperability data. In the 2026 Medicare Physician Fee Schedule final rule, CMS added the first two pathways built specifically for imaging: a <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Diagnostic Radiology MVP and an Interventional Radiology MVP</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                On paper, that's the fix radiology has been asking for. Traditional MIPS was never built with imaging in mind, and it shows: for 2021, diagnostic radiology had only <strong>9</strong> available MIPS quality measures to choose from, compared with <strong>65</strong> for family medicine, according to <a href="https://doi.org/10.2214/AJR.23.30809" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">research published in the American Journal of Roentgenology</a>. A dedicated pathway is supposed to level that gap. Whether it does depends on how usable the new measure set actually is.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A narrower measure set with one mandatory outcome
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Diagnostic Radiology MVP measure set has nine measures to choose from in total. Of the four a group must report, one has to be an Outcome measure — and right now only one qualifies: eCQM 494, "Excessive Radiation Dose or Inadequate Image Quality for Diagnostic CT in Adults." Miss that measure, and a group cannot reach full points in the Quality category no matter how well it performs elsewhere.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The American College of Radiology has told CMS directly that the draft pathway falls short. In comments summarized by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/acr-wants-medicare-add-more-radiology-measures-mips-quality-pay-program" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, ACR said the current MVP "does not provide enough Clinical Quality Measures applicable or feasible for a substantial number of diagnostic radiology practices," and proposed additional measures built around scenarios like CTPA interpretation for pulmonary embolism and TI-RADS thyroid nodule reporting, plus ten more measures for interventional radiology covering things like medication documentation and 30-day unplanned readmissions. The Interventional Radiology MVP, for comparison, draws on <a href="https://mdinteractive.com/2026-mvp-interventional-radiology-id-m1499" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">six MIPS quality measures and four QCDR measures</a>.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The outcome measure is a chokepoint',
                    desc: "With only eCQM 494 available as the mandatory Outcome measure, a group's Quality score depends on consistently documenting radiation dose parameters and image quality on every diagnostic CT — not just on the studies someone remembers to check.",
                  },
                  {
                    title: 'Measures keep “topping out”',
                    desc: 'CMS caps and eventually retires measures once nearly everyone scores near the maximum on them. None of the top ten measures used by individual and group radiology reporters in 2019 remained available for full points by 2024 — the target keeps moving even for groups that report well today.',
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
                The score gap already exists — before MVPs even land
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology's disadvantage in MIPS isn't a new theory. A study from the Harvey L. Neiman Health Policy Institute, published in the <a href="https://doi.org/10.1016/j.jacr.2025.01.011" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of the American College of Radiology</a>, analyzed 2019 MIPS data for nearly 23,000 radiologists and found reporting structure was one of the strongest predictors of score. Individual reporting was associated with a <strong>28.3-point</strong> lower final score than group reporting, while participation in a MIPS Advanced Payment Model scored <strong>7.2 points</strong> higher than group reporting, and radiologists in practices of more than 500 clinicians scored <strong>10.3 points</strong> higher than those in practices of 10 or fewer. Unsurprisingly, individual reporting collapsed as a strategy — from 16.6% of radiologists in 2017 down to 4.3% by 2019.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Separately, the AJR analysis of more than 35,000 radiologist-practice pairs found that radiologists embedded in multispecialty practices often report non-radiology measures instead of imaging-specific ones — only about 1.8% of the measures they reported were radiology measures — simply because more non-radiology measures exist and score better. CMS's own current data backs up how thin the margin for error is getting: the maximum positive MIPS payment adjustment for 2026 is just <strong>+1.05%</strong>, the lowest in the program's history, while the negative adjustment cap remains <strong>-9%</strong>, and CMS estimates roughly 12% of eligible clinicians will land in negative territory — with solo practitioners facing a nearly 1-in-2 chance of a penalty, according to a summary of the <a href="https://college.acaai.org/2026-mips-final-policies/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2026 final rule</a>.
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
                      ['Quality measures reported', '6, from a broad general list', '4, from a 9-measure radiology set'],
                      ['Outcome measure required', 'Recommended, more options available', 'Mandatory — only eCQM 494 currently qualifies'],
                      ['Performance categories', 'Quality, Cost, Improvement Activities, Promoting Interoperability', 'Same four categories, radiology-specific measure set'],
                      ['2026 status', 'Available, performance threshold 75 points through 2028', 'Optional; enrollment window April 1 – Dec 1, 2026'],
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
                CMS's CY 2027 Medicare Physician Fee Schedule proposed rule, released in July 2026, proposes sunsetting traditional MIPS reporting after the 2028 performance period, making MVPs the primary reporting option for MIPS-eligible clinicians who aren't in an Advanced Payment Model starting with the 2029 performance year, according to a <a href="https://www.appliedpolicy.com/quality-payment-program-provisions-in-the-cy-2027-physician-fee-schedule-proposed-rule/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">summary of the proposed rule</a>. Three new MVPs are proposed for 2027 — covering diabetic disease, hospitalist care, and hypertension — and none of them apply to radiology, leaving the Diagnostic Radiology and Interventional Radiology MVPs as the only specialty-built options once the traditional pathway disappears. Groups that don't elect an MVP by the time the sunset takes effect default to a negative payment adjustment for that MIPS year.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where consistent reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Every measure in the Diagnostic Radiology MVP depends on the same underlying thing: a report that reliably captures specific structured data — radiation dose parameters, image quality, follow-up recommendations — on every study, not just the ones someone remembers to double-check under deadline pressure. That's a documentation-consistency problem more than a clinical-judgment problem, and it's where structured, AI-drafted reporting is built to help: the draft carries the relevant technique, dose, and follow-up fields through on every study by default, xAID's in-house radiologist reviews every preliminary, and the report reaches the client's reading radiologist ready-to-sign. A radiology group's MVP score shouldn't hinge on whether a given report was dictated in a rush.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What are MIPS Value Pathways (MVPs)?',
                    a: 'MIPS Value Pathways are CMS\'s specialty-specific alternative to traditional MIPS reporting under Medicare\'s Quality Payment Program. Instead of choosing from a large general list of quality measures, a group reports a curated set built around its specialty — four quality measures instead of six, plus cost, improvement activities, and Promoting Interoperability data. CMS added the first two radiology-specific pathways, a Diagnostic Radiology MVP and an Interventional Radiology MVP, in the 2026 Medicare Physician Fee Schedule final rule.',
                  },
                  {
                    q: 'Why do the new radiology MVPs raise reimbursement risk?',
                    a: "The Diagnostic Radiology MVP measure set has only nine quality measures to choose from, and one of the four a group must report has to be an Outcome measure — but currently only one Outcome measure, eCQM 494 (excessive radiation dose or inadequate image quality for diagnostic CT), qualifies. The American College of Radiology told CMS the draft pathway 'does not provide enough Clinical Quality Measures applicable or feasible for a substantial number of diagnostic radiology practices,' and has asked for more options. A thin, outcome-anchored measure set leaves less room to absorb inconsistent documentation.",
                  },
                  {
                    q: 'Is MVP reporting mandatory for radiologists now?',
                    a: 'Not yet. MVP participation is optional for the 2026 performance year, with an enrollment window CMS set from April 1 to December 1, 2026. But in the CY 2027 Medicare Physician Fee Schedule proposed rule, CMS proposed sunsetting traditional MIPS reporting after the 2028 performance period, making MVPs the primary reporting pathway for clinicians outside an Advanced Payment Model starting with the 2029 performance year. None of the three additional MVPs proposed for 2027 apply to radiology.',
                  },
                  {
                    q: 'How can radiology groups reduce reporting risk under MVPs?',
                    a: "Research from the Harvey L. Neiman Health Policy Institute found individual reporting scored 28.3 points lower on average than group reporting in MIPS, and larger practices consistently outscored smaller ones. Groups can reduce risk by reporting together rather than individually, tracking which measures CMS has 'topped out' before they lose points, and making sure the documentation each MVP measure depends on — radiation dose parameters, image quality, follow-up recommendations — is captured consistently on every report rather than reconstructed later for an audit.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/changes-medicares-quality-payment-program-may-disadvantage-radiologists" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, with additional reporting from <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/acr-wants-medicare-add-more-radiology-measures-mips-quality-pay-program" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, the <a href="https://www.acr.org/News-and-Publications/2026/new-mips-value-pathways-for-subspecialty-physicians" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a>, the <a href="https://www.appliedpolicy.com/quality-payment-program-provisions-in-the-cy-2027-physician-fee-schedule-proposed-rule/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CY 2027 QPP proposed rule summary</a>, the <a href="https://college.acaai.org/2026-mips-final-policies/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2026 QPP final rule summary</a>, studies published in the <a href="https://doi.org/10.1016/j.jacr.2025.01.011" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Journal of the American College of Radiology</a> and the <a href="https://doi.org/10.2214/AJR.23.30809" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Journal of Roentgenology</a>, and the <a href="https://mdinteractive.com/2026-mvp-interventional-radiology-id-m1499" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2026 MVP Interventional Radiology measure list</a>. Figures are rounded as reported.
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
