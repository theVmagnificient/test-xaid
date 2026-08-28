import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const StrokeImagingCostsReperfusionRates = () => {
  const post = {
    title: 'Stroke Imaging Costs Tripled, Reperfusion Rates Fell',
    dateIso: '2026-08-28',
    date: 'August 28, 2026',
    category: 'Appropriate Use',
    readingTime: 7,
    description: "A 2026 study of 1,251 code stroke activations found imaging costs tripled while reperfusion rates fell from 14.3% to 5.4%. What the data means for radiology.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{post.title} | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/stroke-imaging-costs-reperfusion-rates/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | xAID`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | xAID`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/stroke-imaging-costs-reperfusion-rates" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/stroke-imaging-costs-reperfusion-rates",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "stroke imaging costs, code stroke CTA utilization, reperfusion therapy rates, stroke imaging appropriate use, AI CT reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Have stroke imaging costs really tripled?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At the single primary stroke center studied, annual code stroke imaging expenditure rose from $70,616 in 2020 to $259,290 in 2025 — a roughly 3.7-fold increase — according to a 2026 retrospective analysis of 1,251 code stroke activations published in the journal Clinical Imaging. The increase was driven mainly by an 800% rise in CT angiography (CTA) of the head and neck over the same period."
              }
            },
            {
              "@type": "Question",
              "name": "Why are reperfusion rates falling even as imaging use rises?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The number of patients who actually received reperfusion treatment (IV thrombolysis or endovascular thrombectomy) stayed roughly flat — 19 in 2020 versus 16 in 2025 — while code stroke activations climbed from 133 to 298 a year. That pushed the reperfusion rate down from 14.3% to 5.4%. The study's authors describe code stroke pathways as increasingly functioning as broad screening strategies that favor sensitivity over specificity, scanning far more suspected strokes without a matching rise in patients who qualify for treatment."
              }
            },
            {
              "@type": "Question",
              "name": "What happened to the cost per treated patient?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Average imaging cost per patient who went on to receive reperfusion therapy rose more than fourfold, from $3,717 in 2020 to $16,205 in 2025. As the screened population widens faster than the treated population, the imaging bill for the whole pathway increasingly lands on a shrinking group of patients who actually benefit from treatment."
              }
            },
            {
              "@type": "Question",
              "name": "Does this mean stroke CT imaging should be cut back?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not necessarily — some sensitivity trade-off is appropriate given how time-critical missed strokes are. But the data is a value signal, not just a volume signal: it argues for refining who gets escalated to CTA rather than reflexively cutting scans, and for making sure the resulting interpretation workload doesn't become the bottleneck that slows the patients who do need fast treatment."
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
                Appropriate Use
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Stroke imaging costs tripled.<br />
              <span className="text-white/60">Reperfusion rates fell.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A six-year look at code stroke activations found imaging expenditure climbing nearly fourfold while the share of patients who actually received reperfusion treatment shrank by more than half. More scanning did not buy more treated strokes — it bought more interpretation volume.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '3.7x', label: 'Rise in annual imaging costs', sub: '$70,616 → $259,290, 2020–2025' },
            { stat: '800%', label: 'Increase in CTA head/neck use', sub: 'the single largest cost driver' },
            { stat: '5.4%', label: 'Reperfusion rate in 2025', sub: 'down from 14.3% in 2020' },
            { stat: '4.4x', label: 'Cost per treated patient', sub: '$3,717 → $16,205' },
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
                Researchers led by Nisharg Parikh at Rutgers Robert Wood Johnson Medical School retrospectively reviewed <strong>1,251 code stroke activations</strong> between 2020 and 2025 at a single primary stroke center, tracking imaging use, spending, and reperfusion treatment year over year. The study was published in the journal <a href="https://doi.org/10.1016/j.clinimag.2026.110936" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>Clinical Imaging</em></a> and covered <a href="https://radiologybusiness.com/topics/medical-imaging/neuroimaging/stroke-related-imaging-costs-have-tripled-recent-years-despite-declining-reperfusion-rates" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">by Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Annual code stroke imaging expenditure rose from <strong>$70,616 in 2020 to $259,290 in 2025</strong> — a roughly 3.7-fold increase. The main driver wasn't a broader panel of tests; it was a single modality doing far more work. CT angiography (CTA) of the head and neck increased by roughly <strong>800%</strong> over the study period, as more and more suspected-stroke patients were routed straight to CTA at activation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Code stroke activations themselves more than doubled too — from 133 a year to 298 — reflecting how much more liberally EDs are triggering the full stroke pathway. That's the volume side of the story. The outcome side moved the opposite direction.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The volume-outcome mismatch
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                While activations and imaging climbed, the number of patients who actually received reperfusion treatment — IV thrombolysis (IVT) or endovascular thrombectomy (EVT) — barely moved: 19 patients in 2020, 16 in 2025. Divide treated patients by activations and the reperfusion rate falls from <strong>14.3% to 5.4%</strong>. More than twice as many code stroke workups are now producing a treatable case only about a third as often.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                As the authors put it, code stroke pathways — particularly in emergency departments — have become broad "screening strategies" that aim to maximize sensitivity with lower specificity. That trade-off isn't inherently wrong: missing a treatable stroke is a far worse error than an unnecessary CTA. But it does mean the imaging system is absorbing a growing share of low-probability cases, and someone still has to read every one of those studies against a clock.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Cost is concentrating on fewer treated patients
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The clearest expression of the mismatch is cost per treated patient, which rose more than fourfold — from <strong>$3,717 in 2020 to $16,205 in 2025</strong>. That figure isn't a treatment-cost increase; it's the imaging spend for the whole widening funnel divided across a shrinking group of patients who make it to reperfusion. The study's authors called for more research into patient outcomes and cost-effectiveness before treating rising CTA volume as simply "more thorough" stroke care.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                2020 vs. 2025, at a glance
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Metric</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">2020</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Code stroke activations', '133/yr', '298/yr'],
                      ['CTA head/neck utilization', 'baseline', '+800%'],
                      ['Annual imaging expenditure', '$70,616', '$259,290'],
                      ['Patients receiving IVT/EVT', '19', '16'],
                      ['Reperfusion rate', '14.3%', '5.4%'],
                      ['Cost per treated patient', '$3,717', '$16,205'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[1]}</td>
                        <td className="py-3 text-[#444] text-[15px] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Figures from a single primary stroke center's retrospective review of 1,251 code stroke activations, 2020–2025. Reperfusion-rate and cost-per-patient figures are calculated from the reported activation, treatment, and expenditure counts.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is an interpretation-capacity story, not just a spending story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Broader stroke screening is a defensible clinical choice — the cost of missing a large-vessel occlusion is measured in disability, not dollars. But wider nets have an operational consequence that rarely makes the cost tables: every one of those extra CTAs still needs a fast, accurate read, and stroke reads carry the tightest turnaround expectations in radiology. Tripling imaging costs at one center implies a comparable jump in interpretation volume, layered onto emergency and after-hours coverage that was already stretched before this trend showed up.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a familiar pattern to anyone tracking imaging utilization broadly — ED CT use has been rising for years even as ED visit counts fall, a trend covered in our look at <Link to="/blog/overutilization-of-medical-imaging/" className="text-xaid-blue-strong underline underline-offset-2">imaging overutilization and radiologist capacity</Link>. Stroke imaging is simply a sharper, time-critical version of the same dynamic: appropriate use and interpretation throughput are now two sides of the same problem, not separate ones.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where structured AI CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of this argues for scanning less when a stroke is suspected — it argues for making the resulting workload sustainable. That's the bottleneck AI-assisted CT reporting is built to relieve: a structured, comprehensive draft generated the moment a stroke CTA lands in the queue, so the radiologist's time goes to judgment on the studies that matter rather than re-typing normal findings on the ones that don't. xAID's foundation-model reports go through in-house radiologist review on every preliminary and reach the reading radiologist ready-to-sign — the same speed a growing screening volume demands, without changing who is accountable for the final read.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Have stroke imaging costs really tripled?',
                    a: 'At the single primary stroke center studied, annual code stroke imaging expenditure rose from $70,616 in 2020 to $259,290 in 2025 — a roughly 3.7-fold increase — according to a 2026 retrospective analysis of 1,251 code stroke activations published in the journal Clinical Imaging. The increase was driven mainly by an 800% rise in CT angiography (CTA) of the head and neck over the same period.',
                  },
                  {
                    q: 'Why are reperfusion rates falling even as imaging use rises?',
                    a: "The number of patients who actually received reperfusion treatment (IV thrombolysis or endovascular thrombectomy) stayed roughly flat — 19 in 2020 versus 16 in 2025 — while code stroke activations climbed from 133 to 298 a year. That pushed the reperfusion rate down from 14.3% to 5.4%. The study's authors describe code stroke pathways as increasingly functioning as broad screening strategies that favor sensitivity over specificity, scanning far more suspected strokes without a matching rise in patients who qualify for treatment.",
                  },
                  {
                    q: 'What happened to the cost per treated patient?',
                    a: 'Average imaging cost per patient who went on to receive reperfusion therapy rose more than fourfold, from $3,717 in 2020 to $16,205 in 2025. As the screened population widens faster than the treated population, the imaging bill for the whole pathway increasingly lands on a shrinking group of patients who actually benefit from treatment.',
                  },
                  {
                    q: 'Does this mean stroke CT imaging should be cut back?',
                    a: "Not necessarily — some sensitivity trade-off is appropriate given how time-critical missed strokes are. But the data is a value signal, not just a volume signal: it argues for refining who gets escalated to CTA rather than reflexively cutting scans, and for making sure the resulting interpretation workload doesn't become the bottleneck that slows the patients who do need fast treatment.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: N. Parikh et al., "The rising cost of code stroke imaging and treatment: A six-year experience at a primary stroke center," <em>Clinical Imaging</em> (2026), <a href="https://doi.org/10.1016/j.clinimag.2026.110936" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">DOI: 10.1016/j.clinimag.2026.110936</a>, as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/neuroimaging/stroke-related-imaging-costs-have-tripled-recent-years-despite-declining-reperfusion-rates" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Rising imaging volume shouldn't mean slower reads"
          sub="See how structured, radiologist-reviewed AI CT reporting handles growing screening workload. Try it on 5 free studies."
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
              <Link to="/blog/overutilization-of-medical-imaging/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Fewer Imaging Gatekeepers, More Scans: The Capacity Squeeze</div>
              </Link>
              <Link to="/blog/low-value-imaging-clinician-knowledge/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Appropriate Use</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Low-Value Imaging: What Clinician Knowledge Reveals</div>
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

export default StrokeImagingCostsReperfusionRates;
