import GrowthChart from '../../components/growthchart/GrowthChart';
import Header from '../../components/header/Header';
import React from 'react'
import ScrollWallet from '../../components/scrollwallet/ScrollWallet';

export default function Home() {
  return (
    <div className="home text-gray-600 ">
      <Header/>
      <ScrollWallet/>
      <GrowthChart />
    </div>
  )
}
