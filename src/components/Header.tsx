import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div className="w-full fixed absolute z-[2]">
      <div className="container mx-auto flex flex-row justify-start items-center py-6 gap-40">
        
        {/* Logo Section */}
        <div className="flex flex-row items-center font-bold ubuntu-bold text-3xl text-white">
          <p className='bg-gradient-to-r from-teal-500 to-emerald-700 bg-clip-text text-transparent'><span className='text-[#fff]'>Earn</span>Charge</p>
        </div>
        
        {/* Navigation Section */}
        <div className={`flex flex-row items-center gap-10 text-white ubuntu-regular`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Header
