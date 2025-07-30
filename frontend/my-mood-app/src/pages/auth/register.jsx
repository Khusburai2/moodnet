import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heart, Sparkles } from 'lucide-react';
import './login.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (formData.password !== formData.password2) {
      setError("Passwords don't match");
      return;
    }
    
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      await axios.post('http://localhost:8000/api/auth/register/', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      
      navigate('/auth/login'); // Redirect to login after successful registration
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData?.username) {
        setError(`Username: ${errorData.username.join(' ')}`);
      } else if (errorData?.email) {
        setError(`Email: ${errorData.email.join(' ')}`);
      } else if (errorData?.password) {
        setError(`Password: ${errorData.password.join(' ')}`);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Background Decorative Elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      <div className="decorative-circle circle-4"></div>

      <div className="login-content">
        {/* Register Form */}
        <div className="login-form">
          <div className="form-header">
            <h1>Create Account</h1>
            <p>Start your wellness journey today</p>
            <div className="header-divider"></div>
          </div>

          <form onSubmit={handleSubmit} className="form-fields">
            {error && <div className="error-message">{error}</div>}
            
            {/* Username Field */}
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label>Password (min 8 characters)</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength="8"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="password2"
                placeholder="••••••••"
                value={formData.password2}
                onChange={handleInputChange}
                required
                minLength="8"
              />
            </div>

            {/* Register Button */}
            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                  Creating account...
                </div>
              ) : (
                'Register'
              )}
            </button>
          </form>

          {/* Social Register Options */}
          <div className="social-login">
            <div className="divider">
              <span>Or sign up with</span>
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

          {/* Login Link */}
          <div className="signup-link">
            <p>
              Already have an account?{' '}
              <a href="/auth/login">Login here</a>
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
            <div className="mindfulness-icon icon-1">✨</div>
            <div className="mindfulness-icon icon-2">🌿</div>
            <div className="mindfulness-icon icon-3">🔐</div>
            <div className="mindfulness-icon icon-4">💡</div>
            <div className="mindfulness-icon icon-5">⚡</div>
            <div className="mindfulness-icon icon-6">🌟</div>

            {/* Welcome Badge */}
            <div className="welcome-badge">Welcome!</div>

            {/* Decorative Elements */}
            <div className="decorative-element element-1"></div>
            <div className="decorative-element element-2"></div>
            <div className="decorative-element element-3"></div>
            <div className="decorative-element element-4"></div>
            
            {/* Orbital Ring */}
            <div className="orbital-ring"></div>
            
            {/* Inner Energy Ring */}
            <div className="energy-ring"></div>

            {/* Floating Icons */}
            <div className="floating-element heart-1">
              <Heart size={16} fill="#FF4757" color="#FF4757" />
            </div>
            <div className="floating-element heart-2">
              <Heart size={12} fill="#FF69B4" color="#FF69B4" />
            </div>
            <div className="floating-element sparkle-1">
              <Sparkles size={14} color="#FFB6C1" />
            </div>
            <div className="floating-element sparkle-2">
              <Sparkles size={18} color="#FF69B4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;