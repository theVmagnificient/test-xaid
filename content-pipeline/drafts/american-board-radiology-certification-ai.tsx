import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const AmericanBoardRadiologyCertificationAi = () => {
  const post = {
    title: "ABR's Cautious Approach to AI: What It Means for Radiology",
    dateIso: '2026-08-13',
    date: 'August 13, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "The board that certifies every US radiologist says AI has no role in exam or certification decisions today, only human experts. What that caution means for AI.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>ABR's Cautious Approach to AI in Certification | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/american-board-radiology-certification-ai/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ABR's Cautious Approach to AI in Certification | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ABR's Cautious Approach to AI in Certification | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/american-board-radiology-certification-ai/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/american-board-radiology-certification-ai/",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "american board of radiology certification, ABR AI policy, radiology board certification AI, AI governance radiology, radiologist certification exam AI"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does the American Board of Radiology use AI to certify radiologists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. In an August 2026 statement covered by Radiology Business, the American Board of Radiology (ABR) said it does not presently use artificial intelligence in certification decisions or exam creation. The board said all testing materials continue to be developed and reviewed by qualified human experts, and that certification and scoring decisions must remain the responsibility of qualified human experts."
              }
            },
            {
              "@type": "Question",
              "name": "What AI governance has the American Board of Radiology set up?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ABR has created an AI advisory group focused on governance and ethical standards, plus a trustee-level committee evaluating how AI could improve content assessment. In a February 2026 Board of Governors update, ABR leadership said the board plans to use AI for internal functions like scheduling, data analysis, and analyzing diplomate feedback on exam content, but prohibits volunteers from using generative AI to write exam or assessment questions, citing copyright and quality-control concerns."
              }
            },
            {
              "@type": "Question",
              "name": "Will the American Board of Radiology test how candidates use clinical AI tools?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It's under consideration, not yet policy. ABR leadership has said that as AI clinical tools become integral to practice, the board may find it appropriate to assess competency in the 'if, when, and how' of candidates using clinically available AI tools — but it has not implemented this and has committed to communicating any exam changes well in advance."
              }
            },
            {
              "@type": "Question",
              "name": "Why does ABR's caution on AI matter for AI radiology reporting tools?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It reinforces the governance model that professional radiology bodies are converging on: AI can assist with drafting, sorting, and internal analysis, but a qualified human must remain accountable for the decision that carries clinical or credentialing weight. That is the same structure behind AI CT reporting built around a full draft report, an in-house radiologist review of every preliminary, and the client's reading radiologist signing the final — not an autonomous, unreviewed output."
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
              The board that certifies every US radiologist<br />
              <span className="text-white/60">is deliberately slow-walking AI</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              The American Board of Radiology says AI has no role in its certification decisions or exam creation today — only qualified human experts do. That isn't a rejection of AI in radiology. It's a working example of the governance structure AI needs to earn trust: a human stays accountable for the decision that counts.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '0', label: 'AI in ABR exam decisions', sub: 'still fully human-reviewed' },
            { stat: '2', label: 'New AI governance bodies', sub: 'advisory group + trustee panel' },
            { stat: 'Feb 2026', label: 'ABR AI policy update', sub: 'Board of Governors post' },
            { stat: 'Aug 2026', label: 'Latest ABR statement on AI', sub: 'via Radiology Business' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the American Board of Radiology actually said
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The <a href="https://www.theabr.org/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">American Board of Radiology (ABR)</a> — the Tucson-based body that certifies practicing radiologists across the US — published a statement this week outlining a deliberately measured stance on artificial intelligence, as <a href="https://radiologybusiness.com/topics/artificial-intelligence/american-board-radiology-taking-cautious-approach-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>. Rather than rushing to fold AI into its exam or certification pipeline, the board said it is researching developments, consulting outside experts, and building internal safeguards before it changes anything candidates or diplomates experience.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The core fact is unambiguous: ABR said it does not currently use artificial intelligence in making certification decisions, nor for creating exam content. In the board's own words, "all testing materials continue to be developed and reviewed by qualified human experts to ensure accuracy and fairness," and certification and scoring decisions "must remain the responsibility of qualified human experts."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's a notable line to draw in 2026, when AI is embedded in imaging workflows, drafting tools, and administrative software across the specialty. ABR framed its reasoning directly: "AI presents both meaningful opportunities and potential risks," and the board intends to evaluate it "thoughtfully, with a focus on maintaining the integrity, validity and credibility of ABR certification programs."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The governance ABR has already built
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Caution doesn't mean inaction. ABR says it has assembled an AI advisory group focused on governance and ethical standards, alongside a separate trustee-level committee examining how AI might strengthen content assessment. The board describes itself as "actively exploring potential AI applications in a structured and responsible way," including consulting external experts — and has committed to transparency: "As developments occur, we will communicate updates through established ABR channels to ensure candidates, diplomates, and the public remain informed."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                This builds on ground the board laid earlier in the year. In a <a href="https://www.theabr.org/beam/from-the-board-of-governors-february-2026/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">February 2026 Board of Governors update</a>, ABR Board of Trustees Chair Matthew B. Podgorsak, PhD, and Executive Director Brent Wagner, MD, MBA, laid out where the board plans to put AI to work internally — scheduling, data analysis, projections, gap analysis, and project management — and where it is actively exploring using AI to help analyze diplomate comments on Online Longitudinal Assessment (OLA) content to refine individual questions.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But the same update draws a firm boundary: ABR volunteers are prohibited from using generative AI to create OLA or exam content, largely over copyright exposure — "questions and other material generated by AI are generally not protected by copyright," while the AI tools generating them may draw on material that is. Looking ahead, ABR floated one possibility without committing to it: as clinical AI tools become integral to radiology practice, the board "may find it appropriate to assess competency in that portion of the domain that relates to 'if, when, and how' candidates use clinically available AI tools in practice" — a future testing concept, not a current one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where ABR draws the line on AI today
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] text-sm font-medium">Use case</th>
                      <th className="py-3 text-[#0D0D0D] text-sm font-medium">ABR's current stance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Certification and exam-scoring decisions', 'Human experts only — no AI role'],
                      ['Writing exam or OLA questions', 'Prohibited for volunteers — copyright and integrity risk'],
                      ['Analyzing diplomate feedback on OLA content', 'Planned / actively exploring'],
                      ['Internal operations (scheduling, projections, gap analysis)', 'Planned internal use'],
                      ['Assessing candidates on their use of clinical AI tools', 'Under exploration — not yet implemented'],
                      ['Literature or knowledge searches for volunteer item writers', 'Permitted as a research aid'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[#444] text-[15px] font-light">{row[0]}</td>
                        <td className="py-3 text-[#666] text-[15px] font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                ABR isn't the only radiology body drawing careful lines
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The pattern extends beyond individual certification. In May 2026, the American College of Radiology's Council approved a joint <a href="https://radiologybusiness.com/topics/artificial-intelligence/american-college-radiology-council-approves-groundbreaking-framework-assessing-ai" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Practice Parameter for Imaging Artificial Intelligence with SIIM</a>, covering how practices should select, evaluate, monitor, and govern AI tools once deployed — alongside a new AI quality registry. ABR's caution is about who gets a credential; ACR's framework is about how a practice governs a tool after it's bought. Different bodies, different scope, but the same instinct: build the governance structure deliberately, rather than let adoption outrun oversight.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the certifying body's caution is a case for human-in-the-loop AI, not against it
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                It would be easy to read ABR's statement as a headwind for AI in radiology. It's more useful read the other way: the organization responsible for validating every US radiologist's competence is telling the field, in plain language, exactly what it does and doesn't trust AI to do unsupervised. It trusts AI to sort feedback, analyze data, and support research. It does not trust AI, on its own, to write a test question or decide who is certified — because that decision carries consequences a human has to own.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That's the same logic that should govern AI in clinical reporting. A radiology report, like a certification decision, carries consequences for a real patient — which is why the workflow that holds up under this kind of scrutiny isn't an autonomous, black-box read. It's AI producing a complete, structured draft report, an in-house radiologist reviewing every preliminary, and the client's reading radiologist signing the final before it reaches a patient's chart. ABR won't let AI certify a radiologist unsupervised; the same principle is why AI shouldn't finalize a radiology report unsupervised either.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Does the American Board of Radiology use AI to certify radiologists?',
                    a: 'No. In an August 2026 statement covered by Radiology Business, the American Board of Radiology (ABR) said it does not presently use artificial intelligence in certification decisions or exam creation. The board said all testing materials continue to be developed and reviewed by qualified human experts, and that certification and scoring decisions must remain the responsibility of qualified human experts.',
                  },
                  {
                    q: 'What AI governance has the American Board of Radiology set up?',
                    a: "ABR has created an AI advisory group focused on governance and ethical standards, plus a trustee-level committee evaluating how AI could improve content assessment. In a February 2026 Board of Governors update, ABR leadership said the board plans to use AI for internal functions like scheduling, data analysis, and analyzing diplomate feedback on exam content, but prohibits volunteers from using generative AI to write exam or assessment questions, citing copyright and quality-control concerns.",
                  },
                  {
                    q: 'Will the American Board of Radiology test how candidates use clinical AI tools?',
                    a: "It's under consideration, not yet policy. ABR leadership has said that as AI clinical tools become integral to practice, the board may find it appropriate to assess competency in the 'if, when, and how' of candidates using clinically available AI tools — but it has not implemented this and has committed to communicating any exam changes well in advance.",
                  },
                  {
                    q: 'Why does ABR\'s caution on AI matter for AI radiology reporting tools?',
                    a: 'It reinforces the governance model that professional radiology bodies are converging on: AI can assist with drafting, sorting, and internal analysis, but a qualified human must remain accountable for the decision that carries clinical or credentialing weight. That is the same structure behind AI CT reporting built around a full draft report, an in-house radiologist review of every preliminary, and the client\'s reading radiologist signing the final — not an autonomous, unreviewed output.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: American Board of Radiology, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/american-board-radiology-taking-cautious-approach-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (August 2026); Podgorsak MB, Wagner B. <a href="https://www.theabr.org/beam/from-the-board-of-governors-february-2026/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">"From the Board of Governors: ABR Plans to Use AI – Carefully."</a> American Board of Radiology BEAM (February 2026); American College of Radiology / SIIM Practice Parameter for Imaging Artificial Intelligence, as reported by <a href="https://radiologybusiness.com/topics/artificial-intelligence/american-college-radiology-council-approves-groundbreaking-framework-assessing-ai" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (May 2026). Quotes are as published; figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI drafts. In-house review on every preliminary. Your radiologist signs."
          sub="The same governance principle ABR applies to certification — human accountability for the decision that matters — is how xAID structures every CT report. Try it on 5 free studies."
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
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
              <Link to="/blog/should-patients-be-told-when-ai-reads-their-scan/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Ethics &amp; Trust</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Should Patients Be Told When AI Reads Their Scan?</div>
              </Link>
              <Link to="/blog/radiology-ai-clinical-outcomes-evidence-gap/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiology AI and Clinical Outcomes: The Evidence Gap</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AmericanBoardRadiologyCertificationAi;
