import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

import Header from './header/Header'
import React from 'react'

export default function GrowthChart() {
    const data = [
        {
          name: 'January',
          spending: Math.random()*1000,
          earning: Math.random()*1000,
          accountTotal: Math.random()*1000,
        },
        {
          name: 'February',
          spending: Math.random()*1000,
          earning: Math.random()*1000,
          accountTotal: Math.random()*1000,
        },
        {
          name: 'March',
          spending: Math.random()*1000,
          earning: Math.random()*1000,
          accountTotal: Math.random()*1000,
        },
        {
          name: 'April',
          spending: Math.random()*1000,
          earning: Math.random()*1000,
          accountTotal: Math.random()*1000,
        },
        {
          name: 'May',
          spending: Math.random()*1000,
          earning: Math.random()*1000,
          accountTotal: Math.random()*1000,
        },
        {
          name: 'June',
          spending: Math.random()*1000,
          earning: Math.random()*1000,
          accountTotal: Math.random()*1000,
        },
        {
          name: 'July',
          spending: Math.random()*1000,
          earning: Math.random()*1000,
          accountTotal: Math.random()*1000,
        },
      ];
      
return (
    <div className='py-4 flex-1 shadow-sm bg-white'>
        <Header />
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                width="100%"
                height={300}
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Area type="monotone" dataKey="spending" stroke="#F32013" activeDot={{ r: 8 }} fill="#F32013" />
                <Area type="monotone" dataKey="earning" stroke="#37E3AD" fill="#37E3AD"  />
                <Area type="monotone" dataKey="accountTotal" stroke="#3695E7" fill="#3695E7" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
)}
