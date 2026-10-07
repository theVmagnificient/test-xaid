import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyAiVendorFinancialDueDiligence = () => {
  const post = {
    title: 'A Radiology Vendor Just Got a Nasdaq Delisting Warning. Here’s the Financial Due-Diligence Checklist to Run First.',
    dateIso: '2026-10-07',
    date: 'October 7, 2026',
    category: 'Buyer Guide',
    readingTime: 8,
    description: 'Nano-X Imaging faces a Nasdaq delisting deadline amid a going-concern warning. Financial-viability checks to run before signing any AI or imaging vendor.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology AI Vendor Due Diligence Checklist | xAID</title>
        <meta name="description" content="Nano-X Imaging faces a Nasdaq delisting deadline amid a going-concern warning. Financial-viability checks to run before signing any AI or imaging vendor." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-ai-vendor-financial-due-diligence/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology AI Vendor Due Diligence Checklist | xAID" />
        <meta property="og:description" content="Nano-X Imaging faces a Nasdaq delisting deadline amid a going-concern warning. Financial-viability checks to run before signing any AI or imaging vendor." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology AI Vendor Due Diligence Checklist | xAID" />
        <meta name="twitter:description" content="Nano-X Imaging faces a Nasdaq delisting deadline amid a going-concern warning. Financial-viability checks to run before signing any AI or imaging vendor." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-ai-vendor-financial-due-diligence/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-ai-vendor-financial-due-diligence/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology ai vendor due diligence, vendor financial stability imaging, nasdaq delisting radiology vendor, AI vendor viability checklist, Nano-X Imaging Nasdaq"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What happened with Nasdaq and Nano-X Imaging (Nanox)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On September 28, 2026, Nasdaq notified Nano-X Imaging that its shares had closed below the $1.00 minimum bid price for 30 consecutive business days, putting it out of compliance with Nasdaq Listing Rule 5450(a)(1) for the Nasdaq Global Market. The company has a 180-calendar-day compliance period, until March 29, 2027, to get its closing bid price back to $1.00 or higher for at least 10 consecutive business days, or it may seek an additional 180-day grace period by transferring to the Nasdaq Capital Market."
              }
            },
            {
              "@type": "Question",
              "name": "What financial red flags should a radiology group check before signing with an AI or imaging vendor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For a public vendor: going-concern language in recent SEC filings, cash and cash equivalents relative to quarterly cash burn, revenue trend and concentration, any exchange compliance notices (Nasdaq Form 6-K/8-K or Form 25-NSE), and SEC enforcement or securities-litigation history. For a private vendor: time since the last funding round, investor composition, and a direct question about runway. For both: what the contract says about data portability, service continuity, and transition assistance if the vendor is acquired, restructured, or ceases operations."
              }
            },
            {
              "@type": "Question",
              "name": "Has Nano-X Imaging had other financial or regulatory problems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The company reported a net loss of $69.8 million for the first half of 2026, up from $28.0 million in the first half of 2025, and said cash and deposits had fallen to $31.4 million by June 30, 2026 from $60.0 million at the end of 2025 — disclosures that came with an explicit going-concern warning. Its Q4 2025 results included a $17.5 million impairment tied to restructuring a Korean manufacturing facility, a 24% stock-price drop, and a CFO departure, which triggered a securities class action. Separately, the company and its former chairman paid the SEC roughly $1.07 million combined in 2023 to settle charges that they misstated the manufacturing cost of its Nanox.ARC device."
              }
            },
            {
              "@type": "Question",
              "name": "What happens to installed imaging equipment or software if a vendor is delisted or goes bankrupt?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on the contract and the bankruptcy process, but customers are often left supporting an orphaned product during a transition. When radiotherapy-equipment maker ViewRay filed Chapter 11 in July 2023 and was delisted from Nasdaq, it said it was managing inventory to keep existing MRIdian systems running at customer sites while it pursued a sale of its assets. Building continuity-of-service and data-portability clauses into a vendor contract before signing is the practical way to reduce this exposure."
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
                Buyer Guide
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A radiology vendor just got a Nasdaq delisting warning.<br />
              <span className="text-white/60">Here's the financial checklist to run before you sign with any vendor.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Nano-X Imaging has until March 2027 to lift its stock price above $1 or risk losing its Nasdaq listing — against a backdrop of a going-concern warning, a shrinking cash pile, and a securities class action. It's a public, verifiable case study in a question every imaging center should be asking before it signs a multi-year contract: can this vendor still be standing in three years?
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$1.00', label: 'Nasdaq bid-price minimum', sub: 'Nanox fell below it for 30 days' },
            { stat: 'Mar 29, 2027', label: 'Compliance deadline', sub: 'or risk delisting' },
            { stat: '$31.4M', label: 'Cash & deposits', sub: 'down from $60M, 6 months earlier' },
            { stat: '149%', label: 'H1 net loss growth', sub: 'YoY, to $69.8M' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What happened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 28, 2026, Nasdaq notified Nano-X Imaging (Nasdaq: NNOX) — the Israeli digital X-ray maker behind the Nanox.ARC multi-source scanner, and parent of the Nanox.AI imaging-analytics unit it formed by acquiring Zebra Medical Vision in 2021 — that its ordinary shares had closed below the exchange's <strong>$1.00</strong> minimum bid price for 30 consecutive business days, a violation of <a href="https://www.sec.gov/Archives/edgar/data/0001795251/000121390026106460/ea0307363-6k_nanox.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Nasdaq Listing Rule 5450(a)(1)</a> for continued listing on the Nasdaq Global Market, as the company disclosed in a filing with the SEC.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The notice itself doesn't delist the stock immediately. Under <a href="https://www.sec.gov/Archives/edgar/data/0001795251/000121390026106460/ea0307363-6k_nanox.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Nasdaq Rule 5810(c)(3)(A)</a>, Nano-X has a standard 180-calendar-day grace period — until <strong>March 29, 2027</strong> — to get its closing bid price back to $1.00 or higher for at least 10 consecutive business days. If it misses that window, it may still qualify for an additional 180-day period by transferring its listing to the Nasdaq Capital Market, which has lighter requirements. Reported as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/nasdaq-threatens-radiology-vendor-delisting-stock-exchange" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> covered it, this is a compliance clock, not a shutdown notice — but it is a clock, and it's running against a company that has also told investors, in the same stretch of 2026, that it isn't sure it can fund itself for the next 12 months.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Nano-X is a hardware and imaging-analytics company, not an AI reporting vendor in the sense most radiology groups think of when they evaluate CT or MRI reporting software. But the underlying problem it illustrates — a publicly traded medical-imaging vendor whose stock exchange is formally questioning whether it meets the bar to keep trading — is exactly the kind of signal that should factor into how any imaging center or radiology group screens <em>any</em> vendor, AI or otherwise, before anchoring years of clinical workflow to it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The financial picture behind the delisting notice
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A sub-$1 stock price rarely shows up in isolation, and Nano-X's recent filings bear that out. In its <a href="https://www.sec.gov/Archives/edgar/data/0001795251/000121390026098227/ea030482601ex99-1.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">second-quarter 2026 results</a>, the company reported cash and cash equivalents and deposits of <strong>$31.4 million</strong> as of June 30, 2026 — down from $60.0 million just six months earlier — and said those cash resources raised "substantial doubt" about its ability to continue as a going concern. Net loss for the first half of 2026 came in at <strong>$69.8 million</strong>, versus $28.0 million for the same period in 2025, an increase of roughly 149%. After the quarter closed, the company raised an additional $8.5 million through a registered direct offering and its at-the-market program, and announced workforce cuts — 15% in Israel, 67% in South Korea — targeting $2 million in annual savings starting in 2027.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That followed a rough start to the year. In its <a href="https://www.sec.gov/Archives/edgar/data/0001795251/000121390026045368/ea028506901ex99-1.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">fourth-quarter 2025 results</a>, published April 20, 2026, Nano-X reported a Q4 net loss of $33.4 million — up from $14.1 million a year earlier — driven largely by a $17.5 million impairment charge tied to restructuring its Korean chip-manufacturing facility. The stock fell about 24% that day, and the company disclosed its CFO was stepping down. Those disclosures are now the basis of a <a href="https://www.prnewswire.com/news-releases/urgent-deadline-for-shareholders-who-lost-money-in-shares-of-nano-x-imaging-ltd-nasdaq-nnox-302847584.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">securities class action</a> alleging the company overstated the efficiency of its manufacturing operations and understated its cash burn during the prior year.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It isn't the company's first brush with the SEC, either. In 2023, Nano-X and its former chairman, Ran Poliakine, <a href="https://www.sec.gov/Archives/edgar/data/1795251/000121390024028234/ea193232-6k_nanox.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">settled SEC charges</a> that they had misstated the manufacturing cost of the Nanox.ARC device to investors — Nano-X paid a $650,000 civil penalty, and Poliakine paid $240,000 in disgorgement plus $26,836.39 in interest and a $150,000 penalty, a combined total of roughly $1.07 million. None of these facts individually proves a company can't be trusted as a long-term vendor. Together, they're exactly the pattern a financial due-diligence check is designed to surface before a contract is signed, not after.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "orphaned product" risk is a real line item, not a hypothetical
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Medical-imaging vendors do go under, and when they do, customers are the ones left managing the fallout. Radiotherapy-equipment maker ViewRay filed for Chapter 11 bankruptcy in July 2023, citing inflationary pressure, supply-chain disruption, and late payments from international customers; <a href="https://www.medtechdive.com/news/viewray-chapter-11-bankruptcy-mri-radiation/688193/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">its stock was delisted from Nasdaq</a> and moved to the over-the-counter market. In its bankruptcy filings, the company said it was managing inventory specifically to keep its installed base of MRIdian MRI-guided radiotherapy systems running at customer sites while it searched for a buyer for the business — a direct illustration of a clinical imaging product left in limbo while its manufacturer's finances got sorted out in court.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That same year, outpatient imaging and oncology provider Akumin — carrying more than $1.3 billion in debt — filed Chapter 11 and was <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/akumins-creditors-reportedly-lawyer-radiology-provider-may-face-delisting-nasdaq" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">delisted from Nasdaq</a> under separate listing rules. Nasdaq itself has been tightening the screws on marginal issuers more broadly: a <a href="https://finance.yahoo.com/markets/stocks/articles/nasdaq-tightens-rules-nearly-180-170120688.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">rule change approved by the SEC</a> now triggers near-immediate suspension and delisting for companies whose market value stays below $5 million for 30 straight days, a threshold roughly 180 Nasdaq-listed companies were sitting below as of that reporting. None of this means every small-cap imaging or AI vendor is in trouble. It means that for a vendor whose product will sit inside your reporting workflow for years, "is this company financially sound enough to still be supporting this product in three years" deserves the same scrutiny as accuracy benchmarks and FDA clearance status — and for a public company, the data to answer it is sitting in SEC filings anyone can read today, for free.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The financial-viability checklist
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This is distinct from the clinical and safety checks covered elsewhere — what matters here is whether the company behind the product will still exist to support it. A practical screen before signing:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">What to check</th>
                      <th className="text-left py-3 text-[#0D0D0D] font-medium">Where to find it</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Going-concern language or audit qualifications', "A public vendor's SEC 10-K / 20-F risk factors and the auditor's report; press releases announcing quarterly results often state it directly."],
                      ['Cash on hand vs. quarterly cash burn', 'Balance sheet and cash-flow statement in the latest 10-Q/20-F or earnings press release — divide cash by the burn rate to estimate runway in quarters.'],
                      ['Exchange compliance notices', 'SEC Form 6-K/8-K filings (for a bid-price or market-value notice) and Form 25-NSE (an actual delisting filing) — both searchable free on SEC EDGAR.'],
                      ['Revenue trend and customer concentration', 'Quarter-over-quarter revenue in earnings releases; a flat or shrinking top line alongside rising losses is a compounding risk, not an isolated one.'],
                      ['Litigation and enforcement history', 'SEC litigation releases and 8-K/6-K disclosures of securities class actions or regulatory settlements — not disqualifying alone, but worth weighing alongside current financials.'],
                      ['Funding recency and runway (private vendors)', "No public filings exist, so ask directly: date and size of the last funding round, and the vendor's own stated runway in months."],
                      ['Contract continuity protections', 'The contract itself — data-export and portability terms, defined transition-assistance period, and what happens to service if the vendor is acquired or ceases operations.'],
                    ].map(([check, where]) => (
                      <tr key={check} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#666] font-light align-top">{check}</td>
                        <td className="py-3 text-[#666] font-light align-top">{where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of these checks require a finance background or a paid data service. For a public company, EDGAR's full-text search turns up bid-price notices, going-concern language, and litigation releases in minutes. For a private vendor, the questions above are reasonable to ask directly in a procurement conversation — and a vendor confident in its financial position should have no trouble answering them.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This isn't an argument against AI or imaging vendors generally — it's an argument for screening the business behind the product with the same rigor applied to the product itself. For an AI-reporting vendor specifically, that screen should sit alongside the clinical-workflow question: what happens to a report before it reaches your reading radiologist. With xAID, the AI produces a structured draft, xAID's in-house radiologist reviews every preliminary, and the report is delivered ready-to-sign to your reading radiologist. That workflow detail doesn't substitute for a financial-viability check — the two questions are separate and a buyer should run both before committing to any vendor relationship that a department will depend on for years.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What happened with Nasdaq and Nano-X Imaging (Nanox)?',
                    a: 'On September 28, 2026, Nasdaq notified Nano-X Imaging that its shares had closed below the $1.00 minimum bid price for 30 consecutive business days, putting it out of compliance with Nasdaq Listing Rule 5450(a)(1) for the Nasdaq Global Market. The company has a 180-calendar-day compliance period, until March 29, 2027, to get its closing bid price back to $1.00 or higher for at least 10 consecutive business days, or it may seek an additional 180-day grace period by transferring to the Nasdaq Capital Market.',
                  },
                  {
                    q: 'What financial red flags should a radiology group check before signing with an AI or imaging vendor?',
                    a: "For a public vendor: going-concern language in recent SEC filings, cash and cash equivalents relative to quarterly cash burn, revenue trend and concentration, any exchange compliance notices (Nasdaq Form 6-K/8-K or Form 25-NSE), and SEC enforcement or securities-litigation history. For a private vendor: time since the last funding round, investor composition, and a direct question about runway. For both: what the contract says about data portability, service continuity, and transition assistance if the vendor is acquired, restructured, or ceases operations.",
                  },
                  {
                    q: 'Has Nano-X Imaging had other financial or regulatory problems?',
                    a: 'Yes. The company reported a net loss of $69.8 million for the first half of 2026, up from $28.0 million in the first half of 2025, and said cash and deposits had fallen to $31.4 million by June 30, 2026 from $60.0 million at the end of 2025 — disclosures that came with an explicit going-concern warning. Its Q4 2025 results included a $17.5 million impairment tied to restructuring a Korean manufacturing facility, a 24% stock-price drop, and a CFO departure, which triggered a securities class action. Separately, the company and its former chairman paid the SEC roughly $1.07 million combined in 2023 to settle charges that they misstated the manufacturing cost of its Nanox.ARC device.',
                  },
                  {
                    q: 'What happens to installed imaging equipment or software if a vendor is delisted or goes bankrupt?',
                    a: 'It depends on the contract and the bankruptcy process, but customers are often left supporting an orphaned product during a transition. When radiotherapy-equipment maker ViewRay filed Chapter 11 in July 2023 and was delisted from Nasdaq, it said it was managing inventory to keep existing MRIdian systems running at customer sites while it pursued a sale of its assets. Building continuity-of-service and data-portability clauses into a vendor contract before signing is the practical way to reduce this exposure.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/nasdaq-threatens-radiology-vendor-delisting-stock-exchange" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "Nasdaq threatens radiology vendor with delisting from stock exchange"; Nano-X Imaging Ltd., <a href="https://www.sec.gov/Archives/edgar/data/0001795251/000121390026106460/ea0307363-6k_nanox.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Form 6-K, Nasdaq notice</a> (September 2026); Nano-X Imaging, <a href="https://www.sec.gov/Archives/edgar/data/0001795251/000121390026098227/ea030482601ex99-1.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Q2 2026 results press release</a> (SEC exhibit); Nano-X Imaging, <a href="https://www.sec.gov/Archives/edgar/data/0001795251/000121390026045368/ea028506901ex99-1.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Q4/FY2025 results press release</a> (SEC exhibit); Nano-X Imaging, <a href="https://www.sec.gov/Archives/edgar/data/1795251/000121390024028234/ea193232-6k_nanox.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Form 6-K, SEC settlement</a> (2024); <a href="https://www.prnewswire.com/news-releases/urgent-deadline-for-shareholders-who-lost-money-in-shares-of-nano-x-imaging-ltd-nasdaq-nnox-302847584.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">PR Newswire</a>, securities class action notice; <a href="https://www.medtechdive.com/news/viewray-chapter-11-bankruptcy-mri-radiation/688193/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>, ViewRay Chapter 11 coverage; <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/akumins-creditors-reportedly-lawyer-radiology-provider-may-face-delisting-nasdaq" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, Akumin coverage; <a href="https://finance.yahoo.com/markets/stocks/articles/nasdaq-tightens-rules-nearly-180-170120688.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Yahoo Finance</a>, Nasdaq market-value rule coverage. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="See the workflow before you commit to anything"
          sub="In-house radiologist review on every preliminary, delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">ECRI's AI Error Tracker and the Radiology AI Vendor Checklist</div>
              </Link>
              <Link to="/blog/coalition-for-health-ai-vendor-security-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CHAI's Vendor Security Checklist for Imaging Centers</div>
              </Link>
              <Link to="/blog/how-to-choose-a-teleradiology-company/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How to Choose a Teleradiology Company</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyAiVendorFinancialDueDiligence;
