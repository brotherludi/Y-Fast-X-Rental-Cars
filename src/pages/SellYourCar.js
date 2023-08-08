import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { postSellCar } from '../api';
import '../SellYourCar.css';

const SellYourCar = () => {
  const [formData, setFormData] = useState({
    company_id: '', // set the appropriate company_id here
    car_make: '',
    car_model: '',
    mileage: '',
    price: '',
    year: '',
    color: '',
    images: [],
    car_luxury: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postSellCar(formData);
      // You can redirect to the Cars for Sale page or show a success message here
    } catch (error) {
      console.error('Error posting car for sale:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  return (
    <div>
      <Header />
      <div className="sell-car-content">
        <h2>Sell Your Car</h2>
        <form onSubmit={handleSubmit} className="sell-car-form">
          <label>
            Car Make:
            <input type="text" name="car_make" value={formData.car_make} onChange={handleChange} />
          </label>
          <label>
            Car Model:
            <input type="text" name="car_model" value={formData.car_model} onChange={handleChange} />
          </label>
          <label>
            Mileage:
            <input type="number" name="mileage" value={formData.mileage} onChange={handleChange} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={formData.price} onChange={handleChange} />
          </label>
          <label>
            Year:
            <input type="number" name="year" value={formData.year} onChange={handleChange} />
          </label>
          <label>
            Color:
            <input type="text" name="color" value={formData.color} onChange={handleChange} />
          </label>
          <label>
            Images:
            <input type="file" name="images" multiple onChange={handleChange} />
          </label>
          <label>
            Luxury Car:
            <input type="checkbox" name="car_luxury" checked={formData.car_luxury} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SellYourCar;
