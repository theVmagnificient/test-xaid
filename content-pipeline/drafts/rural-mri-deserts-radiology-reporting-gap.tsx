import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RuralMriDesertsReportingGap = () => {
  const post = {
    title: 'Rural MRI Deserts Are Only Half the Access Problem',
    dateIso: '2026-09-15',
    date: 'September 15, 2026',
    category: 'Access & Equity',
    readingTime: 8,
    description: "A Wisconsin study found 24 of 72 counties have no in-hospital MRI machine, and 10 have no MRI access at all — fixed or mobile. But a second, quieter gap sits behind the equipment map: even hospitals that do have a scanner often have no local radiologist to read it.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Rural MRI Access: Why Scanners Alone Don't Fix It | xAID</title>
        <meta
          name="description"
          content="A Wisconsin study found 24 of 72 counties lack an MRI machine, exposing a rural imaging access gap that scanners alone don't fully close."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Rural MRI Access: Why Scanners Alone Don't Fix It | xAID" />
        <meta property="og:description" content="A Wisconsin study found 24 of 72 counties lack an MRI machine, exposing a rural imaging access gap that scanners alone don't fully close." />
        <meta property="og:url" content="https://xaid.ai/blog/rural-mri-deserts-radiology-reporting-gap" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rural MRI Access: Why Scanners Alone Don't Fix It | xAID" />
        <meta name="twitter:description" content="A Wisconsin study found 24 of 72 counties lack an MRI machine, exposing a rural imaging access gap that scanners alone don't fully close." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/rural-mri-deserts-radiology-reporting-gap" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/rural-mri-deserts-radiology-reporting-gap",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "rural imaging access, MRI access disparities, imaging deserts, rural radiology, critical access hospital imaging, teleradiology rural"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How many counties have no access to MRI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In Wisconsin, a 2025 study in WMJ found that 24 of the state's 72 counties have no in-hospital MRI machine. Fourteen of those 24 rely on a mobile MRI unit that visits as infrequently as once every two weeks, and the remaining 10 counties have no MRI access at all — fixed or mobile. A companion study of Minnesota found an even wider gap: 39 of 87 counties without an in-hospital MRI, 25 of them with no mobile service either."
              }
            },
            {
              "@type": "Question",
              "name": "Is the Wisconsin MRI access gap unique to that state?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The Wisconsin study explicitly mirrors an earlier analysis of Minnesota by the same lead author, which found a comparable — and in some respects larger — rural equipment gap. Both studies conclude that rural hospitals nationally are likely vulnerable to the same pattern, since the underlying driver is the cost of installing and staffing an MRI or CT machine at low patient volumes."
              }
            },
            {
              "@type": "Question",
              "name": "Does installing an MRI machine at a rural hospital solve the access problem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Only partially. A national ACR member survey found that 46.2% of radiologists perform teleradiology for rural areas and 37.2% for critical access hospitals — meaning a large share of scans acquired at small and rural facilities are still read remotely, often with longer turnaround than an on-site radiologist would provide. A scanner without local reporting capacity shifts the bottleneck from acquisition to interpretation instead of closing it."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI-assisted reporting help rural imaging access?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI-assisted CT reporting lets a small in-house or teleradiology-covering radiology team read a higher volume of studies without a proportional increase in headcount, because the AI produces a structured draft report that the covering radiologist reviews and finalizes. That matters specifically for equipment deserts: once a rural hospital gets a scanner, the constraint moves to reporting capacity, and thin rural and teleradiology workforces need a way to absorb the new volume without adding turnaround delay."
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
                Access &amp; Equity
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Rural MRI deserts are only<br />
              <span className="text-white/60">half the access problem</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new county-level study puts hard numbers on something rural health advocates have argued for years: whole counties in at least two states have no meaningful MRI access. But the same body of research quietly points to a second gap — even hospitals with a scanner often can't staff a radiologist to read it locally.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '24', label: 'Wisconsin counties with no in-hospital MRI', sub: 'of 72 total (WMJ, 2025)' },
            { stat: '10', label: 'Counties with zero MRI access', sub: 'no fixed unit, no mobile service' },
            { stat: '25', label: 'Minnesota counties, same pattern', sub: 'of 87, zero MRI access (2021 study)' },
            { stat: '46%', label: 'Of surveyed radiologists read for rural areas', sub: 'via teleradiology, scanner or not' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The headline number: Wisconsin's MRI deserts, mapped county by county
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiologists at Aurora St. Luke's Medical Center in Milwaukee called every hospital on the Wisconsin Hospital Association's directory and asked a simple question: how many MRI and CT machines do you have on site. The results, published in <a href="https://wmjonline.org/124no3/burdorf/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>WMJ</em></a> (the journal of the Wisconsin Medical Society and Medical College of Wisconsin), as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/1-state-over-dozen-counties-have-no-access-mri-implications-elsewhere" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, show a state that looks fine in aggregate and uneven underneath.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Of Wisconsin's 72 counties, <strong>24 have no in-hospital MRI machine</strong> — 19 rural, 5 urban. Fourteen of those 24 counties are served by a mobile MRI unit that rotates between facilities, with availability ranging from two days a week to once every two weeks. That leaves <strong>10 counties with no MRI access at all</strong>, fixed or mobile. CT is less scarce but not solved either: <strong>9 counties</strong> (7 rural, 2 urban) have no in-hospital CT machine.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The distance math is where the disparity really shows up. Wisconsin's rural counties average <strong>714 square miles per MRI machine</strong>, against 294 square miles in the state's own urban counties and a national average of 595. For CT, rural counties average 407 square miles per machine versus 216 in urban Wisconsin counties. Rural patients aren't necessarily competing for scanner time with more people per machine — they're just farther from the nearest one, and distance is what turns a same-day scan into a delayed or skipped one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This isn't a Wisconsin problem — the same author found it in Minnesota first
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Wisconsin paper says outright that it "closely mirrors prior work" by the same lead author on Minnesota, published in the <a href="https://doi.org/10.4081/jphr.2021.2527" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Journal of Public Health Research</a> in 2021. That earlier study found an even wider gap: of Minnesota's 87 counties, <strong>39 had no in-hospital MRI</strong>, 14 of which used a mobile service — leaving <strong>25 counties with no MRI access whatsoever</strong>.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">State (study year)</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Total counties</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">No in-hospital MRI</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Of those, mobile-only</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Zero MRI access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444]">Wisconsin (2025)</td>
                      <td className="py-3 pr-4 text-[#444]">72</td>
                      <td className="py-3 pr-4 text-[#444]">24</td>
                      <td className="py-3 pr-4 text-[#444]">14</td>
                      <td className="py-3 text-[#444]">10</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444]">Minnesota (2021)</td>
                      <td className="py-3 pr-4 text-[#444]">87</td>
                      <td className="py-3 pr-4 text-[#444]">39</td>
                      <td className="py-3 pr-4 text-[#444]">14</td>
                      <td className="py-3 text-[#444]">25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two Midwestern states, same shape of gap, same conclusion from the researchers: distance to a machine — not the total number of machines per person — is the actual access barrier, and it warrants "further research... to investigate the potential vulnerability of other rural populations" elsewhere in the country. Neither state is an outlier; they're simply the two states where someone picked up the phone and counted.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why rural hospitals end up without a scanner in the first place
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The Wisconsin study points to the same underlying pressure documented elsewhere: it cites a <a href="https://chqpr.org/downloads/Rural_Hospitals_at_Risk_of_Closing.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Center for Healthcare Quality and Payment Reform</a> estimate that roughly 30% of rural hospitals in the US are financially unsustainable and at risk of closing (CHQPR periodically updates this figure — its most recent published estimate puts the share at closer to one-third), and a substantial share of that cost pressure is the installation, maintenance, and operation of CT and MRI equipment. A separate <a href="https://doi.org/10.1016/j.jacr.2015.09.008" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">JACR analysis of critical access hospitals</a> found that network affiliation nearly doubled the odds a facility offered MRI — hospitals with more resources, or access to a larger system's resources, are simply more likely to have the equipment at all.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Wisconsin itself illustrates the stakes: 32.9% of its population is rural, and the state has <a href="https://www.flexmonitoring.org/historical-cah-data-0" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">58 Critical Access Hospitals</a>, the sixth-highest total in the country. Every one of those facilities is making the same cost-benefit call on imaging equipment against low patient volumes — and a meaningful share are deciding they can't justify a fixed MRI at all.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The gap the equipment map doesn't show: who reads the scan
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Closing the hardware gap — installing more fixed MRI and CT machines in the counties that lack them — is necessary, but it isn't sufficient, because a scanner without a radiologist to interpret its output doesn't shorten the time to a diagnosis; it just relocates the bottleneck. A national <a href="https://doi.org/10.1016/j.jacr.2019.05.053" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ACR member survey</a> found that 46.2% of respondents performed teleradiology for rural areas and 37.2% for critical access hospitals specifically — meaning a large share of the scans acquired at small and rural facilities, including ones with a working scanner on site, are still read by a radiologist somewhere else, on that radiologist's schedule.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the same pattern documented on the acquisition side of imaging: when a health system speeds up MRI scanning, the constraint doesn't disappear — it <Link to="/blog/how-ai-cuts-mri-wait-times/" className="text-xaid-blue-strong underline underline-offset-2">shifts downstream to reporting</Link>. Equipment deserts are the same problem in reverse. Give a rural county its first MRI machine and the county still needs enough reporting capacity, on-site or remote, to turn scans into results without a multi-day wait — otherwise the new scanner mostly changes where the delay happens, not whether one exists.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A thin rural or teleradiology-covering workforce can't absorb a wave of new scanner capacity by hiring its way there — the same low-volume economics that keep a county without a machine also make it hard to justify another full-time radiologist. AI-assisted CT reporting changes the math on the reporting side rather than the equipment side: it produces a structured, ready-to-sign draft report that the covering radiologist reviews and finalizes, so one radiologist can safely cover more studies without a proportional increase in turnaround time. For a county that just got its first scanner, or a critical access hospital leaning on remote coverage, that's what actually lets new imaging capacity turn into faster answers for patients — not just a shorter drive to a machine.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How many counties have no access to MRI?',
                    a: "In Wisconsin, a 2025 study in WMJ found that 24 of the state's 72 counties have no in-hospital MRI machine. Fourteen of those 24 rely on a mobile MRI unit that visits as infrequently as once every two weeks, and the remaining 10 counties have no MRI access at all — fixed or mobile. A companion study of Minnesota found an even wider gap: 39 of 87 counties without an in-hospital MRI, 25 of them with no mobile service either.",
                  },
                  {
                    q: 'Is the Wisconsin MRI access gap unique to that state?',
                    a: 'No. The Wisconsin study explicitly mirrors an earlier analysis of Minnesota by the same lead author, which found a comparable — and in some respects larger — rural equipment gap. Both studies conclude that rural hospitals nationally are likely vulnerable to the same pattern, since the underlying driver is the cost of installing and staffing an MRI or CT machine at low patient volumes.',
                  },
                  {
                    q: 'Does installing an MRI machine at a rural hospital solve the access problem?',
                    a: 'Only partially. A national ACR member survey found that 46.2% of radiologists perform teleradiology for rural areas and 37.2% for critical access hospitals — meaning a large share of scans acquired at small and rural facilities are still read remotely, often with longer turnaround than an on-site radiologist would provide. A scanner without local reporting capacity shifts the bottleneck from acquisition to interpretation instead of closing it.',
                  },
                  {
                    q: 'How does AI-assisted reporting help rural imaging access?',
                    a: 'AI-assisted CT reporting lets a small in-house or teleradiology-covering radiology team read a higher volume of studies without a proportional increase in headcount, because the AI produces a structured draft report that the covering radiologist reviews and finalizes. That matters specifically for equipment deserts: once a rural hospital gets a scanner, the constraint moves to reporting capacity, and thin rural and teleradiology workforces need a way to absorb the new volume without adding turnaround delay.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Burdorf B, MacDonald W, Kesarla P, Burdorf S. "Comparing Magnetic Resonance Imaging and Computed Tomography Machine Accessibility Among Urban and Rural County Hospitals in Wisconsin." <em>WMJ</em>. 2025;124(3):243-248 (<a href="https://wmjonline.org/124no3/burdorf/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">full text</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/40953387/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">PubMed</a>), as covered by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/1-state-over-dozen-counties-have-no-access-mri-implications-elsewhere" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; Burdorf BT. "Comparing magnetic resonance imaging and computed tomography machine accessibility among urban and rural county hospitals." <em>J Public Health Res</em>. 2021;11(1):2527, <a href="https://doi.org/10.4081/jphr.2021.2527" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.4081/jphr.2021.2527</a>; Rosenkrantz AB, et al., "The Current State of Teleradiology Across the United States," <em>J Am Coll Radiol</em>. 2019;16(12), <a href="https://doi.org/10.1016/j.jacr.2019.05.053" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2019.05.053</a>; Khaliq AA, Deyo D, Duszak R Jr. "The Impact of Hospital Characteristics on the Availability of Radiology Services at Critical Access Hospitals." <em>J Am Coll Radiol</em>. 2015;12(12 Pt B):1351-1356, <a href="https://doi.org/10.1016/j.jacr.2015.09.008" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2015.09.008</a>; <a href="https://chqpr.org/downloads/Rural_Hospitals_at_Risk_of_Closing.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Center for Healthcare Quality and Payment Reform</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A new scanner is only half the fix"
          sub="AI-assisted CT reporting lets a thin rural or teleradiology-covering radiology team absorb more scanner volume without adding turnaround time. Try it on 5 free studies."
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
              <Link to="/blog/ai-radiology-for-small-hospitals-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology for Small and Community Hospitals 2026</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
              <Link to="/blog/how-ai-cuts-mri-wait-times/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workflow & Throughput</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Cut MRI Wait Times 60% — But Faster Scans Just Move the Bottleneck</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RuralMriDesertsReportingGap;
