import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog-posts';

const LatestFromBlog = () => {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-xaid">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Resources</span>
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-white leading-[1.15]">
              From the blog
            </h2>
          </div>
          <Link to="/blog/" className="hidden md:block text-xaid-blue text-sm font-medium hover:underline flex-shrink-0 mb-1">
            All articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}/`}
              className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xaid-blue text-xs font-medium">{post.category}</span>
                <span className="text-white/30 text-xs">{post.readingTime} min read</span>
              </div>
              <h3 className="text-white font-medium text-[18px] leading-[1.3] mb-3 group-hover:text-xaid-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-white/60 text-[15px] leading-[1.65] font-light line-clamp-3">{post.excerpt}</p>
              <span className="mt-4 inline-block text-xaid-blue text-xs font-medium group-hover:underline">
                Read →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link to="/blog/" className="text-xaid-blue text-sm font-medium hover:underline">
            All articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestFromBlog;
