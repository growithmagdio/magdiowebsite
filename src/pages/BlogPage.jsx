import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../utils/blogService';
import { FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16 md:pt-32 md:pb-20">
      <SEO 
        title="Our Insights & Blog | Digital Marketing Resources | Magdio" 
        description="Thoughts, news, and perspectives on design, technology, and digital growth from the experts at Magdio." 
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[40rem] h-[40rem] bg-brand-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[30rem] h-[30rem] bg-brand-yellow/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-blue">Insights</span>
          </h1>
          <p className="text-lg text-white/70">
            Thoughts, news, and perspectives on design, technology, and digital growth from the MAGDIO team.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-brand-yellow/30 border-t-brand-yellow rounded-full animate-spin"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
            <p className="text-white/60 text-lg mb-4">No articles published yet.</p>
            <Link 
              to="/admin" 
              className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-yellow hover:text-black transition-colors"
            >
              Post First Blog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(26,34,184,0.3)] flex flex-col h-full"
              >
                {/* Image linked to details */}
                <Link to={`/blog/${blog.id}`} className="relative h-56 overflow-hidden block">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {blog.category && (
                    <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-bold tracking-wider text-black bg-brand-yellow rounded-full uppercase">
                      {blog.category}
                    </span>
                  )}
                  <img 
                    src={blog.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'} 
                    alt=""
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta items */}
                  <div className="flex items-center justify-between text-xs text-white/50 mb-4 border-b border-white/5 pb-3">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-brand-yellow" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-brand-blue" /> {blog.readTime || '5 min read'}
                    </span>
                  </div>
                  
                  {/* Title linked to details */}
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2">
                    <Link to={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-6 line-clamp-3 flex-grow font-light">
                    {blog.excerpt}
                  </p>
                  
                  {/* Footer metadata & Action link */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-white/50">
                      <FaUser className="text-brand-purple" /> {blog.author}
                    </span>
                    
                    <Link 
                      to={`/blog/${blog.id}`}
                      className="text-brand-blue font-semibold text-sm flex items-center gap-2 group-hover:text-brand-yellow transition-colors"
                    >
                      Read Article
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

