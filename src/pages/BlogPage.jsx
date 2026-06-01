import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import SEO from '../components/SEO';

const mockBlogs = [
  {
    id: 'mock1',
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'Discover how artificial intelligence is reshaping the landscape of digital marketing and what it means for your brand.',
    content: 'Full content goes here...',
    author: 'Admin',
    date: 'Oct 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mock2',
    title: 'Design Trends to Watch in 2027',
    excerpt: 'From glassmorphism to dark mode, explore the UI/UX design trends that are dominating the web right now.',
    content: 'Full content goes here...',
    author: 'Designer',
    date: 'Oct 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mock3',
    title: 'Why Your Business Needs a Custom Web App',
    excerpt: 'Off-the-shelf solutions can only take you so far. Learn why investing in a custom web application is crucial for scaling.',
    content: 'Full content goes here...',
    author: 'Developer',
    date: 'Oct 15, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, 'blogs');
        const q = query(blogsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const fetchedBlogs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().createdAt ? new Date(doc.data().createdAt.toDate()).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
          }) : 'Unknown Date'
        }));

        if (fetchedBlogs.length > 0) {
          setBlogs(fetchedBlogs);
        } else {
          setBlogs(mockBlogs);
          setUsingMockData(true);
        }
      } catch (error) {
        console.error('Error fetching blogs from Firebase:', error);
        // Fallback to mock data if Firebase is not configured
        setBlogs(mockBlogs);
        setUsingMockData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={blog.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'} 
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUser /> {blog.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <button className="text-brand-blue font-semibold text-sm flex items-center gap-2 group-hover:text-brand-yellow transition-colors">
                      Read Article
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
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
