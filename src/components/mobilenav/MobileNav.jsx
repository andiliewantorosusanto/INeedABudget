import React from 'react'

export default function MobileNav() {
  return (
    <div className='bg-blue-800 text-blue-100 flex justify-between md:hidden'>
        <a href="www.google.com" className='p-4 text-white font-bold flex '>
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            INAB
        </a>

        <button className='mobile-menu-button p-4 focus:outline-none focus:bg-blue-700'>
        <svg className='h-5 w-5' 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
    </div>
    )
}
