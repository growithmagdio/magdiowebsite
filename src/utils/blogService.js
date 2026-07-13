import { db, auth, storage } from '../firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
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

// --- IMAGE UPLOAD FUNCTION ---
export const uploadImageFile = async (file) => {
  if (storage) {
    try {
      const uniqueName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const storageRef = ref(storage, `blog-images/${uniqueName}`);
      
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image to Firebase Storage:', error);
      throw error;
    }
  }

  // Local fallback (Base64 encoding)
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => {
      console.error('Error reading local file:', error);
      reject(error);
    };
  });
};


// Standard fallback mock blogs
export const mockBlogs = [
  {
    id: 'mock1',
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'Discover how artificial intelligence is reshaping the landscape of digital marketing and what it means for your brand.',
    content: 'Artificial intelligence is no longer a futuristic concept—it is actively reshaping how businesses interact with consumers, analyze data, and optimize campaigns. From machine learning algorithms that predict user behavior to generative AI tools that streamline content creation, digital marketing has entered a new era of efficiency and hyper-personalization.\n\n### Hyper-Personalization at Scale\nOne of the most powerful applications of AI is its ability to analyze massive datasets in real-time. Marketers can now understand individual user preferences, browsing history, and purchase patterns to deliver tailored content, product recommendations, and emails. This level of personalization increases engagement and conversion rates dramatically.\n\n### Predictive Analytics\nAI algorithms can identify trends and forecast future outcomes based on historical data. By analyzing customer actions, predictive AI helps businesses anticipate what products will be in demand, optimize pricing strategies, and identify which leads are most likely to convert. This takes the guesswork out of budgeting and campaign planning.\n\n### Automating Customer Experience\nAI-powered chatbots and conversational assistants have evolved beyond simple scripted replies. Today, using natural language processing (NLP), they provide instant, round-the-clock support, answering complex customer queries and guiding prospects through the sales funnel without human intervention.\n\n### Key Takeaways for Brands\n1. **Embrace Generative AI:** Use tools to brainstorm copy and create visual concepts, but always keep human oversight for brand voice consistency.\n2. **Clean Your Data:** AI is only as good as the data it trains on. Ensure your customer databases are organized and up-to-date.\n3. **Test and Iterate:** Implement small AI-driven tests, such as automated email subject line optimization, before scaling to larger automated workflows.',
    author: 'Admin',
    category: 'Technology',
    readTime: '5 min read',
    date: 'Oct 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mock2',
    title: 'Design Trends to Watch in 2027',
    excerpt: 'From glassmorphism to dark mode, explore the UI/UX design trends that are dominating the web right now.',
    content: 'As we head toward 2027, web and mobile interface designs are shifting focus toward immersive, tactile, and highly responsive user experiences. Modern UI/UX is moving away from flat, static layouts in favor of depth, physics-based animations, and customized dark modes.\n\n### 1. Advanced Glassmorphism and Depth\nGlassmorphism—utilizing frosted-glass effects with soft shadows and multi-layered backgrounds—remains a dominant visual style. When coupled with dynamic gradient backgrounds, it gives interfaces a premium, high-tech feel. Designing elements that appear to float on top of blurred light sources creates a visual hierarchy that guides the eye naturally.\n\n### 2. Micro-Interactions & Physical Animations\nAn interface that responds to user input with subtle, physics-based micro-interactions feels alive and encouraging. Buttons that compress slightly, cards that rotate based on cursor position (pointer-tracking glow), and scroll-triggered animations make user exploration rewarding. These details elevate standard designs to feel premium.\n\n### 3. Dark Mode First Aesthetics\nWith OLED screens dominating the mobile market, dark-themed interfaces are no longer just an alternative toggle—they are the default starting point for creative and tech-focused brands. A rich dark mode uses dark blues, deep purples, and carbon tones instead of pure black, allowing neon accents and glowing gradients to pop dramatically without causing eye strain.',
    author: 'Designer',
    category: 'Design',
    readTime: '4 min read',
    date: 'Oct 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mock3',
    title: 'Why Your Business Needs a Custom Web App',
    excerpt: 'Off-the-shelf solutions can only take you so far. Learn why investing in a custom web application is crucial for scaling.',
    content: 'In the early stages of a business, off-the-shelf software or templates might suffice. However, as your operations grow and your customer needs become more specific, generic solutions can hinder growth. Custom web applications tailored specifically to your workflows offer scalability, unique features, and a competitive edge.\n\n### Seamless Integration with Existing Workflows\nUnlike packaged software, a custom app is built to fit *your* business, not the other way around. It can integrate directly with your CRM, inventory database, and marketing software, eliminating manual data entry and reducing operational overhead.\n\n### Scalability and Flexbility\nWhen your user base grows, templates and third-party builders often struggle with performance or demand expensive plan upgrades. Custom code gives you full control over optimization, caching, and hosting architecture. It allows your software to evolve concurrently with your business objectives.\n\n### Enhanced Security\nCustom applications are less vulnerable to mass exploits since their codebases are proprietary. Off-the-shelf plugins and template engines are public and frequently targeted by automated scanners. Building custom endpoints with Firebase or robust API structures ensures your data remains protected.',
    author: 'Developer',
    category: 'Development',
    readTime: '6 min read',
    date: 'Oct 15, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

// Helper to format date
const formatDate = (dateObj) => {
  if (!dateObj) return 'Unknown Date';
  // If it's a Firestore Timestamp
  if (dateObj.toDate && typeof dateObj.toDate === 'function') {
    return dateObj.toDate().toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  }
  // If it's a string or date object
  return new Date(dateObj).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
};

// --- BLOG DATA FUNCTIONS ---

// Fetch all blogs (combined Firebase and localStorage fallbacks)
export const fetchBlogs = async () => {
  if (db) {
    try {
      const blogsRef = collection(db, 'blogs');
      const q = query(blogsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const fetchedBlogs = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: formatDate(data.createdAt)
        };
      });

      if (fetchedBlogs.length > 0) {
        return fetchedBlogs;
      }
    } catch (error) {
      console.error('Error fetching blogs from Firestore:', error);
    }
  }

  // Fallback Mode (LocalStorage + Mock Data)
  try {
    const localData = localStorage.getItem('magdio_local_blogs');
    const localBlogs = localData ? JSON.parse(localData) : [];
    
    // Format creation dates for local blogs
    const formattedLocal = localBlogs.map(blog => ({
      ...blog,
      date: formatDate(blog.createdAt || blog.date)
    }));

    // Merge and sort by createdAt desc (newest first)
    const combined = [...formattedLocal, ...mockBlogs];
    combined.sort((a, b) => {
      const dateA = new Date(a.createdAt || a.date);
      const dateB = new Date(b.createdAt || b.date);
      return dateB - dateA;
    });

    return combined;
  } catch (err) {
    console.error('Local Storage read error:', err);
    return mockBlogs;
  }
};

// Fetch single blog post by ID
export const fetchBlogById = async (id) => {
  // If it's a mock blog, get from mock array directly
  if (id.startsWith('mock')) {
    const blog = mockBlogs.find(b => b.id === id);
    if (blog) return blog;
  }

  if (db) {
    try {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          date: formatDate(data.createdAt)
        };
      }
    } catch (error) {
      console.error(`Error fetching blog ${id} from Firestore:`, error);
    }
  }

  // Local fallback search
  try {
    const localData = localStorage.getItem('magdio_local_blogs');
    const localBlogs = localData ? JSON.parse(localData) : [];
    const blog = localBlogs.find(b => b.id === id);
    if (blog) {
      return {
        ...blog,
        date: formatDate(blog.createdAt || blog.date)
      };
    }
  } catch (err) {
    console.error('Local Storage read error:', err);
  }

  throw new Error(`Blog article not found for ID: ${id}`);
};

// Create a new blog post
export const createBlogPost = async (blogData) => {
  // Add auto-calculated read time if not provided
  const wordCount = blogData.content.split(/\s+/).length;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));
  const postToSave = {
    ...blogData,
    readTime: blogData.readTime || `${readTimeMin} min read`,
  };

  if (db) {
    try {
      const docRef = await addDoc(collection(db, 'blogs'), {
        ...postToSave,
        createdAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating post in Firestore:', error);
      throw error;
    }
  }

  // Local Storage Save
  try {
    const localData = localStorage.getItem('magdio_local_blogs');
    const localBlogs = localData ? JSON.parse(localData) : [];
    
    const newBlog = {
      ...postToSave,
      id: `local_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    
    localBlogs.push(newBlog);
    localStorage.setItem('magdio_local_blogs', JSON.stringify(localBlogs));
    return newBlog.id;
  } catch (err) {
    console.error('Error writing blog to Local Storage:', err);
    throw err;
  }
};

// Update an existing blog post
export const updateBlogPost = async (id, blogData) => {
  const wordCount = blogData.content.split(/\s+/).length;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));
  const postToSave = {
    ...blogData,
    readTime: blogData.readTime || `${readTimeMin} min read`,
  };

  if (db && !id.startsWith('local')) {
    try {
      const docRef = doc(db, 'blogs', id);
      await updateDoc(docRef, {
        ...postToSave,
        updatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error('Error updating post in Firestore:', error);
      throw error;
    }
  }

  // Local Storage Update
  try {
    const localData = localStorage.getItem('magdio_local_blogs');
    const localBlogs = localData ? JSON.parse(localData) : [];
    
    const index = localBlogs.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error(`Local blog not found for ID: ${id}`);
    }
    
    localBlogs[index] = {
      ...localBlogs[index],
      ...postToSave,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('magdio_local_blogs', JSON.stringify(localBlogs));
    return true;
  } catch (err) {
    console.error('Error updating blog in Local Storage:', err);
    throw err;
  }
};

// Delete a blog post
export const deleteBlogPost = async (id) => {
  if (db && !id.startsWith('local') && !id.startsWith('mock')) {
    try {
      const docRef = doc(db, 'blogs', id);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error('Error deleting post in Firestore:', error);
      throw error;
    }
  }

  // Local Storage Delete
  try {
    const localData = localStorage.getItem('magdio_local_blogs');
    const localBlogs = localData ? JSON.parse(localData) : [];
    
    const filteredBlogs = localBlogs.filter(b => b.id !== id);
    localStorage.setItem('magdio_local_blogs', JSON.stringify(filteredBlogs));
    return true;
  } catch (err) {
    console.error('Error deleting blog from Local Storage:', err);
    throw err;
  }
};


// --- AUTHENTICATION FUNCTIONS ---

// Log in admin
export const loginAdmin = async (email, password) => {
  if (auth) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Store flag in localStorage to maintain session info
      localStorage.setItem('magdio_admin_logged', 'true');
      return userCredential.user;
    } catch (error) {
      console.error('Firebase authentication failed:', error);
      throw error;
    }
  }

  // Fallback Local Auth check
  const fallbackEmail = 'growithmagdio@gmail.com';
  const fallbackPassword = 'magdio123';
  
  const normalizedEmail = (email || '').trim().toLowerCase();
  
  if (normalizedEmail === fallbackEmail && password === fallbackPassword) {
    const user = { email: 'growithmagdio@gmail.com', uid: 'local_admin' };
    localStorage.setItem('magdio_admin_logged', 'true');
    return user;
  } else {
    throw new Error('Invalid administrator credentials.');
  }
};

// Log out admin
export const logoutAdmin = async () => {
  localStorage.removeItem('magdio_admin_logged');
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
  // First check localStorage
  const isLogged = localStorage.getItem('magdio_admin_logged') === 'true';

  if (auth) {
    // If firebase auth is active, listen to state changes
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('magdio_admin_logged', 'true');
        callback(user);
      } else {
        localStorage.removeItem('magdio_admin_logged');
        callback(null);
      }
    });
  } else {
    // If fallback, resolve based on localStorage state
    if (isLogged) {
      callback({ email: 'growithmagdio@gmail.com', uid: 'local_admin' });
    } else {
      callback(null);
    }
    // Return unsubscribe empty fn
    return () => {};
  }
};
