import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { logo } from '@/public/assets'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saurabh Jangra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
        <Navbar/>
        <div className=' h-[50px] w-full underline flex justify-between'><div>
          asdafsdbg</div>
          <div>sadwfdsfas</div></div>
        <div className='flex justify-between'>
          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide/>
            </div>
          <div>
            Middle
          </div>
          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'><RightSide/></div>

        </div>
      </main>
    </>
  )
}
