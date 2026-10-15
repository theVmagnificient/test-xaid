import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyAiGeneralizabilityPediatricPopulation = () => {
  const post = {
    title: 'Radiology AI Generalizability: What "Validated Accuracy" Misses for Pediatric Patients',
    dateIso: '2026-10-15',
    date: 'October 15, 2026',
    category: 'Clinical Evidence',
    readingTime: 8,
    description: 'Only 17% of FDA-authorized imaging AI is labeled for children, and most of those devices were never tested on pediatric data. A new adaptation study shows why an aggregate accuracy number is not proof a model works on every patient population.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology AI Generalizability: The Pediatric Gap | xAID</title>
        <meta name="description" content="Only 17% of FDA-authorized imaging AI is labeled for pediatric use. What the generalizability research means for buyers evaluating 'validated accuracy' claims." />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-ai-generalizability-pediatric-population/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology AI Generalizability: The Pediatric Gap | xAID" />
        <meta property="og:description" content="Only 17% of FDA-authorized imaging AI is labeled for pediatric use. What the generalizability research means for buyers evaluating 'validated accuracy' claims." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-ai-generalizability-pediatric-population" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology AI Generalizability: The Pediatric Gap | xAID" />
        <meta name="twitter:description" content="Only 17% of FDA-authorized imaging AI is labeled for pediatric use. What the generalizability research means for buyers evaluating 'validated accuracy' claims." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-ai-generalizability-pediatric-population" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-ai-generalizability-pediatric-population",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology ai generalizability pediatric, pediatric radiology ai validation, AI model population match, adult-trained AI pediatric imaging, radiology AI evidence gap"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does generalizability mean for radiology AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generalizability is whether a model's reported accuracy holds up on patients who look different from its training and validation set — different age, anatomy, scanner, or disease prevalence. An aggregate accuracy figure, like an AUC measured mostly on adults, does not guarantee the same performance on a subgroup such as children unless that subgroup was specifically included in validation."
              }
            },
            {
              "@type": "Question",
              "name": "What percentage of FDA-authorized radiology AI is validated for pediatric patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2024 JAMA Pediatrics review of 876 FDA-authorized AI/ML-enabled medical devices found only 149 (17.0%) were labeled for pediatric use. Of those 149, just 28 (18.8%) reported validation on pediatric data; 22 (14.8%) were validated on adult data only, and 99 (66.4%) did not report whether pediatric patients were included in validation at all."
              }
            },
            {
              "@type": "Question",
              "name": "How much worse do adult-trained AI models perform on pediatric imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 European Radiology scoping review of 20 studies found adult-trained models lost accuracy on pediatric imaging in nearly every case, worst in children 2 years old and younger. Examples cited include a pulmonary nodule detector's sensitivity falling from about 95% in adults to about 53% in children, and a pneumonia classifier's AUC dropping from 0.95 to 0.82."
              }
            },
            {
              "@type": "Question",
              "name": "How can adult radiology AI models be adapted for pediatric populations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Researchers publishing in Nature Biomedical Engineering in October 2026 used continual learning to pass one adult endotracheal-tube model sequentially through 30 neonatal intensive care units in 20 countries, retraining it locally at each site without moving patient images. The adapted model's placement error fell to 0.67 cm, versus 1.29 cm for single-hospital fine-tuning and 4.30 cm for the unadapted adult model, beating the single-site approach at 29 of 30 sites."
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
              An aggregate accuracy number isn't proof of generalizability.<br />
              <span className="text-white/60">Pediatric imaging shows exactly why.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Most radiology AI marketing leads with a single accuracy or AUC figure. A new study on adapting adult AI models for neonatal care is a useful reminder that a number like that describes the population it was measured on — and for children, that population is almost always missing.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '17%', label: 'FDA imaging AI labeled for pediatric use', sub: 'of 876 devices, 2024' },
            { stat: '18.8%', label: 'Of those, validated on pediatric data', sub: 'two-thirds don’t report it' },
            { stat: '95% → 53%', label: 'Nodule-detection sensitivity drop', sub: 'adults vs. children, one study' },
            { stat: '0.67 cm', label: 'Adapted-model placement error', sub: 'vs 4.30 cm for the adult model' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What "validated accuracy" usually leaves out
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                When an imaging AI vendor cites an accuracy figure, sensitivity, or AUC, that number is a summary statistic over whatever population the model was tested on. If that population skews heavily toward adults — which most clinical imaging datasets do — the number says very little about how the model performs on patients who look different: children, in particular, but the same logic applies to any under-represented subgroup. Generalizability is the question of whether a model's reported performance actually transfers to a population it wasn't built or tested on. Pediatric imaging is the clearest, best-documented case of that question failing.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's not an abstract concern. It shows up in FDA authorization data, in peer-reviewed accuracy studies, and in a just-published multinational study that tried to fix it directly.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The population-match gap, in one dataset
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In December 2024, researchers from Boston Children's Hospital published a review of all 876 AI/machine-learning-enabled medical devices the FDA had authorized through early 2024, in <a href="https://doi.org/10.1001/jamapediatrics.2024.5437" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Pediatrics</em></a>. Only <strong>149 devices (17.0%)</strong> were labeled for pediatric use. About a third (33.3%) were authorized for adults only, and roughly half (49.7%) were silent on pediatric use in either direction.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Radiology accounts for the large majority of the devices that do carry a pediatric label — 119 of the 149 (79.9%). That tracks with radiology's share of authorized AI/ML devices generally, so this isn't a niche specialty issue; it sits inside the exact category most imaging buyers are evaluating.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The more important number sits one layer deeper. Among the 149 pediatric-labeled devices, only <strong>28 (18.8%)</strong> reported validation on actual pediatric data. Another 22 (14.8%) were validated using adult data only, and for 99 (66.4%) the manufacturer did not report whether pediatric patients were part of validation at all. A pediatric label on a device is not reliable evidence that the model was ever tested against a child's anatomy — which is the entire point of a generalizability check: the label tells you the claimed scope, not the tested scope.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What happens when the population actually shifts
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A <a href="https://doi.org/10.1007/s00330-026-12354-5" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">scoping review published in <em>European Radiology</em></a> in February 2026 pulled together 20 studies that tested adult-trained AI models, unmodified, against 16 pediatric imaging datasets ranging from 30 to 7,357 subjects, across radiography, CT, MRI, DEXA, and ultrasound. With two exceptions, every study reported a measurable performance drop once the model met pediatric images.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The drops weren't uniform, but the direction was consistent. One pulmonary nodule detector's sensitivity fell from <strong>95.5%</strong> in adults to <strong>53.1%</strong> in children. Lung-boundary segmentation overlap (Dice score) dropped from 95.4% in adults to 36.8% in children under 2. A pneumonia classifier's AUC — the kind of single summary number most vendor claims lean on — fell from <strong>0.95</strong> in adults to <strong>0.82</strong> in children. Across tasks, the reviewers flagged one pattern above all others: <strong>children aged 2 and under showed the steepest deficits</strong>, regardless of whether the task was detection, segmentation, or classification.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this means adult-trained models can't work for pediatric imaging — it means they can't be assumed to. The same review pointed to fixes that measurably help: fine-tuning on pediatric-only data (reported Dice-score gains of 47–79%), recalibrating detection thresholds by age (one pneumothorax detector's sensitivity in children under 2 rose from 50% to 60% after retuning), and narrowing a tool's scope to exclude the youngest or highest-risk patients, which in one series lifted overall accuracy from 87.5% to 96.9%.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A working fix, tested across 30 NICUs in 20 countries
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The newest entry in this research line, published in <a href="https://doi.org/10.1038/s41551-026-01812-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Nature Biomedical Engineering</em></a> on October 13, 2026 by Vishwanatha Rao, Pranav Rajpurkar, and a multi-institution team based at Harvard Medical School, tackles the structural reason the gap persists: pediatric imaging data is scarce at any single site, and hospitals have good reasons not to pool it externally.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Their method — continual learning — passed a single deep-learning model, originally trained to assess endotracheal tube placement on adult chest X-rays, sequentially through 30 neonatal intensive care units across 20 countries and territories. Each site retrained the model on just 50 locally held neonatal chest radiographs (2,965 images in total) inside its own environment, then handed the updated model to the next hospital. No patient image left the building where it was taken, addressing the privacy barrier that keeps pediatric datasets fragmented in the first place.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The result: average tube-placement error fell to <strong>0.67 cm</strong> for the continually adapted model, versus <strong>1.29 cm</strong> for a model fine-tuned at a single hospital alone, and <strong>4.30 cm</strong> for the original, unadapted adult model — a margin wide enough to miss a dangerously misplaced tube in a newborn. The adapted model beat the single-site approach at 29 of the 30 test sites, with better detection of dangerously deep intubations at 27 of 30. One of the researchers summarized the underlying test directly: the model was evaluated on a hospital it had never seen before, and it still outperformed a model trained only on that hospital's own scans — the practical definition of generalizing across a population shift rather than overfitting to one site.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Comparing the adaptation approaches
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Approach</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">How it closes the gap</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Reported effect</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Fine-tuning on pediatric data</td>
                      <td className="py-3 pr-4">Retrains the adult model on a pediatric-only dataset</td>
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
                      <td className="py-3">Accuracy rose from 87.5% to 96.9% in one pediatric series</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Continual learning (multi-site)</td>
                      <td className="py-3 pr-4">Adapts one model sequentially across hospitals; data never leaves the site</td>
                      <td className="py-3">Tube-placement error: 4.30 cm → 0.67 cm (Nature Biomedical Engineering, 2026)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The diligence question an aggregate number can't answer
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For any buyer evaluating a CT-reporting or imaging AI vendor — not just sites that read pediatric volume — the research above argues for a specific habit: treat a headline accuracy or AUC figure as a claim about one population, not a universal property of the model. The generalizability question is "validated on whom, specifically," not just "how accurate."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Pediatric imaging makes the stakes concrete because most pediatric CT and chest-radiograph volume in the U.S. isn't read at dedicated children's hospitals — it's read in general outpatient centers and community hospitals that also serve adults, exactly the sites least likely to have been part of a vendor's validation set. Given that two-thirds of pediatric-labeled devices don't even report their pediatric validation status, a buyer can't infer the answer from the FDA label alone; it has to be asked directly, in writing.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Three questions follow directly from the data above:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'What subgroup was the accuracy number measured on?',
                    desc: 'An aggregate AUC or sensitivity figure should come with the population breakdown behind it — age range, case mix, scanner types. Without that, the number is unverifiable for any specific site’s patient population.',
                  },
                  {
                    title: 'Were pediatric cases included in validation, and at what ages?',
                    desc: 'Performance deficits concentrate in children 2 and under. A vendor’s adult-wide accuracy says nothing about that age band unless pediatric cases, broken out by age, were part of validation.',
                  },
                  {
                    title: 'Is there a documented plan for populations outside the training set?',
                    desc: 'The research above shows the generalizability gap is solvable — fine-tuning, threshold recalibration, or multi-site continual learning all measurably help. A vendor without any such plan is applying one model to every population it encounters.',
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
                xAID's CT-reporting AI is built around the same principle this research keeps demonstrating: a model's reported accuracy is only meaningful for the population it was actually built and tested on, and no single aggregate number should be taken on faith. That's also why a radiologist stays in the loop on every report — xAID's in-house radiologist reviews each preliminary before it reaches a client ready-to-sign, which is precisely the layer that matters most for any case that falls outside a model's validated population, pediatric or otherwise.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What does generalizability mean for radiology AI?',
                    a: "Generalizability is whether a model's reported accuracy holds up on patients who look different from its training and validation set — different age, anatomy, scanner, or disease prevalence. An aggregate accuracy figure, like an AUC measured mostly on adults, does not guarantee the same performance on a subgroup such as children unless that subgroup was specifically included in validation.",
                  },
                  {
                    q: 'What percentage of FDA-authorized radiology AI is validated for pediatric patients?',
                    a: 'A 2024 JAMA Pediatrics review of 876 FDA-authorized AI/ML-enabled medical devices found only 149 (17.0%) were labeled for pediatric use. Of those 149, just 28 (18.8%) reported validation on pediatric data; 22 (14.8%) were validated on adult data only, and 99 (66.4%) did not report whether pediatric patients were included in validation at all.',
                  },
                  {
                    q: 'How much worse do adult-trained AI models perform on pediatric imaging?',
                    a: "A 2026 European Radiology scoping review of 20 studies found adult-trained models lost accuracy on pediatric imaging in nearly every case, worst in children 2 years old and younger. Examples cited include a pulmonary nodule detector's sensitivity falling from about 95% in adults to about 53% in children, and a pneumonia classifier's AUC dropping from 0.95 to 0.82.",
                  },
                  {
                    q: 'How can adult radiology AI models be adapted for pediatric populations?',
                    a: "Researchers publishing in Nature Biomedical Engineering in October 2026 used continual learning to pass one adult endotracheal-tube model sequentially through 30 neonatal intensive care units in 20 countries, retraining it locally at each site without moving patient images. The adapted model's placement error fell to 0.67 cm, versus 1.29 cm for single-hospital fine-tuning and 4.30 cm for the unadapted adult model, beating the single-site approach at 29 of 30 sites.",
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
          heading="A model is only as good as the population it was tested on."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/radiology-ai-clinical-outcomes-evidence-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI and Clinical Outcomes: The Evidence Gap</div>
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

export default RadiologyAiGeneralizabilityPediatricPopulation;
