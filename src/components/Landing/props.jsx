import { BedDouble, Bath, Move, ArrowUpRight } from "lucide-react"

export default function Property() {
  const properties = [
    {
      id: 1,
      type: "DUPLEX IN LEKKI 1",
      title: "3 Bedroom Duplex",
      price: "850M",
      details: {
        beds: 3,
        baths: 2,
        area: "648 m²",
      },
      image:"src/assets/Image.png",
      agent: {
        name: "Realtor Simi",
        deals: "10 CLOSED DEALS",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: 2,
      type: "APARTMENT IN IKOJI",
      title: "2 Bedroom Apartment",
      price: "200M",
      details: {
        beds: 2,
        baths: 2,
        area: "648 m²",
      },
      image: "src/assets/Image (1).png",
      agent: {
        name: "iKRRealty",
        deals: "15 CLOSED DEALS",
        avatar: "src/assets/Avatar23.png",
      },
    },
    {
      id: 3,
      type: "APARTMENT IN IKOYI",
      title: "5 Bedroom Apartment",
      price: "450M",
      details: {
        beds: 5,
        baths: 2,
        area: "648 m²",
      },
      image:"src/assets/Image (2).png",
      agent: {
        name: "Caroline Properties",
        deals: "4 CLOSED DEALS",
        avatar: "src/assets/Avatar.png",
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="group bg-white rounded-xl overflow-hidden border-gray-200">
          {/* Property Image */}
          <div className="relative h-48">
            <img
              src={property.image || property.agent.avatar}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Property Details */}
          <div className="p-4">
            {/* Type and Title */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase mb-1">{property.type}</p>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <span className="text-sm font-medium">{property.price}</span>
              </div>
            </div>

            {/* Features */}
            <div className="flex gap-4 text-gray-600 text-sm mb-4">
              <div className="flex items-center gap-1">
                <BedDouble className="h-4 w-4" />
                <span>{property.details.beds} Bedrooms</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.details.baths} Bathrooms</span>
              </div>
              <div className="flex items-center gap-1">
                <Move className="h-4 w-4" />
                <span>{property.details.area}</span>
              </div>
            </div>

            {/* Agent Info */}
            <div className="flex items-center gap-2 pt-4 border-t">
              <img
                src={property.agent.avatar || "/placeholder.svg"}
                alt={property.agent.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{property.agent.name}</p>
                <p className="text-xs text-gray-500">{property.agent.deals}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

