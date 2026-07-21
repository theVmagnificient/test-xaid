import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const IncidentalFindingsChestCtBreastLesions = () => {
  const post = {
    title: 'Incidental Findings on Chest CT: The Breast Lesions Radiologists Are Missing',
    dateIso: '2026-07-21',
    date: 'July 21, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A new Academic Radiology study of ED chest CTs found that 70% of scans with a visible, later biopsy-confirmed breast cancer went unreported at the initial read. Here's what it shows about incidental findings on chest CT — and the case for structured secondary review.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Incidental Findings on Chest CT: Breast Lesions | xAID</title>
        <meta name="description" content="A new study found 70% of visible, cancer-confirmed breast lesions were missed on emergency chest CT. What it means for incidental findings on chest CT review." />
        <link rel="canonical" href="https://xaid.ai/blog/incidental-findings-chest-ct-breast-lesions" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Incidental Findings on Chest CT: Breast Lesions | xAID" />
        <meta property="og:description" content="A new study found 70% of visible, cancer-confirmed breast lesions were missed on emergency chest CT. What it means for incidental findings on chest CT review." />
        <meta property="og:url" content="https://xaid.ai/blog/incidental-findings-chest-ct-breast-lesions" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Incidental Findings on Chest CT: Breast Lesions | xAID" />
        <meta name="twitter:description" content="A new study found 70% of visible, cancer-confirmed breast lesions were missed on emergency chest CT. What it means for incidental findings on chest CT review." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/incidental-findings-chest-ct-breast-lesions" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/incidental-findings-chest-ct-breast-lesions",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "incidental findings on chest ct, missed breast lesions ct, breast cancer emergency ct, incidental breast findings chest ct, ai radiology incidental findings"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study find about missed breast lesions on chest CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 study in Academic Radiology reviewed 73 emergency-department chest CT scans from 64 patients who later had a biopsy-confirmed, BI-RADS 4 or 5 breast cancer visible in the field of view. About 70% of those scans had the breast finding missed or not reported at the time of the original read; roughly 30% were caught and reported."
              }
            },
            {
              "@type": "Question",
              "name": "Why are visible breast lesions missed on emergency chest CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Emergency chest CTs are ordered and read for a specific clinical question — chest pain, trauma, suspected pulmonary embolism — not to screen the breast tissue that happens to sit in the scan's field of view. The study found missed lesions were smaller on average (13.6 mm vs. 22.2 mm for detected ones), more often in the right breast, and less often accompanied by cues like axillary lymphadenopathy that helped detected lesions stand out."
              }
            },
            {
              "@type": "Question",
              "name": "What is the clinical cost of a missed incidental breast finding on CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the study, a missed incidental breast lesion translated into a diagnostic delay ranging from 4 to 33 months before the cancer was eventually caught by other means. That gap represents real time lost between a scan that already showed the disease and the point of diagnosis."
              }
            },
            {
              "@type": "Question",
              "name": "How can radiology teams catch more incidental findings on chest CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study authors recommend systematically evaluating the breast parenchyma on every chest CT rather than treating it as outside the reading task, and note that AI-assisted image analysis may help flag incidental findings a time-pressured, indication-focused read can miss. Structured, whole-scan review — where every anatomic region gets a look regardless of the ordering complaint — is the practical fix."
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
              The breast lesion was visible on the chest CT.<br />
              <span className="text-white/60">Nobody was looking for it.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new study of emergency-department chest CTs found that most visible, later-confirmed breast cancers were never mentioned in the original report. It's a specific, measurable version of a broader problem: incidental findings on chest CT that fall outside the reason the scan was ordered.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '70%', label: 'Visible breast cancers missed', sub: 'on the original ED chest CT read' },
                { stat: '73', label: 'Scans reviewed', sub: 'from 64 ED patients, non-breast complaints' },
                { stat: '13.6 vs 22.2 mm', label: 'Avg. size, missed vs. detected', sub: 'smaller lesions missed more often' },
                { stat: '4–33 mo', label: 'Diagnostic delay', sub: 'after a missed finding' },
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
                Radiologists Olgun Sahin, of Izmir City Hospital in Turkey, and Gul Deniz published the analysis in <a href="https://doi.org/10.1016/j.acra.2026.06.052" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Academic Radiology</em></a> in July 2026, titled "Beyond the Primary Complaint: Analysis of Missed and Incidentally Detected Breast Cancers on Emergency Chest CT Scans." They identified 64 patients who had presented to the emergency department for non-breast complaints, then were later diagnosed with breast cancer, and went back through the 73 chest CT scans those patients had on file. Every one of those scans had a BI-RADS 4 or 5 breast lesion visible in the field of view — later confirmed malignant on histopathology.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The finding is stark: about <strong>70%</strong> of those scans had the breast lesion missed or unreported at the time of the original read. Roughly <strong>30%</strong> were caught and documented. These weren't subtle, borderline findings — they were lesions serious enough, by definition, to later prove malignant. The question isn't whether they were visible. It's why they weren't seen, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/visible-breast-lesions-often-overlooked-emergency-chest-ct-scans" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the misses happen — and what made a lesion catchable
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                An emergency chest CT is ordered for a reason — suspected pulmonary embolism, chest trauma, unexplained pain — and it's read against that reason. Breast tissue sits inside the scan's field of view on almost every chest CT, but it isn't what the read is searching for. That gap between what's imaged and what's actively searched is exactly where an incidental finding on chest CT can slip through.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The study's comparison of missed versus detected lesions shows what tipped the balance:
              </p>

              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Characteristic</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Missed lesions</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Detected lesions</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] text-[15px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Mean lesion size</td>
                      <td className="py-3 pr-4">13.6 mm</td>
                      <td className="py-3">22.2 mm</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">More common location</td>
                      <td className="py-3 pr-4">Right breast</td>
                      <td className="py-3">Inner zone</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Associated cues</td>
                      <td className="py-3 pr-4">Fewer supporting findings</td>
                      <td className="py-3">Axillary lymphadenopathy, fatty (Type A) parenchyma</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">Resulting diagnostic delay</td>
                      <td className="py-3 pr-4">4–33 months</td>
                      <td className="py-3">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In other words: the lesions that got caught tended to come with extra visual cues — a suspicious lymph node, a fatty background that made a mass stand out — while the ones that got missed were smaller and less conspicuous, sitting quietly in a part of the image the read wasn't built to interrogate. When they were missed, the delay to eventual diagnosis ran from four months to nearly three years.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A specific version of a familiar problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This isn't a story about diagnostic accuracy on the primary indication — chest CTs read for pulmonary embolism or trauma are typically read well for exactly that question. It's a story about everything else in the frame that a focused, time-pressured read doesn't have bandwidth to also cover. Radiologists reading emergency studies are, reasonably, optimizing attention toward the clinical question that got the patient scanned in the first place; a similar narrowing of attention under pressure shows up in <Link to="/blog/automation-bias-radiology-ai/" className="text-xaid-blue-strong underline underline-offset-2">other radiology detection research</Link> as well.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Three practical implications follow for emergency and general radiology reading:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'The primary indication isn\'t the whole scan',
                    desc: 'Every chest CT captures anatomy well beyond the reason it was ordered — breast tissue, thyroid, adrenal glands, bones. A reporting workflow built only around the ordering complaint leaves that anatomy structurally under-reviewed.',
                  },
                  {
                    title: 'Smaller, less-cued findings need a deliberate second look',
                    desc: 'The lesions most likely to be missed here were smaller and lacked supporting features. A checklist or secondary-review step focused specifically on frequently overlooked regions — breast parenchyma included — catches what a single indication-driven read tends to skip.',
                  },
                  {
                    title: 'A missed incidental finding has a real timeline attached',
                    desc: 'A 4-to-33-month gap between a visible finding and its eventual diagnosis isn\'t an abstraction — it\'s the practical cost of a scan that already contained the answer going unreported.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured, whole-scan review fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The study's own authors point to systematic breast-parenchyma evaluation and AI-assisted image analysis as ways to narrow this gap — not as a replacement for the read, but as a structural check against the parts of a scan that a single, indication-focused pass is prone to skip. That's the same case for a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model approach</Link> to CT reporting: a system that examines the whole volume and drafts a structured, comprehensive report — not just the organ tied to the ordering indication — is built to surface incidental findings on chest CT alongside the primary answer, in a ready-to-sign draft the radiologist reviews before it becomes the final report.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study find about missed breast lesions on chest CT?',
                    a: 'A 2026 study in Academic Radiology reviewed 73 emergency-department chest CT scans from 64 patients who later had a biopsy-confirmed, BI-RADS 4 or 5 breast cancer visible in the field of view. About 70% of those scans had the breast finding missed or not reported at the time of the original read; roughly 30% were caught and reported.',
                  },
                  {
                    q: 'Why are visible breast lesions missed on emergency chest CT?',
                    a: "Emergency chest CTs are ordered and read for a specific clinical question — chest pain, trauma, suspected pulmonary embolism — not to screen the breast tissue that happens to sit in the scan's field of view. The study found missed lesions were smaller on average (13.6 mm vs. 22.2 mm for detected ones), more often in the right breast, and less often accompanied by cues like axillary lymphadenopathy that helped detected lesions stand out.",
                  },
                  {
                    q: 'What is the clinical cost of a missed incidental breast finding on CT?',
                    a: 'In the study, a missed incidental breast lesion translated into a diagnostic delay ranging from 4 to 33 months before the cancer was eventually caught by other means. That gap represents real time lost between a scan that already showed the disease and the point of diagnosis.',
                  },
                  {
                    q: 'How can radiology teams catch more incidental findings on chest CT?',
                    a: 'The study authors recommend systematically evaluating the breast parenchyma on every chest CT rather than treating it as outside the reading task, and note that AI-assisted image analysis may help flag incidental findings a time-pressured, indication-focused read can miss. Structured, whole-scan review — where every anatomic region gets a look regardless of the ordering complaint — is the practical fix.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: O. Sahin, G. Deniz, "Beyond the Primary Complaint: Analysis of Missed and Incidentally Detected Breast Cancers on Emergency Chest CT Scans," <em>Academic Radiology</em> (2026), <a href="https://doi.org/10.1016/j.acra.2026.06.052" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">https://doi.org/10.1016/j.acra.2026.06.052</a>, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/visible-breast-lesions-often-overlooked-emergency-chest-ct-scans" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Every scan, read in full — not just the reason it was ordered."
          sub="xAID's structured, whole-volume reports are built to surface incidental findings alongside the primary indication. Try it on 5 free studies."
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
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default IncidentalFindingsChestCtBreastLesions;
