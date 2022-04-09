import Greetings from './greetings/Greetings'
import Quotes from './quotes/Quotes'
import React from 'react'

export default function Header() {
  return (
    <div className="p-4 rounded space-y-2 shadow-sm bg-white">
        <Greetings/>
        <Quotes/>
    </div>
  )
}
