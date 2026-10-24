import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FfrCtFdaClearanceVendorChecklist = () => {
  const post = {
    title: "What Elucid's FFR-CT Clearance Teaches About Evaluating Quantitative CT Software",
    dateIso: '2026-10-24',
    date: 'October 24, 2026',
    category: 'Buyer Guide',
    readingTime: 8,
    description: "Elucid just won FDA clearance for a plaque-informed FFR-CT tool with 92.2% sensitivity against invasive FFR. The clearance paperwork is a concrete template for evaluating any quantitative CT-derived software — including AI reporting tools.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>FFR-CT FDA Clearance: A Vendor-Evaluation Case Study | xAID</title>
        <meta name="description" content="Elucid's FFR-CT clearance shows what to ask any quantitative CT vendor: pathway, claims scope, and validation data behind the numbers." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FFR-CT FDA Clearance: A Vendor-Evaluation Case Study | xAID" />
        <meta property="og:description" content="Elucid's FFR-CT clearance shows what to ask any quantitative CT vendor: pathway, claims scope, and validation data behind the numbers." />
        <meta property="og:url" content="https://xaid.ai/blog/ffr-ct-fda-clearance-vendor-checklist" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FFR-CT FDA Clearance: A Vendor-Evaluation Case Study | xAID" />
        <meta name="twitter:description" content="Elucid's FFR-CT clearance shows what to ask any quantitative CT vendor: pathway, claims scope, and validation data behind the numbers." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ffr-ct-fda-clearance-vendor-checklist" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ffr-ct-fda-clearance-vendor-checklist",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "FFR-CT, FDA clearance quantitative imaging software, AI vendor evaluation checklist, coronary CTA physiology, radiology AI validation data"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is FFR-CT and why does it need FDA clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FFR-CT (fractional flow reserve derived from CT) is software that estimates coronary blood-flow physiology from a standard coronary CT angiogram, instead of a patient undergoing an invasive catheter-based FFR measurement. Because the output is a number clinicians use to decide whether a patient needs a stent, FDA regulates it as a Class II medical device (quantitative software that aids diagnosis) under regulation 21 CFR 870.1415, product code PJA — the same 'coronary vascular physiologic simulation software' category created in 2014."
              }
            },
            {
              "@type": "Question",
              "name": "What did Elucid's FDA clearance for FFR-IQ actually cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA granted Elucid Bioimaging a traditional 510(k) clearance (K262015, decided September 29, 2026) for FFR-IQ, which estimates FFR from coronary CTA while factoring in plaque composition measured by Elucid's Plaque-IQ software. It is a 510(k) — a substantial-equivalence clearance that relies on an existing device category — not a new De Novo authorization or a claim of autonomous diagnosis."
              }
            },
            {
              "@type": "Question",
              "name": "What validation data supported the FFR-IQ clearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Elucid's ELUCIDATE FFRct study (NCT06018194), a retrospective, industry-sponsored, multicenter cohort registered with a completed status in July 2025, compared FFR-IQ estimates against invasive wire-based FFR. As reported in trade coverage, the analysis covered 491 vessels in 347 patients and found 92.2% sensitivity and 93.1% specificity for detecting an invasive FFR of 0.80 or below."
              }
            },
            {
              "@type": "Question",
              "name": "What should imaging centers ask when evaluating a quantitative CT software vendor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Four questions transfer from the FFR-CT case to any derived-metric or AI CT software: (1) What pathway cleared it — a first-in-category De Novo or a 510(k) riding an existing predicate? (2) What does the cleared label actually claim — aid in diagnosis, or something broader than the data supports? (3) Was the validation study prospective or retrospective, industry-sponsored or independent, and how large was it? (4) Does the vendor's marketing match the FDA-cleared claims, or does it use superlative language the clearance itself doesn't make?"
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
                Buyer Guide
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              What a cardiac FFR-CT clearance teaches<br />
              <span className="text-white/60">about evaluating any quantitative CT tool</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Elucid just won FDA clearance for a plaque-informed FFR-CT tool. The clearance file — pathway, claims scope, validation data — is a concrete template imaging centers can reuse to evaluate any quantitative CT-derived software, including AI-reporting tools far outside cardiology.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '92.2%', label: 'Sensitivity vs invasive FFR', sub: 'ELUCIDATE FFRct study' },
            { stat: '93.1%', label: 'Specificity vs invasive FFR', sub: 'same study' },
            { stat: '491 / 347', label: 'Vessels / patients analyzed', sub: 'per trade coverage' },
            { stat: '3rd', label: 'Vendor cleared in this category', sub: 'since the 2014 De Novo' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What got cleared, and what it does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 29, 2026, the FDA cleared <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K262015" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">FFR-IQ</a> (510(k) K262015), a software device from Boston-based <a href="https://www.auntminnie.com/clinical-news/ct/news/15838110/elucid-gets-fda-clearance-for-plaqueinformed-ffrct-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Elucid Bioimaging</a>. FFR-IQ estimates fractional flow reserve (FFR) — a measure of whether a coronary artery narrowing is actually restricting blood flow — directly from a coronary CT angiogram (CCTA), instead of requiring an invasive catheter-based pressure-wire measurement.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                What makes FFR-IQ notable isn't that it computes FFR from CT — two companies already do that — it's what goes into the computation. Branded "BioIntegrated FFR-CT" by Elucid, the software folds in plaque composition (including lipid-rich necrotic core, measured by Elucid's companion Plaque-IQ software) alongside vessel geometry, rather than estimating flow from luminal anatomy alone. As cardiologist Dr. Amir Ahmadi of the Icahn School of Medicine at Mount Sinai — also Elucid's lead scientific advisor — put it in coverage of the clearance, "plaque composition, coronary anatomy, and physiology are closely connected," which is the clinical rationale for combining them in one estimate (<a href="https://hitconsultant.net/2026/10/21/elucid-receives-fda-clearance-ffr-iq-biointegrated-ffr-ct-coronary-plaque-ischemia/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">HIT Consultant</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is a useful reminder on its own: a "new" quantitative CT tool is often a known output (here, an FFR value) produced from a new or expanded set of inputs. The clearance question is never just "does it produce the right-sounding number," it's "what did FDA actually verify, and against what."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The pathway: one De Novo, then 510(k)s forever after
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                FDA's public device database shows exactly how this device category came to exist and who has used it. "Coronary vascular physiologic simulation software" (regulation 21 CFR 870.1415, product code PJA, Class II) was created in November 2014 when HeartFlow won the first-ever clearance for CT-derived FFR through the <a href="https://www.accessdata.fda.gov/cdrh_docs/pdf13/DEN130045.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">De Novo pathway</a> (DEN130045) — the route FDA uses for a genuinely novel, low-to-moderate-risk device with no existing predicate. Every FFR-CT clearance since, including HeartFlow's own later updates, KeyaMed's DeepVessel FFR (K213657, 2022), and now Elucid's FFR-IQ (K262015, 2026), has gone through the ordinary 510(k) route, which asks a narrower question: is the new device substantially equivalent to one already on the market in that category.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For a buyer, that distinction matters. A De Novo clearance means FDA evaluated a device with no prior benchmark — the bar it had to clear was defined for the first time. A 510(k) means the agency compared the new submission to an established category; it is a lower evidentiary bar than a De Novo precisely because the category already exists. Neither is better or worse on its face, but a vendor's pathway tells you whether you're looking at the category's original evidence base or a later entrant riding on it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Comparing the clearances head to head
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Here is what the FDA record and company-reported study data show for the three FFR-CT entrants cleared to date, based on the FDA 510(k)/De Novo database and the ELUCIDATE FFRct trial as reported in trade coverage:
              </p>
              <div className="table-scroll table-scroll--light overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Device</th>
                      <th className="text-center py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Pathway / date</th>
                      <th className="text-left py-3 px-4 font-medium text-[#0D0D0D] border-b border-gray-200">Validation vs invasive FFR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['HeartFlow FFRct', 'De Novo (DEN130045), Nov. 2014', 'NXT study: 83.5% sensitivity, 85.8% specificity (per-vessel)'],
                      ['KeyaMed DeepVessel FFR', '510(k) (K213657), Apr. 2022', 'Not independently verified for this article'],
                      ['Elucid FFR-IQ', '510(k) (K262015), Sep. 2026', 'ELUCIDATE FFRct: 92.2% sensitivity, 93.1% specificity (per-vessel)'],
                    ].map(([device, pathway, result]) => (
                      <tr key={device} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-[#444] font-medium text-xs">{device}</td>
                        <td className="py-3 px-4 text-center text-xaid-blue-strong font-medium text-xs">{pathway}</td>
                        <td className="py-3 px-4 text-[#666] text-xs">{result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two caveats worth carrying into any vendor conversation. First, these sensitivity and specificity figures come from different studies with different populations, years, and sites — they are not a head-to-head trial, so a higher number doesn't automatically mean a better device in practice. Second, the ELUCIDATE FFRct study behind Elucid's number is registered on <a href="https://clinicaltrials.gov/study/NCT06018194" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ClinicalTrials.gov (NCT06018194)</a> as a retrospective, industry-sponsored cohort study — completed July 2025, full results due to be presented at TCT 2026 in November — rather than an independent, prospective trial. That's a normal and disclosed study design for a 510(k) submission; it's also exactly the kind of detail a buyer should know before repeating the headline number.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A four-question checklist that transfers beyond cardiology
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this is specific to coronary CT. Any quantitative, derived-metric CT software — a stroke LVO score, a lung nodule volumetric risk estimate, an AI-generated structured report — earns FDA clearance the same way, and the same four questions apply when evaluating it:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. What pathway cleared it?',
                    desc: 'A De Novo means the vendor built the evidence base for a brand-new category from scratch. A 510(k) means it rode an existing predicate — ask which one, and whether the clearance claims match what that predicate was allowed to claim.',
                  },
                  {
                    title: '2. What does the label actually say?',
                    desc: "FDA clearance language is narrow by design — usually \"aid in the identification\" or \"aid in diagnosis,\" not \"diagnose\" or \"replace.\" Elucid's own clearance is scoped as aiding identification of flow-limiting stenosis, not as an autonomous diagnostic call. Marketing copy that drops the word \"aid\" is a flag.",
                  },
                  {
                    title: '3. How was the validation study designed?',
                    desc: 'Prospective or retrospective? Single-site or multicenter? Industry-sponsored or independently run? A retrospective, sponsor-run cohort (like ELUCIDATE FFRct) is standard and FDA-acceptable, but it is weaker evidence than an independent, prospective, multicenter trial — ask the vendor to say so plainly rather than letting a press release blur the distinction.',
                  },
                  {
                    title: '4. Do the marketing claims match the clearance?',
                    desc: 'A 92.2%/93.1% sensitivity/specificity pair is a real, citable result from one study against invasive FFR. A superlative like "most accurate" layered on top of it is a marketing claim, not an FDA finding — ask for the comparison methodology before accepting it.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this connects to AI CT reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                FFR-CT and AI-generated CT reports are built for different clinical jobs — one outputs a single physiologic number, the other outputs a full structured report — but the diligence a buyer should apply is the same: know the clearance pathway, read the actual claims scope rather than the press release, and ask how the validation study was designed before citing its headline number. That's also the standard xAID's own workflow is built to survive: AI drafts the report, an in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign — with the client's reading radiologist holding final sign-off, not a vendor claim standing in for it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is FFR-CT and why does it need FDA clearance?',
                    a: "FFR-CT (fractional flow reserve derived from CT) is software that estimates coronary blood-flow physiology from a standard coronary CT angiogram, instead of a patient undergoing an invasive catheter-based FFR measurement. Because the output is a number clinicians use to decide whether a patient needs a stent, FDA regulates it as a Class II medical device (quantitative software that aids diagnosis) under regulation 21 CFR 870.1415, product code PJA — the same 'coronary vascular physiologic simulation software' category created in 2014.",
                  },
                  {
                    q: "What did Elucid's FDA clearance for FFR-IQ actually cover?",
                    a: "The FDA granted Elucid Bioimaging a traditional 510(k) clearance (K262015, decided September 29, 2026) for FFR-IQ, which estimates FFR from coronary CTA while factoring in plaque composition measured by Elucid's Plaque-IQ software. It is a 510(k) — a substantial-equivalence clearance that relies on an existing device category — not a new De Novo authorization or a claim of autonomous diagnosis.",
                  },
                  {
                    q: 'What validation data supported the FFR-IQ clearance?',
                    a: "Elucid's ELUCIDATE FFRct study (NCT06018194), a retrospective, industry-sponsored, multicenter cohort registered with a completed status in July 2025, compared FFR-IQ estimates against invasive wire-based FFR. As reported in trade coverage, the analysis covered 491 vessels in 347 patients and found 92.2% sensitivity and 93.1% specificity for detecting an invasive FFR of 0.80 or below.",
                  },
                  {
                    q: 'What should imaging centers ask when evaluating a quantitative CT software vendor?',
                    a: "Four questions transfer from the FFR-CT case to any derived-metric or AI CT software: (1) What pathway cleared it — a first-in-category De Novo or a 510(k) riding an existing predicate? (2) What does the cleared label actually claim — aid in diagnosis, or something broader than the data supports? (3) Was the validation study prospective or retrospective, industry-sponsored or independent, and how large was it? (4) Does the vendor's marketing match the FDA-cleared claims, or does it use superlative language the clearance itself doesn't make?",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/clinical-news/ct/news/15838110/elucid-gets-fda-clearance-for-plaqueinformed-ffrct-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, <a href="https://hitconsultant.net/2026/10/21/elucid-receives-fda-clearance-ffr-iq-biointegrated-ffr-ct-coronary-plaque-ischemia/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HIT Consultant</a>, and <a href="https://cardiovascularbusiness.com/topics/artificial-intelligence/fda-clears-elucids-new-ai-enabled-ffr-ct-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Cardiovascular Business</a> coverage of Elucid's FFR-IQ clearance; FDA 510(k)/De Novo records for product code PJA via the <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K262015" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA 510(k) database</a>; study design for NCT06018194 via <a href="https://clinicaltrials.gov/study/NCT06018194" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ClinicalTrials.gov</a>; HeartFlow NXT study figures via the original <a href="https://www.accessdata.fda.gov/cdrh_docs/pdf13/DEN130045.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA De Novo decision summary (DEN130045)</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Know exactly what you're buying before you sign"
          sub="xAID's reports are radiologist-reviewed and ready-to-sign — ask us for our validation data the same way you'd ask any vendor. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">ECRI's AI Error Tracker and the Radiology AI Vendor Checklist</div>
              </Link>
              <Link to="/blog/misleading-imaging-claims-ai-vendor-marketing/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Misleading Imaging Claims and AI Vendor Marketing</div>
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

export default FfrCtFdaClearanceVendorChecklist;
