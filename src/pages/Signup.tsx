import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import authService from '../firebase/authService';
import { useDispatch } from 'react-redux';
import { getSignUp } from '../features/userSlice';
import { AppDispatch } from '../store/store';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface CreateAccountParams {
  email: string;
  password: string;
  name: string;
  imgUrl?: string;
  phone?: string;
}

function Signup() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match!");
    }
    const temp: CreateAccountParams = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    const result = await dispatch(getSignUp(temp));
    if (getSignUp.fulfilled.match(result)) {
      navigate('/packages');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 p-4">
      <div className="w-full max-w-sm md:max-w-4xl bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500 duration-1000 border border-white/20 md:grid md:grid-cols-2 md:gap-4">
        <div className="hidden md:flex flex-col justify-center items-center text-white">
          <FaUserCircle className="text-6xl mb-4" />
          <h2 className="text-2xl font-bold">Welcome to Yatra</h2>
          <p className="text-center text-gray-300 mt-2">Join us today to get started!</p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            className="w-full py-2 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full py-2 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full py-2 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            className="w-full py-2 px-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-300 cursor-pointer"
            type="submit"
          >
            SIGN UP
          </button>

          <button
            onClick={() => authService.signInWithGoogle()}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 rounded-lg transition duration-300 flex items-center justify-center border border-gray-300 shadow-sm cursor-pointer"
            type="button"
          >
            <FcGoogle className="mr-2 text-xl" /> Sign Up with Google
          </button>
        </form>

        <div className="text-center text-gray-300 mt-2 md:col-span-2">
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
