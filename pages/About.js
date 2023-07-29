import Head from 'next/head';
import React from 'react';
import AnimatedText from './Component/AnimatedText';
import Layout from './Layout';
import Image from 'next/image';
import ProfilePic from '../public/Images/Profile Picture 03.jpg';
import Skills from './Component/Skills';
import Education from './Component/Education';
import TransitionEffect from './Component/TransitionEffect';

const About = () => {
    return (
        <>
            <Head>
                <title>Usman Ahmed | About Page</title>
                <meta name='decription' content='Usman Ahmed Goraya is MERN Stack Web Developer' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:bg-dark dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='text-8xl mb-16 sm:mb-8 lg:text-7xl sm:text-6xl xs:text-4xl' />
                    <div className='grid w-full grid-cols-6 xl:grid-cols-4 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-2 lg:order-2 md:col-span-4'>
                            <h2 className='mb-4 text-xl lg:text-lg font-bold uppercase text-dark/75  dark:text-light/75'>
                                Biography
                            </h2>
                            <p className="text-lg lg:text-base font-medium text-dark/75  dark:text-light/75">
                                Hi/Asslam-o-Alaikum, I am Usman Ahmed, a MERN Stack web developer. I am always looking for
                                new and innovative ways to bring my clients visions to life.
                            </p>
                            <p className="text-lg lg:text-base my-4 font-medium text-dark/75  dark:text-light/75">
                                I’m a graduate in B.S Computer Science . I’m a good self learner and listener. On the side of technical professional skill, I’m a full stack Web Developer, and fine hold on CMS Wordpress.
                            </p>
                            <p className="text-lg lg:text-base font-medium text-dark/75 dark:text-light/75">
                                Whether I am working on a project ,I bring my commitment to user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-3 border-2 rounded-2xl border-dark dark:border-light h-max relative bg-light p-4 dark:bg-dark dark:text-light xl:col-span-2 lg:order-1 md:col-span-4'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] rounded-[1.7rem] h-[103%] bg-dark dark:bg-light' />
                            <Image src={ProfilePic} alt='Usman ahmed Profile Picture' className='w-full h-auto rounded-2xl' priority
                                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw" />
                        </div>
                    </div>
                    <Skills />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default About