import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">Y Fast X Rental Cars</div>
      <Link to="/login">Login/Register</Link>
    </header>
  );
};

export default Header;
