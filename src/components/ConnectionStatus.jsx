import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [lastCheck, setLastCheck] = useState(Date.now());
  const [connectionDetails, setConnectionDetails] = useState(null);

  useEffect(() => {
    const checkNetworkConnection = async () => {
      try {
        // Simple network connectivity check
        const connected = navigator.onLine;
        setIsOnline(connected);
        setShowStatus(!connected);

        if (!connected) {
          setConnectionDetails({
            success: false,
            message: 'No internet connection detected',
            userSignedIn: false
          });
          
          // Hide the status after 15 seconds
          setTimeout(() => setShowStatus(false), 15000);
        } else {
          setConnectionDetails(null);
        }
      } catch (error) {
        console.warn('Connection check failed:', error);
        setIsOnline(false);
        setShowStatus(true);
        
        setConnectionDetails({
          success: false,
          message: 'Connection check failed',
          userSignedIn: false
        });
        
        setTimeout(() => setShowStatus(false), 15000);
      }
      setLastCheck(Date.now());
    };

    // Check connection on mount
    checkNetworkConnection();

    // Check connection every 30 seconds
    const interval = setInterval(checkNetworkConnection, 30000);

    // Listen for online/offline events
    const handleOnline = () => {
      setIsOnline(true);
      setShowStatus(false);
      setConnectionDetails(null);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowStatus(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showStatus) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-4 right-4 z-50 max-w-sm"
      >
        <div className={`px-4 py-3 rounded-lg shadow-lg border-l-4 ${
          isOnline
            ? 'bg-green-50 border-green-400 text-green-800'
            : 'bg-yellow-50 border-yellow-400 text-yellow-800'
        }`}>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              isOnline ? 'bg-green-400' : 'bg-yellow-400'
            }`} />
            <span className="text-sm font-medium">
              {isOnline ? 'Connection restored' : 'Connection issues detected'}
            </span>
            <button
              onClick={() => setShowStatus(false)}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          
          {!isOnline && (
            <div className="mt-2">
              <p className="text-xs opacity-75 mb-2">
                Some features may be limited. Bookmarks will sync when connection is restored.
              </p>
              
              {connectionDetails && (
                <details className="text-xs">
                  <summary className="cursor-pointer font-medium mb-1">
                    Connection Details
                  </summary>
                  <div className="bg-white bg-opacity-50 p-2 rounded text-xs">
                    <p><strong>Status:</strong> {connectionDetails.success ? '✅ Success' : '❌ Failed'}</p>
                    <p><strong>Message:</strong> {connectionDetails.message}</p>
                    {connectionDetails.userSignedIn !== undefined && (
                      <p><strong>User:</strong> {connectionDetails.userSignedIn ? 'Signed in' : 'Not signed in'}</p>
                    )}
                    {connectionDetails.error && (
                      <p><strong>Error:</strong> {connectionDetails.error.message}</p>
                    )}
                  </div>
                </details>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConnectionStatus;
