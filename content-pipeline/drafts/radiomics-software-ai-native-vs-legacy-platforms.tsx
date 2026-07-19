import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const RadiomicsSoftwareAiNativeVsLegacy = () => {
  const post = {
    title: 'Radiomics Software in 2026: Why Platform Architecture Matters as Much as Accuracy',
    dateIso: '2026-07-19',
    date: 'July 19, 2026',
    category: 'AI Technology',
    readingTime: 7,
    description: "Raidium's new oncology imaging platform just replaced a legacy radiomics tool at Moffitt Cancer Center. The swap is a case study in a bigger shift — from AI bolted onto old software to AI-native platforms — and a checklist for evaluating any AI reporting tool.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiomics Software: AI-Native vs Legacy Platforms | xAID</title>
        <meta name="description" content="Raidium replaced a legacy radiomics tool at Moffitt Cancer Center with an AI-native platform, and what it means for evaluating any AI imaging or reporting tool." />
        <link rel="canonical" href="https://xaid.ai/blog/radiomics-software-ai-native-vs-legacy-platforms" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiomics Software: AI-Native vs Legacy Platforms | xAID" />
        <meta property="og:description" content="Raidium replaced a legacy radiomics tool at Moffitt Cancer Center with an AI-native platform, and what it means for evaluating any AI imaging or reporting tool." />
        <meta property="og:url" content="https://xaid.ai/blog/radiomics-software-ai-native-vs-legacy-platforms" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiomics Software: AI-Native vs Legacy Platforms | xAID" />
        <meta name="twitter:description" content="Raidium replaced a legacy radiomics tool at Moffitt Cancer Center with an AI-native platform, and what it means for evaluating any AI imaging or reporting tool." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiomics-software-ai-native-vs-legacy-platforms" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiomics-software-ai-native-vs-legacy-platforms",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiomics software, AI-native imaging platform, AI radiology reporting software, legacy radiology AI, oncology imaging AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Raidium launch, and what happened at Moffitt Cancer Center?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On July 16, 2026, imaging AI company Raidium launched Raidium Read (R.Read), an AI-native oncology imaging platform, with its first U.S. deployment at Moffitt Cancer Center in Tampa, Florida. The platform replaced a legacy radiomics tool at the center and provides whole-body lesion detection, AI segmentation, and automated tracking of lesions across follow-up and prior studies for clinical trial and research use."
              }
            },
            {
              "@type": "Question",
              "name": "What does \"AI-native\" mean versus a legacy or retrofitted radiomics tool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An AI-native platform is built from the ground up around AI and foundation models, so functions like longitudinal lesion tracking and automated measurement are core to the architecture. A retrofitted or bolt-on tool adds an AI module onto an existing viewer or PACS interface that predates modern AI, which can limit how deeply the AI integrates with the actual reading workflow. Raidium has described its platform this way, positioning it against older radiomics applications."
              }
            },
            {
              "@type": "Question",
              "name": "Is Raidium Read FDA cleared for clinical use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, not yet. As of the July 2026 launch, Raidium Read is available only for clinical trial and oncology research use. Raidium is pursuing FDA 510(k) clearance for a subset of features and expects to announce clearance before the end of 2026. It is not currently used for routine diagnostic reporting in the way that other cleared radiology AI devices are."
              }
            },
            {
              "@type": "Question",
              "name": "Beyond accuracy claims, what should radiology groups evaluate in AI reporting software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Buyers should weigh platform architecture alongside accuracy: whether the tool was built AI-native or added onto legacy software, how much IT integration it requires, whether it supports the full reporting workflow or only a narrow task, its actual regulatory clearance status for the intended use, and whether a radiologist remains in the loop to review and finalize every output. Accuracy figures alone don't capture how a tool will fit daily operations or scale as models improve."
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
                AI Technology
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Radiomics software in 2026:<br />
              <span className="text-white/60">why platform architecture matters as much as accuracy</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Raidium just replaced a legacy radiomics tool at Moffitt Cancer Center with an AI-native platform. The swap is a small data point with a bigger lesson: as imaging AI matures, how a tool is built is becoming as important to evaluate as what it claims to detect.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '3x', label: 'Claimed cut in inter-reader variability', sub: 'via automated RECIST measurements' },
                { stat: 'Moffitt', label: 'First U.S. deployment', sub: 'replaced a legacy radiomics tool' },
                { stat: '76.5%', label: 'Of all FDA-cleared AI/ML devices are radiology', sub: '1995–2025, per Cureus study' },
                { stat: 'Research-only', label: 'Current clearance status', sub: '510(k) targeted by end of 2026' },
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
                What actually launched, and why the "replaced a legacy tool" detail matters
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On July 16, 2026, imaging AI company Raidium announced the U.S. launch of Raidium Read (R.Read), an AI-native oncology imaging platform, with its first deployment at <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15830164/raidium-launches-ainative-oncology-imaging-platform" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Moffitt Cancer Center</a> in Tampa, Florida — where, according to <a href="https://www.itnonline.com/content/raidium-introduces-ai-powered-oncology-imaging-workflow-us-cancer-centers" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Imaging Technology News</a>, it replaced a legacy radiomics tool the center had been using. The platform offers whole-body lesion detection, AI segmentation, and automated tracking of lesions across follow-up and prior studies, built on a foundation model the company calls <a href="https://hitconsultant.net/2026/07/17/raidium-launches-ai-native-radiology-viewer-moffitt/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Curia</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Raidium says the platform is designed to cut inter-reader variability by roughly <strong>threefold</strong> through organ-agnostic, automated RECIST (Response Evaluation Criteria in Solid Tumors) measurements — the standardized way oncology trials track whether a tumor is shrinking, growing, or stable across scans. That figure is the vendor's own claim, reported by trade press covering the launch, and hasn't yet been validated in an independent peer-reviewed study.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                One detail is easy to skim past but is the real story: this wasn't a first-time AI adoption. Moffitt already had radiomics software in place. Raidium's platform won the account by replacing it — which makes this less a story about a new AI feature and more a story about vendor consolidation, where an incumbent legacy tool loses ground to a platform built differently from the start.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                AI-native versus bolt-on: the distinction buyers should understand
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "AI-native" and "legacy-plus-AI" describe two different ways imaging software gets built. A legacy or bolt-on tool starts with a viewer or PACS interface designed years before modern AI existed, then has AI modules layered on top — often as a plugin, a separate window, or a task-specific add-on. An AI-native platform is designed around AI and foundation models from the first line of code, so functions like longitudinal lesion matching, automated measurement, and structured output are core to how the software works, not features bolted on afterward.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Raidium has framed its own product this way — building a new viewer rather than adding AI to a decades-old interface, according to coverage of the launch from <a href="https://hitconsultant.net/2026/07/17/raidium-launches-ai-native-radiology-viewer-moffitt/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">HIT Consultant</a> and <a href="https://www.itnonline.com/content/raidium-introduces-ai-powered-oncology-imaging-workflow-us-cancer-centers" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Imaging Technology News</a>. That's a vendor's framing of its own product, and every vendor has an incentive to describe itself as the modern option. But the architectural distinction it points to is real, and it's a useful lens for evaluating any AI imaging or reporting tool — not just this one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                AI-native platforms vs. retrofitted legacy tools
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-[#0D0D0D]">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">AI-native platform</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Retrofitted / bolt-on legacy tool</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Origin', 'Built around AI and foundation models from the start', 'AI module added to a viewer or PACS designed before modern AI existed'],
                      ['Longitudinal tracking', 'Lesion matching across time points is a core function', 'Often manual matching between prior and current studies'],
                      ['Output', 'Structured, comprehensive output across the workflow', 'Frequently a single narrow task (e.g., a flag or a measurement)'],
                      ['IT integration', 'Can run as a standalone pipeline with minimal setup', 'Deeper PACS/RIS dependencies, longer implementation lift'],
                      ['Regulatory status', 'New entrants often launch research-use-first, clearance follows', 'Established devices are often already cleared, but for a narrower use'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#0D0D0D] font-medium align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] font-light align-top">{row[1]}</td>
                        <td className="py-3 pr-4 text-[#444] font-light align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this matters more broadly: a crowded, accuracy-saturated market
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology is already the most AI-dense corner of medicine. A 30-year analysis of FDA AI/ML device authorizations, published in <em>Cureus</em> in July 2026 and covered by <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15830219/radiology-dominates-thirty-years-of-fda-ai-device-approvals" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>, found that radiology accounted for 1,094 of 1,430 total FDA authorizations through December 2025 — about <strong>76.5%</strong> of every AI/ML medical device ever cleared. In a field that saturated, nearly every vendor now claims some accuracy or performance edge.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's exactly why architecture is becoming a differentiator buyers can actually verify, while accuracy claims are harder to compare apples-to-apples across vendors' own studies. A platform's build — AI-native versus retrofitted — determines how it will integrate, how quickly it can absorb model improvements, and how far it can extend beyond the single task it launched with. Those are operational questions a buyer can assess directly, independent of any one vendor's benchmark numbers.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                A practical framework for evaluating radiomics and AI reporting software
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Was it built AI-native, or added onto legacy software?',
                    desc: "Ask directly whether the core viewer or reporting engine was designed around AI from the outset, or whether AI was layered onto software that predates it. The answer affects how deeply AI features integrate with the actual reading and reporting workflow, not just how they demo.",
                  },
                  {
                    title: 'Does it produce a narrow flag or a full structured report?',
                    desc: 'Some tools detect or measure one thing (a lesion, a stenosis, a RECIST score) and leave everything else to be dictated manually. Others generate a comprehensive draft across the whole study. The narrower the tool, the more manual reporting work remains after it runs.',
                  },
                  {
                    title: 'What is its actual regulatory clearance for your intended use?',
                    desc: "Research-use-only, 510(k)-cleared for a specific feature, and cleared for full diagnostic reporting are three different things. Confirm which one applies to the specific workflow you plan to deploy it in — not the broadest claim in the vendor's marketing.",
                  },
                  {
                    title: 'Does a radiologist stay in the loop on every output?',
                    desc: "Whatever the architecture, the output should still be reviewed by a qualified radiologist before it reaches a patient's chart. Platform design should support that review, not treat it as an afterthought.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-native reporting fits, beyond oncology radiomics
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The Raidium-Moffitt swap is a specialty-specific example — oncology lesion tracking and RECIST measurement — but the same architecture question applies to general CT reporting. xAID's platform was built AI-native around <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models</Link> rather than retrofitted onto a legacy dictation or PACS workflow, producing a structured, comprehensive report draft across the study rather than a single flagged finding. xAID's in-house radiologist reviews every preliminary report before it's delivered ready-to-sign, so the platform's architecture supports radiologist oversight rather than working around it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did Raidium launch, and what happened at Moffitt Cancer Center?',
                    a: 'On July 16, 2026, imaging AI company Raidium launched Raidium Read (R.Read), an AI-native oncology imaging platform, with its first U.S. deployment at Moffitt Cancer Center in Tampa, Florida. The platform replaced a legacy radiomics tool at the center and provides whole-body lesion detection, AI segmentation, and automated tracking of lesions across follow-up and prior studies for clinical trial and research use.',
                  },
                  {
                    q: 'What does "AI-native" mean versus a legacy or retrofitted radiomics tool?',
                    a: 'An AI-native platform is built from the ground up around AI and foundation models, so functions like longitudinal lesion tracking and automated measurement are core to the architecture. A retrofitted or bolt-on tool adds an AI module onto an existing viewer or PACS interface that predates modern AI, which can limit how deeply the AI integrates with the actual reading workflow. Raidium has described its platform this way, positioning it against older radiomics applications.',
                  },
                  {
                    q: 'Is Raidium Read FDA cleared for clinical use?',
                    a: 'No, not yet. As of the July 2026 launch, Raidium Read is available only for clinical trial and oncology research use. Raidium is pursuing FDA 510(k) clearance for a subset of features and expects to announce clearance before the end of 2026. It is not currently used for routine diagnostic reporting in the way that other cleared radiology AI devices are.',
                  },
                  {
                    q: "Beyond accuracy claims, what should radiology groups evaluate in AI reporting software?",
                    a: "Buyers should weigh platform architecture alongside accuracy: whether the tool was built AI-native or added onto legacy software, how much IT integration it requires, whether it supports the full reporting workflow or only a narrow task, its actual regulatory clearance status for the intended use, and whether a radiologist remains in the loop to review and finalize every output. Accuracy figures alone don't capture how a tool will fit daily operations or scale as models improve.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/news/15830164/raidium-launches-ainative-oncology-imaging-platform" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, with additional launch details from <a href="https://hitconsultant.net/2026/07/17/raidium-launches-ai-native-radiology-viewer-moffitt/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HIT Consultant</a> and <a href="https://www.itnonline.com/content/raidium-introduces-ai-powered-oncology-imaging-workflow-us-cancer-centers" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Imaging Technology News</a>. FDA device-approval figures from a 30-year analysis published in <em>Cureus</em> (July 2026), as reported by <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15830219/radiology-dominates-thirty-years-of-fda-ai-device-approvals" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Built AI-native. Reviewed in-house. Ready to sign."
          sub="See how xAID's foundation-model reporting platform works on your own CT studies — no legacy retrofit, no separate flagging tool to bolt on."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-buyers-guide-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer's Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: A Buyer's Guide</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiomicsSoftwareAiNativeVsLegacy;
