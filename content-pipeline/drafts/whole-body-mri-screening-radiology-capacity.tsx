import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const WholeBodyMriScreeningRadiologyCapacity = () => {
  const post = {
    title: 'Whole-Body MRI Screening Is Booming. Radiology Capacity Isn\'t.',
    dateIso: '2026-07-19',
    date: 'July 19, 2026',
    category: 'Screening & Capacity',
    readingTime: 8,
    description: "Neko Health's $700M raise highlights a broader whole-body MRI screening boom — and what it means for incidental findings and radiologist capacity.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Whole-Body MRI Screening Boom and Radiology Capacity | xAID</title>
        <meta name="description" content="Neko Health's $700M raise highlights a broader whole-body MRI screening boom — and what it means for incidental findings and radiologist capacity." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Whole-Body MRI Screening Boom and Radiology Capacity | xAID" />
        <meta property="og:description" content="Neko Health's $700M raise highlights a broader whole-body MRI screening boom — and what it means for incidental findings and radiologist capacity." />
        <meta property="og:url" content="https://xaid.ai/blog/whole-body-mri-screening-radiology-capacity" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <link rel="canonical" href="https://xaid.ai/blog/whole-body-mri-screening-radiology-capacity" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Whole-Body MRI Screening Boom and Radiology Capacity | xAID" />
        <meta name="twitter:description" content="Neko Health's $700M raise highlights a broader whole-body MRI screening boom — and what it means for incidental findings and radiologist capacity." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/whole-body-mri-screening-radiology-capacity" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/whole-body-mri-screening-radiology-capacity",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "whole body mri screening, whole body screening, incidental findings radiology, radiology capacity, self-referred imaging"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is Neko Health's scan a whole-body MRI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Neko Health's scan uses roughly 70 sensors combining thermal imaging, 2D/3D photography, and blood analysis to generate an estimated 50 million data points — it does not use MRI or CT and involves no radiation. Whole-body MRI screening is a separate, older category of consumer preventive scanning (offered by companies such as Prenuvo) that does produce MRI images a radiologist has to read."
              }
            },
            {
              "@type": "Question",
              "name": "How common are incidental findings on whole-body MRI screening?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Very common. A 2019 systematic review in the Journal of Magnetic Resonance Imaging pooled 12 studies (5,373 asymptomatic subjects) and found a 32.1% pooled prevalence of critical or indeterminate incidental findings. In a Weill Cornell whole-body MRI program's first 18 months, about 90% of roughly 160 patients had some finding, about 30% had findings requiring follow-up despite being non-worrisome, and about 1% had a malignant or suspected malignant finding."
              }
            },
            {
              "@type": "Question",
              "name": "Does whole-body MRI screening actually catch much cancer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The confirmed yield is low relative to the finding rate. A 2025 European Radiology systematic review and meta-analysis of 10 studies (9,024 asymptomatic participants) found a pooled confirmed-cancer detection rate of 1.57%. The American College of Radiology said in 2023 that evidence is insufficient to recommend total-body screening for people without symptoms, risk factors, or a relevant family history."
              }
            },
            {
              "@type": "Question",
              "name": "Why does the whole-body screening boom matter for radiology capacity?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Self-referred wellness scans add unbudgeted, non-clinically-indicated read and follow-up-imaging volume on top of a system already under strain: outpatient imaging interpretation turnaround time rose 113% between 2014 and 2023 according to the Harvey L. Neiman Health Policy Institute, with CT turnaround up 318% and MRI up 256% over the same period. Capacity added by AI-assisted drafting and triage is one of the few practical ways outpatient centers can absorb this incremental volume without further extending turnaround times."
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
                Screening &amp; Capacity
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Whole-body MRI screening is booming.<br />
              <span className="text-white/60">Radiology capacity isn't.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Neko Health just raised $700M at a near-$7B valuation for full-body wellness scans backed by celebrities and billionaires. Its own scanner isn't an MRI or CT machine — but the wider self-referred screening wave it's part of is, and it's adding incidental-finding workup onto a radiology system that's already behind on turnaround time.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '$700M', label: 'Neko Health Series C', sub: 'near-$7B valuation, July 2026' },
                { stat: '100,000+', label: 'Scans completed', sub: 'Neko Health, UK & Sweden to date' },
                { stat: '32.1%', label: 'Pooled incidental finding rate', sub: 'critical/indeterminate, whole-body MRI' },
                { stat: '113%', label: 'Rise in imaging turnaround time', sub: '2014–2023, Neiman HPI' },
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
                A record raise for a scan that isn't actually an MRI or CT
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/whole-body-imaging-firm-neko-health-raises-700m" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a> that Neko Health, the Stockholm-founded preventive-health startup co-founded by Spotify's Daniel Ek, closed a <strong>$700 million</strong> Series C — led by Lightspeed Venture Partners and O.G. Venture Partners — at a valuation reported at <a href="https://mlq.ai/news/neko-health-raises-700m-series-c-at-nearly-7b-valuation-for-us-expansion/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">nearly $7 billion</a>, up sharply from roughly $1.7 billion at its January 2025 Series B. Individual backers in the round include Meta CEO Mark Zuckerberg and former footballer Thierry Henry, among other high-profile investors.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Neko's own device, though, is not a medical imaging scanner in the MRI/CT sense. Per <a href="https://www.nekohealth.com/us/en/press/neko-health-raises-usd700m-series-c-ahead-of-us-launch" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Neko Health's own materials</a> and coverage, the 60-minute, radiation-free session uses roughly 70 sensors combining thermal imaging, 2D/3D photography, and blood analysis to capture an estimated 50 million data points on skin, metabolic, and cardiovascular risk markers. The company has completed more than <strong>100,000</strong> scans across its UK and Sweden locations (reported counts range from six to eight clinics as it continues opening new sites), with over 350,000 people on its waitlist, and plans its first US clinic in New York later in 2026.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That distinction matters. Neko's sensors don't generate DICOM images a radiologist has to interpret. But Neko is the highest-profile entrant in a broader category — direct-to-consumer, self-referred, celebrity-endorsed body screening — where several peers <em>do</em> use actual whole-body MRI, and it is that category's growth that lands squarely in radiology's queue.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The category Neko is riding: self-referred whole-body MRI
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Whole-body MRI screening — marketed by companies such as Prenuvo as a preventive, longevity-oriented product — has expanded fast as a self-pay, fee-for-service exam, growing alongside the same wellness-and-longevity capital wave that produced Neko's raise. None of it requires a physician referral, and none of it is covered by insurance.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The <a href="https://www.acr.org/News-and-Publications/Media-Center/2023/ACR-Statement-on-Screening-Total-Body-MRI" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology said in 2023</a> that it does not believe there is sufficient evidence to justify recommending total-body screening for patients with no symptoms, risk factors, or family history suggesting underlying disease — and flagged concern that such scans would surface "numerous non-specific findings" leading to unnecessary follow-up testing. That statement predates the current funding wave; the category has grown faster than the evidence base it's built on, as <a href="https://www.rsna.org/news/2026/july/whole-body-mri" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RSNA reported in July 2026</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where the "finding" actually lands
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The evidence on what whole-body MRI screening actually finds is consistent on one point: findings are common, and most aren't dangerous. A 2019 systematic review and meta-analysis in the <em>Journal of Magnetic Resonance Imaging</em>, pooling <a href="https://doi.org/10.1002/jmri.26736" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">12 studies covering 5,373 asymptomatic subjects</a>, found a pooled prevalence of critical or indeterminate incidental findings of <strong>32.1%</strong>, with a substantial share turning out to be false positives on further workup.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A more recent data point, cited in <a href="https://www.rsna.org/news/2026/july/whole-body-mri" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RSNA's July 2026 coverage</a> of Weill Cornell's whole-body MRI screening program, put a finer point on the downstream burden: in the program's first 18 months, about 90% of roughly 160 patients scanned had some finding, about 30% had a finding requiring follow-up despite being non-worrisome, and about 1% had a malignant or suspected malignant finding. Speaking more broadly about the research literature on such programs, University of Washington radiologist Brian Dontchos, MD, told RSNA that "more than 60% of patients undergo additional imaging, most of which yield little valuable information" — and that those downstream work-ups can include invasive procedures carrying their own risk.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Confirmed cancer yield, meanwhile, stays low. A 2025 <em>European Radiology</em> systematic review and meta-analysis of <a href="https://doi.org/10.1007/s00330-025-11976-5" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">10 studies covering 9,024 asymptomatic participants</a> put the pooled confirmed-cancer detection rate at <strong>1.57%</strong> (95% CI: 1.22–2.03%). High finding rate, low confirmed-disease rate, and a wide gap in between that has to be read, triaged, and often re-imaged — by radiologists.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The capacity math this lands on
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this incidental-finding workup is showing up as a line item in any imaging department's budget or staffing plan — it's self-referred demand arriving on top of clinically ordered volume that was already straining turnaround times before the wellness-scan boom accelerated. The <a href="https://www.neimanhpi.org/press-releases/imaging-interpretation-turnaround-time-more-than-doubled-between-2014-and-2023/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Harvey L. Neiman Health Policy Institute</a>, analyzing 2.6 million outpatient imaging claims, found that mean time from scan to interpretation rose <strong>113%</strong> between 2014 and 2023 (from about 0.091 to 0.193 days), with the steepest increases in 2022–2023. CT turnaround rose 318% and MRI turnaround rose 256% over the same period.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Add follow-up CTs and MRIs ordered off wellness-scan findings — most of which, per the evidence above, will turn out benign — onto a queue that is already 113% slower than it was a decade ago, and the capacity problem compounds. This is a distinct pressure from clinician-driven overutilization or the general radiologist shortage: it's volume that patients generate themselves, outside any ordering physician's control, arriving in the same reading queue as urgent, clinically indicated studies.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">
                Three scan categories, three different loads on radiology
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Scan type</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Produces a DICOM image?</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Who reads it</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Radiology impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Neko Health sensor scan</td>
                      <td className="py-3 pr-4 text-[#444] font-light">No (thermal/photo/blood data)</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Neko clinicians; no radiologist read</td>
                      <td className="py-3 text-[#444] font-light">Indirect — flagged findings can trigger a separate diagnostic CT/MRI order</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Self-referred whole-body MRI</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Yes</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Radiologist, same queue as clinical studies</td>
                      <td className="py-3 text-[#444] font-light">Direct — adds a full read plus likely follow-up imaging</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">Physician-ordered diagnostic CT/MRI</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Yes</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Radiologist, clinically prioritized</td>
                      <td className="py-3 text-[#444] font-light">Baseline demand the system is staffed for</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Outpatient imaging centers and radiology groups can't turn away the wellness-scan follow-up volume — referrers and patients expect it to be read on the same timeline as everything else. What they can control is how much radiologist time each additional study consumes. AI-assisted drafting and worklist triage — generating a structured, comprehensive <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">report draft</Link> and surfacing which studies need attention first — is the practical lever for absorbing self-referred surge volume without letting it push out turnaround times for the clinically urgent cases sitting in the same queue. That is the model xAID is built around: a fast, comprehensive draft with an in-house radiologist review on every preliminary, delivered ready-to-sign so the reading radiologist's time goes toward judgment calls, not transcription.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is Neko Health's scan a whole-body MRI?",
                    a: "No. Neko Health's scan uses roughly 70 sensors combining thermal imaging, 2D/3D photography, and blood analysis to generate an estimated 50 million data points — it does not use MRI or CT and involves no radiation. Whole-body MRI screening is a separate, older category of consumer preventive scanning (offered by companies such as Prenuvo) that does produce MRI images a radiologist has to read.",
                  },
                  {
                    q: 'How common are incidental findings on whole-body MRI screening?',
                    a: "Very common. A 2019 systematic review in the Journal of Magnetic Resonance Imaging pooled 12 studies (5,373 asymptomatic subjects) and found a 32.1% pooled prevalence of critical or indeterminate incidental findings. In a Weill Cornell whole-body MRI program's first 18 months, about 90% of roughly 160 patients had some finding, about 30% had findings requiring follow-up despite being non-worrisome, and about 1% had a malignant or suspected malignant finding.",
                  },
                  {
                    q: 'Does whole-body MRI screening actually catch much cancer?',
                    a: 'The confirmed yield is low relative to the finding rate. A 2025 European Radiology systematic review and meta-analysis of 10 studies (9,024 asymptomatic participants) found a pooled confirmed-cancer detection rate of 1.57%. The American College of Radiology said in 2023 that evidence is insufficient to recommend total-body screening for people without symptoms, risk factors, or a relevant family history.',
                  },
                  {
                    q: 'Why does the whole-body screening boom matter for radiology capacity?',
                    a: 'Self-referred wellness scans add unbudgeted, non-clinically-indicated read and follow-up-imaging volume on top of a system already under strain: outpatient imaging interpretation turnaround time rose 113% between 2014 and 2023 according to the Harvey L. Neiman Health Policy Institute, with CT turnaround up 318% and MRI up 256% over the same period. Capacity added by AI-assisted drafting and triage is one of the few practical ways outpatient centers can absorb this incremental volume without further extending turnaround times.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/whole-body-imaging-firm-neko-health-raises-700m" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; funding and valuation details via <a href="https://mlq.ai/news/neko-health-raises-700m-series-c-at-nearly-7b-valuation-for-us-expansion/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">MLQ News</a> and <a href="https://www.nekohealth.com/us/en/press/neko-health-raises-usd700m-series-c-ahead-of-us-launch" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Neko Health</a>; incidental-finding and workflow data from <a href="https://www.rsna.org/news/2026/july/whole-body-mri" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">RSNA</a>, <a href="https://doi.org/10.1002/jmri.26736" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Kwee &amp; Kwee, <em>JMRI</em> (2019)</a>, and <a href="https://doi.org/10.1007/s00330-025-11976-5" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue"><em>European Radiology</em> (2025)</a>; ACR position via the <a href="https://www.acr.org/News-and-Publications/Media-Center/2023/ACR-Statement-on-Screening-Total-Body-MRI" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a>; turnaround-time data from the <a href="https://www.neimanhpi.org/press-releases/imaging-interpretation-turnaround-time-more-than-doubled-between-2014-and-2023/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Harvey L. Neiman Health Policy Institute</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Absorb the surge without blowing turnaround time"
          sub="AI-assisted drafting and triage help outpatient centers handle rising incidental-finding volume. Try it on 5 free studies."
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
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Radiologist Shortage in 2026: What It Means for CT Reporting</div>
              </Link>
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Operations</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks for 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default WholeBodyMriScreeningRadiologyCapacity;
