const BrandCard = () => {
    return (
        <div className="flex justify-center mt-10 gap-4">
            <div className="relative w-80 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/profile-image.jpg" alt="Coach Kaothar" className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <div className="flex items-center space-x-1 mb-2">
                        {Array(5).fill(0).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold">Coach Kaothar</h3>
                    <p className="text-sm">Hibuh Realty</p>
                    <p className="text-xs">Top 1% in Lead</p>
                </div>
            </div>

            <div className="relative w-80 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/profile-image.jpg" alt="Coach Kaothar" className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <div className="flex items-center space-x-1 mb-2">
                        {Array(5).fill(0).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold">Thomas King</h3>
                    <p className="text-sm">Stellarastral</p>
                    <p className="text-xs">Client Favourite</p>
                </div>
            </div>

            <div className="relative w-80 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/profile-image.jpg" alt="Coach Kaothar" className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <div className="flex items-center space-x-1 mb-2">
                        {Array(5).fill(0).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold">Kafayat Toyosi</h3>
                    <p className="text-sm">Khealer Realty</p>
                    <p className="text-xs">Verified by Brooch</p>
                </div>
            </div>

            <div className="relative w-80 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/profile-image.jpg" alt="Coach Kaothar" className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <div className="flex items-center space-x-1 mb-2">
                        {Array(5).fill(0).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold">Kafayat Toyosi</h3>
                    <p className="text-sm">Khealer Realty</p>
                    <p className="text-xs">Verified by Brooch</p>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;