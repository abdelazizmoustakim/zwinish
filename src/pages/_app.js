import "@/styles/globals.css";
import Layout from "../components/Layout/Layout";
import { AuthProvider } from "../context/AuthContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zwinish - Discover Amazing Content</title>
        <meta name="description" content="Discover amazing content and connect with creators on Zwinish" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}
