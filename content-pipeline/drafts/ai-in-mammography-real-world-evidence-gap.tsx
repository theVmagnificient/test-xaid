import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AiMammographyRealWorldEvidenceGap = () => {
  const post = {
    title: 'The Real-World Evidence Gap in Screening AI: A Cautionary Case for Human-Reviewed Reads',
    dateIso: '2026-09-08',
    date: 'September 8, 2026',
    category: 'Clinical Evidence',
    readingTime: 7,
    description: "A new UCLA-led review of AI in mammography finds most evidence for catching interval cancers is retrospective, and real-world proof that AI changes outcomes is still thin. Here's why that gap matters for how much oversight AI reads should get.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>The Real-World Evidence Gap in Screening AI | xAID</title>
        <meta name="description" content="A new UCLA-led review finds screening AI still lacks real-world validation on missed cancers — a cautionary case for keeping radiologists in the loop." />
        <link rel="canonical" href="https://xaid.ai/blog/ai-in-mammography-real-world-evidence-gap" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Real-World Evidence Gap in Screening AI | xAID" />
        <meta property="og:description" content="A new UCLA-led review finds screening AI still lacks real-world validation on missed cancers — a cautionary case for keeping radiologists in the loop." />
        <meta property="og:url" content="https://xaid.ai/blog/ai-in-mammography-real-world-evidence-gap" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Real-World Evidence Gap in Screening AI | xAID" />
        <meta name="twitter:description" content="A new UCLA-led review finds screening AI still lacks real-world validation on missed cancers — a cautionary case for keeping radiologists in the loop." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/ai-in-mammography-real-world-evidence-gap" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/ai-in-mammography-real-world-evidence-gap",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "ai in mammography, breast screening AI, interval cancer AI, radiology AI real-world evidence, AI radiologist oversight"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new UCLA-led review find about AI in mammography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The review, published in the Journal of Breast Imaging, found that most evidence for AI detecting or predicting interval breast cancers (cancers diagnosed between screening rounds) comes from retrospective, enriched datasets rather than real-world clinical practice. The authors identified only one prospective randomized controlled trial, the MASAI trial, and concluded that current evidence cannot yet establish that AI translates into a measurable reduction in interval cancer rates in routine practice."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is AI at finding interval breast cancers in real-world data?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies widely by how accuracy is measured. In studies of U.S. annual digital breast tomosynthesis screening cited in the review, AI flagged 89% to 96% of interval cancers with visible findings when judged at the exam level, but accuracy dropped to 35% to 68% when reviewers checked whether the AI had actually localized the cancer itself, rather than just flagging the exam."
              }
            },
            {
              "@type": "Question",
              "name": "What is the MASAI trial and what did it show?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MASAI is a Swedish randomized controlled trial of more than 105,000 women that compared AI-supported mammography screening to standard double reading by two radiologists. Its most recent analysis, published in The Lancet, reported an interval cancer rate of 1.55 per 1,000 women in the AI-supported group versus 1.76 per 1,000 in the standard group, with higher sensitivity (80.5% vs 73.8%) and a 44.3% reduction in radiologist workload. The trial was designed to test non-inferiority, not to prove AI reduces interval cancers."
              }
            },
            {
              "@type": "Question",
              "name": "Does this mean AI shouldn't be used in breast cancer screening?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The review's authors describe the results as promising, not disqualifying. Their point is narrower: retrospective detection of a cancer is not the same as proving that AI, deployed in routine screening, leads to an earlier diagnosis or better outcome. Until that real-world evidence catches up, the review argues for continued human radiologist oversight rather than reducing or removing review because a tool performed well on a retrospective dataset."
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
              The real-world evidence gap in screening AI<br />
              <span className="text-white/60">a cautionary case for human-reviewed reads</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new UCLA-led review of AI in mammography found that most of the evidence for catching cancers missed between screenings is retrospective — and that proof AI actually changes outcomes in routine practice is still thin. It's a useful caution for the rest of radiology, too.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '105,934', label: 'Women in MASAI, the only RCT the review found', sub: 'AI-supported vs standard double reading' },
            { stat: '1.55 vs 1.76', label: 'Interval cancers per 1,000 screened', sub: 'AI-supported vs standard double reading, MASAI' },
            { stat: '35–68%', label: "AI's lesion-level localization accuracy", sub: 'vs 89–96% at exam level, US DBT cohorts' },
            { stat: '2', label: 'FDA-cleared systems with no peer-reviewed external validation', sub: "per the review's tally" },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the new review actually examined
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A team from UCLA's David Geffen School of Medicine — Javier Galvan, Niki Nourmohammadi, Hannah Milch, and Tiffany Yu — published a review titled <a href="https://doi.org/10.1093/jbi/wbag042" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"Artificial Intelligence and Interval Cancers in Screening Mammography"</a> in the <em>Journal of Breast Imaging</em>. The subject is interval cancers — tumors diagnosed in the months or years between scheduled screenings, which are widely used as a benchmark of how well a screening program is working. The review asks a specific question: how good is the evidence that commercially available AI tools actually help detect or predict these cancers, and is that evidence strong enough to guide how AI gets deployed?
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                As <a href="https://radiologybusiness.com/topics/artificial-intelligence/experts-believe-potential-breast-ai-say-more-real-world-data-needed" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a> on the review, the authors' answer is that the promise is real but the real-world proof is not there yet — and that gap has direct implications for how much human oversight AI-assisted screening should keep as it scales.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The prospective evidence is thinner than the retrospective numbers suggest
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most of the studies the review surveyed are retrospective: researchers take mammograms already known to precede an interval cancer diagnosis and check whether an AI algorithm would have flagged them. Reported localization accuracy in those studies ranged from about <strong>32.6% to 78%</strong>. In one Norwegian cohort, AI assigned its highest risk score to <strong>39.4%</strong> of exams performed within two years of an eventual interval cancer diagnosis — but that figure dropped to <strong>23.4%</strong> at four years out and <strong>23.1%</strong> at six years, meaning the tool's apparent predictive power shrinks the further back from diagnosis you look. Retrospective simulations of AI-based reading scenarios estimated interval cancer reductions anywhere from <strong>5% to 52%</strong>, a range wide enough to say the number depends heavily on workflow and threshold choices, not a settled clinical effect.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The review found only one prospective randomized controlled trial: <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">MASAI</a>, a Swedish trial of <strong>105,934</strong> women that randomized participants to AI-supported screening or standard double reading. Its most recent analysis reported an interval cancer rate of <strong>1.55 per 1,000</strong> women screened in the AI-supported arm versus <strong>1.76 per 1,000</strong> in the standard arm, alongside higher sensitivity (<strong>80.5%</strong> vs <strong>73.8%</strong>) at similar specificity, and a <a href="https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(23)00298-X/abstract" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">44.3% reduction</a> in radiologist screening workload. Those are encouraging numbers. But the trial was statistically designed to show AI is <em>not worse than</em> double reading — non-inferiority — not to prove that AI-supported screening definitively lowers interval cancer rates. It's also worth noting what MASAI's design actually changed: exams the AI scored low-risk went to a single reader instead of two; a radiologist still read every exam. That's a reduction in human reads, not an elimination of them — and even that narrower shift has only one trial behind it.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where the "real-world" data breaks down
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The review's most pointed finding may be the gap between how AI performs on a coarse, exam-level check versus a detailed, lesion-level one. In studies of U.S. annual digital breast tomosynthesis (DBT) screening — the modality used in roughly 93% of U.S. facilities, per the review — AI correctly flagged <strong>89% to 96%</strong> of interval cancers with visible findings when judged simply by whether the exam was marked as a concern. Accuracy fell to <strong>35% to 68%</strong> when reviewers checked whether the AI had actually pinpointed the cancer itself rather than flagging the exam for an unrelated reason. That's the difference between "the tool noticed something was off" and "the tool found the cancer" — and it matters for how much clinical weight a high-risk AI score should carry when nothing is visible to a radiologist.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The authors also point to structural problems that make it hard to compare studies at all: interval cancer definitions vary in whether they include in-situ disease, use different time windows, and rely on different classification systems ranging from two to seven categories. Most published research reflects European biennial screening programs with double reading — not the U.S. annual, single-reader, DBT-heavy environment where most American screening actually happens. And per the review, two FDA-cleared AI systems for mammography have no peer-reviewed external validation study at all.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Detection on a dataset is not a demonstrated outcome',
                    desc: "Finding a cancer in hindsight, on a mammogram already known to precede a diagnosis, is a different claim than showing AI changed when a real patient's cancer was found. Only prospective trials can make the second claim, and the review counts exactly one.",
                  },
                  {
                    title: 'The U.S. screening environment is under-studied',
                    desc: 'Annual intervals, single-reader workflows, and DBT are how most American screening actually works — and the review found this setting is the least represented in the evidence base, even as US-market AI tools get cleared for it.',
                  },
                  {
                    title: 'Reduced human review is scaling faster than the evidence for it',
                    desc: "MASAI's single biggest operational effect was cutting the number of human reads per exam. That is a meaningful result from one trial — not yet a broad license to extend the same logic toward less oversight across other modalities and vendors.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the researchers themselves said
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In a <a href="https://www.uclahealth.org/news/release/ai-may-help-identify-breast-cancers-missed-mammograms" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">UCLA Health statement</a> accompanying the review, co-author Dr. Hannah Milch drew the same distinction the paper makes methodologically: "Finding a cancer retrospectively is very different from demonstrating that using AI during routine screening would have led to an earlier diagnosis. We need prospective evidence showing that AI actually changes patient outcomes." Senior author Dr. Tiffany Yu flagged the comparability problem directly: "These differences make it difficult to directly compare results because of international screening program differences, and the lack of studies applicable to U.S. programs" — before summarizing the stakes: "Ensuring these tools are safe and clinically effective is paramount."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a caution for radiology AI beyond mammography
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Breast screening AI is one of the most studied applications in radiology, with more published literature behind it than almost any other imaging AI category. If the strongest-evidenced corner of the field still has only one prospective RCT and a documented drop-off between exam-level and lesion-level accuracy, that's a reasonable baseline for how much real-world validation to expect — and demand — as AI expands into less-studied areas of imaging, including CT. The lesson isn't that AI underperforms; MASAI's numbers are genuinely good. It's that retrospective performance and regulatory clearance are necessary but not sufficient evidence for reducing how much a human radiologist reviews before a result reaches a patient.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That distinction is easiest to see side by side:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Question</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Reduced/no per-exam human review</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Draft-then-sign, radiologist-reviewed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Evidence needed before scaling', 'Retrospective accuracy + regulatory clearance', 'None required — a radiologist checks every case regardless of AI performance'],
                      ['Who catches a high-risk AI score with no visible finding', 'Depends entirely on the workflow tier the exam was routed to', 'A radiologist reviews every report, every time, before it is finalized'],
                      ['Exposure if real-world performance trails retrospective numbers', 'Directly proportional to how much review was removed', 'Bounded — a human already reviewed the case'],
                      ['What the current literature supports', 'One RCT, in one country, in one workflow configuration', 'Consistent with how every cleared radiology AI tool is intended to be used'],
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

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model</Link> approach to CT reporting is built around the posture this review argues for: AI produces a structured draft, xAID's in-house radiologist reviews every preliminary, and the report reaches the client ready-to-sign — with final signature always staying with the client's own reading radiologist. That's not a workaround for immature evidence; it's the appropriate response to it. Screening mammography AI has more prospective data behind it than most radiology AI categories, and this review still found only one RCT and a real localization-accuracy gap between exam-level and lesion-level performance. Until every AI application in imaging has that kind of real-world track record, keeping a radiologist in the loop on every read is the more defensible default — not a limitation to engineer away.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new UCLA-led review find about AI in mammography?',
                    a: 'The review, published in the Journal of Breast Imaging, found that most evidence for AI detecting or predicting interval breast cancers (cancers diagnosed between screening rounds) comes from retrospective, enriched datasets rather than real-world clinical practice. The authors identified only one prospective randomized controlled trial, the MASAI trial, and concluded that current evidence cannot yet establish that AI translates into a measurable reduction in interval cancer rates in routine practice.',
                  },
                  {
                    q: 'How accurate is AI at finding interval breast cancers in real-world data?',
                    a: 'It varies widely by how accuracy is measured. In studies of U.S. annual digital breast tomosynthesis screening cited in the review, AI flagged 89% to 96% of interval cancers with visible findings when judged at the exam level, but accuracy dropped to 35% to 68% when reviewers checked whether the AI had actually localized the cancer itself, rather than just flagging the exam.',
                  },
                  {
                    q: 'What is the MASAI trial and what did it show?',
                    a: 'MASAI is a Swedish randomized controlled trial of more than 105,000 women that compared AI-supported mammography screening to standard double reading by two radiologists. Its most recent analysis, published in The Lancet, reported an interval cancer rate of 1.55 per 1,000 women in the AI-supported group versus 1.76 per 1,000 in the standard group, with higher sensitivity (80.5% vs 73.8%) and a 44.3% reduction in radiologist workload. The trial was designed to test non-inferiority, not to prove AI reduces interval cancers.',
                  },
                  {
                    q: "Does this mean AI shouldn't be used in breast cancer screening?",
                    a: "No. The review's authors describe the results as promising, not disqualifying. Their point is narrower: retrospective detection of a cancer is not the same as proving that AI, deployed in routine screening, leads to an earlier diagnosis or better outcome. Until that real-world evidence catches up, the review argues for continued human radiologist oversight rather than reducing or removing review because a tool performed well on a retrospective dataset.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: J.L. Galvan, N. Nourmohammadi, H.S. Milch, T.T. Yu, "Artificial Intelligence and Interval Cancers in Screening Mammography," <em>Journal of Breast Imaging</em> (2026), <a href="https://doi.org/10.1093/jbi/wbag042" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1093/jbi/wbag042</a>; as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/experts-believe-potential-breast-ai-say-more-real-world-data-needed" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.uclahealth.org/news/release/ai-may-help-identify-breast-cancers-missed-mammograms" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">UCLA Health</a>; MASAI trial results via <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Lancet</a> and <a href="https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(23)00298-X/abstract" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Lancet Oncology</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Evidence-led AI, radiologist-reviewed reports."
          sub="xAID's foundation-model CT reports are reviewed by an in-house radiologist and delivered ready-to-sign — your radiologist stays the final word. Try it on 5 free studies."
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
              <Link to="/blog/radiology-ai-clinical-outcomes-evidence-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Clinical Outcomes Evidence Gap in Radiology AI</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology AI</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiMammographyRealWorldEvidenceGap;
