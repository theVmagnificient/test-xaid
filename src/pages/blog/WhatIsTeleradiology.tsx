import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const WhatIsTeleradiology = () => {
  const post = {
    title: 'What Is Teleradiology? How It Works in 2026',
    dateIso: '2026-07-15',
    date: 'July 15, 2026',
    category: 'Reference',
    readingTime: 10,
    description:
      'Teleradiology explained: how remote radiology reading works in 2026 — preliminary vs final reads, nighthawk history, licensing, economics, and where AI fits.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>What Is Teleradiology? How It Works in 2026 | xAID</title>
        <meta name="description" content="Teleradiology explained: how remote radiology reading works in 2026 — preliminary vs final reads, nighthawk history, licensing, economics, and where AI fits." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What Is Teleradiology? How It Works in 2026 | xAID" />
        <meta property="og:description" content="Teleradiology explained: how remote radiology reading works in 2026 — preliminary vs final reads, nighthawk history, licensing, economics, and where AI fits." />
        <meta property="og:url" content="https://xaid.ai/blog/what-is-teleradiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Is Teleradiology? How It Works in 2026 | xAID" />
        <meta name="twitter:description" content="Teleradiology explained: how remote radiology reading works in 2026 — preliminary vs final reads, nighthawk history, licensing, economics, and where AI fits." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/what-is-teleradiology" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/what-is-teleradiology",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "teleradiology, what is teleradiology, how does teleradiology work, teleradiology services, nighthawk radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is teleradiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Teleradiology is the electronic transmission of medical images — CT, MRI, X-ray, ultrasound — from the location where they are acquired to a radiologist in a different location who interprets them and issues a report. It lets a hospital or imaging center get a scan read by a qualified radiologist who is not physically on site, which is why it underpins after-hours coverage, subspecialty second opinions, and remote reading for facilities without a full-time radiologist."
              }
            },
            {
              "@type": "Question",
              "name": "How does teleradiology work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Images are acquired at the transmitting site, securely routed over an encrypted network, and delivered to a remote radiologist's worklist. The radiologist reviews the study and returns either a preliminary interpretation, which a local radiologist later finalizes, or a final interpretation where the arrangement and licensure allow it. The report flows back into the ordering facility's PACS or EHR. Turnaround, licensing, and credentialing rules govern every step."
              }
            },
            {
              "@type": "Question",
              "name": "What is nighthawk radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nighthawk radiology refers to after-hours teleradiology coverage — reading emergency studies overnight for facilities whose on-site radiologists are off. The model became widespread in the early 2000s when companies stationed US-licensed, US-board-certified radiologists in overseas time zones, starting in Australia, so overnight US scans could be read during the radiologist's daytime hours. Those reads were typically preliminary, finalized by a US radiologist the next morning."
              }
            },
            {
              "@type": "Question",
              "name": "What licensing does a teleradiologist need?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Under American College of Radiology guidance, the physician who interprets a study transmitted by teleradiology should hold the licensure required at both the transmitting and receiving sites — in practice, a license in the state where the patient is located. Radiologists commonly maintain licenses in many states, and the Interstate Medical Licensure Compact now offers an expedited pathway across more than 40 member jurisdictions, though it does not remove the underlying state-by-state requirement."
              }
            },
            {
              "@type": "Question",
              "name": "Where does AI fit into teleradiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI is increasingly used to draft structured reports and triage urgent findings before a radiologist reads a study, compressing turnaround and helping remote teams handle rising volume. It functions as a first-draft and safety-net layer, not an autonomous reader: the report is delivered ready-to-sign, and the final signature stays with the client's own reading radiologist. This draft-then-sign model complements teleradiology rather than replacing the accountable human read."
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
              What is teleradiology?<br />
              <span className="text-white/60">How remote reading works in 2026</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A neutral, plain-language guide to teleradiology — what it is, how a scan actually gets read from somewhere else, where the nighthawk model came from, how licensing and economics shape it, and where AI report drafting now fits into the workflow.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '$60.3B', label: 'Projected global teleradiology market', sub: 'by 2030' },
                { stat: '25.7%', label: 'Projected annual growth rate', sub: '2025–2030 CAGR' },
                { stat: '38.5%', label: 'North America market share', sub: 'largest region, 2024' },
                { stat: '86,000', label: 'Projected US physician shortfall', sub: 'by 2036 (AAMC)' },
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
                What is teleradiology?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                <strong>Teleradiology</strong> is the electronic transmission of medical images — CT, MRI, X-ray, ultrasound, nuclear medicine — from the site where they are acquired to a radiologist somewhere else, who interprets the study and issues a report. In plain terms: it lets a hospital, emergency department, or outpatient imaging center get a scan read by a qualified radiologist who is not standing in the building.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That single capability solves a stubborn structural mismatch. Imaging equipment is everywhere; radiologists are not. Teleradiology decouples where a scan is <em>taken</em> from where it is <em>read</em>, which is why it now underpins after-hours coverage, subspecialty second opinions, disaster and rural access, and day-to-day reading for facilities that cannot staff a full-time radiologist. The commercial market reflects that dependence: analysts valued the global teleradiology market at roughly USD 15.6 billion in 2024 and project it to reach about <strong>USD 60.3 billion by 2030</strong>, a compound annual growth rate near <strong>25.7%</strong>, with North America the largest region at about 38.5% of the 2024 market, according to <a href="https://www.grandviewresearch.com/industry-analysis/teleradiology-market" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Grand View Research</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The demand behind those numbers is not hype. The Association of American Medical Colleges projects a shortage of up to <strong>86,000 physicians by 2036</strong>, with radiology among the specialties feeling the squeeze (<a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AAMC</a>). When you cannot hire your way out of a reading backlog, moving the read instead of the radiologist becomes the default answer.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How does teleradiology work? Preliminary vs final reads
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The mechanics are consistent across providers. A scan is acquired at what the American College of Radiology calls the <em>transmitting site</em> — the facility with the scanner. The images are securely routed over an encrypted network to a <em>receiving site</em>, where a radiologist pulls the study onto a worklist, reviews it against the clinical history, and returns a report that flows back into the ordering facility's PACS or electronic health record.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The part that confuses people is the difference between two kinds of read. Per the <a href="https://www.jacr.org/article/S1546-1440(13)00185-3/fulltext" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR White Paper on Teleradiology Practice</a>, a remote radiologist may provide either:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'A preliminary interpretation',
                    desc: 'A first read — often overnight or STAT — that guides immediate patient management but is later reviewed and finalized by a radiologist at the ordering facility. Most classic after-hours teleradiology is preliminary: it moves the emergency decision forward, and the local radiologist owns the final report the next day.',
                  },
                  {
                    title: 'A final interpretation',
                    desc: 'The definitive, signed report of record, provided by the teleradiologist where the facility, licensure, and credentialing all permit it. Increasingly common for routine daytime overflow and subspecialty work, this shifts full accountability to the reading radiologist rather than a local one.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The distinction matters operationally because it determines who is accountable for the signature, how the two reports are reconciled, and where discrepancies get caught. It is also the seam where turnaround problems tend to appear — the gap between a fast preliminary and a slow final is a recurring failure mode in outsourced arrangements, as our breakdown of <Link to="/blog/radiology-outsourcing-gone-wrong/" className="text-xaid-blue-strong underline underline-offset-2">when radiology outsourcing goes wrong</Link> illustrates.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Nighthawk radiology: where teleradiology began
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Teleradiology is older than most people assume. Its roots trace to mid-20th-century military use and an early MGH–Logan Airport telemedicine link — connecting Massachusetts General Hospital with a medical station at Boston's Logan Airport; it became broadly practical only in the 1990s as high-speed networks and digital image quality caught up, per a history published in <a href="https://doi.org/10.3389/fradi.2022.866643" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Frontiers in Radiology</em></a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The breakthrough that made teleradiology a business was the <strong>nighthawk</strong> model. Overnight emergency coverage is the hardest, least popular shift to staff. Beginning around the turn of the millennium, companies solved it with geography: they stationed US-licensed, US-board-certified radiologists in overseas time zones — famously starting in Sydney, Australia — so that a scan taken at 3 a.m. in a US emergency department landed on the worklist of a radiologist working a comfortable daytime shift on the other side of the world. Paul Berger, who co-founded NightHawk Radiology, pioneered this distributed-reading model; his role as a NightHawk founder is recounted in an interview with <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/paul-berger-md-leaders-need-face-reality" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Those overseas reads were almost always preliminary, finalized by a US radiologist in the morning — the prelim-vs-final split above, applied at scale. "Nighthawk" has since become shorthand for any after-hours teleradiology coverage, whether the reader is overseas or three states away. The economics of that specific shift — and the surcharges attached to it — are worth understanding on their own; we cover them in our guide to <Link to="/blog/after-hours-radiology-coverage-options/" className="text-xaid-blue-strong underline underline-offset-2">after-hours radiology coverage options</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Credentialing and licensing: the operational backbone
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The reason teleradiology is harder to run than it looks is regulatory, not technical. A radiologist reading a study is practicing medicine on a patient located in a specific US state, and that state's rules apply. ACR guidance holds that the physician providing the interpretation should maintain the licensure required at both the transmitting and receiving sites — in practice, a valid medical license in the state where the patient is (<a href="https://www.jacr.org/article/S1546-1440(13)00185-3/fulltext" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR White Paper</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That single requirement drives a lot of teleradiology's cost and complexity. A national teleradiology practice may need radiologists licensed across dozens of states, plus hospital-by-hospital credentialing at every facility they read for. The <a href="https://imlcc.com/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Interstate Medical Licensure Compact</a> now offers an expedited pathway across more than 40 member states and jurisdictions, which speeds the paperwork — but it does not eliminate the underlying obligation to be licensed wherever the patient sits.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Credentialing adds a second layer: teleradiology partners are expected to use radiologists who are board-certified by the American Board of Radiology and to keep license status current at every reading location. This is also where the policy fights are — licensure compacts, CMS supervision rules, and offshore-reading accountability are live issues, as we track in our <Link to="/blog/teleradiology-companies-policy-watchlist/" className="text-xaid-blue-strong underline underline-offset-2">teleradiology policy watch-list</Link>. For any buyer, "who is licensed, where, and who signs" is the first due-diligence question, not the last.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The economics of teleradiology services
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Teleradiology services are usually priced per study, with modifiers that reveal where the real costs live: subspecialty reads, STAT turnaround, and after-hours coverage all carry premiums. That pricing structure is a direct consequence of the licensing and staffing burden above — a scarce, multi-state-licensed radiologist reading an urgent overnight CT is an expensive resource, and the per-study rate reflects it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For an imaging center or hospital, the practical trade-off is coverage certainty versus cost and control. Outsourcing reads buys 24/7 availability without the fixed cost of an in-house radiologist, but it introduces dependence on someone else's turnaround, someone else's worklist priorities, and contract terms that can move. Understanding the full cost stack — in-house, locum, and teleradiology — before signing is essential; we break the numbers down in our comparison of <Link to="/blog/ct-radiology-coverage-costs-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT radiology coverage costs</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI report drafting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The newest layer in the workflow is AI. Rather than competing with teleradiology, report-drafting AI slots into the same seam the prelim/final split already occupies: it produces a structured, comprehensive draft — and triages urgent findings — <em>before</em> a radiologist opens the study, compressing turnaround and helping remote teams absorb rising volume without proportionally growing headcount. The distinction that matters is architectural: narrow detection tools flag one finding at a time, while foundation models aim for one complete draft per study, as explained in <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models vs narrow AI in radiology</Link>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Critically, this is a draft-then-sign model, not autonomous reading. In the xAID workflow, the AI generates a ready-to-sign report, xAID's in-house radiologist reviews every preliminary, and the final signature stays with the client's own reading radiologist — the accountable human read that teleradiology has always centered on remains exactly where it is. That is why AI drafting is best understood as complementary infrastructure. For a head-to-head on the two approaches, see <Link to="/ai-vs-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">AI vs teleradiology</Link>; teleradiology providers evaluating AI as capacity relief can start with <Link to="/for-teleradiology-companies/" className="text-xaid-blue-strong underline underline-offset-2">xAID for teleradiology companies</Link>.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is teleradiology?',
                    a: 'Teleradiology is the electronic transmission of medical images — CT, MRI, X-ray, ultrasound — from the location where they are acquired to a radiologist in a different location who interprets them and issues a report. It lets a hospital or imaging center get a scan read by a qualified radiologist who is not physically on site, which is why it underpins after-hours coverage, subspecialty second opinions, and remote reading for facilities without a full-time radiologist.',
                  },
                  {
                    q: 'How does teleradiology work?',
                    a: "Images are acquired at the transmitting site, securely routed over an encrypted network, and delivered to a remote radiologist's worklist. The radiologist reviews the study and returns either a preliminary interpretation, which a local radiologist later finalizes, or a final interpretation where the arrangement and licensure allow it. The report flows back into the ordering facility's PACS or EHR. Turnaround, licensing, and credentialing rules govern every step.",
                  },
                  {
                    q: 'What is nighthawk radiology?',
                    a: 'Nighthawk radiology refers to after-hours teleradiology coverage — reading emergency studies overnight for facilities whose on-site radiologists are off. The model became widespread in the early 2000s when companies stationed US-licensed, US-board-certified radiologists in overseas time zones, starting in Australia, so overnight US scans could be read during the radiologist\'s daytime hours. Those reads were typically preliminary, finalized by a US radiologist the next morning.',
                  },
                  {
                    q: 'What licensing does a teleradiologist need?',
                    a: 'Under American College of Radiology guidance, the physician who interprets a study transmitted by teleradiology should hold the licensure required at both the transmitting and receiving sites — in practice, a license in the state where the patient is located. Radiologists commonly maintain licenses in many states, and the Interstate Medical Licensure Compact now offers an expedited pathway across more than 40 member jurisdictions, though it does not remove the underlying state-by-state requirement.',
                  },
                  {
                    q: 'Where does AI fit into teleradiology?',
                    a: "AI is increasingly used to draft structured reports and triage urgent findings before a radiologist reads a study, compressing turnaround and helping remote teams handle rising volume. It functions as a first-draft and safety-net layer, not an autonomous reader: the report is delivered ready-to-sign, and the final signature stays with the client's own reading radiologist. This draft-then-sign model complements teleradiology rather than replacing the accountable human read.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: market figures from <a href="https://www.grandviewresearch.com/industry-analysis/teleradiology-market" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Grand View Research</a>; physician-shortage projection from the <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AAMC</a>; teleradiology history from <a href="https://doi.org/10.3389/fradi.2022.866643" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Frontiers in Radiology</a> (DOI 10.3389/fradi.2022.866643); Paul Berger's NightHawk founder role recounted in <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/paul-berger-md-leaders-need-face-reality" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; licensing and prelim/final definitions from the <a href="https://www.jacr.org/article/S1546-1440(13)00185-3/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR White Paper on Teleradiology Practice</a> and the <a href="https://imlcc.com/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Interstate Medical Licensure Compact</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Teleradiology handles the read. xAID drafts it first."
          sub="A structured, ready-to-sign report before your radiologist opens the study — reviewed in-house, signed by yours. Try it on 5 free studies."
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
              <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Teleradiology vs Traditional Teleradiology</div>
              </Link>
              <Link to="/blog/after-hours-radiology-coverage-options/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">After-Hours Radiology Coverage Options</div>
              </Link>
              <Link to="/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Implementation</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How to Switch from Teleradiology to AI CT Reporting</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default WhatIsTeleradiology;
