import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Dribbble</h3>
          <p>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>For designers</h3>
          <ul>
            <li><a href="#">Go Pro!</a></li>
            <li><a href="#">Explore design work</a></li>
            <li><a href="#">Design blog</a></li>
            <li><a href="#">Overtime podcast</a></li>
            <li><a href="#">Playoffs</a></li>
            <li><a href="#">Weekly Warm-Up</a></li>
            <li><a href="#">Refer a Friend</a></li>
            <li><a href="#">Code of conduct</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hire designers</h3>
          <ul>
            <li><a href="#">Post a job opening</a></li>
            <li><a href="#">Post a freelance project</a></li>
            <li><a href="#">Search for designers</a></li>
            <li className='bold-char'><a href="#">Brands</a></li>
            <li><a href="#">Advertise with us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Media kit</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Directories</h3>
          <ul>
            <li><a href="#">Design jobs</a></li>
            <li><a href="#">Designers for hire</a></li>
            <li><a href="#">Freelance designers for hire</a></li>
            <li><a href="#">Tags</a></li>
            <li><a href="#">Places</a></li>
            <li className='bold-char'><a href="#">Design assets</a></li>
            <li><a href="#">Dribbble Marketplace</a></li>
            <li><a href="#">Creative Market</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Design Resources</h3>
          <ul>
            <li><a href="#">Freelancing</a></li>
            <li><a href="#">Design Hiring</a></li>
            <li><a href="#">Design Portfolio</a></li>
            <li><a href="#">Design Education</a></li>
            <li><a href="#">Creative Process</a></li>
            <li><a href="#">Design Industry Trends</a></li>
            <li><a href="#">Fontspring</a></li>
            <li><a href="#">Font Squirrel</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <br />
      <div className="footer-bottom">
        <p>&copy; 2023 Dribbble. All rights reserved.</p>
        <p> <span>20,501,853 </span> shots dribbbled</p>
      </div>
    </footer>
  );
};

export default Footer;