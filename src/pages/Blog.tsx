import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>AI Radiology Blog — CT Reporting Insights & Clinical Evidence | xAID</title>
        <meta
          name="description"
          content="Research, clinical evidence, and practical guides for radiology professionals navigating AI CT reporting. Accuracy data, HIPAA compliance, TAT benchmarks, and workflow insights."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Radiology Blog — CT Reporting Insights | xAID" />
        <meta property="og:description" content="Clinical evidence, compliance guides, and operational benchmarks for AI CT reporting." />
        <meta property="og:url" content="https://xaid.ai/blog" />
        <meta property="og:image" content="https://xaid.ai/og-image.png" />
        <meta property="og:site_name" content="xAID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Radiology Blog | xAID" />
        <meta name="twitter:description" content="Clinical evidence, compliance, and operational guides for AI CT reporting." />
        <meta name="twitter:image" content="https://xaid.ai/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xaid.ai/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://xaid.ai/blog" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "xAID AI Radiology Blog",
          "description": "Clinical evidence, compliance guides, and operational insights for AI CT reporting.",
          "url": "https://xaid.ai/blog",
          "publisher": {
            "@type": "Organization",
            "name": "xAID",
            "url": "https://xaid.ai"
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">


        {/* Hero */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-xaid">
            <div className="max-w-3xl">
              <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Blog</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.3] mb-4">
                AI radiology insights
              </h1>
              <p className="text-white/60 text-[15px] leading-[1.65] font-light">
                Clinical evidence, compliance guides, and operational benchmarks for radiology practices navigating AI CT reporting
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="section-padding">
          <div className="container-xaid">
            {/* Featured post */}
            <div className="mb-12">
              <Link
                to={`/blog/${blogPosts[0].slug}/`}
                className="block bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-xaid-blue/20 text-xaid-blue text-xs font-medium px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-white/40 text-sm">{blogPosts[0].date}</span>
                  <span className="text-white/30 text-sm">{blogPosts[0].readingTime} min read</span>
                </div>
                <h2 className="text-[22px] md:text-[28px] lg:text-[32px] font-normal leading-[1.2] text-white mb-4 group-hover:text-xaid-blue transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/60 text-[15px] leading-[1.65] font-light max-w-3xl">{blogPosts[0].excerpt}</p>
                <span className="mt-6 inline-block text-xaid-blue text-sm font-medium group-hover:underline">
                  Read article →
                </span>
              </Link>
            </div>

            {/* Grid of remaining posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}/`}
                  className="block bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-white/10 text-white/60 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-white/40 text-sm">{post.date}</span>
                    <span className="text-white/30 text-sm">{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-lg font-normal text-white mb-3 group-hover:text-xaid-blue transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-[15px] leading-[1.65] font-light">{post.excerpt}</p>
                  <span className="mt-4 inline-block text-xaid-blue text-sm font-medium group-hover:underline">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-white/5">
          <div className="container-xaid max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">Ready to try AI CT reporting?</h2>
            <p className="text-white/60 mb-8">Start with 5 free studies. No commitment</p>
            <Link
              to="/#contact-us"
              className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
            >
              Request free pilot
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
