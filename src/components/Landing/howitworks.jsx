import { User, Home, UserCheck } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="bg-[#5D3B8C] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-4xl text-white text-2xl font-semibold text-center mb-12">How King'sCourt Works?</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Buyer/Renter Card */}
          <div className="bg-[#6B45A0] rounded-xl p-6">
            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <User className="text-white h-5 w-5" />
            </div>
            <h3 className="text-white font-semibold mb-3">You a Buyer/Renter?</h3>
            <ul className="space-y-2">
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                Search for properties
              </li>
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                Schedule viewings
              </li>
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                Chat with agents
              </li>
            </ul>
          </div>

          {/* Property Owner Card */}
          <div className="bg-[#6B45A0] rounded-xl p-6">
            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Home className="text-white h-5 w-5" />
            </div>
            <h3 className="text-white font-semibold mb-3">You own a property?</h3>
            <ul className="space-y-2">
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                List property
              </li>
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                Get qualified leads
              </li>
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                No Pesky Middlemen
              </li>
            </ul>
          </div>

          {/* Realtor Card */}
          <div className="bg-[#6B45A0] rounded-xl p-6">
            <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <UserCheck className="text-white h-5 w-5" />
            </div>
            <h3 className="text-white font-semibold mb-3">You a Realtor?</h3>
            <ul className="space-y-2">
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                List properties
              </li>
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                Get direct clients
              </li>
              <li className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                Partner with developers
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div className="text-center">
            <div className="text-white text-3xl font-semibold mb-2">7.4%</div>
            <div className="text-white/60 text-sm">Property Market Rate</div>
          </div>
          <div className="text-center">
            <div className="text-white text-3xl font-semibold mb-2">3,856</div>
            <div className="text-white/60 text-sm">Properties Listed & Sold</div>
          </div>
          <div className="text-center">
            <div className="text-white text-3xl font-semibold mb-2">258</div>
            <div className="text-white/60 text-sm">Daily Completed Transactions</div>
          </div>
        </div>
      </div>
    </div>
  )
}

