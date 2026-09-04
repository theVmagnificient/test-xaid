import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AiBreastCancerScreeningWithoutRadiologistReview = () => {
  const post = {
    title: "AI Breast Cancer Screening Without a Radiologist: What the World's First CE Approval Actually Changes",
    dateIso: '2026-09-03',
    date: 'September 3, 2026',
    category: 'AI Safety & Oversight',
    readingTime: 8,
    description: "A CE-marked AI can now report normal mammograms without a radiologist. Here's why the US regulatory path still keeps a human in the loop.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Breast Cancer Screening Without a Radiologist | xAID</title>
        <meta name="description" content="A CE-marked AI can now report normal mammograms without a radiologist. Here's why the US regulatory path still keeps a human in the loop." />
        <link rel="canonical" href="https://xaid.ai/blog/ai-breast-cancer-screening-without-radiologist-review/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Breast Cancer Screening Without a Radiologist | xAID" />
        <meta property="og:description" content="A CE-marked AI can now report normal mammograms without a radiologist. Here's why the US regulatory path still keeps a human in the loop." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Breast Cancer Screening Without a Radiologist | xAID" />
        <meta name="twitter:description" content="A CE-marked AI can now report normal mammograms without a radiologist. Here's why the US regulatory path still keeps a human in the loop." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-breast-cancer-screening-without-radiologist-review" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-breast-cancer-screening-without-radiologist-review",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "AI breast cancer screening, autonomous AI radiology, AI without radiologist review, FDA AI radiology regulation, human in the loop AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is autonomous AI triage in breast cancer screening?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Autonomous triage means an AI system can classify a mammogram as clearly normal and report it without any radiologist reading the image. Every exam the AI does not classify as clearly normal is still read by a radiologist. In September 2026, a Berlin-based company, Vara, became the first to receive a CE mark under the EU's Class IIb medical device rules for this specific use, for organized population screening programs in Europe."
              }
            },
            {
              "@type": "Question",
              "name": "Has the FDA approved any AI device to read mammograms without a radiologist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. As of September 2026, no AI system has FDA authorization to autonomously report a mammogram, or any radiology exam, without a radiologist reviewing it. The FDA's one precedent for an unreviewed autonomous AI diagnostic output is LumineticsCore (formerly IDx-DR), cleared in 2018 for diabetic retinopathy screening in primary care — a single binary refer/don't-refer decision in ophthalmology, not radiology."
              }
            },
            {
              "@type": "Question",
              "name": "Why is the US regulatory approach to AI in radiology more cautious than the EU's?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA has repeatedly signaled that it will not lower premarket review requirements for radiology AI, even for incremental extensions of previously cleared products. In April 2026, the agency formally denied a citizen petition asking it to exempt certain follow-on radiology AI devices from full premarket review, saying a manufacturer's prior clearance does not by itself prove a new product is safe. The EU's CE marking process, by contrast, allows a device to reach the market under a notified body's certification, with post-market monitoring built in afterward rather than as a precondition."
              }
            },
            {
              "@type": "Question",
              "name": "What evidence supports autonomous triage in mammography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The main evidence base is the PRAIM study, published in Nature Medicine in January 2025, which followed 463,094 women screened at 12 German sites. AI-supported double reading found 6.7 cancers per 1,000 women screened versus 5.7 per 1,000 in the standard double-reading control group, a 17.6% relative increase, without raising the recall rate. That study evaluated AI as a second reader alongside radiologists, not autonomous, unreviewed reporting — the autonomous-triage certification extends that evidence with additional retrospective analysis and a real-time monitoring system rather than a second prospective trial of the autonomous mode itself."
              }
            },
            {
              "@type": "Question",
              "name": "Where does xAID fit into the autonomous-AI debate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID's foundation-model reports are never delivered as a finished, unreviewed output. Every preliminary is reviewed in-house by a European radiologist before it reaches the client ready-to-sign, and the client's reading radiologist signs the final report. xAID does not position toward autonomous, unreviewed reporting — the value is speed and completeness in the draft, with a radiologist accountable for every report that goes out."
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
                AI Safety &amp; Oversight
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A mammogram AI just got approved to skip the radiologist.<br />
              <span className="text-white/60">Here's why the US isn't following — yet.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A Berlin-based AI company has won the world's first CE mark for autonomous breast-screening triage — reporting some mammograms as normal with no radiologist reading them at all. It's a real regulatory milestone in Europe. It's also a useful test case for why the US market has settled on a different model: AI drafts, a radiologist reviews.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '463,094', label: 'Women in the AI evidence study', sub: 'PRAIM, 12 German sites' },
            { stat: '+17.6%', label: 'More cancers detected with AI', sub: '6.7 vs 5.7 per 1,000 screened' },
            { stat: '1st', label: 'CE mark for autonomous triage', sub: 'no radiologist review required' },
            { stat: '0', label: 'FDA-cleared radiology AI devices', sub: 'authorized for unreviewed reporting' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually got approved
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In September 2026, Berlin-based Vara (MX Healthcare GmbH) announced it had received a CE mark under the EU Medical Device Regulation, classified Class IIb, for <a href="https://www.medicaldevice-network.com/news/vara-ce-mark-ai-autonomous-breast-cancer-screening-tool/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">autonomous triage in organized breast cancer screening</a> — the first breast-imaging AI certified anywhere to report a screening mammogram as normal without a radiologist reading it. Every exam the system does <em>not</em> classify as clearly normal still goes to a radiologist, as it always has.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The approval builds on <a href="https://www.01net.it/vara-receives-world-first-ce-certification-for-autonomous-ai-in-breast-cancer-screening/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">a real-time monitoring system the company calls ATMON</a> (Autonomous-Triage Monitoring), which sets and tracks a performance operating point for each screening site, watches for changes in mammography hardware and day-to-day system health, and automatically reverts a site back to full radiologist reading if any of those signals drift outside defined limits. It's a live guardrail, not a one-time certification — the kind of continuous oversight the EU AI Act will eventually require of high-risk medical AI more broadly.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The company's evidence base leans heavily on <a href="https://doi.org/10.1038/s41591-024-03408-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">PRAIM</a>, a prospective, real-world study published in <em>Nature Medicine</em> in January 2025 covering 463,094 women aged 50–69 screened at 12 sites in Germany between July 2021 and February 2023. Radiologists using AI-supported double reading found <strong>6.7 cancers per 1,000</strong> women screened, versus <strong>5.7 per 1,000</strong> in the standard double-reading control arm — a <strong>17.6%</strong> relative increase in cancer detection, without a corresponding rise in recalls. It's worth being precise about what that study actually tested: AI as a second reader working alongside radiologists on every exam, not an AI reporting alone. The autonomous-triage certification extends that evidence with additional retrospective analysis of AI-only performance on the subset of exams it would classify as normal, plus the ATMON monitoring layer — not a second prospective trial of the fully autonomous mode in practice.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "world's first" is the interesting part
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Autonomous, unreviewed AI diagnostic output isn't unprecedented in medicine — it's just been rare, and it's never happened in radiology. The one comparable precedent anywhere in US-regulated healthcare is <a href="https://www.digitaldiagnostics.com/fda-permits-marketing-of-lumineticscore-formerly-known-as-idx-dr-for-automated-detection-of-diabetic-retinopathy-in-primary-care/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">LumineticsCore</a> (formerly IDx-DR), which the FDA cleared through the De Novo pathway in April 2018 as the first AI system authorized to make an assessment without a clinician also interpreting the image. It screens retinal photographs for diabetic retinopathy in primary care settings and outputs one of two things: refer to an eye specialist, or don't. In its <a href="https://doi.org/10.1038/s41746-018-0040-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">pivotal trial</a> it hit 87% sensitivity and 90% specificity for detecting more-than-mild disease. That's a single binary decision on a single, narrow modality — not a full diagnostic report, and not radiology.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Nothing comparable exists for reading medical images in the US. Radiology dominates the FDA's AI-enabled device list — more than 1,100 of the roughly 1,500 AI algorithms the agency has cleared since it started tracking them are radiology tools — and every one of them is cleared as an aid to a physician, not a replacement for one. No US-cleared radiology AI device is authorized to generate a final, unreviewed report.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two regulatory philosophies, one product category
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                The CE mark and the FDA clearance pathway aren't just different paperwork — they encode different starting assumptions about who is accountable when an AI system is wrong.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">&nbsp;</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">EU CE marking (Vara, autonomous triage)</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">US FDA clearance (radiology AI generally)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Default assumption', 'AI can carry a final decision on a defined subset of cases, under live monitoring', 'A physician reviews every AI output before it becomes a final report'],
                      ['Unreviewed autonomous output in imaging', 'Authorized for organized screening (normal-only triage)', 'Not authorized for any radiology device as of Sept. 2026'],
                      ['Post-approval oversight', 'Continuous automated monitoring (ATMON) with auto-revert to human reading', 'Postmarket surveillance plus a case-by-case predetermined change control plan'],
                      ['Recent regulatory posture', 'Extending autonomy under a Class IIb device pathway', 'Denied a 2026 petition to exempt follow-on radiology AI from full premarket review'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#0D0D0D] font-medium">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#666] font-light">{row[1]}</td>
                        <td className="py-3 text-[#666] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That last row isn't a hypothetical. In April 2026, the FDA <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/fda-denies-petition-exempt-certain-radiology-ai-devices-pre-market-review" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">formally denied a citizen petition</a> that asked it to let certain radiology AI vendors skip full premarket review for new devices, provided a comparable product from another company had already been cleared once. The agency's reasoning: a manufacturer's prior clearance doesn't demonstrate that a new device, on a different modality or indication, is safe. It's a narrower question than autonomous triage — the petition was about premarket review for physician-facing tools, not about removing the physician — but it shows the same instinct at work: the FDA is not currently inclined to loosen the review bar for radiology AI, even incrementally.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The accountability question the approval doesn't answer
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Every autonomous-AI approval eventually runs into the same question: when the AI is wrong and no radiologist looked at the image, who is liable? The CE marking process addresses this operationally — ATMON's job is to catch performance drift before it produces a run of missed cancers, and a site reverts to full human reading if it does. That's a real, well-engineered safety layer. It's a different thing from a legal or professional-accountability answer, and screening programs, insurers, and radiology bodies in Europe are still working through what "the AI was wrong on a normal-triaged case" means for referring physicians, screening operators, and the AI vendor itself.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The FDA's caution reads less like technological skepticism — the agency has cleared over a thousand radiology AI algorithms — and more like a considered position that liability in medical imaging should sit with a licensed physician until autonomous systems have a much longer track record and a clearer accountability framework. LumineticsCore took that step in ophthalmology for one narrow binary decision; radiology, with its wider range of pathology and higher stakes per miss, hasn't gotten a green light for anything comparable.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's foundation-model reporting is built for the model the US market — and the FDA's posture — actually rewards: AI drafts a structured, comprehensive report, xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign, with the reading radiologist's signature as the final step. That's not a hedge against autonomous AI; it's a bet that speed and completeness in the draft, paired with a radiologist who stays accountable for every report, is what a market shaped by the FDA's human-in-the-loop expectations is going to keep asking for.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is autonomous AI triage in breast cancer screening?',
                    a: 'Autonomous triage means an AI system can classify a mammogram as clearly normal and report it without any radiologist reading the image. Every exam the AI does not classify as clearly normal is still read by a radiologist. In September 2026, a Berlin-based company, Vara, became the first to receive a CE mark under the EU\'s Class IIb medical device rules for this specific use, for organized population screening programs in Europe.',
                  },
                  {
                    q: 'Has the FDA approved any AI device to read mammograms without a radiologist?',
                    a: "No. As of September 2026, no AI system has FDA authorization to autonomously report a mammogram, or any radiology exam, without a radiologist reviewing it. The FDA's one precedent for an unreviewed autonomous AI diagnostic output is LumineticsCore (formerly IDx-DR), cleared in 2018 for diabetic retinopathy screening in primary care — a single binary refer/don't-refer decision in ophthalmology, not radiology.",
                  },
                  {
                    q: "Why is the US regulatory approach to AI in radiology more cautious than the EU's?",
                    a: "The FDA has repeatedly signaled that it will not lower premarket review requirements for radiology AI, even for incremental extensions of previously cleared products. In April 2026, the agency formally denied a citizen petition asking it to exempt certain follow-on radiology AI devices from full premarket review, saying a manufacturer's prior clearance does not by itself prove a new product is safe. The EU's CE marking process, by contrast, allows a device to reach the market under a notified body's certification, with post-market monitoring built in afterward rather than as a precondition.",
                  },
                  {
                    q: 'What evidence supports autonomous triage in mammography?',
                    a: 'The main evidence base is the PRAIM study, published in Nature Medicine in January 2025, which followed 463,094 women screened at 12 German sites. AI-supported double reading found 6.7 cancers per 1,000 women screened versus 5.7 per 1,000 in the standard double-reading control group, a 17.6% relative increase, without raising the recall rate. That study evaluated AI as a second reader alongside radiologists, not autonomous, unreviewed reporting — the autonomous-triage certification extends that evidence with additional retrospective analysis and a real-time monitoring system rather than a second prospective trial of the autonomous mode itself.',
                  },
                  {
                    q: 'Where does xAID fit into the autonomous-AI debate?',
                    a: "xAID's foundation-model reports are never delivered as a finished, unreviewed output. Every preliminary is reviewed in-house by a European radiologist before it reaches the client ready-to-sign, and the client's reading radiologist signs the final report. xAID does not position toward autonomous, unreviewed reporting — the value is speed and completeness in the draft, with a radiologist accountable for every report that goes out.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-company-scores-worlds-1st-approval-breast-triage-tool-skips-radiologist-review" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.medicaldevice-network.com/news/vara-ce-mark-ai-autonomous-breast-cancer-screening-tool/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medical Device Network</a>, and <a href="https://www.01net.it/vara-receives-world-first-ce-certification-for-autonomous-ai-in-breast-cancer-screening/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">01net</a> on the CE certification; PRAIM study published in <em>Nature Medicine</em>, DOI <a href="https://doi.org/10.1038/s41591-024-03408-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1038/s41591-024-03408-6</a>; LumineticsCore/IDx-DR clearance details from <a href="https://www.digitaldiagnostics.com/fda-permits-marketing-of-lumineticscore-formerly-known-as-idx-dr-for-automated-detection-of-diabetic-retinopathy-in-primary-care/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Digital Diagnostics</a>, pivotal-trial results published in <em>npj Digital Medicine</em>, DOI <a href="https://doi.org/10.1038/s41746-018-0040-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1038/s41746-018-0040-6</a>; FDA petition denial reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/fda-denies-petition-exempt-certain-radiology-ai-devices-pre-market-review" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.statnews.com/2026/02/23/harrisonai-fda-petition-exempt-ai-devices-premarket-review/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">STAT</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI drafts. A radiologist reviews. Every report."
          sub="That's the model the FDA's own posture on radiology AI keeps favoring — and it's how xAID works. Try it on 5 free studies and see the radiologist-reviewed, ready-to-sign reports."
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
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
              <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Patients Be Told When AI Reads Their Scan?</div>
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

export default AiBreastCancerScreeningWithoutRadiologistReview;
