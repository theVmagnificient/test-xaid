import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const PetCtFeverOfUnknownOrigin = () => {
  const post = {
    title: 'Study: PET/CT Should Move Earlier in the Fever-of-Unknown-Origin Workup',
    dateIso: '2026-07-28',
    date: 'July 28, 2026',
    category: 'Research & Evidence',
    readingTime: 6,
    description: "A 929-patient Italian multicenter study found FDG PET/CT changed management in nearly 75% of fever-of-unknown-origin cases, and its authors argue it belongs first-line, not third. Here's what the data shows — and why FUO workups are a case study in why sequential imaging needs comparison-ready reporting.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>PET/CT for Fever of Unknown Origin: New Study | xAID</title>
        <meta name="description" content="A 929-patient Italian study found FDG PET/CT changed management in ~75% of fever-of-unknown-origin cases, and why FUO workups need comparison-ready reporting." />
        <link rel="canonical" href="https://xaid.ai/blog/pet-ct-fever-of-unknown-origin/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PET/CT for Fever of Unknown Origin: New Study | xAID" />
        <meta property="og:description" content="A 929-patient Italian study found FDG PET/CT changed management in ~75% of fever-of-unknown-origin cases, and why FUO workups need comparison-ready reporting." />
        <meta property="og:url" content="https://xaid.ai/blog/pet-ct-fever-of-unknown-origin/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PET/CT for Fever of Unknown Origin: New Study | xAID" />
        <meta name="twitter:description" content="A 929-patient Italian study found FDG PET/CT changed management in ~75% of fever-of-unknown-origin cases, and why FUO workups need comparison-ready reporting." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/pet-ct-fever-of-unknown-origin/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/pet-ct-fever-of-unknown-origin/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "PET CT fever of unknown origin, FDG PET/CT FUO, fever of unknown origin imaging workup, PET/CT first-line imaging"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study find about PET/CT for fever of unknown origin?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A retrospective multicenter study of 929 patients across 12 Italian centers, published in the Journal of Nuclear Medicine, found that FDG PET/CT was positive in 549 patients (about 59%) and directly influenced clinical management in nearly 75% of the full cohort. The authors concluded PET/CT has the potential to serve as a first-line tool in the fever-of-unknown-origin workup rather than a second- or third-line test."
              }
            },
            {
              "@type": "Question",
              "name": "Is PET/CT the same as a CT scan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. PET/CT combines a nuclear medicine scan (typically using the radiotracer FDG) with a CT scan for anatomical localization. The study's headline recommendation concerns the PET component and nuclear medicine test ordering — CT alone (chest, abdomen, and pelvis with contrast) remains a separate, earlier step in most fever-of-unknown-origin protocols."
              }
            },
            {
              "@type": "Question",
              "name": "What predicted a positive PET/CT scan in the study?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The researchers identified five factors associated with a higher chance of a positive, diagnostically useful scan: elevated C-reactive protein, a high erythrocyte sedimentation rate, a high neutrophil-to-lymphocyte ratio, fever present at the time of imaging, and a shorter duration of antibiotic therapy before the scan."
              }
            },
            {
              "@type": "Question",
              "name": "How does this relate to CT reporting and AI in radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fever-of-unknown-origin cases typically generate a string of imaging studies across weeks or months — chest X-ray, contrast CT of the chest/abdomen/pelvis, and eventually PET/CT — often read by different radiologists at different sites. That kind of extended, multi-study workup is exactly where structured, comparison-ready CT reports pay off, since each new scan needs to be read against what came before. It is a workflow point, not a claim that AI CT reporting changes nuclear medicine test selection."
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
                Research &amp; Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A 929-patient study says PET/CT should move earlier<br />
              <span className="text-white/60">in the fever-of-unknown-origin workup</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              FDG PET/CT changed how clinicians managed nearly three in four fever-of-unknown-origin patients in a new Italian multicenter study. The finding is squarely about nuclear medicine test ordering — but the diagnostic odyssey it describes is a useful case study in why sequential imaging needs reports that read against what came before.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '929', label: 'FUO patients studied', sub: 'across 12 Italian centers' },
                { stat: '~75%', label: 'Had management changed', sub: 'directly influenced by PET/CT' },
                { stat: '59%', label: 'Had a positive scan', sub: '549 of 929 patients' },
                { stat: '6 mo.', label: 'Minimum follow-up', sub: 'to confirm outcomes' },
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
                What the study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Fever of unknown origin (FUO) — a fever lasting more than three weeks without a diagnosis despite standard workup — is one of the harder diagnostic puzzles in medicine, spanning infection, malignancy, and inflammatory disease. A retrospective study led by <strong>Domenico Albano, MD</strong>, of the Università degli Studi di Brescia and ASST Spedali Civili di Brescia, pooled outcomes from <strong>929 patients across 12 Italian centers</strong> who underwent FDG PET/CT during an FUO workup, published in the <a href="https://doi.org/10.2967/jnumed.125.271525" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of Nuclear Medicine</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The scan was positive — showing a focal abnormality that pointed toward a cause — in <strong>549 patients (about 59%)</strong>, versus 380 negative scans. More strikingly, PET/CT results <a href="https://medicalxpress.com/news/2026-07-molecular-imaging-diagnosis-fever-unknown.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">directly influenced clinical management</a> — new treatment, a targeted biopsy, or a change in diagnostic direction — in roughly <strong>75%</strong> of the full cohort, confirmed against a minimum of six months of clinical follow-up.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Based on that yield, the authors argue for reordering the workup: as <a href="https://radiologybusiness.com/topics/medical-imaging/nuclear-medicine/pet-ct/petct-should-be-first-line-tool-patients-fever-unknown-origin-study-says" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Albano put it</a>, "18F-FDG PET/CT has the potential to be a first-line tool in the workup of FUO, rather than a second- or third-line test." In practice, many FUO protocols still reserve PET/CT for after initial labs, blood cultures, chest imaging, and often a contrast CT of the chest, abdomen, and pelvis have failed to find a source — though this isn't purely a novel proposal: a 2024 appropriate use criteria statement and recent guidelines already call for earlier PET/CT use, and this study adds large-cohort evidence for that shift rather than initiating it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Who is most likely to have a positive scan
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Not every patient benefits equally from an earlier PET/CT. The study identified five factors associated with a higher chance of a positive, clinically useful scan: elevated <strong>C-reactive protein</strong>, a high <strong>erythrocyte sedimentation rate</strong>, a high <strong>neutrophil-to-lymphocyte ratio</strong>, <strong>fever present at the time of imaging</strong>, and a <strong>shorter duration of prior antibiotic therapy</strong>. That points toward a targeting strategy — moving PET/CT earlier for patients who fit this profile — rather than a blanket recommendation to scan everyone with unexplained fever on day one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Where PET/CT sits relative to CT today
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Workup step</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Typical current sequencing</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">What the study proposes</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444]">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium">Labs &amp; cultures</td>
                      <td className="py-3 pr-4">First-line, always</td>
                      <td className="py-3">Unchanged</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium">Chest X-ray / contrast CT (chest-abdomen-pelvis)</td>
                      <td className="py-3 pr-4">First- or second-line</td>
                      <td className="py-3">Unchanged — still an earlier, cheaper anatomic survey</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium">FDG PET/CT</td>
                      <td className="py-3 pr-4">Second- or third-line, after other tests are inconclusive</td>
                      <td className="py-3">Moved earlier for patients with high CRP, high ESR, high NLR, active fever, or minimal antibiotic exposure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Note what isn't changing: the recommendation is about when to order a <em>nuclear medicine</em> scan, not about how CT itself is read or reported. Plain CT of the chest, abdomen, and pelvis remains a standard, earlier step in most FUO protocols — PET/CT is typically ordered when that CT and the initial labs haven't produced an answer.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is still relevant to CT reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                FUO is a useful stress test for imaging workflows generally, even though this particular study is about PET, not CT. A real FUO case rarely involves one scan — it's a sequence: baseline labs, a chest X-ray, a contrast CT, sometimes a repeat CT weeks later to see if a node or collection has changed, and eventually PET/CT if the picture is still unclear. Each new report is only as useful as it is to compare against the one before it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is where structured, comparison-ready CT reporting earns its place in a long diagnostic workup: a report that consistently flags measurable findings by organ system and location makes it easier for the next clinician — or the next radiologist reading a follow-up scan — to see what changed, rather than re-deriving it from prose. It doesn't change which test gets ordered first; it changes how quickly each result in the sequence gets used. That's the workflow layer where AI-assisted, radiologist-reviewed CT reporting fits: a structured, ready-to-sign draft on each scan in the sequence, reviewed in-house before it reaches the reading radiologist who signs it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study find about PET/CT for fever of unknown origin?',
                    a: 'A retrospective multicenter study of 929 patients across 12 Italian centers, published in the Journal of Nuclear Medicine, found that FDG PET/CT was positive in 549 patients (about 59%) and directly influenced clinical management in nearly 75% of the full cohort. The authors concluded PET/CT has the potential to serve as a first-line tool in the fever-of-unknown-origin workup rather than a second- or third-line test.',
                  },
                  {
                    q: 'Is PET/CT the same as a CT scan?',
                    a: "No. PET/CT combines a nuclear medicine scan (typically using the radiotracer FDG) with a CT scan for anatomical localization. The study's headline recommendation concerns the PET component and nuclear medicine test ordering — CT alone (chest, abdomen, and pelvis with contrast) remains a separate, earlier step in most fever-of-unknown-origin protocols.",
                  },
                  {
                    q: 'What predicted a positive PET/CT scan in the study?',
                    a: 'The researchers identified five factors associated with a higher chance of a positive, diagnostically useful scan: elevated C-reactive protein, a high erythrocyte sedimentation rate, a high neutrophil-to-lymphocyte ratio, fever present at the time of imaging, and a shorter duration of antibiotic therapy before the scan.',
                  },
                  {
                    q: 'How does this relate to CT reporting and AI in radiology?',
                    a: 'Fever-of-unknown-origin cases typically generate a string of imaging studies across weeks or months — chest X-ray, contrast CT of the chest/abdomen/pelvis, and eventually PET/CT — often read by different radiologists at different sites. That kind of extended, multi-study workup is exactly where structured, comparison-ready CT reports pay off, since each new scan needs to be read against what came before. It is a workflow point, not a claim that AI CT reporting changes nuclear medicine test selection.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Albano D, et al. "Diagnostic Yield of [18F]FDG PET/CT in FUO: An Italian Multicenter Study of 929 Patients," <em>Journal of Nuclear Medicine</em> (2026), DOI: <a href="https://doi.org/10.2967/jnumed.125.271525" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.2967/jnumed.125.271525</a>. Covered by <a href="https://radiologybusiness.com/topics/medical-imaging/nuclear-medicine/pet-ct/petct-should-be-first-line-tool-patients-fever-unknown-origin-study-says" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://medicalxpress.com/news/2026-07-molecular-imaging-diagnosis-fever-unknown.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medical Xpress</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Long diagnostic workups need reports that compare cleanly"
          sub="xAID drafts structured, comparison-ready CT reports — reviewed in-house before your radiologist signs. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">Reporting Quality</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why Precise Language in Radiology Reports Matters</div>
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

export default PetCtFeverOfUnknownOrigin;
