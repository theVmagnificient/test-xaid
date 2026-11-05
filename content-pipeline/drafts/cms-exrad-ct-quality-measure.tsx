import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CmsExradCtQualityMeasure = () => {
  const post = {
    title: "CMS's New CT Quality Measure Is a Documentation Problem. Early Data Shows Why.",
    dateIso: '2026-11-05',
    date: 'November 5, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "A new JACR study of 254 facilities on CMS's ExRad measure found 30.7% of CT scans exceeded dose thresholds — and a 74-point gap between a facility's best and worst exam category. The bottleneck isn't the scanner. It's capturing consistent, structured data per exam.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CMS ExRad Measure: Why CT Quality Reporting Is Hard | xAID</title>
        <meta name="description" content="A 254-facility JACR study of CMS's ExRad measure found 30.7% of CT scans exceeded dose thresholds — a structured-reporting gap, not a scanner one." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CMS ExRad Measure: Why CT Quality Reporting Is Hard | xAID" />
        <meta property="og:description" content="A 254-facility JACR study of CMS's ExRad measure found 30.7% of CT scans exceeded dose thresholds — a structured-reporting gap, not a scanner one." />
        <meta property="og:url" content="https://xaid.ai/blog/cms-exrad-ct-quality-measure" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CMS ExRad Measure: Why CT Quality Reporting Is Hard | xAID" />
        <meta name="twitter:description" content="A 254-facility JACR study of CMS's ExRad measure found 30.7% of CT scans exceeded dose thresholds — a structured-reporting gap, not a scanner one." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/cms-exrad-ct-quality-measure" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/cms-exrad-ct-quality-measure",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "CMS ExRad measure CT quality, ExRad eCQM, CT radiation dose measure, CMS CT quality reporting, structured radiology reporting compliance"
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
                "text": "ExRad — formally \"Excessive Radiation Dose or Inadequate Image Quality for Diagnostic Computed Tomography (CT) in Adults\" — is CMS's first electronic clinical quality measure (eCQM) written specifically for radiology. It flags CT studies that used more radiation than necessary for the clinical indication, or that produced images too noisy to interpret, across 18 standardized CT exam categories. It runs across inpatient (CMS1074), outpatient (CMS1206), and clinician-level MIPS (CMS1056) reporting programs, with voluntary reporting since January 2025."
              }
            },
            {
              "@type": "Question",
              "name": "What did the new JACR study find about early ExRad performance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A November 2026 study in the Journal of the American College of Radiology examined 783,634 adult CT scans across 254 hospitals and imaging practices over 16 months. It found 30.7% of scans exceeded the radiation threshold for their exam type, while only 0.06% fell short on image quality — and facility out-of-range rates ranged from under 1% to over 90%, with a typical 74-percentage-point gap between a facility's best- and worst-performing exam category."
              }
            },
            {
              "@type": "Question",
              "name": "Why is ExRad hard to operationalize?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ExRad requires three calculated values for every diagnostic adult CT exam — CT dose/image-quality category, global noise, and size-adjusted dose — none of which live natively in the EMR or can be entered manually. Facilities need vendor software to translate DICOM radiation-dose structured reports, image data, and exam indication into an eCQM-compatible format, and the mapping (roughly four codes per data element) is far more involved than a typical one-to-one eCQM. CMS has already delayed mandatory outpatient reporting, citing this data-collection burden."
              }
            },
            {
              "@type": "Question",
              "name": "How does structured, consistent CT reporting help with ExRad compliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ExRad's exam-category assignment and audit trail depend on the clinical indication and protocol being captured consistently for every study, not described in inconsistent free text that varies by dictating radiologist. AI-drafted reports that populate indication, exam type, and protocol fields in a standardized, structured format — reviewed by a radiologist before every report reaches a client's reading physician — reduce the manual re-coding work a measure like ExRad otherwise demands, turning a compliance burden into a byproduct of normal reporting infrastructure."
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
              CMS's new CT quality measure is a documentation problem.<br />
              <span className="text-white/60">Early data shows why.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 254-facility study of CMS's ExRad measure found nearly a third of CT scans exceeded dose thresholds — and a 74-point gap between a facility's best and worst exam type. The variation isn't mostly about scanner hardware. It's about whether exam data gets captured the same way every time.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '254', label: 'Facilities in the first ExRad dataset', sub: 'hospitals & imaging practices' },
            { stat: '30.7%', label: 'Of CT scans exceeded dose threshold', sub: 'vs 0.06% on image quality' },
            { stat: '74 pts', label: 'Gap between best & worst exam category', sub: 'at a typical facility' },
            { stat: '3', label: 'Values required per CT exam', sub: 'none live in the EMR' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What ExRad actually measures
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CMS finalized <strong>ExRad</strong> — "Excessive Radiation Dose or Inadequate Image Quality for Diagnostic Computed Tomography (CT) in Adults" — in 2023 as the first <a href="https://ecqi.healthit.gov/sites/default/files/ecqm/measures/Excessive-Radiation-Measures-Educational-Implementation-Summary.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">electronic clinical quality measure (eCQM)</a> written specifically for radiology. It runs across three programs — inpatient (CMS1074), outpatient (CMS1206), and clinician-level MIPS (CMS1056) — with voluntary reporting live since January 2025. CMS has since postponed a mandatory outpatient reporting deadline indefinitely, as <a href="https://imalogix.com/article/cms-exrad-regulatory-history/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Imalogix has tracked</a>, citing the time facilities need to handle the measure's "data collection burden."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The measure assesses radiation dose and image quality across <a href="https://arxiv.org/pdf/2503.06644" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">18 standardized CT exam categories</a>, and compliance requires calculating three values for every diagnostic CT study: the CT dose/image-quality category, a <strong>global noise</strong> score, and a <strong>size-adjusted dose</strong>. None of these numbers sit in a structured field in a typical EMR — they have to be derived from the CT images, the DICOM radiation-dose structured report, and the exam's clinical indication.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the first real-world data shows
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A study published in the <em>Journal of the American College of Radiology</em> in November 2026, led by Rebecca Smith-Bindman, MD of UCSF, gives the first look at how ExRad performs in practice. Researchers analyzed <strong>783,634</strong> adult CT scans across <strong>254</strong> hospitals and imaging practices over 16 months, as reported by <a href="https://www.news-medical.net/news/20261103/First-Medicare-ExRad-study-reveals-wide-variation-in-CT-radiation.aspx" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">News-Medical</a> and <a href="https://www.auntminnie.com/clinical-news/ct/article/16350757/exrad-data-shows-wide-variations-in-ct-radiation-dose" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">AuntMinnie</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The topline result: <strong>30.7%</strong> of scans exceeded the radiation threshold for their exam type, while only <strong>0.06%</strong> fell short on image quality — meaning the measure's improvement opportunity is almost entirely about dose, not picture quality. Performance also varied enormously by site: facility out-of-range rates ranged from under 1% to more than 90%, and a typical facility showed a <strong>74-percentage-point</strong> gap between its best- and worst-performing exam category. Three high-volume exam types — routine abdomen/pelvis, chest, and head — accounted for 72% of all out-of-range scans.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Smith-Bindman's framing cuts to the point: "the same CT scan can expose one patient to many times the radiation of another, depending simply on where that patient is imaged — and that variation is entirely modifiable." Her second observation is the one operations teams should sit with: "lowering the dose is no longer a technology problem — it's a measurement and feedback problem."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why early adopters are finding it hard to operationalize
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ExRad's difficulty isn't really about radiation physics — most facilities already own scanners capable of hitting these thresholds, which is exactly why performance gaps between otherwise-similar sites are so wide. The friction is in <em>capturing the data consistently</em>. Because radiation-dose and noise data can't be entered manually, facilities need CMS-recognized software (such as the Alara Imaging Gateway) to transform DICOM data and exam indication into an eCQM-compatible format. Mapping is unusually dense for an eCQM — roughly <strong>four codes per data element</strong>, versus the one-to-one mapping most quality measures use.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Exam-category assignment, which determines which dose threshold a study is judged against, depends on the clinical indication and protocol being recorded the same way every time. That is a documentation problem as much as a dosimetry one: a study's indication, body region, and protocol notes are often captured in free text that varies by dictating radiologist, by site, and by EHR template — which is precisely the kind of inconsistency a structured-data measure like ExRad was not designed to tolerate.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Free-text dictation vs. structured capture, through an ExRad lens
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">ExRad data need</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Free-text dictation</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Structured report output</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Clinical indication / exam category', 'Wording varies by radiologist and site', 'Captured in a consistent, codeable field'],
                      ['Protocol / body region documented', 'Sometimes implied, not stated explicitly', 'Recorded as a discrete field every time'],
                      ['Mapping to eCQM data elements', 'Requires manual re-coding or NLP cleanup', 'Already structured, fewer mapping steps'],
                      ['Auditability across facilities', 'Inconsistent, hard to benchmark', 'Comparable field-for-field across sites'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[1]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this changes the physics of dose reduction. But it does change how much manual cleanup a facility's quality and physics teams have to do before ExRad numbers are even trustworthy enough to act on — and the JACR study's own 74-point intra-facility gap suggests many sites don't yet have a reliable feedback loop between what a scan actually used and what gets reported.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured AI reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                ExRad is a preview of where diagnostic imaging quality reporting is headed: more measures that depend on structured, codeable fields rather than narrative prose. AI-drafted CT reports that populate indication, exam type, and protocol consistently — in the same structured format on every study — give quality and compliance teams a cleaner starting point for measures like ExRad than free-text dictation does, because the fields the measure needs are already discrete rather than buried in prose. At xAID, every draft report is reviewed by an in-house radiologist and delivered ready-to-sign, so structure doesn't come at the cost of a human check on the read — it's a byproduct of how the report was built in the first place.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the CMS ExRad measure?',
                    a: "ExRad — formally \"Excessive Radiation Dose or Inadequate Image Quality for Diagnostic Computed Tomography (CT) in Adults\" — is CMS's first electronic clinical quality measure (eCQM) written specifically for radiology. It flags CT studies that used more radiation than necessary for the clinical indication, or that produced images too noisy to interpret, across 18 standardized CT exam categories. It runs across inpatient (CMS1074), outpatient (CMS1206), and clinician-level MIPS (CMS1056) reporting programs, with voluntary reporting since January 2025.",
                  },
                  {
                    q: 'What did the new JACR study find about early ExRad performance?',
                    a: 'A November 2026 study in the Journal of the American College of Radiology examined 783,634 adult CT scans across 254 hospitals and imaging practices over 16 months. It found 30.7% of scans exceeded the radiation threshold for their exam type, while only 0.06% fell short on image quality — and facility out-of-range rates ranged from under 1% to over 90%, with a typical 74-percentage-point gap between a facility\'s best- and worst-performing exam category.',
                  },
                  {
                    q: 'Why is ExRad hard to operationalize?',
                    a: 'ExRad requires three calculated values for every diagnostic adult CT exam — CT dose/image-quality category, global noise, and size-adjusted dose — none of which live natively in the EMR or can be entered manually. Facilities need vendor software to translate DICOM radiation-dose structured reports, image data, and exam indication into an eCQM-compatible format, and the mapping (roughly four codes per data element) is far more involved than a typical one-to-one eCQM. CMS has already delayed mandatory outpatient reporting, citing this data-collection burden.',
                  },
                  {
                    q: 'How does structured, consistent CT reporting help with ExRad compliance?',
                    a: "ExRad's exam-category assignment and audit trail depend on the clinical indication and protocol being captured consistently for every study, not described in inconsistent free text that varies by dictating radiologist. AI-drafted reports that populate indication, exam type, and protocol fields in a standardized, structured format — reviewed by a radiologist before every report reaches a client's reading physician — reduce the manual re-coding work a measure like ExRad otherwise demands, turning a compliance burden into a byproduct of normal reporting infrastructure.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/lessons-learned-early-adopters-new-cms-radiology-quality-measure" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; study in the <em>Journal of the American College of Radiology</em> (November 2026) as reported by <a href="https://www.news-medical.net/news/20261103/First-Medicare-ExRad-study-reveals-wide-variation-in-CT-radiation.aspx" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">News-Medical</a> and <a href="https://www.auntminnie.com/clinical-news/ct/article/16350757/exrad-data-shows-wide-variations-in-ct-radiation-dose" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a>; measure background via <a href="https://ecqi.healthit.gov/sites/default/files/ecqm/measures/Excessive-Radiation-Measures-Educational-Implementation-Summary.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ecqi.healthit.gov</a> and <a href="https://imalogix.com/article/cms-exrad-regulatory-history/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Imalogix</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured by default, ready to sign every time."
          sub="xAID's AI-drafted CT reports capture indication, exam type, and findings in a consistent structured format — reviewed by an in-house radiologist on every study. Try it on 5 free studies."
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
              <Link to="/blog/mips-value-pathways-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">MIPS Value Pathways Are Supposed to Simplify Radiology Reporting. Do They?</div>
              </Link>
              <Link to="/blog/clinical-indication-radiology-orders/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">LLMs Beat Clinicians at Writing Radiology Order Indications</div>
              </Link>
              <Link to="/blog/bi-rads-pediatric-structured-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">ACR: BI-RADS Wasn't Built for Kids — Lessons for Structured Reporting</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CmsExradCtQualityMeasure;
