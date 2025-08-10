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
        
        {/* Meta tags for Zwinish */}
        <meta name="application-name" content="Zwinish" />
        <meta name="apple-mobile-web-app-title" content="Zwinish" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zwinish" />
        <meta property="og:description" content="Discover amazing content and connect with creators on Zwinish" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Zwinish" />
        <meta property="twitter:description" content="Discover amazing content and connect with creators on Zwinish" />
        <meta property="twitter:image" content="/og-image.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
