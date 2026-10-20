import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const ContrastEnhancedMammographyPatientTrust = () => {
  const post = {
    title: 'Nearly All Breast Cancer Survivors Would Recommend Contrast-Enhanced Mammography — What That Says About Patient Trust',
    dateIso: '2026-10-20',
    date: 'October 20, 2026',
    category: 'Patient Experience',
    readingTime: 6,
    description: "In a 936-patient study, 99.6% of breast cancer survivors said they'd recommend contrast-enhanced mammography, and 96.2% were satisfied overall — even though nearly half reported real pre-exam anxiety. The lesson for AI in imaging: informed patients tolerate discomfort and new technology when it's explained well.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Contrast-Enhanced Mammography: Patient Experience | xAID</title>
        <meta name="description" content="99.6% of breast cancer survivors in a 936-patient study would recommend contrast-enhanced mammography. What the data means for disclosing AI in imaging." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contrast-Enhanced Mammography: Patient Experience | xAID" />
        <meta property="og:description" content="99.6% of breast cancer survivors in a 936-patient study would recommend contrast-enhanced mammography. What the data means for disclosing AI in imaging." />
        <meta property="og:url" content="https://xaid.ai/blog/contrast-enhanced-mammography-patient-trust/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contrast-Enhanced Mammography: Patient Experience | xAID" />
        <meta name="twitter:description" content="99.6% of breast cancer survivors in a 936-patient study would recommend contrast-enhanced mammography. What the data means for disclosing AI in imaging." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/contrast-enhanced-mammography-patient-trust/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/contrast-enhanced-mammography-patient-trust/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "contrast-enhanced mammography patient experience, breast cancer surveillance imaging, patient trust medical imaging, AI disclosure radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What percentage of breast cancer survivors would recommend contrast-enhanced mammography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the COMBO trial, a prospective study of 936 breast cancer survivors (from 969 eligible women) undergoing contrast-enhanced mammography for post-surgical surveillance between January 2023 and February 2025, 99.6% said they would recommend the exam to others, and 96.2% reported overall satisfaction."
              }
            },
            {
              "@type": "Question",
              "name": "Is contrast-enhanced mammography more uncomfortable than standard mammography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most patients rated it comparable. In the COMBO trial, 67.4% found discomfort similar to prior digital mammography, 77.4% rated pain comparable, 76.6% found positioning similar, and 64.3% rated exam duration as comparable — despite the added contrast injection step."
              }
            },
            {
              "@type": "Question",
              "name": "Did pre-exam anxiety affect how patients experienced contrast-enhanced mammography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, but it didn't change their willingness to have the exam. 46.3% of participants reported moderate-to-high pre-examination anxiety, and higher anxiety was significantly associated with greater perceived discomfort, pain, and lower satisfaction. Even so, the researchers found anxiety did not reduce patients' willingness to undergo contrast-enhanced mammography."
              }
            },
            {
              "@type": "Question",
              "name": "What does patient trust in contrast-enhanced mammography suggest about disclosing AI in imaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The COMBO trial shows patients tolerate an added step — a contrast injection, more time, more procedure — at very high acceptance rates when they understand why it's being done and what it adds. The same logic supports disclosing AI involvement in reporting rather than treating it as a detail to bury: separate survey data on AI in imaging has found patients overwhelmingly want to be told when AI is used, provided a radiologist remains accountable for the final report."
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
                Patient Experience
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Nearly all breast cancer survivors would recommend contrast-enhanced mammography<br />
              <span className="text-white/60">What the patient-trust data actually shows</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A 936-patient study found almost universal willingness to recommend an imaging exam that takes longer, requires a contrast injection, and made nearly half of patients anxious beforehand. The pattern underneath the numbers has implications well beyond mammography.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '99.6%', label: 'Would recommend the exam', sub: 'to other patients' },
            { stat: '96.2%', label: 'Reported overall satisfaction', sub: '900 of 936 surveyed' },
            { stat: '46.3%', label: 'Had moderate-to-high anxiety', sub: 'before the exam, still went through' },
            { stat: '936', label: 'Breast cancer survivors studied', sub: 'Jan 2023 – Feb 2025' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study measured
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The <a href="https://doi.org/10.1186/s13244-026-02434-x" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">COMBO trial</a>, led by Giulia Vatteroni and colleagues at IRCCS Humanitas Research Hospital in Milan and published in <em>Insights into Imaging</em>, followed breast cancer survivors who received contrast-enhanced mammography (CEM) instead of standard digital mammography for routine post-surgical surveillance between January 2023 and February 2025. Of 969 eligible women, 936 completed an anonymous 16-question survey about discomfort, pain, exam duration, anxiety, and satisfaction immediately after the exam — a 96.6% response rate in its own right, and a mean participant age of 58.2.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                CEM adds a step standard mammography doesn't have: an iodinated contrast injection, plus extra imaging time. That's a reasonable setup for patients to report more discomfort than they're used to. They largely didn't. <strong>99.6%</strong> said they would recommend CEM to others, and <strong>96.2%</strong> (900 of 936) reported overall satisfaction, as covered by <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/nearly-all-breast-cancer-survivors-would-recommend-contrast-enhanced-mammography" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Comparable discomfort, not zero discomfort
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The more interesting numbers sit underneath the headline. When asked to compare CEM with their prior digital mammograms, <strong>67.4%</strong> rated discomfort as similar, <strong>77.4%</strong> rated pain as comparable, <strong>76.6%</strong> found positioning similar, and <strong>64.3%</strong> rated the longer exam duration as comparable. None of those numbers are 100% — roughly a quarter to a third of patients did notice the exam was harder in some way. They recommended it anyway.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Anxiety tells a similar story. <strong>46.3%</strong> of participants reported moderate-to-high anxiety before the exam, and the researchers found that higher anxiety was significantly associated with greater perceived discomfort, pain, and lower satisfaction. But — and this is the detail worth sitting with — the authors reported that anxiety did not reduce patients' willingness to undergo CEM. Patients who were nervous beforehand still rated the exam as worth recommending afterward.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Measure</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Would recommend CEM to others', '99.6%'],
                      ['Overall satisfaction', '96.2% (900/936)'],
                      ['Discomfort comparable to prior mammogram', '67.4%'],
                      ['Pain comparable to prior mammogram', '77.4%'],
                      ['Positioning comparable to prior mammogram', '76.6%'],
                      ['Exam duration comparable to prior mammogram', '64.3%'],
                      ['Moderate-to-high pre-exam anxiety', '46.3%'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The pattern: explained technology earns tolerance
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Pull back from mammography specifically and the shape of the finding is bigger than one exam. Patients in the COMBO trial accepted a procedure that was objectively more involved — contrast injection, longer time, a real anxiety response in nearly half of them — and still endorsed it at a rate that's effectively unanimous. What makes that tolerable is context: survivors already knew why CEM was being used (closer surveillance after a breast cancer diagnosis), and the exam was explained to them as part of their care, not sprung on them.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That same pattern shows up in research on AI disclosure in imaging. A separate 2026 survey of more than 1,000 imaging patients, published in RSNA's <a href="https://pubs.rsna.org/journal/radiology" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology</em></a>, found that about 96% wanted to be told when AI was used to help read their scan, and more patients preferred that disclosure documented in writing than preferred it given verbally — detail covered in <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="text-xaid-blue-strong underline underline-offset-2">xAID's earlier look at that data</Link>. Patients in both studies aren't resistant to more technology in their care. They're responsive to whether it's explained and whether a clinician stays accountable for the result.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The lesson generalizes past breast imaging: transparency, not concealment, is what earns patient trust in new imaging technology. That principle is exactly why AI-assisted CT reporting should be disclosed rather than treated as invisible back-office tooling — the model AI draft, radiologist-reviewed, ready-to-sign report is built on the same logic the COMBO trial's survivors demonstrated: patients tolerate — and even endorse — more technology in their care once they understand what it is and who remains responsible for the outcome.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What percentage of breast cancer survivors would recommend contrast-enhanced mammography?',
                    a: 'In the COMBO trial, a prospective study of 936 breast cancer survivors (from 969 eligible women) undergoing contrast-enhanced mammography for post-surgical surveillance between January 2023 and February 2025, 99.6% said they would recommend the exam to others, and 96.2% reported overall satisfaction.',
                  },
                  {
                    q: 'Is contrast-enhanced mammography more uncomfortable than standard mammography?',
                    a: 'Most patients rated it comparable. In the COMBO trial, 67.4% found discomfort similar to prior digital mammography, 77.4% rated pain comparable, 76.6% found positioning similar, and 64.3% rated exam duration as comparable — despite the added contrast injection step.',
                  },
                  {
                    q: 'Did pre-exam anxiety affect how patients experienced contrast-enhanced mammography?',
                    a: "Yes, but it didn't change their willingness to have the exam. 46.3% of participants reported moderate-to-high pre-examination anxiety, and higher anxiety was significantly associated with greater perceived discomfort, pain, and lower satisfaction. Even so, the researchers found anxiety did not reduce patients' willingness to undergo contrast-enhanced mammography.",
                  },
                  {
                    q: 'What does patient trust in contrast-enhanced mammography suggest about disclosing AI in imaging?',
                    a: "The COMBO trial shows patients tolerate an added step — a contrast injection, more time, more procedure — at very high acceptance rates when they understand why it's being done and what it adds. The same logic supports disclosing AI involvement in reporting rather than treating it as a detail to bury: separate survey data on AI in imaging has found patients overwhelmingly want to be told when AI is used, provided a radiologist remains accountable for the final report.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Vatteroni G, et al., "Patient acceptance and experience with contrast-enhanced mammography in women with a personal history of breast cancer: findings from the COMBO trial," <em>Insights into Imaging</em> (2026), DOI: <a href="https://doi.org/10.1186/s13244-026-02434-x" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1186/s13244-026-02434-x</a>, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/nearly-all-breast-cancer-survivors-would-recommend-contrast-enhanced-mammography" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. AI-disclosure survey figures from the 2026 RSNA <a href="https://pubs.rsna.org/journal/radiology" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>Radiology</em></a> patient survey as covered in xAID's earlier article. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Transparency builds trust in imaging, not just mammography"
          sub="xAID's AI drafts the CT report, an in-house radiologist reviews every preliminary, and it arrives ready for your radiologist to sign. Try it on 5 free studies."
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
              <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Patients Be Told When AI Reads Their Scan?</div>
              </Link>
              <Link to="/blog/incidental-findings-mammography-cardiac-risk/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Women's Imaging</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Findings on Mammography and Cardiac Risk</div>
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

export default ContrastEnhancedMammographyPatientTrust;
