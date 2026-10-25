import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CtFfrFdaClearancePathway = () => {
  const post = {
    title: "What a 106-Day FDA Clearance Reveals About the Bar for CT-AI Software",
    dateIso: '2026-10-25',
    date: 'October 25, 2026',
    category: 'Regulatory & Policy',
    readingTime: 7,
    description: "Elucid's FFR-IQ cleared FDA in 106 days on a 491-vessel trial. What its 510(k) path reveals about how CT-AI software, including reporting AI, actually clears.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CT-FFR FDA Clearance: The Bar for CT-AI Tools | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/ct-ffr-fda-clearance-pathway/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CT-FFR FDA Clearance: The Bar for CT-AI Tools | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/ct-ffr-fda-clearance-pathway/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CT-FFR FDA Clearance: The Bar for CT-AI Tools | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ct-ffr-fda-clearance-pathway/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ct-ffr-fda-clearance-pathway/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "CT-FFR, FFR-CT FDA clearance, CT AI FDA pathway, 510k quantitative imaging software, FDA clearance radiology AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA clear for Elucid's FFR-IQ software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On September 29, 2026, FDA cleared Elucid's FFR-IQ (510(k) K262015) as a Traditional 510(k), product code PJA, for the non-invasive estimation of fractional flow reserve from coronary CT angiography. FFR-IQ is described as \"plaque-informed\" or \"BioIntegrated\" FFR-CT because it folds plaque composition data from Elucid's separately cleared Plaque-IQ software, including lipid-rich necrotic core measurements, into the physiological estimate, rather than relying only on luminal geometry."
              }
            },
            {
              "@type": "Question",
              "name": "How fast did FFR-IQ clear the FDA, and why does that matter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FDA records show Elucid's submission was received on June 15, 2026 and cleared on September 29, 2026 — 106 days. That is fast for a 510(k), and it lines up with a pattern: Elucid's earlier Plaque-IQ clearance in 2024 also took exactly 106 days from receipt to decision. Narrow, quantitative claims backed by a large head-to-head validation dataset against an accepted clinical comparator tend to move through FDA review quickly; broad, qualitative claims generally do not."
              }
            },
            {
              "@type": "Question",
              "name": "What does \"plaque-informed\" FFR-CT mean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Conventional FFR-CT software estimates blood flow significance using computational fluid dynamics applied to the lumen's geometry alone. FFR-IQ's BioIntegrated approach also incorporates plaque tissue characteristics, such as lipid-rich necrotic core, measured by Elucid's Plaque-IQ software. In its ELUCIDATE validation trial of 491 vessels in 347 patients, FFR-IQ showed 92.2% sensitivity and 93.1% specificity against invasive, wire-based FFR."
              }
            },
            {
              "@type": "Question",
              "name": "What does this clearance show about how CT-AI tools, including reporting AI, get cleared?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FFR-IQ did not create a new device category. It reused an existing product code (PJA) that FDA established via De Novo review for CT-derived coronary physiology software in 2013-2014 (received November 2013, granted November 2014), and it reused a validated building block (Plaque-IQ) that Elucid had already cleared on its own evidence in 2024. Add a large trial against a recognized gold-standard comparator, and the result is a fast Traditional 510(k). For report-generating CT-AI, the analogous bar is a well-defined, measurable claim, a credible comparator, and a large validation set — which is why xAID pairs its reporting output with in-house radiologist review on every preliminary rather than claiming an autonomous read."
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
              A coronary CT-FFR tool just cleared FDA in 106 days.<br />
              <span className="text-white/60">Here's what that says about the real clearance bar.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Elucid's plaque-informed FFR-CT software isn't a general CT-reporting product. But its path through FDA — reused product code, a validated building block, a large trial against a clinical gold standard — is a useful template for what regulators actually expect from next-generation quantitative CT-AI, reporting tools included.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '106 days', label: 'FDA review time', sub: 'June 15 → Sept 29, 2026' },
            { stat: '92.2%', label: 'Sensitivity vs. invasive FFR', sub: 'ELUCIDATE trial' },
            { stat: '93.1%', label: 'Specificity vs. invasive FFR', sub: 'same cohort' },
            { stat: '491', label: 'Vessels validated', sub: '347 patients' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually got cleared
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 29, 2026, FDA cleared Elucid's FFR-IQ software, as first reported by <a href="https://www.auntminnie.com/clinical-news/ct/news/15838110/elucid-gets-fda-clearance-for-plaqueinformed-ffrct-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>. FDA's own device database lists the submission as <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K262015" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">510(k) K262015</a>, a Traditional 510(k) reviewed by FDA's cardiovascular panel under product code PJA ("Coronary Vascular Physiologic Simulation Software"), with a decision of substantial equivalence. FDA received the submission on June 15, 2026 and cleared it on September 29, 2026 — 106 days later.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                FFR-IQ estimates fractional flow reserve — a measure of whether a coronary blockage is actually restricting blood flow — non-invasively from a coronary CT angiogram (CCTA), instead of requiring an invasive pressure-wire procedure during cardiac catheterization. What's new is how it gets there: Elucid and outside coverage describe it as "BioIntegrated" or "plaque-informed" FFR-CT, because it builds plaque composition into the physiological estimate rather than using anatomy alone.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The validation data behind it
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The clearance rests on the multicenter <a href="https://clinicaltrials.gov/study/NCT06018194" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ELUCIDATE FFR-CT trial</a> (NCT06018194), which benchmarked FFR-IQ's non-invasive estimates against invasive, wire-based FFR — the accepted clinical gold standard — in 491 vessels across 347 patients. Reported results: 92.2% sensitivity and 93.1% specificity for identifying hemodynamically significant, flow-limiting stenosis, which Elucid and trade coverage describe as the strongest accuracy reported in an FDA-cleared FFR-CT validation trial to date, as reported by <a href="https://hitconsultant.net/2026/10/21/elucid-receives-fda-clearance-ffr-iq-biointegrated-ffr-ct-coronary-plaque-ischemia/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">HIT Consultant</a>. Full trial results are scheduled for presentation on November 1 at the Transcatheter Cardiovascular Therapeutics (TCT) conference in San Diego, per <a href="https://www.financialcontent.com/article/bizwire-2026-10-21-elucid-announces-fda-clearance-of-ffr-iq-and-commercial-availability-of-the-most-accurate-ffr-ct-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Elucid's announcement</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is the first half of the clearance bar: a head-to-head trial, against a comparator clinicians already trust, at a sample size large enough to report sensitivity and specificity with confidence — not a retrospective convenience sample.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The second half: don't clear everything at once
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                FFR-IQ's "plaque-informed" claim isn't new science built from scratch inside one submission. It draws on measurements from Elucid's Plaque-IQ software — lipid-rich necrotic core among them — which FDA cleared separately in 2024. That clearance (<a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K241524" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">510(k) K241524</a>) was validated against ground-truth histology and, per Elucid's <a href="https://www.businesswire.com/news/home/20241001450644/en/Elucid-Receives-U.S.-510k-Clearance-of-PlaqueIQ-Image-Analysis-Software-to-Aid-Cardiovascular-Disease-Assessment" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announcement</a>, was the first FDA-cleared software able to quantify and classify plaque morphology against histology rather than a proxy. FDA's own records show that clearance, too, moved from receipt (May 29, 2024) to decision (September 12, 2024) in exactly 106 days.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That repetition is the pattern worth noticing. Rather than submitting one sprawling claim — "AI that reads plaque and predicts flow from a single scan" — Elucid cleared the plaque-quantification claim on its own evidence first, then added a second, narrower claim (flow estimation enriched by that already-cleared plaque data) on top of it. Each submission answered one well-defined question against one accepted comparator.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Three clearances, one widening pathway
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Clearance</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Pathway &amp; timing</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">What the evidence had to show</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">FFR CT V.1.4 (2013/14)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">De Novo (<a href="https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN130045.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">DEN130045</a>); created product code PJA</td>
                      <td className="py-3 text-[#444] font-light">A brand-new device category: CT-derived coronary physiologic simulation had no prior predicate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Plaque-IQ (2024)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Traditional 510(k) K241524; 106 days</td>
                      <td className="py-3 text-[#444] font-light">Plaque composition measurements validated against histology ground truth</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">FFR-IQ (2026)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Traditional 510(k) K262015; 106 days; reuses product code PJA</td>
                      <td className="py-3 text-[#444] font-light">Flow estimate enriched by already-cleared plaque data, validated in 491 vessels vs. invasive FFR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The category-creating step — De Novo review, no predicate to point to — is the slow, expensive one. Once a product code and a body of accepted comparators exist, later entrants (including the same company extending its own product) can move through a Traditional 510(k) by showing substantial equivalence plus new validation data for whatever is actually new. That is the structural reason a 2026 clearance can take 106 days when the category itself took years to establish in 2013–2014.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this means for CT-AI tools that aren't measuring flow
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most CT-AI tools on the market today, including reporting-draft software, aren't pursuing FDA clearance for a single quantitative output the way FFR-IQ does — many fall under different regulatory treatment entirely, or aren't marketed as diagnostic devices at all. But the FFR-IQ case study still names the bar that any vendor making a measurable, device-style claim should expect to clear:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'A narrow, testable claim beats a broad one',
                    desc: '"Estimate FFR from this scan" is falsifiable against a known comparator. "Understand the whole study" is not. Vendors who scope a submission to one measurable output can validate it rigorously; vendors chasing a sweeping claim struggle to define what "accurate" even means for the review.',
                  },
                  {
                    title: 'Validate against the comparator clinicians already trust',
                    desc: "FFR-IQ was measured against invasive FFR, not against another AI tool or a retrospective read. A large, prospective, apples-to-apples comparison against the existing clinical reference is what sensitivity and specificity numbers like 92.2%/93.1% actually mean.",
                  },
                  {
                    title: 'Build on cleared pieces instead of one giant submission',
                    desc: "Elucid cleared plaque quantification first, on its own merits, then layered a second claim on top. Vendors stacking new capability onto an already-validated component have a shorter, clearer story to tell a reviewer than vendors asking for everything in one filing.",
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
                CT reporting AI makes a different kind of claim than a single quantitative measurement like FFR — a draft report touches far more findings than one physiologic number does, which is exactly why it doesn't lend itself to the same narrow-claim-plus-gold-standard-comparator path FFR-IQ took. That's the reasoning behind building CT reporting on <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation models</Link> with a human checkpoint rather than a single autonomous output: xAID's in-house radiologist reviews every preliminary report, and it's delivered ready-to-sign, with the final signature staying with the client's reading radiologist. Where a device like FFR-IQ earns trust through a large trial against one hard endpoint, reporting AI earns it through that same evidence discipline applied report-by-report, with a radiologist as the checkpoint on every study rather than a one-time clearance number.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What did the FDA clear for Elucid's FFR-IQ software?",
                    a: 'On September 29, 2026, FDA cleared Elucid\'s FFR-IQ (510(k) K262015) as a Traditional 510(k), product code PJA, for the non-invasive estimation of fractional flow reserve from coronary CT angiography. FFR-IQ is described as "plaque-informed" or "BioIntegrated" FFR-CT because it folds plaque composition data from Elucid\'s separately cleared Plaque-IQ software, including lipid-rich necrotic core measurements, into the physiological estimate, rather than relying only on luminal geometry.',
                  },
                  {
                    q: 'How fast did FFR-IQ clear the FDA, and why does that matter?',
                    a: "FDA records show Elucid's submission was received on June 15, 2026 and cleared on September 29, 2026 — 106 days. That is fast for a 510(k), and it lines up with a pattern: Elucid's earlier Plaque-IQ clearance in 2024 also took exactly 106 days from receipt to decision. Narrow, quantitative claims backed by a large head-to-head validation dataset against an accepted clinical comparator tend to move through FDA review quickly; broad, qualitative claims generally do not.",
                  },
                  {
                    q: 'What does "plaque-informed" FFR-CT mean?',
                    a: "Conventional FFR-CT software estimates blood flow significance using computational fluid dynamics applied to the lumen's geometry alone. FFR-IQ's BioIntegrated approach also incorporates plaque tissue characteristics, such as lipid-rich necrotic core, measured by Elucid's Plaque-IQ software. In its ELUCIDATE validation trial of 491 vessels in 347 patients, FFR-IQ showed 92.2% sensitivity and 93.1% specificity against invasive, wire-based FFR.",
                  },
                  {
                    q: 'What does this clearance show about how CT-AI tools, including reporting AI, get cleared?',
                    a: "FFR-IQ did not create a new device category. It reused an existing product code (PJA) that FDA established via De Novo review for CT-derived coronary physiology software in 2013-2014 (received November 2013, granted November 2014), and it reused a validated building block (Plaque-IQ) that Elucid had already cleared on its own evidence in 2024. Add a large trial against a recognized gold-standard comparator, and the result is a fast Traditional 510(k). For report-generating CT-AI, the analogous bar is a well-defined, measurable claim, a credible comparator, and a large validation set — which is why xAID pairs its reporting output with in-house radiologist review on every preliminary rather than claiming an autonomous read.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/ct/news/15838110/elucid-gets-fda-clearance-for-plaqueinformed-ffrct-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, <a href="https://hitconsultant.net/2026/10/21/elucid-receives-fda-clearance-ffr-iq-biointegrated-ffr-ct-coronary-plaque-ischemia/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HIT Consultant</a>, FDA 510(k) database records <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K262015" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">K262015</a> and <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K241524" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">K241524</a>, FDA De Novo summary <a href="https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN130045.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DEN130045</a>, <a href="https://clinicaltrials.gov/study/NCT06018194" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ClinicalTrials.gov NCT06018194</a>, Elucid's <a href="https://www.businesswire.com/news/home/20241001450644/en/Elucid-Receives-U.S.-510k-Clearance-of-PlaqueIQ-Image-Analysis-Software-to-Aid-Cardiovascular-Disease-Assessment" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2024 Plaque-IQ announcement</a>, and Elucid's <a href="https://www.financialcontent.com/article/bizwire-2026-10-21-elucid-announces-fda-clearance-of-ffr-iq-and-commercial-availability-of-the-most-accurate-ffr-ct-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2026 FFR-IQ announcement</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Evidence discipline, applied to every report"
          sub="xAID's in-house radiologist reviews every preliminary CT report — delivered ready-to-sign for your reading radiologist. Try it on 5 free studies."
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
              <Link to="/blog/fda-ai-guidance-priorities-2027/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">FDA's FY2027 AI Guidance Priorities Explained</div>
              </Link>
              <Link to="/blog/fda-ai-regulation-radiology-societies/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">What RSNA Told the FDA About Regulating Generative AI</div>
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

export default CtFfrFdaClearancePathway;
