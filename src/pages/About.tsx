function About() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url(/travel.jpg)" }}
        className="h-screen w-full flex flex-col justify-center items-start bg-cover bg-center text-left px-6 md:px-12 lg:px-24"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
          ABOUT US
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-lg font-serif text-white/90 leading-relaxed">
          Welcome to Travel Time! We are dedicated to helping you explore the world and discover new adventures. Our team of experienced travel experts is here to provide you with the best travel experiences and unforgettable memories.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="min-h-screen w-full bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col justify-center items-center text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-white mb-4">OUR STORY</h2>
        <p className="text-lg text-gray-300 mb-10">Discover how we started and what drives us.</p>
        <div className="max-w-4xl bg-gray-700 p-8 rounded-lg shadow-2xl text-white">
          <p className="text-lg mb-4 leading-relaxed">
            Whether you're looking for a relaxing beach vacation, an exciting city tour, or an adventurous hiking trip, we have something for everyone. Our carefully curated travel packages are designed to meet your needs and exceed your expectations.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Join us on a journey to explore the beauty and diversity of our planet. Let's create memories that will last a lifetime!
          </p>
        </div>
      </div>

      {/* Discover Section */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Discover Your World with Travel Time
          </h2>
          <p className="text-gray-300 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            We are passionate about creating unforgettable travel experiences. Our team of expert travel planners is dedicated to crafting personalized itineraries that cater to your unique interests and budget. Whether you dream of exploring exotic destinations, relaxing on pristine beaches, or embarking on thrilling adventures, we'll make your travel dreams a reality.
          </p>

          {/* Image Gallery */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3].map((item) => (
              <img
                key={item}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa23kRkcD2tL0KIvrmmFpuBhZ24C4hpmROUQ&s`}
                alt={`Destination ${item}`}
                className="w-full sm:w-1/2 md:w-1/3 h-48 md:h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Travel Packages */}
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Explore Our Travel Packages
          </h3>
          <p className="text-gray-300 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            From romantic getaways to family vacations and solo adventures, we offer a wide range of curated travel packages to suit every traveler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Adventure Tours", price: "$500+" },
              { title: "Beach Resorts", price: "$800+" },
              { title: "Cultural Experiences", price: "$400+" },
            ].map((Pac, index) => (
              <div
                key={index}
                className="bg-gray-600 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{Pac.title}</h4>
                <p className="text-gray-300">{Pac.price}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Testimonials</h3>
            <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto">
              <p className="text-gray-300 italic leading-relaxed">
                "The trip of a lifetime! Travel Time made our dream vacation a reality." - John & Jane Doe
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;