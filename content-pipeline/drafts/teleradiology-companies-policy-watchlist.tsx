import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';

const TeleradiologyCompaniesPolicyWatchlist = () => {
  const post = {
    title: 'Teleradiology Just Got Its Own Lobby: A Policy Watch-List for Teleradiology Companies',
    dateIso: '2026-07-07',
    date: 'July 7, 2026',
    category: 'Policy & Advocacy',
    readingTime: 7,
    description: "RADPAC launched a Teleradiology Subcommittee. What it signals about licensure, supervision, and AI accountability — a watch-list for teleradiology companies.",
  };

  const canonical = 'https://xaid.ai/blog/teleradiology-companies-policy-watchlist/';

  return (
    <>
      <Helmet defer={false}>
        <title>Teleradiology Policy Watch-List: RADPAC's New Lobby | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Teleradiology Policy Watch-List: RADPAC's New Lobby | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teleradiology Policy Watch-List: RADPAC's New Lobby | xAID" />
        <meta name="twitter:description" content={post.description} />
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
          "keywords": "teleradiology companies, teleradiology policy, RADPAC teleradiology subcommittee, state licensure teleradiology, CMS supervision rules, AI accountability remote reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the RADPAC Teleradiology Subcommittee?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is a new offshoot of RADPAC — America's largest political action committee dedicated to radiology, part of the American College of Radiology Association's advocacy ecosystem — focused on advocating for the needs of teleradiologists. Kimberly Beavers, MD, a remote breast radiologist with NYU Langone Health, chairs the inaugural subcommittee, which officially launched in summer 2026 and was announced in a LinkedIn post shared June 29."
              }
            },
            {
              "@type": "Question",
              "name": "Which policy issues matter most for teleradiology companies right now?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The launch discussion named federal telehealth extension bills, CMS supervision rules, state licensure and licensure compacts, credentialing conflicts between CMS and ACR standards, reimbursement parity, AI integration and liability, rural access gaps, and restrictions on radiologists reading for federal payment programs from outside the U.S. Each directly affects whether and how remote reads can be performed, credentialed, and paid."
              }
            },
            {
              "@type": "Question",
              "name": "Will the subcommittee take specific policy positions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not primarily. Its chair, Kimberly Beavers, MD, told Radiology Business it is 'less about staking out specific policy positions and more about making sure teleradiologists have a voice in those conversations.' She is actively soliciting input from teleradiologists on what the subcommittee should work on, so the agenda is still being shaped."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI change the policy conversation in teleradiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As AI becomes part of remote reporting workflows, the open questions shift from where the radiologist sits to how technology participates in the report — accountability, documentation, quality assurance, and medicolegal responsibility, as one radiologist put it in the launch discussion. Workflows that make each step explicit — AI drafts, a named radiologist reviews every preliminary, and the reading radiologist signs the final — are structurally easier to defend under whatever guidance emerges."
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
                Policy &amp; Advocacy
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Teleradiology just got its own lobby.<br />
              <span className="text-white/60">A policy watch-list for teleradiology companies</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              RADPAC — America's largest political action committee dedicated to radiology — has launched a subcommittee focused entirely on teleradiology advocacy. For teleradiology companies and the groups that depend on remote reads, the issue list surfacing around its launch is the closest thing yet to a policy radar for the year ahead.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stat: 'June 29', label: 'Launch announced on LinkedIn', sub: 'by inaugural chair Kimberly Beavers, MD' },
                { stat: '#1', label: 'RADPAC is the largest PAC', sub: 'dedicated to the radiology specialty' },
                { stat: '43 days', label: 'Last fall’s government shutdown', sub: 'cited as proof telehealth protections are fragile' },
                { stat: '7', label: 'Policy fronts on the radar', sub: 'named in the launch discussion' },
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
                What happened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                RADPAC — described by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radpac-launches-new-subcommittee-dedicated-teleradiology-advocacy" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a> as America's largest political action committee dedicated to the specialty, and part of the <a href="https://www.radiologyadvocacy.org/SitePages/HomePage.aspx" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American College of Radiology Association's advocacy ecosystem</a> — is launching a new offshoot focused on advocating for the needs of teleradiologists.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Kimberly Beavers, MD, a clinical assistant professor and remote breast radiologist with NYU Langone Health, will chair the inaugural RADPAC Teleradiology Subcommittee. She announced her involvement in a <a href="https://www.linkedin.com/posts/kbeaversmd_radpac-teleradiology-radiologyadvocacy-share-7477372593969233920-X1ut/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">LinkedIn post</a> shared June 29. RADPAC Chair Amy Patel, MD, tapped Beavers to lead the effort, which officially launched this summer.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Beavers called it a <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radpac-launches-new-subcommittee-dedicated-teleradiology-advocacy" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">"pivotal moment for our specialty,"</a> contending that policy made without physician participation "rarely ends up serving radiologists." In a follow-up email to Radiology Business, she noted that teleradiology now touches a "huge and growing segment of the radiology workforce."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why teleradiology is getting its own advocacy arm
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The formalization matters because it acknowledges what operational data has shown for years: remote reading is no longer an edge case of radiology — it is core infrastructure. Beavers put it plainly in her <a href="https://www.linkedin.com/posts/kbeaversmd_radpac-teleradiology-radiologyadvocacy-share-7477372593969233920-X1ut/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">announcement</a>:
              </p>
              <blockquote className="border-l-2 border-xaid-blue pl-5 mb-4">
                <p className="text-[#444] text-[15px] leading-[1.65] font-light italic">
                  "Teleradiology is no longer a niche part of our field. It's how rural hospitals get overnight reads. It's how subspecialty interpretation reaches patients who would otherwise wait."
                </p>
              </blockquote>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                And the regulatory environment that infrastructure sits on is anything but settled. In the same post, she sketched the terrain:
              </p>
              <blockquote className="border-l-2 border-xaid-blue pl-5 mb-4">
                <p className="text-[#444] text-[15px] leading-[1.65] font-light italic">
                  "And yet, the legislative landscape is genuinely complex right now. Federal telehealth extension bills. CMS supervision rules. State licensure compacts. Credentialing conflicts between CMS and ACR standards. A 43-day government shutdown last fall that reminded us how fragile some of these protections are."
                </p>
              </blockquote>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Notably, the subcommittee is not launching with a fixed platform. "It's less about staking out specific policy positions and more about making sure teleradiologists have a voice in those conversations," Beavers told <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radpac-launches-new-subcommittee-dedicated-teleradiology-advocacy" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. She is openly soliciting input: "Licensure across state lines? Reimbursement parity? Supervision flexibility? AI integration and liability? Rural access gaps? Something I haven't named yet? Drop it in the comments. I'm asking because your answer shapes what this subcommittee actually works on."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The policy fronts on the table
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Pulling together the issues named in the announcement, the follow-up interview, and the responses it drew, seven distinct policy fronts emerge. None of them is hypothetical — each has a direct operational consequence for teleradiology companies and the practices that buy remote reads.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Policy front</th>
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Where it surfaced at launch</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">Who feels it first</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Federal telehealth extensions', 'Named by Beavers as "federal telehealth extension bills"; the 43-day shutdown last fall showed how fragile the protections are', 'Overnight and rural coverage models built on telehealth-era rules'],
                      ['State licensure & compacts', '"Licensure across state lines" and "state licensure compacts"; one commenter called for a single national license', 'Multi-state teleradiology companies carrying dozens of licenses per radiologist'],
                      ['CMS supervision rules', '"CMS supervision rules" and "supervision flexibility" both named', 'Practices relying on remote supervision arrangements'],
                      ['Credentialing conflicts', '"Credentialing conflicts between CMS and ACR standards"', 'Teleradiology groups credentialing readers across many facilities'],
                      ['Reimbursement parity', '"Reimbursement parity?" posed as an open agenda question', 'Any group paid differently for a remote read than an on-site one'],
                      ['Offshore reading restrictions', 'A commenter flagged restrictions on radiologists reading for federal payment programs while located outside the U.S.', 'Groups with internationally based radiologists; follow-the-sun models'],
                      ['AI accountability in remote reporting', '"AI integration and liability" in the agenda list; expanded on by a commenter (see below)', 'Every teleradiology workflow adding AI to reporting'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[#444] text-sm font-light align-top">{row[1]}</td>
                        <td className="py-3 text-[#444] text-sm font-light align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The offshore-restriction point drew a concrete example from academia. "Just in my department alone there's a handful of radiologists that would benefit from lifting that restriction, given their family situations," wrote Daniel Vargas, MD, chief of cardiothoracic imaging at the University of Colorado Anschutz Medical Campus, in the <a href="https://www.linkedin.com/posts/kbeaversmd_radpac-teleradiology-radiologyadvocacy-share-7477372593969233920-X1ut/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">comments</a>. Another respondent highlighted the difficulty of navigating the EU market and its many different countries — a reminder that licensure friction is not only a US problem.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The AI accountability thread runs through all of it
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Of everything raised at launch, the most forward-looking contribution came from Falguni Parakh, MD, founder and chief radiologist of Suvidha Healthcare in India, who zeroed in on the governance gap around AI in remote reporting:
              </p>
              <blockquote className="border-l-2 border-xaid-blue pl-5 mb-4">
                <p className="text-[#444] text-[15px] leading-[1.65] font-light italic">
                  "As AI becomes increasingly integrated into remote reporting workflows, we need practical guidance on accountability, documentation, quality assurance, and medicolegal responsibility. Teleradiology is no longer just about where the radiologist is, it's also about how technology participates in the reporting process."
                </p>
              </blockquote>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That framing deserves attention because it reframes the entire teleradiology policy debate. For two decades, the regulatory questions were fundamentally geographic: where is the radiologist licensed, where is the patient, which state's rules apply, who credentials whom. Every row in the table above except the last is a geography question. AI adds a second axis — a <em>process</em> question: who (or what) produced each part of the report, who reviewed it, and who is answerable for it.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Whatever guidance eventually emerges on Parakh's four points — accountability, documentation, quality assurance, medicolegal responsibility — workflows that can already answer them explicitly will adapt with the least friction. Workflows where AI's role is undocumented or ambiguous will have the most retrofitting to do.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A watch-list for teleradiology companies and remote-read groups
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A subcommittee soliciting input is a leading indicator, not a rule change. But the issue list it is collecting tends to preview where advocacy — and eventually rulemaking — goes next. Five practical moves for operators:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: '1. Track the federal telehealth extension calendar',
                    desc: 'Beavers singled out federal telehealth extension bills and pointed to last fall’s 43-day government shutdown as proof of how fragile these protections are. If parts of your coverage model assume telehealth-era flexibilities persist, know their expiration and renewal mechanics.',
                  },
                  {
                    title: '2. Map your licensure and credentialing exposure',
                    desc: 'State licensure compacts and credentialing conflicts between CMS and ACR standards were both named at launch. An inventory of which reads depend on which licenses and credentialing pathways tells you exactly which policy changes would hit revenue.',
                  },
                  {
                    title: '3. Watch CMS supervision rulemaking',
                    desc: 'Supervision flexibility appears twice in the launch discussion — as "CMS supervision rules" and as an open agenda question. Remote supervision arrangements are among the most rule-sensitive parts of a teleradiology operation.',
                  },
                  {
                    title: '4. Document how AI participates in your reporting workflow',
                    desc: 'Parakh’s four words — accountability, documentation, quality assurance, medicolegal responsibility — are a checklist. Any group adding AI to reporting should be able to show, per study, what the AI drafted, which radiologist reviewed it, and whose signature finalized it.',
                  },
                  {
                    title: '5. Put your issues on the record',
                    desc: 'Beavers is explicitly asking teleradiologists what the subcommittee should work on — "your answer shapes what this subcommittee actually works on." Agendas are being set now; the groups that engage early tend to see their issues prioritized.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The process question Parakh raises — how technology participates in the reporting process — is one an AI reporting workflow has to answer structurally, not rhetorically. xAID's model makes every step explicit and auditable: a <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">foundation-model AI</Link> drafts the structured CT report, xAID's in-house European radiologist reviews every preliminary, and the report is delivered ready-to-sign — the final signature stays with your reading radiologist. Accountability, documentation, and quality assurance are properties of the workflow itself, not policies bolted on afterward. As the new subcommittee starts turning teleradiologists' concerns into advocacy positions, that kind of traceable chain is the safest place for a remote-read operation to already be standing.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the RADPAC Teleradiology Subcommittee?',
                    a: "It is a new offshoot of RADPAC — America's largest political action committee dedicated to radiology, part of the American College of Radiology Association's advocacy ecosystem — focused on advocating for the needs of teleradiologists. Kimberly Beavers, MD, a remote breast radiologist with NYU Langone Health, chairs the inaugural subcommittee, which officially launched in summer 2026 and was announced in a LinkedIn post shared June 29.",
                  },
                  {
                    q: 'Which policy issues matter most for teleradiology companies right now?',
                    a: 'The launch discussion named federal telehealth extension bills, CMS supervision rules, state licensure and licensure compacts, credentialing conflicts between CMS and ACR standards, reimbursement parity, AI integration and liability, rural access gaps, and restrictions on radiologists reading for federal payment programs from outside the U.S. Each directly affects whether and how remote reads can be performed, credentialed, and paid.',
                  },
                  {
                    q: 'Will the subcommittee take specific policy positions?',
                    a: "Not primarily. Its chair, Kimberly Beavers, MD, told Radiology Business it is 'less about staking out specific policy positions and more about making sure teleradiologists have a voice in those conversations.' She is actively soliciting input from teleradiologists on what the subcommittee should work on, so the agenda is still being shaped.",
                  },
                  {
                    q: 'How does AI change the policy conversation in teleradiology?',
                    a: 'As AI becomes part of remote reporting workflows, the open questions shift from where the radiologist sits to how technology participates in the report — accountability, documentation, quality assurance, and medicolegal responsibility, as one radiologist put it in the launch discussion. Workflows that make each step explicit — AI drafts, a named radiologist reviews every preliminary, and the reading radiologist signs the final — are structurally easier to defend under whatever guidance emerges.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radpac-launches-new-subcommittee-dedicated-teleradiology-advocacy" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, "RADPAC launches new subcommittee dedicated to teleradiology advocacy" (July 7, 2026), and the <a href="https://www.linkedin.com/posts/kbeaversmd_radpac-teleradiology-radiologyadvocacy-share-7477372593969233920-X1ut/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">June 29 LinkedIn announcement</a> by Kimberly Beavers, MD. RADPAC affiliation per the <a href="https://www.radiologyadvocacy.org/SitePages/HomePage.aspx" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">American College of Radiology Association advocacy site</a>. All quotes verbatim as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Remote reads with a traceable chain of accountability."
          sub="AI drafts, xAID's in-house radiologist reviews every preliminary, and delivery is ready-to-sign — your radiologist signs the final. Try it on 5 free studies."
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
              <Link to="/blog/ai-teleradiology-vs-traditional-teleradiology-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Teleradiology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Teleradiology vs Traditional Teleradiology in 2026</div>
              </Link>
              <Link to="/blog/radiology-prior-authorization-imaging-throughput/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Advocacy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Prior Authorization Reform and Imaging Throughput</div>
              </Link>
              <Link to="/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Buyer Guides</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">How to Switch from Teleradiology to AI CT Reporting</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default TeleradiologyCompaniesPolicyWatchlist;
