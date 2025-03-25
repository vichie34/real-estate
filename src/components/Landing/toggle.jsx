"use client"

import { useState } from "react"
import { Home, Building2, Wallet } from "lucide-react"

export default function ToggleControl() {
  const [selected, setSelected] = useState("Rent")

  return (
    <div className="inline-flex bg-[#c6c6ca] p-2 rounded-md gap-1">
      <button
        onClick={() => setSelected("Rent")}
        className={`flex items-center gap-2 px-4 py-1.5 text-sm rounded-md transition-colors ${
          selected === "Rent" ? "bg-white text-[#4682B4] shadow-sm" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <Home className="h-4 w-4" />
        Rent
      </button>
      <button
        onClick={() => setSelected("Buy")}
        className={`flex items-center gap-2 px-4 py-1.5 text-sm rounded-md transition-colors ${
          selected === "Buy" ? "bg-white text-[#4682B4] shadow-sm" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <Building2 className="h-4 w-4" />
        Buy
      </button>
      <button
        onClick={() => setSelected("Sell")}
        className={`flex items-center gap-2 px-4 py-1.5 text-sm rounded-md transition-colors ${
          selected === "Sell" ? "bg-white text-[#4682B4] shadow-sm" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <Wallet className="h-4 w-4" />
        Sell
      </button>
    </div>
  )
}

