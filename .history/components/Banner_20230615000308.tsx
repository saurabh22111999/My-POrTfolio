import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24
    flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        
        <motion.h3
        initial={{y:10, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.6}}
        className='text-lg font-titleFont tracking-wide text-textGreen'>
           Hi, my name is
           </motion.h3>
           <h1>
            Saurabh Jangra. <span>I build things for the web</span>
           </h1>
            </section>

  )
}

export default Banner