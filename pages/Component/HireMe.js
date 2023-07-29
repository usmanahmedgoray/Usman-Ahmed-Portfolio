import React from 'react';
import { CircularText } from './Icons'
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-20 bottom-24 flex items-center justify-center md:right-16 md:left-auto md:top-12 md:bottom-auto md:absolute'>
        <div className='w-44 absolute h-[10rem] flex items-center justify-center md:w-24'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
            <Link href="mailto:usmanahmedkharal@gmail.com" className='flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light dark:text-dark text-light border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark shadow-md hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:w-12 md:h-12 md:text-[10px]'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe