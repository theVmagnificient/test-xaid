import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologistAssistantMedicareReimbursement = () => {
  const post = {
    title: 'MARCA: Congress Wants to Expand Medicare Reimbursement for Radiologist Assistants',
    dateIso: '2026-08-12',
    date: 'August 12, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "A bipartisan bill, MARCA, would let radiologists bill Medicare for radiologist-assistant services in hospitals, not just offices. Here's what it changes — and how it compares to AI as a capacity fix.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MARCA: Radiologist Assistant Reimbursement | xAID</title>
        <meta name="description" content="MARCA would expand Medicare radiologist assistant reimbursement to hospitals, not just offices. What the bill changes, and how it compares to AI capacity fixes." />
        <link rel="canonical" href="https://xaid.ai/blog/radiologist-assistant-medicare-reimbursement" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MARCA: Radiologist Assistant Reimbursement | xAID" />
        <meta property="og:description" content="MARCA would expand Medicare radiologist assistant reimbursement to hospitals, not just offices. What the bill changes, and how it compares to AI capacity fixes." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MARCA: Radiologist Assistant Reimbursement | xAID" />
        <meta name="twitter:description" content="MARCA would expand Medicare radiologist assistant reimbursement to hospitals, not just offices. What the bill changes, and how it compares to AI capacity fixes." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiologist-assistant-medicare-reimbursement" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiologist-assistant-medicare-reimbursement",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiologist assistant reimbursement, MARCA bill, Medicare radiologist assistant, radiologist shortage, AI CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Medicare Access to Radiology Care Act (MARCA)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MARCA is bipartisan legislation that would let radiologists bill Medicare for non-diagnostic services performed by radiologist assistants (RAs) under their direct supervision, regardless of care setting. A Senate version, S.4624, was reintroduced by Sens. John Boozman (R-AR) and Ben Ray Luján (D-NM) on May 21, 2026; a House companion, H.R.9984, was introduced by Reps. John Joyce (R-PA) and Mike Thompson (D-CA) on July 30, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "Why can't radiologist assistants be reimbursed by Medicare in hospitals today?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Since 2019, Medicare has reimbursed for RA-performed services in physician office settings, but a regulatory gap leaves RA services performed in hospitals, critical access hospitals, and ambulatory surgical centers -- where RAs most often work -- without a Medicare billing pathway. MARCA would close that gap by allowing the supervising radiologist to bill Medicare for RA services in any covered setting."
              }
            },
            {
              "@type": "Question",
              "name": "What can a radiologist assistant do under MARCA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RAs are advanced-level radiographers who train under a radiologist-directed clinical preceptorship and hold ARRT's Registered Radiologist Assistant credential. Under MARCA, RAs remain barred from independently interpreting imaging exams; they are reimbursed only as part of a radiologist-led team, with the payment made to the supervising radiologist rather than to the RA directly. The House bill sets facility-setting payment at rates comparable to clinical nurse specialists under the physician fee schedule, effective January 1, 2027, if enacted."
              }
            },
            {
              "@type": "Question",
              "name": "How does MARCA compare to AI as a fix for the radiologist shortage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Both respond to the same capacity gap but at different points in the workflow. MARCA extends the radiologist's non-interpretive workload -- positioning, protocolling, some interventional and non-diagnostic tasks -- to a supervised assistant, which still requires hiring, training, and years of ARRT certification to scale. AI CT reporting tools instead speed up the interpretive and reporting step itself, producing a structured draft report a radiologist reviews, with software deployment measured in weeks rather than the years needed to build an RA workforce."
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
              Congress wants to pay for radiologist assistants.<br />
              <span className="text-white/60">Here's what MARCA actually changes.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A bipartisan bill would close a Medicare billing gap that's kept hospitals from getting paid for radiologist-assistant work they already rely on. It's a staffing-based answer to the same reporting-capacity problem AI is being deployed to solve — on a very different timeline.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '2019', label: 'RA Medicare pay began', sub: 'office settings only' },
            { stat: 'Jul 30, 2026', label: 'House bill introduced', sub: 'H.R.9984' },
            { stat: 'Jan 1, 2027', label: 'Proposed effective date', sub: 'if enacted' },
            { stat: '25.7%', label: 'Radiologist supply growth', sub: 'projected 2023–2055' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What MARCA does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Medicare Access to Radiology Care Act (MARCA) has bipartisan sponsors in both chambers. A Senate version, S.4624, was reintroduced on May 21, 2026 by Sens. John Boozman (R-AR) and Ben Ray Luján (D-NM); a House companion, H.R.9984, was introduced on July 30, 2026 by Reps. John Joyce (R-PA) and Mike Thompson (D-CA), as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/congressmen-propose-expanding-medicare-reimbursement-radiologist-assistants" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The mechanism is narrower than it sounds: MARCA doesn't create a new class of independent biller. It fixes a setting-based inconsistency. Since 2019, Medicare has reimbursed radiologist-assistant (RA) services performed in physician <em>offices</em>, but RA services performed in <em>hospitals</em>, critical access hospitals, and ambulatory surgical centers — the settings where RAs most often actually work — have had no Medicare billing pathway at all, according to the <a href="https://www.arrt.org/news/article/2026/05/22/marca-bill-introduced" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Registry of Radiologic Technologists (ARRT)</a>. MARCA would let the supervising radiologist bill Medicare for non-diagnostic RA services regardless of setting, and the House text would pay for covered facility-based services at rates comparable to those for clinical nurse specialists under the physician fee schedule, effective January 1, 2027, per the bill text on <a href="https://www.govinfo.gov/bulkdata/BILLS/119/2/hr/BILLS-119hr9984ih.xml" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">govinfo.gov</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Crucially, the bill doesn't touch who can interpret an image. RAs are advanced-level radiographers — not physicians — who complete a radiologist-directed clinical preceptorship and hold ARRT's Registered Radiologist Assistant credential. Both the American College of Radiology (ACR) and ARRT are explicit that under MARCA, RAs are reimbursed only as part of a radiologist-led team, with payment flowing to the supervising radiologist, and that the RA scope of practice specifically excludes independent interpretation of imaging exams, per <a href="https://www.acr.org/News-and-Publications/Media-Center/2026/acr-supports-marca-bill" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR's statement of support</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Who's behind it, and why now
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The bill has assembled a specific coalition: ACR helped create the RA role together with the American Society of Radiologic Technologists (ASRT), the Society of Radiology Physician Extenders (SRPE), and ARRT, per <a href="https://www.acr.org/News-and-Publications/Media-Center/2026/acr-supports-marca-bill" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR's statement of support</a> — and all four back MARCA, alongside groups like the Association for Medical Imaging Management, per <a href="https://www.arrt.org/news/article/2026/05/22/marca-bill-introduced" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ARRT's announcement</a>. Sen. Boozman called the current split-by-setting rule a problem with a "commonsense solution," and ASRT is among the professional societies backing the bill, per the <a href="https://www.asrt.org/main/standards-and-regulations/legislation-regulations-and-advocacy/marca" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ASRT summary of MARCA</a> — support that comes against a broader imaging-workforce shortage detailed in the projection data below.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Not everyone is on board. Some radiologists have raised concerns that expanded reimbursement will pull more technologists toward the RA track and could, over time, invite pressure to widen RA scope of practice beyond what's currently defined — a "slippery slope" argument reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/congress-reconsiders-controversial-changes-radiologist-assistant-payments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. A separate legal analysis from law firm Reed Smith flagged a drafting gap of its own: as introduced, the covered-settings list doesn't expressly include physician offices or independent diagnostic testing facilities, even though radiologists also work with RAs in office-based procedures — an inconsistency the <a href="https://www.reedsmith.com/our-insights/blogs/viewpoints/102mvne/proposal-to-provide-medicare-payment-to-radiologists-for-ra-services-but-office/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">firm's analysis</a> suggests Congress will need to clarify before final passage.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The shortage MARCA is really responding to
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                MARCA doesn't exist in a vacuum — it's one more legislative response to a radiology capacity problem that's shown up in <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="text-xaid-blue-strong underline underline-offset-2">fee-schedule fights</Link> and workforce data alike. A 2025 JACR modeling study projected that if residency positions don't grow past 2024 levels, the radiologist workforce reaches roughly 47,119 by 2055 — 25.7% above the 37,482 radiologists enrolled to treat Medicare patients in 2023 — while imaging demand keeps climbing, meaning the present shortage is expected to persist rather than close on its own without action, per the study (<a href="https://doi.org/10.1016/j.jacr.2024.10.019" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">DOI: 10.1016/j.jacr.2024.10.019</a>) as summarized by the <a href="https://www.neimanhpi.org/press-releases/new-studies-shed-light-on-the-future-radiologist-workforce-shortage-by-projecting-future-radiologist-supply-and-demand-for-imaging/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Harvey L. Neiman Health Policy Institute</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                RAs are one lever against that gap: by taking on positioning, protocol, and other non-interpretive tasks under supervision, they free radiologist time for image interpretation itself. But scaling that lever is slow by design — RA training requires a dedicated academic program, a radiologist-directed clinical preceptorship, and a national certification exam, per <a href="https://www.acr.org/News-and-Publications/Media-Center/2026/acr-supports-marca-bill" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR</a>. Passing MARCA removes a payment obstacle; it doesn't shorten that pipeline.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two fixes for the same gap, at different speeds
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                It's worth being precise about what each approach actually expands. RAs extend the radiologist's non-interpretive capacity — the tasks around a study. AI report-drafting tools extend interpretive throughput — the report itself. They're not substitutes for each other; they attack adjacent bottlenecks in the same workflow, on very different cost and speed profiles.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">MARCA / radiologist assistants</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">AI CT report drafting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">What's extended</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Non-diagnostic, non-interpretive tasks under radiologist supervision</td>
                      <td className="py-3 text-[#444] font-light">Speed of producing an interpretive report draft</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Time to scale</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Years — academic program, preceptorship, certification, hiring</td>
                      <td className="py-3 text-[#444] font-light">Weeks — software deployment and integration</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Who interprets images</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Radiologist only — RA interpretation excluded by design</td>
                      <td className="py-3 text-[#444] font-light">Radiologist only — AI drafts a ready-to-sign report; your radiologist signs</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Dependency</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Congress passing MARCA and CMS implementing it</td>
                      <td className="py-3 text-[#444] font-light">Vendor selection and internal rollout</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                MARCA, even if enacted on its proposed January 1, 2027 timeline, changes what hospitals can bill for — not how fast a study gets reported today. For imaging centers and teleradiology groups feeling the same shortage pressure MARCA is meant to address, AI CT reporting is a complementary, faster-to-deploy lever: the AI produces a structured report draft, <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">xAID's in-house radiologist reviews every preliminary</Link>, and the report reaches the client ready-to-sign, with the reading radiologist making the final call. It doesn't require new legislation, a multi-year training pipeline, or a change to who's allowed to bill Medicare — just a decision to add capacity where the interpretive bottleneck actually sits.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the Medicare Access to Radiology Care Act (MARCA)?',
                    a: "MARCA is bipartisan legislation that would let radiologists bill Medicare for non-diagnostic services performed by radiologist assistants (RAs) under their direct supervision, regardless of care setting. A Senate version, S.4624, was reintroduced by Sens. John Boozman (R-AR) and Ben Ray Luján (D-NM) on May 21, 2026; a House companion, H.R.9984, was introduced by Reps. John Joyce (R-PA) and Mike Thompson (D-CA) on July 30, 2026.",
                  },
                  {
                    q: "Why can't radiologist assistants be reimbursed by Medicare in hospitals today?",
                    a: 'Since 2019, Medicare has reimbursed for RA-performed services in physician office settings, but a regulatory gap leaves RA services performed in hospitals, critical access hospitals, and ambulatory surgical centers -- where RAs most often work -- without a Medicare billing pathway. MARCA would close that gap by allowing the supervising radiologist to bill Medicare for RA services in any covered setting.',
                  },
                  {
                    q: 'What can a radiologist assistant do under MARCA?',
                    a: "RAs are advanced-level radiographers who train under a radiologist-directed clinical preceptorship and hold ARRT's Registered Radiologist Assistant credential. Under MARCA, RAs remain barred from independently interpreting imaging exams; they are reimbursed only as part of a radiologist-led team, with the payment made to the supervising radiologist rather than to the RA directly. The House bill sets facility-setting payment at rates comparable to clinical nurse specialists under the physician fee schedule, effective January 1, 2027, if enacted.",
                  },
                  {
                    q: 'How does MARCA compare to AI as a fix for the radiologist shortage?',
                    a: "Both respond to the same capacity gap but at different points in the workflow. MARCA extends the radiologist's non-interpretive workload -- positioning, protocolling, some interventional and non-diagnostic tasks -- to a supervised assistant, which still requires hiring, training, and years of ARRT certification to scale. AI CT reporting tools instead speed up the interpretive and reporting step itself, producing a structured draft report a radiologist reviews, with software deployment measured in weeks rather than the years needed to build an RA workforce.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/congressmen-propose-expanding-medicare-reimbursement-radiologist-assistants" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.arrt.org/news/article/2026/05/22/marca-bill-introduced" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ARRT</a>, <a href="https://www.acr.org/News-and-Publications/Media-Center/2026/acr-supports-marca-bill" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR</a>, <a href="https://www.asrt.org/main/standards-and-regulations/legislation-regulations-and-advocacy/marca" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ASRT</a>, <a href="https://www.govinfo.gov/bulkdata/BILLS/119/2/hr/BILLS-119hr9984ih.xml" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">H.R.9984 bill text (govinfo.gov)</a>, <a href="https://www.reedsmith.com/our-insights/blogs/viewpoints/102mvne/proposal-to-provide-medicare-payment-to-radiologists-for-ra-services-but-office/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Reed Smith</a>, and the JACR workforce study (<a href="https://doi.org/10.1016/j.jacr.2024.10.019" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1016/j.jacr.2024.10.019</a>). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Legislation moves in years. Capacity can move this quarter."
          sub="See how xAID adds radiologist-reviewed reporting capacity without waiting on Congress. Try it on 5 free studies."
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
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
              <Link to="/blog/patients-first-act-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Patients First Act: What It Means for Radiology Pay</div>
              </Link>
              <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">2027 Medicare Physician Fee Schedule: What It Means for Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologistAssistantMedicareReimbursement;
