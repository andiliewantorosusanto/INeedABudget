import React from 'react'

export default function WalletDetail() {
  return (
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
  )
}
