import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const NighthawkRadiology = () => {
  const post = {
    title: 'Nighthawk Radiology: History, Economics, and How AI Is Changing After-Hours Coverage',
    dateIso: '2026-07-17',
    date: 'July 17, 2026',
    category: 'Reference',
    readingTime: 9,
    description: "Nighthawk radiology explained: the history of NightHawk Radiology Services, overnight preliminary-read economics, and how AI reshapes after-hours coverage.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Nighthawk Radiology: History, Economics, and AI | xAID</title>
        <meta name="description" content="Nighthawk radiology explained: the history of NightHawk Radiology Services, overnight preliminary-read economics, and how AI reshapes after-hours coverage." />
        <link rel="canonical" href="https://xaid.ai/blog/nighthawk-radiology" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nighthawk Radiology: History, Economics, and AI | xAID" />
        <meta property="og:description" content="Nighthawk radiology explained: the history of NightHawk Radiology Services, overnight preliminary-read economics, and how AI reshapes after-hours coverage." />
        <meta property="og:url" content="https://xaid.ai/blog/nighthawk-radiology" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nighthawk Radiology: History, Economics, and AI | xAID" />
        <meta name="twitter:description" content="Nighthawk radiology explained: the history of NightHawk Radiology Services, overnight preliminary-read economics, and how AI reshapes after-hours coverage." />
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
          "keywords": "nighthawk radiology, NightHawk Radiology Services, overnight teleradiology, preliminary read radiology, after-hours radiology coverage, AI CT reporting"
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
                "text": "Nighthawk radiology is after-hours teleradiology: a remote radiologist reads emergency and inpatient imaging overnight for a hospital or imaging center whose on-site radiologists are off duty, usually producing a preliminary report that a local radiologist finalizes the next morning. The term comes from NightHawk Radiology Services, a company that popularized the model in the early 2000s, and has since become generic shorthand for any overnight remote-reading arrangement."
              }
            },
            {
              "@type": "Question",
              "name": "Who founded NightHawk Radiology Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NightHawk Radiology Services was founded in 2001 in Coeur d'Alene, Idaho, by radiologist Paul Berger along with his son Jon Berger and partner Chris Huber. Paul Berger served as president and, from 2004, as CEO. The company went public on Nasdaq in 2006 under the ticker NHWK and was acquired by rival Virtual Radiologic (vRad) in December 2010."
              }
            },
            {
              "@type": "Question",
              "name": "Is NightHawk Radiology Services still in business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The original NightHawk Radiology Holdings, Inc. no longer exists as an independent company. Virtual Radiologic (vRad) acquired it for roughly $170 million in a deal that closed December 22, 2010, and vRad itself was later acquired by Mednax for about $500 million in 2015. \"Nighthawk\" today is mostly used as a generic industry term for overnight preliminary-read coverage rather than a single company brand."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate are nighthawk overnight preliminary reads?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Peer-reviewed studies generally find overnight teleradiology accuracy comparable to in-house daytime reporting. A 2021 study in Healthcare found clinically important discrepancy rates of about 6.1% for in-house reads versus 5.8% for teleradiology reads on the same population of on-call CT exams — not a statistically meaningful gap. A separate 2021 study of pediatric after-hours teleradiology found an actionable discrepancy rate of about 1.6% across nearly 8,800 preliminary reports, in line with typical inter-radiologist variation."
              }
            },
            {
              "@type": "Question",
              "name": "How is AI changing nighthawk radiology economics?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The nighthawk model exists because overnight physician labor is scarce and expensive, which is why traditional after-hours teleradiology carries a premium over daytime rates. AI report drafting removes the labor-scarcity variable: the software drafts a structured preliminary at the same speed and cost at 3 a.m. as at 3 p.m. In xAID's model, that draft still gets an in-house radiologist review before delivery, and the client's reading radiologist signs the final — the same accountability structure nighthawk services established, without the overnight labor premium."
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
              Nighthawk radiology, explained<br />
              <span className="text-white/60">history, economics, and where AI fits</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              "Nighthawk radiology" started as the name of one company reading overnight CT scans from the other side of the world. Two decades later it's the generic term for after-hours coverage — and the overnight labor economics it created are exactly what AI report drafting is now rewriting.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '2001', label: 'NightHawk Radiology Services founded', sub: 'Coeur d\'Alene, Idaho' },
                { stat: '$170M', label: 'vRad acquisition of NightHawk', sub: 'closed December 2010' },
                { stat: '5.8–6.1%', label: 'Clinically important discrepancy rate', sub: 'teleradiology vs in-house CT reads' },
                { stat: '24/7', label: 'Flat-rate AI CT drafting', sub: 'no overnight surcharge' },
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
                What "nighthawk radiology" means today
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Nighthawk radiology refers to after-hours teleradiology: a radiologist working somewhere other than the ordering hospital reads emergency and inpatient scans overnight, so a facility doesn't need an in-house radiologist physically present between roughly 11 p.m. and 7 a.m. The read is typically a <strong>preliminary interpretation</strong> — enough for the emergency physician to act on immediately — that a local radiologist reviews and finalizes the next morning.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The word itself is a brand name that escaped into the dictionary, the way "Kleenex" or "Google" did. It comes from NightHawk Radiology Services, a company that didn't invent remote radiology reading but did turn overnight coverage into a scalable, single-industry business — and in doing so gave the whole category its name. For a broader look at how remote reading works end to end, including licensing and turnaround, see our guide to <Link to="/blog/what-is-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">what teleradiology is</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where the name came from: NightHawk Radiology Services
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                NightHawk Radiology Services was founded in 2001 in Coeur d'Alene, Idaho, by radiologist Paul Berger, his son Jon Berger, and partner Chris Huber, according to <a href="https://www.sec.gov/Archives/edgar/data/1292470/000119312505196513/ds1.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">NightHawk Radiology Holdings' SEC registration statement</a>. Paul Berger became CEO in 2004 and led the company through its 2006 initial public offering on Nasdaq under the ticker NHWK.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The operational insight was geography, not just software: station US-licensed, US-board-certified radiologists in a daytime time zone on the other side of the world — Sydney, Australia, first — so a scan taken at 3 a.m. in a US emergency department lands on a worklist during someone's normal working afternoon. It sounds obvious in hindsight; at the time it was a structural fix to the hardest, least popular shift in radiology.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The company didn't stay independent. Rival Virtual Radiologic (vRad) acquired NightHawk Radiology Holdings for roughly <strong>$170 million</strong>, at $6.50 per share, in a merger that closed <strong>December 22, 2010</strong>, per <a href="https://www.prnewswire.com/news-releases/virtual-radiologic-and-nighthawk-radiology-complete-merger-112322579.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">the companies' joint press release</a>. The combined organization gave hospitals access to 325 affiliated radiologists — more than 75% fellowship-trained subspecialists — reading in excess of 7 million studies a year for nearly 2,700 facilities across all 50 states. vRad itself was later acquired by Mednax for about <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/mednax-acquires-vrad-500-million" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">$500 million in 2015</a>. The original NightHawk brand no longer exists as an independent company; the word it left behind now describes an entire coverage model, used across the industry regardless of which vendor is on the other end of the read.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How the overnight preliminary-read model actually works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A nighthawk arrangement runs on a specific division of labor formalized in the <a href="https://doi.org/10.1016/j.jacr.2013.03.018" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR White Paper on Teleradiology Practice</a>: the remote radiologist issues a preliminary interpretation the treating clinician can act on immediately, and the practice of record produces the final report, with a defined process for resolving any discrepancy between the two and for communicating a changed diagnosis back to the referring physician when it matters clinically.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That split isn't only a quality safeguard — it's also how billing works. Offshore nighthawk readers are frequently not licensed or credentialed at the specific facility ordering the study, so their overnight interpretation can't be the one submitted for reimbursement; a domestic radiologist has to re-review the images and issue the reimbursable final report, as <a href="https://doi.org/10.1016/j.annemergmed.2007.09.012" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">an <em>Annals of Emergency Medicine</em> analysis of the nighthawk model</a> describes. Licensing has since gotten easier — the Interstate Medical Licensure Compact now lets a physician hold a license in one member state and obtain expedited licenses in others — but the underlying rule hasn't changed: only the physician of record can bill for the final interpretation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That two-step structure exists to manage risk, and the published evidence suggests it does. A 2021 study in <em>Healthcare</em> comparing on-call CT reporting between teleradiology networks and in-house radiologists across more than 7,200 reads found clinically important discrepancy rates of <strong>6.1%</strong> for in-house reads versus <strong>5.8%</strong> for teleradiology reads — concluding teleradiology accuracy was "not inferior" (<a href="https://doi.org/10.3390/healthcare9040405" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Storjohann et al., <em>Healthcare</em>, 2021</a>). A separate study of nearly 8,800 after-hours pediatric preliminary reads found an overall discrepancy rate of 14.4% but an <em>actionable</em> discrepancy rate of only <strong>1.6%</strong>, comparable to routine inter-radiologist variation (<a href="https://doi.org/10.1177/2058460121989319" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Pfeifer &amp; Dinh, <em>Acta Radiologica Open</em>, 2021</a>). NightHawk itself reported an internal discrepancy rate near 0.3% in a quality-assurance discussion published in <a href="https://doi.org/10.2214/AJR.10.5532" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>AJR</em> (2011)</a>, though that figure was self-reported rather than independently audited.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why overnight coverage costs so much
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Nighthawk coverage is priced the way any scarce overnight labor is priced: hospitals and imaging centers pay a premium for radiologists willing to read at 2 a.m., because most radiologists — like most professionals — would rather not. That premium shows up directly on the invoice; our companion breakdown of <Link to="/blog/after-hours-radiology-coverage-options/" className="text-xaid-blue-strong underline underline-offset-2">after-hours radiology coverage options</Link> and <Link to="/blog/ct-radiology-coverage-costs-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT radiology coverage costs</Link> walks through how in-house on-call, locum tenens, and traditional teleradiology contracts compare on a per-study basis once night, weekend, and holiday surcharges are added in.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The underlying scarcity isn't going away on its own. The <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AAMC</a> projects a US physician shortfall of up to 86,000 physicians by 2036, driven largely by specialist demand from an aging population. Radiology is widely considered exposed to that same pressure, since imaging volume keeps climbing faster than the radiologist pipeline — our companion piece on the <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">radiologist shortage</Link> covers the specialty-specific numbers. Every additional overnight shift a group has to staff competes for the same limited supply of radiologists — which is exactly what keeps nighthawk pricing elevated rather than commoditized.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How AI drafting changes the nighthawk math
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The nighthawk model was a geography hack: move the reader to a time zone where it's daytime, so the "overnight" shift disappears for the human doing it. AI report drafting removes the need for the hack altogether. A trained model doesn't get tired at 3 a.m., doesn't need a shift differential, and doesn't care whether the study lands on a Tuesday afternoon or a Saturday holiday — it drafts a structured preliminary at the same speed and the same cost regardless of the clock. That's a structural break from every prior coverage model, in-house or remote, because all of them ultimately price a human's willingness to be awake.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                What doesn't change is the accountability structure the nighthawk era established: a draft is not a final report until a radiologist has reviewed it. xAID's <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model architecture</Link> produces a comprehensive draft report from a CT study, an in-house radiologist reviews every preliminary, and the delivered report is ready-to-sign — your reading radiologist signs the final, the same way a local radiologist has always finalized a nighthawk preliminary. The difference is that the draft itself no longer carries an overnight labor premium, and turnaround isn't gated by which time zone happens to be awake. Published accuracy data on AI-assisted CT drafting is summarized in our review of <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="text-xaid-blue-strong underline underline-offset-2">how accurate AI radiology reporting is</Link>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For staffing purposes, that also changes who a group needs to recruit. Traditional nighthawk coverage is a labor-sourcing problem — finding radiologists willing to work nights, in enough time zones to cover them all. An AI-drafted-then-reviewed workflow turns overnight coverage into a capacity question instead: the drafting doesn't need new overnight hires at all, and the review workload can be distributed across whatever daytime hours a group already staffs.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Nighthawk radiology vs. AI-drafted overnight reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Both models solve the same problem — a scan taken while the local radiologist is asleep still needs a read — but they solve it in opposite directions. The nighthawk model relocates the human reader to a time zone where it's daytime; a full-time-equivalent radiologist, or a rotation of several, still has to be recruited, licensed in the right states, and paid a premium for the shift, wherever in the world that shift physically falls. AI-drafted reporting doesn't relocate anyone — it removes the shift entirely from the drafting step, then routes the draft to whichever radiologist is reviewing reports at that moment, in-house or on the client side.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The practical result is a coverage model that behaves the same at 2 p.m. and 2 a.m.: identical turnaround target, identical per-study cost, and no separate overnight vendor relationship to manage on top of a group's daytime workflow. For a center or teleradiology group deciding between staying with a traditional after-hours vendor, adding overnight locum shifts, or moving to AI-assisted drafting, the <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="text-xaid-blue-strong underline underline-offset-2">full comparison of AI teleradiology versus traditional teleradiology</Link> lays out the turnaround and cost differences model by model.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is nighthawk radiology?',
                    a: "Nighthawk radiology is after-hours teleradiology: a remote radiologist reads emergency and inpatient imaging overnight for a hospital or imaging center whose on-site radiologists are off duty, usually producing a preliminary report that a local radiologist finalizes the next morning. The term comes from NightHawk Radiology Services, a company that popularized the model in the early 2000s, and has since become generic shorthand for any overnight remote-reading arrangement.",
                  },
                  {
                    q: 'Who founded NightHawk Radiology Services?',
                    a: "NightHawk Radiology Services was founded in 2001 in Coeur d'Alene, Idaho, by radiologist Paul Berger along with his son Jon Berger and partner Chris Huber. Paul Berger served as president and, from 2004, as CEO. The company went public on Nasdaq in 2006 under the ticker NHWK and was acquired by rival Virtual Radiologic (vRad) in December 2010.",
                  },
                  {
                    q: 'Is NightHawk Radiology Services still in business?',
                    a: 'The original NightHawk Radiology Holdings, Inc. no longer exists as an independent company. Virtual Radiologic (vRad) acquired it for roughly $170 million in a deal that closed December 22, 2010, and vRad itself was later acquired by Mednax for about $500 million in 2015. "Nighthawk" today is mostly used as a generic industry term for overnight preliminary-read coverage rather than a single company brand.',
                  },
                  {
                    q: 'How accurate are nighthawk overnight preliminary reads?',
                    a: 'Peer-reviewed studies generally find overnight teleradiology accuracy comparable to in-house daytime reporting. A 2021 study in Healthcare found clinically important discrepancy rates of about 6.1% for in-house reads versus 5.8% for teleradiology reads on the same population of on-call CT exams — not a statistically meaningful gap. A separate 2021 study of pediatric after-hours teleradiology found an actionable discrepancy rate of about 1.6% across nearly 8,800 preliminary reports, in line with typical inter-radiologist variation.',
                  },
                  {
                    q: 'How is AI changing nighthawk radiology economics?',
                    a: "The nighthawk model exists because overnight physician labor is scarce and expensive, which is why traditional after-hours teleradiology carries a premium over daytime rates. AI report drafting removes the labor-scarcity variable: the software drafts a structured preliminary at the same speed and cost at 3 a.m. as at 3 p.m. In xAID's model, that draft still gets an in-house radiologist review before delivery, and the client's reading radiologist signs the final — the same accountability structure nighthawk services established, without the overnight labor premium.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: NightHawk Radiology Services founding and leadership history from <a href="https://www.sec.gov/Archives/edgar/data/1292470/000119312505196513/ds1.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">NightHawk Radiology Holdings' SEC registration statement</a>; vRad–NightHawk merger terms from the <a href="https://www.prnewswire.com/news-releases/virtual-radiologic-and-nighthawk-radiology-complete-merger-112322579.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">companies' PR Newswire release</a>; vRad–Mednax acquisition from <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/mednax-acquires-vrad-500-million" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; teleradiology practice standards from the <a href="https://doi.org/10.1016/j.jacr.2013.03.018" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR White Paper on Teleradiology Practice</a> (JACR, 2013); accuracy data from <a href="https://doi.org/10.3390/healthcare9040405" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Storjohann et al., <em>Healthcare</em> (2021)</a>, <a href="https://doi.org/10.1177/2058460121989319" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Pfeifer &amp; Dinh, <em>Acta Radiologica Open</em> (2021)</a>, and <a href="https://doi.org/10.2214/AJR.10.5532" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>AJR</em> (2011)</a>; physician shortage projection from the <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AAMC</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="After-hours coverage, without the overnight premium"
          sub="xAID drafts a complete, ready-to-sign CT report around the clock at one flat rate — reviewed in-house on every preliminary, signed by your radiologist. Try it on 5 free studies."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NighthawkRadiology;
