import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyReportTurnaroundTimeStandardsCmsExrad = () => {
  const post = {
    title: "Early ExRad Adopters Are Learning a Reporting Workflow Lesson, Not a Dose Lesson",
    dateIso: '2026-11-06',
    date: 'November 6, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "The first 254-facility study of CMS's ExRad measure found 30.7% of CT scans over dose threshold and a 74-point gap between a facility's best and worst exam type. The hard part early adopters describe isn't the scanner — it's capturing consistent data on every report.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CMS ExRad Measure: Early Lessons for CT Reporting | xAID</title>
        <meta name="description" content="A 254-facility study of CMS's new ExRad measure found 30.7% of CT scans over dose threshold. Early adopters say the burden is reporting workflow, not hardware." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CMS ExRad Measure: Early Lessons for CT Reporting | xAID" />
        <meta property="og:description" content="A 254-facility study of CMS's new ExRad measure found 30.7% of CT scans over dose threshold. Early adopters say the burden is reporting workflow, not hardware." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-report-turnaround-time-standards-cms-exrad" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CMS ExRad Measure: Early Lessons for CT Reporting | xAID" />
        <meta name="twitter:description" content="A 254-facility study of CMS's new ExRad measure found 30.7% of CT scans over dose threshold. Early adopters say the burden is reporting workflow, not hardware." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-report-turnaround-time-standards-cms-exrad" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-report-turnaround-time-standards-cms-exrad",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology report turnaround time standards, CMS ExRad measure, CT quality reporting, structured radiology reporting, CT radiation dose measure"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the CMS ExRad measure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ExRad (Excessive Radiation Dose or Inadequate Image Quality for Diagnostic CT in Adults) is a CMS electronic clinical quality measure finalized in 2023 across three programs: the inpatient Hospital IQR program, the outpatient OQR program, and MIPS at the clinician level. It flags CT exams that used more radiation than their protocol's threshold allows, or that came out too noisy to read reliably. Reporting has been voluntary since January 2025, and CMS removed the originally planned mandatory outpatient deadline in November 2025."
              }
            },
            {
              "@type": "Question",
              "name": "What did the first large-scale study of ExRad data find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A November 2026 study in the Journal of the American College of Radiology analyzed 783,634 adult CT scans from 254 voluntarily reporting facilities over 16 months. It found 30.7% of scans exceeded their dose threshold, while 0.06% fell short on image quality. Facility-level out-of-range rates ranged from under 1% to more than 90%, and a typical facility had a 74-percentage-point gap between its best- and worst-performing exam category."
              }
            },
            {
              "@type": "Question",
              "name": "Why do early adopters describe ExRad as a reporting workflow problem rather than a technology problem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "None of the three values ExRad requires per scan — CT category, global noise, and size-adjusted dose — live natively in a hospital's EMR or radiology system; they must be calculated from imaging data and reconciled with separate translation software. The American College of Radiology has flagged the staff workload this creates, the Joint Commission pulled the inpatient version from its ORYX program over implementation burden, and CMS itself cited the same concern when it dropped the mandatory outpatient reporting deadline. The common thread is that accurate, consistent protocol and category documentation on every exam — not a scanner upgrade — is what determines whether a facility can even measure its own performance."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI-assisted structured reporting relate to ExRad compliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Structured AI drafting does not calculate the ExRad dose or noise values — that step still runs through dedicated translation software. What it changes is the consistency of the protocol, indication, and technique data captured on every report, which is the groundwork any dose-feedback program depends on. For smaller sites without a dedicated physicist or QA analyst, that consistency matters more than it does at an academic center with staff whose job is exactly this reconciliation."
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
              Early ExRad adopters are learning a reporting lesson,<br />
              <span className="text-white/60">not a dose lesson</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The first large-scale look at CMS's new CT radiation quality measure shows wide variation between facilities. What early adopters describe as the hard part isn't the scanner — it's capturing the same data, the same way, on every single report.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '783,634', label: 'CT scans analyzed', sub: 'across 254 facilities' },
            { stat: '30.7%', label: 'Exceeded dose threshold', sub: 'vs 0.06% too noisy' },
            { stat: '90%+', label: 'Worst facility rate', sub: 'of scans out of range' },
            { stat: '74 pts', label: 'Best-to-worst gap', sub: 'within one facility' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What ExRad actually asks facilities to do
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CMS finalized the Excessive Radiation Dose or Inadequate Image Quality for Diagnostic CT in Adults measure — "ExRad" — across three programs in 2023: the inpatient Hospital IQR program, the outpatient OQR program, and a clinician-level version in MIPS. Reporting has been voluntary across all three since January 2025, and CMS removed the originally planned mandatory outpatient reporting deadline in November 2025, leaving reporting voluntary for now (<a href="https://imalogix.com/article/cms-exrad-regulatory-history/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Imalogix</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The rationale is scale: an estimated 80 to 90 million CT scans are performed in the US every year, and CMS has estimated that reducing unnecessary dose variation could prevent roughly 14,000 cancers among Medicare beneficiaries annually, saving the program an estimated $1.86 billion to $5.21 billion a year in avoided treatment costs (<a href="https://healthjournalism.org/blog/2023/12/new-quality-measure-to-illuminate-the-hidden-harm-of-excess-ct-radiation/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Association of Health Care Journalists</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Mechanically, every adult diagnostic CT exam needs three values attached to it: a CT category (the protocol/body-part/dose-tier classification), a calculated global noise value, and a size-adjusted dose value. None of these live natively in a hospital's EMR — they have to be calculated from the imaging data itself and passed through separate translation software before they count toward the measure (<a href="https://blog.medisolv.com/articles/how-to-implement-the-outpatient-exrad-ecqm" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Medisolv</a>).
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the first large dataset shows
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A study led by Rebecca Smith-Bindman, MD, of UCSF, published November 3, 2026 in the <em>Journal of the American College of Radiology</em>, analyzed 783,634 adult CT scans from 254 voluntarily reporting hospitals and imaging practices over 16 months — the first evaluation of real ExRad data at scale (<a href="https://doi.org/10.1016/j.jacr.2026.09.020" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Smith-Bindman et al., JACR</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The topline: <strong>30.7%</strong> of scans exceeded their dose threshold, while a much smaller share — <strong>0.06%</strong> — fell short on image quality. But the variation between facilities is the more striking part of the story. Facility-level out-of-range rates ranged from under 1% to more than 90%, and a typical facility had a <strong>74-percentage-point</strong> gap between its best- and worst-performing exam category — most facilities did well on some scan types and poorly on others, rather than being uniformly good or bad (<a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/lessons-learned-early-adopters-new-cms-radiology-quality-measure" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Three routine exam types — abdomen/pelvis, chest, and head CT — accounted for 72% of all out-of-range scans despite making up only 56% of study volume, and category-level out-of-range rates ranged from 0% for routine, low-dose cardiac CT up to 83% for high-dose head scans. "The same CT scan can expose one patient to many times the radiation of another, depending simply on where that patient is imaged — and that variation is entirely modifiable," Smith-Bindman said. Her read on the cause: "Lowering the dose is no longer a technology problem — it's a measurement and feedback problem."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Early adopters keep describing the same bottleneck
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That "measurement and feedback" framing shows up everywhere ExRad has run into friction so far — and in every case, the friction is about data and workflow, not scanner hardware. The American College of Radiology raised concerns about the amount of work the measure creates for hospital staff well before voluntary reporting began (<a href="https://healthjournalism.org/blog/2023/12/new-quality-measure-to-illuminate-the-hidden-harm-of-excess-ct-radiation/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AHCJ</a>). The Joint Commission pulled the inpatient version from its ORYX accreditation program in January 2025, concluding the measure specification didn't match its intent and created significant burden for implementers, vendors, and hospitals alike (<a href="https://www.jointcommission.org/resources/news-and-multimedia/newsletters/newsletters/joint-commission-online/jan-8-2025/ip-exrad-performance-measure-removed-from-oryx-optional-measure-list-for-2025/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Joint Commission</a>). An AAPM-commissioned physicist panel separately published a peer-reviewed review cataloging specification ambiguities in the measure's dose and noise metrology and terminology (<a href="https://doi.org/10.2214/AJR.24.32458" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AJR</a>). And CMS itself cited operational burden and data-collection concerns as the reason it dropped the mandatory outpatient deadline (<a href="https://imalogix.com/article/cms-exrad-regulatory-history/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Imalogix</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of those four sources are complaining that CT scanners can't hit the dose targets — the JACR data shows plenty of facilities already do, on most exam types. The complaint, consistently, is about capturing and reconciling the right data on every single exam, then doing something useful with the feedback.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this becomes a turnaround-time problem for smaller sites
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Large academic centers tend to have a dedicated physicist or QA analyst whose job already overlaps with this work: reconciling protocol categories, reviewing outlier scans, and feeding corrections back to technologists. That's a big part of why the JACR study found such wide swings between facilities on the same exam type — the gap tracks resourcing as much as it tracks equipment.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Outpatient imaging centers, rural hospitals, and teleradiology groups usually don't carry that dedicated role. When a 74-point swing between a facility's best and worst exam category needs investigating, that work lands on radiologists and technologists who are already measured against standard radiology report turnaround time standards — ACR guidance generally expects routine CT reads signed within 24 hours, a target many practices already <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">struggle to hit consistently</Link>. Layering a new category-level QA review on top of that workload, without adding staff, is the operational risk early adopters are flagging — not whether the CT itself can produce a compliant image.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The root of the problem is that ExRad's three required values depend on protocol and indication data being captured the same way on every exam. Where that documentation is inconsistent at the point of interpretation, reconciling it after the fact is exactly the kind of manual work smaller sites are least staffed to absorb — the same resourcing gap that already shows up in <Link to="/blog/on-site-radiologist-ct-turnaround-time/" className="text-xaid-blue-strong underline underline-offset-2">turnaround-time research on smaller and off-site coverage models</Link>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where ExRad burden tends to land, by site type
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Factor</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Academic / large hospital</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Small / community / outpatient site</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Dedicated physicist or QA analyst', 'Typically yes', 'Rarely a full-time role'],
                      ['Who reconciles protocol/category data', 'QA staff, as part of their job', 'Often techs or radiologists, on top of reads'],
                      ['Translation software integration', 'IT team handles it', 'Often outsourced or delayed'],
                      ['Risk if a QA review is skipped', 'Caught in routine physics review', 'May go unexamined until flagged externally'],
                      ['Effect on report turnaround if absorbed manually', 'Minimal — separate staff track', 'Competes directly with reporting time'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[14px] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] text-[14px] font-light">{row[1]}</td>
                        <td className="py-3 text-[#444] text-[14px] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured AI drafting fits — and where it doesn't
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's worth being precise about this: AI-assisted report drafting does not calculate ExRad's dose or noise values. That calculation still runs through dedicated translation software, independent of how the report itself gets written — CMS's architecture keeps those steps separate, and that isn't going to change.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What structured drafting changes is the layer underneath the measure: whether protocol, indication, and technique are captured the same way on every exam, directly in the structured report, rather than reconstructed later by whoever ends up doing the QA review. AI CT reporting built on structured templates produces that consistency as a byproduct of every study — xAID's in-house radiologist reviews every preliminary before it reaches a practice ready-to-sign, so the structured technique and protocol fields are already standardized by the time a facility's reading radiologist signs the final report. For a site without a dedicated QA analyst, that consistency is the difference between a quality-measure review that's a quick lookup and one that requires reconstructing data exam by exam — without adding time to the turnaround standards radiologists are already held to.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the CMS ExRad measure?',
                    a: "ExRad (Excessive Radiation Dose or Inadequate Image Quality for Diagnostic CT in Adults) is a CMS electronic clinical quality measure finalized in 2023 across three programs: the inpatient Hospital IQR program, the outpatient OQR program, and MIPS at the clinician level. It flags CT exams that used more radiation than their protocol's threshold allows, or that came out too noisy to read reliably. Reporting has been voluntary since January 2025, and CMS removed the originally planned mandatory outpatient deadline in November 2025.",
                  },
                  {
                    q: 'What did the first large-scale study of ExRad data find?',
                    a: 'A November 2026 study in the Journal of the American College of Radiology analyzed 783,634 adult CT scans from 254 voluntarily reporting facilities over 16 months. It found 30.7% of scans exceeded their dose threshold, while 0.06% fell short on image quality. Facility-level out-of-range rates ranged from under 1% to more than 90%, and a typical facility had a 74-percentage-point gap between its best- and worst-performing exam category.',
                  },
                  {
                    q: 'Why do early adopters describe ExRad as a reporting workflow problem rather than a technology problem?',
                    a: "None of the three values ExRad requires per scan — CT category, global noise, and size-adjusted dose — live natively in a hospital's EMR or radiology system; they must be calculated from imaging data and reconciled with separate translation software. The American College of Radiology has flagged the staff workload this creates, the Joint Commission pulled the inpatient version from its ORYX program over implementation burden, and CMS itself cited the same concern when it dropped the mandatory outpatient reporting deadline. The common thread is that accurate, consistent protocol and category documentation on every exam — not a scanner upgrade — is what determines whether a facility can even measure its own performance.",
                  },
                  {
                    q: 'How does AI-assisted structured reporting relate to ExRad compliance?',
                    a: 'Structured AI drafting does not calculate the ExRad dose or noise values — that step still runs through dedicated translation software. What it changes is the consistency of the protocol, indication, and technique data captured on every report, which is the groundwork any dose-feedback program depends on. For smaller sites without a dedicated physicist or QA analyst, that consistency matters more than it does at an academic center with staff whose job is exactly this reconciliation.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/lessons-learned-early-adopters-new-cms-radiology-quality-measure" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; Smith-Bindman R, et al., "Early Implementation Performance of the CMS Electronic Clinical Quality Measure for Excessive Radiation Dose or Inadequate Image Quality in Diagnostic CT: An Evaluation of 254 Facilities," <em>Journal of the American College of Radiology</em> (Nov. 3, 2026), <a href="https://doi.org/10.1016/j.jacr.2026.09.020" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2026.09.020</a>; regulatory timeline and implementation detail from <a href="https://imalogix.com/article/cms-exrad-regulatory-history/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Imalogix</a> and <a href="https://blog.medisolv.com/articles/how-to-implement-the-outpatient-exrad-ecqm" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medisolv</a>; ORYX removal rationale from <a href="https://www.jointcommission.org/resources/news-and-multimedia/newsletters/newsletters/joint-commission-online/jan-8-2025/ip-exrad-performance-measure-removed-from-oryx-optional-measure-list-for-2025/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Joint Commission</a>; CMS rationale and ACR comment via the <a href="https://healthjournalism.org/blog/2023/12/new-quality-measure-to-illuminate-the-hidden-harm-of-excess-ct-radiation/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Association of Health Care Journalists</a>; specification review via <a href="https://doi.org/10.2214/AJR.24.32458" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AJR</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports, built for compliance from the first draft"
          sub="xAID's AI CT reports standardize protocol, indication, and technique on every study — ready-to-sign, reviewed in-house first. Try it on 5 free studies."
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
              <Link to="/blog/on-site-radiologist-ct-turnaround-time/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">On-Site Radiologists and CT Turnaround Time</div>
              </Link>
              <Link to="/blog/ai-radiology-quality-assurance/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Can an LLM Catch Radiology QC Errors?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyReportTurnaroundTimeStandardsCmsExrad;
