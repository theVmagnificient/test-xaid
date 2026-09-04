import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AlaraRadiationSafetyRuleChange = () => {
  const post = {
    title: "ACR vs. NRC: What the ALARA Rollback Really Changes",
    dateIso: '2026-09-04',
    date: 'September 4, 2026',
    category: 'Compliance',
    readingTime: 7,
    description: "The NRC wants to replace ALARA with a flexible dose standard. ACR isn't fighting that — it's fighting the paperwork it would require of imaging centers.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{post.title} | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/alara-radiation-safety-rule-change" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | xAID`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/alara-radiation-safety-rule-change" />
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
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/alara-radiation-safety-rule-change" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/alara-radiation-safety-rule-change",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "ALARA radiation safety, NRC ALARA rule, radiation dose regulation, ACR radiation safety comments, radiation protection framework"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the NRC proposing to change about ALARA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a proposed rule published in the July 15, 2026 Federal Register (docket NRC-2025-1140), the Nuclear Regulatory Commission would remove references to \"As Low As Reasonably Achievable\" (ALARA) from its regulations and replace them with a \"graded approach to dose management,\" under which protection measures scale with how close a dose gets to a defined regulatory threshold. The NRC says licensees that want to keep operating existing ALARA-based programs may continue to do so."
              }
            },
            {
              "@type": "Question",
              "name": "Does this NRC rule apply to CT scans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not directly. The NRC regulates the safe use of radioactive \"byproduct material\" by medical licensees — nuclear medicine, radiopharmaceutical therapy, and brachytherapy — not diagnostic x-ray or CT, which falls under state regulation and professional guidance such as the ACR's Image Wisely and Image Gently programs. The rule change is nonetheless a signal: a federal radiation-safety anchor that imaging-adjacent fields have relied on for 50 years is moving from a fixed formula to case-by-case, licensee-managed judgment."
              }
            },
            {
              "@type": "Question",
              "name": "What is the American College of Radiology actually opposing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In an August 27, 2026 comment letter, ACR said dropping the formal ALARA language is not in conflict with its dose-optimization principles. What it opposes are specific new compliance mechanics: an \"administration regimen\" definition it calls unclear in real-world practice, a proposed shift from evaluating doses \"per release\" to \"per patient administration regimen,\" and a written-consent requirement not limited to higher-dose cases — all of which ACR says would add documentation burden and ambiguity without a clear safety benefit."
              }
            },
            {
              "@type": "Question",
              "name": "What does ACR support in the same proposal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ACR supports maintaining the current public dose limit of 1 mSv (0.1 rem) per year, removing an old short-term dose-rate limit, keeping current occupational dose limits, excluding lens-of-the-eye dose from the NRC's new dose-limit-extension flexibility, and raising the caregiver dose ceiling to align with occupational limits. Its objections are concentrated on how doses get defined, recorded, and consented to — not on where the numeric limits themselves land."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for imaging centers' documentation practices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As the federal rule text moves from a specific mandate to a flexible standard, the practical safety net shifts toward what a facility can actually show it did: a complete, consistent record of dose-justification decisions, technique, and radiologist review on every study. That record — not the regulatory wording itself — is what would hold up if a dose or a report were ever challenged."
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
                Compliance
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              The NRC wants to retire ALARA.<br />
              <span className="text-white/60">ACR's fight is really about the paperwork.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 50-year-old federal radiation-safety formula is being rewritten. The American College of Radiology isn't defending the old wording — it's fighting the new compliance mechanics that would replace it, and its objections point straight at documentation.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'NRC-2025-1140', label: 'Proposed rule docket', sub: 'published July 15, 2026' },
            { stat: '40,000+', label: 'Physicians ACR represents', sub: 'across diagnostic, IR, nuc med' },
            { stat: '50 mSv', label: 'Proposed caregiver dose cap', sub: 'per regimen, was per release' },
            { stat: '25 rem', label: '5-year cumulative dose ceiling', sub: "under NRC's new dose-limit extension" },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the NRC actually proposed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 15, 2026, the Nuclear Regulatory Commission published a sweeping proposed rule in the <a href="https://www.federalregister.gov/documents/2026/07/15/2026-14208/reforming-and-modernizing-the-nrcs-radiation-protection-framework" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Federal Register</a> titled <em>Reforming and Modernizing the NRC's Radiation Protection Framework</em> (docket <strong>NRC-2025-1140</strong>). Among its biggest changes: removing references to "As Low As Reasonably Achievable" — ALARA, the principle that has anchored U.S. radiation safety regulation for roughly 50 years — and replacing it with what the rule calls a "graded approach to dose management," in which protection measures scale up as doses approach defined regulatory thresholds rather than being driven down indefinitely below them.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The rulemaking is part of the NRC's broader effort to implement a <a href="https://www.federalregister.gov/documents/2025/05/29/2025-09798/ordering-the-reform-of-the-nuclear-regulatory-commission" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">May 2025 executive order</a> directing the agency to streamline its regulations. The comment period closed August 31, 2026, and the NRC drew pushback from multiple directions — including state officials: New Mexico Attorney General Raúl Torrez <a href="https://nmdoj.gov/press-release/attorney-general-raul-torrez-opposes-trump-administrations-rapid-and-drastic-overhaul-of-nuclear-energy-regulation/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">publicly opposed</a> what he called a "rapid and drastic overhaul" of nuclear regulation, according to <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/american-college-radiology-opposes-changes-radiation-safety-rules" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                One scope note matters before going further: the NRC regulates the safe use of radioactive <em>byproduct material</em> by medical licensees — nuclear medicine, radiopharmaceutical therapy, brachytherapy — not the practice of medicine generally, and not diagnostic x-ray or CT. Standard CT dose is governed by state regulators and professional standards, including ACR's own Image Wisely and Image Gently campaigns, not by this NRC docket. What's changing here is the federal anchor for radioactive-material dose management specifically. But the shape of the fight — and what it reveals about where liability protection actually lives once a bright-line rule gets replaced with a flexible one — travels well beyond nuclear medicine.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where ACR actually draws the line
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In an <a href="https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/Advocacy/Radiation-Protection-ACR-Comments.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">August 27, 2026 comment letter</a> signed by CEO Dana H. Smetherman, MD, ACR — which represents more than 40,000 physicians in diagnostic radiology, interventional radiology, radiation oncology, nuclear medicine, and medical physics — is notably not fighting to keep the word "ALARA" on the books. The letter states that replacing ALARA-based requirements with a graded approach "is not in conflict" with the profession's underlying commitment to dose optimization, which it says will keep operating through professional guidance regardless of the regulatory label. ACR also welcomes the NRC's assurance that licensees who want to keep their existing ALARA-based programs can continue doing so unchanged.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What ACR opposes is more specific, and it clusters around how doses get defined, recorded, and consented to. The college calls the NRC's proposed "administration regimen" definition — the course of a radiopharmaceutical or brachytherapy treatment as intended by the treating physician — "unclear in real-world medical practices," warning it doesn't account for regimens that change mid-treatment. It opposes a proposed written-consent requirement at §35.75(b)(1) that, as drafted, wouldn't be limited to higher-dose cases, calling it an "undue compliance and documentation burden... without a risk-based rationale." And it opposes the NRC's proposed shift from evaluating doses to caregivers and the public "per release" to "per patient administration regimen," which ACR says would "create uncertainty for licensees and unnecessarily complicate patient release determinations" every time a treatment plan is adjusted.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The topline numbers mostly hold',
                    desc: "ACR backs keeping the public dose limit at 1 mSv (0.1 rem) per year and the current occupational limits (5 rem total effective dose, 15 rem lens of the eye). It even supports raising the caregiver dose ceiling to 50 mSv (5 rem), aligned with occupational limits. The dispute isn't over how much radiation is allowed — it's over how that dose gets counted and documented.",
                  },
                  {
                    title: 'A new flexibility comes with a new watch-item',
                    desc: 'The NRC\'s proposed "dose limit extension" would let a worker receive up to twice the annual occupational limit in a single year, as long as the total over the current and prior four years stays under 25 rem. ACR supports excluding lens-of-the-eye dose from that flexibility, but wants guardrails to prevent it becoming an "economic incentive for exceeding" normal limits.',
                  },
                  {
                    title: 'Ambiguity is the thing licensees actually have to defend',
                    desc: 'When a compliance unit shifts from something concrete (a single release) to something contested (an "administration regimen" that can change with a patient\'s response to treatment), the burden of proving compliance moves from the regulation to the licensee\'s own records — which is exactly what ACR\'s letter keeps flagging as new "documentation and recordkeeping challenges."',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Old framework vs. proposed framework
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Provision</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Current rule</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">NRC's proposal</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">ACR's position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Guiding principle', 'ALARA (as low as reasonably achievable)', 'Graded approach to dose management, tied to defined thresholds', 'Not opposed, if existing ALARA-based programs stay compliant'],
                      ['Patient release accounting', 'Per release', 'Per patient administration regimen', 'Opposes — wants "per release" kept, or "expected administration regimen" as a compromise'],
                      ['Caregiver written consent', 'Required only above set exposure levels', 'Proposed for essentially all administrations', 'Opposes as drafted — wants it limited to caregiver doses likely to exceed 5 mSv (0.5 rem)'],
                      ['Caregiver dose limit (released patient)', '5 mSv (0.5 rem) per release', 'Up to 50 mSv (5 rem) per administration regimen, with consent', 'Supports the higher ceiling; opposes the "per regimen" accounting unit'],
                      ['Occupational dose flexibility', 'Fixed annual limit of 5 rem', 'New "dose limit extension" — up to 2x annual limit in one year, capped at 25 rem over 5 years', 'Wants added oversight to prevent misuse; supports excluding lens-of-eye dose'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#0D0D0D] font-medium align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#666] font-light align-top">{row[1]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#666] font-light align-top">{row[2]}</td>
                        <td className="py-3 text-[14px] text-[#666] font-light align-top">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Source: <a href="https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/Advocacy/Radiation-Protection-ACR-Comments.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR comment letter to the NRC, August 27, 2026</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this matters beyond nuclear medicine
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This particular docket governs radiopharmaceutical and brachytherapy dose, not CT. But it's a preview of a broader pattern: when a federal radiation-safety anchor moves from a specific, auditable formula to a flexible standard that licensees interpret and apply themselves, the practical protection for a facility stops being "what the rule said" and becomes "what we can show we did." ACR's own objections make that point for it — nearly every one of its concerns is about ambiguity in definitions, consent scope, and recordkeeping, not about whether a given dose number is too high or too low.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That logic holds for diagnostic CT dose management too, even though it sits outside this NRC docket. CT dose optimization has never rested primarily on NRC regulation — it runs through state oversight, ACR accreditation, and voluntary programs like Image Wisely and Image Gently. Those anchors aren't changing here. What is changing is the signal: federal radiation-safety frameworks are trending toward flexible, licensee-managed judgment rather than fixed formulas. In that environment, the record a practice keeps — dose-justification rationale, technique parameters, and who reviewed a study before it went out — is what actually stands between a facility and a bad outcome in an audit, a payer dispute, or a malpractice claim. The regulatory floor doesn't have to move for that record to matter more; it just has to get less prescriptive.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured, reviewed reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The provisions ACR is fighting hardest are the ones that would make a facility's own documentation the thing regulators lean on — a clean, consistent, per-study record instead of a single bright-line number to point to. That's the same problem structured CT reporting is built to solve: a report that reliably carries technique, dose, and clinical-justification fields on every study, not just the ones someone remembers to double-check. xAID's AI drafts that structured report, an in-house radiologist reviews every preliminary, and it reaches the client's reading radiologist ready-to-sign — so the documentation trail behind every dose decision is consistent by default, whatever the federal floor ends up saying.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the NRC proposing to change about ALARA?',
                    a: 'In a proposed rule published in the July 15, 2026 Federal Register (docket NRC-2025-1140), the Nuclear Regulatory Commission would remove references to "As Low As Reasonably Achievable" (ALARA) from its regulations and replace them with a "graded approach to dose management," under which protection measures scale with how close a dose gets to a defined regulatory threshold. The NRC says licensees that want to keep operating existing ALARA-based programs may continue to do so.',
                  },
                  {
                    q: 'Does this NRC rule apply to CT scans?',
                    a: "Not directly. The NRC regulates the safe use of radioactive \"byproduct material\" by medical licensees — nuclear medicine, radiopharmaceutical therapy, and brachytherapy — not diagnostic x-ray or CT, which falls under state regulation and professional guidance such as the ACR's Image Wisely and Image Gently programs. The rule change is nonetheless a signal: a federal radiation-safety anchor that imaging-adjacent fields have relied on for 50 years is moving from a fixed formula to case-by-case, licensee-managed judgment.",
                  },
                  {
                    q: 'What is the American College of Radiology actually opposing?',
                    a: 'In an August 27, 2026 comment letter, ACR said dropping the formal ALARA language is not in conflict with its dose-optimization principles. What it opposes are specific new compliance mechanics: an "administration regimen" definition it calls unclear in real-world practice, a proposed shift from evaluating doses "per release" to "per patient administration regimen," and a written-consent requirement not limited to higher-dose cases — all of which ACR says would add documentation burden and ambiguity without a clear safety benefit.',
                  },
                  {
                    q: 'What does ACR support in the same proposal?',
                    a: "ACR supports maintaining the current public dose limit of 1 mSv (0.1 rem) per year, removing an old short-term dose-rate limit, keeping current occupational dose limits, excluding lens-of-the-eye dose from the NRC's new dose-limit-extension flexibility, and raising the caregiver dose ceiling to align with occupational limits. Its objections are concentrated on how doses get defined, recorded, and consented to — not on where the numeric limits themselves land.",
                  },
                  {
                    q: "What does this mean for imaging centers' documentation practices?",
                    a: "As the federal rule text moves from a specific mandate to a flexible standard, the practical safety net shifts toward what a facility can actually show it did: a complete, consistent record of dose-justification decisions, technique, and radiologist review on every study. That record — not the regulatory wording itself — is what would hold up if a dose or a report were ever challenged.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/american-college-radiology-opposes-changes-radiation-safety-rules" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, the <a href="https://edge.sitecorecloud.io/americancoldf5f-acrorgf92a-productioncb02-3650/media/ACR/Files/Advocacy/Radiation-Protection-ACR-Comments.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR comment letter to the NRC</a> (August 27, 2026), the <a href="https://www.federalregister.gov/documents/2026/07/15/2026-14208/reforming-and-modernizing-the-nrcs-radiation-protection-framework" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Federal Register notice</a> for docket NRC-2025-1140, the <a href="https://www.federalregister.gov/documents/2025/05/29/2025-09798/ordering-the-reform-of-the-nuclear-regulatory-commission" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">May 2025 NRC reform executive order</a>, and the New Mexico Attorney General's <a href="https://nmdoj.gov/press-release/attorney-general-raul-torrez-opposes-trump-administrations-rapid-and-drastic-overhaul-of-nuclear-energy-regulation/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">press statement</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="When the federal floor gets looser, your documentation is the backstop."
          sub="See how structured, radiologist-reviewed CT reports keep dose-justification and technique consistent on every study. Try it on 5 free studies."
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
              <Link to="/blog/is-ai-radiology-reporting-hipaa-compliant/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Compliance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Is AI Radiology Reporting HIPAA Compliant?</div>
              </Link>
              <Link to="/blog/radiology-malpractice-ai-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Risk &amp; Liability</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Anatomy of a $7M Missed-Cancer Verdict</div>
              </Link>
              <Link to="/blog/clinical-indication-radiology-orders/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Reporting</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">LLMs Beat Clinicians at Writing Order Indications</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AlaraRadiationSafetyRuleChange;
