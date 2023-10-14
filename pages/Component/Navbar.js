import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { BsTwitter, BsGithub, BsLinkedin, BsPinterest, BsStackOverflow } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { motion } from 'framer-motion';
import useThemeSwitcher from './Hooks/useThemeSwitcher';
import Hamburger from './Hamburger';

const CustomLinks = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    )
}
const CustomMobileLinks = ({ href, title, className = "", toggle }) => {
    const router = useRouter()

    const handleLinkClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleLinkClick}>
            {title}
            <span className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleHamClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 lg:py-10 font-medium flex justify-between items-center  dark:text-light relative '>
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} handleHamClick={handleHamClick} />
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className='text-xl'>
                    <CustomLinks href="/" title="Home" className='mr-4' />
                    <CustomLinks href="/About" title="About" className='mx-4' />
                    <CustomLinks href="/Projects" title="Projects" className='mx-4' />
                    {/* <CustomLinks href="/Articles" title="Articles" className='ml-4' /> */}
                </nav>
                <nav className='flex items items-center justify-center flex-wrap'>
                    <motion.a href="https://www.twitter.com/usmanahmedgoray" target='_blank' className='text-sky-400 text-[1.7rem] mr-8 '
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsTwitter />
                    </motion.a>
                    <motion.a href="https://www.github.com/usmanahmedgoray" target='_blank' className='text-[1.7rem] mr-8'
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsGithub />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/usmanahmedgoray" target='_blank' className='text-blue-600 text-[1.7rem] mr-8 dark:bg-light dark:rounded-2xl'
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsLinkedin />
                    </motion.a>
                    <motion.a href="https://www.pinterest.com/usmanahmedgoray" target='_blank' className='text-red-600 text-[1.7rem] mr-8 dark:bg-light dark:rounded-full'
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsPinterest />
                    </motion.a>
                    <motion.a href="https://stackoverflow.com/users/18925589/usman-ahmed" target='_blank' className='text-orange-500 text-[1.7rem] mr-8'
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsStackOverflow />
                    </motion.a>

                    <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} className={`ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark`}>
                        {
                            mode === "dark" ? <MdOutlineLightMode className='text-2xl animate-spin-slow' /> : <GiNightSleep className='text-2xl animate-pulse' />
                        }
                    </button>

                </nav>
            </div>
            {isOpen ?
                <motion.div
                initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
                animate={{scale:1,opacity:1}}
                 className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32' >
                    <nav className='text-xl flex flex-col justify-center items-center '>
                        <CustomMobileLinks href="/" title="Home" className='' toggle={handleHamClick} />
                        <CustomMobileLinks href="/About" title="About" className='' toggle={handleHamClick} />
                        <CustomMobileLinks href="/Projects" title="Projects" className='' toggle={handleHamClick} />
                        {/* <CustomMobileLinks href="/Articles" title="Articles" className='' toggle={handleHamClick} /> */}
                    </nav>
                    <nav className='flex items items-center justify-center flex-wrap  mt-4'>
                        <motion.a href="https://www.twitter.com/usmanahmedgoray" target='_blank' className='text-sky-400 dark:text-sky-600 text-[1.7rem] mr-8 sm:mx-3 xs:mx-1'
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsTwitter />
                        </motion.a>
                        <motion.a href="https://www.github.com/usmanahmedgoray" target='_blank' className='text-[1.7rem] mr-8 border border-light bg-light rounded-full m-2 dark:bg-dark dark:border-dark sm:mx-3 xs:mx-1'
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsGithub />
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/usmanahmedgoray" target='_blank' className='text-blue-600 text-[1.8rem] mr-[1.8rem] sm:mx-3 xs:mx-1 bg-light rounded-2xl w-[27px] h-[27px] '
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsLinkedin />
                        </motion.a>
                        <motion.a href="https://www.pinterest.com/usmanahmedgoray" target='_blank' className='text-red-600 bg-light rounded-full border-6 border-red-600 text-[1.8rem] mr-8 sm:mx-3 xs:mx-1 '
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsPinterest />
                        </motion.a>
                        <motion.a href="https://stackoverflow.com/users/18925589/usman-ahmed" target='_blank' className='dark:text-orange-500 text-orange-600 text-[1.7rem] mr-8 sm:mx-3 xs:mx-1'
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsStackOverflow />
                        </motion.a>

                        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} className={`ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark`}>
                            {
                                mode === "dark" ? <MdOutlineLightMode className='text-2xl animate-spin-slow transition-all duration-300 ease-in-out' /> : <GiNightSleep className='text-2xl animate-pulse transition-all duration-300 ease-in-out' />
                            }
                        </button>

                    </nav>
                </motion.div>
                : null
            }
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar