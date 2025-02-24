import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import authService from '../firebase/authService';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { getLogin } from '../features/userSlice';

interface LoginParams {
  email: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<LoginParams>({
    email: '',
    password: '',
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(getLogin(formData));
    if (getLogin.fulfilled.match(result)) {
      navigate('/packages');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-blue-900 p-6">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg shadow-blue-500/50 border border-white/20 hover:shadow-blue-500 duration-1000">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <FaUserCircle className="text-white text-4xl" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full py-3 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full py-3 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <NavLink to="/forgot-password" className="hover:underline">
              Forgot Password?
            </NavLink>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 cursor-pointer"
            type="submit"
          >
            LOGIN
          </button>
          <button
            onClick={() => authService.signInWithGoogle()}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 rounded-lg transition duration-300 mt-4 flex items-center justify-center border border-gray-300 shadow-sm cursor-pointer"
            type="button"
          >
            <FcGoogle className="mr-2 text-xl" /> Login with Google
          </button>
        </form>
        <div className="mt-4 text-center text-gray-300">
          <p>
            Don't have an account?{' '}
            <NavLink to="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;