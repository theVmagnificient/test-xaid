import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyPracticeConsolidationWaitTimes = () => {
  const post = {
    title: 'A Hospital Bought a Radiology Practice. Wait Times Got Worse.',
    dateIso: '2026-08-30',
    date: 'August 30, 2026',
    category: 'Practice Management',
    readingTime: 8,
    description: "Intermountain Health closed its acquisition of Las Vegas's Steinberg Diagnostic in January. By August, some patients were waiting three weeks for scan results the practice used to turn around in under ten days. What the case shows about radiology practice consolidation and capacity.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Radiology Practice Consolidation: Wait Times Rise | xAID</title>
        <meta name="description" content="Intermountain Health's Las Vegas radiology acquisition turned a week-long turnaround into a three-week wait: a case study in practice consolidation." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Radiology Practice Consolidation: Wait Times Rise | xAID" />
        <meta property="og:description" content="Intermountain Health's Las Vegas radiology acquisition turned a week-long turnaround into a three-week wait: a case study in practice consolidation." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-practice-consolidation-wait-times" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiology Practice Consolidation: Wait Times Rise | xAID" />
        <meta name="twitter:description" content="Intermountain Health's Las Vegas radiology acquisition turned a week-long turnaround into a three-week wait: a case study in practice consolidation." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <link rel="canonical" href="https://xaid.ai/blog/radiology-practice-consolidation-wait-times" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-practice-consolidation-wait-times" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-practice-consolidation-wait-times",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology practice consolidation, hospital acquisition radiology practice, imaging wait times, Steinberg Diagnostic Intermountain, radiologist shortage"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What happened after Intermountain Health acquired Steinberg Diagnostic?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Intermountain Health, a Utah-based nonprofit system, finalized its acquisition of Steinberg Diagnostic Medical Imaging (SDMI) — a 12-location, roughly 40-year-old radiology practice in the Las Vegas Valley — on January 22, 2026. By mid-2026, patients and referring physicians were reporting scan-result delays of up to three weeks, up from the practice's typical 7-to-10-day turnaround, and Intermountain confirmed a reporting backlog."
              }
            },
            {
              "@type": "Question",
              "name": "Why did wait times increase after the acquisition?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Intermountain attributed the backlog to a national radiologist shortage that it said is hitting southern Nevada harder than the rest of the country. Nevada is tied with Oklahoma, Mississippi and Wyoming for the lowest number of radiologists per capita of any state, about 9 per 100,000 people, according to a 2025 Medicus Healthcare Solutions report. SDMI had roughly 30 radiologists and over 550 affiliated staff before the deal; Intermountain says it is now working to add about 20 more radiologists and to speed up licensing, credentialing and onboarding."
              }
            },
            {
              "@type": "Question",
              "name": "Is there broader evidence that hospital acquisitions of physician practices increase wait times?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The evidence is directional rather than definitive. A 2025 U.S. Government Accountability Office review of physician-practice consolidation found stakeholders reporting that wait times for available appointments were sometimes shorter at independent practices than at hospital-owned ones, but GAO said it could not identify studies on consolidation's effect on access that met its methodological standards. Roughly 55% of U.S. physicians were employed by or affiliated with a hospital system in 2024, up from about 26% in 2012, per the Physicians Advocacy Institute."
              }
            },
            {
              "@type": "Question",
              "name": "How can AI-assisted reporting help radiology groups absorb volume growth without a wait-time hit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI-assisted reporting produces a structured draft report for a radiologist to review rather than dictate from scratch, cutting the time a radiologist spends per study without cutting a radiologist out of the loop. That gives a practice — consolidated or independent — a way to absorb volume growth from a merger, a new contract, or population growth without a proportional increase in headcount, provided every report still goes through radiologist review before it is ready to sign."
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
                Practice Management
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A hospital bought a radiology practice.<br />
              <span className="text-white/60">Wait times got worse.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Las Vegas's Steinberg Diagnostic Medical Imaging used to turn scans around in about a week. Seven months after Intermountain Health closed its acquisition, some patients were waiting three times that long — a concrete look at what consolidation does to imaging capacity when it isn't matched with more reading capacity.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '7–10 days', label: 'Typical turnaround, before', sub: 'per Steinberg Diagnostic' },
            { stat: 'Up to 23 days', label: 'Documented wait, after', sub: 'one cancer patient\'s case' },
            { stat: '9 per 100K', label: 'Radiologists in Nevada', sub: 'tied for lowest, per state' },
            { stat: '~20', label: 'New radiologists planned', sub: 'to close the gap' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The deal: a 40-year-old independent practice joins a hospital system
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Steinberg Diagnostic Medical Imaging (SDMI) had been reading scans in the Las Vegas Valley since 1988: 12 outpatient imaging centers, roughly 30 radiologists, and more than 550 affiliated or employed radiologists, technologists and staff combined. In October 2025, <a href="https://news.intermountainhealth.org/intermountain-health-signs-agreement-to-acquire-steinberg-diagnostic-medical-imaging/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Intermountain Health</a> — the Salt Lake City-based nonprofit system that already runs more than 80 clinics across southern Nevada — announced it would acquire SDMI. The deal closed in phases and was <a href="https://news.intermountainhealth.org/intermountain-health-finalizes-acquisition-of-steinberg-diagnostic-medical-imaging-in-las-vegas/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">finalized on January 22, 2026</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The stated rationale was the one hospital systems typically give for these deals: expand access, tighten care coordination, and fold a well-regarded independent practice's imaging capacity into a broader network. Eric Liston, Intermountain's Chief Clinical Shared Services Officer, said the acquisition would meet growing demand for "ease of access to high-quality imaging services," and SDMI's founding partner Mark Winkler framed it as joining a larger system to "share our expertise," according to <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/hospital-giant-intermountain-health-acquire-las-vegas-radiology-practice" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>'s coverage of the announcement.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Seven months later: a reporting backlog patients could feel
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                By the second half of 2026, patients and referring physicians in Las Vegas were describing a practice that could no longer turn scans around at its old pace. SDMI's typical result turnaround had been about a week; Radiology Business <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/imaging-wait-times-rise-after-hospital-system-purchases-private-radiology-practice" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported</a> that one patient, 75-year-old cancer patient Richard Smith, was quoted 7-to-10 days for results but waited 23 — long enough that he had to cancel two follow-up doctor's appointments while he waited. "We had to cancel two doctor's appointments, thinking [we would get the results] in the following week," his wife, Susan Smith, told the Las Vegas Review-Journal.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The <a href="https://www.reviewjournal.com/business/radiology-backlog-delays-cancer-other-patients-test-results-at-las-vegas-imaging-centers-3870284/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Las Vegas Review-Journal</a> documented a second case: a STAT MRI for patient Ken Krieger, ordered July 14 and meant to be read within 24 to 48 hours, wasn't read until July 31 — a 17-day gap the patient said contributed to worsening nerve symptoms and falls in the interim. Online reviews for some SDMI locations reportedly slid to around 2.7 out of 5 stars, with one-star complaints about delayed results clustering from around May 2026 onward.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Intermountain didn't dispute the backlog. In a statement reported by Radiology Business and the Review-Journal, the system said: "We understand that waiting for test results can be stressful, and we recognize the uncertainty these delays may create for patients and their families." It attributed the delays to a "national shortage of radiologists, with Southern Nevada being impacted more severely than the rest of the country," and said it is working to add roughly 20 radiologists while expediting licensure, credentialing, privileging and onboarding.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Before and after, in one table
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Metric</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Before acquisition</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Reported after acquisition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Routine result turnaround', '7–10 days (typical, per SDMI)', 'Up to 23 days in a documented case'],
                      ['STAT MRI turnaround', '24–48 hours (ordering standard)', '17 days in a documented case'],
                      ['Ownership structure', 'Independent, physician-led practice', 'Hospital-system-owned outpatient imaging'],
                      ['Radiologist count', '~30 radiologists at SDMI', 'Intermountain adding ~20 more to close gap'],
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
                Figures as reported by Radiology Business and the Las Vegas Review-Journal; individual patient cases are examples cited in that coverage, not practice-wide averages.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why a merger meant to expand access can shrink it
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The mechanism here isn't unique to Las Vegas. Nevada is already tied for the lowest number of radiologists per capita of any U.S. state — about 9 per 100,000 people, alongside Oklahoma, Mississippi and Wyoming, according to a <a href="https://medicushcs.com/resources/navigating-the-radiologist-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2025 Medicus Healthcare Solutions report</a> on the radiologist shortage. Folding a 12-site practice into a larger system's credentialing, IT, billing and referral infrastructure adds administrative integration work on top of that existing supply gap, and none of it reads a single scan. Unless a hospital system brings in materially more reading capacity on day one — new radiologist hires, expanded teleradiology coverage, or software that changes how much a radiologist can read in a shift — bolting more referral volume onto the same interpretation capacity produces exactly what SDMI patients reported: the same number of readers, more studies queued in front of them, and a turnaround time that stretches instead of compresses.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This case is anecdotal but not isolated. A 2025 <a href="https://files.gao.gov/reports/GAO-25-107450/index.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Government Accountability Office review</a> of physician-practice consolidation found that roughly 55% of U.S. physicians were employed by or affiliated with a hospital system in 2024, up from about 26% in 2012 (Physicians Advocacy Institute data cited in the report) — and that some physician groups it interviewed reported wait times for available appointments were sometimes shorter at independent practices than at hospital-owned ones. GAO was careful to note the limits of that evidence: it said it "did not identify any studies that examined the effect of physician consolidation on access to care by any acquiring entity type that met our methodological standards." In other words, the directional concern is well documented in stakeholder testimony; a rigorous causal study of consolidation's effect on wait times specifically doesn't yet exist. The Steinberg case is exactly the kind of concrete, checkable data point that testimony-based evidence usually lacks.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The capacity lever that doesn't require more radiologists to already exist
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Intermountain's own fix — hire about 20 more radiologists — is the right instinct but a slow one; recruiting, licensing, credentialing and privileging a radiologist in a new state routinely takes months, which is exactly the gap SDMI patients fell into this year. It also isn't available to every group: a shortage state can't conjure trained radiologists on demand, whether the practice in question was just acquired or has been independent for decades.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                What can move faster than a hiring pipeline is how much of each existing radiologist's time a single study consumes. AI-assisted CT reporting generates a structured, comprehensive draft report before a radiologist opens the case — covering findings, measurements and standard sections a radiologist would otherwise have to dictate from scratch — so the radiologist's job shifts from composing the report to reviewing, correcting and finalizing it. That is a throughput gain a group can capture without adding headcount, whether that group is a newly consolidated hospital-system practice absorbing merger volume or an independent group absorbing organic growth. It doesn't replace the radiologist shortage as a structural problem, and it isn't a substitute for adequate staffing — but it changes how much volume the radiologists already on staff can absorb before turnaround times start to slip the way SDMI's did. That's the model xAID is built on: an AI-generated draft, reviewed in-house by xAID's own radiologist on every study, delivered ready-to-sign so the client's reading radiologist can finalize it rather than build it from a blank page.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What happened after Intermountain Health acquired Steinberg Diagnostic?',
                    a: "Intermountain Health, a Utah-based nonprofit system, finalized its acquisition of Steinberg Diagnostic Medical Imaging (SDMI) — a 12-location, roughly 40-year-old radiology practice in the Las Vegas Valley — on January 22, 2026. By mid-2026, patients and referring physicians were reporting scan-result delays of up to three weeks, up from the practice's typical 7-to-10-day turnaround, and Intermountain confirmed a reporting backlog.",
                  },
                  {
                    q: 'Why did wait times increase after the acquisition?',
                    a: "Intermountain attributed the backlog to a national radiologist shortage that it said is hitting southern Nevada harder than the rest of the country. Nevada is tied with Oklahoma, Mississippi and Wyoming for the lowest number of radiologists per capita of any state, about 9 per 100,000 people, according to a 2025 Medicus Healthcare Solutions report. SDMI had roughly 30 radiologists and over 550 affiliated staff before the deal; Intermountain says it is now working to add about 20 more radiologists and to speed up licensing, credentialing and onboarding.",
                  },
                  {
                    q: 'Is there broader evidence that hospital acquisitions of physician practices increase wait times?',
                    a: "The evidence is directional rather than definitive. A 2025 U.S. Government Accountability Office review of physician-practice consolidation found stakeholders reporting that wait times for available appointments were sometimes shorter at independent practices than at hospital-owned ones, but GAO said it could not identify studies on consolidation's effect on access that met its methodological standards. Roughly 55% of U.S. physicians were employed by or affiliated with a hospital system in 2024, up from about 26% in 2012, per the Physicians Advocacy Institute.",
                  },
                  {
                    q: 'How can AI-assisted reporting help radiology groups absorb volume growth without a wait-time hit?',
                    a: "AI-assisted reporting produces a structured draft report for a radiologist to review rather than dictate from scratch, cutting the time a radiologist spends per study without cutting a radiologist out of the loop. That gives a practice — consolidated or independent — a way to absorb volume growth from a merger, a new contract, or population growth without a proportional increase in headcount, provided every report still goes through radiologist review before it is ready to sign.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/mergers-and-acquisitions/imaging-wait-times-rise-after-hospital-system-purchases-private-radiology-practice" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "Imaging wait times rise after hospital system purchases private radiology practice" (2026); <a href="https://www.reviewjournal.com/business/radiology-backlog-delays-cancer-other-patients-test-results-at-las-vegas-imaging-centers-3870284/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Las Vegas Review-Journal</a>; <a href="https://news.intermountainhealth.org/intermountain-health-finalizes-acquisition-of-steinberg-diagnostic-medical-imaging-in-las-vegas/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Intermountain Health</a>; <a href="https://medicushcs.com/resources/navigating-the-radiologist-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Medicus Healthcare Solutions, 2025 radiologist shortage report</a>; <a href="https://files.gao.gov/reports/GAO-25-107450/index.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">U.S. Government Accountability Office, GAO-25-107450</a> (2025). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Absorb more volume without a longer wait."
          sub="See how AI-generated, radiologist-reviewed draft reports give your group more reading capacity per radiologist. Try it on 5 free studies."
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
              <Link to="/blog/ct-report-turnaround-time-benchmarks-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Benchmarks</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CT Report Turnaround Time Benchmarks, 2026</div>
              </Link>
              <Link to="/blog/radiology-private-equity-stay-independent/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Practice Management</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why Some Radiology Groups Are Staying Independent</div>
              </Link>
              <Link to="/blog/how-ai-cuts-mri-wait-times/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Capacity</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How AI Cuts MRI Wait Times</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyPracticeConsolidationWaitTimes;
