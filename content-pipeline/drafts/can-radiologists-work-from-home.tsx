import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const CanRadiologistsWorkFromHome = () => {
  const post = {
    title: 'Can Radiologists Work From Home? What the Data Actually Shows',
    dateIso: '2026-08-21',
    date: 'August 21, 2026',
    category: 'Workforce & Staffing',
    readingTime: 8,
    description: "A VA case study, ACR/RBMA workforce data, and RTO-mandate attrition research on whether radiologists can work remotely — and what it means for staffing.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Can Radiologists Work From Home? What the Data Shows | xAID</title>
        <meta name="description" content="A VA case study, ACR/RBMA workforce data, and RTO-mandate attrition research on whether radiologists can work remotely — and what it means for staffing." />
        <link rel="canonical" href="https://xaid.ai/blog/can-radiologists-work-from-home/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Can Radiologists Work From Home? What the Data Shows | xAID" />
        <meta property="og:description" content="A VA case study, ACR/RBMA workforce data, and RTO-mandate attrition research on whether radiologists can work remotely — and what it means for staffing." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Can Radiologists Work From Home? What the Data Shows | xAID" />
        <meta name="twitter:description" content="A VA case study, ACR/RBMA workforce data, and RTO-mandate attrition research on whether radiologists can work remotely — and what it means for staffing." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/can-radiologists-work-from-home/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/can-radiologists-work-from-home/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "can a radiologist work from home, remote radiology jobs, teleradiology, radiologist retention, return to office mandate radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can a radiologist work from home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Diagnostic radiologists interpret imaging studies on a PACS workstation, and once secure remote access is set up, reading a scan from a home office is functionally the same task as reading it in a hospital reading room. A 2021 ACR/RBMA workforce survey found 82% of radiology practices already permitted remote work, and a 2024 survey of academic radiologists found 91.8% of institutions offered remote-work options, with 73% of radiologists participating."
              }
            },
            {
              "@type": "Question",
              "name": "What happened when a VA hospital eliminated remote work for radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 VA Office of Inspector General review found that a federal return-to-office mandate was followed by a wave of radiologist resignations at one VA hospital, which the report itself described as a 'mass exodus.' Imaging turnaround reportedly stretched from hours to days, some specialized scans had to be outsourced with turnaround reaching two to three months, and referrals shifted to costlier private-sector providers, per Radiology Business and The Imaging Wire."
              }
            },
            {
              "@type": "Question",
              "name": "Does forcing radiologists back to the office help with the radiologist shortage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The evidence points the other way. A University of Pittsburgh analysis of return-to-office mandates at S&P 500 firms found time-to-fill vacancies rose 23% and hire rates fell 17% after mandates took effect, with turnover most pronounced among senior and highly skilled employees — exactly the profile of an experienced radiologist. A separate VA OIG review found the agency's own national teleradiology backup program lost 10 full-time and roughly 20 fee-basis radiologist applicants amid uncertainty over telework policy in early 2025."
              }
            },
            {
              "@type": "Question",
              "name": "How can imaging organizations avoid a similar staffing shock?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treat remote-work policy as one retention lever among several rather than a single point of failure, and reduce how much any staffing shock can hurt volume. AI-assisted CT reporting is one way to do the latter: it produces a structured draft report from the study, so a radiologist reviews and finalizes a ready-to-sign case instead of dictating one from a blank page, letting a smaller or geographically distributed bench absorb more volume."
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
                Workforce &amp; Staffing
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Can radiologists work from home?<br />
              <span className="text-white/60">What the data actually shows</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Diagnostic radiology is one of the most remote-friendly specialties in medicine — workforce surveys already show most practices allow it. A recent federal watchdog report, and a growing body of workplace research, show what happens when that option is taken away.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '82%', label: 'Practices allow remote work', sub: 'ACR/RBMA workforce survey, 2021' },
            { stat: '31%', label: 'Read exams from home', sub: '424 breast radiologists surveyed, 2025' },
            { stat: '10', label: 'NTP radiologist hires lost', sub: 'to telework-policy uncertainty, early 2025' },
            { stat: '23%', label: 'Slower hiring after RTO', sub: 'S&P 500 firms, Pitt/SSRN study' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What "work from home" actually means for a radiologist
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Diagnostic radiology is unusual among clinical specialties in that the core task — interpreting images and dictating a report — happens entirely on a workstation. Once a practice has secure remote access to its PACS (picture archiving and communication system) set up, reading a study from a home office is technically indistinguishable from reading it in a hospital reading room. That's why teleradiology, in one form or another, has existed for decades, and why remote and hybrid arrangements were already common in radiology before the pandemic accelerated them everywhere else.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The survey data back this up. The <a href="https://doi.org/10.1016/j.jacr.2023.02.043" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2021 ACR/RBMA workforce survey</a>, published in the <em>Journal of the American College of Radiology</em>, found that 82% of radiology practices already permitted some form of remote work, more commonly at academic institutions than private practices. A 2024 survey of members of the Association of Academic Radiologists found <a href="https://www.sciencedirect.com/science/article/abs/pii/S1076633224009462" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">91.8% of institutions offered remote-work options</a>, with 73% of radiologists actually participating in one, 68% calling flexible work options "extremely" or "very important" when evaluating a new job, and 91% reporting that flexible arrangements improved their well-being.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Subspecialties tell the same story. A <a href="https://doi.org/10.1093/jbi/wbaf039" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2025 survey of 424 breast imaging radiologists</a>, published in the <em>Journal of Breast Imaging</em>, found that 31% already read exams from a home workstation, spending a median of about a quarter of their clinical time doing so, and 75% expected remote breast reading to be a significant part of the specialty's future. Notably, the same study found no statistically significant link between having a home workstation and either job satisfaction or burnout — remote access alone doesn't fix everything, but it also isn't the risk some assume.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The VA case: what happens when the option disappears
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In August 2026, the VA Office of Inspector General published a review of radiology staffing and services at one VA hospital that put a number on the risk. Per <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/work-home-mandate-led-mass-exodus-radiologists-1-health-system-oig-says" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business's</a> reporting, a federal return-to-office mandate that took effect in 2025 and eliminated routine telework was followed by what the OIG report itself called a "mass exodus" of radiologists from the facility. Later partial and then broader telework exemptions, renewed only annually, didn't reverse the departures — uncertainty over whether an exemption would survive another year was, per the facility's own former chief of radiology, part of what pushed radiologists toward other jobs that permitted remote work outright.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The operational fallout was concrete. <a href="https://theimagingwire.com/2026/08/02/radiologists-fled-the-va-healthcare-system/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Imaging Wire</a> reports that routine imaging turnaround stretched from hours to days, and some specialized studies had to be outsourced to outside providers, with turnaround on outsourced amyloid PET scans stretching to two to three months. The same reporting notes private-sector radiologist compensation running more than 40% higher than VA pay — part of why the departures happened, and part of why plugging the resulting gap with outside "fee basis" or community providers, as <a href="https://prospect.org/2026/08/17/va-inspector-general-confirms-prospect-reporting-on-radiologist-shortage/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The American Prospect</a> reports the VA has increasingly done, costs meaningfully more than an in-house read.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The VA's own backup network shows the same dynamic from a different angle. A separate <a href="https://www.vaoig.gov/sites/default/files/reports/2025-12/vaoig-25-01255-242-final.pdf" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">December 2025 OIG review of the VA's National Teleradiology Program (NTP)</a> — the system-wide teleradiology service that reads overflow, overnight, and small-site studies for 130 VA facilities — found NTP leaders reported losing 10 full-time and roughly 20 fee-basis radiologist applicants because of "uncertainties regarding hiring freezes and workplace flexibilities" in early 2025. That report also shows how fast demand for this kind of remote coverage is growing: NTP's stat-imaging volume more than tripled, from 314,874 studies in fiscal year 2014 to 1,096,229 in fiscal year 2024. Even with about 300 teleradiologists on staff, NTP missed its own turnaround targets that year — completing only 78.9% of stat studies and 69.3% of routine studies within its 90% goal — with NTP leadership citing a "huge national shortage" of radiologists as a root cause.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This isn't a government-only problem — RTO mandates backfire broadly
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The VA's experience lines up with what researchers find when they study return-to-office mandates generally, across employers with no connection to medicine. A University of Pittsburgh analysis of S&P 500 companies that imposed strict in-office mandates found <a href="https://www.hrdive.com/news/rto-mandates-lead-to-brain-drain-attrition/734989/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">time-to-fill vacancies rose 23% and hire rates fell 17%</a> after the mandates took effect, tracking employment histories of more than three million tech and finance workers. Turnover increases were "abnormally high" and, tellingly, most pronounced among women, senior employees, and highly skilled workers — the exact profile of an experienced radiologist weighing whether to stay. An earlier study by the same researchers, covering S&P 500 firms with full RTO mandates through late 2023, found that <a href="https://fortune.com/2024/01/26/return-to-office-job-satisfaction-financial-performance-study/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">99% of those firms saw a drop in employee job satisfaction</a>, with no corresponding gain in financial performance or firm value to show for it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Put those two data points together and a pattern emerges: mandating in-person attendance for a role that doesn't require it tends to cost an organization its most experienced and most replaceable-only-with-difficulty people first, without a measurable offsetting benefit. Radiology — where the entire workflow already runs through a screen and a dictation microphone — is about as clean a test case for that pattern as any specialty gets.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Comparison: how different staffing approaches hold up under pressure
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Approach</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">What the evidence shows</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Resilience to a departure wave</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">All-in-office mandate</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Preceded a "mass exodus" at one VA hospital; linked to 23% longer time-to-fill and 17% lower hire rates in S&P 500 firms</td>
                      <td className="py-3 text-[#444] font-light">Low — narrows the hiring pool and accelerates exits</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Remote-friendly / hybrid policy</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Already the norm at most practices (82% permit it); linked to higher reported well-being</td>
                      <td className="py-3 text-[#444] font-light">Higher — aligns with where the labor market has moved</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-[#444] font-light">Overflow outsourcing to teleradiology vendors</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Absorbed some VA overflow, but at higher cost and, for some specialized scans, months-long turnaround</td>
                      <td className="py-3 text-[#444] font-light">Medium — works, but is costly and still scarce-headcount-limited</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-[#444] font-light">AI-assisted CT reporting</td>
                      <td className="py-3 pr-4 text-[#444] font-light">Changes how much radiologist time each study needs, rather than where the radiologist sits</td>
                      <td className="py-3 text-[#444] font-light">Higher — decouples volume capacity from headcount</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted CT reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of the office-policy debate changes the underlying constraint every group actually manages: each study still consumes a fixed slice of a radiologist's time, so capacity and headcount stay locked together. Remote-friendly scheduling helps retain the radiologists a group already has; it doesn't change how much of their time each study requires. AI-assisted CT reporting attacks that second variable directly — it produces a structured draft from the study, xAID's in-house radiologist reviews every preliminary read, and the case arrives at the client's reading radiologist ready-to-sign rather than needing to be dictated from a blank page. That's what lets a smaller or more geographically distributed bench absorb a volume spike or an unplanned departure, instead of every coverage gap translating directly into backlog the way it did at the VA.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Can a radiologist work from home?',
                    a: 'Yes. Diagnostic radiologists interpret imaging studies on a PACS workstation, and once secure remote access is set up, reading a scan from a home office is functionally the same task as reading it in a hospital reading room. A 2021 ACR/RBMA workforce survey found 82% of radiology practices already permitted remote work, and a 2024 survey of academic radiologists found 91.8% of institutions offered remote-work options, with 73% of radiologists participating.',
                  },
                  {
                    q: 'What happened when a VA hospital eliminated remote work for radiologists?',
                    a: "A 2026 VA Office of Inspector General review found that a federal return-to-office mandate was followed by a wave of radiologist resignations at one VA hospital, which the report itself described as a 'mass exodus.' Imaging turnaround reportedly stretched from hours to days, some specialized scans had to be outsourced with turnaround reaching two to three months, and referrals shifted to costlier private-sector providers, per Radiology Business and The Imaging Wire.",
                  },
                  {
                    q: 'Does forcing radiologists back to the office help with the radiologist shortage?',
                    a: "The evidence points the other way. A University of Pittsburgh analysis of return-to-office mandates at S&P 500 firms found time-to-fill vacancies rose 23% and hire rates fell 17% after mandates took effect, with turnover most pronounced among senior and highly skilled employees — exactly the profile of an experienced radiologist. A separate VA OIG review found the agency's own national teleradiology backup program lost 10 full-time and roughly 20 fee-basis radiologist applicants amid uncertainty over telework policy in early 2025.",
                  },
                  {
                    q: 'How can imaging organizations avoid a similar staffing shock?',
                    a: 'Treat remote-work policy as one retention lever among several rather than a single point of failure, and reduce how much any staffing shock can hurt volume. AI-assisted CT reporting is one way to do the latter: it produces a structured draft report from the study, so a radiologist reviews and finalizes a ready-to-sign case instead of dictating one from a blank page, letting a smaller or geographically distributed bench absorb more volume.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: 2021 ACR/RBMA Workforce Survey, <em>Journal of the American College of Radiology</em>, <a href="https://doi.org/10.1016/j.jacr.2023.02.043" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2023.02.043</a>; Association of Academic Radiologists 2024 survey, <a href="https://www.sciencedirect.com/science/article/abs/pii/S1076633224009462" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ScienceDirect</a>; 2025 breast imaging home-workstation survey, <em>Journal of Breast Imaging</em>, <a href="https://doi.org/10.1093/jbi/wbaf039" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1093/jbi/wbaf039</a>; VA Office of Inspector General review of radiology staffing at a VA medical center (August 2026), as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/work-home-mandate-led-mass-exodus-radiologists-1-health-system-oig-says" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://theimagingwire.com/2026/08/02/radiologists-fled-the-va-healthcare-system/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a>, and <a href="https://prospect.org/2026/08/17/va-inspector-general-confirms-prospect-reporting-on-radiologist-shortage/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The American Prospect</a>; VA OIG, "Review of Veterans Health Administration's National Teleradiology Program" (December 4, 2025), report 25-01255-242, <a href="https://www.vaoig.gov/sites/default/files/reports/2025-12/vaoig-25-01255-242-final.pdf" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">vaoig.gov</a>; University of Pittsburgh return-to-office research, as reported by <a href="https://www.hrdive.com/news/rto-mandates-lead-to-brain-drain-attrition/734989/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">HR Dive</a>, the <a href="https://www.utimes.pitt.edu/news/study-return-office" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">University Times</a>, and <a href="https://fortune.com/2024/01/26/return-to-office-job-satisfaction-financial-performance-study/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Fortune</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Don't let a staffing shock become a backlog"
          sub="AI-assisted CT reporting lets your radiologist bench absorb volume spikes and coverage gaps. Try it on 5 free studies and see the ready-to-sign reports."
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
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce &amp; Staffing</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
              <Link to="/blog/teleradiology-jobs/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce &amp; Staffing</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Teleradiology Jobs: A 2026 Careers Guide for Radiologists</div>
              </Link>
              <Link to="/blog/best-metro-areas-for-radiologists-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Workforce &amp; Staffing</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Best Metro Areas for Radiologists in 2026</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CanRadiologistsWorkFromHome;
