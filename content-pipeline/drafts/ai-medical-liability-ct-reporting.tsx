import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AiMedicalLiabilityCtReporting = () => {
  const post = {
    title: "AI Medical Liability: Hospitals Tell FDA the Developer Should Own It",
    dateIso: '2026-10-25',
    date: 'October 25, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "AHA, AMA, ATA, and WEDI told FDA that AI vendors, not clinicians, should bear liability for generative AI devices. What it means for an AI-drafted CT report.",
  };

  const canonical = 'https://xaid.ai/blog/ai-medical-liability-ct-reporting/';

  return (
    <>
      <Helmet defer={false}>
        <title>AI Medical Liability: Developers, Not Doctors | xAID</title>
        <meta name="description" content="AHA, AMA, ATA, and WEDI told FDA that AI vendors, not clinicians, should bear liability for generative AI devices. What it means for an AI-drafted CT report." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Medical Liability: Developers, Not Doctors | xAID" />
        <meta property="og:description" content="AHA, AMA, ATA, and WEDI told FDA that AI vendors, not clinicians, should bear liability for generative AI devices. What it means for an AI-drafted CT report." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Medical Liability: Developers, Not Doctors | xAID" />
        <meta name="twitter:description" content="AHA, AMA, ATA, and WEDI told FDA that AI vendors, not clinicians, should bear liability for generative AI devices. What it means for an AI-drafted CT report." />
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
          "keywords": "ai medical liability, generative ai medical devices fda, ai radiology liability, who is liable for ai reports, fda generative ai discussion paper"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did hospital and physician groups tell the FDA about AI liability?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The American Hospital Association, American Medical Association, American Telemedicine Association, and Workgroup for Electronic Data Interchange told FDA that developers, not clinicians, should be accountable for the safety and performance of generative AI-enabled medical devices. The ATA wrote that 'the manufacturer should remain responsible for the safety and performance of the device it sells,' and the AHA said 'vendors and developers must be responsible for the ongoing performance, maintenance and integrity of the tools they market.'"
              }
            },
            {
              "@type": "Question",
              "name": "What is FDA's generative AI discussion paper and when were comments due?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On August 18, 2026, FDA's Digital Health Center of Excellence released 'Considerations for the Regulation of Generative AI-Enabled Medical Devices,' a discussion paper (docket FDA-2026-N-7874) asking the public 26 questions about risk assessment, premarket evaluation, and postmarket monitoring for generative AI devices. It is not draft or final guidance. The comment period closed October 19, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "Why do provider groups say a human reviewing AI output isn't enough?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The AMA's comment letter argued that human-in-the-loop review does not automatically reduce risk, because clinicians can make their own errors reviewing AI suggestions or become over-reliant on the tool. The AMA wrote that meaningful physician supervision requires more than placing a human at the end of an automated process — the reviewer needs relevant information, expertise, time, cognitive capacity, and the authority to reject or stop the system."
              }
            },
            {
              "@type": "Question",
              "name": "Who is accountable when an AI-drafted CT report is wrong?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Under a draft-then-sign model, accountability is layered rather than placed entirely on the clinician at the end of the chain. The AI vendor is responsible for the performance, validation, and monitoring of the model that produces the draft; a radiologist reviews that draft before it is delivered; and the client's reading radiologist signs the final report. That structure matches what provider groups are asking FDA to require industry-wide: the entity that built and maintains the model owns the model's behavior, and the signing clinician isn't left to independently catch flaws in a system they can't see inside."
              }
            },
            {
              "@type": "Question",
              "name": "What did FDA say about next steps on generative AI device regulation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rick Abramson of FDA's Digital Health Center of Excellence said the agency plans to post draft guidance on regulating generative AI-enabled medical devices within the coming months, after reviewing the comments submitted to the discussion paper docket."
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
              AI medical liability: hospitals tell FDA<br />
              <span className="text-white/60">the developer should own it, not the doctor</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Four national provider groups just told FDA, on the record, who they think should be on the hook when a generative AI medical device fails. The answer has a direct read-through to AI-drafted CT reports — and who signs them.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '4', label: 'Provider groups', sub: 'AHA, AMA, ATA, WEDI' },
            { stat: '26', label: 'Questions FDA asked', sub: 'in its discussion paper' },
            { stat: '2-axis', label: 'Risk framework', sub: 'autonomy × harm severity' },
            { stat: 'Oct 19', label: 'Comment deadline', sub: '2026' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the comment letters actually say
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In August 2026, FDA's Digital Health Center of Excellence published <a href="https://www.fda.gov/news-events/press-announcements/fda-seeks-public-feedback-inform-regulatory-approach-generative-ai-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">a discussion paper</a> titled "Considerations for the Regulation of Generative AI-Enabled Medical Devices," opening docket FDA-2026-N-7874 and putting 26 questions to the public on risk assessment, premarket evaluation, and postmarket monitoring. It is explicitly not draft or final guidance — just a request for feedback — and the comment window closed October 19, 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                As reported by <a href="https://www.medtechdive.com/news/developers-not-doctors-held-accountable-generative-ai-medical-devices-fda/833745/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MedTech Dive</a>, four national organizations representing hospitals, physicians, and telehealth companies — the American Hospital Association (AHA), American Medical Association (AMA), American Telemedicine Association (ATA), and the Workgroup for Electronic Data Interchange (WEDI) — filed comments arguing that device developers, not the clinicians who use their tools, should carry the primary burden of safety and performance accountability.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The language is direct. The <a href="https://www.americantelemed.org/wp-content/uploads/2026/10/ATA-Action-FDA-GenAI-Comments-10.19.26-FINAL.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ATA's letter</a> states that "the manufacturer should remain responsible for the safety and performance of the device it sells, including when that device runs on a third-party foundation model." The AHA told FDA that "vendors and developers must be responsible for the ongoing performance, maintenance and integrity of the tools they market." Neither group is arguing clinicians should have zero role — both say providers support evaluation and monitoring activity — but they are asking FDA to anchor legal and regulatory accountability with the company that built and maintains the model, not the person using it at the point of care.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two arguments underneath the position
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The first is a transparency problem. Hospitals told FDA they often can't see inside the models they're deploying — no visibility into training data, update cadence, or failure modes — which makes it practically impossible for a provider to independently catch a flaw before it reaches a patient. The AHA also pushed back on using "activity level" alone (how autonomous a function is) to set the bar for risk, arguing FDA should weigh the likelihood of an error and the probability of a negative outcome alongside it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The second is a human-in-the-loop critique from the AMA, and it's the sharper of the two. The AMA's letter argued that simply inserting a clinician at the end of an AI pipeline doesn't automatically make the output safe — reviewers can make their own errors evaluating AI suggestions, or become over-reliant on a tool that is usually right. Meaningful supervision, the AMA's October 16, 2026 letter <a href="https://www.discoveriesinhealthpolicy.com/2026/10/an-early-view-stakeholders-respond-to.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">argued</a>, requires more than a human in the loop: the reviewer needs relevant information, expertise, time, cognitive capacity, and the authority to reject or stop the system. WEDI's comments add two concrete asks on top of that: an FDA process for adverse-event reporting specific to generative AI devices, and "nutrition label"-style disclosures that tell clinicians and patients what a given tool does and where its risks lie.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                FDA's discussion paper itself proposes a two-axis way to think about this: one axis scores how independently a device acts — from non-directive information, to action-directing information, to supervised action, to fully autonomous action — and the other scores how severe the consequences are if the output is wrong. The provider groups' comments are effectively arguing that wherever a tool lands on that grid, the manufacturer doesn't get to hand off accountability just because a clinician is technically present in the workflow.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where an AI-drafted CT report falls on that grid
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                AI-generated radiology reporting sits squarely in FDA's "supervised action" category — the AI produces a structured, directive output (a draft report), and a radiologist decides whether to accept, correct, or reject it before it reaches a patient's chart. That's a different liability shape than a fully autonomous tool that issues findings with no review, which is not how any FDA-cleared diagnostic reporting AI operates today.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">FDA autonomy level</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">What it looks like</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Who's exposed if it's wrong</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Non-directive information</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Dashboards, worklist analytics</td>
                      <td className="py-3 text-[#444] font-light">Lowest regulatory scrutiny</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Action-directing information</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Triage flags, case prioritization</td>
                      <td className="py-3 text-[#444] font-light">Shared; depends on how the flag is used</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Supervised action</td>
                      <td className="py-3 pr-4 text-[#444] font-light">AI drafts a CT report; radiologist reviews and signs</td>
                      <td className="py-3 text-[#444] font-light">Layered — vendor owns model behavior, radiologist owns the signed read</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Fully autonomous action</td>
                      <td className="py-3 pr-4 text-[#444] font-light">AI issues findings with no human review</td>
                      <td className="py-3 text-[#444] font-light">Highest scrutiny — not used in diagnostic reporting today</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That "layered" row is the whole dispute in miniature. Provider groups aren't trying to erase the radiologist's role in the middle row — they're trying to stop the model's performance, drift, and failure modes from being treated as the signing clinician's problem to independently discover.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the model xAID is already built on: AI produces a structured CT report draft, xAID's in-house radiologist reviews every preliminary for quality before it goes anywhere, and the report is delivered ready-to-sign to the client's reading radiologist. That extra review layer sits on the vendor side of the line provider groups are asking FDA to draw — the entity responsible for the model's behavior reviews its own output before a clinician ever has to catch a flaw unassisted. It doesn't remove the radiologist from the loop; it means the loop has a second, vendor-side checkpoint before the signing physician's checkpoint, rather than one checkpoint carrying the entire weight FDA's "supervised action" category implies.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did hospital and physician groups tell the FDA about AI liability?',
                    a: "The American Hospital Association, American Medical Association, American Telemedicine Association, and Workgroup for Electronic Data Interchange told FDA that developers, not clinicians, should be accountable for the safety and performance of generative AI-enabled medical devices. The ATA wrote that 'the manufacturer should remain responsible for the safety and performance of the device it sells,' and the AHA said 'vendors and developers must be responsible for the ongoing performance, maintenance and integrity of the tools they market.'",
                  },
                  {
                    q: "What is FDA's generative AI discussion paper and when were comments due?",
                    a: "On August 18, 2026, FDA's Digital Health Center of Excellence released 'Considerations for the Regulation of Generative AI-Enabled Medical Devices,' a discussion paper (docket FDA-2026-N-7874) asking the public 26 questions about risk assessment, premarket evaluation, and postmarket monitoring for generative AI devices. It is not draft or final guidance. The comment period closed October 19, 2026.",
                  },
                  {
                    q: "Why do provider groups say a human reviewing AI output isn't enough?",
                    a: "The AMA's comment letter argued that human-in-the-loop review does not automatically reduce risk, because clinicians can make their own errors reviewing AI suggestions or become over-reliant on the tool. The AMA wrote that meaningful physician supervision requires more than placing a human at the end of an automated process — the reviewer needs relevant information, expertise, time, cognitive capacity, and the authority to reject or stop the system.",
                  },
                  {
                    q: 'Who is accountable when an AI-drafted CT report is wrong?',
                    a: "Under a draft-then-sign model, accountability is layered rather than placed entirely on the clinician at the end of the chain. The AI vendor is responsible for the performance, validation, and monitoring of the model that produces the draft; a radiologist reviews that draft before it is delivered; and the client's reading radiologist signs the final report. That structure matches what provider groups are asking FDA to require industry-wide: the entity that built and maintains the model owns the model's behavior, and the signing clinician isn't left to independently catch flaws in a system they can't see inside.",
                  },
                  {
                    q: 'What did FDA say about next steps on generative AI device regulation?',
                    a: "Rick Abramson of FDA's Digital Health Center of Excellence said the agency plans to post draft guidance on regulating generative AI-enabled medical devices within the coming months, after reviewing the comments submitted to the discussion paper docket.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.medtechdive.com/news/developers-not-doctors-held-accountable-generative-ai-medical-devices-fda/833745/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MedTech Dive</a>, "Developers, not doctors, should be held accountable for generative AI medical devices, providers say" (Oct. 2026); FDA, <a href="https://www.fda.gov/news-events/press-announcements/fda-seeks-public-feedback-inform-regulatory-approach-generative-ai-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"FDA Seeks Public Feedback to Inform Regulatory Approach for Generative AI-Enabled Medical Devices"</a> (Aug. 18, 2026); American Telemedicine Association, <a href="https://www.americantelemed.org/wp-content/uploads/2026/10/ATA-Action-FDA-GenAI-Comments-10.19.26-FINAL.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">comment letter to FDA docket FDA-2026-N-7874</a> (Oct. 19, 2026); Discoveries in Health Policy, <a href="https://www.discoveriesinhealthpolicy.com/2026/10/an-early-view-stakeholders-respond-to.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">analysis of the AMA's Oct. 16, 2026 comment letter</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A vendor-side review layer, before your radiologist ever sees it"
          sub="xAID's in-house radiologist reviews every AI-drafted CT report before it's delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/fda-ai-regulation-radiology-societies/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">What RSNA Told the FDA About Regulating Generative AI</div>
              </Link>
              <Link to="/blog/ama-agentic-ai-governance-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AMA's Agentic AI Governance Framework: A Checklist for Imaging AI Buyers</div>
              </Link>
              <Link to="/blog/medical-device-recall-radiologist-oversight/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A Medical Device Recall Tied to 4 Deaths Is a Warning About Checkpoint Design</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiMedicalLiabilityCtReporting;
