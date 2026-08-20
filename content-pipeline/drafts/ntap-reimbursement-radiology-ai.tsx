import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const NtapReimbursementRadiologyAi = () => {
  const post = {
    title: 'NTAP Reimbursement Explained: How Medicare Pays for AI Imaging Tools',
    dateIso: '2026-08-15',
    date: 'August 15, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description:
      "CMS just approved a new Medicare add-on payment for a CT-triage AI device, effective October 1, 2026. Here's how the New Technology Add-on Payment program actually works — how a device qualifies, what the payment cap means in dollars, and how long the money lasts.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>NTAP Reimbursement Explained: How It Works | xAID</title>
        <meta name="description" content="CMS approved a new Medicare add-on payment for a CT-triage AI device. How NTAP reimbursement works: qualification, payment caps, and how long it lasts." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="NTAP Reimbursement Explained: How It Works | xAID" />
        <meta property="og:description" content="CMS approved a new Medicare add-on payment for a CT-triage AI device. How NTAP reimbursement works: qualification, payment caps, and how long it lasts." />
        <meta property="og:url" content="https://xaid.ai/blog/ntap-reimbursement-radiology-ai" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NTAP Reimbursement Explained: How It Works | xAID" />
        <meta name="twitter:description" content="CMS approved a new Medicare add-on payment for a CT-triage AI device. How NTAP reimbursement works: qualification, payment caps, and how long it lasts." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ntap-reimbursement-radiology-ai" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ntap-reimbursement-radiology-ai",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "NTAP reimbursement, New Technology Add-on Payment, Medicare AI reimbursement, radiology AI reimbursement, CMS add-on payment, AI imaging ROI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is NTAP reimbursement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NTAP, the New Technology Add-on Payment, is a temporary Medicare payment under the Hospital Inpatient Prospective Payment System (IPPS) that adds extra reimbursement on top of the standard MS-DRG payment for a qualifying new technology. It exists because a brand-new device or software often costs more than the flat MS-DRG rate reflects, since that rate is based on historical claims data that predates the technology. NTAP applies only to Medicare fee-for-service inpatient discharges — not outpatient imaging, Medicare Advantage, or commercial payers."
              }
            },
            {
              "@type": "Question",
              "name": "How does a device qualify for NTAP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CMS applies three criteria: newness (the technology can't be substantially similar to something that has already been on the market for more than two to three years), a cost threshold (the existing MS-DRG payment must be shown to be inadequate for cases using the technology), and substantial clinical improvement over previously available alternatives. Applications go through an annual rulemaking cycle tied to the IPPS. Devices with an FDA Breakthrough Device designation have been able to use a streamlined alternative pathway to satisfy the clinical-improvement criterion, though CMS's FY2027 rule eliminates that alternative pathway starting with FY2028 applications, pushing all future applicants back onto the traditional evidence standard."
              }
            },
            {
              "@type": "Question",
              "name": "What does the NTAP payment cap actually mean in dollars?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The add-on payment for a qualifying case is the lesser of 65% of the cost of the technology, or 65% of the amount by which the cost of that specific hospital stay exceeds the MS-DRG payment (75% for products with FDA's Limited Population Pathway or Qualified Infectious Disease Product designation). It is not a flat bonus paid on every case — a hospital only receives it when a case's actual costs exceed the DRG payment, and even then only up to the calculated ceiling. Past examples show how small that ceiling can be in practice: CMS finalized a maximum of $241.39 per case for a non-contrast head-CT triage AI product in FY2025, and an earlier NTAP for CT-based stroke-detection software capped out at $1,040 per case."
              }
            },
            {
              "@type": "Question",
              "name": "How long does an NTAP payment last?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Up to three years per approved indication, on the assumption that by then enough claims data exists for CMS to fold the technology's actual cost into the standard MS-DRG payment. CMS reviews continuation annually, and the payment sunsets once claims data catches up or the three-year cap is reached, whichever comes first — after that, the hospital is expected to absorb the cost inside the regular DRG rate."
              }
            },
            {
              "@type": "Question",
              "name": "Does NTAP apply to outpatient imaging centers or teleradiology providers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. NTAP is an inpatient-only hospital payment tied to the MS-DRG system. Outpatient imaging centers, standalone radiology groups, and teleradiology companies reading studies for hospitals don't bill under IPPS and can't capture an NTAP payment directly, even if the AI tool they use is NTAP-approved elsewhere. For most imaging businesses outside large inpatient hospitals, AI ROI has to be justified on throughput, turnaround time, and staffing economics rather than a Medicare add-on payment."
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
              NTAP reimbursement explained<br />
              <span className="text-white/60">how Medicare's add-on payment works for AI imaging tools</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              CMS just approved a new Medicare add-on payment for a CT-triage AI device, effective October 1, 2026. The news is the approval — but the mechanism behind it is what actually matters for anyone weighing AI ROI: how a device qualifies, what the payment "cap" means in real dollars, and how long the money lasts before it disappears.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '65%', label: 'Max share of costs NTAP covers', sub: 'lesser of tech cost or DRG shortfall' },
            { stat: '3 years', label: 'Maximum NTAP duration', sub: 'per approved indication, reviewed annually' },
            { stat: '$241.39', label: 'Real-world NTAP ceiling', sub: 'head-CT triage AI, FY2025 final rule' },
            { stat: '19', label: 'New technologies approved for FY2027', sub: 'plus 41 renewed from prior years' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What CMS just approved
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Centers for Medicare and Medicaid Services (CMS) has approved a New Technology Add-on Payment (NTAP) for a CT triage AI device built on a healthcare foundation model, which flags suspected findings across urgent conditions on contrast and non-contrast CT studies of the chest, abdomen, and pelvis. The device received FDA Breakthrough Device designation in September 2025 and FDA clearance in January 2026. The NTAP reimbursement becomes available on <strong>October 1, 2026</strong>, for qualifying Medicare fee-for-service inpatient cases, and — per the standard NTAP rule — lasts for <strong>three years</strong>, as reported by <a href="https://www.auntminnie.com/clinical-news/ct/news/15832414/aidoc-cms-approves-medicare-addon-payment-for-aidoc-ct-triage-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a real milestone — every radiology AI vendor watches CMS's annual IPPS rulemaking cycle closely, because an NTAP approval is a signal the technology cleared CMS's bar for "new," "costly," and "clinically better." But the headline obscures a more useful question for anyone evaluating AI purchases: what does an NTAP approval actually pay, who can bill for it, and for how long? The mechanism, not the announcement, is what a CFO or ops lead actually needs to model.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What NTAP actually is
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                NTAP is not a permanent billing code and it is not paid on every case. It's a temporary supplement, under the Hospital Inpatient Prospective Payment System (IPPS), on top of the standard MS-DRG (Medicare Severity Diagnosis-Related Group) payment a hospital already receives for a given inpatient stay. It exists to bridge a specific gap: MS-DRG rates are set from historical claims data, so a genuinely new technology's cost isn't reflected in that rate yet. CMS's fix is a time-limited add-on until enough claims accumulate to fold the cost into the DRG itself.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Critically, NTAP only applies to Medicare fee-for-service inpatient discharges billed under IPPS. It has no bearing on outpatient imaging, Medicare Advantage plans, Medicaid, or commercial payers — a distinction that matters enormously for who can actually capture this money (more on that below).
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How a device qualifies
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CMS applies three statutory criteria, confirmed across NTAP guidance from law firms and reimbursement advisors including <a href="https://www.mcdermottplus.com/resource/navigating-the-new-technology-add-on-payment-ntap-process/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">McDermott+</a>:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Newness',
                    desc: "The technology can't be \"substantially similar\" to another product that FDA has approved or cleared and that has already been on the market for more than two to three years.",
                  },
                  {
                    title: 'Cost threshold',
                    desc: 'The existing MS-DRG payment must be shown to be inadequate — meaning the average standardized charge for cases using the technology exceeds a CMS-set cost threshold.',
                  },
                  {
                    title: 'Substantial clinical improvement',
                    desc: 'The technology must represent an advance that substantially improves diagnosis or treatment relative to what was previously available, not just an incremental refinement.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Applications run through CMS's annual IPPS rulemaking, so approval timing is locked to the federal fiscal year (October 1). For FY2027, CMS approved 19 new technologies for NTAP — three under the traditional evidentiary pathway and 16 under an alternative pathway available to FDA Breakthrough Devices — while continuing eligibility for 41 technologies already in their multi-year window, according to <a href="https://natlawreview.com/article/cms-releases-fy-2027-ipps-final-rule" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">the National Law Review's</a> summary of the final rule. That alternative pathway let Breakthrough Device holders satisfy the clinical-improvement criterion with a lighter evidentiary bar — but CMS's finalized FY2027 rule eliminates it starting with FY2028 applications, as confirmed in the final rule covered above and detailed in <a href="https://gardner.law/news/cms-proposes-ending-fast-track-ntap-pathway" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Gardner Law's</a> analysis of the change, meaning future AI-device applicants will need to clear the same evidence standard as everyone else.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the payment "cap" actually means
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This is the part that trips people up. NTAP isn't a flat bonus stapled to every qualifying case. Federal regulation (42 CFR 412.88) sets the add-on payment as <strong>the lesser of 65% of the cost of the technology, or 65% of the amount by which the cost of that specific hospital stay exceeds the MS-DRG payment</strong> — a formula confirmed by McDermott+'s NTAP guidance. (Products with an FDA Limited Population Pathway or Qualified Infectious Disease Product designation get a 75% share instead of 65%, though that carve-out is aimed at antimicrobials, not imaging AI.)
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In plain terms: a hospital only gets paid extra when a case's actual costs blow past the flat DRG rate, and even then only up to a ceiling CMS calculates from the technology's own price. Two real examples show how modest that ceiling can be in practice — nowhere close to covering a full AI subscription on volume alone:
              </p>

              <div className="overflow-x-auto mb-8 -mx-2 px-2">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">NTAP example</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Use case</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Fiscal year</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Max payment per case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">CT-based stroke (LVO) triage software</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Detects large vessel occlusion on CTA of the brain</td>
                      <td className="py-3 pr-4 text-[#444] font-light">FY2021 (2020 approval)</td>
                      <td className="py-3 text-[#444] font-light">$1,040</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Non-contrast head-CT triage AI</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Flags obstructive hydrocephalus on NCCT</td>
                      <td className="py-3 pr-4 text-[#444] font-light">FY2025</td>
                      <td className="py-3 text-[#444] font-light">$241.39</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Body CT multi-triage AI (chest/abdomen/pelvis)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Flags urgent findings across contrast/non-contrast CT</td>
                      <td className="py-3 pr-4 text-[#444] font-light">FY2027 (effective Oct 1, 2026)</td>
                      <td className="py-3 text-[#444] font-light">Case-by-case; formula above applies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The $1,040 stroke-AI figure reflects a 65% share of a technology CMS valued at roughly $1,600 per case, reported by <a href="https://www.auntminnie.com/clinical-news/ct/article/15629690/report-reimbursement-drives-adoption-of-ai-software-for-stroke" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>; the $241.39 head-CT figure was finalized in CMS's FY2025 IPPS final rule, also per <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15682460/annaliseai-cms-approves-head-ncct-ai-product-for-new-technology-addon-payments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. Neither figure is a subscription-covering windfall; both are a per-case reimbursement bump that only kicks in when the stay's costs already exceed the DRG.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How long the money lasts
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                An NTAP designation runs for <strong>up to three years per approved indication</strong>, with CMS reviewing continuation annually. The clock is built around a specific assumption: that within three years, enough claims data will exist for CMS to fold the technology's actual cost into the standard MS-DRG rate, at which point the add-on sunsets — either because claims data catches up early or because the three-year cap is reached. Hospitals need to plan for that cliff, not treat NTAP revenue as permanent.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for imaging centers and teleradiology companies
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                NTAP is an inpatient hospital mechanism, full stop. It's tied to IPPS and MS-DRGs, which means it has no direct application for:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Outpatient imaging centers',
                    desc: "Outpatient studies aren't billed under IPPS, so there's no MS-DRG to add a payment on top of — NTAP simply doesn't apply, regardless of whether the AI tool in use is NTAP-approved elsewhere.",
                  },
                  {
                    title: 'Teleradiology and reporting companies',
                    desc: "A teleradiology group reading studies for a hospital doesn't bill Medicare directly for the inpatient stay, so it can't capture an NTAP payment even when its client hospital can. The add-on flows to the billing hospital, not the reporting vendor.",
                  },
                  {
                    title: "Anyone modeling AI ROI on volume",
                    desc: 'Both real-world NTAP ceilings above are three- and four-figure sums per qualifying case — and only on cases where costs already exceed the DRG. That is not the same as AI paying for itself; it is a bridge payment for a narrow set of inpatient cases, capped and temporary by design.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For the large majority of imaging businesses — outpatient centers, independent radiology groups, and teleradiology providers — the real ROI case for AI in reporting has to be built on throughput, turnaround time, and staffing economics, not a Medicare inpatient add-on payment that most of them will never see a dollar of.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Because NTAP is structurally out of reach for outpatient and teleradiology workflows, xAID's model doesn't depend on it: pricing is per-study, not tied to inpatient DRG economics, so the ROI case rests on turnaround time and reporting capacity rather than a temporary federal add-on. Every draft still goes through in-house radiologist review before it reaches your reading radiologist ready-to-sign — the reimbursement mechanics change, but the human-in-the-loop standard doesn't.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is NTAP reimbursement?',
                    a: "NTAP, the New Technology Add-on Payment, is a temporary Medicare payment under the Hospital Inpatient Prospective Payment System (IPPS) that adds extra reimbursement on top of the standard MS-DRG payment for a qualifying new technology. It exists because a brand-new device or software often costs more than the flat MS-DRG rate reflects, since that rate is based on historical claims data that predates the technology. NTAP applies only to Medicare fee-for-service inpatient discharges — not outpatient imaging, Medicare Advantage, or commercial payers.",
                  },
                  {
                    q: 'How does a device qualify for NTAP?',
                    a: "CMS applies three criteria: newness (the technology can't be substantially similar to something that has already been on the market for more than two to three years), a cost threshold (the existing MS-DRG payment must be shown to be inadequate for cases using the technology), and substantial clinical improvement over previously available alternatives. Applications go through an annual rulemaking cycle tied to the IPPS. Devices with an FDA Breakthrough Device designation have been able to use a streamlined alternative pathway to satisfy the clinical-improvement criterion, though CMS's FY2027 rule eliminates that alternative pathway starting with FY2028 applications, pushing all future applicants back onto the traditional evidence standard.",
                  },
                  {
                    q: 'What does the NTAP payment cap actually mean in dollars?',
                    a: "The add-on payment for a qualifying case is the lesser of 65% of the cost of the technology, or 65% of the amount by which the cost of that specific hospital stay exceeds the MS-DRG payment (75% for products with FDA's Limited Population Pathway or Qualified Infectious Disease Product designation). It is not a flat bonus paid on every case — a hospital only receives it when a case's actual costs exceed the DRG payment, and even then only up to the calculated ceiling. Past examples show how small that ceiling can be in practice: CMS finalized a maximum of $241.39 per case for a non-contrast head-CT triage AI product in FY2025, and an earlier NTAP for CT-based stroke-detection software capped out at $1,040 per case.",
                  },
                  {
                    q: 'How long does an NTAP payment last?',
                    a: 'Up to three years per approved indication, on the assumption that by then enough claims data exists for CMS to fold the technology\'s actual cost into the standard MS-DRG payment. CMS reviews continuation annually, and the payment sunsets once claims data catches up or the three-year cap is reached, whichever comes first — after that, the hospital is expected to absorb the cost inside the regular DRG rate.',
                  },
                  {
                    q: 'Does NTAP apply to outpatient imaging centers or teleradiology providers?',
                    a: "No. NTAP is an inpatient-only hospital payment tied to the MS-DRG system. Outpatient imaging centers, standalone radiology groups, and teleradiology companies reading studies for hospitals don't bill under IPPS and can't capture an NTAP payment directly, even if the AI tool they use is NTAP-approved elsewhere. For most imaging businesses outside large inpatient hospitals, AI ROI has to be justified on throughput, turnaround time, and staffing economics rather than a Medicare add-on payment.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/ct/news/15832414/aidoc-cms-approves-medicare-addon-payment-for-aidoc-ct-triage-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> (CT triage AI NTAP approval); <a href="https://radiologybusiness.com/topics/artificial-intelligence/medicare-approves-new-technology-add-payment-inpatient-radiology-ai-solution" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (corroborating coverage); <a href="https://www.mcdermottplus.com/resource/navigating-the-new-technology-add-on-payment-ntap-process/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">McDermott+</a> (NTAP formula and eligibility criteria); <a href="https://natlawreview.com/article/cms-releases-fy-2027-ipps-final-rule" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">National Law Review</a> and <a href="https://gardner.law/news/cms-proposes-ending-fast-track-ntap-pathway" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Gardner Law</a> (FY2027 rule and alternative-pathway phase-out); <a href="https://www.auntminnie.com/clinical-news/ct/article/15629690/report-reimbursement-drives-adoption-of-ai-software-for-stroke" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> (2020 stroke-AI NTAP figures) and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15682460/annaliseai-cms-approves-head-ncct-ai-product-for-new-technology-addon-payments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> (FY2025 head-CT NTAP figure). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI reporting priced for outpatient and teleradiology reality"
          sub="No inpatient DRG required. See radiologist-reviewed, ready-to-sign reports on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Who Gets Radiology AI? Reimbursement and Access</div>
              </Link>
              <Link to="/blog/fda-approved-ai-radiology-funding-bill/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Congress Wants to Pay for FDA-Cleared Imaging AI</div>
              </Link>
              <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">2027 Medicare Physician Fee Schedule: What It Means for Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NtapReimbursementRadiologyAi;
