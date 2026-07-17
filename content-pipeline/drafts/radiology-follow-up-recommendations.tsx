import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const RadiologyFollowUpRecommendations = () => {
  const post = {
    title: "The Follow-Up That 'Fell Through the Cracks': What a Former Marlins Star's Lawsuit Says About Radiology Follow-Up Recommendations",
    dateIso: '2026-07-10',
    date: 'July 10, 2026',
    category: 'Risk & Liability',
    readingTime: 7,
    description: "A former MLB outfielder is suing the University of Miami, alleging a recommended follow-up CT was never performed — the report, his attorney says, 'fell through the cracks.' The case spotlights a malpractice category distinct from missed reads: follow-up failure. Published studies show only 30–43% of recommended follow-up imaging is completed on time without tracking — and structured recommendations plus closed-loop tracking can push that above 70%.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Follow-Up Recommendations: Closing the Loop | xAID</title>
        <meta name="description" content="An ex-Marlins outfielder alleges a recommended follow-up CT never happened. Why radiology follow-up recommendations fail, and how tracking closes the loop." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Follow-Up Recommendations: Closing the Loop | xAID" />
        <meta property="og:description" content="An ex-Marlins outfielder alleges a recommended follow-up CT never happened. Why radiology follow-up recommendations fail, and how tracking closes the loop." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-follow-up-recommendations" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Follow-Up Recommendations: Closing the Loop | xAID" />
        <meta name="twitter:description" content="An ex-Marlins outfielder alleges a recommended follow-up CT never happened. Why radiology follow-up recommendations fail, and how tracking closes the loop." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-follow-up-recommendations" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-follow-up-recommendations",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology follow-up recommendations, follow-up imaging tracking, incidental findings follow-up, radiology malpractice follow-up failure, closed-loop radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does the Avisail Garcia lawsuit against the University of Miami allege?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "According to reporting by Radiology Business and NBC South Florida, retired Miami Marlins outfielder Avisail Garcia is suing the University of Miami's Miller School of Medicine over care he received in 2023. The lawsuit contends that an MRI revealed a stress fracture in his lower back and that the radiology report recommended a follow-up CT for further evaluation — but that CT allegedly never occurred, and he was instead treated for muscle or disc pain. His attorney says the report and its recommendation 'fell through the cracks.' These are allegations in an active lawsuit; the university had not responded to a request for comment at the time of reporting."
              }
            },
            {
              "@type": "Question",
              "name": "How is a follow-up failure different from a missed read in radiology malpractice?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a missed read, the interpreting radiologist fails to perceive or correctly characterize a finding — the report itself is wrong. In a follow-up failure, the report is right: the finding is identified and a follow-up exam is recommended, but the recommendation is never acted on. The error happens downstream of interpretation, in communication and care coordination. Both can end in delayed diagnosis and litigation, but they require different safeguards: better interpretation quality for the first, and structured recommendations plus closed-loop tracking for the second."
              }
            },
            {
              "@type": "Question",
              "name": "How often do recommended follow-up imaging exams actually get completed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Published studies show large gaps. A 2017 AJR study by Wandtke and Spinelli found only 43.1% of recommended follow-up exams were completed on time at baseline; a multistage tracking system raised completion to 70.5%. A 2023 Journal of Digital Imaging study of the FIND program found follow-up completion rose from 30.8% to 50.7% after implementing a dedicated tracking workflow — and from just 19.2% to 55.0% for emergency department patients."
              }
            },
            {
              "@type": "Question",
              "name": "How do structured reporting and tracking close the follow-up loop?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Three elements work together: explicit recommendations (a specific modality and timeframe stated in a consistent, findable section of the report rather than buried in prose), automated tracking that flags overdue recommendations and escalates until the exam is scheduled or documented as clinically unnecessary, and documented closure so every recommendation ends in a recorded outcome. Structured, machine-readable reports make the first two possible at scale, because software can only track recommendations it can reliably find."
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
                Risk &amp; Liability
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              The follow-up that "fell through the cracks"<br />
              <span className="text-white/60">What a $53M lawsuit says about radiology follow-up recommendations</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A former Marlins outfielder alleges the radiology report got it right — and the recommended follow-up CT still never happened. His lawsuit is a celebrity-scale example of the most preventable failure mode in imaging: the recommendation nobody tracks.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '$53M', label: 'Contract at the center of the suit', sub: 'four-year deal, signed 2022' },
                { stat: '43.1%', label: 'Follow-up exams completed on time', sub: 'baseline, AJR 2017 study' },
                { stat: '70.5%', label: 'Completion with multistage tracking', sub: 'same AJR 2017 study' },
                { stat: '19.2%', label: 'ED follow-up completion pre-tracking', sub: 'FIND program, 2023' },
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
                The allegation: the report was right, and it didn't matter
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Retired Miami Marlins outfielder Avisail Garcia, 35, signed a four-year, $53 million contract with the team in 2022. The Marlins released him in 2024, partly due to injuries, before the contract played out. Now, as <a href="https://radiologybusiness.com/topics/healthcare-management/legal-news/former-pro-baseball-player-sues-university-miami-over-alleged-radiology-flub" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> reports, Garcia is suing the University of Miami's Miller School of Medicine over care he received at the institution in 2023.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The alleged fact pattern, per <a href="https://www.nbcmiami.com/news/local/former-marlins-star-missed-diagnosis-lawsuit/3831952/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">NBC South Florida</a>: after Garcia "felt something" in his back rounding the bases during a 2023 game, an MRI allegedly revealed a stress fracture in his lower back, and the radiology report recommended a follow-up CT for further evaluation. The lawsuit contends that CT never occurred. Instead, Garcia claims, he was treated for muscle or disc pain and instructed to do rigorous physical therapy and training — which he says worsened his symptoms. He alleges he did not receive appropriate treatment until after his release, when a physician performed extensive back surgery involving plates and screws.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                His attorney, Jorge Silva, summarized the claim in one sentence: <strong>"The radiology report making the proper diagnosis with the proper recommendation fell through the cracks."</strong>
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                These are allegations in an active lawsuit — the university had not responded to NBC6's request for comment at the time of reporting, and no court has ruled on any of the claims. But whatever the outcome, the alleged fact pattern is worth studying, because it describes a failure mode radiology departments know well and measure poorly.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Missed read vs. missed follow-up: two different failure modes
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most radiology malpractice coverage focuses on interpretation errors — the finding a reader didn't see or mischaracterized. That category is real and expensive (we've analyzed <Link to="/blog/radiology-malpractice-ai-reporting/" className="text-xaid-blue-strong underline underline-offset-2">a $7M missed-cancer verdict</Link> before). But the Garcia complaint alleges something categorically different: the interpretation was correct, the recommendation was made, and the system around the report allegedly failed to act on it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                Legal commentators have flagged this pattern for years — <a href="https://appliedradiology.com/articles/failure-of-radiologic-communication-an-increasing-cause-of-malpractice-litigation-and-harm-to-patients" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Applied Radiology</a> describes failures of radiologic communication as an increasing cause of malpractice litigation, distinct from perception errors. The two failure modes need different fixes:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">&nbsp;</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Missed read</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Missed follow-up</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Where the error happens</td>
                      <td className="py-3 pr-4">At interpretation — the finding is missed or mischaracterized</td>
                      <td className="py-3">After interpretation — the recommendation is never acted on</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">What the report says</td>
                      <td className="py-3 pr-4">The wrong thing</td>
                      <td className="py-3">The right thing — and it goes nowhere</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Who is exposed</td>
                      <td className="py-3 pr-4">Primarily the interpreting radiologist</td>
                      <td className="py-3">The institution, ordering clinician, and care team</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#333]">Primary safeguard</td>
                      <td className="py-3 pr-4">Interpretation quality: second reads, AI assistance, peer review</td>
                      <td className="py-3">Structured recommendations + closed-loop tracking</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#333]">How it's usually discovered</td>
                      <td className="py-3 pr-4">Retrospective review after the diagnosis surfaces</td>
                      <td className="py-3">The same way — often years later, sometimes in a courtroom</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The follow-up gap is measured — and it's large
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                If the Garcia allegations sound like an outlier, the published literature suggests otherwise. In a 2017 <em>AJR</em> study, Wandtke and Spinelli audited what happened to radiologist follow-up recommendations at their institution: only <strong>43.1%</strong> of recommended exams were completed on time at baseline. After implementing a multistage recommendation-tracking system — with automated checks and escalating human outreach — completion rose to <strong>70.5%</strong>, and the share of recommendations whose status was simply <em>unknown</em> fell 74%, to 13.9% (<a href="https://doi.org/10.2214/AJR.17.18332" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Wandtke &amp; Spinelli, AJR 2017</a>). Notably, the tracked exams also generated revenue 4.1 times the labor cost of the tracking program — closing the loop paid for itself.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A 2023 study of the FIND program in the <em>Journal of Digital Imaging</em> found the same shape of problem and the same shape of fix: follow-up completion for incidental findings rose from <strong>30.8% to 50.7%</strong> after a dedicated tracking workflow was implemented. For emergency department patients — where care handoffs are most fragile — completion pre-intervention was just <strong>19.2%</strong>, rising to 55.0% with tracking. The program also pushed the rate of properly documented recommendations in reports from 75.4% to 95.7% (<a href="https://doi.org/10.1007/s10278-023-00780-6" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Zaki-Metias et al., J Digit Imaging 2023</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read those baselines again: 43.1%, 30.8%, 19.2%. Without a tracking system, somewhere between half and four-fifths of radiologist follow-up recommendations are not completed on time. Every one of those open loops is a patient-safety risk — and, as the Garcia suit illustrates, a potential lawsuit where the plaintiff's strongest exhibit is the defendant's own correct radiology report.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What actually closes the loop
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The studies above converge on three ingredients:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. Explicit, structured recommendations',
                    desc: 'A follow-up recommendation buried mid-paragraph in free-text prose is easy to lose. A recommendation stated in a consistent, dedicated section — with a specific modality and timeframe ("CT lumbar spine without contrast in 4–6 weeks"), not contingent hedging — is findable by clinicians and by software. The FIND program raised documented recommendations from 75.4% to 95.7% by standardizing how they were written.',
                  },
                  {
                    title: '2. Tracking with escalation',
                    desc: 'One notification is not a system. Wandtke’s multistage design checked completion automatically, then escalated to human outreach for overdue exams — that layering is what moved completion from 43.1% to 70.5%. Single-step reminders in the same study performed far worse than the multistage pipeline.',
                  },
                  {
                    title: '3. Documented closure on every recommendation',
                    desc: 'Every recommendation should end in one of three recorded states: exam completed, exam deliberately deferred by the clinician with reasoning, or patient unreachable after documented attempts. "Status unknown" is the state that turns into litigation — the AJR study cut it by 74%.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI structured reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Notice what all three ingredients have in common: they depend on the report being structured. Tracking software can only track recommendations it can reliably find, and researchers have spent years building NLP just to <a href="https://pubmed.ncbi.nlm.nih.gov/29295270/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">extract follow-up recommendations out of free-text reports</a> after the fact. It is far simpler to generate the report structured in the first place.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the design premise behind AI CT reporting the way xAID does it: every study produces a <Link to="/how-ai-ct-reporting-works/" className="text-xaid-blue-strong underline underline-offset-2">structured, comprehensive report</Link> where findings and follow-up recommendations live in consistent, machine-readable sections — never buried in prose, never dependent on one person remembering to act. xAID's in-house radiologist reviews every preliminary before it's delivered ready-to-sign; the final signature stays with your reading radiologist. A structured report doesn't guarantee the follow-up CT gets scheduled — that still takes a tracking workflow on the clinical side — but it removes the failure point this lawsuit alleges: a correct recommendation that the downstream system couldn't see.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What does the Avisail Garcia lawsuit against the University of Miami allege?',
                    a: "According to reporting by Radiology Business and NBC South Florida, retired Miami Marlins outfielder Avisail Garcia is suing the University of Miami's Miller School of Medicine over care he received in 2023. The lawsuit contends that an MRI revealed a stress fracture in his lower back and that the radiology report recommended a follow-up CT for further evaluation — but that CT allegedly never occurred, and he was instead treated for muscle or disc pain. His attorney says the report and its recommendation 'fell through the cracks.' These are allegations in an active lawsuit; the university had not responded to a request for comment at the time of reporting.",
                  },
                  {
                    q: 'How is a follow-up failure different from a missed read in radiology malpractice?',
                    a: 'In a missed read, the interpreting radiologist fails to perceive or correctly characterize a finding — the report itself is wrong. In a follow-up failure, the report is right: the finding is identified and a follow-up exam is recommended, but the recommendation is never acted on. The error happens downstream of interpretation, in communication and care coordination. Both can end in delayed diagnosis and litigation, but they require different safeguards: better interpretation quality for the first, and structured recommendations plus closed-loop tracking for the second.',
                  },
                  {
                    q: 'How often do recommended follow-up imaging exams actually get completed?',
                    a: 'Published studies show large gaps. A 2017 AJR study by Wandtke and Spinelli found only 43.1% of recommended follow-up exams were completed on time at baseline; a multistage tracking system raised completion to 70.5%. A 2023 Journal of Digital Imaging study of the FIND program found follow-up completion rose from 30.8% to 50.7% after implementing a dedicated tracking workflow — and from just 19.2% to 55.0% for emergency department patients.',
                  },
                  {
                    q: 'How do structured reporting and tracking close the follow-up loop?',
                    a: 'Three elements work together: explicit recommendations (a specific modality and timeframe stated in a consistent, findable section of the report rather than buried in prose), automated tracking that flags overdue recommendations and escalates until the exam is scheduled or documented as clinically unnecessary, and documented closure so every recommendation ends in a recorded outcome. Structured, machine-readable reports make the first two possible at scale, because software can only track recommendations it can reliably find.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: lawsuit coverage from <a href="https://radiologybusiness.com/topics/healthcare-management/legal-news/former-pro-baseball-player-sues-university-miami-over-alleged-radiology-flub" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.nbcmiami.com/news/local/former-marlins-star-missed-diagnosis-lawsuit/3831952/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">NBC South Florida</a> (allegations from an active lawsuit; the University of Miami had not responded to a request for comment at the time of reporting). Follow-up completion data: <a href="https://doi.org/10.2214/AJR.17.18332" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Wandtke &amp; Spinelli, AJR 2017</a>; <a href="https://doi.org/10.1007/s10278-023-00780-6" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Zaki-Metias et al., J Digit Imaging 2023</a>.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Recommendations that can't get lost in prose."
          sub="xAID reports are structured by design — findings and follow-up recommendations in consistent, trackable sections, in-house review on every preliminary, delivered ready-to-sign. Try it on 5 free studies."
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
              <Link to="/blog/radiology-malpractice-ai-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Risk &amp; Liability</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Anatomy of a $7M Missed-Cancer Verdict — and Where AI Reporting Fits</div>
              </Link>
              <Link to="/blog/wrong-patient-radiology-error/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A Server Glitch Made Radiologists Read the Wrong Patient</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyFollowUpRecommendations;
