import React from 'react'
import Layout from '../Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full border border-t-dark font-medium text-lg dark:border-t-light dark:border-b-dark dark:border-r-dark dark:border-l-dark dark:text-light md:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Build with <span className='text-primary dark:text-priaryDark text-2xl px-1'>&#9825;</span>by&nbsp;<Link href="/" className="underline underline-offset-2">Usman Ahmed</Link>
            </div>
            {/* <Link href="/">Say Hello</Link> */}
        </Layout>
    </div>
  )
}

export default Footer