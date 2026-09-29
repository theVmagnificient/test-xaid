import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const H1bVisaFeeRadiologistShortage = () => {
  const post = {
    title: 'The $100K H-1B Visa Fee Is Back. It Taxes the Pipeline Radiology Depends On.',
    dateIso: '2026-09-28',
    date: 'September 28, 2026',
    category: 'Market & Policy',
    readingTime: 7,
    description: "The federal government has reinstated a $100,000 H-1B visa fee, and a parallel DHS rule would set it at $103,265 for every capped petition. International medical graduates make up about a quarter of US diagnostic radiologists — here's what the fee actually costs the specialty, and where AI-assisted reporting fits.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>$100K H-1B Visa Fee Returns: Cost to Radiology | xAID</title>
        <meta name="description" content="DHS reinstated the $100,000 H-1B visa fee and proposed making it permanent at $103,265. IMGs are about 25% of US radiologists — what it costs the specialty." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="$100K H-1B Visa Fee Returns: Cost to Radiology | xAID" />
        <meta property="og:description" content="DHS reinstated the $100,000 H-1B visa fee and proposed making it permanent at $103,265. IMGs are about 25% of US radiologists — what it costs the specialty." />
        <meta property="og:url" content="https://xaid.ai/blog/h1b-visa-fee-radiologist-shortage" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="$100K H-1B Visa Fee Returns: Cost to Radiology | xAID" />
        <meta name="twitter:description" content="DHS reinstated the $100,000 H-1B visa fee and proposed making it permanent at $103,265. IMGs are about 25% of US radiologists — what it costs the specialty." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/h1b-visa-fee-radiologist-shortage" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/h1b-visa-fee-radiologist-shortage",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "h1b visa fee physician, H-1B visa radiologist, IMG radiologist shortage, visa fee healthcare hiring, international medical graduates radiology"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the new H-1B visa fee physicians have to pay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In September 2025, a presidential proclamation set a $100,000 fee on new H-1B petitions for workers entering the US from abroad. A federal court in Massachusetts vacated that fee in June 2026, ruling it functioned as an unauthorized tax. On September 18, 2026, the fee was reinstated by executive order, and DHS has separately proposed a rule that would set a $103,265 fee on all cap-subject H-1B petitions going forward, with a public comment period that closed in late September 2026."
              }
            },
            {
              "@type": "Question",
              "name": "Why does the H-1B visa fee matter specifically for radiology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "International medical graduates make up roughly a quarter of practicing US diagnostic radiologists, a share that has grown over the past decade. Many enter or extend US practice on H-1B status, including radiology residents, fellows, and academic faculty. A six-figure per-petition fee lands on exactly that hiring channel, on top of an existing radiologist shortage and a workforce pipeline that already takes years to expand through training alone."
              }
            },
            {
              "@type": "Question",
              "name": "How many US radiologists are international medical graduates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 2026 Academic Radiology study of Medicare billing data found that of more than 26,000 unique diagnostic radiologists billing Medicare between 2017 and 2021, about 6,270 (24.1%) were international medical graduates, with that share rising from 22.4% to 24.0% over the study period. IMGs were more concentrated in academic radiology and the Northeast."
              }
            },
            {
              "@type": "Question",
              "name": "Can AI-assisted reporting help radiology groups facing this cost shock?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI-assisted CT reporting adds read capacity without adding visa-sponsored headcount, since the AI drafts a structured report that a radiologist reviews and signs rather than requiring another full-time hire. It does not replace the need for radiologists, including IMG radiologists, but it changes the calculus of how many additional bodies — and how much visa-linked hiring cost — a group needs to absorb rising imaging volume."
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
              The $100K H-1B visa fee is back.<br />
              <span className="text-white/60">It taxes the pipeline radiology depends on.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A reinstated six-figure filing fee lands squarely on the hiring channel that supplies roughly a quarter of US diagnostic radiologists. It's a new cost shock stacked on top of an existing shortage — not a separate problem.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$103,265', label: 'Proposed H-1B petition fee', sub: 'DHS rulemaking, 2026' },
            { stat: '~25%', label: 'US radiologists who are IMGs', sub: 'and growing since 2017' },
            { stat: '482', label: 'Radiology H-1B petitions', sub: 'filed, Oct 2019–Jun 2025' },
            { stat: '~20M', label: 'Live in IMG-reliant areas', sub: 'per AMA estimate' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What just happened
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A presidential proclamation in September 2025 set a <strong>$100,000</strong> fee on new H-1B petitions for workers entering the US from abroad. A federal court in Massachusetts vacated that fee in June 2026, finding it functioned as an unauthorized tax the executive branch lacked authority to impose without formal rulemaking, according to the <a href="https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Federal Register notice</a> that followed. On <strong>September 18, 2026</strong>, the fee was reinstated by a new executive order — and DHS has separately proposed a rule that would set the fee at <strong>$103,265</strong> for every capped H-1B petition, filed through proper notice-and-comment rulemaking this time, as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/devastating-consequences-feds-reinstate-100k-visa-fee-drawing-ire-physicians" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business reported</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Physician groups reacted immediately. The American Medical Association told DHS the rule "will only exacerbate serious access to care challenges in our nation," and noted that <strong>nearly 20 million Americans</strong> live in areas where foreign-trained physicians make up at least half of all doctors. The AMA separately warned the fee would have "devastating consequences" for health care access throughout the country and make hiring for underserved-area practices "next to financially impossible," per the <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/devastating-consequences-feds-reinstate-100k-visa-fee-drawing-ire-physicians" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">group's comment letter</a>. The American Hospital Association, representing about 5,000 hospitals, filed its own comments asking DHS to exempt healthcare professionals outright, as <a href="https://dailycaller.com/2026/09/25/h1b-visa-fee-dhs-ama-aha-uscis-markwayne-mullin/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by the Daily Caller</a>.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why radiology, specifically, has skin in this fight
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                International medical graduates aren't a footnote in US radiology — they're a substantial share of the workforce. A 2026 <em>Academic Radiology</em> study of Medicare billing data found that among more than 26,000 unique diagnostic radiologists billing Medicare between 2017 and 2021, <strong>6,270 (24.1%)</strong> were IMGs, with that share climbing from <strong>22.4% to 24.0%</strong> over the study period — a trajectory that puts the "roughly a quarter" figure <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/devastating-consequences-feds-reinstate-100k-visa-fee-drawing-ire-physicians" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">cited in the same coverage</a> on solid footing (Malhotra et al., <a href="https://doi.org/10.1016/j.acra.2026.04.024" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">DOI 10.1016/j.acra.2026.04.024</a>). IMG radiologists were also disproportionately concentrated in academic radiology (29.7% vs. 20.4% for US graduates) and in the Northeast — settings that lean heavily on H-1B and other visa sponsorship to recruit fellows and junior faculty.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A companion study from the same Yale-led research team quantified the direct H-1B exposure: a retrospective review of Department of Labor Labor Condition Application data found <strong>482 radiology-related H-1B petitions</strong> out of 479,005 total petitions filed between October 2019 and June 2025, of which 434 were certified. Of those, <strong>113 (26%)</strong> were trainee positions — 91% of them sponsored by university programs — and <strong>321 (74%)</strong> were nontrainee hires (Malhotra et al., <a href="https://doi.org/10.1016/j.jacr.2025.10.013" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">DOI 10.1016/j.jacr.2025.10.013</a>). The absolute count is small next to radiology's roughly 30,000-plus practicing physicians, but it's concentrated exactly where flexibility is thinnest: academic training programs and the safety-net and rural practices least able to absorb a six-figure surcharge per hire.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The fee's timeline, so far
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-6">
                This isn't a single policy event — it's the third act of a fight that's been running for a year. The table below lays out how it got here.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-[#0D0D0D] font-medium text-sm">Date</th>
                      <th className="py-3 px-4 text-[#0D0D0D] font-medium text-sm">Development</th>
                      <th className="py-3 pl-4 text-[#0D0D0D] font-medium text-sm">Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666] text-[14px] font-light">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Sept. 19, 2025</td>
                      <td className="py-3 px-4">$100,000 fee set on new H-1B petitions for workers entering from abroad</td>
                      <td className="py-3 pl-4">Presidential proclamation</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">June 8, 2026</td>
                      <td className="py-3 px-4">Fee vacated as an unauthorized tax that skipped required rulemaking</td>
                      <td className="py-3 pl-4">U.S. District Court, Massachusetts</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Aug. 25, 2026</td>
                      <td className="py-3 px-4">$103,265 fee proposed for all cap-subject H-1B petitions; comments open</td>
                      <td className="py-3 pl-4">DHS/USCIS notice-and-comment rulemaking</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Sept. 18, 2026</td>
                      <td className="py-3 px-4">$100,000 fee reinstated while the rulemaking proceeds</td>
                      <td className="py-3 pl-4">New executive order</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[#0D0D0D]">Sept. 22–24, 2026</td>
                      <td className="py-3 px-4">AMA and AHA file comments opposing the fee or seeking a healthcare exemption</td>
                      <td className="py-3 pl-4">Public comment submissions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Radiology's professional bodies have been here before. In April 2026, months after the original fee landed, the American College of Radiology and American Society of Neuroradiology joined more than 40 other medical organizations in backing the <em>H-1Bs for Physicians and the Healthcare Workforce Act</em> (H.R. 7961), introduced in mid-March 2026, which would exempt physicians and nurses from new immigration fees. That bill hasn't become law, which is part of why the fight is repeating now at the rulemaking stage rather than being settled by statute.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A cost shock, not a new shortage
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                None of this creates the radiologist shortage — it taxes it. Radiology already faces a capacity gap driven by imaging volume growing faster than the pipeline of new radiologists, a problem detailed in <a href="https://doi.org/10.1148/radiol.232625" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">RSNA's own review of the workforce squeeze</a>. IMG radiologists — including the American Board of Radiology's alternate certification pathway for foreign-trained physicians — have functioned as one of the few levers available to expand the pipeline faster than residency programs alone allow, since standing up new residency slots takes years and federal funding radiology has separately been fighting to protect.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A $100,000-plus per-petition fee doesn't just make that lever more expensive — it makes it a discrete, uninsurable line-item that a practice has to justify hiring by hiring. For independent groups and safety-net or rural hospitals operating on thin margins, that's the difference between sponsoring a visa and leaving a seat unfilled, exactly the outcome the AMA and AHA are warning about.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where AI-assisted reporting fits
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                A visa fee doesn't change how many CT and MRI studies need to be read — it changes how expensive it is to add a body to read them, whether that hire is a US graduate, an IMG on H-1B status, or a cross-border teleradiology contractor whose own visa or licensing costs just went up. AI-assisted CT reporting is a different lever entirely: it adds read capacity by giving each existing radiologist a structured, comprehensive draft report to start from, rather than requiring another full-time, visa-sponsored hire to absorb the same volume. It doesn't substitute for radiologists — xAID's in-house radiologist reviews every preliminary report, and the reading radiologist signs the final, ready-to-sign version — but it decouples "more imaging volume" from "more visa-linked headcount," which is exactly the equation this fee just made more expensive.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the new H-1B visa fee physicians have to pay?',
                    a: 'In September 2025, a presidential proclamation set a $100,000 fee on new H-1B petitions for workers entering the US from abroad. A federal court in Massachusetts vacated that fee in June 2026, ruling it functioned as an unauthorized tax. On September 18, 2026, the fee was reinstated by executive order, and DHS has separately proposed a rule that would set a $103,265 fee on all cap-subject H-1B petitions going forward, with a public comment period that closed in late September 2026.',
                  },
                  {
                    q: 'Why does the H-1B visa fee matter specifically for radiology?',
                    a: 'International medical graduates make up roughly a quarter of practicing US diagnostic radiologists, a share that has grown over the past decade. Many enter or extend US practice on H-1B status, including radiology residents, fellows, and academic faculty. A six-figure per-petition fee lands on exactly that hiring channel, on top of an existing radiologist shortage and a workforce pipeline that already takes years to expand through training alone.',
                  },
                  {
                    q: 'How many US radiologists are international medical graduates?',
                    a: 'A 2026 Academic Radiology study of Medicare billing data found that of more than 26,000 unique diagnostic radiologists billing Medicare between 2017 and 2021, about 6,270 (24.1%) were international medical graduates, with that share rising from 22.4% to 24.0% over the study period. IMGs were more concentrated in academic radiology and the Northeast.',
                  },
                  {
                    q: 'Can AI-assisted reporting help radiology groups facing this cost shock?',
                    a: 'AI-assisted CT reporting adds read capacity without adding visa-sponsored headcount, since the AI drafts a structured report that a radiologist reviews and signs rather than requiring another full-time hire. It does not replace the need for radiologists, including IMG radiologists, but it changes the calculus of how many additional bodies — and how much visa-linked hiring cost — a group needs to absorb rising imaging volume.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-policy/devastating-consequences-feds-reinstate-100k-visa-fee-drawing-ire-physicians" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a> (Sept. 28, 2026); <a href="https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Federal Register NPRM, Fee for Certain H-1B Petitions</a>; <a href="https://dailycaller.com/2026/09/25/h1b-visa-fee-dhs-ama-aha-uscis-markwayne-mullin/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Daily Caller</a>; Malhotra et al., "International Medical Graduates in the U.S. Radiologist Workforce," <em>Academic Radiology</em> (2026), <a href="https://doi.org/10.1016/j.acra.2026.04.024" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.acra.2026.04.024</a>; Malhotra et al., "Potential Impact of Change in H-1B Visas on Radiology Practice," <em>Journal of the American College of Radiology</em> (2025), <a href="https://doi.org/10.1016/j.jacr.2025.10.013" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1016/j.jacr.2025.10.013</a>; Afshari Mirak et al., <em>Radiology</em> (2025), <a href="https://doi.org/10.1148/radiol.232625" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1148/radiol.232625</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Add read capacity without adding visa-sponsored headcount"
          sub="AI-assisted CT reporting lets your current radiologists cover more volume. Try it on 5 free studies."
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
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Radiologist Shortage 2026: How AI CT Reporting Fills the Gap</div>
              </Link>
              <Link to="/blog/interventional-radiology-workforce-trends/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Radiology Workforce</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">IR Is Absorbing More Radiologists — Shrinking the Diagnostic Pool</div>
              </Link>
              <Link to="/blog/teleradiology-companies-policy-watchlist/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Policy &amp; Advocacy</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Teleradiology Just Got Its Own Lobby: A Policy Watch-List</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default H1bVisaFeeRadiologistShortage;
