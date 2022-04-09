import Chart from '../../components/chart/Chart';
import Header from '../../components/header/Header';
import React from 'react'
import ScrollWallet from '../../components/scrollwallet/ScrollWallet';

export default function Home() {
  return (
    <div className="home text-gray-600 ">
      <Header/>
      <ScrollWallet/>
      <Chart />
    </div>
  )
}
