import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const WiserPriorAuthorizationRadiology = () => {
  const post = {
    title: "WISeR Prior Authorization Pilot Survives Senate Repeal Vote",
    dateIso: '2026-07-21',
    date: 'July 21, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "The Senate voted 46-50 to keep CMS's WISeR Medicare prior authorization pilot alive in six states. What survives, what's still pending in the House, and what it means for imaging denial risk.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>WISeR Prior Authorization Survives Senate Vote | xAID</title>
        <meta name="description" content="Senate Democrats' bid to repeal CMS's WISeR Medicare prior authorization pilot failed 46-50 — here's what it means for imaging in six pilot states." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="WISeR Prior Authorization Survives Senate Vote | xAID" />
        <meta property="og:description" content="Senate Democrats' bid to repeal CMS's WISeR Medicare prior authorization pilot failed 46-50 — here's what it means for imaging in six pilot states." />
        <meta property="og:url" content="https://xaid.ai/blog/wiser-prior-authorization-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WISeR Prior Authorization Survives Senate Vote | xAID" />
        <meta name="twitter:description" content="Senate Democrats' bid to repeal CMS's WISeR Medicare prior authorization pilot failed 46-50 — here's what it means for imaging in six pilot states." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/wiser-prior-authorization-radiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/wiser-prior-authorization-radiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "wiser prior authorization, WISeR model Medicare, prior authorization pilot radiology, CMS prior authorization AI, Medicare prior authorization imaging"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the WISeR model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "WISeR (Wasteful and Inappropriate Service Reduction Model) is a CMS Innovation Center demonstration that requires prior authorization or prepayment review for 17 selected Medicare Part B services — including several radiology and interventional radiology procedures — in six states: New Jersey, Ohio, Oklahoma, Texas, Arizona and Washington. It launched January 1, 2026, and is scheduled to run through December 31, 2031. Participating contractors use AI-supported review alongside licensed clinicians to make coverage determinations."
              }
            },
            {
              "@type": "Question",
              "name": "Did Congress vote to end WISeR, and did it pass?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Senate Democrats led by Ron Wyden, Maria Cantwell, Richard Blumenthal and Kirsten Gillibrand introduced a Congressional Review Act resolution to overturn WISeR after the Government Accountability Office ruled on May 12, 2026, that the model qualifies as a rule subject to congressional review. The Senate voted 46-50 along party lines on July 16, 2026, and the resolution failed to advance, meaning WISeR continues unchanged."
              }
            },
            {
              "@type": "Question",
              "name": "Which imaging and interventional radiology procedures need prior authorization under WISeR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CMS selected 17 services it says carry a higher risk of waste or limited clinical benefit for some patients. The list includes radiology-adjacent procedures such as image-guided spinal decompression, epidural steroid injections for pain management and percutaneous vertebral augmentation (kyphoplasty and vertebroplasty), alongside skin and tissue substitutes, electrical nerve stimulator implants, cervical fusion and knee arthroscopy for osteoarthritis."
              }
            },
            {
              "@type": "Question",
              "name": "How fast do WISeR contractors have to decide on a request?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CMS's stated goal is a decision within 72 hours for standard requests and 48 hours for expedited ones. Facilities that don't submit a prior authorization request instead face a post-service, pre-payment review without that turnaround guarantee."
              }
            },
            {
              "@type": "Question",
              "name": "Is there another effort in Congress to stop WISeR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a separate and still-pending track. In June 2026, the House Appropriations Committee unanimously adopted an amendment to its fiscal year 2027 spending bill that would block funding for WISeR, or a similar prior authorization model, in traditional Medicare. That is a funding restriction rather than a repeal, and it still needs full House and Senate passage — a different, and so far unresolved, path from the Senate's failed Congressional Review Act vote."
              }
            },
            {
              "@type": "Question",
              "name": "What does the failed repeal mean for imaging practices in the pilot states?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The status quo holds. Providers in the six pilot states must keep submitting prior authorization requests for the listed services, and the contractor compensation structure — tied in part to a share of the savings from denied claims — stays in place. Complete, well-documented requests that clearly meet Medicare coverage criteria the first time reduce the odds of a denial-and-appeal cycle."
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
              Congress tried to kill the WISeR prior authorization pilot.<br />
              <span className="text-white/60">The Senate said no.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A resolution to repeal CMS's WISeR prior authorization model failed on the Senate floor, 46-50, on July 16, 2026. The pilot keeps running in six states through 2031 — and imaging practices there still have to manage the denial and appeal load it creates.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '46-50', label: 'Senate vote to repeal WISeR', sub: 'failed along party lines' },
                { stat: '6', label: 'states in the pilot', sub: 'NJ, OH, OK, TX, AZ, WA' },
                { stat: '17', label: 'services need prior auth', sub: 'incl. spinal & pain procedures' },
                { stat: '2031', label: 'model runs through', sub: 'a 6-year CMS demonstration' },
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
                What actually happened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 16, 2026, the Senate voted <strong>46-50</strong> along party lines against advancing a resolution to overturn the CMS Innovation Center's WISeR (Wasteful and Inappropriate Service Reduction) model, according to <a href="https://www.healthcaredive.com/news/senate-republicans-block-medicare-ai-prior-authorization-pilot-repeal-wiser/825523/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Healthcare Dive</a> and <a href="https://www.statnews.com/2026/07/16/medicare-ai-prior-authorization-pilot-wiser-senate-vote/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">STAT</a>. The measure needed Republican votes to move forward and didn't get them, so WISeR continues unchanged.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The resolution used the Congressional Review Act (CRA), a mechanism that lets lawmakers overturn certain federal agency actions with a simple-majority vote. It only became available after the Government Accountability Office ruled on <a href="https://www.asge.org/home/resources/key-resources/blog/view/the-advocate/2026/05/28/senate-democrats-move-to-repeal-cms's-wiser-ai-prior-authorization-model" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">May 12, 2026, that WISeR qualifies as a rule subject to congressional review</a>, opening a limited window for a disapproval vote. Sens. Ron Wyden (D-Ore.), Maria Cantwell (D-Wash.), Richard Blumenthal (D-Conn.) and Kirsten Gillibrand (D-N.Y.) led the effort, with a companion resolution introduced in the House.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The two sides argued past each other. Wyden framed it as a patient-access problem: "Today, seniors in six states across America are discovering that care their doctor has recommended for them has been slowed or halted by a shadowy, AI-driven third party," he said, as reported by <a href="https://www.healthcaredive.com/news/senate-republicans-block-medicare-ai-prior-authorization-pilot-repeal-wiser/825523/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Healthcare Dive</a>. Sen. Mike Crapo (R-Idaho), defending the model, argued it targets "avoidable waste, fraud and abuse" without compromising high-quality care. With the CRA vote defeated, that debate doesn't get resolved by repeal — the pilot stands.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What WISeR actually requires, and why it touches radiology
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                WISeR is a six-year CMS Innovation Center demonstration that launched January 1, 2026, and is scheduled to run through December 31, 2031, in six states: New Jersey, Ohio, Oklahoma, Texas, Arizona and Washington. It applies prior authorization or post-service, pre-payment review to <strong>17 selected Medicare Part B services</strong> that CMS says carry a higher historical risk of waste or limited clinical benefit for some patients, per <a href="https://www.sirweb.org/ir-quarterly/advocacy/what-is-wiser/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">the Society of Interventional Radiology</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Several of those services sit squarely in radiology and interventional radiology: image-guided decompression of the spine, epidural steroid injections for pain management, and percutaneous vertebral augmentation (balloon kyphoplasty and vertebroplasty). The rest of the list spans skin and tissue substitutes, electrical nerve stimulator implants, cervical fusion, incontinence-control devices, and knee arthroscopy for osteoarthritis, per CMS's own <a href="https://www.cms.gov/priorities/innovation/files/wiser-provider-fact-sheet.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">WISeR Provider Factsheet</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CMS's stated goal for participating contractors is a coverage decision within <strong>72 hours</strong> for standard requests and <strong>48 hours</strong> for expedited ones. Facilities that skip the prior-authorization step instead face a slower post-service, pre-payment review with no turnaround guarantee. Contractors — private vendors that pair AI-based review tools with licensed clinical staff — are paid in part based on a share of the savings generated by the claims they deny, a structure that the <a href="https://www.kff.org/medicare/examining-the-potential-impact-of-medicares-new-wiser-model/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Kaiser Family Foundation</a> and multiple lawmakers have flagged as a financial incentive to maximize denials, even though a denial still requires human clinician sign-off.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two fronts against WISeR — one dead, one still open
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                It's worth separating the Senate's CRA vote from a second, quieter effort moving through the House. They use different mechanisms, run on different timelines, and landed in different places as of this writing.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Track</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Mechanism</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Timing</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 align-top">Senate Congressional Review Act resolution</td>
                      <td className="py-3 pr-4 align-top">Simple-majority disapproval vote, one-time use per rule</td>
                      <td className="py-3 pr-4 align-top">GAO ruling May 12, 2026; Senate vote July 16, 2026</td>
                      <td className="py-3 align-top"><strong>Failed 46-50.</strong> WISeR continues unchanged; this specific repeal path is now closed.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 align-top">House Appropriations funding rider</td>
                      <td className="py-3 pr-4 align-top">Amendment blocking FY2027 funding for WISeR or a similar model</td>
                      <td className="py-3 pr-4 align-top">Adopted unanimously in committee, June 2026</td>
                      <td className="py-3 align-top">Advanced from committee only; still needs full House and Senate passage before FY2027 (Oct. 1, 2026) to take effect.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The House Appropriations Committee's amendment, adopted unanimously in June 2026, would cut off funding for implementing WISeR or a similar prior-authorization model in traditional Medicare starting in fiscal year 2027, per <a href="https://www.healthcaredive.com/news/house-appropriations-committee-votes-block-ai-prior-authorization-pilot-wiser/822498/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Healthcare Dive</a>. Rep. Lois Frankel (D-Fla.) argued the model puts "the judgement of doctors and the needs of patients behind." That's a funding restriction working through a different, slower legislative process — not a repeal — and its outcome is still unresolved even after the Senate's CRA vote failed.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for imaging throughput and denial risk in 2026
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For radiology and interventional radiology practices operating in the six pilot states, the failed repeal is a straightforward signal: plan around WISeR, not around its removal. The prior-authorization requirement for the listed procedures stays in effect, the 72/48-hour decision clock stays in effect, and the contractor incentive structure that concerned lawmakers on both sides of the aisle stays in effect. None of that changes because a floor vote failed.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That puts the practical burden back on documentation. When a coverage decision is made by a vendor working against a 72-hour clock and partly compensated on denial volume, the deciding factor for many requests is whether the submitted report already contains the specific findings, measurements, and clinical justification a reviewer is checking for — not whether the underlying care was appropriate. Gaps in a report, not gaps in clinical judgment, are what turn a routine request into a denial-and-appeal cycle.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is a documentation-completeness problem as much as a policy problem, and it's one AI-generated structured reporting is built to address. A report that consistently captures the relevant findings, measurements, and comparison-to-prior detail a WISeR reviewer looks for gives a prior-authorization request the best chance of clearing on the first pass, before it ever needs an appeal. xAID's reports are built that way: a foundation-model draft covers the full study, xAID's in-house radiologist reviews every preliminary, and it reaches the client's reading radiologist ready-to-sign — so the documentation behind a prior-auth request starts complete and consistent, not reconstructed after a denial.
              </p>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/senate-democrats-push-end-medicare-prior-authorization-pilot-fails" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.healthcaredive.com/news/senate-republicans-block-medicare-ai-prior-authorization-pilot-repeal-wiser/825523/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Healthcare Dive (Senate vote)</a>, <a href="https://www.statnews.com/2026/07/16/medicare-ai-prior-authorization-pilot-wiser-senate-vote/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">STAT</a>, <a href="https://www.asge.org/home/resources/key-resources/blog/view/the-advocate/2026/05/28/senate-democrats-move-to-repeal-cms's-wiser-ai-prior-authorization-model" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ASGE (GAO ruling)</a>, <a href="https://www.sirweb.org/ir-quarterly/advocacy/what-is-wiser/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Society of Interventional Radiology</a>, <a href="https://www.cms.gov/priorities/innovation/files/wiser-provider-fact-sheet.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS WISeR Provider Factsheet</a>, <a href="https://www.kff.org/medicare/examining-the-potential-impact-of-medicares-new-wiser-model/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">KFF</a>, and <a href="https://www.healthcaredive.com/news/house-appropriations-committee-votes-block-ai-prior-authorization-pilot-wiser/822498/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Healthcare Dive (House Appropriations)</a>. Figures are rounded as reported.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the WISeR model?',
                    a: "WISeR (Wasteful and Inappropriate Service Reduction Model) is a CMS Innovation Center demonstration that requires prior authorization or prepayment review for 17 selected Medicare Part B services — including several radiology and interventional radiology procedures — in six states: New Jersey, Ohio, Oklahoma, Texas, Arizona and Washington. It launched January 1, 2026, and is scheduled to run through December 31, 2031. Participating contractors use AI-supported review alongside licensed clinicians to make coverage determinations.",
                  },
                  {
                    q: 'Did Congress vote to end WISeR, and did it pass?',
                    a: 'No. Senate Democrats led by Ron Wyden, Maria Cantwell, Richard Blumenthal and Kirsten Gillibrand introduced a Congressional Review Act resolution to overturn WISeR after the Government Accountability Office ruled on May 12, 2026, that the model qualifies as a rule subject to congressional review. The Senate voted 46-50 along party lines on July 16, 2026, and the resolution failed to advance, meaning WISeR continues unchanged.',
                  },
                  {
                    q: 'Which imaging and interventional radiology procedures need prior authorization under WISeR?',
                    a: 'CMS selected 17 services it says carry a higher risk of waste or limited clinical benefit for some patients. The list includes radiology-adjacent procedures such as image-guided spinal decompression, epidural steroid injections for pain management and percutaneous vertebral augmentation (kyphoplasty and vertebroplasty), alongside skin and tissue substitutes, electrical nerve stimulator implants, cervical fusion and knee arthroscopy for osteoarthritis.',
                  },
                  {
                    q: 'How fast do WISeR contractors have to decide on a request?',
                    a: "CMS's stated goal is a decision within 72 hours for standard requests and 48 hours for expedited ones. Facilities that don't submit a prior authorization request instead face a post-service, pre-payment review without that turnaround guarantee.",
                  },
                  {
                    q: 'Is there another effort in Congress to stop WISeR?',
                    a: "Yes, a separate and still-pending track. In June 2026, the House Appropriations Committee unanimously adopted an amendment to its fiscal year 2027 spending bill that would block funding for WISeR, or a similar prior authorization model, in traditional Medicare. That is a funding restriction rather than a repeal, and it still needs full House and Senate passage — a different, and so far unresolved, path from the Senate's failed Congressional Review Act vote.",
                  },
                  {
                    q: 'What does the failed repeal mean for imaging practices in the pilot states?',
                    a: 'The status quo holds. Providers in the six pilot states must keep submitting prior authorization requests for the listed services, and the contractor compensation structure — tied in part to a share of the savings from denied claims — stays in place. Complete, well-documented requests that clearly meet Medicare coverage criteria the first time reduce the odds of a denial-and-appeal cycle.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Documentation that clears prior auth the first time"
          sub="Structured, radiologist-reviewed reports built to hold up under CMS scrutiny — including in WISeR pilot states. Try it on 5 free studies."
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
              <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Prior Authorization Reform: What H.R. 3514 Means for Imaging Throughput</div>
              </Link>
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained: What CMS's Proposed $260M Imaging Cut Changes</div>
              </Link>
              <Link to="/blog/fda-approved-ai-radiology-funding-bill/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Congress Wants to Pay for FDA-Cleared Imaging AI</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default WiserPriorAuthorizationRadiology;
