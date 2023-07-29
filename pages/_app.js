import '@/styles/globals.css'
import { Inter, Roboto_Mono, Montserrat } from 'next/font/google'
import Head from 'next/head'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Montserrat',
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Usman Ahmed Goraya</title>
        <meta name='description' content='Create the personal Portfolio site ' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel='icon' href='/favicon_io/favicon.ico' />
      </Head>
      <main className={`${montserrat.variable} w-full bg-light text-dark dark:bg-dark min-h-screen`}>
        <Navbar />
        <AnimatePresence mode='wait'>
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer/>
      </main>
    </>)
}
