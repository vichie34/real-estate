import { Search, BedDouble, Bath, ArrowRight } from "lucide-react"
import ToggleControl from "./toggle"
import Property from "./props"

export default function PropertyListings() {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-3 py-[8rem]">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h4 className="text-[#5D3B8C] font-semibold">Your Preference</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-1">Lastest Listings</h2>
          <p className="text-gray-500 text-sm">Based on your recent searches</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <ToggleControl />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform text-[#5D3B8C] -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md bg-white border border-[#ccc] text-sm focus:outline-none"
            />
          </div>
        </div>

        <Property />

        {/* View More Button */}
        <div className="text-center">
          <button className="px-6 py-2 bg-[#7C3AED] text-white mx-12 mt-[8rem] rounded-md text-sm hover:bg-purple-700">
            View more
          </button>
        </div>
      </div>
    </div>
  )
}

// text- bg-white"

