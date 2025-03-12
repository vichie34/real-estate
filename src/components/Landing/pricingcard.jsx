import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-black">
      {/* Header */}
      <div className="text-center mb-12 py-5">
        <h3 className="font-semibold text-[#7C3AED]">Pricing</h3>
        <h2 className="text-3xl md:text-3xl lg:text-3xl font-semibold mt-2 mb-4">Plans that fit your scale</h2>
        <p className="text-gray-500">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="bg-white rounded-2xl p-8 border-gray-200">
          <div className="mb-8">
            <div className="flex items-align">
              <div className="text-sm text-gray-600 mb-4 mr-[190px]">Novice</div>
              <div className="text-sm text-gray-600 bg-[#f0f0f0] border border-[#7C3AED] rounded-full m- py-2 px-2">Beginner</div>
            </div>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-semibold">Free</span>
              <span className="text-gray-500 ml-2">per month</span>
            </div>
            <p className="text-gray-600 text-sm">New users, property seekers, and casual real estate enthusiasts.</p>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full py-2.5 bg-[#7C3AED] text-white rounded-md text-sm hover:bg-[#6D28D9]">
              Get started
            </button>
            <button className="w-full py-2.5 text-gray-600 border border-[#ccc] rounded-md text-sm">Chat to sales</button>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4">FEATURES</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Access to basic listings and information</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Community ratings (view only)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Basic property search filters</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-2xl p-8 border-gray-200">
          <div className="mb-8">
            <div className="text-sm text-gray-600 mb-4">Pro</div>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-semibold">$1</span>
              <span className="text-gray-500 ml-2">per month</span>
            </div>
            <p className="text-gray-600 text-sm">Individual real estate agents, small property owners.</p>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full py-2.5 bg-[#7C3AED] text-white rounded-md text-sm hover:bg-[#6D28D9]">
              Get started
            </button>
            <button className="w-full py-2.5 text-gray-600 text-sm border border-[#ccc] rounded-md hover:text-gray-900">Chat to sales</button>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4">FEATURES</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Verified listings and profile Access</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Access to detailed property insights and trends</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Basic AI-powered neighborhood analysis</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Ability to showcase properties with custom listings</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl p-8 border-gray-200">
          <div className="mb-8">
            <div className="text-sm text-gray-600 mb-4">Enterprise plan</div>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-semibold">$5</span>
              <span className="text-gray-500 ml-2">per month</span>
            </div>
            <p className="text-gray-600 text-sm">
              Larger property developers, agencies, wholesalers, and real estate firms.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full py-2.5 bg-[#7C3AED] text-white rounded-md text-sm hover:bg-[#6D28D9]">
              Get started
            </button>
            <button className="w-full py-2.5 text-gray-600 border border-[#ccc] rounded-md text-sm hover:text-gray-900">Chat to sales</button>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4">FEATURES</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>All Pro features plus advanced analytics and reporting</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Priority customer support</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>AI-powered market insights, pricing tools and detailed competitor analysis</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-[#7C3AED] shrink-0" />
                <span>Integration with CRM and other sales tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

