import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const LowValueImagingClinicianKnowledge = () => {
  const post = {
    title: 'Low-Value Imaging: What Clinician Knowledge Reveals About Appropriate Use',
    dateIso: '2026-07-14',
    date: 'July 14, 2026',
    category: 'Appropriate Use',
    readingTime: 7,
    description: "A JAMA study of ~900,000 Medicare patients links higher clinician knowledge to less low-value imaging. Why appropriate use, not volume, is the quality problem.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Low-Value Imaging &amp; Clinician Knowledge | xAID</title>
        <meta name="description" content="A JAMA study of ~900,000 Medicare patients links higher clinician knowledge to less low-value imaging. Why appropriate use, not volume, is the quality problem." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Low-Value Imaging &amp; Clinician Knowledge | xAID" />
        <meta property="og:description" content="A JAMA study of ~900,000 Medicare patients links higher clinician knowledge to less low-value imaging. Why appropriate use, not volume, is the quality problem." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Low-Value Imaging &amp; Clinician Knowledge | xAID" />
        <meta name="twitter:description" content="A JAMA Internal Medicine study of ~900,000 Medicare patients links higher clinician knowledge to less low-value imaging. Appropriate use is the demand-side quality problem." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/low-value-imaging-clinician-knowledge" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/low-value-imaging-clinician-knowledge",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "low-value imaging, appropriate use imaging, clinician knowledge imaging, low-value care, unnecessary imaging, AI CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the study find about clinician knowledge and low-value imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 JAMA Internal Medicine study of nearly 900,000 Medicare beneficiaries cared for by 7,089 general internists found that patients of physicians in the top quartile of the ABIM Longitudinal Knowledge Assessment were about 4% less likely to receive low-value imaging (13.2% vs 13.8%) and nearly 8% less likely to receive any of 25 low-value services (28.6% vs 31%). Higher measured clinical knowledge correlated with more appropriate ordering."
              }
            },
            {
              "@type": "Question",
              "name": "What is low-value imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Low-value imaging is a scan ordered when guidelines and evidence suggest it is unlikely to change management or benefit the patient — for example, routine imaging for uncomplicated low back pain or headache. It is distinct from overutilization by volume: the issue is appropriateness of the individual order, not the total number of scans. Low-value care overall is estimated to cost the U.S. health system roughly $100 billion a year."
              }
            },
            {
              "@type": "Question",
              "name": "Does more clinical knowledge eliminate low-value imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The knowledge effect is real but modest — a few percentage points for imaging — and separate research shows education and clinical decision support alone have produced mixed or limited reductions. Ordering behavior is shaped by defensive medicine, patient expectations, time pressure, and habit as well as knowledge, so appropriate use is a system problem, not only an individual one."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI reporting relate to low-value imaging and appropriate use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI CT reporting does not decide whether a scan should be ordered — that is the referring clinician's call, guided by appropriateness criteria. Its role is on the reads that do happen: a structured, guideline-aligned, evidence-cited report with clear follow-up recommendations reduces the ambiguous incidental findings and vague 'clinical correlation advised' language that trigger downstream low-value follow-up imaging. At xAID, every report is radiologist-reviewed and delivered ready-to-sign, so your reading radiologist signs the final."
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
              <Link to="/blog/" className="text-white/60 hover:text-white text-[15px] font-light transition-colors">← Blog</Link>
              <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                Appropriate Use
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Low-value imaging is an appropriateness problem<br />
              <span className="text-white/60">— and clinician knowledge moves the needle</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new study of nearly 900,000 Medicare patients shows that physicians who score higher on a standardized knowledge assessment order measurably less low-value imaging. It reframes the demand-side quality question: the problem isn't only how many scans get ordered — it's whether the right ones do.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '4%', label: 'Less low-value imaging', sub: 'top-quartile physicians (13.2% vs 13.8%)' },
                { stat: '~8%', label: 'Less low-value care overall', sub: '28.6% vs 31% of patients' },
                { stat: '900K', label: 'Medicare patients analyzed', sub: '7,089 general internists' },
                { stat: '80,000', label: 'Fewer patients per year', sub: 'if all matched top performers' },
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
                What the study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers linked physicians' scores on the American Board of Internal Medicine's <a href="https://www.abim.org/maintenance-of-certification/assessment-options/longitudinal-knowledge-assessment/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Longitudinal Knowledge Assessment</a> (LKA) to the care their patients actually received, and published the results in <a href="https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2851377" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Internal Medicine</em></a>. The analysis covered nearly <strong>900,000 Medicare beneficiaries</strong> cared for by <strong>7,089 outpatient general internists</strong> who first enrolled in the LKA in 2022 or 2023.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Patients of physicians in the <strong>top quartile</strong> of knowledge scores were nearly <strong>8% less likely</strong> to receive any of 25 tracked low-value services — 28.6% versus 31% for patients of the lowest-scoring physicians. For low-value <em>imaging</em> specifically, the gap was about <strong>4%</strong> (13.2% versus 13.8%), alongside a 16% lower rate of unnecessary diagnostic and preventive testing and an 11% lower rate of unnecessary cancer screening.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The authors — <a href="https://doi.org/10.1001/jamainternmed.2026.2889" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Jonathan L. Vandergrift, Bruce E. Landon, Weifeng Weng, and Bradley M. Gray</a> — estimate that if every general internist ordered low-value services at the rate of top scorers, about <strong>80,000 fewer</strong> Medicare fee-for-service beneficiaries would receive them each year. Low-value care overall is estimated to cost the U.S. health system roughly $100 billion annually.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Volume and value are two different problems
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most of the debate about imaging demand is about <em>volume</em> — more scanners, more orders, more studies stacking up in the reading queue. That capacity story is real, and it is covered separately in <Link to="/blog/overutilization-of-medical-imaging/" className="text-xaid-blue-strong underline underline-offset-2">the overutilization and radiologist-capacity squeeze</Link>. But this study points at a different axis: <strong>appropriateness</strong>. A low-value scan isn't a problem because it adds one more study to the pile — it's a problem because it was unlikely to change the patient's management in the first place.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The two problems interact in an uncomfortable way. A low-value scan doesn't just consume a slot — it generates findings. Many are incidental and clinically irrelevant, but each one can seed a follow-up recommendation, another scan, a specialist referral, sometimes a biopsy. Inappropriate imaging is therefore a common on-ramp to <em>more</em> inappropriate imaging.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Volume problem',
                    desc: 'Too many studies for the available reading capacity. The lever is throughput — reading the queue faster without proportionally growing headcount.',
                  },
                  {
                    title: 'Value problem',
                    desc: 'The wrong studies get ordered relative to guidelines. The lever is appropriateness at the point of ordering — knowledge, decision support, and incentives.',
                  },
                  {
                    title: 'Where they meet',
                    desc: "Low-value scans create incidental findings that trigger downstream low-value follow-up. Ambiguous reporting amplifies the cascade; clear, guideline-aligned reporting dampens it.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Knowledge helps — but it isn't the whole fix
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It would be easy to read this study as "just train doctors better." The effect is real, but note its size: the imaging gap between the highest- and lowest-knowledge physicians was only a few percentage points. Ordering behavior is also driven by defensive medicine, patient expectations, time pressure, and habit — factors that a knowledge score doesn't capture.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That matches the broader evidence. Efforts to curb low-value ordering through education and clinical decision support alone have produced <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/effort-stop-primary-care-providers-ordering-low-value-imaging-hits-brick-wall" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">mixed and often disappointing results</a>. Appropriate use is a system property, not a personal virtue — which is exactly why the reporting layer, downstream of the ordering decision, matters more than it first appears.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI CT reporting fits — on the reads that do happen
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                AI CT reporting sits on the far side of the ordering decision. It doesn't — and shouldn't — decide whether a scan was appropriate; that call belongs to the referring clinician and the appropriateness criteria they follow, and it's the same gate that <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="text-xaid-blue-strong underline underline-offset-2">prior authorization reform</Link> is trying to make faster. What reporting can do is control the <em>signal quality</em> of the reads that make it through.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A vague report — an incidental finding described without size, characterization, or a guideline-anchored recommendation, capped with "clinical correlation advised" — is how a marginal scan turns into a follow-up cascade. A <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">structured, comprehensive report</Link> that characterizes findings consistently and states clear, evidence-cited follow-up recommendations does the opposite: it reduces the ambiguity that manufactures downstream low-value imaging.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is the model xAID is built on. The AI produces a structured, guideline-aligned draft; xAID's in-house radiologist reviews every preliminary; and the report is delivered ready-to-sign so your reading radiologist signs the final. The goal isn't more reads — it's cleaner signal on each one, which is the reporting-side complement to the appropriateness work happening at the point of order. You can see the workflow in detail on <Link to="/how-ai-ct-reporting-works/" className="text-xaid-blue-strong underline underline-offset-2">how AI CT reporting works</Link>.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the study find about clinician knowledge and low-value imaging?',
                    a: 'A 2026 JAMA Internal Medicine study of nearly 900,000 Medicare beneficiaries cared for by 7,089 general internists found that patients of physicians in the top quartile of the ABIM Longitudinal Knowledge Assessment were about 4% less likely to receive low-value imaging (13.2% vs 13.8%) and nearly 8% less likely to receive any of 25 low-value services (28.6% vs 31%). Higher measured clinical knowledge correlated with more appropriate ordering.',
                  },
                  {
                    q: 'What is low-value imaging?',
                    a: 'Low-value imaging is a scan ordered when guidelines and evidence suggest it is unlikely to change management or benefit the patient — for example, routine imaging for uncomplicated low back pain or headache. It is distinct from overutilization by volume: the issue is appropriateness of the individual order, not the total number of scans. Low-value care overall is estimated to cost the U.S. health system roughly $100 billion a year.',
                  },
                  {
                    q: 'Does more clinical knowledge eliminate low-value imaging?',
                    a: 'No. The knowledge effect is real but modest — a few percentage points for imaging — and separate research shows education and clinical decision support alone have produced mixed or limited reductions. Ordering behavior is shaped by defensive medicine, patient expectations, time pressure, and habit as well as knowledge, so appropriate use is a system problem, not only an individual one.',
                  },
                  {
                    q: 'How does AI reporting relate to low-value imaging and appropriate use?',
                    a: "AI CT reporting does not decide whether a scan should be ordered — that is the referring clinician's call, guided by appropriateness criteria. Its role is on the reads that do happen: a structured, guideline-aligned, evidence-cited report with clear follow-up recommendations reduces the ambiguous incidental findings and vague 'clinical correlation advised' language that trigger downstream low-value follow-up imaging. At xAID, every report is radiologist-reviewed and delivered ready-to-sign, so your reading radiologist signs the final.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Vandergrift JL, Landon BE, Weng W, Gray BM. "Low-Value Services and Longitudinal Knowledge Assessment Performance," <em>JAMA Internal Medicine</em> (2026), <a href="https://doi.org/10.1001/jamainternmed.2026.2889" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi:10.1001/jamainternmed.2026.2889</a>, as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/docs-greater-clinical-knowledge-less-likely-order-low-value-imaging" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.news-medical.net/news/20260713/High-physician-knowledge-scores-linked-to-lower-healthcare-costs.aspx" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">News-Medical</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Cleaner signal on every read."
          sub="xAID delivers structured, guideline-aligned reports your radiologist signs — reducing the ambiguity that drives downstream follow-up imaging. Try it on 5 free studies."
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
              <Link to="/blog/overutilization-of-medical-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Fewer Imaging Gatekeepers, More Scans: The Capacity Squeeze</div>
              </Link>
              <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Prior Authorization Reform and Imaging Throughput</div>
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

export default LowValueImagingClinicianKnowledge;
