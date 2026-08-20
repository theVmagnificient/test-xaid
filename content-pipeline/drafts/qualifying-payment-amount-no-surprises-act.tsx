import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const QualifyingPaymentAmountNoSurprisesAct = () => {
  const post = {
    title: "QPA Formula Struck Down: What It Means for Radiology",
    dateIso: '2026-08-17',
    date: 'August 17, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: "An appeals court vacated the QPA formula insurers use under the No Surprises Act. What changes for radiology out-of-network reimbursement leverage.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>QPA Formula Struck Down: What It Means for Radiology | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/qualifying-payment-amount-no-surprises-act/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="QPA Formula Struck Down: What It Means for Radiology | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/qualifying-payment-amount-no-surprises-act/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QPA Formula Struck Down: What It Means for Radiology | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/qualifying-payment-amount-no-surprises-act" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/qualifying-payment-amount-no-surprises-act",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "qualifying payment amount no surprises act, QPA formula, No Surprises Act radiology, out-of-network reimbursement radiology, independent dispute resolution radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the qualifying payment amount (QPA) under the No Surprises Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The QPA is generally the median contracted in-network rate a health plan pays for a given service in a given geographic area. Under the No Surprises Act, it is the number insurers must use as the floor for their initial out-of-network payment and the benchmark that federal arbitrators weigh most heavily when resolving billing disputes through independent dispute resolution (IDR)."
              }
            },
            {
              "@type": "Question",
              "name": "What did the Fifth Circuit rule on the QPA formula, and when?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On August 11, 2026, the full Fifth Circuit Court of Appeals, sitting en banc in Texas Medical Association v. HHS (No. 23-40605), ruled that federal agencies' methodology for calculating the QPA was partly unlawful. The court held that insurers must exclude non-negotiated 'ghost rates' from the calculation and must include bonus, incentive, and risk-sharing payments. It upheld one part of the government's approach: excluding one-off single-case agreements, common in air-ambulance billing, from the formula."
              }
            },
            {
              "@type": "Question",
              "name": "What are 'ghost rates' and why do they matter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ghost rates are contracted rates for services a provider never actually furnishes and therefore never negotiates — sometimes as low as $0 or $1. Because they are not real market prices, including them in the median calculation artificially depresses the QPA. The court found that only the government's rate for services actually 'provided by a provider' satisfies the statute, so ghost rates must be excluded entirely."
              }
            },
            {
              "@type": "Question",
              "name": "Does the ruling immediately raise what radiology groups get paid for out-of-network claims?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not immediately. The court affirmed vacating the challenged provisions, but federal agencies can use enforcement discretion to keep existing QPAs in place while they write a new, compliant rule, and no fixed deadline has been set. An appeal is also possible. The legal trend favors providers, but the timeline for a recalculated, higher QPA to actually change contracted and arbitrated rates is unsettled."
              }
            },
            {
              "@type": "Question",
              "name": "What can radiology groups do about reimbursement uncertainty right now?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because the revenue side of the ledger is contested and moving slowly through rulemaking and litigation, groups can protect margin in the meantime by controlling the cost side: reporting turnaround and cost per study. AI-assisted CT reporting, with a radiologist reviewing every report, is one such lever — it does not resolve a payer dispute, but it lowers the cost of producing each read while the QPA fight plays out."
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
              The QPA formula just lost in court.<br />
              <span className="text-white/60">Here's what changes for radiology's leverage</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A full federal appeals court has thrown out key parts of how insurers calculate the "qualifying payment amount" under the No Surprises Act. The ruling favors providers — but the payout for radiology groups isn't automatic, and it isn't fast.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '2 of 3', label: 'Provider claims won', sub: 'ghost rates + bonus pay' },
            { stat: '84x', label: 'IDR volume vs. forecast', sub: "cited in the court's opinion" },
            { stat: '85%', label: 'Awards landed above QPA', sub: 'per the ruling' },
            { stat: '600%', label: 'Radiology IDR offers vs. QPA', sub: 'median, H1 2024' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the court actually did
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 11, 2026, the full U.S. Court of Appeals for the Fifth Circuit, sitting en banc, ruled in <a href="https://litigationtracker.law.georgetown.edu/wp-content/uploads/2023/10/Texas-Medical-Association-v.-HHS_2026.08.11_OPINION.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Texas Medical Association v. HHS</em></a> (No. 23-40605) that federal agencies' methodology for calculating the "qualifying payment amount," or QPA, under the No Surprises Act is partly unlawful. The court sided with the Texas Medical Association and other provider plaintiffs on two of the three formula challenges they raised, as <a href="https://www.statnews.com/2026/08/12/texas-medical-association-no-surprises-act-lawsuit-qpa/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">STAT News reported</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It's the latest round in a fight that has run since the No Surprises Act's 2022 implementation, and it lands squarely on the number that decides how out-of-network billing disputes get resolved — including the disputes radiology groups file every time a scan is read out-of-network and a payer disagrees on price.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the QPA is, and why it's the fulcrum
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The QPA is meant to represent the median rate a health plan pays in-network for a given service in a given market. Under the No Surprises Act, it does two jobs: it sets the floor for the initial payment an insurer must send on an out-of-network claim, and it's the benchmark independent arbitrators weigh most heavily when a provider disputes that payment through the federal <a href="https://www.cms.gov/nosurprises/policies-and-resources/reports" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">independent dispute resolution (IDR) process</a>. A lower QPA means a lower starting offer on every claim — disputed or not.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Providers have argued since the rule's earliest days that the government's calculation method quietly thumbed the scale toward insurers. This ruling agrees, on two specific points.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two wins for providers, one loss
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                First, the court struck down insurers' use of "<strong>ghost rates</strong>" — contracted rates for services a provider doesn't actually furnish, and therefore never negotiates. Because nobody bargains over a price for a service they don't perform, these rates can sit near $0 or $1, and folding them into the median in-network rate quietly pulls the whole QPA down, as <a href="https://www.healthcaredive.com/news/5th-circuit-vacates-nsa-qpa-ghost-rate-tma-ruling/827771/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Healthcare Dive detailed</a>. The court held that only rates for services actually "provided by a provider" satisfy the statute, so ghost rates must be excluded entirely, not just the $0 ones the agencies' earlier guidance had carved out.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Second, the court ruled that bonus, incentive, and risk-sharing payments — a real part of many provider contracts — must be counted toward the QPA. Excluding them, the majority found, contradicted the statute's "total maximum payment" language.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Providers didn't win everything. The court upheld the agencies' decision to exclude one-off single-case agreements — arrangements common in air-ambulance billing — from the calculation, agreeing those aren't the kind of standing "contracted rates" the formula is supposed to reflect.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">QPA component</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Before this ruling</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">After this ruling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Ghost rates (unnegotiated, often $0–$1)', 'Included, except explicit $0 rates', 'Excluded entirely'],
                      ['Bonus / incentive / risk-sharing pay', 'Excluded from the median', 'Must be included'],
                      ['Single-case agreements (e.g., air ambulance)', 'Excluded', 'Still excluded (upheld)'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`text-[#444] text-[14px] leading-[1.6] font-light py-3 ${i < 2 ? 'pr-4' : ''}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why radiology has more at stake than most specialties
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology isn't a bystander in this fight. It's the second-most-disputed specialty in the federal IDR process, behind only emergency medicine — accounting for roughly 19% of payment determinations in the first half of 2025 and 15% in the second half, against emergency medicine's 45% and 52%, according to <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-continue-dominate-no-surprises-act-payment-disputes" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CMS data reported by Radiology Business</a>. Hospital-based specialties like radiology are disproportionately exposed to out-of-network billing in the first place, because a patient can choose an in-network hospital and still be read by an out-of-network radiology group without ever knowing it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology also does unusually well once a dispute reaches arbitration. In the first half of 2024, radiology's median prevailing provider offer landed at roughly 600% of the QPA — up from about 559% the year before — according to <a href="https://chir.georgetown.edu/independent-dispute-resolution-process-2024-data-high-volume-more-provider-wins/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Georgetown University's Center on Health Insurance Reforms</a>, which also found providers across specialties winning 83–88% of resolved disputes that year. The Fifth Circuit's own opinion cites similarly striking figures: IDR volume has run 84 times higher than agencies originally forecast, providers have prevailed in more than 80% of arbitrations, and arbitrators have picked a rate above the QPA in 85% of cases.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A higher, more accurately calculated QPA cuts both ways for a specialty that already wins big relative to that benchmark: it raises the floor insurers must pay on every out-of-network claim — including the vast majority that never go to arbitration — but it also raises the number a radiology group has to beat to win a dispute. Either way, the number both sides are negotiating against is about to move, and it's moving in a direction provider advocacy groups have long pushed for.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What's still unsettled
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This is a legal win, not a rate increase that shows up in next month's remittance. The court affirmed vacating the challenged parts of the QPA methodology, but it also rejected the idea that "practical difficulties" justified keeping an unlawful formula in place — while still leaving room for agencies to use enforcement discretion so the transition doesn't cause immediate disruption. The Departments of Health and Human Services, Labor, and Treasury now have to write a new, statute-compliant methodology, and no fixed deadline has been set for when that happens or when it takes effect for any individual group's contracts and disputes. A further appeal also remains possible.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For a radiology group weighing near-term budget decisions, that means the reimbursement side of the ledger just moved in a favorable direction on paper, but on a timeline nobody has committed to yet.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The lever practices can pull today: cost, not just leverage
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                With the revenue side of out-of-network reimbursement still moving through rulemaking and possible further litigation, the cost side of the margin equation is the one a practice can control right now. Reporting turnaround and cost per study don't have to wait on a federal rule change. This is where AI-assisted CT reporting fits: it produces a structured draft report for every study, xAID's in-house radiologist reviews each preliminary, and the report reaches the client's reading radiologist ready-to-sign — cutting the cost and turnaround of producing a report without touching who has final authority over it. It doesn't settle a payer dispute, but it protects margin while the QPA fight plays out in Washington and the courts.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the qualifying payment amount (QPA) under the No Surprises Act?',
                    a: 'The QPA is generally the median contracted in-network rate a health plan pays for a given service in a given geographic area. Under the No Surprises Act, it is the number insurers must use as the floor for their initial out-of-network payment and the benchmark that federal arbitrators weigh most heavily when resolving billing disputes through independent dispute resolution (IDR).',
                  },
                  {
                    q: 'What did the Fifth Circuit rule on the QPA formula, and when?',
                    a: "On August 11, 2026, the full Fifth Circuit Court of Appeals, sitting en banc in Texas Medical Association v. HHS (No. 23-40605), ruled that federal agencies' methodology for calculating the QPA was partly unlawful. The court held that insurers must exclude non-negotiated 'ghost rates' from the calculation and must include bonus, incentive, and risk-sharing payments. It upheld one part of the government's approach: excluding one-off single-case agreements, common in air-ambulance billing, from the formula.",
                  },
                  {
                    q: "What are 'ghost rates' and why do they matter?",
                    a: 'Ghost rates are contracted rates for services a provider never actually furnishes and therefore never negotiates — sometimes as low as $0 or $1. Because they are not real market prices, including them in the median calculation artificially depresses the QPA. The court found that only the government\'s rate for services actually "provided by a provider" satisfies the statute, so ghost rates must be excluded entirely.',
                  },
                  {
                    q: 'Does the ruling immediately raise what radiology groups get paid for out-of-network claims?',
                    a: 'Not immediately. The court affirmed vacating the challenged provisions, but federal agencies can use enforcement discretion to keep existing QPAs in place while they write a new, compliant rule, and no fixed deadline has been set. An appeal is also possible. The legal trend favors providers, but the timeline for a recalculated, higher QPA to actually change contracted and arbitrated rates is unsettled.',
                  },
                  {
                    q: 'What can radiology groups do about reimbursement uncertainty right now?',
                    a: 'Because the revenue side of the ledger is contested and moving slowly through rulemaking and litigation, groups can protect margin in the meantime by controlling the cost side: reporting turnaround and cost per study. AI-assisted CT reporting, with a radiologist reviewing every report, is one such lever — it does not resolve a payer dispute, but it lowers the cost of producing each read while the QPA fight plays out.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/appeals-court-strikes-down-formula-used-calculate-qualifying-payment-amount-under-no-surprises-act" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.statnews.com/2026/08/12/texas-medical-association-no-surprises-act-lawsuit-qpa/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">STAT News</a>, and <a href="https://www.healthcaredive.com/news/5th-circuit-vacates-nsa-qpa-ghost-rate-tma-ruling/827771/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Healthcare Dive</a> on the Fifth Circuit's August 11, 2026 en banc opinion in <em>Texas Medical Association v. HHS</em> (No. 23-40605); IDR dispute-volume and win-rate figures per the <a href="https://litigationtracker.law.georgetown.edu/wp-content/uploads/2023/10/Texas-Medical-Association-v.-HHS_2026.08.11_OPINION.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">court's opinion</a> and <a href="https://chir.georgetown.edu/independent-dispute-resolution-process-2024-data-high-volume-more-provider-wins/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Georgetown University's Center on Health Insurance Reforms</a>; radiology's share of IDR disputes per <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-continue-dominate-no-surprises-act-payment-disputes" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS data reported by Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Control the cost side while the reimbursement fight plays out"
          sub="AI-assisted CT reporting, reviewed by xAID's in-house radiologist and delivered ready-to-sign, lowers cost per study without touching who's accountable for the read. Try it on 5 free studies."
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
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained</div>
              </Link>
              <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">2027 Medicare Physician Fee Schedule: What It Means for Radiology</div>
              </Link>
              <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Prior Authorization Reform: What It Means for Imaging Throughput</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default QualifyingPaymentAmountNoSurprisesAct;
