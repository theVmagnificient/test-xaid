import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const TeleradiologyCompaniesMaDealEconomics = () => {
  const post = {
    title: 'What RadNet’s $350M ONRAD Deal Says About the Price of Radiology Coverage',
    dateIso: '2026-10-31',
    date: 'October 31, 2026',
    category: 'M&A & Funding',
    readingTime: 8,
    description: 'RadNet is paying up to $560M for a 130-radiologist teleradiology network. The math behind the deal shows what buying coverage now costs — and why some groups are weighing AI-assisted reporting instead of writing a check that size.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>RadNet-ONRAD Deal: The Price of Radiology Coverage | xAID</title>
        <meta name="description" content="RadNet is paying up to $560M for ONRAD's 130-radiologist network. What the deal's math reveals about build-vs-buy-vs-AI options for radiology coverage." />
        <link rel="canonical" href="https://xaid.ai/blog/teleradiology-companies-ma-deal-economics/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RadNet-ONRAD Deal: The Price of Radiology Coverage | xAID" />
        <meta property="og:description" content="RadNet is paying up to $560M for ONRAD's 130-radiologist network. What the deal's math reveals about build-vs-buy-vs-AI options for radiology coverage." />
        <meta property="og:url" content="https://xaid.ai/blog/teleradiology-companies-ma-deal-economics/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RadNet-ONRAD Deal: The Price of Radiology Coverage | xAID" />
        <meta name="twitter:description" content="RadNet is paying up to $560M for ONRAD's 130-radiologist network. What the deal's math reveals about build-vs-buy-vs-AI options for radiology coverage." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/teleradiology-companies-ma-deal-economics" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/teleradiology-companies-ma-deal-economics",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "teleradiology companies, teleradiology M&A, RadNet ONRAD deal, radiology coverage cost, build vs buy radiology, AI radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much is RadNet paying for ONRAD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RadNet agreed to pay $350 million in cash plus 5 million shares of RadNet common stock for teleradiology and staffing company ONRAD, with up to an additional $210 million earnout tied to ONRAD's 2027 EBITDA performance — a headline cash-plus-earnout figure of up to $560 million before the stock is even counted. The deal is expected to close in early 2027, subject to regulatory review."
              }
            },
            {
              "@type": "Question",
              "name": "What does the RadNet-ONRAD deal imply about the cost of radiology coverage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Based on RadNet's own guidance of $60–65 million in projected first-year EBITDA, the $350 million cash portion alone prices the deal at roughly 5.4 to 5.8 times forward EBITDA. Spread across ONRAD's network of more than 130 contracted radiologists, the cash consideration works out to roughly $2.7 million per radiologist in reading capacity, before the stock or earnout are added — a rough illustration of what acquiring, rather than renting or building, radiology coverage now costs at scale."
              }
            },
            {
              "@type": "Question",
              "name": "Is buying a teleradiology company the only way to add radiology coverage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Groups facing a coverage gap generally have three levers: buy capacity (acquire or contract with a teleradiology company, as RadNet just did at nine-figure scale), build capacity (recruit, license, and credential radiologists in-house, which is slower but keeps capacity under direct control), or augment existing capacity with AI-assisted report drafting, which lets a group's current radiologists read more studies without adding headcount or a long-term vendor contract."
              }
            },
            {
              "@type": "Question",
              "name": "Why is radiology coverage getting more expensive to acquire?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiologist attrition more than doubled from 2014 to 2022 (from 1.1% to 2.5% annually), and the American College of Radiology's Harvey L. Neiman Health Policy Institute projects the radiology workforce will reach only about 90% adequacy relative to demand by 2038. At the practice level, the number of radiology-only practices fell 31% between 2014 and 2023 while the average number of radiologists per practice nearly doubled, from 9.7 to 17.9 — the same consolidation pressure now visible at the vendor level in deals like RadNet-ONRAD."
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
                M&amp;A &amp; Funding
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              What RadNet's $350M ONRAD deal says<br />
              <span className="text-white/60">about the price of radiology coverage</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Strip out the press-release language and the ONRAD acquisition is a pricing data point: roughly $2.7 million in cash per radiologist of reading capacity, at 5–6 times forward EBITDA. That number is the real reason the build-vs-buy-vs-AI question is getting harder to ignore.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Up to $560M', label: 'Cash + earnout for ONRAD', sub: 'plus 5M RadNet shares' },
            { stat: '~5.4–5.8x', label: 'Implied EBITDA multiple', sub: 'cash portion only' },
            { stat: '~$2.7M', label: 'Cash per radiologist', sub: 'on 130+ network, cash-only' },
            { stat: '130+', label: 'Contracted radiologists acquired', sub: '225+ hospitals, 26 states' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The deal, priced out
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RadNet has agreed to acquire teleradiology and radiology staffing company ONRAD for <strong>$350 million in cash</strong> plus <strong>5 million shares</strong> of RadNet common stock, with up to an additional <strong>$210 million earnout</strong> contingent on ONRAD hitting 2027 EBITDA targets, according to the companies' <a href="https://www.sec.gov/Archives/edgar/data/0000790526/000168316826008094/radnet_ex9901.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">joint announcement</a>. That puts the headline cash-plus-earnout figure at up to <strong>$560 million</strong>, before the stock component is even counted — a number <a href="https://in.investing.com/news/stock-market-news/radnet-to-acquire-teleradiology-firm-onrad-for-up-to-560-million-93CH-5655004" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">several outlets led with</a>. The transaction is expected to close in early 2027, subject to regulatory review and customary closing conditions.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ONRAD provides remote final interpretations and in-hospital radiology staffing — including interventional coverage — through a network of <strong>more than 130 contracted radiologists</strong>, serving <strong>more than 225 hospital facilities</strong> across <strong>26 states</strong>, per the companies' <a href="https://www.sec.gov/Archives/edgar/data/0000790526/000168316826008094/radnet_ex9901.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">SEC filing</a>, and more than <strong>270 U.S. customers</strong>, per <a href="https://www.medtechdive.com/news/radnet-expands-into-teleradiology-with-350m-onrad-deal/872990/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive's coverage of the announcement</a>. Hospitals accounted for about 96% of ONRAD's sales last year, and teleradiology made up roughly 81% of its revenue — this was, structurally, a hospital-coverage business. RadNet expects ONRAD to add <strong>$190–200 million in annual revenue</strong> and <strong>$60–65 million in Adjusted EBITDA</strong> in its first year, with growth exceeding 10% annually after that.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Do the arithmetic on RadNet's own numbers and two things fall out. First, the <strong>$350 million cash portion alone prices the deal at roughly 5.4 to 5.8 times ONRAD's projected first-year EBITDA</strong> — before the stock or the up-to-$210 million earnout are added on top. Second, spread across ONRAD's 130-plus radiologists, that cash consideration works out to <strong>roughly $2.7 million per radiologist</strong> of reading capacity; count the full $560 million cash-plus-earnout figure and it rises to <strong>roughly $4.3 million per radiologist</strong>. Those are not numbers RadNet or ONRAD published — they are simple division on the figures both companies disclosed — but they are the clearest available answer to a question every hospital and radiology group now has to ask: what does it actually cost to acquire radiology reading capacity at scale?
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why a buyer this size is the real story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RadNet is already the largest operator of freestanding outpatient diagnostic imaging centers in the United States. What it has not had, until now, is a meaningful hospital-facing radiology staffing or remote-reading business. ONRAD's contracted-radiologist network and its 225-plus hospital relationships give RadNet exactly that, in one purchase rather than a multi-year build. Post-close, ONRAD becomes the foundation of a new <strong>Radiology Professional Services</strong> segment — RadNet's third reportable operating line.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                RadNet CEO Howard Berger described the trigger for the deal in terms that go beyond ONRAD itself, telling <a href="https://www.medtechdive.com/news/radnet-expands-into-teleradiology-with-350m-onrad-deal/872990/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a> that inbound calls from hospital partners were "not about, necessarily, our AI tools, not about joint venturing and outpatient solutions, but how can we help them solve their most critical problem now, and that is radiology interpretations and radiology staffing." Hospital partners increasingly see radiology coverage as a "choke point" limiting their own capacity, RadNet said. Read plainly, a $560 million purchase is RadNet's answer to hospitals that are not asking for a better dashboard — they are asking for more radiologists reading studies, and are willing to pay a conglomerate to guarantee it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This is the going rate, not an outlier
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ONRAD is at least the fourth independent teleradiology brand of real scale absorbed into a larger operator in about a decade, part of a broader consolidation wave among teleradiology companies, and the price tags have been climbing. Mednax acquired Virtual Radiologic (vRad) for <strong>$500 million</strong> in <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/mednax-acquires-vrad-500-million" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2015</a>. Radiology Partners then acquired Mednax's entire radiology division — which by then included vRad — for <strong>$885 million</strong> in <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/radiology-partners-finalizes-885m-acquisition-mednax" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2020</a>. Most recently, Radiology Partners agreed in <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/rad-partners-expands-overseas-acquiring-1-worlds-largest-teleradiology-businesses-reported-715m" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">August 2026</a> to acquire international teleradiology provider Everlight Radiology for a reported <strong>$715 million</strong>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Each of these deals follows the same shape: a large, diversified imaging or physician-services company buys an established teleradiology brand's radiologist network and hospital contracts rather than recruiting and credentialing a remote-reading workforce from zero. The dollar figures have moved from the hundreds of millions toward, in combination, potentially over half a billion — and the EBITDA multiples implied by RadNet's own guidance (roughly 5.4–5.8 times, cash-only) suggest buyers are paying a real premium for credentialed, already-contracted reading capacity rather than waiting to build it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why coverage got this expensive in the first place
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this is happening in a vacuum. Radiologist attrition more than doubled between 2014 and 2022, from <strong>1.1%</strong> to <strong>2.5%</strong> annually, according to a <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2026 workforce update from the ACR's Harvey L. Neiman Health Policy Institute</a>, which projects the radiology workforce will reach only about <strong>90% adequacy</strong> relative to demand by 2038. The same report found that the number of radiology-only practices fell <strong>31%</strong> between 2014 and 2023, while the average number of radiologists per practice nearly doubled, from <strong>9.7 to 17.9</strong>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That last figure matters as much as the ONRAD price tag. Radiology practices themselves have been consolidating for a decade, for the same underlying reason RadNet is now buying ONRAD: scale is what lets an organization absorb staffing attrition and hospital demand that an independent group or standalone vendor increasingly can't. The $350 million-plus price of a teleradiology network is a downstream effect of a labor market that has been tightening for years — not a one-off, idiosyncratic number.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Three levers, not two
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A nine-figure acquisition is one way to close a coverage gap, but it's the option available only to organizations with RadNet's balance sheet. For the hospitals, imaging centers, and independent radiology groups that can't write that check, the practical decision comes down to three levers:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">Lever</th>
                      <th className="text-left py-3 pr-4 font-medium text-[#0D0D0D]">What it costs</th>
                      <th className="text-left py-3 font-medium text-[#0D0D0D]">What it takes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Buy (M&amp;A or vendor contract)</td>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Nine figures to acquire a network outright; a standing service contract if contracting rather than buying</td>
                      <td className="py-3 text-[#444] font-light align-top">Capital or a long-term vendor relationship whose pricing can change at the next renewal or acquisition</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Build (recruit in-house)</td>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">Ongoing salary and benefits per radiologist hired</td>
                      <td className="py-3 text-[#444] font-light align-top">Months of recruiting, licensing, and credentialing per hire, against a shrinking applicant pool</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">AI-augment (extend existing staff)</td>
                      <td className="py-3 pr-4 text-[#444] font-light align-top">A per-study or subscription software cost, well below acquisition or new-hire economics</td>
                      <td className="py-3 text-[#444] font-light align-top">Integration into existing workflow; no added headcount or new vendor dependency</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Buying and building both add reading capacity by adding radiologists — one all at once through acquisition, the other one hire at a time. AI-assisted reporting takes a different path: it doesn't add radiologists at all. It drafts a structured, comprehensive report from the study so the radiologists a practice already has can review and finalize more cases per shift, without a nine-figure deal or a multi-month hiring cycle.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                AI CT reporting doesn't compete with a $560 million acquisition — it changes how much acquired or contracted reading capacity a practice needs in the first place. xAID's foundation-model system drafts a structured, comprehensive report from the CT study, xAID's in-house radiologist reviews every preliminary, and the result arrives <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="text-xaid-blue-strong underline underline-offset-2">ready-to-sign</Link> for the client's own reading radiologist. That lets a group absorb volume spikes or after-hours gaps by extending the radiologists it already has, rather than negotiating a new contract with — or waiting for — whichever <Link to="/blog/how-to-choose-a-teleradiology-company/" className="text-xaid-blue-strong underline underline-offset-2">teleradiology company</Link> survives the next round of consolidation.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How much is RadNet paying for ONRAD?',
                    a: "RadNet agreed to pay $350 million in cash plus 5 million shares of RadNet common stock for teleradiology and staffing company ONRAD, with up to an additional $210 million earnout tied to ONRAD's 2027 EBITDA performance — a headline cash-plus-earnout figure of up to $560 million before the stock is even counted. The deal is expected to close in early 2027, subject to regulatory review.",
                  },
                  {
                    q: 'What does the RadNet-ONRAD deal imply about the cost of radiology coverage?',
                    a: "Based on RadNet's own guidance of $60–65 million in projected first-year EBITDA, the $350 million cash portion alone prices the deal at roughly 5.4 to 5.8 times forward EBITDA. Spread across ONRAD's network of more than 130 contracted radiologists, the cash consideration works out to roughly $2.7 million per radiologist in reading capacity, before the stock or earnout are added — a rough illustration of what acquiring, rather than renting or building, radiology coverage now costs at scale.",
                  },
                  {
                    q: 'Is buying a teleradiology company the only way to add radiology coverage?',
                    a: "No. Groups facing a coverage gap generally have three levers: buy capacity (acquire or contract with a teleradiology company, as RadNet just did at nine-figure scale), build capacity (recruit, license, and credential radiologists in-house, which is slower but keeps capacity under direct control), or augment existing capacity with AI-assisted report drafting, which lets a group's current radiologists read more studies without adding headcount or a long-term vendor contract.",
                  },
                  {
                    q: 'Why is radiology coverage getting more expensive to acquire?',
                    a: "Radiologist attrition more than doubled from 2014 to 2022 (from 1.1% to 2.5% annually), and the American College of Radiology's Harvey L. Neiman Health Policy Institute projects the radiology workforce will reach only about 90% adequacy relative to demand by 2038. At the practice level, the number of radiology-only practices fell 31% between 2014 and 2023 while the average number of radiologists per practice nearly doubled, from 9.7 to 17.9 — the same consolidation pressure now visible at the vendor level in deals like RadNet-ONRAD.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: RadNet, Inc. and ONRAD, Inc., joint announcement filed with the <a href="https://www.sec.gov/Archives/edgar/data/0000790526/000168316826008094/radnet_ex9901.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">SEC</a> (October 2026), as reported by <a href="https://www.medtechdive.com/news/radnet-expands-into-teleradiology-with-350m-onrad-deal/872990/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a> and <a href="https://in.investing.com/news/stock-market-news/radnet-to-acquire-teleradiology-firm-onrad-for-up-to-560-million-93CH-5655004" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Investing.com</a>. EBITDA-multiple and per-radiologist figures are xAID calculations based on RadNet's disclosed deal terms and financial guidance, not figures published by RadNet or ONRAD. Prior deal figures per <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/mednax-acquires-vrad-500-million" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business (Mednax/vRad)</a>, <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/radiology-partners-finalizes-885m-acquisition-mednax" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business (Radiology Partners/Mednax)</a>, and <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/rad-partners-expands-overseas-acquiring-1-worlds-largest-teleradiology-businesses-reported-715m" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business (Radiology Partners/Everlight)</a>. Workforce figures per the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR Bulletin / Harvey L. Neiman Health Policy Institute</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Extend your radiologists' capacity — without the nine-figure check"
          sub="See how AI CT reporting works alongside the coverage you already have. Try it on 5 free studies."
          primaryLabel="Request free pilot"
          primaryTo="/#contact-us"
          secondaryLabel="How it works"
          secondaryTo="/how-ai-ct-reporting-works/"
        />

        {/* Related */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/how-to-choose-a-teleradiology-company/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How to Choose a Teleradiology Company</div>
              </Link>
              <Link to="/blog/teleradiology-companies-policy-watchlist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Advocacy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A Policy Watch-List for Teleradiology Companies</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI Fills the Gap</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default TeleradiologyCompaniesMaDealEconomics;
