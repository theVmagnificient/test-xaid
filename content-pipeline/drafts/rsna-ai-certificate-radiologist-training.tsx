import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RsnaAiCertificateRadiologistTraining = () => {
  const post = {
    title: "RSNA's AI Certificate Just Got a Major Update. Here's Why Radiologist Training Is Becoming Infrastructure",
    dateIso: '2026-09-29',
    date: 'September 29, 2026',
    category: 'Education & Training',
    readingTime: 7,
    description: "RSNA overhauled its Imaging AI Foundational Certificate — new case content, updated pricing, four certificate tracks. A look at what the program covers, the evidence it works, and why formal radiologist training on AI is turning from optional CE into operational infrastructure.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>RSNA's AI Certificate Update: Radiologist Training | xAID</title>
        <meta name="description" content="RSNA's Imaging AI Certificate Program had a major update. A pilot study shows why radiologist training on AI is becoming operational infrastructure." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RSNA's AI Certificate Update: Radiologist Training | xAID" />
        <meta property="og:description" content="RSNA's Imaging AI Certificate Program had a major update. A pilot study shows why radiologist training on AI is becoming operational infrastructure." />
        <meta property="og:url" content="https://xaid.ai/blog/rsna-ai-certificate-radiologist-training" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RSNA's AI Certificate Update: Radiologist Training | xAID" />
        <meta name="twitter:description" content="RSNA's Imaging AI Certificate Program had a major update. A pilot study shows why radiologist training on AI is becoming operational infrastructure." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/rsna-ai-certificate-radiologist-training" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/rsna-ai-certificate-radiologist-training",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiologist training, RSNA AI certificate program, AI literacy radiology, radiologist AI education, reviewing AI radiology reports"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is RSNA's Imaging AI Certificate Program and what changed in the update?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RSNA's Imaging AI Certificate Program is a self-paced, on-demand training program with four tracks — Foundational, Advanced, Emergency, and Chest — each built from six online modules. In its latest update, the Foundational Certificate was revised to version 2.0 with new clinical use cases, updated case content, and revised pricing, reflecting how much AI use in radiology practice has changed since the original course launched in January 2022."
              }
            },
            {
              "@type": "Question",
              "name": "Does completing an RSNA AI certificate earn CME credit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. RSNA's FAQ page states that CME credit is not offered for the Foundational Certificate v2.0, Advanced, Emergency, or Chest certificate courses. Participants earn a certificate of completion rather than continuing medical education credit, and each of the six modules per track takes roughly three hours to complete."
              }
            },
            {
              "@type": "Question",
              "name": "Is there evidence that formal AI training actually improves radiologists' AI skills?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A pilot study published in Academic Radiology had 42 radiology residents across two residency programs complete the RSNA Imaging AI Foundational Certificate over four months. Mean knowledge-assessment scores rose from 37% before the course to 73% after it, a statistically significant improvement (p < 0.001), and 74% of residents said the course improved their familiarity with AI in radiology."
              }
            },
            {
              "@type": "Question",
              "name": "Why does formal AI training matter for radiologists who review AI-drafted reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As AI-assisted drafting spreads into daily reporting, radiologists increasingly review and correct an AI-generated draft rather than starting from a blank report — a distinct skill from dictating from scratch. Structured training in how imaging AI works, where it tends to fail, and how to evaluate its output gives radiologists a systematic basis for that review, rather than leaving it to ad hoc, on-the-job pattern recognition."
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
                Education &amp; Training
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              RSNA's AI certificate just got a major update.<br />
              <span className="text-white/60">Here's why radiologist training is becoming infrastructure.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A refreshed Foundational Certificate, four certificate tracks, and a pilot study showing knowledge scores nearly double after six modules. Formal AI training for radiologists is moving from optional CE to a standard part of how AI enters daily reporting.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '4', label: 'Certificate tracks', sub: 'Foundational, Advanced, Emergency, Chest' },
            { stat: '6', label: 'Modules per certificate', sub: '~3 hours each, self-paced' },
            { stat: '37% → 73%', label: 'Resident AI-knowledge score', sub: 'pre- vs post-course, pilot study' },
            { stat: '74%', label: 'Said the course improved AI familiarity', sub: '31 of 42 residents surveyed' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What changed in the update
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                <a href="https://radiologybusiness.com/topics/management/education-training/rsnas-ai-certificate-program-undergoes-major-update" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a> that the Radiological Society of North America (RSNA) has overhauled its Imaging AI Certificate Program, giving the Foundational Certificate a version-2.0 refresh. According to <a href="https://www.rsna.org/ai-certificate" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RSNA's program page</a>, the update brings new clinical use cases and "more actionable takeaways" to a curriculum that had not substantially changed since the course launched in <a href="https://www.rsna.org/news/2022/january/AI-Certificate-Program" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">January 2022</a>, along with revised pricing.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The Foundational Certificate is one of four tracks RSNA now offers under the same program: Foundational, Advanced (launched 2023), Emergency (launched January 2024), and Chest. Each is a self-paced, on-demand course with no prerequisites — a radiologist can start with any track, in any order.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Four tracks, six modules each
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                Every certificate in the program is built from six online modules, and RSNA's <a href="https://www.rsna.org/ai-certificate/faqs" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FAQ page</a> puts the typical time commitment at roughly three hours per module — about 18 hours to complete a track. Notably, none of the four tracks currently carries CME credit; participants earn a certificate of completion rather than continuing-education hours.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Certificate</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Focus</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { c: 'Foundational (v2.0)', f: 'AI fundamentals, evaluating tools, ethical/clinical data use', b: 'Radiologists at any career stage new to formal AI training' },
                      { c: 'Advanced', f: 'Model development, fairness evaluation, dataset pitfalls', b: 'Those wanting deeper technical grounding' },
                      { c: 'Emergency', f: 'AI in triage and rapid-turnaround ED workflows', b: 'Early-career radiologists and trainees in EM-heavy settings' },
                      { c: 'Chest', f: 'Workflow automation for high-volume chest imaging', b: 'Chest- and thoracic-heavy practices' },
                    ].map((row) => (
                      <tr key={row.c} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#0D0D0D] font-medium align-top">{row.c}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light align-top">{row.f}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light align-top">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Does structured AI training actually work?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's a fair question for any CE program, and this one has an early answer. A pilot study <a href="https://doi.org/10.1016/j.acra.2024.05.041" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">published in Academic Radiology</a> had 42 radiology residents across two residency programs complete the RSNA Imaging AI Foundational Certificate over four months. Mean knowledge-assessment scores rose from <strong>37%</strong> before the course to <strong>73%</strong> after it — a statistically significant improvement (p &lt; 0.001) — and <strong>74%</strong> of residents (31 of 42) agreed the course improved their familiarity with AI in radiology.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The study also found the gains held regardless of residency program, training year, or how familiar residents said they were with AI beforehand — suggesting the curriculum, not prior exposure, drove the improvement. That's a meaningfully different claim than "AI literacy comes with experience." It's evidence that a structured, six-module course measurably closes a knowledge gap that ad hoc exposure to AI tools on the job does not.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is infrastructure, not just CE
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RSNA revising a certificate program is, on its face, a routine curriculum update. But it lands at a moment when AI in radiology has shifted from a narrow detection tool bolted onto a workflow to something that increasingly drafts structured findings a radiologist then reviews. That shift changes what "AI literacy" needs to mean.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Reviewing an AI-generated draft is a different skill from evaluating a standalone AI alert or triage flag. It requires knowing where a given model class tends to fail — missed subtle findings, over-confident phrasing, mismatched laterality or measurements — and reading a draft with that failure pattern in mind rather than treating it as a neutral starting point. A resident who has never been taught how imaging AI is built, validated, or prone to fail is reviewing blind, relying on the same general vigilance they'd apply to any report rather than a targeted check.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A four-track, self-paced certificate program from the specialty's own professional society — revised regularly enough to warrant a "major update" headline four years after launch — is a signal that this training is being treated as durable infrastructure rather than a one-time onboarding step. As AI-drafted reporting becomes more common, the expectation is likely to move from "radiologists who happen to have taken a course" to "radiologists who are expected to have this training," the way PACS proficiency or structured-reporting fluency became assumed baseline skills rather than electives.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this meets the report-review workflow
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is exactly the gap AI-assisted CT reporting is built around: the AI produces a structured draft, xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign — the client's reading radiologist stays accountable for the final call. Training like RSNA's certificate program is what equips that reviewing radiologist, at every point in the chain, to evaluate an AI draft with the same rigor a well-run vendor's own internal QA process demands. Formal AI education and a review-and-sign workflow are two sides of the same requirement: a human who understands the tool stays in charge of the output.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is RSNA\'s Imaging AI Certificate Program and what changed in the update?',
                    a: "RSNA's Imaging AI Certificate Program is a self-paced, on-demand training program with four tracks — Foundational, Advanced, Emergency, and Chest — each built from six online modules. In its latest update, the Foundational Certificate was revised to version 2.0 with new clinical use cases, updated case content, and revised pricing, reflecting how much AI use in radiology practice has changed since the original course launched in January 2022.",
                  },
                  {
                    q: 'Does completing an RSNA AI certificate earn CME credit?',
                    a: 'No. RSNA\'s FAQ page states that CME credit is not offered for the Foundational Certificate v2.0, Advanced, Emergency, or Chest certificate courses. Participants earn a certificate of completion rather than continuing medical education credit, and each of the six modules per track takes roughly three hours to complete.',
                  },
                  {
                    q: 'Is there evidence that formal AI training actually improves radiologists\' AI skills?',
                    a: 'Yes. A pilot study published in Academic Radiology had 42 radiology residents across two residency programs complete the RSNA Imaging AI Foundational Certificate over four months. Mean knowledge-assessment scores rose from 37% before the course to 73% after it, a statistically significant improvement (p < 0.001), and 74% of residents said the course improved their familiarity with AI in radiology.',
                  },
                  {
                    q: 'Why does formal AI training matter for radiologists who review AI-drafted reports?',
                    a: 'As AI-assisted drafting spreads into daily reporting, radiologists increasingly review and correct an AI-generated draft rather than starting from a blank report — a distinct skill from dictating from scratch. Structured training in how imaging AI works, where it tends to fail, and how to evaluate its output gives radiologists a systematic basis for that review, rather than leaving it to ad hoc, on-the-job pattern recognition.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/management/education-training/rsnas-ai-certificate-program-undergoes-major-update" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; <a href="https://www.rsna.org/ai-certificate" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RSNA Imaging AI Certificate Program</a> and <a href="https://www.rsna.org/ai-certificate/faqs" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">program FAQs</a>; pilot study in <a href="https://doi.org/10.1016/j.acra.2024.05.041" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Academic Radiology (2024)</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI drafts. A trained radiologist signs."
          sub="Structured AI training is what makes a review-and-sign workflow work. See how xAID's in-house radiologist review turns AI drafts into ready-to-sign reports — try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-quality-assurance/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Can an LLM Catch Radiology QC Errors? New Study</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: What Chest X-ray Studies Show About Draft-Then-Sign</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RsnaAiCertificateRadiologistTraining;
