import '@/styles/globals.css'
import { Hanken_Grotesk } from '@next/font/google'

const hanken = Hanken_Grotesk({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (<main className={`${hanken.variable} font-sans`}>
  <Component {...pageProps} />
</main>)
}

