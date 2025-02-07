function UserProfile() {
  return (
    <div className="min-h-screen bg-black text-white p-6 pt-28">

      <section className="flex flex-col md:flex-row items-center text-center md:text-left py-10 gap-6">
        <img src="a.jpg" className="h-40 w-40 rounded-full border-4 border-blue-500" alt="User Profile" />
        <div>
          <h2 className="text-4xl font-bold">John Doe</h2>
          <p className="text-blue-300">Travel Enthusiast & Adventure Seeker</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition">Edit Profile</button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Best Offers</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>20% off on Europe Packages</li>
            <li>Buy 1 Get 1 Free on Maldives Trip</li>
            <li>Special Discount on Cruise Packages</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Top Destinations</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Paris, France</li>
            <li>Tokyo, Japan</li>
            <li>Bali, Indonesia</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Travel History</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>New York City, USA - 2022</li>
            <li>Rome, Italy - 2021</li>
            <li>Sydney, Australia - 2020</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Upcoming Trips</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Dubai, UAE - March 2025</li>
            <li>Barcelona, Spain - June 2025</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Travel Preferences</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Beach Destinations</li>
            <li>Adventure Sports</li>
            <li>Luxury Stays</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Recent Reviews</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>"Amazing trip to Paris!" - ★★★★★</li>
            <li>"Loved the Maldives package!" - ★★★★☆</li>
            <li>"Great cruise experience!" - ★★★★★</li>
          </ul>
        </div>
      </section>

      <footer className="text-center text-gray-400 py-4 border-t border-gray-700 mt-8">
        © 2025 Travel Explorer. All rights reserved.
      </footer>
    </div>
  );
}

export default UserProfile;
