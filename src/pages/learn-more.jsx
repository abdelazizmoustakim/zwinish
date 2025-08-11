import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function LearnMorePage() {
  return (
    <>
      <Head>
        {/* Page-specific meta tags for Learn More page */}
        <title>Learn More About Zwinish - Beautiful Blogging Platform for Thoughtful Readers</title>
        <meta name="description" content="Learn about Zwinish, a beautiful blogging platform designed for thoughtful readers who appreciate quality content. Discover our mission, features, and why mature readers choose Zwinish." />
        <meta name="keywords" content="about zwinish, blogging platform, thoughtful readers, mature audience, quality content, beautiful design, learn more, zwinish features" />
        
        {/* Open Graph for Learn More page */}
        <meta property="og:title" content="Learn More About Zwinish - Beautiful Blogging Platform" />
        <meta property="og:description" content="Learn about Zwinish, a beautiful blogging platform designed for thoughtful readers who appreciate quality content." />
        <meta property="og:url" content="https://zwinish.com/learn-more" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zwinish.com/og-image.png" />
        
        {/* Twitter Cards for Learn More page */}
        <meta name="twitter:title" content="Learn More About Zwinish" />
        <meta name="twitter:description" content="Discover why thoughtful readers choose Zwinish for quality content." />
        <meta name="twitter:image" content="https://zwinish.com/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zwinish.com/learn-more" />
      </Head>

      <section className="dark:bg-white">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-gray-500">
            Learn More
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            About Zwinish
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32">
            
            <details open>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-lg font-semibold">
                What is Zwinish?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Zwinish is a modern blogging platform created especially for 
                  those who still appreciate the charm of a well-written article. 
                  We focus on high-quality, meaningful content that speaks to 
                  experience, wisdom, and life's timeless lessons — perfect for 
                  those who value depth over speed.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-lg font-semibold">
                Who is it for?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Our primary audience is older readers who love storytelling, 
                  nostalgia, and knowledge worth keeping. Whether it's a memory 
                  from decades past, a reflection on today's world, or practical 
                  advice for everyday living, Zwinish delivers articles that 
                  connect across generations.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-lg font-semibold">
                What else do we offer?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Beyond our main blog, we also offer curated recommendations, 
                  community highlights, and special services such as content 
                  creation for organizations looking to reach a mature audience. 
                </p>
                <p>
                  Think of Zwinish not just as a reading platform, but as a hub 
                  where wisdom meets modern design — built for accessibility, 
                  readability, and connection.
                </p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </>
  );
}
