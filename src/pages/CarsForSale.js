import React, { useEffect, useState } from 'react';
import { getCarsForSale } from '../api'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        <ul>
          {carsForSale.map((car) => (
            <li key={car.id}>
              <h3>{car.car_make} {car.car_model}</h3>
              <p>Price: ${car.price}</p>
              <p>Year: {car.year}</p>
              <p>Color: {car.color}</p>
              
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default CarsForSale;
