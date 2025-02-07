import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Signup() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-blue-900 p-6">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500 duration-1000 border border-white/20">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <FaUserCircle className="text-white text-4xl" />
          </div>
        </div>
        <form>
          <div className="mb-4">
            <input
              className="w-full py-3 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full py-3 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full py-3 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Your Password"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full py-3 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            type="submit"
          >
            SIGN UP
          </button>
        </form>
        <div className="mt-4 text-center text-gray-300">
          <p>
            Already have an account?{' '}
            <NavLink to="/login" className="text-blue-400 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
