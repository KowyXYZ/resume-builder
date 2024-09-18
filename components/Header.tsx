import Link from 'next/link'
import React from 'react'

const Header = ({children,} : {children: any}) => {
  return (
    <div className='  w-full  border-b border-gray-500'>
      <div className='flex justify-between p-1 items-center container mx-auto'>
        <Link href='/' className='flex  justify-center items-center gap-4'>
              <img src="/assets/logo.png" alt="logol" className='w-10 h-10 bg-blue-800 p-1 rounded-xl' />
              <h1 className='text-[20px] font-semibold text-slate-100 '>Ice</h1>
          </Link>
          {children}
      </div>
        
    </div>
  )
}

export default Header