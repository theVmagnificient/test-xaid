import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const RadiologicTechnologistLicenseRequirements2026 = () => {
  const post = {
    title: 'Radiologic Technologist Licensure Is Spreading: What PA SB 1334 Means for Imaging Capacity',
    dateIso: '2026-07-06',
    date: 'July 6, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "Pennsylvania's SB 1334 just passed the state Senate 45–5, moving one of the 11 remaining states without technologist licensure toward a mandatory radiologic technologist license. With CT technologist vacancy rates at an all-time high of 19.4%, here's what a tightening acquisition-side labor market means for staffing costs, scan capacity — and why report-side efficiency is becoming the remaining productivity lever.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiologic Technologist Licensure: PA SB 1334 | xAID</title>
        <meta name="description" content="Pennsylvania's SB 1334 would require state licenses for imaging technologists. What licensure means for tech staffing costs, scan capacity, and CT reporting." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiologic Technologist Licensure: PA SB 1334 | xAID" />
        <meta property="og:description" content="Pennsylvania's SB 1334 would require state licenses for imaging technologists. What licensure means for tech staffing costs, scan capacity, and CT reporting." />
        <meta property="og:url" content="https://xaid.ai/blog/radiologic-technologist-license-requirements-2026" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiologic Technologist Licensure: PA SB 1334 | xAID" />
        <meta name="twitter:description" content="Pennsylvania's SB 1334 would require state licenses for imaging technologists. What licensure means for tech staffing costs, scan capacity, and CT reporting." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiologic-technologist-license-requirements-2026" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiologic-technologist-license-requirements-2026",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiologic technologist license, Pennsylvania SB 1334, medical imaging licensure, technologist shortage, CT technologist vacancy, imaging center staffing"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Pennsylvania Senate Bill 1334?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SB 1334 is a Pennsylvania bill that would require state licensure for medical imaging and radiation therapy professionals — covering radiography (x-ray), CT, MRI, nuclear medicine, diagnostic sonography, and radiation therapy. It requires completion of an accredited education program, passing a nationally recognized examination, and continuing education. Sponsored by Sen. Lynda Schlegel Culver (R) and Sen. Nick Pisciottano (D), it passed the Pennsylvania Senate 45–5 in mid-2026 and now moves to the state House."
              }
            },
            {
              "@type": "Question",
              "name": "Which states do not require a radiologic technologist license?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "According to ASRT state tracking, 11 states currently list no radiography license, certificate, or permit requirement: Alabama, Alaska, Colorado, Georgia, Idaho, Michigan, Minnesota, North Carolina, Oklahoma, Pennsylvania, and South Dakota. Roughly 37 states require some form of licensure for radiography, and most employers require ARRT certification even where the state does not mandate a license."
              }
            },
            {
              "@type": "Question",
              "name": "Will technologist licensure make the imaging staffing shortage worse?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the near term, licensure raises the credential floor in a market that is already tight: ASRT's 2025 staffing survey put the CT technologist vacancy rate at an all-time high of 19.4%, with MRI at 17.4%. Facilities in newly regulated states lose the flexibility to staff some roles with non-credentialed operators, which can raise labor costs and lengthen hiring timelines. Supporters argue standardized education and examination improve patient safety and image quality, which can reduce repeat scans over time."
              }
            },
            {
              "@type": "Question",
              "name": "How can imaging centers protect scan capacity as technologist labor tightens?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Acquisition-side labor (technologists) is hard to expand quickly — training pipelines and licensure both take years. The report side is more elastic: AI-drafted CT reports that arrive ready to sign let the same number of radiologists finalize more studies per shift, so a center's throughput is not bottlenecked twice — once at the scanner and again at the reading queue. Keeping report turnaround short protects effective capacity even when technologist hiring is constrained."
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
              Pennsylvania moves to license imaging technologists.<br />
              <span className="text-white/60">The supply side of imaging labor just got tighter</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              SB 1334 passed the Pennsylvania Senate 45–5 and would make one of the 11 remaining states without technologist licensure require a radiologic technologist license. With CT tech vacancy rates already at a record 19.4%, the acquisition side of imaging is running out of slack — which changes where operators should look for productivity.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '45–5', label: 'PA Senate vote on SB 1334', sub: 'now moves to the House' },
                { stat: '11', label: 'States with no radiography license', sub: 'including PA — for now' },
                { stat: '19.4%', label: 'CT technologist vacancy rate', sub: 'all-time high, ASRT 2025' },
                { stat: '15,400', label: 'Projected annual job openings', sub: 'rad & MRI techs, BLS' },
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
                What SB 1334 actually does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Pennsylvania is one of the few states where the person operating a CT scanner needs no state license at all. The state regulates the <em>facilities and equipment</em> through its Department of Environmental Protection — but not the individuals running the machines, as <a href="https://www.auntminnie.com/practice-management/news/15829090/pennsylvania-passes-medical-imaging-licensure-bill" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a> and <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/pennsylvania-may-soon-require-medical-imaging-professionals-obtain-state-licensure" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> report.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Senate Bill 1334, sponsored by Sen. Lynda Schlegel Culver (R-Northumberland) and Sen. Nick Pisciottano (D-Allegheny), would change that. It sets a statewide licensing standard for medical imaging and radiation therapy professionals built on three pillars: completion of an <strong>accredited education program</strong>, passing a <strong>nationally recognized examination</strong>, and ongoing <strong>continuing education</strong>. The bill passed the Pennsylvania Senate <strong>45–5</strong> and now moves to the state House of Representatives.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The covered modalities span essentially the entire imaging suite: radiography (x-ray), CT, MRI, nuclear medicine, diagnostic sonography, and radiation therapy, per the <a href="https://www.clearhq.org/news/pennsylvania-considers-radiologic-technologist-licensure" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Council on Licensure, Enforcement and Regulation</a>. The effort is backed by the American Society of Radiologic Technologists (ASRT), the American Registry of Radiologic Technologists (ARRT), and the Pennsylvania Society of Radiologic Technologists.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is not Pennsylvania's first attempt. A predecessor bill, SB 1281, was introduced in July 2024 and proposed licensing imaging professionals through the State Board of Medicine while exempting dentists, chiropractors, podiatrists, and veterinarians, according to <a href="https://www.auntminnie.com/practice-management/radiologic-technologist/article/15680441/penn-bill-will-change-rules-for-medical-imaging-personnel" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie's earlier coverage</a>. The difference this time is momentum: a 45–5 Senate vote is about as bipartisan as imaging policy gets.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The licensure map: 11 states left without a radiologic technologist license
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                State licensure for imaging personnel is a patchwork, but the patch is shrinking. Roughly <strong>37 states</strong> already require some form of licensure for radiography. Per <a href="https://www.healthjob.org/guide/radiologic-technician-state-licensing-requirements" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ASRT state tracking</a>, only 11 states currently list no radiography license, certificate, or permit requirement: Alabama, Alaska, Colorado, Georgia, Idaho, Michigan, Minnesota, North Carolina, Oklahoma, South Dakota — and Pennsylvania.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two caveats matter for anyone reading this as a hiring manager. First, "no license" rarely means "no standard": most employers require ARRT certification as a de facto credential even where the state doesn't. Second, unlicensed states retain a flexibility valve — the ability to staff certain support roles or limited-scope positions with operators who haven't completed the full credential path. Licensure closes that valve. That is precisely its point (a consistent safety floor), and precisely its cost (a smaller eligible labor pool).
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The labor market this lands in: record technologist vacancies
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                SB 1334 lands in the tightest technologist market on record. ASRT's biennial <a href="https://www.asrt.org/main/news-publications/news/article/2025/07/24/asrt-staffing-and-workplace-survey-shows-vacancy-rate-increases-near-record-highs-aligning-with-overall-health-care-profession-trends" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2025 Radiologic Sciences Staffing and Workplace Survey</a> found the <strong>CT technologist vacancy rate at an all-time high of 19.4%</strong>, up from 17.7% in 2023 — the highest of any discipline surveyed. MRI rose from 16.2% to 17.4%. Radiography eased from its 2023 record of 18.1% to 15.6% — still well above the <a href="https://www.asrt.org/main/news-publications/news/article/2023/05/08/asrt-staffing-survey-shows-increase-in-medical-imaging-vacancy-rates-aligning-with-overall-health-care-profession-trends" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">6.2% reported in 2021</a>.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-[14px] border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-medium text-[#0D0D0D] border-b border-gray-200">Discipline</th>
                      <th className="text-left p-3 font-medium text-[#0D0D0D] border-b border-gray-200">Vacancy rate, 2023</th>
                      <th className="text-left p-3 font-medium text-[#0D0D0D] border-b border-gray-200">Vacancy rate, 2025</th>
                      <th className="text-left p-3 font-medium text-[#0D0D0D] border-b border-gray-200">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-normal">CT</td>
                      <td className="p-3 border-b border-gray-100">17.7%</td>
                      <td className="p-3 border-b border-gray-100">19.4%</td>
                      <td className="p-3 border-b border-gray-100">Rising — all-time high</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-normal">MRI</td>
                      <td className="p-3 border-b border-gray-100">16.2%</td>
                      <td className="p-3 border-b border-gray-100">17.4%</td>
                      <td className="p-3 border-b border-gray-100">Rising</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-100 font-normal">Radiography</td>
                      <td className="p-3 border-b border-gray-100">18.1%</td>
                      <td className="p-3 border-b border-gray-100">15.6%</td>
                      <td className="p-3 border-b border-gray-100">Easing, still elevated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light -mt-6 mb-8">
                Source: ASRT Radiologic Sciences Staffing and Workplace Surveys, <a href="https://www.asrt.org/main/news-publications/news/article/2023/05/08/asrt-staffing-survey-shows-increase-in-medical-imaging-vacancy-rates-aligning-with-overall-health-care-profession-trends" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2023</a> and <a href="https://www.asrt.org/main/news-publications/news/article/2025/07/24/asrt-staffing-and-workplace-survey-shows-vacancy-rate-increases-near-record-highs-aligning-with-overall-health-care-profession-trends" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2025</a>.
              </p>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Demand keeps pulling in the other direction. The U.S. Bureau of Labor Statistics projects employment of radiologic and MRI technologists to <a href="https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">grow 5% from 2024 to 2034</a> — faster than the average occupation — with about <strong>15,400 openings per year</strong>, many of them replacing technologists who leave the field or retire.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Put licensure on top of that and the near-term arithmetic for an imaging center in a newly regulated state looks like this:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'A higher credential floor shrinks the local applicant pool',
                    desc: 'Every candidate now needs accredited education, a national exam, and continuing education. That is good for consistency and patient safety — and it removes the option of filling gaps with lower-credentialed operators while a search drags on.',
                  },
                  {
                    title: 'Wages follow scarcity',
                    desc: 'Licensed markets compete for a fixed pool of credentialed technologists. When one in five CT tech positions nationally is already vacant, adding a licensure requirement in a large state adds demand-side pressure to salaries, sign-on bonuses, and travel-tech rates.',
                  },
                  {
                    title: 'Scan capacity becomes the binding constraint',
                    desc: 'A scanner without a credentialed operator produces zero studies. Unlike reading capacity, acquisition capacity cannot be shifted across state lines overnight — the technologist has to be physically at the machine, licensed in that state.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this is an argument against SB 1334. Supporters argue that standardized training means fewer repeat exposures and more consistent image quality, and 37 states have already decided the trade is worth it. It is an argument for being clear-eyed about where the slack in an imaging operation actually is — because after licensure, it isn't on the acquisition side.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                When the scanner side tightens, the report side is the lever left
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                An imaging center's throughput is a chain: schedule → acquire → read → report → deliver. Licensure, training pipelines, and record vacancy rates all constrain the <em>acquire</em> link, and none of them can be fixed quickly — an accredited radiography program takes years, and a licensure regime by design prevents shortcuts. Meanwhile the <em>read and report</em> link faces its own squeeze: the radiologist side has a well-documented shortage of its own (covered in our <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">radiologist shortage analysis</Link>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The asymmetry is that the report side is far more elastic. Reading doesn't require a person standing at the machine, and report drafting can now be automated. Foundation-model AI that produces a structured, comprehensive CT report draft changes the economics of the link that <em>can</em> move: instead of a radiologist dictating each report from scratch, the AI drafts it, xAID's in-house radiologist reviews every preliminary, and it arrives <strong>ready to sign</strong> — your radiologist signs. Same physicians, more finalized studies per shift.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For an operator in Pennsylvania — or any of the other 10 unlicensed states watching this bill — the practical takeaway is a portfolio view of productivity. The acquisition side is heading toward higher credential floors and higher labor costs, and that's largely outside a single center's control. The reporting side is the lever still in your hands: shorter <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT report turnaround</Link> keeps scanners feeding a queue that never backs up, so every hard-won technologist hour converts into a delivered, signed report rather than a study waiting in a worklist.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is Pennsylvania Senate Bill 1334?',
                    a: 'SB 1334 is a Pennsylvania bill that would require state licensure for medical imaging and radiation therapy professionals — covering radiography (x-ray), CT, MRI, nuclear medicine, diagnostic sonography, and radiation therapy. It requires completion of an accredited education program, passing a nationally recognized examination, and continuing education. Sponsored by Sen. Lynda Schlegel Culver (R) and Sen. Nick Pisciottano (D), it passed the Pennsylvania Senate 45–5 in mid-2026 and now moves to the state House.',
                  },
                  {
                    q: 'Which states do not require a radiologic technologist license?',
                    a: 'According to ASRT state tracking, 11 states currently list no radiography license, certificate, or permit requirement: Alabama, Alaska, Colorado, Georgia, Idaho, Michigan, Minnesota, North Carolina, Oklahoma, Pennsylvania, and South Dakota. Roughly 37 states require some form of licensure for radiography, and most employers require ARRT certification even where the state does not mandate a license.',
                  },
                  {
                    q: 'Will technologist licensure make the imaging staffing shortage worse?',
                    a: "In the near term, licensure raises the credential floor in a market that is already tight: ASRT's 2025 staffing survey put the CT technologist vacancy rate at an all-time high of 19.4%, with MRI at 17.4%. Facilities in newly regulated states lose the flexibility to staff some roles with non-credentialed operators, which can raise labor costs and lengthen hiring timelines. Supporters argue standardized education and examination improve patient safety and image quality, which can reduce repeat scans over time.",
                  },
                  {
                    q: 'How can imaging centers protect scan capacity as technologist labor tightens?',
                    a: "Acquisition-side labor (technologists) is hard to expand quickly — training pipelines and licensure both take years. The report side is more elastic: AI-drafted CT reports that arrive ready to sign let the same number of radiologists finalize more studies per shift, so a center's throughput is not bottlenecked twice — once at the scanner and again at the reading queue. Keeping report turnaround short protects effective capacity even when technologist hiring is constrained.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Pennsylvania SB 1334 coverage by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/pennsylvania-may-soon-require-medical-imaging-professionals-obtain-state-licensure" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.auntminnie.com/practice-management/news/15829090/pennsylvania-passes-medical-imaging-licensure-bill" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; state licensure landscape per <a href="https://www.clearhq.org/news/pennsylvania-considers-radiologic-technologist-licensure" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CLEAR</a> and <a href="https://www.healthjob.org/guide/radiologic-technician-state-licensing-requirements" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ASRT state tracking (via HealthJob)</a>; vacancy rates from ASRT staffing surveys (<a href="https://www.asrt.org/main/news-publications/news/article/2023/05/08/asrt-staffing-survey-shows-increase-in-medical-imaging-vacancy-rates-aligning-with-overall-health-care-profession-trends" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2023</a>, <a href="https://www.asrt.org/main/news-publications/news/article/2025/07/24/asrt-staffing-and-workplace-survey-shows-vacancy-rate-increases-near-record-highs-aligning-with-overall-health-care-profession-trends" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2025</a>); employment projections from the <a href="https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">U.S. Bureau of Labor Statistics</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Technologists acquire the scans. Who drafts the reports?"
          sub="When scanner-side labor is scarce, report-side speed decides your real capacity. xAID delivers comprehensive, ready-to-sign CT report drafts — reviewed by our in-house radiologist, signed by yours. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiologist Shortage in 2026 — and What AI CT Reporting Changes</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Cost Analysis</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Radiology Coverage Costs in 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologicTechnologistLicenseRequirements2026;
