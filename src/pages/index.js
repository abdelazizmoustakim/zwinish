import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import client from "../../lib/contentful/client";

const Homepage = ({ featuredPosts }) => {
  const [isClient, setIsClient] = useState(false);
  
  // Ensure client-side only rendering to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use deterministic star positions to prevent hydration mismatch
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 80; i++) {
      // Use a deterministic seed based on index
      const seed = i * 12345;
      const x = ((seed * 9301 + 49297) % 100);
      const y = ((seed * 49297 + 9301) % 100);
      const size = ((seed * 12345) % 4) + 2;
      const delay = ((seed * 67890) % 3);
      const duration = ((seed * 13579) % 4) + 2;
      
      stars.push({
        id: i,
        x: x,
        y: y,
        size: size,
        delay: delay,
        duration: duration
      });
    }
    return stars;
  };

  const stars = generateStars();

  const starVariants = {
    animate: (custom) => ({
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.3, 1],
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
        <title>Zwinish - Beautiful Blogging Platform for Thoughtful Readers</title>
        <meta name="description" content="Discover thoughtful articles, lifestyle tips, and meaningful stories on Zwinish. A beautiful blogging platform designed for mature readers who appreciate quality content and engaging narratives." />
        <meta name="keywords" content="blog, thoughtful articles, lifestyle content, mature readers, quality writing, engaging stories, zwinish, meaningful content, beautiful design" />
        
        <meta property="og:title" content="Zwinish - Beautiful Blogging Platform for Thoughtful Readers" />
        <meta property="og:description" content="Discover thoughtful articles, lifestyle tips, and meaningful stories on Zwinish. A beautiful blogging platform designed for mature readers who appreciate quality content." />
        <meta property="og:url" content="https://zwinish.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zwinish.com/og-image.png" />
        
        <meta name="twitter:title" content="Zwinish - Beautiful Blogging Platform" />
        <meta name="twitter:description" content="Discover thoughtful articles and meaningful stories on Zwinish." />
        <meta name="twitter:image" content="https://zwinish.com/og-image.png" />
        
        <link rel="canonical" href="https://zwinish.com/" />
      </Head>
      
      <div className="relative overflow-hidden min-h-screen">
        {/* Stars animation - only render on client side */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none z-0">
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
        )}

        <section className="bg-white text-gray-900 relative z-10">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center sm:py-24 sm:px-8 lg:px-20 xl:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              The Blog You Were Looking For. <br className="hidden sm:block" />
              <span className="text-blue-600">Zwinish Delivers.</span>
            </h1>
              <div className="flex flex-col sm:flex-row justify-center mt-8 gap-3">
                <Link href="/Posts" className="px-6 py-3 text-sm sm:text-base font-semibold rounded bg-gray-600 text-white hover:bg-gray-700 transition duration-300">
                  Start reading
                </Link>
                <Link href="/learn-more" className="px-6 py-3 cursor-pointer text-sm sm:text-base font-semibold rounded border border-gray-300 text-gray-800 hover:bg-gray-100 transition duration-300">
                  Learn More
                </Link>
              </div>
          </div>
        </section>

        {/* Spacing Section with Stars Background */}
                   {/* annimation for only client side  fyi inside the div*/}
        <div className="relative min-h-screen">
            {isClient && (
              <div className="absolute inset-0 pointer-events-none z-0">
                {stars.map((star) => (
                  <motion.div
                    key={`spacing-${star.id}`}
                    className="absolute bg-black rounded-full"
                    style={{
                      left: `${star.x}%`,
                      top: `${star.y}%`,
                      width: `${Math.max(1, star.size * 0.6)}px`,
                      height: `${Math.max(1, star.size * 0.4)}px`,
                    }}
                    custom={star}
                    variants={starVariants}
                    animate="animate"
                  />
                ))}
              </div>
            )}
        </div>

        {/* Featured Blogs Section */}
        {featuredPosts && featuredPosts.length > 0 && (
          <section className="bg-white/95 backdrop-blur-sm text-gray-900 relative z-10 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-8 lg:px-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Featured Articles
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover our most thoughtful and engaging content, carefully curated for readers who appreciate quality writing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                {featuredPosts.map((post, index) => {
                  const { title, subtitle, date, picture, slug } = post.fields;
                  const imageUrl = picture?.fields?.file?.url
                    ? `https:${picture.fields.file.url}`
                    : null;
                  const formattedDate = date
                    ? new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : 'No date';

                  return (
                    <motion.div
                      key={post.sys.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="group"
                    >
                      <Link
                        href={`/Posts/${slug}`}
                        className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
                      >
                        <div className="relative h-48 overflow-hidden">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={picture?.fields?.title || title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                              <span className="text-4xl text-gray-400">📄</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <time className="text-sm text-gray-500 font-medium">
                            {formattedDate}
                          </time>
                          <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {title}
                          </h3>
                          {subtitle && (
                            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                              {subtitle}
                            </p>
                          )}
                          <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                            Read more
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-12"
              >
                <Link
                  href="/Posts"
                  className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                >
                  View All Articles
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    // Fetch featured posts from Contentful
    const res = await client.getEntries({
      content_type: 'zwinish',
      limit: 6, // Show 6 featured posts
      order: '-sys.createdAt', // Most recent first
    });

    return {
      props: {
        featuredPosts: res.items || [],
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return {
      props: {
        featuredPosts: [],
      },
      revalidate: 3600,
    };
  }
}

export default Homepage;