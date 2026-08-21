import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AmyloidPetImagingMriStructuredReporting = () => {
  const post = {
    title: 'Brain Changes Show Up on MRI 7 Years Before Amyloid Plaques on PET — Why That Makes Report Language a Research Instrument',
    dateIso: '2026-08-21',
    date: 'August 21, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A Nature Neuroscience study followed cognitively healthy adults for nearly two decades and found structural brain changes on MRI at least 7 years before amyloid plaques were detectable on PET. The finding depended on years of directly comparable scan language.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>MRI Brain Changes Precede Amyloid PET by 7 Years | xAID</title>
        <meta name="description" content="A Nature Neuroscience study found MRI brain changes at least 7 years before amyloid plaques appear on PET — and why comparable report language made it possible." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MRI Brain Changes Precede Amyloid PET by 7 Years | xAID" />
        <meta property="og:description" content="A Nature Neuroscience study found MRI brain changes at least 7 years before amyloid plaques appear on PET — and why comparable report language made it possible." />
        <meta property="og:url" content="https://xaid.ai/blog/amyloid-pet-imaging-mri-structured-reporting" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MRI Brain Changes Precede Amyloid PET by 7 Years | xAID" />
        <meta name="twitter:description" content="A Nature Neuroscience study found MRI brain changes at least 7 years before amyloid plaques appear on PET — and why comparable report language made it possible." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/amyloid-pet-imaging-mri-structured-reporting" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/amyloid-pet-imaging-mri-structured-reporting",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "amyloid PET imaging, MRI Alzheimer's biomarkers, structured radiology reporting, longitudinal imaging comparison, cortical thickness amyloid"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study find about MRI and amyloid plaques?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers at the University of Oslo, publishing in Nature Neuroscience, combined 4,570 longitudinal MRI scans and 1,684 amyloid-PET scans from three cognitively healthy cohorts. People who later tested positive for amyloid on PET already showed measurably different cortical-thickness trajectories on MRI scans taken at least 7 years before that PET conversion, compared with people who stayed amyloid-negative."
              }
            },
            {
              "@type": "Question",
              "name": "Does this mean MRI can now replace amyloid PET imaging for early Alzheimer's detection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The study is a research finding about population-level trajectories over nearly two decades of follow-up, not a validated diagnostic test for an individual patient. Amyloid PET imaging and CSF biomarkers remain the accepted methods for confirming amyloid pathology; the authors frame the MRI signal as a candidate early marker worth further study, not a replacement."
              }
            },
            {
              "@type": "Question",
              "name": "Why did this finding require years of directly comparable MRI reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The result rests on comparing cortical-thickness estimates across thousands of scans taken years apart, on different scanners, across three separate cohorts. That kind of comparison only works if the measurements and descriptions of brain structure are recorded in consistent, structured terms scan after scan — inconsistent or free-text-only reporting would blur exactly the small, slow trajectory differences the study depended on."
              }
            },
            {
              "@type": "Question",
              "name": "Is this study relevant to CT reporting and xAID's product?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study itself is MRI and neurodegenerative-disease research, not CT and not a direct product application. Its relevance to CT reporting is the underlying principle: standardized, structured report language makes small changes comparable across time, which is exactly what CT surveillance of nodules, aneurysms, or other findings depends on. xAID's structured, foundation-model-generated CT reports are reviewed in-house before being delivered ready for the reading radiologist to sign, so every report a patient accumulates over time uses consistent terms a radiologist can trust."
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
                Clinical Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Brain changes show up on MRI 7 years before amyloid plaques on PET<br />
              <span className="text-white/60">Why that makes report language a research instrument</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new Nature Neuroscience study followed cognitively healthy adults for nearly two decades and found that structural brain changes are detectable on MRI years before amyloid plaques register on PET — the current gold standard. The finding is MRI, not CT, and it is research, not a diagnostic test. But it is a clean illustration of a principle that also governs CT surveillance: you can only see a slow trajectory if every report along the way describes the same thing the same way.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '7+ yrs', label: 'Earliest MRI signal detected', sub: 'before amyloid-PET conversion' },
            { stat: '4,570', label: 'Longitudinal MRI scans analyzed', sub: 'across three cohorts' },
            { stat: '1,684', label: 'Amyloid-PET scans analyzed', sub: 'used to time conversion' },
            { stat: '~20 yrs', label: 'Follow-up span', sub: 'of repeated brain scans' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study actually found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The research, led by first author James Michael Roe with corresponding author Yunpeng Wang at the University of Oslo's Center for Lifespan Changes in Brain and Cognition (LCBC), was published in <a href="https://doi.org/10.1038/s41593-026-02363-4" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Nature Neuroscience</em></a> (a preprint version circulated on <a href="https://www.biorxiv.org/content/10.1101/2025.08.14.670398v1" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">bioRxiv</a>). The team combined <strong>4,570 longitudinal MRI scans</strong> and <strong>1,684 amyloid-PET scans</strong> from three cognitively healthy cohorts followed over nearly two decades.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The design is what makes the result interesting: for participants who eventually became amyloid-PET-positive, the researchers pinpointed when that conversion happened, then went back and looked only at MRI scans taken <em>before</em> it — comparing cortical-thickness trajectories in people who later converted to those who never did. Even restricting the comparison to MRIs acquired at least <strong>7 years</strong> before the PET scan turned positive, the two groups already looked different: those who went on to accumulate amyloid had thicker cortex and less cortical thinning over that stretch than those who did not.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                As reported by <a href="https://www.news-medical.net/news/20260819/Brain-changes-detect-Alzheimers-seven-years-before-plaques-appear.aspx" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">News-Medical</a>, Roe described it as "the earliest signal detected on brain scans to date, which could be useful for tracking the disease before symptoms emerge." LCBC head and study co-author Anders Martin Fjell called it "the most groundbreaking aspect" of the work — structural change appearing "many years before the first signs of plaque buildup."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The counterintuitive part: thicker, not thinner
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's tempting to assume "early Alzheimer's changes" means atrophy — a thinning cortex. This study found close to the opposite in the pre-conversion window: participants trending toward amyloid positivity showed <em>thicker</em> cortex and slower thinning than their amyloid-negative peers, before their PET scans ever turned positive. The authors' interpretation is that this could reflect an early, possibly inflammatory or compensatory process that precedes or accompanies the earliest stages of amyloid accumulation — not the classic neurodegenerative thinning that shows up much later in the disease course, once plaques and tau pathology are established.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That nuance matters for how the finding should be read. It is not evidence that MRI can already flag which healthy patient will develop Alzheimer's; it is evidence that <em>something</em> measurable on MRI precedes the current gold-standard biomarker by years, which is scientifically important without being clinically actionable yet.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this needed comparable report language, not just comparable images
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A study like this only works if a cortical-thickness measurement taken in one scanning session means the same thing as a cortical-thickness measurement taken years later, on a different scanner, in a different cohort. The researchers used standardized, quantitative pipelines to extract cortical thickness rather than relying on free-text radiology impressions — which is precisely the point. The signal they detected was a difference of a few years' worth of slow trajectory, buried inside nearly two decades of data across three cohorts. Inconsistent terminology or non-comparable measurement conventions would have added noise large enough to bury a signal that small.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the general lesson, and it isn't unique to neuroimaging research. Any imaging workflow that depends on comparing a finding across multiple time points — a lung nodule tracked over serial CTs, an aneurysm measured scan to scan, a lesion followed through a treatment course — depends on the same discipline: structured, consistent measurement and language, not prose that varies with whichever radiologist dictated it that day. A separate CT study found the opposite failure mode in practice — imprecise, hedging language in radiology reports was itself associated with delayed care, as covered in <Link to="/blog/radiology-report-language-precision/" className="text-xaid-blue-strong underline underline-offset-2">Why the Words Radiologists Use Can Delay Care</Link>. Comparable language isn't a stylistic preference; it's what makes longitudinal tracking — clinical or scientific — possible at all.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits — and where it honestly doesn't
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                To be direct about scope: this is MRI research on amyloid biology, not a CT study, and not a description of any xAID product feature. xAID reports on CT, not brain MRI, and makes no claim to detect Alzheimer's pathology. What the study does reinforce is the underlying value of structured, standardized reporting for anything measured over time — the same principle behind xAID's <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model-generated</Link> CT reports, which are structured and consistent by design and reviewed in-house before being delivered ready-to-sign to the reading radiologist. Consistent report language is what lets a radiologist trust that a "stable" or "increased" finding this year means the same thing it meant last year.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study find about MRI and amyloid plaques?',
                    a: 'Researchers at the University of Oslo, publishing in Nature Neuroscience, combined 4,570 longitudinal MRI scans and 1,684 amyloid-PET scans from three cognitively healthy cohorts. People who later tested positive for amyloid on PET already showed measurably different cortical-thickness trajectories on MRI scans taken at least 7 years before that PET conversion, compared with people who stayed amyloid-negative.',
                  },
                  {
                    q: "Does this mean MRI can now replace amyloid PET imaging for early Alzheimer's detection?",
                    a: 'No. The study is a research finding about population-level trajectories over nearly two decades of follow-up, not a validated diagnostic test for an individual patient. Amyloid PET imaging and CSF biomarkers remain the accepted methods for confirming amyloid pathology; the authors frame the MRI signal as a candidate early marker worth further study, not a replacement.',
                  },
                  {
                    q: 'Why did this finding require years of directly comparable MRI reports?',
                    a: 'The result rests on comparing cortical-thickness estimates across thousands of scans taken years apart, on different scanners, across three separate cohorts. That kind of comparison only works if the measurements and descriptions of brain structure are recorded in consistent, structured terms scan after scan — inconsistent or free-text-only reporting would blur exactly the small, slow trajectory differences the study depended on.',
                  },
                  {
                    q: "Is this study relevant to CT reporting and xAID's product?",
                    a: "The study itself is MRI and neurodegenerative-disease research, not CT and not a direct product application. Its relevance to CT reporting is the underlying principle: standardized, structured report language makes small changes comparable across time, which is exactly what CT surveillance of nodules, aneurysms, or other findings depends on. xAID's structured, foundation-model-generated CT reports are reviewed in-house before being delivered ready for the reading radiologist to sign, so every report a patient accumulates over time uses consistent terms a radiologist can trust.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: J.M. Roe et al., "Cortical thickness changes precede high levels of amyloid by at least seven years," <em>Nature Neuroscience</em> (2026), <a href="https://doi.org/10.1038/s41593-026-02363-4" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1038/s41593-026-02363-4</a> (preprint: <a href="https://www.biorxiv.org/content/10.1101/2025.08.14.670398v1" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">bioRxiv</a>), as covered by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/structural-alterations-brain-evident-mri-7-years-amyloid-plaques-ad-patients" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.news-medical.net/news/20260819/Brain-changes-detect-Alzheimers-seven-years-before-plaques-appear.aspx" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">News-Medical</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports. Trusted at every follow-up."
          sub="xAID's foundation-model CT reports use consistent, structured language reviewed in-house — ready for your radiologist to sign. Try it on 5 free studies."
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
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why the Words Radiologists Use Can Delay Care</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
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

export default AmyloidPetImagingMriStructuredReporting;
