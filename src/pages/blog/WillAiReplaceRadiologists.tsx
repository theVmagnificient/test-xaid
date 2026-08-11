import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const WillAiReplaceRadiologists = () => {
  const post = {
    title: 'Will AI Replace Radiologists? An Honest, Data-Led Answer',
    dateIso: '2026-07-14',
    date: 'July 14, 2026',
    category: 'AI & The Profession',
    readingTime: 9,
    description: "Will AI replace radiologists? The data says no. What AI does today (drafting, triage), what it can't (accountability, the signature), and what the workforce numbers actually show.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Will AI Replace Radiologists? The Data-Led Answer | xAID</title>
        <meta name="description" content="Will AI replace radiologists? No — demand and pay are rising while AI drafts and triages. What AI does, what it can't do, and who still signs the report." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Will AI Replace Radiologists? The Data-Led Answer | xAID" />
        <meta property="og:description" content="Will AI replace radiologists? No — demand and pay are rising while AI drafts and triages. What AI does, what it can't do, and who still signs the report." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Will AI Replace Radiologists? The Data-Led Answer | xAID" />
        <meta name="twitter:description" content="Will AI replace radiologists? No — demand and pay are rising while AI drafts and triages. What AI does, what it can't do, and who still signs the report." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <link rel="canonical" href="https://xaid.ai/blog/will-ai-replace-radiologists" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/will-ai-replace-radiologists" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/will-ai-replace-radiologists",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "will ai replace radiologists, will radiology be replaced by ai, will ai take over radiology, ai replacing radiology, radiologist shortage, AI CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Will AI replace radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No — not on the evidence available today. AI now drafts findings, flags urgent cases, and measures structures faster than a human can, but it does not carry clinical or legal accountability for a diagnosis. As of 2026 the U.S. FDA has cleared no AI system to issue a final diagnostic radiology report on its own; every authorized device is assistive and works under a radiologist's review. Meanwhile radiologist demand and pay are rising, not collapsing. The realistic near-term future is AI-augmented radiology, not radiologist-free radiology."
              }
            },
            {
              "@type": "Question",
              "name": "Will radiology be replaced by AI as a specialty?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The workforce data points the other way. Radiologist compensation reached roughly $571,000 in 2025, up about 9% year over year per Medscape, and diagnostic radiology remains one of the most in-demand physician specialties. The AAMC projects a U.S. shortage of up to 86,000 physicians by 2036. Imaging volume keeps climbing while the number of trained radiologists grows slowly, so AI is being absorbed as capacity relief inside the specialty rather than as a replacement for it."
              }
            },
            {
              "@type": "Question",
              "name": "Can AI read a scan and sign the report without a radiologist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not in the United States. Every FDA-authorized radiology AI device is cleared as an assistive tool — detection, triage, or measurement support — and a licensed radiologist reviews and signs the final report. In Europe, AI is used more aggressively within screening research (the Swedish MASAI trial used AI to triage mammograms and cut screen-reading workload by about 44%), but even there a radiologist stays in the loop. Autonomous, radiologist-free final reporting is not standard clinical practice in either jurisdiction."
              }
            },
            {
              "@type": "Question",
              "name": "Will AI take over radiology jobs in the next decade?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The more likely outcome is that AI changes what radiologists spend time on rather than eliminating the role. Geoffrey Hinton predicted in 2016 that AI would make radiologists obsolete within five to ten years; a decade later, demand is growing and some departments have expanded headcount. AI is best understood as a productivity layer that drafts and prioritizes, freeing radiologists for judgment, complex cases, and communication — the parts of the job that require human accountability."
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
                AI &amp; The Profession
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Will AI replace radiologists?<br />
              <span className="text-white/60">An honest, data-led answer</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Ten years after the "godfather of AI" said radiologists were finished, the specialty is busier and better paid than ever. Here is the evidence-based answer to whether AI will replace radiologists — what the technology genuinely does today, what it structurally can't, and what the workforce numbers actually show.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '1,100+', label: 'FDA-authorized radiology AI devices', sub: 'all assistive, not autonomous' },
                { stat: '0', label: 'Cleared for a final report alone', sub: 'US / FDA, as of 2026' },
                { stat: '~$571K', label: 'Avg. radiologist pay, 2025', sub: 'up ~9% year over year' },
                { stat: '86,000', label: 'Projected US physician shortfall', sub: 'AAMC, by 2036' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
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
                Will AI replace radiologists? The short answer
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                No — not on any evidence available today. AI will keep taking over specific <em>tasks</em> inside radiology, but it is not replacing the radiologist. The reason is not sentiment; it is structural. AI can generate a draft and rank a worklist, but it cannot hold clinical or legal accountability for a diagnosis, and every serious regulatory regime keeps a licensed physician responsible for the final read.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The question deserves an honest answer because the prediction has a famous author. In 2016, Turing Award and Nobel laureate Geoffrey Hinton said it was "completely obvious" that within five years deep learning would outperform radiologists, and that "people should stop training radiologists now." A decade on, that call has aged badly — and the gap between the prediction and reality is the most useful place to start.{' '}
                <a href="https://fortune.com/2026/05/04/godfather-of-ai-geoffrey-hinton-radiologists-future-of-work-tech-ai-job-anxiety/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">(Fortune revisited the prediction in 2026.)</a>
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What AI actually does in radiology today
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology is, by a wide margin, the most AI-saturated field in medicine — which makes it the best real-world test of the "replacement" thesis. Of the roughly 1,450 AI-enabled medical devices the U.S. FDA has authorized, more than 1,100 (about three-quarters) are for radiology, per the{' '}
                <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FDA's device list</a>{' '}and{' '}
                <a href="https://theimagingwire.com/2025/12/10/ai-enabled-medical-devices-granted-fda-marketing-authorization/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">trade coverage</a>{' '}that puts radiology near 76% of the total as of late 2025.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                And yet, despite more than a thousand cleared tools, no radiologist has been replaced by one. Here is what those tools actually do:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Drafting and measurement',
                    desc: 'AI produces a structured first-pass report — measuring nodules, quantifying volumes, populating templated findings — that a radiologist edits rather than dictates from scratch. This is the core of modern AI CT reporting: a draft, not a decision.',
                  },
                  {
                    title: 'Triage and prioritization',
                    desc: 'AI re-orders the worklist so a suspected intracranial hemorrhage or pulmonary embolism jumps to the top. It changes the order in which a radiologist reads, not whether a radiologist reads.',
                  },
                  {
                    title: 'Detection support (a second set of eyes)',
                    desc: 'AI flags subtle findings that fatigue or volume might cause a human to miss. In screening, it functions as a tireless second reader — but the human still owns the conclusion.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Every one of these is a productivity function. None of them is the whole job. The difference between assisting a radiologist and replacing one is the difference between drafting a report and being accountable for it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What AI can't do: accountability and the signature
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The hard limit on "AI replacing radiology" is not accuracy — it is responsibility. A radiology report is a legal medical document. Someone has to stand behind it, integrate it with the patient's history, decide what is clinically relevant versus incidental, communicate critical results, and answer for it if it is wrong. Software cannot be sued, cannot be licensed, and cannot be held to a standard of care.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That is why regulators have not licensed AI to work alone. As of 2026, the U.S. FDA has cleared <strong>no</strong> AI device to issue a final diagnostic radiology report autonomously — its device classifications authorize each radiology AI system as an assistive tool that operates under a radiologist's review. That is consistent with a review of FDA-cleared AI/ML devices in radiology published in{' '}
                <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2841066" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Network Open</em></a>, which found that most are designed to be used in conjunction with a human. The signature stays human by design, not by accident.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the "draft-then-sign" reality of clinical AI, and it is the natural home for a tool like xAID: the AI drafts, a human is accountable. This workflow is covered in depth in{' '}
                <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="text-xaid-blue-strong underline underline-offset-2">how AI radiology reporting works, draft to signature</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Will radiology be replaced by AI? What the workforce data shows
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                If AI were replacing radiologists, you would see it in the labor market: falling demand, falling pay, shrinking training programs. The opposite is happening. Radiologist compensation reached roughly <strong>$571,000</strong> in 2025 — up about <strong>9%</strong> year over year per Medscape — and diagnostic radiology is repeatedly ranked among the most in-demand physician specialties.{' '}
                <a href="https://fortune.com/2026/05/04/godfather-of-ai-geoffrey-hinton-radiologists-future-of-work-tech-ai-job-anxiety/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">(Fortune, 2026.)</a>
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Individual departments tell the same story. Since Hinton's 2016 prediction, the Mayo Clinic's radiology staff in Rochester has grown by about 55%, to roughly 400 radiologists — a workforce figure the <em>New York Times</em> revisited in 2026, as{' '}
                <a href="https://radiologybusiness.com/topics/artificial-intelligence/ny-times-revisits-nobel-prize-winners-prediction-ai-will-render-radiologists-obsolete" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>. Hardly a specialty in retreat.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Zoom out and the driver is demographic, not technological. The AAMC projects a U.S. shortage of up to{' '}
                <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">86,000 physicians by 2036</a>, driven by an aging population and slow-growing supply. Imaging volume keeps rising while the pipeline of trained radiologists grows only incrementally. In that environment, AI is not competing with radiologists for their jobs — it is being deployed to close a capacity gap they physically cannot fill. This is unpacked in{' '}
                <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">the 2026 radiologist shortage and AI CT reporting</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                AI vs. radiologist: who does what
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The clearest way to answer "will AI take over radiology" is to separate the tasks AI is genuinely good at from the ones that require a human.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">Task</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">AI today</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">Radiologist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Drafting structured findings', 'Fast, consistent first pass', 'Reviews and corrects'],
                      ['Triaging urgent cases', 'Re-ranks worklist in seconds', 'Sets protocol, acts on flags'],
                      ['Detecting subtle findings', 'Tireless second set of eyes', 'Confirms, contextualizes'],
                      ['Judgment on incidental findings', 'Limited, no history context', 'Owns the decision'],
                      ['Accountability for the report', 'None — cannot be licensed', 'Legally responsible'],
                      ['Signing the final report', 'Not permitted (US / FDA)', 'Signs the final read'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100 align-top">
                        <td className="text-[#0D0D0D] text-[14px] font-medium py-3 pr-4">{row[0]}</td>
                        <td className="text-[#666] text-[14px] font-light py-3 pr-4">{row[1]}</td>
                        <td className="text-[#666] text-[14px] font-light py-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read the table top to bottom and the pattern is obvious: AI is strongest at the mechanical top rows and absent from the accountable bottom ones. That is the shape of augmentation, not replacement. For a closer look at how the accuracy actually compares, see{' '}
                <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="text-xaid-blue-strong underline underline-offset-2">how accurate AI radiology reporting is</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Will AI take over radiology faster in Europe than the US?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Jurisdiction matters, and the honest answer is that Europe is experimenting more aggressively — but still not autonomously. In Sweden, the randomized MASAI trial used AI to triage screening mammograms to single or double reading and to flag suspicious findings. The interim safety analysis, published in{' '}
                <a href="https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(23)00298-X/abstract" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>The Lancet Oncology</em></a>, reported a roughly <strong>44%</strong> reduction in screen-reading workload without loss of cancer detection.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is a real and important result — but note what it is not. AI reduced how much reading radiologists had to do; it did not remove the radiologist. Screening remained under human oversight, within a controlled research setting in a single screening program, not autonomous clinical practice. The transatlantic picture is a difference of degree, not of kind: AI takes on more volume, humans keep the responsibility.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this leaves radiologists — and where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The realistic future is not radiologist-free radiology; it is radiology where the routine drafting and prioritizing is done by AI so radiologists can concentrate on judgment, complex cases, multidisciplinary communication, and the growing volume no human workforce can absorb alone. The radiologists who thrive will be the ones who use AI as leverage.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is exactly the model xAID is built on. A radiology foundation model produces a comprehensive, structured report draft; xAID's in-house radiologist reviews every preliminary; and the draft is delivered ready-to-sign. The AI never signs — it does the first pass, and a radiologist stays accountable end to end. See{' '}
                <Link to="/how-ai-ct-reporting-works/" className="text-xaid-blue-strong underline underline-offset-2">how AI CT reporting works</Link>{' '}or compare the approach in{' '}
                <Link to="/ai-vs-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">AI vs. teleradiology</Link>.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Will AI replace radiologists?',
                    a: "No — not on the evidence available today. AI now drafts findings, flags urgent cases, and measures structures faster than a human can, but it does not carry clinical or legal accountability for a diagnosis. As of 2026 the U.S. FDA has cleared no AI system to issue a final diagnostic radiology report on its own; every authorized device is assistive and works under a radiologist's review. Meanwhile radiologist demand and pay are rising, not collapsing. The realistic near-term future is AI-augmented radiology, not radiologist-free radiology.",
                  },
                  {
                    q: 'Will radiology be replaced by AI as a specialty?',
                    a: 'The workforce data points the other way. Radiologist compensation reached roughly $571,000 in 2025, up about 9% year over year per Medscape, and diagnostic radiology remains one of the most in-demand physician specialties. The AAMC projects a U.S. shortage of up to 86,000 physicians by 2036. Imaging volume keeps climbing while the number of trained radiologists grows slowly, so AI is being absorbed as capacity relief inside the specialty rather than as a replacement for it.',
                  },
                  {
                    q: 'Can AI read a scan and sign the report without a radiologist?',
                    a: 'Not in the United States. Every FDA-authorized radiology AI device is cleared as an assistive tool — detection, triage, or measurement support — and a licensed radiologist reviews and signs the final report. In Europe, AI is used more aggressively within screening research (the Swedish MASAI trial used AI to triage mammograms and cut screen-reading workload by about 44%), but even there a radiologist stays in the loop. Autonomous, radiologist-free final reporting is not standard clinical practice in either jurisdiction.',
                  },
                  {
                    q: 'Will AI take over radiology jobs in the next decade?',
                    a: 'The more likely outcome is that AI changes what radiologists spend time on rather than eliminating the role. Geoffrey Hinton predicted in 2016 that AI would make radiologists obsolete within five to ten years; a decade later, demand is growing and some departments have expanded headcount. AI is best understood as a productivity layer that drafts and prioritizes, freeing radiologists for judgment, complex cases, and communication — the parts of the job that require human accountability.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: Geoffrey Hinton's 2016 prediction and 2026 follow-up via{' '}
                <a href="https://fortune.com/2026/05/04/godfather-of-ai-geoffrey-hinton-radiologists-future-of-work-tech-ai-job-anxiety/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Fortune</a>; the Mayo Clinic workforce figure (<em>New York Times</em>) via{' '}
                <a href="https://radiologybusiness.com/topics/artificial-intelligence/ny-times-revisits-nobel-prize-winners-prediction-ai-will-render-radiologists-obsolete" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; FDA AI-enabled device counts via the{' '}
                <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA</a>{' '}and{' '}
                <a href="https://theimagingwire.com/2025/12/10/ai-enabled-medical-devices-granted-fda-marketing-authorization/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>; the "most devices used in conjunction with a human" finding via{' '}
                <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2841066" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>JAMA Network Open</em></a>; physician shortage via the{' '}
                <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AAMC</a>; MASAI trial via{' '}
                <a href="https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(23)00298-X/abstract" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>The Lancet Oncology</em></a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI drafts. A radiologist signs. That's the model that works."
          sub="xAID produces comprehensive, ready-to-sign CT report drafts — reviewed by our in-house radiologist, signed by yours. Try it on 5 free studies."
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
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The 2026 Radiologist Shortage and AI CT Reporting</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">How It Works</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: Draft, Then Sign</div>
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

export default WillAiReplaceRadiologists;
