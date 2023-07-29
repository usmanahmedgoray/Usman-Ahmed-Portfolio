import React from 'react';
import Layout from './Layout';
import Image from 'next/image';
import ProfilePic from "../public/Images/7541788 (2).png";
import BulbPic from "../public/Images/bulbPic.svg";
import Animatedtext from './Component/AnimatedText';
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
        <meta name='description' content='Usman Ahmed Goraya is MERN Stack Web Developer' />
      </Head>
      <TransitionEffect/>
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
              <p className='my-4 text-base font-medium text-gray-800 dark:text-light md:text-sm sm:text-xs'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/UsmanResume. pdf" target='_blank' className='flex items-center bg-dark text-light py-2.5 px-6 rounded-lg border border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark active:bg-dark active:text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:px-4 md:p-2 md:text-base'>
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