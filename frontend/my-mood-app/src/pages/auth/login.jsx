import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Login data:', formData);
    
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful! Welcome to your wellness journey!');
    }, 2000);
  };

  return (
    <div className="login-container">
      {/* Background Decorative Elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      <div className="decorative-circle circle-4"></div>

      <div className="login-content">
        {/* Login Form */}
        <div className="login-form">
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Continue your wellness journey</p>
            <div className="header-divider"></div>
          </div>

          <form onSubmit={handleSubmit} className="form-fields">
            {/* Username Field */}
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username or Email"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                  Logging in...
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Social Login Options */}
          <div className="social-login">
            <div className="divider">
              <span>Or continue with</span>
            </div>

            <div className="social-buttons">
              <button className="social-button google">
                <span>Google</span>
              </button>
              <button className="social-button facebook">
                <span>Facebook</span>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="signup-link">
            <p>
              Don't have an account?{' '}
              <a href="#">Sign up here</a>
            </p>
          </div>
        </div>

        {/* Brain Illustration */}
        <div className="brain-illustration">
          <div className="brain-container">
            <div className="brain-main">
              <div className="brain-center">
                <div className="brain-detail detail-1"></div>
                <div className="brain-detail detail-2"></div>
                <div className="brain-detail detail-3"></div>
                <div className="brain-arm arm-left"></div>
                <div className="brain-arm arm-right"></div>
              </div>
            </div>

            {/* Mindfulness Icons */}
            <div className="mindfulness-icon icon-1">🧘</div>
            <div className="mindfulness-icon icon-2">🌱</div>
            <div className="mindfulness-icon icon-3">🔑</div>
            <div className="mindfulness-icon icon-4">💎</div>
            <div className="mindfulness-icon icon-5">⚡</div>
            <div className="mindfulness-icon icon-6">🎯</div>

            {/* Welcome Badge */}
            <div className="welcome-badge">Welcome Back!</div>

            {/* Decorative Elements */}
            <div className="decorative-element element-1"></div>
            <div className="decorative-element element-2"></div>
            <div className="decorative-element element-3"></div>
            <div className="decorative-element element-4"></div>
            
            {/* Orbital Ring */}
            <div className="orbital-ring"></div>
            
            {/* Inner Energy Ring */}
            <div className="energy-ring"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;