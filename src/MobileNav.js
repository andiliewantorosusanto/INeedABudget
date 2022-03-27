import React from 'react'

export default function MobileNav() {
  return (
    <div className='bg-blue-800 text-blue-100 flex justify-between md:hidden'>
        <a href="www.google.com" className='block p-4 text-white font-bold'>
        Better Dev
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
