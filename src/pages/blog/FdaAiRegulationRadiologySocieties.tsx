import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaAiRegulationRadiologySocieties = () => {
  const post = {
    title: "What RSNA Told the FDA About Regulating Generative AI — A Buyer's Reading",
    dateIso: '2026-10-23',
    date: 'October 23, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "RSNA and ACR filed formal comments on FDA's generative-AI discussion paper, calling for patient safety as the organizing principle and enforceable safeguards. Here's what that means for picking an AI reporting vendor before the rules are final.",
  };

  const canonical = 'https://xaid.ai/blog/fda-ai-regulation-radiology-societies/';

  return (
    <>
      <Helmet defer={false}>
        <title>What RSNA Told FDA About AI Regulation | xAID</title>
        <meta name="description" content="RSNA and ACR filed formal FDA comments on regulating generative AI, urging enforceable safeguards. What that means for AI vendor diligence today." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What RSNA Told FDA About AI Regulation | xAID" />
        <meta property="og:description" content="RSNA and ACR filed formal FDA comments on regulating generative AI, urging enforceable safeguards. What that means for AI vendor diligence today." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What RSNA Told FDA About AI Regulation | xAID" />
        <meta name="twitter:description" content="RSNA and ACR filed formal FDA comments on regulating generative AI, urging enforceable safeguards. What that means for AI vendor diligence today." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": canonical,
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fda ai regulation, rsna fda comments, generative ai medical devices, radiology ai regulation, ai reporting vendor diligence"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did RSNA tell the FDA about regulating generative AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In comments submitted October 19, 2026 on FDA's generative-AI discussion paper, RSNA wrote that 'patient safety should remain the central organizing principle, and regulatory flexibility should be paired with clear, enforceable safeguards that promote transparency, accountability, clinical validation, and continuous real-world monitoring.' RSNA also argued that generative AI models can evolve after deployment in ways a one-time premarket review cannot address, that device manufacturers — not radiologists — must remain accountable for safety and effectiveness, and that any changes to a model or its configuration should be communicated promptly and in detail."
              }
            },
            {
              "@type": "Question",
              "name": "What did the American College of Radiology recommend to the FDA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ACR urged FDA to regulate the complete clinical function of a generative AI tool and the risk it carries, not just the narrow feature named in its clearance. It asked the agency to let the technology keep evolving while balancing premarket flexibility with real-world postmarket monitoring, and to 'measure the failures that matter clinically' rather than relying only on technical accuracy metrics. ACR said it welcomes continued partnership with FDA as the framework develops."
              }
            },
            {
              "@type": "Question",
              "name": "Is FDA's generative AI discussion paper an actual regulation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The paper, 'Considerations for the Regulation of Generative AI-Enabled Medical Devices,' was issued August 18, 2026 by FDA's Digital Health Center of Excellence under docket FDA-2026-N-7874, with public comment closing October 19, 2026. FDA has described it explicitly as a discussion paper meant to prompt stakeholder input, not draft guidance — it sets no binding requirements, and there is no published timeline for when, or whether, it becomes enforceable policy."
              }
            },
            {
              "@type": "Question",
              "name": "Should an imaging center wait for final FDA rules before adopting AI reporting tools?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not necessarily. The safeguards RSNA and ACR are asking FDA to eventually require — documented clinical validation, post-deployment performance monitoring, prompt disclosure of model changes, and clear accountability for a flawed output — are reasonable due-diligence questions a buyer can put to any AI-reporting vendor today, regardless of how long rulemaking takes. Waiting for a final rule delays those questions; it doesn't answer them."
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
                Market &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              RSNA and ACR told FDA how to regulate generative AI.<br />
              <span className="text-white/60">Here's what it means for buyers, now.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Two of radiology's largest professional societies filed formal comments on FDA's generative-AI discussion paper, both centered on patient safety and enforceable safeguards. The final rule is still unwritten — but the safeguards they're asking for already describe what a buyer should be checking for in an AI reporting vendor today.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Aug 18, 2026', label: 'FDA discussion paper issued', sub: 'on genAI-enabled devices' },
            { stat: 'Oct 19, 2026', label: 'Public comment deadline', sub: 'docket FDA-2026-N-7874' },
            { stat: 'RSNA + ACR', label: 'Radiology societies responded', sub: 'with formal comments' },
            { stat: '0', label: 'Binding rules issued so far', sub: 'still just a discussion paper' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually happened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 18, 2026, FDA's Digital Health Center of Excellence, part of the Center for Devices and Radiological Health, issued a <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/considerations-regulation-generative-ai-enabled-medical-devices-discussion-paper-and-request" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">discussion paper</a> titled "Considerations for the Regulation of Generative AI-Enabled Medical Devices," opened under docket <a href="https://www.regulations.gov/docket/FDA-2026-N-7874/comments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA-2026-N-7874</a>. It is explicitly framed as a discussion paper, not draft guidance: it sets no current regulatory expectations, and its purpose is to surface stakeholder input on risk assessment, premarket evaluation, postmarket monitoring, and considerations specific to foundation models and agentic AI systems. The public comment window closed October 19, 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                As reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-societies-weigh-fdas-push-regulate-generative-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, two of the field's largest professional societies — the Radiological Society of North America (RSNA) and the American College of Radiology (ACR) — filed comments by that deadline. Their input matters for a different reason than the paper itself: it's the clinical community that will be expected to work inside whatever framework eventually results, and their asks preview what "good" is likely to mean in practice long before any rule is final.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What RSNA told the FDA
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RSNA's comments, submitted on the October 19 deadline, set the tone plainly: "patient safety should remain the central organizing principle, and regulatory flexibility should be paired with clear, enforceable safeguards that promote transparency, accountability, clinical validation, and continuous real-world monitoring," as quoted by <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-societies-weigh-fdas-push-regulate-generative-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Three specific points stand out in RSNA's letter:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Models change after they ship',
                    desc: "RSNA argued that generative AI models have the potential to evolve after deployment, and that the resulting risks \"cannot be addressed\" through a one-time premarket review alone. It wants regulators to develop a plan for continuously monitoring deployed genAI products — covering model performance, human-AI interaction, workflow effects, and appropriate use.",
                  },
                  {
                    title: 'Accountability sits with the manufacturer',
                    desc: 'RSNA holds that AI manufacturers, not radiologists, must remain accountable for a device\'s safety and effectiveness — a direct statement about where liability for a flawed output should land as these tools scale.',
                  },
                  {
                    title: 'Model changes need to be disclosed, fast',
                    desc: 'The society wants the regulatory process to require timely, detailed communication whenever a generative AI model or its system configuration changes — so a clinical user isn\'t the last to know the tool behind their reports was updated.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What ACR told the FDA
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ACR's comments, filed by the same deadline, pushed on a related but distinct point: regulate the whole clinical function of a tool, not just the narrow feature named on its label. Per <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-societies-weigh-fdas-push-regulate-generative-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>'s coverage, ACR urged FDA to regulate the complete clinical function of an AI tool and any associated risk, to let the technology continue to evolve rather than freezing it at clearance, to balance premarket flexibility with real-world performance monitoring, and to "measure the failures that matter clinically" — not just technical accuracy on a benchmark. ACR said it welcomes continued partnership with FDA and the radiology community as the framework develops.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read side by side, the two letters converge on the same underlying worry: that a generative AI tool cleared once, against a narrow test set, can keep changing in ways that matter clinically — and that premarket review alone can't catch that drift. Both societies want the regulatory system built around continuous, real-world accountability rather than a single pass/fail gate.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The buyer's version of these asks
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                None of this is binding yet, and it may be years before it is. But an imaging center evaluating an AI reporting vendor doesn't have to wait for a final rule to apply the same logic RSNA and ACR just put in writing. Each safeguard they asked FDA to eventually require has a direct, askable equivalent in a vendor conversation today.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">What the societies asked FDA to require</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">What to ask a vendor today</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        ask: 'Enforceable safeguards for transparency, accountability, and clinical validation (RSNA)',
                        buyer: 'Ask for the validation evidence behind the product — and whether it was tested against outcomes, not just internal benchmarks.',
                      },
                      {
                        ask: "Risk from models that evolve post-deployment \"cannot be addressed\" by one-time premarket review (RSNA)",
                        buyer: 'Ask how often the underlying model changes, and whether you are notified before a change reaches your reports.',
                      },
                      {
                        ask: 'Manufacturers, not radiologists, remain accountable for safety and effectiveness (RSNA)',
                        buyer: 'Check what the contract actually says about liability for a flawed AI output.',
                      },
                      {
                        ask: 'Regulate the complete clinical function of a tool and its full risk, not just the labeled feature (ACR)',
                        buyer: 'Ask what the tool actually touches across the reporting workflow — not only what its clearance language covers.',
                      },
                      {
                        ask: '"Measure the failures that matter clinically," balanced against real-world monitoring (ACR)',
                        buyer: 'Ask for ongoing, real-world performance monitoring after go-live — not a one-time accuracy number from launch.',
                      },
                    ].map((row) => (
                      <tr key={row.ask} className="border-b border-gray-100">
                        <td className="text-[#444] text-[14px] leading-[1.6] font-light py-3 pr-4 align-top">{row.ask}</td>
                        <td className="text-[#444] text-[14px] leading-[1.6] font-light py-3 align-top">{row.buyer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The point isn't that these questions are new. It's that they now carry the weight of formal professional-society input on the exact rulemaking that will eventually govern this category — which makes them a reasonable baseline for vendor diligence rather than a nice-to-have.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The workflow both societies are describing — a tool that assists, with a human clinician accountable for the final clinical decision — is the model AI CT reporting already runs on. xAID's AI drafts a structured report, xAID's in-house radiologist reviews every preliminary, and it arrives <strong>ready-to-sign</strong>: your reading radiologist signs the final. Model updates, validation evidence, and post-deployment performance are exactly the kind of questions worth asking any AI reporting vendor now — before a final rule makes them mandatory.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did RSNA tell the FDA about regulating generative AI?',
                    a: "In comments submitted October 19, 2026 on FDA's generative-AI discussion paper, RSNA wrote that \"patient safety should remain the central organizing principle, and regulatory flexibility should be paired with clear, enforceable safeguards that promote transparency, accountability, clinical validation, and continuous real-world monitoring.\" RSNA also argued that generative AI models can evolve after deployment in ways a one-time premarket review cannot address, that device manufacturers — not radiologists — must remain accountable for safety and effectiveness, and that any changes to a model or its configuration should be communicated promptly and in detail.",
                  },
                  {
                    q: 'What did the American College of Radiology recommend to the FDA?',
                    a: 'ACR urged FDA to regulate the complete clinical function of a generative AI tool and the risk it carries, not just the narrow feature named in its clearance. It asked the agency to let the technology keep evolving while balancing premarket flexibility with real-world postmarket monitoring, and to "measure the failures that matter clinically" rather than relying only on technical accuracy metrics. ACR said it welcomes continued partnership with FDA as the framework develops.',
                  },
                  {
                    q: 'Is FDA\'s generative AI discussion paper an actual regulation?',
                    a: "No. The paper, \"Considerations for the Regulation of Generative AI-Enabled Medical Devices,\" was issued August 18, 2026 by FDA's Digital Health Center of Excellence under docket FDA-2026-N-7874, with public comment closing October 19, 2026. FDA has described it explicitly as a discussion paper meant to prompt stakeholder input, not draft guidance — it sets no binding requirements, and there is no published timeline for when, or whether, it becomes enforceable policy.",
                  },
                  {
                    q: 'Should an imaging center wait for final FDA rules before adopting AI reporting tools?',
                    a: "Not necessarily. The safeguards RSNA and ACR are asking FDA to eventually require — documented clinical validation, post-deployment performance monitoring, prompt disclosure of model changes, and clear accountability for a flawed output — are reasonable due-diligence questions a buyer can put to any AI-reporting vendor today, regardless of how long rulemaking takes. Waiting for a final rule delays those questions; it doesn't answer them.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/artificial-intelligence/radiology-societies-weigh-fdas-push-regulate-generative-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "Radiology societies weigh in on FDA's push to regulate generative AI" (2026). FDA discussion paper: <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/considerations-regulation-generative-ai-enabled-medical-devices-discussion-paper-and-request" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA Digital Health Center of Excellence</a>, docket <a href="https://www.regulations.gov/docket/FDA-2026-N-7874/comments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA-2026-N-7874</a>. Figures and quotes are reported as published; rounded where noted.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Vendor diligence you can do before the rule is final"
          sub="See how xAID's radiologist-reviewed, ready-to-sign reports work — try it on 5 free studies."
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
              <Link to="/blog/ama-agentic-ai-governance-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AMA's Agentic AI Governance Framework: A Checklist for Imaging AI Buyers</div>
              </Link>
              <Link to="/blog/software-as-a-medical-device-warning-letter-case-study/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">What the O.N. Diagnostics FDA Warning Letter Teaches About SaMD Change Control</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaAiRegulationRadiologySocieties;
