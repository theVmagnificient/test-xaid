import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaAiRadiologyReportEvaluation = () => {
  const post = {
    title: 'The FDA Is Funding a Way to Grade AI-Written Radiology Reports',
    dateIso: '2026-09-21',
    date: 'September 21, 2026',
    category: 'Regulatory & Compliance',
    readingTime: 7,
    description: "The FDA awarded a $1.29M contract to build an 'LLM-as-a-jury' method for grading AI-generated radiology reports at scale. Here's what the evaluation-and-audit-trail trend means for anyone vetting an AI-report vendor.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA Funds AI Report-Grading Method | xAID</title>
        <meta name="description" content="The FDA is funding an 'LLM-as-a-jury' method to grade AI-generated radiology reports. What the $1.29M contract signals for AI-report vendor diligence." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA Funds AI Report-Grading Method | xAID" />
        <meta property="og:description" content="The FDA is funding an 'LLM-as-a-jury' method to grade AI-generated radiology reports. What the $1.29M contract signals for AI-report vendor diligence." />
        <meta property="og:url" content="https://xaid.ai/blog/fda-ai-radiology-report-evaluation" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA Funds AI Report-Grading Method | xAID" />
        <meta name="twitter:description" content="The FDA is funding an 'LLM-as-a-jury' method to grade AI-generated radiology reports. What the $1.29M contract signals for AI-report vendor diligence." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-ai-radiology-report-evaluation" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-ai-radiology-report-evaluation",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "FDA AI radiology report evaluation, LLM as a jury radiology, AI generated radiology report grading, radiology AI vendor diligence, generative AI radiology report oversight"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA fund to evaluate AI-generated radiology reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In September 2026, the FDA awarded a $1.29 million, 18-month contract (effective June 22, 2026) to Cognita Imaging, a subsidiary of Radiology Partners' Mosaic Clinical Technologies, to build and validate an 'LLM-as-a-jury' framework for grading AI-generated radiology reports. The project is titled 'Virtual Subject Matter Expert Agents for Radiology Report Evaluation.'"
              }
            },
            {
              "@type": "Question",
              "name": "What is the 'LLM-as-a-jury' method?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It's an evaluation approach that runs an ensemble of several distinct large language models against the same report and aggregates their judgments, rather than relying on one model or a small human reader panel to grade it. When the models disagree on something clinically significant, a radiologist reviews the case to determine whether the error originated in the report itself (AI-generated or human-written) or in the LLM grading."
              }
            },
            {
              "@type": "Question",
              "name": "Why can't traditional human reader studies fully validate generative AI radiology reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional reader studies typically evaluate a few hundred cases read by a handful of radiologists — a scale that struggles to capture the sheer range of findings a report-generating model can produce, let alone rare edge cases, subtle equipment differences, or regional workflow variation. The FDA-funded framework will test performance across roughly 1 million patient exams and multiple variables — patient demographics, care setting, imaging equipment, and disease type — to try to close that gap."
              }
            },
            {
              "@type": "Question",
              "name": "What should imaging providers ask an AI report-drafting vendor because of this?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask how the vendor measures report-level accuracy (not just single-finding sensitivity/specificity), whether it tracks hallucination and omission rates, whether performance is broken out by patient subgroup and modality rather than reported as one aggregate number, and who reviews a report before it reaches a signing radiologist. A vendor that can't answer these is behind where FDA-funded research says evaluation is heading."
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
                Regulatory &amp; Compliance
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              The FDA is funding a way to<br />
              <span className="text-white/60">grade AI-written radiology reports</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new federal contract puts real money behind a question every AI-report buyer should already be asking: how do you actually score a generative model's report, not just one flagged finding?
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$1.29M', label: 'FDA evaluation contract', sub: 'awarded to Cognita Imaging' },
            { stat: '1M+', label: 'Patient exams tested', sub: 'diverse U.S. cohort' },
            { stat: '18 mo', label: 'Contract term', sub: 'effective June 22, 2026' },
            { stat: '4', label: 'Variables tested', sub: 'patient group, setting, equipment, disease' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA actually funded
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In mid-September 2026, the FDA awarded a <strong>$1.29 million</strong>, 18-month research contract — effective June 22, 2026 — to Cognita Imaging, a subsidiary of Radiology Partners' Mosaic Clinical Technologies, according to <a href="https://www.medtechdive.com/news/cognita-imaging-wins-fda-contract-to-test-llms-in-evaluating-radiology-ai/830788/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15835093/cognita-wins-129m-fda-contract-to-evaluate-radiology-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. The project, titled "Virtual Subject Matter Expert Agents for Radiology Report Evaluation," is a regulatory-science research contract, not a product clearance — it funds a method for grading AI-generated reports, not a specific AI product.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The method is being called <strong>"LLM-as-a-jury."</strong> Instead of relying on one model — or a small human reader panel — to judge whether a report is accurate, the framework runs an ensemble of several distinct large language models against the same report and aggregates their judgments into a consensus score, reducing the risk that a single model's blind spot becomes the answer. When the LLM panel disagrees on something clinically significant, a radiologist reviews the case to determine whether the error sits in the report itself (AI-generated or human-written) or in the LLM grading.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Once validated, the framework will be applied to roughly <strong>1 million patient exams</strong> from a diverse U.S. cohort, measuring performance across patient demographics, care settings, imaging equipment, and disease types — including rarer findings. Deliverables back to the FDA include open software code, benchmarking guidelines for building multi-model LLM juries, and comparative analyses meant to inform both premarket validation and post-market monitoring of generative radiology AI.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why grading a full report is a different problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most existing radiology AI is narrow: a nodule detector, a fracture flag, a stroke-triage alert. Evaluating it is comparatively simple — sensitivity and specificity against a ground-truth label for one task. A model that drafts a full radiology report is a different evaluation problem entirely, because it makes dozens of judgment calls per study across the whole differential.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Cognita co-founder and principal investigator Akshay Chaudhari, an associate professor of radiology and biomedical data science at Stanford, framed the gap this way to <a href="https://www.medtechdive.com/news/cognita-imaging-wins-fda-contract-to-test-llms-in-evaluating-radiology-ai/830788/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>: <em>"So, how do you meaningfully evaluate these hundreds of findings?"</em> Traditional reader studies — a few hundred cases, read by a handful of radiologists — were built for single-task tools. They don't scale to catching rare edge cases, subtle equipment-specific artifacts, or regional workflow variation in a model that's drafting an entire report. That's the specific gap the FDA-funded framework is trying to close, and it's why the 1-million-exam scale matters more than the LLM-jury mechanism itself.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two ways to evaluate an AI-generated report
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[15px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Traditional reader study</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">LLM-as-a-jury framework</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#666] font-light">Typical scale</td>
                      <td className="py-3 pr-4 text-[#666] font-light">Hundreds of cases</td>
                      <td className="py-3 text-[#666] font-light">Up to ~1 million exams</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#666] font-light">Subgroup coverage</td>
                      <td className="py-3 pr-4 text-[#666] font-light">Limited by reader time</td>
                      <td className="py-3 text-[#666] font-light">Demographics, setting, equipment, disease</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#666] font-light">Rare / edge cases</td>
                      <td className="py-3 pr-4 text-[#666] font-light">Often under-sampled</td>
                      <td className="py-3 text-[#666] font-light">Explicit target of the study design</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#666] font-light">Disagreement handling</td>
                      <td className="py-3 pr-4 text-[#666] font-light">Consensus among human readers</td>
                      <td className="py-3 text-[#666] font-light">Radiologist adjudicates clinically significant LLM-panel splits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Neither approach replaces the other outright — the FDA contract explicitly positions the LLM-jury method to inform both premarket validation and post-market monitoring, alongside, not instead of, radiologist review of the cases that matter.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means if you're evaluating an AI-report vendor
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A federal research contract doesn't hand every AI-report vendor a rulebook overnight. But it's a clear signal of where the bar is moving: from "we ran a reader study" to "we can show how we measure accuracy, at scale, broken down by who the patient is and what equipment produced the image." A handful of practical questions now belong in any vendor evaluation:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'How is report-level accuracy measured, not just single findings?',
                    desc: 'A report can be correct on the primary finding and still miss a clinically relevant secondary observation. Ask whether accuracy is scored at the whole-report level, and whether hallucination and omission rates are tracked separately.',
                  },
                  {
                    title: 'Is performance broken out by subgroup, or reported as one aggregate number?',
                    desc: 'The FDA-funded study explicitly tests across patient demographics, care settings, imaging equipment, and disease types because aggregate accuracy can hide gaps in any one of them. A vendor that can only show a single top-line number is offering less than what regulators are now funding research to produce.',
                  },
                  {
                    title: 'Who reviews the report before a radiologist signs it?',
                    desc: 'Automated grading — whether a single model, an LLM jury, or a QA rules engine — is a useful check, but it is not the same as a qualified radiologist reviewing the draft. Ask what human review happens between the AI draft and the report reaching the signing radiologist, and how discrepancies get resolved.',
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
                The evaluation gap this FDA contract is trying to close — a generative model producing a full report versus a narrow tool flagging one finding — is exactly why xAID does not treat an AI-drafted report as a finished product. Every preliminary is reviewed in-house by a European radiologist before it ever reaches a client, so a second, qualified clinical read sits between the AI draft and delivery, and the report arrives ready-to-sign for the client's reading radiologist. Report-level QA and audit trails are what regulators and buyers are converging on as the baseline for generative radiology AI — not a differentiator to add later.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the FDA fund to evaluate AI-generated radiology reports?',
                    a: "In September 2026, the FDA awarded a $1.29 million, 18-month contract (effective June 22, 2026) to Cognita Imaging, a subsidiary of Radiology Partners' Mosaic Clinical Technologies, to build and validate an 'LLM-as-a-jury' framework for grading AI-generated radiology reports. The project is titled 'Virtual Subject Matter Expert Agents for Radiology Report Evaluation.'",
                  },
                  {
                    q: "What is the 'LLM-as-a-jury' method?",
                    a: "It's an evaluation approach that runs an ensemble of several distinct large language models against the same report and aggregates their judgments, rather than relying on one model or a small human reader panel to grade it. When the models disagree on something clinically significant, a radiologist reviews the case to determine whether the error originated in the report itself (AI-generated or human-written) or in the LLM grading.",
                  },
                  {
                    q: 'Why can\'t traditional human reader studies fully validate generative AI radiology reports?',
                    a: "Traditional reader studies typically evaluate a few hundred cases read by a handful of radiologists — a scale that struggles to capture the sheer range of findings a report-generating model can produce, let alone rare edge cases, subtle equipment differences, or regional workflow variation. The FDA-funded framework will test performance across roughly 1 million patient exams and multiple variables — patient demographics, care setting, imaging equipment, and disease type — to try to close that gap.",
                  },
                  {
                    q: 'What should imaging providers ask an AI report-drafting vendor because of this?',
                    a: "Ask how the vendor measures report-level accuracy (not just single-finding sensitivity/specificity), whether it tracks hallucination and omission rates, whether performance is broken out by patient subgroup and modality rather than reported as one aggregate number, and who reviews a report before it reaches a signing radiologist. A vendor that can't answer these is behind where FDA-funded research says evaluation is heading.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/cognita-imaging-wins-fda-contract-to-test-llms-in-evaluating-radiology-ai/830788/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15835093/cognita-wins-129m-fda-contract-to-evaluate-radiology-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> reporting on Cognita Imaging's FDA contract (September 2026). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A radiologist reviews every AI draft. Before it reaches you."
          sub="See how xAID's ready-to-sign reports work — try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-quality-assurance/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Quality Assurance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Can an LLM Catch Radiology Report Errors Your QC Team Misses?</div>
              </Link>
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Vendor Evaluation</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">ECRI's New AI Error Tracker Changes the Vendor Evaluation Checklist</div>
              </Link>
              <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Patients Be Told When AI Reads Their Scan?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaAiRadiologyReportEvaluation;
