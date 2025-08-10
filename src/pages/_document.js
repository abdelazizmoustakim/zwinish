import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Zwinish - Beautiful Blogging Platform for Thoughtful Readers</title>
        <meta name="title" content="Zwinish - Beautiful Blogging Platform for Thoughtful Readers" />
        <meta name="description" content="Zwinish is a beautiful blogging platform where thoughtful readers discover engaging content. Read inspiring articles, lifestyle tips, and meaningful stories written for mature audiences who appreciate quality content." />
        <meta name="keywords" content="blog, blogging platform, mature readers, thoughtful content, lifestyle articles, beautiful design, quality writing, engaging stories, mature audience, meaningful content, zwinish" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Zwinish" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Application Meta Tags */}
        <meta name="application-name" content="Zwinish" />
        <meta name="apple-mobile-web-app-title" content="Zwinish" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zwinish.com/" />
        <meta property="og:title" content="Zwinish - Beautiful Blogging Platform for Thoughtful Readers" />
        <meta property="og:description" content="Zwinish is a beautiful blogging platform where thoughtful readers discover engaging content. Read inspiring articles, lifestyle tips, and meaningful stories written for mature audiences who appreciate quality content." />
        <meta property="og:image" content="https://zwinish.com/og-image.png" />
        <meta property="og:site_name" content="Zwinish" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zwinish.com/" />
        <meta property="twitter:title" content="Zwinish - Beautiful Blogging Platform for Thoughtful Readers" />
        <meta property="twitter:description" content="Zwinish is a beautiful blogging platform where thoughtful readers discover engaging content. Read inspiring articles, lifestyle tips, and meaningful stories written for mature audiences who appreciate quality content." />
        <meta property="twitter:image" content="https://zwinish.com/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zwinish.com/" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Zwinish",
              "url": "https://zwinish.com/",
              "description": "Zwinish is a beautiful blogging platform where thoughtful readers discover engaging content. Read inspiring articles, lifestyle tips, and meaningful stories written for mature audiences who appreciate quality content.",
              "publisher": {
                "@type": "Organization",
                "name": "Zwinish",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://zwinish.com/favicon.png"
                }
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Mature readers and thoughtful content consumers"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://zwinish.com/Posts?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
