import React from 'react';
import Layout from './Layout';
import Image from 'next/image';
import ProfilePic from "../public/Images/7541788 (2).png";
import BulbPic from "../public/Images/bulbPic.svg";
import Animatedtext from './Component/AnimatedText';
import ProfilePic2 from "../public/Images/Profile Picture 03.jpg";
import Link from 'next/link';
import { BsBoxArrowUpRight } from "react-icons/bs";
import HireMe from './Component/HireMe';
import Head from 'next/head';
import TransitionEffect from './Component/TransitionEffect';

const index = () => {
  return (
    <>
      <Head>
        <title>Usman Ahmed</title>
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
          content={ProfilePic2}
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
          content={ProfilePic2}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark min-h-screen w-full dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-5/12 md:w-full md:py-8'>
              <Image src={ProfilePic} alt='Usman Ahmed' className='w-full h-auto lg:hidden md:inline-block md:w-full' priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <Animatedtext text="Turning Vision Into Reality With Code And Design" className='text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:textt-5xl sm:text-3xl ' />
              <p className='my-4 text-base font-medium text-gray-800 dark:text-light md:text-sm sm:text-xs'> I am a MERN stack specialist (MongoDB, Express.js, React, Node.js) along with Nestjs, Typescript with a strong
                foundation in full stack web development and a complementary focus on Web3 and blockchain technologies. My
                expertise lies in building scalable and efficient web applications, while also having hands-on experience with NFTs, Solidity smart contracts,Dapps</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/UsmanAhmedGoraya.pdf" target='_blank' className='flex items-center bg-dark text-light py-2.5 px-6 rounded-lg border border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark active:bg-dark active:text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:px-4 md:p-2 md:text-base'>
                  Resume <BsBoxArrowUpRight className='text-xl ml-3' />
                </Link>
                <Link href="mailto:usmanahmedkharal@gmail.com" className='ml-4 capitalize font-medium underline underline-offset-2 text-lg md:text-base'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 xl:right-4 2xl:bottom-8 lg:bottom-2 inline-block w-24 xl:w-20 lg:w-16 md:hidden '>
          <Image src={BulbPic} alt='Usman Ahmed' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}

export default index