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
        <meta name='description' content='My name is Usman Ahmed . I am MERN Stack Developer and always looking for new and innovative ways to bring my clients visions to life.  ' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href='/favicon_io/favicon.ico' />
        {/* <!-- Primary Meta Tags --> */}
        <title>Usman Ahmed Goraya</title>
        <meta name="title" content="Usman Ahmed Goraya" />
        <meta name="description" content="I am Usman Ahmed, a MERN Stack web developer. I am always looking for new and innovative ways to bring my clients visions to life." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/Profile Picture 03.jpg" />
        <meta property="og:title" content="Usman Ahmed Goraya" />
        <meta property="og:description" content="I am Usman Ahmed, a MERN Stack web developer. I am always looking for new and innovative ways to bring my clients visions to life." />
        <meta property="og:image" content="/Profile Picture 03.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/Profile Picture 03.jpg" />
        <meta property="twitter:title" content="Usman Ahmed Goraya" />
        <meta property="twitter:description" content="I am Usman Ahmed, a MERN Stack web developer. I am always looking for new and innovative ways to bring my clients visions to life." />
        <meta property="twitter:image" content="/Profile Picture 03.jpg" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Head>
      <main className={`${montserrat.variable} w-full bg-light text-dark dark:bg-dark min-h-screen`}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>)
}
