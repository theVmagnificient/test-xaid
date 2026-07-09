import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import Footer from '@/components/Footer';

const RadiologyPriorAuthorizationThroughput = () => {
  const post = {
    title: "Radiology Prior Authorization Reform: What Faster Medicare Advantage Approvals Mean for Imaging Throughput",
    dateIso: '2026-07-03',
    date: 'July 3, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description:
      "A House committee has advanced the Improving Seniors' Timely Access to Care Act (H.R. 3514) to curb prior authorization in Medicare Advantage. Faster approvals mean more scans reach the reading room — moving the bottleneck downstream to reporting turnaround.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Prior Authorization Reform and Imaging Throughput | xAID</title>
        <meta name="description" content="A House committee advanced the Improving Seniors' Timely Access to Care Act to curb radiology prior authorization in Medicare Advantage. Here's how faster approvals shift the imaging bottleneck to reporting turnaround." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Prior Authorization Reform and Imaging Throughput | xAID" />
        <meta property="og:description" content="A House committee advanced the Improving Seniors' Timely Access to Care Act to curb radiology prior authorization in Medicare Advantage. Here's how faster approvals shift the imaging bottleneck to reporting turnaround." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-prior-authorization-imaging-throughput" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Prior Authorization Reform and Imaging Throughput | xAID" />
        <meta name="twitter:description" content="A House committee advanced the Improving Seniors' Timely Access to Care Act to curb radiology prior authorization in Medicare Advantage. Here's how faster approvals shift the imaging bottleneck to reporting turnaround." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-prior-authorization-imaging-throughput" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-prior-authorization-imaging-throughput",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology prior authorization, Medicare Advantage prior authorization, Improving Seniors Timely Access to Care Act, imaging throughput, radiology reporting turnaround, prior authorization reform imaging"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Improving Seniors' Timely Access to Care Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is bipartisan legislation (H.R. 3514 in the House, S. 1816 in the Senate) that would reform prior authorization in Medicare Advantage. It requires plans to implement electronic prior authorization, clarifies HHS authority to set decision timeframes including real-time decisions for routinely approved items, and requires plans to report approval and denial rates to CMS. On June 25, 2026, the House Energy and Commerce Health Subcommittee voted to advance H.R. 3514; the House Ways and Means Committee has also advanced the measure."
              }
            },
            {
              "@type": "Question",
              "name": "How does prior authorization slow down radiology imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Advanced imaging such as MRI and CT is frequently subject to prior authorization in Medicare Advantage, and approvals can be time-consuming. In a 2024 AMA survey, 94% of physicians said prior authorization delays access to necessary care and 78% reported that patients abandon treatment because of authorization challenges. A federal watchdog found Medicare Advantage plans sometimes denied medically necessary advanced imaging using rules stricter than Medicare's own coverage criteria."
              }
            },
            {
              "@type": "Question",
              "name": "How many prior authorization requests do Medicare Advantage plans handle?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Medicare Advantage insurers made nearly 53 million prior authorization determinations in 2024, of which about 4.1 million (7.7%) were denied, according to KFF. Only 11.5% of denials were appealed, but 80.7% of appealed denials were partially or fully overturned — evidence that many denied requests were ultimately valid."
              }
            },
            {
              "@type": "Question",
              "name": "Why does prior authorization reform matter for radiology reporting turnaround?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If fewer scans are blocked or delayed at the approval stage, more imaging studies reach the reading room. The constraint on throughput then shifts downstream to reporting turnaround — how quickly radiologists can read and sign studies. AI that produces a structured, comprehensive report draft for a radiologist to review and sign helps absorb that added volume without extending turnaround times."
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
              Radiology prior authorization reform is advancing.<br />
              <span className="text-white/60">The bottleneck moves to reporting.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A House committee has advanced the Improving Seniors' Timely Access to Care Act to curb prior authorization in Medicare Advantage. If approvals get faster, more scans reach the reading room — and the constraint on imaging throughput shifts downstream to turnaround.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '~53M', label: 'MA prior auth determinations', sub: 'in 2024' },
                { stat: '7.7%', label: 'Requests denied', sub: '~4.1M in 2024' },
                { stat: '80.7%', label: 'Appealed denials overturned', sub: 'yet only 11.5% appealed' },
                { stat: '94%', label: 'Physicians say PA delays care', sub: 'AMA 2024 survey' },
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
                What just happened in Congress
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On June 25, the House Energy and Commerce Health Subcommittee voted to advance <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/house-committee-advances-radiology-backed-legislation-curb-prior-authorization" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">H.R. 3514, the Improving Seniors' Timely Access to Care Act</a>, sending it toward the full House. The House Ways and Means Committee has also advanced the measure. The bill, backed by the American Medical Association and the Society of Interventional Radiology, aims to streamline what has been described as the "often cumbersome and time-consuming" task of approving requests for medical imaging and other services.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The legislation is among the most widely supported health bills in Congress, with roughly <a href="https://www.marshall.senate.gov/newsroom/press-releases/house-ways-and-means-committee-advances-the-improving-seniors-timely-access-to-care-act/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">380 cosponsors across the House and Senate and endorsements from more than 500 organizations</a>. AMA CEO John Whyte framed the stakes bluntly, saying the bill "would eliminate unnecessary administrative red tape in Medicare Advantage to ensure that critical, lifesaving care is no longer delayed by an overused prior authorization process," <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/house-committee-advances-radiology-backed-legislation-curb-prior-authorization" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">as reported by Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In practice, the bill would require Medicare Advantage plans to implement <a href="https://www.congress.gov/bill/119th-congress/house-bill/3514" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">electronic prior authorization</a>, clarify HHS authority to set decision timeframes — including real-time decisions for items and services that are routinely approved — and require plans to report their approval and denial rates to CMS. The direction is unambiguous: fewer barriers, faster answers.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How big is the prior authorization problem in imaging?
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The scale is substantial. Medicare Advantage insurers made <a href="https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">nearly 53 million prior authorization determinations in 2024</a>, of which about 4.1 million — 7.7% — were denied, according to KFF. That denial rate was up from 6.4% in 2023. Notably, only 11.5% of denials were appealed, yet 80.7% of appealed denials were partially or fully overturned, suggesting a large share of denied requests were valid in the first place.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Advanced imaging sits squarely in the crosshairs. A <a href="https://oig.hhs.gov/reports/all/2022/some-medicare-advantage-organization-denials-of-prior-authorization-requests-raise-concerns-about-beneficiary-access-to-medically-necessary-care/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2022 HHS Office of Inspector General report</a> found that Medicare Advantage plans sometimes denied medically necessary advanced imaging — such as MRI — by applying clinical criteria stricter than Medicare's own coverage rules, for example requiring an X-ray before approving more advanced imaging.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The clinical cost lands on patients and physicians alike. In the <a href="https://www.ama-assn.org/press-center/ama-press-releases/ama-survey-indicates-prior-authorization-wreaks-havoc-patient-care" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AMA's 2024 prior authorization survey</a>, 94% of physicians said prior authorization delays access to necessary care, 78% reported that patients abandon treatment because of authorization challenges, and 24% said prior authorization had led to a serious adverse event for a patient in their care.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What reform actually changes: the volume math
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Prior authorization functions as an upstream valve on imaging demand. Every request that is denied, delayed, or abandoned is a scan that never reaches the scanner — or reaches it weeks late. Reform loosens that valve. Real-time approvals for routinely authorized studies and electronic processing both reduce the friction between an ordering physician and an approved study.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This layers on top of a regulatory shift already in motion. The <a href="https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-prior-authorization-final-rule-cms-0057-f" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F)</a>, finalized in January 2024, already requires impacted payers — including Medicare Advantage — to return prior authorization decisions within 72 hours for expedited requests and seven calendar days for standard ones, with operational provisions phasing in from 2026. Legislation and regulation are pushing in the same direction.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The predictable result: more approved CT and MRI studies flowing into the reading room, sooner. That is good for patients. It also relocates the operational constraint. When approvals stop being the bottleneck, the next binding constraint becomes reporting turnaround — the interval between a completed scan and a signed, actionable report.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where the constraint moves next
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology already operates under a persistent supply-demand imbalance: imaging volumes rise while the radiologist workforce grows slowly. Removing an approval barrier without adding reading capacity simply pushes the queue from the payer's inbox to the radiologist's worklist. Faster approvals do not create faster reads.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That is where reporting workflow becomes the lever. Three implications follow for imaging centers, teleradiology providers, and hospital imaging departments planning for a higher-throughput environment:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Approvals speed up; reads must keep pace',
                    desc: 'If more studies clear prior authorization, turnaround becomes the metric referrers and patients feel. Capacity planning has to account for the read, not just the scan — otherwise reform trades an approval backlog for a reporting backlog.',
                  },
                  {
                    title: 'Draft-first reporting absorbs added volume',
                    desc: 'AI that produces a structured, comprehensive report draft lets a radiologist start from a working document rather than a blank template. That shifts the radiologist from transcription to review and judgment, where their expertise is most valuable — a practical way to handle more studies without extending turnaround.',
                  },
                  {
                    title: 'A radiologist stays accountable for every read',
                    desc: "Higher volume must not mean lower oversight. A radiologist-in-the-loop model — where AI drafts and a physician reviews and signs every report — keeps accountability intact even as throughput climbs.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Upstream vs downstream: where the bottleneck sits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                The table below traces how the constraint on imaging throughput moves as prior authorization reform takes hold.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Stage</th>
                      <th className="py-3 px-4 text-[#0D0D0D] font-medium text-sm">Before reform</th>
                      <th className="py-3 pl-4 text-[#0D0D0D] font-medium text-sm">After reform</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Approval</td>
                      <td className="py-3 px-4">Manual, days-to-weeks; frequent denials and appeals</td>
                      <td className="py-3 pl-4">Electronic, real-time for routine studies; fewer barriers</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Scan volume reaching the reading room</td>
                      <td className="py-3 px-4">Suppressed by delayed and abandoned requests</td>
                      <td className="py-3 pl-4">Higher — more approved CT and MRI studies, sooner</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Binding constraint</td>
                      <td className="py-3 px-4">Payer prior authorization</td>
                      <td className="py-3 pl-4">Reporting turnaround and reading capacity</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Lever that helps</td>
                      <td className="py-3 px-4">Policy and appeals</td>
                      <td className="py-3 pl-4">Draft-first AI reporting with radiologist sign-off</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with AI CT reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Policy that increases imaging volume raises a question every imaging operation will face: can turnaround hold as more studies arrive? AI CT reporting is built for exactly this pressure. A foundation-model approach produces a structured, <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">comprehensive report draft</Link> across findings rather than flagging a single pathology, and a radiologist reviews and signs every report before it reaches the chart. When prior authorization reform pushes more scans downstream, ready-to-sign drafts are how a reading room absorbs the volume without letting turnaround slip — and without removing the radiologist from the loop.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is the Improving Seniors' Timely Access to Care Act?",
                    a: "It is bipartisan legislation (H.R. 3514 in the House, S. 1816 in the Senate) that would reform prior authorization in Medicare Advantage. It requires plans to implement electronic prior authorization, clarifies HHS authority to set decision timeframes including real-time decisions for routinely approved items, and requires plans to report approval and denial rates to CMS. On June 25, 2026, the House Energy and Commerce Health Subcommittee voted to advance H.R. 3514; the House Ways and Means Committee has also advanced the measure.",
                  },
                  {
                    q: 'How does prior authorization slow down radiology imaging?',
                    a: "Advanced imaging such as MRI and CT is frequently subject to prior authorization in Medicare Advantage, and approvals can be time-consuming. In a 2024 AMA survey, 94% of physicians said prior authorization delays access to necessary care and 78% reported that patients abandon treatment because of authorization challenges. A federal watchdog found Medicare Advantage plans sometimes denied medically necessary advanced imaging using rules stricter than Medicare's own coverage criteria.",
                  },
                  {
                    q: 'How many prior authorization requests do Medicare Advantage plans handle?',
                    a: 'Medicare Advantage insurers made nearly 53 million prior authorization determinations in 2024, of which about 4.1 million (7.7%) were denied, according to KFF. Only 11.5% of denials were appealed, but 80.7% of appealed denials were partially or fully overturned — evidence that many denied requests were ultimately valid.',
                  },
                  {
                    q: 'Why does prior authorization reform matter for radiology reporting turnaround?',
                    a: 'If fewer scans are blocked or delayed at the approval stage, more imaging studies reach the reading room. The constraint on throughput then shifts downstream to reporting turnaround — how quickly radiologists can read and sign studies. AI that produces a structured, comprehensive report draft for a radiologist to review and sign helps absorb that added volume without extending turnaround times.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: House committee action and AMA CEO quote as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/house-committee-advances-radiology-backed-legislation-curb-prior-authorization" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; bill text and status via <a href="https://www.congress.gov/bill/119th-congress/house-bill/3514" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Congress.gov (H.R. 3514)</a> and <a href="https://www.marshall.senate.gov/newsroom/press-releases/house-ways-and-means-committee-advances-the-improving-seniors-timely-access-to-care-act/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Sen. Marshall's office</a>; prior authorization volume and denial data from <a href="https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">KFF</a> and the <a href="https://oig.hhs.gov/reports/all/2022/some-medicare-advantage-organization-denials-of-prior-authorization-requests-raise-concerns-about-beneficiary-access-to-medically-necessary-care/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HHS OIG</a>; physician burden from the <a href="https://www.ama-assn.org/press-center/ama-press-releases/ama-survey-indicates-prior-authorization-wreaks-havoc-patient-care" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AMA 2024 survey</a>; decision-timeframe rule from <a href="https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-prior-authorization-final-rule-cms-0057-f" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More approved scans. The same turnaround."
          sub="When prior authorization reform pushes volume downstream, ready-to-sign report drafts keep turnaround steady — with a radiologist signing every report. Try xAID on 5 free studies."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/how-ai-ct-reporting-works/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI CT Reporting Works</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
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

export default RadiologyPriorAuthorizationThroughput;
