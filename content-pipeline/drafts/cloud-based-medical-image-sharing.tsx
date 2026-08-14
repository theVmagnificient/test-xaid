import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CloudBasedMedicalImageSharing = () => {
  const post = {
    title: 'Cloud-Based Medical Image Sharing: The Next Gap',
    dateIso: '2026-08-14',
    date: 'August 14, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "Epic's new one-click tool moves full-resolution scans between hospitals without CDs. The radiology report riding along still has no standard structure.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{post.title} | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/cloud-based-medical-image-sharing/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | xAID`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | xAID`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/cloud-based-medical-image-sharing" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/cloud-based-medical-image-sharing",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "cloud based medical image sharing, Epic Care Everywhere, medical image interoperability, radiology report standardization, structured radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Epic actually launch with Care Everywhere Diagnostic Image Exchange?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In August 2026, Epic released Care Everywhere Diagnostic Image Exchange, which lets clinicians at Epic-connected health systems retrieve full-resolution, diagnostic-quality CTs, X-rays, and MRIs from another organization's image archive with one click. Previously, Care Everywhere only shared written radiology reports and lower-resolution reference images; the full-resolution study itself typically still required a manual request or a CD."
              }
            },
            {
              "@type": "Question",
              "name": "Does cloud-based medical image sharing mean radiology reports now move consistently between hospitals too?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The report text has generally already traveled alongside reference images. What doesn't travel is a consistent structure: most radiology reports in routine practice are still produced as free-text dictation rather than structured, itemized data, so a receiving clinician gets prose to re-read rather than machine-usable findings, measurements, or follow-up recommendations."
              }
            },
            {
              "@type": "Question",
              "name": "Why isn't a shared image enough to close the interoperability gap?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An image tells a receiving clinician what was scanned; it doesn't tell them what a radiologist concluded in a form their system can act on. Without a standard report structure, a second site's clinician — or its own radiologist — often has to re-review the images and re-derive the interpretation, which is exactly the redundant work that image-sharing tools like Epic's are designed to eliminate on the image side."
              }
            },
            {
              "@type": "Question",
              "name": "Where does AI-generated structured reporting fit into this gap?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Structured, AI-drafted reports produce the same organized findings and measurements every time, regardless of which site or radiologist originated the study, which makes the report portable in the same sense the image now is. In xAID's workflow, that draft goes through in-house radiologist review before delivery, and the receiving site's reading radiologist signs the final report — the report moves as cleanly as the image, without removing the physician from the decision."
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
              Epic just fixed image sharing.<br />
              <span className="text-white/60">The report riding along didn't get the same upgrade.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Care Everywhere Diagnostic Image Exchange lets one hospital pull another's full-resolution scan with a single click — no CD required. That solves the image half of interoperability. The report that accompanies the image still has no standard structure, which means the next bottleneck isn't the file. It's the words.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: 'Aug 13, 2026', label: 'Diagnostic Image Exchange launch', sub: 'one-click, cross-hospital' },
            { stat: '21,000+', label: 'Repeat scans avoided per year', sub: "by Epic's duplicate-order checks" },
            { stat: '5.8M', label: 'Duplicate imaging orders flagged', sub: "Epic's network, one year" },
            { stat: 'Jan 2026', label: 'ONC imaging-interoperability RFI', sub: 'scope: images, not reports' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What Epic actually launched
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
On August 13, 2026, Epic <a href="https://www.epic.com/epic/post/diagnostic-image-exchange-helps-clinicians-and-patients-get-answers-sooner/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announced Care Everywhere Diagnostic Image Exchange</a>, the closest thing US healthcare has had yet to true cloud-based medical image sharing at scale: a feature that lets clinicians at Epic-connected health systems retrieve a full-resolution CT, X-ray, or MRI from another organization's image archive with one click. That's a narrower fix than it sounds — Epic's Care Everywhere network has, for years, already shared written radiology reports and lower-resolution "reference-quality" images. What it hasn't shared is the diagnostic-quality file itself, which lives in a separate picture archiving and communication system (PACS) outside the electronic health record. Retrieving that file has meant a manual request or a patient carrying a CD from one appointment to the next — a problem Epic says still affects "millions of patients across the US."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Care Everywhere Diagnostic Image Exchange empowers clinicians to deliver faster care and eliminates administrative burden," said Matt Doyle, Epic's director of interoperability, in the announcement. "We're the first to embrace open image-sharing standards at scale, and we're advocating for TEFCA — the federally sponsored interoperability framework — to embrace these standards so that any health system in the United States can exchange diagnostic images."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                According to <a href="https://hitconsultant.net/2026/08/13/epic-launches-care-everywhere-diagnostic-image-exchange/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reporting on the release</a>, the feature runs on open image-sharing protocols — DICOMweb and FHIR resources — rather than proprietary vendor plugins, connecting external PACS databases directly through Care Everywhere's existing data-exchange pipelines. It also plugs into a feature Epic already had: duplicate-order checks that flag when a patient has already had a given scan done elsewhere. Those checks prevent more than 21,000 repeat scans a year on their own; now, instead of just a flag, the ordering clinician can pull the actual prior image immediately.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this launch exists at all
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The redundant-imaging problem this targets is not small. In a <a href="https://www.epicresearch.org/articles/more-than-5-8-million-potential-duplicative-imaging-orders-prevented-in-one-year-saving-time-and-money-and-reducing-unnecessary-radiation-exposure/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">separate analysis of one year of activity</a> across its interoperability network, Epic found more than 5.8 million potentially duplicative imaging orders were flagged before they were placed — evidence of how often the same patient gets scanned twice simply because the first image, or the knowledge that it existed, didn't reach the second clinician in time.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It also lands inside an active federal push. In July 2026, CMS <a href="https://www.acr.org/News-and-Publications/2026/ditch-the-disk-imaging-exchange-workgroup" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">launched a "Ditch the Disk" Diagnostic Imaging Acceleration Workgroup</a>, building on the American College of Radiology's long-running #DitchTheDisk campaign, while the Office of the National Coordinator for Health IT has an open <a href="https://www.federalregister.gov/documents/2026/01/30/2026-01866/request-for-information-diagnostic-imaging-interoperability-standards-and-certification" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">request for information on diagnostic imaging interoperability standards</a>, published January 30, 2026. Read closely, both efforts are about the image file — its format, its transport, its certification. Neither is built around the structure of the report that describes what's in it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What moves cleanly today — and what doesn't
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Artifact</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Moves between hospitals today?</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Standardized structure?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Reference-quality images</td>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Yes — established Care Everywhere feature</td>
                      <td className="py-3 text-[#444] text-[15px] font-light">Yes — DICOM</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Full-resolution diagnostic images</td>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Yes — new as of Aug 2026</td>
                      <td className="py-3 text-[#444] text-[15px] font-light">Yes — DICOM, via DICOMweb/FHIR</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Duplicate-order alerts</td>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Yes — flags 21,000+ repeat scans/year</td>
                      <td className="py-3 text-[#444] text-[15px] font-light">N/A — system alert, not clinical content</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">The radiology report itself</td>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Yes, as free text — but not new</td>
                      <td className="py-3 text-[#444] text-[15px] font-light">No — mostly free-text dictation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The report is the part nobody standardized
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology has had a standard for report templates for over a decade: the IHE Radiology workgroup's Management of Radiology Report Templates (MRRT) profile, originally drafted in 2013 and later hosted through RSNA's radreport.org library. It never reached broad use. The European Society of Radiology's <a href="https://doi.org/10.1186/s13244-023-01560-0" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2023 update on structured reporting</a> concluded that despite the "overwhelming majority of clinicians" saying they prefer structured, itemized reports, "structured reporting has still not been widely adopted in clinical routine" — in countries with active template programs, reporting is "mainly done using free-text dictation" anyway, and RSNA has since scaled back its work on radreport.org.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A separate <a href="https://doi.org/10.3390/medicina59091679" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2023 review of standardization efforts</a> put the practical consequence plainly: "the lack of standardization in the format of the report can make it challenging to compare reports during longitudinal follow-up and across different healthcare systems." An image arriving from another hospital is unambiguous — it's a DICOM series with fixed metadata. A report arriving from another hospital is prose, and prose written to one radiologist's habits, one department's template (or lack of one), and one institution's abbreviations doesn't parse the same way twice. Epic's tool moves that prose faster. It doesn't make it structured.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the image fix exposes the report gap
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Before one-click retrieval, a clinician who couldn't get the outside image at all had an excuse to re-scan or to lean entirely on the outside report's summary. That excuse is going away. As full-resolution images move as easily as the reference copies always did, receiving radiologists will increasingly have both the pixels and someone else's free-text interpretation of them side by side — and will still have to re-read the images themselves to get findings in a form their own reporting workflow, decision-support tools, or downstream systems can use, because there's no guarantee the incoming text maps to their fields, lexicon, or measurement conventions.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In other words, the interoperability problem doesn't disappear when the image ships instantly. It moves downstream, from "can we get the file" to "can we use what the other site's radiologist actually said" — and that second question is a reporting-structure problem, not a transport problem.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-drafted, structured reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the logical next layer once image transport is solved: a report format that's consistent regardless of which hospital or radiologist produced it, so it's as portable as the pixels it describes. AI-drafted reporting is built to output that kind of structure by default — the same findings fields, measurements, and follow-up language every time — which is exactly the property a receiving site needs to reuse a report instead of re-deriving it. That doesn't mean removing the radiologist from the loop; in xAID's workflow, an in-house radiologist reviews every AI-drafted preliminary before it's delivered <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">ready-to-sign</Link>, and the receiving site's own reading radiologist signs the final report. The image-sharing problem got solved by standardizing transport without removing the clinician who orders the scan. The report-sharing problem will get solved the same way — by standardizing structure without removing the radiologist who signs it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did Epic actually launch with Care Everywhere Diagnostic Image Exchange?',
                    a: "In August 2026, Epic released Care Everywhere Diagnostic Image Exchange, which lets clinicians at Epic-connected health systems retrieve full-resolution, diagnostic-quality CTs, X-rays, and MRIs from another organization's image archive with one click. Previously, Care Everywhere only shared written radiology reports and lower-resolution reference images; the full-resolution study itself typically still required a manual request or a CD.",
                  },
                  {
                    q: 'Does cloud-based medical image sharing mean radiology reports now move consistently between hospitals too?',
                    a: "The report text has generally already traveled alongside reference images. What doesn't travel is a consistent structure: most radiology reports in routine practice are still produced as free-text dictation rather than structured, itemized data, so a receiving clinician gets prose to re-read rather than machine-usable findings, measurements, or follow-up recommendations.",
                  },
                  {
                    q: "Why isn't a shared image enough to close the interoperability gap?",
                    a: "An image tells a receiving clinician what was scanned; it doesn't tell them what a radiologist concluded in a form their system can act on. Without a standard report structure, a second site's clinician — or its own radiologist — often has to re-review the images and re-derive the interpretation, which is exactly the redundant work that image-sharing tools like Epic's are designed to eliminate on the image side.",
                  },
                  {
                    q: 'Where does AI-generated structured reporting fit into this gap?',
                    a: "Structured, AI-drafted reports produce the same organized findings and measurements every time, regardless of which site or radiologist originated the study, which makes the report portable in the same sense the image now is. In xAID's workflow, that draft goes through in-house radiologist review before delivery, and the receiving site's reading radiologist signs the final report — the report moves as cleanly as the image, without removing the physician from the decision.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Epic, <a href="https://www.epic.com/epic/post/diagnostic-image-exchange-helps-clinicians-and-patients-get-answers-sooner/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Diagnostic Image Exchange Helps Clinicians and Patients Get Answers Sooner"</a> (Aug. 13, 2026); <a href="https://hitconsultant.net/2026/08/13/epic-launches-care-everywhere-diagnostic-image-exchange/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HIT Consultant</a>; <a href="https://www.epicresearch.org/articles/more-than-5-8-million-potential-duplicative-imaging-orders-prevented-in-one-year-saving-time-and-money-and-reducing-unnecessary-radiation-exposure/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Epic Research</a>; <a href="https://www.acr.org/News-and-Publications/2026/ditch-the-disk-imaging-exchange-workgroup" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a>; <a href="https://www.federalregister.gov/documents/2026/01/30/2026-01866/request-for-information-diagnostic-imaging-interoperability-standards-and-certification" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Federal Register</a>; Pinto dos Santos et al., <a href="https://doi.org/10.1186/s13244-023-01560-0" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"ESR paper on structured reporting in radiology — update 2023," Insights into Imaging</a>; Pesapane et al., <a href="https://doi.org/10.3390/medicina59091679" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Advancements in Standardizing Radiological Reports: A Comprehensive Review," Medicina</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="The image moved. Make the report just as portable."
          sub="xAID's structured, ready-to-sign reports read the same way at every site — in-house radiologist review on every preliminary, and your radiologist signs the final. Try it on 5 free studies."
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
              <Link to="/blog/medical-device-cybersecurity/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Medical Device Cybersecurity: What the CISA DICOM Advisory Means</div>
              </Link>
              <Link to="/blog/enterprise-imaging-modernization-capital-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The $500M Imaging Deal and the Capital Gap Smaller Providers Face</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CloudBasedMedicalImageSharing;
