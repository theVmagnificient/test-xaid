import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const UltraprocessedFoodBrainMriFindings = () => {
  const post = {
    title: 'Ultraprocessed Food and Brain MRI Findings: A New Incidental-Finding Signal',
    dateIso: '2026-10-19',
    date: 'October 19, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: 'A JAMA Network Open study of 8,783 adults found a 40% higher odds of vascular brain injury on MRI among the heaviest ultraprocessed food eaters.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Ultraprocessed Foods and Brain MRI Findings | xAID</title>
        <meta name="description" content="A JAMA Network Open study of 8,783 adults found a 40% higher odds of vascular brain injury on MRI among the heaviest ultraprocessed food eaters." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ultraprocessed Foods and Brain MRI Findings | xAID" />
        <meta property="og:description" content="A JAMA Network Open study of 8,783 adults found a 40% higher odds of vascular brain injury on MRI among the heaviest ultraprocessed food eaters." />
        <meta property="og:url" content="https://xaid.ai/blog/ultraprocessed-food-brain-mri-findings" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ultraprocessed Foods and Brain MRI Findings | xAID" />
        <meta name="twitter:description" content="A JAMA Network Open study of 8,783 adults found a 40% higher odds of vascular brain injury on MRI among the heaviest ultraprocessed food eaters." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ultraprocessed-food-brain-mri-findings" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ultraprocessed-food-brain-mri-findings",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "ultraprocessed food brain MRI findings, vascular brain injury MRI, incidental findings radiology, white matter hyperintensities, covert brain infarcts, UPF and brain health"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new study find about ultraprocessed foods and the brain?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A JAMA Network Open study of 8,783 Canadian adults aged 35 to 69 with no history of cardiovascular disease found that those in the highest quartile of ultraprocessed food (UPF) intake had 40% higher adjusted odds of vascular brain injury on MRI — covert brain infarcts, high white matter hyperintensities, or both — compared to those in the lowest quartile (odds ratio 1.40, 95% CI 1.10-1.77). Vascular brain injury was present in 11.3% of the highest-UPF group versus 8.1% of the lowest."
              }
            },
            {
              "@type": "Question",
              "name": "How strong is the link between ultraprocessed food and vascular brain injury?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Statistically significant but not robust. The association held in the main analysis and in a continuous model (16% higher odds of vascular brain injury per 5 additional UPF servings per 2,000 kcal/day), but the authors report it was not consistent across sensitivity analyses — when ultraprocessed food intake was expressed as a percentage of total food servings or of total energy intake instead of servings per 2,000 kcal, the association with vascular brain injury was no longer statistically significant."
              }
            },
            {
              "@type": "Question",
              "name": "Did ultraprocessed food intake affect men and women differently?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. In women, the highest-UPF group had nearly double the adjusted odds of vascular brain injury versus the lowest-UPF group (odds ratio 1.78, 95% CI 1.27-2.48; P for trend = .002). In men, the same comparison showed no significant association (odds ratio 1.08, 95% CI 0.76-1.54; P for trend = .84). The sex difference itself was statistically significant (P for interaction = .04)."
              }
            },
            {
              "@type": "Question",
              "name": "Does the study prove ultraprocessed foods cause brain damage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The study is cross-sectional — diet and MRI findings were measured at a single point in time, using a food-frequency questionnaire reflecting the prior year — so it cannot establish that ultraprocessed food intake caused the brain changes, only that the two were associated after statistical adjustment. The authors explicitly note reverse causation and residual confounding remain possible, and ultraprocessed food intake was not associated with cognitive test scores in this population."
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
                Clinical Evidence
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Ultraprocessed food and brain MRI findings<br />
              <span className="text-white/60">a new incidental-finding signal to watch</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A JAMA Network Open study of nearly 9,000 adults ties heavy ultraprocessed food intake to higher odds of vascular brain injury visible on MRI — a lifestyle-linked biomarker that adds to the list of incidental findings radiologists will need consistent language for.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '8,783', label: 'Canadian adults studied', sub: 'ages 35–69, no baseline CVD' },
            { stat: '40%', label: 'Higher odds of vascular brain injury', sub: 'highest vs lowest UPF quartile' },
            { stat: '1.78x', label: "Women's odds in top quartile", sub: 'vs 1.08x (not significant) in men' },
            { stat: 'No link', label: 'to cognitive test scores', sub: 'MOCA and DSST, in this study' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers led by Russell J. de Souza at McMaster University's Population Health Research Institute analyzed <strong>8,783 Canadian adults</strong> aged 35 to 69 (mean age 57.7) with no history of cardiovascular disease, drawn from the CAHHM and PURE-MIND cohort studies. Participants completed a food-frequency questionnaire covering the prior year, and foods were classified by degree of industrial processing using the NOVA system. All participants underwent brain MRI, read by neurologists blinded to dietary data. The findings were published October 15, 2026 in <a href="https://doi.org/10.1001/jamanetworkopen.2026.39118" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Network Open</em></a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Participants were grouped into quartiles of ultraprocessed food (UPF) intake, from 3.1 servings per 2,000 kcal/day in the lowest quartile to 12.8 in the highest — on average, the heaviest consumers got <strong>42.2%</strong> of their daily calories from ultraprocessed foods. After adjusting for age, sex, ethnicity, income, education, physical activity, smoking, and cardiometabolic conditions, the highest-UPF group had <strong>40% higher adjusted odds</strong> of vascular brain injury (VBI) — a composite of covert brain infarcts, high white matter hyperintensity burden, or both — compared to the lowest group (odds ratio 1.40, 95% CI 1.10–1.77; P for trend = .009). VBI was present in <strong>11.3%</strong> of the highest-UPF quartile versus <strong>8.1%</strong> of the lowest.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The highest-UPF group also carried more adiposity: body fat percentage was <strong>1.7 percentage points</strong> higher (95% CI, 1.2–2.2) and visceral adipose tissue volume was <strong>5.7 mL</strong> greater (95% CI, 3.2–8.3) than the lowest-UPF group. Notably, ultraprocessed food intake was <strong>not</strong> associated with cognitive performance on either the Montreal Cognitive Assessment or the Digit Symbol Substitution Test in the primary analysis.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The numbers, side by side
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Comparing the lowest and highest quartiles of ultraprocessed food intake, adjusted for demographic and cardiometabolic covariates:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Measure</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Lowest UPF quartile</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Highest UPF quartile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">UPF servings / 2,000 kcal/day</td>
                      <td className="py-3 pr-4 text-[#444] font-light">3.1</td>
                      <td className="py-3 text-[#444] font-light">12.8</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Vascular brain injury prevalence</td>
                      <td className="py-3 pr-4 text-[#444] font-light">8.1%</td>
                      <td className="py-3 text-[#444] font-light">11.3%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Adjusted odds of VBI (vs. lowest)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">1.00 (ref)</td>
                      <td className="py-3 text-[#444] font-light">1.40 (95% CI 1.10–1.77)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Adjusted odds of VBI, women only</td>
                      <td className="py-3 pr-4 text-[#444] font-light">1.00 (ref)</td>
                      <td className="py-3 text-[#444] font-light">1.78 (95% CI 1.27–2.48)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Adjusted odds of VBI, men only</td>
                      <td className="py-3 pr-4 text-[#444] font-light">1.00 (ref)</td>
                      <td className="py-3 text-[#444] font-light">1.08 (95% CI 0.76–1.54, ns)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Cognitive test scores (MOCA/DSST)</td>
                      <td className="py-3 pr-4 text-[#444] font-light" colSpan={2}>No significant difference between quartiles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Source: <a href="https://doi.org/10.1001/jamanetworkopen.2026.39118" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">de Souza et al., JAMA Network Open (2026)</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The caveat that matters as much as the headline
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The authors themselves flag that the VBI association was <strong>not robust across sensitivity analyses</strong>. When ultraprocessed food intake was defined as a percentage of total daily food servings, or as a percentage of total energy intake, rather than servings per 2,000 kcal/day, the association with vascular brain injury was no longer statistically significant. The study is also cross-sectional — diet and MRI findings were captured at a single visit, using a food-frequency questionnaire covering the prior year, which cannot establish temporal sequence or rule out reverse causation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In other words: this is a real, published, peer-reviewed association in a large cohort — not a definitive causal claim. That distinction is exactly what radiologists and referring clinicians need to carry into how any related finding gets described, both to avoid overstating a single scan's significance and to avoid dismissing a signal that multiple independent groups are now converging on.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A new incidental-finding category, not a one-off headline
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                xAID has tracked this pattern across modalities before: an incidental finding only protects a patient if the report captures it consistently, every time, regardless of which radiologist is reading or how busy the worklist is. That's been true of an <Link to="/blog/incidental-renal-mass-ct-report/" className="text-xaid-blue-strong underline underline-offset-2">incidental renal mass on CT</Link>, a missed <Link to="/blog/incidental-findings-chest-ct-breast-lesions/" className="text-xaid-blue-strong underline underline-offset-2">breast lesion on chest CT</Link>, an <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="text-xaid-blue-strong underline underline-offset-2">incidental lung nodule</Link>, and breast arterial calcification that <Link to="/blog/incidental-findings-mammography-cardiac-risk/" className="text-xaid-blue-strong underline underline-offset-2">Maryland now requires flagging by law</Link>. Vertebral bone density read incidentally off a routine <Link to="/blog/chest-ct-vertebral-bone-density-brain-aging/" className="text-xaid-blue-strong underline underline-offset-2">chest CT has already been linked to brain aging</Link> in prior research.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                White matter hyperintensities and covert brain infarcts on brain MRI are not new findings — radiologists already describe them routinely. What this study adds is a lifestyle exposure, diet, as a candidate driver worth naming in the clinical context alongside the usual suspects (age, hypertension, smoking). As more studies test this link, reports that describe VBI findings with consistent severity language and point clearly to standard vascular risk follow-up will matter more, not less, especially given the medicolegal exposure that comes with an incidental finding described inconsistently across a large reading group.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's foundation models are built for CT, not brain MRI, so this specific finding sits outside what xAID reports on today. But the underlying problem generalizes: incidental findings get missed or described inconsistently when every radiologist phrases them differently under worklist pressure. xAID's structured, comprehensive report drafts are built to flag incidental findings the same way every time, with xAID's in-house radiologist reviewing every preliminary before it goes out ready-to-sign — so a finding like this doesn't depend on which radiologist happened to be reading that day.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new study find about ultraprocessed foods and the brain?',
                    a: 'A JAMA Network Open study of 8,783 Canadian adults aged 35 to 69 with no history of cardiovascular disease found that those in the highest quartile of ultraprocessed food (UPF) intake had 40% higher adjusted odds of vascular brain injury on MRI — covert brain infarcts, high white matter hyperintensities, or both — compared to those in the lowest quartile (odds ratio 1.40, 95% CI 1.10-1.77). Vascular brain injury was present in 11.3% of the highest-UPF group versus 8.1% of the lowest.',
                  },
                  {
                    q: 'How strong is the link between ultraprocessed food and vascular brain injury?',
                    a: 'Statistically significant but not robust. The association held in the main analysis and in a continuous model (16% higher odds of vascular brain injury per 5 additional UPF servings per 2,000 kcal/day), but the authors report it was not consistent across sensitivity analyses — when ultraprocessed food intake was expressed as a percentage of total food servings or of total energy intake instead of servings per 2,000 kcal, the association with vascular brain injury was no longer statistically significant.',
                  },
                  {
                    q: 'Did ultraprocessed food intake affect men and women differently?',
                    a: "Yes. In women, the highest-UPF group had nearly double the adjusted odds of vascular brain injury versus the lowest-UPF group (odds ratio 1.78, 95% CI 1.27-2.48; P for trend = .002). In men, the same comparison showed no significant association (odds ratio 1.08, 95% CI 0.76-1.54; P for trend = .84). The sex difference itself was statistically significant (P for interaction = .04).",
                  },
                  {
                    q: 'Does the study prove ultraprocessed foods cause brain damage?',
                    a: 'No. The study is cross-sectional — diet and MRI findings were measured at a single point in time, using a food-frequency questionnaire reflecting the prior year — so it cannot establish that ultraprocessed food intake caused the brain changes, only that the two were associated after statistical adjustment. The authors explicitly note reverse causation and residual confounding remain possible, and ultraprocessed food intake was not associated with cognitive test scores in this population.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: de Souza RJ, et al. "Ultraprocessed Food Intake and Adiposity, Vascular Brain Injury, and Cognition in Middle-Aged Adults." <em>JAMA Network Open</em>. 2026;9(10):e2639118. <a href="https://doi.org/10.1001/jamanetworkopen.2026.39118" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1001/jamanetworkopen.2026.39118</a>. As reported by <a href="https://radiologybusiness.com/topics/medical-imaging/magnetic-resonance-imaging-mri/mri-links-ultraprocessed-foods-vascular-brain-injury" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Consistent language for every incidental finding, every time"
          sub="See how xAID's structured, radiologist-reviewed CT reports flag incidental findings the same way across your whole reading group. Try it on 5 free studies."
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
              <Link to="/blog/incidental-findings-mammography-cardiac-risk/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Maryland Just Made an Incidental Finding a Legal Requirement</div>
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

export default UltraprocessedFoodBrainMriFindings;
