import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import CarsForSale from './pages/CarsForSale';
import SellYourCar from './pages/SellYourCar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cars" element={<CarsForSale />} />
        <Route path="/sell" element={<SellYourCar />} />
      </Routes>
    </Router>
  );
};

export default App;
