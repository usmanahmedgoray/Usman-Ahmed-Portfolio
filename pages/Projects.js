import Head from 'next/head'
import React from 'react'
import Layout from './Layout'
import AnimatedText from './Component/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from "react-icons/bs";
import { FeaturedProject1, FeaturedProject2, Project1, Project2, Project3, Project4, Project5, Project6 } from '@/public/Images/Projects'
import { motion } from 'framer-motion'
import TransitionEffect from './Component/TransitionEffect'
import RotatingText from './Component/RotatingText'

const FramerImage = motion(Image)

const Featuredprojects = ({ type, title, summary, img, link }) => {
  return (
    <article className='w-full flex justify-between items-center rounded-3xl border border-solid relative border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] rounded-[2.5rem] rounded-br-2xl h-[102%] bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank" className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg dark:bg-dark dark:text-light'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-priaryDark font-medium text-xl xs:text-base'>
          {type}
        </span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark/75 dark:text-light/75'>{summary}</p>
        <div className='mt-2 flex items-center sm:justify-between sm:w-full'>
          {/* <Link href={github} target="_blank" className='w-10'>
            <BsGithub className='text-2xl' />
          </Link> */}
          <Link href={link} target="_blank" className='rounded-lg border border-solid bg-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:border-dark hover:text-dark sm:px-4 sm:text-base' >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title,img, link }) => {
  return (
    <>
      <article className='w-full flex min-h-[485px] flex-col justify-start items-center rounded-3xl border border-solid relative border-dark bg-light shadow-2xl p-6 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] rounded-[2.5rem] rounded-br-2xl h-[102%] bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
        <Link href={link} target="_blank" className='cursor-pointer overflow-hidden rounded-lg dark:bg-dark dark:text-light'>
          <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
          />
        </Link>
        <div className='flex flex-col items-start justify-between mt-5'>
          <span className='text-primary dark:text-priaryDark font-medium text-xl lg:text-lg sm:text-base'>
            {type}
          </span>
          <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-3xl sm:text-xl'>{title}</h2>
          </Link>
          <div className='mt-2 flex items-center sm:justify-between sm:w-full'>
            <Link href={link} target="_blank" className='mr-4 rounded-lg border border-solid hover:bg-light hover:border-dark hover:text-dark bg-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base' >
              Visit Project
            </Link>
            {/* <Link href={github} target="_blank" className='w-10 sm:w-8'>
              <BsGithub className='text-2xl' />
            </Link> */}
          </div>
        </div>
      </article >
    </>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Usman Ahmed | Projects</title>
        <meta name='description' content='This is Usman Ahmed Porfolio next app project page' />
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col justify-center items-center dark:bg-dark dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" className='text-8xl mb-16 lg:text-7xl sm:text-6xl sm:mb-8 xs:text-4xl' />
          {/* <RotatingText/> */}
          <AnimatedText text="WEB 2.0 PROJECTS" className='text-6xl text-left ml-3 mt-16 mb-8 lg:text-5xl sm:text-4xl sm:mb-8 xs:text-4xl text-primary dark:text-priaryDark' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0 dark:text-light'>
            <div className='col-span-12'>
              <Featuredprojects
                title="Web3Geeks"
                summary="An online learning platform similar to Udemy, with added blockchain features.Currently working on both front-end and back-end development, developing and integrating blockchain technology to enable course enrollment and other unique features."
                link="https://web3-geeks-beige.vercel.app"
                // github="https://github.com/usmanahmedgoray/Alan-AI-Voice-News-Assistant"
                type={"Featured Project"}
                img={FeaturedProject1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="SkillMatch - Advance Pre-screening Platform"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                // github="https://www.github.com/usmanahmedgoray"
                link="https://www.skillmatch.tech/"
                img={Project1}
                type="Featured project"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Purge AI - Multi-AI Tools"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                // github="https://www.github.com/usmanahmedgoray"
                link="https://purge-ai.vercel.app/"
                img={Project2}
                type="Featured project"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="SyncSeller - Amazon FBA Ecommerce Wholesale Platform"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                // github="https://www.github.com/usmanahmedgoray"
                link="https://seller-sync.vercel.app/"
                img={Project3}
                type="Featured project"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Te-Konecta - Unified Multi-Purpose All In One Link Platform"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                // github="https://www.github.com/usmanahmedgoray"
                link="https://te-konecta-new.vercel.app/"
                img={Project4}
                type="Featured project"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Toys Cove - Ecommerce Platform for Especially Kids Products"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                // github="https://www.github.com/usmanahmedgoray"
                link="https://toycove-two.vercel.app/"
                img={Project5}
                type="Featured project"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Melda Solutions - Ecommerce for Dacoration Related Products"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                // github="https://www.github.com/usmanahmedgoray"
                link="https://meldasolutions.octalooptechnologies.com/"
                img={Project6}
                type="Featured project"

              />
            </div>
          </div>
          
        </Layout>
      </main>
    </>
  )
}

export default Projects