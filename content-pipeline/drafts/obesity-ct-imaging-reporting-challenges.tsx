import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const ObesityCtImagingReportingChallenges = () => {
  const post = {
    title: "Obesity and CT Imaging: The Reporting Problem Nobody's Sizing Up",
    dateIso: '2026-09-10',
    date: 'September 10, 2026',
    category: 'Radiology Reporting',
    readingTime: 7,
    description: "A new review argues radiology departments aren't ready for the 'obesity pandemic.' The equipment story is well known — but bigger patients also mean noisier, more artifact-laden CT studies that take longer to read and caveat carefully. Here's the reporting side of the problem.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Obesity and CT Imaging: The Reporting Problem | xAID</title>
        <meta name="description" content="A new review says radiology isn't ready for the obesity pandemic. Beyond bigger tables, obesity makes CT studies noisier and harder to report." />
        <link rel="canonical" href="https://xaid.ai/blog/obesity-ct-imaging-reporting-challenges/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Obesity and CT Imaging: The Reporting Problem | xAID" />
        <meta property="og:description" content="A new review says radiology isn't ready for the obesity pandemic. Beyond bigger tables, obesity makes CT studies noisier and harder to report." />
        <meta property="og:url" content="https://xaid.ai/blog/obesity-ct-imaging-reporting-challenges/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Obesity and CT Imaging: The Reporting Problem | xAID" />
        <meta name="twitter:description" content="A new review says radiology isn't ready for the obesity pandemic. Beyond bigger tables, obesity makes CT studies noisier and harder to report." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/obesity-ct-imaging-reporting-challenges/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/obesity-ct-imaging-reporting-challenges/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "obesity ct imaging, bariatric ct protocol, obesity radiology reporting, image quality obesity, CT artifact obesity"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does obesity affect CT image quality?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Increased tissue mass raises X-ray attenuation, which a new narrative review in Academic Radiology says can degrade CT and X-ray image quality through higher noise, photon starvation, truncation artifacts and reduced contrast resolution — even when the scanner physically accommodates the patient. Technologists often have to raise mA and kV to compensate, which increases radiation dose and is not always enough to fully restore image quality."
              }
            },
            {
              "@type": "Question",
              "name": "Does obesity make CT scans harder to report, not just harder to acquire?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The technical effects of obesity on CT — added noise, photon starvation, truncation artifacts and lower contrast resolution — are exactly the conditions that force a radiologist to qualify findings, note technical limitations, and sometimes recommend additional imaging. That reporting burden is a direct extension of the acquisition problem, even though most coverage of obesity in radiology focuses on equipment and table weight limits."
              }
            },
            {
              "@type": "Question",
              "name": "What did the Academic Radiology review on obesity and radiology departments find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The review, led by Teodoro Martín-Noguerol, MD, and colleagues, found that obesity affects nearly every stage of radiologic care — from whether a patient physically fits into a CT or MRI system, to radiation dose, image quality, patient transfers, and interventional radiology procedures. The authors concluded that most radiology departments are not yet structurally ready for the scale of the obesity pandemic, and called for departments to factor patient size into equipment purchasing, imaging-space design, staffing and protocol development rather than reacting equipment-by-equipment."
              }
            },
            {
              "@type": "Question",
              "name": "How common is obesity among patients getting imaged?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the United States, 40.3% of adults had obesity and 9.4% had severe obesity during August 2021–August 2023, according to the CDC's National Center for Health Statistics. Worldwide, the World Health Organization estimated 890 million adults, or 16% of adults, were living with obesity in 2022. Because obesity is linked to conditions that themselves drive imaging demand, a growing share of the CT worklist is affected."
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
                Radiology Reporting
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Obesity and CT imaging:<br />
              <span className="text-white/60">the reporting problem nobody's sizing up</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new review argues radiology departments aren't ready for the obesity pandemic. Most of the coverage is about tables and gantries. The harder problem is what a bigger patient does to the CT images themselves — and to the report a radiologist has to write about them.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '40.3%', label: 'US adults with obesity', sub: 'CDC, Aug 2021–Aug 2023' },
            { stat: '9.4%', label: 'US adults with severe obesity', sub: 'same CDC period' },
            { stat: '72.4%', label: 'US adults overweight or obese', sub: 'age 20+, CDC/NCHS' },
            { stat: '890M', label: 'Adults living with obesity', sub: 'worldwide, WHO 2022' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the new review found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A narrative review published in <a href="https://doi.org/10.1016/j.acra.2026.08.109" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Academic Radiology</em></a> — led by Teodoro Martín-Noguerol, MD, of the radiology department at HT Medica in Spain, with Jorge Escartín, Cynthia Vidal-Cameán, Jimena R. Díaz-Carreño, Pilar López-Úbeda and Antonio Luna — argues that obesity now touches "virtually every stage" of radiologic care, as summarized by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/experts-say-radiology-departments-must-adapt-obesity-pandemic" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>: whether a patient physically fits into a CT or MRI system, radiation dose, image quality, patient transfers, and interventional procedures.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "This situation, as occurs with COVID-19, is showing direct impact at the same time in society and healthcare, including radiology departments," the authors wrote. "However, in our opinion, unfortunately, not every radiology department is ready to face the obesity pandemic, not only from a diagnostic scope, but especially regarding technical and logistical issues."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The scale is not a fringe concern. In the United States, <strong>40.3%</strong> of adults had obesity and <strong>9.4%</strong> had severe obesity during August 2021–August 2023, per the <a href="https://www.cdc.gov/nchs/products/databriefs/db508.htm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CDC's National Center for Health Statistics</a>. Globally, the <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">World Health Organization</a> estimated <strong>890 million</strong> adults — 16% of adults worldwide — were living with obesity in 2022. And because obesity correlates with conditions that themselves drive imaging referrals, that's not an isolated subgroup of the worklist; it's a growing share of routine CT volume.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The part of the story that isn't about tables
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most obesity-and-imaging coverage stops at equipment: gantry and bore dimensions that limit who can be scanned, and table weight capacities that vary by system. Those constraints are real and the review documents them. But it also describes something that gets far less attention: even when a patient physically fits and the exam gets acquired, the resulting images are frequently harder to read.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The mechanism is physics, not logistics. Increased tissue mass raises X-ray attenuation, so CT and X-ray systems typically need higher radiation exposure to produce a diagnostically useful image. At the same time, that greater attenuation degrades image quality through <strong>increased noise, photon starvation, truncation artifacts, and reduced contrast resolution</strong> — a set of effects that, in interventional settings, also means CT mA and kV often have to be pushed up to get comparable image quality, and even then, the review notes, comparable quality is "not always achievable."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Positioning gets harder too as body habitus increases, and the review describes downstream effects for interventional radiology specifically: obesity can complicate vascular access, prolong procedures, raise radiation exposure to the operator, and is associated with higher complication rates for some procedures. Every one of those is a technical-difficulty factor that shows up somewhere in the final report — as a caveat, a limitation statement, or a recommendation for additional imaging.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this lands on the reporting radiologist
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Noise, photon starvation, truncation artifacts and reduced contrast resolution aren't abstract QA terms — they're exactly the conditions that force a radiologist to slow down. A study degraded by attenuation effects often can't be read and dictated at the same pace as a clean, standard-habitus exam: findings need to be qualified rather than stated plainly, technical limitations need to be documented explicitly so the referring clinician understands what the images can and can't rule out, and equivocal findings may need a follow-up recommendation instead of a clean answer.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that is captured by an equipment-purchasing decision. A department can buy a wide-bore scanner and a higher-capacity table and still hand its radiologists a steady stream of technically harder, more caveat-laden studies to interpret — because the artifact and noise problems the review describes are a function of the patient's body habitus, not the scanner's bore diameter alone.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Factor</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Standard-habitus CT</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">High-BMI CT</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Image noise / photon starvation</td>
                      <td className="py-3 pr-4">Low, rarely a reporting factor</td>
                      <td className="py-3">Common; often needs explicit caveats</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Truncation artifacts</td>
                      <td className="py-3 pr-4">Uncommon</td>
                      <td className="py-3">More frequent at field-of-view edges</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Radiation dose to reach diagnostic quality</td>
                      <td className="py-3 pr-4">Standard protocol dose</td>
                      <td className="py-3">Often elevated mA/kV, per the review</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Report language</td>
                      <td className="py-3 pr-4">Direct findings</td>
                      <td className="py-3">Frequently qualified, limitation-flagged</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The equity angle isn't just access — it's report quality
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The review frames some of this as an equity issue: if a patient can't be safely accommodated by available equipment, or specialized resources exist only at certain facilities, obesity becomes an additional barrier to timely diagnostic imaging — consequential given how many conditions associated with obesity themselves generate imaging demand. The authors argue that adapting requires more than buying larger equipment reactively; it means factoring patient size and weight capacity into equipment procurement, imaging-space design, staffing, and protocol development from the start.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "The obesity pandemic is not an emerging threat; it is already profoundly affecting everyday radiological practice," the authors concluded. "As radiology served as a vital frontline tool during the COVID-19 pandemic, it must now prepare for the long-term, pervasive demands of obesity. The question is no longer whether radiology departments can adapt, but how quickly they will choose to implement the necessary changes to ensure equitable, safe and high-quality imaging for all patients."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A CT report that has to carry more technical-limitation language, more explicit caveats and more follow-up recommendations doesn't stop being a full report — it becomes a more complex one to draft consistently. That's the kind of structured, comprehensive first draft AI CT reporting is built to produce: every relevant finding and limitation captured in a consistent format, with xAID's in-house radiologist reviewing the preliminary and the report arriving ready-to-sign, so the reading radiologist's time goes toward judgment on the harder cases rather than re-dictating routine structure on every one.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How does obesity affect CT image quality?',
                    a: 'Increased tissue mass raises X-ray attenuation, which a new narrative review in Academic Radiology says can degrade CT and X-ray image quality through higher noise, photon starvation, truncation artifacts and reduced contrast resolution — even when the scanner physically accommodates the patient. Technologists often have to raise mA and kV to compensate, which increases radiation dose and is not always enough to fully restore image quality.',
                  },
                  {
                    q: 'Does obesity make CT scans harder to report, not just harder to acquire?',
                    a: 'Yes. The technical effects of obesity on CT — added noise, photon starvation, truncation artifacts and lower contrast resolution — are exactly the conditions that force a radiologist to qualify findings, note technical limitations, and sometimes recommend additional imaging. That reporting burden is a direct extension of the acquisition problem, even though most coverage of obesity in radiology focuses on equipment and table weight limits.',
                  },
                  {
                    q: 'What did the Academic Radiology review on obesity and radiology departments find?',
                    a: 'The review, led by Teodoro Martín-Noguerol, MD, and colleagues, found that obesity affects nearly every stage of radiologic care — from whether a patient physically fits into a CT or MRI system, to radiation dose, image quality, patient transfers, and interventional radiology procedures. The authors concluded that most radiology departments are not yet structurally ready for the scale of the obesity pandemic, and called for departments to factor patient size into equipment purchasing, imaging-space design, staffing and protocol development rather than reacting equipment-by-equipment.',
                  },
                  {
                    q: 'How common is obesity among patients getting imaged?',
                    a: "In the United States, 40.3% of adults had obesity and 9.4% had severe obesity during August 2021–August 2023, according to the CDC's National Center for Health Statistics. Worldwide, the World Health Organization estimated 890 million adults, or 16% of adults, were living with obesity in 2022. Because obesity is linked to conditions that themselves drive imaging demand, a growing share of the CT worklist is affected.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Martín-Noguerol T, et al. "Are Radiology Departments Ready for the Current Underlying Obesity Pandemic? A Narrative Review." <em>Academic Radiology</em> (2026), <a href="https://doi.org/10.1016/j.acra.2026.08.109" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.acra.2026.08.109</a>, as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-quality/experts-say-radiology-departments-must-adapt-obesity-pandemic" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. US obesity prevalence: <a href="https://www.cdc.gov/nchs/products/databriefs/db508.htm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CDC/NCHS Data Brief No. 508</a> (2024). US overweight-including-obesity prevalence (72.4%, adults 20+, same survey period): <a href="https://www.ncbi.nlm.nih.gov/books/NBK621182/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CDC/NCHS Health E-Stat, "Prevalence of Overweight, Obesity, and Severe Obesity Among Adults"</a>. Global obesity prevalence: <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">WHO obesity and overweight fact sheet</a> (2024). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured, ready-to-sign reports — even on the hard cases"
          sub="See how AI CT reporting handles technically complex studies with consistent, caveat-complete drafts. Try it on 5 free studies."
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
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/portable-mri-icu-reporting-bottleneck/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Portable MRI Is Safe at the Bedside. The Reporting Wait Isn't.</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ObesityCtImagingReportingChallenges;
