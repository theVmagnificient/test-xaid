import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MultiCancerEarlyDetectionCtVolume = () => {
  const post = {
    title: 'Multi-Cancer Blood Tests Mean More CT Volume, Not Less',
    dateIso: '2026-08-19',
    date: 'August 19, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "As multi-cancer early detection blood tests scale, a positive result doesn't replace a CT scan — it triggers one. Here's what that means for radiology capacity.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Multi-Cancer Blood Tests Mean More CT Volume | xAID</title>
        <meta name="description" content="As multi-cancer early detection blood tests scale, a positive result doesn't replace a CT scan — it triggers one. Here's what that means for radiology capacity." />
        <link rel="canonical" href="https://xaid.ai/blog/multi-cancer-early-detection-blood-test-ct-volume/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Multi-Cancer Blood Tests Mean More CT Volume | xAID" />
        <meta property="og:description" content="As multi-cancer early detection blood tests scale, a positive result doesn't replace a CT scan — it triggers one. Here's what that means for radiology capacity." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multi-Cancer Blood Tests Mean More CT Volume | xAID" />
        <meta name="twitter:description" content="As multi-cancer early detection blood tests scale, a positive result doesn't replace a CT scan — it triggers one. Here's what that means for radiology capacity." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/multi-cancer-early-detection-blood-test-ct-volume" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/multi-cancer-early-detection-blood-test-ct-volume",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "multi-cancer early detection blood test, MCED, Galleri, Guardant Shield, confirmatory CT, radiology capacity, cancer screening imaging"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does a multi-cancer early detection blood test replace a CT scan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. A multi-cancer early detection (MCED) blood test only flags that a cancer signal may be present somewhere in the body; it cannot confirm a diagnosis or locate the tumor on its own. Every validated MCED test protocol routes a positive result into diagnostic imaging — typically PET-CT, CT, or MRI — plus tissue biopsy where feasible, before a cancer can be confirmed or ruled out."
              }
            },
            {
              "@type": "Question",
              "name": "How much imaging does a positive MCED result actually generate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In GRAIL's PATHFINDER study of the Galleri test, 92% of participants who returned for workup after a positive signal underwent at least one imaging study, 61% had a PET-CT, 39% had a CT, and 21% had an MRI; more than half of those imaged needed more than one scan to reach a diagnosis. In the earlier DETECT-A study of a different MCED test, researchers calculated that roughly 380 blood tests generated one confirmatory scan for every eventual cancer diagnosis."
              }
            },
            {
              "@type": "Question",
              "name": "Why would blood-based cancer screening increase radiology workload instead of reducing it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MCED tests are designed to widen the population being screened for cancer, not to substitute for imaging within that population. Because positive predictive value for most MCED tests still runs well under 100% (38% in PATHFINDER, improving to about 62% in PATHFINDER 2), a meaningful share of the imaging that follows a positive result is spent ruling out cancer in people who don't have it — additional confirmatory CT, PET-CT, and MRI volume that radiology departments must absorb regardless of the eventual diagnosis."
              }
            },
            {
              "@type": "Question",
              "name": "What is the FDA reviewing for multi-cancer early detection tests in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA has scheduled its first-ever advisory committee meeting for an MCED test — a September 23, 2026 review of GRAIL's premarket approval application for the Galleri test, which screens for signals from more than 50 cancer types. GRAIL filed the application on January 29, 2026. Separately, Guardant Health's Shield Multi-Cancer Detection test, covering 8 cancer types, holds FDA Breakthrough Device designation and is being evaluated in the National Cancer Institute's Vanguard study of up to 24,000 participants."
              }
            },
            {
              "@type": "Question",
              "name": "How should radiology departments prepare for MCED-driven imaging volume?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Departments can expect confirmatory CT, PET-CT, and MRI referrals to grow as MCED tests move from research cohorts into routine primary care and insurance-covered screening. Because the added studies arrive unevenly and with variable urgency, absorbing them without extending turnaround time favors AI-assisted reporting workflows that let radiologists review and sign a structured draft rather than dictate every report from a blank page."
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
              Multi-cancer blood tests mean more CT volume,<br />
              <span className="text-white/60">not less</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              As blood-based multi-cancer early detection tests scale toward millions of people screened, the imaging data tells a counter-intuitive story: a positive result doesn't replace a scan. It orders one — and often several.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '92%', label: 'of positives get imaged', sub: 'PATHFINDER (Galleri)' },
            { stat: '61%', label: 'got a confirmatory PET-CT', sub: 'PATHFINDER (Galleri)' },
            { stat: '38%', label: 'positive predictive value', sub: 'PATHFINDER, first cohort' },
            { stat: 'Sep 23, 2026', label: 'first FDA panel on MCED', sub: 'reviewing Galleri' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Guardant's pitch is scale — and scale is the point
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Guardant Health has spent 2026 pushing its Shield blood test for colorectal cancer from a niche option toward a mainstream one. According to <a href="https://www.medtechdive.com/news/how-guardant-aims-to-expand-cancer-screening-with-a-blood-test/828083/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>, the company's VP of clinical development, Sam Asgarian, said Shield is already in the "hundreds of thousands" of people tested, with a stated goal of "getting into the millions of people tested." The pitch to the market is straightforward: roughly 54 million Americans are unscreened or overdue for colorectal cancer screening, and a blood draw is a lower-friction way to reach them than persuading them to schedule a colonoscopy.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That reach is expanding fast on the payer side. In July 2026, UnitedHealth Group — by its own account the largest commercial insurer in the U.S. — began covering Shield for average-risk adults 45 and older, a move Guardant said extends access to roughly 40 million additional people and brings total covered lives with access to the test to about 100 million, according to <a href="https://investors.guardanthealth.com/press-releases/press-releases/2026/UnitedHealth-Group-Now-Covers-Guardant-Healths-Shield-Blood-Test-for-Colorectal-Cancer-Screening/default.aspx" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Guardant's own announcement</a>. Guardant has also said that of patients with a positive Shield result, "over half" go on to complete a full diagnostic colonoscopy.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Guardant isn't stopping at colorectal cancer. Its Shield Multi-Cancer Detection (MCD) test — screening for signals from 8 cancer types from the same blood draw — holds <a href="https://investors.guardanthealth.com/press-releases/press-releases/2025/FDA-Grants-Breakthrough-Device-Designation-to-Guardant-Healths-Shield-Multi-Cancer-Detection-MCD-Test/default.aspx" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA Breakthrough Device designation</a> and demonstrated 75% overall sensitivity with 98.6% specificity across those tumor types in company-reported validation data. It's now one of the technologies being evaluated in the National Cancer Institute's Vanguard study, which enrolled its first patient in July 2025 and plans to enroll <a href="https://www.businesswire.com/news/home/20250715660162/en/First-Patient-Enrolled-in-National-Cancer-Institutes-Vanguard-Study-Evaluating-Guardant-Healths-Shield-Multi-Cancer-Detection-Test" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">up to 24,000 participants</a> over four years.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A "positive" result is not a diagnosis — it's a referral
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This is the part of the MCED story that gets lost in coverage focused on convenience and access: none of these tests diagnose cancer. They detect a molecular signal — circulating tumor DNA, methylation patterns, fragments of RNA or protein — that something may be present, sometimes with a "cancer signal origin" prediction of where in the body to look. Confirming or ruling out an actual tumor still requires imaging, and often tissue.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The most detailed public accounting of what that workup looks like comes from GRAIL's PATHFINDER study of the Galleri test, published via the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11027492/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">National Library of Medicine</a>. Among 6,621 participants with analyzable results, a cancer signal was detected in 1.4% (92 people) — and among the 90 who returned for diagnostic evaluation, 92% (83 of 90) required at least one imaging study: 61% had a PET-CT, 39% had a CT, and 21% had an MRI, with 53% of those imaged needing more than one scan before reaching a diagnosis. Positive predictive value in that first PATHFINDER cohort was 38%, meaning a majority of the imaging triggered was, in retrospect, spent on people who did not have cancer. GRAIL's follow-on PATHFINDER 2 readout improved that figure to a <a href="https://www.prnewswire.com/news-releases/grail-pathfinder-2-results-show-galleri--multi-cancer-early-detection-blood-test-increased-cancer-detection-more-than-seven-fold-when-added-to-uspstf-a-and-b-recommended-screenings-302588036.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">61.6% positive predictive value</a> with 99.6% specificity — better, but still far from a stand-alone diagnostic.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the imaging math looks like across MCED tests
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                No two MCED programs report their imaging follow-up the same way, but every published dataset points to the same structural fact: a positive result converts into a real, often multi-modality diagnostic workup.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">MCED program</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">PPV / specificity</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Imaging workup after a positive</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">DETECT-A (CancerSEEK)</td>
                      <td className="py-3 pr-4">19.4% PPV, 98.9% specificity</td>
                      <td className="py-3">~380 blood tests per confirmatory scan needed to diagnose one cancer; 1.0% of all participants underwent PET-CT for a false-positive signal</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">PATHFINDER (Galleri, cohort 1)</td>
                      <td className="py-3 pr-4">38% PPV, 99.1% specificity</td>
                      <td className="py-3">92% of positives imaged; 61% PET-CT, 39% CT, 21% MRI; 53% needed &gt;1 scan</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">PATHFINDER 2 (Galleri)</td>
                      <td className="py-3 pr-4">61.6% PPV, 99.6% specificity</td>
                      <td className="py-3">Detailed imaging breakdown not yet published</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Shield MCD (Guardant, 8 cancers)</td>
                      <td className="py-3 pr-4">75% sensitivity, 98.6% specificity</td>
                      <td className="py-3">Imaging protocol under evaluation in NCI's Vanguard study (≤24,000 participants)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Even the best-performing figures — PATHFINDER 2's 61.6% PPV — mean roughly four in ten confirmatory workups will end without a cancer diagnosis. The earlier RSNA-published review <a href="https://doi.org/10.1148/radiol.233448" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Multi-Cancer Early Detection Tests: State of the Art and Implications for Radiologists</em></a>, in the journal <em>Radiology</em>, put it directly: many cancers flagged by MCED tests will require imaging confirmation, and radiologists have an essential role in selecting the diagnostic pathway, judging the validity of an ambiguous signal, resolving false positives, and weighing the tradeoffs in clinical policy — work that doesn't show up in a screening test's headline sensitivity number.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a demand-side story, not a substitution story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to read "blood test screens for cancer" as competing with imaging for budget and attention. The data says the opposite: MCED tests are a funnel that feeds imaging, not a bypass around it. Three dynamics compound the effect.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The screened population is growing, not shrinking',
                    desc: 'Guardant\'s own framing is expansion — from hundreds of thousands to "millions" tested, with roughly 100 million covered lives now eligible for reimbursement. Every incremental person screened who returns a positive signal is a new imaging referral that didn\'t exist before.',
                  },
                  {
                    title: 'Imperfect specificity means real scan volume on true negatives',
                    desc: 'With PPV running 38-62% across published MCED cohorts, a large share of confirmatory CT, PET-CT, and MRI studies will be spent ruling out cancer in people who turn out not to have it — capacity that has to be scheduled, protocoled, and reported regardless of the eventual outcome.',
                  },
                  {
                    title: 'A single positive can trigger more than one study',
                    desc: 'PATHFINDER found that 53% of imaged positives needed more than one imaging study to reach resolution. MCED-driven referrals don\'t map cleanly to "one scan per positive" — they add multi-modality workups, often on a timeline where median resolution took 79 days.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this argues against MCED screening — earlier detection of cancers that currently have no screening pathway at all is the entire point, and PATHFINDER's true positives reached diagnostic resolution in a median of 57 days. But it does mean the imaging system downstream of these tests needs to absorb volume it wasn't sized for, on a timeline set by an insurer's coverage decision or an FDA advisory vote rather than a hospital's capital planning cycle. That timeline is closing fast: the FDA's advisory committee is scheduled to review GRAIL's Galleri premarket approval application on September 23, 2026 — the first time the agency has convened a panel on an MCED test — following GRAIL's <a href="https://www.prnewswire.com/news-releases/grail-announces-fda-advisory-committee-meeting-to-review-premarket-approval-application-for-the-galleri-multi-cancer-early-detection-test-302846154.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">January 29, 2026 submission</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Adding scanner capacity is a capital decision that takes years; absorbing an incremental, unevenly-timed stream of confirmatory CT and PET-CT referrals without extending turnaround time is a reporting-throughput problem that shows up immediately. That's the layer AI-assisted CT reporting is built to help with — a structured, comprehensive draft report generated as soon as the images land, with xAID's in-house radiologist reviewing every preliminary before it goes back ready-to-sign, so the reading radiologist's time goes to judgment on the ambiguous cases MCED follow-up tends to produce, not to typing out a normal chest CT for the fortieth time that week.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Does a multi-cancer early detection blood test replace a CT scan?',
                    a: 'No. A multi-cancer early detection (MCED) blood test only flags that a cancer signal may be present somewhere in the body; it cannot confirm a diagnosis or locate the tumor on its own. Every validated MCED test protocol routes a positive result into diagnostic imaging — typically PET-CT, CT, or MRI — plus tissue biopsy where feasible, before a cancer can be confirmed or ruled out.',
                  },
                  {
                    q: 'How much imaging does a positive MCED result actually generate?',
                    a: "In GRAIL's PATHFINDER study of the Galleri test, 92% of participants who returned for workup after a positive signal underwent at least one imaging study, 61% had a PET-CT, 39% had a CT, and 21% had an MRI; more than half of those imaged needed more than one scan to reach a diagnosis. In the earlier DETECT-A study of a different MCED test, researchers calculated that roughly 380 blood tests generated one confirmatory scan for every eventual cancer diagnosis.",
                  },
                  {
                    q: 'Why would blood-based cancer screening increase radiology workload instead of reducing it?',
                    a: "MCED tests are designed to widen the population being screened for cancer, not to substitute for imaging within that population. Because positive predictive value for most MCED tests still runs well under 100% (38% in PATHFINDER, improving to about 62% in PATHFINDER 2), a meaningful share of the imaging that follows a positive result is spent ruling out cancer in people who don't have it — additional confirmatory CT, PET-CT, and MRI volume that radiology departments must absorb regardless of the eventual diagnosis.",
                  },
                  {
                    q: 'What is the FDA reviewing for multi-cancer early detection tests in 2026?',
                    a: "The FDA has scheduled its first-ever advisory committee meeting for an MCED test — a September 23, 2026 review of GRAIL's premarket approval application for the Galleri test, which screens for signals from more than 50 cancer types. GRAIL filed the application on January 29, 2026. Separately, Guardant Health's Shield Multi-Cancer Detection test, covering 8 cancer types, holds FDA Breakthrough Device designation and is being evaluated in the National Cancer Institute's Vanguard study of up to 24,000 participants.",
                  },
                  {
                    q: 'How should radiology departments prepare for MCED-driven imaging volume?',
                    a: 'Departments can expect confirmatory CT, PET-CT, and MRI referrals to grow as MCED tests move from research cohorts into routine primary care and insurance-covered screening. Because the added studies arrive unevenly and with variable urgency, absorbing them without extending turnaround time favors AI-assisted reporting workflows that let radiologists review and sign a structured draft rather than dictate every report from a blank page.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/how-guardant-aims-to-expand-cancer-screening-with-a-blood-test/828083/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a> reporting on Guardant Health's Shield screening expansion; PATHFINDER study data via the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11027492/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">National Library of Medicine</a>; PATHFINDER 2 topline results and FDA advisory committee details via <a href="https://www.prnewswire.com/news-releases/grail-pathfinder-2-results-show-galleri--multi-cancer-early-detection-blood-test-increased-cancer-detection-more-than-seven-fold-when-added-to-uspstf-a-and-b-recommended-screenings-302588036.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">GRAIL/PR Newswire</a> and the <a href="https://www.fda.gov/advisory-committees/advisory-committee-calendar/september-23-2026-molecular-and-clinical-genetics-panel-medical-devices-advisory-committee-meeting" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA advisory committee calendar</a>; DETECT-A study performance figures via <a href="https://doi.org/10.1126/science.abb9601" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Science</a> (Lennon et al., 2020), with the 1.0% false-positive PET-CT figure via a <a href="https://doi.org/10.1158/1940-6207.capr-23-0451" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Cancer Prevention Research (AACR)</a> follow-up study; radiologist-implications review via <a href="https://doi.org/10.1148/radiol.233448" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RSNA's <em>Radiology</em></a>; Guardant/NCI Vanguard and UnitedHealth coverage details via <a href="https://investors.guardanthealth.com/press-releases/press-releases/2025/FDA-Grants-Breakthrough-Device-Designation-to-Guardant-Healths-Shield-Multi-Cancer-Detection-MCD-Test/default.aspx" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Guardant Health Investor Relations</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More confirmatory scans are coming. Your report turnaround shouldn't slip."
          sub="AI-assisted CT reporting absorbs incremental case volume without adding headcount. Try it on 5 free studies."
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
              <Link to="/blog/lung-cancer-screening-ct-criteria/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Screening &amp; Capacity</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Lung Cancer Screening CT Criteria and Imaging Volume</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Labor Market</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiologist Shortage and What AI Can Absorb</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow &amp; Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MultiCancerEarlyDetectionCtVolume;
