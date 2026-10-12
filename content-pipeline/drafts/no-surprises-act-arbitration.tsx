import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const NoSurprisesActArbitration = () => {
  const post = {
    title: "A Bill Would Scrap No Surprises Act Arbitration Entirely",
    dateIso: '2026-10-12',
    date: 'October 12, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: "A new bill would eliminate No Surprises Act arbitration outright. What that means for radiology groups' out-of-network negotiating leverage.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>No Surprises Act Arbitration Bill: Radiology Impact | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/no-surprises-act-arbitration/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="No Surprises Act Arbitration Bill: Radiology Impact | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="No Surprises Act Arbitration Bill: Radiology Impact | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/no-surprises-act-arbitration/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/no-surprises-act-arbitration/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "no surprises act arbitration, No Surprises Act, independent dispute resolution radiology, Lower Premiums Faster Payments Act, out-of-network reimbursement radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Lower Premiums, Faster Payments Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Lower Premiums, Faster Payments Act is a bill introduced October 8, 2026 by Rep. Frank Pallone Jr. (D-N.J.), one of the original authors of the No Surprises Act. It would eliminate the law's independent dispute resolution (IDR) arbitration process for services furnished on or after January 1, 2028, and replace it with a fixed payment benchmark tied to insurers' median in-network contracted rates, adjusted for geography and inflation, with payment due within 30 days."
              }
            },
            {
              "@type": "Question",
              "name": "Does the bill just change the arbitration formula, or eliminate arbitration itself?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It eliminates arbitration itself. That is the key difference from the Fifth Circuit's 2026 ruling that struck down parts of the qualifying payment amount (QPA) formula insurers use inside arbitration — that ruling changed how a number is calculated but kept the independent-arbiter process intact. Pallone's bill removes the independent arbiter altogether and sets payment by a formula insurers' own contracted rates feed into."
              }
            },
            {
              "@type": "Question",
              "name": "Why are radiology, emergency medicine, and anesthesiology groups opposed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The American College of Radiology, American College of Emergency Physicians, and American Society of Anesthesiologists issued a joint statement the same day the bill was introduced. ACR CEO Dr. Dana Smetherman argued that \"independent arbiters routinely reject insurers' unreasonably low payment offers\" and that eliminating arbitration \"would remove an important check on insurer conduct.\" The groups point to 2025 IDR data showing insurers lost by default or forfeited on roughly a quarter of disputed line items and submitted offers of $1 or less 8.2% of the time — evidence, they argue, that the dispute process is disciplining insurer behavior, not just enriching providers."
              }
            },
            {
              "@type": "Question",
              "name": "What does Rep. Pallone say is driving the bill?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pallone says arbitration has become a gold mine for a small number of provider groups and private-equity-backed firms, citing that 10 provider groups accounted for about 67% of the roughly 2.5 million disputes filed in 2025, that the 15 certified IDR entities collected $1.3 billion in fees that year (versus $885 million combined for 2022–2024), and that providers won close to $15 billion in awards in 2025 — costs he argues flow through to premiums."
              }
            },
            {
              "@type": "Question",
              "name": "What can radiology groups control while this plays out in Congress?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Whichever mechanism survives — arbitration, a revised QPA formula, or a fixed benchmark — payment still depends on documented, defensible, timely reports. Practices cannot control how Congress resolves the No Surprises Act, but they can control reporting throughput and consistency, which determines how much volume a practice can bill and defend regardless of the payment formula in place. That is the lever AI-assisted CT reporting with radiologist review targets directly."
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
              A bill would scrap No Surprises Act arbitration entirely<br />
              <span className="text-white/60">Not just reform the formula — remove it</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Rep. Frank Pallone's Lower Premiums, Faster Payments Act would end the No Surprises Act's independent dispute resolution process outright. Radiology, emergency medicine, and anesthesiology groups say that's a different — and bigger — problem than the QPA-formula fight already underway in court.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '2.5M', label: 'IDR disputes filed in 2025', sub: '10 groups filed 67% of them' },
            { stat: '$1.3B', label: 'Arbitration fees paid in 2025', sub: 'vs $885M for 2022–2024' },
            { stat: '~$15B', label: 'Awarded to providers in 2025', sub: 'via IDR process' },
            { stat: 'Jan 1, 2028', label: 'Arbitration would end', sub: 'if the bill becomes law' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A different lever than the QPA fight
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On October 8, 2026, Rep. Frank Pallone Jr. (D-N.J.) — one of the original authors of the No Surprises Act — introduced the <a href="https://democrats-energycommerce.house.gov/media/press-releases/pallone-introduces-lower-premiums-faster-payments-act" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Lower Premiums, Faster Payments Act</a>. Coverage of the reaction, including from <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-criticize-congressmans-proposed-no-surprises-act-shakeup" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, describes a bill that would eliminate the law's independent dispute resolution (IDR) — the "baseball-style" arbitration process — for services furnished on or after January 1, 2028, replacing it with a fixed payment benchmark.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is a materially different legal lever than the one radiology groups have been watching this year in the Fifth Circuit, which <Link to="/blog/qualifying-payment-amount-no-surprises-act/" className="text-xaid-blue-strong underline underline-offset-2">struck down parts of the formula insurers use</Link> to calculate the qualifying payment amount (QPA) inside arbitration. The court case leaves the independent arbiter in place and argues over how a number gets calculated. Pallone's bill removes the arbiter itself.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the bill actually changes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                According to the bill sponsor's <a href="https://democrats-energycommerce.house.gov/media/press-releases/pallone-introduces-lower-premiums-faster-payments-act" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">press release</a> and a legal summary from <a href="https://www.hklaw.com/en/insights/publications/2026/10/rep-pallone-proposes-replacement-of-no-surprises-act-arbitration" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Holland &amp; Knight</a>, out-of-network payment for surprise-billing claims would instead be set at the health plan's median contracted in-network rate for comparable services, specialty, and geography — benchmarked to rates as of January 31, 2019, adjusted annually by CPI-U through 2027 and beyond, and excluding "ghost rates" plans never actually paid. Insurers would be required to pay within 30 days of a claim being filed.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Pallone's stated rationale, per his press release and as reported by <a href="https://rollcall.com/2026/10/08/pallone-bill-would-drop-surprise-billing-laws-arbitration-process/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Roll Call</a>: "The arbitration process is clearly not working. A few bad actors — largely backed by private equity — are gaming the system, creating backlogs, delaying payments, and driving up premiums." He cites 10 provider groups filing roughly <strong>67%</strong> of the <strong>2.5 million</strong> disputes submitted in 2025; the 15 certified IDR entities collecting <strong>$1.3 billion</strong> in fees that year, up from <strong>$885 million</strong> combined across 2022–2024; and providers winning close to <strong>$15 billion</strong> in awards in 2025 alone. Roll Call also reports providers generally win arbitration, with payouts averaging more than six times local in-network rates.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why radiology groups are pushing back harder on this bill
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The American College of Radiology, American Society of Anesthesiologists, and American College of Emergency Physicians issued a <a href="https://www.newswise.com/articles/physician-organizations-oppose-legislation-that-gives-health-insurers-unilateral-control-over-out-of-network-payments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">joint statement</a> the same day the bill was introduced. ACR CEO Dr. Dana Smetherman argued the data cuts the other way from Pallone's framing: "Insurers cannot undermine the dispute resolution process and then point to the resulting problems as justification for eliminating it. Independent arbiters routinely reject insurers' unreasonably low payment offers. Eliminating arbitration would remove an important check on insurer conduct and threaten the ability of community-based and hospital-based physician practices to negotiate reasonable payment arrangements."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The three groups pointed to their own read of 2025 IDR data: insurers failed to participate or lost by default on <strong>24.5%</strong> of disputed line items, submitted offers of <strong>$1 or less</strong> on <strong>8.2%</strong> of line items, and put forward offers at or below the QPA on nearly <strong>40%</strong> of line items (excluding defaults). ASA president Dr. Patrick Giam added that "giving health insurance companies even greater control over physician payments is not the solution to concerns about the IDR process — particularly when health insurers' own practices are contributing to the problems Congress should be addressing." ACEP president Dr. Ryan Stanton warned smaller and independent practices are "often shut out of the IDR process altogether" and said rewarding insurers with a fixed, insurer-anchored benchmark "is a misguided approach that will only exacerbate" pressure on independent practices.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The dispute is really about who sets the floor. Arbitration — however costly and backlogged — puts a third party between an insurer's opening offer and the final payment. A fixed benchmark tied to each insurer's own median contracted rate removes that third party and lets the payer's own book of business define what "fair" looks like.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two levers, two timelines
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-[#0D0D0D]/10">
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">Mechanism</th>
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">What it changes</th>
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">Status (Oct 2026)</th>
                      <th className="text-left py-3 font-medium text-[#0D0D0D]">Effect on arbitration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#0D0D0D]/10">
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Fifth Circuit QPA ruling</td>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">How insurers calculate the qualifying payment amount fed into arbitration</td>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Decided in courts; QPA formula vacated in part</td>
                      <td className="py-3 text-[#444] font-light align-top">Arbitration process stays intact</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Lower Premiums, Faster Payments Act</td>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Replaces arbitration with a fixed, insurer-rate-based benchmark</td>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Introduced Oct 8, 2026; would take effect Jan 1, 2028 if enacted</td>
                      <td className="py-3 text-[#444] font-light align-top">Arbitration eliminated for future claims</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Either outcome — a friendlier QPA formula inside arbitration, or no arbitration at all — changes the ceiling on what an out-of-network radiology claim can recover. Only one of those outcomes removes the mechanism practices have used to contest a lowball offer in the first place.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What practices can actually control
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology groups don't get a vote on whether Congress keeps arbitration, narrows it, or replaces it with a benchmark. What's left in a practice's control, under any of those outcomes, is throughput and documentation quality — how many studies a group's radiologists can read, report, and defend per day without expanding headcount, and how clean and complete the resulting report is when it becomes the basis for a payment claim.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's where AI CT reporting fits. A structured, comprehensive draft generated from the study, reviewed in-house, and delivered <Link to="/how-ai-ct-reporting-works/" className="text-xaid-blue-strong underline underline-offset-2">ready-to-sign</Link> to the client's reading radiologist doesn't change what Congress decides about the No Surprises Act — but it changes how much volume a practice can read and bill with confidence while the policy fight plays out, which is the one variable reimbursement reform leaves entirely up to the practice.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the Lower Premiums, Faster Payments Act?',
                    a: "The Lower Premiums, Faster Payments Act is a bill introduced October 8, 2026 by Rep. Frank Pallone Jr. (D-N.J.), one of the original authors of the No Surprises Act. It would eliminate the law's independent dispute resolution (IDR) arbitration process for services furnished on or after January 1, 2028, and replace it with a fixed payment benchmark tied to insurers' median in-network contracted rates, adjusted for geography and inflation, with payment due within 30 days.",
                  },
                  {
                    q: 'Does the bill just change the arbitration formula, or eliminate arbitration itself?',
                    a: "It eliminates arbitration itself. That is the key difference from the Fifth Circuit's 2026 ruling that struck down parts of the qualifying payment amount (QPA) formula insurers use inside arbitration — that ruling changed how a number is calculated but kept the independent-arbiter process intact. Pallone's bill removes the independent arbiter altogether and sets payment by a formula insurers' own contracted rates feed into.",
                  },
                  {
                    q: 'Why are radiology, emergency medicine, and anesthesiology groups opposed?',
                    a: "The American College of Radiology, American College of Emergency Physicians, and American Society of Anesthesiologists issued a joint statement the same day the bill was introduced. ACR CEO Dr. Dana Smetherman argued that \"independent arbiters routinely reject insurers' unreasonably low payment offers\" and that eliminating arbitration \"would remove an important check on insurer conduct.\" The groups point to 2025 IDR data showing insurers lost by default or forfeited on roughly a quarter of disputed line items and submitted offers of $1 or less 8.2% of the time — evidence, they argue, that the dispute process is disciplining insurer behavior, not just enriching providers.",
                  },
                  {
                    q: 'What does Rep. Pallone say is driving the bill?',
                    a: 'Pallone says arbitration has become a gold mine for a small number of provider groups and private-equity-backed firms, citing that 10 provider groups accounted for about 67% of the roughly 2.5 million disputes filed in 2025, that the 15 certified IDR entities collected $1.3 billion in fees that year (versus $885 million combined for 2022–2024), and that providers won close to $15 billion in awards in 2025 alone — costs he argues flow through to premiums.',
                  },
                  {
                    q: 'What can radiology groups control while this plays out in Congress?',
                    a: 'Whichever mechanism survives — arbitration, a revised QPA formula, or a fixed benchmark — payment still depends on documented, defensible, timely reports. Practices cannot control how Congress resolves the No Surprises Act, but they can control reporting throughput and consistency, which determines how much volume a practice can bill and defend regardless of the payment formula in place. That is the lever AI-assisted CT reporting with radiologist review targets directly.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-criticize-congressmans-proposed-no-surprises-act-shakeup" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; bill details and figures from Rep. Pallone's <a href="https://democrats-energycommerce.house.gov/media/press-releases/pallone-introduces-lower-premiums-faster-payments-act" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">press release</a>, <a href="https://www.hklaw.com/en/insights/publications/2026/10/rep-pallone-proposes-replacement-of-no-surprises-act-arbitration" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Holland &amp; Knight</a>, and <a href="https://rollcall.com/2026/10/08/pallone-bill-would-drop-surprise-billing-laws-arbitration-process/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Roll Call</a>; physician-group response and 2025 IDR statistics from the <a href="https://www.newswise.com/articles/physician-organizations-oppose-legislation-that-gives-health-insurers-unilateral-control-over-out-of-network-payments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR/ASA/ACEP joint statement</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Reimbursement rules keep moving. Throughput is what you control."
          sub="AI-assisted CT reporting, radiologist-reviewed and delivered ready-to-sign, helps practices read more volume with confidence — whatever Congress decides about the No Surprises Act. Try it on 5 free studies."
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
              <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">2027 Medicare Physician Fee Schedule: What It Means for Radiology</div>
              </Link>
              <Link to="/blog/radiology-staffing-payer-contract-leverage/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Staffing and Payer Contract Leverage</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NoSurprisesActArbitration;
