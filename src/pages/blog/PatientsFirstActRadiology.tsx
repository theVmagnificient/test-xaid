import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const PatientsFirstActRadiology = () => {
  const post = {
    title: 'The Patients First Act: What It Means for Radiology Pay',
    dateIso: '2026-07-17',
    date: 'July 17, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description:
      "Physician lawmakers introduced the bipartisan Patients First Act — an inflation-linked payment update, a 2.5% cap on conversion-factor swings, anti-consolidation incentives, and a revived imaging AUC program. What it would do for independent radiology groups.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Patients First Act: Radiology Medicare Fix | xAID</title>
        <meta name="description" content="The bipartisan Patients First Act would link Medicare pay to inflation, cap conversion-factor cuts at 2.5%, and revive imaging AUC. What it means for radiology." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Patients First Act: Radiology Medicare Fix | xAID" />
        <meta property="og:description" content="The bipartisan Patients First Act would link Medicare pay to inflation, cap conversion-factor cuts at 2.5%, and revive imaging AUC. What it means for radiology." />
        <meta property="og:url" content="https://xaid.ai/blog/patients-first-act-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Patients First Act: Radiology Medicare Fix | xAID" />
        <meta name="twitter:description" content="The bipartisan Patients First Act would link Medicare pay to inflation, cap conversion-factor cuts at 2.5%, and revive imaging AUC. What it means for radiology." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/patients-first-act-radiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/patients-first-act-radiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "patients first act radiology, patients first act 2026, ROOT act imaging AUC, medicare conversion factor radiology, independent radiology practice, radiology consolidation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Patients First Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Patients First Act of 2026 is a bipartisan House bill introduced by physician-lawmakers Reps. John Joyce, MD (R-PA), Greg Murphy, MD (R-NC), and Kim Schrier, MD (D-WA), the chairs of the GOP and Democratic Doctors Caucuses. It would replace the current MACRA-era update formula with a payment update tied to inflation, cap year-to-year conversion-factor swings, raise the budget-neutrality threshold, create a primary care hybrid payment pilot for independent practices, and revive Medicare's imaging appropriate use criteria (AUC) program through the incorporated ROOT Act. It was introduced the day after CMS released the 2027 Medicare fee schedule."
              }
            },
            {
              "@type": "Question",
              "name": "How would the Patients First Act change Medicare physician pay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The bill would tie the Medicare physician fee schedule update to inflation — specifically the Medicare Economic Index minus one percentage point — instead of the current fixed statutory updates. It would also limit year-to-year changes in the conversion factor to 2.5% to avoid large swings, and raise the budget-neutrality threshold from $20 million to $54.3 million (adjusted for inflation every five years), giving CMS more room to make rate adjustments without triggering across-the-board cuts."
              }
            },
            {
              "@type": "Question",
              "name": "What is the ROOT Act and how does it affect imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Radiology Outpatient Ordering Transmission (ROOT) Act, incorporated into the Patients First Act, would modernize and revive Medicare's imaging appropriate use criteria (AUC) program, which CMS shelved in 2023. It amends the AUC section of the Protecting Access to Medicare Act of 2014 to reduce data-collection burdens, and would have ordering clinicians consult evidence-based clinical decision support before ordering advanced imaging. The American College of Radiology, which supports the provision, cites projected savings of roughly $2 billion for Medicare and $1.5 billion for beneficiaries over 10 years."
              }
            },
            {
              "@type": "Question",
              "name": "Does an independent radiology group need this bill to pass to protect its margin?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The bill, if enacted, would slow the erosion of the conversion factor and reward independent practices, but its outcome is uncertain and its effects would phase in over years. The revenue attached to each study still trends down over time regardless. The lever a group controls now is cost per study — how many studies each radiologist-hour turns into a signed, billable report. AI that drafts a structured, comprehensive report lets a radiologist review and sign more studies per hour instead of dictating each from scratch, which improves margin whether or not the legislation passes."
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
              The Patients First Act: the legislative counterweight to the 2027 pay cut<br />
              <span className="text-white/60">and what it would actually do for independent radiology</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A day after CMS proposed another conversion-factor cut for 2027, three physician-lawmakers introduced a bipartisan bill to link Medicare pay to inflation, cap the swings, reward independent practices, and revive imaging appropriate use criteria. Here is what is in it — and why the cost side of the ledger matters to your margin either way.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: 'MEI −1', label: 'Proposed annual update', sub: 'inflation index minus 1 point' },
                { stat: '2.5%', label: 'Cap on annual swings', sub: 'in the conversion factor' },
                { stat: '$54.3M', label: 'New budget-neutrality floor', sub: 'up from $20M today' },
                { stat: '~$2B', label: 'Projected 10-yr AUC savings', sub: 'to Medicare (ROOT Act)' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1 break-words">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1 break-words">{s.label}</div>
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
                A bill built as a direct answer to the cut
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The timing was deliberate. One day after CMS released the proposed 2027 Medicare Physician Fee Schedule — which trims the conversion factor by more than 1% — three physicians in Congress introduced the <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/physician-lawmakers-introduce-bipartisan-fix-radiologist-medicare-pay-woes" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Patients First Act of 2026</a>. The sponsors are Reps. John Joyce, MD (R-PA), Greg Murphy, MD (R-NC), and Kim Schrier, MD (D-WA) — the respective chairs of the GOP and Democratic Doctors Caucuses. That a Democrat and two Republicans, all practicing physicians, put their names on the same bill is the headline: the fix is being framed as a bipartisan structural repair, not a one-year patch.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The mechanics of the 2027 cut itself — the exact conversion-factor dollar figures and why CMS still projects a net positive for radiology this year — are a separate story. This piece is about the legislative response: what the Patients First Act would change if it became law, and why it matters to independent groups regardless of whether it passes.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the bill would actually do
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Three provisions matter most for radiology economics:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'An inflation-linked payment update',
                    desc: 'The bill would abandon the fixed year-to-year update formula set under the 2015 MACRA law and instead tie the fee-schedule update to inflation — specifically the Medicare Economic Index minus one percentage point. That replaces the flat, sub-inflation statutory bumps that have let physician pay fall behind rising practice costs.',
                  },
                  {
                    title: 'A 2.5% cap on conversion-factor swings',
                    desc: 'Year-to-year changes in the conversion factor would be limited to 2.5% in either direction, "to avoid any substantial swings in reimbursement for physicians." Predictability, not just level, is the point — groups plan hiring and capital against the multiplier that sets revenue per study.',
                  },
                  {
                    title: 'A higher budget-neutrality threshold',
                    desc: 'CMS would gain more room to adjust rates in rulemaking by raising the budget-neutrality trigger from $20 million to $54.3 million, with inflation adjustments every five years. A higher floor means fewer of the across-the-board conversion-factor cuts that get triggered when one code revaluation ripples through the whole schedule.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The bill also establishes a primary care hybrid payment pilot: independent physicians would receive a per-member-per-month capitated payment alongside part of their traditional fee-for-service reimbursement, with no patient cost sharing. The pilot is aimed squarely at physician-owned practices — the through-line of the whole bill.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The politics: reversing "decades of consolidation"
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The sponsors describe the bill as bolstering incentives to save independent practices and "reversing decades of consolidation." That framing is the political spine of the legislation, and it is the part most relevant to radiology's ownership structure. When the fee schedule pays less and gets less predictable, small and mid-size groups are the ones that get squeezed into selling — to hospitals, to national teleradiology chains, or to private equity. A payment update that keeps pace with inflation and caps the downside is, functionally, an anti-consolidation lever: it makes staying independent financially survivable.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For radiology specifically, consolidation pressure is already acute — it is a recurring theme in <Link to="/blog/radiology-private-equity-stay-independent/" className="text-xaid-blue-strong underline underline-offset-2">whether groups can stay independent under private-equity roll-ups</Link>, and it interacts with the facility-side <Link to="/blog/site-neutral-payments-imaging/" className="text-xaid-blue-strong underline underline-offset-2">site-neutral payment cuts</Link> hitting hospital outpatient imaging. The Patients First Act attacks the professional-fee side of the same squeeze.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The imaging piece: the ROOT Act and appropriate use criteria
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The most radiology-specific provision is the incorporation of the Radiology Outpatient Ordering Transmission (ROOT) Act, which the <a href="https://www.itnonline.com/content/acr-applauds-root-act-inclusion-house-medicare-reform-bill" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology publicly applauded</a>. The ROOT Act would revive Medicare's imaging appropriate use criteria (AUC) program — the requirement that a referring clinician consult evidence-based clinical decision support before ordering advanced imaging. CMS shelved that program in 2023 after years of implementation delays; the ROOT Act amends the AUC section of the 2014 Protecting Access to Medicare Act to "reduce burdens and barriers" in the data-collection requirements and bring it back in a workable form.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ACR CEO Dana H. Smetherman, MD, framed it as "a practical path forward that can help improve access and ensure patients receive the most appropriate imaging exams while reducing unnecessary, low-value scans and associated costs." The ACR cites projected savings of roughly <strong>$2 billion</strong> to Medicare and <strong>$1.5 billion</strong> to beneficiaries over 10 years.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The AUC angle cuts a specific way for reading radiologists. AUC is a demand-side control aimed at <em>ordering</em> physicians — it targets the low-value scans that shouldn't be ordered in the first place, a problem we've covered under <Link to="/blog/overutilization-of-medical-imaging/" className="text-xaid-blue-strong underline underline-offset-2">the overutilization of medical imaging</Link>. If it works, it dampens the growth of marginal studies. It does not, however, touch the cost of interpreting the studies that <em>are</em> ordered — and volume from an aging population keeps rising faster than AUC can trim it.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[15px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Lever</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">What it targets</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Who controls it / timing</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Inflation-linked update + 2.5% cap</td>
                      <td className="py-3 pr-4">Revenue per study (professional fee)</td>
                      <td className="py-3">Congress; uncertain, phases in over years</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Anti-consolidation incentives</td>
                      <td className="py-3 pr-4">Independent-practice survival</td>
                      <td className="py-3">Congress; uncertain</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">ROOT Act / imaging AUC</td>
                      <td className="py-3 pr-4">Volume of low-value ordered scans</td>
                      <td className="py-3">Congress + ordering clinicians; uncertain</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Cost per interpreted study</td>
                      <td className="py-3 pr-4">Reporting throughput / margin</td>
                      <td className="py-3">The group itself; available now</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the cost side matters whether or not the bill passes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A bill is not a law. The Patients First Act has real bipartisan backing and endorsements from the ACR and the American College of Physicians, but its path through Congress is uncertain and its effects would phase in over years. Even in the best case, an inflation-linked update slows the erosion of revenue per study; it does not reverse it, and it does nothing about the interpretation cost sitting on the other side of the ledger.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That is the lever a group actually controls today. Margin on Medicare imaging is a function of how many studies each radiologist-hour turns into a signed, billable report. Adding radiologists raises cost in a supply-constrained market; raising throughput per radiologist does not. AI that drafts a structured, comprehensive report lets a radiologist review and sign more studies per hour instead of dictating each one from a blank screen.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is how <Link to="/for-teleradiology-companies/" className="text-xaid-blue-strong underline underline-offset-2">xAID is built to work for reading groups</Link>: the AI produces a structured CT report, xAID's in-house European radiologists review every preliminary, and it is delivered ready-to-sign so your reading radiologist signs the final. Legislation moves the revenue line slowly and unpredictably; reporting throughput is the margin lever an independent group can pull now.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the Patients First Act?',
                    a: "The Patients First Act of 2026 is a bipartisan House bill introduced by physician-lawmakers Reps. John Joyce, MD (R-PA), Greg Murphy, MD (R-NC), and Kim Schrier, MD (D-WA), the chairs of the GOP and Democratic Doctors Caucuses. It would replace the current MACRA-era update formula with a payment update tied to inflation, cap year-to-year conversion-factor swings, raise the budget-neutrality threshold, create a primary care hybrid payment pilot for independent practices, and revive Medicare's imaging appropriate use criteria (AUC) program through the incorporated ROOT Act. It was introduced the day after CMS released the 2027 Medicare fee schedule.",
                  },
                  {
                    q: 'How would the Patients First Act change Medicare physician pay?',
                    a: 'The bill would tie the Medicare physician fee schedule update to inflation — specifically the Medicare Economic Index minus one percentage point — instead of the current fixed statutory updates. It would also limit year-to-year changes in the conversion factor to 2.5% to avoid large swings, and raise the budget-neutrality threshold from $20 million to $54.3 million (adjusted for inflation every five years), giving CMS more room to make rate adjustments without triggering across-the-board cuts.',
                  },
                  {
                    q: 'What is the ROOT Act and how does it affect imaging?',
                    a: 'The Radiology Outpatient Ordering Transmission (ROOT) Act, incorporated into the Patients First Act, would modernize and revive Medicare’s imaging appropriate use criteria (AUC) program, which CMS shelved in 2023. It amends the AUC section of the Protecting Access to Medicare Act of 2014 to reduce data-collection burdens, and would have ordering clinicians consult evidence-based clinical decision support before ordering advanced imaging. The American College of Radiology, which supports the provision, cites projected savings of roughly $2 billion for Medicare and $1.5 billion for beneficiaries over 10 years.',
                  },
                  {
                    q: 'Does an independent radiology group need this bill to pass to protect its margin?',
                    a: 'No. The bill, if enacted, would slow the erosion of the conversion factor and reward independent practices, but its outcome is uncertain and its effects would phase in over years. The revenue attached to each study still trends down over time regardless. The lever a group controls now is cost per study — how many studies each radiologist-hour turns into a signed, billable report. AI that drafts a structured, comprehensive report lets a radiologist review and sign more studies per hour instead of dictating each from scratch, which improves margin whether or not the legislation passes.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Radiology Business coverage of the Patients First Act of 2026, <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/physician-lawmakers-introduce-bipartisan-fix-radiologist-medicare-pay-woes" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Physician lawmakers introduce bipartisan fix for radiologist Medicare pay woes"</a>; the sponsors' <a href="https://johnjoyce.house.gov/media/press-releases/drs-joyce-murphy-and-schrier-introduce-bipartisan-patients-first-act" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">joint announcement</a>; and ACR commentary on the ROOT Act via <a href="https://www.itnonline.com/content/acr-applauds-root-act-inclusion-house-medicare-reform-bill" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ITN Online</a>. Figures are as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Legislation moves revenue slowly. Throughput is yours now."
          sub="xAID drafts structured CT reports your radiologist signs — more studies per hour, in-house review on every preliminary. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Private Equity in Radiology: How to Stay Independent</div>
              </Link>
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments and Imaging Margins</div>
              </Link>
              <Link to="/blog/overutilization-of-medical-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Overutilization of Medical Imaging</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PatientsFirstActRadiology;
