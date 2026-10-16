import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const PediatricRadiologyAiFdaLabelingGap = () => {
  const post = {
    title: 'Pediatric Radiology AI: Why Only 17% of Cleared Devices Are Labeled for Kids',
    dateIso: '2026-10-14',
    date: 'October 14, 2026',
    category: 'AI Technology',
    readingTime: 8,
    description: "Only 17% of FDA-authorized imaging AI devices are labeled for pediatric use, and most of those were never validated on pediatric data. A new domain-adaptation study offers one way to close the gap — but outpatient centers and community hospitals reading pediatric CT today have almost no labeled AI coverage.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Pediatric Radiology AI: The FDA Labeling Gap | xAID</title>
        <meta name="description" content="Only 17% of FDA-authorized imaging AI devices are labeled for pediatric use — what the gap means for centers and hospitals reading pediatric CT." />
        <link rel="canonical" href="https://xaid.ai/blog/pediatric-radiology-ai-fda-labeling-gap/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pediatric Radiology AI: The FDA Labeling Gap | xAID" />
        <meta property="og:description" content="Only 17% of FDA-authorized imaging AI devices are labeled for pediatric use — what the gap means for centers and hospitals reading pediatric CT." />
        <meta property="og:url" content="https://xaid.ai/blog/pediatric-radiology-ai-fda-labeling-gap" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pediatric Radiology AI: The FDA Labeling Gap | xAID" />
        <meta name="twitter:description" content="Only 17% of FDA-authorized imaging AI devices are labeled for pediatric use — what the gap means for centers and hospitals reading pediatric CT." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/pediatric-radiology-ai-fda-labeling-gap" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/pediatric-radiology-ai-fda-labeling-gap",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "pediatric radiology ai, pediatric radiology ai fda clearance, pediatric AI imaging, FDA pediatric AI labeling, adult AI models pediatric imaging, domain adaptation radiology AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What percentage of FDA-authorized AI imaging devices are labeled for pediatric use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 17%. A 2024 JAMA Pediatrics review of 876 FDA-authorized AI/ML-enabled medical devices found that only 149 (17.0%) were labeled for pediatric use, while a third were authorized for adults only and about half made no reference to pediatric use at all."
              }
            },
            {
              "@type": "Question",
              "name": "Does adult-trained radiology AI perform as well on children as on adults?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. A 2026 European Radiology scoping review of 20 studies found that adult-trained AI models lost accuracy on pediatric imaging in nearly every case, with the steepest drops in children under 2 years old — for example, pulmonary nodule detection sensitivity falling from roughly 95% in adults to about 53% in children in one study."
              }
            },
            {
              "@type": "Question",
              "name": "What is the new domain-adaptation method for pediatric imaging AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers at Harvard Medical School, publishing in Nature Biomedical Engineering in October 2026, used continual learning to adapt an adult endotracheal-tube-placement model for neonatal chest X-rays across 30 NICUs in 20 countries, with each hospital retraining the model locally so patient images never left the building. The adapted model's placement error fell to 0.67 cm, versus 1.29 cm for single-hospital fine-tuning and 4.30 cm for the unadapted adult model."
              }
            },
            {
              "@type": "Question",
              "name": "What does the pediatric AI labeling gap mean for outpatient imaging centers and community hospitals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most pediatric CT and chest-radiograph volume in the U.S. is read outside dedicated children's hospitals, in outpatient centers and community facilities whose AI-reporting tools are overwhelmingly validated on adults. Buyers evaluating an AI-reporting vendor for a site that reads any pediatric studies should ask specifically whether the model was validated on pediatric data, at what ages performance was tested, and how pediatric cases are flagged or routed if the vendor cannot answer that."
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
                AI Technology
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Only 17% of cleared imaging AI is labeled for kids.<br />
              <span className="text-white/60">Here's what that means for the sites that actually scan them.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new domain-adaptation study shows adult-trained AI models can be retrained for pediatric imaging without moving patient data off-site. But it also restates a gap most imaging buyers haven't priced in: the overwhelming majority of FDA-authorized AI, including most of what reads chest and abdominal CT, has never been labeled or validated for children.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '17%', label: 'FDA AI devices labeled for pediatric use', sub: 'of 876 reviewed, 2024' },
            { stat: '18.8%', label: 'Of those, validated on pediatric data', sub: 'the rest: adult-only or unreported' },
            { stat: '30 NICUs', label: 'Sites in the new adaptation study', sub: '20 countries, 2026' },
            { stat: '0.67 cm', label: 'Adapted-model placement error', sub: 'vs 4.30 cm for the unadapted adult model' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The labeling gap, in one dataset
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In December 2024, researchers from Boston Children's Hospital published a review of all 876 AI/machine-learning-enabled medical devices the FDA had authorized through early 2024, in <a href="https://doi.org/10.1001/jamapediatrics.2024.5437" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Pediatrics</em></a>. Only <strong>149 devices (17.0%)</strong> were labeled for pediatric use. Roughly a third (33.3%) were authorized for adults only, and about half (49.7%) carried a "silent" label that said nothing about pediatric use either way.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology dominates the devices that do carry a pediatric label — 119 of the 149 (79.9%), ahead of neurology (8.7%) and cardiovascular (6.7%). That tracks with radiology's share of AI/ML devices overall (76.1% of all 876). So the gap isn't a niche specialty problem; it sits squarely in imaging.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The labeling gap also understates a validation gap. Among the 149 devices labeled for pediatric use, only <strong>28 (18.8%)</strong> were actually validated on pediatric data. Another 22 (14.8%) were validated using adult data only, and for the remaining 99 (66.4%) the manufacturer didn't report whether pediatric patients were included in validation at all. A pediatric label, in other words, is not reliable proof that a model was ever tested on a child's anatomy.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What happens when an adult-trained model reads a child's scan
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A <a href="https://doi.org/10.1007/s00330-026-12354-5" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">scoping review published in <em>European Radiology</em></a> in February 2026 pulled together 20 studies testing adult-trained AI models — unmodified — against 16 pediatric imaging datasets ranging from 30 to 7,357 subjects, across radiography, CT, MRI, DEXA and ultrasound. Apart from two studies, every one reported a performance drop when the adult model was applied to children.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The degradation wasn't uniform, but it was consistent in direction. One deep-learning pulmonary nodule detector's sensitivity fell from 95.5% in adults to 53.1% in children. Lung-boundary segmentation accuracy dropped from 95.4% in adults to 36.8% in children under 2. Across organs and modalities, segmentation Dice scores fell by more than 0.10, and in children aged 0–2 some Dice scores ran as low as 0.07–0.65, against 0.80–0.92 in adults. A pneumonia classifier's AUC fell from 0.95 in adults to 0.82 in children. The pattern the reviewers flagged most: <strong>children 2 years old and younger consistently showed the largest deficits across every task type</strong> — detection, segmentation and classification alike.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this means adult-trained models are unusable for pediatric imaging. It means they can't be assumed to generalize, and the review's authors point to specific fixes that do measurably help: fine-tuning on pediatric-only data (reported Dice-score gains of 47–79%), adjusting detection thresholds by age and lesion type (one pneumothorax detector's sensitivity in children under 2 rose from 50% to 60% after retuning — a real gain, though still short of adult-level performance), and narrowing a tool's scope to exclude the youngest patients and highest-risk misses, which in one series lifted overall accuracy from 87.5% to 96.9%.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A domain-adaptation method tested across 30 NICUs in 20 countries
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The newest entry in this line of research, published in <a href="https://doi.org/10.1038/s41551-026-01812-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Nature Biomedical Engineering</em></a> on October 13, 2026 by Vishwanatha Rao, Pranav Rajpurkar and a multi-institution team based at Harvard Medical School, targets a specific obstacle: pediatric imaging data is scarce and hospitals are reasonably reluctant to pool it with outside institutions.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Their method — continual learning — passed a single deep-learning model, originally trained to assess endotracheal tube placement on adult chest X-rays, sequentially through 30 neonatal intensive care units in 20 countries and territories. Each site retrained the model on just 50 locally held neonatal chest radiographs (2,965 images in total) inside its own environment, then passed the updated model to the next hospital — no patient image ever left the building where it was taken.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The result: average tube-placement error fell to <strong>0.67 cm</strong> for the continually adapted model, versus <strong>1.29 cm</strong> for a model fine-tuned at a single hospital alone and <strong>4.30 cm</strong> for the original, unadapted adult model — an error margin large enough to miss a dangerously misplaced tube in a newborn. The adapted model beat the single-site approach at 29 of the 30 test sites, with improved detection of dangerously deep intubations at 27 of 30. The researchers frame the work against the same backdrop: fewer than one in five commercially available models are cleared for paediatric use — the same gap the JAMA Pediatrics data quantified two years earlier.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Comparing the adaptation approaches
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Method</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">What it does</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Reported effect</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Fine-tuning on pediatric data</td>
                      <td className="py-3 pr-4">Retrains an adult model on a pediatric-only dataset</td>
                      <td className="py-3">Dice-score gains of 47–79% (European Radiology, 2026)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Operating-point adjustment</td>
                      <td className="py-3 pr-4">Recalibrates detection thresholds by age and lesion type</td>
                      <td className="py-3">Pneumothorax sensitivity in children ≤2y: 50% → 60%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Selective scoping</td>
                      <td className="py-3 pr-4">Excludes youngest patients or highest-risk findings from automated reads</td>
                      <td className="py-3">Accuracy rose from 87.5% to 96.9% in one pediatric chest-radiograph series</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Continual learning (multi-site)</td>
                      <td className="py-3 pr-4">Adapts one model sequentially across hospitals; data stays local</td>
                      <td className="py-3">Tube-placement error: 4.30 cm → 0.67 cm (Nature Biomedical Engineering, 2026)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The buyer-side version of this problem
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most of the coverage of the pediatric AI gap is framed as a research or regulatory story. For an outpatient imaging center or community hospital, it's a procurement story. Dedicated children's hospitals read a small share of U.S. pediatric imaging volume — most pediatric chest and abdominal CT, and nearly all pediatric emergency imaging, is read in general radiology departments and outpatient centers that also serve adults. Those are exactly the sites an AI-reporting vendor is least likely to have validated for.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That creates a specific due-diligence question that most <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="text-xaid-blue-strong underline underline-offset-2">vendor evaluation checklists</Link> don't ask yet: not just "is this FDA-cleared," but "cleared and validated for which ages, and what happens to a pediatric study if the model wasn't trained for it." Given that two-thirds of pediatric-labeled devices don't report their pediatric validation status at all, "pediatric-labeled" alone isn't a sufficient answer — buyers reading any pediatric volume should ask the vendor directly, in writing, rather than infer it from the FDA label.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Three questions follow directly from the data above, for any site that reads even occasional pediatric studies:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Was the model validated on pediatric data — specifically, which ages?',
                    desc: "Performance deficits concentrate in children 2 and under. A vendor's adult-wide accuracy numbers say nothing about performance in that age band unless pediatric cases, broken out by age, were part of validation.",
                  },
                  {
                    title: 'How are pediatric studies flagged or routed?',
                    desc: 'If a model was not built or validated for pediatric imaging, the safer design routes pediatric studies to a different workflow or additional review rather than silently applying an adult-calibrated model.',
                  },
                  {
                    title: 'Is there a documented adaptation or generalizability plan?',
                    desc: 'The research above shows pediatric adaptation is solvable with fine-tuning, threshold recalibration, or multi-site continual learning. A vendor without any pediatric-specific plan is applying an adult-only tool to a population it was not built for.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's CT-reporting AI is built around the same principle the research above keeps landing on: a model's reported accuracy is only meaningful for the population it was actually built and tested on, and every report needs a qualified radiologist to catch what a model gets wrong. In practice that means xAID's in-house radiologist reviews every preliminary report before it reaches a client ready-to-sign — the same human-in-the-loop layer that a pediatric-unvalidated model needs most, not least.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What percentage of FDA-authorized AI imaging devices are labeled for pediatric use?',
                    a: 'About 17%. A 2024 JAMA Pediatrics review of 876 FDA-authorized AI/ML-enabled medical devices found that only 149 (17.0%) were labeled for pediatric use, while a third were authorized for adults only and about half made no reference to pediatric use at all.',
                  },
                  {
                    q: 'Does adult-trained radiology AI perform as well on children as on adults?',
                    a: 'No. A 2026 European Radiology scoping review of 20 studies found that adult-trained AI models lost accuracy on pediatric imaging in nearly every case, with the steepest drops in children under 2 years old — for example, pulmonary nodule detection sensitivity falling from roughly 95% in adults to about 53% in children in one study.',
                  },
                  {
                    q: 'What is the new domain-adaptation method for pediatric imaging AI?',
                    a: "Researchers at Harvard Medical School, publishing in Nature Biomedical Engineering in October 2026, used continual learning to adapt an adult endotracheal-tube-placement model for neonatal chest X-rays across 30 NICUs in 20 countries, with each hospital retraining the model locally so patient images never left the building. The adapted model's placement error fell to 0.67 cm, versus 1.29 cm for single-hospital fine-tuning and 4.30 cm for the unadapted adult model.",
                  },
                  {
                    q: 'What does the pediatric AI labeling gap mean for outpatient imaging centers and community hospitals?',
                    a: 'Most pediatric CT and chest-radiograph volume in the U.S. is read outside dedicated children\'s hospitals, in outpatient centers and community facilities whose AI-reporting tools are overwhelmingly validated on adults. Buyers evaluating an AI-reporting vendor for a site that reads any pediatric studies should ask specifically whether the model was validated on pediatric data, at what ages performance was tested, and how pediatric cases are flagged or routed if the vendor cannot answer that.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Brewster et al., "US FDA Approval of Pediatric Artificial Intelligence and Machine Learning–Enabled Medical Devices," <em>JAMA Pediatrics</em> (2024), <a href="https://doi.org/10.1001/jamapediatrics.2024.5437" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1001/jamapediatrics.2024.5437</a>. Laborie et al., "Performance of adult-trained artificial intelligence models in paediatric imaging—a scoping review," <em>European Radiology</em> (2026), <a href="https://doi.org/10.1007/s00330-026-12354-5" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1007/s00330-026-12354-5</a>. Rao, Rajpurkar et al., "Repurposing adult AI radiograph models for neonatal care through continual learning: an international multicentre study," <em>Nature Biomedical Engineering</em> (2026), <a href="https://doi.org/10.1038/s41551-026-01812-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1038/s41551-026-01812-6</a>, as covered by <a href="https://radiologybusiness.com/topics/artificial-intelligence/researchers-develop-way-adapting-adult-radiology-ai-models-pediatric-population" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A model is only as good as the population it was built for."
          sub="xAID's in-house radiologist reviews every preliminary report before your radiologist signs the final. Try it on 5 free studies."
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
              <Link to="/blog/radiology-ai-vendor-evaluation-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guide</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiology AI Vendor Evaluation Checklist</div>
              </Link>
              <Link to="/blog/fda-ai-guidance-priorities-2027/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Regulatory &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">FDA's FY2027 AI Guidance Priorities for Imaging Buyers</div>
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

export default PediatricRadiologyAiFdaLabelingGap;
