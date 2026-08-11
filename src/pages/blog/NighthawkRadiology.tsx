import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const NighthawkRadiology = () => {
  const post = {
    title: 'Nighthawk Radiology: History, Economics, and the AI Shift in After-Hours Coverage',
    dateIso: '2026-07-18',
    date: 'July 18, 2026',
    category: 'Reference',
    readingTime: 9,
    description: 'Nighthawk radiology explained: the history of NightHawk Radiology Services, how overnight preliminary reads work, the economics of after-hours coverage, and how AI drafting changes the math.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Nighthawk Radiology: History &amp; the AI Shift | xAID</title>
        <meta name="description" content="Nighthawk radiology explained — the history of NightHawk Radiology Services, how overnight preliminary reads work, and how AI is changing after-hours coverage." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nighthawk Radiology: History &amp; the AI Shift | xAID" />
        <meta property="og:description" content="Nighthawk radiology explained — the history of NightHawk Radiology Services, how overnight preliminary reads work, and how AI is changing after-hours coverage." />
        <meta property="og:url" content="https://xaid.ai/blog/nighthawk-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nighthawk Radiology: History &amp; the AI Shift | xAID" />
        <meta name="twitter:description" content="Nighthawk radiology explained — the history of NightHawk Radiology Services, how overnight preliminary reads work, and how AI is changing after-hours coverage." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/nighthawk-radiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/nighthawk-radiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "nighthawk radiology, NightHawk Radiology Services, overnight teleradiology, preliminary read, after-hours radiology coverage, AI CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is nighthawk radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nighthawk radiology is the practice of using remote, often overnight, teleradiology coverage to interpret emergency imaging when a hospital's own radiologists are off duty. The term comes from NightHawk Radiology Services, the company that popularized the model in the 2000s by stationing U.S.-licensed radiologists in other time zones so night studies could be read during their daytime. Today 'nighthawk' is used generically for any after-hours or overnight remote reading arrangement."
              }
            },
            {
              "@type": "Question",
              "name": "What happened to NightHawk Radiology Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NightHawk Radiology Services was founded in 2001 in Coeur d'Alene, Idaho, by Dr. Paul Berger, went public on the Nasdaq in February 2006 under the ticker NHWK, and was acquired by Virtual Radiologic (vRad) in a merger completed in December 2010 for $6.50 per share, roughly $170 million. NightHawk continued as a subsidiary of vRad, and the word 'nighthawk' survived as a generic term for overnight teleradiology."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between a preliminary read and a final read?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A preliminary read is a fast provisional interpretation delivered overnight to guide immediate treatment; a final read is the definitive, signed report used for the medical record and billing. In the classic nighthawk model the overseas or overnight radiologist provides only the preliminary read, and a domestic radiologist issues the final, signed report the next morning. A 2014 survey found 73% of U.S. academic radiology programs provided exclusively preliminary interpretations for at least some overnight hours."
              }
            },
            {
              "@type": "Question",
              "name": "How is AI changing after-hours nighthawk radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI report drafting shifts the overnight bottleneck. Instead of paying surcharged human preliminary reads on every night study, a center can have AI produce a structured draft the moment the scan is acquired, then have a radiologist review and sign it. This narrows the gap between the preliminary and final read and reduces reliance on scarce overnight staffing, at a time when the AAMC projects a shortfall of up to 86,000 U.S. physicians by 2036. The radiologist stays accountable: AI drafts, your radiologist signs."
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
                Reference
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Nighthawk radiology: history, economics,<br />
              <span className="text-white/60">and the AI shift in after-hours coverage</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Nighthawk radiology solved a real problem — who reads the emergency CT at 3 a.m. — by borrowing another time zone's daylight. Two decades later the same overnight bottleneck remains, but the economics and the technology have changed. Here is where the model came from, how it works, and what AI drafting does to the after-hours math.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '2001', label: 'NightHawk Radiology founded', sub: 'Coeur d\'Alene, Idaho' },
                { stat: '$170M', label: 'vRad acquisition of NightHawk', sub: 'completed Dec 2010' },
                { stat: '73%', label: 'Academic programs giving only', sub: 'preliminary overnight reads' },
                { stat: '86,000', label: 'Projected US physician shortfall', sub: 'by 2036 (AAMC, upper bound)' },
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
                What is nighthawk radiology?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Nighthawk radiology is the practice of covering overnight and after-hours emergency imaging with remote radiologists — usually reading from another location, and often another time zone — so that a scan taken at 3 a.m. gets an interpretation without waking an on-site radiologist. The name is not a coincidence: it comes from a company, <strong>NightHawk Radiology Services</strong>, that turned the arrangement into a national business in the 2000s. Over time "nighthawk" drifted into generic use, describing any overnight remote-reading service rather than one specific provider.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The problem nighthawk radiology exists to solve is structural. Emergency departments run 24/7, but radiologists are scarce, expensive, and — like everyone — worse at complex visual work in the middle of the night. Rather than staff every hospital with an overnight radiologist, the nighthawk model concentrates night reads with a remote group that is awake and working. This is a specific application of the broader field of teleradiology; if you want the full picture of remote reading, our explainer on <Link to="/blog/what-is-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">what teleradiology is and how it works</Link> covers the wider landscape.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The clever part of the original design was geography. If U.S.-licensed radiologists are stationed in a time zone where the middle of an American night is the middle of their working day, night studies get read by a fresh, awake physician instead of a fatigued one. That "follow-the-sun" idea is what made nighthawk radiology commercially distinct from simply asking a local radiologist to take call.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The rise and fall of NightHawk Radiology Services
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                NightHawk Radiology Services was founded in <strong>2001</strong> in Coeur d'Alene, Idaho, by Dr. Paul Berger, who had been a practicing radiologist before building the company around the follow-the-sun idea — stationing U.S.-board-certified, U.S.-licensed radiologists abroad (initially Australia, later Switzerland) to read American overnight studies during their local daytime (<a href="https://radiologybusiness.com/topics/healthcare-management/leadership/paul-berger-md-leaders-need-face-reality" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The company scaled fast. Its parent, NightHawk Radiology Holdings, priced an initial public offering at <strong>$16 per share</strong> and began trading on the Nasdaq under the ticker "NHWK," with the IPO completing in February 2006 (<a href="https://www.auntminnie.com/imaging-informatics/enterprise-imaging/pacs-vna/article/15576228/nighthawk-radiology-prices-ipo" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>). For a few years it was the emblem of a new industry: a publicly traded company whose entire business was reading other hospitals' night scans.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Competition and pricing pressure caught up with it. In 2010, Virtual Radiologic (vRad) agreed to acquire NightHawk; the merger completed on <strong>December 22, 2010</strong>, with vRad paying <strong>$6.50 per share</strong> in cash — roughly <strong>$170 million</strong> — and NightHawk continuing as a wholly owned subsidiary (<a href="https://www.biospace.com/virtual-radiologic-edges-toward-nighthawk-radiology-services-takeover-for-170-million" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">BioSpace</a>). The company disappeared as an independent brand, but the word survived. Today when a hospital says it uses "nighthawk coverage," it usually means any overnight teleradiology arrangement, not the original Idaho company.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Preliminary reads vs. final reads: the overnight economics
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                To understand nighthawk economics you have to separate two products. A <strong>preliminary read</strong> is a fast, provisional interpretation delivered overnight to guide immediate treatment — is there a bleed, a clot, an obstruction? A <strong>final read</strong> is the definitive, signed report that goes into the permanent medical record and supports billing. In the classic nighthawk model, the overnight remote radiologist provides the preliminary, and a domestic radiologist issues the signed final the next morning.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That split was partly regulatory and partly practical, and it was widespread. A survey of after-hours coverage by U.S. academic radiology departments found that <strong>73%</strong> provided exclusively preliminary interpretations for at least some overnight hours, while only about a quarter offered 24-hour real-time attending coverage (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1546144013007709" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of the American College of Radiology</a>). In other words, most overnight work has historically been a first pass that a rested radiologist re-reads later — effectively paying twice for one study.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Why pay for the overnight pass at all? Because the alternative — a fatigued overnight reader interpreting complex studies at 4 a.m. — is measurably worse. A study in RSNA's journal <em>Radiology</em> found radiologists made more errors interpreting off-hours body CT during overnight assignments than during daytime assignments (<a href="https://pubs.rsna.org/doi/full/10.1148/radiol.2020201558" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology, 2020</a>). Concentrating night reads with an awake, dedicated group was the whole safety argument for nighthawk radiology.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The cost side is where it gets expensive. After-hours reads command a premium over daytime rates, and a center reading a meaningful overnight volume can spend six figures a year on the surcharge alone. We break the options down — in-house on-call, locum, traditional teleradiology, and AI — in our guide to <Link to="/blog/after-hours-radiology-coverage-options/" className="text-xaid-blue-strong underline underline-offset-2">after-hours radiology coverage options</Link>. The recurring theme is that overnight coverage is the single most costly slice of a reading budget, and the nighthawk model — however clever — does not make that slice cheap.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The three ways to cover a night, compared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                The nighthawk model is one answer to the overnight-coverage question, but not the only one. Here is how the common approaches line up on the dimensions that matter at 3 a.m.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Model</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Who reads</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Output overnight</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Cost pressure</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">In-house on-call</td>
                      <td className="py-3 pr-4">Your own radiologist, fatigued</td>
                      <td className="py-3 pr-4">Preliminary or final</td>
                      <td className="py-3">Burnout, higher error rate at night</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Nighthawk / teleradiology</td>
                      <td className="py-3 pr-4">Remote group, often another time zone</td>
                      <td className="py-3 pr-4">Preliminary (final next day)</td>
                      <td className="py-3">After-hours surcharge; re-read by day</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">AI draft + radiologist sign</td>
                      <td className="py-3 pr-4">AI drafts instantly; radiologist reviews</td>
                      <td className="py-3 pr-4">Structured draft, ready to sign</td>
                      <td className="py-3">Per-study, no night surcharge on the draft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How AI drafting changes the after-hours coverage math
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The nighthawk model assumed the only way to get a fast overnight interpretation was a second awake human. AI report drafting relaxes that assumption. Instead of routing every night study to a surcharged remote preliminary read, a center can have AI generate a structured report draft the moment the scan is acquired — then have a radiologist review and sign it. The draft is not the deliverable; the signed report is. But the draft collapses the gap between "scan done" and "something to act on."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This matters because the overnight staffing squeeze is getting worse, not better. The AAMC projects a shortfall of up to <strong>86,000</strong> U.S. physicians by 2036 (<a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AAMC</a>), and radiology is among the hardest-hit specialties — the demand side of the same problem nighthawk radiology was built to absorb. We cover the workforce numbers in detail in our piece on the <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">radiologist shortage in 2026</Link>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Note what AI does and does not replace. It does not replace the radiologist's signature or judgment; there is no regulatory path today for autonomous final reporting without a physician. What it changes is the <em>preliminary</em> pass — the fast provisional read that the traditional nighthawk sold, and that a domestic radiologist re-read the next morning anyway. Extending the reasoning: since the overnight preliminary was always going to be re-read, drafting it with AI removes the redundant human first pass rather than the accountable final one. Faster attending coverage already shortens turnaround dramatically — one department cut report time from 10.4 hours to 2.8 hours by extending coverage hours (<a href="https://www.tandfonline.com/doi/full/10.2147/OAEM.S59750" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Open Access Emergency Medicine</a>) — and an instant AI draft pushes that gap smaller still.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For an apples-to-apples comparison of the remote-human model against the AI-assisted one, see <Link to="/ai-vs-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">AI vs. teleradiology</Link>. The short version: nighthawk radiology moved the read to where the radiologist was awake; AI moves the first draft to the moment the scan exists.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID applies a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation model</Link> to produce a complete, structured CT report draft, not just a detection flag. In-house review runs on every preliminary before it reaches you, and the final signature stays with your reading radiologist — AI drafts, your radiologist signs. For groups and remote-reading providers weighing how AI fits alongside human night coverage, our overview <Link to="/for-teleradiology-companies/" className="text-xaid-blue-strong underline underline-offset-2">for teleradiology companies</Link> lays out the workflow. The point is not to retire the nighthawk model wholesale, but to remove the redundant, surcharged first pass while keeping a human accountable for the report that actually gets signed.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is nighthawk radiology?',
                    a: "Nighthawk radiology is the practice of using remote, often overnight, teleradiology coverage to interpret emergency imaging when a hospital's own radiologists are off duty. The term comes from NightHawk Radiology Services, the company that popularized the model in the 2000s by stationing U.S.-licensed radiologists in other time zones so night studies could be read during their daytime. Today 'nighthawk' is used generically for any after-hours or overnight remote reading arrangement.",
                  },
                  {
                    q: 'What happened to NightHawk Radiology Services?',
                    a: "NightHawk Radiology Services was founded in 2001 in Coeur d'Alene, Idaho, by Dr. Paul Berger, went public on the Nasdaq in February 2006 under the ticker NHWK, and was acquired by Virtual Radiologic (vRad) in a merger completed in December 2010 for $6.50 per share, roughly $170 million. NightHawk continued as a subsidiary of vRad, and the word 'nighthawk' survived as a generic term for overnight teleradiology.",
                  },
                  {
                    q: 'What is the difference between a preliminary read and a final read?',
                    a: "A preliminary read is a fast provisional interpretation delivered overnight to guide immediate treatment; a final read is the definitive, signed report used for the medical record and billing. In the classic nighthawk model the overseas or overnight radiologist provides only the preliminary read, and a domestic radiologist issues the final, signed report the next morning. A 2014 survey found 73% of U.S. academic radiology programs provided exclusively preliminary interpretations for at least some overnight hours.",
                  },
                  {
                    q: 'How is AI changing after-hours nighthawk radiology?',
                    a: "AI report drafting shifts the overnight bottleneck. Instead of paying surcharged human preliminary reads on every night study, a center can have AI produce a structured draft the moment the scan is acquired, then have a radiologist review and sign it. This narrows the gap between the preliminary and final read and reduces reliance on scarce overnight staffing, at a time when the AAMC projects a shortfall of up to 86,000 U.S. physicians by 2036. The radiologist stays accountable: AI drafts, your radiologist signs.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: NightHawk founding and history via <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/paul-berger-md-leaders-need-face-reality" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; IPO via <a href="https://www.auntminnie.com/imaging-informatics/enterprise-imaging/pacs-vna/article/15576228/nighthawk-radiology-prices-ipo" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; vRad acquisition via <a href="https://www.biospace.com/virtual-radiologic-edges-toward-nighthawk-radiology-services-takeover-for-170-million" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">BioSpace</a>; preliminary-read prevalence via the <a href="https://www.sciencedirect.com/science/article/abs/pii/S1546144013007709" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Journal of the American College of Radiology</a>; overnight error rates via <a href="https://pubs.rsna.org/doi/full/10.1148/radiol.2020201558" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology (RSNA)</a>; turnaround impact via <a href="https://www.tandfonline.com/doi/full/10.2147/OAEM.S59750" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Open Access Emergency Medicine</a>; workforce projection via the <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AAMC</a>. Figures rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Cover the night without paying twice for the read."
          sub="xAID drafts a complete, structured CT report the moment the scan lands — reviewed in-house, ready for your radiologist to sign. Try it on 5 free studies."
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
              <Link to="/blog/after-hours-radiology-coverage-options/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">After-Hours Radiology Coverage Options 2026</div>
              </Link>
              <Link to="/ai-vs-teleradiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Comparison</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI vs. Teleradiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NighthawkRadiology;
