"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", value1: 400, value2: 240 },
  { name: "Feb", value1: 300, value2: 139 },
  { name: "Mar", value1: 200, value2: 980 },
  { name: "Apr", value1: 278, value2: 390 },
  { name: "May", value1: 189, value2: 480 },
  { name: "Jun", value1: 239, value2: 380 },
  { name: "Jul", value1: 349, value2: 430 },
]

export function MainChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="value1" stroke="#8884d8" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="value2" stroke="#82ca9d" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

