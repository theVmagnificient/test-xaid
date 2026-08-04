import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const CtPriceTransparencySenateBill = () => {
  const post = {
    title: 'Congress Wants CT Prices Posted. Can Imaging Centers Hold Margin?',
    dateIso: '2026-07-26',
    date: 'July 26, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: 'The Patients Deserve Price Tags Act cleared the Senate HELP Committee 21-1, adding CT price disclosure. What it means for posted prices and margins.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CT Price Transparency Bill: What It Means for Centers | xAID</title>
        <meta name="description" content="The Patients Deserve Price Tags Act cleared the Senate HELP Committee 21-1, adding CT price disclosure. What it means for posted prices and margins." />
        <link rel="canonical" href="https://xaid.ai/blog/ct-price-transparency-senate-bill/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CT Price Transparency Bill: What It Means for Centers | xAID" />
        <meta property="og:description" content="The Patients Deserve Price Tags Act cleared the Senate HELP Committee 21-1, adding CT price disclosure. What it means for posted prices and margins." />
        <meta property="og:url" content="https://xaid.ai/blog/ct-price-transparency-senate-bill/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CT Price Transparency Bill: What It Means for Centers | xAID" />
        <meta name="twitter:description" content="The Patients Deserve Price Tags Act cleared the Senate HELP Committee 21-1, adding CT price disclosure. What it means for posted prices and margins." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ct-price-transparency-senate-bill/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ct-price-transparency-senate-bill/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "hospital price transparency, imaging price transparency, CT scan price, Patients Deserve Price Tags Act, shoppable services, AI CT reporting cost"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Patients Deserve Price Tags Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Patients Deserve Price Tags Act (S. 2355) is a bipartisan Senate bill from Sen. Roger Marshall (R-KS) and Sen. John Hickenlooper (D-CO) that would expand federal price-disclosure requirements to hospitals, health insurers, clinical laboratories, ambulatory surgical centers, and imaging providers. It cleared the Senate Health, Education, Labor and Pensions (HELP) Committee by a 21-1 vote on July 22, 2026, and now heads to the full Senate."
              }
            },
            {
              "@type": "Question",
              "name": "Does the price transparency bill apply to CT scans and outpatient imaging centers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The bill's disclosure mandate names imaging providers alongside hospitals, labs, and ambulatory surgical centers, requiring standard charges, discounted cash prices, and payer-specific negotiated rates to be posted in accessible formats. CT is one of the highest-volume shoppable services this would cover."
              }
            },
            {
              "@type": "Question",
              "name": "Why do hospital groups oppose the bill?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The American Hospital Association argues the bill adds administrative burden without proportionate benefit, and points out that of more than 7,500 compliance reviews CMS has already opened under the existing 2021 hospital price transparency rule, fewer than 0.01% resulted in a civil monetary penalty — evidence, in the AHA's view, that current enforcement is already prompting hospitals to fix compliance gaps without new statutory penalty tiers."
              }
            },
            {
              "@type": "Question",
              "name": "How can an imaging center post a competitive CT price without losing money on reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Once a CT price is posted publicly, it becomes directly comparable to nearby centers, and radiologist reporting cost and turnaround time are two of the largest controllable levers behind that number. AI-assisted CT reporting — where a structured draft report is produced quickly and reviewed by a radiologist before delivery — can compress per-study reporting cost and turnaround relative to traditional teleradiology, giving a center more room to hold a lower posted price without cutting into margin."
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
              Congress wants CT prices posted.<br />
              <span className="text-white/60">Can imaging centers hold margin?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A bipartisan Senate bill just cleared committee by a 21-1 vote and would put imaging-center CT prices next to every competitor's, in public, for the first time. That turns the posted price into a marketing number — and puts pressure on the one line item behind it that a center can actually control: what it costs to get a CT report out the door.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: 'S. 2355', label: 'Patients Deserve Price Tags Act', sub: 'Marshall (R-KS) & Hickenlooper (D-CO)' },
                { stat: '21–1', label: 'Senate HELP Committee vote', sub: 'advanced July 22, 2026' },
                { stat: '$200+', label: 'CT price swing, same metro area', sub: 'even among top-rated hospitals' },
                { stat: '<0.01%', label: 'Of CMS price-transparency reviews', sub: 'resulted in a penalty (AHA)' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1">{s.label}</div>
                  <div className="text-white/60 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the bill actually does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 22, 2026, the Senate Health, Education, Labor and Pensions (HELP) Committee voted <a href="https://www.help.senate.gov/hearings/the-following-agenda-to-be-considered-07-22-2026" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">21-1</a> to advance the <strong>Patients Deserve Price Tags Act (S. 2355)</strong>, a bipartisan bill from Sen. Roger Marshall (R-KS) and Sen. John Hickenlooper (D-CO), first introduced in July 2025. Sen. Rand Paul (R-KY) cast the lone no vote; Sen. Lisa Murkowski (R-AK) did not vote. It was one of several health-affordability bills the committee moved that day, as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/bill-requiring-greater-imaging-price-transparency-advances-senate" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>. The bill now moves to the full Senate, and would need to pass both chambers before the current Congress ends on January 3, 2027, to become law.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Per <a href="https://chir.georgetown.edu/unpacking-the-price-transparency-provisions-of-the-patients-deserve-price-tags-act/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Georgetown's Center on Health Insurance Reforms</a>, the bill expands federal disclosure requirements to a wider set of care sites: hospitals, health insurers, clinical laboratories, ambulatory surgical centers, and <strong>imaging providers</strong> would all be required to publicly post standard charges, discounted cash prices, and payer-specific negotiated rates in accessible formats, plus ownership information. It also raises the stakes for noncompliance — Georgetown's analysis notes the current maximum hospital penalty (about $2 million a year for a 550-bed hospital) would rise to a $5 million base penalty, with an additional $5–10 million for knowing, willful violations, alongside a requirement that regulators audit at least 20 issuers and 200 group health plans annually.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Sen. Marshall has estimated the broader bill could save families as much as <strong>$1,000 a month</strong> on health costs — his office's projection, not an independently audited figure, and one that spans all the services the bill covers, not imaging alone. Imaging is nonetheless one of the clearest test cases, because CT and MRI are exactly the kind of scheduled, "shoppable" services price-transparency rules are designed to expose.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why CT is the test case — and what the price chaos looks like today
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CT pricing already varies enormously for an identical study, which is exactly the pattern transparency rules are meant to surface. A 2025 <a href="https://mihpc.org/wp-content/uploads/2025/03/Price-Transparency-in-Hospital-Services-Series-CT-Scans-v2.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Michigan Health Purchasers Coalition analysis</a> of commercial payer rates for a CT brain scan without contrast followed by contrast material and further sections (CPT 70470), built on Turquoise Health data, found a <strong>$204 gap</strong> between the lowest- and highest-priced hospital in the Grand Rapids-Wyoming area and a <strong>$218 gap</strong> in the Flint area. The variation shows up even inside a single health system: within Henry Ford Health, the same CPT code ranged from $131 to $249 across facilities — a swing of more than $100 for a scan with the same code, at hospitals under one ownership umbrella.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is the environment the Patients Deserve Price Tags Act is aimed at. Once a center's CT cash price and negotiated rates sit next to a competitor's in a standardized, machine-readable format, a patient comparing the two doesn't need to understand the underlying cost structure — only the number. For outpatient imaging centers competing on posted price, that number stops being an internal decision and becomes a public one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The pushback, and why enforcement is the real argument
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The bill isn't uncontested. The <a href="https://www.aha.org/testimony/2026-07-21-aha-statement-senate-help-committee-proposed-healthcare-bills" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Hospital Association</a> told the HELP Committee that, despite changes made in a manager's amendment, it still has "serious concerns" that the bill adds administrative burden without meaningfully improving the clarity of the price information patients actually receive. The AHA also pointed to CMS's existing 2021 hospital price-transparency rule as evidence the current enforcement approach already works: of more than 7,500 compliance reviews CMS has opened, fewer than 0.01% have resulted in a civil monetary penalty, which the AHA reads as hospitals largely self-correcting once flagged.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Supporters see the same enforcement data differently — as proof the existing penalty structure is too weak to change behavior, which is exactly why the bill raises the penalty ceiling and adds mandatory annual audits. <a href="https://www.familiesusa.org/press-releases/consumer-groups-applaud-patients-deserve-price-tags-act-and-other-health-affordability-bills-passing-senate-help-committee/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Consumer advocacy groups including Families USA</a> applauded the committee vote on those grounds. Either way, a 21-1 committee vote means this isn't a fringe proposal — imaging providers should plan as if some version of expanded, better-enforced price disclosure is coming, on a timeline measured in a small number of budget cycles rather than never.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The margin problem hiding behind a posted CT price
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A posted price only helps a center compete if it can actually afford to hold that number. For an outpatient imaging center, the cost of getting a CT study read and reported — not the scanner time itself — is one of the largest controllable levers behind the final price, and it varies sharply by staffing model:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Reporting model</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Typical cost per CT read</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">Typical turnaround</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">In-house radiologist (FTE)</td>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">~$30–$75 per study, before overhead, at 10,000–15,000 studies/year</td>
                      <td className="text-[#444] text-sm font-light py-3 align-top">Same day, business hours; after-hours needs separate coverage</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">Traditional teleradiology, routine</td>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">~$40–$80 per study</td>
                      <td className="text-[#444] text-sm font-light py-3 align-top">36–72 hrs typical outpatient turnaround</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">Traditional teleradiology, after-hours/stat</td>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">~$80–$200+ per study, surcharge-priced</td>
                      <td className="text-[#444] text-sm font-light py-3 align-top">Faster, at a premium</td>
                    </tr>
                    <tr>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">AI-assisted reporting (e.g. xAID)</td>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">Per-study, narrow-AI-rate pricing, no after-hours surcharge</td>
                      <td className="text-[#444] text-sm font-light py-3 align-top">~2–12 hrs, 24/7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                See our earlier breakdowns of <Link to="/blog/ct-radiology-coverage-costs-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT coverage cost models</Link> and <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT turnaround-time benchmarks</Link> for the full figures behind this table. The math that matters for a center staring at a public price comparison: compressing the reporting line — cost per read and the after-hours surcharge that comes with faster turnaround — is one of the few places a center can defend a competitive posted CT price without simply eating the difference in margin.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID doesn't set a center's posted price and takes no position on the legislation itself. What it changes is the cost structure behind that price: a foundation-model-generated CT report drafted quickly, reviewed in-house before delivery, and handed back ready-to-sign — narrowing the gap between a fast, defensible turnaround and a surcharge-free reporting cost. As price transparency rules push CT prices into public view, the centers best positioned to hold a competitive number are the ones that have already taken cost and delay out of the reporting step, not just the scanner.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the Patients Deserve Price Tags Act?',
                    a: 'The Patients Deserve Price Tags Act (S. 2355) is a bipartisan Senate bill from Sen. Roger Marshall (R-KS) and Sen. John Hickenlooper (D-CO) that would expand federal price-disclosure requirements to hospitals, health insurers, clinical laboratories, ambulatory surgical centers, and imaging providers. It cleared the Senate Health, Education, Labor and Pensions (HELP) Committee by a 21-1 vote on July 22, 2026, and now heads to the full Senate.',
                  },
                  {
                    q: 'Does the price transparency bill apply to CT scans and outpatient imaging centers?',
                    a: "Yes. The bill's disclosure mandate names imaging providers alongside hospitals, labs, and ambulatory surgical centers, requiring standard charges, discounted cash prices, and payer-specific negotiated rates to be posted in accessible formats. CT is one of the highest-volume shoppable services this would cover.",
                  },
                  {
                    q: 'Why do hospital groups oppose the bill?',
                    a: "The American Hospital Association argues the bill adds administrative burden without proportionate benefit, and points out that of more than 7,500 compliance reviews CMS has already opened under the existing 2021 hospital price transparency rule, fewer than 0.01% resulted in a civil monetary penalty — evidence, in the AHA's view, that current enforcement is already prompting hospitals to fix compliance gaps without new statutory penalty tiers.",
                  },
                  {
                    q: 'How can an imaging center post a competitive CT price without losing money on reporting?',
                    a: 'Once a CT price is posted publicly, it becomes directly comparable to nearby centers, and radiologist reporting cost and turnaround time are two of the largest controllable levers behind that number. AI-assisted CT reporting — where a structured draft report is produced quickly and reviewed by a radiologist before delivery — can compress per-study reporting cost and turnaround relative to traditional teleradiology, giving a center more room to hold a lower posted price without cutting into margin.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/bill-requiring-greater-imaging-price-transparency-advances-senate" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; committee vote via <a href="https://www.help.senate.gov/hearings/the-following-agenda-to-be-considered-07-22-2026" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">U.S. Senate HELP Committee</a>; bill provisions via <a href="https://chir.georgetown.edu/unpacking-the-price-transparency-provisions-of-the-patients-deserve-price-tags-act/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Georgetown Center on Health Insurance Reforms</a>; hospital-group position via <a href="https://www.aha.org/testimony/2026-07-21-aha-statement-senate-help-committee-proposed-healthcare-bills" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Hospital Association</a>; consumer-group reaction via <a href="https://www.familiesusa.org/press-releases/consumer-groups-applaud-patients-deserve-price-tags-act-and-other-health-affordability-bills-passing-senate-help-committee/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Families USA</a>; CT price-variation data via the <a href="https://mihpc.org/wp-content/uploads/2025/03/Price-Transparency-in-Hospital-Services-Series-CT-Scans-v2.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Michigan Health Purchasers Coalition</a> (Turquoise Health data). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Hold a competitive CT price without losing margin on reporting."
          sub="See how AI-assisted, radiologist-reviewed CT reporting compresses cost per read and turnaround. Try it on 5 free studies."
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
              <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Coverage Costs</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Radiology Coverage Costs in 2026</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Turnaround Time</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks</div>
              </Link>
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments and Imaging Reimbursement</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CtPriceTransparencySenateBill;
