import Head from 'next/head'
import React from 'react'
import Layout from './Layout'
import AnimatedText from './Component/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from "react-icons/bs";
import { FeaturedProject1, FeaturedProject2, Project1, Project2, Project3, Project4 } from '@/public/Images/Projects'
import { motion } from 'framer-motion'
import TransitionEffect from './Component/TransitionEffect'

const FramerImage = motion(Image)

const Featuredprojects = ({ type, title, summary, img, link, github }) => {
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
          <Link href={github} target="_blank" className='w-10'>
            <BsGithub className='text-2xl' />
          </Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg border border-solid bg-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:border-dark hover:text-dark sm:px-4 sm:text-base' >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title,img, link, github }) => {
  return (
    <>
      <article className='w-full flex flex-col justify-between items-center rounded-3xl border border-solid relative border-dark bg-light shadow-2xl p-6 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light xs:p-4'>
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
            <Link href={github} target="_blank" className='w-10 sm:w-8'>
              <BsGithub className='text-2xl' />
            </Link>
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

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0 dark:text-light'>
            <div className='col-span-12'>
              <Featuredprojects
                title="Alan AI Voice News Assistant"
                summary="AI Voice News Assistant is an Web Application in which you can simply navigate through your voice command to your assistant.This will be provide you news from different media outlets on a single page according to your voice query and you can open the article on your voice command and summarize the News article from your command and you can also get the waether updates about any specific city all around the globe."
                link="https://alan-ai-voice-news-assistant.netlify.app/"
                github="https://github.com/usmanahmedgoray/Alan-AI-Voice-News-Assistant"
                type={"Featured Project"}
                img={FeaturedProject1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Purge AI - Multi-AI Tools"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                github="https://www.github.com/usmanahmedgoray"
                link="https://purge-ai.vercel.app/"
                img={Project1}
                type="Featured project"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="TextUtils - A Text Counter"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                github="https://www.github.com/usmanahmedgoray"
                link="https://texts-util.netlify.app"
                img={Project2}
                type="Featured project"

              />
            </div>
            {/* <div className='col-span-12'>
              <Featuredprojects
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="https://www.github.com/usmanahmedgoray"
                type={"Featured Project"}
                img={FeaturedProject2}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                github="https://www.github.com/usmanahmedgoray"
                link="/"
                img={Project3}
                type="Featured project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
              page transitions, cool background effects, unique design and it is mobile responsive."
                github="https://www.github.com/usmanahmedgoray"
                link="/"
                img={Project4}
                type="Featured project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects