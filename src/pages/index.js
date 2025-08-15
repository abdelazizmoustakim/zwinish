import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Homepage = () => {
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
      </div>
    </>
  );
};
export default Homepage;