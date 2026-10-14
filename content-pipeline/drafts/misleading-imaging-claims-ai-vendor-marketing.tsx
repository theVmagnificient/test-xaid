import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MisleadingImagingClaimsAiVendorMarketing = () => {
  const post = {
    title: 'Misleading Imaging Claims: What a New Radiology Warning Means for AI Vendor Marketing',
    dateIso: '2026-10-14',
    date: 'October 14, 2026',
    category: 'AI Ethics & Trust',
    readingTime: 7,
    description: 'Radiology leaders just warned that misleading claims about imaging trends could damage patient access. The same scrutiny applies to AI-reporting vendor marketing — here is how to tell a defensible accuracy claim from hype.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Misleading Imaging Claims in AI Vendor Marketing | xAID</title>
        <meta name="description" content="Radiologists warned that misleading imaging claims can shape policy decisions. The same evidence standard applies to AI vendor marketing claims too." />
        <link rel="canonical" href="https://xaid.ai/blog/misleading-imaging-claims-ai-vendor-marketing/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Misleading Imaging Claims in AI Vendor Marketing | xAID" />
        <meta property="og:description" content="Radiologists warned that misleading imaging claims can shape policy decisions. The same evidence standard applies to AI vendor marketing claims too." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Misleading Imaging Claims in AI Vendor Marketing | xAID" />
        <meta name="twitter:description" content="Radiologists warned that misleading imaging claims can shape policy decisions. The same evidence standard applies to AI vendor marketing claims too." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/misleading-imaging-claims-ai-vendor-marketing" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/misleading-imaging-claims-ai-vendor-marketing",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "misleading imaging claims, AI vendor marketing claims, radiology AI accuracy claims, AI validation radiology, radiology AI vendor evaluation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new radiology editorial say about misleading imaging claims?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In October 2026, leaders at the Harvey L. Neiman Health Policy Institute published a JACR editorial warning that an influential claim — that falling imaging volumes mean the U.S. no longer needs more radiologists — is misleading because it rests on data through 2016 and ignores a decade of evidence showing rising imaging volume, complexity and radiologist workload. They warned that an unfounded claim, once repeated, can quickly become accepted wisdom and shape workforce and policy decisions."
              }
            },
            {
              "@type": "Question",
              "name": "Does the same scrutiny apply to AI-reporting vendor marketing claims?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, by the same logic. An independent 2025 review found that only 66% of 173 CE-certified radiology AI products had any peer-reviewed evidence behind them, and most of that evidence stops at diagnostic accuracy rather than clinical outcomes. The FTC has separately warned that AI performance and comparative-superiority claims are deceptive unless backed by competent, reliable evidence — the same standard the JACR editorial is asking policy claims to meet."
              }
            },
            {
              "@type": "Question",
              "name": "Does FDA clearance mean an AI tool's accuracy claims are validated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not necessarily. About 94.6% of FDA-authorized AI/ML medical devices, including most radiology AI, are cleared through the 510(k) pathway, which requires showing substantial equivalence to an existing device rather than independent clinical validation. Researchers writing in Radiology: Artificial Intelligence have noted that regulatory rigor and public transparency about that rigor are distinct and often conflated by marketing language."
              }
            },
            {
              "@type": "Question",
              "name": "What should imaging centers and teleradiology companies ask AI vendors before buying?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask for the regulatory pathway (510(k) versus De Novo), whether performance was validated on an external, multi-institution dataset rather than only the training site, whether the evidence is peer-reviewed and vendor-independent, and whether the claim is about diagnostic accuracy only or about real clinical outcomes. A published systematic review found specificity can drop by as much as 24 percentage points when AI models are tested outside their training institution — a gap marketing materials rarely disclose."
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
                AI Ethics &amp; Trust
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Misleading imaging claims<br />
              <span className="text-white/60">don't stay confined to one debate</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new editorial from radiology's own policy researchers warns that an unfounded claim about imaging volume could shape workforce decisions for years. The same test for what counts as evidence — not hype — belongs on every AI-reporting vendor's marketing page too.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '66%', label: 'Radiology AI products with evidence', sub: 'up from 36% in 2020' },
            { stat: '~95%', label: 'FDA AI clearances via 510(k)', sub: 'substantial equivalence, not a trial' },
            { stat: '24 pts', label: 'Max specificity drop seen', sub: 'internal vs external validation' },
            { stat: '2016', label: 'Last year of cited imaging data', sub: 'in the disputed workforce claim' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The warning: a claim becomes "accepted wisdom" before it's checked
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In April 2026, Harvard economist David Cutler and co-author Lev Klarnet argued in <a href="https://jamanetwork.com/journals/jama-health-forum/fullarticle/2847522" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">JAMA Health Forum</a> that falling per-capita imaging volume had "allowed the U.S. to meet the need for imaging without an increase in radiologists" — and floated AI as a way to stretch the existing radiologist workforce further, especially in underserved areas.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers at the Harvey L. Neiman Health Policy Institute, led by executive director Elizabeth Rula, PhD, pushed back hard. Their JACR editorial — covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-staffing/misleading-claims-about-imaging-could-have-damaging-ripple-effect-radiology-experts-warn" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15837225/hpi-evidence-contradicts-broad-claims-about-ai-radiology-workforce" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a> — called the assertion "counter to recent collective experience of the radiology community" and said it "ignores a decade of evidence." The core problem: the per-capita imaging data Cutler and Klarnet cited runs only through 2016, while Neiman HPI's own research projects total U.S. imaging use will grow <strong>17% to 27%</strong> by 2055, driven by an aging population, and documents rising examination complexity, RVU workload and radiologist turnover in the years since.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The editorial's real warning isn't about one economist's paper. It's about what happens when an unverified claim gets repeated until it functions as fact — shaping residency choices, staffing plans, payer policy, and now, implicitly, how much AI capacity is assumed to fill a gap that may not exist the way it's described.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The same test applies to AI vendor marketing
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                If a workforce claim deserves scrutiny because it could shape policy, an accuracy claim on an AI-reporting vendor's homepage deserves at least as much — it directly shapes what a radiologist trusts to flag or miss a finding. The evidence base is not reassuring. An independent audit of <a href="https://doi.org/10.1007/s00330-025-11830-8" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">173 CE-certified radiology AI products from 90 vendors</a>, published in <em>European Radiology</em> in 2025, found that <strong>66%</strong> had any peer-reviewed supporting evidence at all — up from 36% in a 2020 baseline, real progress, but still leaving a third of commercial products with no published validation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Even among products with published evidence, most studies stop at diagnostic accuracy on a single dataset: the same 2025 audit found only about <strong>22–24%</strong> of supporting studies examined real clinical or economic impact, a share that has barely moved, while independently (non-vendor) authored studies actually <em>declined</em> as a share of the literature, from 49% to 45%. A statistical sanity-check of outperformance claims across medical-imaging AI papers more broadly — published as a <a href="https://arxiv.org/abs/2505.04720" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2025 preprint</a> by Christodoulou et al. — found that more than 80% of papers introducing a new method claimed to outperform prior approaches, but a large share of those claims (86% for classification tasks, 53% for segmentation) had a high statistical probability of being false rather than genuine.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                "FDA cleared" is not the same claim as "clinically validated"
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Buyers often treat FDA clearance as a proxy for proven accuracy. It isn't designed to be one. A 2025 analysis of 2024 FDA authorizations, published in <em>Biomedicines</em>, found that <strong>94.6%</strong> of ML-enabled devices cleared that year went through the <a href="https://doi.org/10.3390/biomedicines13123005" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">510(k) pathway</a> — which requires showing substantial equivalence to an already-cleared predicate device, not an independent clinical trial — with radiology accounting for 74% of those clearances. Writing in <em>Radiology: Artificial Intelligence</em>, researchers Diab and Lotter made the distinction explicit: FDA <a href="https://doi.org/10.1148/ryai.250369" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">validation rigor and public transparency about that rigor are separate questions</a>, and marketing language frequently conflates "authorized" with "rigorously validated."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The gap matters most when a model leaves the site it was built on. A systematic review of radiology AI generalizability studies published between January 2022 and June 2025, in the <em>Annals of Medicine and Surgery</em>, found that external validation at a different institution produced a median AUC drop of only about 0.03 — but specificity losses of up to <a href="https://doi.org/10.1097/MS9.0000000000004166" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">24 percentage points</a> in some cases (one example dropped from 94% to 70%). A headline accuracy number measured in a vendor's own validation set is a real number — it just may not be the number that shows up at a buyer's site.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Regulators are already drawing this line
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This isn't only a radiology-journal debate. The FTC's <a href="https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Keep your AI claims in check"</a> guidance states plainly that performance claims are deceptive unless backed by competent, reliable evidence, and that any claim an AI product outperforms a prior or competing product requires actual comparative testing data — not an assumption. Under <a href="https://www.hklaw.com/en/insights/publications/2026/08/operation-ai-comply-2-years-later-continued-enforcement" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Operation AI Comply,"</a> the agency has brought more than a dozen enforcement actions against unsubstantiated AI capability claims since 2024. The Neiman editorial and the FTC's guidance are really making the same point from different directions: a claim that isn't backed by evidence someone else can check isn't a finding, it's marketing.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What a defensible claim looks like
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Question to ask</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Hype answer</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Defensible answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { q: 'Where was accuracy measured?', hype: 'Internal validation set only', ok: 'External, multi-institution test set, disclosed' },
                      { q: 'Who ran the study?', hype: 'Vendor-funded, vendor-authored', ok: 'Independent or peer-reviewed, vendor-disclosed as funder' },
                      { q: 'What does "FDA cleared" mean here?', hype: 'Implied equivalent to a clinical trial', ok: 'Named pathway (510(k)/De Novo) and predicate stated' },
                      { q: 'What outcome is claimed?', hype: '"Improves accuracy" (vague)', ok: 'Named metric, dataset, and comparison baseline' },
                      { q: 'Is it comparative?', hype: '"Outperforms radiologists/competitors"', ok: 'Backed by head-to-head testing data, or not claimed' },
                    ].map((row) => (
                      <tr key={row.q} className="border-b border-gray-100 align-top">
                        <td className="py-3 pr-4 text-[#444] font-light">{row.q}</td>
                        <td className="py-3 pr-4 text-[#666] font-light">{row.hype}</td>
                        <td className="py-3 text-[#666] font-light">{row.ok}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this is an argument against AI in reporting — it's an argument for buyers reading claims the way the Neiman editorial wants policymakers to read workforce statistics: by checking what evidence actually backs the number. For imaging centers and teleradiology companies evaluating vendors, that means asking for the dataset behind a validation figure, not just the figure. It's also the reasoning behind how xAID's workflow is built: the AI produces a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">structured report draft</Link>, xAID's in-house radiologist reviews every preliminary, and the result reaches a client ready-to-sign — so the claim being made is about a reviewed draft, not an unsupervised verdict.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new radiology editorial say about misleading imaging claims?',
                    a: 'In October 2026, leaders at the Harvey L. Neiman Health Policy Institute published a JACR editorial warning that an influential claim — that falling imaging volumes mean the U.S. no longer needs more radiologists — is misleading because it rests on data through 2016 and ignores a decade of evidence showing rising imaging volume, complexity and radiologist workload. They warned that an unfounded claim, once repeated, can quickly become accepted wisdom and shape workforce and policy decisions.',
                  },
                  {
                    q: 'Does the same scrutiny apply to AI-reporting vendor marketing claims?',
                    a: 'Yes, by the same logic. An independent 2025 review found that only 66% of 173 CE-certified radiology AI products had any peer-reviewed evidence behind them, and most of that evidence stops at diagnostic accuracy rather than clinical outcomes. The FTC has separately warned that AI performance and comparative-superiority claims are deceptive unless backed by competent, reliable evidence — the same standard the JACR editorial is asking policy claims to meet.',
                  },
                  {
                    q: "Does FDA clearance mean an AI tool's accuracy claims are validated?",
                    a: 'Not necessarily. About 94.6% of FDA-authorized AI/ML medical devices, including most radiology AI, are cleared through the 510(k) pathway, which requires showing substantial equivalence to an existing device rather than independent clinical validation. Researchers writing in Radiology: Artificial Intelligence have noted that regulatory rigor and public transparency about that rigor are distinct and often conflated by marketing language.',
                  },
                  {
                    q: 'What should imaging centers and teleradiology companies ask AI vendors before buying?',
                    a: 'Ask for the regulatory pathway (510(k) versus De Novo), whether performance was validated on an external, multi-institution dataset rather than only the training site, whether the evidence is peer-reviewed and vendor-independent, and whether the claim is about diagnostic accuracy only or about real clinical outcomes. A published systematic review found specificity can drop by as much as 24 percentage points when AI models are tested outside their training institution — a gap marketing materials rarely disclose.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: Holland &amp; Knight, <a href="https://www.hklaw.com/en/insights/publications/2026/08/operation-ai-comply-2-years-later-continued-enforcement" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Operation AI Comply" Two Years Later</a> (2026); <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-staffing/misleading-claims-about-imaging-could-have-damaging-ripple-effect-radiology-experts-warn" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15837225/hpi-evidence-contradicts-broad-claims-about-ai-radiology-workforce" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> on the Neiman Health Policy Institute's JACR editorial; Cutler &amp; Klarnet, <a href="https://jamanetwork.com/journals/jama-health-forum/fullarticle/2847522" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">JAMA Health Forum</a> (2026); Antonissen et al., <a href="https://doi.org/10.1007/s00330-025-11830-8" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>European Radiology</em></a> (2025); Christodoulou et al., <a href="https://arxiv.org/abs/2505.04720" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">arXiv preprint</a> (2025); Almarie et al., <a href="https://doi.org/10.3390/biomedicines13123005" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>Biomedicines</em></a> (2025); Diab &amp; Lotter, <a href="https://doi.org/10.1148/ryai.250369" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>Radiology: Artificial Intelligence</em></a> (2025); Suleman et al., <a href="https://doi.org/10.1097/MS9.0000000000004166" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>Annals of Medicine and Surgery</em></a> (2025); FTC, <a href="https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Keep your AI claims in check"</a> (2023). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A claim is only as good as its evidence."
          sub="See the validation behind xAID's reports — foundation-model drafts, radiologist-reviewed, delivered ready-to-sign. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">Vendor Evaluation</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI Vendor Evaluation Checklist</div>
              </Link>
              <Link to="/blog/radiology-ai-clinical-outcomes-evidence-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The AI Radiology Clinical Outcomes Evidence Gap</div>
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

export default MisleadingImagingClaimsAiVendorMarketing;
