import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Registration data:', formData);
    
    setTimeout(() => {
      setIsLoading(false);
      alert('Registration successful!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center p-4 relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 opacity-20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-300 opacity-30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white opacity-15 rounded-full animate-pulse"></div>

      <div className="w-full max-w-6xl flex items-center justify-between">
        
        {/* Left Side - Registration Form */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white border-opacity-20 hover:bg-opacity-30 transition-all duration-300">
          
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Create Account
            </h1>
            <p className="text-gray-700 text-sm font-medium">Begin your wellness journey today</p>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-2xl bg-white bg-opacity-50 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:bg-opacity-70 transition-all duration-300 shadow-lg hover:bg-opacity-60"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-2xl bg-white bg-opacity-50 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:bg-opacity-70 transition-all duration-300 shadow-lg hover:bg-opacity-60"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Creating Account...
                </div>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-gray-700 text-sm">
              Already have an account?{' '}
              <a 
                href="#" 
                className="text-pink-600 font-bold hover:text-pink-700 transition-colors duration-200 hover:underline"
              >
                Login here
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Brain Illustration */}
        <div className="hidden lg:flex items-center justify-center w-full max-w-md">
          <div className="relative">
            
            {/* Main Head/Brain Container */}
            <div className="w-80 h-96 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full relative shadow-2xl">
              
              {/* Brain Center */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-20 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full relative shadow-xl">
                  
                  {/* Brain Details */}
                  <div className="absolute top-2 left-4 w-16 h-12 bg-pink-800 rounded-full opacity-60"></div>
                  <div className="absolute top-4 right-6 w-12 h-8 bg-pink-900 rounded-full opacity-40"></div>
                  <div className="absolute bottom-2 left-6 w-8 h-6 bg-pink-900 rounded-full opacity-50"></div>
                  
                  {/* Meditation Arms */}
                  <div className="absolute -left-10 top-4 w-8 h-16 bg-pink-700 rounded-full transform rotate-45 shadow-lg"></div>
                  <div className="absolute -right-10 top-4 w-8 h-16 bg-pink-700 rounded-full transform -rotate-45 shadow-lg"></div>
                </div>
              </div>

              {/* Floating Achievement Icons */}
              <div className="absolute top-16 left-12 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <span className="text-white text-xl font-bold">⭐</span>
              </div>
              
              <div className="absolute top-12 right-16 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <span className="text-white text-xl font-bold">💰</span>
              </div>
              
              <div className="absolute top-40 left-8 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              
              <div className="absolute top-36 right-12 w-14 h-14 bg-gradient-to-br from-red-400 to-pink-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <span className="text-white text-xl font-bold">♥</span>
              </div>

              {/* Additional Wellness Icons */}
              <div className="absolute bottom-20 left-16 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-lg">🧠</span>
              </div>
              
              <div className="absolute bottom-16 right-20 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-lg">🎯</span>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-white to-pink-200 rounded-full opacity-80 shadow-lg animate-bounce"></div>
            <div className="absolute top-20 -right-8 w-8 h-8 bg-gradient-to-br from-purple-200 to-white rounded-full opacity-70 shadow-md animate-pulse"></div>
            <div className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-pink-100 to-white rounded-full opacity-60 shadow-lg animate-bounce"></div>
            <div className="absolute bottom-32 -right-4 w-6 h-6 bg-white rounded-full opacity-50 shadow-sm animate-pulse"></div>
            
            {/* Orbital Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-pink-300 border-opacity-30 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;