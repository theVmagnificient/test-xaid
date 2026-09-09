import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const FractureDetectionAiSafetyNet = () => {
  const post = {
    title: "AI Catches the Hip Fractures Radiologists and ER Doctors Miss — What It Means for CT",
    dateIso: '2026-09-09',
    date: 'September 9, 2026',
    category: 'Clinical Evidence',
    readingTime: 5,
    description: "A new Radiology study found an AI tool caught 94.7% of hard-to-see hip fractures on X-ray that radiologists and ER doctors initially called negative. The study is X-ray, not CT — here's the honest read-across to subtle fractures on dense CT studies.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>AI Catches Hip Fractures Radiologists Miss | xAID</title>
        <meta name="description" content="A Radiology study: an AI tool caught 94.7% of hard-to-see hip fractures radiologists and ER doctors initially missed on X-ray — and what it means for CT." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI Catches Hip Fractures Radiologists Miss | xAID" />
        <meta property="og:description" content="A Radiology study: an AI tool caught 94.7% of hard-to-see hip fractures radiologists and ER doctors initially missed on X-ray — and what it means for CT." />
        <meta property="og:url" content="https://xaid.ai/blog/fracture-detection-ai-safety-net" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Catches Hip Fractures Radiologists Miss | xAID" />
        <meta name="twitter:description" content="A Radiology study: an AI tool caught 94.7% of hard-to-see hip fractures radiologists and ER doctors initially missed on X-ray — and what it means for CT." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/fracture-detection-ai-safety-net" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/fracture-detection-ai-safety-net",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "fracture detection ai, AI hip fracture detection, occult fracture AI, subtle findings CT, AI second read radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new AI hip fracture study find?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A study published in RSNA's journal Radiology tested an AI tool called OccuNet on 2,576 adults with suspected hip trauma across four hospitals. In a pooled test set of 1,766 patients, OccuNet detected 97.5% of fractures overall. Among 189 patients whose initial radiographs were read as negative or indeterminate, OccuNet still detected 94.7% of the fractures, compared with 86.2% for five musculoskeletal radiologists and 68.8% for five emergency medicine physicians reading the same negative/indeterminate images."
              }
            },
            {
              "@type": "Question",
              "name": "Was this study done on CT or X-ray?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "X-ray (radiographs). OccuNet was trained and tested on pelvic and hip radiographs, with CT or MRI used as the reference standard to confirm which cases were true fractures. It was not a CT study, and its results should not be read as a direct measure of AI performance on CT images."
              }
            },
            {
              "@type": "Question",
              "name": "Do CT scans have the same subtle-fracture problem as X-rays?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, though the specific fracture types differ. Published studies have found that about 19.2% of rib fractures were occult on initial CT and only confirmed on follow-up imaging, and that moderate-to-severe vertebral compression fractures went unreported at abdominal CT in 84% of cases where they were later identified retrospectively. Sacral insufficiency fractures are also widely described in the radiology literature as easy to overlook because of their subtle CT appearance and nonspecific symptoms. Dense, high-volume CT studies create the same kind of subtle-finding risk that radiographs do."
              }
            },
            {
              "@type": "Question",
              "name": "How does xAID address subtle or missed findings on CT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "xAID's AI drafts a structured, comprehensive report on every CT study, flagging findings a single read under time pressure can overlook. xAID's in-house radiologist then reviews every preliminary, adding a second set of eyes to the workflow rather than replacing the radiologist who has final say on the report."
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
              AI catches the hip fractures radiologists and ER doctors miss<br />
              <span className="text-white/60">What it means for CT reporting</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new fracture detection AI study in RSNA's journal <em>Radiology</em> found an AI tool detected 94.7% of hard-to-see hip fractures that radiologists and emergency physicians initially called negative — on X-ray, not CT. Here's the finding, and the honest read-across to subtle findings on dense CT studies.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '97.5%', label: 'OccuNet sensitivity for hip fractures', sub: 'pooled test set, 1,766 patients' },
            { stat: '94.7%', label: 'Detected on radiograph-negative/indeterminate cases', sub: 'vs 86.2% radiologists, 68.8% ER physicians' },
            { stat: 'Up to 10%', label: 'of femoral-neck fractures missed on initial X-ray', sub: 'per prior literature cited in the study' },
            { stat: '19.2%', label: 'of rib fractures found occult on initial CT', sub: 'a parallel subtle-finding problem on CT' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the new study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                An analysis published in RSNA's flagship journal <a href="https://pubs.rsna.org/doi/10.1148/radiol.253931" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Radiology</em></a>, first reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-model-bests-radiologists-spotting-difficult-detect-hip-fractures" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, details the development and validation of an AI tool called OccuNet, built specifically to target hard-to-detect femoral-neck fractures on radiographs. Femoral-neck fractures are notoriously easy to miss: some studies cited in the analysis suggest up to 10% are overlooked on the initial imaging exam. A missed fracture can worsen and require far more extensive treatment later.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                "Radiographs sometimes do not depict femoral-neck fractures, particularly radiograph-negative or indeterminate femoral-neck fractures, leading to delayed treatment and complications," senior author <a href="https://pubs.rsna.org/doi/10.1148/radiol.253931#con8" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Nai-Feng Tian, MD, PhD</a>, of the Zhejiang Spine Research Center at the Second Affiliated Hospital and Yuying Children's Hospital of Wenzhou Medical University, and colleagues wrote.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                OccuNet was trained in two stages: a contrastive pre-training phase using paired original and artifact-augmented radiographs, meant to make the model more sensitive to subtle artifacts and abnormalities, followed by fine-tuning specifically for fracture detection. It was tested on 2,576 adults with suspected hip trauma who had pelvic or hip radiography followed by CT or MRI at four hospitals between 2009 and 2025 — with the cross-sectional imaging serving as the reference standard for whether a fracture was truly present.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The number that matters: the cases everyone else called negative
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In the pooled test group of 1,766 patients, OccuNet correctly identified 913 of 936 fractures overall, a sensitivity of 97.5%, with specificity of 98.8% (820 of 830 patients without fractures correctly classified). Those headline numbers are respectable, but the more interesting result is in the subgroup that matters most clinically: the 189 patients whose initial radiographs were read as negative or indeterminate.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                In that subgroup, OccuNet detected 94.7% of the fractures that were actually present, compared with 86.2% for five musculoskeletal radiologists and 68.8% for five emergency medicine physicians reading the same indeterminate cases. AI assistance also cut reading time by 14.9% for radiologists and 18.9% for emergency medicine physicians. In other words: exactly where human readers are least confident, the AI tool held up best — and made the humans faster when it assisted them.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Reader</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Sensitivity on radiograph-negative/indeterminate fractures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">OccuNet (AI, standalone)</td>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">94.7%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Musculoskeletal radiologists (n=5)</td>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">86.2%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">Emergency medicine physicians (n=5)</td>
                      <td className="py-3 pr-4 text-[#444] text-[15px] font-light">68.8%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-3">
                  Source: <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-model-bests-radiologists-spotting-difficult-detect-hip-fractures" target="_blank" rel="noopener noreferrer" className="underline hover:text-xaid-blue">Radiology Business</a>, reporting on <a href="https://pubs.rsna.org/doi/10.1148/radiol.253931" target="_blank" rel="noopener noreferrer" className="underline hover:text-xaid-blue">Radiology</a> (2026), doi:10.1148/radiol.253931.
                </p>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Read the modality honestly: this is X-ray, not CT
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It's worth being precise about what this study does and doesn't show. OccuNet was trained and tested on pelvic and hip radiographs — plain X-rays — with CT or MRI used only as the reference standard to confirm which cases were true fractures. It is not a CT study, and its 94.7% figure describes X-ray interpretation, not CT interpretation. xAID's product works on CT, not radiographs, so this study is not direct evidence of xAID's own performance.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What the study does support is a broader, well-established pattern: when a finding is subtle, difficult reads that come back "negative" or "indeterminate" are exactly where a second set of eyes — human or algorithmic — adds the most value. That pattern isn't unique to radiographs or to hip fractures. It shows up on dense CT studies too, just with different anatomy.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The same problem, on CT: rib, vertebral, and sacral insufficiency fractures
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                CT is a far more sensitive modality than plain radiography for most fractures, but "more sensitive" is not the same as "immune to subtle misses." A handful of well-documented fracture categories on CT are analogous to what OccuNet targeted on X-ray — real fractures that get missed on a first, busy read precisely because they're subtle:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Rib fractures',
                    desc: 'A study of 160 chest trauma patients comparing early CT with follow-up CT as the reference standard found that 19.2% of confirmed rib fracture sites (112 of 584) were occult on the initial scan, most often at the costochondral junction or accompanying a more obvious fracture on an adjacent rib.',
                  },
                  {
                    title: 'Vertebral compression fractures',
                    desc: "A retrospective study of over 2,000 abdominal CT exams found that of the patients later confirmed to have a moderate-or-severe vertebral compression fracture, 84% had not been flagged at the original prospective read — often because sagittal reconstructions of the spine weren't routinely reviewed on an abdominal study.",
                  },
                  {
                    title: 'Sacral insufficiency fractures',
                    desc: "Sacral insufficiency fractures are widely described in the radiology literature as easy to overlook on CT because of subtle cortical disruption and nonspecific presenting symptoms (low back or pelvic pain), especially in older or oncology patients where the CT wasn't specifically ordered to rule out a sacral fracture.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of these CT figures come from the OccuNet paper — they're separate, independently published findings cited here to make one honest point: dense CT studies carry their own version of the subtle-fracture problem the hip X-ray study describes. A single read under time pressure, on any modality, can miss a finding that a second pass — human or AI-assisted — is more likely to catch.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Part of a recurring pattern, not a one-off headline
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This study joins a growing body of published evidence with the same shape: AI doesn't replace the reader, it catches what a single human pass sometimes doesn't, especially on the subtle, borderline, or "probably negative" cases. That's a narrower and more defensible claim than "AI beats radiologists" — it's specifically about the tail of hard cases where fatigue, caseload, and genuinely faint findings combine to create risk. The practical lesson for reporting workflows, on any modality, is the same: build in a second-set-of-eyes step for exactly the findings most likely to be subtle — rather than treating a single read as the whole safety net.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's foundation models draft a structured, comprehensive report on every CT study — surfacing findings like a subtle rib fracture, an unreviewed vertebral compression fracture, or a sacral insufficiency fracture that a single read under time pressure could otherwise miss. xAID's in-house radiologist reviews every preliminary, and the report is delivered ready-to-sign to the client's reading radiologist. That's the same second-set-of-eyes principle the hip fracture study demonstrates, applied to the modality and findings xAID actually reports on.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new AI hip fracture study find?',
                    a: 'A study published in RSNA\'s journal Radiology tested an AI tool called OccuNet on 2,576 adults with suspected hip trauma across four hospitals. In a pooled test set of 1,766 patients, OccuNet detected 97.5% of fractures overall. Among 189 patients whose initial radiographs were read as negative or indeterminate, OccuNet still detected 94.7% of the fractures, compared with 86.2% for five musculoskeletal radiologists and 68.8% for five emergency medicine physicians reading the same negative/indeterminate images.',
                  },
                  {
                    q: 'Was this study done on CT or X-ray?',
                    a: 'X-ray (radiographs). OccuNet was trained and tested on pelvic and hip radiographs, with CT or MRI used as the reference standard to confirm which cases were true fractures. It was not a CT study, and its results should not be read as a direct measure of AI performance on CT images.',
                  },
                  {
                    q: 'Do CT scans have the same subtle-fracture problem as X-rays?',
                    a: 'Yes, though the specific fracture types differ. Published studies have found that about 19.2% of rib fractures were occult on initial CT and only confirmed on follow-up imaging, and that moderate-to-severe vertebral compression fractures went unreported at abdominal CT in 84% of cases where they were later identified retrospectively. Sacral insufficiency fractures are also widely described in the radiology literature as easy to overlook because of their subtle CT appearance and nonspecific symptoms. Dense, high-volume CT studies create the same kind of subtle-finding risk that radiographs do.',
                  },
                  {
                    q: 'How does xAID address subtle or missed findings on CT?',
                    a: "xAID's AI drafts a structured, comprehensive report on every CT study, flagging findings a single read under time pressure can overlook. xAID's in-house radiologist then reviews every preliminary, adding a second set of eyes to the workflow rather than replacing the radiologist who has final say on the report.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: N-F Tian et al., <em>Radiology</em> (2026), doi: <a href="https://doi.org/10.1148/radiol.253931" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1148/radiol.253931</a>, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/ai-model-bests-radiologists-spotting-difficult-detect-hip-fractures" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Rib fracture figure: C Liu et al., <em>Clinical Radiology</em> (2022), doi: <a href="https://doi.org/10.1016/j.crad.2022.01.035" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1016/j.crad.2022.01.035</a>. Vertebral compression fracture figure: GA Carberry et al., <em>Radiology</em> (2013), doi: <a href="https://doi.org/10.1148/radiol.13121632" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">10.1148/radiol.13121632</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="A second set of eyes on every CT study — not just the obvious findings."
          sub="See how xAID's radiologist-reviewed reports catch subtle findings on 5 free studies."
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
              <Link to="/blog/how-accurate-is-ai-radiology-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How Accurate Is AI Radiology Reporting?</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology AI</div>
              </Link>
              <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Incidental Lung Nodules and Malignancy Risk</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FractureDetectionAiSafetyNet;
