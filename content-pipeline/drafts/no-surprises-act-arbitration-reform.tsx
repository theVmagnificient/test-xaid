import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const NoSurprisesActArbitrationReform = () => {
  const post = {
    title: "Insurers, Not Physicians, Are Gaming No Surprises Act Arbitration, Groups Tell Congress",
    dateIso: '2026-09-23',
    date: 'September 23, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "ACR, ASA and ACEP told Congress insurers, not physicians, are gaming No Surprises Act arbitration, citing new CMS default and lowball-offer data.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>No Surprises Act Arbitration: Insurers vs. Doctors | xAID</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href="https://xaid.ai/blog/no-surprises-act-arbitration-reform/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="No Surprises Act Arbitration: Insurers vs. Doctors | xAID" />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content="https://xaid.ai/blog/no-surprises-act-arbitration-reform/" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="No Surprises Act Arbitration: Insurers vs. Doctors | xAID" />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/no-surprises-act-arbitration-reform" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/no-surprises-act-arbitration-reform",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "no surprises act arbitration, No Surprises Act IDR, independent dispute resolution radiology, qualifying payment amount, out-of-network reimbursement radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why do ACR, ASA and ACEP say insurers are gaming No Surprises Act arbitration?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The three societies sent Congress an analysis of CMS data showing insurers, not physicians, are undermining the independent dispute resolution (IDR) process: insurers failed to participate and lost by default on 24.5% of IDR line items in 2025, offered $1 or less in 8.2% of line items, and made offers at or below the qualifying payment amount (QPA) in nearly 40% of non-default cases."
              }
            },
            {
              "@type": "Question",
              "name": "What triggered the latest No Surprises Act fight in Congress?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Wall Street Journal report and editorial argued physicians are 'gaming' the NSA arbitration system, citing CMS figures showing radiology's median prevailing IDR offer reached about 398% of the qualifying payment amount in Q4 2025. ACR, ASA and ACEP responded with their own CMS-data analysis arguing insurer non-participation and lowball opening offers, not provider behavior, are driving both dispute volume and award size."
              }
            },
            {
              "@type": "Question",
              "name": "What is the No Surprises Enforcement Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "H.R. 4710 / S. 2420, the No Surprises Enforcement Act, would fine insurers that fail to pay physicians within 30 days of losing an IDR determination, charging a penalty of three times the gap between the insurer's initial payment and the arbitrator's award, plus interest. ACR, ASA and ACEP are asking Congress to pass it rather than weaken the dispute process itself."
              }
            },
            {
              "@type": "Question",
              "name": "What does the arbitration fight mean for radiology groups and teleradiology companies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Winning an IDR determination is not the same as getting paid. Practices are reporting that insurers routinely delay or skip payment even after losing arbitration, which turns out-of-network reimbursement into a collections problem on top of a pricing one. That makes operational costs — reporting turnaround, staffing, denial follow-up — one of the few levers radiology groups and teleradiology companies can still control directly."
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
              Insurers, not physicians, are gaming No Surprises Act arbitration<br />
              <span className="text-white/60">three specialty societies tell Congress</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Radiology, anesthesiology and emergency medicine's national societies sent Congress a CMS-data analysis rebutting a Wall Street Journal report that accused physicians of gaming arbitration. Their data: insurers default on a quarter of disputes and lowball offers by design. Here's what the fight means for reimbursement leverage today.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '24.5%', label: 'IDR line items insurers defaulted on', sub: 'by not participating, 2025' },
            { stat: '8.2%', label: 'Insurer offers of $1 or less', sub: 'of IDR line items analyzed' },
            { stat: '~40%', label: 'Insurer offers at or below QPA', sub: 'excluding defaulted cases' },
            { stat: '398%', label: "Radiology's median IDR award vs. QPA", sub: 'Q4 2025, per CMS data' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A joint statement, and a data fight, over who's "gaming" the system
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                On September 22, 2026, the American College of Radiology (ACR), the American College of Emergency Physicians (ACEP) and the American Society of Anesthesiologists (ASA) sent Congress a joint <a href="https://www.asahq.org/about-asa/newsroom/news-releases/2026/09/insurers-are-undermining-the-no-surprises-act-and-then-claiming-the-idr-process-is-broken" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">analysis of CMS data</a>, arguing that insurers — not physicians — are the ones undermining the No Surprises Act's independent dispute resolution (IDR) process, as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-anesthesiologists-and-em-docs-urge-congress-fix-no-surprises-act" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">first reported by Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The three specialties — all heavily exposed to out-of-network billing — say the CMS numbers back up what physician groups have been reporting anecdotally for years: insurance companies fail to even show up. According to the analysis, insurers failed to participate in the IDR process and lost by default on <strong>24.5%</strong> of IDR line items in 2025. When insurers did make an opening offer, <strong>8.2%</strong> of line items came in at $1 or less, and — excluding the defaulted cases entirely — nearly <strong>40%</strong> of insurer offers landed at or below the qualifying payment amount (QPA), the benchmark in-network rate the whole system is built around.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "A fair and effective IDR process depends on accurate payment data, transparency, and accountability from all stakeholders," ACR CEO Dana H. Smetherman, MD, MPH, MBA, said in the joint statement. "The process has been hampered by insurers refusing to negotiate fair rates, offering inadequate reimbursement, and artificially narrowing physician networks, rather than fully participating in good faith."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What set this off: a "racket" headline the specialties reject
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The joint letter is a direct response to a <em>Wall Street Journal</em> report and <a href="https://www.wsj.com/opinion/surprise-billing-act-health-insurance-providers-15c1eadb" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">editorial</a>, covered by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiology-fires-back-report-claiming-providers-gaming-no-surprises-act" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>, that accused physicians of gaming the NSA. Citing CMS figures, the <em>Journal</em> reported radiology's median prevailing IDR offer reached about <strong>398%</strong> of the QPA in the fourth quarter of 2025 — down from 473% in the third quarter — and its editorial called the pattern of provider wins a "racket," noting physicians prevailed in roughly 90% of cases and won payments of 3 to 9 times in-network rates.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Dispute volume itself is also disputed. Federal regulators originally projected around 22,000 arbitration claims a year when the NSA launched; more than 1.4 million were filed in just the first five months of 2026. Insurers argue that volume and the size of awards are pushing up premiums. Physician groups counter that the QPA benchmark insurers rely on is itself the problem — artificially low, opaque in how it's calculated, and often set below what practices were collecting under prior in-network contracts.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A <Link to="/blog/qualifying-payment-amount-no-surprises-act/" className="text-xaid-blue-strong underline underline-offset-2">recent Fifth Circuit ruling</Link> that vacated part of the QPA formula gave the physician groups' argument some judicial backing — a separate legal development from this legislative push, but part of the same underlying fight over whether the benchmark rate is trustworthy.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Two data sets, two very different stories
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                Both sides are reading CMS's own IDR data. The disagreement is about which numbers explain the outcomes.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D] uppercase tracking-wide">Claim</th>
                      <th className="py-3 pr-4 text-[13px] font-medium text-[#0D0D0D] uppercase tracking-wide">Insurer / WSJ framing</th>
                      <th className="py-3 text-[13px] font-medium text-[#0D0D0D] uppercase tracking-wide">ACR / ASA / ACEP framing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Why awards run high', 'Physicians are strategically pushing claims into arbitration to win outsized payouts.', 'Insurers set opening offers so far below market that arbitration is the only path left.'],
                      ['Headline evidence', "Radiology's median award reached ~398% of QPA in Q4 2025.", 'Insurers defaulted on 24.5% of line items and offered ≤$1 on 8.2% of them.'],
                      ['What Congress should do', 'Peg out-of-network awards closer to insurer-calculated in-network rates.', 'Pass the No Surprises Enforcement Act and enforce existing payment deadlines.'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-[14px] text-[#0D0D0D] font-medium align-top">{row[0]}</td>
                        <td className="py-3 pr-4 text-[14px] text-[#666] font-light align-top">{row[1]}</td>
                        <td className="py-3 text-[14px] text-[#666] font-light align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The legislative ask: enforcement, not a rewritten formula
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                ACR, ASA and ACEP are not asking Congress to redesign the IDR process. They're asking lawmakers to address "true outlier" payment offers without letting insurers use them as cover to weaken the dispute framework, and to strengthen enforcement of obligations insurers already have — including scrutinizing repeated defaults and extreme offers, and preserving what the groups call the "balanced IDR framework" Congress set up in 2022.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Their preferred vehicle is <a href="https://www.acr.org/News-and-Publications/Media-Center/2025/acr-supports-new-bill-to-penalize-insurers-for-delayed-payments" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">H.R. 4710 / S. 2420, the No Surprises Enforcement Act</a>, which the three societies have backed since it was introduced. The bill would fine insurers that fail to pay physicians within 30 days of losing an IDR determination — a penalty of three times the gap between the insurer's original payment and the arbitrator's award, plus interest. Government data cited in that bill's rollout found insurers lose roughly eight out of ten IDR cases.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "The No Surprises Act must be enforced, not undermined," said L. Anthony Cirillo, MD, president of ACEP, in the joint statement. "Insurers are ignoring the letter and spirit of the NSA. Congress should not look past insurers' role in driving IDR claim volume and then failing to participate in the process."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What it means for radiology groups and teleradiology companies billing under NSA
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                For groups that bill out-of-network under the NSA today, this fight is not abstract — it's about when, and whether, an arbitration win turns into cash.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'A win on paper isn’t a payment',
                    desc: "The default and lowball-offer data ACR, ASA and ACEP cite line up with what practices have separately reported: insurers routinely delay or skip payment even after losing an IDR determination. That turns out-of-network reimbursement into a collections exercise layered on top of a pricing dispute — and it's a cost radiology groups and teleradiology companies are absorbing right now, not a future risk.",
                  },
                  {
                    title: 'Leverage is contested, not settled',
                    desc: "The QPA formula is under legal challenge, the enforcement bill hasn't passed, and insurers are actively lobbying to peg awards closer to their own benchmark rates. Groups planning around today's favorable arbitration outcomes should treat that leverage as provisional, not permanent.",
                  },
                  {
                    title: 'The controllable lever is operational, not political',
                    desc: "Practices can't set when Congress acts or when a payer chooses to pay. What they can control is the cost side of the ledger: reporting turnaround, radiologist capacity, and how much staff time goes into denial and default follow-up instead of reads.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where xAID fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Reimbursement policy is playing out in Congress, the courts, and now the press — on a timeline no single radiology group controls. What a group can control is throughput: how many studies its radiologists can turn around without adding headcount, freeing capacity that would otherwise go to billing friction rather than reads. AI-assisted CT reporting — a structured draft with an in-house radiologist review on every preliminary, ready-to-sign by the client's reading radiologist — is one of the few levers that moves independently of how the NSA fight resolves.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Why do ACR, ASA and ACEP say insurers are gaming No Surprises Act arbitration?',
                    a: 'The three societies sent Congress an analysis of CMS data showing insurers, not physicians, are undermining the independent dispute resolution (IDR) process: insurers failed to participate and lost by default on 24.5% of IDR line items in 2025, offered $1 or less in 8.2% of line items, and made offers at or below the qualifying payment amount (QPA) in nearly 40% of non-default cases.',
                  },
                  {
                    q: 'What triggered the latest No Surprises Act fight in Congress?',
                    a: "A Wall Street Journal report and editorial argued physicians are 'gaming' the NSA arbitration system, citing CMS figures showing radiology's median prevailing IDR offer reached about 398% of the qualifying payment amount in Q4 2025. ACR, ASA and ACEP responded with their own CMS-data analysis arguing insurer non-participation and lowball opening offers, not provider behavior, are driving both dispute volume and award size.",
                  },
                  {
                    q: 'What is the No Surprises Enforcement Act?',
                    a: "H.R. 4710 / S. 2420, the No Surprises Enforcement Act, would fine insurers that fail to pay physicians within 30 days of losing an IDR determination, charging a penalty of three times the gap between the insurer's initial payment and the arbitrator's award, plus interest. ACR, ASA and ACEP are asking Congress to pass it rather than weaken the dispute process itself.",
                  },
                  {
                    q: 'What does the arbitration fight mean for radiology groups and teleradiology companies?',
                    a: 'Winning an IDR determination is not the same as getting paid. Practices are reporting that insurers routinely delay or skip payment even after losing arbitration, which turns out-of-network reimbursement into a collections problem on top of a pricing one. That makes operational costs — reporting turnaround, staffing, denial follow-up — one of the few levers radiology groups and teleradiology companies can still control directly.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiologists-anesthesiologists-and-em-docs-urge-congress-fix-no-surprises-act" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, reporting on a joint statement and CMS-data analysis from the American College of Radiology, American Society of Anesthesiologists and American College of Emergency Physicians, <a href="https://www.asahq.org/about-asa/newsroom/news-releases/2026/09/insurers-are-undermining-the-no-surprises-act-and-then-claiming-the-idr-process-is-broken" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">published by ASA</a> (September 22, 2026). Wall Street Journal figures and editorial as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/radiology-fires-back-report-claiming-providers-gaming-no-surprises-act" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. No Surprises Enforcement Act details via <a href="https://www.acr.org/News-and-Publications/Media-Center/2025/acr-supports-new-bill-to-penalize-insurers-for-delayed-payments" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">ACR</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Reimbursement policy is out of your hands. Throughput isn't."
          sub="See how AI-assisted CT reporting gives radiology groups and teleradiology companies more reads per radiologist, without adding headcount. Try it on 5 free studies."
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
              <Link to="/blog/qualifying-payment-amount-no-surprises-act/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Reimbursement</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">QPA Formula Struck Down: What It Means for Radiology</div>
              </Link>
              <Link to="/blog/radiology-revenue-cycle-management/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Practice Economics</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">The $2.6M Radiology Billing Gap Is Also a Reporting Problem</div>
              </Link>
              <Link to="/blog/aetna-bundled-prior-authorization-imaging-cancer-care/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Market &amp; Policy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Aetna's Bundled Prior Authorization Is a Preview of 2027 Medicare Imaging Rules</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NoSurprisesActArbitrationReform;
