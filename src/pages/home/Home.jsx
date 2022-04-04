import Chart from '../../components/chart/Chart';
import React from 'react'
import Widget from "../../components/widget/Widget";

export default function Home() {
  return (
    <div className="home text-gray-500">
        <div className="p-4 rounded space-y-2 shadow-md">
          <div className="text-4xl flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
            Hello Andy!
          </div>
          <div className="text-lg">
            Random quotes from the internet or something about fun facts
          </div>
        </div>

        <div className="flex py-4 space-x-4 overflow-x-hidden w-full">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        
        <div className="flex py-4">
          <Chart />
        </div>
    </div>
  )
}
