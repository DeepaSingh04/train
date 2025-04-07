import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          {loading ? (
            <>
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="cta-container">
                <div className="skeleton skeleton-button"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </>
          ) : (
            <>
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="highlight">Journey</span> with Comfort & Style
                </h1>
                <p className="hero-subtitle">
                  Experience seamless train travel with Rail Dost
                </p>
                <div className="cta-container">
                  <button onClick={handleLogin} className="cta-button primary">
                    <span className="button-icon">🚂</span>
                    Start Your Journey
                  </button>
                  <button onClick={handleRegister} className="cta-button secondary">
                    <span className="button-icon">✨</span>
                    Create Account
                  </button>
                </div>
              </div>
              <div className="hero-image">
                <div className="train-illustration"></div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎫</div>
            <h3>Easy Booking</h3>
            <p>Book your train tickets in just a few clicks with our intuitive interface</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💺</div>
            <h3>Seat Selection</h3>
            <p>Choose your preferred seat with our interactive seat map</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Real-time Updates</h3>
            <p>Get instant notifications about your booking status and train updates</p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Our Service</h2>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">🛒</div>
              <h3>Secure Payment Gateway</h3>
              <p>Your transactions are protected with industry-standard encryption and security protocols.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">💳</div>
              <h3>Multiple Payment Options</h3>
              <p>Pay using credit/debit cards, UPI, net banking, or digital wallets for your convenience.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">📱</div>
              <h3>24/7 Customer Support</h3>
              <p>Our dedicated support team is available round the clock to assist you with any queries.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">✅</div>
              <h3>Instant Booking Confirmation</h3>
              <p>Receive immediate confirmation of your booking with all details via email and SMS.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(0)}>
              <h3>How do I book a train ticket?</h3>
              <span className="faq-icon">{activeFaq === 0 ? '−' : '+'}</span>
            </div>
            {activeFaq === 0 && (
              <div className="faq-answer">
                <p>Simply create an account, select your journey details, choose your seat, and complete the payment process.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(1)}>
              <h3>Can I modify my booking?</h3>
              <span className="faq-icon">{activeFaq === 1 ? '−' : '+'}</span>
            </div>
            {activeFaq === 1 && (
              <div className="faq-answer">
                <p>Yes, you can modify your booking up to 24 hours before the journey. Login to your account and use the 'Modify Booking' option.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;