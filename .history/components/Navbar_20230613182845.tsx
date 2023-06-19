
import React from 'react'
import Image from 'next/image'
import  logo  from '@/public/assets/images/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor 
    px-4">
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center
        justify-between'>
        <div>
          <Image className='w-14' src={logo} alt="logo"/>
        </div>
        <div>
          <ul>
            <li><Link>Home</Link></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
 
export default Navbar