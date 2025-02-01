import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Packages() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);

  const packages = [
    { id: 1, name: "Koh Samui", location: "Europe", tags: ["CULTURAL", "RELAX"], price: 700, img: "https://content.r9cdn.net/rimg/dimg/75/a7/44202281-city-56280-1767207b463.jpg?crop=true&width=1020&height=498", reviews: 4.5 },
    { id: 2, name: "Bora Bora", location: "Asia", tags: ["HISTORY", "CULTURAL"], price: 500, oldPrice: 1000, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=1400&h=500&s=1", reviews: 4.8 },
    { id: 3, name: "Maldives", location: "Oceania", tags: ["SPORT", "RELAX"], price: 400, img: "https://maldivesfinest.com/wp-content/uploads/2017/02/velaa-banner2.jpg", reviews: 4.7 },
    { id: 4, name: "Phuket", location: "Thailandia", tags: ["RELAX", "CULTURAL"], price: 1200, img: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2023/05/18163914/16-Best-Beaches-in-Phuket-Thailand-2-870x400.jpg", reviews: 4.6 },
    { id: 5, name: "Seychelles", location: "Netherlands", tags: ["HISTORY", "SPORT"], price: 1500, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/42/seychelles.jpg?w=1400&h=500&s=1", reviews: 4.9 },
    { id: 6, name: "Hawaii", location: "Italy", tags: ["RELAX", "SPORT"], price: 950, img: "https://www.celebritycruises.com/blog/content/uploads/2024/03/best-beaches-in-honolulu-waiki%CC%84ki%CC%84-beach-hero-1600x890.jpg", reviews: 4.4 },
  ];

  return (
    <>
      {/* Background & Form */}
      <div
        style={{ backgroundImage: "url(/ocean.jpg)" }}
        className="h-[80vh] w-full bg-cover bg-center flex flex-col items-center justify-end pb-[3%] gap-10"
      >
        <div className="w-full max-w-3xl text-center text-white">
          <p className="uppercase text-sm tracking-wide">OUR PACKAGES</p>
          <h2 className="text-4xl font-light">
            Search your <span className="font-bold text-white">Holiday</span>
          </h2>
        </div>

        {/* Form Box */}
        <div className="backdrop-blur-sm rounded-xl border-2 border-black/20 shadow-lg w-[60vw] h-[44vh] pt-[3%] px-[5%] md:px[8%] ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Select Destination:</label>
              <input
                type="text"
                placeholder="All Destinations"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Select Date:</label>
              <input
                type="date"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Max Price: ${maxPrice}</label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                className="w-full cursor-pointer"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
              <div className="text-center text-gray-600 mt-1">${maxPrice}</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-80 text-white font-bold py-2 px-6 rounded-lg transition-all">
              MORE FILTERS
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full py-12 px-6 bg-black/20">
        <h2 className="text-3xl font-semibold mb-6">Available Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5">
        {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="shadow-lg border border-black/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 backdrop-blur-2xl"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={pkg.img}
              alt={pkg.name}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-lg">
              {pkg.duration}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800">{pkg.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{pkg.location}</p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {pkg.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price & Reviews */}
            <div className="flex justify-between items-center w-full mt-5">
              {/* Price */}
              <div>
                {pkg.oldPrice && (
                  <span className="text-gray-400 text-sm line-through mr-2">
                    ${pkg.oldPrice}
                  </span>
                )}
                <span className="text-xl font-bold text-gray-800">
                  ${pkg.price}
                </span>
              </div>

              {/* Reviews */}
              <div className="flex items-center">
                <FaStar className="text-yellow-500 text-lg" />
                <span className="ml-1 text-gray-600">{pkg.reviews} Ratings</span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all active:scale-95">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
      </div>
    </>
  );
}

export default Packages;
