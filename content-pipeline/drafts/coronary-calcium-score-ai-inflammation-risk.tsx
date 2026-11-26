import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CoronaryCalciumScoreAiInflammationRisk = () => {
  const post = {
    title: "A Coronary Calcium Score of Zero Isn't the Full Story. An AI Inflammation Score Found What It Missed",
    dateIso: '2026-11-13',
    date: 'November 13, 2026',
    category: 'Clinical Evidence',
    readingTime: 8,
    description: "A 19,110-patient JAMA Cardiology study found an AI inflammation score catches cardiovascular risk a coronary calcium score of zero or near-zero misses entirely.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Inflammation Score Beats a Zero Calcium Score | xAID</title>
        <meta name="description" content="A 19,110-patient JAMA Cardiology study found an AI inflammation score catches cardiovascular risk a coronary calcium score of zero or near-zero misses entirely." />
        <link rel="canonical" href="https://xaid.ai/blog/coronary-calcium-score-ai-inflammation-risk/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Inflammation Score Beats a Zero Calcium Score | xAID" />
        <meta property="og:description" content="A 19,110-patient JAMA Cardiology study found an AI inflammation score catches cardiovascular risk a coronary calcium score of zero or near-zero misses entirely." />
        <meta property="og:url" content="https://xaid.ai/blog/coronary-calcium-score-ai-inflammation-risk/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Inflammation Score Beats a Zero Calcium Score | xAID" />
        <meta name="twitter:description" content="A 19,110-patient JAMA Cardiology study found an AI inflammation score catches cardiovascular risk a coronary calcium score of zero or near-zero misses entirely." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/coronary-calcium-score-ai-inflammation-risk" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/coronary-calcium-score-ai-inflammation-risk",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "coronary calcium score, CAC score, AI inflammation score, cardiovascular risk prediction, coronary CT, opportunistic CT findings"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can a coronary calcium score of zero still mean real cardiovascular risk?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A coronary calcium score (CAC) only detects calcified, generally stable plaque. In a 19,110-patient validation cohort published in JAMA Cardiology, 42% of cardiovascular deaths and 51% of major cardiovascular events occurred in people with a CAC score under 100 — the range a zero or low score is conventionally read as reassuring. Inflamed, non-calcified plaque, which is more prone to rupture, doesn't show up on calcium scoring at all."
              }
            },
            {
              "@type": "Question",
              "name": "What is the AI-derived coronary inflammation score and how was it validated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It's a deep learning-derived fat attenuation index (FAI) score that measures inflammation-related changes in the fat surrounding the coronary arteries, computed from either contrast coronary CT angiography or the same non-contrast CT already used for routine calcium scoring. The ORFAN consortium, led by researchers at the University of Oxford, developed it on 6,818 patients and validated it on an independent cohort of 19,110 patients followed for a median of 6.7 years, publishing the results in JAMA Cardiology in November 2026."
              }
            },
            {
              "@type": "Question",
              "name": "How much does the AI inflammation score improve on calcium scoring alone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Adding the AI inflammation score to the calcium score raised the area under the curve (AUC) for predicting cardiovascular death from 0.76 to 0.81 using the contrast-based score, and to 0.80 using the non-contrast score. Among patients with a calcium score of zero to 99 who went on to die of cardiovascular causes, about 45% had an elevated inflammation score that calcium scoring alone did not flag."
              }
            },
            {
              "@type": "Question",
              "name": "Why doesn't a quantified AI risk score automatically change what a patient's doctor does?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A separate real-world study of the same inflammation-scoring technology found it reclassified cardiovascular risk in 58% of patients versus a standard calculator, but changed actual clinical management — starting or intensifying a statin, for example — in only about a third of cases. A number an algorithm produces only changes care if it's captured, worded, and routed into the report clearly enough for the referring physician to act on it. That gap, not the underlying detection, is usually the bottleneck."
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
                Clinical Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A coronary calcium score of zero<br />
              <span className="text-white/60">isn't the full story</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 19,110-patient study in JAMA Cardiology found that an AI-derived inflammation score catches cardiovascular risk in patients a coronary calcium score clears as low-risk — including some who later die of cardiovascular causes. The harder part isn't producing that score. It's getting it into a report a referring physician will actually act on.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '0.76 → 0.81', label: 'AUC with AI score added', sub: 'vs. calcium score alone' },
            { stat: '45%', label: 'CV deaths, CAC 0–99', sub: 'missed by calcium alone' },
            { stat: '42%', label: 'of CV deaths overall', sub: 'had CAC under 100' },
            { stat: '19,110', label: 'patients validated', sub: '6.7-year follow-up' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why a zero coronary calcium score isn't always reassuring
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The coronary artery calcium (CAC) score is one of the most widely used tools in cardiovascular risk screening, and a score of zero is routinely treated as a green light. But CAC only measures calcified plaque, which tends to be stable. It has no way to see inflamed, non-calcified plaque — the kind more likely to rupture and cause a heart attack.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                As <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-derived-inflammation-score-improves-cardiovascular-risk-prediction-beyond-cac" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>, study author Charalambos Antoniades, MD, PhD, of the University of Oxford, put the problem directly: a "zero CAC score is often deemed reassuring and leads to deferral of statin therapy in those at low or borderline risk." His team's reasoning: "cardiovascular events frequently arise from the rupture of inflamed, noncalcified plaques, which are not visualized on noncontrast cardiac CT, whereas calcified plaques are generally considered to be stable. Consequently, absent or low CAC does not preclude clinically important residual cardiovascular risk."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The numbers back that up. In the study's 19,110-patient validation cohort, <strong>42%</strong> of all cardiovascular deaths and <strong>51%</strong> of major adverse cardiovascular events (MACE) occurred in patients with a CAC score under 100 — the range where a low or zero result is conventionally read as low risk.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the AI inflammation score added
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The study — <a href="https://doi.org/10.1001/jamacardio.2026.5006" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">published in JAMA Cardiology</a> on November 11, 2026, by Kenneth Chan and colleagues for the ORFAN Consortium — developed a deep learning algorithm that measures a fat attenuation index (FAI) score: a quantified read of inflammation-related changes in the fat surrounding the coronary arteries. The algorithm was trained on 6,818 patients and independently validated on a separate cohort of 19,110 patients scanned between 2010 and 2021, with a median follow-up of 6.7 years and 536 cardiovascular deaths recorded.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Two versions of the score were tested. One is derived from contrast coronary CT angiography (CCTA), the exam typically ordered when plaque or stenosis is already suspected. The other — the more consequential one — is derived from the same <em>non-contrast</em> CT scan already acquired for routine calcium scoring, meaning it requires no additional contrast, radiation, or scan time.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Both versions improved on calcium scoring alone. Adding the CCTA-derived score to the CAC score raised the area under the curve (AUC) for predicting cardiovascular death from <strong>0.76 to 0.81</strong>; adding the non-contrast score raised it to <strong>0.80</strong> — nearly matching the contrast-based version without the extra exam. Among patients with a calcium score of zero to 99 who went on to die of cardiovascular causes, about <strong>45%</strong> had an elevated inflammation score that the calcium score alone never flagged.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The risk gradient was steep. Among patients with a calcium score of zero, those with a high inflammation score had a cardiovascular mortality rate of roughly 4.0 per 1,000 person-years, versus about 1.4 per 1,000 person-years for those with a low score — and a MACE rate of 13.3 versus 5.9 per 1,000 person-years. A calcium score of zero does not distinguish between these two groups. The inflammation score does.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Another entry in a pattern xAID has been tracking
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the third time in recent months that a quantifiable AI output on a routine CT scan has turned out to carry real clinical signal beyond what the scan was ordered to answer — alongside a <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">vertebral bone-density measurement pulled from a routine chest CT</Link> that predicts cognitive decline, and an <Link to="/blog/coronary-ct-angiography-ai-incidental-finding/" className="text-xaid-blue-strong underline underline-offset-2">AI-detected coronary inflammation signal on angiography</Link> that standard risk calculators missed entirely. The common thread: the data is already sitting in the pixels of a scan a patient already had. Detecting it is, increasingly, the easy part.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Calcium score alone vs. calcium score plus an AI inflammation score
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Calcium score alone</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Calcium score + AI inflammation score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">What it sees</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Calcified, generally stable plaque</td>
                      <td className="py-3 text-[#444] font-light">Calcified plaque plus inflammation in non-calcified tissue</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Extra scan required?</td>
                      <td className="py-3 pr-4 text-[#444] font-light">No</td>
                      <td className="py-3 text-[#444] font-light">No — non-contrast version reuses the same CAC scan</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">AUC for cardiovascular death</td>
                      <td className="py-3 pr-4 text-[#444] font-light">0.76</td>
                      <td className="py-3 text-[#444] font-light">0.80–0.81</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">CAC 0–99 patients who later die of CV causes</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Not flagged by the score that cleared them</td>
                      <td className="py-3 text-[#444] font-light">~45% flagged as high or very-high risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The real bottleneck isn't detection
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to read a study like this as proof the hard problem is solved: the algorithm finds the signal, case closed. A separate, earlier real-world study of the same inflammation-scoring approach, <a href="https://doi.org/10.1093/ehjimp/qyaf031" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">published in European Heart Journal – Imaging Methods and Practice</a>, shows why that read is incomplete. In 164 patients undergoing coronary CT angiography, adding the inflammation-derived risk score reclassified cardiovascular risk in 58% of patients compared to a standard risk calculator — but it changed actual clinical management, such as starting or intensifying a statin, in only about a third of cases.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That gap is the real story. Generating a quantified score is not the same as a referring clinician acting on it. The score has to be captured accurately, worded in a way that states what it means and what, if anything, it should trigger, and routed into the report so it doesn't sit as an orphaned number next to a negative calcium finding. A patient whose calcium score reads zero but whose inflammation score reads high needs that distinction stated plainly — not buried, not glossed over as "no significant findings."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the structural problem xAID's structured CT reporting is built around: a scan routinely generates more clinically relevant data than the single question it was ordered to answer, and every one of those outputs needs to reach the chart in language a referring physician can act on — not as a stray number with no context attached. Every report is reviewed in-house before it's delivered ready-to-sign, so a quantified finding like a coronary inflammation score arrives framed, not just flagged.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can a coronary calcium score of zero still mean real cardiovascular risk?',
                    a: "Yes. A coronary calcium score (CAC) only detects calcified, generally stable plaque. In a 19,110-patient validation cohort published in JAMA Cardiology, 42% of cardiovascular deaths and 51% of major cardiovascular events occurred in people with a CAC score under 100 — the range a zero or low score is conventionally read as reassuring. Inflamed, non-calcified plaque, which is more prone to rupture, doesn't show up on calcium scoring at all.",
                  },
                  {
                    q: 'What is the AI-derived coronary inflammation score and how was it validated?',
                    a: "It's a deep learning-derived fat attenuation index (FAI) score that measures inflammation-related changes in the fat surrounding the coronary arteries, computed from either contrast coronary CT angiography or the same non-contrast CT already used for routine calcium scoring. The ORFAN consortium, led by researchers at the University of Oxford, developed it on 6,818 patients and validated it on an independent cohort of 19,110 patients followed for a median of 6.7 years, publishing the results in JAMA Cardiology in November 2026.",
                  },
                  {
                    q: 'How much does the AI inflammation score improve on calcium scoring alone?',
                    a: 'Adding the AI inflammation score to the calcium score raised the area under the curve (AUC) for predicting cardiovascular death from 0.76 to 0.81 using the contrast-based score, and to 0.80 using the non-contrast score. Among patients with a calcium score of zero to 99 who went on to die of cardiovascular causes, about 45% had an elevated inflammation score that calcium scoring alone did not flag.',
                  },
                  {
                    q: "Why doesn't a quantified AI risk score automatically change what a patient's doctor does?",
                    a: "A separate real-world study of the same inflammation-scoring technology found it reclassified cardiovascular risk in 58% of patients versus a standard calculator, but changed actual clinical management — starting or intensifying a statin, for example — in only about a third of cases. A number an algorithm produces only changes care if it's captured, worded, and routed into the report clearly enough for the referring physician to act on it. That gap, not the underlying detection, is usually the bottleneck.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Chan K, et al., "Assessment of Coronary Inflammatory Risk From Noncontrast Cardiac Computed Tomography," <em>JAMA Cardiology</em> (2026), <a href="https://doi.org/10.1001/jamacardio.2026.5006" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1001/jamacardio.2026.5006</a>, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-derived-inflammation-score-improves-cardiovascular-risk-prediction-beyond-cac" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Real-world management-change data from Henry JA, et al., "Coronary inflammation and AI-Risk scores from cardiovascular computed tomography," <em>European Heart Journal – Imaging Methods and Practice</em> (2025), <a href="https://doi.org/10.1093/ehjimp/qyaf031" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1093/ehjimp/qyaf031</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A quantified finding is only useful if the report says so."
          sub="xAID's structured whole-volume reports carry AI-derived findings into clear, actionable language, reviewed in-house before your radiologist signs. Try it on 5 free studies."
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
              <Link to="/blog/coronary-ct-angiography-ai-incidental-finding/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Coronary CT Angiography AI Just Found a Problem Nobody Ordered the Scan to Find</div>
              </Link>
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT Bone Density Predicts Brain Aging</div>
              </Link>
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why the Words Radiologists Use Can Delay Care</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CoronaryCalciumScoreAiInflammationRisk;
