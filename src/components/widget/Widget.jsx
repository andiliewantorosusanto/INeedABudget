import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { LocalGroceryStore } from '@mui/icons-material';

export default function Widget() {
  return (
    <div className="border-2 p-4 rounded flex-1 shadow-md flex justify-between">
        <div className='flex flex-col justify-between space-y-2'>
            <div className='text-md'>
                Account
            </div>

            <div className="text-sm">
                Balance 100
            </div>
            <div className="text-sm">
                See My Transaction
            </div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='text-green-500 text-sm'>
                <KeyboardArrowUpIcon />
                20%
            </div>
            <LocalGroceryStore className='p-1 text-white bg-red-500 rounded self-end' />
        </div>
    </div>
  )
}
