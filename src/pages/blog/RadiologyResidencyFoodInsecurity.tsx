import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const RadiologyResidencyFoodInsecurity = () => {
  const post = {
    title: 'Food Insecurity in Radiology Residency: What a New Study Found',
    dateIso: '2026-11-01',
    date: 'November 1, 2026',
    category: 'Education & Training',
    readingTime: 7,
    description: 'A new JAMA Network Open survey found 30.5% of trainees at one academic health system were food insecure — and radiology residents reported the highest rate of any specialty studied. Here is what the data shows, and does not show, about the training pipeline.',
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Food Insecurity in Radiology Residency: New Data | xAID</title>
        <meta name="description" content="A new JAMA Network Open study found 30.5% of residents food insecure, with radiology highest of any specialty studied. What it means for the training pipeline." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Food Insecurity in Radiology Residency: New Data | xAID" />
        <meta property="og:description" content="A new JAMA Network Open study found 30.5% of residents food insecure, with radiology highest of any specialty studied. What it means for the training pipeline." />
        <meta property="og:url" content="https://xaid.ai/blog/radiology-residency-food-insecurity" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food Insecurity in Radiology Residency: New Data | xAID" />
        <meta name="twitter:description" content="A new JAMA Network Open study found 30.5% of residents food insecure, with radiology highest of any specialty studied. What it means for the training pipeline." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/radiology-residency-food-insecurity" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/radiology-residency-food-insecurity",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "radiology residency, radiology resident food insecurity, radiology training pipeline, radiology resident debt, radiologist shortage"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How common is food insecurity among radiology residents?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a 2026 JAMA Network Open survey of 164 trainees at Yale New Haven Health System, 30.5% met USDA criteria for food insecurity overall, and radiology residents had the highest rate of any specialty group studied at 50% (5 of 10). That radiology subgroup was very small, so the figure should be read as a signal, not a precise national estimate. A separate, larger 2025 JAMA Network Open study of 1,656 residents and fellows at two academic institutions found a lower overall rate (13.7%) and put radiology/diagnostic imaging at 13.0% (10 of 77), roughly in line with several other specialties."
              }
            },
            {
              "@type": "Question",
              "name": "Which residents are most affected by food insecurity?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "First-year residents (PGY-1) consistently show the highest rates. In the Yale study, 45.3% of PGY-1 trainees met food-insecurity criteria versus about 23% of residents in later training years (odds ratio 2.71). Lack of money, not lack of time, was the factor statistically associated with food insecurity in that study."
              }
            },
            {
              "@type": "Question",
              "name": "Does radiology residency carry unusually high debt or low pay?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Separate surveys point to real financial strain in the specialty. A 2024 Clinical Imaging survey of diagnostic and interventional radiology residents found 60% carried more than $100,000 in debt and 79% had no formal coursework in personal finance. A 2021 JACR analysis of PGY-2 diagnostic radiology stipends across 118 ACGME programs found a published range of about $49,500 to $72,000 that narrowed to roughly $26,900-$68,800 once adjusted for local cost of living, with an average 9.1% real-dollar loss nationally."
              }
            },
            {
              "@type": "Question",
              "name": "What does this mean for the radiology workforce pipeline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The debt, stipend and food-insecurity data describe financial strain concentrated in the earliest, most vulnerable years of training — a variable that gets far less attention than reading volume or burnout in discussions of why radiology struggles to staff its pipeline. It does not, on its own, prove residents are avoiding the specialty because of it; the data available show associated strain, not causation. It does add a concrete, underexamined input to the broader radiologist shortage conversation most imaging leaders are already having."
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
                Education &amp; Training
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              Food insecurity in radiology residency:<br />
              <span className="text-white/60">what the new data shows</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              A new JAMA Network Open survey found nearly a third of trainees at one academic health system were food insecure — and radiology residents reported the highest rate of any specialty studied. The number is small and needs a caveat, but the debt and stipend data behind it don't.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '30.5%', label: 'of surveyed trainees were food insecure', sub: 'Yale New Haven Health System' },
            { stat: '50%', label: 'of radiology residents surveyed were affected', sub: 'highest of any specialty — but n=10' },
            { stat: '45.3%', label: 'of first-year (PGY-1) residents affected', sub: 'vs ~23% in later training years' },
            { stat: '60%', label: 'of radiology residents carry over $100K in debt', sub: 'separate 2024 survey, Clinical Imaging' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the new study found
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Researchers at <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2855824" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Yale New Haven Health System</a> ran an anonymous, cross-sectional survey of resident physicians and clinical fellows using the USDA's 10-item Adult Food Security Survey Module. Of roughly 600 eligible trainees, 164 completed the survey with usable data — a 28% response rate, reported in <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2855824" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2"><em>JAMA Network Open</em></a> in October 2026 (DOI: <a href="https://doi.org/10.1001/jamanetworkopen.2026.40774" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">10.1001/jamanetworkopen.2026.40774</a>).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Overall, <strong>30.5%</strong> of respondents (50 of 164; 95% CI, 24.0%-37.9%) met criteria for food insecurity in the prior 12 months. Broken out by specialty, radiology residents reported the highest rate of any group studied — <strong>5 of 10</strong> respondents, or 50.0% — ahead of anesthesiology (40.0%) and well above internal medicine and surgery (19.2%-19.4% each). That difference across specialties was not statistically significant (P=.24), and a 10-person subgroup is too small to generalize from. It's a signal worth noting, not a national radiology statistic.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The more robust finding in the same study is about training year, not specialty. <strong>45.3%</strong> of PGY-1 residents (24 of 53) met food-insecurity criteria, compared with about 23% of residents in later years — an odds ratio of 2.71 (95% CI, 1.35-5.43; P=.004). Lack of money was strongly associated with food insecurity (odds ratio 72.0 for those who endorsed it); lack of time was not (P=.55). Among PGY-1s specifically, 51.9% cited lack of money as a barrier, versus 30.6% of later-year trainees.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                A larger study puts radiology's number in context
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                A separate, larger study published in the same journal a year earlier offers a useful counterweight. That survey covered 1,656 residents and fellows across four training sites at two academic medical centers, and found a lower overall food-insecurity rate of <strong>13.7%</strong> (<a href="https://doi.org/10.1001/jamanetworkopen.2025.50044" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">JAMA Network Open, DOI: 10.1001/jamanetworkopen.2025.50044</a>). With a far larger radiology subgroup — 77 residents instead of 10 — it put radiology/diagnostic imaging at <strong>13.0%</strong> (10 of 77), close to internal medicine (10.3%) and below surgery (22.1%) and pediatrics (19.7%).
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Read together, the two studies agree that food insecurity among residents generally — regardless of specialty — is common enough to warrant institutional attention, and that it's worse for trainees in their first year. They disagree on whether radiology specifically stands out, which is exactly what you'd expect when one specialty subgroup has 10 respondents and the other has 77. The larger, better-powered study is the more trustworthy read on radiology's relative position; the smaller study is the more trustworthy read on how severe the problem can get within a single cost-of-living-stressed program.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The debt and stipend data that predate this study
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Food insecurity doesn't appear in a vacuum, and radiology residency already has documented financial-strain data independent of these two surveys. A 2024 survey of 198 diagnostic and interventional radiology residents published in <em>Clinical Imaging</em> found <strong>60%</strong> of respondents who answered the debt question (84 of 141) carried more than $100,000 in debt after medical school, while <strong>79%</strong> of diagnostic residents (87% of interventional trainees) reported no formal coursework in personal finance, as <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/many-radiology-residents-facing-double-whammy-heavy-debt-burden-poor-financial-literacy" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Stipends compound the problem geographically. A <em>JACR</em> analysis of PGY-2 diagnostic radiology stipends across 118 ACGME-accredited programs in 77 cities found a published range of about $49,500 to $72,000 — but once adjusted for local cost of living, that range narrowed to roughly <strong>$26,900 to $68,800</strong>, with an average 9.1% loss in real purchasing power nationally and losses as steep as 58.1% in the highest-cost markets, as <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/radiology-resident-pay-falling-stipend-acgme" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">reported by Radiology Business</a>. A stipend that looks adequate on paper can still leave a resident in a high-cost city with less real income than a peer in a cheaper one.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What this adds to the pipeline conversation
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Most discussion of radiology's workforce pipeline focuses on reading volume, burnout among practicing attendings, and the <Link to="/blog/radiologist-shortage-2026-ai-ct-reporting/" className="text-xaid-blue-strong underline underline-offset-2">projected shortage</Link> of physicians overall. The financial condition of residents in their first one to two years of training gets far less airtime, even though it's the same pipeline that eventually staffs reading rooms and teleradiology queues.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                None of the studies cited here show that food insecurity or debt is driving medical students away from diagnostic radiology specifically — that causal claim isn't supported by the data, and radiology has in fact remained a competitive match in recent cycles. What the data does show is a concentration of financial strain in the PGY-1 year, debt loads that outpace financial literacy, and stipends that don't reliably track local cost of living. Those are concrete, fixable inputs — need-based emergency funds, cost-of-living-adjusted stipends, financial literacy curricula — that institutions can act on regardless of how the specialty-level numbers eventually settle.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this fits alongside AI-assisted reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                This is a training-economics story, not a reporting-technology one, and AI CT reporting doesn't fix a resident's grocery bill. But it belongs in the same shortage conversation imaging leaders are already having: every input that strains the pipeline — debt, stipends, burnout, attrition — eventually shows up as fewer radiologists available to read studies. Tools that give practicing radiologists a structured, ready-to-sign draft to review rather than a blank report to dictate reduce volume pressure on the attendings supervising those same residents today. The workforce problem has more than one lever, and the training pipeline is one that's been underexamined.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How common is food insecurity among radiology residents?',
                    a: 'In a 2026 JAMA Network Open survey of 164 trainees at Yale New Haven Health System, 30.5% met USDA criteria for food insecurity overall, and radiology residents had the highest rate of any specialty group studied at 50% (5 of 10). That radiology subgroup was very small, so the figure should be read as a signal, not a precise national estimate. A separate, larger 2025 JAMA Network Open study of 1,656 residents and fellows at two academic institutions found a lower overall rate (13.7%) and put radiology/diagnostic imaging at 13.0% (10 of 77), roughly in line with several other specialties.',
                  },
                  {
                    q: 'Which residents are most affected by food insecurity?',
                    a: 'First-year residents (PGY-1) consistently show the highest rates. In the Yale study, 45.3% of PGY-1 trainees met food-insecurity criteria versus about 23% of residents in later training years (odds ratio 2.71). Lack of money, not lack of time, was the factor statistically associated with food insecurity in that study.',
                  },
                  {
                    q: 'Does radiology residency carry unusually high debt or low pay?',
                    a: 'Separate surveys point to real financial strain in the specialty. A 2024 Clinical Imaging survey of diagnostic and interventional radiology residents found 60% carried more than $100,000 in debt and 79% had no formal coursework in personal finance. A 2021 JACR analysis of PGY-2 diagnostic radiology stipends across 118 ACGME programs found a published range of about $49,500 to $72,000 that narrowed to roughly $26,900-$68,800 once adjusted for local cost of living, with an average 9.1% real-dollar loss nationally.',
                  },
                  {
                    q: 'What does this mean for the radiology workforce pipeline?',
                    a: "The debt, stipend and food-insecurity data describe financial strain concentrated in the earliest, most vulnerable years of training — a variable that gets far less attention than reading volume or burnout in discussions of why radiology struggles to staff its pipeline. It does not, on its own, prove residents are avoiding the specialty because of it; the data available show associated strain, not causation. It does add a concrete, underexamined input to the broader radiologist shortage conversation most imaging leaders are already having.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10 break-words">
                Source: Mahan E, Demiray A, Huot SJ, Criscione J, Vazquez M. "Food Insecurity Among Resident Physicians and Clinical Fellows at a Large Academic Medical Center," <em>JAMA Network Open</em> 2026;9(10):e2640774, <a href="https://doi.org/10.1001/jamanetworkopen.2026.40774" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1001/jamanetworkopen.2026.40774</a>; comparison data from "Food Insecurity, Burnout, and Social Isolation Among Resident and Fellow Physicians," <em>JAMA Network Open</em> 2025;8(12):e2550044, <a href="https://doi.org/10.1001/jamanetworkopen.2025.50044" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">doi.org/10.1001/jamanetworkopen.2025.50044</a>; as reported by <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/food-insecurity-common-among-residents-radiology-and-other-specialties" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Debt and stipend data from <a href="https://radiologybusiness.com/topics/healthcare-management/healthcare-economics/many-radiology-residents-facing-double-whammy-heavy-debt-burden-poor-financial-literacy" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business (debt/financial literacy)</a> and <a href="https://radiologybusiness.com/topics/healthcare-management/leadership/radiology-resident-pay-falling-stipend-acgme" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business (stipend/cost-of-living)</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="The shortage has more than one cause. It has more than one fix, too."
          sub="See how AI-assisted CT reporting gives radiologists a ready-to-sign draft instead of a blank report — easing volume pressure across the reading room."
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
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Interventional Radiology Is Absorbing More Radiologists</div>
              </Link>
              <Link to="/blog/rsna-ai-certificate-radiologist-training/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Education &amp; Training</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">RSNA's AI Certificate and Why Radiologist Training Is Becoming Infrastructure</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RadiologyResidencyFoodInsecurity;
