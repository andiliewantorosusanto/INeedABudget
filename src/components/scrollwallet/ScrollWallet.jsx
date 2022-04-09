import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Wallet from '../wallet/Wallet'

export default function ScrollWallet() {
  return (
    <ScrollContainer>
        <div className="scroll-container flex flex-[1_1_25%] py-4 space-x-4 overflow-x-hidden w-full ">
        <Wallet />
        <Wallet />
        <Wallet />
        <Wallet />
        <Wallet />
        <Wallet />
        <Wallet />
        <Wallet />
        </div>
    </ScrollContainer>
  )
}
