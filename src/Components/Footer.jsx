import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Mens">Mens</Link></li>
            <li><Link to="/Kids">Kids</Link></li>
            <li><Link to="About">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: Worldofgents@.com</p>
          <p>Phone: 8459923623</p>
        </div>
        
        <div className="footer-section">
          <span className='footer-feedback'>
        <label htmlFor="feedback">Feedback</label>
          <input type="text" placeholder='Enter Your Feedback....'/>
          </span>
          <h3>Follow Us</h3>
          <ul>
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">Twitter</Link></li>
            <li><Link to="#">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
