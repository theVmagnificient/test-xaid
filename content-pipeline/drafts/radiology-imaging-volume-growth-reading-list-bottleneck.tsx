import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyImagingVolumeGrowthReadingListBottleneck = () => {
  const post = {
    title: "RadNet's Volume Jumped 20%. Did Turnaround Keep Up?",
    dateIso: '2026-11-13',
    date: 'November 13, 2026',
    category: 'Health Economics',
    readingTime: 7,
    description: "RadNet's advanced imaging volume grew 19.9% in Q3 2026, same-center growth was only 8.9%. What's driving the gap, and what it means for turnaround time.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>RadNet's Volume Jumped 20%. Did Turnaround Keep Up? | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-imaging-volume-growth-reading-list-bottleneck" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RadNet's Volume Jumped 20%. Did Turnaround Keep Up? | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RadNet's Volume Jumped 20%. Did Turnaround Keep Up? | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-imaging-volume-growth-reading-list-bottleneck" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-imaging-volume-growth-reading-list-bottleneck",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology imaging volume growth, advanced imaging volume, report turnaround time, radiologist capacity, RadNet earnings"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much did RadNet's advanced imaging volume grow in Q3 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RadNet's aggregate advanced imaging (MRI, CT and PET/CT) procedure volume rose 19.9% year over year in Q3 2026, versus 8.9% on a same-center basis. By modality, aggregate volume grew 18.3% for MRI, 22.0% for CT and 30.4% for PET/CT. Advanced imaging rose from 28.2% to 30.6% of RadNet's total procedural mix, a 232-basis-point shift, on total company revenue of $638.3 million, up 22.1% year over year."
              }
            },
            {
              "@type": "Question",
              "name": "Why is there a gap between RadNet's aggregate and same-center imaging volume growth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RadNet's own earnings release attributes growth to new center openings, tuck-in acquisitions, the mix shift toward advanced imaging and health-system joint-venture expansion, not just existing centers running more efficiently. On a same-center basis, Q3 2026 growth was far smaller: MRI volume rose 8.2%, CT rose 10.2% and PET/CT rose 8.2%, compared with 18.3%, 22.0% and 30.4% in aggregate. A large share of the aggregate figure comes from the 10 new imaging centers RadNet opened in 2026 and its growing health-system partnerships, not from existing radiologists reading more studies per hour."
              }
            },
            {
              "@type": "Question",
              "name": "What is the ONRAD acquisition and why does it matter for RadNet's efficiency story?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ONRAD is a U.S. teleradiology and in-hospital radiology staffing provider with more than 130 contracted radiologists serving over 270 customers. RadNet agreed to acquire it for $350 million in cash plus 5 million shares of RadNet stock upfront, plus up to $210 million in contingent payments, expecting it to add $190-200 million in revenue and $60-65 million in adjusted EBITDA in its first year. The deal, expected to close in early 2027, shows that even as RadNet credits efficiency gains for not needing to grow its own radiology headcount as fast as volume, it is still paying a large sum to acquire someone else's reading capacity wholesale."
              }
            },
            {
              "@type": "Question",
              "name": "Does report turnaround time scale with imaging volume growth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not automatically. RadNet's Q3 2026 earnings materials report volume and revenue growth but no turnaround-time metric, and the company's own CFO acknowledged on the earnings call that a radiologist shortage is lengthening report turnaround times across both hospital-based and outpatient radiology industrywide. Volume that grows faster than reading capacity does not disappear; it shows up either as a longer wait between scan and report or as spending (hiring, acquisitions, locums) to keep pace. AI-assisted report drafting is one way to add reading throughput without that spending, but a volume increase on its own is not evidence that turnaround held steady."
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
                Health Economics
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              RadNet's imaging volume jumped 20%.<br />
              <span className="text-white/60">Did report turnaround keep up?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              RadNet's Q3 2026 earnings credited "efficiencies" for a near-20% jump in advanced imaging volume. The underlying numbers tell a more complicated story about where that growth actually comes from — and they leave the one question that matters for every reading list unanswered: does turnaround time keep up, or does volume just pile up somewhere downstream?
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '19.9%', label: 'Aggregate volume growth', sub: 'Advanced imaging, Q3 2026 YoY' },
            { stat: '8.9%', label: 'Same-center growth', sub: 'vs 19.9% aggregate' },
            { stat: '232 bps', label: 'Advanced-imaging mix gain', sub: '28.2% → 30.6% of procedures' },
            { stat: '$350M', label: 'ONRAD upfront cash', sub: '+ 5M RadNet shares' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What RadNet actually reported
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RadNet posted <a href="https://www.sec.gov/Archives/edgar/data/0000790526/000168316826008404/radnet_ex9901.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">record Q3 2026 results</a>: total company revenue of <strong>$638.3 million</strong>, up <strong>22.1%</strong> from $522.9 million a year earlier, and adjusted EBITDA of <strong>$105.0 million</strong>, up 23.8%. As <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/radnet-sees-advanced-imaging-volumes-leap-nearly-20-driven-key-efficiencies" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>, the headline driver was advanced-imaging volume growth, which the company attributed in part to operating efficiencies.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In aggregate, advanced imaging (MRI, CT and PET/CT combined) procedure volume rose <strong>19.9%</strong> year over year, with CT up 22.0%, MRI up 18.3% and PET/CT up 30.4%. That mix shift moved advanced imaging from <strong>28.2%</strong> of RadNet's total procedural volume in Q3 2025 to <strong>30.6%</strong> in Q3 2026 — a <strong>232-basis-point</strong> gain in the company's highest-margin service lines, exactly the figures behind this quarter's "radiology imaging volume growth" headlines.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a real number, and a real result for RadNet's shareholders. The question worth asking is what's actually inside it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The gap the headline skips
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RadNet's own earnings release is specific about what drove the quarter, and "efficiency" is only one item on a longer list: results were "driven by continued initiatives to create and fill capacity at existing imaging centers, new center openings, the continued shift in the business mix towards advanced imaging, tuck-in acquisitions, improved reimbursement from commercial payors, [and] the expansion of our health system joint ventures," according to the <a href="https://www.sec.gov/Archives/edgar/data/0000790526/000168316826008404/radnet_ex9901.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">SEC filing</a> of the release.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The same filing breaks out same-center volume — procedures at centers that were part of RadNet in both Q3 2025 and Q3 2026, stripping out new sites and acquisitions. On that basis, growth is far smaller: MRI volume rose <strong>8.2%</strong>, CT rose <strong>10.2%</strong> and PET/CT rose <strong>8.2%</strong>, against aggregate gains of 18.3%, 22.0% and 30.4%. PET/CT shows the widest split of all — a 30.4% aggregate jump next to an 8.2% same-center jump. Most of that modality's "growth" happened at centers that didn't exist, or weren't RadNet's, a year ago.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that makes the 19.9% figure wrong. It does mean a meaningful share of it is footprint growth — RadNet opened 10 de novo imaging centers in 2026, ahead of its original guidance of seven, and now holds 161 of its 439 centers (about 37%) inside health-system joint ventures, according to the company's <a href="https://www.fool.com/earnings/call-transcripts/2026/11/09/radnet-rdnt-q3-2026-earnings-call-transcript/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Q3 2026 earnings call</a> — rather than existing radiologists reading proportionally more studies per hour. "Efficiencies" and "more locations" are not the same growth driver, even when they land in the same quarterly print.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Modality</th>
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Aggregate growth</th>
                      <th className="text-left py-3 text-[#0D0D0D] font-medium">Same-center growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">MRI</td>
                      <td className="py-3 pr-4 text-[#444] font-light">+18.3%</td>
                      <td className="py-3 text-[#444] font-light">+8.2%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">CT</td>
                      <td className="py-3 pr-4 text-[#444] font-light">+22.0%</td>
                      <td className="py-3 text-[#444] font-light">+10.2%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">PET/CT</td>
                      <td className="py-3 pr-4 text-[#444] font-light">+30.4%</td>
                      <td className="py-3 text-[#444] font-light">+8.2%</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Advanced imaging (combined)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">+19.9%</td>
                      <td className="py-3 text-[#444] font-light">+8.9%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Efficiency has a price tag: $350 million in cash and stock for 130 radiologists
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On the earnings call, RadNet's CFO Mark Stolper described the upside of productivity gains in blunt terms: they let the company "continue to grow the business and not have to continue to grow the radiology component or hire as many radiologists going forward, which will drive margin." Taken alone, that's a story about doing more with the same reading staff.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It sits awkwardly next to a separate, pending deal RadNet announced around the same reporting period: the acquisition of <a href="https://www.medtechdive.com/news/radnet-expands-into-teleradiology-with-350m-onrad-deal/872990/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ONRAD</a>, a U.S. teleradiology and in-hospital staffing provider with more than 130 contracted radiologists serving over 270 customers, for $350 million in cash plus 5 million shares of RadNet stock upfront, plus up to $210 million in contingent, earnout-based payments. RadNet expects the deal — its first move into a new "Radiology Professional Services" segment — to add $190-200 million in revenue and $60-65 million in adjusted EBITDA in its first year, and to close in early 2027.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Both things can be true at once, and they are: internal productivity tools can reduce how many <em>new</em> radiologists a given volume increase requires, while the company still spends $350 million in cash plus stock buying an entire book of someone else's reading capacity. The second number is the more honest admission that reading capacity, not scanner capacity, is the resource actually in short supply — "efficiency" lowers the price of growth, it doesn't eliminate the need to pay for more hands on the worklist.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The question the earnings release doesn't answer
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RadNet's Q3 2026 materials report volume, mix and revenue in detail. They do not report a turnaround-time metric — how long it takes a completed scan to become a signed report in a referring physician's hands. That's a notable omission, because on the same call, Stolper acknowledged the industrywide pressure working against it: "whether you're talking about hospital-based radiology or outpatient-based radiology," he said, "because of the shortage of radiologists, you're seeing a lengthening of turnaround time."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That shortage is uneven rather than uniform. U.S. radiologist attrition — the share of radiologists leaving the workforce each year — more than doubled from <strong>1.1%</strong> in 2014 to <strong>2.5%</strong> in 2022, according to the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR Bulletin's 2026 workforce update</a>, citing Harvey L. Neiman Health Policy Institute research. Separately, a 2026 analysis by radiology-jobs platform RadBoard found that a large share of open radiologist postings are reposts of the same unfilled role, concentrated in lower-population markets — evidence that the real capacity gap is geographic and stubborn rather than a single national number. Put those two facts together and a volume surge like RadNet's doesn't land evenly: it lands hardest wherever the new center or the newly acquired reading volume happens to sit relative to available radiologists in that market, which a same-center-vs-aggregate split can't fully capture.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this is a flaw unique to RadNet. It's the generic shape of the problem: volume that outruns reading capacity in any given market doesn't disappear — it shows up as a longer wait between scan and report, as overtime and locum spending, or as a company writing a nine-figure check to buy someone else's radiologists. A 20% volume headline that doesn't also report turnaround time is an incomplete answer to the question referring physicians and patients actually care about.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Not just a RadNet-sized problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                RadNet can treat the gap between volume growth and radiologist supply as a solvable budget line — open de novo centers, expand joint ventures, and when internal capacity still falls short, write a $350 million cash-plus-stock check for someone else's reading staff. Most outpatient imaging centers, hospital radiology departments and smaller teleradiology groups facing the same advanced-imaging demand growth don't have a $350 million-plus acquisition budget. For them, the same math shows up directly on the worklist: either turnaround time stretches, or they find another way to add reading throughput without adding headcount one radiologist at a time.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                AI-assisted CT reporting is one way to add reading throughput without an M&A budget: a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation model drafts a structured, comprehensive report</Link> from the images, xAID's in-house radiologist reviews every preliminary, and the result reaches the reading radiologist ready-to-sign — final signature stays with them. It doesn't buy capacity the way a $350 million cash-plus-stock acquisition does; it converts existing radiologist hours from drafting into reviewing, which is the lever available to the imaging providers who don't have RadNet's acquisition budget but face the same <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">radiologist-shortage math</Link>. Whether that's enough depends on tracking the metric this earnings release left out: <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">turnaround time</Link>, not just volume.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How much did RadNet's advanced imaging volume grow in Q3 2026?",
                    a: "RadNet's aggregate advanced imaging (MRI, CT and PET/CT) procedure volume rose 19.9% year over year in Q3 2026, versus 8.9% on a same-center basis. By modality, aggregate volume grew 18.3% for MRI, 22.0% for CT and 30.4% for PET/CT. Advanced imaging rose from 28.2% to 30.6% of RadNet's total procedural mix, a 232-basis-point shift, on total company revenue of $638.3 million, up 22.1% year over year.",
                  },
                  {
                    q: "Why is there a gap between RadNet's aggregate and same-center imaging volume growth?",
                    a: "RadNet's own earnings release attributes growth to new center openings, tuck-in acquisitions, the mix shift toward advanced imaging and health-system joint-venture expansion, not just existing centers running more efficiently. On a same-center basis, Q3 2026 growth was far smaller: MRI volume rose 8.2%, CT rose 10.2% and PET/CT rose 8.2%, compared with 18.3%, 22.0% and 30.4% in aggregate. A large share of the aggregate figure comes from the 10 new imaging centers RadNet opened in 2026 and its growing health-system partnerships, not from existing radiologists reading more studies per hour.",
                  },
                  {
                    q: "What is the ONRAD acquisition and why does it matter for RadNet's efficiency story?",
                    a: "ONRAD is a U.S. teleradiology and in-hospital radiology staffing provider with more than 130 contracted radiologists serving over 270 customers. RadNet agreed to acquire it for $350 million in cash plus 5 million shares of RadNet stock upfront, plus up to $210 million in contingent payments, expecting it to add $190-200 million in revenue and $60-65 million in adjusted EBITDA in its first year. The deal, expected to close in early 2027, shows that even as RadNet credits efficiency gains for not needing to grow its own radiology headcount as fast as volume, it is still paying a large sum to acquire someone else's reading capacity wholesale.",
                  },
                  {
                    q: "Does report turnaround time scale with imaging volume growth?",
                    a: "Not automatically. RadNet's Q3 2026 earnings materials report volume and revenue growth but no turnaround-time metric, and the company's own CFO acknowledged on the earnings call that a radiologist shortage is lengthening report turnaround times across both hospital-based and outpatient radiology industrywide. Volume that grows faster than reading capacity does not disappear; it shows up either as a longer wait between scan and report or as spending (hiring, acquisitions, locums) to keep pace. AI-assisted report drafting is one way to add reading throughput without that spending, but a volume increase on its own is not evidence that turnaround held steady.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: RadNet Q3 2026 financial results, as <a href="https://www.sec.gov/Archives/edgar/data/0000790526/000168316826008404/radnet_ex9901.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">filed with the SEC</a> and <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/radnet-sees-advanced-imaging-volumes-leap-nearly-20-driven-key-efficiencies" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">reported by Radiology Business</a>; the <a href="https://www.fool.com/earnings/call-transcripts/2026/11/09/radnet-rdnt-q3-2026-earnings-call-transcript/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Q3 2026 earnings call transcript</a>; the ONRAD acquisition as <a href="https://www.medtechdive.com/news/radnet-expands-into-teleradiology-with-350m-onrad-deal/872990/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">reported by MedTech Dive</a>; and the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR Bulletin's 2026 radiologist workforce update</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Add reading throughput without an acquisition budget"
          sub="AI-assisted CT reporting absorbs rising advanced-imaging volume without adding to your radiologists' workload. Try it on 5 free studies."
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
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyImagingVolumeGrowthReadingListBottleneck;
