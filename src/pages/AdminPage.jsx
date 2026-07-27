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
  FaClock,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
  FaSync,
  FaSearch,
  FaShareAlt,
  FaTwitter
} from 'react-icons/fa';
import { 
  fetchBlogs, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost, 
  loginAdmin, 
  logoutAdmin, 
  checkAdminAuth,
  uploadImageFile,
  generateSlug
} from '../utils/blogService';
import { db } from '../firebase';
import RichTextEditor from '../components/admin/RichTextEditor';

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
    imageUrl: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    canonicalUrl: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: ''
  });
  
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(true); // Collapsible section named "SEO Settings"
  
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

  // Disable smooth scrolling on the Admin page to remove scroll animations
  useEffect(() => {
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    return () => {
      html.style.scrollBehavior = originalScrollBehavior;
    };
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
      const loggedUser = await loginAdmin(loginEmail, loginPassword);
      setIsAuthenticated(true);
      setUser(loggedUser);
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
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      
      // Auto-generate slug from title if title changes and user hasn't manually edited slug
      if (name === 'title' && !isSlugManuallyEdited) {
        updated.slug = generateSlug(value);
      }
      
      // Auto-populate metaTitle from title if blank or matching previous title
      if (name === 'title' && (!prev.metaTitle || prev.metaTitle === prev.title.slice(0, 60))) {
        updated.metaTitle = value.slice(0, 60);
      }

      // Auto-populate metaDescription from excerpt if blank or matching previous excerpt
      if (name === 'excerpt' && (!prev.metaDescription || prev.metaDescription === prev.excerpt.slice(0, 160))) {
        updated.metaDescription = value.slice(0, 160);
      }

      return updated;
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploadingImage(true);
      setStatus({ type: '', message: '' });
      // Compress the image file client-side before uploading
      const compressedFile = await compressImageFile(file);
      const uploadedUrl = await uploadImageFile(compressedFile);
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
    const defaultSlug = blog.slug || generateSlug(blog.title || '');
    setFormData({
      title: blog.title || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      author: blog.author || 'Admin',
      category: blog.category || 'Technology',
      imageUrl: blog.imageUrl || '',
      slug: defaultSlug,
      metaTitle: blog.metaTitle || blog.title || '',
      metaDescription: blog.metaDescription || blog.excerpt || '',
      canonicalUrl: blog.canonicalUrl || '',
      ogTitle: blog.ogTitle || '',
      ogDescription: blog.ogDescription || '',
      ogImage: blog.ogImage || '',
      twitterTitle: blog.twitterTitle || '',
      twitterDescription: blog.twitterDescription || '',
      twitterImage: blog.twitterImage || ''
    });
    setIsSlugManuallyEdited(!!blog.slug);
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
      imageUrl: '',
      slug: '',
      metaTitle: '',
      metaDescription: '',
      canonicalUrl: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      twitterTitle: '',
      twitterDescription: '',
      twitterImage: ''
    });
    setIsSlugManuallyEdited(false);
    setEditingId(null);
    setStatus({ type: '', message: '' });
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Pre-publish SEO Validation
    const finalSlug = generateSlug(formData.slug || formData.title);
    if (!finalSlug) {
      setStatus({
        type: 'error',
        message: 'Validation Error: URL Slug cannot be empty.'
      });
      setIsSeoOpen(true);
      setIsSubmitting(false);
      return;
    }

    const finalMetaTitle = (formData.metaTitle || formData.title || '').trim();
    if (!finalMetaTitle) {
      setStatus({
        type: 'error',
        message: 'Validation Error: Meta Title cannot be empty.'
      });
      setIsSeoOpen(true);
      setIsSubmitting(false);
      return;
    }

    const finalMetaDescription = (formData.metaDescription || formData.excerpt || '').trim();
    if (!finalMetaDescription) {
      setStatus({
        type: 'error',
        message: 'Validation Error: Meta Description cannot be empty.'
      });
      setIsSeoOpen(true);
      setIsSubmitting(false);
      return;
    }

    // Slug Uniqueness check across all existing blogs
    try {
      const allBlogs = await fetchBlogs();
      const duplicate = allBlogs.some(b => {
        if (editingId && b.id === editingId) return false;
        const bSlug = b.slug || generateSlug(b.title || '');
        return bSlug === finalSlug;
      });

      if (duplicate) {
        setStatus({
          type: 'error',
          message: `Validation Error: The URL slug "/blogs/${finalSlug}" is already used by another blog. Please enter a unique slug.`
        });
        setIsSeoOpen(true);
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.warn('Could not verify slug uniqueness:', err);
    }

    const payload = {
      ...formData,
      slug: finalSlug,
      metaTitle: finalMetaTitle,
      metaDescription: finalMetaDescription
    };

    try {
      if (editingId) {
        await updateBlogPost(editingId, payload);
        setStatus({
          type: 'success',
          message: 'Blog post updated successfully with SEO settings!'
        });
        cancelEdit();
      } else {
        await createBlogPost(payload);
        setStatus({
          type: 'success',
          message: 'Blog post published successfully with SEO settings!'
        });
        cancelEdit();
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">Magdio Portal</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-1">
              Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-blue">Console</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <span className="text-xs text-white/50 bg-white/5 px-4 py-2 rounded-xl border border-white/5 flex items-center gap-2">
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
        <div className="flex gap-3 md:gap-4 mb-8 w-full">
          <button
            onClick={() => setActiveTab('compose')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'compose'
                ? 'bg-brand-blue text-white shadow-glow-blue'
                : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <FaPlus /> {editingId ? 'Edit Post' : 'Compose Post'}
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
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

                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-xs text-white/60 font-medium">FULL ARTICLE CONTENT</label>
                    <span className="text-[10px] text-brand-yellow font-bold uppercase tracking-wider">✦ Rich Text Editor Active</span>
                  </div>
                  <RichTextEditor
                    value={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                  />
                </div>

                {/* COLLAPSIBLE SEO SETTINGS SECTION */}
                <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => setIsSeoOpen(!isSeoOpen)}
                    className="w-full px-5 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left font-display font-bold text-white text-base"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow text-sm shrink-0">
                        <FaGlobe />
                      </div>
                      <div>
                        <span className="text-white text-sm md:text-base font-bold">SEO Settings</span>
                        <p className="text-[11px] text-white/50 font-sans font-normal">Configure slug, metadata & social cards before publishing</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-block text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-blue/20 text-brand-blue border border-brand-blue/30 uppercase tracking-wider font-bold">
                        {formData.slug ? `/blogs/${generateSlug(formData.slug)}` : 'URL & Metadata'}
                      </span>
                      {isSeoOpen ? <FaChevronUp className="text-white/60 text-sm" /> : <FaChevronDown className="text-white/60 text-sm" />}
                    </div>
                  </button>

                  {isSeoOpen && (
                    <div className="p-5 md:p-6 border-t border-white/10 space-y-6 bg-brand-dark/40">
                      
                      {/* 1. Page URL (Slug) */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                            1. Page URL (Slug) <span className="text-red-400">*</span>
                          </label>
                          <button
                            type="button"
                            onClick={() => {
                              const auto = generateSlug(formData.title);
                              setFormData(prev => ({ ...prev, slug: auto }));
                              setIsSlugManuallyEdited(false);
                            }}
                            className="text-[11px] text-brand-yellow hover:underline flex items-center gap-1 font-semibold"
                          >
                            <FaSync className="text-[10px]" /> Auto-generate from Title
                          </button>
                        </div>

                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 text-xs font-mono select-none">
                            /blogs/
                          </span>
                          <input
                            type="text"
                            name="slug"
                            required
                            value={formData.slug}
                            onChange={(e) => {
                              const val = e.target.value;
                              setFormData(prev => ({ ...prev, slug: generateSlug(val) }));
                              setIsSlugManuallyEdited(true);
                            }}
                            placeholder="ai-automation-workflows"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-20 pr-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-mono"
                          />
                        </div>
                        <p className="text-[11px] text-white/40 leading-tight">
                          Live URL Preview: <code className="text-brand-yellow font-mono">https://www.magdio.com/blogs/{generateSlug(formData.slug || formData.title || 'ai-automation-workflows')}</code>
                        </p>
                      </div>

                      {/* 2. Meta Title */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                            2. Meta Title <span className="text-red-400">*</span>
                          </label>
                          <span className={`text-[11px] font-mono font-semibold ${
                            formData.metaTitle.length > 60 ? 'text-red-400' : formData.metaTitle.length > 50 ? 'text-brand-yellow' : 'text-white/50'
                          }`}>
                            {formData.metaTitle.length} / 60 characters
                          </span>
                        </div>
                        <input
                          type="text"
                          name="metaTitle"
                          required
                          maxLength={60}
                          value={formData.metaTitle}
                          onChange={handleFormChange}
                          placeholder="E.g. The Future of AI in Digital Marketing | Magdio"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light"
                        />
                        <p className="text-[11px] text-white/40">Used as the browser &lt;title&gt; tag (Max 60 characters).</p>
                      </div>

                      {/* 3. Meta Description */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                            3. Meta Description <span className="text-red-400">*</span>
                          </label>
                          <span className={`text-[11px] font-mono font-semibold ${
                            formData.metaDescription.length > 160 ? 'text-red-400' : formData.metaDescription.length > 140 ? 'text-brand-yellow' : 'text-white/50'
                          }`}>
                            {formData.metaDescription.length} / 160 characters
                          </span>
                        </div>
                        <textarea
                          name="metaDescription"
                          required
                          rows={3}
                          maxLength={160}
                          value={formData.metaDescription}
                          onChange={handleFormChange}
                          placeholder="A concise summary of the blog article to display on search engine results..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light resize-none"
                        />
                        <p className="text-[11px] text-white/40">Used as the page &lt;meta name="description"&gt; tag (Max 160 characters).</p>
                      </div>

                      {/* 4. Canonical URL (Optional) */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                          4. Canonical URL <span className="text-white/30 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="url"
                          name="canonicalUrl"
                          value={formData.canonicalUrl}
                          onChange={handleFormChange}
                          placeholder="https://www.magdio.com/blogs/ai-automation-workflows"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm font-light"
                        />
                        <p className="text-[11px] text-white/40">Specify if this article originates from another primary URL.</p>
                      </div>

                      {/* 5. Open Graph Settings (Optional) */}
                      <div className="pt-4 border-t border-white/10 space-y-4">
                        <h4 className="text-xs font-bold text-brand-yellow uppercase tracking-wider flex items-center gap-2">
                          <FaShareAlt /> 5. Open Graph Settings (Optional)
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[11px] text-white/60">OG Title</label>
                            <input
                              type="text"
                              name="ogTitle"
                              value={formData.ogTitle}
                              onChange={handleFormChange}
                              placeholder="Fallback to Meta Title"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-white/20 text-xs font-light"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] text-white/60">OG Image URL</label>
                            <input
                              type="url"
                              name="ogImage"
                              value={formData.ogImage}
                              onChange={handleFormChange}
                              placeholder="Fallback to Header Image"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-white/20 text-xs font-light"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] text-white/60">OG Description</label>
                          <textarea
                            name="ogDescription"
                            rows={2}
                            value={formData.ogDescription}
                            onChange={handleFormChange}
                            placeholder="Fallback to Meta Description"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-white/20 text-xs font-light resize-none"
                          />
                        </div>
                      </div>

                      {/* 6. Twitter Card Settings (Optional) */}
                      <div className="pt-4 border-t border-white/10 space-y-4">
                        <h4 className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center gap-2">
                          <FaTwitter /> 6. Twitter Card Settings (Optional)
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[11px] text-white/60">Twitter Title</label>
                            <input
                              type="text"
                              name="twitterTitle"
                              value={formData.twitterTitle}
                              onChange={handleFormChange}
                              placeholder="Fallback to OG / Meta Title"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-white/20 text-xs font-light"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] text-white/60">Twitter Image URL</label>
                            <input
                              type="url"
                              name="twitterImage"
                              value={formData.twitterImage}
                              onChange={handleFormChange}
                              placeholder="Fallback to OG / Header Image"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-white/20 text-xs font-light"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] text-white/60">Twitter Description</label>
                          <textarea
                            name="twitterDescription"
                            rows={2}
                            value={formData.twitterDescription}
                            onChange={handleFormChange}
                            placeholder="Fallback to OG / Meta Description"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-white/20 text-xs font-light resize-none"
                          />
                        </div>
                      </div>

                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {editingId && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl text-sm transition-all text-center"
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
              
              {/* Google SERP Snippet Preview */}
              <div className="bg-[#202124] border border-white/10 rounded-2xl p-5 shadow-2xl text-left max-w-sm mx-auto font-sans">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-green-400 flex items-center gap-1.5">
                    <FaSearch className="text-[10px]" /> Google SERP Snippet Preview
                  </h4>
                  <span className="text-[9px] text-white/40 font-mono">SEO Result View</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#bdc1c6]">
                    <div className="w-4 h-4 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center text-[9px] font-bold">M</div>
                    <span className="truncate">magdio.com &gt; blogs &gt; {generateSlug(formData.slug || formData.title || 'your-article-slug')}</span>
                  </div>
                  <h3 className="text-base text-[#8ab4f8] font-medium hover:underline leading-snug cursor-pointer line-clamp-2">
                    {formData.metaTitle || formData.title || 'Meta Title Preview'}
                  </h3>
                  <p className="text-xs text-[#bdc1c6] leading-relaxed line-clamp-3">
                    {formData.metaDescription || formData.excerpt || 'Enter a meta description in the SEO Settings section to preview how your search result snippet will look on Google.'}
                  </p>
                </div>
              </div>

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
                      <FaClock /> ~{Math.max(1, Math.ceil((formData.content || '').replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length / 200))} min read
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

              {/* Full Article Content Live Preview */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-2xl text-left max-w-sm mx-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-yellow flex items-center gap-2">
                    <FaEye size={12} /> Live Article Content Preview
                  </h4>
                  <span className="text-[10px] text-white/40 font-mono">HTML Rendered</span>
                </div>
                <div 
                  className="blog-prose space-y-4 text-white/80 font-sans tracking-wide text-xs sm:text-sm leading-relaxed overflow-x-auto max-h-[350px] overflow-y-auto pr-1 [&>h1]:text-xl [&>h1]:font-bold [&>h1]:font-display [&>h1]:text-white [&>h1]:mt-4 [&>h1]:mb-2 [&>h2]:text-lg [&>h2]:font-bold [&>h2]:font-display [&>h2]:text-white [&>h2]:mt-4 [&>h2]:mb-2 [&>h3]:text-base [&>h3]:font-bold [&>h3]:font-display [&>h3]:text-brand-yellow [&>h3]:mt-3 [&>h3]:mb-1.5 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:pl-2 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:pl-2 [&>ol]:space-y-1 [&>blockquote]:border-l-2 [&>blockquote]:border-brand-yellow [&>blockquote]:bg-white/5 [&>blockquote]:rounded-r-lg [&>blockquote]:p-3 [&>blockquote]:italic [&>blockquote]:my-3 [&>a]:text-brand-yellow [&>a]:underline [&>pre]:bg-[#03030b] [&>pre]:border [&>pre]:border-white/10 [&>pre]:p-3 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:font-mono [&>pre]:text-[11px] [&>pre]:text-brand-yellow [&>img]:rounded-xl [&>img]:my-3 [&>img]:border [&>img]:border-white/10 [&>img]:shadow-lg"
                  dangerouslySetInnerHTML={{ 
                    __html: formData.content || '<p class="text-white/30 italic text-xs">Start typing or formatting text in the Rich Text Editor to see the live formatted preview here...</p>' 
                  }}
                />
              </div>
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
              <div>
                {/* Mobile View: Stacked Cards for smaller screens */}
                <div className="block sm:hidden space-y-4">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <img 
                          src={blog.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=100'} 
                          alt=""
                          className="w-12 h-12 rounded-lg object-cover bg-white/5 border border-white/10 shrink-0" 
                        />
                        <div className="min-w-0 flex-grow">
                          <p className="font-bold text-white text-sm truncate leading-snug">
                            {blog.title}
                          </p>
                          <p className="text-[10px] text-white/40 mt-0.5">
                            By {blog.author} &bull; {blog.date}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1">
                        <span className="text-[10px] font-semibold text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-2.5 py-0.5 rounded-full uppercase">
                          {blog.category || 'Technology'}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          {deletingId === blog.id ? (
                            <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/25 p-1 rounded-lg">
                              <span className="text-[10px] text-red-400 font-bold px-1.5">Delete?</span>
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-[10px] font-bold transition-all"
                              >
                                Yes
                              </button>
                              <button
                                onClick={() => setDeletingId(null)}
                                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[10px] font-bold transition-all"
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
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop View: Table for larger screens */}
                <div className="hidden sm:block overflow-x-auto">
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
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// Utility function to compress image files client-side using Canvas
const compressImageFile = (file, maxWidth = 1200, maxHeight = 1200, quality = 0.7) => {
  return new Promise((resolve) => {
    if (!file.type.startsWith('image/')) {
      resolve(file);
      return;
    }

    // Failsafe timeout to prevent hanging if decoder or canvas crashes
    const timeoutId = setTimeout(() => {
      console.warn('Image compression timed out. Falling back to original file.');
      resolve(file);
    }, 4000);

    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const img = new Image();
          img.onload = () => {
            try {
              clearTimeout(timeoutId);
              const canvas = document.createElement('canvas');
              let width = img.width;
              let height = img.height;

              if (width === 0 || height === 0) {
                resolve(file);
                return;
              }

              if (width > height) {
                if (width > maxWidth) {
                  height = Math.round((height * maxWidth) / width);
                  width = maxWidth;
                }
              } else {
                if (height > maxHeight) {
                  width = Math.round((width * maxHeight) / height);
                  height = maxHeight;
                }
              }

              canvas.width = width;
              canvas.height = height;

              const ctx = canvas.getContext('2d');
              if (!ctx) {
                resolve(file);
                return;
              }
              ctx.drawImage(img, 0, 0, width, height);

              canvas.toBlob(
                (blob) => {
                  try {
                    if (!blob) {
                      resolve(file);
                      return;
                    }
                    const compressedFile = new File([blob], file.name, {
                      type: 'image/jpeg',
                      lastModified: Date.now(),
                    });
                    console.log(`Original size: ${(file.size / 1024).toFixed(1)}KB, Compressed size: ${(compressedFile.size / 1024).toFixed(1)}KB`);
                    resolve(compressedFile);
                  } catch (err) {
                    console.error('Blob creation error:', err);
                    resolve(file);
                  }
                },
                'image/jpeg',
                quality
              );
            } catch (err) {
              console.error('Canvas processing error:', err);
              resolve(file);
            }
          };
          
          img.onerror = () => {
            clearTimeout(timeoutId);
            resolve(file);
          };
          
          img.src = event.target.result;
        } catch (err) {
          clearTimeout(timeoutId);
          console.error('Image loading error:', err);
          resolve(file);
        }
      };
      
      reader.onerror = () => {
        clearTimeout(timeoutId);
        resolve(file);
      };
      
      reader.readAsDataURL(file);
    } catch (err) {
      clearTimeout(timeoutId);
      console.error('FileReader start error:', err);
      resolve(file);
    }
  });
};

