import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const NoSurprisesActRadiologyReimbursement = () => {
  const post = {
    title: "Radiology's $1B No Surprises Act Win, Explained",
    dateIso: '2026-08-30',
    date: 'August 30, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 8,
    description: "Radiology has won $1.03B in No Surprises Act arbitration since 2023. Insurers call it abuse — here's what's actually deciding who wins these cases.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology's $1B No Surprises Act Win, Explained | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/no-surprises-act-radiology-reimbursement/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology's $1B No Surprises Act Win, Explained | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/no-surprises-act-radiology-reimbursement/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology's $1B No Surprises Act Win, Explained | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/no-surprises-act-radiology-reimbursement" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/no-surprises-act-radiology-reimbursement",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "no surprises act radiology reimbursement, no surprises act, independent dispute resolution radiology, radiology IDR arbitration, out-of-network radiology billing"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much has radiology won through the No Surprises Act's arbitration process?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About $1.03 billion from 2023 through 2025, according to an August 26, 2026 Health Affairs Forefront analysis by Georgetown University's Center on Health Insurance Reforms. Radiology accounted for roughly 23% of disputes in that dataset and about 29% of all dispute lines filed from 2023 to 2025 — second only to emergency medicine."
              }
            },
            {
              "@type": "Question",
              "name": "Why are insurers upset about the No Surprises Act's dispute-resolution process?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The same Georgetown report found the independent dispute resolution (IDR) system has generated $22.4 billion in total costs since 2022, including $15.6 billion in awards above in-network rates, and that 2025 costs alone ($16.6 billion) were nearly 3.5 times 2024's. Providers won about 85% of 2025 disputes with a median award over four times the qualifying payment amount (QPA). An insurer- and employer-backed group, the Coalition Against Surprise Medical Billing, cited the report to call for Congress to 'rein in' what it called provider-driven waste."
              }
            },
            {
              "@type": "Question",
              "name": "What does radiology say in response to the $22 billion cost estimate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology groups and advocates disputed the report within a day. Zotec Partners' Ed Gaines said about $2.5 billion of the total reflected awards insurers can already reopen and correct, that over a third of 2025 awards were default wins because plans refused to make an offer, and that nearly 10% involved insurer offers of $1 or less. The American College of Radiology, joined by anesthesiology and emergency medicine groups, argued the QPA benchmark itself is unreliable. Radiology Associates of North Texas said its own data showed Blue Cross Blue Shield of Texas setting QPAs about 21% below in-network contracted rates."
              }
            },
            {
              "@type": "Question",
              "name": "Do IDR arbitrators consider documentation, not just price, when deciding a case?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Under federal regulation (45 CFR 149.510), a certified IDR entity must weigh 'additional circumstances' beyond the QPA — including the complexity and acuity of the service, the provider's training, experience, and quality/outcomes measures, and case mix — but only if a party actually submits credible written information proving it. Georgetown's report also notes that some IDR entities attribute above-QPA awards partly to 'incomplete submissions' or 'failures to provide information necessary for review' by the losing side, and about 22% of disputes in the first half of 2025 were decided by default because one party filed no offer at all."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for how radiology groups should think about their reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Winning an IDR case above the QPA increasingly comes down to which side better documents the complexity and value of the service, not just who has the stronger opinion on price. A radiology report that clearly and specifically captures exam complexity, findings, and clinical context gives a practice's billing and compliance team a more complete record to build that documentation on than a terse or inconsistent one — which is where structured, radiologist-reviewed reporting becomes a financial asset, not only a clinical one."
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
              Radiology's $1 billion arbitration haul<br />
              <span className="text-white/60">and the fight over what actually wins it</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new Health Affairs analysis says radiology has collected roughly $1.03 billion through the No Surprises Act's dispute-resolution process since 2023. Insurers call it profiteering. The case-by-case record suggests something more specific: paperwork, not just price opinions, is deciding who wins.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$1.03B', label: "Radiology's IDR awards", sub: '2023–2025 combined' },
            { stat: '468%', label: 'Radiology award vs. QPA', sub: 'median, 2025' },
            { stat: '85%', label: 'Provider win rate', sub: 'all IDR disputes, 2025' },
            { stat: '22%', label: 'Decided by default', sub: 'no insurer offer filed, H1 2025' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The number that started the fight
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 26, 2026, researchers at Georgetown University's Center on Health Insurance Reforms published a <a href="https://www.healthaffairs.org/content/forefront/spending-idr-process-pushes-no-surprises-act-costs-more-than-22-4-billion-over-just" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Health Affairs Forefront analysis</a> of four years of federal independent dispute resolution (IDR) data — the arbitration system the No Surprises Act uses to settle out-of-network billing disputes between insurers and providers. The topline: the IDR system has generated <strong>$22.4 billion</strong> in total costs from 2022 through 2025, including $15.6 billion in awards above in-network rates, $4.2 billion in internal administrative costs, and $2.7 billion in entity and administrative fees.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Buried in that report is the radiology-specific figure that put the specialty back in the headlines, as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiology-scores-over-1b-through-no-surprises-acts-independent-dispute-resolution-process" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>: from 2023 to 2025, radiology accounted for roughly 23% of disputes in the report's award-tracking data, but the awards attributable to those disputes totaled <strong>$1.03 billion</strong>. Across all specialties, radiology and emergency medicine together dominate dispute <em>volume</em> — 29% and 41% of all IDR dispute lines filed from 2023 to 2025, respectively — a reflection of how often hospital-based specialists end up out-of-network without a patient ever choosing that.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this is happening in a vacuum. 2025 alone accounted for $16.6 billion of total IDR costs — nearly 3.5 times 2024's total — as dispute volume rose 77% year over year and award amounts rose 264%, more than triple the pace of volume growth. Providers won about 85% of 2025 disputes, with a median award more than four times the QPA, the insurer-calculated benchmark meant to represent local in-network rates.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Radiology's win is real — but it's not the biggest one
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Put next to other specialties, radiology's $1.03 billion looks less like an outlier windfall and more like the payoff of sheer volume at a steady, if healthy, multiple of the QPA. Surgery claims made up only 5% of disputes but generated $3.8 billion in awards; neurology and neuromuscular procedures, also 5% of disputes, generated $2.02 billion — both specialties the No Surprises Act's authors never singled out as at-risk for surprise billing, unlike radiology. Emergency medicine, radiology's closest peer in dispute volume, reportedly produced the largest total award pool of any specialty in the report — north of $6 billion for the same period, per the report's specialty breakdown.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Specialty</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Share of dispute lines, 2023–25</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Median award vs. QPA, 2025</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">Total awards, 2023–25</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Emergency medicine', '41%', '315%', 'reportedly >$6B'],
                      ['Radiology', '29%', '468%', '$1.03B'],
                      ['Surgery', '5%', '1,355%', '$3.8B'],
                      ['Neurology & neuromuscular', '5%', '2,450%', '$2.02B'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`text-[#444] text-[14px] leading-[1.6] font-light py-3 ${i < 3 ? 'pr-4' : ''}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Source: Hoadley &amp; Watts, Georgetown Center on Health Insurance Reforms / Health Affairs Forefront, August 26, 2026.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                One radiology group is doing most of the filing
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Within radiology's totals, one organization stands out. Radiology Partners, a national, private-equity-backed radiology practice group, was the single largest filer of IDR disputes across <em>all</em> specialties in 2025 — accounting for 30% of resolved dispute lines, ahead of the arbitration middleman HaloMD (27%) and multispecialty group TeamHealth (20%). In the first two quarters of 2025, Radiology Partners won 92% and 95% of its disputes, respectively, with median awards of 582% and 594% of the QPA — figures documented in Georgetown's <a href="https://chir.georgetown.edu/the-no-surprises-act-idr-process-an-early-look-at-2025-data/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">earlier 2025 mid-year analysis</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is the clearest evidence that arbitration has become a repeatable, scalable revenue operation for a large imaging group — not a rare escape hatch used on a handful of unusually complicated cases.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Insurers call it abuse. Radiology calls the benchmark broken.
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Georgetown authors themselves warned that "providers have a clear incentive to keep filing disputes and to ask for higher and higher amounts," with "no evidence that there is any ceiling" on what IDR entities will award. The Coalition Against Surprise Medical Billing, an insurer- and employer-backed advocacy group, <a href="https://www.healthcaredive.com/news/no-surprises-idr-created-22-billion-costs-georgetown-surprise-billing/828817/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">seized on the report</a>, saying "employers and employees are already paying the cost of IDR misuse" and calling on Congress and the Trump administration to "rein in the bad actors."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology stakeholders pushed back within a day. Ed Gaines, VP of regulatory affairs at Zotec Partners, argued the report "reads as if it were from [AHIP] itself," noting that roughly $2.5 billion of the $22.4 billion reflects awards insurers can already reopen and correct through an existing federal process, that more than a third of 2025 awards were default wins because health plans simply refused to submit an offer, and that nearly 10% of disputes involved insurer offers of $1 or less. The American College of Radiology — joined by the American Society of Anesthesiologists and American College of Emergency Physicians in a <a href="https://www.healthcaredive.com/news/providers-refute-22B-idr-no-surprises-costs-georgetown/829042/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">joint statement</a> — argued the entire $22 billion estimate rests on treating the QPA as an accurate market rate, when courts have separately found the QPA formula itself unlawful.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology Associates of North Texas offered the most granular rebuttal. Chief Revenue Officer Dave Walker said the practice's own data showed Blue Cross Blue Shield of Texas setting QPAs about 21% below its own in-network contracted rates — between the 35th and 42nd percentile of the payer's published allowed amounts — meaning "an award above QPA may be correcting the benchmark rather than inflating payment." Walker also made a point that complicates the "$1 billion win" framing: award <em>rulings</em> aren't the same as payments <em>collected</em>. His practice received about $4.8 million in binding IDR determinations but had collected only about $1 million at the time of his statement — a reminder that a favorable ruling still has to survive collections.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Both sides are, in effect, agreeing on the same underlying fact: the QPA benchmark and the arbitration process built around it are producing outsized, contested numbers. They just disagree on which side the distortion favors.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually decides an IDR case — and why it isn't just price
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's easy to read IDR as a coin flip between two dollar figures. It isn't. Under federal regulation (<a href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-F/section-149.510" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">45 CFR 149.510(c)(4)</a>), a certified IDR entity must weigh the QPA first, then consider "additional circumstances" a party documents in writing — the complexity and acuity of the service, the provider's level of training and experience, quality and outcomes measures, teaching status and case mix, market share, and any prior contracted rates or good-faith network negotiation. Critically, the regulation only credits information a party actually submits and an arbitrator finds credible; an accurate but undocumented claim of complexity carries no weight at all.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That mechanic shows up in the data. Georgetown's report notes that some IDR entities attribute above-QPA awards not to bias but to "procedural defaults, incomplete submissions, or failures to provide information necessary for review" by the losing party. And in the first half of 2025, a striking 22% of all IDR determinations were decided by default — one side simply never filed an offer or supporting documentation at all. In other words: a meaningful share of these billion-dollar outcomes are won and lost on paperwork before an arbitrator ever weighs the clinical facts.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For imaging specifically, the "complexity of the service" factor traces directly back to the report itself — the number of sequences or phases read, incidental findings worked up, comparison studies reviewed, and the specificity of the impression. A report that documents that work clearly and consistently gives a practice's billing and compliance team a stronger record to build an IDR submission on. A terse, templated, or inconsistent report gives them little to work with, no matter how complex the underlying case actually was.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this leaves imaging groups
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Out-of-network arbitration is now a genuine, recurring line item on a radiology group's P&amp;L — not a rare legal maneuver. But the report's own numbers show that documentation completeness, not just the underlying diagnosis, is doing real work in deciding who gets paid and how much: a fifth of cases decided by default, and IDR entities themselves pointing to incomplete filings as a driver of above-QPA awards. A structured, comprehensive report — the kind produced when a foundation-model AI drafts every study and xAID's in-house radiologist reviews the preliminary before it reaches the client's reading radiologist ready-to-sign — gives billing teams a more complete, consistent documentation trail to build a defensible IDR claim on than free-text dictation ever will. That doesn't decide an arbitration case by itself. It does make sure a practice's own paperwork is never the reason it loses one.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How much has radiology won through the No Surprises Act\'s arbitration process?',
                    a: "About $1.03 billion from 2023 through 2025, according to an August 26, 2026 Health Affairs Forefront analysis by Georgetown University's Center on Health Insurance Reforms. Radiology accounted for roughly 23% of disputes in that dataset and about 29% of all dispute lines filed from 2023 to 2025 — second only to emergency medicine.",
                  },
                  {
                    q: 'Why are insurers upset about the No Surprises Act\'s dispute-resolution process?',
                    a: "The same Georgetown report found the independent dispute resolution (IDR) system has generated $22.4 billion in total costs since 2022, including $15.6 billion in awards above in-network rates, and that 2025 costs alone ($16.6 billion) were nearly 3.5 times 2024's. Providers won about 85% of 2025 disputes with a median award over four times the qualifying payment amount (QPA). An insurer- and employer-backed group, the Coalition Against Surprise Medical Billing, cited the report to call for Congress to \"rein in\" what it called provider-driven waste.",
                  },
                  {
                    q: 'What does radiology say in response to the $22 billion cost estimate?',
                    a: "Radiology groups and advocates disputed the report within a day. Zotec Partners' Ed Gaines said about $2.5 billion of the total reflected awards insurers can already reopen and correct, that over a third of 2025 awards were default wins because plans refused to make an offer, and that nearly 10% involved insurer offers of $1 or less. The American College of Radiology, joined by anesthesiology and emergency medicine groups, argued the QPA benchmark itself is unreliable. Radiology Associates of North Texas said its own data showed Blue Cross Blue Shield of Texas setting QPAs about 21% below in-network contracted rates.",
                  },
                  {
                    q: 'Do IDR arbitrators consider documentation, not just price, when deciding a case?',
                    a: "Yes. Under federal regulation (45 CFR 149.510), a certified IDR entity must weigh \"additional circumstances\" beyond the QPA — including the complexity and acuity of the service, the provider's training, experience, and quality/outcomes measures, and case mix — but only if a party actually submits credible written information proving it. Georgetown's report also notes that some IDR entities attribute above-QPA awards partly to \"incomplete submissions\" or \"failures to provide information necessary for review\" by the losing side, and about 22% of disputes in the first half of 2025 were decided by default because one party filed no offer at all.",
                  },
                  {
                    q: 'What does this mean for how radiology groups should think about their reports?',
                    a: "Winning an IDR case above the QPA increasingly comes down to which side better documents the complexity and value of the service, not just who has the stronger opinion on price. A radiology report that clearly and specifically captures exam complexity, findings, and clinical context gives a practice's billing and compliance team a more complete record to build that documentation on than a terse or inconsistent one — which is where structured, radiologist-reviewed reporting becomes a financial asset, not only a clinical one.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Jack Hoadley &amp; Kennah Watts, <a href="https://www.healthaffairs.org/content/forefront/spending-idr-process-pushes-no-surprises-act-costs-more-than-22-4-billion-over-just" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Spending On IDR Process Pushes No Surprises Act Costs To More Than $22.4 Billion Over Just Four Years,"</a> Health Affairs Forefront / <a href="https://chir.georgetown.edu/spending-on-idr-process-pushes-no-surprises-act-costs-to-more-than-22-4-billion-over-just-four-years/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Georgetown Center on Health Insurance Reforms</a>, August 26, 2026; radiology industry response via <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiology-scores-over-1b-through-no-surprises-acts-independent-dispute-resolution-process" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; insurer reaction and Georgetown 2025 mid-year data via <a href="https://www.healthcaredive.com/news/no-surprises-idr-created-22-billion-costs-georgetown-surprise-billing/828817/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Healthcare Dive</a> and <a href="https://chir.georgetown.edu/the-no-surprises-act-idr-process-an-early-look-at-2025-data/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Georgetown CHIR</a>; provider rebuttal statement via <a href="https://www.healthcaredive.com/news/providers-refute-22B-idr-no-surprises-costs-georgetown/829042/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Healthcare Dive</a>; IDR additional-factors regulation per <a href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-F/section-149.510" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">45 CFR 149.510</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Make every report a stronger record, not just a faster one"
          sub="AI-drafted reports reviewed by xAID's in-house radiologist and delivered ready-to-sign — structured and complete by default. Try it on 5 free studies."
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
              <Link to="/blog/qualifying-payment-amount-no-surprises-act/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">QPA Formula Struck Down: What It Means for Radiology</div>
              </Link>
              <Link to="/blog/radiology-revenue-cycle-management/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Practice Economics</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The $2.6M Radiology Billing Gap Is Also a Reporting Problem</div>
              </Link>
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NoSurprisesActRadiologyReimbursement;
