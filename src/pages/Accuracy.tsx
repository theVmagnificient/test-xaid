import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const evidenceStats = [
  {
    stat: '92.2%',
    label: 'AI sensitivity across 9 pathology categories',
    context: 'vs. 58.3% without AI assistance',
    source: 'Pol Radiol, 2025',
  },
  {
    stat: '95.6%',
    label: 'AI specificity in emergency chest CT',
    context: 'vs. 80.6% without AI assistance',
    source: 'Pol Radiol, 2025',
  },
  {
    stat: '94.9%',
    label: 'Radiologists approved AI report elements for clinical integration',
    context: 'Multi-center European study, 4 countries',
    source: 'ResearchGate, 2025',
  },
  {
    stat: '0.86',
    label: 'Macro F1 score across clinically relevant pathologies',
    context: 'Foundation model performance',
    source: 'xAID technical evaluation',
  },
];

const howAccuracyWorks = [
  {
    step: '1',
    title: 'Foundation model analysis',
    desc: 'A Swin transformer-based foundation model trained on clinical CT data analyzes the study. Input resolution up to 256³ voxels — capturing fine-grained anatomical detail',
  },
  {
    step: '2',
    title: 'Secondary AI verification',
    desc: 'A second AI layer independently reviews the findings. Divergences between layers are flagged for radiologist attention',
  },
  {
    step: '3',
    title: 'Radiologist review',
    desc: 'Every report is reviewed by a European radiologist before delivery. AI-assisted, not autonomous',
  },
  {
    step: '4',
    title: '95% accuracy — verified',
    desc: '95% accuracy verified by peer-reviewed studies. Every report is reviewed by a radiologist before delivery',
  },
];

const Accuracy = () => {
  return (
    <>
      <Helmet>
        <title>AI Radiology Accuracy — Clinical Evidence & Quality Guarantee | xAID</title>
        <meta
          name="description"
          content="How accurate is AI CT reporting? xAID achieved 92.2% sensitivity vs 58.3% for unaided radiologists in published research. 94.9% clinician approval in multi-center European study. 95% accuracy verified by peer-reviewed studies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Radiology Accuracy — Clinical Evidence | xAID" />
        <meta property="og:description" content="xAID CT reporting accuracy: 92.2% sensitivity, 94.9% clinician approval in published studies. 95% accuracy verified by peer-reviewed studies." />
        <meta property="og:url" content="https://xaid.ai/accuracy" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Radiology Accuracy — Clinical Evidence | xAID" />
        <meta name="twitter:description" content="xAID CT reporting accuracy: 92.2% sensitivity, 94.9% clinician approval. 95% accuracy verified." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Accuracy & clinical evidence", "item": "https://xaid.ai/accuracy" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How accurate is AI CT reporting compared to radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a clinical study published in Polish Radiology (Pol Radiol, 2025), xAID Chest CT achieved 92.2% pooled sensitivity and 95.6% specificity across 9 pathology categories — compared to 58.3% sensitivity and 80.6% specificity for radiologists reviewing scans without AI assistance. AI outperformed radiologists in detecting coronary calcifications, pulmonary artery dilatation, and vertebral fractures."
              }
            },
            {
              "@type": "Question",
              "name": "What accuracy does xAID achieve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID achieves 95% accuracy verified by peer-reviewed studies. In a published study in Polish Radiology (2025), xAID achieved 92.2% sensitivity and 95.6% specificity — and 94.9% of radiologists approved AI-generated report elements in a multi-center European study."
              }
            },
            {
              "@type": "Question",
              "name": "Does xAID use radiologist review on every report?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Every xAID report is reviewed by a European radiologist before delivery. xAID is AI-assisted, not autonomous — the radiologist is professionally accountable for the final report."
              }
            },
            {
              "@type": "Question",
              "name": "What clinical studies support xAID's accuracy claims?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Two key studies: (1) A retrospective single-center study published in Polish Radiology (Pol Radiol, 2025) evaluated 90 unenhanced chest CT scans and found xAID achieved 92.2% sensitivity vs 58.3% without AI. (2) A multi-center retrospective clinical utility assessment across European centers found 94.9% of radiologists approved xAID-generated structured report elements for clinical integration."
              }
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid text-center">
            <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Accuracy & clinical evidence</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              How accurate is<br />
              <span className="text-white/60">AI CT reporting?</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65] max-w-2xl mx-auto mb-10">
              Published clinical studies and independent evaluations. Here's the evidence behind xAID's accuracy
            </p>
          </div>
        </section>

        {/* Evidence stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {evidenceStats.map((item) => (
                <div key={item.stat} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex flex-col h-full">
                  <div className="text-4xl font-medium text-xaid-blue mb-2">{item.stat}</div>
                  <div className="text-white text-sm font-medium mb-2 leading-snug">{item.label}</div>
                  <div className="text-white/40 text-xs leading-snug mb-2 flex-1">{item.context}</div>
                  <div className="text-white/30 text-xs italic">{item.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Published studies */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16">
              <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D0D0D] mb-12 text-center">
                Published clinical evidence
              </h2>

              <div className="space-y-10">
                {/* Study 1 */}
                <div className="border-b border-gray-100 pb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-xaid-blue/10 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">Peer-Reviewed Study</span>
                    <span className="text-[#999] text-sm">Polish Radiology (Pol Radiol), 2025</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#0D0D0D] mb-4">
                    AI assistance in unenhanced chest CT: emergency setting evaluation
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6">
                    A retrospective single-center study evaluated xAID Chest CT on 90 unenhanced chest CT scans in an emergency radiology setting. Pathologies assessed included lung nodules, opacifications, coronary calcification, aortic and pulmonary measurements, pleural and pericardial effusions, pneumothorax, and rib and vertebral fractures
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { metric: '92.2%', label: 'AI sensitivity', sub: 'vs. 58.3% unaided' },
                      { metric: '95.6%', label: 'AI specificity', sub: 'vs. 80.6% unaided' },
                      { metric: '90', label: 'CT scans', sub: 'evaluated' },
                      { metric: '9', label: 'Pathology categories', sub: 'assessed' },
                    ].map((d) => (
                      <div key={d.metric} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-medium text-xaid-blue mb-1">{d.metric}</div>
                        <div className="text-[#0D0D0D] text-sm font-medium">{d.label}</div>
                        <div className="text-[#999] text-xs mt-1">{d.sub}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#999] text-sm mt-4">
                    AI outperformed radiologists in detection of coronary artery calcifications, pulmonary artery dilatation, and vertebral fractures
                  </p>
                </div>

                {/* Study 2 */}
                <div className="border-b border-gray-100 pb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-xaid-blue/10 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">Multi-Center Study</span>
                    <span className="text-[#999] text-sm">ResearchGate, 2025 — 4 European centers</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#0D0D0D] mb-4">
                    xAID chest CT: retrospective clinical utility assessment
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6">
                    A multi-center retrospective clinical utility assessment conducted across four European radiology centers (France, Greece, Slovakia, United Kingdom) evaluated xAID on 81 non-contrast chest CT cases with four board-certified radiologists
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { metric: '94.9%', label: 'Clinician approval', sub: 'for clinical integration' },
                      { metric: '89.7%', label: 'Image layout approval', sub: 'across centers' },
                      { metric: '81.5%', label: 'Diagnostic contribution', sub: 'of AI segmentation' },
                      { metric: '4', label: 'European countries', sub: 'France, Greece, Slovakia, UK' },
                    ].map((d) => (
                      <div key={d.metric} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-medium text-xaid-blue mb-1">{d.metric}</div>
                        <div className="text-[#0D0D0D] text-sm font-medium">{d.label}</div>
                        <div className="text-[#999] text-xs mt-1">{d.sub}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#999] text-sm mt-4">
                    94.9% of radiologists agreed AI-generated structured report elements could be integrated into clinical practice with minor modifications
                  </p>
                </div>

                {/* Foundation model */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-xaid-blue/10 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">Technical Evaluation</span>
                    <span className="text-[#999] text-sm">xAID Foundation Model</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#0D0D0D] mb-4">
                    Foundation model performance
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6">
                    xAID's core AI is a Swin transformer-based foundation model trained on large-scale clinical CT data. Input resolution up to 256³ voxels captures fine-grained anatomical structure across head, chest, and abdomen
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { metric: '0.86', label: 'Macro F1 score', sub: 'clinically relevant pathologies' },
                      { metric: '100+', label: 'Findings analyzed', sub: 'per CT report' },
                      { metric: '256³', label: 'Input resolution', sub: 'voxel-level analysis' },
                    ].map((d) => (
                      <div key={d.metric} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-medium text-xaid-blue mb-1">{d.metric}</div>
                        <div className="text-[#0D0D0D] text-sm font-medium">{d.label}</div>
                        <div className="text-[#999] text-xs mt-1">{d.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How accuracy works */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white text-center mb-4">
              How xAID ensures report quality
            </h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">
              Multiple layers of verification — AI and human — before any report is delivered
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howAccuracyWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-xaid-blue/20 border border-xaid-blue/40 flex items-center justify-center text-xaid-blue font-medium text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-white/60 text-[15px] leading-[1.65] font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The guarantee */}
        <section className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto text-center">
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                95% Accuracy — Verified
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                xAID achieves 95% accuracy verified by peer-reviewed studies. Published clinical evidence from independent research institutions confirms the accuracy of AI-assisted CT reporting with radiologist review
              </p>
              <p className="text-[#999] text-[15px] leading-[1.65] font-light mb-8">
                Two independent peer-reviewed studies validate xAID's accuracy claims. Traditional teleradiology and narrow AI overlays offer no equivalent published clinical evidence
              </p>
              <Link
                to="/#contact-us"
                className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
              >
                Start a free 5-study pilot
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-xaid">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-10 text-center">Accuracy questions</h2>
            <FAQAccordion
              variant="dark"
              faqs={[
                {
                  q: 'How accurate is AI CT reporting compared to a radiologist?',
                  a: 'In a peer-reviewed study published in Polish Radiology (2025), xAID achieved 92.2% pooled sensitivity and 95.6% specificity across 9 pathology categories in emergency chest CT — compared to 58.3% and 80.6% respectively for radiologists reviewing scans without AI assistance',
                },
                {
                  q: 'Does AI CT reporting have a higher error rate than traditional radiology?',
                  a: 'Published evidence suggests AI-assisted reading reduces missed findings rather than increasing them. In the Polish Radiology study, AI outperformed unaided radiologists in detecting coronary calcifications, pulmonary artery dilatation, and vertebral fractures. Every xAID report also receives radiologist review before delivery',
                },
                {
                  q: 'What accuracy does xAID achieve and how is it verified?',
                  a: 'xAID achieves 95% accuracy verified by peer-reviewed studies. In a published study in Polish Radiology (2025), xAID achieved 92.2% sensitivity and 95.6% specificity. A separate multi-center European study found 94.9% of radiologists approved AI-generated report elements for clinical use',
                },
                {
                  q: 'What AI architecture does xAID use?',
                  a: 'xAID\'s core model is a Swin transformer-based foundation model with input resolution up to 256³ voxels. A second AI verification layer independently reviews findings before radiologist sign-off. The combined approach achieves a macro F1 score of 0.86 across clinically relevant pathologies',
                },
                {
                  q: 'Are these accuracy figures from independent studies?',
                  a: 'Yes. The sensitivity/specificity figures come from a single-center retrospective study published in Polish Radiology (an independent peer-reviewed journal). The clinical utility data comes from a multi-center study across four European radiology centers. Neither was conducted by xAID internally',
                },
              ]}
            />
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog/how-accurate-is-ai-radiology-reporting" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Blog</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How accurate is AI radiology? Published evidence deep dive</div>
              </Link>
              <Link to="/how-ai-ct-reporting-works" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">How it works</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI CT reporting works — 5-step workflow</div>
              </Link>
              <Link to="/compliance" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Compliance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">HIPAA, ISO 27001 & BAA — full compliance details</div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Accuracy;
