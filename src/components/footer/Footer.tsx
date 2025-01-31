function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold">Travel Time</h2>
            <p className="text-gray-400 mt-2">
              Explore the world with us. Discover amazing destinations, experiences, and adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition">Tours</a></li>
              <li><a href="#" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">123 Travel Street, Adventure City</p>
            <p className="text-gray-400">Email: info@traveltime.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Travel Time. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
