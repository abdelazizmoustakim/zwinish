import "@/styles/globals.css";
import Layout from "../components/Layout/Layout";
import { AuthProvider } from "../context/AuthContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zwinish - Beautiful Blogging Platform for Thoughtful Readers</title>
        <meta name="description" content="Zwinish is a beautiful blogging platform where thoughtful readers discover engaging content. Read inspiring articles, lifestyle tips, and meaningful stories written for mature audiences who appreciate quality content." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog, blogging platform, mature readers, thoughtful content, lifestyle articles, beautiful design, quality writing, engaging stories, mature audience, meaningful content, zwinish" />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}
