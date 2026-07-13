import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkoZ8rKY9MDDqXmgxLFXrv6_LFrELvBwY",
  authDomain: "magdio-blog.firebaseapp.com",
  projectId: "magdio-blog",
  storageBucket: "magdio-blog.firebasestorage.app",
  messagingSenderId: "271550466197",
  appId: "1:271550466197:web:da103f06ec2fe99b19339c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = 'growithmagdio@gmail.com';
const password = 'magdio123';

console.log(`Attempting to create admin user: ${email}...`);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('SUCCESS: Admin user successfully created in your Firebase project!');
    console.log('Email:', userCredential.user.email);
    console.log('UID:', userCredential.user.uid);
    process.exit(0);
  })
  .catch((error) => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('SUCCESS: This admin user already exists in your Firebase project.');
      process.exit(0);
    } else if (error.code === 'auth/operation-not-allowed') {
      console.error('ERROR: Email/Password sign-in method is NOT enabled in your Firebase console. Please go to console.firebase.google.com -> Authentication -> Sign-in Method, and enable Email/Password.');
    } else {
      console.error('ERROR: Failed to create user:', error.code, error.message);
    }
    process.exit(1);
  });
