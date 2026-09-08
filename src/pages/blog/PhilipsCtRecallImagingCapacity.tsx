import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const PhilipsCtRecallImagingCapacity = () => {
  const post = {
    title: 'The Philips CT Recall Is a Capacity Problem, Not Just a Device Problem',
    dateIso: '2026-09-08',
    date: 'September 8, 2026',
    category: 'Operations',
    readingTime: 7,
    description: 'The FDA posted four Class II recalls for Philips CT scanners over a radiation issue. The fix is a free software update, but the rollout still strains capacity.',
  };
  const metaTitle = 'Philips CT Recall: What Imaging Centers Should Know | xAID';

  const recalledSystems = [
    { system: 'Brilliance iCT / iCT Upgrades / iCT SP', software: '4.1.10.x', recallNo: 'Z-3040-2026' },
    { system: 'IQon Spectral CT', software: '4.7.7.x', recallNo: 'Z-3041-2026' },
    { system: 'Ingenuity CT (Upgrades / China / Core 128 Elite)', software: '4.4.10.x', recallNo: 'Z-3042-2026' },
    { system: 'Brilliance CT 64-Channel / Upgrades', software: '4.1.10.x', recallNo: 'Z-3043-2026' },
  ];

  return (
    <>
      <Helmet defer={false}>
        <title>{metaTitle}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/philips-ct-recall-imaging-capacity" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/philips-ct-recall-imaging-capacity" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/philips-ct-recall-imaging-capacity" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/philips-ct-recall-imaging-capacity",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "philips ct recall, ct scanner recall, FDA class 2 recall CT, imaging center capacity, radiology reporting backlog"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the FDA recall involving Philips CT scanners cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On September 1, 2026, the FDA posted four Class II recall records (Z-3040-2026 through Z-3043-2026) covering the Philips Brilliance iCT family, IQon Spectral CT, Ingenuity CT, and Brilliance CT 64. Philips identified an unintended radiation issue that could affect equipment performance and initiated the correction on August 7, 2026. The fix is a free software update, distributed in the US and US territories."
              }
            },
            {
              "@type": "Question",
              "name": "Do hospitals have to take the affected CT scanners out of service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Philips is not removing the affected systems from the field. It is notifying customers and scheduling the software correction on-site, and coverage of the recall notes that patients should not cancel medically necessary scans over a recall notice. In practice, each scanner still needs a service window to receive and validate the update, and as of the recall posting the correction was listed as open — meaning not every affected unit had been updated yet."
              }
            },
            {
              "@type": "Question",
              "name": "What does an FDA Class II recall mean for patient risk?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA defines a Class II recall as one where a product may cause temporary or medically reversible health consequences, or where the probability of serious harm is remote. It is the middle of the FDA's three severity tiers, below Class I (reasonable probability of serious injury or death) and above Class III (unlikely to cause any adverse health consequence)."
              }
            },
            {
              "@type": "Question",
              "name": "How does a CT hardware recall affect radiology report turnaround times?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not directly — the recall is a device-radiation issue, not a reporting issue. But when scanners go offline in shifts for a service update, or patients get shifted to fewer available machines, the studies that do get scanned tend to arrive in denser bursts. Reporting capacity, not scanner capacity, is what absorbs that unevenness, since a radiologist or reporting pipeline still has to turn around every study regardless of when in the day or week it was acquired."
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
                Operations
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              The Philips CT recall is a capacity problem,<br />
              <span className="text-white/60">not just a device problem</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Four Class II recalls, one software fix, and a scheduling question every affected imaging center now has to answer: what happens to the studies and the reports while the update rolls out.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '4', label: 'Class II recalls posted by the FDA', sub: 'September 1, 2026' },
            { stat: 'Aug 7, 2026', label: 'Date Philips initiated the fix', sub: 'per FDA recall record' },
            { stat: '4', label: 'CT platforms named', sub: 'iCT, IQon, Ingenuity, Brilliance CT 64' },
            { stat: 'Software', label: 'update, not a device pull', sub: 'scheduled on-site by Philips' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the FDA actually posted
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On <strong>September 1, 2026</strong>, the FDA posted four separate <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfres/res.cfm?id=222477" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Class II recall records</a> for Philips CT systems, filed under the same underlying issue. Philips's own language in the filings is consistent across all four: the company "identified an unintended radiation issue with the Philips IQon, iCT, Ingenuity, and Brilliance CT 64 systems that could affect the performance of the equipment." Philips initiated the correction on <strong>August 7, 2026</strong>, and distribution is listed as the US and US territories.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                As <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/unintended-radiation-issue-prompts-recall-several-ct-systems" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>, the affected platforms — IQon Spectral CT, the Brilliance iCT family, Ingenuity CT, and Brilliance CT 64 — are among the most widely installed CT platforms in US hospitals, which is why the recall reads as significant even though the FDA's public record doesn't disclose how many individual scanners are affected.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Critically, this is not a device-removal recall. Philips is correcting the issue with a free software update, delivered through an Electronic Product Radiation Correction notice, and is scheduling the update with customers directly rather than pulling machines from the field. The <a href="https://www.medicaldaily.com/philips-ct-scanner-recall-radiation-issue-fda-class-2-478191" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">recall coverage is explicit</a> that patients should not cancel medically necessary scans over the notice — delaying imaging for time-sensitive conditions carries its own risk.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The four recalls, side by side
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Each affected platform got its own recall number because each runs a different software line. As of the posting date, the FDA listed all four as <strong>"Open, Classified"</strong> — meaning correction was underway but not complete across the installed base.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">System</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Software line</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">FDA recall number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recalledSystems.map((row) => (
                      <tr key={row.recallNo} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#0D0D0D] font-medium align-top">{row.system}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#666] font-light align-top">{row.software}</td>
                        <td className="py-3 text-[14px] text-[#666] font-light align-top">{row.recallNo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Source: <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfres/res.cfm?id=222477" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA Medical Device Recall database</a> records Z-3040-2026 through Z-3043-2026, posted September 1, 2026.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What "Class II" actually buys you
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The FDA <a href="https://www.fda.gov/safety/industry-guidance-recalls/recalls-background-and-definitions" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">defines a Class II recall</a> as one where a product "may cause temporary or medically reversible adverse health consequences," or where the probability of serious harm is remote — the middle of three severity tiers, below Class I (reasonable probability of serious injury or death) and above Class III (unlikely to cause any adverse health effect). That classification is why this recall generated a software patch and a customer notification rather than an urgent stop-use order.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the right regulatory outcome for the safety question. But "not urgent enough to stop scanning" and "zero operational impact" are two different claims. A software correction on an in-service CT console still typically means a scheduled visit from a field service engineer, a period where that unit isn't scanning patients, and validation testing before it's released back to the schedule. Multiply that across four platforms and however many individual scanners a given health system runs, and the rollout itself becomes a scheduling exercise — one that has to happen without a formal deadline pressuring it, since the FDA record sets no fixed completion date.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The angle that matters operationally: hardware down, reporting still owed
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Imaging centers have handled hardware downtime before — a tube failure, a service contract lapse, a scheduled upgrade. The pattern is familiar: whatever scanner capacity is lost gets absorbed one of three ways. Patients get rescheduled to a later slot on the same machine once it's back online. They get diverted to a sister scanner or another site, if one exists. Or referring physicians and patients simply wait longer for the exam.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                What doesn't shrink to match reduced scanner capacity is the reporting obligation. Every study that does get acquired — whether it's scanned on schedule, squeezed into a reopened slot after a service window closes, or shifted to a scanner that's now running above its normal volume to cover for one down for the update — still needs a read, a report, and a radiologist's signature on the same clinical timeline as before. A multi-platform, multi-facility software rollout with no fixed completion date is exactly the kind of event that produces uneven, bursty scan volume: quiet stretches while a unit is down, followed by a compressed backlog once it's validated and reopened.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That unevenness is a reporting-throughput problem before it's anything else. A fixed radiologist roster sized for average daily volume doesn't flex well against a burst — which is exactly the mismatch that <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">already stretches turnaround times</Link> in normal operations, before a recall-driven scheduling shuffle adds variance on top of it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is a case where the fix belongs on the reporting side, not the imaging side. AI CT reporting doesn't touch the hardware recall at all — that's squarely Philips's and the FDA's lane. What it changes is how a center absorbs a volume burst once the scans do land: a foundation-model system can draft a structured, comprehensive report the moment a study lands in the queue, xAID's in-house radiologist reviews every preliminary, and it reaches the reading radiologist ready-to-sign rather than ready-to-dictate from a blank page. That compresses the part of the turnaround clock a center actually controls — the drafting and review step — so a burst of rescheduled studies doesn't automatically become a multi-day backlog. It's the same elasticity centers already reach for during <Link to="/blog/overutilization-of-medical-imaging/" className="text-xaid-blue-strong underline underline-offset-2">ordinary demand spikes</Link> or when covering gaps with <Link to="/blog/after-hours-radiology-coverage-options/" className="text-xaid-blue-strong underline underline-offset-2">after-hours coverage</Link> — applied to a hardware-driven one instead.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the FDA recall involving Philips CT scanners cover?',
                    a: 'On September 1, 2026, the FDA posted four Class II recall records (Z-3040-2026 through Z-3043-2026) covering the Philips Brilliance iCT family, IQon Spectral CT, Ingenuity CT, and Brilliance CT 64. Philips identified an unintended radiation issue that could affect equipment performance and initiated the correction on August 7, 2026. The fix is a free software update, distributed in the US and US territories.',
                  },
                  {
                    q: 'Do hospitals have to take the affected CT scanners out of service?',
                    a: "No. Philips is not removing the affected systems from the field. It is notifying customers and scheduling the software correction on-site, and coverage of the recall notes that patients should not cancel medically necessary scans over a recall notice. In practice, each scanner still needs a service window to receive and validate the update, and as of the recall posting the correction was listed as open — meaning not every affected unit had been updated yet.",
                  },
                  {
                    q: 'What does an FDA Class II recall mean for patient risk?',
                    a: 'The FDA defines a Class II recall as one where a product may cause temporary or medically reversible health consequences, or where the probability of serious harm is remote. It is the middle of the FDA\'s three severity tiers, below Class I (reasonable probability of serious injury or death) and above Class III (unlikely to cause any adverse health consequence).',
                  },
                  {
                    q: 'How does a CT hardware recall affect radiology report turnaround times?',
                    a: 'Not directly — the recall is a device-radiation issue, not a reporting issue. But when scanners go offline in shifts for a service update, or patients get shifted to fewer available machines, the studies that do get scanned tend to arrive in denser bursts. Reporting capacity, not scanner capacity, is what absorbs that unevenness, since a radiologist or reporting pipeline still has to turn around every study regardless of when in the day or week it was acquired.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfres/res.cfm?id=222477" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA Medical Device Recall database</a> (records Z-3040-2026 through Z-3043-2026), <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/unintended-radiation-issue-prompts-recall-several-ct-systems" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, and <a href="https://www.medicaldaily.com/philips-ct-scanner-recall-radiation-issue-fda-class-2-478191" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medical Daily</a>. FDA recall classification definitions per the <a href="https://www.fda.gov/safety/industry-guidance-recalls/recalls-background-and-definitions" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">FDA's recalls background and definitions page</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Don't let a volume burst become a backlog"
          sub="Whatever pushes scan volume out of its normal rhythm — a hardware recall, a coverage gap, a seasonal spike — xAID absorbs it on the reporting side. Try it on 5 free studies."
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
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/overutilization-of-medical-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Capacity</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Fewer Imaging Gatekeepers, More Scans: The Capacity Squeeze</div>
              </Link>
              <Link to="/blog/after-hours-radiology-coverage-options/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Coverage</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">After-Hours Radiology Coverage Options 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PhilipsCtRecallImagingCapacity;
