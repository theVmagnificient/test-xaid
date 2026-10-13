import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const DiagnosticUltrasoundCapitalAllocation = () => {
  const post = {
    title: 'Siemens Exits General Ultrasound — What It Shows About Imaging Capital',
    dateIso: '2026-10-13',
    date: 'October 13, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "Siemens Healthineers stopped selling general ultrasound systems on October 12, 2026 to focus on procedural imaging. A look at the financials behind the exit — and what it says about where imaging capital is actually going.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Siemens Exits General Ultrasound, Bets on Procedural | xAID</title>
        <meta name="description" content="Siemens stopped selling general ultrasound Oct. 12, 2026 to focus on procedural imaging — what the exit shows about where imaging capital is going." />
        <link rel="canonical" href="https://xaid.ai/blog/diagnostic-ultrasound-systems-capital-allocation/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Siemens Exits General Ultrasound, Bets on Procedural | xAID" />
        <meta property="og:description" content="Siemens stopped selling general ultrasound Oct. 12, 2026 to focus on procedural imaging — what the exit shows about where imaging capital is going." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siemens Exits General Ultrasound, Bets on Procedural | xAID" />
        <meta name="twitter:description" content="Siemens stopped selling general ultrasound Oct. 12, 2026 to focus on procedural imaging — what the exit shows about where imaging capital is going." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/diagnostic-ultrasound-systems-capital-allocation" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/diagnostic-ultrasound-systems-capital-allocation",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "diagnostic ultrasound systems, Siemens Healthineers ultrasound, imaging capital equipment investment, procedural imaging, radiology reporting capacity"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Siemens Healthineers stopping, and when?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As of October 12, 2026, Siemens Healthineers stopped selling its general imaging ultrasound systems — the Acuson Sequoia, Redwood, Juniper and Maple. It continues to support existing installed systems with maintenance, software updates and transducer availability, and continues to sell procedural ultrasound systems: the Acuson Origin, P500 intracardiac echocardiography (ICE) system, and Freestyle, used mainly by electrophysiologists and interventional cardiologists."
              }
            },
            {
              "@type": "Question",
              "name": "Why is Siemens Healthineers exiting general-imaging ultrasound?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Siemens Healthineers has never led the conventional ultrasound market — Philips, GE HealthCare, Fujifilm and Canon have long held that position — and trade press covering the exit linked that scale disadvantage to weaker margins in general imaging specifically. Ultrasound head Sourabh Pagaria framed the move around imaging becoming part of therapy, not just diagnosis, concentrating resources on procedural imaging where Siemens has more than 25 years in intracardiac echocardiography."
              }
            },
            {
              "@type": "Question",
              "name": "How does the ultrasound exit fit Siemens Healthineers' broader strategy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In November 2025, Siemens Healthineers announced a reorganization into three segments as part of its 'Elevating Health Globally' plan: Imaging (prevention and detection), Precision Therapy (treatment — combining Varian radiation oncology, Advanced Therapies and ultrasound), and Diagnostics. Precision Therapy is targeted for high-single-digit annual revenue growth and roughly 100 basis points of margin improvement a year through fiscal 2030. Ultrasound generated just over €600 million in 2025, about 9% of that new segment's revenue."
              }
            },
            {
              "@type": "Question",
              "name": "What does this say about where imaging capital is going?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is one more data point that capital-equipment investment in imaging is tilting toward procedural and image-guided-therapy hardware — higher margin, more defensible — rather than toward the diagnostic reporting side of the pipeline. The ACR's Harvey L. Neiman Health Policy Institute separately projects CT volume could grow as much as 25% by 2055 while the radiologist workforce grows only about 21%, even if attrition stays at today's elevated rate. Equipment vendors are consolidating around procedures; reporting capacity is not seeing a comparable wave of investment."
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
              Siemens just exited general ultrasound.<br />
              <span className="text-white/60">Here's where imaging capital is actually flowing.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A major vendor walking away from a whole category of diagnostic ultrasound systems to chase higher-margin procedural hardware isn't just a product-line story. It's a readable signal of where capital-equipment investment in imaging is headed — and where it isn't.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Oct 12, 2026', label: 'General ultrasound halted', sub: 'Siemens Healthineers' },
            { stat: '€600M', label: '2025 ultrasound revenue', sub: '~9% of Precision Therapy segment' },
            { stat: '4', label: 'Ultrasound lines retired', sub: 'Sequoia, Redwood, Juniper, Maple' },
            { stat: '+25%', label: 'Projected CT volume growth', sub: 'by 2055, ACR estimate' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What Siemens Healthineers actually announced
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                As of <strong>October 12, 2026</strong>, Siemens Healthineers stopped selling its general imaging <strong>diagnostic ultrasound systems</strong> — the Acuson Sequoia, Redwood, Juniper and Maple — according to the company's own <a href="https://www.siemens-healthineers.com/press/releases/ultrasound" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">press release</a>, first reported by <a href="https://radiologybusiness.com/topics/medical-imaging/ultrasound-imaging/siemens-healthineers-stopping-all-sales-its-general-ultrasound-systems" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> and also covered by <a href="https://www.auntminnie.com/clinical-news/ultrasound/news/15837223/siemens-healthineers-siemens-focuses-ultrasound-business-on-procedural-imaging" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a> and <a href="https://www.beckershospitalreview.com/supply-chain/siemens-ends-general-imaging-ultrasound-sales/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Becker's Hospital Review</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Existing customers aren't abandoned: the company says it will keep honoring contractual and regulatory obligations and will continue maintenance, software updates and transducer availability for installed general-imaging systems. But no new general-imaging ultrasound units will be sold going forward. In their place, Siemens Healthineers is concentrating the ultrasound business entirely on procedural systems — the Acuson Origin, the P500 intracardiac echocardiography (ICE) system, and Freestyle — sold with dedicated software and catheters to electrophysiologists and interventional cardiologists performing image-guided cardiovascular procedures.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Sourabh Pagaria, head of Siemens Healthineers' ultrasound business, put the rationale plainly: <em>"imaging is increasingly becoming part of therapy, not just diagnosis."</em> The company points to more than 25 years of work in ICE as the foundation for that bet.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The economics behind the exit
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Siemens Healthineers has never been a top-tier player in conventional, general-imaging ultrasound — Philips, GE HealthCare, Fujifilm and Canon have long led that market — and coverage of the exit tied that scale disadvantage directly to weaker margins in the segment, per <a href="https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/siemens-healthineers-exits-mainstream-ultrasound-betting-on-interventional-cardiology/70314113" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ad-hoc-news</a>, which also put the business's scale at just over <strong>€600 million</strong> in revenue in 2025 — a sliver of the company's <strong>€23.4 billion</strong> in total fiscal-2025 revenue across roughly 74,000 employees, per the company's own <a href="https://www.siemens-healthineers.com/press/releases/ultrasound" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">disclosure</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Procedural ultrasound, by contrast, sits inside a cardiovascular franchise where Siemens Healthineers already has defensible technical share — ICE catheters and the interventional cardiology relationships that go with them aren't a market four other multinationals already dominate. Exiting a low-share, low-margin category to double down on a higher-share, higher-margin one is a straightforward capital-allocation decision, not a clinical judgment about which kind of ultrasound matters more.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                It's a segment move, not a one-off
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The ultrasound decision lines up with a restructuring Siemens Healthineers announced company-wide in November 2025. Under its "Elevating Health Globally" strategy, the company regrouped its financial reporting into three segments, per its own <a href="https://www.siemens-healthineers.com/press/releases/cmd2025" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Capital Markets Day announcement</a>: <strong>Imaging</strong> (disease prevention and detection), <strong>Diagnostics</strong> (its own standalone strategy), and a brand-new <strong>Precision Therapy</strong> segment built around treatment — combining Varian radiation oncology, the existing Advanced Therapies interventional business, and ultrasound.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That new Precision Therapy segment carries the company's most aggressive growth target: high-single-digit annual revenue growth and roughly 100 basis points of margin improvement a year through fiscal 2030, versus a mid-to-high-single-digit growth target with scale-driven margin gains for Imaging. Ultrasound — at just over €600 million — makes up about 9% of that segment's revenue, which is exactly why a low-margin general-imaging tail was expendable: it diluted a business unit management had just told investors would be the company's margin engine. CEO Bernd Montag summed up the broader strategy as wanting to "make an impact on the health of the world's 8 billion people by fighting the diseases they fear" — stroke, cancer, cardiovascular disease and neurodegenerative conditions, all of which lean on procedures, not just diagnosis.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Put those two announcements together and the ultrasound exit stops looking like a product-line prune and starts looking like the segment doing exactly what it was reorganized to do: shed the diagnostic-adjacent piece that didn't fit a therapy-margin target.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Dimension</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">General-imaging ultrasound (discontinued)</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Procedural ultrasound (continuing)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Products', 'Acuson Sequoia, Redwood, Juniper, Maple', 'Acuson Origin, P500 (ICE), Freestyle'],
                      ['Primary buyer', 'General radiology, OB-GYN, point-of-care clinicians', 'Electrophysiologists, interventional cardiologists'],
                      ['Clinical role', 'Diagnosis — detect and characterize disease', 'Live image guidance during a cardiovascular procedure'],
                      ['Siemens segment (Nov. 2025 restructuring)', 'n/a — discontinued', 'Precision Therapy (with Varian, Advanced Therapies)'],
                      ['Competitive position', 'Scale disadvantage vs. Philips, GE HealthCare, Fujifilm, Canon', 'Niche leadership, 25+ years in ICE'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[1]}</td>
                        <td className="py-3 text-[#666] text-[15px] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Product and segment details per Siemens Healthineers' press releases cited above. Competitive framing per trade-press coverage of the announcement.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The pattern this fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Taken alone, one vendor trimming a product line isn't a trend. Taken as a capital-allocation decision by one of the industry's largest equipment makers — discontinue a diagnostic hardware category serving general radiology, fold the rest of ultrasound into a segment built around procedures and therapy, and target that segment for the company's best margin growth — it is a clean instance of where imaging capex is being pointed: toward the acquisition/procedural side of the pipeline, where a device vendor can own a differentiated, margin-rich niche, and away from commoditized diagnostic hardware.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That capital pattern runs in the opposite direction from where imaging demand is actually growing. The American College of Radiology's Harvey L. Neiman Health Policy Institute projects CT volume could rise by as much as <strong>25%</strong> by 2055, against a radiologist workforce projected to grow only about <strong>21%</strong> over the same period even if attrition holds at today's already-elevated rate — radiologist attrition more than doubled from 1.1% in 2014 to 2.5% in 2022, per the institute's <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">workforce update</a>. More studies are coming; the people who have to read and report them are not growing to match. Equipment vendors are free to chase the hardware segment with the best margins — that's a rational business decision — but it leaves the reporting layer as the part of the pipeline nobody with a capital-equipment budget is racing to fund.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID isn't in the ultrasound business, and this isn't a story about any single modality. It's a story about where imaging money goes when a vendor gets to choose, and the answer — procedural and therapy hardware, not diagnostic reporting capacity — is exactly the gap xAID's AI CT reporting is built to address from the software side: it drafts a structured, comprehensive report the moment a CT study is acquired, an in-house radiologist reviews every preliminary, and the result is delivered ready-to-sign for the reading radiologist. No capital-equipment budget has to grow for reporting throughput to grow.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is Siemens Healthineers stopping, and when?',
                    a: 'As of October 12, 2026, Siemens Healthineers stopped selling its general imaging ultrasound systems — the Acuson Sequoia, Redwood, Juniper and Maple. It continues to support existing installed systems with maintenance, software updates and transducer availability, and continues to sell procedural ultrasound systems: the Acuson Origin, P500 intracardiac echocardiography (ICE) system, and Freestyle, used mainly by electrophysiologists and interventional cardiologists.',
                  },
                  {
                    q: 'Why is Siemens Healthineers exiting general-imaging ultrasound?',
                    a: "Siemens Healthineers has never led the conventional ultrasound market — Philips, GE HealthCare, Fujifilm and Canon have long held that position — and trade press covering the exit linked that scale disadvantage to weaker margins in general imaging specifically. Ultrasound head Sourabh Pagaria framed the move around imaging becoming part of therapy, not just diagnosis, concentrating resources on procedural imaging where Siemens has more than 25 years in intracardiac echocardiography.",
                  },
                  {
                    q: "How does the ultrasound exit fit Siemens Healthineers' broader strategy?",
                    a: "In November 2025, Siemens Healthineers announced a reorganization into three segments as part of its 'Elevating Health Globally' plan: Imaging (prevention and detection), Precision Therapy (treatment — combining Varian radiation oncology, Advanced Therapies and ultrasound), and Diagnostics. Precision Therapy is targeted for high-single-digit annual revenue growth and roughly 100 basis points of margin improvement a year through fiscal 2030. Ultrasound generated just over €600 million in 2025, about 9% of that new segment's revenue.",
                  },
                  {
                    q: 'What does this say about where imaging capital is going?',
                    a: "It is one more data point that capital-equipment investment in imaging is tilting toward procedural and image-guided-therapy hardware — higher margin, more defensible — rather than toward the diagnostic reporting side of the pipeline. The ACR's Harvey L. Neiman Health Policy Institute separately projects CT volume could grow as much as 25% by 2055 while the radiologist workforce grows only about 21%, even if attrition stays at today's elevated rate. Equipment vendors are consolidating around procedures; reporting capacity is not seeing a comparable wave of investment.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Siemens Healthineers <a href="https://www.siemens-healthineers.com/press/releases/ultrasound" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ultrasound announcement</a> and <a href="https://www.siemens-healthineers.com/press/releases/cmd2025" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Capital Markets Day strategy announcement</a>, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/ultrasound-imaging/siemens-healthineers-stopping-all-sales-its-general-ultrasound-systems" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.auntminnie.com/clinical-news/ultrasound/news/15837223/siemens-healthineers-siemens-focuses-ultrasound-business-on-procedural-imaging" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>, <a href="https://www.beckershospitalreview.com/supply-chain/siemens-ends-general-imaging-ultrasound-sales/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Becker's Hospital Review</a> and <a href="https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/siemens-healthineers-exits-mainstream-ultrasound-betting-on-interventional-cardiology/70314113" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ad-hoc-news</a>. Radiologist-workforce figures from the ACR Harvey L. Neiman Health Policy Institute's <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">2026 workforce update</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Equipment budgets aren't funding reporting capacity. Software can."
          sub="xAID drafts the CT report the moment a study is acquired, with in-house radiologist review built into every preliminary. Try it on 5 free studies."
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
              <Link to="/blog/enterprise-imaging-modernization-capital-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The $500M Imaging Deal and the Capital Gap Smaller Providers Face</div>
              </Link>
              <Link to="/blog/mri-motion-artifact-operational-cost/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow &amp; Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">MRI Motion Artifact Repeats Cost About $115K a Scanner, a Year</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default DiagnosticUltrasoundCapitalAllocation;
