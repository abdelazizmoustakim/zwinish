import "@/styles/globals.css";
import Layout from "../components/Layout/Layout";
import { AuthProvider } from "../context/AuthContext";
import ConnectionStatus from "../components/ConnectionStatus";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Default title for homepage */}
        <title>Zwinish - Beautiful Blogging Platform for Thoughtful Readers</title>
        
        {/* Default meta tags for homepage */}
        <meta name="description" content="Zwinish is a beautiful blogging platform where thoughtful readers discover engaging content. Read inspiring articles, lifestyle tips, and meaningful stories written for mature audiences who appreciate quality content." />
        <meta name="keywords" content="blog, blogging platform, mature readers, thoughtful content, lifestyle articles, beautiful design, quality writing, engaging stories, mature audience, meaningful content, zwinish" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Zwinish" />
        
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
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zwinish.com/" />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ConnectionStatus />
      </AuthProvider>
    </>
  );
}
