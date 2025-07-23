import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, Target, Headphones, User } from 'lucide-react';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/auth/register');
  };

  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <a 
            href="/" 
            className="nav-link active"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          >
            Home
          </a>
          <a 
            href="/insight" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/insight');
            }}
          >
            Insight
          </a>
          <a 
            href="/tracker" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/tracker');
            }}
          >
            Tracker
          </a>
          <a 
            href="/chat" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/chat');
            }}
          >
            ChatWithAI
          </a>
        </div>
        <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Journey to Better Mental Health Starts Here
            </h1>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <Target size={20} />
                </div>
                <span>Track your daily mood patterns and understand your triggers</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Sparkles size={20} />
                </div>
                <span>Practice mindfulness with guided meditation sessions</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Headphones size={20} />
                </div>
                <span>Connect with AI-powered emotional support 24/7</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <User size={20} />
                </div>
                <span>Access personalized self-care recommendations</span>
              </div>
            </div>

            <div className="cta-buttons">
              <button className="primary-btn" onClick={handleLogin}>Login to Continue</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="brain-container">
              <svg viewBox="0 0 200 200" className="brain-svg">
                <path
                  d="M50 80 C30 60, 30 40, 50 35 C70 30, 90 35, 100 50 C110 35, 130 30, 150 35 C170 40, 170 60, 150 80 C160 100, 160 120, 150 140 C130 150, 110 145, 100 130 C90 145, 70 150, 50 140 C40 120, 40 100, 50 80 Z"
                  fill="#FFB6C1"
                  stroke="#333"
                  strokeWidth="3"
                />
                
                <path
                  d="M60 70 C80 65, 100 70, 120 65 C140 70, 145 85, 130 95 C110 100, 90 95, 70 100 C55 90, 55 80, 60 70"
                  fill="#FF69B4"
                  stroke="#333"
                  strokeWidth="2"
                />
                
                <path
                  d="M70 110 C90 105, 110 110, 130 105 C140 115, 135 125, 120 130 C100 135, 80 130, 65 125 C60 115, 65 110, 70 110"
                  fill="#FF69B4"
                  stroke="#333"
                  strokeWidth="2"
                />

                <circle cx="100" cy="90" r="25" fill="white" stroke="#333" strokeWidth="3"/>
                <path
                  d="M90 85 C90 80, 95 75, 100 80 C105 75, 110 80, 110 85 C110 90, 100 100, 100 100 C100 100, 90 90, 90 85 Z"
                  fill="#FF4757"
                />
              </svg>
              
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

      <div className="bg-decoration circle-1"></div>
      <div className="bg-decoration circle-2"></div>
      <div className="bg-decoration circle-3"></div>
    </div>
  );
};

export default Home;