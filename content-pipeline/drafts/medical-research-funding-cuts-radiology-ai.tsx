import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const MedicalResearchFundingCutsRadiologyAi = () => {
  const post = {
    title: 'A Federal Grant Rule Radiology Groups Are Fighting — and Why AI Evidence Depends on It',
    dateIso: '2026-07-19',
    date: 'July 19, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "OMB's proposed rewrite of federal grant rules drew over 496,000 public comments and alarm from the American College of Radiology. Here's what the rule changes, and why the NIH funding it touches is the same funding that built radiology AI's evidence base.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Federal Grant Rule Fight and Radiology AI Research | xAID</title>
        <meta name="description" content="OMB's grantmaking rewrite drew 496,000+ comments and ACR pushback. What changes, and why the NIH funding at stake underpins radiology AI evidence." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Federal Grant Rule Fight and Radiology AI Research | xAID" />
        <meta property="og:description" content="OMB's grantmaking rewrite drew 496,000+ comments and ACR pushback. What changes, and why the NIH funding at stake underpins radiology AI evidence." />
        <meta property="og:url" content="https://xaid.ai/blog/medical-research-funding-cuts-radiology-ai" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Federal Grant Rule Fight and Radiology AI Research | xAID" />
        <meta name="twitter:description" content="OMB's grantmaking rewrite drew 496,000+ comments and ACR pushback. What changes, and why the NIH funding at stake underpins radiology AI evidence." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/medical-research-funding-cuts-radiology-ai" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/medical-research-funding-cuts-radiology-ai",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "medical research funding cuts, federal research grant rules, NIH funding radiology AI, ACR grantmaking, OMB uniform guidance"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the OMB proposal that the American College of Radiology opposes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On May 29, 2026, the White House Office of Management and Budget proposed a rewrite of the Uniform Guidance (2 C.F.R. Part 200), the government-wide rulebook for federal grants. The draft would require political appointees to conduct a 'pre-issuance review' of discretionary grants, downgrade peer-review recommendations to advisory status, and expand agencies' authority to suspend or terminate awards, including new 90-day stop-work orders. The American College of Radiology flagged concerns on nine specific sections and is preparing formal comments."
              }
            },
            {
              "@type": "Question",
              "name": "How many public comments did the proposed grant rule receive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "OMB received 496,769 public comments before the July 13, 2026 deadline. An analysis by University of North Carolina researchers, done in partnership with STAT, of the roughly 52,000 comments posted in full found about 95% opposed the rule and roughly 1% supported it, with political control of grantmaking the most-cited concern."
              }
            },
            {
              "@type": "Question",
              "name": "Why does a grantmaking rule matter for radiology AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Radiology AI's clinical evidence base is built substantially on publicly funded research. NIH funding for AI-in-radiology projects grew from $46.4 million in FY2015 to $633.5 million in FY2024, roughly a 13.7-fold increase, and AI's share of radiology research grants rose from 3.9% to 30.4% over the same period, per a 2026 study in the Journal of Imaging Informatics in Medicine. That funded pipeline of peer-reviewed studies is what independent evidence, and eventually FDA clearance, for imaging AI tools is built on. Rules that make grant continuation contingent on political review, rather than scientific merit, add uncertainty to that pipeline."
              }
            },
            {
              "@type": "Question",
              "name": "Does xAID rely on NIH-funded research?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID is not an NIH grantee and this rule does not directly govern its operations. But the broader radiology AI field, including the published, peer-reviewed evidence that referring physicians and radiologists use to evaluate any AI vendor's claims, draws heavily on federally funded academic research. A more volatile or politically gated grant pipeline makes that independent evidence base slower and less predictable to build, which is why xAID pairs its own reporting workflow with in-house radiologist review rather than resting on AI output alone."
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
              A federal grant rule radiology groups are fighting<br />
              <span className="text-white/60">and why AI evidence depends on it</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The American College of Radiology is one of hundreds of medical and scientific organizations pushing back on a White House proposal to rewrite how federal research grants are awarded, monitored, and pulled. The fight is about grant process — but the money at stake is the same money that has built radiology AI's published evidence base.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '496,769', label: 'Public comments filed', sub: 'on the OMB proposal by July 13, 2026' },
                { stat: '~95%', label: 'Of analyzed comments opposed', sub: 'per a UNC/STAT review of ~52,000 postings' },
                { stat: '13.7×', label: 'Growth in NIH AI-radiology funding', sub: '$46.4M (FY2015) to $633.5M (FY2024)' },
                { stat: '76%', label: 'Of FDA-cleared AI devices are radiology', sub: '1,104 of 1,451, as of Dec 31, 2025' },
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
                What OMB actually proposed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On May 29, 2026, the White House Office of Management and Budget, joined by 41 other agencies, published a <a href="https://www.federalregister.gov/documents/2026/05/29/2026-10817/regulation-for-federal-financial-assistance" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">notice of proposed rulemaking</a> to substantially rewrite the Uniform Guidance — the roughly 15-year-old rulebook (2 C.F.R. Part 200) that governs essentially every federal grant and cooperative agreement, including NIH and NSF research awards. Three changes drew the most attention from the research community:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Political appointees would review grants before they go out',
                    desc: "Proposed §200.205 would require a senior political appointee, rather than career program officers, to conduct a \"pre-issuance review\" of discretionary grant awards, checking that each one \"demonstrably advances the President's policy priorities.\" Appointees are explicitly told not to routinely defer to peer reviewers' recommendations.",
                  },
                  {
                    title: 'Peer review becomes advisory, not binding',
                    desc: 'The draft states that scientific peer-review recommendations "remain advisory and are not ministerially ratified, routinely deferred to, or otherwise treated as de facto binding" — a shift from how NIH and NSF have run competitive grant review for decades.',
                  },
                  {
                    title: 'Broader authority to suspend or terminate awards already granted',
                    desc: 'Proposed §200.340 would let agencies terminate a discretionary award if continued funding no longer "effectuates program goals, Federal agency priorities, or the national interest," and adds a new stop-work authority letting agencies pause a project for up to 90 days.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Comments closed July 13, 2026 after a 45-day window; OMB has said it intends to finalize the rule by October 1, 2026, according to <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/american-college-radiology-pans-proposal-shake-federal-grantmaking" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business's</a> coverage of the proposal.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why radiology's own society got involved
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The <a href="https://www.acr.org/News-and-Publications/2026/omb-releases-proposed-rule-federal-financial-assistance" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology</a> called the draft "a significant update to the foundational guidance governing all federal grants and cooperative agreements" and said it is weighing feedback across nine specific sections — including the pre-issuance review, the termination authority, a proposed restriction on foreign research collaborations, and changes to what conference and publication costs a grant can cover. ACR is preparing a coordinated advocacy response through its government affairs office.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Individual radiology researchers were blunter. Jonathan M. Rubin, MD, PhD, a radiologist and professor emeritus at the University of Michigan who relies on federal grants for medical-imaging and ultrasound research, told OMB in comments filed June 3 that "the rule changes for federal grants proposed by the Office of Management and Budget will be a disaster for research in the United States," as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/disaster-research-concern-among-radiologists-over-new-federal-rule-regulating-grantmaking" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>. The American Association for the Advancement of Science went further, calling the move "a brazen power grab by the Director of the Office of Management and Budget to buck the will of Congress and the American people" that "will make future discoveries less likely," in a <a href="https://www.aaas.org/news/aaas-statement-omb-rule-politicizing-federal-grantmaking" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">public statement</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A record-setting, lopsided comment file
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The scale of the reaction is itself notable: 496,769 comments were filed by the July 13 deadline, according to <a href="https://www.statnews.com/2026/07/15/trump-omb-grant-funding-proposal-comments-95-percent-opposed/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">STAT's</a> reporting on an analysis conducted by University of North Carolina at Chapel Hill researchers. Of roughly 52,000 comments posted in full and machine-classified for the analysis, about 95% were opposed and roughly 1% supported the changes; about 60% of opposing comments specifically cited political control over grant decisions, and roughly a third objected to peer review losing its binding status. This is a proposal about administrative process, not about a specific dollar figure being cut — but it lands on top of a year in which NIH's budget itself has repeatedly been a fight: an earlier proposal to cap reimbursement of research facilities and administrative costs at 15% was permanently blocked in court, and a roughly 40% cut to NIH's budget proposed for fiscal 2026 was rejected by Congress. Radiology research funding keeps surviving these fights procedurally, but the recurring threat of medical research funding cuts and now process-level political control adds real uncertainty for labs planning multi-year studies.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Current rule vs. proposed rule
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Area</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Current Uniform Guidance</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Proposed rule</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Grant review', 'Career program officers rely on scientific peer review to select awards.', 'A political appointee performs a pre-issuance review; peer review is advisory only.'],
                      ['Continuing awards', 'Termination generally requires cause (noncompliance, fraud).', 'Agencies may terminate if funding no longer serves current priorities; new 90-day stop-work orders.'],
                      ['Foreign collaboration', 'Handled case-by-case under existing security and disclosure rules.', 'New restrictions on grants involving certain foreign collaborations (§200.220).'],
                      ['Effective date', 'N/A', 'Proposed for October 1, 2026, pending the final rule.'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#666] text-sm font-light align-top">{row[1]}</td>
                        <td className="py-3 text-[#666] text-sm font-light align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The pipeline this touches: how radiology AI gets validated
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Grantmaking process might sound distant from a radiology AI tool sitting in a hospital's reading room, but the two are connected through evidence. FDA clearance for an imaging AI algorithm typically follows a chain: academic labs publish peer-reviewed validation studies, often funded by NIH or NSF grants; that published literature is what independent radiologists, referring physicians, and hospital committees actually check before trusting a vendor's accuracy claims; and it's also what a device maker cites in its FDA submission.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That funding stream has grown fast. A 2026 study in the <em>Journal of Imaging Informatics in Medicine</em> found NIH funding of AI-in-radiology projects rose from <a href="https://doi.org/10.1007/s10278-026-01870-x" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">$46.4 million in FY2015 to $633.5 million in FY2024</a> — about a 13.7-fold increase — while AI's share of all active radiology research grants grew from 3.9% to 30.4% over the same decade. The National Cancer Institute led on number of projects (188, totaling $117.0 million) and the National Heart, Lung, and Blood Institute led on total funding ($167.3 million); R01 grants, the NIH's standard investigator-initiated research award, accounted for 547 of those projects and $326.1 million.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The clinical payoff of that pipeline shows up in FDA's own device list: radiology accounts for 1,104 of the 1,451 AI-enabled medical devices the FDA has ever authorized — 76% of the total, as of December 31, 2025, per <a href="https://theimagingwire.com/2026/03/11/numbers-from-the-fda-show-radiology-is-maintaining-its-lead/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Imaging Wire's</a> tracking. None of that happens without the underlying grants. A rule that makes grant renewal contingent on political alignment, rather than on scientific merit and results, adds a new variable to a pipeline that vendors, hospitals, and regulators all currently treat as scientifically driven.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID does not hold NIH or NSF grants, and this rule does not govern its operations directly. But every radiology AI vendor, xAID included, is judged against an evidence base that federally funded academic research built and keeps rebuilding. That's a reason to lean on more than a model's own output: xAID's reporting workflow pairs its foundation-model draft with in-house radiologist review before a report reaches the client's reading radiologist, ready to sign — so accuracy claims rest on clinical oversight today, not solely on a research pipeline that federal policy is currently unsettling.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the OMB proposal that the American College of Radiology opposes?',
                    a: "On May 29, 2026, the White House Office of Management and Budget proposed a rewrite of the Uniform Guidance (2 C.F.R. Part 200), the government-wide rulebook for federal grants. The draft would require political appointees to conduct a 'pre-issuance review' of discretionary grants, downgrade peer-review recommendations to advisory status, and expand agencies' authority to suspend or terminate awards, including new 90-day stop-work orders. The American College of Radiology flagged concerns on nine specific sections and is preparing formal comments.",
                  },
                  {
                    q: 'How many public comments did the proposed grant rule receive?',
                    a: 'OMB received 496,769 public comments before the July 13, 2026 deadline. An analysis by University of North Carolina researchers, done in partnership with STAT, of the roughly 52,000 comments posted in full found about 95% opposed the rule and roughly 1% supported it, with political control of grantmaking the most-cited concern.',
                  },
                  {
                    q: 'Why does a grantmaking rule matter for radiology AI?',
                    a: 'Radiology AI\'s clinical evidence base is built substantially on publicly funded research. NIH funding for AI-in-radiology projects grew from $46.4 million in FY2015 to $633.5 million in FY2024, roughly a 13.7-fold increase, and AI\'s share of radiology research grants rose from 3.9% to 30.4% over the same period, per a 2026 study in the Journal of Imaging Informatics in Medicine. That funded pipeline of peer-reviewed studies is what independent evidence, and eventually FDA clearance, for imaging AI tools is built on. Rules that make grant continuation contingent on political review, rather than scientific merit, add uncertainty to that pipeline.',
                  },
                  {
                    q: 'Does xAID rely on NIH-funded research?',
                    a: 'xAID is not an NIH grantee and this rule does not directly govern its operations. But the broader radiology AI field, including the published, peer-reviewed evidence that referring physicians and radiologists use to evaluate any AI vendor\'s claims, draws heavily on federally funded academic research. A more volatile or politically gated grant pipeline makes that independent evidence base slower and less predictable to build, which is why xAID pairs its own reporting workflow with in-house radiologist review rather than resting on AI output alone.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/american-college-radiology-pans-proposal-shake-federal-grantmaking" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "American College of Radiology pans proposal to shake up federal grantmaking"; additional reporting from <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/disaster-research-concern-among-radiologists-over-new-federal-rule-regulating-grantmaking" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.statnews.com/2026/07/15/trump-omb-grant-funding-proposal-comments-95-percent-opposed/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">STAT</a>; rule text via the <a href="https://www.federalregister.gov/documents/2026/05/29/2026-10817/regulation-for-federal-financial-assistance" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Federal Register</a>; ACR position via <a href="https://www.acr.org/News-and-Publications/2026/omb-releases-proposed-rule-federal-financial-assistance" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">acr.org</a>; AAAS statement via <a href="https://www.aaas.org/news/aaas-statement-omb-rule-politicizing-federal-grantmaking" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">aaas.org</a>; NIH AI-in-radiology funding figures from Jabal et al., <em>Journal of Imaging Informatics in Medicine</em> (2026), <a href="https://doi.org/10.1007/s10278-026-01870-x" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s10278-026-01870-x</a>; FDA device counts via <a href="https://theimagingwire.com/2026/03/11/numbers-from-the-fda-show-radiology-is-maintaining-its-lead/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Evidence still matters. So does oversight."
          sub="See how xAID pairs foundation-model reporting with in-house radiologist review — ready-to-sign, not autonomous. Try it on 5 free studies."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
              <Link to="/blog/radiology-ai-access-disparities/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI Access Disparities</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MedicalResearchFundingCutsRadiologyAi;
