import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BrandCard from './brandid'

export default function PersonalBrand() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const profiles = [
        {
            name: 'Coach Kanthar',
            role: 'Real Estate Coach',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-npgaUhYMivOkm5xPvipOkKMqXejwn6.png'
        },
        {
            name: 'Thomas King',
            role: 'Lead Agent',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-npgaUhYMivOkm5xPvipOkKMqXejwn6.png'
        },
        {
            name: 'Kafayat Toyosi',
            role: 'Property Agent',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-npgaUhYMivOkm5xPvipOkKMqXejwn6.png'
        },
        {
            name: 'Kodak Smith',
            role: 'Property Manager',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-npgaUhYMivOkm5xPvipOkKMqXejwn6.png'
        }
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Build Your Personal Brand</h2>
                    <p className="text-gray-500">Showcase your listings, attract clients, and stand out in the market</p>
                </div>
                <div className="">
                    <button className="px-3 mr-3 py-2 border border-[#ccc] font-semibold text-black rounded-md text-sm hover:bg-[#]">
                        Learn More
                    </button>
                    <button className="px-6 py-2 bg-[#4682B4] text-white rounded-md text-sm hover:bg-purple-700">
                        Sign Up
                    </button>
                </div>
            </div>
            <BrandCard/>
            {/* Carousel */}
            {/* <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                className="w-full min-w-[300px] px-2 md:w-1/2 lg:w-1/3 flex-shrink-0"
                            >
                                <div className="relative h-[400px] rounded-xl overflow-hidden group">
                                    <img
                                        src={profile.image || "/placeholder.svg"}
                                        alt={profile.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <h3 className="text-xl font-semibold mb-1">{profile.name}</h3>
                                        <p className="text-gray-200">{profile.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons *}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div> */}
        </div>
    )
}

