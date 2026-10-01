import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogCTA from '@/components/BlogCTA';
import KeyStats from '@/components/KeyStats';

const IsAiBetterThanDoctors = () => {
  const post = {
    title: "Is AI 'Better Informed' Than Doctors? What RFK Jr.'s Claim Gets Wrong",
    dateIso: '2026-10-01',
    date: 'October 1, 2026',
    category: 'Market & Policy',
    readingTime: 8,
    description: "HHS Secretary RFK Jr. told a summit crowd AI gives 'a second opinion much better informed than any doctor.' Physicians, the AMA, and a randomized Oxford study say the real-world evidence doesn't back that up.",
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Is AI Better Than Doctors? Fact-Checking RFK Jr. | xAID</title>
        <meta name="description" content="HHS Secretary RFK Jr. says AI is 'better informed' than doctors. Physicians and the AMA pushed back. Here's what the real evidence shows." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Is AI Better Than Doctors? Fact-Checking RFK Jr. | xAID" />
        <meta property="og:description" content="HHS Secretary RFK Jr. says AI is 'better informed' than doctors. Physicians and the AMA pushed back. Here's what the real evidence shows." />
        <meta property="og:url" content="https://xaid.ai/blog/is-ai-better-than-doctors" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta property="article:published_time" content={post.dateIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is AI Better Than Doctors? Fact-Checking RFK Jr. | xAID" />
        <meta name="twitter:description" content="HHS Secretary RFK Jr. says AI is 'better informed' than doctors. Physicians and the AMA pushed back. Here's what the real evidence shows." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://xaid.ai/blog/is-ai-better-than-doctors" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.dateIso,
          "dateModified": post.dateIso,
          "url": "https://xaid.ai/blog/is-ai-better-than-doctors",
          "image": "https://xaid.ai/og-image.png",
          "author": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "publisher": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" },
          "keywords": "is ai better than doctors, AI vs doctors, RFK Jr AI doctors, AI better informed than doctors, AI in medicine policy"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Did RFK Jr. say AI is better informed than doctors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. At a fireside chat with Vice President JD Vance closing the Make America Healthy Again Summit in Washington, D.C. on September 29, 2026, HHS Secretary Robert F. Kennedy Jr. said AI can give patients 'a second opinion that is much better informed than any doctor in the country' and claimed it could 'free us from medical tyranny.'"
              }
            },
            {
              "@type": "Question",
              "name": "Did Sam Altman really call it malpractice not to check AI before a diagnosis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "That claim comes from Kennedy's own retelling of a private conversation, not from a public statement by Sam Altman. Kennedy told the summit that the OpenAI CEO said it would now be 'malpractice' for a doctor to diagnose or prescribe without checking AI first — but Altman has not made that statement publicly himself."
              }
            },
            {
              "@type": "Question",
              "name": "How did physicians respond to the claim that AI is better than doctors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The American Medical Association's CEO, Dr. John Whyte, said AI 'cannot replace physician judgment' and that care decisions must remain governed by a physician. Individual doctors were also critical; University of California San Francisco psychiatry professor Dr. Joe Pierre ran Kennedy's claim past ChatGPT itself, which responded that the evidence doesn't establish AI is more reliable than physicians for medical advice."
              }
            },
            {
              "@type": "Question",
              "name": "Does real-world evidence support AI being more reliable than doctors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not in the way the claim implies. A randomized, preregistered Oxford study of 1,298 participants published in Nature Medicine found leading chatbots identified the correct medical condition 94.9% of the time when tested directly, but accuracy fell to under 34.5% when real people used the same chatbots conversationally — performing no better than a control group using their own methods. The knowledge exists; reliable real-world delivery to an unassisted patient does not, yet."
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
              Is AI "better informed" than doctors?<br />
              <span className="text-white/60">What RFK Jr.'s claim gets wrong</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-[1.65]">
              HHS Secretary Robert F. Kennedy Jr. told a summit crowd that AI can already out-inform any doctor in the country. Physicians fired back within days — and a randomized study published weeks earlier shows exactly why the claim collapses outside the lab.
            </p>
          </div>
        </section>

        {/* Key stats */}
        <KeyStats
          items={[
            { stat: '94.9%', label: 'Chatbot accuracy, tested alone', sub: 'identifying the right condition in controlled testing' },
            { stat: '<34.5%', label: 'Accuracy with real users', sub: 'same chatbots, used conversationally by the public' },
            { stat: '1,298', label: 'Participants in the RCT', sub: 'randomized, preregistered Oxford study' },
            { stat: '0', label: 'Public statements from Altman', sub: 'confirming the "malpractice" quote Kennedy attributed to him' },
          ]}
        />

        {/* Article body */}
        <article className="section-padding bg-[#EBEBEB]">
          <div className="container-xaid">
            <div className="bg-white rounded-2xl p-8 md:p-16 max-w-3xl mx-auto">

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                What Kennedy actually said
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                At a fireside chat with Vice President JD Vance closing the <a href="https://radiologybusiness.com/topics/artificial-intelligence/physicians-fire-back-against-hhs-secretarys-claim-ai-better-informed-human-docs" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Make America Healthy Again Summit</a> in Washington, D.C. on September 29, 2026, HHS Secretary Robert F. Kennedy Jr. told attendees that AI can deliver patients "a second opinion that is much better informed than any doctor in the country," and that the technology could "free us from medical tyranny."
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Kennedy went further, suggesting AI would let patients override standard clinical guidance: <em>"If somebody tells you, 'Masks work, trust the experts,' AI may tell you otherwise. If somebody tells you, 'Social distancing works, trust the experts,' AI may correct that."</em> He also claimed OpenAI CEO Sam Altman told him privately that it would now be "malpractice" for a doctor to make a diagnosis or write a prescription without first checking AI — a quote that, as <a href="https://www.forbes.com/sites/siladityaray/2026/09/29/rfk-jr-says-ai-can-free-us-from-medical-tyranny-and-is-better-informed-than-doctors/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Forbes reported</a>, comes from Kennedy's own account of a private conversation. Altman has not made that statement publicly.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Physicians pushed back fast
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                The pushback was immediate and came from inside medicine, not just outside it. American Medical Association CEO Dr. John Whyte has been publicly direct on the underlying question: "AI has enormous potential in healthcare, but it cannot replace physician judgment. Patients deserve care decisions that are informed by the latest medical evidence and guided by a physician who understands their individual needs." The AMA's position, adopted through its House of Delegates policy earlier in 2026, is that AI use in clinical care and coverage decisions requires transparency, accountability, and "meaningful physician oversight" — not autonomy.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                Individual physicians were sharper still. <a href="https://www.theepochtimes.com/us/kennedy-touts-ai-over-doctors-at-industry-backed-summit-6096659" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">The Epoch Times reported</a> that Dr. Joe Pierre, a psychiatry professor at the University of California San Francisco, ran Kennedy's claim past ChatGPT itself. Its response: "If his claim is AI is more reliable than MDs when giving people medical advice, the evidence doesn't establish that. In fact, some of the best real-world evidence points in the opposite direction." That's a notable detail — the chatbot being held up as the "better informed" second opinion declined to agree with the claim made on its behalf.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The academic fight this is really about
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                Kennedy's comments landed in the middle of a live dispute in medical publishing. In August 2026, bioethicist Ezekiel Emanuel and venture investor Vinod Khosla published a <a href="https://jamanetwork.com/journals/jama/article-abstract/2852952" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">JAMA Viewpoint</a> arguing that "in cognitive medical functions, AI-alone medical care is likely to be better than physician-only or physician-AI hybrid care" for tasks like gathering patient information, forming a differential diagnosis, and managing chronic disease — and that AI could be ready for real-world deployment in "some, maybe many" workflows by 2030.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The AMA's John Whyte publicly challenged the paper's methodology, telling <em>Wired</em> that tools "have to be utilized in the context of a care plan that's governed by a physician," and noting that several of the studies the authors cited as support relied on simulations rather than blinded clinical trials — and that at least one cited study, a February 2026 <em>Nature Medicine</em> paper, actually found the opposite of what the Viewpoint concluded. Two of the Viewpoint's four authors also <a href="https://the-decoder.com/as-ai-beats-doctors-regulators-shouldnt-force-a-human-into-the-loop-jama-piece-says/" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">disclosed financial ties</a> to AI-care companies: Curai Health, which sells AI-powered virtual care, and Khosla Ventures, which has backed AI health startups including Curai.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                The study that undercuts the "better informed" claim
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-4">
                That February 2026 paper is the clearest empirical answer to Kennedy's claim. Researchers from the <a href="https://doi.org/10.1038/s41591-025-04074-y" target="_blank" rel="noopener noreferrer" className="text-xaid-blue-strong underline underline-offset-2">Oxford Internet Institute and Nuffield Department of Primary Care Health Sciences</a>, publishing in <em>Nature Medicine</em>, ran a randomized, preregistered trial with 1,298 participants across ten medical scenarios. Tested directly, three leading chatbots (GPT-4o, Command R+, and Llama 3) identified the correct underlying condition <strong>94.9%</strong> of the time and recommended the correct course of action <strong>56.3%</strong> of the time — genuinely strong performance in isolation.
              </p>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                But when real participants used those same chatbots conversationally to work through their own version of the same scenarios, condition-identification accuracy fell to under <strong>34.5%</strong>, and correct-action accuracy fell to under <strong>44.2%</strong> — no better than a control group using their own information sources. The researchers concluded that "standard benchmarks for medical knowledge and simulated patient interactions do not predict the failures" that show up once an unassisted person has to describe their own symptoms and interpret the response. The knowledge is there. The reliable, unsupervised delivery of it to a patient is not — at least not yet.
              </p>

              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-4">
                Where this lands for radiology
              </h2>
              <p className="text-[#444] text-[15px] leading-[1.65] font-light mb-8">
                The Kennedy controversy is about general-purpose consumer chatbots giving medical advice directly to patients — a very different deployment from purpose-built clinical AI used inside a radiology workflow. The Oxford study's failure mode is specifically a <em>communication</em> gap: patients don't know what information an LLM needs, and the LLM can't independently verify what it's told. A CT reporting AI doesn't have that problem in the same way, because it reads the images directly rather than relying on a patient's self-description — but it still shouldn't operate unsupervised. That's why no AI system today is authorized by the FDA for fully autonomous final diagnostic reporting: the model best supported by the evidence, and the one <a href="/blog/ai-radiology-reporting-draft-then-sign/" className="text-xaid-blue-strong underline underline-offset-2">peer-reviewed studies on AI report drafting</a> actually show working, is AI producing a structured draft that a radiologist reviews before a report is ready to sign.
              </p>

              {/* FAQ */}
              <h2 className="text-[28px] font-normal leading-[1.15] text-[#0D0D0D] mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Did RFK Jr. say AI is better informed than doctors?',
                    a: "Yes. At a fireside chat with Vice President JD Vance closing the Make America Healthy Again Summit in Washington, D.C. on September 29, 2026, HHS Secretary Robert F. Kennedy Jr. said AI can give patients 'a second opinion that is much better informed than any doctor in the country' and claimed it could 'free us from medical tyranny.'",
                  },
                  {
                    q: 'Did Sam Altman really call it malpractice not to check AI before a diagnosis?',
                    a: "That claim comes from Kennedy's own retelling of a private conversation, not from a public statement by Sam Altman. Kennedy told the summit that the OpenAI CEO said it would now be 'malpractice' for a doctor to diagnose or prescribe without checking AI first — but Altman has not made that statement publicly himself.",
                  },
                  {
                    q: 'How did physicians respond to the claim that AI is better than doctors?',
                    a: "The American Medical Association's CEO, Dr. John Whyte, said AI 'cannot replace physician judgment' and that care decisions must remain governed by a physician. Individual doctors were also critical; University of California San Francisco psychiatry professor Dr. Joe Pierre ran Kennedy's claim past ChatGPT itself, which responded that the evidence doesn't establish AI is more reliable than physicians for medical advice.",
                  },
                  {
                    q: 'Does real-world evidence support AI being more reliable than doctors?',
                    a: 'Not in the way the claim implies. A randomized, preregistered Oxford study of 1,298 participants published in Nature Medicine found leading chatbots identified the correct medical condition 94.9% of the time when tested directly, but accuracy fell to under 34.5% when real people used the same chatbots conversationally — performing no better than a control group using their own methods. The knowledge exists; reliable real-world delivery to an unassisted patient does not, yet.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-[#0D0D0D] font-medium mb-2">{item.q}</h3>
                    <p className="text-[#666] text-[15px] leading-[1.65] font-light">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#757575] text-[13px] leading-[1.6] font-light mt-10">
                Sources: <a href="https://radiologybusiness.com/topics/artificial-intelligence/physicians-fire-back-against-hhs-secretarys-claim-ai-better-informed-human-docs" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Radiology Business</a>, <a href="https://www.forbes.com/sites/siladityaray/2026/09/29/rfk-jr-says-ai-can-free-us-from-medical-tyranny-and-is-better-informed-than-doctors/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Forbes</a>, <a href="https://www.theepochtimes.com/us/kennedy-touts-ai-over-doctors-at-industry-backed-summit-6096659" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Epoch Times</a>, <a href="https://futurism.com/artificial-intelligence/american-medical-association-fires-back-ai-doctors" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Futurism (AMA/JAMA Viewpoint)</a>, <a href="https://the-decoder.com/as-ai-beats-doctors-regulators-shouldnt-force-a-human-into-the-loop-jama-piece-says/" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">The Decoder</a>, <a href="https://jamanetwork.com/journals/jama/article-abstract/2852952" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">JAMA</a>, and <a href="https://doi.org/10.1038/s41591-025-04074-y" target="_blank" rel="noopener noreferrer" className="text-[#666] underline hover:text-xaid-blue">Nature Medicine</a>. Figures are rounded as reported.
              </p>

            </div>
          </div>
        </article>

        <BlogCTA
          heading="AI that reads the images. A radiologist who signs the report."
          sub="Not a chatbot guessing from a patient's description — a CT reporting workflow built for radiologist review. Try it on 5 free studies."
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
              <Link to="/blog/will-ai-replace-radiologists/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI &amp; The Profession</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Will AI Replace Radiologists? An Honest, Data-Led Answer</div>
              </Link>
              <Link to="/blog/automation-bias-radiology-ai/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">AI Safety &amp; Oversight</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">Automation Bias in Radiology: The Case for Human Review</div>
              </Link>
              <Link to="/blog/ai-radiology-reporting-draft-then-sign/" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                <div className="text-xaid-blue text-xs font-medium mb-2">Clinical Evidence</div>
                <div className="text-white text-sm font-medium group-hover:text-xaid-blue transition-colors leading-snug">AI Radiology Reporting: What Chest X-ray Studies Show About Draft-Then-Sign</div>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default IsAiBetterThanDoctors;
