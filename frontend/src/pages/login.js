// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser(formData);
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to homepage after login
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page flex justify-center items-center min-h-screen bg-gray-100">
      <div className="login-container bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
        <p className="text-center text-gray-600 mt-2">Sign in to access your collection and community features.</p>

        {error && <div className="bg-red-100 text-red-700 p-4 rounded mt-4">{error}</div>}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="artist@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              minLength="6"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
            />
          </div>

          <div className="options flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white px-4 py-2 rounded">
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="divider text-center my-6">
          <span className="text-gray-500">or</span>
        </div>

        <div className="social-login flex flex-col gap-4">
          <button className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded">
            <img src="/icons/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
            Continue with Facebook
          </button>
        </div>

        <div className="signup-link text-center mt-6">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;