import { db, auth, storage } from '../firebase.js';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

// Helper to auto-generate clean URL slug
export const generateSlug = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/^\/blogs\//, '')
    .replace(/^\/blog\//, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// --- IMAGE UPLOAD FUNCTION ---
export const uploadImageFile = async (file) => {
  if (storage) {
    try {
      const uniqueName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const storageRef = ref(storage, `blog-images/${uniqueName}`);
      
      // 8-second timeout to prevent hanging uploads
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Firebase Storage upload timed out.')), 8000);
      });

      const uploadPromise = (async () => {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
      })();

      return await Promise.race([uploadPromise, timeoutPromise]);
    } catch (error) {
      console.warn('Firebase Storage upload failed or timed out. Falling back to local Base64.', error);
    }
  }

  // Local fallback (Base64 encoding)
  return new Promise((resolve) => {
    try {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => {
        console.error('Error reading local file:', error);
        resolve('');
      };
      reader.readAsDataURL(file);
    } catch (e) {
      console.error('FileReader execution error:', e);
      resolve('');
    }
  });
};


// Standard fallback mock blogs with SEO properties
export const mockBlogs = [
  {
    id: 'mock1',
    slug: 'the-future-of-ai-in-digital-marketing',
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'Discover how artificial intelligence is reshaping the landscape of digital marketing and what it means for your brand.',
    content: 'Artificial intelligence is no longer a futuristic concept—it is actively reshaping how businesses interact with consumers, analyze data, and optimize campaigns. From machine learning algorithms that predict user behavior to generative AI tools that streamline content creation, digital marketing has entered a new era of efficiency and hyper-personalization.\n\n### Hyper-Personalization at Scale\nOne of the most powerful applications of AI is its ability to analyze massive datasets in real-time. Marketers can now understand individual user preferences, browsing history, and purchase patterns to deliver tailored content, product recommendations, and emails. This level of personalization increases engagement and conversion rates dramatically.\n\n### Predictive Analytics\nAI algorithms can identify trends and forecast future outcomes based on historical data. By analyzing customer actions, predictive AI helps businesses anticipate what products will be in demand, optimize pricing strategies, and identify which leads are most likely to convert. This takes the guesswork out of budgeting and campaign planning.\n\n### Automating Customer Experience\nAI-powered chatbots and conversational assistants have evolved beyond simple scripted replies. Today, using natural language processing (NLP), they provide instant, round-the-clock support, answering complex customer queries and guiding prospects through the sales funnel without human intervention.\n\n### Key Takeaways for Brands\n1. **Embrace Generative AI:** Use tools to brainstorm copy and create visual concepts, but always keep human oversight for brand voice consistency.\n2. **Clean Your Data:** AI is only as good as the data it trains on. Ensure your customer databases are organized and up-to-date.\n3. **Test and Iterate:** Implement small AI-driven tests, such as automated email subject line optimization, before scaling to larger automated workflows.',
    author: 'Admin',
    category: 'Technology',
    readTime: '5 min read',
    date: 'Oct 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'The Future of AI in Digital Marketing | Magdio',
    metaDescription: 'Discover how artificial intelligence is reshaping digital marketing and what it means for your brand growth.',
    canonicalUrl: 'https://www.magdio.com/blogs/the-future-of-ai-in-digital-marketing'
  },
  {
    id: 'mock2',
    slug: 'design-trends-to-watch-in-2027',
    title: 'Design Trends to Watch in 2027',
    excerpt: 'From glassmorphism to dark mode, explore the UI/UX design trends that are dominating the web right now.',
    content: 'As we head toward 2027, web and mobile interface designs are shifting focus toward immersive, tactile, and highly responsive user experiences. Modern UI/UX is moving away from flat, static layouts in favor of depth, physics-based animations, and customized dark modes.\n\n### 1. Advanced Glassmorphism and Depth\nGlassmorphism—utilizing frosted-glass effects with soft shadows and multi-layered backgrounds—remains a dominant visual style. When coupled with dynamic gradient backgrounds, it gives interfaces a premium, high-tech feel. Designing elements that appear to float on top of blurred light sources creates a visual hierarchy that guides the eye naturally.\n\n### 2. Micro-Interactions & Physical Animations\nAn interface that responds to user input with subtle, physics-based micro-interactions feels alive and encouraging. Buttons that compress slightly, cards that rotate based on cursor position (pointer-tracking glow), and scroll-triggered animations make user exploration rewarding. These details elevate standard designs to feel premium.\n\n### 3. Dark Mode First Aesthetics\nWith OLED screens dominating the mobile market, dark-themed interfaces are no longer just an alternative toggle—they are the default starting point for creative and tech-focused brands. A rich dark mode uses dark blues, deep purples, and carbon tones instead of pure black, allowing neon accents and glowing gradients to pop dramatically without causing eye strain.',
    author: 'Designer',
    category: 'Design',
    readTime: '4 min read',
    date: 'Oct 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Design Trends to Watch in 2027 | Magdio UI/UX',
    metaDescription: 'From glassmorphism to dark mode, explore top UI/UX design trends dominating the web.',
    canonicalUrl: 'https://www.magdio.com/blogs/design-trends-to-watch-in-2027'
  },
  {
    id: 'mock3',
    slug: 'why-your-business-needs-a-custom-web-app',
    title: 'Why Your Business Needs a Custom Web App',
    excerpt: 'Off-the-shelf solutions can only take you so far. Learn why investing in a custom web application is crucial for scaling.',
    content: 'In the early stages of a business, off-the-shelf software or templates might suffice. However, as your operations grow and your customer needs become more specific, generic solutions can hinder growth. Custom web applications tailored specifically to your workflows offer scalability, unique features, and a competitive edge.\n\n### Seamless Integration with Existing Workflows\nUnlike packaged software, a custom app is built to fit *your* business, not the other way around. It can integrate directly with your CRM, inventory database, and marketing software, eliminating manual data entry and reducing operational overhead.\n\n### Scalability and Flexbility\nWhen your user base grows, templates and third-party builders often struggle with performance or demand expensive plan upgrades. Custom code gives you full control over optimization, caching, and hosting architecture. It allows your software to evolve concurrently with your business objectives.\n\n### Enhanced Security\nCustom applications are less vulnerable to mass exploits since their codebases are proprietary. Off-the-shelf plugins and template engines are public and frequently targeted by automated scanners. Building custom endpoints with Firebase or robust API structures ensures your data remains protected.',
    author: 'Developer',
    category: 'Development',
    readTime: '6 min read',
    date: 'Oct 15, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Why Your Business Needs a Custom Web App | Magdio',
    metaDescription: 'Learn why investing in a custom web application is crucial for scaling your business operations.',
    canonicalUrl: 'https://www.magdio.com/blogs/why-your-business-needs-a-custom-web-app'
  }
];

// Helper to format date
// Safe date formatter supporting Firestore Timestamps, ISO strings, JS Dates, and formatted strings
export const formatDate = (dateObj) => {
  if (!dateObj) return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  
  if (dateObj && typeof dateObj.toDate === 'function') {
    try {
      return dateObj.toDate().toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      });
    } catch (e) {
      console.warn('Error formatting Firestore timestamp:', e);
    }
  }

  if (dateObj && typeof dateObj.seconds === 'number') {
    try {
      return new Date(dateObj.seconds * 1000).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      });
    } catch (e) {
      console.warn('Error formatting timestamp seconds:', e);
    }
  }

  if (typeof dateObj === 'string') {
    const parsed = new Date(dateObj);
    if (!isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      });
    }
    return dateObj;
  }

  try {
    const parsed = new Date(dateObj);
    if (!isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      });
    }
  } catch (e) {}

  return 'Unknown Date';
};

// Safe timestamp parsing for chronological sorting
const getSortableTime = (item) => {
  if (!item) return 0;
  const raw = item.createdAt || item.date || item.updatedAt;
  if (!raw) return 0;
  if (raw.toDate && typeof raw.toDate === 'function') {
    return raw.toDate().getTime();
  }
  if (typeof raw.seconds === 'number') {
    return raw.seconds * 1000;
  }
  const parsed = new Date(raw).getTime();
  return isNaN(parsed) ? 0 : parsed;
};

// Helper to race an async operation against a timeout (prevents hanging indefinitely on network issues)
const withTimeout = (promise, ms = 4000, errorMsg = 'Operation timed out') => {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error(errorMsg)), ms);
  });
  return Promise.race([promise, timeoutPromise]);
};

// --- BLOG DATA FUNCTIONS ---

// Fetch all blogs (Unified Firestore + LocalStorage + Mock Data)
export const fetchBlogs = async () => {
  if (typeof window === 'undefined') {
    return mockBlogs;
  }

  let firestoreBlogs = [];

  if (db) {
    try {
      const blogsRef = collection(db, 'blogs');
      const querySnapshot = await withTimeout(getDocs(blogsRef), 3000, 'Firestore fetch timed out');
      
      firestoreBlogs = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const rawContent = data.content || '';
        const textSnippet = rawContent.replace(/<[^>]*>/g, '').replace(/[\s\n]+/g, ' ').trim();
        return {
          id: doc.id,
          ...data,
          title: data.title || 'Untitled Article',
          excerpt: data.excerpt || (textSnippet ? textSnippet.slice(0, 160) + '...' : 'Read full article for insights.'),
          content: rawContent || '<p>Content coming soon...</p>',
          author: data.author || 'Admin',
          category: data.category || 'Insights',
          readTime: data.readTime || '5 min read',
          date: formatDate(data.createdAt || data.date),
          imageUrl: data.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
          slug: data.slug || generateSlug(data.title || doc.id)
        };
      });
    } catch (error) {
      console.warn('Firestore fetch skipped or timed out, loading local/cached blogs:', error.message);
    }
  }

  // Local Storage Fallback & Unsynced Posts
  let localBlogs = [];
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const localData = localStorage.getItem('magdio_local_blogs');
      if (localData) {
        const parsedLocal = JSON.parse(localData);
        localBlogs = parsedLocal.map(blog => {
          const rawContent = blog.content || '';
          const textSnippet = rawContent.replace(/<[^>]*>/g, '').replace(/[\s\n]+/g, ' ').trim();
          return {
            ...blog,
            title: blog.title || 'Untitled Article',
            excerpt: blog.excerpt || (textSnippet ? textSnippet.slice(0, 160) + '...' : 'Read full article for insights.'),
            content: rawContent || '<p>Content coming soon...</p>',
            author: blog.author || 'Admin',
            category: blog.category || 'Insights',
            readTime: blog.readTime || '5 min read',
            date: formatDate(blog.createdAt || blog.date),
            imageUrl: blog.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
            slug: blog.slug || generateSlug(blog.title || blog.id)
          };
        });
      }
    } catch (err) {
      console.error('Local Storage read error:', err);
    }
  }

  // Combine Firestore, Local Storage, and Mock Blogs into complete pool
  const allSources = [...firestoreBlogs, ...localBlogs, ...mockBlogs];

  // Deduplicate by ID and Slug (Firestore > LocalStorage > Mock)
  const seenIds = new Set();
  const seenSlugs = new Set();
  const uniqueBlogs = [];

  for (const blog of allSources) {
    const bId = blog.id;
    const bSlug = (blog.slug || generateSlug(blog.title || '')).toLowerCase();
    
    if (bId && seenIds.has(bId)) continue;
    if (bSlug && seenSlugs.has(bSlug)) continue;

    if (bId) seenIds.add(bId);
    if (bSlug) seenSlugs.add(bSlug);
    uniqueBlogs.push(blog);
  }

  // Sort descending by date/createdAt (newest first)
  uniqueBlogs.sort((a, b) => getSortableTime(b) - getSortableTime(a));

  return uniqueBlogs;
};

// Fetch single blog post by ID or Slug
export const fetchBlogById = async (idOrSlug) => {
  if (!idOrSlug) throw new Error('Blog identifier required.');

  const cleanId = idOrSlug.replace(/^\/blogs\//, '').replace(/^\/blog\//, '').trim().toLowerCase();

  // Try matching from fetchBlogs result first so local & Firestore blogs are seamlessly resolved
  try {
    const allBlogs = await fetchBlogs();
    const match = allBlogs.find(b => 
      (b.id && b.id.toLowerCase() === cleanId) || 
      (b.slug && b.slug.toLowerCase() === cleanId) || 
      generateSlug(b.title || '').toLowerCase() === cleanId
    );
    if (match) return match;
  } catch (err) {
    console.warn('fetchBlogById: Search in fetchBlogs failed, trying direct Firestore lookup:', err);
  }

  if (db) {
    try {
      const docRef = doc(db, 'blogs', cleanId);
      const docSnap = await withTimeout(getDoc(docRef), 3000, 'Firestore doc fetch timed out');
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          title: data.title || 'Untitled Article',
          excerpt: data.excerpt || 'Read full article for insights.',
          content: data.content || '',
          author: data.author || 'Admin',
          category: data.category || 'Insights',
          readTime: data.readTime || '5 min read',
          date: formatDate(data.createdAt || data.date),
          imageUrl: data.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
          slug: data.slug || generateSlug(data.title || docSnap.id)
        };
      }

      const blogsRef = collection(db, 'blogs');
      const q = query(blogsRef, where('slug', '==', cleanId));
      const querySnapshot = await withTimeout(getDocs(q), 3000, 'Firestore query timed out');
      if (!querySnapshot.empty) {
        const docFound = querySnapshot.docs[0];
        const data = docFound.data();
        return {
          id: docFound.id,
          ...data,
          title: data.title || 'Untitled Article',
          excerpt: data.excerpt || 'Read full article for insights.',
          content: data.content || '',
          author: data.author || 'Admin',
          category: data.category || 'Insights',
          readTime: data.readTime || '5 min read',
          date: formatDate(data.createdAt || data.date),
          imageUrl: data.imageUrl || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
          slug: data.slug || generateSlug(data.title || docFound.id)
        };
      }
    } catch (error) {
      console.error(`Error fetching blog ${cleanId} from Firestore:`, error);
    }
  }

  const mockMatch = mockBlogs.find(b => 
    b.id.toLowerCase() === cleanId || 
    b.slug.toLowerCase() === cleanId || 
    generateSlug(b.title).toLowerCase() === cleanId
  );
  if (mockMatch) return mockMatch;

  throw new Error(`Blog article not found for: ${idOrSlug}`);
};

const notifyBlogUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('magdio_blogs_updated'));
  }
};

// Create a new blog post
export const createBlogPost = async (blogData) => {
  const wordCount = blogData.content ? blogData.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));
  const postToSave = {
    ...blogData,
    readTime: blogData.readTime || `${readTimeMin} min read`,
    date: blogData.date || formatDate(new Date()),
  };

  let firestoreResult = null;
  let firestoreError = null;

  if (db) {
    try {
      const docRef = await withTimeout(
        addDoc(collection(db, 'blogs'), {
          ...postToSave,
          createdAt: serverTimestamp(),
        }),
        4000,
        'Firestore write operation timed out'
      );
      firestoreResult = { id: docRef.id, storage: 'firestore' };
    } catch (error) {
      console.warn('Error creating post in Firestore, falling back to Local Storage:', error);
      firestoreError = error.message || 'Firestore write timed out or access denied';
    }
  }

  // Local Storage Save (always cache locally for instant local availability)
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const localData = localStorage.getItem('magdio_local_blogs');
      const localBlogs = localData ? JSON.parse(localData) : [];
      
      const newBlog = {
        ...postToSave,
        id: firestoreResult ? firestoreResult.id : `local_${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      
      localBlogs.unshift(newBlog);
      localStorage.setItem('magdio_local_blogs', JSON.stringify(localBlogs));
      notifyBlogUpdate();

      if (firestoreResult) return firestoreResult;
      return { id: newBlog.id, storage: 'local', warning: firestoreError };
    } catch (err) {
      console.error('Error writing blog to Local Storage:', err);
      notifyBlogUpdate();
      if (firestoreResult) return firestoreResult;
      throw err;
    }
  }

  if (firestoreResult) return firestoreResult;
  return { id: `blog_${Date.now()}`, storage: 'build', warning: firestoreError };
};

// Update an existing blog post
export const updateBlogPost = async (id, blogData) => {
  const wordCount = blogData.content ? blogData.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));
  const postToSave = {
    ...blogData,
    readTime: blogData.readTime || `${readTimeMin} min read`,
  };

  if (db && !id.startsWith('local')) {
    try {
      const docRef = doc(db, 'blogs', id);
      await withTimeout(
        updateDoc(docRef, {
          ...postToSave,
          updatedAt: serverTimestamp()
        }),
        4000,
        'Firestore update timed out'
      );
    } catch (error) {
      console.warn('Error updating post in Firestore, falling back to Local Storage:', error);
    }
  }

  // Local Storage Update
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const localData = localStorage.getItem('magdio_local_blogs');
      const localBlogs = localData ? JSON.parse(localData) : [];
      
      const index = localBlogs.findIndex(b => b.id === id);
      if (index === -1) {
        localBlogs.push({
          ...postToSave,
          id,
          updatedAt: new Date().toISOString()
        });
      } else {
        localBlogs[index] = {
          ...localBlogs[index],
          ...postToSave,
          updatedAt: new Date().toISOString()
        };
      }
      
      localStorage.setItem('magdio_local_blogs', JSON.stringify(localBlogs));
      notifyBlogUpdate();
      return { success: true, storage: 'firestore' };
    } catch (err) {
      console.error('Error updating blog in Local Storage:', err);
      notifyBlogUpdate();
      throw err;
    }
  }
  return { success: true };
};

// Delete a blog post
export const deleteBlogPost = async (id) => {
  if (db && !id.startsWith('local') && !id.startsWith('mock')) {
    try {
      const docRef = doc(db, 'blogs', id);
      await withTimeout(deleteDoc(docRef), 3000, 'Firestore delete timed out');
    } catch (error) {
      console.warn('Error deleting post from Firestore, falling back to Local Storage:', error);
    }
  }

  // Also clean up from Local Storage if present
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const localData = localStorage.getItem('magdio_local_blogs');
      const localBlogs = localData ? JSON.parse(localData) : [];
      const filteredBlogs = localBlogs.filter(b => b.id !== id);
      localStorage.setItem('magdio_local_blogs', JSON.stringify(filteredBlogs));
      notifyBlogUpdate();
      return true;
    } catch (err) {
      console.error('Error deleting blog from Local Storage:', err);
      notifyBlogUpdate();
      throw err;
    }
  }
  return true;
};

// Sync any unsynced local storage blogs to Firestore
export const syncLocalBlogsToFirestore = async () => {
  if (!db) return { synced: 0, message: 'Database not connected.' };
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return { synced: 0, message: 'Not running in browser environment.' };
  }
  
  try {
    const localData = localStorage.getItem('magdio_local_blogs');
    if (!localData) return { synced: 0, message: 'No local blogs found in browser storage to sync.' };
    
    const localBlogs = JSON.parse(localData);
    if (!Array.isArray(localBlogs) || localBlogs.length === 0) {
      return { synced: 0, message: 'No local blogs found in browser storage to sync.' };
    }

    let syncedCount = 0;
    const remainingLocal = [];

    for (const blog of localBlogs) {
      try {
        const { id, date, ...cleanBlogData } = blog;
        await addDoc(collection(db, 'blogs'), {
          ...cleanBlogData,
          createdAt: serverTimestamp(),
          syncedFromLocalAt: new Date().toISOString()
        });
        syncedCount++;
      } catch (err) {
        console.error('Failed to sync local blog to Firestore:', blog.title, err);
        remainingLocal.push(blog);
      }
    }

    localStorage.setItem('magdio_local_blogs', JSON.stringify(remainingLocal));

    return {
      synced: syncedCount,
      message: `Successfully synced ${syncedCount} blog(s) to Firestore live database!`
    };
  } catch (error) {
    console.error('Sync failed:', error);
    throw error;
  }
};


// --- AUTHENTICATION FUNCTIONS ---

// Log in admin
export const loginAdmin = async (email, password) => {
  // Fallback Local Auth check (check first to bypass network delay)
  const fallbackEmail = 'growithmagdio@gmail.com';
  const fallbackPassword = 'magdio123';
  const normalizedEmail = (email || '').trim().toLowerCase();
  
  if (normalizedEmail === fallbackEmail && password === fallbackPassword) {
    const user = { email: 'growithmagdio@gmail.com', uid: 'local_admin' };
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('magdio_admin_logged', 'true');
    }
    return user;
  }

  if (auth) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Store flag in localStorage to maintain session info
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('magdio_admin_logged', 'true');
      }
      return userCredential.user;
    } catch (error) {
      console.error('Firebase authentication failed:', error);
      throw error;
    }
  }

  throw new Error('Invalid administrator credentials.');
};

// Log out admin
export const logoutAdmin = async () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.removeItem('magdio_admin_logged');
  }
  if (auth) {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Firebase signOut error:', error);
    }
  }
  return true;
};

// Check if currently authenticated
export const checkAdminAuth = (callback) => {
  // Check localStorage session flag
  const isLogged = typeof window !== 'undefined' && typeof localStorage !== 'undefined' && localStorage.getItem('magdio_admin_logged') === 'true';

  if (auth) {
    // Listen to Firebase Auth changes
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
          localStorage.setItem('magdio_admin_logged', 'true');
        }
        callback(user);
      } else {
        // If Firebase Auth returns null, check if local admin session flag is set before revoking access.
        const isStillLogged = typeof window !== 'undefined' && typeof localStorage !== 'undefined' && localStorage.getItem('magdio_admin_logged') === 'true';
        if (isStillLogged) {
          callback({ email: 'growithmagdio@gmail.com', uid: 'local_admin' });
        } else {
          callback(null);
        }
      }
    });
  } else {
    // If Firebase Auth instance is unavailable, resolve based on localStorage
    if (isLogged) {
      callback({ email: 'growithmagdio@gmail.com', uid: 'local_admin' });
    } else {
      callback(null);
    }
    return () => {};
  }
};
