import { useState } from "react";

 const PropertyFilter = () => {
  const [selectedTab, setSelectedTab] = useState("Rent");

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-2xl mx-auto my-4 item-center">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        {["Rent", "Buy", "Sell"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 text-lg font-medium ${
              selectedTab === tab ? "border-b-4 border-[#7C3AED] text-[#7C3AED]" : "text-black"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
        {/* Location */}
        <div className="flex flex-col">
          <label className="text-[#2b2929] text-sm">Location:</label>
          <select className="border rounded-md px-3 py-2">
            <option>Ikeja, Lagos</option>
          </select>
        </div>

        {/* Property Type */}
        <div className="flex flex-col">
          <label className="text-[#2b2929] text-sm">Property Type:</label>
          <select className="border rounded-md px-3 py-2">
            <option>2 Bedroom</option>
            <option>4 Bedroom</option>
          </select>
        </div>

        {/* Browse Button */}
        <button className="bg-[#7C3AED] text-white px-4 py-2 rounded-md">
          Browse Properties
        </button>
      </div>
    </div>
  );
}
export default PropertyFilter