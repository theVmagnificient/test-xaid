import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaAiMedicalDevices = () => {
  const post = {
    title: "FDA AI Medical Devices: No Generative AI Tool Is Authorized Yet — What That Means for AI-Drafted Radiology Reports",
    dateIso: '2026-09-13',
    date: 'September 13, 2026',
    category: 'Regulatory & Compliance',
    readingTime: 8,
    description: "The FDA's August discussion paper and its TEMPO pilot both admit generative AI doesn't fit the old device rulebook. Here's what that unresolved hallucination-and-drift risk means for AI-drafted radiology reports right now.",
  };

  const canonical = 'https://xaid.ai/blog/fda-ai-medical-devices/';

  return (
    <>
      <Helmet defer={false}>
        <title>FDA AI Medical Devices: The GenAI Gap | xAID</title>
        <meta name="description" content="No generative AI medical device has FDA authorization yet. What the FDA's August discussion paper and TEMPO pilot mean for AI-drafted radiology reports today." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA AI Medical Devices: The GenAI Gap | xAID" />
        <meta property="og:description" content="No generative AI medical device has FDA authorization yet. What the FDA's August discussion paper and TEMPO pilot mean for AI-drafted radiology reports today." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA AI Medical Devices: The GenAI Gap | xAID" />
        <meta name="twitter:description" content="No generative AI medical device has FDA authorization yet. What the FDA's August discussion paper and TEMPO pilot mean for AI-drafted radiology reports today." />
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
          "keywords": "fda ai medical devices, fda approved ai medical devices, fda guidance on ai in medical devices, generative ai radiology reports, ai drafted radiology reports fda"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Has the FDA authorized any generative AI medical device yet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. As of September 2026, the FDA has authorized more than 1,500 devices with some form of AI or machine learning component, but it has not authorized a single generative AI-enabled device. Two tools that draft radiology reports — Aidoc's First Read and Radiology Partners' Cognita — hold FDA Breakthrough Device Designation, which speeds up the agency's interactions with a manufacturer but is not a marketing authorization and does not itself confirm safety or effectiveness."
              }
            },
            {
              "@type": "Question",
              "name": "What did the FDA's August 2026 discussion paper propose for generative AI devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On August 18, 2026, the FDA's Digital Health Center of Excellence published a discussion paper (docket FDA-2026-N-7874, comments open through October 19, 2026) proposing a two-axis framework that weighs a device's degree of autonomy against the severity of harm from an incorrect output, a voluntary \"foundation model device master file\" for third-party model developers, a competency-based evaluation modeled on how physicians are assessed, and greater reliance on postmarket monitoring in exchange for accepting more premarket uncertainty. It is a request for feedback, not draft or final guidance."
              }
            },
            {
              "@type": "Question",
              "name": "What is the FDA's TEMPO pilot and how does it relate to generative AI oversight?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TEMPO (Technology-Enabled Meaningful Patient Outcomes) is an FDA pilot, tied to CMS's ACCESS chronic-care model, under which the agency exercises enforcement discretion over premarket authorization, informed consent, and IRB requirements for selected digital health devices in exchange for real-world data collection. It doesn't cover radiology report drafting today, but it shows the FDA already experimenting with shifting risk containment from premarket clearance to postmarket monitoring — the same trade-off the August discussion paper floats for generative AI broadly."
              }
            },
            {
              "@type": "Question",
              "name": "What should an imaging provider ask an AI-reporting vendor about FDA status today?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask whether the vendor holds an actual FDA marketing authorization (510(k), De Novo, or PMA) for the specific report-drafting function, or only a non-binding designation like Breakthrough status; what independent validation exists beyond vendor-reported accuracy; whether a qualified radiologist reviews every AI-drafted report before it can reach a signature, structurally and not just as a recommendation; and what postmarket monitoring exists to catch hallucination or performance drift after deployment."
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
              FDA AI medical devices: still no green light<br />
              <span className="text-white/60">for generative report drafting</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The FDA's August discussion paper and its TEMPO real-world-data pilot both concede that generative AI doesn't fit the agency's existing device rulebook. For AI that drafts radiology reports specifically, that leaves hallucination and drift as open questions — and a mandatory human review before signature as the risk mitigation buyers can act on today, not the one they have to wait for.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '0', label: 'Generative AI devices authorized', sub: 'by FDA, as of Sept. 2026' },
            { stat: '1,500+', label: 'AI devices authorized overall', sub: 'none generative' },
            { stat: 'Aug 18, 2026', label: 'FDA discussion paper issued', sub: 'docket FDA-2026-N-7874' },
            { stat: 'Oct 19, 2026', label: 'Public comment deadline', sub: 'non-binding, feedback only' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Zero generative AI devices have FDA authorization
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A <a href="https://www.medtechdive.com/news/4-questions-about-the-fdas-approach-to-generative-ai/829871/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a> review of the FDA's posture toward generative AI opens with a stark baseline figure, attributed to an HHS spokesperson: the agency has authorized more than 1,500 devices with an AI or machine-learning component, and <strong>not one</strong> of them is generative.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That doesn't mean generative AI is absent from radiology's regulatory pipeline. Two tools built to draft radiology reports have each picked up <a href="https://www.statnews.com/2026/06/25/radiology-generative-ai-cognita-aidoc-fda-breakthrough-designation/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA Breakthrough Device Designation</a>: Aidoc's First Read, for detecting and describing four life-threatening chest X-ray findings, and Cognita, a generative reporting tool built by a Stanford-affiliated startup that Radiology Partners acquired. A pathology tool from Modella AI has a similar designation. Breakthrough status is a priority-review lane, not a safety or effectiveness finding — none of the three carries a marketing clearance, and the FDA has yet to authorize any generative-AI-enabled device for market.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA's August discussion paper actually proposes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On August 18, 2026, the FDA's Digital Health Center of Excellence published <em>Considerations for the Regulation of Generative AI-Enabled Medical Devices</em>, a discussion paper under docket <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/considerations-regulation-generative-ai-enabled-medical-devices-discussion-paper-and-request" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA-2026-N-7874</a>, open for public comment through October 19, 2026. It is explicitly not draft or final guidance — it's a request for feedback, built around the admission that generative AI "doesn't fit neatly into the current device framework."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The paper floats several ideas rather than settled rules:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'A two-axis risk framework',
                    desc: 'One axis measures how autonomous a device function is, from purely informational to fully autonomous action-taking. The other measures the severity of harm if the device is wrong. Generative report drafting sits toward the informational end, but a missed or fabricated finding can still carry high-severity consequences.',
                  },
                  {
                    title: 'Foundation model device master files',
                    desc: 'A voluntary, confidential channel for third-party foundation-model developers to share proprietary model details with the FDA once, rather than through every device maker that builds on top of the model.',
                  },
                  {
                    title: 'Competency-based assessment',
                    desc: 'Borrowed from how physicians are evaluated — benchmarking, supervised practice, and public performance reporting — rather than a single premarket accuracy number.',
                  },
                  {
                    title: 'More postmarket, less premarket',
                    desc: 'The FDA says it is "considering whether it may be appropriate to accept greater premarket uncertainty with more reliance on postmarket monitoring" for generative AI devices.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                TEMPO: the FDA is already testing less premarket review
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The discussion paper's "more postmarket, less premarket" idea isn't hypothetical — the FDA is piloting a version of it now. <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/tempo-digital-health-devices-pilot" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">TEMPO</a> (Technology-Enabled Meaningful Patient Outcomes), tied to CMS's ACCESS chronic-care model, lets the agency exercise enforcement discretion over premarket authorization, informed-consent, and IRB rules for selected digital health devices, in exchange for manufacturers collecting real-world data that can later support a full marketing application. The FDA <a href="https://www.fda.gov/news-events/press-announcements/fda-announces-first-participant-selected-tempo-digital-health-devices-pilot" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">selected its first TEMPO participant, Limbic</a> — which delivers cognitive behavioral therapy through an AI voice agent — on July 22, 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                TEMPO doesn't cover radiology report drafting today. But it's the clearest evidence yet of which way the agency is leaning for AI broadly: trade some premarket gatekeeping for real-world evidence collected after a product is already in use. For a generative report-drafting tool, that means the interval during which "in the field" is the primary safety check could get longer, not shorter — which raises the stakes on whatever safeguard sits between an AI-drafted report and a signed one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The risk the FDA names but hasn't resolved: hallucination and drift
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The discussion paper itself names the reason generative AI is getting different treatment. It flags the technology's tendency to produce hallucinations — "incorrect outputs that may appear authentic" — along with performance drift, where a model's behavior "worsens over time," and variable outputs, where the same input can produce different results across runs, complicating any single premarket safety-and-effectiveness evaluation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For a radiology report, that failure mode is specific and consequential: an authentic-looking sentence describing a finding that isn't there, or an authentic-looking report that omits one that is. That's a materially different risk profile than the discrete, bounded outputs (a bounding box, a triage flag) the FDA has been clearing for decades. It's also why, as one healthcare attorney told MedTech Dive, much of the industry is "dancing around the FDA-regulated space" while it waits for clarity — sticking to administrative applications rather than diagnostic report generation. "No one really wants to be the guinea pig," the attorney said. Dexcom's decision that a generative wellness-recommendation feature on its glucose sensors didn't need a premarket submission is one example of vendors finding room to move without waiting for the agency's generative-AI framework to firm up.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where the pathways stand today
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For anyone evaluating an AI-reporting vendor, it helps to keep the regulatory categories straight — they get used interchangeably in vendor marketing, but they mean very different things:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Pathway</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">What it actually means</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Authorizes marketing?</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Status for genAI report drafting</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">510(k) / De Novo / PMA</td>
                      <td className="py-3 pr-4">Traditional premarket review of safety and effectiveness</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3">None granted to any generative AI-enabled device</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Breakthrough Device Designation</td>
                      <td className="py-3 pr-4">Faster, more frequent FDA interaction during development</td>
                      <td className="py-3 pr-4">No</td>
                      <td className="py-3">Granted to Aidoc's First Read and Radiology Partners' Cognita</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">August 2026 discussion paper</td>
                      <td className="py-3 pr-4">Non-binding request for feedback (comments through Oct. 19, 2026)</td>
                      <td className="py-3 pr-4">No</td>
                      <td className="py-3">Applies broadly, radiology included; no rule yet</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">TEMPO pilot</td>
                      <td className="py-3 pr-4">Enforcement discretion plus real-world data collection</td>
                      <td className="py-3 pr-4">No — exempts requirements instead</td>
                      <td className="py-3">Not yet extended to radiology reporting</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What to ask a vendor while the rulebook is still unwritten
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this means AI-drafted radiology reports should wait for a future FDA framework before they're useful — it means the question buyers should be asking isn't "is it FDA cleared" (today, for a generative report-drafting function, the honest answer is no), but what stands between a generative model's output and a signature:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-8 text-[#444] text-[15px] leading-[1.65] font-light">
                <li>Does the vendor hold an actual marketing authorization for the specific report-drafting function, or only a non-binding designation like Breakthrough status?</li>
                <li>What independent, on-your-data validation exists beyond vendor-reported accuracy figures?</li>
                <li>Is there a structural, mandatory clinical review step between the AI draft and anything reaching a signature — not a recommended best practice, but a workflow requirement?</li>
                <li>What postmarket monitoring catches drift or a rising hallucination rate after deployment, rather than relying solely on a one-time premarket check?</li>
              </ul>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That last point is where the FDA's own thinking and current practice converge. The agency's competency-based assessment idea explicitly borrows from how physicians are supervised before their judgment is trusted unsupervised — and a mandatory review step is exactly the mitigation available right now, independent of how the eventual rule reads. It's the model xAID's workflow is built on: AI produces a structured CT report draft, xAID's in-house radiologist reviews every preliminary, and the report reaches the client's reading radiologist ready-to-sign.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Has the FDA authorized any generative AI medical device yet?',
                    a: "No. As of September 2026, the FDA has authorized more than 1,500 devices with some form of AI or machine learning component, but it has not authorized a single generative AI-enabled device. Two tools that draft radiology reports — Aidoc's First Read and Radiology Partners' Cognita — hold FDA Breakthrough Device Designation, which speeds up the agency's interactions with a manufacturer but is not a marketing authorization and does not itself confirm safety or effectiveness.",
                  },
                  {
                    q: 'What did the FDA\'s August 2026 discussion paper propose for generative AI devices?',
                    a: 'On August 18, 2026, the FDA\'s Digital Health Center of Excellence published a discussion paper (docket FDA-2026-N-7874, comments open through October 19, 2026) proposing a two-axis framework that weighs a device\'s degree of autonomy against the severity of harm from an incorrect output, a voluntary "foundation model device master file" for third-party model developers, a competency-based evaluation modeled on how physicians are assessed, and greater reliance on postmarket monitoring in exchange for accepting more premarket uncertainty. It is a request for feedback, not draft or final guidance.',
                  },
                  {
                    q: 'What is the FDA\'s TEMPO pilot and how does it relate to generative AI oversight?',
                    a: "TEMPO (Technology-Enabled Meaningful Patient Outcomes) is an FDA pilot, tied to CMS's ACCESS chronic-care model, under which the agency exercises enforcement discretion over premarket authorization, informed consent, and IRB requirements for selected digital health devices in exchange for real-world data collection. It doesn't cover radiology report drafting today, but it shows the FDA already experimenting with shifting risk containment from premarket clearance to postmarket monitoring — the same trade-off the August discussion paper floats for generative AI broadly.",
                  },
                  {
                    q: 'What should an imaging provider ask an AI-reporting vendor about FDA status today?',
                    a: 'Ask whether the vendor holds an actual FDA marketing authorization (510(k), De Novo, or PMA) for the specific report-drafting function, or only a non-binding designation like Breakthrough status; what independent validation exists beyond vendor-reported accuracy; whether a qualified radiologist reviews every AI-drafted report before it can reach a signature, structurally and not just as a recommendation; and what postmarket monitoring exists to catch hallucination or performance drift after deployment.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/4-questions-about-the-fdas-approach-to-generative-ai/829871/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive, "4 questions about the FDA's approach to generative AI"</a> (Sept. 9, 2026); FDA, <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/considerations-regulation-generative-ai-enabled-medical-devices-discussion-paper-and-request" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Considerations for the Regulation of Generative AI-Enabled Medical Devices</a> (Aug. 18, 2026); FDA, <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/tempo-digital-health-devices-pilot" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">TEMPO for Digital Health Devices Pilot</a>; FDA, <a href="https://www.fda.gov/news-events/press-announcements/fda-announces-first-participant-selected-tempo-digital-health-devices-pilot" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">first TEMPO participant announcement</a>; <a href="https://www.statnews.com/2026/06/25/radiology-generative-ai-cognita-aidoc-fda-breakthrough-designation/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">STAT News on Cognita and Aidoc Breakthrough Device Designations</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A radiologist review, before any signature — every time."
          sub="That's the mitigation xAID already builds in, ahead of any future FDA rule. Try it on 5 free studies and see the radiologist-reviewed reports."
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
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Vendor Diligence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI Vendor Evaluation Checklist</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: Draft, Then Sign</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaAiMedicalDevices;
