import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const PancreaticCancerEarlyDetectionCtBodyComposition = () => {
  const post = {
    title: 'Pancreatic Cancer Early Detection: What CT Body Composition Shows',
    dateIso: '2026-10-22',
    date: 'October 22, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A Mayo Clinic study found CT-visible muscle and fat changes years before pancreatic cancer diagnosis — and why structured reporting operationalizes it.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Pancreatic Cancer Early Detection on CT | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/pancreatic-cancer-early-detection-ct-body-composition/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pancreatic Cancer Early Detection on CT | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pancreatic Cancer Early Detection on CT | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/pancreatic-cancer-early-detection-ct-body-composition" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/pancreatic-cancer-early-detection-ct-body-composition",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "pancreatic cancer early detection, CT body composition, opportunistic CT screening, pancreatic ductal adenocarcinoma, structured radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can CT scans detect pancreatic cancer risk before diagnosis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 Mayo Clinic study in Pancreatology compared abdominal CT scans from 1,825 patients who later developed pancreatic ductal adenocarcinoma against 3,650 matched controls. People who went on to be diagnosed showed steeper declines in subcutaneous and visceral fat over the three years before diagnosis, and in skeletal muscle mass over the final 12 months, than matched controls. The combined changes gave a moderate ability to distinguish future cases from controls (AUC 0.76), not a definitive diagnosis."
              }
            },
            {
              "@type": "Question",
              "name": "Is body composition change a reliable pancreatic cancer screening test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not on its own. The Mayo Clinic researchers describe the discriminatory power as moderate, and muscle or fat loss is a nonspecific sign shared by many illnesses, not unique to pancreatic cancer. The study's authors say the next step is combining body composition trends with other clinical and imaging data into a risk-prediction algorithm, rather than using the signal alone."
              }
            },
            {
              "@type": "Question",
              "name": "Why is pancreatic cancer usually caught so late?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pancreatic cancer has no general-population screening test, and only about 10% of cases are linked to an identifiable hereditary or strong family-history pattern that qualifies a person for existing high-risk surveillance programs. The rest arise without warning signs. According to the American Cancer Society's 2026 Cancer Facts & Figures report, only 17% of patients are diagnosed at a localized stage, and the overall five-year relative survival rate remains at 13%."
              }
            },
            {
              "@type": "Question",
              "name": "Why does this kind of finding require structured CT reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Mayo Clinic signal only exists because an AI tool measured muscle and fat as consistent numeric values on every scan, across years and multiple sites, so the trend could be compared statistically. A narrative impression describing a patient as 'cachectic' or 'unremarkable soft tissue' cannot be trended this way. Operationalizing body-composition risk signals at scale depends on CT reports capturing quantitative, structured measurements as a matter of course, not just prose impressions."
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
                {post.category}
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Pancreatic cancer early detection:<br />
              <span className="text-white/60">what CT body composition shows</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A Mayo Clinic study of more than 5,000 patients found that people who later developed pancreatic cancer were already losing muscle and fat, in a measurable pattern, years before anyone suspected it. The finding is a reminder of what it takes to ever act on a signal like this: every scan has to produce numbers, not just prose.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '1,825 vs 3,650', label: 'PDAC cases vs matched controls' },
            { stat: '3 years', label: 'Pre-diagnosis fat-loss window' },
            { stat: 'AUC 0.76', label: 'Moderate case/control discrimination' },
            { stat: '13%', label: '5-yr PDAC survival (ACS, 2026)', sub: 'all stages combined' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the Mayo Clinic study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers at Mayo Clinic, led by former research fellow Aleksander Bogdanski with senior author Yan Bi, M.D., Ph.D., and corresponding author Michael Wallace, M.D., published a case-control analysis in <a href="https://doi.org/10.1016/j.pan.2026.09.008" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Pancreatology</em></a> comparing abdominal CT scans from <strong>1,825 patients</strong> later diagnosed with pancreatic ductal adenocarcinoma (PDAC) against <strong>3,650 matched controls</strong> across Mayo Clinic sites in Arizona, Florida and Minnesota.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Using an AI-based body-composition measurement tool, the team quantified skeletal muscle, visceral fat and subcutaneous fat on each patient's prior abdominal CT scans, then tracked how those measurements changed over the years leading up to diagnosis. As <a href="https://newsnetwork.mayoclinic.org/discussion/body-composition-changes-on-ct-scans-may-help-identify-pancreatic-cancer-risk/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Mayo Clinic News Network reported</a>, the team describes it as the largest controlled study to date of prediagnostic body-composition trajectories in PDAC.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "Pancreatic cancer often develops silently, making early detection extremely challenging," Dr. Bi said. "These findings suggest that routine CT scans may capture physiological changes associated with pancreatic cancer before patients are diagnosed."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Fat declines first, muscle follows
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The timing is the detail worth sitting with. Compared with controls, patients who went on to be diagnosed with PDAC had significantly steeper declines in both subcutaneous and visceral fat over the <strong>three years</strong> before diagnosis. Skeletal muscle loss, by contrast, only separated clearly from controls in the <strong>final 12 months</strong> before diagnosis — consistent with muscle wasting as a later-stage, more acute process than the slower fat loss that preceded it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Our study shows that body composition changes associated with pancreatic cancer are detectable on routine CT scans and differ from the changes observed in similar patients without cancer," said Dr. Wallace.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Combined, the longitudinal changes in muscle and fat gave what the researchers call moderate discriminatory ability to separate future cases from controls — an area under the curve of <strong>0.76</strong> (95% CI, 0.73–0.78), as reported in coverage of the study's findings. An AUC of 0.76 is well above chance (0.5) but far short of a diagnostic test; it says the pattern is real and detectable, not that it can reliably flag an individual patient on its own.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why "moderate" is still the honest word
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The researchers are explicit that fat and muscle loss are not specific to pancreatic cancer — the same pattern shows up with many chronic and malignant conditions, from cardiac disease to other cancers to simple aging. That's exactly why the team frames this as a building block rather than a finished tool: the next step they describe is combining body-composition trajectories with other clinical factors and imaging biomarkers into a risk-prediction algorithm, not deploying the composition signal by itself.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That caution matters because of how badly pancreatic cancer needs an earlier signal of almost any kind. Per the American Cancer Society's <a href="https://pancan.org/press-releases/pancreatic-cancer-deaths-continue-to-rise-five-year-survival-rate-remains-stalled-at-13-while-all-cancers-combined-reach-milestone-70/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Cancer Facts & Figures 2026</a> report, the five-year relative survival rate for pancreatic cancer remains stalled at <strong>13%</strong>, with an estimated 67,530 new U.S. diagnoses and 52,740 deaths in 2026. Only <strong>17%</strong> of patients are diagnosed at a localized stage, where five-year survival rises to 44% — the rest are caught after the disease has already spread. And unlike breast or colon cancer, there is no screening test offered to the general population. Structured surveillance with endoscopic ultrasound or MRI exists only for the roughly <a href="https://nfptr.org/hereditary" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">10% of cases</a> linked to an identifiable hereditary syndrome or strong family history. The other 90% of patients who will develop PDAC have no criteria-based pathway into any surveillance program at all — which is precisely the population an opportunistic, CT-derived signal would need to reach to matter.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The real constraint: a trend needs numbers, not prose
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This study only exists because the researchers could go back and extract a consistent number for muscle, visceral fat and subcutaneous fat from thousands of CT scans taken for unrelated reasons, years apart, across three different Mayo Clinic sites. That's a very different thing from what a typical radiology report produces. A narrative impression that notes "unremarkable soft tissues" or "patient appears cachectic" cannot be plotted on a three-year curve or compared across a cohort — it isn't a measurement, it's a sentence.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The same gap shows up in other opportunistic-CT findings xAID has covered before — vertebral bone density on routine chest CT <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">tracking with cognitive decline</Link>, or CT-radiomics features <Link to="/blog/ct-pancreatitis-organ-failure-ai-prediction/" className="text-xaid-blue-strong underline underline-offset-2">predicting organ failure in acute pancreatitis</Link>. In every case, the signal was recoverable only because a quantitative measurement sat somewhere in or alongside the image — not because a radiologist's free-text impression happened to mention it. Before any of this kind of research can turn into a bedside risk tool, the quantitative data has to exist as structured output from the read itself, consistently, at scale — across every scan, every site, every year — rather than depend on researchers retroactively mining pixel data a decade later.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D]">Narrative CT report</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D]">Structured, quantitative CT report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['"Soft tissues unremarkable."', 'Skeletal muscle, visceral fat, subcutaneous fat recorded as numeric indices'],
                      ['Not comparable to a prior scan without re-review', 'Directly trendable against prior studies, scan to scan'],
                      ['Unusable for population-level research without manual re-extraction', 'Queryable at scale across a health system or registry'],
                      ['Depends on an individual radiologist choosing to mention it', 'Captured the same way on every read, regardless of indication'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#444] font-light">{row[0]}</td>
                        <td className="py-3 text-[14px] text-[#444] font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is the practical case for AI-assisted structured reporting beyond speed: a comprehensive report draft that captures measurements as discrete, queryable data points — not just a written impression — is what would let a signal like prediagnostic body-composition change ever be tracked automatically across a population, rather than reconstructed years later by a research team with a grant. xAID's AI drafts a structured, comprehensive report for every study; an in-house radiologist reviews each preliminary before it goes out ready-to-sign, and the client's reading radiologist signs the final. The research question this study raises — can a CT-derived trend flag pancreatic cancer risk earlier — is still years from clinical use. The infrastructure question it raises — does routine reporting capture the numbers that would make that possible — is one structured reporting is built to answer today.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can CT scans detect pancreatic cancer risk before diagnosis?',
                    a: 'A 2026 Mayo Clinic study in Pancreatology compared abdominal CT scans from 1,825 patients who later developed pancreatic ductal adenocarcinoma against 3,650 matched controls. People who went on to be diagnosed showed steeper declines in subcutaneous and visceral fat over the three years before diagnosis, and in skeletal muscle mass over the final 12 months, than matched controls. The combined changes gave a moderate ability to distinguish future cases from controls (AUC 0.76), not a definitive diagnosis.',
                  },
                  {
                    q: 'Is body composition change a reliable pancreatic cancer screening test?',
                    a: "Not on its own. The Mayo Clinic researchers describe the discriminatory power as moderate, and muscle or fat loss is a nonspecific sign shared by many illnesses, not unique to pancreatic cancer. The study's authors say the next step is combining body composition trends with other clinical and imaging data into a risk-prediction algorithm, rather than using the signal alone.",
                  },
                  {
                    q: 'Why is pancreatic cancer usually caught so late?',
                    a: "Pancreatic cancer has no general-population screening test, and only about 10% of cases are linked to an identifiable hereditary or strong family-history pattern that qualifies a person for existing high-risk surveillance programs. The rest arise without warning signs. According to the American Cancer Society's 2026 Cancer Facts & Figures report, only 17% of patients are diagnosed at a localized stage, and the overall five-year relative survival rate remains at 13%.",
                  },
                  {
                    q: 'Why does this kind of finding require structured CT reporting?',
                    a: "The Mayo Clinic signal only exists because an AI tool measured muscle and fat as consistent numeric values on every scan, across years and multiple sites, so the trend could be compared statistically. A narrative impression describing a patient as 'cachectic' or 'unremarkable soft tissue' cannot be trended this way. Operationalizing body-composition risk signals at scale depends on CT reports capturing quantitative, structured measurements as a matter of course, not just prose impressions.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Bogdanski et al., "Longitudinal body composition changes distinguish pancreatic ductal adenocarcinoma from controls in a pre-diagnostic CT cohort," <em>Pancreatology</em> (2026), <a href="https://doi.org/10.1016/j.pan.2026.09.008" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.pan.2026.09.008</a>; as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/computed-tomography-ct/body-composition-changes-ct-could-signal-pancreatic-cancer-years-diagnosis" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://newsnetwork.mayoclinic.org/discussion/body-composition-changes-on-ct-scans-may-help-identify-pancreatic-cancer-risk/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Mayo Clinic News Network</a>. Pancreatic cancer survival and staging figures from the American Cancer Society's <a href="https://pancan.org/press-releases/pancreatic-cancer-deaths-continue-to-rise-five-year-survival-rate-remains-stalled-at-13-while-all-cancers-combined-reach-milestone-70/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Cancer Facts & Figures 2026</a>, cited via the Pancreatic Cancer Action Network. Hereditary/familial share of cases via the <a href="https://nfptr.org/hereditary" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Johns Hopkins National Familial Pancreas Tumor Registry</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reports capture what narrative impressions miss"
          sub="xAID's AI drafts a comprehensive, structured report for every CT study. Try it on 5 free studies and see the radiologist-reviewed difference."
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
              <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Chest CT Bone Density Predicts Brain Aging</div>
              </Link>
              <Link to="/blog/ct-pancreatitis-organ-failure-ai-prediction/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Predicts Organ Failure in Acute Pancreatitis Hours Early</div>
              </Link>
              <Link to="/blog/incidental-renal-mass-ct-report/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Renal Mass on CT: Why the Report Matters</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PancreaticCancerEarlyDetectionCtBodyComposition;
