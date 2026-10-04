import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyPrivateEquityExitGlobalScale = () => {
  const post = {
    title: "I-MED's $2.4B Sale to Jardine Matheson: A Radiology Roll-Up Case Study",
    metaTitle: "I-MED's $2.4B Sale to Jardine Matheson | xAID",
    dateIso: '2026-10-04',
    date: 'October 4, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "Jardine Matheson's $2.4B buyout of I-MED and its US teleradiology arm StatRad: what it means for reporting standards and radiologist autonomy.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-private-equity-exit-global-scale" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-private-equity-exit-global-scale" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-private-equity-exit-global-scale",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology private equity, I-MED Jardine Matheson, StatRad acquisition, teleradiology roll-up, radiology reporting standardization"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Jardine Matheson buy, and for how much?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Jardine Matheson, the Hong Kong-based conglomerate, completed its purchase of I-MED Radiology Network for an enterprise value of A$3.4 billion (about US$2.4 billion), closing September 30, 2026. I-MED operates 215 imaging clinics across Australia and New Zealand and performs roughly 7 million patient procedures a year."
              }
            },
            {
              "@type": "Question",
              "name": "What is StatRad and why does it matter to this deal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "StatRad is a US teleradiology provider I-MED acquired in July 2024 to enter the American market. At the time of that acquisition, StatRad had more than 90 US-based radiologists reading for over 190 hospitals across 30 states. It means Jardine Matheson's purchase of I-MED also puts a US hospital-facing teleradiology business inside a Hong Kong conglomerate's portfolio."
              }
            },
            {
              "@type": "Question",
              "name": "Who owned I-MED before Jardine Matheson?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I-MED has changed hands twice in just over a decade. Swedish private equity firm EQT bought it in 2014, then sold it to UK-based private equity firm Permira in January 2018 for a reported A$1.3 billion. Permira held it for roughly eight years before selling to Jardine Matheson in 2026 at more than double that enterprise value."
              }
            },
            {
              "@type": "Question",
              "name": "Does a roll-up like this change reporting standards or turnaround times for existing clients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There is no public evidence yet that I-MED or StatRad's reporting standards or turnaround commitments have changed, and I-MED's own announcement said clinical standards and clinic operations remain unchanged. But industry experience with multi-site consolidation is that centralized owners eventually push for standardized reporting templates and renegotiated service-level terms, and contracts rarely specify what happens to those terms when ownership changes hands — which is why due diligence on change-of-control clauses matters for any hospital relying on an outsourced teleradiology provider."
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
              A $2.4B radiology deal just left private equity<br />
              <span className="text-white/60">for a global conglomerate</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Jardine Matheson's purchase of I-MED Radiology Network — and its US teleradiology arm StatRad — is more than another consolidation headline. It's a case study in what happens to reporting standardization, turnaround SLAs, and local radiologist autonomy when a teleradiology operation becomes one asset inside a multinational's portfolio.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$2.4B', label: 'Jardine–I-MED deal value', sub: 'A$3.4B enterprise value' },
            { stat: '215', label: 'I-MED clinics', sub: 'Australia & New Zealand' },
            { stat: '7M', label: 'Studies read per year', sub: "across I-MED's network" },
            { stat: '3', label: 'Owners since 2014', sub: 'EQT → Permira → Jardines' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A network sold for the third time in a decade
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On October 1, 2026, Jardine Matheson — the Hong Kong-based conglomerate behind brands from Mandarin Oriental to Astra International — announced it had completed its acquisition of I-MED Radiology Network, as <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/global-investment-firm-finalizes-24b-acquisition-radiology-network" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>. The deal gives I-MED an enterprise value of A$3.4 billion, or roughly <strong>US$2.4 billion</strong>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                I-MED is Australia and New Zealand's largest combined diagnostic imaging network: <strong>215 clinics</strong>, more than <strong>500 radiologists</strong>, and roughly <strong>7 million patient procedures a year</strong> across MRI, CT, PET, nuclear medicine, ultrasound, and X-ray, according to <a href="https://www.medicaldevice-network.com/news/jardine-matheson-to-acquire-imed-radiology/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Medical Device Network</a>. Jardine Matheson CEO Lincoln Pan said in <a href="https://i-med.com.au/media-centre/jardine-matheson-holdings-limited-to-acquire-i-med-radiology-network" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">I-MED's own announcement</a> that the company was "honoured to be partnering with I-MED and to be part of its journey ahead."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What makes this deal worth a closer look isn't the headline number — it's the ownership trail behind it. I-MED has now been bought and sold three times since 2014. Swedish private equity firm EQT acquired it that year; Permira, a London-based PE firm, bought it from EQT in January 2018 — a deal <a href="https://www.auntminnie.com/practice-management/article/15619518/permira-buys-australian-radiology-firm-i-med" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie covered at the time</a> — for a reported <strong>A$1.3 billion</strong>. Permira held it for roughly eight years before selling to Jardine Matheson at more than double that value. Permira partner Silvia Oteri said in the firm's own <a href="https://www.permira.com/news-and-insights/announcements/permira-agrees-sale-of-i-med-radiology-network-to-jardine-matheson" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">deal announcement</a>: "When we backed I-MED in 2018, we saw a business with a strong market position and a deeply trusted clinician network, operating in a sector where structural tailwinds are exceptional."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Three owners, one radiology network
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Owner</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Period</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Reported deal value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['EQT (private equity)', '2014–2018', 'Undisclosed purchase price'],
                      ['Permira (private equity)', '2018–2026', 'A$1.3B in, A$3.4B out'],
                      ['Jardine Matheson (conglomerate)', '2026–', 'A$3.4B enterprise value'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[1]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Each cycle sold the network to a bigger, more structurally different kind of owner — from one PE fund to another, and now from a PE fund to a 190-year-old trading conglomerate with no other healthcare provider in its portfolio. That shift in ownership <em>type</em>, not just ownership size, is what makes this deal a genuinely different case than a typical PE-to-PE flip.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why StatRad is the part worth watching
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                I-MED isn't only an Australian and New Zealand business. In July 2024 it acquired StatRad, which <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/global-investment-firm-finalizes-24b-acquisition-radiology-network" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> describes as America's second-largest teleradiology group. At the time of that acquisition, StatRad had more than <strong>90 US-based radiologists</strong> reading for over <strong>190 hospitals across 30 states</strong>, per <a href="https://i-med.com.au/media-centre/i-med-acquires-statrad" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">I-MED's own announcement</a> of the deal. I-MED's existing teleradiology arm was already producing more than 1 million reports a year for over 170 hospitals in Australia and New Zealand — about 10% of I-MED's FY24 revenue — and the company said it wanted to become "a leading multinational provider of scalable teleradiology services globally."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That ambition is exactly why the Jardine Matheson deal matters beyond Australia. A single Hong Kong-headquartered holding company now sits atop a reporting network that spans Australian and New Zealand clinics <em>and</em> contracted teleradiology relationships with American hospitals — layered through two prior private equity owners before this sale even closed. US hospitals that contract with StatRad for overnight or overflow reads are, as of this deal, three ownership changes removed from the entity that originally built the clinician network they rely on.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What scale roll-ups typically do to reporting consistency
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                I-MED's own completion announcement struck a reassuring note: "Our teams, clinics, clinical standards and commitment to providing high-quality diagnostic and interventional services remain unchanged," the company said, per the <a href="https://i-med.com.au/media-centre/jardine-matheson-holdings-limited-to-acquire-i-med-radiology-network" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announcement</a>. That line is standard at signing — and there's no public evidence yet that anything at I-MED or StatRad has changed operationally. The more useful question is what tends to happen next, after the deal paperwork is done.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Multi-site consolidation under a single financial owner creates three recurring pressures, regardless of specialty:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Reporting templates get standardized',
                    desc: "A group spanning hundreds of sites and multiple countries has an obvious efficiency case for a single structured-reporting template and a shared AI stack. I-MED has already moved in this direction — it holds a minority stake in an Australian medical-imaging AI company it originally partnered with in 2019, per Permira's deal announcement. Standardization isn't inherently bad for quality, but a template built for one country's clinical and regulatory conventions doesn't automatically fit another's, which matters once Australian and US reporting practices sit under one parent.",
                  },
                  {
                    title: 'Turnaround SLAs get renegotiated at the contract, not the clinic, level',
                    desc: "When a teleradiology relationship is folded into a larger group-wide service agreement, the turnaround commitment a hospital originally negotiated can get rewritten as contracts come up for renewal — not because care changed, but because the owner managing hundreds of contracts optimizes at the portfolio level. Hospitals that rely on outsourced reads should assume their SLA is a live negotiating point at every change of control, not a fixed clinical guarantee.",
                  },
                  {
                    title: 'Local radiologist autonomy comes under quiet pressure',
                    desc: 'This isn\'t unique to I-MED. In the US, the American Medical Association\'s own survey data shows the share of radiologists working in a setting wholly owned by physicians has fallen to 46.9%, down from 63.6% in the AMA\'s first survey in 2012 — a trend the AMA has explicitly cited in cautioning practices about corporate investment, per Radiology Business. As ownership chains lengthen and cross borders, the distance between the radiologist reading a scan and the entity setting operational policy tends to grow, even when day-to-day clinical judgment stays with the radiologist.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The real test is in the next integration cycle, not the press release
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                I-MED's financials give a clue to why Jardine Matheson paid a premium multiple for the business: 11% compound annual revenue growth and 12% compound annual adjusted EBITDA growth over the five years to June 2025, at roughly an 11.5x adjusted EBITDA multiple on the transaction, according to both <a href="https://www.medicaldevice-network.com/news/jardine-matheson-to-acquire-imed-radiology/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Medical Device Network</a> and <a href="https://www.hhmglobal.com/knowledge-bank/news/2-4bn-i-med-radiology-network-acquisition-by-jardine-matheson" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">HHM Global</a>. Jardine Matheson is buying a growth story, and growth stories under a new owner usually come with an integration plan — consolidating back-office systems, procurement, and reporting infrastructure to capture synergies that justify the price.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that is visible yet in public statements, and it may take 12 to 24 months to show up in contracts and reporting workflows rather than in a quarter's earnings call. For any hospital, imaging center, or referring physician relying on I-MED or StatRad, the deal itself isn't the risk event — the next contract renewal and the next systems-integration cycle are. The same logic applies to any health system evaluating an outsourced teleradiology relationship generally: a vendor's ownership structure today says little about who will own it, and what they'll optimize for, three years from now.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This deal is a reminder of a structural feature of the outsourced-reporting model: the reporting standard a hospital depends on is tied to whichever entity currently owns the staffing roster, and that entity can change — repeatedly, across borders — without the hospital having a vote. AI CT reporting built on foundation models sidesteps part of that exposure, because the reporting standard lives in the software, not in whichever holding company currently owns a pool of contracted radiologists. In xAID's workflow, the AI produces a structured, comprehensive report draft, xAID's in-house radiologist reviews every preliminary, and the report arrives ready-to-sign — with your own reading radiologist signing the final, regardless of who owns any teleradiology vendor you also use.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did Jardine Matheson buy, and for how much?',
                    a: 'Jardine Matheson, the Hong Kong-based conglomerate, completed its purchase of I-MED Radiology Network for an enterprise value of A$3.4 billion (about US$2.4 billion), closing September 30, 2026. I-MED operates 215 imaging clinics across Australia and New Zealand and performs roughly 7 million patient procedures a year.',
                  },
                  {
                    q: 'What is StatRad and why does it matter to this deal?',
                    a: 'StatRad is a US teleradiology provider I-MED acquired in July 2024 to enter the American market. At the time of that acquisition, StatRad had more than 90 US-based radiologists reading for over 190 hospitals across 30 states. It means Jardine Matheson\'s purchase of I-MED also puts a US hospital-facing teleradiology business inside a Hong Kong conglomerate\'s portfolio.',
                  },
                  {
                    q: 'Who owned I-MED before Jardine Matheson?',
                    a: 'I-MED has changed hands twice in just over a decade. Swedish private equity firm EQT bought it in 2014, then sold it to UK-based private equity firm Permira in January 2018 for a reported A$1.3 billion. Permira held it for roughly eight years before selling to Jardine Matheson in 2026 at more than double that enterprise value.',
                  },
                  {
                    q: 'Does a roll-up like this change reporting standards or turnaround times for existing clients?',
                    a: "There is no public evidence yet that I-MED or StatRad's reporting standards or turnaround commitments have changed, and I-MED's own announcement said clinical standards and clinic operations remain unchanged. But industry experience with multi-site consolidation is that centralized owners eventually push for standardized reporting templates and renegotiated service-level terms, and contracts rarely specify what happens to those terms when ownership changes hands — which is why due diligence on change-of-control clauses matters for any hospital relying on an outsourced teleradiology provider.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/global-investment-firm-finalizes-24b-acquisition-radiology-network" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.medicaldevice-network.com/news/jardine-matheson-to-acquire-imed-radiology/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medical Device Network</a>, <a href="https://www.hhmglobal.com/knowledge-bank/news/2-4bn-i-med-radiology-network-acquisition-by-jardine-matheson" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HHM Global</a>, <a href="https://i-med.com.au/media-centre/jardine-matheson-holdings-limited-to-acquire-i-med-radiology-network" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">I-MED</a>, <a href="https://i-med.com.au/media-centre/i-med-acquires-statrad" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">I-MED/StatRad announcement</a>, <a href="https://www.permira.com/news-and-insights/announcements/permira-agrees-sale-of-i-med-radiology-network-to-jardine-matheson" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Permira</a>, <a href="https://www.auntminnie.com/practice-management/article/15619518/permira-buys-australian-radiology-firm-i-med" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, and the American Medical Association's practice-ownership survey as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/medical-practice-management/american-medical-association-cautions-radiology-groups-considering-corporate-investments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A reporting standard shouldn't depend on who owns the vendor"
          sub="See how AI CT reporting with radiologist-reviewed, ready-to-sign drafts keeps your reporting standard consistent, no matter who owns your teleradiology contracts."
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
              <Link to="/blog/radiology-outsourcing-gone-wrong/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">When Radiology Outsourcing Goes Wrong</div>
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

export default RadiologyPrivateEquityExitGlobalScale;
