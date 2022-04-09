import ChartContainer from './chartcontainer/ChartContainer'
import Header from './header/Header'
import React from 'react'

export default function GrowthChart() {
return (
    <div className='py-4 flex-1 shadow-sm bg-white'>
        <Header />
        <ChartContainer />
    </div>
)}
