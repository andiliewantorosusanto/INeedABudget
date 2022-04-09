import CategoryIcon from './categoryicon/CategoryIcon'
import React from 'react'
import StatusGrowth from './statusgrowth/statusgrowth'

export default function WalletIconDetail() {
  return (
    <div className='flex flex-col justify-between'>
        <StatusGrowth />
        <CategoryIcon />
    </div>
  )
}
