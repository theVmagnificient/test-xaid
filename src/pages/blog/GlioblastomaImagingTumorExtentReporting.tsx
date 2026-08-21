import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const GlioblastomaImagingTumorExtentReporting = () => {
  const post = {
    title: 'A $2.54M Glioblastoma Imaging Grant Points to the Real Bottleneck: Reporting Extent, Not Just Detection',
    dateIso: '2026-08-21',
    date: 'August 21, 2026',
    category: 'Neuro-Oncology Imaging',
    readingTime: 7,
    description: "Wayne State researchers won a $2.54M NIH grant to build a quantitative PET tracer for glioblastoma. The real story isn't detection — it's why turning a scan into a number surgeons can act on is the hard, underfunded part of neuro-oncology imaging.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Glioblastoma Imaging: The Real Bottleneck Is Extent | xAID</title>
        <meta name="description" content="A new $2.54M NIH grant for glioblastoma PET imaging highlights the real gap in neuro-oncology imaging: quantifying tumor extent, not just detecting a mass." />
        <link rel="canonical" href="https://xaid.ai/blog/glioblastoma-imaging-tumor-extent-reporting/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Glioblastoma Imaging: The Real Bottleneck Is Extent | xAID" />
        <meta property="og:description" content="A new $2.54M NIH grant for glioblastoma PET imaging highlights the real gap in neuro-oncology imaging: quantifying tumor extent, not just detecting a mass." />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glioblastoma Imaging: The Real Bottleneck Is Extent | xAID" />
        <meta name="twitter:description" content="A new $2.54M NIH grant for glioblastoma PET imaging highlights the real gap in neuro-oncology imaging: quantifying tumor extent, not just detecting a mass." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/glioblastoma-imaging-tumor-extent-reporting" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/glioblastoma-imaging-tumor-extent-reporting",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "glioblastoma imaging, tumor extent reporting, quantitative MRI, PET imaging glioblastoma, structured radiology reporting"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What did the new NIH grant for glioblastoma imaging fund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The National Cancer Institute awarded Wayne State University School of Medicine a five-year, $2.54 million grant to develop a fluorine-18 PET tracer targeting the tryptophan-kynurenine pathway, a metabolic process glioma cells use to evade the immune system. Co-principal investigators Csaba Juhasz, PhD, and Otto Muzik, PhD, aim to produce quantitative maps of tumor metabolic activity rather than a simple presence/absence read."
              }
            },
            {
              "@type": "Question",
              "name": "Why is detecting a glioblastoma not the hard part of imaging it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A visible mass on MRI is rarely in doubt. The harder problems are quantifying how far tumor cells have infiltrated beyond the visible margin, and distinguishing true recurrence from pseudoprogression or radiation necrosis after treatment — findings that can look identical on conventional imaging but call for opposite clinical decisions."
              }
            },
            {
              "@type": "Question",
              "name": "How often is glioblastoma imaging misread as recurrence when it isn't?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pseudoprogression — new or enlarging contrast enhancement that mimics tumor recurrence but is actually a treatment effect — has a reported incidence of roughly 10% to 30% in treated glioma patients, according to a 2018 review in Contrast Media & Molecular Imaging. Most cases appear within three months of finishing treatment, precisely when clinicians are deciding whether therapy is failing."
              }
            },
            {
              "@type": "Question",
              "name": "Does quantitative tumor-extent imaging actually change outcomes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Extent of surgical resection is one of the few modifiable factors tied to glioblastoma survival. A 2016 JAMA Oncology meta-analysis of 37 studies and more than 41,000 patients found gross total resection cut relative one-year mortality risk by about 38% compared with subtotal resection. Imaging that quantifies tumor margins more precisely is what makes that more complete resection possible without removing healthy brain tissue."
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
                Neuro-Oncology Imaging
              </span>
              <span className="text-white/60 text-sm">{post.date}</span>
              <span className="text-white/60 text-sm">{`${post.readingTime} min read`}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-6">
              A new glioblastoma imaging grant<br />
              <span className="text-white/60">points at the real bottleneck: extent, not detection</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              Wayne State just won $2.54 million from the NIH to build a more precise glioblastoma tracer. The project is worth reading closely — not for the dollar figure, but for what it says about where neuro-oncology imaging actually falls short: turning a scan into a number a surgeon can act on.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '$2.54M', label: 'NIH/NCI glioblastoma grant', sub: '5-year project, Wayne State' },
            { stat: '12–15 mo', label: 'Median GBM survival', sub: 'with standard-of-care treatment' },
            { stat: '10–30%', label: 'Misread as tumor recurrence', sub: '"pseudo-progression" on MRI' },
            { stat: '38%', label: 'Lower 1-yr mortality risk', sub: 'with more complete resection' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What the grant actually funds
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                <a href="https://today.wayne.edu/medicine/news/2026/08/19/wayne-state-university-researchers-awarded-254-million-nih-grant-to-advance-brain-cancer-imaging-69980" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Wayne State University School of Medicine has been awarded a five-year, $2.54 million grant</a> from the National Cancer Institute, a development also covered by <a href="https://radiologybusiness.com/topics/medical-imaging/nuclear-medicine/pet-ct/researchers-awarded-nearly-3m-nih-grant-advance-glioblastoma-imaging" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Radiology Business</a>. Co-principal investigators Csaba Juhasz, PhD (professor of pediatrics, neurology and neurosurgery) and Otto Muzik, PhD (professor of pediatrics, neurology and radiology) are developing a PET tracer that targets the tryptophan-kynurenine pathway — a metabolic route glioma cells use to help evade the immune system.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The team had already shown that tracking this pathway with PET could identify infiltrative tumor tissue beyond what standard MRI picks up, using a carbon-11-based tracer. The problem was practical, not scientific: carbon-11 has a short half-life, so it requires an on-site cyclotron and specialized facilities, which limited how widely the technique could be tested or deployed. The new grant funds a fluorine-18 version of the tracer, developed with the Barbara Ann Karmanos Cancer Institute, whose longer half-life makes it far more workable for routine clinical PET.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                "Our goal is to give physicians a clearer, highly precise map of active tumor tissue before and after treatment," Juhasz said. "By better targeting active cancer cells and distinguishing recurrence from treatment side effects, we aim to make treatments more effective and ultimately extend patient survival." Wael Sakr, MD, dean of the Wayne State University School of Medicine, added that "this NIH award recognizes the innovative work of Drs. Juhasz and Muzik and the strength of the multidisciplinary team they have assembled. Their research has the potential to provide clinicians with greater insight into the extent and activity of these tumors, supporting more precise and informed treatment decisions for patients with brain cancer."
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Notice what the goal is not
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Nobody involved is trying to build a better way to say "yes, there is a tumor here." On a contrast-enhanced MRI, a glioblastoma is rarely subtle — the mass is usually obvious the moment the images load. The grant is funding something narrower and harder: a way to <em>quantify</em> where the biologically active tumor actually ends, and to tell that apart from tissue that merely looks abnormal after treatment.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                That distinction matters because two separate imaging problems get collapsed into "can you see the tumor," and both are reporting problems, not detection problems:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Infiltration beyond the visible margin',
                    desc: "Glioblastoma cells migrate well past the contrast-enhancing region a radiologist circles on MRI. Standard sequences can't reliably quantify that invisible extension, which is exactly why a metabolic PET tracer — something that lights up active tumor biology rather than just structural distortion — is the tool being funded here, not a sharper MRI.",
                  },
                  {
                    title: 'Recurrence vs. treatment effect',
                    desc: 'After surgery, radiation, and chemotherapy, new or enlarging contrast enhancement can mean the tumor is back, or it can mean the brain is reacting to treatment. Conventional MRI often cannot reliably tell these apart, and the two readings point to opposite next steps — more therapy versus watchful waiting.',
                  },
                  {
                    title: 'A number a surgeon can act on',
                    desc: "A radiology report that says \"tumor present\" is not actionable for a neurosurgeon deciding how much tissue to remove. A quantitative extent map — even an imperfect one — is. That gap between a qualitative impression and an actionable, structured measurement is the bottleneck this grant, and a wave of similar NIH-funded projects, are aimed at closing.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-[#0D0D0D] font-medium mb-2 text-base">{item.title}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Why the reporting layer, not the scanner, decides survival
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Extent of surgical resection is one of the few glioblastoma prognostic factors a hospital can actually influence, and the numbers behind it are substantial. A <a href="https://doi.org/10.1001/jamaoncol.2016.1373" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2016 meta-analysis in <em>JAMA Oncology</em></a> pooling 37 studies and more than 41,000 patients found that gross total resection, compared with subtotal resection, reduced the relative risk of death at one year by about 38% and at two years by about 16%. Median survival with standard-of-care treatment still sits at roughly <strong>12 to 15 months</strong>, which is precisely why every percentage point of safely resectable tumor matters.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But a surgeon can only resect what imaging tells them is there — and can only avoid resecting healthy tissue if imaging tells them, with some confidence, what isn't tumor. A <a href="https://doi.org/10.1155/2018/6828396" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">2018 review in <em>Contrast Media &amp; Molecular Imaging</em></a> puts a number on how often that confidence is misplaced: pseudoprogression occurs in an estimated <strong>10% to 30%</strong> of treated glioma patients, with most cases surfacing within three months of finishing treatment — the exact window when clinicians are deciding whether a therapy is failing. Get that reporting call wrong in either direction, and a patient either stops a treatment that was working or continues one that wasn't.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Detection reporting vs. quantitative extent reporting
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The distinction shows up clearly when the two reporting styles are placed side by side:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Dimension</th>
                      <th className="py-3 pr-4 font-medium text-[#0D0D0D]">Detection reporting</th>
                      <th className="py-3 font-medium text-[#0D0D0D]">Quantitative extent reporting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Core question answered', 'Is there a mass?', 'Where exactly does active tumor end?'],
                      ['Typical output', 'Descriptive impression', 'Measured volume / metabolic map'],
                      ['Post-treatment scans', 'Enhancement noted', 'Recurrence vs. treatment-effect distinction'],
                      ['Clinical action supported', 'Refer for biopsy or follow-up', 'Guide resection margin or next-line therapy'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        {row.map((cell, i) => (
                          <td key={i} className={`py-3 ${i === 0 ? 'pr-4 font-medium text-[#0D0D0D]' : i === 1 ? 'pr-4 text-[#666]' : 'text-[#666]'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this connects beyond neuro-oncology
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The Wayne State project sits in PET/MRI and surgical planning — outside CT, and outside where xAID's reporting tools operate today. But the underlying lesson generalizes across imaging: the expensive, underfunded part of most reporting workflows is rarely spotting an abnormality. It's turning that abnormality into a structured, quantitative, comparable measurement that a referring clinician can act on without re-reading the images themselves. That is the same thesis behind <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="text-xaid-blue-strong underline underline-offset-2">structured, foundation-model-based reporting</Link> in CT: the value isn't a flag that says "abnormal," it's a comprehensive, ready-to-sign draft with the measurements and comparisons already structured — reviewed in-house before it ever reaches the radiologist who signs it.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What did the new NIH grant for glioblastoma imaging fund?',
                    a: 'The National Cancer Institute awarded Wayne State University School of Medicine a five-year, $2.54 million grant to develop a fluorine-18 PET tracer targeting the tryptophan-kynurenine pathway, a metabolic process glioma cells use to evade the immune system. Co-principal investigators Csaba Juhasz, PhD, and Otto Muzik, PhD, aim to produce quantitative maps of tumor metabolic activity rather than a simple presence/absence read.',
                  },
                  {
                    q: 'Why is detecting a glioblastoma not the hard part of imaging it?',
                    a: 'A visible mass on MRI is rarely in doubt. The harder problems are quantifying how far tumor cells have infiltrated beyond the visible margin, and distinguishing true recurrence from pseudoprogression or radiation necrosis after treatment — findings that can look identical on conventional imaging but call for opposite clinical decisions.',
                  },
                  {
                    q: "How often is glioblastoma imaging misread as recurrence when it isn't?",
                    a: 'Pseudoprogression — new or enlarging contrast enhancement that mimics tumor recurrence but is actually a treatment effect — has a reported incidence of roughly 10% to 30% in treated glioma patients, according to a 2018 review in Contrast Media & Molecular Imaging. Most cases appear within three months of finishing treatment, precisely when clinicians are deciding whether therapy is failing.',
                  },
                  {
                    q: 'Does quantitative tumor-extent imaging actually change outcomes?',
                    a: 'Extent of surgical resection is one of the few modifiable factors tied to glioblastoma survival. A 2016 JAMA Oncology meta-analysis of 37 studies and more than 41,000 patients found gross total resection cut relative one-year mortality risk by about 38% compared with subtotal resection. Imaging that quantifies tumor margins more precisely is what makes that more complete resection possible without removing healthy brain tissue.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Source: <a href="https://today.wayne.edu/medicine/news/2026/08/19/wayne-state-university-researchers-awarded-254-million-nih-grant-to-advance-brain-cancer-imaging-69980" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Wayne State University School of Medicine</a> (August 2026), also covered by <a href="https://radiologybusiness.com/topics/medical-imaging/nuclear-medicine/pet-ct/researchers-awarded-nearly-3m-nih-grant-advance-glioblastoma-imaging" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>. Extent-of-resection figures from <a href="https://doi.org/10.1001/jamaoncol.2016.1373" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Brown et al., <em>JAMA Oncology</em> (2016)</a>. Pseudoprogression incidence from <a href="https://doi.org/10.1155/2018/6828396" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Zikou et al., <em>Contrast Media &amp; Molecular Imaging</em> (2018)</a>. Median survival figure per <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10041888/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">peer-reviewed literature on glioblastoma outcomes</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="Structured reporting isn't a nice-to-have. It's the bottleneck."
          sub="xAID applies the same thesis to CT: comprehensive, structured, ready-to-sign reports — reviewed in-house before your radiologist signs. Try it on 5 free studies."
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
              <Link to="/blog/foundation-models-vs-narrow-ai-radiology/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Foundation Models vs Narrow AI in Radiology</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Technology</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: What Chest X-ray Studies Show About Draft-Then-Sign</div>
              </Link>
              <Link to="/blog/radiology-report-language-precision/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Reporting Quality</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Why the Words Radiologists Use Can Delay Care</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default GlioblastomaImagingTumorExtentReporting;
