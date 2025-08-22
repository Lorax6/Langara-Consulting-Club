import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <a href="/" className="logo-link">
        <img className="logo" src={logo} alt="Club Logo" width="65" height="65" />
      </a>
      <nav>
        <ul className="nav_links">
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#offer">What We Offer</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#team">Meet the Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li>
            <a className="member" href="https://forms.gle/2nfipFQKxkptahoZ9" target="_blank" rel="noopener noreferrer">
              <button className="bcmbr">Become a Member</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;