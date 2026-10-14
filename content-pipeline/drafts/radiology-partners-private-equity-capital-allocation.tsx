import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyPartnersCapitalAllocation = () => {
  const post = {
    title: "Radiology Partners' Bondholders Just Funded an Overseas Deal. Here's What They Didn't Fund.",
    dateIso: '2026-10-14',
    date: 'October 14, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "99.21% of Radiology Partners' noteholders just approved a covenant change clearing its reported $715M-plus Everlight buyout. The real story isn't the deal — it's where America's largest imaging roll-up is choosing to spend its debt capacity while per-study reimbursement stagnates.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Partners Private Equity: Capital Allocation | xAID</title>
        <meta name="description" content="Radiology Partners, the private equity-backed radiology group, won bondholder consent for its Everlight deal. What the capital allocation choice reveals." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-partners-private-equity-capital-allocation/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Partners Private Equity: Capital Allocation | xAID" />
        <meta property="og:description" content="Radiology Partners, the private equity-backed radiology group, won bondholder consent for its Everlight deal. What the capital allocation choice reveals." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Partners Private Equity: Capital Allocation | xAID" />
        <meta name="twitter:description" content="Radiology Partners, the private equity-backed radiology group, won bondholder consent for its Everlight deal. What the capital allocation choice reveals." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-partners-private-equity-capital-allocation/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-partners-private-equity-capital-allocation/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology partners private equity, radiology M&A, radiology capital allocation, teleradiology acquisition, radiology reimbursement"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Radiology Partners' bondholders just approve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On October 12, 2026, Radiology Partners announced that holders of 99.21% of the aggregate principal of its Second Lien Senior Secured PIK Notes due 2030 had consented to proposed amendments — well above the threshold required. Consenting holders are eligible for a cash 'consent fee' equal to 2% of their principal, payable once the Everlight acquisition closes. The amendments change covenant terms on existing debt, clearing a contractual obstacle to the Everlight deal rather than raising new money themselves."
              }
            },
            {
              "@type": "Question",
              "name": "How is Radiology Partners paying for the Everlight acquisition?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology Partners is raising a new $485 million incremental term loan due 2032, combined with roughly $180 million of balance-sheet cash and rollover equity, to fund the purchase of London-based Everlight Radiology. S&P estimates the deal will keep Radiology Partners' pro forma leverage around 9.5x to 10x debt-to-EBITDA through 2026, easing only to roughly 9x by the end of 2027, and has said the added interest expense is likely to offset most of the earnings Everlight brings in, leaving free cash flow broadly unchanged."
              }
            },
            {
              "@type": "Question",
              "name": "Why does the deal's price range differ between $715 million and $1 billion?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neither company has disclosed official terms. Trade press reporting, citing the Australian Financial Review and other unnamed sources, has put the value at approximately $715 million in some accounts and roughly $1 billion in others. The spread itself reflects how little of this leverage-funded expansion is being disclosed publicly, even as bondholders are asked to approve the covenant changes that enable it."
              }
            },
            {
              "@type": "Question",
              "name": "What does this deal reveal about capital allocation in radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It shows a highly leveraged US imaging group prioritizing geographic scale through acquisition over domestic reporting capacity, even as CMS's 2026 Medicare Physician Fee Schedule applies a negative efficiency adjustment to per-study diagnostic radiology payments and independent research describes rising imaging turnaround times and a national radiologist shortfall. The debt capacity bondholders just approved is being spent on cross-border M&A, not on expanding the US reading workforce or report throughput."
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
              Radiology Partners' bondholders just funded an overseas deal.<br />
              <span className="text-white/60">Here's what they didn't fund.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              99.21% of noteholders approved a covenant change clearing America's largest imaging roll-up to close a reported $715 million-plus purchase of a British teleradiology firm. The headline is the deal. The real story is the choice behind it — what an already highly leveraged consolidator spends its debt capacity on, and what it doesn't.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '99.21%', label: 'Noteholders approved the change', sub: 'Oct 12, 2026 consent vote' },
            { stat: '$485M', label: 'New term loan raised', sub: 'plus ~$180M cash, due 2032' },
            { stat: '9.5–10x', label: 'Pro forma leverage', sub: "S&P's 2026 estimate" },
            { stat: '−2%', label: 'Diagnostic radiology payment shift', sub: '2026 Medicare efficiency cut' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually happened on October 12
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology Partners — the Nashville, Tennessee-based group that is by most counts the largest radiology practice in the US, with more than 4,000 radiologists across all 50 states — announced that holders of <strong>99.21%</strong> of the aggregate principal of its Second Lien Senior Secured PIK Notes due 2030 had consented to proposed amendments, comfortably clearing the threshold the company needed. The company disclosed the result in a press release and in a <a href="https://www.businesswire.com/news/home/20261005550134/en/Radiology-Partners-Announces-Commencement-of-Consent-Solicitation-for-its-Second-Lien-Senior-Secured-PIK-Notes-due-2030" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">BusinessWire filing</a>, as first covered by <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/radiology-partners-clears-key-hurdle-plan-expand-overseas" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Consenting holders are eligible for a cash "consent fee" equal to <strong>2%</strong> of their principal — payment of which is conditioned on the Everlight acquisition actually closing. That detail matters: this wasn't a routine refinancing. It was bondholders being paid to waive or amend covenant terms specifically so Radiology Partners could complete a transaction those covenants would otherwise complicate.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The transaction those covenants were standing in the way of: a definitive agreement, first announced August 25, 2026, to acquire <a href="https://www.businesswire.com/news/home/20260825071887/en/Radiology-Partners-to-Acquire-Everlight-Radiology-Creating-a-Global-Leader-in-Teleradiology" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Everlight Radiology</a>, a London-based teleradiology provider founded in 2006 that employs more than 800 radiologists across 40 countries and reports serving hospitals and imaging centers in the UK, Ireland, Australia, New Zealand and South Africa — producing roughly 2.5 million reports a year for more than 340 client organizations. British private equity firm Livingbridge had paid a reported $344 million for a majority stake in Everlight in 2021.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Nobody will say what the deal actually costs
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Neither company has disclosed official terms. <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/rad-partners-expands-overseas-acquiring-1-worlds-largest-teleradiology-businesses-reported-715m" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, citing the Australian Financial Review's unnamed sources, put the price at approximately <strong>$715 million</strong>; <a href="https://www.auntminnie.com/industry-news/news/15833279/radiology-partners-to-acquire-everlight-radiology-in-1-billion-deal" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>, citing the same outlet, headlined it a <strong>"$1 billion deal."</strong> That spread — somewhere between $715 million and $1 billion for a company this size — is itself a data point about how opaque leverage-funded overseas expansion can be, even while the bondholders financing part of it are being asked to vote on covenant changes that enable it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What is disclosed is how it's being funded: a new <strong>$485 million</strong> incremental term loan due 2032, together with roughly <strong>$180 million</strong> in balance-sheet cash and rollover equity, per <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/radiology-partners-seeks-485m-term-loan-fuel-teleradiology-acquisition" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business'</a> reporting on the loan syndication. That loan layers onto a capital structure that already included, by S&P's accounting, a $1.875 billion first-lien term loan due 2032, $900 million of senior secured notes due 2032, $766 million of second-lien notes due 2030 (the notes just amended), and $11 million of unsecured notes — on the order of $3.5 billion in debt before this deal, headed toward roughly $4 billion after it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What bondholders are actually underwriting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                S&P's own estimate is blunt about the trade-off: pro forma leverage is expected to hold at roughly <strong>9.5x to 10x</strong> debt-to-EBITDA through 2026, easing only to around <strong>9x</strong> by the end of 2027, and the added interest expense from the new term loan is likely to offset most of the incremental earnings Everlight brings in — leaving free cash flow "broadly unchanged," according to the agency's analysis <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/radiology-partners-seeks-485m-term-loan-fuel-teleradiology-acquisition" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>. This is not a company deleveraging through an acquisition that pays for itself quickly; it's a company extending an already-strained balance sheet to buy geographic scale.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Radiology Partners has been here before. S&P downgraded the company's rating to CCC+ in 2023 amid concerns its capital structure could become unsustainable, and Moody's downgraded it to Caa3 the same year citing "very high leverage," before a 2024 recapitalization brought in $720 million of growth equity and extended debt maturities. Ownership today reflects a similar split: physician-partners hold roughly 30% of the company, with the remaining stake held by institutional investors including New Enterprise Associates and Whistler Capital Partners, per more recent reporting. The Everlight deal is being financed by the same leveraged structure that drew those downgrades three years ago — now redirected at international scale rather than domestic consolidation.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The number that frames the choice: what isn't getting this kind of capital
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Compare where this debt capacity is going against where US reimbursement and reporting capacity actually stand. CMS's final 2026 Medicare Physician Fee Schedule applied a negative 2.5% "efficiency adjustment" to most non-time-based services; preliminary estimates put the net impact for diagnostic radiology at roughly <strong>−2%</strong>, even after a higher conversion factor, according to the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/decoding-the-2026-medicare-physician-fee-schedule-final-rule" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology's</a> own breakdown. CMS has proposed a further conversion-factor cut of roughly <strong>1.68%</strong> for 2027. Per-study US reimbursement is not growing; by the government's own estimates, it is shrinking.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Capital event (2026)</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Amount</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">What it funds</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">New incremental term loan</td>
                      <td className="py-3 pr-4 text-[#444] font-light">$485M</td>
                      <td className="py-3 text-[#444] font-light">Everlight purchase, due 2032</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Balance-sheet cash + rollover equity</td>
                      <td className="py-3 pr-4 text-[#444] font-light">~$180M</td>
                      <td className="py-3 text-[#444] font-light">Everlight purchase (remainder)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Second-lien consent fee</td>
                      <td className="py-3 pr-4 text-[#444] font-light">2% of principal</td>
                      <td className="py-3 text-[#444] font-light">Clearing covenants for the deal</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">2026 diagnostic radiology payment shift</td>
                      <td className="py-3 pr-4 text-[#444] font-light">−2% (est.)</td>
                      <td className="py-3 text-[#444] font-light">Nothing — a net reduction</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Proposed 2027 conversion-factor change</td>
                      <td className="py-3 pr-4 text-[#444] font-light">−1.68%</td>
                      <td className="py-3 text-[#444] font-light">Further reimbursement pressure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Meanwhile, independent research points to a widening gap between demand for reads and the capacity to produce them. A national study published in the <em>Journal of the American College of Radiology</em> found outpatient imaging turnaround times more than doubled over the past decade, with CT reading delays climbing over 300% and MRI delays rising more than 250%. The federal Health Resources and Services Administration projects radiology will operate at only about 90% workforce adequacy relative to demand by 2038, and separate AAMC physician-workforce modeling puts the combined shortfall across radiology and several related specialties as high as 17,000 to 42,000 physicians by 2033.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this makes the Everlight deal irrational on its own terms — overseas scale and a 2.5-million-report-a-year reading network are real assets, and Everlight's existing reach gives Radiology Partners a cross-border footprint it couldn't easily build organically. But it does make clear what "priority" means in a nearly $4 billion capital structure: bondholders were asked to, and did, approve spending capacity on acquiring reporting volume abroad. Nothing in this transaction is earmarked for closing the domestic reporting-capacity gap or offsetting the reimbursement pressure squeezing the same radiologists already on staff.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The capacity gap this deal doesn't address — stagnant per-study reimbursement alongside rising turnaround times and a shrinking radiologist pipeline — is exactly where AI-assisted <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="text-xaid-blue-strong underline underline-offset-2">CT reporting</Link> is meant to add throughput without adding headcount or debt: a structured draft report in minutes, reviewed in-house, and delivered ready-to-sign to the client's own reading radiologist. That's a different lever than buying overseas reading networks with leveraged debt — it adds reporting capacity to the radiologists a group already has, rather than financing geographic scale on a balance sheet S&P already rates speculative-grade.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What did Radiology Partners' bondholders just approve?",
                    a: "On October 12, 2026, Radiology Partners announced that holders of 99.21% of the aggregate principal of its Second Lien Senior Secured PIK Notes due 2030 had consented to proposed amendments — well above the threshold required. Consenting holders are eligible for a cash 'consent fee' equal to 2% of their principal, payable once the Everlight acquisition closes. The amendments change covenant terms on existing debt, clearing a contractual obstacle to the Everlight deal rather than raising new money themselves.",
                  },
                  {
                    q: 'How is Radiology Partners paying for the Everlight acquisition?',
                    a: "Radiology Partners is raising a new $485 million incremental term loan due 2032, combined with roughly $180 million of balance-sheet cash and rollover equity, to fund the purchase of London-based Everlight Radiology. S&P estimates the deal will keep Radiology Partners' pro forma leverage around 9.5x to 10x debt-to-EBITDA through 2026, easing only to roughly 9x by the end of 2027, and has said the added interest expense is likely to offset most of the earnings Everlight brings in, leaving free cash flow broadly unchanged.",
                  },
                  {
                    q: "Why does the deal's price range differ between $715 million and $1 billion?",
                    a: 'Neither company has disclosed official terms. Trade press reporting, citing the Australian Financial Review and other unnamed sources, has put the value at approximately $715 million in some accounts and roughly $1 billion in others. The spread itself reflects how little of this leverage-funded expansion is being disclosed publicly, even as bondholders are asked to approve the covenant changes that enable it.',
                  },
                  {
                    q: 'What does this deal reveal about capital allocation in radiology?',
                    a: "It shows a highly leveraged US imaging group prioritizing geographic scale through acquisition over domestic reporting capacity, even as CMS's 2026 Medicare Physician Fee Schedule applies a negative efficiency adjustment to per-study diagnostic radiology payments and independent research describes rising imaging turnaround times and a national radiologist shortfall. The debt capacity bondholders just approved is being spent on cross-border M&A, not on expanding the US reading workforce or report throughput.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/radiology-partners-clears-key-hurdle-plan-expand-overseas" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (Oct. 2026, bondholder consent results); <a href="https://www.businesswire.com/news/home/20261005550134/en/Radiology-Partners-Announces-Commencement-of-Consent-Solicitation-for-its-Second-Lien-Senior-Secured-PIK-Notes-due-2030" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">BusinessWire</a> (consent solicitation notices); <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/rad-partners-expands-overseas-acquiring-1-worlds-largest-teleradiology-businesses-reported-715m" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.auntminnie.com/industry-news/news/15833279/radiology-partners-to-acquire-everlight-radiology-in-1-billion-deal" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> (Everlight deal value and terms); <a href="https://www.businesswire.com/news/home/20260825071887/en/Radiology-Partners-to-Acquire-Everlight-Radiology-Creating-a-Global-Leader-in-Teleradiology" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Partners / BusinessWire</a> (Everlight company details); <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/radiology-partners-seeks-485m-term-loan-fuel-teleradiology-acquisition" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (term loan and S&amp;P leverage estimate); <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/decoding-the-2026-medicare-physician-fee-schedule-final-rule" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a> (2026 MPFS impact) and CMS's proposed 2027 fee schedule; HRSA workforce-adequacy projections, AAMC physician-workforce shortfall modeling, and <em>Journal of the American College of Radiology</em> turnaround-time research as reported in trade coverage; S&amp;P Global Ratings' 2023 downgrade to CCC+, Moody's 2023 downgrade to Caa3, the 2024 growth-equity recapitalization, and current ownership-structure figures as reported in Radiology Business trade coverage. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Add reporting capacity without adding leverage"
          sub="xAID's AI drafts CT reports in minutes, reviewed in-house and delivered ready-to-sign. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Two Radiology Groups Just Built a Third Path Beyond a Sale</div>
              </Link>
              <Link to="/blog/radiologist-pay-stagnation-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">42% of Millennial Radiologists Say Pay Stagnated: What the Data Shows</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyPartnersCapitalAllocation;
