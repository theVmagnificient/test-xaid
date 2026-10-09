import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyPrivateEquityDebtFinancedGrowth = () => {
  const post = {
    title: 'Radiology Private Equity Buys Headcount. AI Reporting Buys Throughput.',
    dateIso: '2026-10-09',
    date: 'October 9, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "Radiology Partners is raising a $485M term loan to fund its Everlight Radiology acquisition, pushing leverage to roughly 8x. It's a clean example of how radiology private equity buys growth — and why buying throughput, not headcount, is the alternative for everyone else.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Private Equity: Debt-Funded Growth vs. AI | xAID</title>
        <meta name="description" content="Radiology Partners is borrowing $485M for its Everlight deal, pushing leverage to ~8x. What debt-financed growth means for radiology private equity." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-private-equity-debt-financed-growth/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Private Equity: Debt-Funded Growth vs. AI | xAID" />
        <meta property="og:description" content="Radiology Partners is borrowing $485M for its Everlight deal, pushing leverage to ~8x. What debt-financed growth means for radiology private equity." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Private Equity: Debt-Funded Growth vs. AI | xAID" />
        <meta name="twitter:description" content="Radiology Partners is borrowing $485M for its Everlight deal, pushing leverage to ~8x. What debt-financed growth means for radiology private equity." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-private-equity-debt-financed-growth/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-private-equity-debt-financed-growth/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology private equity, teleradiology acquisition, radiology M&A debt, radiology leverage, AI reporting throughput"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Radiology Partners borrowing money for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology Partners is pursuing a $485 million incremental term loan, alongside roughly $180 million of existing cash and a rollover equity contribution, to help fund its acquisition of Everlight Radiology, a London-based teleradiology provider. The company's revolving credit line is also expanding from $415 million to $520 million, which Moody's expects to remain undrawn at close."
              }
            },
            {
              "@type": "Question",
              "name": "How much is Radiology Partners paying for Everlight Radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology Partners and Everlight have not disclosed official deal terms since announcing the acquisition on August 25, 2026. Press estimates vary by outlet, from roughly $715 million (reported by the Australian Financial Review) to about $1 billion, citing people familiar with the transaction."
              }
            },
            {
              "@type": "Question",
              "name": "How does this deal change Radiology Partners' debt load?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Moody's calls the new term loan 'leverage neutral' to Radiology Partners' existing Caa1 corporate rating, but pegs pro forma adjusted debt-to-EBITDA at roughly 8x, excluding expected synergies. Moody's expects leverage to decline moderately but remain elevated over the next 12 to 18 months, with free cash flow turning slightly positive in 2026 — a sign of a still-stretched balance sheet rather than financing from a position of strength."
              }
            },
            {
              "@type": "Question",
              "name": "What's the alternative to debt-financed growth for radiology groups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Buying more radiologists and reading seats is one way to grow reporting capacity; increasing the throughput of the radiologists a group already has is another. AI-assisted CT reporting adds throughput as an operating expense rather than new debt that has to be serviced out of per-study reimbursement — relevant given the 2026 Medicare Physician Fee Schedule's roughly -2% net impact on diagnostic radiology. It's a lever available to groups that can't access a $485 million syndicated loan market."
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
              Radiology private equity just borrowed $485M to buy headcount.<br />
              <span className="text-white/60">There's a cheaper way to buy throughput.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Radiology Partners is financing its acquisition of Everlight Radiology with a new term loan plus balance-sheet cash — the classic PE roll-up move of buying more radiologists and more coverage hours. For groups that can't access that kind of debt, growing reporting capacity without growing headcount is the other lever.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$485M', label: 'Term loan sought', sub: 'for the Everlight deal' },
            { stat: '~$180M', label: 'Cash contributed', sub: 'plus rollover equity' },
            { stat: '~8x', label: 'Pro forma leverage', sub: 'adjusted debt/EBITDA, ex-synergies' },
            { stat: '-2%', label: '2026 Medicare impact', sub: 'diagnostic radiology, per ACR' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The deal, and how it's being paid for
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 25, 2026, Radiology Partners — the largest radiology practice in the U.S. — <a href="https://www.auntminnie.com/industry-news/news/15833279/radiology-partners-to-acquire-everlight-radiology-in-1-billion-deal" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announced a definitive agreement</a> to acquire Everlight Radiology, a London-based teleradiology provider founded in 2006 with a network of more than 800 radiologists across over 40 countries, reading more than 2.5 million exams a year for 340-plus client organizations in the U.K., Ireland, Australia, New Zealand and South Africa. Combined with Radiology Partners' existing vRad teleradiology unit, the deal is pitched as building a global remote-reading platform.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Neither company has disclosed official terms. Press estimates have diverged: <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/rad-partners-expands-overseas-acquiring-1-worlds-largest-teleradiology-businesses-reported-715m" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">the Australian Financial Review put the price around $715 million</a>, while other outlets have cited sources <a href="https://www.auntminnie.com/industry-news/news/15833279/radiology-partners-to-acquire-everlight-radiology-in-1-billion-deal" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">valuing it closer to $1 billion</a>. What's now confirmed is the financing: <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/radiology-partners-seeks-485m-term-loan-fuel-teleradiology-acquisition" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">a $485 million incremental term loan</a>, reported by Radiology Business on October 6, 2026, alongside roughly $180 million of existing balance-sheet cash and a rollover equity contribution. The company's revolving credit line is also growing, from $415 million to $520 million — a facility Moody's expects to stay undrawn at close.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Strip away the acquisition language and the mechanism is simple: Radiology Partners is borrowing money to buy more radiologists and more coverage hours. That's one legitimate way to grow a radiology business. It is not, however, available to most of the market.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A familiar leverage story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This loan lands on a balance sheet that has already been stress-tested. Moody's <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/moodys-downgrades-radiology-partners-citing-very-high-leverage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">downgraded Radiology Partners from Caa1 to Caa3 in November 2023</a>, citing "weak liquidity" and "very high leverage," with debt estimated at roughly 10 times EBITDA at the time. In February 2024, as the company raised $720 million in new growth equity and restructured maturities, <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/sp-views-radiology-partners-debt-refinancing-maneuvers-tantamount-default" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">S&amp;P Global Ratings characterized the maneuvers as "tantamount to a default,"</a> even while acknowledging the transaction reduced leverage and improved liquidity.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The recovery that followed was real: Moody's <a href="https://cbonds.com/news/3253093/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">affirmed the Caa1 rating with a positive outlook in early 2025</a>, and in June 2025 the company closed <a href="https://www.cahill.com/news/firm-news/2025-06-30-cahill-represents-debt-financing-sources-in-radiology-partners-inc-2715-billion-of-debt-financings-consisting-of-a-900-million-secured-notes-offering-and-a-1815-billion-credit-facilities" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">$2.715 billion of debt financings</a> — a $900 million secured notes offering and $1.815 billion of credit facilities — largely to push maturities out to 2032.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Against that backdrop, Moody's treats the new $485 million term loan as "leverage neutral": the rating and outlook are unaffected, and pro forma adjusted debt-to-EBITDA lands around <strong>8x</strong>, excluding any synergies Radiology Partners expects to realize. The agency's own language is the tell: it expects "financial leverage to decline moderately but remain elevated over the next 12 to 18 months, and free cash flow to be slightly positive in 2026." That's growth financed from a still-stretched balance sheet, not from strength — a bet that acquired scale pays the loan down faster than interest accrues.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The reimbursement math that has to service the debt
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Debt doesn't get serviced out of enterprise value — it gets serviced out of cash flow, and for a radiology group that means per-study reimbursement. CMS's <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/medicare-releases-2026-physician-fee-schedule-finalizing-cuts-opposed-radiologists" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">finalized 2026 Medicare Physician Fee Schedule</a> raises the conversion factor 3.26%, to $33.40 for most participants, but a new -2.5% "efficiency adjustment" applied to nearly all non-time-based services — including most diagnostic imaging — nets out, by the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/decoding-the-2026-medicare-physician-fee-schedule-final-rule" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology's own estimate</a>, to roughly <strong>-2%</strong> for diagnostic radiology. ACR Commission on Economics chair Dr. Gregory Nicola <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/medicare-releases-2026-physician-fee-schedule-finalizing-cuts-opposed-radiologists" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">called the adjustment</a> "not based in modern care reality and … not helpful."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the structural tension underneath any debt-financed roll-up: interest expense compounds on a fixed schedule; per-study reimbursement does not reliably compound at all, and in 2026 it moved slightly backward for diagnostic radiology. A group borrowing $485 million to add reading capacity is betting that acquired volume and integration synergies outrun a reimbursement environment that just netted negative for the specialty.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two ways to grow reporting capacity
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Buying more radiologists and making the radiologists you already have more productive are both legitimate ways to add reporting capacity — but they carry very different risk profiles, and only one of them is available to a group that can't raise a $485 million syndicated loan:
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">&nbsp;</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Debt-financed headcount</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">AI-financed throughput</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">What it buys</td>
                      <td className="py-3 pr-4">More radiologists and coverage hours, via acquisition</td>
                      <td className="py-3">More reads per existing radiologist</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Funding source</td>
                      <td className="py-3 pr-4">Term loans, secured notes, syndicated credit</td>
                      <td className="py-3">Operating budget, per-study software cost</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Balance-sheet impact</td>
                      <td className="py-3 pr-4">New leverage, serviced regardless of case volume</td>
                      <td className="py-3">No incremental debt or headcount</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Who can do it</td>
                      <td className="py-3 pr-4">Scaled, PE-backed groups with loan-market access</td>
                      <td className="py-3">Any group, independent or otherwise</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">If reimbursement stays flat or falls</td>
                      <td className="py-3 pr-4">Debt-service pressure builds, leverage stays elevated</td>
                      <td className="py-3">Cost per report falls, margin improves</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">Time to added capacity</td>
                      <td className="py-3 pr-4">Months — diligence, regulatory approval, integration</td>
                      <td className="py-3">Weeks — pilot and onboarding</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Not every teleradiology company or independent imaging group can raise a $485 million term loan to buy its way to more reading capacity, and taking on that kind of leverage isn't the right fit even for groups that could. AI-assisted CT reporting is the throughput lever available to everyone else: the AI drafts a structured, comprehensive report, xAID's in-house radiologist reviews every preliminary, and the group's own reading radiologist gets a report that's ready-to-sign. Capacity grows as an operating cost, not as a new line on the balance sheet that has to be serviced out of reimbursement rates that just moved the wrong way.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is Radiology Partners borrowing money for?',
                    a: "Radiology Partners is pursuing a $485 million incremental term loan, alongside roughly $180 million of existing cash and a rollover equity contribution, to help fund its acquisition of Everlight Radiology, a London-based teleradiology provider. The company's revolving credit line is also expanding from $415 million to $520 million, which Moody's expects to remain undrawn at close.",
                  },
                  {
                    q: 'How much is Radiology Partners paying for Everlight Radiology?',
                    a: 'Radiology Partners and Everlight have not disclosed official deal terms since announcing the acquisition on August 25, 2026. Press estimates vary by outlet, from roughly $715 million (reported by the Australian Financial Review) to about $1 billion, citing people familiar with the transaction.',
                  },
                  {
                    q: "How does this deal change Radiology Partners' debt load?",
                    a: "Moody's calls the new term loan 'leverage neutral' to Radiology Partners' existing Caa1 corporate rating, but pegs pro forma adjusted debt-to-EBITDA at roughly 8x, excluding expected synergies. Moody's expects leverage to decline moderately but remain elevated over the next 12 to 18 months, with free cash flow turning slightly positive in 2026 — a sign of a still-stretched balance sheet rather than financing from a position of strength.",
                  },
                  {
                    q: "What's the alternative to debt-financed growth for radiology groups?",
                    a: "Buying more radiologists and reading seats is one way to grow reporting capacity; increasing the throughput of the radiologists a group already has is another. AI-assisted CT reporting adds throughput as an operating expense rather than new debt that has to be serviced out of per-study reimbursement — relevant given the 2026 Medicare Physician Fee Schedule's roughly -2% net impact on diagnostic radiology. It's a lever available to groups that can't access a $485 million syndicated loan market.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/radiology-partners-seeks-485m-term-loan-fuel-teleradiology-acquisition" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> on the $485M term loan and Moody's leverage analysis; <a href="https://www.auntminnie.com/industry-news/news/15833279/radiology-partners-to-acquire-everlight-radiology-in-1-billion-deal" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> and <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/rad-partners-expands-overseas-acquiring-1-worlds-largest-teleradiology-businesses-reported-715m" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> on the Everlight acquisition and deal-value estimates; <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/moodys-downgrades-radiology-partners-citing-very-high-leverage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> on the 2023 Moody's downgrade; <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/sp-views-radiology-partners-debt-refinancing-maneuvers-tantamount-default" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> on the 2024 S&amp;P "tantamount to default" assessment; <a href="https://www.cahill.com/news/firm-news/2025-06-30-cahill-represents-debt-financing-sources-in-radiology-partners-inc-2715-billion-of-debt-financings-consisting-of-a-900-million-secured-notes-offering-and-a-1815-billion-credit-facilities" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Cahill</a> on the 2025 debt refinancing; and the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/decoding-the-2026-medicare-physician-fee-schedule-final-rule" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a> and <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/medicare-releases-2026-physician-fee-schedule-finalizing-cuts-opposed-radiologists" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> on the 2026 Medicare Physician Fee Schedule impact. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Add capacity without adding leverage"
          sub="AI-drafted, radiologist-reviewed CT reports let your group grow reporting throughput as an operating cost — not a term loan. Try it on 5 free studies."
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
              <Link to="/blog/radiology-private-equity-stay-independent/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology and Private Equity: How Independent Groups Can Stay Independent</div>
              </Link>
              <Link to="/blog/radiology-groups-share-infrastructure-stay-independent/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Radiology Groups Share Infrastructure to Stay Independent</div>
              </Link>
              <Link to="/blog/enterprise-imaging-modernization-capital-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Enterprise Imaging Modernization Capital Gap</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyPrivateEquityDebtFinancedGrowth;
