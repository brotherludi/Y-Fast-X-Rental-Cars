import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import CarImage from "../components/CarImage";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="main-content">
        <div className="left-section">
          <Introduction />
        </div>
        <div className="right-section">
          <CarImage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
