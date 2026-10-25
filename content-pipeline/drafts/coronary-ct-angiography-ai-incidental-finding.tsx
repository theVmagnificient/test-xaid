import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CoronaryCtAngiographyAiIncidentalFinding = () => {
  const post = {
    title: "Coronary CT Angiography AI Just Found a Problem Nobody Ordered the Scan to Find",
    dateIso: '2026-10-25',
    date: 'October 25, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A coronary CT angiography AI study found elevated inflammation in 42.9% of asymptomatic adults, raising a new incidental-finding reporting question.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Coronary CT Angiography AI and the Incidental Finding | xAID</title>
        <meta name="description" content="A coronary CT angiography AI study found elevated inflammation in 42.9% of asymptomatic adults, raising a new incidental-finding reporting question." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Coronary CT Angiography AI and the Incidental Finding | xAID" />
        <meta property="og:description" content="A coronary CT angiography AI study found elevated inflammation in 42.9% of asymptomatic adults, raising a new incidental-finding reporting question." />
        <meta property="og:url" content="https://xaid.ai/blog/coronary-ct-angiography-ai-incidental-finding" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coronary CT Angiography AI and the Incidental Finding | xAID" />
        <meta name="twitter:description" content="A coronary CT angiography AI study found elevated inflammation in 42.9% of asymptomatic adults, raising a new incidental-finding reporting question." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/coronary-ct-angiography-ai-incidental-finding" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/coronary-ct-angiography-ai-incidental-finding",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "coronary ct angiography ai, coronary inflammation CT, incidental findings CT AI, opportunistic CT screening, AI radiology reporting workflow"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the coronary CT angiography AI study find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An AI analysis of coronary CT angiography (CCTA) exams from asymptomatic, low-risk adults found elevated coronary inflammation in 42.9% of participants, with 17.9% showing very high inflammation in at least one major coronary artery. About 47% of participants with no detectable coronary plaque still had elevated perivascular inflammation. The results were posted as a preprint on medRxiv and have not yet been peer-reviewed."
              }
            },
            {
              "@type": "Question",
              "name": "Did standard risk tests catch the same patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Cholesterol markers, hemoglobin A1c, high-sensitivity C-reactive protein, and the AHA PREVENT cardiovascular risk calculator showed no correlation with whether a patient had coronary inflammation on the CT scan. Patients who would have been cleared by a standard workup still showed the AI-detected signal."
              }
            },
            {
              "@type": "Question",
              "name": "Why is an AI-detected coronary inflammation score considered an incidental or opportunistic finding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A coronary CT angiogram is ordered to answer a specific question — typically whether there is plaque or a narrowed artery. AI software that derives an inflammation score from the same scan, by measuring fat attenuation around the coronary arteries, answers a second question nobody explicitly ordered. That makes it an opportunistic finding: clinically real, but outside the original indication, the same category as a bone-density measurement pulled from a routine chest CT or a vertebral fracture noted on an abdominal scan."
              }
            },
            {
              "@type": "Question",
              "name": "How should a reporting workflow handle an AI-surfaced finding outside the original order?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It needs a human in the loop before the finding reaches a chart. A radiologist has to decide whether the finding belongs in the primary impression or a clearly labeled addendum, whether the report language gives the ordering clinician something actionable, and whether a preliminary, not-yet-peer-reviewed algorithm output should be treated as a confirmed clinical result. That review step is what keeps an opportunistic AI signal from being mistaken for a clinical verdict."
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
              Coronary CT angiography AI just found a problem<br />
              <span className="text-white/60">nobody ordered the scan to find</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new AI read of coronary CT angiography exams flagged elevated coronary inflammation in more than 4 in 10 asymptomatic, low-risk adults — including nearly half of those with zero visible plaque. The finding is real. It's also not what the scan was ordered to answer, and that's the part reporting workflow has to catch up with.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '42.9%', label: 'Had elevated coronary inflammation', sub: 'asymptomatic, low-risk adults' },
            { stat: '17.9%', label: 'Very high inflammation', sub: 'in at least one major artery' },
            { stat: '~47%', label: 'Elevated inflammation, zero plaque', sub: 'nothing visible on the same scan' },
            { stat: '0 of 4', label: 'Standard risk tools agreed', sub: 'cholesterol, A1c, hs-CRP, risk calculator' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study actually found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The study, covered by <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15838207/biograph-highlights-cardiac-ai-ct-study" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>, comes from Biograph, a preventive-health clinic that built AI-based coronary inflammation analysis into its elective coronary CT angiography (CCTA) program for members undergoing proactive cardiovascular risk screening — not people being scanned for chest pain or known heart disease. The AI software analyzes the fat surrounding the coronary arteries on the same CT images already used to check for plaque, and quantifies inflammation-related changes as a separate score.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Across the cohort, <strong>42.9%</strong> showed elevated coronary inflammation, and <strong>17.9%</strong> had very high inflammation in at least one major coronary artery. Most striking: about <strong>47%</strong> of participants with no detectable coronary plaque at all — a clean-looking scan by conventional read — still showed elevated perivascular inflammation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The result was posted as a preprint on medRxiv and has not yet been peer-reviewed, so it should be read as preliminary. It also wasn't a result the standard workup would have predicted: cholesterol markers, hemoglobin A1c, high-sensitivity C-reactive protein, and the AHA PREVENT cardiovascular risk calculator showed no correlation with which patients had coronary inflammation. The AI inflammation score — built on the underlying fat-attenuation-index technique behind the FDA-authorized <a href="https://www.auntminnie.com/clinical-news/ct/news/15831154/caristo-diagnostics-secures-fda-coronary-inflammation-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">coronary inflammation software</a> used in the study — surfaced a signal none of the conventional tools caught.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is an "opportunistic finding" problem, not just a research result
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A coronary CT angiogram is ordered to answer one specific question: is there plaque, and how narrow are the arteries? That's the indication a referring clinician checks a box for, and it's the question a conventional read is built to answer.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                An inflammation score pulled from the same pixel data, without anyone ordering it, answers a second question. That makes it structurally identical to other opportunistic findings already reshaping radiology reporting — a <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">vertebral bone-density measurement pulled from a routine chest CT</Link>, or a <Link to="/blog/incidental-findings-chest-ct-breast-lesions/" className="text-xaid-blue-strong underline underline-offset-2">breast lesion visible on a chest CT ordered for something else entirely</Link>. What's different here is the stakes: this isn't a soft-tissue footnote. It's a cardiovascular-risk finding, tied directly to the organ the scan exists to evaluate, sitting just outside the specific box the ordering clinician checked.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                As more imaging AI tools run supplementary analyses on scans acquired for one purpose, this pattern will keep recurring: the algorithm answers a question that was never asked, and someone has to decide what the report does with the answer.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Ordered question vs. opportunistic signal
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The two outputs from a scan like this behave very differently in a reporting workflow — which is exactly why they can't be handled the same way.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Plaque / stenosis (the ordered question)</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Coronary inflammation score (opportunistic signal)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">What it answers</td>
                      <td className="py-3 pr-4 text-[#444] font-light">The specific clinical question on the order</td>
                      <td className="py-3 text-[#444] font-light">A question nobody explicitly asked</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Flagged by standard risk tools?</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Partially — plaque burden is a known risk factor</td>
                      <td className="py-3 text-[#444] font-light">No — this study found zero correlation with cholesterol, A1c, hs-CRP, or the AHA PREVENT calculator</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Evidence maturity</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Established clinical practice</td>
                      <td className="py-3 text-[#444] font-light">Preprint, not yet peer-reviewed</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">What the report owes the clinician</td>
                      <td className="py-3 pr-4 text-[#444] font-light">A direct answer to the question asked</td>
                      <td className="py-3 text-[#444] font-light">Context: what the score is, how confident it is, and what action (if any) it implies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The reporting workflow questions this raises
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Primary impression or addendum?',
                    desc: "If the ordered read is clean (no plaque) but the AI flags elevated inflammation, does that belong in the main impression next to the negative plaque finding, or as a clearly separated note? Burying it changes the odds it gets acted on; folding it in undifferentiated risks over-weighting a preliminary signal next to an established one.",
                  },
                  {
                    title: 'What does the ordering clinician do with the number?',
                    desc: "The physician who ordered a plaque check didn't ask for an inflammation score and may not know what action, if any, it should trigger. A report that states a number without stating what it changes clinically isn't useful — it's a liability waiting to be litigated after the fact.",
                  },
                  {
                    title: 'Who confirms it before it reaches a chart?',
                    desc: "This specific result is preliminary, drawn from a preprint and a self-selected preventive-care population. A radiologist reviewing the output before it's finalized is the check that keeps an early-stage algorithm signal from being presented to a patient as a settled clinical verdict.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the same underlying problem xAID's structured, whole-volume CT reports are built to manage: a scan contains more clinically relevant information than the single question it was ordered to answer, and someone has to decide what the report does with the rest. Every structured draft is reviewed in-house before it goes out, so an opportunistic finding — a coronary signal, a bone-density measurement, an incidental mass — reaches the client's reading radiologist as a clearly labeled, ready-to-sign finding rather than a stray algorithm output with no clinical framing attached.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the coronary CT angiography AI study find?',
                    a: 'An AI analysis of coronary CT angiography (CCTA) exams from asymptomatic, low-risk adults found elevated coronary inflammation in 42.9% of participants, with 17.9% showing very high inflammation in at least one major coronary artery. About 47% of participants with no detectable coronary plaque still had elevated perivascular inflammation. The results were posted as a preprint on medRxiv and have not yet been peer-reviewed.',
                  },
                  {
                    q: 'Did standard risk tests catch the same patients?',
                    a: 'No. Cholesterol markers, hemoglobin A1c, high-sensitivity C-reactive protein, and the AHA PREVENT cardiovascular risk calculator showed no correlation with whether a patient had coronary inflammation on the CT scan. Patients who would have been cleared by a standard workup still showed the AI-detected signal.',
                  },
                  {
                    q: 'Why is an AI-detected coronary inflammation score considered an incidental or opportunistic finding?',
                    a: 'A coronary CT angiogram is ordered to answer a specific question — typically whether there is plaque or a narrowed artery. AI software that derives an inflammation score from the same scan, by measuring fat attenuation around the coronary arteries, answers a second question nobody explicitly ordered. That makes it an opportunistic finding: clinically real, but outside the original indication, the same category as a bone-density measurement pulled from a routine chest CT or a vertebral fracture noted on an abdominal scan.',
                  },
                  {
                    q: 'How should a reporting workflow handle an AI-surfaced finding outside the original order?',
                    a: "It needs a human in the loop before the finding reaches a chart. A radiologist has to decide whether the finding belongs in the primary impression or a clearly labeled addendum, whether the report language gives the ordering clinician something actionable, and whether a preliminary, not-yet-peer-reviewed algorithm output should be treated as a confirmed clinical result. That review step is what keeps an opportunistic AI signal from being mistaken for a clinical verdict.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15838207/biograph-highlights-cardiac-ai-ct-study" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, "Biograph highlights cardiac AI CT study" (2026), reporting on a preprint posted to medRxiv (not yet peer-reviewed); FDA regulatory status via <a href="https://www.auntminnie.com/clinical-news/ct/news/15831154/caristo-diagnostics-secures-fda-coronary-inflammation-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Every finding, not just the one the order asked about."
          sub="xAID's structured whole-volume reports surface opportunistic findings with clinical context attached, reviewed in-house before your radiologist signs. Try it on 5 free studies."
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
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT Bone Density Predicts Brain Aging</div>
              </Link>
              <Link to="/blog/incidental-findings-chest-ct-breast-lesions/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Findings on Chest CT: The Breast Lesions Radiologists Are Missing</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CoronaryCtAngiographyAiIncidentalFinding;
