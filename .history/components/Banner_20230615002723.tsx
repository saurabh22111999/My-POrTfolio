import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24
    flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        
        <motion.h3
        initial={{y:10, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.8}}
        className='text-lg font-titleFont tracking-wide text-textGreen'>
           Hi, my name is
           </motion.h3>
           <motion.h1
           initial={{y:10, opacity:0}}
           animate={{y:0,opacity:1}}
           transition={{duration:0.5,delay:1}}
           className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'>
            Saurabh Jangra. 
            <span className='text-textDark mt-2 lgl:mt-4'>
                I build things for the web
                </span>
           </motion.h1>
           <motion.p
           initial={{y:10, opacity:0}}
           animate={{y:0,opacity:1}}
           transition={{duration:0.5,delay:1.1}}
            className='text-base md:max-w-[650px] text-textDark font-medium'>
            {" "}
           A self-motivated and dedicated computer science engineering graduate with coding knowledge
in different programming languages. Professional with advanced knowledge of designing and
building web pages. A motivated and dedicated individual seeking a position that involves
regular use of these skills.
<a href='https://www.linkedin.com/in/saurabh-jangra-84a092202/' target='_blank'>
    <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden
    group'>Learn More
    <span className=' absolute w-full'></span></span>
    </a>
           </motion.p>
            </section>

  )
}

export default Banner