import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { LocalGroceryStore } from '@mui/icons-material';

export default function Widget() {
  return (
    <div className="p-4 rounded flex-1 shadow-md flex justify-between">
        <div className='flex flex-col justify-between space-y-6'>
            <div className='text-sm font-extrabold text-black'>
                Account
            </div>

            <div className="text-md">
                Rp 12.000.000
            </div>
            <div className="text-sm underline">
                Transaction 
            </div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='text-green-500 text-sm'>
                <KeyboardArrowUpIcon />
                20%
            </div>
            <LocalGroceryStore className='p-1 text-blue-300 bg-blue-600 rounded self-end' />
        </div>
    </div>
  )
}
