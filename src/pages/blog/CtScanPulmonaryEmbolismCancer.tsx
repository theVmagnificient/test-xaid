import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const CtScanPulmonaryEmbolismCancer = () => {
  const post = {
    title: 'CT Scans for Pulmonary Embolism: When Cancer Patients Can Safely Skip Them',
    dateIso: '2026-07-14',
    date: 'July 14, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A JAMA randomized trial found the YEARS algorithm safely avoided a CT scan for pulmonary embolism in 22% of cancer patients. Here's what it means for CT volume and reporting.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CT Scan for Pulmonary Embolism: The YEARS Trial | xAID</title>
        <meta name="description" content="A JAMA trial found the YEARS algorithm safely avoided a CT scan for pulmonary embolism in 22% of cancer patients. What it means for CT volume and reporting." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CT Scan for Pulmonary Embolism: The YEARS Trial | xAID" />
        <meta property="og:description" content="A JAMA trial found the YEARS algorithm safely avoided a CT scan for pulmonary embolism in 22% of cancer patients. What it means for CT volume and reporting." />
        <meta property="og:url" content="https://xaid.ai/blog/ct-scan-for-pulmonary-embolism-cancer-patients" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CT Scan for Pulmonary Embolism: The YEARS Trial | xAID" />
        <meta name="twitter:description" content="A JAMA trial found the YEARS algorithm safely avoided a CT scan for pulmonary embolism in 22% of cancer patients. What it means for CT volume and reporting." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ct-scan-for-pulmonary-embolism-cancer-patients" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ct-scan-for-pulmonary-embolism-cancer-patients",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "CT scan for pulmonary embolism, YEARS algorithm, CTPA cancer patients, pulmonary embolism diagnosis, appropriate use imaging, radiology AI reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can cancer patients safely skip a CT scan for pulmonary embolism?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In some cases, yes. In the Hydra randomized trial published in JAMA in July 2026, a diagnostic strategy using the YEARS algorithm was as safe as scanning everyone with CT pulmonary angiography (CTPA), and it avoided a CT scan in 22% of patients with active cancer who had suspected pulmonary embolism. The decision rests on clinical criteria and a D-dimer blood test, not on the scan alone."
              }
            },
            {
              "@type": "Question",
              "name": "What is the YEARS algorithm for pulmonary embolism?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The YEARS algorithm is a clinical decision rule that combines three items — clinical signs of deep vein thrombosis, hemoptysis, and whether pulmonary embolism is the most likely diagnosis — with a D-dimer blood test. Pulmonary embolism can be ruled out without imaging if no items are present and D-dimer is below 1000 ng/mL, or if at least one item is present and D-dimer is below 500 ng/mL. It is a clinical protocol, not an imaging AI product."
              }
            },
            {
              "@type": "Question",
              "name": "How many CT scans did the YEARS algorithm avoid in the trial?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the Hydra trial of 698 cancer patients across 21 hospitals in six countries, the YEARS algorithm obviated CTPA in 22% of patients — 77 of the 352 assigned to the algorithm group. Symptomatic venous thromboembolism or PE-related death during follow-up was 1.8% in the YEARS group versus 5.5% in the CTPA-only group, meeting the trial's noninferiority safety threshold."
              }
            },
            {
              "@type": "Question",
              "name": "What does the YEARS trial mean for radiology departments and AI reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Risk-stratification tools like YEARS reduce the number of low-yield CT scans, easing radiology workload and sparing patients radiation and contrast. But they do not touch the scans that are still ordered. For the CTPAs and other CTs that remain clinically warranted, accurate, structured reporting and fast turnaround matter more, not less — appropriate use and reporting quality are two sides of the same efficiency story."
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
              <Link to="/blog/" className="text-white/60 hover:text-white text-[15px] font-light transition-colors">← Blog</Link>
              <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                Clinical Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              When cancer patients can safely skip<br />
              <span className="text-white/60">a CT scan for pulmonary embolism</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A large randomized trial in <em>JAMA</em> shows a simple clinical algorithm can rule out pulmonary embolism in cancer patients without imaging in more than one in five cases — as safely as scanning everyone. It's a reminder that AI and decision rules are reshaping which CTs happen, and why the scans that remain deserve better reads.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '22%', label: 'CT scans avoided', sub: '77 of 352 in the algorithm arm' },
                { stat: '698', label: 'Cancer patients enrolled', sub: '21 hospitals, 6 countries' },
                { stat: '1.8% vs 5.5%', label: 'VTE / PE-related death', sub: 'YEARS vs CTPA-only, noninferior' },
                { stat: 'JAMA', label: 'Hydra randomized trial', sub: 'Published July 2026' },
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
                What the trial found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Cancer patients are among the most likely to be sent for a CT scan when pulmonary embolism (PE) is suspected — they have a higher baseline clot risk, and their D-dimer levels are often elevated for reasons unrelated to PE, which pushes clinicians toward imaging. The result is a lot of CT pulmonary angiography (CTPA) that comes back negative.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The <a href="https://doi.org/10.1001/jama.2026.10676" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Hydra trial</a>, published in <em>JAMA</em> on July 12, 2026, tested whether a structured decision rule could safely cut that volume. Investigators led by Bram Akerboom, MD, of Leiden University Medical Center randomized <strong>698</strong> patients with active cancer and suspected acute PE across 21 hospitals in the Netherlands, Italy, Switzerland, Belgium, France, and Spain. Roughly half were managed with the YEARS algorithm; the other half went straight to CTPA.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The headline result: the YEARS strategy avoided a CT scan in <strong>22%</strong> of patients — 77 of the 352 assigned to the algorithm — while symptomatic venous thromboembolism or PE-related death during follow-up was <strong>1.8%</strong> in the YEARS group versus <strong>5.5%</strong> with CTPA-only, meeting the trial's prespecified noninferiority threshold. In the authors' words, "the YEARS algorithm is as safe as a CTPA-only approach to exclude PE in patients with active cancer and avoids CTPA scans."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How the algorithm decides who skips the scan
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The <a href="https://pubmed.ncbi.nlm.nih.gov/32869501/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">YEARS algorithm</a> is a clinical decision rule, not an imaging product. It combines three simple items with a D-dimer blood test:
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { title: 'Clinical signs of deep vein thrombosis', desc: 'Objective signs of a clot in the leg — swelling, tenderness along the deep veins.' },
                  { title: 'Hemoptysis', desc: 'Coughing up blood, a classic symptom associated with pulmonary embolism.' },
                  { title: 'PE as the most likely diagnosis', desc: "The clinician's judgment that PE is the leading explanation for the presentation." },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The D-dimer threshold flexes with those items. If none are present, PE can be ruled out without imaging when D-dimer is below 1000 ng/mL; if one or more are present, the cutoff tightens to 500 ng/mL. Everyone else still gets the scan. The point isn't to scan fewer high-risk patients — it's to stop scanning the low-risk ones who were never going to have a positive result.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What "skip the scan" actually buys
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For the roughly one in five patients who avoid CTPA, the benefits stack up: no radiation dose, no iodinated contrast (a real consideration in cancer patients, many of whom have compromised kidney function), a shorter emergency-department stay, and lower cost. As the authors put it, implementing the algorithm "will reduce health care costs and the growing workload for radiology departments" while sparing patients "less radiation" and "less exposure to contrast material."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This fits a broader pattern. Appropriate-use rules and AI triage are increasingly deciding <em>which</em> imaging studies get ordered in the first place — a counterweight to the long-running trend of <Link to="/blog/overutilization-of-medical-imaging/" className="text-xaid-blue-strong underline underline-offset-2">rising imaging volume</Link>. Fewer low-yield scans is good medicine and good economics. But it changes the shape of the problem rather than eliminating it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The scans that remain deserve better reads
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Here's the part that's easy to miss. Even in the YEARS arm, most patients — 78% of them — still needed the CT. And every one of those studies still has to be interpreted correctly, reported clearly, and turned around fast enough to guide treatment. Reducing unnecessary scans doesn't reduce the stakes on the necessary ones; if anything, it raises them, because the remaining pretest probability is higher and the findings matter more.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                So the two levers of imaging efficiency work together, not against each other:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm"> </th>
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Appropriate use (YEARS-type rules)</th>
                      <th className="py-3 text-[#0D0D0D] font-medium text-sm">Reporting quality (the reads that happen)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Goal</td>
                      <td className="py-3 pr-4">Order fewer low-yield scans</td>
                      <td className="py-3">Get more value from each scan performed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Lever</td>
                      <td className="py-3 pr-4">Clinical criteria + D-dimer</td>
                      <td className="py-3">Accurate, structured reports; fast turnaround</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Effect on volume</td>
                      <td className="py-3 pr-4">Fewer studies enter the queue</td>
                      <td className="py-3">Studies clear the queue faster</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#0D0D0D] font-medium">Who stays accountable</td>
                      <td className="py-3 pr-4">Ordering clinician</td>
                      <td className="py-3">The reading radiologist who signs the report</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The YEARS algorithm decides whether a scan happens. AI CT reporting works on the reads that do — it produces a structured, comprehensive draft for a <Link to="/chest-ct-ai-report/" className="text-xaid-blue-strong underline underline-offset-2">chest CT</Link> or other study, xAID's in-house radiologist reviews every preliminary, and the report is delivered ready-to-sign so your reading radiologist signs the final. On a workload already trimmed by appropriate-use rules, faster and more consistent reporting is where the remaining time is won — see how that translates into <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="text-xaid-blue-strong underline underline-offset-2">turnaround-time benchmarks</Link> and <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="text-xaid-blue-strong underline underline-offset-2">what the accuracy evidence shows</Link>. Fewer scans and better reads aren't competing strategies; they're the same efficiency story told from both ends.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can cancer patients safely skip a CT scan for pulmonary embolism?',
                    a: 'In some cases, yes. In the Hydra randomized trial published in JAMA in July 2026, a diagnostic strategy using the YEARS algorithm was as safe as scanning everyone with CT pulmonary angiography (CTPA), and it avoided a CT scan in 22% of patients with active cancer who had suspected pulmonary embolism. The decision rests on clinical criteria and a D-dimer blood test, not on the scan alone.',
                  },
                  {
                    q: 'What is the YEARS algorithm for pulmonary embolism?',
                    a: 'The YEARS algorithm is a clinical decision rule that combines three items — clinical signs of deep vein thrombosis, hemoptysis, and whether pulmonary embolism is the most likely diagnosis — with a D-dimer blood test. Pulmonary embolism can be ruled out without imaging if no items are present and D-dimer is below 1000 ng/mL, or if at least one item is present and D-dimer is below 500 ng/mL. It is a clinical protocol, not an imaging AI product.',
                  },
                  {
                    q: 'How many CT scans did the YEARS algorithm avoid in the trial?',
                    a: 'In the Hydra trial of 698 cancer patients across 21 hospitals in six countries, the YEARS algorithm obviated CTPA in 22% of patients — 77 of the 352 assigned to the algorithm group. Symptomatic venous thromboembolism or PE-related death during follow-up was 1.8% in the YEARS group versus 5.5% in the CTPA-only group, meeting the trial\'s noninferiority safety threshold.',
                  },
                  {
                    q: 'What does the YEARS trial mean for radiology departments and AI reporting?',
                    a: 'Risk-stratification tools like YEARS reduce the number of low-yield CT scans, easing radiology workload and sparing patients radiation and contrast. But they do not touch the scans that are still ordered. For the CTPAs and other CTs that remain clinically warranted, accurate, structured reporting and fast turnaround matter more, not less — appropriate use and reporting quality are two sides of the same efficiency story.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Akerboom B, et al. "YEARS Algorithm for Diagnosis of Suspected Pulmonary Embolism in Patients With Cancer: A Randomized Clinical Trial" (the Hydra study), <em>JAMA</em>, July 12, 2026, <a href="https://doi.org/10.1001/jama.2026.10676" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1001/jama.2026.10676</a>; as reported by <a href="https://www.auntminnie.com/clinical-news/ct/article/15829820/clinical-tool-can-reduce-the-use-of-cpta-in-cancer-patients" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AuntMinnie</a> and <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/algorithm-lets-cancer-patients-skip-ct-scans-pulmonary-embolism" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. YEARS criteria and D-dimer thresholds per the <a href="https://pubmed.ncbi.nlm.nih.gov/32869501/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">external validation study</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Fewer scans. Better reads. Same goal."
          sub="When the CT is warranted, xAID delivers a structured, radiologist-reviewed report — ready for your radiologist to sign. Try it on 5 free studies."
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
              <Link to="/blog/overutilization-of-medical-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Imaging Utilization</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Fewer Imaging Gatekeepers, More Scans: The Capacity Squeeze</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CtScanPulmonaryEmbolismCancer;
