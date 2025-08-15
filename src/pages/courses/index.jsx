import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const CoursesPage = () => {
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

  return (
    <>
      <Head>
        <title>Courses - Zwinish - Beautiful Blogging Platform for Thoughtful Readers</title>
        <meta name="description" content="Discover comprehensive courses and learning resources on Zwinish. Expand your knowledge with thoughtfully curated educational content designed for mature learners who appreciate quality instruction." />
        <meta name="keywords" content="courses, learning, education, online courses, mature learners, quality instruction, zwinish, educational content, skill development" />
        <link rel="canonical" href="https://zwinish.com/courses" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Courses - Zwinish - Beautiful Blogging Platform" />
        <meta property="og:description" content="Discover comprehensive courses and learning resources on Zwinish. Expand your knowledge with thoughtfully curated educational content." />
        <meta property="og:image" content="https://zwinish.com/og-image.png" />
        <meta property="og:url" content="https://zwinish.com/courses" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zwinish" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courses - Zwinish" />
        <meta name="twitter:description" content="Discover comprehensive courses and learning resources on Zwinish." />
        <meta name="twitter:image" content="https://zwinish.com/og-image.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Courses - Zwinish",
              "description": "Discover comprehensive courses and learning resources on Zwinish",
              "url": "https://zwinish.com/courses",
              "publisher": {
                "@type": "Organization",
                "name": "Zwinish",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://zwinish.com/logo.png"
                }
              }
            })
          }}
        />
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
        <div className="relative z-10 min-h-screen px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
              >
                Courses
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
              >
                Expand your knowledge with thoughtfully curated educational content designed for mature learners who appreciate quality instruction.
              </motion.p>
            </div>

            {/* Coming Soon Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 md:p-16 text-center"
            >
              <div className="max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Coming Soon
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  We're working hard to bring you comprehensive courses that will help you grow and learn. Our team is carefully crafting educational content that matches the quality and thoughtfulness of our blog posts.
                </p>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What to Expect
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Expert-Led Content</h4>
                        <p className="text-sm text-gray-600">Learn from industry professionals and thought leaders</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Interactive Learning</h4>
                        <p className="text-sm text-gray-600">Engage with hands-on exercises and real-world projects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Flexible Schedule</h4>
                        <p className="text-sm text-gray-600">Learn at your own pace with lifetime access</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Community Support</h4>
                        <p className="text-sm text-gray-600">Connect with fellow learners and share insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stay Updated Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Be the first to know when our courses are ready. We'll notify you about new course launches and exclusive early access opportunities.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium">
                    Notify Me
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
