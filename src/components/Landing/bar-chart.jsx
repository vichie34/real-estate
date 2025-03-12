"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 900 },
  { name: "Mar", total: 1600 },
  { name: "Apr", total: 1400 },
  { name: "May", total: 2000 },
  { name: "Jun", total: 1800 },
  { name: "Jul", total: 1700 },
  { name: "Aug", total: 1900 },
  { name: "Sep", total: 2200 },
  { name: "Oct", total: 2100 },
  { name: "Nov", total: 2400 },
  { name: "Dec", total: 2300 },
]

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

