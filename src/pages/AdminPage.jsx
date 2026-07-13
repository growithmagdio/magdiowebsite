import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaTrash, 
  FaEdit, 
  FaSignOutAlt, 
  FaPlus, 
  FaList, 
  FaEye, 
  FaLock, 
  FaUserShield,
  FaCalendarAlt,
  FaClock
} from 'react-icons/fa';
import { 
  fetchBlogs, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost, 
  loginAdmin, 
  logoutAdmin, 
  checkAdminAuth,
  uploadImageFile
} from '../utils/blogService';
import { db } from '../firebase';

export default function AdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // App state
  const [activeTab, setActiveTab] = useState('compose'); // 'compose' or 'manage'
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    category: 'Technology',
    imageUrl: ''
  });
  
  // Image Upload Mode
  const [imageUploadMode, setImageUploadMode] = useState('url'); // 'url' or 'file'
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  
  // Edit state
  const [editingId, setEditingId] = useState(null);
  
  // Delete confirm state
  const [deletingId, setDeletingId] = useState(null);

  // Detect and monitor authentication
  useEffect(() => {
    const unsubscribe = checkAdminAuth((currentUser) => {
      if (currentUser) {
        setIsAuthenticated(true);
        setUser(currentUser);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch blogs when switching to 'manage' tab
  useEffect(() => {
    if (isAuthenticated && activeTab === 'manage') {
      loadBlogsList();
    }
  }, [isAuthenticated, activeTab]);

  const loadBlogsList = async () => {
    try {
      setLoadingBlogs(true);
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (err) {
      console.error('Failed to load blogs in admin:', err);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setAuthError('');
    try {
      await loginAdmin(loginEmail, loginPassword);
      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      console.error(error);
      setAuthError(error.message || 'Login failed. Please verify credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAdmin();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploadingImage(true);
      setStatus({ type: '', message: '' });
      const uploadedUrl = await uploadImageFile(file);
      setFormData(prev => ({ ...prev, imageUrl: uploadedUrl }));
      setStatus({
        type: 'success',
        message: 'Image uploaded successfully!'
      });
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
    } catch (err) {
      console.error('File upload error:', err);
      setStatus({
        type: 'error',
        message: `Image upload failed: ${err.message || 'Check storage permissions'}`
      });
    } finally {
      setIsUploadingImage(false);
    }
  };

  const startEdit = (blog) => {
    setFormData({
      title: blog.title || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      author: blog.author || 'Admin',
      category: blog.category || 'Technology',
      imageUrl: blog.imageUrl || ''
    });
    setEditingId(blog.id);
    setActiveTab('compose');
    setStatus({ type: '', message: '' });
  };

  const cancelEdit = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: 'Admin',
      category: 'Technology',
      imageUrl: ''
    });
    setEditingId(null);
    setStatus({ type: '', message: '' });
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      if (editingId) {
        // Update existing
        await updateBlogPost(editingId, formData);
        setStatus({
          type: 'success',
          message: 'Blog post updated successfully!'
        });
        cancelEdit();
      } else {
        // Create new
        await createBlogPost(formData);
        setStatus({
          type: 'success',
          message: 'Blog post published successfully!'
        });
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          author: 'Admin',
          category: 'Technology',
          imageUrl: ''
        });
      }
    } catch (error) {
      console.error('Error publishing blog post:', error);
      setStatus({
        type: 'error',
        message: `Failed to save: ${error.message || 'Check firebase configurations.'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlogPost(id);
      setDeletingId(null);
      loadBlogsList();
      setStatus({
        type: 'success',
        message: 'Blog post deleted successfully!'
      });
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: 'Failed to delete blog post.'
      });
    }
  };

  // Login Overlay Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 relative flex items-center justify-center bg-brand-dark px-6">
        {/* Background glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-[35rem] h-[35rem] bg-brand-blue/15 rounded-full blur-[110px]"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[30rem] h-[30rem] bg-brand-purple/10 rounded-full blur-[100px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaUserShield className="text-2xl" />
            </div>
            <h1 className="text-3xl font-bold font-display text-white mb-2">
              Admin <span className="text-brand-yellow">Access</span>
            </h1>
            <p className="text-white/60 text-sm">
              Please sign in to publish and manage website articles.
            </p>
          </div>

          {authError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-2.5 text-sm">
              <FaExclamationCircle className="shrink-0 text-lg" />
              <p>{authError}</p>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs text-white/50 font-medium pl-1">ADMINISTRATOR USERNAME / EMAIL</label>
              <input
                type="text"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="E.g. admin or email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between pl-1">
                <label className="text-xs text-white/50 font-medium">PASSWORD</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[10px] text-brand-yellow hover:underline focus:outline-none uppercase font-bold tracking-wider"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pr-10 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                />
                <FaLock className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-white/20 text-xs" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className={`w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center transition-all duration-300 mt-2 ${
                isLoggingIn 
                  ? 'bg-brand-blue/50 text-white/50 cursor-not-allowed' 
                  : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]'
              }`}
            >
              {isLoggingIn ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Authenticating...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Fallback Mode Note */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold ${
              db ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20'
            }`}>
              {db ? 'Connected to Firebase Firestore' : 'Running in Offline Sandbox Mode'}
            </span>
            {!db && (
              <p className="text-[10px] text-white/40 mt-2 leading-relaxed">
                Use fallback credentials <strong className="text-white/60">growithmagdio@gmail.com / magdio123</strong> to login.<br/>
                Add Firebase credentials to <code className="text-brand-yellow">.env</code> to enable server storage.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard Screen (Authenticated)
  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-brand-dark">
      
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] right-[10%] w-[30rem] h-[30rem] bg-brand-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[25rem] h-[25rem] bg-brand-purple/5 rounded-full blur-[90px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-8 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">Magdio Portal</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-1">
              Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-blue">Console</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 shrink-0 bg-white/5 px-4 py-2 rounded-xl border border-white/5 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${db ? 'bg-green-500' : 'bg-brand-yellow'} animate-pulse`} />
              {db ? 'Database: Live' : 'Database: Local Sandbox'}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500 text-white rounded-xl text-sm flex items-center gap-2 transition-all font-semibold"
            >
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        </div>

        {/* Dashboard Tabs Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('compose')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'compose'
                ? 'bg-brand-blue text-white shadow-glow-blue'
                : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <FaPlus /> {editingId ? 'Edit Post' : 'Compose Post'}
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'manage'
                ? 'bg-brand-blue text-white shadow-glow-blue'
                : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <FaList /> Manage Posts
          </button>
        </div>

        {/* Dynamic feedback messages */}
        {status.message && (
          <div className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${
            status.type === 'success' 
              ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
              : 'bg-red-500/10 border border-red-500/20 text-red-400'
          }`}>
            {status.type === 'success' ? <FaCheckCircle className="text-xl shrink-0" /> : <FaExclamationCircle className="text-xl shrink-0" />}
            <p className="text-sm font-light">{status.message}</p>
          </div>
        )}

        {/* TAB 1: COMPOSE / EDIT ARTICLE */}
        {activeTab === 'compose' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Editor form card */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
              
              {editingId && (
                <div className="mb-6 p-3 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs rounded-xl flex items-center justify-between">
                  <span>Currently editing: <strong className="text-white">ID {editingId}</strong></span>
                  <button 
                    onClick={cancelEdit} 
                    className="underline hover:text-white font-bold"
                  >
                    Cancel Editing
                  </button>
                </div>
              )}

              <h2 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
                <FaEdit className="text-brand-yellow" /> {editingId ? 'Edit Article Details' : 'Compose New Insight'}
              </h2>

              <form onSubmit={handleBlogSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs text-white/60 font-medium ml-1">POST TITLE</label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleFormChange}
                      placeholder="E.g. The Future of AI in Design"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/60 font-medium ml-1">CATEGORY</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleFormChange}
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Design">Design</option>
                      <option value="Development">Development</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Business">Business</option>
                      <option value="Insights">Insights</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs text-white/60 font-medium ml-1">AUTHOR</label>
                    <input
                      type="text"
                      name="author"
                      required
                      value={formData.author}
                      onChange={handleFormChange}
                      placeholder="Author Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center pl-1">
                      <label className="text-xs text-white/60 font-medium uppercase tracking-wider">Header Image</label>
                      <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/10 text-[10px]">
                        <button
                          type="button"
                          onClick={() => setImageUploadMode('url')}
                          className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                            imageUploadMode === 'url' ? 'bg-brand-blue text-white' : 'text-white/40'
                          }`}
                        >
                          URL
                        </button>
                        <button
                          type="button"
                          onClick={() => setImageUploadMode('file')}
                          className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                            imageUploadMode === 'file' ? 'bg-brand-blue text-white' : 'text-white/40'
                          }`}
                        >
                          Upload
                        </button>
                      </div>
                    </div>

                    {imageUploadMode === 'url' ? (
                      <input
                        type="url"
                        name="imageUrl"
                        required
                        value={formData.imageUrl}
                        onChange={handleFormChange}
                        placeholder="https://images.unsplash.com/..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light"
                      />
                    ) : (
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          id="image-file-input"
                        />
                        <label
                          htmlFor="image-file-input"
                          className="w-full bg-white/5 border border-dashed border-white/20 hover:border-brand-yellow/50 rounded-xl px-4 py-3 text-white flex items-center justify-center gap-2 cursor-pointer transition-all text-sm font-light min-h-[46px]"
                        >
                          {isUploadingImage ? (
                            <>
                              <div className="w-4 h-4 border-2 border-brand-yellow/30 border-t-brand-yellow rounded-full animate-spin"></div>
                              <span>Uploading...</span>
                            </>
                          ) : formData.imageUrl ? (
                            <span className="text-green-400 font-medium truncate max-w-[200px]">✓ Image Ready</span>
                          ) : (
                            <span className="text-white/40 font-light">Select Local Image File</span>
                          )}
                        </label>
                        {formData.imageUrl && (
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                            className="text-[10px] text-red-400 underline mt-1.5 block hover:text-red-300 ml-1"
                          >
                            Remove Uploaded File
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-xs text-white/60 font-medium">SHORT EXCERPT</label>
                    <span className="text-[10px] text-white/40">{formData.excerpt.length} characters</span>
                  </div>
                  <textarea
                    name="excerpt"
                    required
                    rows="2"
                    value={formData.excerpt}
                    onChange={handleFormChange}
                    maxLength="250"
                    placeholder="A brief 1-2 sentence summary to display on the blog listing cards..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light resize-none"
                  ></textarea>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-xs text-white/60 font-medium">FULL ARTICLE CONTENT</label>
                    <span className="text-[10px] text-brand-yellow">Supports ### for subheadings and - for bullet points</span>
                  </div>
                  <textarea
                    name="content"
                    required
                    rows="12"
                    value={formData.content}
                    onChange={handleFormChange}
                    placeholder="Write article details here. Separate paragraphs with double blank lines. Use '### Subheading' and list formats to construct structured posts."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light font-mono resize-y"
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  {editingId && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl text-sm transition-all"
                    >
                      Cancel Edit
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-grow py-3.5 rounded-xl font-bold text-sm flex items-center justify-center transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-brand-blue/50 text-white/50 cursor-not-allowed' 
                        : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Saving...
                      </>
                    ) : editingId ? (
                      'Save Changes & Update'
                    ) : (
                      'Publish Blog Post'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* PREVIEW CONTAINER */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase flex items-center gap-2">
                <FaEye className="text-brand-purple" /> Live Blog Card Preview
              </h3>

              {/* Mockup Blog Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-w-sm mx-auto">
                <div className="relative h-48 bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/15 z-10" />
                  {formData.category && (
                    <span className="absolute top-4 left-4 z-20 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-black bg-brand-yellow rounded-full uppercase">
                      {formData.category}
                    </span>
                  )}
                  {formData.imageUrl ? (
                    <img 
                      src={formData.imageUrl} 
                      alt="Header Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/20 gap-2">
                      <FaEye className="text-3xl" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">No Image URL Set</span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow text-left">
                  <div className="flex items-center justify-between text-[10px] text-white/40 mb-3 border-b border-white/5 pb-2">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> Today's Date
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> ~{Math.max(1, Math.ceil(formData.content.split(/\s+/).length / 200))} min read
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-display mb-2 line-clamp-2 min-h-[3.5rem] leading-snug">
                    {formData.title || 'Untitled Post'}
                  </h4>

                  <p className="text-white/60 text-xs mb-5 line-clamp-3 min-h-[2.75rem] leading-relaxed font-light">
                    {formData.excerpt || 'Write a short excerpt on the left to see the text summary wrap in this paragraph space...'}
                  </p>

                  <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-white/50">
                    <span>By {formData.author || 'Admin'}</span>
                    <span className="text-brand-blue font-bold flex items-center gap-1 text-[11px]">
                      Read Article &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Text rendering helper preview */}
              {formData.imageUrl && (
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[10px] font-bold text-white/40 uppercase block mb-2">IMAGE PREVIEW</span>
                  <img 
                    src={formData.imageUrl} 
                    alt="Cover Source" 
                    className="w-full h-32 object-cover rounded-lg border border-white/10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: MANAGE EXISTING ARTICLES */}
        {activeTab === 'manage' && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
              <FaList className="text-brand-blue" /> Published Insights
            </h2>

            {loadingBlogs ? (
              <div className="py-20 flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-brand-yellow/30 border-t-brand-yellow rounded-full animate-spin"></div>
                <p className="text-sm text-white/50">Fetching articles list...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-white/60 text-sm">No blogs exist in local memory or database yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-semibold tracking-wider text-white/40 uppercase">
                      <th className="py-4 px-4">Article</th>
                      <th className="py-4 px-4 hidden md:table-cell">Author</th>
                      <th className="py-4 px-4 hidden sm:table-cell">Category</th>
                      <th className="py-4 px-4">Date</th>
                      <th className="py-4 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-white/70">
                    {blogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-white/5 transition-colors group">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={blog.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=100'} 
                              alt=""
                              className="w-10 h-10 rounded-lg object-cover bg-white/5 border border-white/10 shrink-0" 
                            />
                            <div>
                              <p className="font-bold text-white group-hover:text-brand-yellow transition-colors line-clamp-1">
                                {blog.title}
                              </p>
                              <span className="text-[10px] text-white/40 block md:hidden">
                                By {blog.author} &bull; {blog.category}
                              </span>
                            </div>
                          </div>
                        </td>
                        
                        <td className="py-4 px-4 hidden md:table-cell font-light text-white/60">
                          {blog.author}
                        </td>
                        
                        <td className="py-4 px-4 hidden sm:table-cell">
                          <span className="text-[11px] font-semibold text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-2 py-0.5 rounded-full uppercase">
                            {blog.category || 'Technology'}
                          </span>
                        </td>
                        
                        <td className="py-4 px-4 text-xs font-light text-white/50">
                          {blog.date}
                        </td>
                        
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2.5">
                            {deletingId === blog.id ? (
                              <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/25 p-1 rounded-lg">
                                <span className="text-[10px] text-red-400 font-bold px-1.5">Delete?</span>
                                <button
                                  onClick={() => handleDelete(blog.id)}
                                  className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-[10px] font-bold transition-all"
                                >
                                  Yes
                                </button>
                                <button
                                  onClick={() => setDeletingId(null)}
                                  className="px-2 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[10px] font-bold transition-all"
                                >
                                  No
                                </button>
                              </div>
                            ) : (
                              <>
                                <button
                                  onClick={() => startEdit(blog)}
                                  className="p-2 bg-white/5 hover:bg-brand-blue/20 hover:text-brand-blue border border-white/5 rounded-lg text-white/60 transition-all"
                                  title="Edit Post"
                                >
                                  <FaEdit className="text-xs" />
                                </button>
                                {blog.id.startsWith('mock') ? (
                                  <button
                                    className="p-2 bg-white/5 border border-white/5 rounded-lg text-white/20 cursor-not-allowed"
                                    title="Default mock articles cannot be deleted"
                                    disabled
                                  >
                                    <FaTrash className="text-xs" />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => setDeletingId(blog.id)}
                                    className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 border border-white/5 rounded-lg text-white/60 transition-all"
                                    title="Delete Post"
                                  >
                                    <FaTrash className="text-xs" />
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

