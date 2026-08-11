import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const ClinicalIndicationRadiologyOrders = () => {
  const post = {
    title: 'LLMs Beat Clinicians at Writing Radiology Order Indications',
    dateIso: '2026-08-05',
    date: 'August 5, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A 77,626-exam UCSF study found LLMs write more comprehensive, more factual clinical indications than clinicians. Why that gap matters for AI report accuracy.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>LLMs Beat Clinicians on Radiology Order Indications | xAID</title>
        <meta name="description" content="A 77,626-exam UCSF study found LLMs write more comprehensive, more factual clinical indications than clinicians. Why that gap matters for AI report accuracy." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="LLMs Beat Clinicians on Radiology Order Indications | xAID" />
        <meta property="og:description" content="A 77,626-exam UCSF study found LLMs write more comprehensive, more factual clinical indications than clinicians. Why that gap matters for AI report accuracy." />
        <meta property="og:url" content="https://xaid.ai/blog/clinical-indication-radiology-orders" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LLMs Beat Clinicians on Radiology Order Indications | xAID" />
        <meta name="twitter:description" content="A 77,626-exam UCSF study found LLMs write more comprehensive, more factual clinical indications than clinicians. Why that gap matters for AI report accuracy." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/clinical-indication-radiology-orders" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/clinical-indication-radiology-orders",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "clinical indication radiology order, imaging order clinical context, AI radiology report accuracy, radiology requisition quality, LLM clinical history generation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do LLMs write better clinical indications than referring clinicians?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a study published August 4, 2026 in Radiology, LLM-generated clinical indications for imaging orders were rated more comprehensive and more factual than the indications written by referring clinicians. Claude 3.5 Sonnet was ranked the most comprehensive indication 37.14% of the time versus 6.64% for the original clinician-written text, and the most factual 68.05% of the time versus 50% for clinicians."
              }
            },
            {
              "@type": "Question",
              "name": "What did the UCSF clinical-indication study measure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers analyzed 740,867 clinical notes across 77,626 imaging exams from 28,313 patients treated at UCSF between January 2012 and August 2024. LLMs were given the original clinician indication plus a patient's 10 most recent clinical notes and asked to generate an enhanced indication. Twenty radiologists then rated 25 indications each on comprehensiveness, factuality, conciseness, and usefulness, without knowing which indications were AI-generated."
              }
            },
            {
              "@type": "Question",
              "name": "Does this mean referring doctors are bad at writing imaging orders?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not exactly — it reflects time pressure and workflow, not carelessness. Referring clinicians write indications in seconds during a busy visit, often from memory, while an LLM can pull from a decade of chart history in the same time. A similar pattern showed up in an earlier 2025 Radiology study, where GPT-4-generated oncologic histories more consistently included the primary cancer diagnosis, treatment history, and acute symptoms than the original requisition text."
              }
            },
            {
              "@type": "Question",
              "name": "Why does clinical indication quality matter for AI radiology report accuracy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Any reporting system — human or AI — interprets images against the clinical question it's given. A thin or generic indication limits what a radiologist or an AI drafting engine can prioritize, no matter how capable the underlying model is. Closing the order-context gap is an accuracy lever that sits upstream of model quality, alongside detection performance and reviewer oversight."
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
              LLMs beat clinicians at writing<br />
              <span className="text-white/60">radiology order indications</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 77,626-exam UCSF study found that AI-written clinical indications outscored referring-clinician text on comprehensiveness and factuality. The finding points to an accuracy lever that has little to do with which model reads the scan — and everything to do with what the order tells it.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '37.1%', label: 'Rated most comprehensive', sub: 'Claude 3.5 Sonnet indications' },
                { stat: '6.6%', label: 'Rated most comprehensive', sub: 'original clinician indications' },
                { stat: '68.1% vs 50%', label: 'Rated most factual', sub: 'LLM vs. clinician indication' },
                { stat: '77,626', label: 'Imaging exams analyzed', sub: 'UCSF, 2012–2024' },
              ].map((s) => (
                <div key={s.label + s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1 break-words">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1 break-words">{s.label}</div>
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
                What the study measured
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team from UCSF, published August 4, 2026 in RSNA's <a href="https://doi.org/10.1148/radiol.253238" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology</em></a>, asked a narrow but consequential question: can a large language model write a better clinical indication for an imaging order than the referring clinician who placed it? They pulled <strong>740,867</strong> clinical notes across <strong>77,626</strong> imaging exams from <strong>28,313</strong> patients treated between January 2012 and August 2024, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/llms-better-docs-providing-clinical-context-imaging-orders" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For each exam, the LLM received the original clinician-written indication plus the patient's ten most recent clinical notes, and generated an enhanced version. Twenty radiologists then blind-rated 25 indications apiece across four dimensions — comprehensiveness, factuality, conciseness, and usefulness — without knowing which version came from a clinician and which came from a model.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The gap was not close. Claude 3.5 Sonnet's indications were ranked the most comprehensive <strong>37.14%</strong> of the time, versus <strong>6.64%</strong> for the clinician-written originals, and the most factual <strong>68.05%</strong> of the time versus <strong>50%</strong> for clinicians. A smaller open model, Qwen 2.5-7B Instruct, still outscored clinicians on both counts — <strong>28.42%</strong> top-comprehensiveness and <strong>59.75%</strong> top-factuality. Comprehensiveness was also the single biggest driver of how radiologists ranked an indication overall, cited by <strong>65.77%</strong> of readers as their primary factor.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Not a one-off finding
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A similar pattern showed up a year earlier in a different setting. A <a href="https://doi.org/10.1148/radiol.242134" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2025 study in Radiology</a> from a large Canadian cancer center had GPT-4 draft oncologic clinical histories for 200 CT patients from existing chart notes. The AI-generated histories more consistently included the primary cancer diagnosis, treatment history, and acute or worsening symptoms than the original requisition text — and radiologists strongly preferred the AI versions for interpretation and safety.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Lead author Rajesh Bhayana, MD, put the stakes plainly: if a requisition for cancer imaging doesn't mention the primary tumor, "how we interpret the study and the likelihood we pick up cancer may be impacted." Two studies, two model generations, two very different clinical settings — and the same conclusion: referring clinicians, working under time pressure and often from memory, tend to under-document context that a model can pull from the chart in seconds.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Referring-clinician text vs. LLM-generated indication
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Metric (top rank)</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Clinician indication</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Claude 3.5 Sonnet</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Qwen 2.5-7B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Comprehensiveness</td>
                      <td className="py-3 pr-4 text-[#444] font-light">6.64%</td>
                      <td className="py-3 pr-4 text-[#444] font-light">37.14%</td>
                      <td className="py-3 text-[#444] font-light">28.42%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Factuality</td>
                      <td className="py-3 pr-4 text-[#444] font-light">50%</td>
                      <td className="py-3 pr-4 text-[#444] font-light">68.05%</td>
                      <td className="py-3 text-[#444] font-light">59.75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Top-rank share among 20 blinded radiologist readers scoring 25 indications each. Source: <a href="https://doi.org/10.1148/radiol.253238" target="_blank" rel="noopener noreferrer" className="underline hover:text-xaid-blue">Radiology</a> (2026), as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/llms-better-docs-providing-clinical-context-imaging-orders" target="_blank" rel="noopener noreferrer" className="underline hover:text-xaid-blue">Radiology Business</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The overlooked accuracy lever
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most discussion of AI reporting accuracy centers on the model reading the images: sensitivity for a specific finding, hallucination rate, agreement with a reference radiologist. That's the right thing to measure, but it treats the clinical indication as a fixed input rather than a variable one — and this research says it isn't fixed at all. It's inconsistent, often thin, and measurably improvable.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That matters because every reporting system — a radiologist, an AI drafting engine, or the two together — interprets a scan against the clinical question it was handed. An order that says "abdominal pain, rule out abnormality" gives a reader far less to work with than one that surfaces a prior surgery, a known malignancy, or a relevant lab trend buried three notes back in the chart. A more capable model reading against a thinner indication can still miss what a less capable model would have caught with better context. Order-quality and model-quality are two separate levers on the same output, and the field has mostly measured only one of them.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In practice, closing that gap doesn't require rewriting how referring physicians place orders. It requires a reporting pipeline that pulls the same kind of context an LLM pulled in this study — recent notes, prior imaging, known diagnoses — before the reading happens, rather than relying solely on whatever fits in an order's free-text field.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with AI CT reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A foundation-model reporting system is exposed to the same order-context gap this study describes, which is why the drafting step should draw on all the clinical context available for a case rather than treat the order field as the only input, and why a review layer matters as a backstop when that context is incomplete. That's the structure behind AI CT reporting today: a comprehensive draft, an in-house radiologist review on every preliminary, and a ready-to-sign report for the client's reading radiologist. Better upstream context and a capable model aren't competing fixes for report quality — they compound.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Do LLMs write better clinical indications than referring clinicians?',
                    a: 'In a study published August 4, 2026 in Radiology, LLM-generated clinical indications for imaging orders were rated more comprehensive and more factual than the indications written by referring clinicians. Claude 3.5 Sonnet was ranked the most comprehensive indication 37.14% of the time versus 6.64% for the original clinician-written text, and the most factual 68.05% of the time versus 50% for clinicians.',
                  },
                  {
                    q: 'What did the UCSF clinical-indication study measure?',
                    a: "Researchers analyzed 740,867 clinical notes across 77,626 imaging exams from 28,313 patients treated at UCSF between January 2012 and August 2024. LLMs were given the original clinician indication plus a patient's 10 most recent clinical notes and asked to generate an enhanced indication. Twenty radiologists then rated 25 indications each on comprehensiveness, factuality, conciseness, and usefulness, without knowing which indications were AI-generated.",
                  },
                  {
                    q: 'Does this mean referring doctors are bad at writing imaging orders?',
                    a: 'Not exactly — it reflects time pressure and workflow, not carelessness. Referring clinicians write indications in seconds during a busy visit, often from memory, while an LLM can pull from a decade of chart history in the same time. A similar pattern showed up in an earlier 2025 Radiology study, where GPT-4-generated oncologic histories more consistently included the primary cancer diagnosis, treatment history, and acute symptoms than the original requisition text.',
                  },
                  {
                    q: 'Why does clinical indication quality matter for AI radiology report accuracy?',
                    a: "Any reporting system — human or AI — interprets images against the clinical question it's given. A thin or generic indication limits what a radiologist or an AI drafting engine can prioritize, no matter how capable the underlying model is. Closing the order-context gap is an accuracy lever that sits upstream of model quality, alongside detection performance and reviewer oversight.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Serapio, Chen, et al., <em>Radiology</em> (2026), <a href="https://doi.org/10.1148/radiol.253238" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1148/radiol.253238</a>, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/llms-better-docs-providing-clinical-context-imaging-orders" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Corroborating study: Bhayana et al., <em>Radiology</em> (2025), <a href="https://doi.org/10.1148/radiol.242134" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1148/radiol.242134</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A ready-to-sign draft, built on full context."
          sub="See how AI CT reporting pairs a comprehensive draft with radiologist review on every preliminary. Try it on 5 free studies."
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
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
              <Link to="/blog/ai-radiology-quality-assurance/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Can an LLM Catch Radiology QC Errors? New Study</div>
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

export default ClinicalIndicationRadiologyOrders;
