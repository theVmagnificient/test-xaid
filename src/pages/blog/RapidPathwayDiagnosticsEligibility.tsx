import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RapidPathwayDiagnosticsEligibility = () => {
  const post = {
    title: "Breakthrough Device Designation Meets CMS's RAPID Pathway",
    dateIso: '2026-10-11',
    date: 'October 11, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "AdvaMed wants diagnostics added to CMS's RAPID pathway. What breakthrough device designation means for AI CT reporting vendors chasing Medicare coverage.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{post.title} | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/breakthrough-device-designation-rapid-pathway-diagnostics/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | xAID`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | xAID`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/breakthrough-device-designation-rapid-pathway-diagnostics/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/breakthrough-device-designation-rapid-pathway-diagnostics/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "breakthrough device designation, CMS RAPID pathway, AdvaMed, Medicare coverage diagnostics, AI radiology reimbursement, FDA breakthrough device Medicare coverage"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is breakthrough device designation and why does it matter for Medicare coverage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FDA's Breakthrough Devices Program grants expedited review to technologies that treat or diagnose life-threatening or irreversibly debilitating conditions and meet an unmet need. Holding the designation is also the entry ticket to CMS's proposed RAPID coverage pathway, which would let CMS post a proposed national coverage determination the same day a breakthrough-designated device wins FDA market authorization — a step most devices currently wait years to reach."
              }
            },
            {
              "@type": "Question",
              "name": "What is AdvaMed asking CMS to change about the RAPID pathway?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In comments on the proposed rule, the medtech trade group AdvaMed asked CMS to broaden which breakthrough devices can use RAPID, to make diagnostics eligible (the current proposal excludes in vitro diagnostics), to set firm, binding timelines for national coverage determinations rather than aspirational targets, to add transition protections for technologies already queued under prior coverage pathways, and to ensure the program is adequately funded, transparent, and aligned with FDA."
              }
            },
            {
              "@type": "Question",
              "name": "Does RAPID's diagnostics exclusion affect AI CT reporting software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not directly. The RAPID proposal excludes in vitro diagnostics (IVDs) — tests run on specimens like blood or tissue outside the body, classified under 21 CFR Parts 862, 864, and 866. AI software that analyzes CT images is a radiology device classified under 21 CFR Part 892, a different regulatory category entirely. AdvaMed's diagnostics push is aimed mainly at lab-based and companion-diagnostic tests, not imaging AI — though how CMS ultimately defines device categories in the final rule is still an open question in the docket."
              }
            },
            {
              "@type": "Question",
              "name": "Does a faster Medicare coverage decision mean an AI device gets paid faster?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not automatically. A national coverage determination establishes that Medicare will cover a technology — it does not set a specific payment amount or billing code. Those run on separate timelines. AdvaMed's call for firm NCD deadlines is partly about closing that gap, since the 60- and 90-day windows CMS has proposed are described as targets, not binding commitments."
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
              Breakthrough device designation meets CMS's RAPID pathway.<br />
              <span className="text-white/60">AdvaMed wants diagnostics in the door too.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              CMS's proposed RAPID coverage pathway would fast-track Medicare payment for breakthrough-designated devices. The medtech lobby says it doesn't go far enough — and wants diagnostics included. Here's what the fight is actually about, and what it does and doesn't change for an AI CT reporting vendor's path to Medicare.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Oct 13, 2026', label: 'RAPID comment period closes', sub: '~60-day window' },
            { stat: '~40', label: 'Devices that already qualify', sub: '~20 more potentially' },
            { stat: 'Nearly 6 yrs', label: 'Median wait today', sub: 'FDA OK to Medicare coverage' },
            { stat: '5', label: "AdvaMed's asks", sub: 'eligibility, diagnostics, deadlines +' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What CMS proposed, in brief
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CMS's Regulatory Alignment for Predictable and Immediate Device (RAPID) coverage pathway, published for comment on August 11, 2026, would let CMS issue a proposed national coverage determination (NCD) the <em>same day</em> an eligible device receives FDA market authorization, with a final determination targeted around 60 days later for Class II breakthrough devices and 90 days for Class III devices, per CMS's proposed rule as summarized by <a href="https://advi.com/insight/cms-proposes-rapid-coverage-pathway-for-breakthrough-devices/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ADVI's policy analysis</a>. That is a dramatic compression of a process that has typically run a year or longer — and, by the medtech industry's own framing of the problem, averaged <strong>nearly six years</strong> from FDA authorization to full Medicare coverage for breakthrough technologies, per <a href="https://www.advamed.org/industry-updates/news/advamed-commends-positive-step-toward-greater-medicare-coverage-of-breakthrough-medtech/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AdvaMed's statement</a> when RAPID was first unveiled in April 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                As proposed, eligibility is narrow by design: Class II devices must be enrolled in FDA's Total Product Life Cycle Advisory Program, Class III devices are eligible more broadly, and in vitro diagnostics are excluded outright. CMS has indicated roughly <strong>40 devices</strong> would qualify today, with another <strong>20 or so</strong> potentially eligible — a meaningful expansion over the existing Transitional Coverage for Emerging Technologies (TCET) pathway, which has been capped at around five candidates a year. Public comments on the proposal close <strong>October 13, 2026</strong>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                RAPID is not CMS's first attempt at this problem. A 2021 rule called Medicare Coverage of Innovative Technology (MCIT) would have granted automatic four-year provisional coverage to breakthrough devices on FDA authorization alone; CMS rescinded it the same year over concerns that FDA authorization doesn't require Medicare-representative clinical data, meaning the agency could end up paying for devices never shown to work in the population it covers. RAPID tries to solve the same speed problem while keeping an evidence check in place — the pivotal study behind an eligible device has to enroll patients representative of Medicare beneficiaries.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                AdvaMed's ask: open the door wider
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                AdvaMed, the medtech industry's largest trade group, filed comments pushing CMS to loosen several of RAPID's constraints before it's finalized, per <a href="https://www.medtechdive.com/news/medtech-lobby-seeks-broader-device-eligibility-for-cms-proposed-rapid-path/832622/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>. The group is asking CMS to:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Broaden device eligibility',
                    desc: "Extend RAPID beyond its current restrictions on which breakthrough devices and development stages can enter the pathway, so more of the roughly 100-plus devices that earn breakthrough designation each year have a realistic shot at using it.",
                  },
                  {
                    title: 'Make diagnostics eligible',
                    desc: 'RAPID as proposed excludes in vitro diagnostics. AdvaMed wants diagnostic technologies included, arguing patients waiting on a breakthrough diagnostic face the same coverage lag as patients waiting on a breakthrough therapeutic or implant.',
                  },
                  {
                    title: 'Set firm NCD timelines',
                    desc: "CMS's 60- and 90-day windows are framed as targets, not commitments. AdvaMed wants binding deadlines so manufacturers can plan around a real date, not an aspiration CMS could quietly miss.",
                  },
                  {
                    title: 'Protect devices already in the pipeline',
                    desc: 'Transition protections for technologies already queued under TCET or other existing pathways, so a device doesn\'t lose ground by being early rather than being first through RAPID.',
                  },
                  {
                    title: 'Fund and open up the process',
                    desc: 'Adequate CMS staffing and funding to actually run same-day reviews at scale, plus transparency into how decisions are made and tighter coordination with FDA.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                AdvaMed CEO Scott Whitaker summed up the position bluntly: "Medicare beneficiaries shouldn't have to wait for FDA-authorized breakthrough technologies that could improve their health and even save their lives," as quoted by <a href="https://www.medtechdive.com/news/medtech-lobby-seeks-broader-device-eligibility-for-cms-proposed-rapid-path/832622/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>. It's a lobbying position, not a rule change — CMS can accept, narrow, or ignore any of it when it finalizes RAPID.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "diagnostics" doesn't mean AI imaging software
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's easy to read "diagnostics excluded from RAPID" and assume it covers AI software that reads a CT scan. It mostly doesn't. The exclusion in RAPID targets <strong>in vitro diagnostics</strong> — tests performed on a specimen (blood, tissue, a swab) <em>outside the body</em>, classified under <a href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-862" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">21 CFR Part 862</a> (clinical chemistry/toxicology), <a href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-864" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Part 864</a> (hematology/pathology), and <a href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-866" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Part 866</a> (immunology/microbiology). That's the regulatory lane for lab tests, companion diagnostics, and genomic assays — the category AdvaMed's diagnostics ask is squarely aimed at.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Software that analyzes a CT, MRI, or X-ray image sits in a different lane entirely: FDA regulates computer-assisted detection and diagnosis tools for radiology under <a href="https://www.federalregister.gov/documents/2025/06/13/2025-10789/medical-devices-radiology-devices-classification-of-the-radiological-computer-assisted-detection-and" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">21 CFR Part 892</a>, the radiology-devices panel, with dedicated product codes for detection, diagnosis, and triage software. It never touches a specimen, so it isn't an IVD by FDA's own "in vitro" definition. In practice, that means an AI CT reporting tool's shot at RAPID turns on the same two questions every other breakthrough device faces — does it hold Breakthrough Device Designation, and is it a Class II device enrolled in FDA's Total Product Life Cycle Advisory Program, or a Class III device — not on how the diagnostics carve-out AdvaMed is fighting over gets resolved. The genuinely relevant AdvaMed ask for imaging AI vendors is the first one: broader eligibility for breakthrough devices generally, since the current proposal is narrow about which devices and development stages can opt in at all.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Who RAPID lets in, as proposed
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Technology type</th>
                      <th className="text-left py-3 pr-4 text-[#0D0D0D] font-medium">Eligible for RAPID today?</th>
                      <th className="text-left py-3 text-[#0D0D0D] font-medium">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Class III breakthrough hardware/implant</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Yes, generally</td>
                      <td className="py-3 text-[#444] font-light">Automatically eligible per CMS's proposal</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Class II breakthrough device (incl. AI imaging software)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Yes, if enrolled in FDA's TAP program</td>
                      <td className="py-3 text-[#444] font-light">Regulated under 21 CFR Part 892, not excluded as an IVD</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Lab-based / companion diagnostics (IVDs)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">No</td>
                      <td className="py-3 text-[#444] font-light">Explicitly excluded; this is AdvaMed's main diagnostics ask</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Any device without breakthrough designation</td>
                      <td className="py-3 pr-4 text-[#444] font-light">No</td>
                      <td className="py-3 text-[#444] font-light">Designation is the entry ticket to the pathway</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually changes for an AI CT reporting vendor's path to payment
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Three things are worth separating. First, RAPID's speed benefit is real but conditional: an AI imaging tool with breakthrough designation that's also Class II-and-TAP-enrolled or Class III could plausibly see a national coverage determination within months of FDA authorization instead of years — but only if CMS finalizes the pathway close to what's proposed, and only for devices that coordinate with CMS and FDA early enough to qualify.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Second, coverage is not payment. An NCD tells Medicare contractors a technology is covered; it does not set a CPT or HCPCS code or a payment rate, and those run on their own timeline. AdvaMed's push for firm, binding NCD deadlines is partly an attempt to close that gap in the final rule — right now, a vendor planning around the 60- or 90-day target is planning around an aspiration CMS hasn't committed to keeping.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Third, this is all still a proposal. Nothing in RAPID is in force, and the version that gets finalized could look different from what AdvaMed is asking for — narrower eligibility, no diagnostics carve-out changes, softer timelines, or all three. For imaging buyers and vendors alike, the practical takeaway is to treat RAPID as a policy signal worth tracking through the comment period, not a reimbursement plan to build a purchase decision on today.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Faster federal coverage pathways are a tailwind for AI imaging broadly, but they don't change what an imaging center needs to see this quarter. xAID's case for AI CT reporting rests on turnaround time and throughput a practice can measure on studies it runs today, with every report delivered ready-to-sign after in-house radiologist review — so the reading radiologist's signature is what reaches the patient's chart, regardless of how a given reimbursement pathway eventually resolves.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is breakthrough device designation and why does it matter for Medicare coverage?',
                    a: "FDA's Breakthrough Devices Program grants expedited review to technologies that treat or diagnose life-threatening or irreversibly debilitating conditions and meet an unmet need. Holding the designation is also the entry ticket to CMS's proposed RAPID coverage pathway, which would let CMS post a proposed national coverage determination the same day a breakthrough-designated device wins FDA market authorization — a step most devices currently wait years to reach.",
                  },
                  {
                    q: 'What is AdvaMed asking CMS to change about the RAPID pathway?',
                    a: 'In comments on the proposed rule, the medtech trade group AdvaMed asked CMS to broaden which breakthrough devices can use RAPID, to make diagnostics eligible (the current proposal excludes in vitro diagnostics), to set firm, binding timelines for national coverage determinations rather than aspirational targets, to add transition protections for technologies already queued under prior coverage pathways, and to ensure the program is adequately funded, transparent, and aligned with FDA.',
                  },
                  {
                    q: "Does RAPID's diagnostics exclusion affect AI CT reporting software?",
                    a: 'Not directly. The RAPID proposal excludes in vitro diagnostics (IVDs) — tests run on specimens like blood or tissue outside the body, classified under 21 CFR Parts 862, 864, and 866. AI software that analyzes CT images is a radiology device classified under 21 CFR Part 892, a different regulatory category entirely. AdvaMed\'s diagnostics push is aimed mainly at lab-based and companion-diagnostic tests, not imaging AI — though how CMS ultimately defines device categories in the final rule is still an open question in the docket.',
                  },
                  {
                    q: 'Does a faster Medicare coverage decision mean an AI device gets paid faster?',
                    a: "Not automatically. A national coverage determination establishes that Medicare will cover a technology — it does not set a specific payment amount or billing code. Those run on separate timelines. AdvaMed's call for firm NCD deadlines is partly about closing that gap, since the 60- and 90-day windows CMS has proposed are described as targets, not binding commitments.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/medtech-lobby-seeks-broader-device-eligibility-for-cms-proposed-rapid-path/832622/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>, reporting on AdvaMed's comments on CMS's proposed Regulatory Alignment for Predictable and Immediate Device (RAPID) Coverage Pathway (docket CMS-3487-NC, comment period closing October 13, 2026). Additional context from <a href="https://www.advamed.org/industry-updates/news/advamed-commends-positive-step-toward-greater-medicare-coverage-of-breakthrough-medtech/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AdvaMed's April 2026 statement</a>, <a href="https://advi.com/insight/cms-proposes-rapid-coverage-pathway-for-breakthrough-devices/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ADVI's policy analysis</a>, and FDA/CMS device classification references at <a href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-862" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">eCFR Part 862</a> and the <a href="https://www.federalregister.gov/documents/2025/06/13/2025-10789/medical-devices-radiology-devices-classification-of-the-radiological-computer-assisted-detection-and" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Federal Register notice on radiological computer-assisted detection software</a>. Figures are rounded as reported; RAPID is a proposed pathway open for public comment, not a final rule.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Build your case on today's numbers, not tomorrow's rulemaking"
          sub="See what AI CT reporting does to turnaround time and throughput this quarter — try it on 5 free studies."
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
              <Link to="/blog/medicare-national-coverage-determination-reform/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A Bill to Speed Up Medicare Coverage Decisions Is Moving Through Congress</div>
              </Link>
              <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">2027 Medicare Physician Fee Schedule: What It Means for Radiology</div>
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

export default RapidPathwayDiagnosticsEligibility;
