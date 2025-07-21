import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Add your registration logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between">
        
        {/* Left Side - Registration Form */}
        <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-3xl p-8 w-full max-w-md shadow-xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600 text-sm">Begin your wellness journey today</p>
          </div>

          <div className="space-y-6">
            {/* Username Field */}
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-0 bg-white bg-opacity-50 placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-70 transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-0 bg-white bg-opacity-50 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-70 transition-all"
              />
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <a href="#" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                Login here
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex items-center justify-center w-full max-w-md">
          <div className="relative">
            {/* Head Silhouette */}
            <div className="w-80 h-96 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full relative shadow-2xl">
              
              {/* Brain */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-20 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full relative shadow-lg">
                  {/* Brain details */}
                  <div className="absolute top-2 left-4 w-16 h-12 bg-pink-800 rounded-full opacity-60"></div>
                  <div className="absolute top-4 right-6 w-12 h-8 bg-pink-800 rounded-full opacity-40"></div>
                  
                  {/* Meditation pose arms */}
                  <div className="absolute -left-8 top-6 w-6 h-12 bg-pink-700 rounded-full transform rotate-45"></div>
                  <div className="absolute -right-8 top-6 w-6 h-12 bg-pink-700 rounded-full transform -rotate-45"></div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-16 left-12 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-xl">⭐</span>
              </div>
              
              <div className="absolute top-12 right-16 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <span className="text-white text-xl">$</span>
              </div>
              
              <div className="absolute top-40 left-8 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <span className="text-white text-xl">✓</span>
              </div>
              
              <div className="absolute top-36 right-12 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                <span className="text-white text-xl">♥</span>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-20 -right-6 w-6 h-6 bg-white rounded-full opacity-50"></div>
            <div className="absolute bottom-10 -left-8 w-10 h-10 bg-white rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;