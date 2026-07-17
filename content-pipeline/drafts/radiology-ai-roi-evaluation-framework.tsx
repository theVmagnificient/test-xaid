import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const RadiologyAiRoiEvaluationFramework = () => {
  const post = {
    title: 'Radiology AI ROI: The Evaluation Framework to Run Before You Sign',
    dateIso: '2026-07-10',
    date: 'July 10, 2026',
    category: 'Pricing & ROI',
    readingTime: 8,
    description: "A new JACR analysis from NYU Langone shows why radiology AI ROI rarely matches vendor promises: of three algorithms run through a financial calculator, one was favorable, one destroyed value (−76.6% return on invested capital), and one paid off only through downstream cancer detection. Here are the variables that actually move the P&L — and how to run the evaluation before signing.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology AI ROI: Run This Framework Before You Sign | xAID</title>
        <meta name="description" content="A new JACR framework shows radiology AI ROI often falls short of vendor promises. The variables that actually move the P&L — and how to evaluate before signing." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology AI ROI: Run This Framework Before You Sign | xAID" />
        <meta property="og:description" content="A new JACR framework shows radiology AI ROI often falls short of vendor promises. The variables that actually move the P&L — and how to evaluate before signing." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-ai-roi-evaluation-framework" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology AI ROI: Run This Framework Before You Sign | xAID" />
        <meta name="twitter:description" content="A new JACR framework shows radiology AI ROI often falls short of vendor promises. The variables that actually move the P&L — and how to evaluate before signing." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-ai-roi-evaluation-framework" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-ai-roi-evaluation-framework",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology AI ROI, radiology AI financial impact, AI contribution margin radiology, radiology AI evaluation framework, AI purchasing radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the JACR financial framework find about radiology AI ROI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A July 2026 JACR analysis from NYU Langone Health built a financial calculator comparing baseline and AI-integrated workflows across three algorithms. An intracranial hemorrhage triage tool was financially favorable (contribution margin improved from −6.0% to −2.4%), a pulmonary embolism triage tool was not (−10.1% contribution margin, −76.6% return on invested capital), and a breast cancer detection tool paid off only through downstream revenue from 35 additional cancers detected — not through reading efficiency."
              }
            },
            {
              "@type": "Question",
              "name": "Which variables actually determine radiology AI ROI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The JACR calculator used annual case volume, professional reimbursement per study by CPT code, radiologist compensation and productivity, interpretation times with and without AI, AI acquisition and implementation costs, and potential downstream revenue. Because most radiology AI applications are not reimbursable, ROI is usually driven by efficiency gains — which makes local caseload, local salaries, and the actual minutes saved per read the decisive inputs, not vendor benchmarks."
              }
            },
            {
              "@type": "Question",
              "name": "Why did the pulmonary embolism triage algorithm fail the financial test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It saved only about 0.83 minutes per case — not enough efficiency to cover its cost. The study estimated it would need to cut read times by about 3.55 minutes per case, or drop in price from $200,000 to roughly $47,000, to break even. The lesson for buyers: a clinically useful triage alert can still be a money-losing purchase if the minutes saved per study are small relative to the price."
              }
            },
            {
              "@type": "Question",
              "name": "How should an imaging center evaluate radiology AI before buying?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Model the deal with local inputs before signing: your annual case volume for the exact study type, your radiologist compensation, your current interpretation times, the vendor's full acquisition and implementation cost, and the algorithm's value pathway — efficiency, downstream revenue, or both. Run sensitivity analyses on salary, volume, and minutes saved, and ask whether the pricing model shifts risk to you (upfront capital) or to the vendor (per-study, no capital outlay). The JACR authors conclude that efficiency gains alone may be insufficient to justify some triage algorithms."
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
                Pricing &amp; ROI
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Radiology AI ROI:<br />
              <span className="text-white/60">the evaluation framework to run before you sign</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              NYU Langone ran three commercial AI algorithms through a financial calculator. One made money, one lost 76.6% of the capital invested in it, and one paid off only through downstream cancer detection. The difference wasn't the AI — it was the inputs. Here's the framework, and how to apply it to any radiology AI contract.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '3', label: 'AI use cases modeled', sub: 'ICH, PE triage, mammo detection' },
                { stat: '−76.6%', label: 'Return on invested capital', sub: 'PE triage algorithm' },
                { stat: '1.15 min', label: 'Saved per head CT read', sub: 'ICH triage — the favorable case' },
                { stat: '$937,590', label: 'Annual downstream margin', sub: 'from 35 extra cancers detected' },
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
                Why vendor ROI decks and buyer P&amp;Ls tell different stories
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A new analysis in the <a href="https://doi.org/10.1016/j.jacr.2026.06.013" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Journal of the American College of Radiology</em></a>, led by Miriam A. Bredella, MD, MBA, vice chair of strategy in the department of radiology at NYU Langone Health, starts from a fact most purchasing conversations skip: the majority of AI applications in radiology are not reimbursable. As the authors put it, "although there are reimbursement codes for some algorithms, the majority of AI applications in radiology are not reimbursable... As a result, return on investment is often driven by potential efficiency gains, enabling radiologists to interpret more studies in the same amount of time."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That single fact reshapes the whole evaluation. If the payer isn't writing a check for the algorithm, the ROI has to come from somewhere inside your own operation — minutes saved per read, studies added per shift, or revenue generated downstream. And those quantities are local: they depend on your caseload, your radiologists' salaries, and your interpretation times, not on the numbers in a vendor's slide deck. As <a href="https://radiologybusiness.com/topics/artificial-intelligence/pragmatic-framework-evaluating-financial-impact-radiology-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> summarized the study, these decisions "do not always offer the return on investment vendors promise."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The framework: six inputs, three outputs
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The NYU team built a financial calculator that estimates the difference between a baseline workflow and an AI-integrated one. It is deliberately unglamorous — no diagnostic AUCs, no sensitivity claims — just the variables that actually land on an imaging operation's income statement:
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    title: 'Annual case volume',
                    desc: 'How many studies of the exact type the algorithm touches you actually read per year. A fixed-price tool amortized over 2,000 studies and over 20,000 studies produces radically different per-study economics.',
                  },
                  {
                    title: 'Professional reimbursement per study (CPT)',
                    desc: 'What each additional interpretation is worth if efficiency gains free radiologists to read more — anchored to Current Procedural Terminology codes, not estimates.',
                  },
                  {
                    title: 'Radiologist compensation and productivity',
                    desc: 'The cost of a radiologist-minute. The same minutes-saved figure is worth more where salaries are higher — which is why the identical algorithm can pencil out at one practice and not at another.',
                  },
                  {
                    title: 'Interpretation times, with and without AI',
                    desc: 'Measured read-time difference per case — the core efficiency variable, and the one most often asserted rather than measured in vendor materials.',
                  },
                  {
                    title: 'AI acquisition and implementation costs',
                    desc: 'The full outlay: license, integration, IT work. This is the denominator of return on invested capital, and the number sensitivity analysis should stress first.',
                  },
                  {
                    title: 'Potential downstream revenue',
                    desc: 'Follow-up imaging, procedures, and treatment revenue generated when a detection algorithm finds actionable disease that would otherwise be missed.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                From those inputs the calculator produces three outputs: <strong>efficiency</strong> (interpretations per hour), <strong>contribution margin</strong> (revenue minus the variable costs of producing a read), and <strong>return on invested capital</strong> (what the AI spend earns back). Radiologist compensation, reimbursement, and AI costs were modeled from national benchmarks, so any practice can substitute its own figures.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Three algorithms, three different answers
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The team ran three common commercial use cases through the model: an intracranial hemorrhage (ICH) triage algorithm for noncontrast head CT, a pulmonary embolism (PE) triage algorithm for CT pulmonary angiography in the emergency department, and a breast cancer detection algorithm for screening mammography.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Use case</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Time saved per case</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Financial result</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">What decided it</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">ICH triage (head CT)</td>
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">~1.15 min</td>
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">Favorable — contribution margin −6.0% → −2.4%</td>
                      <td className="py-3 text-[#444] text-sm font-light">Salary and price: flips unfavorable below $269K salary or above $327K AI cost</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">PE triage (CTPA, ED)</td>
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">~0.83 min</td>
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">Unfavorable — −10.1% margin, −76.6% ROIC</td>
                      <td className="py-3 text-[#444] text-sm font-light">Would need ~3.55 min saved per case, or price cut from $200K to ~$47K</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">Breast cancer detection (screening mammo)</td>
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">Not the driver</td>
                      <td className="py-3 pr-4 text-[#444] text-sm font-light">Favorable long-term — via downstream revenue</td>
                      <td className="py-3 text-[#444] text-sm font-light">35 extra cancers → ~$937,590/yr downstream margin vs ~$388K needed to break even</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The ICH algorithm worked because 1.15 minutes saved per head CT compounds into more interpretations per hour, lifting the contribution margin from −6.0% to −2.4%. But even the favorable case is conditional: the study found it stayed financially attractive at the average modeled radiologist salary of $440,000, and turned unfavorable when salaries fell below $269,000 or the AI investment exceeded $327,000. Same algorithm, different practice, opposite verdict.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The PE algorithm is the cautionary tale. It works clinically — reads got faster by about 0.83 minutes per case — yet it produced a −10.1% contribution margin and a −76.6% return on invested capital. To break even it would need to save roughly 3.55 minutes per case, more than four times its measured effect, or cost about $47,000 instead of $200,000. A tool can be genuinely useful at the workstation and still destroy value on the balance sheet.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The mammography algorithm inverts the logic entirely: its value had little to do with read times. It detected an additional 35 breast cancers, generating approximately $937,590 in annual downstream contribution margin — comfortably above the roughly $388,000 the group estimated was needed to offset implementation costs. Detection algorithms, in other words, are bought on a different value pathway than triage algorithms, and evaluating them on minutes-saved alone would wrongly kill a good investment.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How to run the evaluation before you sign
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The authors' conclusion doubles as a buyer's checklist: "efficiency gains alone may be insufficient to justify investment in some triage algorithms, whereas diagnostic algorithms may generate substantial financial value through downstream detection of actionable disease. Incorporating algorithm-specific value pathways, sensitivity analyses, and local financial inputs can support more transparent and informed AI purchasing decisions." Translated into a pre-signature process:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. Name the value pathway first',
                    desc: 'Is this tool supposed to make reads faster (efficiency), find disease that generates downstream revenue (detection), or replace an external cost you already pay per study? Each pathway is modeled differently — and a vendor pitch that blends all three is a red flag to unbundle.',
                  },
                  {
                    title: '2. Replace benchmark inputs with your own',
                    desc: 'Your case volume for the exact CPT codes involved, your radiologist compensation, your measured interpretation times. The ICH result flipped between favorable and unfavorable inside realistic salary and price ranges — national averages will not tell you which side of the line you are on.',
                  },
                  {
                    title: '3. Demand the minutes, then stress-test them',
                    desc: 'Ask the vendor for the measured read-time delta per case, then run the model at half that number. The PE algorithm needed 3.55 minutes saved to break even and delivered 0.83 — a gap sensitivity analysis catches before signature, and the invoice reveals after.',
                  },
                  {
                    title: '4. Price the capital structure, not just the sticker',
                    desc: 'Return on invested capital is driven by what you pay up front. A $200,000 outlay that needs years of efficiency gains to recoup carries different risk than a per-study fee with no capital commitment, where a disappointing tool can simply be switched off.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the framework says about report-level AI
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Notice what all three modeled use cases share: each is a single-finding algorithm bolted onto a workflow where the radiologist still produces the entire report. The efficiency gain is capped at the seconds the alert shaves off one decision — which is exactly why 0.83 minutes per case couldn't carry a $200,000 price tag. This is the economic argument for <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">consolidating narrow tools into a single comprehensive system</Link>: stacking per-algorithm fees multiplies the cost side of the calculator without multiplying the minutes saved.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Run xAID's model through the same six inputs and the structure looks different by design. The AI drafts the complete, structured CT report — not a flag — and xAID's in-house radiologist reviews every preliminary, so what arrives is ready to sign; final signature stays with your reading radiologist. The value pathway is the whole interpretation cost per study, not a per-decision time shaving. And because pricing is per study with no upfront acquisition or implementation capital, the return-on-invested-capital denominator that sank the PE algorithm largely disappears: the evaluation reduces to comparing per-study cost against what you currently pay per read — a comparison worth running against your <Link to="/blog/ct-radiology-coverage-costs-2026/" className="text-xaid-blue-strong underline underline-offset-2">existing coverage costs</Link> before any contract, xAID's included.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of that exempts report-level AI from the framework — it makes the framework easier to apply. The same discipline the JACR authors recommend (local inputs, measured deltas, sensitivity analysis) is precisely what a structured pilot on your own studies provides. How the pricing side of that equation could go further — tying fees to performance itself — is covered in the companion piece on <Link to="/blog/performance-based-pricing-radiology-ai/" className="text-xaid-blue-strong underline underline-offset-2">performance-based pricing for radiology AI</Link>.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the JACR financial framework find about radiology AI ROI?',
                    a: 'A July 2026 JACR analysis from NYU Langone Health built a financial calculator comparing baseline and AI-integrated workflows across three algorithms. An intracranial hemorrhage triage tool was financially favorable (contribution margin improved from −6.0% to −2.4%), a pulmonary embolism triage tool was not (−10.1% contribution margin, −76.6% return on invested capital), and a breast cancer detection tool paid off only through downstream revenue from 35 additional cancers detected — not through reading efficiency.',
                  },
                  {
                    q: 'Which variables actually determine radiology AI ROI?',
                    a: "The JACR calculator used annual case volume, professional reimbursement per study by CPT code, radiologist compensation and productivity, interpretation times with and without AI, AI acquisition and implementation costs, and potential downstream revenue. Because most radiology AI applications are not reimbursable, ROI is usually driven by efficiency gains — which makes local caseload, local salaries, and the actual minutes saved per read the decisive inputs, not vendor benchmarks.",
                  },
                  {
                    q: 'Why did the pulmonary embolism triage algorithm fail the financial test?',
                    a: 'It saved only about 0.83 minutes per case — not enough efficiency to cover its cost. The study estimated it would need to cut read times by about 3.55 minutes per case, or drop in price from $200,000 to roughly $47,000, to break even. The lesson for buyers: a clinically useful triage alert can still be a money-losing purchase if the minutes saved per study are small relative to the price.',
                  },
                  {
                    q: 'How should an imaging center evaluate radiology AI before buying?',
                    a: "Model the deal with local inputs before signing: your annual case volume for the exact study type, your radiologist compensation, your current interpretation times, the vendor's full acquisition and implementation cost, and the algorithm's value pathway — efficiency, downstream revenue, or both. Run sensitivity analyses on salary, volume, and minutes saved, and ask whether the pricing model shifts risk to you (upfront capital) or to the vendor (per-study, no capital outlay). The JACR authors conclude that efficiency gains alone may be insufficient to justify some triage algorithms.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: Bredella MA, Ilyas N, Tobin K, Chatfield S, Recht MP. "Efficiency and Financial Gains From Artificial Intelligence Algorithm Implementation." <em>Journal of the American College of Radiology</em>, July 2026, <a href="https://doi.org/10.1016/j.jacr.2026.06.013" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi:10.1016/j.jacr.2026.06.013</a>; coverage by <a href="https://radiologybusiness.com/topics/artificial-intelligence/pragmatic-framework-evaluating-financial-impact-radiology-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Run the framework on your own studies."
          sub="Per-study pricing, no upfront capital, and ready-to-sign CT reports — the inputs are easy to model. Test the economics on 5 free studies before any contract."
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
              <Link to="/blog/performance-based-pricing-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Pricing &amp; ROI</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Radiology AI Be Priced on Results? The Case for Performance-Based Pricing</div>
              </Link>
              <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Cost Analysis</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Radiology Coverage Costs 2026: In-House, Teleradiology, Locum, and AI Compared</div>
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

export default RadiologyAiRoiEvaluationFramework;
