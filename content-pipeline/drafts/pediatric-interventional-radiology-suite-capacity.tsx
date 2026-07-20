import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const PediatricInterventionalRadiologySuiteCapacity = () => {
  const post = {
    title: 'A New Pediatric Interventional Radiology Suite Aims to Double Procedure Capacity',
    dateIso: '2026-07-20',
    date: 'July 20, 2026',
    category: 'Market & Policy',
    readingTime: 6,
    description: "UW Health Kids' new pediatric interventional radiology suite is built to double annual procedure capacity. What the buildout signals about capacity growth outpacing radiology reporting teams.",
  };

  const canonical = 'https://xaid.ai/blog/pediatric-interventional-radiology-suite-capacity';

  return (
    <>
      <Helmet defer={false}>
        <title>Pediatric Interventional Radiology Suite Opens | xAID</title>
        <meta name="description" content="UW Health Kids' new pediatric interventional radiology suite is built to double annual procedure capacity. What the buildout means for imaging teams downstream." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pediatric Interventional Radiology Suite Opens | xAID" />
        <meta property="og:description" content="UW Health Kids' new pediatric interventional radiology suite is built to double annual procedure capacity. What the buildout means for imaging teams downstream." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pediatric Interventional Radiology Suite Opens | xAID" />
        <meta name="twitter:description" content="UW Health Kids' new pediatric interventional radiology suite is built to double annual procedure capacity. What the buildout means for imaging teams downstream." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": canonical,
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "interventional radiology suite, pediatric interventional radiology, UW Health Kids, imaging capacity, radiology reporting capacity"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did UW Health Kids open?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In June 2026, UW Health Kids began treating patients in a new pediatric interventional radiology suite at American Family Children's Hospital in Madison, Wisconsin. The hospital and local outlets describe it as the only imaging suite of its kind in the world built specifically for pediatric interventional radiology."
              }
            },
            {
              "@type": "Question",
              "name": "What makes the suite 'first of its kind'?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The suite is built around GE HealthCare's Allia Moveo image-guided imaging platform. According to WisBusiness, it is only the fourth Allia Moveo suite in clinical use worldwide, and the first one configured specifically for pediatric interventional radiology."
              }
            },
            {
              "@type": "Question",
              "name": "How much will the new suite increase procedure capacity?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Annual interventional radiology procedures at the hospital grew from roughly 300 in 2021 to about 800 by the time the new suite opened — a nearly 2.7x increase — and UW Health Kids says the new suite is designed to double annual capacity further."
              }
            },
            {
              "@type": "Question",
              "name": "Does a new interventional radiology suite affect diagnostic CT reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not directly — this is a procedural-capacity and equipment story, not a diagnostic-reporting or AI story. But interventional volume growth is rarely isolated: more procedures typically mean more planning and follow-up cross-sectional imaging, and that diagnostic workload lands on the same radiology reporting teams whose headcount doesn't automatically grow when a hospital adds a suite."
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
              A new pediatric interventional radiology suite<br />
              <span className="text-white/60">is built to double procedure capacity</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              UW Health Kids opened what it calls a first-of-its-kind pediatric interventional radiology suite in Madison, Wisconsin. It's a capacity and equipment story, not a diagnostic-reporting one — but the capacity math behind it points at a pattern imaging leaders should recognize.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '~800', label: 'IR procedures per year now', sub: 'up from ~300 in 2021' },
                { stat: '2.7x', label: 'Growth in case volume', sub: 'since 2021' },
                { stat: '4th', label: 'Allia Moveo suite worldwide', sub: '1st built for pediatric IR' },
                { stat: '2x', label: 'Target capacity increase', sub: 'from the new suite' },
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
                What UW Health Kids actually opened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In June 2026, UW Health Kids began treating patients in a new imaging suite dedicated to pediatric interventional radiology at American Family Children's Hospital in Madison, Wisconsin, according to <a href="https://www.wisbusiness.com/2026/uw-health-kids-opens-first-pediatric-interventional-radiology-suite-of-its-kind/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">WisBusiness</a> and <a href="https://ibmadison.com/uw-health-kids-opens-first-of-its-kind-pediatric-interventional-radiology-suite/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Madison-area outlet IB</a>. Interventional radiology uses imaging — fluoroscopy, ultrasound, CT — to guide minimally invasive procedures, in place of open surgery, and typically shortens recovery for patients.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Both outlets describe it as the only suite of its kind in the world built specifically for pediatric interventional radiology. The suite also frees up space the interventional radiology team previously shared with the pediatric interventional cardiology team, which the hospital says will separately widen access to pediatric heart procedures.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "first of its kind" is the accurate description
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The claim rests on the equipment, not just the room. The suite is built around GE HealthCare's Allia Moveo image-guided platform — reported by WisBusiness to be only the fourth Allia Moveo suite in clinical use anywhere in the world, and the first one configured specifically for pediatric interventional radiology.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Dr. Eric Monroe, a pediatric interventional radiologist at UW Health Kids, framed the opening in terms of throughput rather than novelty for its own sake: <em>"This new space is going to enable us to perform all these vital services for so many more patients moving forward,"</em> he told WisBusiness.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The capacity math behind the buildout
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The numbers explain why the hospital invested in a new suite rather than adding hours to the existing one. Annual pediatric interventional radiology procedures at the hospital grew from roughly 300 in 2021 to about 800 by the time the new suite opened — nearly a 2.7x increase in five years — and UW Health Kids says the new suite is designed to double annual capacity again from there.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a familiar shape in imaging: demand grows faster than the physical and staffing capacity built to absorb it, until a facility either expands or the backlog absorbs the difference. UW Health Kids chose to expand the room. Most imaging departments facing a similar mismatch don't have that option on the timeline they need it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this kind of growth actually creates strain
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This is a facility and equipment story, not a diagnostic-reporting one — the Allia Moveo platform guides procedures in real time, it does not generate CT reports. But interventional volume rarely grows in isolation. Pediatric interventional procedures are typically bracketed by cross-sectional diagnostic imaging: a planning CT or ultrasound before the procedure, follow-up imaging after it. When a hospital roughly doubles its interventional case volume, the diagnostic imaging around those cases tends to grow with it — and that reporting workload lands on the same radiology teams, whose headcount doesn't scale just because a new procedure suite opened down the hall.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the gap AI-assisted CT reporting is built to narrow: an AI-generated structured report draft, reviewed in-house by xAID's radiologist on every preliminary, delivered ready-to-sign so the client's reading radiologist finalizes it rather than dictating it from scratch. It doesn't change what happens in the procedure suite — it changes how much diagnostic reporting capacity a radiology group can absorb once volume upstream starts moving the way UW Health Kids' did.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did UW Health Kids open?',
                    a: "In June 2026, UW Health Kids began treating patients in a new pediatric interventional radiology suite at American Family Children's Hospital in Madison, Wisconsin. The hospital and local outlets describe it as the only imaging suite of its kind in the world built specifically for pediatric interventional radiology.",
                  },
                  {
                    q: "What makes the suite 'first of its kind'?",
                    a: "The suite is built around GE HealthCare's Allia Moveo image-guided imaging platform. According to WisBusiness, it is only the fourth Allia Moveo suite in clinical use worldwide, and the first one configured specifically for pediatric interventional radiology.",
                  },
                  {
                    q: 'How much will the new suite increase procedure capacity?',
                    a: 'Annual interventional radiology procedures at the hospital grew from roughly 300 in 2021 to about 800 by the time the new suite opened — a nearly 2.7x increase — and UW Health Kids says the new suite is designed to double annual capacity further.',
                  },
                  {
                    q: 'Does a new interventional radiology suite affect diagnostic CT reporting?',
                    a: "Not directly — this is a procedural-capacity and equipment story, not a diagnostic-reporting or AI story. But interventional volume growth is rarely isolated: more procedures typically mean more planning and follow-up cross-sectional imaging, and that diagnostic workload lands on the same radiology reporting teams whose headcount doesn't automatically grow when a hospital adds a suite.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/medical-imaging/interventional-radiology/hospital-opens-1st-its-kind-new-interventional-radiology-suite" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.wisbusiness.com/2026/uw-health-kids-opens-first-pediatric-interventional-radiology-suite-of-its-kind/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">WisBusiness</a>, and <a href="https://ibmadison.com/uw-health-kids-opens-first-of-its-kind-pediatric-interventional-radiology-suite/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">IB Madison</a> (2026). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Growing procedure volume shouldn't stall your reporting queue"
          sub="See how AI-assisted CT reporting gives radiology teams ready-to-sign draft reports as case volume grows. Try it on 5 free studies."
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
              <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology Prior Authorization Reform and Imaging Throughput</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Reference</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PediatricInterventionalRadiologySuiteCapacity;
