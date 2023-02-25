import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center items-start h-screen w-screen'>
        <header className='bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] w-full h-auto text-white rounded-b-3xl 
        flex justify-around flex-col items-center px-10'>
          <h1 className='py-5 text-xl text-gray-300'>Your Result</h1>
          <div className='flex flex-col items-center bg-gradient-to-b from-[#2E2BE9] to-[#7857FF] rounded-full 
          w-auto h-auto p-7'>
            <h1 className='text-6xl'>76</h1>
            <h3>of 100</h3>
          </div>
          <h1 className='pt-4 pb-2 text-2xl'>Great</h1>
          <p className='pb-10 px-16 text-gray-400 drop-shadow-xl'>You scored higher than 65% of the people who have taken these tests.</p>

        </header>
        <main>

        </main>
        <footer>

        </footer>
      </div>
    </>
  )
}
