import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const ImagingReimbursementAdvocacyCoalition = () => {
  const post = {
    title: 'A New Imaging Advocacy Coalition Just Launched. Here Is the Playbook CT and Radiology Groups Should Study',
    dateIso: '2026-09-11',
    date: 'September 11, 2026',
    category: 'Policy & Advocacy',
    readingTime: 7,
    description: 'A national physician alliance just organized to protect PET imaging reimbursement. The advocacy playbook it used, and what CT and radiology groups should copy.',
  };

  const canonical = 'https://xaid.ai/blog/imaging-reimbursement-advocacy-coalition/';

  return (
    <>
      <Helmet defer={false}>
        <title>Imaging Reimbursement Advocacy: A Coalition Playbook | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Imaging Reimbursement Advocacy: A Coalition Playbook | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imaging Reimbursement Advocacy: A Coalition Playbook | xAID" />
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
          "keywords": "imaging reimbursement advocacy coalition, radiology advocacy, PET imaging reimbursement, CT reimbursement policy, radiology PAC"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Cardiac PET Alliance and why was it formed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Cardiac PET Alliance is a physician-led coalition that launched on September 9, 2026. It collaborates with the American College of Cardiology, MedAxiom, the American Society of Nuclear Cardiology, and the Association of Black Cardiologists, among other organizations, on education, research and advocacy. It represents more than 1,200 cardiologists across 101 cardiovascular group practices in 24 states, supporting practices that perform more than 400,000 cardiac PET studies a year, and it was formed to protect and expand patient access to cardiac PET imaging."
              }
            },
            {
              "@type": "Question",
              "name": "What reimbursement pressure prompted cardiology to organize nationally?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nuclear cardiology has absorbed a string of Medicare payment changes in recent years. In the 2026 Hospital Outpatient Prospective Payment System final rule, CMS reassigned cardiac PET code 78432 to a lower-paying payment classification, cutting its rate from about $1,850.50 to about $1,550.50, and reassigned amyloid imaging code 78803 to a classification that cuts its national rate roughly in half. Coalitions like this typically form when a specialty sees payment and coverage decisions being made without a unified physician voice at the table."
              }
            },
            {
              "@type": "Question",
              "name": "What can CT and radiology groups learn from this advocacy playbook?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The recurring elements are: multiple professional societies backing one coalition instead of lobbying separately, leading with hard scale numbers (members, practices, states, annual study volume), pairing clinical evidence with a cost argument, framing the issue around access and health equity rather than practice revenue alone, running parallel policymaker-facing and patient-facing messaging, and following up with direct legislative engagement such as Hill visits. Radiology already has comparable infrastructure in RADPAC and the American College of Radiology's advocacy arm, so the model is not foreign to CT groups."
              }
            },
            {
              "@type": "Question",
              "name": "Is there a similar advocacy effort already underway in radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. RADPAC, the specialty's largest political action committee, launched a dedicated Teleradiology Subcommittee in 2026 to give remote-reading radiologists a coordinated voice on issues such as multi-state licensure and CMS supervision rules. It is a smaller, earlier-stage effort than the Cardiac PET Alliance, but it follows the same underlying logic: organize before the reimbursement fight, not during it."
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
                Policy &amp; Advocacy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A new imaging advocacy coalition just launched.<br />
              <span className="text-white/60">Here's the playbook CT and radiology groups should study.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Cardiology just did something radiology has done before and will likely need to do again: it organized nationally, ahead of a reimbursement fight, instead of during one. The specifics are cardiac PET. The playbook is transferable.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,200+', label: 'Cardiologists represented', sub: 'across the new coalition' },
            { stat: '101', label: 'Cardiovascular group practices', sub: 'in 24 states' },
            { stat: '400,000+', label: 'Cardiac PET studies a year', sub: 'performed by member practices' },
            { stat: '4', label: 'Collaborating societies', sub: 'backing the coalition\'s mission' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What launched, and why now
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 9, 2026, the <a href="https://www.prnewswire.com/news-releases/cardiac-pet-alliance-launches-to-protect-patient-access-to-the-nations-most-advanced-non-invasive-cardiac-imaging-technology-302873890.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Cardiac PET Alliance announced its formal launch</a>, describing itself as the country's only physician-led organization dedicated exclusively to advancing cardiac PET imaging and protecting patient access to it. Its launch members are a set of cardiology practices and imaging groups, and it collaborates with four established societies — the American College of Cardiology, MedAxiom, the American Society of Nuclear Cardiology, and the Association of Black Cardiologists, among other organizations — on education, research and advocacy, rather than operating as a single group's initiative.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Alliance leads with scale: more than <strong>1,200 cardiologists</strong> across <strong>101 cardiovascular group practices</strong> in <strong>24 states</strong>, supporting practices that together perform more than <strong>400,000 cardiac PET studies annually</strong>. "Cardiac PET represents one of the most important advances in cardiovascular imaging," said Tim Attebery, the Alliance's executive director, in the launch announcement. Rick W. Snyder, MD, FACC, the Alliance's president, added that "every day, cardiologists and radiologists rely on cardiac PET to provide the most accurate diagnostic information possible."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The timing is not incidental. Nuclear cardiology has spent the past two years absorbing successive Medicare payment changes. In the <a href="https://www.acc.org/Latest-in-Cardiology/Articles/2025/12/04/11/10/Highlights-From-the-2026-Hospital-OPPS-Final-Rule" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2026 Hospital Outpatient Prospective Payment System final rule</a>, CMS reassigned cardiac PET code 78432 to a lower-paying classification — cutting the national rate from roughly $1,850.50 to about $1,550.50 — and moved amyloid-imaging code 78803 to a group that roughly halves its payment. Individually, each rule change is a coding dispute. Collectively, they're the kind of drip-drip erosion that pushes a specialty from writing comment letters to building standing infrastructure.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Anatomy of the playbook
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                Strip away the cardiac-specific details and a repeatable structure emerges — one that shows up whenever a specialty organizes ahead of a reimbursement fight rather than in reaction to one.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Playbook element</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">How the Cardiac PET Alliance did it</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">CT / radiology equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Coalition, not one group</td>
                      <td className="py-3 pr-4">A new entity backed by four established societies (ACC, MedAxiom, ASNC, Association of Black Cardiologists), not a single group acting alone</td>
                      <td className="py-3">ACR, subspecialty societies and RADPAC coordinating one voice instead of separate letters</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Scale as credibility</td>
                      <td className="py-3 pr-4">Leads every statement with 1,200+ cardiologists, 101 practices, 24 states, 400,000+ studies/year</td>
                      <td className="py-3">CT/radiology groups quantifying reads per year, states covered, and FTEs affected by a rule</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Clinical case + cost case, together</td>
                      <td className="py-3 pr-4">Pairs diagnostic-accuracy claims with a cost-avoidance argument, not accuracy alone</td>
                      <td className="py-3">Tying report turnaround and accuracy data to downstream cost avoidance, not just quality metrics</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Access and equity framing</td>
                      <td className="py-3 pr-4">Names disparities for women and Black patients and access gaps in rural communities as core to the mission</td>
                      <td className="py-3">Framing coverage-desert and after-hours access gaps as a patient-access issue, not a margin issue</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">Two-track messaging</td>
                      <td className="py-3 pr-4">A clinician/policy site plus a separate patient-facing education site</td>
                      <td className="py-3">Pairing technical advocacy materials with plain-language patient-facing explainers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Playbook elements and Cardiac PET Alliance specifics per its <a href="https://www.prnewswire.com/news-releases/cardiac-pet-alliance-launches-to-protect-patient-access-to-the-nations-most-advanced-non-invasive-cardiac-imaging-technology-302873890.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">launch announcement</a>; the CT/radiology column is this article's generalization, not an existing program.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The same reimbursement pressure is already hitting CT and radiology
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this is unique to nuclear cardiology. CT and general radiology groups have faced their own version of the same squeeze: recurring proposed cuts to the Medicare Physician Fee Schedule conversion factor, prior-authorization burden on advanced imaging, and consolidation pressure from private equity that changes who gets a seat at the negotiating table. Radiology has already built comparable infrastructure to respond. <Link to="/blog/teleradiology-companies-policy-watchlist/" className="text-xaid-blue-strong underline underline-offset-2">RADPAC — the specialty's largest political action committee — launched a dedicated Teleradiology Subcommittee</Link> earlier in 2026, chaired by Kimberly Beavers, MD, to give remote-reading radiologists a coordinated voice on issues like multi-state licensure compacts and CMS supervision rules. A federal appeals court also <Link to="/blog/qualifying-payment-amount-no-surprises-act/" className="text-xaid-blue-strong underline underline-offset-2">vacated the No Surprises Act's QPA formula</Link> this year, reshaping out-of-network reimbursement leverage for radiology groups that negotiate with payers.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The pattern across all of these: reimbursement policy for imaging is decided in venues — CMS rulemaking, congressional committees, payer medical-policy boards — where a fragmented specialty is easy to deprioritize and a coordinated one with real numbers is harder to ignore.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What to take from this before your own fight
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Organize before the rule drops, not after',
                    desc: 'The Alliance formed after several years of incremental PET payment cuts, not after a single catastrophic one. Waiting for a final rule to be published is waiting too long — comment periods and Hill schedules move faster than ad hoc coalitions can stand up.',
                  },
                  {
                    title: 'Bring your utilization data, not just your position',
                    desc: 'Every public statement from the Alliance opens with a number — cardiologists, practices, states, annual studies. CT and radiology groups sitting on their own read volume, turnaround time, and coverage-area data have the raw material for the same kind of credibility anchor; the limiting factor is usually that it is scattered across PACS and billing systems rather than aggregated.',
                  },
                  {
                    title: 'Frame the ask as patient access, not practice revenue',
                    desc: 'The Alliance ties its case to rural mobile PET access and diagnostic disparities affecting women and Black patients — a framing regulators and legislators respond to differently than a straightforward payment-rate appeal. The equivalent for CT groups is framing after-hours and rural coverage gaps, not fee-schedule cuts, as the headline issue.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Advocacy is a governance and political problem xAID doesn't solve — that's the work of ACR, RADPAC, and coalitions like this one. What AI CT reporting changes is the raw material groups bring to that fight: consistent, structured report data across a practice's full read volume is exactly the kind of utilization evidence a coalition needs to make its case, and freeing radiologist hours currently spent on routine dictation gives independent and hospital-based groups more capacity to actually show up at a Hill visit or comment-letter deadline. Every xAID report still comes back ready-to-sign, with in-house radiologist review on every preliminary — the final signature stays with the client's reading radiologist. That's an operational lever, not a substitute for organizing; the coalition still has to be built.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the Cardiac PET Alliance and why was it formed?',
                    a: 'The Cardiac PET Alliance is a physician-led coalition that launched on September 9, 2026. It collaborates with the American College of Cardiology, MedAxiom, the American Society of Nuclear Cardiology, and the Association of Black Cardiologists, among other organizations, on education, research and advocacy. It represents more than 1,200 cardiologists across 101 cardiovascular group practices in 24 states, supporting practices that perform more than 400,000 cardiac PET studies a year, and it was formed to protect and expand patient access to cardiac PET imaging.',
                  },
                  {
                    q: 'What reimbursement pressure prompted cardiology to organize nationally?',
                    a: 'Nuclear cardiology has absorbed a string of Medicare payment changes in recent years. In the 2026 Hospital Outpatient Prospective Payment System final rule, CMS reassigned cardiac PET code 78432 to a lower-paying payment classification, cutting its rate from about $1,850.50 to about $1,550.50, and reassigned amyloid imaging code 78803 to a classification that cuts its national rate roughly in half. Coalitions like this typically form when a specialty sees payment and coverage decisions being made without a unified physician voice at the table.',
                  },
                  {
                    q: 'What can CT and radiology groups learn from this advocacy playbook?',
                    a: "The recurring elements are: multiple professional societies backing one coalition instead of lobbying separately, leading with hard scale numbers (members, practices, states, annual study volume), pairing clinical evidence with a cost argument, framing the issue around access and health equity rather than practice revenue alone, running parallel policymaker-facing and patient-facing messaging, and following up with direct legislative engagement such as Hill visits. Radiology already has comparable infrastructure in RADPAC and the American College of Radiology's advocacy arm, so the model is not foreign to CT groups.",
                  },
                  {
                    q: 'Is there a similar advocacy effort already underway in radiology?',
                    a: 'Yes. RADPAC, the specialty\'s largest political action committee, launched a dedicated Teleradiology Subcommittee in 2026 to give remote-reading radiologists a coordinated voice on issues such as multi-state licensure and CMS supervision rules. It is a smaller, earlier-stage effort than the Cardiac PET Alliance, but it follows the same underlying logic: organize before the reimbursement fight, not during it.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.prnewswire.com/news-releases/cardiac-pet-alliance-launches-to-protect-patient-access-to-the-nations-most-advanced-non-invasive-cardiac-imaging-technology-302873890.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Cardiac PET Alliance launch announcement</a> (PR Newswire, September 9, 2026); <a href="https://www.acc.org/Latest-in-Cardiology/Articles/2025/12/04/11/10/Highlights-From-the-2026-Hospital-OPPS-Final-Rule" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Cardiology, "Highlights From the 2026 Hospital OPPS Final Rule"</a>; <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radpac-launches-new-subcommittee-dedicated-teleradiology-advocacy" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business, "RADPAC launches new subcommittee dedicated to teleradiology advocacy"</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Free the hours advocacy takes"
          sub="AI CT reporting gives your radiologists back the routine-read time that comment letters and Hill visits compete with. See it on 5 free studies."
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
              <Link to="/blog/teleradiology-companies-policy-watchlist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Advocacy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Teleradiology Just Got Its Own Lobby</div>
              </Link>
              <Link to="/blog/qualifying-payment-amount-no-surprises-act/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">QPA Formula Struck Down: What It Means for Radiology</div>
              </Link>
              <Link to="/blog/radiology-private-equity-stay-independent/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology and Private Equity: How Independent Groups Can Stay Independent</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ImagingReimbursementAdvocacyCoalition;
