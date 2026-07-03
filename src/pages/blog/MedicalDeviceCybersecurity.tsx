import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const MedicalDeviceCybersecurity = () => {
  const post = {
    title: 'Medical Device Cybersecurity: What the CISA DICOM Advisory Means for AI Imaging Buyers',
    dateIso: '2026-07-03',
    date: 'July 3, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description:
      "CISA's June 2026 advisory flagged five vulnerabilities in OFFIS DCMTK, an open-source DICOM toolkit embedded across imaging software. Here's what the advisory means for imaging IT — and the security questions to ask any AI CT reporting vendor about data handling, PHI flow, and deployment model.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>CISA DICOM Advisory: What AI Imaging Buyers Must Know | xAID</title>
        <meta name="description" content="CISA flagged five DICOM toolkit vulnerabilities in June 2026, one rated 9.8 critical. What it means for imaging IT and the security questions to ask any AI CT reporting vendor." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CISA DICOM Advisory: What AI Imaging Buyers Must Know | xAID" />
        <meta property="og:description" content="CISA flagged five DICOM toolkit vulnerabilities in June 2026, one rated 9.8 critical. What it means for imaging IT and the security questions to ask any AI CT reporting vendor." />
        <meta property="og:url" content="https://xaid.ai/blog/medical-device-cybersecurity" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CISA DICOM Advisory: What AI Imaging Buyers Must Know | xAID" />
        <meta name="twitter:description" content="CISA flagged five DICOM toolkit vulnerabilities in June 2026, one rated 9.8 critical. What it means for imaging IT and the security questions to ask any AI CT reporting vendor." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/medical-device-cybersecurity" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/medical-device-cybersecurity",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "medical device cybersecurity, CISA DICOM advisory, DCMTK vulnerability, AI CT reporting security, imaging IT security, PHI data handling AI vendor"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the CISA DICOM advisory warn about in June 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On June 30, 2026, CISA issued advisory ICSMA-26-181-01 describing five vulnerabilities in OFFIS DCMTK, an open-source DICOM toolkit embedded in many commercial imaging products. One flaw (CVE-2026-50003) is rated critical with a CVSS v3.1 base score of 9.8, and four others are rated high. The vulnerabilities affect DCMTK versions before 3.7.0 (fixed in v3.7.1) and, if exploited, could let an attacker write files outside the intended directory, expose worklist data containing protected health information, exhaust memory, or crash imaging services."
              }
            },
            {
              "@type": "Question",
              "name": "Is this a vulnerability in AI radiology software specifically?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The advisory concerns OFFIS DCMTK, a widely used open-source DICOM library, not an AI reporting product. But because DCMTK is embedded across the imaging ecosystem — viewers, archives, worklist and storage servers — any AI CT reporting workflow sits downstream of the same DICOM plumbing. The advisory is a reminder that imaging security is a supply-chain question: your exposure depends on the components your vendors build on, not just their own code."
              }
            },
            {
              "@type": "Question",
              "name": "What security questions should you ask an AI CT reporting vendor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask how PHI flows through the system and where it is stored; whether deployment is on-premise, in a private cloud, or multi-tenant; what happens to studies after a report is generated; how the vendor handles software bills of materials and third-party components like DICOM libraries; and how they track and patch published vulnerabilities. The goal is to understand the threat surface — data handling, PHI flow, and deployment model — not just to collect a compliance certificate."
              }
            },
            {
              "@type": "Question",
              "name": "How is threat and vulnerability posture different from HIPAA compliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "HIPAA compliance is a legal and administrative baseline covering how PHI is safeguarded and who is accountable. Threat and vulnerability posture is the technical reality of how a system resists attack — the components it depends on, its attack surface, how quickly it patches, and how it isolates data. A vendor can be HIPAA-compliant on paper and still ship software built on an unpatched, vulnerable DICOM library. Both matter, and buyers should evaluate them separately."
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
                Market &amp; Policy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A federal advisory just flagged the plumbing under medical imaging.<br />
              <span className="text-white/60">Here's what to ask your AI vendor.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              CISA's June 2026 advisory found five vulnerabilities in an open-source DICOM toolkit embedded across imaging software — one rated 9.8 out of 10. It isn't an AI bug. But it's a sharp reminder that imaging security is a supply-chain question, and it hands buyers a concrete checklist for vetting any AI CT reporting vendor on threat posture, not just compliance paperwork.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: '5', label: 'DICOM vulnerabilities', sub: 'in one CISA advisory' },
                { stat: '9.8', label: 'CVSS score of the worst', sub: 'CVE-2026-50003, critical' },
                { stat: '<3.7.0', label: 'DCMTK versions affected', sub: 'fixed in v3.7.1' },
                { stat: '~100k', label: 'DCMTK downloads / year', sub: 'from OFFIS servers' },
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
                What the advisory actually says
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On June 30, 2026, the Cybersecurity and Infrastructure Security Agency — the arm of the U.S. Department of Homeland Security that coordinates critical-infrastructure defense — published advisory <a href="https://www.cisa.gov/news-events/ics-medical-advisories/icsma-26-181-01" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">ICSMA-26-181-01</a>. It describes five vulnerabilities in <a href="https://www.offis.de/en/offis/project/dicom.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">OFFIS DCMTK</a>, an open-source collection of DICOM libraries and utilities maintained by the German research institute OFFIS.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                DCMTK is not a niche tool. It is one of the most widely used DICOM implementations in the world, <a href="https://www.offis.de/en/offis/project/dicom.html" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">downloaded roughly 100,000 times a year</a> and embedded inside commercial viewers, archives, and worklist and storage servers across the imaging ecosystem. That reach is exactly why the advisory matters: a flaw in shared plumbing propagates into every product that builds on it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The vulnerabilities affect DCMTK versions <strong>before 3.7.0</strong>, with version 3.7.1 or later resolving all five. According to the advisory, successful exploitation could allow an attacker to write files outside the intended output directory, gain unauthorized access to worklist records, exhaust memory, or crash affected client or server processes. CISA notes the flaws were reported to the agency in May 2026 by independent security researcher Abhinav Agarwal.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The five flaws, in plain terms
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                One vulnerability is rated critical; four are rated high. All are network-based and, per the advisory's CVSS vectors, require no authentication and no user interaction to attempt.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">CVE</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Severity (CVSS v3.1)</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">What it allows</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">CVE-2026-50003</td>
                      <td className="py-3 pr-4"><strong>Critical — 9.8</strong></td>
                      <td className="py-3">A malicious or compromised server makes a DCMTK client write files outside the chosen output directory (path traversal).</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">CVE-2026-52868</td>
                      <td className="py-3 pr-4">High — 8.2</td>
                      <td className="py-3">Path traversal lets a client read worklist records outside its intended per-application storage area — the scheduling and procedure metadata that can contain patient PHI.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">CVE-2026-50254</td>
                      <td className="py-3 pr-4">High — 7.5</td>
                      <td className="py-3">Memory leak via crafted connection requests, gradually exhausting memory and disrupting availability.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">CVE-2026-35505</td>
                      <td className="py-3 pr-4">High — 7.5</td>
                      <td className="py-3">A second memory-leak path leading to service crashes under repeated connection attempts.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">CVE-2026-44628</td>
                      <td className="py-3 pr-4">High — 7.5</td>
                      <td className="py-3">Type confusion that crashes the worklist server via crafted queries.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Two themes stand out for imaging leaders. The critical file-write flaw is an integrity problem — an attacker could tamper with where files land. And the worklist flaw is a confidentiality problem — worklist metadata routinely carries names, IDs, and procedure details, so unauthorized access is a PHI exposure, not just a nuisance crash. CISA is not aware of public exploitation, but the fix is straightforward: update to a patched build and follow the agency's network-hardening guidance.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why this is a supply-chain story, not an AI story
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of these CVEs live in an AI reporting product. They live in the DICOM libraries underneath the whole department. But that is precisely the lesson for anyone buying AI CT reporting: your real threat surface is the sum of the components your vendors build on, not just the code they wrote themselves. An AI tool that ingests studies over DICOM inherits the security of that pipeline.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is also why threat posture and HIPAA compliance are different questions. Compliance is the legal and administrative baseline — safeguards, accountability, business-associate agreements. Threat and vulnerability posture is the technical reality of how a system resists attack: what it depends on, how large its attack surface is, and how fast it patches. A vendor can satisfy the compliance checklist and still ship software built on an unpatched, vulnerable library. We cover the compliance side separately in <Link to="/blog/is-ai-radiology-reporting-hipaa-compliant/" className="text-xaid-blue-strong underline underline-offset-2">Is AI Radiology Reporting HIPAA Compliant?</Link> — this article is about the other half of due diligence.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The security questions to ask any AI CT reporting vendor
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Use the advisory as a prompt. If a single shared DICOM component can expose PHI or crash a service, then how a vendor handles data, structures its deployment, and manages its dependencies deserves direct questions. Four areas to press on:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. PHI flow and data handling',
                    desc: 'Where does patient data go once a study enters the system? Is it de-identified for any processing? Where is it stored, for how long, and what happens to it after the report is generated? Ask for a data-flow diagram, not a reassurance.',
                  },
                  {
                    title: '2. Deployment model — cloud vs on-prem',
                    desc: 'Is the tool on-premise, single-tenant private cloud, or multi-tenant cloud? Multi-tenant is not inherently unsafe, but it changes the blast radius and the isolation questions. Match the model to your risk tolerance and your existing network segmentation.',
                  },
                  {
                    title: '3. Software bill of materials and third-party components',
                    desc: "Does the vendor maintain an SBOM? Do they know whether they ship a DICOM library like DCMTK, and which version? A vendor who can answer this quickly is one who tracks their own supply chain — the exact discipline this advisory rewards.",
                  },
                  {
                    title: '4. Vulnerability tracking and patch cadence',
                    desc: 'How does the vendor learn about advisories like ICSMA-26-181-01, and how fast do they patch? Ask for their disclosure and remediation timelines. Speed of response is often a better signal than the absence of any past CVE.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Compliance posture vs threat posture
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The two are complementary, and a thorough buyer evaluates both. One tells you the vendor meets the rules; the other tells you how the system behaves when someone tries to break it.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]"></th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Compliance posture</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Threat / vulnerability posture</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Question it answers</td>
                      <td className="py-3 pr-4">Does the vendor meet the rules?</td>
                      <td className="py-3">How does the system resist attack?</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Evidence</td>
                      <td className="py-3 pr-4">BAAs, HIPAA safeguards, audit certs</td>
                      <td className="py-3">SBOM, patch cadence, deployment model, data-flow</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Fails when</td>
                      <td className="py-3 pr-4">Paperwork is incomplete</td>
                      <td className="py-3">A dependency ships an unpatched CVE</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">What this advisory tests</td>
                      <td className="py-3 pr-4">—</td>
                      <td className="py-3">Do you know your DICOM components and patch them?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                xAID's approach is built for exactly this kind of scrutiny. The <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model</Link> pipeline produces a structured, comprehensive report draft; xAID's in-house radiologist reviews every preliminary before delivery, and the client's own reading radiologist signs the final — radiologists in the loop at both ends, so no automated output reaches a chart unreviewed. On the security side, the questions above are the ones we expect buyers to ask: how PHI flows, where it is stored, which deployment model fits your network, and how third-party components are tracked and patched. An advisory like this one is not a reason to slow AI adoption; it is a reason to do the due diligence properly and pick a vendor who welcomes the questions.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the CISA DICOM advisory warn about in June 2026?',
                    a: 'On June 30, 2026, CISA issued advisory ICSMA-26-181-01 describing five vulnerabilities in OFFIS DCMTK, an open-source DICOM toolkit embedded in many commercial imaging products. One flaw (CVE-2026-50003) is rated critical with a CVSS v3.1 base score of 9.8, and four others are rated high. The vulnerabilities affect DCMTK versions before 3.7.0 (fixed in v3.7.1) and, if exploited, could let an attacker write files outside the intended directory, expose worklist data containing protected health information, exhaust memory, or crash imaging services.',
                  },
                  {
                    q: 'Is this a vulnerability in AI radiology software specifically?',
                    a: 'No. The advisory concerns OFFIS DCMTK, a widely used open-source DICOM library, not an AI reporting product. But because DCMTK is embedded across the imaging ecosystem — viewers, archives, worklist and storage servers — any AI CT reporting workflow sits downstream of the same DICOM plumbing. The advisory is a reminder that imaging security is a supply-chain question: your exposure depends on the components your vendors build on, not just their own code.',
                  },
                  {
                    q: 'What security questions should you ask an AI CT reporting vendor?',
                    a: 'Ask how PHI flows through the system and where it is stored; whether deployment is on-premise, in a private cloud, or multi-tenant; what happens to studies after a report is generated; how the vendor handles software bills of materials and third-party components like DICOM libraries; and how they track and patch published vulnerabilities. The goal is to understand the threat surface — data handling, PHI flow, and deployment model — not just to collect a compliance certificate.',
                  },
                  {
                    q: 'How is threat and vulnerability posture different from HIPAA compliance?',
                    a: 'HIPAA compliance is a legal and administrative baseline covering how PHI is safeguarded and who is accountable. Threat and vulnerability posture is the technical reality of how a system resists attack — the components it depends on, its attack surface, how quickly it patches, and how it isolates data. A vendor can be HIPAA-compliant on paper and still ship software built on an unpatched, vulnerable DICOM library. Both matter, and buyers should evaluate them separately.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: CISA advisory <a href="https://www.cisa.gov/news-events/ics-medical-advisories/icsma-26-181-01" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ICSMA-26-181-01</a> (June 30, 2026), as reported by <a href="https://radiologybusiness.com/topics/health-it/enterprise-imaging/imaging-informatics/homeland-security-warns-vulnerabilities-medical-imaging-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> and <a href="https://www.hipaajournal.com/offis-dcmtk-vulnerabilities-june-2026/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The HIPAA Journal</a>. DCMTK background from <a href="https://www.offis.de/en/offis/project/dicom.html" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">OFFIS</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Vet the security, then run the studies."
          sub="xAID answers the hard questions on PHI flow, deployment model, and patching — and every report is radiologist-reviewed. Try it on 5 free studies."
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
              <Link to="/blog/is-ai-radiology-reporting-hipaa-compliant/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Compliance</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Is AI Radiology Reporting HIPAA Compliant?</div>
              </Link>
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Patients Be Told When AI Reads Their Scan?</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MedicalDeviceCybersecurity;
