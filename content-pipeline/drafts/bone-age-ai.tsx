import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const BoneAgeAi = () => {
  const post = {
    title: 'FDA Clears a Bone Age AI Tool: What It Shows About Clearing Narrow Radiology AI',
    dateIso: '2026-10-05',
    date: 'October 5, 2026',
    category: 'Regulatory & Policy',
    readingTime: 7,
    description: "The FDA cleared BoneXpert, Visiana's automated bone-age tool, backed by a 1,285-image, five-site study. Here's what a clean, narrow-indication 510(k) actually requires — and why it's a different bar than broader CT reporting AI.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA Clears Bone Age AI (BoneXpert): What It Took | xAID</title>
        <meta name="description" content="FDA cleared Visiana's BoneXpert bone-age AI via 510(k), backed by a 1,285-image study. What this narrow clearance shows imaging-AI buyers about today's bar." />
        <link rel="canonical" href="https://xaid.ai/blog/bone-age-ai/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA Clears Bone Age AI (BoneXpert): What It Took | xAID" />
        <meta property="og:description" content="FDA cleared Visiana's BoneXpert bone-age AI via 510(k), backed by a 1,285-image study. What this narrow clearance shows imaging-AI buyers about today's bar." />
        <meta property="og:url" content="https://xaid.ai/blog/bone-age-ai" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA Clears Bone Age AI (BoneXpert): What It Took | xAID" />
        <meta name="twitter:description" content="FDA cleared Visiana's BoneXpert bone-age AI via 510(k), backed by a 1,285-image study. What this narrow clearance shows imaging-AI buyers about today's bar." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/bone-age-ai" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/bone-age-ai",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "bone age AI, BoneXpert FDA clearance, pediatric bone age assessment AI, FDA 510k radiology AI, narrow AI radiology clearance"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA just clear for bone age AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA granted 510(k) clearance (K262390) to BoneXpert, software made by the Danish company Visiana that uses machine learning to estimate skeletal bone age from a hand radiograph. It is cleared to support pediatric radiologists assessing bone age in patients 2 to 21 years old using the Greulich-Pyle method, and Visiana announced the clearance on September 30, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "What evidence supported the bone age AI clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The clearance was backed by a multicenter study across five U.S. academic sites (including Stanford, Boston Children's, Cincinnati Children's, Children's Healthcare of Atlanta, and Yale) covering 1,285 hand radiographs, each independently read by four pediatric radiologists, published in Pediatric Radiology. Using the average of three of the four manual readings as a reference standard, the study compared BoneXpert's output and the fourth radiologist's reading against that same reference."
              }
            },
            {
              "@type": "Question",
              "name": "Does bone age AI replace the radiologist's reading?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. BoneXpert returns an annotated image showing the contours and individual estimated age of each bone it scored, and it is explicitly described as a tool to support, not replace, the pediatric radiologist's final assessment. It also screens input images and withholds a result when a radiograph falls outside its validated scope rather than guessing."
              }
            },
            {
              "@type": "Question",
              "name": "Why does a narrow clearance like bone age AI matter for broader radiology AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bone age scoring is a single, well-defined measurement task on one anatomic region and modality, which makes it comparatively straightforward to validate against a clear reference standard. Broader AI, such as full-study CT reporting across multiple findings, has a much larger validation burden and typically needs a predetermined change control plan to manage updates post-clearance — a bar FDA's FY2027 guidance priorities are specifically trying to standardize."
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
                Regulatory &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              FDA clears a bone age AI tool:<br />
              <span className="text-white/60">what it shows about clearing narrow radiology AI</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 510(k) clearance for automated pediatric bone-age scoring is a small, specific story. It's also a useful, concrete answer to a question imaging-AI buyers keep asking in the abstract: what does the FDA actually require to clear a single-task radiology AI tool today?
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,285', label: 'Hand radiographs in the validation study', sub: 'across 5 U.S. academic sites' },
            { stat: '4', label: 'Independent pediatric radiologist readers', sub: 'per image in the study' },
            { stat: '4.8 mo.', label: "BoneXpert's mean absolute error", sub: 'vs. 6.5 months for a single human reader' },
            { stat: '2–21', label: 'Cleared age range (years)', sub: 'Greulich-Pyle method, hand X-rays' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What got cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 30, 2026, the Danish company Visiana announced that the FDA had granted 510(k) clearance (K262390) for <strong>BoneXpert</strong>, software that uses machine learning to determine skeletal bone age from a hand radiograph, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/diagnostic-imaging/fda-clears-ai-tool-pediatric-bone-age-assessments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. BoneXpert is cleared to support pediatric radiologists assessing bone age in patients <strong>2 to 21 years old</strong>, using the long-standing <strong>Greulich-Pyle</strong> reference-atlas method.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Bone age assessment is a routine, well-defined measurement used to evaluate children with growth and pubertal disorders: a radiologist compares a hand-and-wrist X-ray against a reference atlas to estimate skeletal maturity relative to chronological age. Manual readings are known to vary meaningfully from one reader to the next — exactly the kind of reader-variability problem a narrow, well-validated AI tool is suited to reduce.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                BoneXpert doesn't just return a number. It sends an annotated image back into the patient's study in PACS, showing the contours of each bone it analyzed and the individual bone age it assigned to each one, so the pediatric radiologist can see how the result was reached rather than trust a black box. The software also accepts radiographs of either hand, checks each image against its validated scope, and withholds a result instead of guessing when an image falls outside that scope. The radiologist remains responsible for the final assessment.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The evidence behind the clearance
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology Business reports the clearance was supported by a multicenter study at five U.S. clinical sites. The site list, full cohort size, and reader-design details come from the companion validation paper, <a href="https://doi.org/10.1007/s00247-026-06758-0" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Quantifying human variability in pediatric bone age assessment: a multi-institutional multi-reader study and benchmark for AI evaluation"</a>, published in <em>Pediatric Radiology</em>: the five sites were Stanford, Boston Children's Hospital, Cincinnati Children's Hospital, Children's Healthcare of Atlanta, and Yale, covering <strong>1,285</strong> hand-and-wrist radiographs, each read independently by <strong>four</strong> pediatric radiologists. The reference standard for each image was the average of three of the four manual readings; BoneXpert's output and the fourth (held-out) radiologist's reading were each then compared against that same reference.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That same cohort was used to measure how much human readers disagree with each other and how automated scoring compares to that disagreement. Two findings stand out:
              </p>
              <ul className="list-disc pl-5 text-[#444] text-[15px] leading-[1.65] font-light mb-8 space-y-2">
                <li>Human reader disagreement was itself substantial — a standard deviation of <strong>8.7 months</strong> across four radiologists for children under 12, narrowing to about <strong>4.2 months</strong> for older patients.</li>
                <li>Against the reference standard, a single human reader's mean absolute error was <strong>6.5 months</strong>, versus <strong>4.8 months</strong> for BoneXpert; "catastrophic" outlier readings (off by more than 1.8 years) occurred in <strong>3.4%</strong> of single human readings versus <strong>0.7%</strong> for BoneXpert.</li>
              </ul>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In other words, the clearance wasn't argued on the premise that AI is flawless — it was argued against a reference standard built from multiple human readers, on a task where human-to-human disagreement is already well documented. That's a meaningfully different, narrower evidentiary bar than proving an AI system is correct in some absolute sense.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Bone age AI vs. broader reporting-assist AI: what FDA actually asks for
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Narrow task (bone age)</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Broader reporting-assist / CT AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Output being measured</td>
                      <td className="py-3 pr-4 text-[#444] font-light">A single quantitative score (bone age) against a defined atlas method</td>
                      <td className="py-3 text-[#444] font-light">Multiple findings across an entire study, often with free-text report language</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Reference standard</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Averaged multi-reader consensus on one well-established atlas</td>
                      <td className="py-3 text-[#444] font-light">Harder to define consistently across findings, modalities, and institutions</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Validation scale seen here</td>
                      <td className="py-3 pr-4 text-[#444] font-light">1,285 images, 5 sites, 4 readers per image</td>
                      <td className="py-3 text-[#444] font-light">Typically larger, multi-site, multi-reader cohorts per finding category</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Post-clearance change management</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Single-version 510(k); not reported as including a PCCP</td>
                      <td className="py-3 text-[#444] font-light">Increasingly expected to include a predetermined change control plan (PCCP) for model updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the same regulatory terrain covered in FDA's <Link to="/blog/fda-ai-guidance-priorities-2027/" className="text-xaid-blue-strong underline underline-offset-2">FY2027 guidance priorities</Link>: the agency's near-term focus is less about whether a narrow AI tool like BoneXpert can clear — that pathway is well worn — and more about standardizing how broader AI-enabled devices document and manage changes to the underlying model across their lifecycle after clearance.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a useful case study for imaging-AI buyers
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                BoneXpert's clearance is a clean illustration of what "FDA-cleared radiology AI" means in its simplest, most defensible form: a single measurement task, a clear reference method, a multi-site/multi-reader validation cohort, and a tool designed to flag its own limits rather than output a number on an image it wasn't built to handle. Buyers evaluating any radiology AI — bone age or otherwise — can use the same checklist:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'What exactly is being measured, against what reference?',
                    desc: 'BoneXpert was validated against an averaged multi-reader consensus on an established atlas method — not a vague claim of "accuracy." Ask any vendor what their reference standard actually is.',
                  },
                  {
                    title: 'Does the tool know what it doesn\'t know?',
                    desc: "BoneXpert screens input images and withholds a result outside its validated scope instead of forcing an answer. That self-limiting behavior is a meaningful signal of validation discipline, not a limitation to be worked around.",
                  },
                  {
                    title: 'How big and how independent was the validation cohort?',
                    desc: 'Five sites and four independent readers per image is substantial for a single-task tool. For broader, multi-finding reporting AI, the comparable bar is larger — and worth asking about directly.',
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
                Bone age AI and full-study CT reporting AI sit at opposite ends of the same spectrum: a single quantitative score on one body part versus a comprehensive draft across an entire exam's findings. AI CT reporting built on <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models</Link> takes on the harder end of that spectrum — which is exactly why xAID's in-house radiologist reviews every preliminary before it reaches the client, delivered ready-to-sign for the reading radiologist. As the BoneXpert case shows, a tight validation story works for a narrow task; broader reporting AI needs that same discipline plus a human radiologist in the loop on every study.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the FDA just clear for bone age AI?',
                    a: 'The FDA granted 510(k) clearance (K262390) to BoneXpert, software made by the Danish company Visiana that uses machine learning to estimate skeletal bone age from a hand radiograph. It is cleared to support pediatric radiologists assessing bone age in patients 2 to 21 years old using the Greulich-Pyle method, and Visiana announced the clearance on September 30, 2026.',
                  },
                  {
                    q: 'What evidence supported the bone age AI clearance?',
                    a: 'The clearance was backed by a multicenter study across five U.S. academic sites (including Stanford, Boston Children\'s, Cincinnati Children\'s, Children\'s Healthcare of Atlanta, and Yale) covering 1,285 hand radiographs, each independently read by four pediatric radiologists, published in Pediatric Radiology. Using the average of three of the four manual readings as a reference standard, the study compared BoneXpert\'s output and the fourth radiologist\'s reading against that same reference.',
                  },
                  {
                    q: 'Does bone age AI replace the radiologist\'s reading?',
                    a: "No. BoneXpert returns an annotated image showing the contours and individual estimated age of each bone it scored, and it is explicitly described as a tool to support, not replace, the pediatric radiologist's final assessment. It also screens input images and withholds a result when a radiograph falls outside its validated scope rather than guessing.",
                  },
                  {
                    q: 'Why does a narrow clearance like bone age AI matter for broader radiology AI?',
                    a: "Bone age scoring is a single, well-defined measurement task on one anatomic region and modality, which makes it comparatively straightforward to validate against a clear reference standard. Broader AI, such as full-study CT reporting across multiple findings, has a much larger validation burden and typically needs a predetermined change control plan to manage updates post-clearance — a bar FDA's FY2027 guidance priorities are specifically trying to standardize.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/medical-imaging/diagnostic-imaging/fda-clears-ai-tool-pediatric-bone-age-assessments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "FDA clears AI tool for pediatric bone age assessments"; FDA 510(k) database, <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K262390" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">K262390</a>; "Quantifying human variability in pediatric bone age assessment: a multi-institutional multi-reader study and benchmark for AI evaluation," <em>Pediatric Radiology</em> (2026), <a href="https://doi.org/10.1007/s00247-026-06758-0" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s00247-026-06758-0</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A tight validation story, built for the harder exam."
          sub="xAID pairs foundation-model CT reporting with in-house radiologist review on every preliminary — ready-to-sign, every time. Try it on 5 free studies."
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
              <Link to="/blog/fda-ai-guidance-priorities-2027/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">FDA's FY2027 AI Guidance Priorities: What Imaging Buyers Should Watch</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI Vendor Evaluation Checklist</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BoneAgeAi;
