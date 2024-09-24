import {
  FeaturedProject1,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from "@/public/Images/Projects";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./Component/AnimatedText";
import TransitionEffect from "./Component/TransitionEffect";
import Layout from "./Layout";
import React, { useState } from "react";
import {
  FeaturedProject01,
  Project01,
  Project02,
  Project03,
  Project04,
  Project05,
  Project06,
} from "@/public/Images/Projects/Web3";

const FramerImage = motion(Image);

const FeaturedProjects = [
  {
    tabId: "web2",
    title: "Web3Geeks",
    summary:
      "An online learning platform similar to Udemy, with added blockchain features.Currently working on both front-end and back-end development, developing and integrating blockchain technology to enable course enrollment and other unique features.",
    image: FeaturedProject1,
    url: "https://web3-geeks-beige.vercel.app",
  },
  {
    tabId: "web3",
    title: "The Moonbase",
    summary:
      "MoonbaseAlpha is not only uniquely decentralized in it’s Launchpad construct, it also contains the direct vessel to launch via a high velocity rocket charged AMM Exchange. This entire MoonbaseAlpha solution is powered by Arbitrum & zkSync Protocol.",
    image: FeaturedProject01,
    url: "https://www.themoonbase.app/",
  },
];

const web2Projects = [
  {
    id: 1,
    url: "https://www.skillmatch.tech/",
    title: "SkillMatch - Advance Pre-screening Platform",
    type: "Featured Project",
    image: Project1,
  },
  {
    id: 2,
    url: "https://purge-ai.vercel.app/",
    title: "Purge AI - Multi-AI Tools",
    type: "Featured project",
    image: Project2,
  },
  {
    id: 3,
    url: "https://seller-sync.vercel.app/",
    title: "SyncSeller - Amazon FBA Ecommerce Wholesale Platform",
    type: "Featured project",
    image: Project3,
  },
  {
    id: 4,
    url: "https://te-konecta-new.vercel.app/",
    title: "Te-Konecta - Unified Multi-Purpose All In One Link Platform",
    type: "Featured project",
    image: Project4,
  },
  {
    id: 5,
    url: "https://toycove-two.vercel.app/",
    title: "Toys Cove - Ecommerce Platform for Especially Kids Products",
    type: "Featured project",
    image: Project5,
  },
  {
    id: 6,
    url: "https://meldasolutions.octalooptechnologies.com/",
    title: "Melda Solutions - Ecommerce for Dacoration Related Products",
    type: "Featured project",
    image: Project6,
  },
];
const web3Projects = [
  {
    id: 1,
    url: "https://blocknotes-new.vercel.app/",
    title: "BlockNotes - Web3 NFT as Music Industry",
    type: "Featured Project",
    image: Project01,
  },
  {
    id: 2,
    url: "https://lighthouse-tau.vercel.app/",
    title: "Lighthouse Keeper- Art based NFT Dapp",
    type: "Featured project",
    image: Project02,
  },
  {
    id: 3,
    url: "https://gemlaunch.io/",
    title: "GemLaunch - Decentralized Token Sales Simplified",
    type: "Featured project",
    image: Project03,
  },
  {
    id: 4,
    url: "https://metamuse.vercel.app/",
    title: "MetaMuse - Solana NFT MARKETPLACE & NFT Tokens Utility",
    type: "Featured project",
    image: Project04,
  },
  {
    id: 5,
    url: "https://astrality.vercel.app/",
    title: "Astrality - AI Powered Metaverse & Marketplace",
    type: "Featured project",
    image: Project05,
  },
  {
    id: 6,
    url: "https://nebula-skyswap-six.vercel.app/",
    title: "Nebula SkySwap - Nebula Blockchain DEX Dapp",
    type: "Featured project",
    image: Project06,
  },
];

const Featuredprojects = ({
  type,
  title,
  summary,
  img,
  link,
  activeTab,
  tabId,
}) => {
  return (
    <article
      className={`w-full justify-between items-center rounded-3xl border border-solid relative border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ${
        tabId === activeTab ? "flex" : "hidden"
      }`}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] rounded-[2.5rem] rounded-br-2xl h-[102%] bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg dark:bg-dark dark:text-light"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-priaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark/75 dark:text-light/75">
          {summary}
        </p>
        <div className="mt-2 flex items-center sm:justify-between sm:w-full">
          {/* <Link href={github} target="_blank" className='w-10'>
            <BsGithub className='text-2xl' />
          </Link> */}
          <Link
            href={link}
            target="_blank"
            className="rounded-lg border border-solid bg-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:border-dark hover:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link }) => {
  return (
    <>
      <article className="w-full flex min-h-[485px] flex-col justify-start items-center rounded-3xl border border-solid relative border-dark bg-light shadow-2xl p-6 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] rounded-[2.5rem] rounded-br-2xl h-[102%] bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="cursor-pointer overflow-hidden rounded-lg dark:bg-dark dark:text-light"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
          />
        </Link>
        <div className="flex flex-col items-start justify-between mt-5">
          <span className="text-primary dark:text-priaryDark font-medium text-xl lg:text-lg sm:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl sm:text-xl">
              {title}
            </h2>
          </Link>
          <div className="mt-2 flex items-center sm:justify-between sm:w-full">
            <Link
              href={link}
              target="_blank"
              className="mr-4 rounded-lg border border-solid hover:bg-light hover:border-dark hover:text-dark bg-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
            {/* <Link href={github} target="_blank" className='w-10 sm:w-8'>
              <BsGithub className='text-2xl' />
            </Link> */}
          </div>
        </div>
      </article>
    </>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web2");

  const tabs = [
    { id: "web2", label: "WEB 2.0 PROJECTS" },
    { id: "web3", label: "WEB 3.0 PROJECTS" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const projectData = activeTab === "web2" ? web2Projects : web3Projects;

  return (
    <>
      <Head>
        <title>Usman Ahmed | Projects</title>
        <meta
          name="description"
          content="This is Usman Ahmed Porfolio next app project page"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:bg-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="text-8xl mb-16 lg:text-7xl sm:text-6xl sm:mb-8 xs:text-4xl"
          />
          <div className="flex justify-between items-center mb-16">
            {tabs?.map((tab) => {
              return (
                <motion.div
                  key={tab.id}
                  onClick={() => handleTabClick(tab?.id)}
                  className="cursor-pointer"
                  initial={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  animate={{
                    borderBottomLeftRadius: tab.id === activeTab ? 20 : 0,
                    borderBottomRightRadius: tab.id === activeTab ? 20 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <AnimatedText
                    text={tab?.label}
                    className={`text-5xl text-left ml-3 mt-16 mb-2 lg:text-5xl sm:text-4xl sm:mb-2 xs:text-4xl ${
                      tab.id === "web3" ? "text-end" : "text-left"
                    }`}
                  />
                  {tab.id === activeTab && (
                    <motion.div
                      layoutId="underline"
                      className="border-b-8 border-primary dark:border-priaryDark rounded-b-lg"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0 dark:text-light">
            <div className="col-span-12">
              {FeaturedProjects &&
                FeaturedProjects?.map((project) => {
                  return (
                    <Featuredprojects
                      key={project.tabId}
                      title={project.title}
                      summary={project.summary}
                      link={project.url}
                      type={"Featured Project"}
                      img={project.image}
                      tabId={project.tabId}
                      activeTab={activeTab}
                    />
                  );
                })}
            </div>
            {projectData &&
              projectData?.map((project) => {
                return (
                  <div key={project.id} className="col-span-6 sm:col-span-12">
                    <Project
                      title={project.title}
                      summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                      // github="https://www.github.com/usmanahmedgoray"
                      link={project.url}
                      img={project.image}
                      type="Featured project"
                    />
                  </div>
                );
              })}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
