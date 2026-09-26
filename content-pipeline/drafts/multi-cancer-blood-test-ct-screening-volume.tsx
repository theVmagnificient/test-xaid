import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MulticancerBloodTestCtScreeningVolume = () => {
  const post = {
    title: 'A Multi-Cancer Blood Test Just Cleared an FDA Panel. What Happens to CT Screening?',
    dateIso: '2026-09-26',
    date: 'September 26, 2026',
    category: 'Screening & Capacity',
    readingTime: 8,
    description: "An FDA advisory panel backed Grail's Galleri multi-cancer blood test in a 7-2 vote. It's positioned as an add-on to scans, not a replacement — but the math on false positives and low screening uptake suggests it adds imaging referrals before it ever subtracts them.",
  };

  const slug = 'multi-cancer-blood-test-ct-screening-volume';

  return (
    <>
      <Helmet defer={false}>
        <title>Multi-Cancer Early Detection Blood Test vs. CT | xAID</title>
        <meta name="description" content="Grail's Galleri multi-cancer early detection blood test won FDA advisory backing. Here's what it would mean for CT-based screening and follow-up imaging volume." />
        <link rel="canonical" href={`https://xaid.ai/blog/${slug}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Multi-Cancer Early Detection Blood Test vs. CT | xAID" />
        <meta property="og:description" content="Grail's Galleri multi-cancer early detection blood test won FDA advisory backing. Here's what it would mean for CT-based screening and follow-up imaging volume." />
        <meta property="og:url" content="https://xaid.ai/blog/multi-cancer-blood-test-ct-screening-volume" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multi-Cancer Early Detection Blood Test vs. CT | xAID" />
        <meta name="twitter:description" content="Grail's Galleri multi-cancer early detection blood test won FDA advisory backing. Here's what it would mean for CT-based screening and follow-up imaging volume." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/multi-cancer-blood-test-ct-screening-volume" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/multi-cancer-blood-test-ct-screening-volume",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "multi-cancer early detection blood test, MCED, Galleri FDA, CT screening volume, liquid biopsy vs imaging"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA advisory panel decide about Grail's Galleri multi-cancer blood test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On September 23, 2026, the FDA's Molecular and Clinical Genetics Panel voted 7-2 (with one abstention) that the benefits of Galleri, a multi-cancer early detection (MCED) blood test, outweigh its risks for the proposed screening indication. The panel was unanimous that the test is safe but split 6-4 on whether it is effective. The FDA is not required to follow advisory panel votes but usually does."
              }
            },
            {
              "@type": "Question",
              "name": "Does a multi-cancer blood test replace CT scans or other imaging-based cancer screening?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The proposed FDA indication positions Galleri as a screening test to be used in addition to, not instead of, guideline-recommended screening for breast, cervical, colorectal, and lung cancers. A positive 'cancer signal detected' result also requires a diagnostic workup, which commonly includes imaging such as CT or PET-CT, to confirm or rule out cancer."
              }
            },
            {
              "@type": "Question",
              "name": "Will approval of multi-cancer blood tests reduce CT-based cancer screening or follow-up imaging volume?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not in the near term, and possibly the opposite. In Grail's PATHFINDER 2 study, about 0.8% of roughly 35,900 participants received a cancer-signal-detected result, each requiring diagnostic imaging or other workup; the positive predictive value was 60.3%, meaning close to four in ten of those imaging-triggered workups did not find cancer. Because current CT-based screening (for lung cancer, only about 18.7% of eligible U.S. adults were up to date in 2024) already reaches a minority of the eligible population, a blood test that flags additional at-risk patients is more likely to add imaging referrals than divert them, at least until adoption scales and protocols mature."
              }
            },
            {
              "@type": "Question",
              "name": "When could Medicare start covering multi-cancer early detection blood tests?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Nancy Gardner Sewell Medicare Multi-Cancer Early Detection Screening Coverage Act, signed into law February 3, 2026 as part of the Consolidated Appropriations Act, 2026, creates a CMS coverage pathway for FDA-approved MCED tests beginning in 2028. The law explicitly states MCED coverage will not change Medicare's existing coverage of breast, cervical, colorectal, lung, or prostate cancer screening."
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
                Screening &amp; Capacity
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A multi-cancer blood test just cleared an FDA panel.<br />
              <span className="text-white/60">What happens to CT screening?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              An FDA advisory panel backed Grail's Galleri test as an add-on to existing scans, not a replacement for them. The near-term math on false positives and today's low screening uptake suggests multi-cancer blood tests add imaging referrals before they ever subtract them.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '7-2', label: 'FDA panel benefit-risk vote', sub: 'for Galleri, 1 abstention' },
            { stat: '0.8%', label: 'Cancer signal detected rate', sub: 'in PATHFINDER 2 (~35,900 people)' },
            { stat: '60.3%', label: 'Positive predictive value', sub: 'of a "signal detected" result' },
            { stat: '18.7%', label: 'Eligible US adults up to date', sub: 'on lung CT screening, 2024' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA panel actually voted on
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 23, 2026, the FDA's Molecular and Clinical Genetics Panel reviewed Grail's Galleri test — a blood draw that screens for methylation patterns in cell-free DNA to flag a possible cancer signal and predict where in the body it originated. According to <a href="https://www.medtechdive.com/news/grail-multicancer-detection-test-wins-fda-advisers-backing/831264/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>, the panel was unanimous that the test is safe, split <strong>6-4</strong> on whether it is effective, and voted <strong>7-2</strong> (with one abstention) that its benefits outweigh its risks for the proposed indication — screening for multiple cancer types <em>in addition to</em>, not in place of, guideline-recommended screening for breast, cervical, colorectal, and lung cancers.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The FDA is not bound by advisory panel votes but typically follows them, and Grail has a premarket approval application pending. That procedural detail matters for imaging: the proposed indication is explicitly additive to existing screening pathways, not a substitute for the CT scans that anchor lung cancer screening or the cross-sectional imaging used to work up an abnormal finding.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The evidence behind the vote
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two studies anchored the panel's review. <strong>PATHFINDER 2</strong>, a prospective study of roughly 35,900 participants aged 50 and older, reported a cancer-signal-detected rate of <strong>0.8%</strong> (287 people), of whom 173 were ultimately diagnosed with cancer — a positive predictive value of <strong>60.3%</strong> — alongside specificity of <strong>99.64%</strong> (a false-positive rate of about 0.36%), according to results presented at ASCO and reported by <a href="https://news.ohsu.edu/2026/09/22/pathfinder-2-findings-advance-multi-cancer-early-detection-blood-testing" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">OHSU News</a>. Grail says the test detected roughly four to seven times more cancers than standard-of-care screening alone.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The randomized <strong>NHS-Galleri</strong> trial — 142,250 participants aged 50 to 77, screened annually for three years in England — told a more mixed story. It missed its combined primary endpoint of reducing Stage III/IV cancer diagnoses in aggregate, largely because of a higher-than-expected rate of Stage III disease. But per <a href="https://grail.com/press-releases/grail-reports-full-results-from-nhs-galleri-trial-demonstrating-substantial-reduction-in-stage-iv-cancer-diagnoses-at-2026-asco-annual-meeting/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Grail's reported results</a>, Stage IV diagnoses fell 22% and 26% in the second and third annual screening rounds respectively (14% across all three rounds combined), Stage I-II diagnoses of 12 prespecified cancers rose 16%, and cancers caught via emergency-room presentation fell 25%. A test can move the stage at which cancer is found without yet clearing the trial's own bar for reducing late-stage disease overall — which is exactly why the panel's effectiveness vote was close.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The "blood test vs. scan" framing misses the actual mechanism
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to read MCED tests as a liquid-biopsy competitor to imaging — cheaper, less invasive, no radiation, no scanner time. But that framing skips a step: a "cancer signal detected" result is not a diagnosis. Grail's own patient materials note that a positive result requires a diagnostic workup — commonly imaging such as CT or PET-CT, sometimes alongside endoscopy or biopsy — before a cancer can be confirmed. The test's cancer-signal-origin prediction, which points clinicians toward likely tissue of origin, is accurate about 93% of the time in confirmed cancers, per the <a href="https://www.galleri.com/hcp/galleri-test-performance" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Galleri clinician performance page</a> — useful for narrowing where to look, but still a referral into imaging, not away from it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Run the numbers on PATHFINDER 2 forward: at a 0.8% signal-detected rate and a 60.3% positive predictive value, for every 1,000 people tested, roughly 8 receive a positive signal and go into diagnostic workup — and roughly 3 of those 8 will not have cancer once that workup, including imaging, is complete. At population scale, that is new imaging demand, not redirected imaging demand — because the counterfactual isn't "these patients would have gotten a CT anyway." Lung cancer CT screening is the clearest illustration: only <strong>18.7%</strong> of the roughly 12.8 million eligible U.S. adults were up to date on screening in 2024, according to an American Cancer Society analysis reported by <a href="https://www.auntminnie.com/clinical-news/ct/article/15772301/acs-only-1-in-5-eligible-us-adults-underwent-lcs-in-2024" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. A blood test that reaches people outside that screening funnel and flags a possible lung signal routes them to a chest CT they were never going to get through the existing program — additive volume, not substitution.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this could bite into imaging demand — later, not now
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this means the imaging-referral effect stays additive forever. Two structural changes are already in motion that could eventually reshape referral patterns:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Medicare coverage is coming, on a delay',
                    desc: 'The Nancy Gardner Sewell Medicare Multi-Cancer Early Detection Screening Coverage Act, signed into law February 3, 2026, creates a CMS coverage pathway for FDA-approved MCED tests beginning in 2028 — contingent on the FDA actually approving one. That timeline means any shift in imaging referral volume tied to broad MCED coverage is a 2028-and-beyond planning question, not an immediate one.',
                  },
                  {
                    title: 'Screening becomes signal-triggered, not just protocol-triggered',
                    desc: 'Today, most screening imaging is scheduled by age and risk-factor protocol (annual low-dose CT for smokers, mammography by age). If MCED testing becomes routine, a share of imaging referrals will instead be triggered by an ambiguous blood signal that needs to be localized — a workup that is more urgent, less predictable in scheduling, and dependent on faster reporting turnaround than a scheduled annual screen.',
                  },
                  {
                    title: 'The law is explicit that this is additive, not a substitute',
                    desc: "The legislation states MCED coverage will not change Medicare's existing coverage of breast, cervical, colorectal, lung, or prostate cancer screening. That's a policy choice, not just a clinical one — it locks in imaging-based screening as the coverage floor even as blood-based screening expands on top of it.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Blood test vs. CT screening: what changes and what doesn't
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">MCED blood test (Galleri)</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">CT-based screening (e.g., lung)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">What it detects</td>
                      <td className="py-3 pr-4">A possible cancer signal across 50+ cancer types, with a predicted tissue of origin</td>
                      <td className="py-3">Structural findings (nodules, masses) in one organ or region</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Confirms a diagnosis?</td>
                      <td className="py-3 pr-4">No — a positive result requires diagnostic workup, typically including imaging</td>
                      <td className="py-3">No — abnormal findings still require follow-up (biopsy, further imaging)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Current eligible-population uptake</td>
                      <td className="py-3 pr-4">Not yet FDA-approved; no established uptake</td>
                      <td className="py-3">18.7% of eligible adults up to date on lung CT screening (2024)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Reported false-positive rate</td>
                      <td className="py-3 pr-4">~0.36% (99.64% specificity), PPV 60.3%</td>
                      <td className="py-3">Varies by protocol; nodule follow-up is a separate, well-documented cost driver</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Medicare coverage status</td>
                      <td className="py-3 pr-4">Pathway created by law; earliest coverage 2028, pending FDA approval</td>
                      <td className="py-3">Established (USPSTF Grade B; Medicare-covered)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits into an additive-volume world
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                If MCED adoption plays out the way the evidence above suggests — a new stream of unscheduled, signal-triggered imaging referrals layered on top of existing screening and diagnostic volume — the operational pressure lands on report turnaround, not scanner capacity. A cancer-signal-origin prediction narrows where to look, but the CT or PET-CT that follows still needs a full, structured read, often on a more urgent timeline than a routine annual screen. That's the throughput problem AI-assisted CT reporting is built for: a comprehensive draft report generated as soon as images are acquired, with xAID's in-house radiologist reviewing every preliminary and the case delivered ready-to-sign for the reading radiologist — compressing the time between an ambiguous blood signal and a resolved diagnostic answer, without adding headcount for every incremental referral.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What did the FDA advisory panel decide about Grail's Galleri multi-cancer blood test?",
                    a: "On September 23, 2026, the FDA's Molecular and Clinical Genetics Panel voted 7-2 (with one abstention) that the benefits of Galleri, a multi-cancer early detection (MCED) blood test, outweigh its risks for the proposed screening indication. The panel was unanimous that the test is safe but split 6-4 on whether it is effective. The FDA is not required to follow advisory panel votes but usually does.",
                  },
                  {
                    q: 'Does a multi-cancer blood test replace CT scans or other imaging-based cancer screening?',
                    a: "No. The proposed FDA indication positions Galleri as a screening test to be used in addition to, not instead of, guideline-recommended screening for breast, cervical, colorectal, and lung cancers. A positive 'cancer signal detected' result also requires a diagnostic workup, which commonly includes imaging such as CT or PET-CT, to confirm or rule out cancer.",
                  },
                  {
                    q: 'Will approval of multi-cancer blood tests reduce CT-based cancer screening or follow-up imaging volume?',
                    a: "Not in the near term, and possibly the opposite. In Grail's PATHFINDER 2 study, about 0.8% of roughly 35,900 participants received a cancer-signal-detected result, each requiring diagnostic imaging or other workup; the positive predictive value was 60.3%, meaning close to four in ten of those imaging-triggered workups did not find cancer. Because current CT-based screening (for lung cancer, only about 18.7% of eligible U.S. adults were up to date in 2024) already reaches a minority of the eligible population, a blood test that flags additional at-risk patients is more likely to add imaging referrals than divert them, at least until adoption scales and protocols mature.",
                  },
                  {
                    q: 'When could Medicare start covering multi-cancer early detection blood tests?',
                    a: 'The Nancy Gardner Sewell Medicare Multi-Cancer Early Detection Screening Coverage Act, signed into law February 3, 2026 as part of the Consolidated Appropriations Act, 2026, creates a CMS coverage pathway for FDA-approved MCED tests beginning in 2028. The law explicitly states MCED coverage will not change Medicare\'s existing coverage of breast, cervical, colorectal, lung, or prostate cancer screening.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/grail-multicancer-detection-test-wins-fda-advisers-backing/831264/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a> on the September 23, 2026 FDA advisory panel vote; PATHFINDER 2 results via <a href="https://news.ohsu.edu/2026/09/22/pathfinder-2-findings-advance-multi-cancer-early-detection-blood-testing" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">OHSU News</a>; NHS-Galleri trial results via <a href="https://grail.com/press-releases/grail-reports-full-results-from-nhs-galleri-trial-demonstrating-substantial-reduction-in-stage-iv-cancer-diagnoses-at-2026-asco-annual-meeting/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Grail</a>; lung cancer screening uptake via <a href="https://www.auntminnie.com/clinical-news/ct/article/15772301/acs-only-1-in-5-eligible-us-adults-underwent-lcs-in-2024" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; test performance figures via the <a href="https://www.galleri.com/hcp/galleri-test-performance" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Galleri clinician site</a>; Medicare coverage legislation via <a href="https://www.walb.com/2026/03/17/new-law-expands-medicare-coverage-multi-cancer-screening-tests/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">WALB News</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More imaging referrals are coming. Reporting throughput has to keep up."
          sub="Whatever routes a patient to a scan — a nodule, a symptom, or now a blood signal — the report still has to get done fast and right. See how AI-assisted CT reporting keeps turnaround flat as volume climbs."
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
              <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Lung Nodules and AI-Assisted Malignancy Risk</div>
              </Link>
              <Link to="/blog/medicare-national-coverage-determination-reform/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Medicare National Coverage Determination Reform</div>
              </Link>
              <Link to="/blog/radiology-ai-clinical-outcomes-evidence-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The AI Radiology Clinical Outcomes Evidence Gap</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MulticancerBloodTestCtScreeningVolume;
