import { useState } from 'react';

function Packages() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [maxPrice, setMaxPrice] = useState(5000);

  return (
    <>
      <div
      style={{ backgroundImage: "url(/ocean.jpg)" }}
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center pt-24 p-10"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-2/3 md:w-1/2 lg:w-1/3"> {/* Added a container for the form */}
        <h2 className="text-2xl font-bold mb-4 text-center">OUR PACKAGES</h2>
        <h3 className="text-xl font-semibold mb-4 text-center">Search your Holiday</h3>

        <div className="mb-4">
          <label htmlFor="destination" className="block font-medium mb-2">Select Your Destination:</label>
          <input
            type="text"
            id="destination"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="All Destinations"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block font-medium mb-2">Select Your Date:</label>
          <input
            type="date" // Changed to date input
            id="date"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="maxPrice" className="block font-medium mb-2">Max Price: ${maxPrice}</label> {/* Displaying current value */}
          <input
            type="range" // Changed to range input
            id="maxPrice"
            className="w-full"
            min="0"
            max="10000" // Adjust the maximum as needed
            step="100" // Adjust the step as needed
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))} // Parse to integer
          />
          <div className="text-center text-gray-500 mt-2">${maxPrice}</div> {/* Displaying current value */}
        </div>

        <div className="text-center"> {/* Center the button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
            MORE FILTERS
          </button>
        </div>
      </div>

      {/* Added a container for the results (initially hidden) */}
      <div className="bg-white p-8 rounded-lg shadow-md w-2/3 md:w-1/2 lg:w-1/3 mt-8"> 
        <div className="flex justify-between mb-4">
          <span className="font-semibold">PRICE</span>
          <span className="font-semibold">NAME</span>
        </div>
        {/* Add your package results here */}
        <p className="text-center text-gray-500">No packages available yet.</p> 
      </div>
      </div>
    </>
  );
}

export default Packages;