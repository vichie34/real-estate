import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PartnerDevelopers() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Partner With a Verified Developer</h2>
                    <p className="text-sm text-gray-500">
                        Do you own a property? Secure partnerships with verified developers for transparent projects
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-sm px-6 py-2 border border-[#ccc] text-black font-semibold rounded-md hover:bg-purple-700">Learn More</button>
                    <button className="px-4 py-1.5 bg-purple-600 bg-[#7C3AED] text-white rounded-md text-sm">Get Started</button>
                </div>
            </div>

            {/* Developer Cards */}
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                    {/* iTech */}
                    <div className="bg-white px-10 py-20 rounded-xl border-gray-200 h-[412px]">
                        <img
                            src="src/assets/Itech.png"
                            alt="iTechHomes logo"
                            className="h-[80px] mb-4"
                        />
                        <h3 className="font-semibold mb-2">iTechHomes</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            A company redefining real estate by making affordable living a reality
                        </p>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                            See portfolio →
                        </a>
                    </div>

                    {/* Landmark */}
                    <div className="bg-white px-10 py-20 rounded-xl border-gray-200 h-[412px]">
                        <img
                            src="src/assets/landmark.png"
                            alt="Landmark Africa logo"
                            className="h-[80px] mb-4"
                        />
                        <h3 className="font-semibold mb-2">Landmark Africa</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            A leading real estate and property development company with a real estate portfolio of over 130,000sqm
                            of mixed-use office, leisure and residential space for multinational and domestic companies in Nigeria.
                        </p>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                            See portfolio →
                        </a>
                    </div>

                    {/* Ace */}
                    <div className="bg-white px-10 py-20 rounded-xl h-[412px] border-gray-200">
                        <img
                            src="src/assets/ACEhome.png"
                            alt="Ace Real Estate logo"
                            className="h-[80px] mb-4"
                        />
                        <h3 className="font-semibold mb-2">Ace Real Estate</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Ace Real Estate is an award-winning and value-driven real estate development company with
                            a tripartite value system that cut across service delivery, and customer satisfaction
                        </p>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                            See portfolio →
                        </a>
                    </div>
                </div>

                {/* Navigation Buttons */}
                {/* <button
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center"
                    aria-label="Previous"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center"
                    aria-label="Next"
                >
                    <ChevronRight className="h-4 w-4" />
                </button> */}
            </div>
        </div>
    )
}

