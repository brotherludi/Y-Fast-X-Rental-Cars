import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">Y Fast X Rental Cars</Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/cars" className="nav-links">Cars for Sale</Link>
            </li>
            <li className="nav-item">
              <Link to="/sell" className="nav-links">Sell Your Car</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">Contact</Link>
            </li>
          </ul>
          <Link to="/login" className="nav-links">Login/Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
