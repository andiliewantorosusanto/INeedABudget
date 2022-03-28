import React from 'react'

export default function DesktopNav() {
  return (
    <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a href="www.google.com" className="text-white flex items-center space-x-2 px-4">
        <svg className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <span className="text-2xl font-extrabold">
            Better Dev
        </span>
        </a>

        <nav>
        <a href="www.google.com" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            Home
        </a>
        <a href="www.google.com" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            About
        </a>
        <a href="www.google.com" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            Features
        </a>
        <a href="www.google.com" className="block py-2.5 px-4 rounded hover:bg-blue-700">
            Pricing
        </a>
        </nav>
    </div>
  )
}
