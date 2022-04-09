import Chart from './chart/Chart'
import React from 'react'
import { ResponsiveContainer } from 'recharts'

export default function ChartContainer() {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <Chart />
    </ResponsiveContainer>
  )
}
