import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MultipleProcedurePaymentReductionRadiology = () => {
  const post = {
    title: "CMS's 50% Same-Day Cut Proposal: What It Means for Radiology's Per-Read Economics",
    dateIso: '2026-08-30',
    date: 'August 30, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: "CMS's CY2027 proposal would pay 50% for a same-day second service. Over 150 medical groups, including ACR and SIR, are urging Medicare to withdraw it.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CMS's 50% Same-Day Cut: What It Means for Radiology | xAID</title>
        <meta name="description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CMS's 50% Same-Day Cut: What It Means for Radiology | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/multiple-procedure-payment-reduction-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CMS's 50% Same-Day Cut: What It Means for Radiology | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/multiple-procedure-payment-reduction-radiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/multiple-procedure-payment-reduction-radiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "multiple procedure payment reduction radiology, CMS modifier 25 proposal, CY2027 physician fee schedule, radiology reimbursement cuts"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the CMS multiple procedure payment reduction proposal for 2027?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the CY2027 Medicare Physician Fee Schedule proposed rule, CMS proposed paying the highest-valued service on a claim at 100% and reducing every other same-day service — including a separately identifiable office/outpatient E/M visit billed with modifier -25 alongside a procedure carrying a 0-, 10-, or 90-day global period — to 50%. CMS says it is soliciting comment on whether that reduction should instead be set lower, such as 25%."
              }
            },
            {
              "@type": "Question",
              "name": "Who is opposing the CMS same-day payment reduction proposal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "More than 150 medical organizations — including the American College of Radiology, American Society of Neuroradiology, Society of Interventional Radiology, American College of Radiation Oncology, American Medical Association, American College of Surgeons, American Nurses Association, and the Medical Group Management Association — sent a joint letter to CMS Administrator Dr. Mehmet Oz on August 27, 2026, urging CMS to withdraw the proposal."
              }
            },
            {
              "@type": "Question",
              "name": "Has CMS tried a similar payment reduction before?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. CMS floated a comparable concept in the 2019 Physician Fee Schedule proposed rule — a 50% cut applied to the lower-valued of two same-day services, limited to 0-day global procedures — and withdrew it after industry pushback. The CY2027 version is broader: it extends to 10- and 90-day global periods and reduces every same-day service except the single highest-valued one."
              }
            },
            {
              "@type": "Question",
              "name": "Why does this matter for radiology's per-study economics?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology already operates under an existing multiple procedure payment reduction on diagnostic imaging: a 50% technical-component discount on subsequent same-day studies, and a professional-component discount that Congress cut from 25% to 5% in 2017 after concluding interpretation work isn't materially faster on a repeat same-day read. A new, broader same-day reduction compounds that existing discount architecture, tightening the margin on each additional read or procedure and pushing groups to control cost-per-report rather than relying on volume growth alone to protect margin."
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
              <Link to="/blog/" className="text-white/60 hover:text-white text-[15px] font-light transition-colors">← Blog</Link>
              <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                Policy &amp; Reimbursement
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              CMS wants to pay 50% for a same-day second service.<br />
              <span className="text-white/60">Radiology says the math doesn't hold up.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A narrow-looking coding provision in the CY2027 Medicare Physician Fee Schedule would cut payment in half for the second service delivered at a single visit. More than 150 medical organizations just told CMS Administrator Mehmet Oz to withdraw it — and for radiology, it lands on top of a same-day discount that already exists.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '50%', label: 'Proposed pay for 2nd same-day service', sub: 'vs 100% for the highest-value one' },
            { stat: '150+', label: 'Medical groups opposing', sub: 'letter sent Aug 27, 2026' },
            { stat: 'Sep 14, 2026', label: 'Public comment deadline', sub: 'final rule expected Nov 2026' },
            { stat: '5%', label: 'Existing imaging PC discount', sub: 'cut from 25% by Congress in 2017' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What CMS actually proposed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Buried inside the <a href="https://www.cokergroup.com/insights/cms-2027-modifier-25-payment-cuts" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CY2027 Medicare Physician Fee Schedule proposed rule</a> is a provision that would extend the fee schedule's existing multiple procedure payment reduction (MPPR) logic to a new pairing: a separately identifiable office/outpatient evaluation and management (E/M) visit, billed with modifier -25, furnished on the same day as a procedure carrying a 0-, 10-, or 90-day global period. Under the proposal, the single highest-valued service on the claim would still be paid at 100% — but every other service delivered at that visit would drop to 50%.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CMS is not proposing this cold. It tried a version of the same idea in the <a href="https://www.cokergroup.com/insights/cms-2027-modifier-25-payment-cuts" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2019 Physician Fee Schedule proposed rule</a> — a 50% reduction applied only to the lower-valued of two same-day services, and only when paired with a 0-day global procedure — and withdrew it after specialty societies argued that modifier -25 itself already certifies the E/M visit is significant and separately identifiable. The CY2027 version is more expansive on both counts: it reaches 10- and 90-day globals, not just 0-day, and it discounts every same-day service except the top-valued one rather than just the cheapest.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                CMS is also soliciting comment on softening the number — asking whether 25% would be more appropriate than 50% — and on whether inpatient E/M visits should eventually be pulled into scope. The public comment period closes <strong>September 14, 2026</strong>, with a final rule expected around <strong>November 2026</strong> and most provisions effective <strong>January 1, 2027</strong>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why more than 150 medical groups pushed back
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 27, 2026, a coalition of more than 150 medical organizations — including the American College of Radiology, American Society of Neuroradiology, Society of Interventional Radiology, American College of Radiation Oncology, the American Medical Association, American College of Surgeons, American Nurses Association, and the Medical Group Management Association — <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-urge-cms-quash-proposal-would-slash-pay-2nd-services-delivered-same-visit" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">sent a joint letter</a> to CMS Administrator Dr. Mehmet Oz asking the agency to withdraw the proposal entirely, according to <em>Radiology Business</em>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Their central objection is evidentiary, not just financial: CMS's rule frames same-day pairings as "likely duplicated" without quantifying the overlap. As the letter puts it, "a payment reduction of this scope&nbsp;… should rest on demonstrated duplication&nbsp;… not an assumption." The groups argue CMS has not identified which resources it believes are shared, nor shown that the fee schedule is systematically overpaying these encounters.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                They also flag a distributional problem: a flat, across-the-board reduction would hit independent, office-based practices hardest, since those groups can't offset a 50% cut with facility-fee revenue the way a hospital-owned site can. In some cases, the coalition warns, the discounted payment would fall below the actual cost of providing the service — a dynamic that tends to accelerate practice consolidation rather than curb it. Their preferred fix is narrower: route any genuine overlap through the existing misvalued-code process and RVS Update Committee review, code by code, instead of a blanket percentage cut.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Radiology has been here before — and lost the first round
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For diagnostic imaging specifically, "the second same-day service gets discounted" is not a new idea — it's already the rule. CMS has applied an MPPR to the technical component of imaging since 2006, paying 50% for each subsequent same-day study on contiguous body areas. In 2012, CMS extended a comparable discount to the professional component — the radiologist's interpretation — at a 25% reduction, on the theory that reading a second same-day study takes meaningfully less physician time and effort.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Radiology pushed back on that assumption for years, and Congress ultimately agreed: Section 502(a)(2) of the Consolidated Appropriations Act of 2016 cut the professional-component reduction from 25% down to <strong>5%</strong>, effective January 1, 2017 — close to a full reversal. The lesson from that fight is directly relevant now: CMS's newest same-day reduction rests on the same "shared efficiencies" logic that radiology already spent years, and one act of Congress, unwinding for its own interpretive work.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Existing vs. proposed same-day discounts
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Policy</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Applies to</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Discount on 2nd+ service</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Imaging MPPR — technical component</td>
                      <td className="py-3 pr-4">Contiguous-area imaging, same day, in place since 2006</td>
                      <td className="py-3">50% reduction</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Imaging MPPR — professional component</td>
                      <td className="py-3 pr-4">Same-day interpretations; cut by Congress in 2017</td>
                      <td className="py-3">5% reduction (was 25%)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">2019 proposal (withdrawn)</td>
                      <td className="py-3 pr-4">Lower-valued service, 0-day globals only</td>
                      <td className="py-3">50% reduction</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">CY2027 proposal (pending)</td>
                      <td className="py-3 pr-4">All but the highest-value service, 0-/10-/90-day globals</td>
                      <td className="py-3">50% reduction (comment sought on 25%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The angle that matters more than the headline number
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The keyword search volume around this specific provision is small — this is a mechanical coding change, not a broad rate cut like the fee schedule's conversion factor. But mechanical is exactly what makes it worth tracking closely: it doesn't change how much a single, isolated study is worth. It changes what the second and third service at a visit are worth, which is a per-encounter economics question, not a per-code one.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For a radiology group, that shows up directly in blended reimbursement per read whenever a patient visit generates more than one billable service — an interventional case paired with a same-day E/M visit, or a diagnostic encounter with more than one study. Each additional 50% haircut, stacked on an imaging MPPR framework that already discounts second same-day reads, means the marginal read has to cost less to produce in order to stay worth doing at all. Practices can't out-earn that compression by simply reading more volume if the volume itself is being paid at half rate; the lever that's left is the cost of producing each report.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Reimbursement policy is set in Washington; cost per report is not. When a growing share of same-day services are paid at a discount, the practices best positioned are the ones that have already lowered the cost of producing a report — not by cutting corners on interpretation, but by cutting the dictation, templating, and turnaround time around it. That's the specific problem AI-assisted structured reporting is built to solve: a foundation-model draft that a radiologist reviews and edits, arriving ready-to-sign rather than dictated from a blank template, so the marginal read stays economically viable even as CMS discounts it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the CMS multiple procedure payment reduction proposal for 2027?',
                    a: 'In the CY2027 Medicare Physician Fee Schedule proposed rule, CMS proposed paying the highest-valued service on a claim at 100% and reducing every other same-day service — including a separately identifiable office/outpatient E/M visit billed with modifier -25 alongside a procedure carrying a 0-, 10-, or 90-day global period — to 50%. CMS says it is soliciting comment on whether that reduction should instead be set lower, such as 25%.',
                  },
                  {
                    q: 'Who is opposing the CMS same-day payment reduction proposal?',
                    a: 'More than 150 medical organizations — including the American College of Radiology, American Society of Neuroradiology, Society of Interventional Radiology, American College of Radiation Oncology, American Medical Association, American College of Surgeons, American Nurses Association, and the Medical Group Management Association — sent a joint letter to CMS Administrator Dr. Mehmet Oz on August 27, 2026, urging CMS to withdraw the proposal.',
                  },
                  {
                    q: 'Has CMS tried a similar payment reduction before?',
                    a: 'Yes. CMS floated a comparable concept in the 2019 Physician Fee Schedule proposed rule — a 50% cut applied to the lower-valued of two same-day services, limited to 0-day global procedures — and withdrew it after industry pushback. The CY2027 version is broader: it extends to 10- and 90-day global periods and reduces every same-day service except the single highest-valued one.',
                  },
                  {
                    q: "Why does this matter for radiology's per-study economics?",
                    a: "Radiology already operates under an existing multiple procedure payment reduction on diagnostic imaging: a 50% technical-component discount on subsequent same-day studies, and a professional-component discount that Congress cut from 25% to 5% in 2017 after concluding interpretation work isn't materially faster on a repeat same-day read. A new, broader same-day reduction compounds that existing discount architecture, tightening the margin on each additional read or procedure and pushing groups to control cost-per-report rather than relying on volume growth alone to protect margin.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-urge-cms-quash-proposal-would-slash-pay-2nd-services-delivered-same-visit" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, with rule-mechanics detail from <a href="https://www.cokergroup.com/insights/cms-2027-modifier-25-payment-cuts" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Coker Group</a> and historical MPPR context from the <a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Transmittals/downloads/R3578CP.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS transmittal on the professional-component MPPR</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Protect your per-read margin, not just your volume"
          sub="See how AI-assisted structured reporting cuts cost-per-report — try it on 5 free studies."
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
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained</div>
              </Link>
              <Link to="/blog/radiology-revenue-cycle-management/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Revenue Cycle</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The $2.6M Radiology Billing Gap Is Also a Reporting Problem</div>
              </Link>
              <Link to="/blog/radiology-private-equity-stay-independent/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Practice Strategy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology and Private Equity: How Independent Groups Can Stay Independent</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MultipleProcedurePaymentReductionRadiology;
