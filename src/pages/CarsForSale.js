import React, { useEffect, useState } from 'react';
import { getCarsForSale } from '../api'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CarsForSale.css';

const CarsForSale = () => {
  const [carsForSale, setCarsForSale] = useState([]);

  useEffect(() => {
    // Fetch the list of cars from the server using the getCarsForSale function
    getCarsForSale()
      .then((cars) => {
        setCarsForSale(cars);
      })
      .catch((error) => {
        console.error('Error fetching cars for sale:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="cars-for-sale-content">
        <h2>Cars for Sale</h2>
        <ul className="cars-list">
          {carsForSale.map((car) => (
            <li key={car.id} className="car-item">
            <img src={`http://localhost:3001/images/${car.images[0]}`} alt={`${car.car_make} ${car.car_model}`} className="car-image" style={{ maxWidth: '290px' }}/>
            <div className="car-details">
              <h3>{car.car_make} {car.car_model}</h3>
              <p>Year: {car.year}</p>
              <p>Mileage: {car.mileage}</p>
              <p>Color: {car.color}</p>
              <p>Price: ${car.price}</p> 
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
  </div>
);
};

export default CarsForSale;
