import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const FdaApprovedAiRadiologyFundingBill = () => {
  const post = {
    title: 'Congress Wants to Pay for FDA-Cleared Imaging AI. Here’s Why That Matters Beyond Veterans.',
    dateIso: '2026-07-20',
    date: 'July 20, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: 'A bipartisan bill would put $25M behind FDA-cleared lung-imaging software for veterans. What direct federal AI-imaging funding signals for CT reporting.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Congress Proposes $25M for FDA-Cleared Imaging AI | xAID</title>
        <meta name="description" content="A bipartisan bill would put $25M behind FDA-cleared lung-imaging software for veterans. What direct federal AI-imaging funding signals for CT reporting." />
        <link rel="canonical" href="https://xaid.ai/blog/fda-approved-ai-radiology-funding-bill/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Congress Proposes $25M for FDA-Cleared Imaging AI | xAID" />
        <meta property="og:description" content="A bipartisan bill would put $25M behind FDA-cleared lung-imaging software for veterans. What direct federal AI-imaging funding signals for CT reporting." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Congress Proposes $25M for FDA-Cleared Imaging AI | xAID" />
        <meta name="twitter:description" content="A bipartisan bill would put $25M behind FDA-cleared lung-imaging software for veterans. What direct federal AI-imaging funding signals for CT reporting." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-approved-ai-radiology-funding-bill" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-approved-ai-radiology-funding-bill",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fda approved ai radiology, ai imaging reimbursement, AI CT reporting, veterans imaging bill, AIR CARE for Vets Act"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the AIR CARE for Vets Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The AIR CARE for Vets Act (H.R. 9666) is a bipartisan bill introduced July 14, 2026 by Rep. Juan Ciscomani (R-AZ) and Rep. Chris Pappas (D-NH). It would direct the Department of Veterans Affairs to run a five-year pilot program using FDA-cleared four-dimensional functional lung-imaging software to help identify respiratory disorders and lung disease in veterans, with $5 million authorized annually from fiscal year 2027 through 2031, for $25 million total."
              }
            },
            {
              "@type": "Question",
              "name": "Is there an FDA-approved AI product for radiology already tied to this bill?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The bill's definition of eligible software — FDA-cleared, four-dimensional functional lung-imaging technology — currently points to 4DMedical's XV LVAS and CT LVAS software. XV LVAS received FDA clearance in 2020 and CT LVAS, which analyzes standard CT scans for regional lung ventilation, received FDA clearance in November 2023. The bill's language is product-defined but not a sole-source mandate."
              }
            },
            {
              "@type": "Question",
              "name": "Why does a veterans’ lung-imaging bill matter for AI CT reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is a direct congressional appropriation to lease a specific FDA-cleared imaging software product for a defined patient population — a funding mechanism distinct from existing pathways like CMS's New Technology Add-on Payment or the proposed Health Tech Investment Act. It shows lawmakers are willing to put line-item federal dollars behind FDA-cleared imaging AI, which is a data point for how reimbursement momentum for AI-assisted CT reporting could build over time, even though the underlying product here is a narrow functional-lung tool, not general CT reporting AI."
              }
            },
            {
              "@type": "Question",
              "name": "Does more imaging AI funding mean more work for radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, in the near term. Every veteran scanned under an expanded lung-imaging pilot generates a study that still needs a radiologist read, at a time when a VA watchdog report (released February 19, 2026) already found major gaps in how VA facilities track radiology scheduling and call data. Funding bills that expand screening add volume to a system that is already strained, which is part of why AI-assisted reporting tools are being evaluated alongside AI-assisted imaging tools."
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
              Congress wants to pay for FDA-cleared imaging AI.<br />
              <span className="text-white/60">Here's why that matters beyond veterans.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new bipartisan House bill would put $25 million behind an FDA-cleared lung-imaging software product for veterans exposed to burn pits. The dollar amount is modest. The mechanism — Congress directly funding the purchase of a named category of AI-enabled imaging software — is the part worth watching.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '$25M', label: 'Authorized for the VA pilot', sub: '$5M a year, FY2027–2031' },
                { stat: 'H.R. 9666', label: 'AIR CARE for Vets Act', sub: 'Ciscomani (R-AZ) & Pappas (D-NH)' },
                { stat: '5 years', label: 'Pilot program length', sub: 'plus a report-back to Congress' },
                { stat: '2020', label: 'First FDA clearance', sub: 'for the underlying lung-imaging tech' },
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
                What the AIR CARE for Vets Act actually does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 14, 2026, Rep. Juan Ciscomani (R-AZ) and Rep. Chris Pappas (D-NH) introduced the Advanced Imaging for Respiratory Care, Assessment and Research Excellence for Vets Act — the <a href="https://www.govinfo.gov/bulkdata/BILLSTATUS/119/hr/BILLSTATUS-119hr9666.xml" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AIR CARE for Vets Act, H.R. 9666</a>. It was referred the same day to the House Committee on Veterans' Affairs, and was later covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/bipartisan-bill-would-invest-25m-bolster-use-key-medical-imaging-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The bill directs the Department of Veterans Affairs to run a five-year pilot program that leases "a four-dimensional functional lung imaging software product that has been approved by the Food and Drug Administration to evaluate lung function" for veterans receiving care at VA facilities. Congress authorized <strong>$5 million for each of fiscal years 2027 through 2031</strong> — $25 million total — and requires the VA Secretary to report the pilot's effectiveness back to Congress. That is a direct line-item appropriation to buy a defined category of FDA-cleared imaging software, not a reimbursement-code change or a research grant.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The bill's definition currently points to one product: 4DMedical's XV LVAS and CT LVAS software, which received FDA clearance in <a href="https://www.prnewswire.com/news-releases/4dmedical-receives-us-fda-clearance-for-ct-lvas-lung-function-scanning-software-301996139.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2020 and November 2023</a>, respectively. CT LVAS analyzes an existing CT scan and overlays color-coded, quantified regional ventilation data on top of it — adding a functional read to a structural one, without new capital equipment. The bill's language is written around a product category rather than naming a vendor, so other FDA-cleared entrants in the same category could qualify.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why lung imaging, and why veterans
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The bill targets veterans dealing with respiratory illness linked to burn pit smoke exposure during service in Iraq and Afghanistan — conditions that include COPD, asthma, and lung cancer. According to the sponsors' <a href="https://pappas.house.gov/media/press-releases/pappas-and-ciscomani-introduce-bipartisan-air-care-for-vets-act" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">joint press release</a>, diagnosing these conditions today is limited by standard whole-lung testing procedures, "which can be less sensitive to changes in lung function seen in early disease or when abnormalities are limited to a specific region." The pitch for 4D functional lung imaging is that it can flag localized or early functional decline that a normal-looking structural scan or a whole-lung spirometry number can miss.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Burn Pits 360 co-founder and retired Army Captain Le Roy Torres, a longtime advocate for veterans with toxic-exposure illness, framed the stakes bluntly in a July 15, 2026 statement: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/bipartisan-bill-would-invest-25m-bolster-use-key-medical-imaging-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Being believed is not a privilege, it is a right."</a> That is the political case for the bill. The more interesting case, for anyone watching imaging AI policy, is the funding mechanism itself.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The precedent that matters beyond lung imaging
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Imaging AI vendors have spent years pushing on two existing federal reimbursement levers: CMS's New Technology Add-on Payment (NTAP) for hospitals, and a proposed Medicare payment pathway for AI-enabled devices. H.R. 9666 is a third, different lever — Congress simply appropriating money for an agency to buy a defined class of FDA-cleared software for a specific patient population, rather than adjusting a payment code and waiting for utilization to catch up.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Funding mechanism</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">How it works</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">CMS New Technology Add-on Payment (NTAP)</td>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">Hospitals get a temporary per-case add-on payment for qualifying new technology, including some AI-associated devices, on top of the standard DRG payment.</td>
                      <td className="text-[#444] text-sm font-light py-3 align-top">Existing pathway; uptake has been uneven across sites</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">Health Tech Investment Act (H.R. 6197 / S. 1399)</td>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">Would create a dedicated Medicare payment pathway and new ambulatory payment classification for FDA-cleared or approved AI-enabled devices, with five years of cost-based reimbursement.</td>
                      <td className="text-[#444] text-sm font-light py-3 align-top">H.R. 6197 introduced Nov. 2025, S. 1399 introduced Apr. 2025; not yet enacted</td>
                    </tr>
                    <tr>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">AIR CARE for Vets Act (H.R. 9666)</td>
                      <td className="text-[#444] text-sm font-light py-3 pr-4 align-top">Direct congressional appropriation for the VA to lease a defined category of FDA-cleared software for a named population — no billing-code change required.</td>
                      <td className="text-[#444] text-sm font-light py-3 align-top">Introduced July 14, 2026; referred to committee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this is a signal that Congress is about to fund AI CT reporting software directly. The scope here is narrow: one federal payer, one veteran population, one FDA-cleared product category. But it establishes that lawmakers are willing to attach real appropriated dollars — not just a payment-code tweak — to a specific FDA-cleared imaging AI product when there's a clear patient population and a credible clinical story. That is a data point worth logging for anyone tracking how reimbursement and procurement support for AI-assisted imaging tools could broaden over the next few budget cycles. It sits alongside, not instead of, the access questions raised by existing add-on payment programs — see our earlier look at <Link to="/blog/radiology-ai-access-disparities/" className="text-xaid-blue-strong underline underline-offset-2">who actually gets radiology AI under current reimbursement design</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The capacity math nobody's pricing into this bill
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Every veteran added to a lung-imaging screening pipeline generates a study that still needs to be read by a radiologist. CT LVAS runs on top of an existing CT scan, and a positive or ambiguous functional finding will typically prompt follow-up imaging. That additional CT volume lands on a system that is already stretched: a VA Office of Inspector General report released <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/veterans-facing-significant-challenges-accessing-radiology-services-va-watchdog-says" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">February 19, 2026</a> found that 13 of 15 reviewed VA facilities lacked essential call-tracking data for scheduling care, with at least 338,000 untracked calls tied to radiology clinics alone, and veterans reporting delays scheduling time-sensitive scans.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That strain isn't unique to the VA. Nationally, the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Harvey L. Neiman Health Policy Institute</a> projects CT volume will grow roughly 25% by 2055, while radiologist attrition rates have more than doubled since 2014, from about 1.1% to 2.5% annually. A bill that expands screening for a new veteran population — however well-intentioned — adds reads to that pipeline without adding radiologists to read them. Funding the imaging step without funding the reporting step is the gap AI-assisted CT reporting is built to close.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID isn't a functional lung-imaging tool and doesn't compete with the product category this bill describes. The relevant parallel is upstream of the scan: as federal dollars start flowing toward more FDA-cleared imaging AI — whether through direct appropriations like this one, add-on payments, or a future Medicare AI pathway — the studies those programs generate still need a structured, comprehensive report. xAID's foundation-model reports are reviewed in-house before delivery, arriving ready-to-sign so the client's reading radiologist can sign off rather than dictate from scratch — the same read-capacity problem this bill's downstream CT volume runs straight into.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the AIR CARE for Vets Act?',
                    a: 'The AIR CARE for Vets Act (H.R. 9666) is a bipartisan bill introduced July 14, 2026 by Rep. Juan Ciscomani (R-AZ) and Rep. Chris Pappas (D-NH). It would direct the Department of Veterans Affairs to run a five-year pilot program using FDA-cleared four-dimensional functional lung-imaging software to help identify respiratory disorders and lung disease in veterans, with $5 million authorized annually from fiscal year 2027 through 2031, for $25 million total.',
                  },
                  {
                    q: 'Is there an FDA-approved AI product for radiology already tied to this bill?',
                    a: "The bill's definition of eligible software — FDA-cleared, four-dimensional functional lung-imaging technology — currently points to 4DMedical's XV LVAS and CT LVAS software. XV LVAS received FDA clearance in 2020 and CT LVAS, which analyzes standard CT scans for regional lung ventilation, received FDA clearance in November 2023. The bill's language is product-defined but not a sole-source mandate.",
                  },
                  {
                    q: 'Why does a veterans’ lung-imaging bill matter for AI CT reporting?',
                    a: "It is a direct congressional appropriation to lease a specific FDA-cleared imaging software product for a defined patient population — a funding mechanism distinct from existing pathways like CMS's New Technology Add-on Payment or the proposed Health Tech Investment Act. It shows lawmakers are willing to put line-item federal dollars behind FDA-cleared imaging AI, which is a data point for how reimbursement momentum for AI-assisted CT reporting could build over time, even though the underlying product here is a narrow functional-lung tool, not general CT reporting AI.",
                  },
                  {
                    q: 'Does more imaging AI funding mean more work for radiologists?',
                    a: 'Yes, in the near term. Every veteran scanned under an expanded lung-imaging pilot generates a study that still needs a radiologist read, at a time when a VA watchdog report (released February 19, 2026) already found major gaps in how VA facilities track radiology scheduling and call data. Funding bills that expand screening add volume to a system that is already strained, which is part of why AI-assisted reporting tools are being evaluated alongside AI-assisted imaging tools.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/bipartisan-bill-would-invest-25m-bolster-use-key-medical-imaging-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; bill text and status via <a href="https://www.govinfo.gov/bulkdata/BILLSTATUS/119/hr/BILLSTATUS-119hr9666.xml" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">govinfo.gov (H.R. 9666)</a>; sponsor statement via <a href="https://pappas.house.gov/media/press-releases/pappas-and-ciscomani-introduce-bipartisan-air-care-for-vets-act" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Rep. Chris Pappas's office</a>; FDA clearance via <a href="https://www.prnewswire.com/news-releases/4dmedical-receives-us-fda-clearance-for-ct-lvas-lung-function-scanning-software-301996139.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">PR Newswire</a>; advocate statement via <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/bipartisan-bill-would-invest-25m-bolster-use-key-medical-imaging-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; Health Tech Investment Act detail via <a href="https://www.medtechdive.com/news/lawmakers-medicare-reimbursement-ai-devices/806517/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>; VA access findings via <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/veterans-facing-significant-challenges-accessing-radiology-services-va-watchdog-says" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; radiologist workforce data via <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR Bulletin / Neiman Health Policy Institute</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Federal dollars are reaching imaging AI. Reporting capacity should too."
          sub="See how xAID delivers radiologist-reviewed, ready-to-sign CT reports at scale. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Who Gets Radiology AI? Reimbursement Design and Disparities</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiologist Shortage in 2026 and What AI CT Reporting Changes</div>
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

export default FdaApprovedAiRadiologyFundingBill;
