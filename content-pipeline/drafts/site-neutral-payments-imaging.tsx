import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const SiteNeutralPaymentsImaging = () => {
  const post = {
    title: "Site-Neutral Payments, Explained: What CMS's Proposed $260M Imaging Cut Changes",
    dateIso: '2026-07-06',
    date: 'July 6, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: "CMS's proposed 2027 OPPS rule would pay grandfathered off-campus hospital departments physician-office rates for imaging without contrast — about 40% of the current hospital rate, a $260 million first-year cut. Here's what site-neutral payments are, who wins and who loses, and why per-study reporting cost becomes the margin lever both sides can actually control.",
  };
  const canonical = 'https://xaid.ai/blog/site-neutral-payments-imaging';

  return (
    <>
      <Helmet defer={false}>
        <title>Site-Neutral Payments: CMS's $260M Imaging Cut | xAID</title>
        <meta name="description" content="CMS's 2027 OPPS proposal pays off-campus hospital imaging at physician-office rates — a $260M cut. Who wins, who loses, and the cost lever both sides control." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Site-Neutral Payments: CMS's $260M Imaging Cut | xAID" />
        <meta property="og:description" content="CMS's 2027 OPPS proposal pays off-campus hospital imaging at physician-office rates — a $260M cut. Who wins, who loses, and the cost lever both sides control." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Site-Neutral Payments: CMS's $260M Imaging Cut | xAID" />
        <meta name="twitter:description" content="CMS's 2027 OPPS proposal pays off-campus hospital imaging at physician-office rates — a $260M cut. Who wins, who loses, and the cost lever both sides control." />
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
          "keywords": "site neutral payments, site-neutral payment policy, OPPS 2027 proposed rule, hospital outpatient imaging reimbursement, off-campus provider-based department, imaging center economics"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are site-neutral payments in Medicare?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Site-neutral payment means Medicare pays the same rate for the same service regardless of where it is delivered. Today, Medicare typically pays more for an identical imaging study performed in a hospital outpatient department than in a physician office or freestanding imaging center, because hospital departments bill under the Outpatient Prospective Payment System (OPPS) while offices bill under the lower Physician Fee Schedule. Site-neutral policies remove that differential for selected services, and CMS has applied them step by step: clinic visits first, drug administration in the CY 2026 rule, and — under the CY 2027 proposal — imaging without contrast."
              }
            },
            {
              "@type": "Question",
              "name": "What does the CY 2027 OPPS proposed rule change for imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CMS proposes to pay the Physician Fee Schedule–equivalent rate — set at 40% of the OPPS rate — for imaging-without-contrast services furnished in excepted (grandfathered) off-campus hospital outpatient departments, using its authority under section 1833(t)(2)(F) of the Social Security Act. CMS estimates the change would reduce Medicare Part B expenditures by about $260 million in the first year. Rural sole community hospitals would be exempt. The policy covers HCPCS codes assigned to the imaging-without-contrast payment classifications, such as X-rays and MRI scans performed without contrast."
              }
            },
            {
              "@type": "Question",
              "name": "Who wins and who loses under site-neutral imaging payments?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hospitals with grandfathered off-campus outpatient departments lose the most: affected imaging codes would be paid at roughly 40% of the current OPPS rate. Freestanding imaging centers and physician offices see no rate change but gain relative competitiveness, because the hospital price premium for the same study disappears. Medicare beneficiaries also pay less — CMS projects roughly $70 million in reduced premiums and about $70 million in lower cost-sharing. On-campus hospital departments and rural sole community hospitals are not affected by this proposal."
              }
            },
            {
              "@type": "Question",
              "name": "When would the site-neutral imaging policy take effect?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The CY 2027 OPPS proposed rule was released July 2, 2026, and public comments are due by August 31, 2026. CMS typically finalizes OPPS rules in the fall, with policies applying to calendar-year 2027 payments beginning January 1, 2027. The imaging provision is a proposal, not a final rule — the details, or the policy itself, can change after the comment period, and hospital groups have signaled strong opposition."
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
                Policy &amp; Reimbursement
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Site-neutral payments, explained<br />
              <span className="text-white/60">What CMS's proposed $260M imaging cut changes</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The proposed 2027 outpatient rule would pay grandfathered off-campus hospital departments physician-office rates for imaging without contrast — roughly 40 cents on the current dollar. Hospitals lose a price premium, freestanding centers gain relative ground, and both end up staring at the same question: if the price of a study is fixed, what does it cost you to produce the report?
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '$260M', label: 'First-year Part B cut', sub: 'from site-neutral imaging' },
                { stat: '40%', label: 'Of the OPPS rate', sub: 'proposed payment level' },
                { stat: '2.4%', label: 'Overall OPPS update', sub: 'for CY 2027' },
                { stat: 'Aug 31', label: 'Comment deadline', sub: '2026 — rule not final' },
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
                What CMS actually proposed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 2, 2026, CMS released the calendar-year 2027 <a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-2027-hospital-outpatient-prospective-payment-system-opps-ambulatory-surgical-center" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Hospital Outpatient Prospective Payment System (OPPS) proposed rule</a> (CMS-1850-P). Buried among a 2.4% overall payment update and a much larger fight over 340B drug payments is a provision aimed squarely at imaging: CMS proposes to pay the <strong>Physician Fee Schedule–equivalent rate</strong> for imaging-without-contrast services furnished in <em>excepted</em> — that is, grandfathered — off-campus hospital outpatient departments, invoking its authority under section 1833(t)(2)(F) of the Social Security Act.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The PFS-equivalent rate is set at <a href="https://www.aha.org/news/headline/2026-07-02-cms-proposes-increases-medicare-hospital-outpatient-department-payment-rates-site-neutral-and-340b" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><strong>40% of the OPPS rate</strong></a>. In plain terms: for the affected codes, a grandfathered off-campus hospital department would collect roughly 40 cents for every dollar Medicare pays it today. CMS estimates the change would cut Medicare Part B spending by about <a href="https://www.healthcaredive.com/news/regulators-propose-slashing-340b-payments-broadening-site-neutral-policies-2027/824312/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><strong>$260 million in the first year</strong></a> — per <a href="https://www.hfma.org/payment-reimbursement-and-managed-care/cms-2027-opps-proposed-rule-340b-imaging-payments/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">HFMA's breakdown</a>, roughly $190 million in Medicare savings plus about $70 million in reduced beneficiary premiums, with another ~$70 million in lower beneficiary cost-sharing.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The scope is defined by payment classification, not by a list of scan names: any HCPCS code assigned to the <strong>imaging-without-contrast</strong> ambulatory payment classifications is covered when furnished at an excepted off-campus department. Coverage examples cited include <a href="https://www.beckershospitalreview.com/finance/cms-targets-340b-site-neutral-pay-in-2027-outpatient-rule-8-things-to-know/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">X-rays and MRIs</a>; the same APC families take in non-contrast CT and ultrasound. Contrast-enhanced studies are outside this proposal. <strong>Rural sole community hospitals would be exempt</strong>, consistent with prior site-neutral policies.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                CMS's framing is blunt. As the agency put it in materials accompanying the rule: <a href="https://www.healthcaredive.com/news/regulators-propose-slashing-340b-payments-broadening-site-neutral-policies-2027/824312/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Medicare and patients should not be charged more for an imaging test solely because it is done in a hospital setting rather than a standalone clinic."</a>
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Site-neutral payments in plain terms
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Medicare has two main price lists for outpatient care. Hospital outpatient departments bill under OPPS; physician offices and freestanding imaging centers bill under the Physician Fee Schedule, which is generally lower. The result is that the identical non-contrast MRI can generate a materially higher Medicare payment simply because the magnet sits in a building that bills as a hospital department. That differential is one reason health systems spent the last decade acquiring physician practices and imaging sites and converting them to hospital-based billing.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Site-neutral payment" is the policy response: pay the same rate for the same service regardless of setting. Congress started it with the Bipartisan Budget Act of 2015, which put <em>new</em> off-campus departments on the lower rate but grandfathered ("excepted") existing ones. CMS has been chipping away at the exception ever since — clinic visits first, then <a href="https://www.appliedpolicy.com/cms-proposes-payment-increase-site-neutral-drug-administration-policy-and-full-phase-out-of-ipo-list-by-2029/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">drug administration services in the CY 2026 rule</a>. Imaging without contrast is the next service line in the sequence, and its selection is not accidental: it is high-volume, well-standardized, and hard to argue that the scan itself differs by setting.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                Here is what the proposal means for the same non-contrast study across settings:
              </p>

              {/* Comparison table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Setting</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Rate today</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Rate under CY 2027 proposal</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Change</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D]">Excepted (grandfathered) off-campus hospital department</td>
                      <td className="py-3 pr-4 text-[#444]">Full OPPS rate</td>
                      <td className="py-3 pr-4 text-[#444]">PFS-equivalent (40% of OPPS)</td>
                      <td className="py-3 text-[#444]">~60% payment cut on affected codes</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D]">Non-excepted off-campus department (opened after Nov 2015)</td>
                      <td className="py-3 pr-4 text-[#444]">PFS-equivalent</td>
                      <td className="py-3 pr-4 text-[#444]">PFS-equivalent</td>
                      <td className="py-3 text-[#444]">No change</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D]">On-campus hospital outpatient department</td>
                      <td className="py-3 pr-4 text-[#444]">Full OPPS rate</td>
                      <td className="py-3 pr-4 text-[#444]">Full OPPS rate</td>
                      <td className="py-3 text-[#444]">No change (this proposal)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D]">Freestanding imaging center / physician office</td>
                      <td className="py-3 pr-4 text-[#444]">Physician Fee Schedule</td>
                      <td className="py-3 pr-4 text-[#444]">Physician Fee Schedule</td>
                      <td className="py-3 text-[#444]">No change — relative position improves</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#0D0D0D]">Rural sole community hospital (off-campus)</td>
                      <td className="py-3 pr-4 text-[#444]">Full OPPS rate</td>
                      <td className="py-3 pr-4 text-[#444]">Full OPPS rate</td>
                      <td className="py-3 text-[#444]">Exempt</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Who loses, who gains
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The losers are explicit in the arithmetic: health systems that hold grandfathered off-campus imaging sites. For those departments, every non-contrast X-ray, ultrasound, CT, or MRI billed to Medicare would bring in roughly 40% of what it does today. Hospital groups reacted accordingly — America's Essential Hospitals said the rule <a href="https://www.healthcaredive.com/news/regulators-propose-slashing-340b-payments-broadening-site-neutral-policies-2027/824312/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"takes an axe to critical funding that supports essential hospitals without concern for how it will affect the patients they serve."</a>
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The winners are quieter, because nothing on their fee schedule changes. Freestanding imaging centers and office-based practices have always been the cheaper site for the same study; what changes is that the premium their hospital-affiliated competitors collected disappears on these codes. Three second-order effects follow:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The acquisition arbitrage weakens',
                    desc: 'A key financial rationale for hospitals acquiring freestanding imaging sites was converting them to hospital-based billing at OPPS rates. If routine imaging pays PFS-equivalent rates regardless, that conversion premium shrinks — and some systems may reassess whether off-campus imaging real estate still earns its overhead.',
                  },
                  {
                    title: 'Referral steering gets easier to justify',
                    desc: 'Beneficiaries share in the savings: CMS projects about $70 million less in cost-sharing in the first year. Referring physicians and payers already steer price-sensitive patients toward freestanding sites; site-neutral rates align Medicare with the steering that commercial plans have pushed for years.',
                  },
                  {
                    title: 'Volume may migrate — and someone has to read it',
                    desc: "If hospital systems shrink off-campus imaging capacity in response, the studies don't vanish; they shift to freestanding centers and on-campus departments. Centers that gain volume gain reads to cover — at the same fixed price per study, with the same radiologist labor market.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The lever both sides can control: cost per study
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Here is the structural point that outlasts this particular rule. In imaging, the price side of the margin equation is administered — CMS sets it, and the decade-long direction of travel is toward the lower, site-neutral number. An operator cannot negotiate its way out of a fee schedule. What an operator <em>does</em> control is the cost of producing each study: scanner utilization, staffing, and — increasingly the largest controllable line item per study — the cost of the professional read and the report.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That cost is under pressure from the opposite direction: radiologist scarcity keeps per-read rates high, and <Link to="/blog/ct-radiology-coverage-costs-2026/" className="text-xaid-blue-strong underline underline-offset-2">coverage costs</Link> don't fall just because Medicare's payment did. A hospital absorbing a ~60% payment cut on off-campus non-contrast imaging and a freestanding center absorbing a surge of migrated volume face the same math: at a fixed reimbursement per study, every dollar taken out of per-study reporting cost drops straight to margin.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is where AI-drafted reporting stops being a technology story and becomes a reimbursement-policy story. In xAID's workflow, a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation model</Link> drafts a complete, structured CT report; xAID's in-house radiologist reviews every preliminary; and the report arrives ready-to-sign — your reading radiologist signs the final. The economics track the policy environment: the per-study cost of reporting becomes a managed, predictable input rather than a scarce-labor auction, which is precisely the variable site-neutral payment forces operators to manage. Whether this rule is finalized as proposed or trimmed in the final rule, the direction it signals — fixed, converging prices for routine imaging — rewards whoever produces the report at the lowest reliable cost per study.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What happens next
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is a proposed rule, not a final one. Comments are due <strong>August 31, 2026</strong>, and CMS typically finalizes OPPS rules in the fall, with policies applying from January 1, 2027. Hospital associations are expected to fight the provision in comments and, if history is a guide, potentially in court — earlier site-neutral expansions drew litigation. Imaging operators on both sides of the divide should model two scenarios now: the rule finalized as proposed, and the rule softened. In both, the same discipline applies — treat reimbursement as fixed and work the cost side. For how policy is reshaping the demand side at the same time, see xAID's analysis of <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="text-xaid-blue-strong underline underline-offset-2">prior-authorization reform and imaging throughput</Link>.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What are site-neutral payments in Medicare?',
                    a: 'Site-neutral payment means Medicare pays the same rate for the same service regardless of where it is delivered. Today, Medicare typically pays more for an identical imaging study performed in a hospital outpatient department than in a physician office or freestanding imaging center, because hospital departments bill under the Outpatient Prospective Payment System (OPPS) while offices bill under the lower Physician Fee Schedule. Site-neutral policies remove that differential for selected services, and CMS has applied them step by step: clinic visits first, drug administration in the CY 2026 rule, and — under the CY 2027 proposal — imaging without contrast.',
                  },
                  {
                    q: 'What does the CY 2027 OPPS proposed rule change for imaging?',
                    a: 'CMS proposes to pay the Physician Fee Schedule–equivalent rate — set at 40% of the OPPS rate — for imaging-without-contrast services furnished in excepted (grandfathered) off-campus hospital outpatient departments, using its authority under section 1833(t)(2)(F) of the Social Security Act. CMS estimates the change would reduce Medicare Part B expenditures by about $260 million in the first year. Rural sole community hospitals would be exempt. The policy covers HCPCS codes assigned to the imaging-without-contrast payment classifications, such as X-rays and MRI scans performed without contrast.',
                  },
                  {
                    q: 'Who wins and who loses under site-neutral imaging payments?',
                    a: 'Hospitals with grandfathered off-campus outpatient departments lose the most: affected imaging codes would be paid at roughly 40% of the current OPPS rate. Freestanding imaging centers and physician offices see no rate change but gain relative competitiveness, because the hospital price premium for the same study disappears. Medicare beneficiaries also pay less — CMS projects roughly $70 million in reduced premiums and about $70 million in lower cost-sharing. On-campus hospital departments and rural sole community hospitals are not affected by this proposal.',
                  },
                  {
                    q: 'When would the site-neutral imaging policy take effect?',
                    a: 'The CY 2027 OPPS proposed rule was released July 2, 2026, and public comments are due by August 31, 2026. CMS typically finalizes OPPS rules in the fall, with policies applying to calendar-year 2027 payments beginning January 1, 2027. The imaging provision is a proposal, not a final rule — the details, or the policy itself, can change after the comment period, and hospital groups have signaled strong opposition.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: CY 2027 OPPS/ASC proposed rule (CMS-1850-P), <a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-2027-hospital-outpatient-prospective-payment-system-opps-ambulatory-surgical-center" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS fact sheet</a>, July 2, 2026; coverage and analysis by <a href="https://www.healthcaredive.com/news/regulators-propose-slashing-340b-payments-broadening-site-neutral-policies-2027/824312/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Healthcare Dive</a>, <a href="https://www.hfma.org/payment-reimbursement-and-managed-care/cms-2027-opps-proposed-rule-340b-imaging-payments/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HFMA</a>, the <a href="https://www.aha.org/news/headline/2026-07-02-cms-proposes-increases-medicare-hospital-outpatient-department-payment-rates-site-neutral-and-340b" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Hospital Association</a>, and <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/cms-seeks-cut-260m-imaging-spending-through-site-neutral-reforms" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported and reflect a proposed rule subject to change.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Reimbursement is fixed. Your cost per study isn't."
          sub="xAID delivers ready-to-sign CT reports — AI-drafted, reviewed by our in-house radiologist, signed by yours — at a predictable per-study cost. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Prior Authorization Reform and Imaging Throughput</div>
              </Link>
              <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Economics</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Radiology Coverage Costs 2026: Four Models Compared</div>
              </Link>
              <Link to="/blog/performance-based-pricing-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Pricing</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Radiology AI Be Priced on Results?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default SiteNeutralPaymentsImaging;
