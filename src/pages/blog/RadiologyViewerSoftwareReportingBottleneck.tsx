import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyViewerSoftwareReportingBottleneck = () => {
  const post = {
    title: "St. Luke's $23M Viewer Deal Shows Where Radiology IT Money Still Isn't Going",
    dateIso: '2026-08-14',
    date: 'August 14, 2026',
    category: 'Market & Strategy',
    readingTime: 7,
    description: "St. Luke's $23M Pro Medicus deal buys a cloud imaging viewer, not reporting AI. What the purchase says about where radiology IT budgets go — and don't.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>PACS Viewer Spend Won't Fix the Reporting Bottleneck | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-viewer-software-reporting-bottleneck/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PACS Viewer Spend Won't Fix the Reporting Bottleneck | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-viewer-software-reporting-bottleneck/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PACS Viewer Spend Won't Fix the Reporting Bottleneck | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-viewer-software-reporting-bottleneck/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-viewer-software-reporting-bottleneck/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology PACS viewer software, enterprise imaging platform, radiology report turnaround time, AI radiology reporting, Visage 7, radiology IT budget"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did Pro Medicus and St. Luke's Health System agree to?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pro Medicus, through its US subsidiary Visage Imaging, signed a seven-year, $23 million (about $16.3 million US) contract with St. Luke's Health System, a not-for-profit system based in Boise, Idaho with 10 medical centers across southern Idaho, eastern Oregon, and northern Nevada. The deal covers the cloud-based Visage 7 Viewer and Visage 7 Workflow modules under a transaction-based licensing model, meaning the final value could exceed $23 million depending on usage. Rollout planning begins immediately, with go-live targeted for the first quarter of 2027."
              }
            },
            {
              "@type": "Question",
              "name": "Does Visage 7 include AI reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Visage 7 Viewer and Visage 7 Workflow are enterprise imaging and PACS-replacement software — they manage how images are stored, routed, displayed, and prioritized across a health system's sites. They do not generate report drafts. A radiologist still dictates or types every finding after opening the study in the viewer. Pro Medicus has talked publicly about eventually hosting third-party AI algorithms on the Visage platform, but the St. Luke's and University of Maryland contracts announced in 2026 are viewer and workflow licenses, not reporting-AI deployments."
              }
            },
            {
              "@type": "Question",
              "name": "Why does radiology report turnaround time keep getting worse?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 Journal of the American College of Radiology study of more than 2.5 million Medicare fee-for-service imaging claims found that the time from outpatient imaging to radiologist interpretation increased 113% overall between 2014 and 2023, with most of the increase concentrated in 2022 and 2023. By modality, CT turnaround time rose 318%, MRI 256%, ultrasound 140%, and radiography/fluoroscopy 63%. The study's authors attributed the acceleration to a radiology workforce that has run out of slack relative to imaging volume growth — a capacity problem that new viewer or PACS software does not by itself solve."
              }
            },
            {
              "@type": "Question",
              "name": "Where does AI reporting fit for a health system that just bought a new viewer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Alongside it, not instead of it. A viewer and workflow platform determines how fast images move and how a radiologist views them; it does not touch how long interpretation and dictation take once the study is open. AI CT reporting tools sit downstream of the viewer, producing a structured draft report for the radiologist to review, edit, and sign. The two investments solve different parts of the same pipeline, which is why regional health systems that modernize their viewer still face the turnaround-time problem the JACR data describes."
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
                Market &amp; Strategy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              St. Luke's bought a new viewer.<br />
              <span className="text-white/60">The reporting bottleneck is still there.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A $23 million, seven-year deal puts Pro Medicus's Visage 7 platform across a Boise-based regional health system that sits squarely in the community-hospital footprint AI reporting vendors target. It's a real modernization — and a reminder that viewer software and report-writing are two different budget lines with two different bottlenecks.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$23M', label: '7-year Visage 7 contract', sub: "St. Luke's Health System, Boise, ID" },
            { stat: '10', label: 'Medical centers covered', sub: 'ID, OR, NV footprint' },
            { stat: '113%', label: 'Report turnaround rise', sub: '2014–2023, Medicare claims' },
            { stat: '318%', label: 'CT turnaround time increase', sub: 'the sharpest of any modality' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The deal: a new viewer, not a new way to report
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Pro Medicus, the Australian imaging IT vendor, has signed a seven-year, <strong>$23 million</strong> (about $16.3 million US) contract with <a href="https://www.auntminnie.com/imaging-informatics/enterprise-imaging/news/15832335/pro-medicus-inks-23m-contract-with-st-lukes" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">St. Luke's Health System</a>, a not-for-profit system headquartered in Boise, Idaho, with 10 medical centers spanning southern Idaho, eastern Oregon, and northern Nevada — territory that overlaps closely with the small and mid-sized community hospital footprint most AI radiology vendors, xAID included, treat as core buyers.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The contract, signed through Pro Medicus's US subsidiary Visage Imaging, covers the cloud-based <strong>Visage 7 Viewer</strong> and <strong>Visage 7 Workflow</strong> modules under a transaction-based licensing model, so the final value could exceed $23 million depending on usage. Rollout planning starts immediately, with go-live targeted for the first quarter of 2027.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                It isn't an isolated data point. Four months earlier, Pro Medicus signed a five-year, <a href="https://www.auntminnie.com/imaging-informatics/enterprise-imaging/article/15821745/visage-imaging-visage-imaging-inks-144m-contract-with-university-of-maryland" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">$14.4 million contract with the University of Maryland Medical System</a> for the same Visage 7 Viewer and Workflow combination, also cloud-based, also with an early-2027 go-live. Regional and academic health systems are actively replacing PACS-era viewing infrastructure with modern, cloud-native platforms — that spending is real and ongoing.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What a viewer and workflow platform actually does
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Visage 7 Viewer and Visage 7 Workflow are radiology PACS viewer software: enterprise imaging tools that store, route, and display studies across a health system's sites, and manage how cases get assigned and prioritized on a radiologist's worklist. That's genuinely valuable infrastructure — especially for a system spread across three states, where a radiologist covering St. Luke's Children's Hospital and a study taken in a rural eastern-Oregon clinic needs the image to open fast and look the same everywhere.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that touches what happens after the radiologist opens the study. Viewer and workflow software gets the pixels in front of the right person faster; it doesn't write a word of the report. Interpretation and dictation remain manual, and that step is exactly where imaging systems are losing time.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The part of the pipeline that keeps getting slower
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A 2026 study in the <em>Journal of the American College of Radiology</em>, based on more than 2.5 million Medicare fee-for-service imaging claims from 2014 through 2023, found that the time between an outpatient imaging exam and its radiologist interpretation <a href="https://doi.org/10.1016/j.jacr.2026.02.038" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">rose 113% overall</a> — and that the increase wasn't gradual. Turnaround times were roughly flat from 2014 to 2021, then jumped sharply starting in 2022, which the study's lead author described to <a href="https://www.healio.com/news/hematology-oncology/20260515/critical-juncture-turnaround-times-for-imaging-studies-more-than-doubled-in-last-decade" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Healio</a> as a sign the radiology workforce has "reached a critical juncture," with "no more slack in the system."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                By modality, CT turnaround time increased <strong>318%</strong>, MRI <strong>256%</strong>, ultrasound <strong>140%</strong>, and radiography/fluoroscopy <strong>63%</strong> over the same nine years. CT and MRI — the two modalities where community and regional hospitals most often lean on outside interpretation help — saw by far the steepest deterioration. A faster viewer does nothing to change any of those numbers; the bottleneck is radiologist time spent producing the report itself, not the speed at which the image loads on screen.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two investments, two different jobs
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's worth being precise about what each type of purchase actually buys, because health systems evaluating radiology IT budgets tend to compare them as if they compete for the same dollar. They don't solve the same problem:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Investment</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">What it optimizes</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">What it leaves untouched</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Viewer / PACS platform (e.g. Visage 7)', 'Image storage, routing, and display speed across sites', 'Time spent interpreting and dictating the report'],
                      ['Workflow / worklist module', 'How cases are assigned and prioritized to radiologists', "How long each case takes once it's opened"],
                      ['AI reporting layer', 'Time from image acquisition to a reviewable draft report', 'Cross-site image storage, routing, or the viewer itself'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] font-light">{row[1]}</td>
                        <td className="py-3 text-[#444] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A health system can fund all three, but they aren't substitutes. Buying the top row of that table, as St. Luke's and the University of Maryland just did, is a legitimate and necessary infrastructure upgrade. It is not, by itself, an answer to the turnaround-time trend the JACR data documents.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The sequencing question regional systems are facing
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                St. Luke's is a useful test case precisely because it looks like the systems the AI-reporting bottleneck hits hardest: multi-site, spread across a large rural and semi-rural service area, and now investing seven figures in modern imaging IT. That capital commitment tells you the system has both the budget cycle and the appetite to modernize radiology infrastructure. It does not tell you the reporting side of the pipeline has been addressed — the viewer contract and the reporting problem are simply different line items, evaluated on different timelines, often by different stakeholders inside the same IT department.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Pro Medicus itself has said publicly that it intends for Visage 7 to eventually host third-party AI algorithms, which suggests even the viewer vendors see reporting AI as a complementary layer rather than a feature they're replacing. For now, though, the contracts on record — St. Luke's and University of Maryland alike — are viewer and workflow licenses. The reporting gap they leave behind is the one AI CT reporting tools are built to close: producing a structured draft report immediately after acquisition, which xAID's in-house radiologist reviews before it reaches the client's reading radiologist ready-to-sign. That's a downstream layer on top of whatever viewer a health system runs — not a reason to delay or replace a viewer upgrade already underway.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What did Pro Medicus and St. Luke's Health System agree to?",
                    a: "Pro Medicus, through its US subsidiary Visage Imaging, signed a seven-year, $23 million (about $16.3 million US) contract with St. Luke's Health System, a not-for-profit system based in Boise, Idaho with 10 medical centers across southern Idaho, eastern Oregon, and northern Nevada. The deal covers the cloud-based Visage 7 Viewer and Visage 7 Workflow modules under a transaction-based licensing model, meaning the final value could exceed $23 million depending on usage. Rollout planning begins immediately, with go-live targeted for the first quarter of 2027.",
                  },
                  {
                    q: 'Does Visage 7 include AI reporting?',
                    a: "No. Visage 7 Viewer and Visage 7 Workflow are enterprise imaging and PACS-replacement software — they manage how images are stored, routed, displayed, and prioritized across a health system's sites. They do not generate report drafts. A radiologist still dictates or types every finding after opening the study in the viewer. Pro Medicus has talked publicly about eventually hosting third-party AI algorithms on the Visage platform, but the St. Luke's and University of Maryland contracts announced in 2026 are viewer and workflow licenses, not reporting-AI deployments.",
                  },
                  {
                    q: 'Why does radiology report turnaround time keep getting worse?',
                    a: "A 2026 Journal of the American College of Radiology study of more than 2.5 million Medicare fee-for-service imaging claims found that the time from outpatient imaging to radiologist interpretation increased 113% overall between 2014 and 2023, with most of the increase concentrated in 2022 and 2023. By modality, CT turnaround time rose 318%, MRI 256%, ultrasound 140%, and radiography/fluoroscopy 63%. The study's authors attributed the acceleration to a radiology workforce that has run out of slack relative to imaging volume growth — a capacity problem that new viewer or PACS software does not by itself solve.",
                  },
                  {
                    q: 'Where does AI reporting fit for a health system that just bought a new viewer?',
                    a: 'Alongside it, not instead of it. A viewer and workflow platform determines how fast images move and how a radiologist views them; it does not touch how long interpretation and dictation take once the study is open. AI CT reporting tools sit downstream of the viewer, producing a structured draft report for the radiologist to review, edit, and sign. The two investments solve different parts of the same pipeline, which is why regional health systems that modernize their viewer still face the turnaround-time problem the JACR data describes.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://www.auntminnie.com/imaging-informatics/enterprise-imaging/news/15832335/pro-medicus-inks-23m-contract-with-st-lukes" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie, "Pro Medicus inks $23M contract with St. Luke's"</a> (2026); <a href="https://www.auntminnie.com/imaging-informatics/enterprise-imaging/article/15821745/visage-imaging-visage-imaging-inks-144m-contract-with-university-of-maryland" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie, "Visage Imaging inks $14.4M contract with University of Maryland"</a> (2026); Christensen et al., <a href="https://doi.org/10.1016/j.jacr.2026.02.038" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"National Turnaround Time Trends for Medicare Fee-for-Service Beneficiaries, 2014-2023," Journal of the American College of Radiology</a> (2026), as reported by <a href="https://www.healio.com/news/hematology-oncology/20260515/critical-juncture-turnaround-times-for-imaging-studies-more-than-doubled-in-last-decade" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Healio</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Viewer upgrades and reporting AI aren't the same budget line"
          sub="See how AI CT reporting sits downstream of whatever PACS or viewer platform you already run. Try it on 5 free studies."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology for Small and Community Hospitals</div>
              </Link>
              <Link to="/blog/enterprise-imaging-modernization-capital-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Strategy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The $500M Imaging Deal and the Capital Gap Smaller Providers Face</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">National Radiology Turnaround Time Benchmark: 2026 Data</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyViewerSoftwareReportingBottleneck;
