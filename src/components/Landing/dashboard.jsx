// "use client"

// import { useState } from "react"
// import { Bell, ChevronDown, Search, Filter, Download, MoreHorizontal } from "lucide-react"
// import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "@/components/ui/chart"

// const monthlyData = [
//   { name: "Jan", value: 65 },
//   { name: "Feb", value: 45 },
//   { name: "Mar", value: 75 },
//   { name: "Apr", value: 55 },
//   { name: "May", value: 85 },
//   { name: "Jun", value: 65 },
//   { name: "Jul", value: 95 },
//   { name: "Aug", value: 75 },
//   { name: "Sep", value: 85 },
//   { name: "Oct", value: 65 },
//   { name: "Nov", value: 75 },
//   { name: "Dec", value: 85 },
// ]

// const lineData = Array.from({ length: 20 }, (_, i) => ({
//   name: i + 1,
//   value: Math.floor(Math.random() * 50) + 50,
// }))

// const transactions = [
//   { id: 1, name: "Landing Page", date: "Oct 24, 2023", status: "Completed", amount: "+$235.00" },
//   { id: 2, name: "Mobile App", date: "Oct 24, 2023", status: "Active", amount: "+$180.00" },
//   { id: 3, name: "Dashboard Design", date: "Oct 24, 2023", status: "Completed", amount: "+$420.00" },
//   { id: 4, name: "Logo Design", date: "Oct 24, 2023", status: "Cancelled", amount: "+$150.00" },
//   { id: 5, name: "Blog Template", date: "Oct 24, 2023", status: "Active", amount: "+$320.00" },
// ]

// export default function Dashboard() {
//   const [searchTerm, setSearchTerm] = useState("")

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] p-4 lg:p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-2xl font-semibold text-[#111827]">Welcome back, Felip!</h1>
//           <p className="text-[#6B7280]">Track your performance and metrics</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <button className="p-2 rounded-lg hover:bg-gray-100">
//             <Bell className="w-5 h-5 text-[#6B7280]" />
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9]">
//             Upgrade Now
//           </button>
//         </div>
//       </div>

//       {/* Main Stats Graph */}
//       <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E7EB] mb-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-lg font-semibold text-[#111827]">Statistics</h2>
//           <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
//             Last 6 months <ChevronDown className="w-4 h-4" />
//           </button>
//         </div>
//         <div className="h-[200px]">
//           <LineChart data={lineData} className="w-full h-full">
//             <Line dataKey="value" stroke="#7C3AED" strokeWidth={2} dot={false} />
//           </LineChart>
//         </div>
//       </div>

//       {/* Metric Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {/* Total Revenue */}
//         <div className="bg-[#7C3AED] p-6 rounded-xl text-white">
//           <h3 className="text-lg font-medium mb-4">Total Revenue</h3>
//           <p className="text-3xl font-semibold mb-2">$45,231.89</p>
//           <p className="text-purple-200">+20.1% from last month</p>
//         </div>

//         {/* Subscriptions */}
//         <div className="bg-[#10B981] p-6 rounded-xl text-white">
//           <h3 className="text-lg font-medium mb-4">Subscriptions</h3>
//           <p className="text-3xl font-semibold mb-2">12,234</p>
//           <p className="text-green-200">+2.1% from last month</p>
//         </div>

//         {/* Conversions */}
//         <div className="bg-[#3B82F6] p-6 rounded-xl text-white">
//           <h3 className="text-lg font-medium mb-4">Conversions</h3>
//           <p className="text-3xl font-semibold mb-2">42.5%</p>
//           <p className="text-blue-200">+4.3% from last month</p>
//         </div>
//       </div>

//       {/* Data Table */}
//       <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] mb-6">
//         <div className="p-6 border-b border-[#E5E7EB]">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold text-[#111827]">Recent Activity</h2>
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="pl-10 pr-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
//                 <Filter className="w-4 h-4" /> Filter
//               </button>
//               <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
//                 <Download className="w-4 h-4" /> Export
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
//               <tr>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Name</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Date</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Status</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Amount</th>
//                 <th className="px-6 py-3 text-right text-sm font-medium text-[#6B7280]">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-[#E5E7EB]">
//               {transactions.map((transaction) => (
//                 <tr key={transaction.id}>
//                   <td className="px-6 py-4 text-sm text-[#111827] font-medium">{transaction.name}</td>
//                   <td className="px-6 py-4 text-sm text-[#6B7280]">{transaction.date}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                         transaction.status === "Completed"
//                           ? "bg-green-100 text-green-800"
//                           : transaction.status === "Active"
//                             ? "bg-blue-100 text-blue-800"
//                             : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {transaction.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-[#10B981] font-medium">{transaction.amount}</td>
//                   <td className="px-6 py-4 text-right">
//                     <button className="text-[#6B7280] hover:text-[#111827]">
//                       <MoreHorizontal className="w-5 h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Bar Chart */}
//       <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E7EB]">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-lg font-semibold text-[#111827]">Monthly Revenue</h2>
//           <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
//             This Year <ChevronDown className="w-4 h-4" />
//           </button>
//         </div>
//         <div className="h-[300px]">
//           <BarChart data={monthlyData} className="w-full h-full">
//             <XAxis dataKey="name" tickLine={false} axisLine={false} />
//             <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
//             <Bar dataKey="value" fill="#7C3AED" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { Bell, ChevronDown, Search, Filter, Download, MoreHorizontal } from "lucide-react"

const monthlyData = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 75 },
    { name: "Apr", value: 55 },
    { name: "May", value: 85 },
    { name: "Jun", value: 65 },
    { name: "Jul", value: 95 },
    { name: "Aug", value: 75 },
    { name: "Sep", value: 85 },
    { name: "Oct", value: 65 },
    { name: "Nov", value: 75 },
    { name: "Dec", value: 85 },
]

const lineData = Array.from({ length: 20 }, (_, i) => ({
    name: i + 1,
    value: Math.floor(Math.random() * 50) + 50,
}))

const transactions = [
    { id: 1, name: "Landing Page", date: "Oct 24, 2023", status: "Completed", amount: "+$235.00" },
    { id: 2, name: "Mobile App", date: "Oct 24, 2023", status: "Active", amount: "+$180.00" },
    { id: 3, name: "Dashboard Design", date: "Oct 24, 2023", status: "Completed", amount: "+$420.00" },
    { id: 4, name: "Logo Design", date: "Oct 24, 2023", status: "Cancelled", amount: "+$150.00" },
    { id: 5, name: "Blog Template", date: "Oct 24, 2023", status: "Active", amount: "+$320.00" },
]

const LineChart = ({ data, width, height }) => {
    const maxValue = Math.max(...data.map((d) => d.value))
    const points = data
        .map((d, i) => `${(i / (data.length - 1)) * width},${height - (d.value / maxValue) * height}`)
        .join(" ")

    return (
        <svg width={width} height={height}>
            <polyline fill="none" stroke="#7C3AED" strokeWidth="2" points={points} />
        </svg>
    )
}

const BarChart = ({ data, width, height }) => {
    const maxValue = Math.max(...data.map((d) => d.value))
    const barWidth = width / data.length - 4

    return (
        <svg width={width} height={height}>
            {data.map((d, i) => (
                <rect
                    key={i}
                    x={i * (width / data.length)}
                    y={height - (d.value / maxValue) * height}
                    width={barWidth}
                    height={(d.value / maxValue) * height}
                    fill="#7C3AED"
                    rx="4"
                    ry="4"
                />
            ))}
        </svg>
    )
}

export default function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="min-h-screen bg-[#F9FAFB] p-4 lg:p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-semibold text-[#111827]">Welcome back, Felip!</h1>
                    <p className="text-[#6B7280]">Track your performance and metrics</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                        <Bell className="w-5 h-5 text-[#6B7280]" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9]">
                        Upgrade Now
                    </button>
                </div>
            </div>

            {/* Main Stats Graph */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E7EB] mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-[#111827]">Statistics</h2>
                    <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
                        Last 6 months <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
                <div className="h-[200px]">
                    <LineChart data={lineData} width={800} height={200} />
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* Total Revenue */}
                <div className="bg-[#7C3AED] p-6 rounded-xl text-white">
                    <h3 className="text-lg font-medium mb-4">Total Revenue</h3>
                    <p className="text-3xl font-semibold mb-2">$45,231.89</p>
                    <p className="text-purple-200">+20.1% from last month</p>
                </div>

                {/* Subscriptions */}
                <div className="bg-[#10B981] p-6 rounded-xl text-white">
                    <h3 className="text-lg font-medium mb-4">Subscriptions</h3>
                    <p className="text-3xl font-semibold mb-2">12,234</p>
                    <p className="text-green-200">+2.1% from last month</p>
                </div>

                {/* Conversions */}
                <div className="bg-[#3B82F6] p-6 rounded-xl text-white">
                    <h3 className="text-lg font-medium mb-4">Conversions</h3>
                    <p className="text-3xl font-semibold mb-2">42.5%</p>
                    <p className="text-blue-200">+4.3% from last month</p>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] mb-6">
                <div className="p-6 border-b border-[#E5E7EB]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-[#111827]">Recent Activity</h2>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
                                <Filter className="w-4 h-4" /> Filter
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
                                <Download className="w-4 h-4" /> Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Date</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Status</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">Amount</th>
                                <th className="px-6 py-3 text-right text-sm font-medium text-[#6B7280]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5E7EB]">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className="px-6 py-4 text-sm text-[#111827] font-medium">{transaction.name}</td>
                                    <td className="px-6 py-4 text-sm text-[#6B7280]">{transaction.date}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === "Completed"
                                                ? "bg-green-100 text-green-800"
                                                : transaction.status === "Active"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#10B981] font-medium">{transaction.amount}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-[#6B7280] hover:text-[#111827]">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E7EB]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-[#111827]">Monthly Revenue</h2>
                    <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-lg text-[#6B7280] hover:bg-gray-50">
                        This Year <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
                <div className="h-[300px]">
                    <BarChart data={monthlyData} width={800} height={300} />
                </div>
            </div>
        </div>
    )
}


// DEEPSEEk
// src/Dashboard.jsx
// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white h-screen p-4">
//         <h2 className="text-lg font-semibold">Dashboard</h2>
//         <ul className="mt-6">
//           <li className="mb-2 hover:text-purple-400"><a href="#">Overview</a></li>
//           <li className="mb-2 hover:text-purple-400"><a href="#">My Listings</a></li>
//           <li className="mb-2 hover:text-purple-400"><a href="#">Manage Tenants</a></li>
//           <li className="mb-2 hover:text-purple-400"><a href="#">Reports</a></li>
//         </ul>
//       </div>

//       {/* Main Body */}
//       <div className="flex-1 p-8 bg-gray-100">
//         <h1 className="text-2xl font-bold">Welcome back, Foby!</h1>
//         <div className="mt-4 flex justify-between">
//           <button className="bg-purple-600 text-white px-4 py-2 rounded">+ Add Report</button>
//         </div>

//         {/* Statistics Overview */}
//         <div className="grid grid-cols-3 gap-4 mt-6">
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h3 className="text-xl font-semibold">Total Listings</h3>
//             <p className="text-2xl">10</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h3 className="text-xl font-semibold">Total Views</h3>
//             <p className="text-2xl">12,345</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h3 className="text-xl font-semibold">Pending Requests</h3>
//             <p className="text-2xl">5</p>
//           </div>
//         </div>

//         {/* Line Chart Placeholder */}
//         <div className="bg-white mt-6 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold">Your Listings</h3>
//           <div className="h-32 bg-gray-300 rounded mt-2">[Line Chart Placeholder]</div>
//         </div>

//         {/* My Properties Table */}
//         <div className="bg-white mt-4 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold">My Properties</h3>
//           <table className="min-w-full mt-4">
//             <thead>
//               <tr>
//                 <th className="py-2">Property</th>
//                 <th className="py-2">Rent</th>
//                 <th className="py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2">Apartment 1</td>
//                 <td className="py-2">$1,200</td>
//                 <td className="py-2">Occupied</td>
//               </tr>
//               <tr>
//                 <td className="py-2">House 2</td>
//                 <td className="py-2">$2,400</td>
//                 <td className="py-2">Available</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Side Panel */}
//       <div className="w-80 bg-gray-200 p-4">
//         <h3 className="text-lg font-semibold">Top Property</h3>
//         <div className="bg-white p-2 rounded-lg shadow mt-2">
//           <h4 className="font-bold">Rendezvous Apartment</h4>
//           <p>Rent: $3,000</p>
//           <p>Status: Available</p>
//         </div>
//         <h3 className="text-lg font-semibold mt-4">Manage Reports</h3>
//         <button className="bg-purple-600 text-white px-4 py-2 rounded mt-2">View Reports</button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;