import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { motion } from 'framer-motion';
import Head from 'next/head';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.name || '');
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState('');

  // Generate random positions for stars
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 2
  }));

  const starVariants = {
    animate: (custom) => ({
      y: [0, -15, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeInOut"
      }
    })
  };

  const handleUpdateName = async () => {
    if (!newName.trim()) {
      setMessage('Name cannot be empty');
      return;
    }

    setIsUpdating(true);
    setMessage('');

    try {
      await updateProfile(auth.currentUser, {
        displayName: newName.trim()
      });
      
      // Force refresh the auth state to update the context
      await auth.currentUser.reload();
      
      setMessage('Name updated successfully!');
      setIsEditing(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      setMessage('Failed to update name. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    setNewName(user?.name || '');
    setIsEditing(false);
    setMessage('');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Please sign in to view your profile</h1>
          <p className="text-gray-600">You need to be logged in to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Profile - Zwinish</title>
        <meta name="description" content="Manage your Zwinish profile and account settings" />
        <meta name="keywords" content="profile, account, settings, Zwinish" />
        <meta property="og:title" content="Profile - Zwinish" />
        <meta property="og:description" content="Manage your Zwinish profile and account settings" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zwinish.com/profile" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Profile - Zwinish" />
        <meta name="twitter:description" content="Manage your Zwinish profile and account settings" />
        <link rel="canonical" href="https://zwinish.com/profile" />
      </Head>

      <div className="relative overflow-hidden min-h-screen bg-white">
        {/* Floating Stars Background */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-black rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              custom={star}
              variants={starVariants}
              animate="animate"
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto"
          >
            {/* Profile Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                                     <span className="text-2xl font-bold text-white">
                     {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                   </span>
                </motion.div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Profile</h1>
                <p className="text-gray-600">Manage your account information</p>
              </div>

              {/* Profile Information */}
              <div className="space-y-6">
                {/* Name Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                        placeholder="Enter your full name"
                        disabled={isUpdating}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleUpdateName}
                          disabled={isUpdating}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isUpdating ? 'Updating...' : 'Save'}
                        </button>
                        <button
                          onClick={handleCancel}
                          disabled={isUpdating}
                          className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                                               <p className="text-gray-900 font-medium">
                         {user.name || 'No name set'}
                       </p>
                      </div>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="ml-4 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>

                {/* Email Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <p className="text-gray-900 font-medium">
                    {user.email}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Email cannot be changed
                  </p>
                </div>

                {/* Message Display */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg text-sm ${
                      message.includes('successfully') 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {message}
                  </motion.div>
                )}

                {/* Account Info */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Account Information</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Account created:</span>
                      <span>{user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'Unknown'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last sign in:</span>
                      <span>{user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'Unknown'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
