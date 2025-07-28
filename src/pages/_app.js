import "@/styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Inter, Lora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export default function App({ Component, pageProps }) {
  return (
      <Layout className={`${inter.variable} ${lora.variable}`}>
        <Component {...pageProps} />
      </Layout>
  );
}
