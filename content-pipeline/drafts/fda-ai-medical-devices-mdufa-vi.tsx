import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const FdaAiMedicalDevicesMdufaVi = () => {
  const post = {
    title: 'MDUFA VI and FDA AI Medical Devices: What the Draft User-Fee Agreement Means for Imaging',
    dateIso: '2026-07-10',
    date: 'July 10, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "FDA and the medtech industry released a draft MDUFA VI agreement covering FY2028–2032: 510(k) decision goals stepping down from 128 to 112 days, hiring transparency instead of hiring targets, and expanded digital-health expertise. What the draft means for AI-enabled imaging software — and the regulatory-posture questions imaging centers should ask radiology-AI vendors.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MDUFA VI: What It Means for FDA AI Medical Devices | xAID</title>
        <meta name="description" content="The MDUFA VI draft agreement sets FDA review goals for FY2028–2032. What it means for AI imaging devices — and what imaging centers should ask vendors." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MDUFA VI: What It Means for FDA AI Medical Devices | xAID" />
        <meta property="og:description" content="The MDUFA VI draft agreement sets FDA review goals for FY2028–2032. What it means for AI imaging devices — and what imaging centers should ask vendors." />
        <meta property="og:url" content="https://xaid.ai/blog/fda-ai-medical-devices-mdufa-vi" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MDUFA VI: What It Means for FDA AI Medical Devices | xAID" />
        <meta name="twitter:description" content="The MDUFA VI draft agreement sets FDA review goals for FY2028–2032. What it means for AI imaging devices — and what imaging centers should ask vendors." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-ai-medical-devices-mdufa-vi" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-ai-medical-devices-mdufa-vi",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fda ai medical devices, MDUFA VI, medical device user fees, FDA 510(k) review times, AI-enabled imaging software, radiology AI regulation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is MDUFA VI — and is it law yet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MDUFA VI is the sixth Medical Device User Fee Amendments agreement between FDA and the medtech industry, covering fiscal years 2028–2032. As of July 2026 it is a draft commitment letter, not law. FDA will hold a public meeting on August 5, 2026, send a final commitment letter to Congress by January 15, 2027, and Congress must enact the legislation by September 30, 2027, when the current MDUFA V authority expires."
              }
            },
            {
              "@type": "Question",
              "name": "How would MDUFA VI change FDA review times for AI imaging devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most AI-enabled imaging software reaches the market through the 510(k) pathway. The draft sets a goal of an average 128 calendar days from 510(k) submission to decision for fiscal 2028, stepping down each year to 112 days for submissions received in fiscal 2032. For comparison, the actual average 510(k) clearance time in the first half of 2026 was about 156 days. The PMA goal stays at 285 calendar days, unchanged from MDUFA V."
              }
            },
            {
              "@type": "Question",
              "name": "Does the MDUFA VI draft include AI-specific commitments?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There is no AI-specific review lane or AI-only performance goal in the draft. The relevant commitments are broader: FDA proposes expanding technical expertise to address rapidly evolving digital health technologies and engaging stakeholders on regulatory approaches to emerging digital health technologies, building on MDUFA V's digital-health expertise commitments. On staffing, the draft replaces quantitative hiring targets with twice-yearly CDRH staffing reports and annual hiring reports."
              }
            },
            {
              "@type": "Question",
              "name": "What should imaging centers ask radiology-AI vendors about regulatory posture?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Four questions cover most of the risk: which functions of the product are FDA-authorized and under which pathway; how model updates reach production — under a predetermined change control plan or via new submissions; whether the vendor's roadmap depends on FDA submissions during the 2027–2028 reauthorization transition; and where the human sits in the workflow — every AI-assisted read should end in a report a radiologist reviews and a radiologist signs."
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
              MDUFA VI and FDA AI medical devices:<br />
              <span className="text-white/60">what the draft user-fee agreement means for imaging</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              FDA and the medtech industry have agreed on draft terms for the next five years of device review — faster 510(k) goals, hiring transparency instead of hiring targets, and expanded digital-health expertise. None of it is law yet. Here's what the draft actually says, read through the lens of a buyer evaluating AI-enabled imaging software.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: 'FY2028–32', label: 'Five fiscal years covered', sub: 'pending congressional reauthorization' },
                { stat: '112 days', label: '510(k) decision goal by FY2032', sub: 'down from 128 days in FY2028' },
                { stat: '~156 days', label: 'Actual average 510(k) time', sub: 'first half of 2026' },
                { stat: '76%', label: 'Of FDA AI devices are radiology', sub: '1,104 of 1,451 through 2025' },
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
                A draft agreement, not a law — the status and the clock
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Every five years, FDA and the medical device industry negotiate the Medical Device User Fee Amendments (MDUFA) — the deal under which manufacturers pay fees that fund FDA's device review program in exchange for performance commitments. In July 2026, FDA released the draft commitment letter for the sixth cycle, <a href="https://www.fda.gov/industry/medical-device-user-fee-amendments-mdufa-fees/medical-device-user-fee-amendments-2028-mdufa-vi" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MDUFA VI</a>, covering fiscal years 2028 through 2032, as reported by <a href="https://www.medtechdive.com/news/4-takeaways-from-mdufa-vi-draft-agreement/824846/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The word <em>draft</em> is doing real work here. Per the <a href="https://www.federalregister.gov/documents/2026/07/08/2026-13778/medical-device-user-fee-amendments-public-meeting-request-for-comments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Federal Register notice</a>, FDA will take public comment and hold a hybrid public meeting on <strong>August 5, 2026</strong>, then send a final commitment letter to Congress by <strong>January 15, 2027</strong>. Congress and the President must enact the reauthorization by <strong>September 30, 2027</strong>, when the current MDUFA V authority expires. Until then, every number below is a proposal, not a promise.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Industry has signaled support: AdvaMed CEO Scott Whitaker <a href="https://www.medtechdive.com/news/4-takeaways-from-mdufa-vi-draft-agreement/824846/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">called the draft</a> an "important step toward preserving the seamless access to proven medtech patients deserve."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why a device user-fee deal matters for imaging AI
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology is where AI regulation and clinical practice collide hardest. Through December 31, 2025, FDA had authorized <strong>1,451</strong> AI-enabled medical devices on its <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">public AI-enabled device list</a> — and <strong>1,104 of them, 76%, are radiology devices</strong>, per <a href="https://theimagingwire.com/2026/03/11/numbers-from-the-fda-show-radiology-is-maintaining-its-lead/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Imaging Wire's analysis</a> of the list.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That concentration means the review program MDUFA funds is, in practice, substantially a radiology-AI review program. How fast FDA clears 510(k)s, how well-staffed its digital health reviewers are, and how predictably it communicates deficiencies all shape which imaging AI products reach the market — and how quickly the version a vendor demos becomes the version a center can actually deploy.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The review-timeline math
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The headline commitment for imaging AI buyers sits in the 510(k) program — the premarket pathway through which most AI-enabled imaging software is authorized. The draft sets a goal of an <strong>average 128 calendar days</strong> from 510(k) submission to decision for submissions received in fiscal 2028, stepping down each year to <strong>112 calendar days</strong> for fiscal 2032, according to <a href="https://www.medicaldesignandoutsourcing.com/fda-releases-draft-mdufa-vi-agreement/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Medical Design &amp; Outsourcing's review of the 36-page letter</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Context makes the goal more interesting: <a href="https://www.medtechdive.com/news/4-takeaways-from-mdufa-vi-draft-agreement/824846/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive reports</a> the actual average 510(k) clearance time in the first half of 2026 was about <strong>156 days</strong> — well above even the starting goal. For PMAs, the draft keeps the MDUFA V goal of <strong>285 calendar days</strong> for original PMAs and panel-track supplements, while actual average original-PMA approval time in the first half of 2026 ran near <strong>599 days</strong>. The gap between goals and current reality is the whole negotiation, compressed into two numbers.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Program element</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">MDUFA V (current)</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">MDUFA VI draft (FY2028–32)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['510(k) average time-to-decision goal', '128 calendar days', '128 days in FY2028 → 112 days by FY2032'],
                      ['Original PMA / panel-track goal', '285 calendar days', '285 calendar days (unchanged)'],
                      ['Reviewer hiring commitments', 'Quantitative hiring targets', 'No numeric targets; twice-yearly CDRH staffing reports + annual hiring reports'],
                      ['Pre-submission feedback', 'Traditional Pre-Submission', 'Adds Focused Follow-Up Pre-Submissions: written answers in 45 days (by end of 2027)'],
                      ['TAP advisory program', 'Pilot', 'Full program, all product areas, added CMS engagement'],
                      ['Digital health capacity', 'Expand digital-health expertise', 'Expand technical expertise for "rapidly evolving digital health technologies"'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-sm font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#666] text-sm font-light">{row[1]}</td>
                        <td className="py-3 text-[#666] text-sm font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                One caveat written into the letter itself: FDA and industry state the process improvements "should achieve the average Total Time to Decision targets … provided that the total funding of the device review program adheres to the assumptions underlying this agreement," per <a href="https://www.raps.org/resource/mdufa-vi-draft-commitment-letter-details-enhancements-performance-goals.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RAPS' summary</a>. The goals are averages, conditioned on money that Congress hasn't appropriated yet.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Resourcing: transparency instead of hiring targets
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The most consequential change for AI review capacity may be what the draft <em>doesn't</em> contain. Unlike MDUFA V, the draft sets <strong>no quantitative hiring goals</strong>. Instead, <a href="https://www.medtechdive.com/news/4-takeaways-from-mdufa-vi-draft-agreement/824846/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive reports</a>, FDA commits to twice-yearly reports on the number of CDRH employees per office, annual hiring reports, and hiring "sufficient numbers of technical, scientific and other program experts" — a transparency regime rather than a headcount pledge, negotiated in the shadow of the agency's 2025 staffing cuts.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On software specifically, the draft builds on MDUFA V's commitment to expand the agency's "digital health expertise" and "align review processes with software lifecycles in digital health products." Per <a href="https://www.medicaldesignandoutsourcing.com/fda-releases-draft-mdufa-vi-agreement/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Medical Design &amp; Outsourcing</a>, FDA proposes expanding technical expertise to "address rapidly evolving digital health technologies" and engaging "stakeholders through formal and informal mechanisms to explore regulatory approaches to emerging digital health technologies."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read honestly, that means there is <strong>no AI-specific review lane and no AI-only performance goal</strong> in the draft. AI-enabled imaging software rides the general 510(k) goals plus the digital-health expertise commitments. Whether FDA can hold a 112-day average on increasingly complex AI submissions without a headcount floor is exactly the kind of question the August 5 public meeting exists to surface.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The smaller pieces that still matter for AI vendors — and their customers
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Focused Follow-Up Pre-Submissions (by December 30, 2027)',
                    desc: 'A new faster track for targeted follow-up questions on a prior pre-submission, with a written FDA response within 45 calendar days of receipt. For iterative AI products, quicker regulatory feedback loops can shorten the distance between a model improvement and a clearable submission.',
                  },
                  {
                    title: 'De Novo gets a structured introduction meeting',
                    desc: 'For De Novo requests received on or after October 1, 2027, FDA plans a structured introduction meeting within the first 30 FDA days of review, alongside a goal of deciding 90% of De Novos within 150 FDA days. Relevant for genuinely novel AI device types without a predicate.',
                  },
                  {
                    title: 'TAP becomes a full program — with CMS at the table',
                    desc: 'The Total Product Life Cycle Advisory Program pilot would become a full program covering all product areas, with more engagement between FDA and the Centers for Medicare and Medicaid Services for technologies with potential new coverage determinations — an early bridge between clearance and reimbursement.',
                  },
                  {
                    title: 'International harmonization pilot',
                    desc: 'A pilot in which the same device with the same intended use could be submitted simultaneously to FDA and at least two other regulators for coordinated review. FDA would consider elements of outside assessments under an "abridged approach" but retains full authority over the final US decision.',
                  },
                  {
                    title: 'Cleaner deficiency letters',
                    desc: 'Supervisory review before major deficiency letters go out, deficiencies limited to safety-and-effectiveness determinations, staff training by September 2028, and recipient surveys by September 2029 — aimed at fewer surprise holds mid-review.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The buyer lens: four regulatory-posture questions for radiology-AI vendors
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Imaging centers don't file 510(k)s — but they inherit the consequences of how their vendors handle them. MDUFA VI is a good prompt to ask four questions before signing an AI contract:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. Which functions are FDA-authorized — and under which pathway?',
                    desc: "Ask for the specific clearance or authorization behind each claimed capability, and verify it against FDA's public AI-enabled device list. A product can bundle cleared detection functions with uncleared convenience features; you should know which is which before it touches patient studies.",
                  },
                  {
                    title: '2. How do model updates reach production?',
                    desc: 'FDA finalized guidance on predetermined change control plans (PCCPs) in December 2024, letting manufacturers pre-authorize defined AI model modifications instead of filing a new submission for each change. Ask whether the vendor uses a PCCP, and how updates are validated and communicated either way.',
                  },
                  {
                    title: '3. Does the roadmap depend on FDA submissions during the 2027–2028 transition?',
                    desc: "MDUFA V authority expires September 30, 2027, and MDUFA VI's goals apply to submissions received from fiscal 2028. If a promised feature requires a new clearance in that window, ask how the vendor's timeline handles reauthorization risk and the current ~156-day average 510(k) reality — not the draft's 112-day aspiration.",
                  },
                  {
                    title: '4. Where does the human sit in the workflow?',
                    desc: 'Clearance describes a device; it does not describe your medico-legal workflow. Whatever the tool detects or drafts, the output that matters is a final report a radiologist has reviewed and a radiologist signs. Ask vendors to show precisely where physician review happens — and who holds the signature.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Policy moves the timelines. It doesn't move accountability.
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                MDUFA VI, if enacted, will change how fast AI products clear FDA review — it won't change who answers for the final read. That's why the fourth question above is the one to press hardest. xAID's approach is built around it: a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model system</Link> drafts the complete CT report, xAID's in-house radiologist reviews every preliminary, and the report arrives ready-to-sign — the final signature stays with your reading radiologist. However the user-fee cycle plays out in Congress, that accountability chain is the part of the regulatory picture an imaging center controls directly. For the broader vendor-evaluation checklist, see the <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="text-xaid-blue-strong underline underline-offset-2">2026 buyer's guide to AI radiology reporting</Link>.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is MDUFA VI — and is it law yet?',
                    a: 'MDUFA VI is the sixth Medical Device User Fee Amendments agreement between FDA and the medtech industry, covering fiscal years 2028–2032. As of July 2026 it is a draft commitment letter, not law. FDA will hold a public meeting on August 5, 2026, send a final commitment letter to Congress by January 15, 2027, and Congress must enact the legislation by September 30, 2027, when the current MDUFA V authority expires.',
                  },
                  {
                    q: 'How would MDUFA VI change FDA review times for AI imaging devices?',
                    a: 'Most AI-enabled imaging software reaches the market through the 510(k) pathway. The draft sets a goal of an average 128 calendar days from 510(k) submission to decision for fiscal 2028, stepping down each year to 112 days for submissions received in fiscal 2032. For comparison, the actual average 510(k) clearance time in the first half of 2026 was about 156 days. The PMA goal stays at 285 calendar days, unchanged from MDUFA V.',
                  },
                  {
                    q: 'Does the MDUFA VI draft include AI-specific commitments?',
                    a: "There is no AI-specific review lane or AI-only performance goal in the draft. The relevant commitments are broader: FDA proposes expanding technical expertise to address rapidly evolving digital health technologies and engaging stakeholders on regulatory approaches to emerging digital health technologies, building on MDUFA V's digital-health expertise commitments. On staffing, the draft replaces quantitative hiring targets with twice-yearly CDRH staffing reports and annual hiring reports.",
                  },
                  {
                    q: 'What should imaging centers ask radiology-AI vendors about regulatory posture?',
                    a: "Four questions cover most of the risk: which functions of the product are FDA-authorized and under which pathway; how model updates reach production — under a predetermined change control plan or via new submissions; whether the vendor's roadmap depends on FDA submissions during the 2027–2028 reauthorization transition; and where the human sits in the workflow — every AI-assisted read should end in a report a radiologist reviews and a radiologist signs.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: draft MDUFA VI commitment letter, FDA (July 2026), as reported by <a href="https://www.medtechdive.com/news/4-takeaways-from-mdufa-vi-draft-agreement/824846/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>, <a href="https://www.medicaldesignandoutsourcing.com/fda-releases-draft-mdufa-vi-agreement/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medical Design &amp; Outsourcing</a>, and <a href="https://www.raps.org/resource/mdufa-vi-draft-commitment-letter-details-enhancements-performance-goals.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RAPS</a>; reauthorization process per the <a href="https://www.federalregister.gov/documents/2026/07/08/2026-13778/medical-device-user-fee-amendments-public-meeting-request-for-comments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Federal Register</a>; AI-device counts per <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA's AI-enabled device list</a> as analyzed by <a href="https://theimagingwire.com/2026/03/11/numbers-from-the-fda-show-radiology-is-maintaining-its-lead/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>. Figures reflect the draft agreement and may change before enactment.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Regulation sets the floor. Your workflow sets the standard."
          sub="AI drafts the complete CT report, xAID's in-house radiologist reviews every preliminary, and your radiologist signs the final. Try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting Software: A 2026 Buyer's Guide</div>
              </Link>
              <Link to="/blog/medical-device-cybersecurity/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Medical Device Cybersecurity: The CISA DICOM Advisory</div>
              </Link>
              <Link to="/blog/radiology-ai-access-disparities/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Who Gets Radiology AI? Reimbursement Design and Disparities</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaAiMedicalDevicesMdufaVi;
