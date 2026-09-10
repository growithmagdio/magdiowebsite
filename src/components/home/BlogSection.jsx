import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../utils/blogService';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadLatestBlogs = async () => {
      try {
        const data = await fetchBlogs();
        if (isMounted) {
          // Take top 3 latest articles
          setBlogs(data.slice(0, 3));
        }
      } catch (err) {
        console.error('Error loading latest blogs on main page:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadLatestBlogs();

    const handleUpdate = () => {
      loadLatestBlogs();
    };

    window.addEventListener('magdio_blogs_updated', handleUpdate);

    return () => {
      isMounted = false;
      window.removeEventListener('magdio_blogs_updated', handleUpdate);
    };
  }, []);

  if (!loading && blogs.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-[#03030b]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[25rem] h-[25rem] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Latest Insights & News
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Stay Ahead with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-purple to-brand-blue">Latest Blogs</span>
            </h2>
          </div>
          
          <Link
            to="/blogs"
            className="group inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-brand-yellow transition-colors shrink-0"
          >
            <span>View All Articles</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl bg-white/5 border border-white/10 h-96 animate-pulse p-6 flex flex-col justify-between">
                <div className="h-44 bg-white/10 rounded-xl mb-4" />
                <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
                <div className="h-4 bg-white/10 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          /* Blog Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(26,34,184,0.25)] flex flex-col h-full"
              >
                {/* Image */}
                <Link to={`/blogs/${blog.slug || blog.id}`} className="relative h-52 overflow-hidden block">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {blog.category && (
                    <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-bold tracking-wider text-black bg-brand-yellow rounded-full uppercase">
                      {blog.category}
                    </span>
                  )}
                  <img
                    src={blog.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </Link>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between text-xs text-white/50 mb-3 border-b border-white/5 pb-3">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-brand-yellow" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-brand-blue" /> {blog.readTime || '5 min read'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blogs/${blog.slug || blog.id}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/60 text-sm mb-6 line-clamp-3 flex-grow font-light leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-white/50">
                      <FaUser className="text-brand-purple" /> {blog.author || 'Admin'}
                    </span>

                    <Link
                      to={`/blogs/${blog.slug || blog.id}`}
                      className="text-brand-blue font-semibold text-sm flex items-center gap-2 group-hover:text-brand-yellow transition-colors"
                    >
                      <span>Read Article</span>
                      <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
