import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const RadiologyOutsourcingGoneWrong = () => {
  const post = {
    title: 'When Radiology Outsourcing Goes Wrong: Anatomy of a Failed Teleradiology Transition',
    dateIso: '2026-07-06',
    date: 'July 6, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "A Tennessee health system replaced its local radiology group with an overseas teleradiology company — and within days, clinicians reported STAT scans waiting up to six hours, inpatient studies taking more than a day, and non-radiologists doing preliminary reads. A failure-mode analysis of radiology outsourcing, a due-diligence checklist for any contract, and the alternative that keeps turnaround control in-house.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Outsourcing Gone Wrong: A Case Study | xAID</title>
        <meta name="description" content="A health system's teleradiology switch left STAT scans waiting up to 6 hours. Why outsourced reads slow down — and a due-diligence checklist for any contract." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Outsourcing Gone Wrong: A Case Study | xAID" />
        <meta property="og:description" content="A health system's teleradiology switch left STAT scans waiting up to 6 hours. Why outsourced reads slow down — and a due-diligence checklist for any contract." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Outsourcing Gone Wrong: A Case Study | xAID" />
        <meta name="twitter:description" content="A health system's teleradiology switch left STAT scans waiting up to 6 hours. Why outsourced reads slow down — and a due-diligence checklist for any contract." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-outsourcing-gone-wrong" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-outsourcing-gone-wrong" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-outsourcing-gone-wrong",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology outsourcing, teleradiology transition, teleradiology delays, radiology turnaround time, outsourced radiology reads, radiology outsourcing contract"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What happened with the teleradiology transition in Chattanooga?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In February 2026, CommonSpirit Health moved to replace Diagnostic Imaging Consultants — the local radiology group that had served Memorial Hospital in Chattanooga for decades — with an India-based teleradiology company. In the days following the June 17, 2026 cutover, frontline clinicians reported serious radiology delays, technical failures affecting access to imaging, and workflow breakdowns, including STAT emergency scans waiting up to six hours for interpretation. The health system publicly apologized to patients in early July."
              }
            },
            {
              "@type": "Question",
              "name": "Why do outsourced radiology reads slow down after a transition?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common failure modes include the onboarding cliff (full volume shifts to the new vendor on day one, before its radiologists know local protocols and systems), credentialing and licensing lag (only part of the vendor's roster may be credentialed at the facility at go-live), queue economics (studies enter a multi-client queue the hospital doesn't control, often without enforceable turnaround-time penalties), IT integration failures between PACS/RIS/EMR systems, and the loss of local escalation paths — there is no radiologist down the hall to call about a critical finding."
              }
            },
            {
              "@type": "Question",
              "name": "What should a hospital check before signing a radiology outsourcing contract?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At minimum: turnaround-time SLAs with financial penalties (per priority tier, measured per study, not as an average), the number of radiologists actually licensed and credentialed for each facility at go-live, a phased cutover with the incumbent group overlapping the new vendor, tested PACS/RIS/EMR integration with access to priors, a named escalation path for critical findings, published QA and discrepancy-review processes, and a contingency plan if the vendor misses SLAs — including exit terms."
              }
            },
            {
              "@type": "Question",
              "name": "Is there an alternative to outsourcing radiology reads entirely?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Instead of moving the whole interpretation to an external queue, hospitals can keep final reads with their own radiologists and outsource the drafting work. AI-drafted preliminary reports — reviewed by a radiologist before delivery and signed by the hospital's own reading radiologist — cut per-study reporting time without handing turnaround control to an outside vendor's staffing situation."
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
                Market &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              When radiology outsourcing goes wrong:<br />
              <span className="text-white/60">anatomy of a failed teleradiology transition</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A Tennessee health system swapped its local radiology group for a remote teleradiology company. Within days, clinicians were reporting STAT scans waiting hours, inpatient studies waiting more than a day, and non-radiologists doing preliminary reads. What broke — and what any hospital should check before signing an outsourcing contract.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '6 hrs', label: 'STAT scans waiting', sub: 'for interpretation, clinicians report' },
                { stat: '>1 day', label: 'Inpatient studies delayed', sub: 'on deteriorating patients' },
                { stat: 'Days', label: 'From cutover to crisis', sub: 'after the June 17, 2026 switch' },
                { stat: 'Weeks', label: 'Patient waits for results', sub: 'for routine outpatient imaging' },
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
                What happened in Chattanooga
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In February 2026, CommonSpirit Health moved to replace Diagnostic Imaging Consultants — the local radiology group that had served Memorial Hospital in Chattanooga, Tennessee, for decades — with a remote teleradiology company based in India, according to an <a href="https://www.chattanoogan.com/2026/6/25/520376/Need-For-Investigation-At-Memorial.aspx" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">open letter from frontline clinicians</a> published in the Chattanoogan. The cutover happened on June 17, 2026. It did not go well.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "In the days following the June 17, 2026 transition, clinicians report serious radiology delays, technical failures affecting access to imaging, and workflow breakdowns," the letter states. Internal communications from administration, it adds, "acknowledge a substantial imaging backlog and have directed staff to prioritize certain patients, divert imaging to outside facilities, and have non-radiologists perform preliminary 'wet reads.'"
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The specifics the clinicians describe are stark: <strong>STAT emergency scans taking up to six hours</strong> to be interpreted, <strong>inpatient studies on deteriorating patients taking more than a day</strong>, and "a troubling rise in vague, inconclusive reports — along with diagnostic errors they fear have already misguided patient care in some cases." Per <a href="https://radiologybusiness.com/topics/patient-care/telehealth/docs-sound-alarm-imaging-delays-amid-health-systems-troubling-teleradiology-transition" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, some delays affected stroke patients in the emergency department.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Patients noticed too. One long-time patient told Chattanooga's <a href="https://foxchattanooga.com/news/local/radiology-delays-affect-some-imaging-appointments-at-chattanooga-area-hospital-commonspirit-memorial-hospital-imaging-scans-patient-appointments-healthcare" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">local Fox affiliate</a> that her ultrasound report in December was available in the patient portal the same day — but after a return visit in June, she had been waiting weeks for results. In early July, the health system issued a public apology: "We deeply regret any inconvenience this may have caused our patients... you deserve timely and clear information." It did not cite a reason for the delays.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Note the timeline. This was not a rushed, overnight switch: the decision came in February, the cutover in mid-June — roughly four months of lead time. The system still hit a backlog severe enough that non-radiologists were doing preliminary reads within days. That is what makes this case worth studying: it shows how radiology outsourcing fails <em>even when there is time to prepare</em>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Not an isolated incident
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Chattanooga episode is a sharp local example of a national pattern. The VA's National Teleradiology Program — one of the largest outsourced-read operations in the country — was the subject of an Office of Inspector General review that, as reported by <a href="https://www.usmedicine.com/clinical-topics/oncology/staff-shortages-cause-extensive-delays-at-vas-national-teleradiology-program/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">U.S. Medicine</a>, documented a growing trend of interpretation delays. In fiscal year 2024, the program met its 1-hour STAT benchmark on <strong>78.9%</strong> of roughly 1.08 million stat studies, and its 48-hour routine benchmark on <strong>69.3%</strong> of 363,830 routine studies. In summer 2024, when staffing couldn't keep up with demand, program leaders cut accepted routine volume by 15% and stopped interpreting stat studies during weekday business hours.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Meanwhile, baseline turnaround pressure is rising everywhere. A <em>Journal of the American College of Radiology</em> study of nearly 2.6 million outpatient imaging studies from Medicare claims found interpretation turnaround times <a href="https://www.jacr.org/article/S1546-1440(26)00148-1/fulltext" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">jumped 113% between 2014 and 2023</a> — from about 2 hours 11 minutes to about 4 hours 37 minutes on average, with CT rising the most (up 318%), as covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-staffing/imaging-interpretation-turnaround-times-more-double-over-decade" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. The authors' conclusion: the radiology workforce "has reached maximum capacity in that it cannot absorb additional workload." Any outsourcing vendor is hiring from that same exhausted pool — which is exactly why a contract that looks fine on paper can fail in the queue.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why outsourced reads slow down: five failure modes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Teleradiology is not inherently broken — it covers gaps that many hospitals could not otherwise fill. But transitions like Chattanooga's fail in predictable ways. Five mechanisms show up again and again:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. The onboarding cliff',
                    desc: 'On cutover day, 100% of volume shifts to radiologists who have never read for the site: they don\'t know its scanners and protocols, its referring physicians, or where the priors live. Throughput drops exactly when the queue is fullest. In Chattanooga, serious delays appeared within days of the June 17 switch — despite months of lead time.',
                  },
                  {
                    title: '2. Credentialing and licensing lag',
                    desc: 'Every radiologist rendering reads for a facility must be licensed for the jurisdiction and credentialed at that facility. A vendor roster that looks deep on paper can shrink to a fraction of its size at go-live, because only part of it has cleared credentialing. The effective reading pool is the credentialed pool — not the brochure.',
                  },
                  {
                    title: '3. Queue economics without enforceable SLAs',
                    desc: 'Outsourced studies enter a multi-client worklist the hospital does not control. When vendor demand exceeds vendor capacity, someone\'s studies wait — and without turnaround-time SLAs backed by financial penalties, there is no mechanism forcing it not to be yours. The VA\'s program shows what capacity stress looks like even with benchmarks: it simply stopped taking stat studies during business hours.',
                  },
                  {
                    title: '4. IT integration failure',
                    desc: 'The Chattanooga letter cites "technical failures affecting access to imaging" alongside the delays. PACS-to-vendor interfaces, prior-study migration, HL7 results delivery back into the EMR — each is a single point of failure, and each tends to be tested at demo volume, not at full production volume on day one.',
                  },
                  {
                    title: '5. Loss of local knowledge and escalation paths',
                    desc: 'When the group down the hall is gone, so is the phone call about an ambiguous critical finding. The letter describes a rise in "vague, inconclusive reports" — a familiar symptom when readers lack local context and clinicians lack a direct line to the person who read the study.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A due-diligence checklist for any radiology outsourcing contract
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The clinicians' letter asks for "objective data comparing imaging turnaround times before and after the transition." That data should exist <em>before</em> any contract is signed. Whatever vendor a hospital evaluates, these are the questions that separate a managed transition from a backlog:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Contract area</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">What to require</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Red flag</th>
                    </tr>
                  </thead>
                  <tbody className="font-light text-[#444]">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 align-top">Turnaround-time SLAs</td>
                      <td className="py-3 pr-4 align-top">Per-priority-tier targets (STAT / urgent / routine) measured per study, with financial penalties for misses</td>
                      <td className="py-3 align-top">TAT expressed only as an average, or as a goal with no penalty</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 align-top">Credentialed capacity</td>
                      <td className="py-3 pr-4 align-top">Named count of radiologists licensed and credentialed for your facility on day one, per modality and subspecialty</td>
                      <td className="py-3 align-top">A total roster number with credentialing "in progress"</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 align-top">Cutover plan</td>
                      <td className="py-3 pr-4 align-top">Phased volume shift with the incumbent group overlapping the new vendor; go/no-go criteria at each phase</td>
                      <td className="py-3 align-top">Hard cutover of 100% of volume on a single date</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 align-top">IT integration</td>
                      <td className="py-3 pr-4 align-top">End-to-end testing at production volume: PACS transfer, priors access, results back into the EMR</td>
                      <td className="py-3 align-top">Interface testing scheduled for the week of go-live</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 align-top">Critical findings</td>
                      <td className="py-3 pr-4 align-top">Named escalation path and maximum notification time for critical results; direct clinician-to-reader contact</td>
                      <td className="py-3 align-top">Critical findings handled through a generic ticket queue</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 align-top">Quality assurance</td>
                      <td className="py-3 pr-4 align-top">Published discrepancy-review process, peer review rates, and reporting of QA metrics to the hospital</td>
                      <td className="py-3 align-top">QA described as internal and not shared</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 align-top">Exit and contingency</td>
                      <td className="py-3 pr-4 align-top">Defined contingency coverage if SLAs are missed, and exit terms that don't strand the hospital</td>
                      <td className="py-3 align-top">No plan B beyond "divert imaging to outside facilities"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Every red flag in that table maps to something that reportedly happened in Chattanooga: the hard cutover, the technical failures, the backlog managed by diverting patients and improvising wet reads. A more detailed walk-through of transition mechanics is in the guide on <Link to="/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">switching from teleradiology without breaking coverage</Link>, and current turnaround norms are collected in the <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT turnaround-time benchmarks</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The structural fix: outsource the drafting, not the read
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Underneath the checklist sits a structural question: when a hospital outsources interpretation wholesale, it trades a staffing problem for a control problem. Turnaround now depends on an external company's recruiting, credentialing pipeline, and multi-client queue — the exact variables the Chattanooga clinicians say broke, and the ones the VA program has struggled with at national scale.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                There is another way to divide the work. The most time-consuming part of a radiologist's read is not the judgment — it's producing the report. AI systems built on <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models</Link> can draft a complete, structured CT report covering all visible findings, so the hospital's own radiologists review and sign instead of dictating from scratch. In xAID's workflow, the AI drafts the report, an in-house radiologist reviews every preliminary, and the study comes back ready-to-sign — the final signature stays with the hospital's own reading radiologist.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That division of labor changes the failure modes. There is no credentialing cliff, because the readers of record are the radiologists the hospital already credentials. There is no multi-client queue deciding whether a STAT head CT waits six hours, because prioritization stays on the hospital's own worklist. And there is no loss of local knowledge, because the physician signing the report is the same one clinicians can call. The comparison of <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="text-xaid-blue-strong underline underline-offset-2">AI-drafted reporting vs traditional teleradiology</Link> covers the trade-offs in detail — but the core point is simple: capacity can be bought; control has to be kept.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What happened with the teleradiology transition in Chattanooga?',
                    a: 'In February 2026, CommonSpirit Health moved to replace Diagnostic Imaging Consultants — the local radiology group that had served Memorial Hospital in Chattanooga for decades — with an India-based teleradiology company. In the days following the June 17, 2026 cutover, frontline clinicians reported serious radiology delays, technical failures affecting access to imaging, and workflow breakdowns, including STAT emergency scans waiting up to six hours for interpretation. The health system publicly apologized to patients in early July.',
                  },
                  {
                    q: 'Why do outsourced radiology reads slow down after a transition?',
                    a: "Common failure modes include the onboarding cliff (full volume shifts to the new vendor on day one, before its radiologists know local protocols and systems), credentialing and licensing lag (only part of the vendor's roster may be credentialed at the facility at go-live), queue economics (studies enter a multi-client queue the hospital doesn't control, often without enforceable turnaround-time penalties), IT integration failures between PACS/RIS/EMR systems, and the loss of local escalation paths — there is no radiologist down the hall to call about a critical finding.",
                  },
                  {
                    q: 'What should a hospital check before signing a radiology outsourcing contract?',
                    a: 'At minimum: turnaround-time SLAs with financial penalties (per priority tier, measured per study, not as an average), the number of radiologists actually licensed and credentialed for each facility at go-live, a phased cutover with the incumbent group overlapping the new vendor, tested PACS/RIS/EMR integration with access to priors, a named escalation path for critical findings, published QA and discrepancy-review processes, and a contingency plan if the vendor misses SLAs — including exit terms.',
                  },
                  {
                    q: 'Is there an alternative to outsourcing radiology reads entirely?',
                    a: "Yes. Instead of moving the whole interpretation to an external queue, hospitals can keep final reads with their own radiologists and outsource the drafting work. AI-drafted preliminary reports — reviewed by a radiologist before delivery and signed by the hospital's own reading radiologist — cut per-study reporting time without handing turnaround control to an outside vendor's staffing situation.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/patient-care/telehealth/docs-sound-alarm-imaging-delays-amid-health-systems-troubling-teleradiology-transition" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> coverage of the CommonSpirit Health (Chattanooga) teleradiology transition; the frontline clinicians' <a href="https://www.chattanoogan.com/2026/6/25/520376/Need-For-Investigation-At-Memorial.aspx" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">open letter in the Chattanoogan</a> (June 25, 2026); patient reporting by <a href="https://foxchattanooga.com/news/local/radiology-delays-affect-some-imaging-appointments-at-chattanooga-area-hospital-commonspirit-memorial-hospital-imaging-scans-patient-appointments-healthcare" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Fox Chattanooga</a>; VA OIG findings via <a href="https://www.usmedicine.com/clinical-topics/oncology/staff-shortages-cause-extensive-delays-at-vas-national-teleradiology-program/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">U.S. Medicine</a>; turnaround-time trends from the <a href="https://www.jacr.org/article/S1546-1440(26)00148-1/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Journal of the American College of Radiology</a>, as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-staffing/imaging-interpretation-turnaround-times-more-double-over-decade" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Keep the signature. Lose the queue."
          sub="xAID drafts complete CT reports your own radiologists review and sign — with an in-house radiologist review on every preliminary. Try it on 5 free studies."
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
              <Link to="/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Guides</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How to Switch from Teleradiology to AI CT Reporting</div>
              </Link>
              <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Comparison</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Teleradiology vs Traditional Teleradiology in 2026</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Benchmarks</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyOutsourcingGoneWrong;
