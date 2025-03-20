import Head from "next/head";
import React from "react";
import AnimatedText from "./Component/AnimatedText";
import Layout from "./Layout";
import Image from "next/image";
import ProfilePic from "../public/Images/Profile Picture 03.jpg";
import Skills, { Web3Skills } from "./Component/Skills";
import Education from "./Component/Education";
import TransitionEffect from "./Component/TransitionEffect";
import Experience from "./Component/Experience";
import Certificate from "./Component/Certificate&Awards";

const About = () => {
  return (
    <>
      <Head>
        <title>Usman Ahmed | About Page</title>
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
          content="/Profile Picture 03.jpg"
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
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:bg-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-8xl mb-16 sm:mb-8 lg:text-7xl sm:text-6xl xs:text-4xl"
          />
          <div className="grid w-full grid-cols-6 xl:grid-cols-4 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-2 lg:order-2 md:col-span-4">
              <h2 className="mb-4 text-xl lg:text-lg font-bold uppercase text-dark/75  dark:text-light/75">
                Biography
              </h2>
              <p className="text-lg lg:text-base font-medium text-dark/75  dark:text-light/75">
                Hello! I am a skilled Software Engineer with a passion for
                developing robust and scalable Blockchain, Web and Mobile
                applications.
              </p>
              <p className="text-lg lg:text-base my-4 font-medium text-dark/75  dark:text-light/75">
                With 2+ years of experience in the industry, I specialize in
                Full Stack Web Development and Full Stack Blockchain Developer.
                My expertise spans across a range of cutting-edge technologies
                and frameworks, ensuring that I can deliver high-quality
                solutions tailored to your needs.
              </p>
              <p className="text-lg lg:text-base font-medium text-dark/75 dark:text-light/75">
                Whether I am working on a project ,I bring my commitment to
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
                <br />
              </p>
              <p className="text-lg lg:text-base mt-4 font-medium text-dark/75 dark:text-light/75">
                Full Stack Blockchain and Web Development: Proficient in
                Blockchain Smart contracts and protocols and DeFi,front-end and
                back-end development, ensuring seamless integration and
                functionality.
              </p>
            </div>
            <div className="col-span-3 border-2 rounded-2xl border-dark dark:border-light h-max relative bg-light p-4 dark:bg-dark dark:text-light xl:col-span-2 lg:order-1 md:col-span-4">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] rounded-[1.7rem] h-[103%] bg-dark dark:bg-light" />
              <Image
                src={ProfilePic}
                alt="Usman ahmed Profile Picture"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
              />
            </div>
          </div>
          <Skills />
          <Web3Skills />
          <Experience />
          <Education />
          <Certificate/>
        </Layout>
      </main>
    </>
  );
};

export default About;
