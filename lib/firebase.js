import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, initializeFirestore, enableNetwork, disableNetwork } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Validate Firebase config
const validateConfig = () => {
  const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
  const missingFields = requiredFields.filter(field => !firebaseConfig[field]);
  
  if (missingFields.length > 0) {
    console.error('Missing Firebase configuration fields:', missingFields);
    return false;
  }
  
  return true;
};

if (!validateConfig()) {
  console.error('Firebase configuration is incomplete. Please check your environment variables.');
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(app)

// Enhanced Firestore configuration for better connection handling
let dbInstance
try {
  dbInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
    useFetchStreams: false,
    ignoreUndefinedProperties: true,
    timeoutSeconds: 60, // Increased timeout
    cacheSizeBytes: 50 * 1024 * 1024, // 50MB cache
    // Force offline persistence
    synchronizeTabs: true,
  })
} catch (err) {
  // Already initialized in a previous HMR cycle; fall back to getter
  console.warn('Firestore already initialized, using existing instance:', err.message);
  dbInstance = getFirestore(app)
}

export const db = dbInstance

// Connection management utilities
export const checkConnection = async () => {
  try {
    await enableNetwork(db)
    return true
  } catch (error) {
    console.warn('Failed to enable network:', error)
    return false
  }
}

export const disableConnection = async () => {
  try {
    await disableNetwork(db)
  } catch (error) {
    console.warn('Failed to disable network:', error)
  }
}

// Enhanced error handling for network issues
export const handleFirestoreError = (error) => {
  const errorCode = error.code || error.message
  const errorMessage = error.message || 'Unknown error'
  
  console.error('Firestore error details:', {
    code: errorCode,
    message: errorMessage,
    fullError: error
  });
  
  // Network-related errors
  if (errorCode.includes('unavailable') || 
      errorCode.includes('deadline-exceeded') ||
      errorCode.includes('resource-exhausted') ||
      errorCode.includes('failed-precondition') ||
      errorCode.includes('aborted') ||
      errorCode.includes('out-of-range') ||
      errorCode.includes('unimplemented') ||
      errorCode.includes('internal') ||
      errorCode.includes('data-loss') ||
      errorCode.includes('unauthenticated') ||
      errorCode.includes('permission-denied')) {
    
    console.warn('Firestore network error detected:', errorCode)
    return {
      isNetworkError: true,
      shouldRetry: true,
      message: 'Network connection issue. Please check your internet connection.'
    }
  }
  
  // 400 Bad Request errors - often indicate permission issues
  if (errorCode.includes('400') || errorMessage.includes('400')) {
    console.error('Firebase 400 error detected - this may indicate permission issues with Firestore security rules');
    return {
      isNetworkError: false,
      shouldRetry: false,
      message: 'Permission denied. Please check your Firebase security rules.'
    }
  }
  
  return {
    isNetworkError: false,
    shouldRetry: false,
    message: errorMessage || 'An unexpected error occurred'
  }
}

// Test Firebase connection and permissions
export const testFirebaseConnection = async () => {
  try {
    console.log('Testing Firebase connection...');
    console.log('Firebase config:', {
      projectId: firebaseConfig.projectId,
      authDomain: firebaseConfig.authDomain,
      hasApiKey: !!firebaseConfig.apiKey
    });
    
    // Test basic connection
    await enableNetwork(db);
    console.log('✅ Firebase network enabled successfully');
    
    // Test authentication
    const currentUser = auth.currentUser;
    console.log('Current user:', currentUser ? currentUser.uid : 'No user signed in');
    
    return {
      success: true,
      message: 'Firebase connection test successful',
      userSignedIn: !!currentUser
    };
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
    return {
      success: false,
      message: error.message,
      error: error
    };
  }
};


