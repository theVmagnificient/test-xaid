import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const ExpeditedMammogramRecallPathway = () => {
  const post = {
    title: 'An Expedited Pathway Nearly Halved Mammogram Recall Wait Times',
    dateIso: '2026-10-27',
    date: 'October 27, 2026',
    category: 'Operations',
    readingTime: 7,
    description: "A Johns Hopkins study flagged only the highest-suspicion mammogram recalls for fast-tracking and cut the screening-to-biopsy wait from 45 days to 24. The triage logic — and the result — maps directly onto CT.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Expedited Mammogram Recall Pathway Cuts Wait Time | xAID</title>
        <meta name="description" content="A Johns Hopkins study fast-tracked only the highest-suspicion mammogram recalls and cut screening-to-biopsy time from 45 to 24 days — what it means for CT." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Expedited Mammogram Recall Pathway Cuts Wait Time | xAID" />
        <meta property="og:description" content="A Johns Hopkins study fast-tracked only the highest-suspicion mammogram recalls and cut screening-to-biopsy time from 45 to 24 days — what it means for CT." />
        <meta property="og:url" content="https://xaid.ai/blog/expedited-mammogram-recall-pathway/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expedited Mammogram Recall Pathway Cuts Wait Time | xAID" />
        <meta name="twitter:description" content="A Johns Hopkins study fast-tracked only the highest-suspicion mammogram recalls and cut screening-to-biopsy time from 45 to 24 days — what it means for CT." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <link rel="canonical" href="https://xaid.ai/blog/expedited-mammogram-recall-pathway/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/expedited-mammogram-recall-pathway/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/expedited-mammogram-recall-pathway/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "mammogram recall rate, expedited mammography pathway, radiology triage, CT turnaround time, incidental findings follow-up"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the expedited mammogram recall pathway?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is a workflow studied at Johns Hopkins in which a radiologist flags only the most suspicious BI-RADS 0 screening mammograms at the moment of interpretation. Staff arrange the diagnostic follow-up appointment by phone using reserved slots, targeting evaluation within about a week, instead of the patient waiting for a routine scheduling call."
              }
            },
            {
              "@type": "Question",
              "name": "How much faster was the expedited pathway?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The median time from screening to diagnostic evaluation was 7 days on the expedited pathway versus 25 days on the standard pathway. The median time from screening all the way to biopsy was 24 days versus 45 days — close to half."
              }
            },
            {
              "@type": "Question",
              "name": "How many patients were actually fast-tracked?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Out of 36,384 screening mammograms performed between November 2024 and January 2026, 4,647 (12.8%) were recalled for additional workup, and only 57 of those recalls (1.2% of all recalls) were routed through the expedited pathway — the subset the radiologist judged highly suspicious."
              }
            },
            {
              "@type": "Question",
              "name": "Does this triage logic apply to CT, not just mammography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The underlying mechanism is modality-agnostic: a human or AI reviewer separates a small, high-suspicion subset from a large volume of studies at the moment of read, and routes only that subset onto a fast, protected track. CT programs face the same shape of problem with incidental findings and high-suspicion nodules, where published adherence to recommended follow-up has been reported as low as 48%."
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
                Operations
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              An expedited pathway nearly halved<br />
              <span className="text-white/60">mammogram recall wait times</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Johns Hopkins researchers didn't fast-track every recall — just the small, highest-suspicion subset. That narrow triage cut screening-to-biopsy time nearly in half, and the same logic applies directly to CT incidental findings and high-suspicion nodules.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '24 vs 45 days', label: 'Screening-to-biopsy time', sub: 'expedited vs standard' },
            { stat: '7 vs 25 days', label: 'Screening-to-workup time', sub: 'expedited vs standard' },
            { stat: '1.2%', label: 'Of recalls fast-tracked', sub: '57 of 4,647 recalls' },
            { stat: '91.2%', label: 'PPV on flagged cases', sub: 'vs 5.2% unflagged' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the study did
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers led by Babita Panigrahi, MD, of Johns Hopkins University School of Medicine, studied screening mammograms performed between November 2024 and January 2026, as reported by{' '}
                <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/expedited-pathway-mammo-recalls-nearly-halves-diagnostic-timeline" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>{' '}
                on a study published in the <em>Journal of the American College of Radiology</em>. Out of <strong>36,384</strong> screening mammograms, <strong>4,647 (12.8%)</strong> were recalled for additional workup (BI-RADS 0) — the routine mammogram recall rate most imaging centers already live with.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The intervention wasn't aimed at that whole recalled population. At the moment of interpretation, radiologists flagged only the subset of BI-RADS 0 findings they judged <em>highly suspicious</em>. Staff then arranged the diagnostic appointment directly by phone, using reserved slots, targeting evaluation within about a week. The team built this on top of their existing Epic EHR — an electronic flag, reserved appointment slots, and staff education, with no new infrastructure required, according to the researchers.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Only <strong>57 patients</strong> — about <strong>1.2%</strong> of all recalls — were routed onto the expedited pathway. That's the point: the pathway is narrow by design, reserved for the cases where speed matters most, not a blanket promise to see every recalled patient faster.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The timeline effect
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For patients on the expedited pathway, the median screening-to-diagnostic interval was <strong>7 days</strong>, compared with <strong>25 days</strong> for the standard pathway. The diagnostic-to-biopsy interval was <strong>14 days</strong> versus <strong>19 days</strong>. Combined, the median screening-to-biopsy interval was <strong>24 days</strong> on the expedited pathway versus <strong>45 days</strong> on the standard one — close to half.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Interval</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Expedited pathway</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Standard pathway</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Screening to diagnostic evaluation', '7 days (median)', '25 days (median)'],
                      ['Diagnostic to biopsy', '14 days (median)', '19 days (median)'],
                      ['Screening to biopsy (overall)', '24 days (median)', '45 days (median)'],
                      ['PPV of abnormal screening', '91.2%', '5.2%'],
                      ['PPV among biopsied patients', '94.5%', '18.2%'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[1]}</td>
                        <td className="py-3 text-[#666] text-[15px] font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mb-8">
                Figures as reported by <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/expedited-pathway-mammo-recalls-nearly-halves-diagnostic-timeline" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> on the Johns Hopkins study published in the <em>Journal of the American College of Radiology</em>; see the <a href="https://www.sciencedirect.com/science/article/pii/S1546144026005387" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">journal record</a>. PPV = positive predictive value.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The accuracy gap explains why the narrow flag works: among expedited cases, <strong>91.2%</strong> of abnormal screening findings and <strong>94.5%</strong> of biopsies were positive for cancer, versus <strong>5.2%</strong> and <strong>18.2%</strong> on the standard pathway. Radiologists weren't fast-tracking noise — they were fast-tracking the cases most likely to be cancer, and the system protected capacity for exactly those cases. The clinical rationale is straightforward: delay to diagnostic evaluation is associated with later-stage disease, a lower chance of breast-conserving surgery, decreased survival, and more patients lost to follow-up.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a triage story, not a mammography story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Strip away the modality and the mechanism is generic: out of a large volume of studies, a reviewer separates a small, high-suspicion subset at the moment of read, and routes only that subset onto a protected fast track with reserved capacity. The 1.2% figure matters as much as the 24-versus-45-day result — it shows that halving wait time for the cases that matter didn't require rebuilding the whole scheduling system, only correctly identifying the minority that needed it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                CT has the same structural problem, at larger scale. Incidental findings and high-suspicion pulmonary nodules sit in exactly this position: a large population of scans, a small subset that is genuinely urgent, and a routine scheduling process that treats both the same way. The evidence on what happens without a triage mechanism is discouraging — one cohort study of patients with incidental solitary pulmonary nodules found that <strong>52%</strong> did not receive appropriate follow-up per guideline recommendations, as reported in <a href="https://pubmed.ncbi.nlm.nih.gov/40276624/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>The American Journal of Medicine Open</em></a>. A mechanism that reliably separates the high-suspicion 1–2% from routine volume — whether a radiologist's flag or a structured AI draft that surfaces the finding explicitly in the report — is the lever, not a modality-specific fix.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The Johns Hopkins pathway relied on a radiologist's eye plus an EHR flag and reserved scheduling slots — no AI involved. The reason it worked is instructive for AI-assisted CT reporting all the same: speed only helps the patients who need it if the system first identifies <em>which</em> studies need it. A structured, comprehensive report draft that consistently surfaces high-suspicion findings — rather than relying on a busy radiologist to remember to flag them during a dictation queue — extends the same logic to CT. xAID's draft is reviewed by an in-house radiologist on every study and delivered <Link to="/how-ai-ct-reporting-works/" className="text-xaid-blue-strong underline underline-offset-2">ready-to-sign</Link>, so the triage benefit shows up as a faster, more consistent draft rather than a new scheduling workflow layered on top of an already-stretched one.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the expedited mammogram recall pathway?',
                    a: 'It is a workflow studied at Johns Hopkins in which a radiologist flags only the most suspicious BI-RADS 0 screening mammograms at the moment of interpretation. Staff arrange the diagnostic follow-up appointment by phone using reserved slots, targeting evaluation within about a week, instead of the patient waiting for a routine scheduling call.',
                  },
                  {
                    q: 'How much faster was the expedited pathway?',
                    a: 'The median time from screening to diagnostic evaluation was 7 days on the expedited pathway versus 25 days on the standard pathway. The median time from screening all the way to biopsy was 24 days versus 45 days — close to half.',
                  },
                  {
                    q: 'How many patients were actually fast-tracked?',
                    a: 'Out of 36,384 screening mammograms performed between November 2024 and January 2026, 4,647 (12.8%) were recalled for additional workup, and only 57 of those recalls (1.2% of all recalls) were routed through the expedited pathway — the subset the radiologist judged highly suspicious.',
                  },
                  {
                    q: 'Does this triage logic apply to CT, not just mammography?',
                    a: 'The underlying mechanism is modality-agnostic: a human or AI reviewer separates a small, high-suspicion subset from a large volume of studies at the moment of read, and routes only that subset onto a fast, protected track. CT programs face the same shape of problem with incidental findings and high-suspicion nodules, where published adherence to recommended follow-up has been reported as low as 48%.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/medical-imaging/womens-imaging/expedited-pathway-mammo-recalls-nearly-halves-diagnostic-timeline" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, reporting on a study by Babita Panigrahi, MD, and colleagues (Johns Hopkins University School of Medicine) published in the <em>Journal of the American College of Radiology</em> (<a href="https://www.sciencedirect.com/science/article/pii/S1546144026005387" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">journal record</a>); and Kattih Z, et al., <a href="https://pubmed.ncbi.nlm.nih.gov/40276624/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"Rate of Incidental Lung Nodule Follow-Up,"</a> <em>The American Journal of Medicine Open</em> (2025). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Fast-tracking only matters if findings get flagged first"
          sub="See how xAID's AI draft consistently surfaces high-suspicion findings in a structured, ready-to-sign CT report. Try it on 5 free studies."
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
              <Link to="/blog/incidental-lung-nodule-malignancy-risk-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Malignancy Risk Models for Incidental Lung Nodules</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks 2026</div>
              </Link>
              <Link to="/blog/ai-lung-nodule-detection-time-savings/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Commercial AI Cut Chest CT Reporting Time Up to 25%</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ExpeditedMammogramRecallPathway;
