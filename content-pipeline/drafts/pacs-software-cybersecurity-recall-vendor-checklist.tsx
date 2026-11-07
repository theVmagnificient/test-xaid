import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const PacsSoftwareCybersecurityRecallVendorChecklist = () => {
  const post = {
    title: 'A PACS Software Recall Just Happened Again — Here’s the Vendor Checklist It Should Trigger',
    dateIso: '2026-11-07',
    date: 'November 7, 2026',
    category: 'Cybersecurity & Vendor Risk',
    readingTime: 8,
    description:
      'A Class 2 PACS software recall is a reminder: ask every AI-reporting vendor about patch cadence, integration access, and incident response before signing.',
  };

  const canonical = 'https://xaid.ai/blog/pacs-software-cybersecurity-recall-vendor-checklist/';

  return (
    <>
      <Helmet defer={false}>
        <title>PACS Software Recall: Your AI Vendor Checklist | xAID</title>
        <meta name="description" content="A Class 2 PACS software recall is a reminder: ask every AI-reporting vendor about patch cadence, integration access, and incident response before signing." />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PACS Software Recall: Your AI Vendor Checklist | xAID" />
        <meta property="og:description" content="A Class 2 PACS software recall is a reminder: ask every AI-reporting vendor about patch cadence, integration access, and incident response before signing." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PACS Software Recall: Your AI Vendor Checklist | xAID" />
        <meta name="twitter:description" content="A Class 2 PACS software recall is a reminder: ask every AI-reporting vendor about patch cadence, integration access, and incident response before signing." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonical }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": canonical,
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "PACS software cybersecurity recall, PACS vendor due diligence, AI reporting vendor checklist, FDA Class 2 recall PACS, imaging IT cybersecurity"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What PACS software was recalled for a cybersecurity vulnerability?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The FDA classified a recall of IntelePACS, software made by Intelerad Medical Systems Incorporated (a GE HealthCare company), as a Class 2 recall. The recall covers roughly 560 software platforms running multiple versions spanning the PACS-4 and PACS-5 series, distributed across more than 30 U.S. states and internationally, including Australia, Canada, Ireland, New Zealand, South Africa and the UK."
              }
            },
            {
              "@type": "Question",
              "name": "What was the vulnerability in the IntelePACS recall?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Intelerad identified a cybersecurity vulnerability that could let a malicious user take over an administrator session, delete or modify image or study data, or lock legitimate users out of the system. A separate software defect could also cause unintended deletion of image data from an external archive integration."
              }
            },
            {
              "@type": "Question",
              "name": "Is this the same PACS recall covered before on cybersecurity grounds?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. This is a distinct, newly disclosed FDA Class 2 recall (recall number Z-0357-2027, initiated September 10, 2026) affecting Intelerad's IntelePACS. It is separate from the CISA advisory on the open-source DCMTK DICOM toolkit and separate from the GE HealthCare AW Server wrong-patient worklist recall, both covered previously."
              }
            },
            {
              "@type": "Question",
              "name": "What questions should an imaging center ask an AI-reporting vendor before signing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Before signing with any cloud-based or AI reporting vendor, ask about committed patch and disclosure timelines, exactly what access the vendor's software has into your PACS (read-only versus write/delete), authentication and session architecture, a documented incident-response plan with workflow continuity if the vendor's system goes down, independent audit trails for report drafts and edits, and compliance with FDA premarket cybersecurity requirements under Section 524B, including a software bill of materials."
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
                Cybersecurity &amp; Vendor Risk
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A PACS software recall just happened again.<br />
              <span className="text-white/60">Here's the vendor checklist it should trigger.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The FDA has classified a cybersecurity vulnerability in a widely used PACS platform as a Class 2 recall — the kind that could let an attacker take over an admin session and delete image data. It's a useful prompt to ask every imaging-IT vendor, including AI-reporting vendors, a specific set of questions before signing.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '560', label: 'Software platforms recalled', sub: 'FDA Class 2, IntelePACS' },
            { stat: '30+', label: 'US states affected', sub: 'plus 6 countries internationally' },
            { stat: '~7 weeks', label: 'Notice to formal FDA recall posting', sub: 'Sept 15 → Nov 4, 2026' },
            { stat: '3rd', label: 'PACS/DICOM security recall of 2026', sub: 'tracked across this year’s coverage' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the recall actually says
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The FDA has posted a <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRES/res.cfm?id=223113" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Class 2 device recall</a> (recall number Z-0357-2027, initiated September 10, 2026) for IntelePACS, the picture archiving and communication system software made by Intelerad Medical Systems Incorporated, a GE HealthCare company based in Montreal. The recall covers an estimated <strong>560 software platforms</strong>, running multiple affected versions spanning the PACS-4 and PACS-5 series, distributed across more than 30 U.S. states and internationally — Australia, Canada, Ireland, New Zealand, South Africa and the UK, according to <a href="https://radiologybusiness.com/topics/health-it/cybersecurity/cybersecurity-vulnerability-prompts-recall-popular-pacs-software" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The vulnerability itself is serious: Intelerad identified a cybersecurity flaw that could let a malicious user <strong>take over an administrator session, delete or modify image or study data, or lock legitimate users out of the system entirely</strong>. A separate software defect, identified alongside it, could also cause the unintended deletion of image data from an external archive integration.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Intelerad sent customers an Urgent Medical Device Correction notification on September 15, 2026, telling them they could keep using the software provided they followed their organization's standard cybersecurity and access-control practices — because, at the time, no corrective update was yet available. The FDA's formal Class 2 recall notice followed on November 4, 2026, about seven weeks after that first customer notice.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                This isn't a one-off
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This is a distinct incident from two others worth remembering. Earlier in 2026, CISA issued an advisory covering five vulnerabilities in <Link to="/blog/medical-device-cybersecurity/" className="text-xaid-blue-strong underline underline-offset-2">OFFIS DCMTK, an open-source DICOM toolkit embedded in imaging software</Link> across the industry. Separately, the FDA classified a Class 2 recall for GE HealthCare AW Server units after <Link to="/blog/wrong-patient-radiology-error/" className="text-xaid-blue-strong underline underline-offset-2">a worklist defect caused radiologists to read the wrong patient's prior exam</Link> with no warning. Three distinct imaging-software recalls and advisories in a single year, each from a different root cause (open-source library, worklist logic, and now PACS administrator-session security), is a pattern, not a coincidence: imaging IT is software, and software has a vulnerability lifecycle that doesn't stop once a system is installed and running in production.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That lifecycle question matters just as much — arguably more — for the newer category of cloud-based and AI reporting software that now sits on top of or alongside PACS in most imaging departments. Those systems typically touch the same study data, often need write access to move drafts in and out of a worklist, and are run by vendors an imaging center has far less visibility into than its PACS incumbent. The IntelePACS recall is as good a reason as any to formalize the questions a buyer should ask before signing with any of them.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The vendor due-diligence checklist
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                None of this is specific to one vendor. It's a set of questions any imaging center, teleradiology group, or hospital IT department should be able to put to any cloud-based or AI reporting vendor — including xAID — and get a direct answer to, in writing, before signing.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Due-diligence area</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Question to ask</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Why it matters here</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#444] font-light">
                    <tr className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Patch cadence</td>
                      <td className="py-3 pr-4">What's your committed window from discovering a vulnerability to shipping a fix — and is it contractual, or best-effort?</td>
                      <td className="py-3">Intelerad customers were told to lean on manual access-control hygiene for weeks after notification while a corrective update was still pending.</td>
                    </tr>
                    <tr className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Disclosure practice</td>
                      <td className="py-3 pr-4">How and when will you notify us of a security issue, and do you file public advisories (CISA, FDA MedWatch)?</td>
                      <td className="py-3">A vendor's disclosure speed and transparency is the difference between you hardening access controls proactively or finding out from a recall notice.</td>
                    </tr>
                    <tr className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">PACS integration surface</td>
                      <td className="py-3 pr-4">Exactly what access does your software have to our PACS — read-only, or can it write, modify, or delete archived studies?</td>
                      <td className="py-3">The IntelePACS flaw specifically allowed admin-session takeover and deletion or modification of image/study data — the blast radius of any integration depends entirely on its access scope.</td>
                    </tr>
                    <tr className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Authentication &amp; sessions</td>
                      <td className="py-3 pr-4">Do you support SSO/MFA, session timeouts, and least-privilege roles distinct from the vendor's own technical access?</td>
                      <td className="py-3">Administrator-session takeover is only possible if sessions are long-lived, broadly privileged, or weakly authenticated.</td>
                    </tr>
                    <tr className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Incident response</td>
                      <td className="py-3 pr-4">What's your documented incident-response plan, and what happens to our reporting workflow if your system is taken offline?</td>
                      <td className="py-3">A vendor recall or outage shouldn't mean a reporting blackout — ask what continuity plan exists if the vendor's own system has to be pulled.</td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Regulatory posture</td>
                      <td className="py-3 pr-4">Do you maintain FDA premarket cybersecurity documentation under Section 524B, including a software bill of materials?</td>
                      <td className="py-3">The FDA's <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">premarket cybersecurity framework</a> requires a postmarket vulnerability and patch plan, a secure development framework, and a machine-readable SBOM for cyber devices — a vendor who can't produce these hasn't done the baseline work.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits with how AI CT reporting actually works
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of these questions are unique to AI vendors — they apply to PACS incumbents too, as this recall shows. But a buyer evaluating a newer AI reporting layer should expect the same or tighter answers, not looser ones, simply because the vendor is newer. xAID's workflow is built so the answers are architectural, not promises: the AI produces a structured draft report, xAID's in-house radiologist reviews every preliminary, and it reaches the client ready-to-sign — the client's reading radiologist still signs the final. That division of access and responsibility is itself a mitigant against exactly the kind of admin-session and data-integrity risk this recall surfaces, and it's a fair basis for any imaging center to ask the same patch-cadence, integration-surface, and incident-response questions of xAID that this recall should prompt them to ask any other vendor.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What PACS software was recalled for a cybersecurity vulnerability?',
                    a: 'The FDA classified a recall of IntelePACS, software made by Intelerad Medical Systems Incorporated (a GE HealthCare company), as a Class 2 recall. The recall covers roughly 560 software platforms running multiple versions spanning the PACS-4 and PACS-5 series, distributed across more than 30 U.S. states and internationally, including Australia, Canada, Ireland, New Zealand, South Africa and the UK.',
                  },
                  {
                    q: 'What was the vulnerability in the IntelePACS recall?',
                    a: 'Intelerad identified a cybersecurity vulnerability that could let a malicious user take over an administrator session, delete or modify image or study data, or lock legitimate users out of the system. A separate software defect could also cause unintended deletion of image data from an external archive integration.',
                  },
                  {
                    q: 'Is this the same PACS recall covered before on cybersecurity grounds?',
                    a: "No. This is a distinct, newly disclosed FDA Class 2 recall (recall number Z-0357-2027, initiated September 10, 2026) affecting Intelerad's IntelePACS. It is separate from the CISA advisory on the open-source DCMTK DICOM toolkit and separate from the GE HealthCare AW Server wrong-patient worklist recall, both covered previously.",
                  },
                  {
                    q: 'What questions should an imaging center ask an AI-reporting vendor before signing?',
                    a: "Before signing with any cloud-based or AI reporting vendor, ask about committed patch and disclosure timelines, exactly what access the vendor's software has into your PACS (read-only versus write/delete), authentication and session architecture, a documented incident-response plan with workflow continuity if the vendor's system goes down, independent audit trails for report drafts and edits, and compliance with FDA premarket cybersecurity requirements under Section 524B, including a software bill of materials.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: FDA Class 2 device recall record for Intelerad <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRES/res.cfm?id=223113" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">IntelePACS software</a>, as reported by <a href="https://radiologybusiness.com/topics/health-it/cybersecurity/cybersecurity-vulnerability-prompts-recall-popular-pacs-software" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>; FDA <a href="https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">medical device cybersecurity</a> guidance (Section 524B). Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Ask us the same questions"
          sub="Patch cadence, PACS access scope, incident response — xAID's answers are architectural, not promises. See how the radiologist-reviewed workflow works on 5 free studies."
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
              <Link to="/blog/medical-device-cybersecurity/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Medical Device Cybersecurity: The CISA DICOM Advisory</div>
              </Link>
              <Link to="/blog/wrong-patient-radiology-error/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Patient Safety &amp; QA</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">A Server Glitch Made Radiologists Read the Wrong Patient</div>
              </Link>
              <Link to="/blog/coalition-for-health-ai-vendor-security-checklist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">CHAI's New Security Work Group: A Vendor Checklist</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PacsSoftwareCybersecurityRecallVendorChecklist;
