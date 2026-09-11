import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MedicareNationalCoverageDeterminationReform = () => {
  const post = {
    title: 'A Bill to Speed Up Medicare Coverage Decisions Is Moving Through Congress',
    dateIso: '2026-09-11',
    date: 'September 11, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "A bipartisan bill sets Medicare's first deadlines for local coverage decisions — what slow NCD and LCD rulings cost radiology AI buyers today.",
  };

  const canonical = 'https://xaid.ai/blog/medicare-national-coverage-determination-reform';

  return (
    <>
      <Helmet defer={false}>
        <title>Medicare Coverage Decisions: H.R. 8500 Explained | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Medicare Coverage Decisions: H.R. 8500 Explained | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medicare Coverage Decisions: H.R. 8500 Explained | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": canonical,
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "medicare national coverage determination, local coverage determination, NCD LCD reform, H.R. 8500, radiology AI reimbursement"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a Medicare national coverage determination (NCD)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A national coverage determination is a nationwide decision CMS makes directly about whether and how Medicare pays for a specific item, service, or technology. By regulation, CMS has up to 6 months to decide requests that don't need an external technology assessment or advisory-committee review, or up to 9 months for ones that do — followed by a 30-day public comment period and up to 60 more days to issue a final decision, for a total of roughly 9 or 12 months."
              }
            },
            {
              "@type": "Question",
              "name": "How is a local coverage determination (LCD) different from an NCD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "LCDs are coverage decisions made by regional Medicare Administrative Contractors (MACs) rather than CMS itself, and they can vary from one MAC jurisdiction to the next. Unlike NCDs, LCDs currently carry no statutory deadline — a request from a physician group, device maker, or professional society can sit with a MAC indefinitely. H.R. 8500 is written specifically to close that gap."
              }
            },
            {
              "@type": "Question",
              "name": "What does H.R. 8500, the Timely Access to Coverage Decisions Act, actually require?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Introduced April 27, 2026 by Rep. Neal Dunn (R-FL) with Reps. Nanette Barragán (D-CA) and Claudia Tenney (R-NY), the bill would require MACs to determine within 60 days whether a new or reconsideration LCD request is complete, and to issue a final decision within one year. It also mandates published draft determinations with supporting evidence, public meetings, comment periods of at least 30 days, and a new process letting physicians, professional societies, device or test developers, and beneficiaries ask CMS to review a MAC's decision."
              }
            },
            {
              "@type": "Question",
              "name": "Why does the pace of Medicare coverage decisions matter to buyers evaluating AI-reporting technology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many AI-enabled imaging tools bill under codes that individual MACs decide whether to cover, jurisdiction by jurisdiction, through the LCD process — and a MAC can propose non-coverage with no fixed clock on when a final answer arrives. That uncertainty makes it hard for imaging centers and teleradiology groups to budget for and time technology purchases around Medicare reimbursement. AI-reporting tools that plug into existing, already-covered CPT reporting codes rather than requiring a new device-specific coverage decision carry less of this particular timing risk."
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
              A bill to speed up Medicare coverage decisions<br />
              <span className="text-white/60">is moving through Congress</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Radiology is among the specialties backing a bipartisan bill that would put a first-ever clock on local coverage decisions. The mechanism is different from prior-authorization or site-neutral-payment reform — but for anyone budgeting to adopt AI-reporting technology, the timeline problem it targets is just as real.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '83%', label: 'Medicare NCDs decided on time', sub: 'Oct 2012–Feb 2025, per GAO audit' },
            { stat: '351 days', label: 'Longest overrun on a late NCD', sub: 'among the 9 of 53 that missed deadline' },
            { stat: '60 days', label: 'New LCD completeness-review deadline', sub: 'under H.R. 8500 — today there is none' },
            { stat: '20', label: 'Medical groups pressing CMS on LCD gaps', sub: 'ACR-led coalition, March 2026' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A request goes in. Then, sometimes, nothing happens.
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On April 27, 2026, Rep. Neal Dunn (R-FL) introduced <a href="https://www.congress.gov/bill/119th-congress/house-bill/8500" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">H.R. 8500</a>, the Timely Access to Coverage Decisions Act of 2026 — sponsors' materials refer to it as the Ensuring Timely Access to Coverage Decisions Act — with Reps. Nanette Barragán (D-CA) and Claudia Tenney (R-NY) as cosponsors. The bill has been referred to the House Ways and Means and Energy and Commerce Committees.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Americans on Medicare too often face unnecessary delays and red tape in seeking coverage determinations for needed care," Dunn <a href="https://dunn.house.gov/news/documentsingle.aspx?DocumentID=526" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">said</a> when introducing the bill. Barragán framed the same problem from the beneficiary side: "Too often, seniors and people with disabilities face long delays or inconsistencies in Medicare covering innovative medical devices or treatments," she <a href="https://barragan.house.gov/2026/04/30/reps-barragan-and-dunn-introduce-bill-to-ensure-timely-access-to-care-for-medicare-patients/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">said</a> that could otherwise improve quality of life.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Radiology is among the specialties supporting the bill, alongside other specialty and patient-advocacy groups, according to <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiology-among-specialties-supporting-bill-speed-medicare-coverage-decisions" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. That's a distinct reimbursement lever from the ones already reshaping radiology budgets this year — <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="text-xaid-blue-strong underline underline-offset-2">prior-authorization reform</Link>, <Link to="/blog/site-neutral-payments-imaging/" className="text-xaid-blue-strong underline underline-offset-2">site-neutral payment cuts</Link>, and the add-on payments covered in xAID's <Link to="/blog/radiology-ai-access-disparities/" className="text-xaid-blue-strong underline underline-offset-2">look at AI access disparities</Link>. This one is about how long CMS itself takes to decide whether something is covered at all.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                NCDs already have a clock. LCDs don't — that's the point of this bill.
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Medicare coverage runs on two parallel tracks. A <strong>national coverage determination (NCD)</strong> is made by CMS itself and applies everywhere; a <strong>local coverage determination (LCD)</strong> is made independently by one of the regional <strong>Medicare Administrative Contractors (MACs)</strong> that process claims for a given multi-state jurisdiction, and can differ from one jurisdiction to the next.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CMS's own regulations already put a clock on the national track: up to 6 months to analyze a complete NCD request that doesn't need an external technology assessment or advisory-panel review, or 9 months for one that does, followed by a 30-day public comment period and up to 60 more days to finalize — roughly 9 or 12 months, start to finish, per the <a href="https://www.cms.gov/medicare/coverage/determination-process" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CMS coverage determination process</a>. A <a href="https://www.gao.gov/products/gao-25-107623" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">GAO audit published in September 2025</a> found CMS actually hit that clock on 83% of national coverage determinations (44 of 53) decided between October 2012 and February 2025 — but the other nine ran over by an extra 6 to 351 days, and auditors found CMS had no systematic way of tracking why those delays happened. GAO's fix: identify the causes of delay (CMS says that's now done) and publicly disclose how it prioritizes which requests to work first (still open as of January 2026).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The local track has no equivalent clock at all. A physician group, device maker, or professional society can ask a MAC for an LCD, and — absent the kind of deadline H.R. 8500 would create — there is no statutory point by which an answer is guaranteed. That gap is exactly what the bill is written to close, and it's a separate problem from how much Medicare pays once something is covered.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What H.R. 8500 would actually change
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Step in the LCD process</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Today</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Under H.R. 8500</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Completeness review of a new or reconsideration request</td>
                      <td className="py-3 pr-4">No statutory deadline</td>
                      <td className="py-3">60 days, with written notice of anything missing</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Final decision on a complete request</td>
                      <td className="py-3 pr-4">No statutory deadline</td>
                      <td className="py-3">1 year</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Draft determination &amp; public meeting</td>
                      <td className="py-3 pr-4">Varies by MAC — not consistently offered</td>
                      <td className="py-3">Mandatory; meeting within 60 days of the draft, with remote-participation option</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Public comment period</td>
                      <td className="py-3 pr-4">Varies by MAC</td>
                      <td className="py-3">At least 30 days, with required written responses</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Escalating a MAC's decision</td>
                      <td className="py-3 pr-4">No formal path</td>
                      <td className="py-3">Physicians, societies, developers, and beneficiaries can request CMS review</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Effective date of a final LCD</td>
                      <td className="py-3 pr-4">Set at MAC discretion</td>
                      <td className="py-3">At least 45 days after posting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                All of it phases in one year after enactment, per the <a href="https://www.congress.gov/bill/119th-congress/house-bill/8500/text" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">bill text</a> — so even a smooth path through Congress this session wouldn't change how a request filed today is handled.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why radiology specifically is at the table
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology's interest in LCD reform predates this bill. The American College of Radiology led a coalition of <a href="https://www.acr.org/News-and-Publications/2026/acr-leads-coalition-in-cms-lcd-policy-meeting" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">20 medical organizations in a March 19, 2026 meeting with CMS</a> — the first such meeting since June 2024 — to raise exactly the inconsistency H.R. 8500 targets: provider-engagement meetings piloted at some MACs (Noridian, and more recently NGS) aren't offered consistently across all MAC jurisdictions, and clinical input doesn't reliably shape LCDs before they're finalized. The timing lines up with CMS's own <a href="https://www.cms.gov/newsroom/blog/optimal-health-all-within-nations-health-long-term-care-systems-ccsq-fy2025-2028-strategic-roadmap" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FY2025–2028 CCSQ Strategic Roadmap</a>, released March 11, 2026, which lists modernizing both the NCD and LCD processes as one of five agency priorities.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                There's a live example of what's at stake. In early 2026, MAC National Government Services proposed an <a href="https://www.acr.org/News-and-Publications/2026/non-coverage-of-automated-brain-mri-ai-proposal" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">LCD denying coverage</a> for automated brain-MRI detection and quantification technologies (CPT codes 0865T and 0866T) across 10 northeastern and midwestern states, while a separate MAC, Celerian Group, had already implemented non-coverage for Ohio and Kentucky. Same technology category, same national Medicare program, two different regional answers — with no fixed date by which providers in the other jurisdictions would know where they'd land.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for anyone budgeting for AI-reporting technology
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Imaging centers and teleradiology groups evaluating AI vendors aren't just weighing accuracy and workflow fit — they're weighing when a purchase will pay for itself, and reimbursement timing is part of that math. Many AI-enabled imaging tools carry their own CPT or HCPCS codes, and whether a given MAC covers that code, on what terms, and by when is exactly the kind of question the LCD process answers — or, today, doesn't answer on any fixed schedule. A capital or staffing decision that depends on a coverage ruling that "may sit for a long time with no clear endpoint" is a decision made partly on faith.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a different exposure than the one xAID covered in its <Link to="/blog/radiology-ai-access-disparities/" className="text-xaid-blue-strong underline underline-offset-2">look at NTAP reimbursement gaps</Link>, where a technology is already covered but paid unevenly. Here, the technology may not have a clear coverage answer at all in a given MAC jurisdiction, for an unknown length of time. Buyers evaluating AI vendors right now have reason to ask two concrete questions: does this technology require its own new coverage determination, or does it bill through codes Medicare already covers as part of the standard interpretation and reporting workflow — and if it's the former, has the vendor tracked how that specific MAC jurisdiction has ruled.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                AI CT reporting built on foundation models is designed to sit inside the reporting workflow radiologists and referrers already bill under, rather than introduce a new device category that first needs its own NCD or LCD — which keeps a purchase decision independent of how quickly a given MAC jurisdiction moves. The other side of that same accountability question is who signs the report: xAID's in-house radiologist reviews every preliminary, and it arrives ready-to-sign, with the reading radiologist's signature the final step before it reaches a patient's chart.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is a Medicare national coverage determination (NCD)?',
                    a: "A national coverage determination is a nationwide decision CMS makes directly about whether and how Medicare pays for a specific item, service, or technology. By regulation, CMS has up to 6 months to decide requests that don't need an external technology assessment or advisory-committee review, or up to 9 months for ones that do — followed by a 30-day public comment period and up to 60 more days to issue a final decision, for a total of roughly 9 or 12 months.",
                  },
                  {
                    q: 'How is a local coverage determination (LCD) different from an NCD?',
                    a: 'LCDs are coverage decisions made by regional Medicare Administrative Contractors (MACs) rather than CMS itself, and they can vary from one MAC jurisdiction to the next. Unlike NCDs, LCDs currently carry no statutory deadline — a request from a physician group, device maker, or professional society can sit with a MAC indefinitely. H.R. 8500 is written specifically to close that gap.',
                  },
                  {
                    q: 'What does H.R. 8500, the Timely Access to Coverage Decisions Act, actually require?',
                    a: "Introduced April 27, 2026 by Rep. Neal Dunn (R-FL) with Reps. Nanette Barragán (D-CA) and Claudia Tenney (R-NY), the bill would require MACs to determine within 60 days whether a new or reconsideration LCD request is complete, and to issue a final decision within one year. It also mandates published draft determinations with supporting evidence, public meetings, comment periods of at least 30 days, and a new process letting physicians, professional societies, device or test developers, and beneficiaries ask CMS to review a MAC's decision.",
                  },
                  {
                    q: 'Why does the pace of Medicare coverage decisions matter to buyers evaluating AI-reporting technology?',
                    a: "Many AI-enabled imaging tools bill under codes that individual MACs decide whether to cover, jurisdiction by jurisdiction, through the LCD process — and a MAC can propose non-coverage with no fixed clock on when a final answer arrives. That uncertainty makes it hard for imaging centers and teleradiology groups to budget for and time technology purchases around Medicare reimbursement. AI-reporting tools that plug into existing, already-covered CPT reporting codes rather than requiring a new device-specific coverage decision carry less of this particular timing risk.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiology-among-specialties-supporting-bill-speed-medicare-coverage-decisions" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; bill text and status via <a href="https://www.congress.gov/bill/119th-congress/house-bill/8500" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Congress.gov, H.R. 8500</a>; sponsor statements via <a href="https://dunn.house.gov/news/documentsingle.aspx?DocumentID=526" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Rep. Dunn's office</a> and <a href="https://barragan.house.gov/2026/04/30/reps-barragan-and-dunn-introduce-bill-to-ensure-timely-access-to-care-for-medicare-patients/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Rep. Barragán's office</a>; NCD timelines and audit findings via <a href="https://www.cms.gov/medicare/coverage/determination-process" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS</a> and the <a href="https://www.gao.gov/products/gao-25-107623" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">GAO (GAO-25-107623, Sept. 2025)</a>; ACR coalition meeting and CCSQ roadmap via <a href="https://www.acr.org/News-and-Publications/2026/acr-leads-coalition-in-cms-lcd-policy-meeting" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR</a> and <a href="https://www.cms.gov/newsroom/blog/optimal-health-all-within-nations-health-long-term-care-systems-ccsq-fy2025-2028-strategic-roadmap" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS</a>; brain-MRI AI non-coverage proposal via <a href="https://www.acr.org/News-and-Publications/2026/non-coverage-of-automated-brain-mri-ai-proposal" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Skip the coverage guesswork on your reporting workflow"
          sub="xAID's AI CT reporting bills through the studies you already do — no new device-specific coverage determination to wait on. Try it on 5 free studies."
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
              <Link to="/blog/radiology-ai-access-disparities/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Who Gets Radiology AI? Reimbursement Design and Access Disparities</div>
              </Link>
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained</div>
              </Link>
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiology AI Vendor Evaluation Checklist</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MedicareNationalCoverageDeterminationReform;
