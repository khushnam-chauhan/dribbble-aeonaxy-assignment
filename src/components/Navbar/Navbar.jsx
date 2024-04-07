import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <a href="/" className="logo">
          Dribbble
        </a>
        <div className="nav-links">
          <a href="/inspiration">Inspiration</a>
          <a href="/find-work">Find Work</a>
          <a href="/learn-design">Learn Design</a>
          <a href="/go-pro">Go Pro</a>
          <a href="/hire-designers">Hire Designers</a>
        </div>
      </div>
      <div className="nav-right">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-icons">
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
          <a href="#"><i className="fas fa-user"></i></a>
          <a href="#" className="upload-btn">
            <p>upload</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;