import React from "react";
import carImage from "../assets/homepage picture.webp";

const CarImage = () => {
  return (
    <div className="car-image">
      <img src={carImage} alt="Fancy Car" />
    </div>
  );
};

export default CarImage;
