import "@/styles/globals.css";
import { Inter, Roboto_Mono, Montserrat } from "next/font/google";
import Head from "next/head";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ProfilePic from "../public/Images/Profile Picture 03.jpg";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Montserrat",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Usman Ahmed Goraya</title>
        <meta name="title" content="Usman Ahmed" />
        <meta
          name="description"
          content="As a skilled full-stack Blockchain and Web developer, I am dedicated to turning ideas into innovative Web Applications, DeFi,DAO and NFT Dapps and Solidity Smart Contracts and Solana Blockchain programs . Explore my latest projects and articles, showcasing my expertise in Blockchain and Web Development"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usmanahmedgoray.vercel.app/" />
        <meta property="og:title" content="Usman Ahmed" />
        <meta
          property="og:description"
          content="As a skilled full-stack Blockchain and Web developer, I am dedicated to turning ideas into innovative Web Applications, DeFi,DAO and NFT Dapps and Solidity Smart Contracts and Solana Blockchain programs . Explore my latest projects and articles, showcasing my expertise in Blockchain and Web Development"
        />
        <meta
          property="og:image"
          content={ProfilePic}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://usmanahmedgoray.vercel.app/"
        />
        <meta property="twitter:title" content="Usman Ahmed" />
        <meta
          property="twitter:description"
          content="As a skilled full-stack Blockchain and Web developer, I am dedicated to turning ideas into innovative Web Applications, DeFi,DAO and NFT Dapps and Solidity Smart Contracts and Solana Blockchain programs . Explore my latest projects and articles, showcasing my expertise in Blockchain and Web Development"
        />
        <meta
          property="twitter:image"
          content={ProfilePic}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} w-full bg-light text-dark dark:bg-dark min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
