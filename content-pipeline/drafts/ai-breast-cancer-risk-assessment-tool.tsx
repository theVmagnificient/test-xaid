import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AiBreastCancerRiskAssessmentTool = () => {
  const post = {
    title: "AI Breast Cancer Risk Assessment Goes Direct-to-Consumer. Here's What Changes for Imaging Centers",
    dateIso: '2026-10-06',
    date: 'October 6, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "Clairity's FDA-authorized breast cancer risk AI is now sold direct-to-consumer via Everlywell. What it means for imaging centers' referral volume and liability.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Breast Cancer Risk Tool Goes Direct-to-Consumer | xAID</title>
        <meta name="description" content="Clairity's FDA-authorized breast cancer risk AI is now sold direct-to-consumer via Everlywell. What it means for imaging centers' referral volume and liability." />
        <link rel="canonical" href="https://xaid.ai/blog/ai-breast-cancer-risk-assessment-tool/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Breast Cancer Risk Tool Goes Direct-to-Consumer | xAID" />
        <meta property="og:description" content="Clairity's FDA-authorized breast cancer risk AI is now sold direct-to-consumer via Everlywell. What it means for imaging centers' referral volume and liability." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-breast-cancer-risk-assessment-tool/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Breast Cancer Risk Tool Goes Direct-to-Consumer | xAID" />
        <meta name="twitter:description" content="Clairity's FDA-authorized breast cancer risk AI is now sold direct-to-consumer via Everlywell. What it means for imaging centers' referral volume and liability." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-breast-cancer-risk-assessment-tool" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-breast-cancer-risk-assessment-tool",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "ai breast cancer risk assessment tool, Clairity Breast, Everlywell AI, direct-to-consumer AI radiology, breast cancer risk prediction AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Clairity Breast and how does it work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Clairity Breast is an FDA-authorized AI platform that analyzes a single routine 2D screening mammogram to estimate a woman's five-year risk of developing breast cancer. It received FDA De Novo authorization in June 2025 — the first AI tool cleared for this use — and was validated on more than 77,000 mammograms across five U.S. screening centers. It sorts patients into average, intermediate, or high five-year risk and does not detect existing cancer; it predicts future risk from tissue patterns in an otherwise normal-looking mammogram."
              }
            },
            {
              "@type": "Question",
              "name": "Can patients order an AI breast cancer risk assessment without a doctor's referral?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As of October 1, 2026, yes. Everlywell sells Clairity Breast nationwide for $249 (not covered by insurance) to any woman with a qualifying screening mammogram from the prior 12 months. The patient orders directly through Everlywell's consumer platform; a licensed provider affiliated with Everlywell — not the patient's own physician or the radiologist who read the original mammogram — handles the order and releases the result. Previously, the tool was available only through two health systems, Beth Israel Deaconess Medical Center and Invision Sally Jobe Imaging Center, where it was ordered inside an existing clinical relationship."
              }
            },
            {
              "@type": "Question",
              "name": "Do clinical guidelines recognize AI-based mammogram risk assessment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The NCCN's 2026 breast cancer screening and diagnosis guidelines (version 1.2026) name Clairity Breast specifically and recommend AI-based mammogram risk assessment starting at age 35, using a five-year risk threshold of at least 1.7% to flag patients for supplemental imaging and risk-reduction conversations with a provider."
              }
            },
            {
              "@type": "Question",
              "name": "What does direct-to-consumer AI risk scoring mean for imaging centers and radiology groups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It creates referral and follow-up imaging demand — supplemental MRI, additional screening, risk-reduction consults — that imaging centers and radiology groups did not generate and may have no advance notice of, since the ordering and reviewing clinician sits inside the consumer platform rather than the patient's usual care team. It also raises liability questions: the result reinterprets a mammogram the imaging center already read for standard screening, under a different company's AI and chart, for a different clinical question. Practices should expect inbound volume from these results and have a plan for triaging it alongside their existing capacity."
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
              AI breast cancer risk assessment goes direct-to-consumer<br />
              <span className="text-white/60">Here's what changes for imaging centers</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              An FDA-authorized AI tool that scores five-year breast cancer risk from a mammogram is now sold straight to patients through Everlywell — no radiologist or ordering clinician required at the point of access. That's a market-structure shift, not just a product launch.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$249', label: 'Self-pay price via Everlywell', sub: 'not covered by insurance' },
            { stat: '77,000+', label: 'Mammograms in FDA validation set', sub: 'across 5 U.S. screening centers' },
            { stat: '16%', label: 'Of women in their 40s flagged high-risk', sub: 'in a 30,000+ mammogram study' },
            { stat: 'Oct 1, 2026', label: 'Nationwide consumer launch date', sub: 'via Everlywell' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What Clairity Breast actually does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                <a href="https://clairity.com/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Clairity</a> Breast is an AI platform that analyzes a single, routine 2D screening mammogram and estimates a woman's risk of developing breast cancer over the next five years. In June 2025 it became the first AI tool to receive <a href="https://www.pharmacytimes.com/view/fda-grants-de-novo-authorization-to-5-year-breast-cancer-risk-prediction-device" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA De Novo authorization</a> for this use. It does not detect existing cancer — it looks for subtle tissue patterns in an otherwise normal-appearing mammogram that correlate with cancer developing later, and was validated on more than <strong>77,000 mammograms</strong> across five geographically diverse U.S. screening centers using five-year outcome data.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The output sorts patients into three tiers: average risk (five-year risk below 1.7%), intermediate risk (1.7–2.9%), and high risk (3.0% or above). In a separate analysis of more than 30,000 mammograms covered by the <a href="https://www.bcrf.org/blog/clairity-breast-ai-artificial-intelligence-mammogram-approved/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Breast Cancer Research Foundation</a>, 37% of women in their 40s scored intermediate risk and 16% scored high risk — risk levels that matched or exceeded those typically seen in older women, a population that standard screening guidance does not otherwise flag for extra attention.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The tool also has formal guideline recognition: the NCCN's 2026 breast cancer screening and diagnosis guidelines (version 1.2026) <a href="https://www.onclive.com/view/clairity-breast-is-added-to-nccn-guidelines-for-breast-cancer-screening-and-diagnosis" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">name Clairity Breast specifically</a>, recommending AI-based mammogram risk assessment starting at age 35 and using a five-year risk threshold of at least 1.7% to identify patients who should discuss supplemental imaging or risk-reduction options with a provider.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The distribution shift: Everlywell takes it to consumers directly
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Until October 2026, Clairity Breast reached patients the way most clinical AI does: ordered inside an existing care relationship, at two health-system sites, Beth Israel Deaconess Medical Center in Massachusetts and Invision Sally Jobe Imaging Center in Colorado. That changed when consumer health company <a href="https://www.everlywell.com/products/clairity-breast-cancer-risk-assessment/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Everlywell</a> began selling the assessment nationwide for <strong>$249</strong>, self-pay, not covered by insurance, to any woman with a qualifying screening mammogram from the prior 12 months.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The ordering mechanics matter here. A patient requests the assessment through Everlywell's site; a licensed provider affiliated with Everlywell — not the patient's own physician and not the radiologist who originally read the mammogram — reviews and releases the order, and Everlywell retrieves the mammogram image from the imaging center that produced it. As Clairity founder Dr. Connie Lehman put it in the companies' launch announcement reported by <a href="https://finance.yahoo.com/healthcare/articles/everlywell-brings-clairity-fda-authorized-100000734.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Yahoo Finance</a>, "the information we need to understand a woman's breast cancer risk has been in her mammogram all along — we just haven't been able to interpret it until Clairity Breast." Everlywell CEO Julia Cheek framed the move as access: "women deserve clear answers about their health, and access to the most advanced tools in health care, not years from now, but today."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That framing is accurate on access. It also means the point of clinical interpretation has moved outside the imaging center and outside the patient's existing physician relationship entirely — a structural change, not just a new sales channel for an already-authorized device.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a market-structure problem for imaging centers, not a consent problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A separate, recent conversation in radiology has focused on whether patients should be told when AI reads their scan inside standard care. This is a different story: the AI isn't assisting a radiologist's read at all at the point of access. It's a consumer product layered on top of an image the patient already has, sold and interpreted entirely outside the imaging center's walls and outside the ordering physician's workflow.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two practical consequences follow for imaging centers and radiology groups:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Unplanned referral and follow-up volume',
                    desc: "Every intermediate or high-risk result is designed to send the patient back to \"talk to your provider\" about supplemental MRI, additional screening, or risk-reduction options. That provider is often the same health system or imaging center that produced the original mammogram — now facing inbound demand it didn't generate, wasn't notified was coming, and has no lead time to schedule around.",
                  },
                  {
                    title: 'A liability question with no settled answer yet',
                    desc: "The result reinterprets a mammogram the imaging center already read and signed off on for standard BI-RADS screening — now scored by a different company's AI, under a different chart, for a different clinical question (future risk, not current findings). If a high-risk flag is missed downstream, or a low-risk score turns out wrong, which record and which clinician's workflow it lands in is not yet a settled question.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Neither consequence is hypothetical. The NCCN now gives this category of tool formal guideline standing starting at age 35 — a population standard screening otherwise mostly leaves alone — which means the volume of patients who can plausibly generate a high-risk result, and then show up asking for supplemental imaging, is set to grow well beyond the two health systems that originally hosted the device.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Traditional risk assessment vs. the direct-to-consumer pathway
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Step</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Inside standard care</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Everlywell direct-to-consumer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Who orders the assessment', "Patient's own physician or the imaging center", 'The patient, through Everlywell'],
                      ['Who reviews and releases the result', 'Ordering clinician, inside the existing chart', 'A licensed provider affiliated with Everlywell'],
                      ['Where the mammogram comes from', 'Already on file at the ordering site', 'Retrieved by Everlywell from the imaging center'],
                      ['Who the imaging center hears from first', 'No one — it ordered the test', "The patient, after she's already been scored"],
                      ['Cost', 'Billed through the visit/insurance', '$249 self-pay, not insurance-covered'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#666] font-light">{row[1]}</td>
                        <td className="py-3 text-[#666] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID doesn't score breast cancer risk — it reports CT studies. But the operational problem this story exposes is the same one on either side of imaging: AI that generates referral and follow-up volume is only useful to a practice if that volume can actually be read and turned around, not just scored. As direct-to-consumer risk tools push more supplemental-imaging demand into radiology groups without warning, the chokepoint isn't generating more risk scores — it's capacity to read what they produce. That's the problem xAID is built for on the CT side: AI drafts a structured, comprehensive report, xAID's in-house radiologist reviews every preliminary, and it reaches the group ready-to-sign — so a volume surge doesn't require a 1:1 increase in radiologist hours to absorb it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is Clairity Breast and how does it work?',
                    a: 'Clairity Breast is an FDA-authorized AI platform that analyzes a single routine 2D screening mammogram to estimate a woman\'s five-year risk of developing breast cancer. It received FDA De Novo authorization in June 2025 — the first AI tool cleared for this use — and was validated on more than 77,000 mammograms across five U.S. screening centers. It sorts patients into average, intermediate, or high five-year risk and does not detect existing cancer; it predicts future risk from tissue patterns in an otherwise normal-looking mammogram.',
                  },
                  {
                    q: "Can patients order an AI breast cancer risk assessment without a doctor's referral?",
                    a: "As of October 1, 2026, yes. Everlywell sells Clairity Breast nationwide for $249 (not covered by insurance) to any woman with a qualifying screening mammogram from the prior 12 months. The patient orders directly through Everlywell's consumer platform; a licensed provider affiliated with Everlywell — not the patient's own physician or the radiologist who read the original mammogram — handles the order and releases the result. Previously, the tool was available only through two health systems, Beth Israel Deaconess Medical Center and Invision Sally Jobe Imaging Center, where it was ordered inside an existing clinical relationship.",
                  },
                  {
                    q: 'Do clinical guidelines recognize AI-based mammogram risk assessment?',
                    a: "Yes. The NCCN's 2026 breast cancer screening and diagnosis guidelines (version 1.2026) name Clairity Breast specifically and recommend AI-based mammogram risk assessment starting at age 35, using a five-year risk threshold of at least 1.7% to flag patients for supplemental imaging and risk-reduction conversations with a provider.",
                  },
                  {
                    q: 'What does direct-to-consumer AI risk scoring mean for imaging centers and radiology groups?',
                    a: "It creates referral and follow-up imaging demand — supplemental MRI, additional screening, risk-reduction consults — that imaging centers and radiology groups did not generate and may have no advance notice of, since the ordering and reviewing clinician sits inside the consumer platform rather than the patient's usual care team. It also raises liability questions: the result reinterprets a mammogram the imaging center already read for standard screening, under a different company's AI and chart, for a different clinical question. Practices should expect inbound volume from these results and have a plan for triaging it alongside their existing capacity.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/womens-imaging/news/15836407/clairity-expands-access-to-ai-breast-cancer-risk-tool-via-everlywell" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; Everlywell/Clairity launch announcement reported by <a href="https://finance.yahoo.com/healthcare/articles/everlywell-brings-clairity-fda-authorized-100000734.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Yahoo Finance</a> and <a href="https://pharmaphorum.com/news/everlywell-rolls-out-clairity-ai-breast-cancer-us" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">pharmaphorum</a>; product and pricing details from the <a href="https://www.everlywell.com/products/clairity-breast-cancer-risk-assessment/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Everlywell product page</a>; FDA De Novo authorization reported by <a href="https://www.pharmacytimes.com/view/fda-grants-de-novo-authorization-to-5-year-breast-cancer-risk-prediction-device" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Pharmacy Times</a>; validation and women-in-their-40s risk-tier figures from the <a href="https://www.bcrf.org/blog/clairity-breast-ai-artificial-intelligence-mammogram-approved/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Breast Cancer Research Foundation</a>; NCCN guideline inclusion reported by <a href="https://www.onclive.com/view/clairity-breast-is-added-to-nccn-guidelines-for-breast-cancer-screening-and-diagnosis" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">OncLive</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More referral volume shouldn't mean more backlog"
          sub="xAID drafts complete, structured CT reports with a radiologist in the loop — so your group can absorb a surge in demand without a 1:1 increase in reading hours. Try it on 5 free studies."
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
              <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Patients Be Told When AI Reads Their Scan?</div>
              </Link>
              <Link to="/blog/radiology-malpractice-ai-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Risk &amp; Liability</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Anatomy of a $7M Missed-Cancer Verdict</div>
              </Link>
              <Link to="/blog/radiology-staffing-payer-contract-leverage/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Practice Economics</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage and Payer Contract Leverage</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiBreastCancerRiskAssessmentTool;
