
import React from 'react'
import Image from 'next/image'
import  logo  from '@/public/assets/images/logo.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor 
    px-4">
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center
        justify-between'>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        >
          <Image className='w-14' src={logo} alt="logo"/>
        </motion.div>
        <div>
          <ul className='flex text-[13px] gap-7'>
          <Link href='#home' className='flex items-center gap-1 font-medium text-textDark 
          hover:text-textGreen cursor-pointer duration-300 nav-link' 
          ><motion.li
          initial={{y:-10,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}
          >Home</motion.li>
          </Link>
          <Link href='#home' className='flex items-center gap-1 font-medium text-textDark 
          hover:text-textGreen cursor-pointer duration-300 nav-link' 
          ><motion.li
          initial={{y:-10,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}
          >About</motion.li>
          </Link>
          
            
          </ul>
        </div>
      </div>
    </div>
  )
}
 
export default Navbar