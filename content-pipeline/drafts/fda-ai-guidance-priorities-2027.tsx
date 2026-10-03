import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FdaAiGuidancePriorities2027 = () => {
  const post = {
    title: "FDA's FY2027 AI Guidance Priorities: What Imaging Buyers Should Watch",
    dateIso: '2026-10-03',
    date: 'October 3, 2026',
    category: 'Regulatory & Policy',
    readingTime: 7,
    description: "FDA's device center has named AI-enabled device lifecycle management and predetermined change control plans as top FY2027 guidance priorities. Here's what clearer rules on AI software updates could mean for how CT-reporting AI gets validated, updated, and procured.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FDA's FY2027 AI Guidance Priorities Explained | xAID</title>
        <meta name="description" content="FDA named AI-enabled device lifecycle management and PCCP guidance as FY2027 priorities. What it means for validating, updating, and procuring CT-reporting AI." />
        <link rel="canonical" href="https://xaid.ai/blog/fda-ai-guidance-priorities-2027/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FDA's FY2027 AI Guidance Priorities Explained | xAID" />
        <meta property="og:description" content="FDA named AI-enabled device lifecycle management and PCCP guidance as FY2027 priorities. What it means for validating, updating, and procuring CT-reporting AI." />
        <meta property="og:url" content="https://xaid.ai/blog/fda-ai-guidance-priorities-2027" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FDA's FY2027 AI Guidance Priorities Explained | xAID" />
        <meta name="twitter:description" content="FDA named AI-enabled device lifecycle management and PCCP guidance as FY2027 priorities. What it means for validating, updating, and procuring CT-reporting AI." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fda-ai-guidance-priorities-2027" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fda-ai-guidance-priorities-2027",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "FDA AI guidance, predetermined change control plan, PCCP radiology AI, FDA AI-enabled device lifecycle management, FDA fiscal year 2027 guidance"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What AI guidance did the FDA prioritize for fiscal year 2027?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On October 1, 2026, FDA's device center (CDRH) published its fiscal 2027 guidance agenda. Its top-tier \"A-list\" names finalizing guidance on marketing submissions and lifecycle management for AI-enabled devices, and finalizing a predetermined change control plan (PCCP) guidance for medical devices generally, among its highest priorities — alongside premarket guidance for robotically assisted surgical devices and a new item on generative AI-enabled conversational devices for mental disorders."
              }
            },
            {
              "@type": "Question",
              "name": "What is a predetermined change control plan (PCCP) and why does it matter for imaging AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A PCCP is a plan, submitted and cleared with a device, that describes planned future modifications to an AI model, the methodology for validating them, and an assessment of their impact — so a manufacturer can update the AI within the pre-cleared plan instead of filing a new 510(k) for every change. FDA finalized PCCP-specific guidance for AI-enabled device software functions in late 2024/early 2025, and radiology has led adoption: in a 2026 study of FDA-cleared AI/ML devices, 34 of 37 (92%) AI/ML-specific PCCP clearances were radiology devices, and 22 of those 34 (65%) were cleared in 2025 alone."
              }
            },
            {
              "@type": "Question",
              "name": "Does this change how imaging centers should evaluate AI vendors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It raises the bar on what to ask. A device with a cleared PCCP can change its underlying model after purchase without a new submission, as long as the change stays inside the pre-cleared plan. Buyers should ask vendors whether their device has a PCCP, what changes it covers, how changes are validated and disclosed, and how performance is monitored after an update — rather than assuming an AI tool's behavior is frozen at the clearance date."
              }
            },
            {
              "@type": "Question",
              "name": "When will the finalized guidance take effect?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FDA is accepting public feedback on its FY2027 guidance priorities through November 30, 2026 (with a November 24, 2026 deadline specifically for the draft surgical-robot guidance). The agency has said it aims to finalize the surgical-robot guidance within about a year of the draft's publication; it has not published a specific finalization date for the AI-enabled device lifecycle management or general PCCP guidance."
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
              FDA's FY2027 AI guidance priorities:<br />
              <span className="text-white/60">what imaging buyers should watch</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The FDA's device center just named AI lifecycle management and change-control rules as top guidance priorities for next year. For CT-reporting AI, that roadmap is really about one question: once a tool is cleared, how is it allowed to change — and how will buyers know?
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '92%', label: 'Of AI/ML-specific PCCP clearances', sub: 'are radiology devices (34 of 37)' },
            { stat: '65%', label: 'Of those radiology PCCP devices', sub: 'cleared in 2025 alone' },
            { stat: 'Nov 30', label: '2026 public comment deadline', sub: 'on FDA\'s FY2027 priorities' },
            { stat: '77.5%', label: 'Of FDA AI/ML device submissions', sub: 'are radiology (1,080 of 1,394)' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA just published
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On October 1, 2026, FDA's Center for Devices and Radiological Health (CDRH) released its fiscal 2027 proposed guidance agenda, as reported by <a href="https://www.medtechdive.com/news/fda-to-prioritize-guidance-on-ai-surgical-robots-next-year/831984/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a> and <a href="https://www.raps.org/resource/fda-s-device-center-releases-guidance-agenda-for-fy-2027.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RAPS</a>. CDRH sorts its planned guidance into tiers; the top tier, the "A-list," is reserved for documents the center commits to finalizing that fiscal year. Artificial intelligence and robotic surgery both landed on it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The AI items on the A-list are specific. CDRH wants to finalize guidance on <strong>marketing submissions and lifecycle management for AI-enabled devices</strong> — a draft first issued in January 2025 that was bumped up from a lower tier on last year's list — and to finalize a broader <strong>predetermined change control plan (PCCP) guidance for medical devices</strong> in general, a draft that has been pending since August 2024. A new, lower-profile addition is draft guidance on generative AI-enabled conversational devices for mental disorders. Separately, but on the same list, CDRH is also targeting final guidance on premarket submissions for robotically assisted surgical devices, built on a draft released in late September 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                FDA is taking public comment on the whole priority list through <strong>November 30, 2026</strong>, with a separate, earlier deadline of <strong>November 24, 2026</strong> for feedback on the draft surgical-robot guidance specifically.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "lifecycle management" and "change control" are the real story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Neither guidance document is about whether an AI model works at the moment of clearance. Both are about what happens next — because AI software, unlike a scanner or a stent, keeps changing after it ships: retraining on new data, recalibrating thresholds, adding compatibility with new scanner protocols.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A PCCP is how FDA lets a manufacturer plan for that in advance. Instead of filing a new 510(k) for every model update, a manufacturer can submit a PCCP alongside its original application describing exactly what future modifications it intends to make, how it will validate them, and how it will assess their impact on safety and performance. If FDA clears the device with that plan attached, the manufacturer can make the described updates without a fresh submission each time.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                FDA already finalized a PCCP guidance specific to AI-enabled device software functions in late 2024, following up with a clarifying webinar in <a href="https://www.fda.gov/medical-devices/cdrh-new-news-and-updates/webinar-final-guidance-marketing-submission-recommendations-predetermined-change-control-plan" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">January 2025</a>. What's still pending — and now on the FY2027 A-list — is a separate, device-agnostic PCCP guidance covering all device types, plus the broader lifecycle-management guidance that governs how AI-enabled devices should be designed, documented, and monitored across their entire life in the field, not just at the update stage.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Radiology is already the proving ground
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This isn't a theoretical mechanism for imaging AI — it's already the dominant one. A 2026 study in <a href="https://doi.org/10.1148/ryai.260385" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology: Artificial Intelligence</em></a> examined FDA-cleared AI/ML devices from 2015 through 2025 and found radiology submissions made up 1,080 of 1,394 total AI/ML device clearances (about 77.5%), almost all through the 510(k) pathway. Among devices cleared with a PCCP specifically covering AI/ML modifications, 34 of 37 (about 92%) were radiology devices — and 22 of those 34 (65%) were cleared in 2025 alone, after the AI-specific PCCP guidance was finalized.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In other words, radiology AI vendors adopted PCCPs faster and more heavily than any other device category as soon as FDA gave them a defined mechanism to do so. The same study flagged a gap worth noting: public PCCP summaries were inconsistent about disclosing how performance is monitored after a change goes live, and predefined triggers for retraining weren't always spelled out. That's precisely the kind of documentation gap a finalized lifecycle-management guidance is meant to close.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                FY2027 AI-adjacent guidance, at a glance
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Guidance document</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Status today</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Relevance to imaging AI buyers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">AI-enabled device lifecycle management &amp; marketing submissions</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Draft since Jan. 2025; A-list for final 2027</td>
                      <td className="py-3 text-[#444] font-light">Sets expectations for documentation across a device's whole life, not just at clearance</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">PCCP for medical devices (general, all device types)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Draft since Aug. 2024; A-list for final 2027</td>
                      <td className="py-3 text-[#444] font-light">Standardizes the change-control mechanism already driving radiology AI updates</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">PCCP for AI-enabled device software functions</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Already final (late 2024/early 2025)</td>
                      <td className="py-3 text-[#444] font-light">The mechanism 34 of 37 radiology AI/ML PCCP devices already used</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Robotically assisted surgical devices</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Draft since Sept. 2026; A-list for final 2027</td>
                      <td className="py-3 text-[#444] font-light">Adjacent device category, not reporting software, but same FDA priority cycle</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What it means for how CT-reporting AI gets procured
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                If a vendor's device has a cleared PCCP, that vendor can change the underlying model — recalibrate it, retrain it on new data, extend it to new scanner protocols — without seeking new clearance each time, as long as the change stays within what the plan describes. That's good for keeping tools current. It also means two devices with the same original clearance letter can diverge in behavior over time, and a buyer evaluating "FDA-cleared AI" today should ask more than whether a device was cleared — they should ask how it is allowed to change afterward.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Practical questions a finalized lifecycle-management and general PCCP guidance should make easier to answer, and that buyers can start asking now:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Does this device have a PCCP, and what does it cover?',
                    desc: 'A cleared PCCP should spell out the category of changes allowed — retraining, new indications, new compatible scanners — and what is explicitly out of scope.',
                  },
                  {
                    title: 'How are changes validated before release?',
                    desc: 'The guidance requires a defined methodology for validating each modification, not just a description of what might change.',
                  },
                  {
                    title: 'How will we be told when a change ships?',
                    desc: 'Radiology\'s own PCCP track record shows disclosure of post-update monitoring and retraining triggers has been inconsistent — ask vendors to commit to a notification process in the contract, not just in the public FDA summary.',
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
                None of this changes the baseline standard imaging centers should hold any AI-reporting tool to: a radiologist stays in the loop on every study, regardless of how the underlying model is updated behind the scenes. AI CT reporting built on <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models</Link> produces a structured draft report, xAID's in-house radiologist reviews every preliminary, and the result is delivered ready-to-sign — your reading radiologist signs the final. As FDA's change-control rules mature, that human-in-the-loop layer is the constant that keeps pace with the model underneath it changing.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What AI guidance did the FDA prioritize for fiscal year 2027?',
                    a: 'On October 1, 2026, FDA\'s device center (CDRH) published its fiscal 2027 guidance agenda. Its top-tier "A-list" names finalizing guidance on marketing submissions and lifecycle management for AI-enabled devices, and finalizing a predetermined change control plan (PCCP) guidance for medical devices generally, among its highest priorities — alongside premarket guidance for robotically assisted surgical devices and a new item on generative AI-enabled conversational devices for mental disorders.',
                  },
                  {
                    q: 'What is a predetermined change control plan (PCCP) and why does it matter for imaging AI?',
                    a: 'A PCCP is a plan, submitted and cleared with a device, that describes planned future modifications to an AI model, the methodology for validating them, and an assessment of their impact — so a manufacturer can update the AI within the pre-cleared plan instead of filing a new 510(k) for every change. FDA finalized PCCP-specific guidance for AI-enabled device software functions in late 2024/early 2025, and radiology has led adoption: in a 2026 study of FDA-cleared AI/ML devices, 34 of 37 (92%) AI/ML-specific PCCP clearances were radiology devices, and 22 of those 34 (65%) were cleared in 2025 alone.',
                  },
                  {
                    q: 'Does this change how imaging centers should evaluate AI vendors?',
                    a: "It raises the bar on what to ask. A device with a cleared PCCP can change its underlying model after purchase without a new submission, as long as the change stays inside the pre-cleared plan. Buyers should ask vendors whether their device has a PCCP, what changes it covers, how changes are validated and disclosed, and how performance is monitored after an update — rather than assuming an AI tool's behavior is frozen at the clearance date.",
                  },
                  {
                    q: 'When will the finalized guidance take effect?',
                    a: 'FDA is accepting public feedback on its FY2027 guidance priorities through November 30, 2026 (with a November 24, 2026 deadline specifically for the draft surgical-robot guidance). The agency has said it aims to finalize the surgical-robot guidance within about a year of the draft\'s publication; it has not published a specific finalization date for the AI-enabled device lifecycle management or general PCCP guidance.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/fda-to-prioritize-guidance-on-ai-surgical-robots-next-year/831984/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>, "FDA to prioritize guidance on AI, surgical robots next year" (Oct. 2026); <a href="https://www.raps.org/resource/fda-s-device-center-releases-guidance-agenda-for-fy-2027.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RAPS</a>, "FDA's device center releases guidance agenda for FY 2027"; <a href="https://www.fda.gov/medical-devices/cdrh-new-news-and-updates/webinar-final-guidance-marketing-submission-recommendations-predetermined-change-control-plan" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA</a>, final guidance on PCCPs for AI-enabled device software functions; Dayma K, Patel P, Hildreth K, Jamaspishvili T, "Predetermined Change Control Plan Adoption and Documentation Transparency in U.S. FDA-cleared Radiology AI/ML Devices," <em>Radiology: Artificial Intelligence</em> (2026), <a href="https://doi.org/10.1148/ryai.260385" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1148/ryai.260385</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI updates. A radiologist constant stays in place."
          sub="See how xAID pairs foundation-model CT reporting with in-house radiologist review on every preliminary — ready-to-sign, every time. Try it on 5 free studies."
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
              <Link to="/blog/fda-approved-ai-radiology-funding-bill/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">FDA-Approved AI Radiology Funding Bill, Explained</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guides</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI Vendor Evaluation Checklist</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FdaAiGuidancePriorities2027;
