import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyReimbursementCuts = () => {
  const post = {
    title: 'How Often Does CMS Cut Radiology Reimbursement? A New Study Counts',
    dateIso: '2026-09-02',
    date: 'September 2, 2026',
    category: 'Policy & Reimbursement',
    readingTime: 7,
    description: "A JAMA Network Open analysis of 22 years of CPT valuations finds CMS devalues 27.8% of diagnostic radiology codes and 52.1% of interventional radiology codes between specialty-society proposal and final payment. Here's what drives the cuts — and why volume per radiologist-hour is the lever that's left.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>How Often Does CMS Cut Radiology Reimbursement? | xAID</title>
        <meta name="description" content="A JAMA Network Open study finds CMS devalues 27.8% of diagnostic and 52.1% of interventional radiology CPT codes. What drives radiology reimbursement cuts." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-reimbursement-cuts/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How Often Does CMS Cut Radiology Reimbursement? | xAID" />
        <meta property="og:description" content="A JAMA Network Open study finds CMS devalues 27.8% of diagnostic and 52.1% of interventional radiology CPT codes. What drives radiology reimbursement cuts." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Often Does CMS Cut Radiology Reimbursement? | xAID" />
        <meta name="twitter:description" content="A JAMA Network Open study finds CMS devalues 27.8% of diagnostic and 52.1% of interventional radiology CPT codes. What drives radiology reimbursement cuts." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-reimbursement-cuts/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-reimbursement-cuts/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology reimbursement cuts, CMS radiology valuation, CPT code devaluation radiology, Medicare physician fee schedule radiology, RUC radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How often does CMS cut radiology CPT code valuations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A JAMA Network Open study of CPT code editions from 2004 to 2025 found that 27.8% of diagnostic radiology codes (25 of 90) were devalued between the specialty society's proposed value and CMS's final payment determination, with a median cut of 17.0% when a code was devalued. Interventional radiology codes were devalued more often — 52.1% of codes — though by a smaller median amount, 5.6%."
              }
            },
            {
              "@type": "Question",
              "name": "Are diagnostic and interventional radiology cut at the same rate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The study found interventional radiology codes were devalued nearly twice as often as diagnostic radiology codes (52.1% vs 27.8%), but diagnostic radiology cuts tended to be deeper in percentage terms when they happened — a median 17.0% reduction versus 5.6% for interventional radiology, with the steepest quarter of diagnostic radiology cuts exceeding 66%."
              }
            },
            {
              "@type": "Question",
              "name": "What drives CMS to cut a radiology code's value?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The study identifies two stages: the AMA's RUC committee, which reviews specialty-society proposals and adjusts about 23% of them (nearly 95% of those adjustments are cuts), and CMS itself, which independently adjusts about a third of RUC recommendations. For diagnostic radiology, most of the cutting happens at the CMS stage — the study's authors note CMS has increasingly cited site-of-service shifts, crosswalks to clinically similar procedures, and a preference for empirical data such as EHR time logs over specialty-society physician-time surveys."
              }
            },
            {
              "@type": "Question",
              "name": "What can radiology practices do about eroding per-study reimbursement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because a single code's valuation is set through a multi-year process practices don't control, the more immediate lever is operational: increasing the number of studies a radiologist can read accurately per hour. AI-assisted reporting that produces a structured, ready-to-sign draft is one way practices are trying to hold revenue per radiologist steady as per-study reimbursement keeps eroding."
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
              How often does CMS cut radiology reimbursement?<br />
              <span className="text-white/60">A new study puts a number on it</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 22-year analysis of CPT code valuations, published in JAMA Network Open, tracked exactly how often — and by how much — the RUC and CMS cut what specialty societies asked to be paid. For radiology, the pattern is specific enough to plan around.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '27.8%', label: 'Diagnostic radiology codes cut', sub: 'proposal to final CMS value' },
            { stat: '−17.0%', label: 'Median cut when devalued', sub: 'diagnostic radiology' },
            { stat: '52.1%', label: 'Interventional radiology cut', sub: 'vs 27.8% for diagnostic' },
            { stat: '94.7%', label: 'RUC adjustments that cut pay', sub: '482 of 509, not raises' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study measured
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Every CPT code on the Medicare Physician Fee Schedule starts as a value proposed by a specialty society, gets reviewed by the AMA's Relative Value Scale Update Committee (RUC), and is then finalized by CMS. A team led by Vinay K. Rathi published a cross-sectional analysis of that pipeline in{' '}
                <a href="https://doi.org/10.1001/jamanetworkopen.2026.31317" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">
                  <em>JAMA Network Open</em>
                </a>{' '}
                on September 1, 2026, covering 2,173 RUC recommendations tied to 1,934 unique CPT codes across CPT editions from 2004 to 2025.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The point of the study wasn't to relitigate any single code. It was to quantify, across more than two decades and 30-plus specialties, how often the value a specialty society asks for actually survives the process — and where in that process radiology's valuation cuts get made.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Radiology's numbers: two different patterns
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Diagnostic radiology and interventional radiology were tracked separately, and they don't move the same way. Of 90 diagnostic radiology codes in the dataset, <strong>25 (27.8%)</strong> ended up devalued between the specialty society's proposal and CMS's final payment amount, with a median reduction of <strong>17.0%</strong> among the codes that were cut. Interventional radiology codes were devalued far more often — <strong>52.1%</strong> of codes — but the median cut when it happened was smaller, <strong>5.6%</strong>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Where the diagnostic radiology cuts get made is the more useful finding for planning purposes. Only <strong>11 of the 90 codes (12.2%)</strong> were devalued at the RUC review stage, with a modest median cut of <strong>8.3%</strong>. But <strong>22 of the 90 (24.4%)</strong> were devalued at the next stage — CMS overriding or further reducing the RUC's recommendation — and that stage's cuts were much steeper, a median <strong>24.2%</strong>. In the quarter of diagnostic radiology codes cut hardest at that stage, reductions exceeded <strong>66%</strong>. In other words: for imaging, CMS itself, not the physician-led RUC review, is doing most of the heavy cutting.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How radiology compares to other specialties
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                The study broke out devaluation rates and median cut sizes for more than a dozen specialties, from specialty-society proposal through to CMS's final value. Radiology sits in the middle of the pack on frequency but among the deepest on magnitude when a cut does land:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Specialty</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Codes devalued</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Median cut</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    {[
                      ['Anesthesiology', '83.3%', '−18.2%'],
                      ['Pathology', '52.8%', '−33.3%'],
                      ['Interventional radiology', '52.1%', '−5.6%'],
                      ['Orthopedics', '56.5%', '−17.0%'],
                      ['Cardiology', '60.7%', '−28.6%'],
                      ['Diagnostic radiology', '27.8%', '−17.0%'],
                      ['Vascular surgery', '25.0%', '+2.3%'],
                      ['Obstetrics/gynecology', '17.1%', '+4.6%'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4">{row[0]}</td>
                        <td className="py-3 pr-4">{row[1]}</td>
                        <td className="py-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Devaluation rate and median percentage change from specialty-society proposal to final CMS valuation. Positive medians (vascular surgery, ob/gyn) reflect specialties where the typical adjustment was an increase, not a cut, even though a minority of their codes were still devalued.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where the variation comes from
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Across all specialties, the RUC adjusted <strong>23.4%</strong> of specialty-society proposals (509 of 2,173) — and when it did adjust one, <strong>94.7%</strong> of those adjustments (482 of 509) were devaluations, not increases. CMS then went further, independently adjusting <strong>33.9%</strong> of RUC recommendations (737 of 2,173); <strong>62.2%</strong> of those adjustments cut value and <strong>37.8%</strong> raised it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The authors point to a few concrete drivers behind CMS's stage of the process: site-of-service shifts (procedures moving from inpatient to outpatient settings), crosswalking a code to a clinically similar service already on the books, and — increasingly — a preference for empirical utilization data such as EHR time logs over the physician time-and-intensity surveys specialty societies use to build their original proposals. That last shift matters for imaging specifically, since it changes the kind of evidence that can move a valuation once it reaches CMS.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this points back to volume, not just advocacy
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this is a one-time event a practice can simply wait out. It's a structural feature of a valuation process that reruns on every code, every few years, with CMS empowered to devalue independently of what the specialty society and the RUC recommend. Advocacy through the RUC and comment periods on proposed rules remains the only channel practices have to influence a code's value directly — but the data shows that channel has real limits, particularly at the CMS stage where diagnostic radiology's deepest cuts happen.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That leaves the lever practices can actually control day to day: how much diagnostic work a radiologist can complete accurately per hour. If per-study reimbursement keeps eroding independent of practice performance, revenue per radiologist depends increasingly on studies read per radiologist-hour — not on headcount, and not on winning any single valuation fight.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                AI-assisted CT reporting is one concrete way practices are pursuing that throughput lever without adding radiologist headcount: the system produces a structured, comprehensive draft report, xAID's in-house radiologist reviews every preliminary, and the finding reaches the client's reading radiologist ready-to-sign rather than dictated from a blank page. When the per-study payment a practice can expect from CMS keeps shrinking, the studies a radiologist can move through in a shift becomes the number that's actually within a practice's control.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How often does CMS cut radiology CPT code valuations?',
                    a: 'A JAMA Network Open study of CPT code editions from 2004 to 2025 found that 27.8% of diagnostic radiology codes (25 of 90) were devalued between the specialty society\'s proposed value and CMS\'s final payment determination, with a median cut of 17.0% when a code was devalued. Interventional radiology codes were devalued more often — 52.1% of codes — though by a smaller median amount, 5.6%.',
                  },
                  {
                    q: 'Are diagnostic and interventional radiology cut at the same rate?',
                    a: 'No. The study found interventional radiology codes were devalued nearly twice as often as diagnostic radiology codes (52.1% vs 27.8%), but diagnostic radiology cuts tended to be deeper in percentage terms when they happened — a median 17.0% reduction versus 5.6% for interventional radiology, with the steepest quarter of diagnostic radiology cuts exceeding 66%.',
                  },
                  {
                    q: 'What drives CMS to cut a radiology code\'s value?',
                    a: "The study identifies two stages: the AMA's RUC committee, which reviews specialty-society proposals and adjusts about 23% of them (nearly 95% of those adjustments are cuts), and CMS itself, which independently adjusts about a third of RUC recommendations. For diagnostic radiology, most of the cutting happens at the CMS stage — the study's authors note CMS has increasingly cited site-of-service shifts, crosswalks to clinically similar procedures, and a preference for empirical data such as EHR time logs over specialty-society physician-time surveys.",
                  },
                  {
                    q: 'What can radiology practices do about eroding per-study reimbursement?',
                    a: "Because a single code's valuation is set through a multi-year process practices don't control, the more immediate lever is operational: increasing the number of studies a radiologist can read accurately per hour. AI-assisted reporting that produces a structured, ready-to-sign draft is one way practices are trying to hold revenue per radiologist steady as per-study reimbursement keeps eroding.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Rathi VK, Roth LM, Burke JF, et al. "Valuation Adjustments for Services Reviewed by the Relative Value Scale Update Committee." <em>JAMA Network Open</em>. 2026;9(9):e2631317.{' '}
                <a href="https://doi.org/10.1001/jamanetworkopen.2026.31317" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi:10.1001/jamanetworkopen.2026.31317</a>, as covered by{' '}
                <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/new-research-explores-frequency-which-cms-devalues-radiology-services" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Per-study pay keeps eroding. Throughput is the lever left."
          sub="See how AI-assisted CT reporting helps radiologists move through more studies per hour without adding headcount. Try it on 5 free studies."
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
              <Link to="/blog/site-neutral-payments-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Site-Neutral Payments, Explained: What CMS's Proposed $260M Imaging Cut Changes</div>
              </Link>
              <Link to="/blog/radiologist-pay-stagnation-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Labor Market</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">42% of Millennial Radiologists Say Pay Stagnated: What the Data Shows</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyReimbursementCuts;
