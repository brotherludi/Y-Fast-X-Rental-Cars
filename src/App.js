import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import CarsForSale from './pages/CarsForSale';

import SellYourCar from './pages/SellYourCar';
import Login from './pages/login'; // Corrected the case to match 'login.js'
//import Register from './pages/Register'; // Make sure this file exists at './src/pages/Register.js'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cars" element={<CarsForSale />} />
        <Route path="/sell" element={<SellYourCar />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};

export default App;