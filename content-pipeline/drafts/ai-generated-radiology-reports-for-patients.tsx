import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AiGeneratedRadiologyReportsForPatients = () => {
  const post = {
    title: 'AI-Generated Radiology Reports for Patients Need a Safety Rubric',
    dateIso: '2026-09-11',
    date: 'September 11, 2026',
    category: 'AI Safety & QA',
    readingTime: 7,
    description: 'A study of 500 AI-simplified radiology reports found hallucinations in some cases, evidence patient-facing AI drafts need a structured QA rubric before release.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Radiology Reports for Patients Need a QA Rubric | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/ai-generated-radiology-reports-for-patients/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Radiology Reports for Patients Need a QA Rubric | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Radiology Reports for Patients Need a QA Rubric | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-generated-radiology-reports-for-patients" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-generated-radiology-reports-for-patients",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "ai generated radiology reports for patients, patient-friendly radiology reports, AI radiology report safety, radiology report QA rubric, AI hallucination radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study on AI-generated patient-friendly radiology reports find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers at Mass General Brigham used GPT-4o to simplify 500 neuroradiology reports (200 brain MRI, 100 head CT, 200 spine MRI) to a middle-school reading level and translate a subset into Spanish, published in Scientific Reports in May 2026. The reading grade level dropped from about college level (13.4) to middle-school (7.0), and the simplified text scored as more neutral and less fear-inducing. But two independent radiologist raters also found major omissions in up to 5.5% of reports and malignant hallucinations (invented pathology) in up to 1.0%, depending on report type."
              }
            },
            {
              "@type": "Question",
              "name": "How common are hallucinations in AI-simplified radiology reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the Mass General Brigham study, malignant hallucination rates ranged from 0% in head CT reports to 1.0% in spine MRI reports; major omissions ranged from 0.5% to 5.5%; major imprecisions ranged from 1.0% to 6.0%, depending on report type. An earlier 2024 study that used GPT-3.5 to generate spine MRI reports for patients found a comparable signal at larger scale: a 1.12% hallucination rate and 7.40% of reports containing potentially harmful wording substitutions."
              }
            },
            {
              "@type": "Question",
              "name": "What is a QA rubric for AI-generated radiology content, and why does it matter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A QA rubric is a structured, multi-dimensional scoring framework covering clinical accuracy, readability, emotional tone, and translation fidelity, used to grade an AI output before a person sees it rather than trusting one overall quality score. Researchers argue this kind of severity-stratified review is what should stand between an AI-generated patient summary and the patient, because a single aggregate accuracy score can hide a rare but serious error."
              }
            },
            {
              "@type": "Question",
              "name": "Does this research have anything to do with AI-generated diagnostic radiology reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Structurally, yes. The study itself is about patient-facing plain-language summaries, not diagnostic report drafting. But the underlying finding -- that an AI-authored clinical document is only as safe as the review layer around it -- applies to any AI-generated report in radiology, including full diagnostic drafts reviewed under a draft-then-review workflow before a reading physician signs the final."
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
                AI Safety &amp; QA
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              AI can simplify a radiology report for a patient.<br />
              <span className="text-white/60">Should it grade its own homework?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new study of 500 AI-simplified neuroradiology reports made them easier to read and less frightening — and still produced hallucinated findings and dropped information in a measurable share of cases. The researchers' answer isn't to stop using AI. It's to build a rubric that catches what a single quality score misses.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '500', label: 'Reports evaluated', sub: 'brain MRI, head CT, spine MRI' },
            { stat: '13.4 → 7.0', label: 'Reading grade level', sub: 'college to middle-school' },
            { stat: 'Up to 6.0%', label: 'Major imprecision rate', sub: 'highest in spine MRI' },
            { stat: 'Up to 1.0%', label: 'Malignant hallucination rate', sub: 'invented pathology' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the new research actually tested
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team from Mass General Brigham, led by Wendy Sun, collected a consecutive series of 500 neuroradiology reports — 200 brain MRIs, 100 head CTs, and 200 spine MRIs — and used GPT-4o to rewrite the impression section of each one at a middle-school reading level. A 60-report subset (20 per modality) was also machine-translated into Spanish. The work was published in <a href="https://doi.org/10.1038/s41598-026-48030-3" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Scientific Reports</em></a> in May 2026, as covered by <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-rubric-could-help-make-patient-friendly-radiology-reports-safer" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On the readability side, the results were strong. The average reading grade level of the impressions dropped from about <strong>13.4</strong> (college level) to <strong>7.0</strong> (middle-school level). Sentiment analysis showed the simplified text was rated as measurably more neutral and less fear-inducing than the originals (p&lt;0.001). For the translated subset, machine-translation quality (measured with the METEOR metric) scored between <strong>0.75 and 0.88</strong> depending on modality, and for spine MRI reports a panel of certified interpreters could not statistically distinguish the machine translation from a human one (p=0.28).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But two independent neuroradiologist raters also scored every simplified report for clinical safety — checking for omissions, hallucinations, and imprecisions — and that's where the picture gets more complicated.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The safety gap a single quality score would have hidden
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Error rates weren't uniform across report types — and spine MRI, the modality with the densest anatomical jargon, was consistently the hardest for the model to simplify safely:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#0D0D0D]">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Report type</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Major omissions</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Malignant hallucinations</th>
                      <th className="py-3 text-[#0D0D0D] font-medium text-sm">Major imprecisions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 text-[#444] text-sm">Brain MRI (n=200)</td>
                      <td className="py-3 pr-4 text-[#444] text-sm">0.5%</td>
                      <td className="py-3 pr-4 text-[#444] text-sm">0.5%</td>
                      <td className="py-3 text-[#444] text-sm">1.5%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 text-[#444] text-sm">Head CT (n=100)</td>
                      <td className="py-3 pr-4 text-[#444] text-sm">2.0%</td>
                      <td className="py-3 pr-4 text-[#444] text-sm">0%</td>
                      <td className="py-3 text-[#444] text-sm">1.0%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4 text-[#444] text-sm">Spine MRI (n=200)</td>
                      <td className="py-3 pr-4 text-[#444] text-sm">5.5%</td>
                      <td className="py-3 pr-4 text-[#444] text-sm">1.0%</td>
                      <td className="py-3 text-[#444] text-sm">6.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A "malignant hallucination," in the study's terms, means the model introduced false pathology that wasn't in the original report — not a stray word choice, but a fabricated finding. The authors were blunt about what that implies: <em>"The presence of major/malignant mistakes necessitates human oversight, at least in the current implementation strategy."</em> Inter-rater agreement between the two reviewing radiologists was high (PABAK 0.86–1.00), meaning the errors they flagged were real and reproducible, not a scoring artifact.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This isn't the first time the numbers have looked like this
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A separate 2024 study, also published in <a href="https://doi.org/10.1038/s41598-024-63824-z" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Scientific Reports</em></a>, used an earlier model (GPT-3.5-turbo) to generate patient-centered summaries from 685 spine MRI reports. Radiologist review found a <strong>1.12%</strong> hallucination rate and <strong>7.40%</strong> of reports containing wording substitutions a patient could misread as more alarming or different in meaning than intended — for example, "herniated disc" rendered as "high-grade dysplasia," or "contrast" rendered as "dye." The authors concluded that radiologists remain responsible for catching those errors before a summary reaches a patient.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two studies, two years apart, two different models, and the same shape of result: making a radiology report more readable and less frightening is a task current large language models are genuinely good at. Keeping every generated sentence clinically accurate at the same time is the part that still fails at a low but non-zero rate — which is exactly what a QA rubric is built to catch before a patient ever sees the output.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why patient summaries need the same discipline as diagnostic drafts
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The rubric these researchers are building — severity-stratified error categories, dual-expert review, and multi-dimensional scoring instead of one aggregate number — is a QA layer being retrofitted onto AI-authored content after the fact. That's the same structural problem AI CT reporting was built around from the start: an AI-generated draft is a starting point, not a finished clinical document, regardless of whether the output is a patient-facing summary or a full diagnostic report. In xAID's workflow, every AI-generated preliminary gets an in-house radiologist review before it's delivered ready-to-sign, so the client's reading radiologist is signing a reviewed document, not a raw model output. The lesson from this rubric research is the same lesson that shaped that workflow: an AI-authored clinical document is only as safe as the review layer standing between it and the person who has to act on it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study on AI-generated patient-friendly radiology reports find?',
                    a: 'Researchers at Mass General Brigham used GPT-4o to simplify 500 neuroradiology reports (200 brain MRI, 100 head CT, 200 spine MRI) to a middle-school reading level and translate a subset into Spanish, published in Scientific Reports in May 2026. The reading grade level dropped from about college level (13.4) to middle-school (7.0), and the simplified text scored as more neutral and less fear-inducing. But two independent radiologist raters also found major omissions in up to 5.5% of reports and malignant hallucinations (invented pathology) in up to 1.0%, depending on report type.',
                  },
                  {
                    q: 'How common are hallucinations in AI-simplified radiology reports?',
                    a: 'In the Mass General Brigham study, malignant hallucination rates ranged from 0% in head CT reports to 1.0% in spine MRI reports; major omissions ranged from 0.5% to 5.5%; major imprecisions ranged from 1.0% to 6.0%, depending on report type. An earlier 2024 study that used GPT-3.5 to generate spine MRI reports for patients found a comparable signal at larger scale: a 1.12% hallucination rate and 7.40% of reports containing potentially harmful wording substitutions.',
                  },
                  {
                    q: 'What is a QA rubric for AI-generated radiology content, and why does it matter?',
                    a: 'A QA rubric is a structured, multi-dimensional scoring framework covering clinical accuracy, readability, emotional tone, and translation fidelity, used to grade an AI output before a person sees it rather than trusting one overall quality score. Researchers argue this kind of severity-stratified review is what should stand between an AI-generated patient summary and the patient, because a single aggregate accuracy score can hide a rare but serious error.',
                  },
                  {
                    q: 'Does this research have anything to do with AI-generated diagnostic radiology reports?',
                    a: "Structurally, yes. The study itself is about patient-facing plain-language summaries, not diagnostic report drafting. But the underlying finding — that an AI-authored clinical document is only as safe as the review layer around it — applies to any AI-generated report in radiology, including full diagnostic drafts reviewed under a draft-then-review workflow before a reading physician signs the final.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Sun W, et al. <a href="https://doi.org/10.1038/s41598-026-48030-3" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Patient-friendly simplification and translation of neuroradiology impressions using artificial intelligence,"</a> <em>Scientific Reports</em> 16:23174 (2026); Park J, et al. <a href="https://doi.org/10.1038/s41598-024-63824-z" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Patient-centered radiology reports with generative artificial intelligence: adding value to radiology reporting,"</a> <em>Scientific Reports</em> 14:13218 (2024); as covered by <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-rubric-could-help-make-patient-friendly-radiology-reports-safer" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A review layer for every AI-generated draft."
          sub="That's the discipline this research is asking for in patient summaries — and it's how xAID structures every CT report. Try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Generative AI Report Drafting: Draft-Then-Sign</div>
              </Link>
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Communication</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Radiology Report Language Delays Care</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiGeneratedRadiologyReportsForPatients;
