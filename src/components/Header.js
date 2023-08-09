import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const handlelogout = () => {
    localStorage.removeItem("user")
    setUser (null)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">Fast-X-RentalsForSale</Link>

          {user&&user.user_type==="buyer"&&(

            <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/cars" className="nav-links">Cars for Sale</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/sell" className="nav-links">Sell Your Car</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about" className="nav-links">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">Contact</Link>
            </li>
              <button className="nav-links" onClick={handlelogout}> Logout </button> 
            
          </ul>

          )}

          {user&&user.user_type==="seller"&&(

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

          <button className="nav-links" onClick={handlelogout}> Logout </button> 

          </ul>
          )}

          {!user&&(
                      <Link to="/login" className="nav-links">Login/Register</Link>

          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
