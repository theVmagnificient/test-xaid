import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const LongCovidBrainFogCerebralBloodFlowBiomarker = () => {
  const post = {
    title: 'Long COVID Brain Fog Linked to Cerebral Blood Flow',
    dateIso: '2026-09-15',
    date: 'September 15, 2026',
    category: 'Radiology Reporting',
    readingTime: 6,
    description: 'A new MRI study links long COVID brain fog to measurably lower cerebral blood flow — a quantitative biomarker for structured radiology reports.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Long COVID Brain Fog Linked to Cerebral Blood Flow | xAID</title>
        <meta name="description" content="A new MRI study links long COVID brain fog to measurably lower cerebral blood flow — a quantitative biomarker for structured radiology reports." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Long COVID Brain Fog Linked to Cerebral Blood Flow | xAID" />
        <meta property="og:description" content="A new MRI study links long COVID brain fog to measurably lower cerebral blood flow — a quantitative biomarker for structured radiology reports." />
        <meta property="og:url" content="https://xaid.ai/blog/long-covid-brain-fog-cerebral-blood-flow-biomarker" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Long COVID Brain Fog Linked to Cerebral Blood Flow | xAID" />
        <meta name="twitter:description" content="A new MRI study links long COVID brain fog to measurably lower cerebral blood flow — a quantitative biomarker for structured radiology reports." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/long-covid-brain-fog-cerebral-blood-flow-biomarker" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/long-covid-brain-fog-cerebral-blood-flow-biomarker",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "long covid brain fog, cerebral blood flow MRI, quantitative imaging biomarker, ASL perfusion MRI, structured radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new MRI study find about long COVID brain fog?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers at Karolinska Institutet and Danderyd Hospital used perfusion MRI to compare 22 people with post-COVID condition (PCC) and persistent fatigue to 19 matched healthy controls. The PCC group showed lower average cerebral blood flow (about 49.2 mL/100g/min versus 51.7 mL/100g/min in controls), with the largest reductions in brain regions tied to attention, sensory processing, and cognitive control. Lower blood flow correlated with slower, more variable reaction times on a sustained-attention task."
              }
            },
            {
              "@type": "Question",
              "name": "How did researchers measure cerebral blood flow without contrast dye?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study used arterial spin labeling (ASL), a perfusion MRI technique that magnetically tags water already in the patient's blood as a tracer, producing a quantitative cerebral blood flow map without an injected contrast agent. Participants underwent ASL scanning at rest and during a 20-minute psychomotor vigilance task."
              }
            },
            {
              "@type": "Question",
              "name": "Does reduced cerebral blood flow cause long COVID fatigue?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The researchers were explicit that this is an association, not proof of causation, drawn from a small sample of 22 patients and 19 controls. ASL also cannot fully distinguish reduced blood flow in brain tissue from changes in how quickly blood arrives through small vessels, and the findings need confirmation in larger, longitudinal cohorts."
              }
            },
            {
              "@type": "Question",
              "name": "What does a quantitative perfusion biomarker mean for radiology reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Findings like a regional or global cerebral blood flow value only have clinical utility if a report captures them as a number in a consistent field, the same way coronary calcium scores or vertebral bone density values do. As quantitative sequences like ASL become routine parts of neuro-imaging protocols, structured reporting that reliably extracts and records the figure — not just a qualitative impression of perfusion — becomes the bottleneck between a research biomarker and something a referring clinician can act on."
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
                Radiology Reporting
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Long COVID brain fog now has<br />
              <span className="text-white/60">a number attached to it</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A Karolinska Institutet study used perfusion MRI to measure cerebral blood flow in people with long COVID fatigue — and found it measurably lower than in matched controls. The clinical story is about fatigue. The reporting story is about whether a quantitative perfusion value like this ever makes it into a structured field a clinician can act on.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '22 vs 19', label: 'PCC patients vs controls', sub: 'matched for age and sex' },
            { stat: '49.2', label: 'mL/100g/min global CBF', sub: 'vs 51.7 in controls' },
            { stat: '3', label: 'brain regions flagged', sub: 'occipital, postcentral, cingulate' },
            { stat: 'ASL MRI', label: 'contrast-free CBF mapping', sub: 'no injected dye required' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team led by doctoral student Sonia Miri Hedberg, in the Department of Clinical Sciences at Danderyd Hospital, Karolinska Institutet, published the findings in Elsevier's <a href="https://doi.org/10.1016/j.ynirp.2026.100406" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>NeuroImage: Reports</em></a> in September 2026. The researchers compared <strong>22</strong> people with post-COVID condition (PCC) who reported persistent fatigue against <strong>19</strong> healthy controls matched for age and sex.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Instead of relying on self-reported symptoms alone, the team used arterial spin labeling (ASL), a perfusion-MRI technique that tags water already circulating in a patient's blood as a tracer — producing a quantitative cerebral blood flow (CBF) map without an injected contrast agent. Participants were scanned at rest and again during a 20-minute psychomotor vigilance task that required a fast response to visual signals, so the researchers could see how blood flow and performance moved together under sustained attention.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "Our findings show that people with post-COVID-19 condition not only report more fatigue, but also perform more slowly on a task that requires sustained attention," Hedberg said, describing the pairing of subjective fatigue with an objective performance and imaging signal as the point of the study.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The numbers behind the headline
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Average global cerebral blood flow was lower in the PCC group — about <strong>49.2 mL/100g/min</strong>, compared with <strong>51.7 mL/100g/min</strong> in controls. The gap was not uniform across the brain: the largest regional reductions clustered in the right inferior occipital gyrus, the left postcentral gyrus, and the right middle cingulate cortex — regions involved in visual processing, sensory input, and cognitive control.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Behaviorally, the PCC group responded more slowly and with more variability during the attention task, and reported a sharper increase in fatigue over the 20 minutes than controls did. Slower reaction times tracked with lower cerebral blood flow — the kind of association that turns a subjective complaint ("I feel foggy") into something with a corresponding imaging value.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Association, not proof — and the researchers say so
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The authors were careful about what the data does and doesn't show. The study is cross-sectional and small — 22 patients and 19 controls — so it can't establish that reduced perfusion causes fatigue rather than reflecting some other shared process. ASL also has a known technical limit: it can't always distinguish truly reduced blood flow in brain tissue from a longer transit time for blood moving through small vessels. The team called for confirmation in larger, longitudinal cohorts before the finding could inform clinical practice.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why a number like this matters more than the headline
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Set the long COVID story aside for a moment and look at what the finding actually is: a quantitative perfusion value — milliliters of blood per 100 grams of tissue per minute, broken out by brain region — derived from a sequence that a growing number of neuro-MRI protocols already acquire for dementia workups, stroke evaluation, and tumor characterization. That puts cerebral blood flow in the same category as other quantitative imaging biomarkers that have moved from research curiosity to reportable finding: coronary artery calcium scores on chest CT, vertebral bone density pulled from the same scan, or a PE-RADS risk category on a pulmonary embolism study.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Each of those only became useful in practice once reporting treated the number as a structured field rather than a sentence buried in the impression. A report that says "perfusion appears grossly within normal limits" carries none of the signal a report that states "global CBF 49 mL/100g/min, reduced relative to age-matched norms" does. The gap between a research-grade biomarker and an actionable one is rarely the imaging — it's whether the reporting workflow reliably pulls the figure out and writes it down the same way every time.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Quantitative biomarker</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Seen on</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Only useful if the report captures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Cerebral blood flow (ASL)</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Brain MRI with perfusion sequence</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">The CBF value in mL/100g/min, by region</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">
                        <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">Vertebral bone density</Link>
                      </td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Chest CT (any indication)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">The measured density, not just "osteopenia"</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">
                        <Link to="/blog/incidental-renal-mass-ct-report/" className="text-xaid-blue-strong underline underline-offset-2">Renal mass characterization</Link>
                      </td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Abdominal CT/MRI (any indication)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">Size, Bosniak class, and follow-up interval</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Coronary artery calcium</td>
                      <td className="py-3 pr-4 text-[14px] text-[#444] font-light">Chest CT (lung screening)</td>
                      <td className="py-3 text-[14px] text-[#444] font-light">The Agatston score, not a qualitative note</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is a research finding on a small cohort, not a validated clinical biomarker yet — it is years from being a line item in a routine report. But it's a useful preview of a pattern that keeps repeating in imaging: a quantitative signal exists in the data, and whether it ever reaches a clinician depends on structured, consistent extraction rather than a radiologist happening to note it. That is the problem xAID's <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model approach</Link> to CT reporting is built around: generating a structured, comprehensive draft from the full study so quantitative and incidental findings are captured the same way every time, reviewed in-house, and delivered ready-to-sign to the reading radiologist.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new MRI study find about long COVID brain fog?',
                    a: 'Researchers at Karolinska Institutet and Danderyd Hospital used perfusion MRI to compare 22 people with post-COVID condition (PCC) and persistent fatigue to 19 matched healthy controls. The PCC group showed lower average cerebral blood flow (about 49.2 mL/100g/min versus 51.7 mL/100g/min in controls), with the largest reductions in brain regions tied to attention, sensory processing, and cognitive control. Lower blood flow correlated with slower, more variable reaction times on a sustained-attention task.',
                  },
                  {
                    q: 'How did researchers measure cerebral blood flow without contrast dye?',
                    a: "The study used arterial spin labeling (ASL), a perfusion MRI technique that magnetically tags water already in the patient's blood as a tracer, producing a quantitative cerebral blood flow map without an injected contrast agent. Participants underwent ASL scanning at rest and during a 20-minute psychomotor vigilance task.",
                  },
                  {
                    q: 'Does reduced cerebral blood flow cause long COVID fatigue?',
                    a: 'The researchers were explicit that this is an association, not proof of causation, drawn from a small sample of 22 patients and 19 controls. ASL also cannot fully distinguish reduced blood flow in brain tissue from changes in how quickly blood arrives through small vessels, and the findings need confirmation in larger, longitudinal cohorts.',
                  },
                  {
                    q: 'What does a quantitative perfusion biomarker mean for radiology reporting?',
                    a: 'Findings like a regional or global cerebral blood flow value only have clinical utility if a report captures them as a number in a consistent field, the same way coronary calcium scores or vertebral bone density values do. As quantitative sequences like ASL become routine parts of neuro-imaging protocols, structured reporting that reliably extracts and records the figure — not just a qualitative impression of perfusion — becomes the bottleneck between a research biomarker and something a referring clinician can act on.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Hedberg SM, et al. "Cognitive fatigue is related to reduced cerebral perfusion and sustained attention in patients with post COVID-19 condition: An fMRI study." <em>NeuroImage: Reports</em> (2026). <a href="https://doi.org/10.1016/j.ynirp.2026.100406" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1016/j.ynirp.2026.100406</a>. As reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/mri-links-long-covid-fatigue-reduced-cerebral-blood-flow" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://news.ki.se/brain-blood-flow-linked-to-fatigue-after-covid-19" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Karolinska Institutet News</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Quantitative findings only help if the report captures them"
          sub="See how xAID's foundation-model reporting turns a routine scan into a structured, radiologist-reviewed draft. Try it on 5 free studies."
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
              <Link to="/blog/incidental-renal-mass-ct-report/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Renal Mass on CT: Why the Report Matters</div>
              </Link>
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Reporting</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why Radiology Report Language Precision Matters</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default LongCovidBrainFogCerebralBloodFlowBiomarker;
