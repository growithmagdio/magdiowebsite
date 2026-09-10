// Firebase configuration
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Helper to clean environment variable values (removes quotes and trims)
const cleanEnvValue = (val) => {
  if (!val) return "";
  let clean = val.trim();
  // Strip wrapping double quotes
  if (clean.startsWith('"') && clean.endsWith('"')) {
    clean = clean.slice(1, -1).trim();
  }
  // Strip wrapping single quotes
  if (clean.startsWith("'") && clean.endsWith("'")) {
    clean = clean.slice(1, -1).trim();
  }
  return clean;
};

const firebaseConfig = {
  apiKey: cleanEnvValue(import.meta.env.VITE_FIREBASE_API_KEY) || "AIzaSyCkoZ8rKY9MDDqXmgxLFXrv6_LFrELvBwY",
  authDomain: cleanEnvValue(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN) || "magdio-blog.firebaseapp.com",
  projectId: cleanEnvValue(import.meta.env.VITE_FIREBASE_PROJECT_ID) || "magdio-blog",
  storageBucket: cleanEnvValue(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET) || "magdio-blog.firebasestorage.app",
  messagingSenderId: cleanEnvValue(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID) || "271550466197",
  appId: cleanEnvValue(import.meta.env.VITE_FIREBASE_APP_ID) || "1:271550466197:web:da103f06ec2fe99b19339c",
};

// A valid Firebase config must have a non-empty apiKey and projectId (and not just empty quotes)
const isConfigValid = firebaseConfig.apiKey && 
                      firebaseConfig.projectId && 
                      firebaseConfig.apiKey !== "" && 
                      firebaseConfig.projectId !== "";

let app = null;
let db = null;
let auth = null;
let storage = null;

if (isConfigValid) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase credentials are empty or invalid. Running in mock-data / offline fallback mode.");
}

export { db, auth, storage };
export default app;



