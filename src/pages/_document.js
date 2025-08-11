import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="Zwinish Blog RSS Feed" href="https://zwinish.com/feed.xml" />
        
        {/* Application Meta Tags */}
        <meta name="application-name" content="Zwinish" />
        <meta name="apple-mobile-web-app-title" content="Zwinish" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
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
              },
              "sameAs": [
                "https://zwinish.com/Posts",
                "https://zwinish.com/feed.xml"
              ]
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
