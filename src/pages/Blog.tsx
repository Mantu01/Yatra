function Blog() {
  const blogPosts = [
    {
      title: "Top 10 Travel Destinations for 2023",
      date: "January 15, 2023",
      excerpt: "Discover the top travel destinations for 2023. From exotic beaches to bustling cities, find out where you should be heading next year.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQS6W8PYzMFhH9CMy0I22H7OD9BfU6_mKR0g&s",
    },
    {
      title: "How to Travel on a Budget",
      date: "February 10, 2023",
      excerpt: "Learn how to travel the world without breaking the bank. Our budget travel tips will help you save money while exploring new places.",
      img: "https://templates.simplified.co/thumb/f1e03da0-55bf-41be-b000-8318e2226124.jpg",
    },
    {
      title: "The Ultimate Packing Guide",
      date: "March 5, 2023",
      excerpt: "Packing for a trip can be stressful. Our ultimate packing guide will ensure you have everything you need for a smooth journey.",
      img: "https://i.pinimg.com/736x/df/11/10/df1110792bf7865c0d6dcbaa904223d3.jpg",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 gap-6"
        style={{ backgroundImage: "url(/blog.webp)" }}
      >
        {/* Background Overlay Effect using Gradient */}
        <div className="absolute w-full h-full bg-black/50 backdrop-blur-md flex flex-col justify-center items-center text-center gap-6 px-6 md:px-12 lg:px-24">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            BLOG
          </h1>
          <p className="text-lg md:text-xl max-w-xl font-serif text-white/90 leading-relaxed">
            Stay updated with the latest travel tips, guides, and stories from our travel experts. Explore our blog for inspiration and advice on your next adventure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105">
              Explore Blogs
            </button>
            <button className="border border-white text-white py-3 px-6 rounded-lg text-lg hover:bg-white hover:text-gray-800 transition-all">
              Subscribe
            </button>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-md flex gap-2 bg-white rounded-lg p-2 shadow-md">
            <input
              type="text"
              placeholder="Search for travel blogs..."
              className="w-full py-3 px-4 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* BLOG LIST SECTION */}
      <div className="min-h-screen w-full bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col justify-center items-center text-center py-16 px-6 gap-10">
        <h2 className="text-4xl font-bold text-white">LATEST POSTS</h2>
        <p className="text-lg text-gray-300">Read our latest blog posts and get inspired for your next trip.</p>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-2xl text-white hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4">
              <img src={post.img} alt={post.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <p className="text-gray-300 leading-relaxed">{post.excerpt}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 self-start">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
 