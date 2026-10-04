import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AiBetterInformedThanDoctors = () => {
  const post = {
    title: "Is AI Better Than Doctors? What FDA Rules and Malpractice Law Actually Say",
    dateIso: '2026-10-04',
    date: 'October 4, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "HHS Secretary RFK Jr. called AI 'better informed' than any doctor. Six medical societies objected. Here's what FDA clearance and malpractice law require.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Is AI Better Than Doctors? What FDA Rules Say | xAID</title>
        <meta name="description" content="HHS Secretary RFK Jr. called AI 'better informed' than any doctor. Six medical societies objected. Here's what FDA clearance and malpractice law require." />
        <link rel="canonical" href="https://xaid.ai/blog/ai-better-informed-than-doctors/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Is AI Better Than Doctors? What FDA Rules Say | xAID" />
        <meta property="og:description" content="HHS Secretary RFK Jr. called AI 'better informed' than any doctor. Six medical societies objected. Here's what FDA clearance and malpractice law actually require." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-better-informed-than-doctors" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is AI Better Than Doctors? What FDA Rules Say | xAID" />
        <meta name="twitter:description" content="HHS Secretary RFK Jr. called AI 'better informed' than any doctor. Six medical societies objected. Here's what FDA clearance and malpractice law actually require." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-better-informed-than-doctors" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-better-informed-than-doctors",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "is ai better than doctors, AI vs doctors, FDA AI clearance radiology, AI malpractice liability, RFK Jr AI doctors"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Did the HHS secretary really say AI is \"better informed\" than doctors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. At a fireside chat with Vice President JD Vance closing the Make America Healthy Again Summit in Washington, D.C. on September 29, 2026, HHS Secretary Robert F. Kennedy Jr. said AI can give patients \"a second opinion that is much better informed than any doctor in the country\" and that it could \"free us from medical tyranny.\" He also said OpenAI CEO Sam Altman told him it would be \"malpractice\" for a doctor to diagnose or prescribe without checking AI first — a quote that comes from Kennedy's own account of a private conversation, not a public statement by Altman."
              }
            },
            {
              "@type": "Question",
              "name": "How did physician groups respond to the claim?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The next day, six major U.S. medical societies — the American Medical Association, American Academy of Family Physicians, American Academy of Pediatrics, American College of Obstetricians and Gynecologists, American College of Physicians, and American College of Surgeons — issued a joint statement saying claims that \"AI is inherently better informed than physicians, or that physicians cannot be trusted to make clinical decisions without first consulting this technology, diminish physician expertise and risk undermining patients' trust.\""
              }
            },
            {
              "@type": "Question",
              "name": "Does the FDA allow AI to diagnose patients without a doctor reviewing the result?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Almost never. As of mid-2026 the FDA had authorized 1,614 AI-enabled medical devices, 1,230 of them (76%) in radiology, and nearly all are cleared as decision-support tools that flag or draft findings for a clinician to review — not as autonomous diagnosticians. The first exception came in 2018, when the FDA granted De Novo authorization to an AI system that screens for diabetic retinopathy in ophthalmology; a couple of similar autonomous screening tools for that same eye condition have followed since. Even those tools only issue a binary \"refer\" or \"don't refer\" alert rather than a diagnosis or treatment plan, and no radiology AI carries that kind of autonomous authorization."
              }
            },
            {
              "@type": "Question",
              "name": "Is a doctor legally liable if an AI-assisted report turns out to be wrong?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Current U.S. malpractice law holds physicians accountable for the standard of care regardless of whether AI was used, and no statute or court ruling shifts that liability to an AI vendor or establishes that skipping AI constitutes malpractice. The legal system, like the FDA's clearance labels, keeps a human clinician as the accountable party."
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
              Is AI "better informed" than doctors?<br />
              <span className="text-white/60">What FDA rules and malpractice law actually say</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A sitting HHS secretary told a summit crowd that AI already out-informs any doctor in the country. Six medical societies objected within a day. Set the rhetoric aside and the regulatory and legal record says something more specific — and more useful for anyone deciding how AI actually gets used in care.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '76%', label: 'FDA AI tools are radiology', sub: 'share of all 1,614 clearances' },
            { stat: '6', label: 'medical societies objected', sub: 'to the HHS secretary’s claim' },
            { stat: '2018', label: 'first autonomous AI nod', sub: 'eye-screening task; still none in radiology' },
            { stat: '0', label: 'rulings requiring AI use', sub: 'to avoid a malpractice claim' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the HHS secretary said
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                At a fireside chat with Vice President JD Vance closing the <a href="https://radiologybusiness.com/topics/artificial-intelligence/physicians-fire-back-against-hhs-secretarys-claim-ai-better-informed-human-docs" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Make America Healthy Again Summit</a> in Washington, D.C. on September 29, 2026, HHS Secretary Robert F. Kennedy Jr. told attendees that AI can already give patients "a second opinion that is much better informed than any doctor in the country," and that the technology could "free us from medical tyranny."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Kennedy went further, recounting a private conversation with OpenAI CEO Sam Altman in which, he said, Altman told him it would now be "malpractice" for a physician to make a diagnosis or write a prescription without first checking AI. That line, as <a href="https://www.forbes.com/sites/siladityaray/2026/09/29/rfk-jr-says-ai-can-free-us-from-medical-tyranny-and-is-better-informed-than-doctors/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Forbes reported</a>, comes entirely from Kennedy's own retelling — Altman has not made that statement publicly.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Six medical societies said the claim doesn't hold up
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The next day, six of the country's largest physician organizations — the <a href="https://www.ama-assn.org/press-center/ama-press-releases/statement-leading-physician-organizations-role-augmented" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Medical Association, American Academy of Family Physicians, American Academy of Pediatrics, American College of Obstetricians and Gynecologists, American College of Physicians, and American College of Surgeons</a> — issued a joint statement. It didn't dispute that AI has value; it disputed the framing: "Statements suggesting AI is inherently better informed than physicians, or that physicians cannot be trusted to make clinical decisions without first consulting this technology, diminish physician expertise and risk undermining patients' trust."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The societies' point was narrower than "AI bad." Physicians, they said, "evaluate patients in context" — asking questions, weighing a patient's specific circumstances, exercising judgment, and taking responsibility for the outcome. AI, they argued, "has tremendous potential to provide new tools and insights," but pitting it against physician expertise, rather than building it into physician-led workflows, "does not advance this important work."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What FDA clearance actually allows AI to do
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Set the political rhetoric aside and the FDA's own clearance record tells a consistent, much narrower story. Software that is intended to "inform or influence" a clinical diagnosis is regulated as a medical device, and the agency reviews it against a specific, stated intended use — not a general claim of being "better informed" than a physician, as a <a href="https://pubs.rsna.org/doi/full/10.1148/radiol.230242" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2024 review in RSNA's journal <em>Radiology</em></a> lays out.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                By that process, the FDA had authorized <strong>1,614</strong> AI-enabled medical devices as of mid-2026, and <strong>1,230</strong> of them — <strong>76%</strong> — are radiology tools, according to <a href="https://theimagingwire.com/2026/09/13/radiology-maintained-its-lead-in-fda-approvals/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">tracking of the FDA's AI-enabled device list</a>. Radiology is, by a wide margin, the specialty where the FDA has cleared the most AI. But clearance is not the same as autonomy: the overwhelming majority of these authorizations are labeled as decision-support — software that flags, measures, or drafts findings for a clinician to review, not software cleared to issue a final, unreviewed diagnosis.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The first exception to that pattern sits outside radiology entirely, and it's still the only place the exception lives. In 2018 the agency granted De Novo authorization — its pathway for novel, lower-risk device types — to an autonomous AI system for diabetic retinopathy screening in ophthalmology; a small number of similar autonomous screening tools for that same eye condition have since followed. None of them renders a diagnosis or a treatment plan: each <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11703125/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">issues a binary alert</a> — "diabetic retinopathy detected" or "not detected" — that tells a patient whether to see an eye specialist. In more than seven years since the first of those authorizations, the FDA has not granted that kind of autonomous clearance anywhere in radiology.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What malpractice law actually says
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The legal system reinforces the same constraint from a different direction. "Current US malpractice law holds physicians accountable for malpractice regardless of whether AI was used or not," as a legal analysis in the <a href="https://www.ajmc.com/view/faqs-about-ai-in-radiology-legal-risks-liability-and-malpractice" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Journal of Managed Care</a> puts it. There is no federal statute that redistributes liability to an AI vendor when a diagnosis goes wrong, and the standard courts apply is the traditional one: whether a radiologist acted with the knowledge, skill, and judgment of a reasonably prudent radiologist under similar circumstances — not whether an algorithm was consulted.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                No ruling has gone the other direction, either: no court has held that failing to use an available AI tool is itself malpractice. Whatever a political speech claims about AI's superiority, the people who actually carry legal risk when a report is wrong — radiologists, ordering physicians, hospitals — have every incentive to keep a human reviewer as the final step, because that is where the law still places accountability.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Rhetoric vs. the regulatory and legal record
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-[#0D0D0D] text-sm font-medium py-3 pr-4">The claim in circulation</th>
                      <th className="text-[#0D0D0D] text-sm font-medium py-3">What FDA clearance and malpractice law actually say</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        claim: 'AI gives patients a second opinion "better informed than any doctor."',
                        reality: 'Every FDA-cleared radiology AI is labeled for clinician review of its output — none is authorized to issue a final, unreviewed diagnosis.',
                      },
                      {
                        claim: 'It would be "malpractice" not to check AI before diagnosing.',
                        reality: 'No court has held that skipping AI is malpractice; physicians remain liable for the diagnosis regardless of whether AI was used.',
                      },
                      {
                        claim: 'AI could replace physician judgment outright.',
                        reality: "The FDA's autonomous-diagnosis clearances, the first in 2018, cover one binary screening task in ophthalmology — not general diagnosis, and not radiology.",
                      },
                      {
                        claim: 'Doctors who don’t adopt AI are taking on legal risk.',
                        reality: 'Liability still runs through the "reasonably prudent physician" standard; AI vendors carry limited, case-by-case exposure of their own.',
                      },
                    ].map((row) => (
                      <tr key={row.claim} className="border-b border-gray-100 align-top">
                        <td className="text-[#444] text-[15px] leading-[1.6] font-light py-3 pr-4">{row.claim}</td>
                        <td className="text-[#444] text-[15px] leading-[1.6] font-light py-3">{row.reality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits in this picture
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The debate over whether AI is "better informed" than a physician is, functionally, a debate about autonomy — and the regulatory and legal record above says autonomy isn't what's cleared or insured today, in radiology or anywhere else. That's also the model AI CT reporting is built on: a foundation model produces a structured, <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">comprehensive report draft</Link>, xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign. The technology does the drafting; a radiologist stays the accountable final read — which is precisely the arrangement the FDA's clearance labels and malpractice law currently require, whatever gets said from a podium.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Did the HHS secretary really say AI is "better informed" than doctors?',
                    a: 'Yes. At a fireside chat with Vice President JD Vance closing the Make America Healthy Again Summit in Washington, D.C. on September 29, 2026, HHS Secretary Robert F. Kennedy Jr. said AI can give patients "a second opinion that is much better informed than any doctor in the country" and that it could "free us from medical tyranny." He also said OpenAI CEO Sam Altman told him it would be "malpractice" for a doctor to diagnose or prescribe without checking AI first — a quote that comes from Kennedy’s own account of a private conversation, not a public statement by Altman.',
                  },
                  {
                    q: 'How did physician groups respond to the claim?',
                    a: 'The next day, six major U.S. medical societies — the American Medical Association, American Academy of Family Physicians, American Academy of Pediatrics, American College of Obstetricians and Gynecologists, American College of Physicians, and American College of Surgeons — issued a joint statement saying claims that "AI is inherently better informed than physicians, or that physicians cannot be trusted to make clinical decisions without first consulting this technology, diminish physician expertise and risk undermining patients’ trust."',
                  },
                  {
                    q: 'Does the FDA allow AI to diagnose patients without a doctor reviewing the result?',
                    a: 'Almost never. As of mid-2026 the FDA had authorized 1,614 AI-enabled medical devices, 1,230 of them (76%) in radiology, and nearly all are cleared as decision-support tools that flag or draft findings for a clinician to review — not as autonomous diagnosticians. The first exception came in 2018, when the FDA granted De Novo authorization to an AI system that screens for diabetic retinopathy in ophthalmology; a couple of similar autonomous screening tools for that same eye condition have followed since. Even those tools only issue a binary "refer" or "don’t refer" alert rather than a diagnosis or treatment plan, and no radiology AI carries that kind of autonomous authorization.',
                  },
                  {
                    q: 'Is a doctor legally liable if an AI-assisted report turns out to be wrong?',
                    a: 'Yes. Current U.S. malpractice law holds physicians accountable for the standard of care regardless of whether AI was used, and no statute or court ruling shifts that liability to an AI vendor or establishes that skipping AI constitutes malpractice. The legal system, like the FDA’s clearance labels, keeps a human clinician as the accountable party.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/artificial-intelligence/physicians-fire-back-against-hhs-secretarys-claim-ai-better-informed-human-docs" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.forbes.com/sites/siladityaray/2026/09/29/rfk-jr-says-ai-can-free-us-from-medical-tyranny-and-is-better-informed-than-doctors/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Forbes</a>, <a href="https://www.ama-assn.org/press-center/ama-press-releases/statement-leading-physician-organizations-role-augmented" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Medical Association</a>, <a href="https://theimagingwire.com/2026/09/13/radiology-maintained-its-lead-in-fda-approvals/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>, <a href="https://pubs.rsna.org/doi/full/10.1148/radiol.230242" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RSNA <em>Radiology</em></a>, <a href="https://www.ajmc.com/view/faqs-about-ai-in-radiology-legal-risks-liability-and-malpractice" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Journal of Managed Care</a>, and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11703125/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">PMC</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI that drafts. A radiologist who signs."
          sub="No autonomy debate needed — it's the model FDA clearance and malpractice law already point to. Try it on 5 free studies."
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
              <Link to="/blog/will-ai-replace-radiologists/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI &amp; The Profession</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Will AI Replace Radiologists? An Honest, Data-Led Answer</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: What Chest X-ray Studies Show About Draft-Then-Sign</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiBetterInformedThanDoctors;
