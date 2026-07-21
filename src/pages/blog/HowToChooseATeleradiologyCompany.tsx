import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const HowToChooseATeleradiologyCompany = () => {
  const post = {
    title: "How to Choose a Teleradiology Company: A Buyer's Guide",
    dateIso: '2026-07-21',
    date: 'July 21, 2026',
    category: 'Buyer Guide',
    readingTime: 10,
    description:
      "How to choose a teleradiology company: prelim vs final reads, turnaround SLAs, subspecialty coverage, QA, pricing, and the questions to ask before signing.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>How to Choose a Teleradiology Company | xAID</title>
        <meta name="description" content="How to choose a teleradiology company: prelim vs final reads, turnaround SLAs, subspecialty coverage, QA, pricing, and the questions to ask before signing." />
        <link rel="canonical" href="https://xaid.ai/blog/how-to-choose-a-teleradiology-company" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Choose a Teleradiology Company | xAID" />
        <meta property="og:description" content="How to choose a teleradiology company: prelim vs final reads, turnaround SLAs, subspecialty coverage, QA, pricing, and the questions to ask before signing." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Choose a Teleradiology Company | xAID" />
        <meta name="twitter:description" content="How to choose a teleradiology company: prelim vs final reads, turnaround SLAs, subspecialty coverage, QA, pricing, and the questions to ask before signing." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/how-to-choose-a-teleradiology-company" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/how-to-choose-a-teleradiology-company",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "how to choose a teleradiology company, teleradiology solutions, teleradiology companies, teleradiology specialists, teleradiology buyer's guide, preliminary vs final read"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What's the difference between a preliminary and a final read?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A preliminary read is a first interpretation — often overnight or STAT — that guides immediate patient management but is later reviewed and finalized by a radiologist at the ordering facility. A final read is the definitive, signed report of record, issued by the remote radiologist where licensure and credentialing allow it. Before you sign with any teleradiology company, confirm in writing which service tier you're buying for which study types, since it determines who is accountable for the report."
              }
            },
            {
              "@type": "Question",
              "name": "What turnaround time should a teleradiology company guarantee?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask for per-priority-tier turnaround commitments (emergent, STAT, routine) measured per study, not averaged, with financial remedies for missed targets. As a reference point, the VA's National Teleradiology Program — one of the largest outsourced-read operations in the country — met its 1-hour STAT benchmark on 78.9% of about 1.08 million stat studies and its 48-hour routine benchmark on 69.3% of 363,830 routine studies in fiscal year 2024. If a national program with defined SLAs still misses roughly one in five STAT targets, an unwritten promise from a smaller vendor is worth even less."
              }
            },
            {
              "@type": "Question",
              "name": "How do I evaluate teleradiology specialists for subspecialty coverage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask for a named roster of fellowship-trained teleradiology specialists by subspecialty and modality, not a generic count of 'network radiologists.' Subspecialty training measurably changes interpretation quality: a single-center study of 506 neuroradiology second-opinion cases found major discrepancies in 13% of cases and minor discrepancies in 21% when a subspecialist re-reviewed a general radiologist's read (Clinical Radiology, 2008), and day-to-day radiologist discrepancy rates run 3-5% across routine reporting more broadly (Insights into Imaging, 2017). Ask which study types get routed to generalists versus named subspecialists for your case mix."
              }
            },
            {
              "@type": "Question",
              "name": "What quality assurance process should a teleradiology company have?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At minimum: participation in a structured peer-review program (the ACR's RADPEER system, used across more than 1,000 practices and 18,000+ radiologists, is the industry standard), a documented process for escalating discrepant or critical findings, and a flat prohibition on 'ghost reading' — a radiologist signing a report initially interpreted by someone else without independently reviewing the images. That pattern is not hypothetical: it is exactly what triggered a $3.1 million federal False Claims Act settlement in 2024. In a 2019 national survey, 53.8% of radiologists who had used teleradiology named quality assurance among their top challenges — so ask vendors to show their QA process, not just claim one exists."
              }
            },
            {
              "@type": "Question",
              "name": "How are teleradiology companies typically priced?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most teleradiology companies price per study (fee-for-service), with tiered add-ons for STAT/urgent priority, subspecialty reads, and after-hours coverage; some also offer capacity-based or subscription contracts with a fixed monthly study volume. Costs vary widely by modality and complexity because personnel time is the dominant cost driver — a European Radiology cost analysis of a teleradiology service found personnel costs represented up to 68% of total costs, with average interpretation time ranging from about 55 minutes for X-ray to 72 minutes for whole-body CT. Ask for a full per-tier price sheet, not a single headline rate."
              }
            },
            {
              "@type": "Question",
              "name": "Where do AI report drafting and teleradiology solutions fit together?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI report drafting is increasingly offered alongside, or by, teleradiology solutions as a first-draft layer: the AI produces a structured, comprehensive draft before or alongside the radiologist's read, which can compress turnaround without changing who is accountable for the study. In the xAID model, for example, the AI drafts the report, xAID's in-house radiologist reviews every preliminary, and the client's own reading radiologist signs the final. It's a complement to the teleradiology relationship, not a replacement for the accountable human read."
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
                Buyer Guide
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              How to choose a teleradiology company<br />
              <span className="text-white/60">A neutral buyer's guide</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Every teleradiology company promises fast, accurate, subspecialty-covered reads. Few say exactly how they measure it. Knowing how to choose a teleradiology company means checking specific things — preliminary vs final reads, turnaround SLAs, subspecialty coverage, quality assurance, licensing, and pricing — with the published evidence behind each checkpoint.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '$60.3B', label: 'Projected global teleradiology market', sub: 'by 2030' },
                { stat: '13% / 21%', label: 'Major / minor discrepancy rate', sub: 'when a subspecialist re-reads a general read' },
                { stat: '53.8%', label: 'Radiologists citing QA', sub: 'as a top teleradiology challenge' },
                { stat: '46', label: 'States & jurisdictions', sub: 'in the licensure compact (44 + DC + Guam)' },
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
                What a teleradiology company actually sells
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A teleradiology company sells access to radiologists you don't have to employ — reading studies remotely so a hospital, ED, or outpatient imaging center gets coverage it couldn't otherwise staff. That single capability now underpins a large and growing industry: analysts value the global teleradiology market at roughly USD 15.6 billion in 2024, projecting it to reach about <strong>USD 60.3 billion by 2030</strong>, according to <a href="https://www.grandviewresearch.com/industry-analysis/teleradiology-market" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Grand View Research</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The demand is structural, not cyclical. The Association of American Medical Colleges projects a shortage of up to <strong>86,000 physicians by 2036</strong>, spanning primary care and a broad group of other specialties (<a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AAMC</a>). But "teleradiology solutions" is not one product — it spans after-hours coverage, subspecialty second opinions, and full daytime overflow reading, each with different accountability, turnaround, and pricing implications. Before comparing vendors, decide which of those you're actually buying. For the full mechanics of how a study moves from scanner to signed report, see our explainer on <Link to="/blog/what-is-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">what teleradiology is and how it works</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Preliminary vs final reads: the distinction that decides who's accountable
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Per the <a href="https://www.jacr.org/article/S1546-1440(13)00185-3/fulltext" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR White Paper on Teleradiology Practice</a>, a remote radiologist provides either a <strong>preliminary interpretation</strong> — a first read, often overnight or STAT, that guides immediate management but is later finalized by a radiologist at the ordering facility — or a <strong>final interpretation</strong>, the definitive signed report of record, where licensure and credentialing permit it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Buyers routinely assume they're getting one when they're actually getting the other. Ask every candidate company, in writing, which tier applies to which study types and time windows. This is not a technicality: it determines who owns the final signature, how discrepancies between the two reads get reconciled, and where a delay or error actually originates — the seam our case study on <Link to="/blog/radiology-outsourcing-gone-wrong/" className="text-xaid-blue-strong underline underline-offset-2">a failed teleradiology transition</Link> shows breaking down under pressure.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Turnaround time SLAs: what to ask for — and verify
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Ask for turnaround commitments broken out by priority tier — emergent, STAT/urgent, and routine — measured per study, with financial remedies attached to misses. A single blended "average TAT" figure hides exactly the cases you care most about.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Even well-resourced programs miss their own benchmarks under volume pressure. The VA's National Teleradiology Program — one of the largest outsourced-read operations in the country — met its 1-hour STAT benchmark on <strong>78.9%</strong> of roughly 1.08 million stat studies and its 48-hour routine benchmark on <strong>69.3%</strong> of 363,830 routine studies in fiscal year 2024, per an Office of Inspector General review reported by <a href="https://www.usmedicine.com/clinical-topics/oncology/staff-shortages-cause-extensive-delays-at-vas-national-teleradiology-program/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">U.S. Medicine</a>. Underlying pressure is rising industry-wide too: a <em>JACR</em> analysis of nearly 2.6 million outpatient Medicare studies found interpretation turnaround times <a href="https://www.jacr.org/article/S1546-1440(26)00148-1/fulltext" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">rose 113% between 2014 and 2023</a>, with CT alone up 318%.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that means teleradiology SLAs are worthless — it means an unwritten promise is worth even less than a documented one that occasionally slips. Get the SLA in the contract, get the penalty in the contract, and ask how it's reported; our <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">turnaround time benchmarks guide</Link> lays out what "normal" looks like by study type so you can sanity-check any number a vendor quotes you.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Subspecialty coverage: evaluating teleradiology specialists
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Teleradiology specialists" should mean fellowship-trained subspecialty radiologists reading within their trained area — not a marketing label for a large generalist pool. The distinction has measurable clinical weight: day-to-day radiologist discrepancy rates run <strong>3–5%</strong> across routine reporting generally (<a href="https://doi.org/10.1007/s13244-016-0534-1" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Brady, <em>Insights into Imaging</em>, 2017</a>), and a single-center study of 506 neuroradiology second-opinion cases found <strong>major discrepancies in 13%</strong> and <strong>minor discrepancies in 21%</strong> when a subspecialist re-reviewed studies originally reported by a general radiologist (<a href="https://doi.org/10.1016/j.crad.2007.12.002" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Briggs et al., <em>Clinical Radiology</em>, 2008</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The practical takeaway: ask for a named subspecialty roster — neuro, MSK, body, cardiac, whatever your case mix requires — and ask which study types are routed to generalists versus specialists. A vendor that can't answer that question specifically hasn't thought about it either.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Quality assurance and peer review: the process behind the signature
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Ask how a company runs peer review, not whether it does. The ACR's <strong>RADPEER</strong> program is the industry standard: as of a 2020 <em>JACR</em> retrospective, it had logged more than <strong>41 million</strong> completed reviews across over <strong>1,000 practices</strong> and <strong>18,000</strong> individual radiologists (<a href="https://doi.org/10.1016/j.jacr.2019.12.023" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Chaudhry et al., <em>JACR</em>, 2020</a>). A serious teleradiology company should be able to name its peer-review methodology and cadence, not just gesture at "internal QA."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It matters because buyers underrate how hard this is to get right in practice: in a 2019 national survey of ACR members, <strong>53.8%</strong> of radiologists who had performed teleradiology named quality assurance among their top operational challenges — second only to EHR access at 62.8% (<a href="https://doi.org/10.1016/j.jacr.2019.05.053" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JACR</em>, 2019</a>). The same survey found 85.6% of respondents had performed teleradiology within the prior decade and 25.4% said it made up the majority of their imaging volume — this is mainstream infrastructure, not a niche arrangement, which is exactly why its QA gaps deserve scrutiny.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                One non-negotiable: guard against <strong>"ghost reading"</strong> — a radiologist signing off on a report that someone else actually interpreted, without independently reviewing the images. It is not a hypothetical risk; the licensing section below covers a recent federal enforcement case built on exactly this pattern. Any vendor whose workflow makes ghost reading possible, even unintentionally, is a hard pass.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Licensing and credentialing: the part that's easy to skip and expensive to get wrong
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ACR guidance holds that the interpreting physician should maintain licensure required at both the transmitting and receiving sites — in practice, a valid medical license in the state where the patient physically is, plus facility-level credentialing. The <a href="https://www.imlcc.com/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Interstate Medical Licensure Compact</a> now covers <strong>44 states plus Washington, D.C. and Guam</strong> — 46 jurisdictions in total — with an expedited licensing pathway, but it speeds the paperwork; it doesn't remove the underlying obligation, and Medicare separately <a href="https://www.auntminnie.com/industry-news/article/15564284/legal-ground-rules-guide-international-teleradiology-practice" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">will not reimburse</a> a final interpretation performed by a physician physically located outside the United States.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Ask for the actual number of radiologists licensed and credentialed for <em>your</em> state and facility today — not the vendor's total roster size, which can shrink dramatically once credentialing lag is accounted for. Also ask directly how draft reads from any offshore reviewers are handled: in March 2024, a US teleradiology company and its CEO paid <strong>$3.1 million</strong> to settle federal False Claims Act allegations that its US-based radiologists "rubber-stamped" draft interpretations prepared by unlicensed reviewers in India — in one instance approving and signing scans in under 30 seconds — without a meaningful independent review, per the <a href="https://www.justice.gov/usao-sdny/pr/us-attorney-announces-31-million-false-claims-act-settlement-radiology-company-and-its" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">U.S. Attorney's Office</a>. It is the clearest illustration of why "who signs" and "who actually reviewed the images" need to be the same person.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Pricing models: how teleradiology companies actually charge
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most teleradiology companies price on a <strong>per-study, fee-for-service</strong> basis, with tiered premiums for STAT/urgent priority, subspecialty reads, and after-hours coverage; some offer <strong>capacity-based or subscription</strong> contracts built around a fixed monthly volume and guaranteed coverage window instead. Neither model is inherently better — the right fit depends on how predictable your volume is.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What buyers consistently underestimate is how much cost hides in interpretation time itself. A European Radiology activity-based costing study of a hospital teleradiology service found <strong>personnel costs made up as much as 68%</strong> of total service cost, with average interpretation time ranging from about 55 minutes for a plain X-ray to 72 minutes for a whole-body CT (<a href="https://doi.org/10.1007/s00330-013-2810-5" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>European Radiology</em>, 2013</a>). That's why a single "per study" headline rate is close to meaningless on its own — ask for a full price sheet broken out by modality, complexity, subspecialty, and time-of-day tier before comparing any two vendors.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How to choose a teleradiology company: questions to ask before you sign
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Turn the sections above into a due-diligence checklist:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Area</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Ask for</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Red flag</th>
                    </tr>
                  </thead>
                  <tbody className="font-light text-[#444]">
                    {[
                      ['Read type', 'Written confirmation of preliminary vs final read by study type and time window', '"It depends" with no written answer'],
                      ['Turnaround SLA', 'Per-tier (emergent/STAT/routine) targets, measured per study, with financial remedy for misses', 'A single blended average TAT'],
                      ['Subspecialty coverage', 'Named roster by subspecialty and modality, mapped to your case mix', '"Access to a network of 500+ radiologists"'],
                      ['Peer review / QA', 'Named methodology (e.g., RADPEER), review cadence, escalation path for discrepancies', 'Vague reference to "internal QA"'],
                      ['Licensing & credentialing', 'Confirmed count of radiologists licensed and credentialed for your state/facility today', 'Total roster size instead of your-facility count'],
                      ['Pricing', 'Full per-tier price sheet by modality, complexity, subspecialty, time of day', 'A single headline "per study" rate'],
                      ['Cutover plan', 'Phased volume transition with go/no-go checkpoints, tested at production volume', 'Hard cutover of 100% of volume on one date'],
                      ['AI-assisted drafting', 'Clarity on who reviews the AI draft and whose signature is final', 'Any claim of an autonomous, unreviewed AI read'],
                    ].map(([area, ask, flag]) => (
                      <tr key={area} className="border-b border-gray-100">
                        <td className="py-3 pr-4 align-top font-normal text-[#0D0D0D]">{area}</td>
                        <td className="py-3 pr-4 align-top">{ask}</td>
                        <td className="py-3 align-top">{flag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI report drafting fits in the decision
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                AI report drafting is increasingly part of the teleradiology conversation — not as a replacement for the remote radiologist, but as a first-draft layer that produces a structured report before or alongside the human read, compressing the time between image acquisition and a reviewable draft.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In the xAID workflow, the AI drafts the report, xAID's in-house radiologist reviews every preliminary, and the report is delivered ready-to-sign — the client's own reading radiologist signs the final. Whether you're comparing AI-assisted reporting head-to-head against traditional teleradiology, or you're a teleradiology company evaluating AI as capacity relief for your own reading network, those are different questions from the one this guide answers; see <Link to="/ai-vs-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">AI vs teleradiology</Link> and <Link to="/for-teleradiology-companies/" className="text-xaid-blue-strong underline underline-offset-2">xAID for teleradiology companies</Link> respectively.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What's the difference between a preliminary and a final read?",
                    a: "A preliminary read is a first interpretation — often overnight or STAT — that guides immediate patient management but is later reviewed and finalized by a radiologist at the ordering facility. A final read is the definitive, signed report of record, issued by the remote radiologist where licensure and credentialing allow it. Before you sign with any teleradiology company, confirm in writing which service tier you're buying for which study types, since it determines who is accountable for the report.",
                  },
                  {
                    q: 'What turnaround time should a teleradiology company guarantee?',
                    a: "Ask for per-priority-tier turnaround commitments (emergent, STAT, routine) measured per study, not averaged, with financial remedies for missed targets. As a reference point, the VA's National Teleradiology Program — one of the largest outsourced-read operations in the country — met its 1-hour STAT benchmark on 78.9% of about 1.08 million stat studies and its 48-hour routine benchmark on 69.3% of 363,830 routine studies in fiscal year 2024. If a national program with defined SLAs still misses roughly one in five STAT targets, an unwritten promise from a smaller vendor is worth even less.",
                  },
                  {
                    q: 'How do I evaluate teleradiology specialists for subspecialty coverage?',
                    a: "Ask for a named roster of fellowship-trained teleradiology specialists by subspecialty and modality, not a generic count of 'network radiologists.' Subspecialty training measurably changes interpretation quality: a single-center study of 506 neuroradiology second-opinion cases found major discrepancies in 13% of cases and minor discrepancies in 21% when a subspecialist re-reviewed a general radiologist's read (Clinical Radiology, 2008), and day-to-day radiologist discrepancy rates run 3-5% across routine reporting more broadly (Insights into Imaging, 2017). Ask which study types get routed to generalists versus named subspecialists for your case mix.",
                  },
                  {
                    q: 'What quality assurance process should a teleradiology company have?',
                    a: "At minimum: participation in a structured peer-review program (the ACR's RADPEER system, used across more than 1,000 practices and 18,000+ radiologists, is the industry standard), a documented process for escalating discrepant or critical findings, and a flat prohibition on 'ghost reading' — a radiologist signing a report initially interpreted by someone else without independently reviewing the images. That pattern is not hypothetical: it is exactly what triggered a $3.1 million federal False Claims Act settlement in 2024. In a 2019 national survey, 53.8% of radiologists who had used teleradiology named quality assurance among their top challenges — so ask vendors to show their QA process, not just claim one exists.",
                  },
                  {
                    q: 'How are teleradiology companies typically priced?',
                    a: 'Most teleradiology companies price per study (fee-for-service), with tiered add-ons for STAT/urgent priority, subspecialty reads, and after-hours coverage; some also offer capacity-based or subscription contracts with a fixed monthly study volume. Costs vary widely by modality and complexity because personnel time is the dominant cost driver — a European Radiology cost analysis of a teleradiology service found personnel costs represented up to 68% of total costs, with average interpretation time ranging from about 55 minutes for X-ray to 72 minutes for whole-body CT. Ask for a full per-tier price sheet, not a single headline rate.',
                  },
                  {
                    q: 'Where do AI report drafting and teleradiology solutions fit together?',
                    a: "AI report drafting is increasingly offered alongside, or by, teleradiology solutions as a first-draft layer: the AI produces a structured, comprehensive draft before or alongside the radiologist's read, which can compress turnaround without changing who is accountable for the study. In the xAID model, for example, the AI drafts the report, xAID's in-house radiologist reviews every preliminary, and the client's own reading radiologist signs the final. It's a complement to the teleradiology relationship, not a replacement for the accountable human read.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: teleradiology market size from <a href="https://www.grandviewresearch.com/industry-analysis/teleradiology-market" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Grand View Research</a>; physician-shortage projection from the <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AAMC</a>; preliminary/final read definitions and licensure guidance from the <a href="https://doi.org/10.1016/j.jacr.2013.03.018" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR White Paper on Teleradiology Practice</a> (<em>JACR</em>, 2013); licensure compact scope from the <a href="https://www.imlcc.com/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Interstate Medical Licensure Compact</a>; Medicare's international-reimbursement rule from <a href="https://www.auntminnie.com/industry-news/article/15564284/legal-ground-rules-guide-international-teleradiology-practice" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; teleradiology usage and QA-challenge survey data from <a href="https://doi.org/10.1016/j.jacr.2019.05.053" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Rosenkrantz et al., JACR (2019)</a>; subspecialty discrepancy-rate data from <a href="https://doi.org/10.1016/j.crad.2007.12.002" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Briggs et al., Clinical Radiology (2008)</a> and <a href="https://doi.org/10.1007/s13244-016-0534-1" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Brady, Insights into Imaging (2017)</a>; RADPEER program statistics from <a href="https://doi.org/10.1016/j.jacr.2019.12.023" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Chaudhry et al., JACR (2020)</a>; VA National Teleradiology Program turnaround data via <a href="https://www.usmedicine.com/clinical-topics/oncology/staff-shortages-cause-extensive-delays-at-vas-national-teleradiology-program/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">U.S. Medicine</a>; industry-wide turnaround trend from the <a href="https://www.jacr.org/article/S1546-1440(26)00148-1/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">JACR</a> (via Radiology Business); teleradiology cost-structure data from <a href="https://doi.org/10.1007/s00330-013-2810-5" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">European Radiology (2013)</a>; the 2024 offshore-reading settlement from the <a href="https://www.justice.gov/usao-sdny/pr/us-attorney-announces-31-million-false-claims-act-settlement-radiology-company-and-its" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">U.S. Attorney's Office, SDNY</a>, as reported by <a href="https://www.auntminnie.com/practice-management/administration/article/15667559/the-radiology-group-ceo-to-pay-31m-in-falseclaims-case" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Comparing teleradiology companies? See the AI-assisted alternative."
          sub="A structured AI draft your radiologist can review and sign faster. Try it on 5 free studies."
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
              <Link to="/blog/what-is-teleradiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Reference</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">What Is Teleradiology? How It Works in 2026</div>
              </Link>
              <Link to="/blog/radiology-outsourcing-gone-wrong/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">When Radiology Outsourcing Goes Wrong</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HowToChooseATeleradiologyCompany;
