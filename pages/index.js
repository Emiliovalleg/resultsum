import Head from 'next/head'
import Image from 'next/image'
import iconreac from '../public/icon-reaction.svg'
import iconmemo from '../public/icon-memory.svg'
import iconverb from '../public/icon-verbal.svg'
import iconvisu from '../public/icon-visual.svg'


const blocks = [
  {
    title:'Reaction',
    color:'bg-red-50 text-red-500',
    icon:'iconreac',
    num:'80'
  },
  {
    title:'Memory',
    color:'bg-yellow-50 text-yellow-500',
    icon:'iconmemo',
    num:'92'
  } ,
  {
    title:'Verbal',
    color:'bg-green-50 text-green-500',
    icon:'iconverb',
    num:'61'
  },
  {
    title:'Visual',
    color:'bg-blue-50 text-blue-500',
    icon:'iconvisu',
    num:'72'
  }
]

export default function Home() {
  return (
    <>

      <div className='flex flex-col gap-8'>
        <header className='bg-gradient-to-b from-[#7857FF] via-[#2E2BE9] to-[#2E2BE9] w-full h-auto text-white rounded-b-3xl 
        flex justify-around flex-col items-center gap-5 p-10'>
          <h1 className='text-xl text-gray-300'>Your Result</h1>
            <div className='flex flex-col justify-center items-center bg-gradient-to-t to-[#4e21ca] via-[#2421ca]/50 from-[#2421ca]/10
          rounded-full aspect-square w-40 '>
              <h1 className='text-6xl font-bold'>76</h1>
              <h3>of 100</h3>
          </div>
          <h1 className='text-3xl font-semibold '>Great</h1>
          <p className='text-gray-300/80 w-80 font-medium text-center text-lg'>You scored higher than 65% of the people who have taken these tests.</p>
        </header>
        <main className='flex flex-col w-full px-10 gap-5'>
          <h1 className='font-medium text-xl'>Summary</h1>
          <div className='flex flex-col gap-5'>
          <section className='flex rounded-xl flex-col gap-3'>
            {blocks.map((block, i) => ( 
              <div key={i} className={`flex w-full items-center justify-between rounded-xl p-5 ${block.color}`}>
                <div className='flex items-center gap-3'>
                  <div>{block.icon} </div>
                  <div>{block.title}</div>
                </div>
                <div className='flex items-center gap-2 text-black'><span className='text-gray-400'>{block.num}</span><span>/ 100</span></div>

              </div>
           ))}
          </section>

        
                 
          </div>

        </main>
        <footer className=' m-auto'>
          <button className='mx-6 p-3 bg-slate-700 w-auto  text-gray-300 font-semibold text-xl rounded-3xl'>Continue</button>

        </footer>
      </div>
    </>
  )
}
