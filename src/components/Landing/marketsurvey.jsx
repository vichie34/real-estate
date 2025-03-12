export default function MarketInsights() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold">Know the Market Before You <br /> Move.</h2>
            <p className="text-sm text-gray-500">
              Get real time insights on your preferred market and use it to your advantage.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm px-6 py-2 border border-[#ccc] text-black font-semibold rounded-md text-sm hover:bg-purple-700">Learn More</button>
            <button className="px-4 py-1.5 bg-[#7C3AED] text-white rounded-md text-sm">Get Started</button>
          </div>
        </div>
  
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Neighbourhood Guides */}
          <div className="space-y-4">
            <img
              src="src/assets/Frame 4.png"
              alt="Neighbourhood Guides Interface"
              className="w-full rounded-lg"
            />
            <div>
              <h3 className="text-2xl md:text-2xl lg:text-2xl font-semibold mb-1">Neighbourhood Guides</h3>
              <p className="text-sm text-gray-600 mb-3">Get to understand a neighborhood before making your move.</p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Learn →
              </a>
            </div>
          </div>
  
          {/* Price Trends */}
          <div className="space-y-4">
            <img
              src="src/assets/Frame 4 (1).png"
              alt="Price Trends Graph"
              className="w-full rounded-lg"
            />
            <div>
              <h3 className="text-2xl md:text-2xl lg:text-2xl font-semibold mb-1">Price trends and graphs</h3>
              <p className="text-sm text-gray-600 mb-3">
                See where property prices are headed towards to make an ideal decision.
              </p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Learn →
              </a>
            </div>
          </div>
  
          {/* Local Insights */}
          <div className="space-y-4">
            <img
              src="src/assets/Frame 4 (2).png"
              alt="Local Insights Analytics"
              className="w-full rounded-lg"
            />
            <div>
              <h3 className="text-2xl md:text-2xl lg:text-2xl font-semibold mb-1">Local insights</h3>
              <p className="text-sm text-gray-600 mb-3">Get to see the best deals in your chosen location.</p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Learn →
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  