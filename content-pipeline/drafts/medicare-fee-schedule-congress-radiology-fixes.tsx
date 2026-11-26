import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const MedicareFeeScheduleCongressRadiologyFixes = () => {
  const post = {
    title: "What Radiology Groups Are Actually Asking Congress to Fix in the 2027 Fee Schedule",
    dateIso: '2026-11-14',
    date: 'November 14, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: 'ACR, SIR and ASTRO joined 59 other groups in a Nov. 12 letter asking Congress for 4 fixes to the CY2027 Medicare Physician Fee Schedule.',
  };

  const canonical = 'https://xaid.ai/blog/medicare-fee-schedule-congress-radiology-fixes';

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology's 4 Asks to Congress on the Fee Schedule | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology's 4 Asks to Congress on the Fee Schedule | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology's 4 Asks to Congress on the Fee Schedule | xAID" />
        <meta name="twitter:description" content={post.description} />
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
          "keywords": "medicare physician fee schedule 2026, 2027 medicare physician fee schedule, radiology conversion factor cut, modifier 25 payment reduction, MIPS penalty cap"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are radiology groups asking Congress to fix in the 2027 Medicare Physician Fee Schedule?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a Nov. 12, 2026 letter to House and Senate leaders, a coalition of 62 physician organizations — including the American College of Radiology, the Society of Interventional Radiology and the American Society for Radiation Oncology — asked Congress to: extend the 2.5% physician payment update through 2027; enact the bipartisan Provider Reimbursement Stability Act (H.R. 8163/S. 5180); delay for one year a new modifier 25 payment reduction; and cap Merit-based Incentive Payment System (MIPS) penalties at 2% while requiring timelier performance data."
              }
            },
            {
              "@type": "Question",
              "name": "Who signed the letter asking Congress to fix the Medicare fee schedule?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The American Medical Association led 61 other organizations, for 62 total signatories. Radiology-relevant signers included the American College of Radiology, the Society of Interventional Radiology, the American Society for Radiation Oncology, and the Society of Cardiovascular Computed Tomography, alongside dozens of other specialty societies and the Medical Group Management Association."
              }
            },
            {
              "@type": "Question",
              "name": "What did CMS finalize for the 2027 Medicare conversion factor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CMS's final CY2027 Physician Fee Schedule, released Nov. 4, 2026, set the conversion factor at $32.63 for non-Qualifying APM participants (a 2.31% cut from 2026) and $32.95 for Qualifying APM participants (a 1.83% cut). Despite the conversion-factor cut, CMS's own specialty-level estimates showed overall payment increases for most radiology specialties — about 1% for diagnostic radiology, 3% for interventional radiology, 1% for nuclear medicine and 2% for radiation oncology — driven by other RVU and practice-expense changes in the rule."
              }
            },
            {
              "@type": "Question",
              "name": "Will Congress act on the radiology coalition's requests before the fee schedule takes effect?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It isn't guaranteed. The coalition is asking for the fixes in an end-of-year legislative package, a route that has produced only partial, temporary relief in past years — Congress has repeatedly patched conversion-factor cuts after the fact rather than fixing the underlying formula. Radiology trade groups have noted practices can't keep relitigating the same cuts every year while waiting on Congress."
              }
            },
            {
              "@type": "Question",
              "name": "What can a radiology or teleradiology group control while Medicare reimbursement is unresolved?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Reimbursement policy is set in Washington; report throughput per radiologist is not. Groups can still improve the volume and turnaround of studies each radiologist reads without waiting on a legislative fix, which is why practices are increasingly pairing AI-assisted, radiologist-reviewed reporting with their existing staff rather than treating headcount as the only lever."
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
                Policy &amp; Reimbursement
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              What radiology groups are actually asking Congress<br />
              <span className="text-white/60">to fix in the final 2027 fee schedule</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 62-group coalition — ACR, SIR and ASTRO among them — sent a specific, four-item wish list to congressional leaders on Nov. 12. None of the four is a sure thing before year-end, which is exactly why the lever a practice still controls matters more than the one Congress hasn't pulled yet.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '-2.31%', label: 'Non-QP conversion factor cut', sub: 'to $32.63, effective Jan. 1' },
            { stat: '62', label: 'Organizations signed the letter', sub: 'AMA-led, Nov. 12, 2026' },
            { stat: '~33%', label: 'Real Medicare pay decline', sub: 'since 2001, per the coalition' },
            { stat: '20%', label: 'Modifier 25 payment cut', sub: 'for 2nd same-day service' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What CMS actually finalized for 2027
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On Nov. 4, 2026, the Centers for Medicare &amp; Medicaid Services released the final <a href="https://www.hhs.gov/press-room/cms-finalizes-2027-medicare-physician-fee-schedule.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">CY2027 Medicare Physician Fee Schedule</a>. The headline number is a conversion-factor cut: $32.63 for clinicians who aren't Qualifying APM Participants, down 2.31% from 2026, and $32.95 for Qualifying APM Participants, down 1.83%.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That cut alone doesn't tell the radiology-specific story. Per the American College of Radiology's own <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/cms-finalizes-2027-physician-fee-schedule-even-larger-conversion-factor-cuts" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">summary of the final rule</a>, other RVU and practice-expense changes mostly offset the conversion-factor cut at the specialty level: diagnostic radiology comes out roughly 1% ahead overall, interventional radiology about 3% ahead, nuclear medicine about 1% ahead, and radiation oncology about 2% ahead — with ACR's own caveat that "actual impacts may be less due to the conversion factor decrease" once a given practice's code mix is applied.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The rule also finalized a change CMS calls an anti-"duplicate billing" fix: when a separately identifiable office visit and a same-day, zero-day-global procedure are billed together, the practice is paid in full for the costlier of the two services and 20% less for the other. CMS Administrator Mehmet Oz framed it as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/cms-finalizes-2027-physician-fee-schedule-even-larger-conversion-factor-cuts" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"ending duplicate billing and closing costly loopholes"</a> to protect taxpayers; radiology, interventional and image-guided practices see it as a cut to work that existing valuation already accounts for.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The coalition's 4 specific asks
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Eight days after the final rule published, the American Medical Association and 61 other organizations — including the American College of Radiology, the Society of Interventional Radiology and the American Society for Radiation Oncology — sent a <a href="https://www.asn-online.org/policy/webdocs/ASN_AMA_Medicare-Payment-Priorities-Letter_Final.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">letter</a> to Speaker Mike Johnson, Senate Majority Leader John Thune, House Democratic Leader Hakeem Jeffries and Senate Democratic Leader Chuck Schumer. It asked for four things in any end-of-year legislative package:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. Extend the 2.5% payment update through 2027',
                    desc: "CMS itself projects a 2.5% rise in practice costs next year. The letter asks Congress to continue the temporary update it provided for 2026 rather than let it lapse — a step the Medicare Payment Advisory Commission has also recommended going further on.",
                  },
                  {
                    title: '2. Enact the Provider Reimbursement Stability Act (H.R. 8163 / S. 5180)',
                    desc: "This bipartisan bill, approved 44-0 by the House Ways and Means Committee, would require CMS to correct budget-neutrality adjustments prospectively when real-world service use differs substantially from its estimates. The Congressional Budget Office found two such CMS overestimates since 2015 that together cut physician rates by about 1.8 percentage points.",
                  },
                  {
                    title: '3. Delay the modifier 25 payment reduction for one year',
                    desc: "The coalition argues existing valuation processes already address overlapping same-day work, and that CMS hasn't justified the new 20% cut. More than 80 bipartisan members of Congress had already urged CMS not to finalize it before the rule published.",
                  },
                  {
                    title: '4. Cap MIPS penalties at 2% and require timelier performance data',
                    desc: "Nearly 40% of solo clinicians were penalized this year based on 2024 MIPS scores — feedback that arrives long after the performance year it measures. The ask: cap penalties at 2%, down from a current maximum of 9%, and get physicians actionable data while they can still act on it.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The letter's framing is blunt: Medicare physician payment has fallen approximately 33% since 2001 once adjusted for inflation in practice costs, and the physician fee schedule is "the only major Medicare payment system without automatic inflation-based updates." None of the four asks would reverse that 33% erosion — they would only stop four specific things from making 2027 worse.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What each fix actually changes
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Ask</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Mechanism</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Who it protects most</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Extend 2.5% update</td>
                      <td className="py-3 pr-4">Legislative extension of the 2026 temporary bump through 2027</td>
                      <td className="py-3">All Medicare-billing practices, especially small/rural/independent</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Provider Reimbursement Stability Act</td>
                      <td className="py-3 pr-4">Prospective correction of budget-neutrality overestimates</td>
                      <td className="py-3">All physicians — prevents permanent cuts for spending that never happened</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Delay modifier 25 cut</td>
                      <td className="py-3 pr-4">1-year pause on the 20% reduction for a second same-day service</td>
                      <td className="py-3">Office-based and proceduralist practices, including interventional radiology</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Cap MIPS penalties at 2%</td>
                      <td className="py-3 pr-4">Lower maximum penalty plus timelier performance feedback</td>
                      <td className="py-3">Solo and small-group clinicians reporting under MIPS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this isn't a sure thing — and what that means for margins
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Asking for a fix in an "end-of-year legislative package" is a familiar pattern, not a guarantee. Congress has patched conversion-factor cuts after the fact in prior cycles rather than resolving the underlying formula, and Kit Crancer, chairman of the Radiology Business Management Association's Radiology Patient Action Network, has <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/cms-finalizes-2027-physician-fee-schedule-even-larger-conversion-factor-cuts" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">said plainly</a> that practices "can't keep coming back to the same problem year after year." Even a best-case outcome — all four asks granted — stabilizes 2027 rather than growing it; it doesn't touch the 33% real-terms decline the coalition itself cites.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the practical takeaway for radiology groups, teleradiology providers and hospital imaging departments watching this play out: reimbursement policy is decided in Washington, on a timeline a practice doesn't control. What a practice does control is how many studies each radiologist reads in a shift and how fast each one gets reported — the throughput-per-radiologist math that determines margin regardless of whether the conversion factor lands at -2.31% or Congress trims that back to something smaller.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Foundation-model AI CT reporting is built around that exact lever: a comprehensive draft report generated per study, reviewed in-house at xAID before delivery, and handed to the group's reading radiologist ready-to-sign. It doesn't change what CMS pays per RVU — nothing on the clinical side can — but it changes how many RVUs a given radiologist can turn around in a day, which is the one number in this entire fee-schedule fight that isn't waiting on a vote in Washington.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What are radiology groups asking Congress to fix in the 2027 Medicare Physician Fee Schedule?',
                    a: "In a Nov. 12, 2026 letter to House and Senate leaders, a coalition of 62 physician organizations — including the American College of Radiology, the Society of Interventional Radiology and the American Society for Radiation Oncology — asked Congress to: extend the 2.5% physician payment update through 2027; enact the bipartisan Provider Reimbursement Stability Act (H.R. 8163/S. 5180); delay for one year a new modifier 25 payment reduction; and cap Merit-based Incentive Payment System (MIPS) penalties at 2% while requiring timelier performance data.",
                  },
                  {
                    q: 'Who signed the letter asking Congress to fix the Medicare fee schedule?',
                    a: 'The American Medical Association led 61 other organizations, for 62 total signatories. Radiology-relevant signers included the American College of Radiology, the Society of Interventional Radiology, the American Society for Radiation Oncology, and the Society of Cardiovascular Computed Tomography, alongside dozens of other specialty societies and the Medical Group Management Association.',
                  },
                  {
                    q: 'What did CMS finalize for the 2027 Medicare conversion factor?',
                    a: "CMS's final CY2027 Physician Fee Schedule, released Nov. 4, 2026, set the conversion factor at $32.63 for non-Qualifying APM participants (a 2.31% cut from 2026) and $32.95 for Qualifying APM participants (a 1.83% cut). Despite the conversion-factor cut, CMS's own specialty-level estimates showed overall payment increases for most radiology specialties — about 1% for diagnostic radiology, 3% for interventional radiology, 1% for nuclear medicine and 2% for radiation oncology — driven by other RVU and practice-expense changes in the rule.",
                  },
                  {
                    q: "Will Congress act on the radiology coalition's requests before the fee schedule takes effect?",
                    a: "It isn't guaranteed. The coalition is asking for the fixes in an end-of-year legislative package, a route that has produced only partial, temporary relief in past years — Congress has repeatedly patched conversion-factor cuts after the fact rather than fixing the underlying formula. Radiology trade groups have noted practices can't keep relitigating the same cuts every year while waiting on Congress.",
                  },
                  {
                    q: 'What can a radiology or teleradiology group control while Medicare reimbursement is unresolved?',
                    a: 'Reimbursement policy is set in Washington; report throughput per radiologist is not. Groups can still improve the volume and turnaround of studies each radiologist reads without waiting on a legislative fix, which is why practices are increasingly pairing AI-assisted, radiologist-reviewed reporting with their existing staff rather than treating headcount as the only lever.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.asn-online.org/policy/webdocs/ASN_AMA_Medicare-Payment-Priorities-Letter_Final.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AMA-led coalition letter to Congress</a> (Nov. 12, 2026); <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiology-groups-call-congress-make-4-fixes-final-physician-fee-schedule" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; <a href="https://www.hhs.gov/press-room/cms-finalizes-2027-medicare-physician-fee-schedule.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">CMS/HHS final-rule announcement</a>; <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/american-college-radiology-outlines-2027-medicare-fee-schedules-impact-imaging-pay" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology's summary</a>; <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/cms-finalizes-2027-physician-fee-schedule-even-larger-conversion-factor-cuts" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business coverage of the final conversion-factor cuts</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="The fee schedule is Congress's call. Throughput is yours."
          sub="See how foundation-model AI CT reporting — reviewed in-house, ready-to-sign — changes what one radiologist can turn around in a shift. Try it on 5 free studies."
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
              <Link to="/blog/2027-medicare-physician-fee-schedule-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">2027 Medicare Physician Fee Schedule: What It Means for Radiology</div>
              </Link>
              <Link to="/blog/patients-first-act-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Patients First Act: What It Means for Radiology Pay</div>
              </Link>
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MedicareFeeScheduleCongressRadiologyFixes;
