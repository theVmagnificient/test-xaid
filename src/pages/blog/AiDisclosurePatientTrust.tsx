import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import BlogCTA from '@/components/BlogCTA';

const AiDisclosurePatientTrust = () => {
  const post = {
    title: 'Should Patients Be Told When AI Reads Their Scan? What a New Survey Reveals',
    dateIso: '2026-07-02',
    date: 'July 2, 2026',
    category: 'AI Ethics & Trust',
    readingTime: 6,
    description: "In a survey of more than 1,000 imaging patients, 96% said they should be told when AI is used to report on their scan — and 64% said both the doctor and the AI share the blame if it's wrong. Here's what the data means for how imaging centers disclose AI and keep a radiologist accountable.",
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | xAID Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/should-patients-be-told-when-ai-reads-their-scan" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/should-patients-be-told-when-ai-reads-their-scan" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/should-patients-be-told-when-ai-reads-their-scan",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "AI in radiology, AI disclosure radiology, patient consent AI imaging, should patients be told AI, radiologist accountability AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do patients want to know when AI is used to read their scan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. In a 2026 survey of more than 1,000 imaging patients published in RSNA's journal Radiology, about 96% said patients should be informed when AI is used to report on their images. The survey was conducted in the waiting areas of an imaging department between July 2024 and April 2025 in Ireland."
              }
            },
            {
              "@type": "Question",
              "name": "How do patients want to consent to AI use in imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the same survey, 53% of respondents preferred to give consent in writing, while 34% preferred verbal consent. This suggests patients want disclosure to be explicit and documented, not implicit — a practical consideration for how imaging centers integrate AI into intake and reporting workflows."
              }
            },
            {
              "@type": "Question",
              "name": "Who do patients think is responsible if an AI-assisted report is wrong?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "When asked who would be at fault if an incorrect result was provided when images were read by AI together with a radiologist, 64% of respondents said both the doctor and the technology. Patients intuitively expect a human radiologist to remain accountable for the final report, even when AI assists."
              }
            },
            {
              "@type": "Question",
              "name": "What does patient disclosure mean for imaging centers using AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It means AI adoption is not only a clinical and financial decision but a trust decision. Centers should be prepared to disclose when AI assists a report, keep a radiologist accountable for every final read, and communicate that human oversight clearly. Doing so aligns with what patients say they expect and reduces the risk of eroding trust as AI use becomes routine."
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
              <Link to="/blog" className="text-white/40 hover:text-white/60 text-[15px] font-light transition-colors">← Blog</Link>
              <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                AI Ethics &amp; Trust
              </span>
              <span className="text-white/40 text-sm">{post.date}</span>
              <span className="text-white/30 text-sm">{post.readingTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Should patients be told when AI reads their scan?<br />
              <span className="text-white/60">What a new survey reveals</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Nearly every patient surveyed said yes — and most want it documented. A new study of more than 1,000 imaging patients turns AI disclosure from an abstract ethics debate into a concrete operational question for every imaging center.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '96%', label: 'Want to be told when AI is used', sub: 'to report their scan' },
                { stat: '1,000+', label: 'Imaging patients surveyed', sub: 'Ireland, 2024–2025' },
                { stat: '53%', label: 'Prefer written consent', sub: 'vs 34% verbal' },
                { stat: '64%', label: 'Blame both doctor and AI', sub: 'if the result is wrong' },
              ].map((s) => (
                <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-medium text-xaid-blue mb-1">{s.stat}</div>
                  <div className="text-white text-xs font-medium mb-1">{s.label}</div>
                  <div className="text-white/40 text-xs">{s.sub}</div>
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
                What the survey found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers set out to understand how patients actually feel about AI in their imaging care, and published the results in RSNA's journal <a href="https://pubs.rsna.org/journal/radiology" target="_blank" rel="noopener noreferrer" className="text-xaid-blue hover:underline"><em>Radiology</em></a>. The team surveyed more than 1,000 patients in the waiting areas of an imaging department between July 2024 and April 2025.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The headline number is hard to ignore: about <strong>96%</strong> said patients should be informed when AI is used to report on their images. That's not a slim majority — it's near-unanimous. AI disclosure in imaging is no longer a hypothetical policy question; it's an expectation patients already hold.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                They also want it to be explicit. Asked how they'd prefer to consent, <strong>53%</strong> chose written consent versus <strong>34%</strong> who would accept verbal consent. Patients aren't satisfied with AI use being buried in a form they never see — a majority want it documented.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The accountability signal everyone should notice
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The most revealing finding wasn't about disclosure at all. When asked who would be at fault if an incorrect result was produced when images were read by AI alongside a radiologist, <strong>64%</strong> said <em>both</em> the doctor and the technology.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read that closely. Patients don't imagine a future where AI reads the scan alone and takes the blame alone. They assume a human radiologist stays in the loop and shares responsibility for the final result. Their mental model of trustworthy AI in imaging already includes a physician who is accountable — which is exactly the model regulators and professional bodies endorse, since no AI system today is approved for autonomous final reporting without radiologist sign-off.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is now an operational question, not an ethics seminar
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For years, "AI transparency in healthcare" lived in conference panels. This survey drags it into daily operations. If 96% of your patients would want to know that AI touched their report, then how you disclose it — and whether you can credibly say a radiologist reviewed every read — becomes part of your patient experience, not a footnote.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Three practical implications follow for imaging centers, teleradiology providers, and hospital imaging departments:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Disclosure becomes part of intake',
                    desc: 'With a majority preferring written consent, AI use is drifting toward the same explicit-consent posture as other parts of care. Centers adopting AI should decide now how they surface it at intake, rather than retrofitting it after a patient asks.',
                  },
                  {
                    title: 'A radiologist must stay accountable — visibly',
                    desc: "Patients assign shared fault to the physician and the tool. That only holds if a radiologist actually reviews and signs the report. AI that produces a draft a radiologist reviews fits this expectation; fully autonomous reads do not.",
                  },
                  {
                    title: 'Trust is a competitive variable',
                    desc: 'As AI use becomes routine, being able to say clearly "AI assists, a radiologist signs, and we tell you" is a differentiator with patients and referrers — not just a compliance checkbox.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting actually works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The survey describes the model patients already trust: AI assists, a radiologist stays accountable. That's the model AI CT reporting is built on — the AI produces a structured, <Link to="/blog/foundation-models-vs-narrow-ai-radiology" className="text-xaid-blue hover:underline">comprehensive report draft</Link>, and a radiologist reviews and signs every one before it reaches a patient's chart. Every xAID report is radiologist-reviewed by design. The transparency patients are asking for isn't a constraint on this workflow — it's a description of it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Do patients want to know when AI is used to read their scan?',
                    a: "Yes. In a 2026 survey of more than 1,000 imaging patients published in RSNA's journal Radiology, about 96% said patients should be informed when AI is used to report on their images. The survey was conducted in the waiting areas of an imaging department between July 2024 and April 2025 in Ireland.",
                  },
                  {
                    q: 'How do patients want to consent to AI use in imaging?',
                    a: 'In the same survey, 53% of respondents preferred to give consent in writing, while 34% preferred verbal consent. This suggests patients want disclosure to be explicit and documented, not implicit — a practical consideration for how imaging centers integrate AI into intake and reporting workflows.',
                  },
                  {
                    q: 'Who do patients think is responsible if an AI-assisted report is wrong?',
                    a: 'When asked who would be at fault if an incorrect result was provided when images were read by AI together with a radiologist, 64% of respondents said both the doctor and the technology. Patients intuitively expect a human radiologist to remain accountable for the final report, even when AI assists.',
                  },
                  {
                    q: 'What does patient disclosure mean for imaging centers using AI?',
                    a: 'It means AI adoption is not only a clinical and financial decision but a trust decision. Centers should be prepared to disclose when AI assists a report, keep a radiologist accountable for every final read, and communicate that human oversight clearly. Doing so aligns with what patients say they expect and reduces the risk of eroding trust as AI use becomes routine.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#999] text-[13px] leading-[1.6] font-light mt-10">
                Source: survey of imaging patients published in RSNA's <em>Radiology</em> (2026), as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/nearly-100-patients-surveyed-say-theyd-want-know-when-ai-used-imaging" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15829002/most-patients-want-to-know-if-ai-being-used-for-imaging-reports" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI assists. A radiologist signs. Every time."
          sub="That's the model patients say they trust — and it's how xAID works. Try it on 5 free studies and see the radiologist-reviewed reports."
          primaryLabel="Request free pilot"
          primaryTo="/#contact-us"
          secondaryLabel="See how it works"
          secondaryTo="/how-ai-ct-reporting-works"
        />

        {/* Related */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/is-ai-radiology-reporting-hipaa-compliant" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Compliance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Is AI Radiology Reporting HIPAA Compliant?</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiDisclosurePatientTrust;
