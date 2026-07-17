import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const TeleradiologyJobs = () => {
  const post = {
    title: 'Teleradiology Jobs: A 2026 Careers Guide for Radiologists',
    dateIso: '2026-07-17',
    date: 'July 17, 2026',
    category: 'Careers',
    readingTime: 9,
    description: "Teleradiology jobs, explained for radiologists: how remote reading works, pay vs on-site, multi-state licensing, and what groups look for in 2026.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Teleradiology Jobs: A 2026 Careers Guide | xAID</title>
        <meta name="description" content="Teleradiology jobs, explained for radiologists: how remote reading works, pay vs on-site, multi-state licensing, and what groups look for in 2026." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Teleradiology Jobs: A 2026 Careers Guide | xAID" />
        <meta property="og:description" content="Teleradiology jobs, explained for radiologists: how remote reading works, pay vs on-site, multi-state licensing, and what groups look for in 2026." />
        <meta property="og:url" content="https://xaid.ai/blog/teleradiology-jobs" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teleradiology Jobs: A 2026 Careers Guide | xAID" />
        <meta name="twitter:description" content="Teleradiology jobs, explained for radiologists: how remote reading works, pay vs on-site, multi-state licensing, and what groups look for in 2026." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/teleradiology-jobs" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/teleradiology-jobs",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "teleradiology jobs, teleradiology careers, teleradiology salary, remote radiologist jobs, how to become a teleradiologist"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What do teleradiology jobs pay compared with on-site radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Base compensation for teleradiology tracks the broader radiology market rather than sitting far above or below it. Medscape's 2026 report put average radiologist compensation at about $571,000 in 2025, up roughly 9% year over year, making radiology the third highest-paid specialty. Teleradiology's real difference is structural: many roles are volume- or RVU-based 1099 contracts rather than salaried W-2 positions, so earnings scale with reads, subspecialty mix, and the number of state licenses a reader holds."
              }
            },
            {
              "@type": "Question",
              "name": "How do you become a teleradiologist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The clinical path is the same as any diagnostic radiologist: a four-year ACGME-accredited diagnostic radiology residency after an intern year, followed by American Board of Radiology certification through the Core and Certifying exams. Most teleradiology employers require ABR (or AOBR) board certification or board eligibility. From there the teleradiology-specific work is administrative: obtaining medical licenses in the states you will read for, completing hospital credentialing and privileging, and learning the group's PACS and worklist tools."
              }
            },
            {
              "@type": "Question",
              "name": "What state licenses do remote radiologist jobs require?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Under long-standing telemedicine rules, a radiologist generally must hold an active medical license in the state where the patient is physically located at the time of the exam, not where the radiologist sits. Teleradiologists covering multiple facilities therefore accumulate many state licenses. The Interstate Medical Licensure Compact, now spanning more than 40 states plus Washington, D.C., offers an expedited route to licenses in multiple member states, which is why radiologists benefit from it disproportionately."
              }
            },
            {
              "@type": "Question",
              "name": "Are teleradiology jobs in demand in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The AAMC projects a U.S. shortage of up to 86,000 physicians by 2036, and the ACR reports that radiologist attrition more than doubled between 2014 and 2022, from 1.1% to 2.5% a year. With imaging volume rising faster than the supply of readers, remote reading has become one of the main ways groups extend coverage across geographies and after hours, keeping teleradiology demand high."
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
                Careers
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Teleradiology jobs: a 2026 careers guide<br />
              <span className="text-white/60">for radiologists</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Teleradiology jobs are among the most flexible roles in medicine — and among the most misunderstood. This guide covers how remote reading actually works, how the pay compares with on-site practice, the licensing that gates it, and what groups look for when they hire.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '$571K', label: 'Avg. radiologist comp', sub: '2025, Medscape' },
                { stat: '+9%', label: 'Year-over-year pay growth', sub: 'radiology, 2024→2025' },
                { stat: '86,000', label: 'Projected physician shortfall', sub: 'U.S. by 2036 (AAMC)' },
                { stat: '40+', label: 'States in the licensure compact', sub: 'plus Washington, D.C.' },
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
                How teleradiology jobs actually work
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A teleradiology job is, at its core, a diagnostic radiology job in which the images travel instead of the radiologist. A study is acquired at a hospital or imaging center, routed over a secure network to the reader's workstation, interpreted on a PACS viewer, and returned as a report — often from a home office hundreds or thousands of miles away. The clinical work is identical to on-site reading; what changes is where the read happens and how the arrangement is structured, licensed, and paid.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                In practice, teleradiology jobs fall along a spectrum. At one end are <em>preliminary</em> or after-hours roles — nighthawk and weekend coverage where a remote radiologist provides a wet read that a day-shift radiologist later finalizes. At the other are <em>final</em> reading roles where the teleradiologist signs the definitive report. Employment models vary just as widely: salaried W-2 positions with a teleradiology company or hospital group, 1099 independent-contractor arrangements paid per study or per relative value unit (RVU), and hybrid roles that mix on-site shifts with remote reading. The American College of Radiology's practice guidance treats teleradiology as an extension of the standard of care, not a lesser one — the same accreditation, quality, and reporting expectations apply.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That flexibility is why remote reading has moved from a niche night-coverage tool to a mainstream career track. It also explains why the label "teleradiology jobs" now covers everything from a subspecialty neuroradiologist reading complex MRI from home to a generalist clearing emergency CT overnight.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Teleradiology salary vs on-site: what the comp data shows
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The most common question about teleradiology careers is whether remote work pays a premium or a penalty. The honest answer: base compensation largely tracks the broader radiology market. Medscape's 2026 report put average radiologist compensation at roughly <strong>$571,000</strong> in 2025 — up about <strong>9%</strong> year over year and enough to rank radiology the <a href="https://theimagingwire.com/2026/04/15/radiologist-salaries-grew-9-in-2025/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">third highest-paid specialty</a>, behind only orthopedics and cardiology. Doximity's most recent data likewise showed radiology among the specialties with the <a href="https://radiologybusiness.com/topics/healthcare-management/radiologist-salary/radiology-among-4-specialties-seeing-greatest-year-over-year-pay-gains-doximity" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">largest year-over-year pay gains</a>, a direct reflection of demand outrunning supply.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Teleradiology's real financial difference is not the headline number but the <em>structure</em> behind it. Because so many remote roles are volume- or RVU-based rather than salaried, a reader's earnings scale with throughput, subspecialty mix, modality, and — critically — the number of state licenses held, which determines how much work is even eligible to reach the queue. A high-volume 1099 reader with broad multi-state licensure can out-earn a salaried on-site peer; a part-time contractor reading a narrow set of exams will earn far less. Contractors also carry costs a salaried radiologist does not: self-employment tax, malpractice premiums, and benefits.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                One structural caveat worth naming: pay in radiology is often opaque. A 2026 analysis found only about half of U.S. radiologist job listings even disclosed a salary estimate — a pattern we unpack in our look at <Link to="/blog/radiologist-salary-transparency-2026/" className="text-xaid-blue-strong underline underline-offset-2">radiologist salary transparency</Link>. Geography matters too, and not the way remote work might suggest; the <Link to="/blog/best-metro-areas-for-radiologists-2026/" className="text-xaid-blue-strong underline underline-offset-2">best metro areas for radiologists</Link> still shape rates because licensing, referral relationships, and group economics remain local even when the read is not.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Licensing across states: the real gate to remote radiologist jobs
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For most remote radiologist jobs, state licensing — not clinical skill — is the practical bottleneck. Under established telemedicine rules, a radiologist must generally hold an active, unrestricted medical license in the state where the <em>patient</em> is physically located at the time of imaging, regardless of where the radiologist sits. A teleradiologist covering a national footprint may therefore need to maintain a dozen or more licenses, each with its own application, fees, and renewal cycle.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is where the <a href="https://imlcc.com/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Interstate Medical Licensure Compact</a> matters. The compact — now spanning more than 40 states plus Washington, D.C. — offers an expedited pathway to obtain full licenses in multiple member states from a single qualifying license, and federal telehealth resources note that <a href="https://telehealth.hhs.gov/licensure/licensure-compacts" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">specialties that read across state lines</a> benefit most. It does not create one national license — each state still issues its own — but it compresses the timeline and cost of building the multi-state footprint that high-volume teleradiology careers depend on. For any candidate, the number and mix of state licenses is often the single biggest lever on how much work they can accept.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                How to become a teleradiologist
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                There is no separate "teleradiology" credential. The clinical path is the standard diagnostic radiology route: an intern year of clinical training, a four-year ACGME-accredited diagnostic radiology residency, and <a href="https://www.theabr.org/diagnostic-radiology/initial-certification/certification-requirements" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Board of Radiology certification</a> earned through the Core exam (taken after 36 months of residency) and the Certifying exam (at least 12 months after residency ends). Many readers add a subspecialty fellowship — neuroradiology, body, musculoskeletal, or emergency radiology — which widens the range of studies they can take on remotely.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Once board-certified or board-eligible, the work of entering teleradiology is largely administrative rather than clinical: securing medical licenses in the states you intend to read for, completing hospital-by-hospital credentialing and privileging, obtaining malpractice coverage appropriate to remote practice, and getting comfortable with the group's PACS, worklist, and reporting tools. Candidates weighing a remote career should also understand the alternatives they are choosing among — our comparison of <Link to="/blog/after-hours-radiology-coverage-options/" className="text-xaid-blue-strong underline underline-offset-2">after-hours radiology coverage options</Link> lays out how nighthawk, locum, and teleradiology roles differ in commitment and pay.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What groups look for in teleradiology careers
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Demand for readers is real and durable. The AAMC projects a U.S. shortage of <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">up to 86,000 physicians by 2036</a>, and the ACR reports that <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">radiologist attrition more than doubled</a> between 2014 and 2022 — from 1.1% to 2.5% a year — even as imaging volume climbed. That imbalance keeps teleradiology hiring active. But groups are selective about the readers they bring on. Three attributes consistently matter most:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Breadth of licensure and credentials',
                    desc: 'The more states a radiologist is licensed and credentialed in, the more of a group’s worklist they can clear. Multi-state licensure is often the deciding factor between two equally qualified candidates, which is why compact eligibility is a recruiting advantage.',
                  },
                  {
                    title: 'Subspecialty depth and modality range',
                    desc: 'Groups value readers who can cover the mix they actually receive — emergency CT overnight, complex MRI, or a subspecialty backlog. A fellowship and a demonstrable comfort across modalities widen the roles you qualify for and the rate you command.',
                  },
                  {
                    title: 'Turnaround, quality, and communication',
                    desc: 'Remote reading lives or dies on measurable turnaround and clean, structured reports. Groups look for radiologists who hit turnaround targets, document critical findings reliably, and communicate urgent results — the same accountability expected on-site.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI CT reporting fits a teleradiology career
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A fair question for anyone building a remote career is what AI does to it. The evidence points toward augmentation, not replacement. The persistent supply-demand gap — outlined in our analysis of the <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">radiologist shortage</Link> — means the constraint is reading capacity, and tools that raise a reader's throughput are a lever on that constraint rather than a substitute for the reader.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That is the model xAID is built on: a foundation model drafts a structured, comprehensive report, and xAID's in-house radiologist reviews every preliminary before it is delivered ready-to-sign. The reader is augmented, not bypassed — for teleradiology groups that means more studies cleared per reader without proportionally growing headcount. We cover the operational side in our comparison of <Link to="/ai-vs-teleradiology/" className="text-xaid-blue-strong underline underline-offset-2">AI vs traditional teleradiology</Link> and in resources built <Link to="/for-teleradiology-companies/" className="text-xaid-blue-strong underline underline-offset-2">for teleradiology companies</Link>.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What do teleradiology jobs pay compared with on-site radiology?',
                    a: "Base compensation for teleradiology tracks the broader radiology market rather than sitting far above or below it. Medscape's 2026 report put average radiologist compensation at about $571,000 in 2025, up roughly 9% year over year, making radiology the third highest-paid specialty. Teleradiology's real difference is structural: many roles are volume- or RVU-based 1099 contracts rather than salaried W-2 positions, so earnings scale with reads, subspecialty mix, and the number of state licenses a reader holds.",
                  },
                  {
                    q: 'How do you become a teleradiologist?',
                    a: 'The clinical path is the same as any diagnostic radiologist: a four-year ACGME-accredited diagnostic radiology residency after an intern year, followed by American Board of Radiology certification through the Core and Certifying exams. Most teleradiology employers require ABR (or AOBR) board certification or board eligibility. From there the teleradiology-specific work is administrative: obtaining medical licenses in the states you will read for, completing hospital credentialing and privileging, and learning the group’s PACS and worklist tools.',
                  },
                  {
                    q: 'What state licenses do remote radiologist jobs require?',
                    a: 'Under long-standing telemedicine rules, a radiologist generally must hold an active medical license in the state where the patient is physically located at the time of the exam, not where the radiologist sits. Teleradiologists covering multiple facilities therefore accumulate many state licenses. The Interstate Medical Licensure Compact, now spanning more than 40 states plus Washington, D.C., offers an expedited route to licenses in multiple member states, which is why radiologists benefit from it disproportionately.',
                  },
                  {
                    q: 'Are teleradiology jobs in demand in 2026?',
                    a: 'Yes. The AAMC projects a U.S. shortage of up to 86,000 physicians by 2036, and the ACR reports that radiologist attrition more than doubled between 2014 and 2022, from 1.1% to 2.5% a year. With imaging volume rising faster than the supply of readers, remote reading has become one of the main ways groups extend coverage across geographies and after hours, keeping teleradiology demand high.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: radiologist compensation via Medscape and Doximity, as reported by <a href="https://theimagingwire.com/2026/04/15/radiologist-salaries-grew-9-in-2025/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Imaging Wire</a> and <a href="https://radiologybusiness.com/topics/healthcare-management/radiologist-salary/radiology-among-4-specialties-seeing-greatest-year-over-year-pay-gains-doximity" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; physician-shortage projection from the <a href="https://www.aamc.org/news/press-releases/new-aamc-report-shows-continuing-projected-physician-shortage" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">AAMC</a>; radiologist attrition data from the <a href="https://www.acr.org/Clinical-Resources/Publications-and-Research/ACR-Bulletin/2026/radiologist-shortage-work-force-update" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology</a>; certification requirements from the <a href="https://www.theabr.org/diagnostic-radiology/initial-certification/certification-requirements" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American Board of Radiology</a>; and multi-state licensing from the <a href="https://imlcc.com/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Interstate Medical Licensure Compact</a> and <a href="https://telehealth.hhs.gov/licensure/licensure-compacts" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">telehealth.hhs.gov</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="More reads per radiologist, without hiring a proportional headcount."
          sub="xAID drafts structured, ready-to-sign reports your reading radiologist signs. See it on 5 free studies."
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
              <Link to="/blog/radiologist-salary-transparency-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Labor Market</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Only 48% of Radiologist Job Listings Show Pay</div>
              </Link>
              <Link to="/blog/best-metro-areas-for-radiologists-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The Best Metro Areas for Radiologists in 2026</div>
              </Link>
              <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default TeleradiologyJobs;
