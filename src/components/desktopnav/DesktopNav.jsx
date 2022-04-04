import React from 'react'

export default function DesktopNav() {
  return (
    <div className="sidebar bg-blue-800 text-blue-100 w-[15%] space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a href="/" className="text-white flex items-center space-x-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-2xl font-extrabold">
                INAB
            </span>
        </a>

        <nav>
        <a href="/" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            Home
        </a>
        <a href="/about" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            Trasaction
        </a>
        <a href="/features" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            Wallet
        </a>
        <a href="/pricing" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            Kentut
        </a>
        </nav>
    </div>
  )
}
