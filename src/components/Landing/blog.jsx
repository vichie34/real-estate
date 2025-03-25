export default function WhyTrust() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-[4rem]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="bg-[#ccc] text-[#4682B4] font-semibold px-1 py-2 w-[100px] mx-auto mb-[2rem] mt-[-4rem] rounded-full">Features</h2>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">Why Trust Medallion?</h2>
        <p className="text-gray-500">Discover how it simplifies your real estate journey</p>
      </div>

      {/* Illustration */}
      <div className="flex justify-center mb-16">
        <img
          src="src/assets/familyPic.png"
          alt="Family in front of house illustration"
          className="h-64 object-contain"
        />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* For Property Seekers */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">For Property Seekers</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Verified Listings</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Neighborhood Insights</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Transparent Pricing</span>
            </li>
          </ul>
        </div>

        {/* For Property Owners */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">For Property Owners</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>List property to quality leads</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Secure transactions</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Expert Support</span>
            </li>
          </ul>
        </div>

        {/* For Realtors */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">For Realtors</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Find good deals</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Profile showcase</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#302929] rounded-full"></span>
              <span>Business growth</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

