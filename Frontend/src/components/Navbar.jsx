import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const isAdmin = user?.role === 'admin';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V5C20 3.9 19.1 3 18 3H6C4.9 3 4 3.9 4 5V15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="brand-text">Rail Dost</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {isAdmin ? (
            <>
              <Link 
                to="/admin/dashboard" 
                className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/admin/booking" 
                className={`nav-link ${location.pathname === '/admin/booking' ? 'active' : ''}`}
              >
                Bookings
              </Link>
              <Link 
                to="/admin/setting" 
                className={`nav-link ${location.pathname === '/admin/setting' ? 'active' : ''}`}
              >
                Settings
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/user/booking" 
                className={`nav-link ${location.pathname === '/user/booking' ? 'active' : ''}`}
              >
                Book Seats
              </Link>
              <Link 
                to="/user/my-bookings" 
                className={`nav-link ${location.pathname === '/user/my-bookings' ? 'active' : ''}`}
              >
                My Bookings
              </Link>
            </>
          )}
        </div>

        {/* User Menu */}
        <div className="user-menu">
          <div className="user-dropdown">
            <button className="user-button" onClick={toggleUserMenu}>
              <span className="user-avatar">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
              <span className="user-name">{user?.name}</span>
            </button>
            <div className={`dropdown-menu ${userMenuOpen ? 'open' : ''}`}>
              <div className="dropdown-header">
                <span className="dropdown-name">{user?.name}</span>
                <span className="dropdown-email">{user?.email}</span>
              </div>
              <div className="dropdown-divider"></div>
              <button onClick={handleLogout} className="dropdown-item">
                <span className="dropdown-icon">🚪</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 