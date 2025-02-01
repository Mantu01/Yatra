

function Home() {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url(/a.jpg)" }}
        className="h-screen w-full flex flex-col justify-center items-start bg-cover bg-center text-left pl-[8%]"
      >
        <h1 className="text-6xl md:text-8xl font-bold">TRAVEL TIME</h1>
        <p className="text-lg md:text-xl mt-4 max-w-lg font-serif">
          Don’t let the loud noise scare you. <br />
          Let the rhythms of the dance amuse you. <br />
          You are given a very rare chance. <br />
          Feel the movement of our ancestors.
        </p>

        {/* Bottom Details Section */}
        <div className=" bottom-10 left-10 flex justify-center w-full gap-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="max-w-xs">
              <p className="text-sm opacity-70">There will be a small title here.</p>
              <p className="text-xs opacity-50">A couple of sentences of text</p>
              <button className="mt-2 text-sm flex items-center gap-2 hover:underline">
                MORE DETAILED →
              </button>
            </div>
          ))}
        </div>

        {/* Numbered Navigation */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-xl">
          {[1, 2, 3, 4, 5].map((num) => (
            <p
              key={num}
              className={`mb-2 ${num === 3 ? "text-white font-bold" : "text-gray-400"}`}
            >
              {num < 10 ? `0${num}` : num}
            </p>
          ))}
        </div>
      </div>

      {/* Updated Info Section */}
      <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center text-center p-10">
        <h2 className="text-4xl font-bold mb-2">POPULAR TOURS</h2>
        <p className="text-lg mb-10">There will be a small title here.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[5%]">
          {[
            { title: "TOUR 1", img: "https://i.pinimg.com/236x/43/1f/04/431f049a588e4be7482f86923969e0c1.jpg" },
            { title: "TOUR 2", img: "https://i.pinimg.com/236x/aa/48/ae/aa48aee39a7a9e2b8456c7f909a93149.jpg" },
            { title: "TOUR 3", img: "https://i.pinimg.com/736x/e0/db/6a/e0db6a92c0927aebdeb8236587596470.jpg" },
            { title: "TOUR 4", img: "https://i.pinimg.com/236x/40/cf/1a/40cf1ac3db374b033c4bb2384ae620b1.jpg" },
          ].map((tour, i) => (
            <div
              key={i}
              className="relative w-52 h-64 rounded-lg overflow-hidden group bg-green-500 bg-cover bg-center"
              style={{
                backgroundImage: `url(${tour.img})`
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold">{tour.title}</h3>
                <p className="text-sm opacity-75">There will be a small.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen w-full flex items-center bg-cover bg-center" style={{ backgroundImage: "url(/trees.jpg)" }}>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-white space-y-6">
  {/* Title Section */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
    DISCOVER THE WORLD IN A NEW WAY
  </h2>

  {/* Watch Video Button */}
  <div className="flex items-center justify-center md:justify-start gap-3">
    <button className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full text-xl">
      ▶
    </button>
    <span className="text-lg font-medium">WATCH THE VIDEO</span>
  </div>

  {/* Quote */}
  <div className="text-center md:text-left space-y-2">
    <p className="text-gray-300 italic">
      "Attachment to things and comfort is the main obstacle to an interesting life..."
    </p>
    <p className="text-gray-400">© Carlos Castaneda</p>
  </div>

  {/* Video Previews */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {[
      "/a.jpg",
      "https://i.pinimg.com/236x/aa/48/ae/aa48aee39a7a9e2b8456c7f909a93149.jpg"
    ].map((img, index) => (
      <div key={index} className="w-[20vw] h-[20vw] rounded-lg overflow-hidden group shadow-lg">
        <img src={img} alt={`Preview ${index + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
        <div className="flex items-center justify-center mt-3">
          <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl">
            ▶
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
    </main>
  );
}

export default Home;
