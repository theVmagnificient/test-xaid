import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const LiverCancerTreatmentImagingVolume = () => {
  const post = {
    title: 'Liver Cancer Treatment Options Are Shifting to IR — the Imaging Queue Feels It Too',
    dateIso: '2026-10-13',
    date: 'October 13, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "A new Medicare claims analysis finds interventional radiologists now treat about 51% of liver cancer patients. Every one of those patients still needs CT or MRI staging and follow-up imaging read by a diagnostic radiologist — a quiet volume driver for reporting queues.",
  };

  const canonical = 'https://xaid.ai/blog/liver-cancer-treatment-imaging-volume/';

  return (
    <>
      <Helmet defer={false}>
        <title>Liver Cancer Treatment Options Fuel Imaging Backlog | xAID</title>
        <meta name="description" content="Interventional radiology treats over half of liver cancer patients. Every one still needs CT/MRI staging and follow-up scans read by a diagnostic radiologist." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Liver Cancer Treatment Options Fuel Imaging Backlog | xAID" />
        <meta property="og:description" content="Interventional radiology treats over half of liver cancer patients. Every one still needs CT/MRI staging and follow-up scans read by a diagnostic radiologist." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liver Cancer Treatment Options Fuel Imaging Backlog | xAID" />
        <meta name="twitter:description" content="Interventional radiology treats over half of liver cancer patients. Every one still needs CT/MRI staging and follow-up scans read by a diagnostic radiologist." />
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
          "keywords": "liver cancer treatment options, interventional radiology liver cancer, liver cancer imaging volume, CT MRI liver cancer surveillance, diagnostic radiology reporting backlog"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do interventional radiologists now treat more than half of liver cancer patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A study published in the Journal of Vascular and Interventional Radiology (JVIR) in October 2026 analyzed Medicare claims from 2016 to 2021, covering roughly 110,000 liver cancer patients a year, and found interventional radiologists were involved in treating about 51% of them — more than oncology or radiation oncology individually."
              }
            },
            {
              "@type": "Question",
              "name": "Does IR's growing share of liver cancer treatment reduce diagnostic imaging workload?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No — if anything it adds to it. Every patient routed to interventional radiology for chemoembolization, radioembolization, or ablation still needs multiphasic CT or MRI staging beforehand and follow-up imaging afterward to assess whether the tumor responded. A rising IR treatment share means more pre- and post-procedural scans landing on the diagnostic reporting queue, not fewer."
              }
            },
            {
              "@type": "Question",
              "name": "How often are liver cancer patients imaged after treatment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Published practice guidance calls for the first post-treatment CT or MRI roughly 1 to 3 months after a locoregional procedure, scored using the LI-RADS treatment response framework, followed by continued surveillance imaging at intervals of three months or less for as long as recurrence risk persists. None of that imaging is interpreted by the interventional radiologist who performed the procedure — it goes to a diagnostic radiologist."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for imaging centers and teleradiology groups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A procedure-share statistic that reads as purely an interventional radiology story is also a diagnostic-reporting volume story. Liver cancer staging and surveillance scans compete for reporting capacity with routine CT work at the same imaging centers and teleradiology groups. Reporting tools that help a radiologist clear routine CT volume faster, without changing who reviews or signs the report, help absorb that added demand."
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
              Interventional radiology now treats half of liver cancer patients.<br />
              <span className="text-white/60">The imaging queue didn't get smaller.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new Medicare claims analysis says interventional radiologists are involved in treating about 51% of liver cancer patients — a headline about procedure share. The quieter story is what every one of those patients still needs before and after the procedure: CT or MRI, read by a diagnostic radiologist.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '51%', label: 'Liver cancer patients IR treats', sub: 'Medicare claims, 2016–2021' },
            { stat: '7.4%', label: "IR's share of oncology payments", sub: 'vs 11.7% of wRVUs' },
            { stat: '52.5%', label: 'Payments going to oncology', sub: 'on 13.7% of wRVUs' },
            { stat: '72%', label: 'Rise in oncology payments', sub: 'over the 5-year study period' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A specialty treating more than half of a cancer type
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The numbers come from a study in the <em>Journal of Vascular and Interventional Radiology</em> (JVIR), published October 2026 by Nishita Kothary, MD, FSIR (Stanford University School of Medicine) and C. Matthew Hawkins, MD, MBA, FSIR (Emory University School of Medicine), as <a href="https://radiologybusiness.com/topics/medical-imaging/interventional-radiology/interventional-radiologists-now-treat-over-50-liver-cancer-patients" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>. Using Medicare claims data from 2016 to 2021 covering roughly 110,000 liver cancer patients a year, the authors found interventional radiologists (IRs) were involved in treating about <strong>51%</strong> of them.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The payment picture looks very different from the treatment-share picture. Over the same period, <a href="https://www.sirweb.org/for-press/new-paper-outlines-growing-role-of-interventional-radiology-in-liver-cancer-treatment/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">IR accounted for just 7.4% of total payments while performing 11.7% of work relative value units (wRVUs)</a> — the standard measure of physician work effort. Oncology, by comparison, took in 52.5% of payments for 13.7% of wRVUs, and radiation oncology took 5.4% of payments for 4.5% of wRVUs. Total oncology payments for liver cancer care rose 72% over the five-year window. As Hawkins put it in the study coverage, IR "delivers the same quality of care at a fraction of the cost of oncologists."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The backdrop is a cancer type that is not rare: liver cancer is commonly cited as the third-leading cause of cancer death worldwide, with an estimated 900,000 new cases diagnosed globally each year and roughly 43,000 in the U.S. The study's authors frame the 51% figure as an argument for including IR explicitly in conversations about treatment pathways, resource allocation, and alternative payment models — conversations that, in Medicare's current structure, mostly happen around medical and radiation oncology.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What a procedure-share number doesn't count
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The JVIR study is about who performs the chemoembolization, radioembolization, or ablation. It says nothing about who reads the scans that make each of those procedures possible — because that's not what it was measuring. But it's worth spelling out, because the answer is: almost always a different physician, working in a different specialty, on a different part of the same patient's chart.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A liver cancer patient referred for locoregional therapy doesn't skip imaging because IR is doing the procedure. The sequence is the same regardless of which specialty ultimately delivers treatment: a multiphasic CT or MRI establishes the diagnosis and stage, usually read and categorized under the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6920285/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Liver Imaging Reporting and Data System (LI-RADS)</a>; a planning scan maps tumor burden and vascular anatomy before the IR team books the case; and after treatment, guidelines call for a follow-up CT or MRI roughly <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6920285/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">1 to 3 months later</a>, scored against the LI-RADS treatment response categories — viable, equivocal, or nonviable — to decide whether the tumor needs retreatment. If it's nonviable, surveillance imaging continues at intervals of three months or less for as long as recurrence risk remains.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Every scan in that sequence is interpreted by a diagnostic radiologist — not the interventional radiologist performing the procedure. A growing IR treatment share, in other words, doesn't move any of that reading workload off the diagnostic queue. It just means more of it is happening.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where imaging sits around an IR liver cancer case
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Care stage</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Scan ordered</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium">Purpose</th>
                      <th className="py-3 text-[#0D0D0D] font-medium">Who reads it</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Diagnosis &amp; staging</td>
                      <td className="py-3 pr-4">Multiphasic CT or MRI</td>
                      <td className="py-3 pr-4">LI-RADS categorization, tumor extent</td>
                      <td className="py-3">Diagnostic radiologist</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Pre-procedure planning</td>
                      <td className="py-3 pr-4">CT or MRI</td>
                      <td className="py-3 pr-4">Tumor burden, vascular mapping for TACE/TARE/ablation</td>
                      <td className="py-3">Diagnostic radiologist, read before the IR case is booked</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Post-treatment response</td>
                      <td className="py-3 pr-4">CT or MRI, ~1–3 months out</td>
                      <td className="py-3 pr-4">LI-RADS treatment response: viable or nonviable</td>
                      <td className="py-3">Diagnostic radiologist</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Ongoing surveillance</td>
                      <td className="py-3 pr-4">Serial CT or MRI</td>
                      <td className="py-3 pr-4">Recurrence detection</td>
                      <td className="py-3">Diagnostic radiologist, repeated while risk persists</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A quiet volume driver on an already strained queue
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this is unique to liver cancer, but liver cancer makes the pattern unusually visible: a specialty growing its treatment share doesn't shrink the diagnostic-imaging burden that sits around that treatment — it rides on top of it. The same imaging centers and teleradiology groups absorbing this staging and surveillance load are already managing <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">CT turnaround-time pressure</Link> on their routine queue, and the trend line in IR itself isn't making that easier: <Link to="/blog/interventional-radiology-workforce-trends/" className="text-xaid-blue-strong underline underline-offset-2">more radiologists are concentrating on interventional procedures</Link> rather than splitting time between IR and diagnostic reads, which narrows the pool reading routine CT and MRI even as cancer-pathway imaging volume grows.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                For a practice or <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="text-xaid-blue-strong underline underline-offset-2">teleradiology provider</Link>, liver cancer staging and surveillance scans don't show up as a separate line item — they compete for the same reporting slots as everything else on the worklist. A treatment-share story about who performs the procedure is, from the reporting desk, a volume story about who reads the scans around it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Liver cancer staging and surveillance CTs are routine studies competing for the same reporting capacity as everything else on an imaging center's or teleradiology group's queue. AI-assisted reporting is built for exactly that kind of volume pressure: a foundation model drafts a structured, comprehensive report for each study, xAID's in-house radiologist reviews every preliminary, and it reaches the client ready-to-sign — the reading radiologist still signs the final report. The goal isn't to change who reads a liver cancer scan; it's to make sure the growing volume of them doesn't push turnaround times out further.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Do interventional radiologists now treat more than half of liver cancer patients?',
                    a: 'Yes. A study published in the Journal of Vascular and Interventional Radiology (JVIR) in October 2026 analyzed Medicare claims from 2016 to 2021, covering roughly 110,000 liver cancer patients a year, and found interventional radiologists were involved in treating about 51% of them — more than oncology or radiation oncology individually.',
                  },
                  {
                    q: "Does IR's growing share of liver cancer treatment reduce diagnostic imaging workload?",
                    a: 'No — if anything it adds to it. Every patient routed to interventional radiology for chemoembolization, radioembolization, or ablation still needs multiphasic CT or MRI staging beforehand and follow-up imaging afterward to assess whether the tumor responded. A rising IR treatment share means more pre- and post-procedural scans landing on the diagnostic reporting queue, not fewer.',
                  },
                  {
                    q: 'How often are liver cancer patients imaged after treatment?',
                    a: 'Published practice guidance calls for the first post-treatment CT or MRI roughly 1 to 3 months after a locoregional procedure, scored using the LI-RADS treatment response framework, followed by continued surveillance imaging at intervals of three months or less for as long as recurrence risk persists. None of that imaging is interpreted by the interventional radiologist who performed the procedure — it goes to a diagnostic radiologist.',
                  },
                  {
                    q: 'What does this mean for imaging centers and teleradiology groups?',
                    a: 'A procedure-share statistic that reads as purely an interventional radiology story is also a diagnostic-reporting volume story. Liver cancer staging and surveillance scans compete for reporting capacity with routine CT work at the same imaging centers and teleradiology groups. Reporting tools that help a radiologist clear routine CT volume faster, without changing who reviews or signs the report, help absorb that added demand.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Kothary N, Hawkins CM. <em>Journal of Vascular and Interventional Radiology</em> (October 2026), as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/interventional-radiology/interventional-radiologists-now-treat-over-50-liver-cancer-patients" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and the <a href="https://www.sirweb.org/for-press/new-paper-outlines-growing-role-of-interventional-radiology-in-liver-cancer-treatment/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Society of Interventional Radiology</a>. Post-treatment imaging timing per <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6920285/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">LI-RADS treatment response literature</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More scans around every cancer-pathway procedure. Same reporting team."
          sub="AI-assisted CT reporting helps absorb staging and surveillance volume without adding to turnaround time. Try it on 5 free studies."
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
              <Link to="/blog/interventional-radiology-workforce-trends/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Interventional Radiology Is Absorbing More Radiologists</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Teleradiology vs Traditional Teleradiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default LiverCancerTreatmentImagingVolume;
