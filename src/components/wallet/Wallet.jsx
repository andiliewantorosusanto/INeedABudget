import React from 'react'
import WalletDetail from './walletdetail/WalletDetail';
import WalletIconDetail from './walleticondetail/WalletIconDetail';

export default function Wallet() {
  return (
    <div className="p-4 rounded flex-1 shadow-sm flex justify-between">
        <WalletDetail/>
        <WalletIconDetail />
    </div>
  )
}
