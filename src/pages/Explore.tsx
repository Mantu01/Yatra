import { FaHotel, FaUtensils, FaCar, FaMapMarkerAlt, FaRegClock, FaTags, FaCloudSun, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Explore() {

  const places = [
    { name: "Bengaluru", img: "https://i.pinimg.com/736x/a7/1c/b6/a71cb6ea0827ce6991db703bbd7dd2bd.jpg" },
    { name: "Sakleshpur", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckfkgJnEeQAlVZPIAWE-XOTOh7h19wWsgPm-_zGmSlOUldcycXvOP1Gdz34Gh0mbY4v8&usqp=CAU" },
    { name: "Nandi Hills", img: "https://i.pinimg.com/236x/47/a8/f6/47a8f6b847e0383ae9e5219c85092c06.jpg" },
    { name: "Chikmagalur", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_24J8fKaWMV3AgogGJTUkAMW1OTMArAUisQ&s" },
    { name: "Coorg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_24J8fKaWMV3AgogGJTUkAMW1OTMArAUisQ&s" },
    { name: "Mysore", img: "https://i.pinimg.com/736x/a7/1c/b6/a71cb6ea0827ce6991db703bbd7dd2bd.jpg" }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="w-full h-[90vh] bg-cover bg-center flex flex-col pl-[10%] justify-center gap-10 " style={{ backgroundImage: "url(sun.jpg)" }}>
        <p className="uppercase tracking-widest text-gray-300">4 Nights - 5 Days</p>
        <h1 className="text-5xl font-bold mt-2">Karnataka</h1>
        <p className="text-lg mt-4 max-w-xl text-gray-300">
          "Karnataka is a prosperous, compelling state loaded with a winning blend of urban cool, glittering palaces, national parks, ancient ruins, beaches, yoga centres, and legendary travelers' hang-outs."
        </p>
        <h2 className="mt-6 text-3xl font-semibold">
          Rs. <span className="text-yellow-400">17,999</span> <span className="text-lg font-normal">Per Person | Min 06 Pax</span>
        </h2>
      </div>
      <div className="bg-gray-900 text-white py-10 px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Tourist Place Details</h2>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/a7/1c/b6/a71cb6ea0827ce6991db703bbd7dd2bd.jpg"
            alt="Bengaluru"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold">Bengaluru</h3>
            <p className="text-gray-400 text-sm mt-1">"The Garden City of India"</p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center">
                <FaMapMarkerAlt className="text-3xl text-yellow-400" />
                <p className="mt-2 text-gray-300">Location</p>
                <p className="font-semibold">Karnataka, India</p>
              </div>
              <div className="flex flex-col items-center">
                <FaRegClock className="text-3xl text-yellow-400" />
                <p className="mt-2 text-gray-300">Duration</p>
                <p className="font-semibold">4 Nights, 5 Days</p>
              </div>
              <div className="flex flex-col items-center">
                <FaTags className="text-3xl text-yellow-400" />
                <p className="mt-2 text-gray-300">Price</p>
                <p className="font-semibold">₹17,999 / person</p>
              </div>
              <div className="flex flex-col items-center">
                <FaHotel className="text-3xl text-yellow-400" />
                <p className="mt-2 text-gray-300">Stay at</p>
                <p className="font-semibold">3 Star Hotel</p>
              </div>
              <div className="flex flex-col items-center">
                <FaUtensils className="text-3xl text-yellow-400" />
                <p className="mt-2 text-gray-300">Meals</p>
                <p className="font-semibold">Daily Breakfast</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCar className="text-3xl text-yellow-400" />
                <p className="mt-2 text-gray-300">Transport</p>
                <p className="font-semibold">Private Transfers</p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-300">
              Bengaluru is known for its vibrant culture, IT hub, and pleasant weather. 
              Explore historical sites, gardens, and the famous nightlife.
            </p>

            {/* Weather Info */}
            <div className="flex justify-center items-center mt-6">
              <FaCloudSun className="text-yellow-400 mr-2" />
              <span className="text-gray-300">27°C</span>
            </div>

            {/* Reviews */}
            <div className="flex justify-center items-center mt-2">
              <FaStar className="text-yellow-400 mr-2" />
              <span className="text-gray-300">4.5/5 Reviews</span>
            </div>

            {/* Button */}
            <div className="mt-6 text-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-[10%] bg-gray-900 text-white relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:scale-105 transition-transform">
                <img src={place.img} alt={place.name} className="w-full h-56 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{place.name}</h3>
                  <div className="flex justify-center items-center mt-2">
                    <FaCloudSun className="text-yellow-400 mr-2" />
                    <span className="text-gray-300">27°C</span>
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <FaStar className="text-yellow-400 mr-2" />
                    <span className="text-gray-300">4.5/5 Reviews</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev custom-swiper-button-prev"></div>
        <div className="swiper-button-next custom-swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Explore;
