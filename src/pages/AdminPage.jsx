import { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function AdminPage() {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    imageUrl: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Add a new document with a generated id.
      await addDoc(collection(db, "blogs"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      
      setStatus({ 
        type: 'success', 
        message: 'Blog post published successfully!' 
      });
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        author: 'Admin',
        imageUrl: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to publish. Have you configured Firebase in src/firebase.js?' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] right-[10%] w-[30rem] h-[30rem] bg-brand-blue/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Admin <span className="text-brand-yellow">Dashboard</span>
          </h1>
          <p className="text-white/60">Publish new insights to the MAGDIO blog.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl"
        >
          {status.message && (
            <div className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${
              status.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              {status.type === 'success' ? <FaCheckCircle className="text-xl" /> : <FaExclamationCircle className="text-xl" />}
              <p>{status.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-white/70 font-medium ml-1">Post Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="E.g. AI in Design"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70 font-medium ml-1">Author</label>
                <input
                  type="text"
                  name="author"
                  required
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Author Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70 font-medium ml-1">Header Image URL</label>
              <input
                type="url"
                name="imageUrl"
                required
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70 font-medium ml-1">Short Excerpt</label>
              <textarea
                name="excerpt"
                required
                rows="2"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="A brief summary for the blog card..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70 font-medium ml-1">Full Content</label>
              <textarea
                name="content"
                required
                rows="8"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your full article here..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-brand-blue/50 text-white/50 cursor-not-allowed' 
                  : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Publishing...
                </>
              ) : (
                'Publish Blog Post'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
