import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-name">Rail Dost</span>
        </div>
        
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/user/booking">Book Tickets</Link>
          <Link to="/user/my-bookings">My Bookings</Link>
          <Link to="/login">Login</Link>
        </div>
        
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><span>📘</span></a>
          <a href="#" aria-label="Twitter"><span>🐦</span></a>
          <a href="#" aria-label="Instagram"><span>📸</span></a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Rail Dost. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 