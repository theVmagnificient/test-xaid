import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const options = [
  {
    name: 'In-House On-Call Radiologist',
    cost: '$180–$350/hr on-call (even if no studies arrive) + base salary premium',
    availability: 'Depends on radiologist willingness; burnout risk is high',
    quality: 'Variable — fatigue affects performance at 2 AM vs 10 AM',
    guarantee: 'None',
    setup: 'Requires hiring and retaining a radiologist willing to take call',
    summary: 'Maximum control, maximum cost, high burnout and turnover risk.',
  },
  {
    name: 'Locum Radiologist for After-Hours',
    cost: '$200–$400+/hr for overnight locums; placement fees 15–25%',
    availability: 'Unreliable in tight markets; 2–8 week sourcing time',
    quality: 'Variable — unfamiliar with your case mix and reporting preferences',
    guarantee: 'None',
    setup: '2–8 weeks via staffing agency; often requires re-credentialing',
    summary: 'Expensive, unreliable, no quality guarantee.',
  },
  {
    name: 'Traditional Teleradiology',
    cost: '$80–$350/study after-hours — 30–100% surcharge over daytime rate',
    availability: 'Available — that\'s the value proposition',
    quality: 'Variable by service; no contractual quality commitment',
    guarantee: 'None',
    setup: '1–4 weeks; multi-year contract with volume commitments',
    summary: 'Available but expensive after-hours; surcharge compounds with volume.',
  },
  {
    name: 'AI CT Reporting (xAID)',
    cost: 'Flat per-study rate 24/7 — zero after-hours surcharge',
    availability: '24/7 including nights, weekends, holidays — included in base rate',
    quality: '95% accuracy — or we reimburse',
    guarantee: '95% accuracy — verified (the only AI CT reporting service with published clinical evidence)',
    setup: 'Standard DICOM/HL7, under one week',
    summary: '24/7 at flat rate, radiologist review included, contractual quality guarantee.',
  },
];

const faqs = [
  {
    q: 'What is the cheapest way to cover after-hours CT radiology?',
    a: 'AI CT reporting services like xAID offer the lowest cost-per-study for after-hours CT reads because they charge a flat per-study rate 24/7 — no after-hours surcharge, no premium pricing for nights and weekends. Traditional teleradiology services typically add a 30–100% surcharge for after-hours studies, meaning a $50 daytime CT read becomes $65–$100 on a Saturday evening. For a center reading 500 after-hours CTs per month, that surcharge gap can represent $90,000–$300,000 per year.',
  },
  {
    q: 'How much does after-hours teleradiology cost per study?',
    a: 'After-hours teleradiology rates vary by service, volume tier, and study type. Typical ranges: $80–$150 per routine CT study for night/weekend reads at standard teleradiology services; $100–$350 for after-hours reads at premium-priced traditional providers for lower-volume facilities. These represent a 30–100% premium over the same provider\'s daytime rates. After-hours pricing is rarely disclosed on provider websites — it appears in the contract.',
  },
  {
    q: 'Can AI CT reporting cover overnight radiology?',
    a: 'Yes. AI CT reporting services like xAID deliver complete preliminary reports 24 hours a day, 7 days a week — including nights, weekends, and holidays. The per-study rate is flat regardless of time of day. xAID includes our in-house European radiologist review in the per-study price, so every overnight study is reviewed before delivery. Turnaround time is 2–12 hours from DICOM receipt.',
  },
  {
    q: 'What is the radiologist burnout cost of after-hours call?',
    a: 'Radiologist burnout from call duty is well-documented. A 2024 Medscape Physician Burnout & Depression Report found that 40% of radiologists report burnout symptoms, with call duty cited as a primary driver. The cost of burnout includes: reduced productivity (estimated 20–40% output reduction during active burnout periods), increased error rates on night reads, and turnover — replacing a radiologist costs $50,000–$150,000 in recruitment fees, onboarding, and productivity loss. AI CT reporting for after-hours reads eliminates call duty for in-house radiologists entirely.',
  },
  {
    q: 'What CT scan types does xAID cover for after-hours reads?',
    a: 'xAID covers head CT, chest CT, and abdomen CT — the three most common after-hours CT modalities. Coverage includes 100+ findings per report across all three body regions. After-hours CT reads for MRI, X-ray, and other modalities would continue through existing coverage arrangements, as xAID is currently CT-only.',
  },
];

const AfterHoursRadiologyCoverage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
      { "@type": "ListItem", "position": 3, "name": "After-Hours Radiology Coverage", "item": "https://xaid.ai/blog/after-hours-radiology-coverage-options" },
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "After-Hours Radiology Coverage Options 2026: On-Call, Locum, Teleradiology, and AI Compared",
    "description": "Full comparison of after-hours radiology coverage options for outpatient imaging centers — in-house on-call, locum radiologist, traditional teleradiology, and AI CT reporting. Costs, availability, quality guarantees.",
    "url": "https://xaid.ai/blog/after-hours-radiology-coverage-options",
    "datePublished": "2026-02-17",
    "dateModified": "2026-02-17",
    "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
    "publisher": {
      "@type": "Organization",
      "name": "xAID",
      "url": "https://xaid.ai",
      "logo": { "@type": "ImageObject", "url": "https://xaid.ai/favicon.ico" }
    },
    "image": "https://xaid.ai/og-image.png",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://xaid.ai/blog/after-hours-radiology-coverage-options" },
    "keywords": "after-hours radiology coverage, overnight radiology service, night radiology reads, weekend CT coverage, teleradiology after hours"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <Helmet defer={false}>
        <title>After-Hours Radiology Coverage Options 2026: Costs, Availability & Quality | xAID</title>
        <meta
          name="description"
          content="Full comparison of after-hours radiology coverage: in-house on-call, locum, teleradiology surcharges, and AI CT reporting at flat rate. Costs, availability, and quality guarantees compared."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="After-Hours Radiology Coverage Options 2026: Costs, Availability & Quality Compared" />
        <meta property="og:description" content="In-house on-call vs locum vs teleradiology surcharge vs AI CT reporting — costs, availability, and quality guarantees for after-hours radiology coverage." />
        <meta property="og:url" content="https://xaid.ai/blog/after-hours-radiology-coverage-options" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="After-Hours Radiology Coverage: Costs Compared 2026" />
        <meta name="twitter:description" content="Teleradiology surcharges add 30–100% for after-hours reads. Here's what every coverage option actually costs — and what each includes." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">


        <article>
          {/* Hero */}
          <section className="pt-32 md:pt-40 pb-10">
            <div className="container-xaid max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="text-xaid-blue text-xs font-medium uppercase tracking-wider">Operations</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
                After-Hours Radiology Coverage Options 2026: On-Call, Locum, Teleradiology, and AI Compared
              </h1>
              <p className="text-gray-400 text-[15px] leading-[1.65] font-light mb-6">
                After-hours CT coverage is the most expensive line item in many outpatient imaging center budgets — and it is the line item that benefits most from AI CT reporting. Here is a complete comparison of every coverage option, with actual cost figures, availability realities, and what each model actually delivers at 2 AM on a Saturday.
              </p>
              <div className="flex items-center gap-4 text-gray-500 text-sm border-t border-white/10 pt-6">
                <span>xAID</span>
                <span>·</span>
                <span>February 17, 2026</span>
                <span>·</span>
                <span>7 min read</span>
              </div>
            </div>
          </section>

          {/* The after-hours cost problem */}
          <section className="section-padding bg-white/[0.03]">
            <div className="container-xaid max-w-3xl mx-auto">
              <div className="bg-xaid-blue/10 border border-xaid-blue/20 rounded-2xl p-7">
                <h2 className="text-white font-normal text-base mb-4">Why after-hours coverage is disproportionately expensive</h2>
                <p className="text-gray-300 text-[15px] leading-[1.65] font-light mb-4">
                  For a facility reading 1,500 CT studies per month, roughly 30–40% fall outside standard business hours (typically 5 PM–8 AM and all day weekends). That is 450–600 studies per month arriving in the window when coverage is hardest to staff and most expensive to source.
                </p>
                <p className="text-gray-300 text-[15px] leading-[1.65] font-light mb-4">
                  Traditional teleradiology surcharges of 30–100% on after-hours reads mean that a center paying $55/study during the day pays $72–$110 for the exact same CT at night. At 500 after-hours studies per month, that surcharge adds <strong className="text-white">$85,000–$330,000 per year</strong> over the daytime rate.
                </p>
                <p className="text-gray-300 text-[15px] leading-[1.65] font-light">
                  This surcharge exists because radiologists charge more to work nights. AI CT reporting doesn't — the AI runs identically at 2 AM as at 2 PM, and xAID's radiologist review staffing covers all hours at the same flat rate.
                </p>
              </div>
            </div>
          </section>

          {/* Options comparison */}
          <section className="section-padding bg-[#EBEBEB]">
            <div className="container-xaid">
              <div className="bg-white rounded-2xl p-6 md:p-10">
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-2 text-center">After-hours coverage options: Full Comparison</h2>
                <p className="text-gray-500 text-sm text-center mb-8">Cost and availability for nights, weekends, and holidays.</p>
                <div className="space-y-6">
                  {options.map((opt, i) => (
                    <div key={i} className={`rounded-xl p-6 border ${i === options.length - 1 ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                      <div className={`font-medium text-base mb-4 ${i === options.length - 1 ? 'text-xaid-blue' : 'text-[#0D0D0D]'}`}>{opt.name}</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">After-Hours Cost</div>
                          <div className="text-gray-800 leading-snug">{opt.cost}</div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Availability</div>
                          <div className="text-gray-800 leading-snug">{opt.availability}</div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Quality</div>
                          <div className="text-gray-800 leading-snug">{opt.quality}</div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Quality Guarantee</div>
                          <div className={`leading-snug ${i === options.length - 1 ? 'text-xaid-blue font-medium' : 'text-gray-800'}`}>{opt.guarantee}</div>
                        </div>
                      </div>
                      <div className={`mt-4 pt-4 border-t text-sm font-medium ${i === options.length - 1 ? 'border-blue-200 text-xaid-blue' : 'border-gray-200 text-gray-600'}`}>
                        {opt.summary}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* The surcharge math */}
          <section className="section-padding">
            <div className="container-xaid max-w-3xl mx-auto">
              <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-6">The after-hours surcharge math</h2>
              <p className="text-gray-300 text-[15px] leading-[1.65] font-light mb-6">
                If your current teleradiology contract charges a 50% after-hours surcharge — industry average — here is what that costs at different study volumes:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left p-4 font-medium text-white">After-Hours CTs/Month</th>
                      <th className="text-left p-4 font-medium text-white">Daytime Rate ($55/study)</th>
                      <th className="text-left p-4 font-medium text-white">After-Hours Rate (+50%)</th>
                      <th className="text-left p-4 font-medium text-xaid-blue">Annual surcharge cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [150, '$8,250/mo', '$12,375/mo', '$49,500/yr'],
                      [300, '$16,500/mo', '$24,750/mo', '$99,000/yr'],
                      [500, '$27,500/mo', '$41,250/mo', '$165,000/yr'],
                      [800, '$44,000/mo', '$66,000/mo', '$264,000/yr'],
                    ].map(([vol, day, night, annual], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white/3' : ''}>
                        <td className="p-4 text-white">{vol} studies</td>
                        <td className="p-4 text-gray-400">{day}</td>
                        <td className="p-4 text-gray-300">{night}</td>
                        <td className="p-4 text-xaid-blue font-medium">{annual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                The "annual surcharge cost" column represents the premium paid above the daytime rate — the pure cost of after-hours timing. With AI CT reporting at a flat rate, this number is zero.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding bg-[#EBEBEB]">
            <div className="container-xaid">
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-8">After-hours radiology coverage FAQs</h2>
                <div className="space-y-0">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-100 py-6 last:border-0">
                      <h3 className="text-[#0D0D0D] font-medium text-[18px] leading-[1.3] mb-3">{faq.q}</h3>
                      <p className="text-gray-600 text-[15px] leading-[1.65] font-light">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Related resources */}
          <section className="section-padding bg-white/5">
            <div className="container-xaid max-w-3xl mx-auto">
              <h2 className="text-xl font-normal text-white mb-6">Related resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/blog/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">Provider Guide</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Teleradiology Coverage Options — Provider Guide</div>
                </Link>
                <Link to="/blog/ct-radiology-coverage-costs-2026/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">Cost analysis</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Full CT Radiology Coverage Cost Comparison 2026</div>
                </Link>
                <Link to="/ai-vs-teleradiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                  <div className="text-xaid-blue text-xs font-medium mb-2">Comparison</div>
                  <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI CT Reporting vs Traditional Teleradiology — Full Comparison</div>
                </Link>
              </div>
            </div>
          </section>
        </article>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Eliminate the After-Hours Surcharge</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Free 5-study pilot. No integration required. Test overnight and weekend coverage before committing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact-us"
                className="btn-primary px-8 py-3 text-base"
              >
                Request free pilot
              </Link>
              <Link
                to="/pricing/"
                className="btn-outline px-8 py-3 text-base"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AfterHoursRadiologyCoverage;
