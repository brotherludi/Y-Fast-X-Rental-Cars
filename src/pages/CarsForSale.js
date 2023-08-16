import React, { useEffect, useState } from "react";
import { getCarsForSale } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CarsForSale.css";

const ContactPopup = ({ company }) => {
  return (
    <div className="contact-popup">
      <h3>Contact Information</h3>
      <p>Company Name: {company.company_name}</p>
      <p>Location: {company.location}</p>
      <p>Email: {company.email}</p>
      <p>Phone: {company.phone_number}</p>
      <p>Address: {company.street_address}</p>
    </div>
  );
};

const CarsForSale = () => {
  const [carsForSale, setCarsForSale] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCarMake, setSelectedCarMake] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedLuxury, setSelectedLuxury] = useState("");
  const [selectedMileageRange, setSelectedMileageRange] = useState([0, 200000]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 150000]);
  const [selectedYearRange, setSelectedYearRange] = useState([2015, 2025]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [carsWithCompanyInfo, setCarsWithCompanyInfo] = useState([]);
  const [clickedHearts, setClickedHearts] = useState({});

  const toggleFavorite = (carId) => {
    const updatedFavorites = favoriteCars.includes(carId)
      ? favoriteCars.filter((id) => id !== carId)
      : [...favoriteCars, carId];

    setFavoriteCars(updatedFavorites);
    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));

    setClickedHearts((prevClickedHearts) => ({
      ...prevClickedHearts,
      [carId]: !prevClickedHearts[carId],
    }));
  };

  useEffect(() => {
    // Fetch the list of cars from the server using the getCarsForSale function
    const includeCompanyInfo = true; // Set this to true if want company information
    getCarsForSale(includeCompanyInfo)
      .then((cars) => {
        setCarsWithCompanyInfo(cars);
        setCarsForSale(cars); // Initialize filteredCars with all cars
      })
      .catch((error) => {
        console.error("Error fetching cars for sale:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch favorite status from local storage
    const favoritesFromStorage = localStorage.getItem("favoriteCars");
    if (favoritesFromStorage) {
      setFavoriteCars(JSON.parse(favoritesFromStorage));
    }
  }, []);

  useEffect(() => {
    // Apply filters
    const filtered = carsForSale.filter((car) => {
      const carMakeMatch = selectedCarMake
        ? car.car_make === selectedCarMake
        : true;
      const colorMatch = selectedColor ? car.color === selectedColor : true;
      const luxuryMatch =
        selectedLuxury !== ""
          ? car.car_luxury.toString() === selectedLuxury
          : true;
      const mileageMatch =
        car.mileage >= selectedMileageRange[0] &&
        car.mileage <= selectedMileageRange[1];
      const priceMatch =
        car.price >= selectedPriceRange[0] &&
        car.price <= selectedPriceRange[1];
      const yearMatch =
        car.year >= selectedYearRange[0] && car.year <= selectedYearRange[1];
      return (
        carMakeMatch &&
        colorMatch &&
        luxuryMatch &&
        mileageMatch &&
        priceMatch &&
        yearMatch &&
        (car.car_make.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.car_model.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredCars(filtered);
  }, [
    selectedCarMake,
    selectedColor,
    selectedLuxury,
    selectedMileageRange,
    selectedPriceRange,
    selectedYearRange,
    searchTerm,
    carsForSale,
  ]);

  const carMakes = Array.from(new Set(carsForSale.map((car) => car.car_make)));
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="background-pic">
      <Header />
      <div className="cars-for-sale-content">
        <h2>Cars for Sale</h2>
        <div className="filters-container">
          <div className="filter">
            <label>Car Make:</label>
            <select
              value={selectedCarMake}
              onChange={(e) => setSelectedCarMake(e.target.value)}
            >
              <option value="">All</option>
              {carMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <label>Color:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">All</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
              <option value="Yellow">Yellow</option>
              <option value="Red">Red</option>
            </select>
          </div>
          <div className="filter">
            <label>Luxury:</label>
            <select
              value={selectedLuxury}
              onChange={(e) => setSelectedLuxury(e.target.value)}
            >
              <option value="">All</option>
              <option value="true">Luxury</option>
              <option value="false">Not Luxury</option>
            </select>
          </div>

          {/* Advanced Search button */}
          <div className="filter">
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              Advanced Search
            </button>
          </div>

          {/* Advanced filters */}
          {showAdvancedFilters && (
            <div className="advanced-filters">
              <div className="filter">
                <label>Price Range:</label>
                <input
                  type="number"
                  placeholder="Min"
                  value={selectedPriceRange[0]}
                  onChange={(e) =>
                    setSelectedPriceRange([
                      +e.target.value,
                      selectedPriceRange[1],
                    ])
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={selectedPriceRange[1]}
                  onChange={(e) =>
                    setSelectedPriceRange([
                      selectedPriceRange[0],
                      +e.target.value,
                    ])
                  }
                />
              </div>
              <div className="filter">
                <label>Mileage Range:</label>
                <input
                  type="number"
                  placeholder="Min"
                  value={selectedMileageRange[0]}
                  onChange={(e) =>
                    setSelectedMileageRange([
                      +e.target.value,
                      selectedMileageRange[1],
                    ])
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={selectedMileageRange[1]}
                  onChange={(e) =>
                    setSelectedMileageRange([
                      selectedMileageRange[0],
                      +e.target.value,
                    ])
                  }
                />
              </div>
              <div className="filter">
                <label>Year Range:</label>
                <input
                  type="number"
                  placeholder="Min"
                  value={selectedYearRange[0]}
                  onChange={(e) =>
                    setSelectedYearRange([
                      +e.target.value,
                      selectedYearRange[1],
                    ])
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={selectedYearRange[1]}
                  onChange={(e) =>
                    setSelectedYearRange([
                      selectedYearRange[0],
                      +e.target.value,
                    ])
                  }
                />
              </div>
            </div>
          )}
        </div>
        {/* Search input */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by car make or model"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="cars-list">
          {filteredCars.map((car) => (
            <li key={car.id} className="car-item">
              <div className="favorite-icon">
                <FontAwesomeIcon
                  icon={
                    favoriteCars.includes(car.id)
                      ? faHeartSolid
                      : faHeartRegular
                  }
                  className="heart-icon"
                  onClick={() => toggleFavorite(car.id)}
                  style={{
                    color: clickedHearts[car.id] ? "#ff6347" : "#747272",
                  }}
                />
              </div>
              {car.images && (
                <img
                  src={`${car.images[0]}`}
                  alt={`${car.car_make} ${car.car_model}`}
                  className="car-image"
                  style={{ maxWidth: "300px" }}
                />
              )}
              <div className="car-details">
                <h3>
                  {car.car_make} {car.car_model}
                </h3>
                {/* {car.company_name ? (
                  <p>Company: {car.company_name}</p>
                ) : (
                  <p>No Company Information</p>
                )} */}
                <p>Year: {car.year}</p>
                <p>Mileage: {car.mileage.toLocaleString()}</p>
                <p>Color: {car.color}</p>
                <p>Price: ${car.price.toLocaleString()}</p>
                <button
                  className="contact-button"
                  onClick={() => {
                    setSelectedCompany({
                      company_name: car.company_name,
                      location: car.company_location,
                      email: car.company_email,
                      phone_number: car.company_phone,
                      street_address: car.company_address,
                    });
                  }}
                >
                  Contact
                </button>
              </div>
            </li>
          ))}
        </ul>
        {selectedCompany && (
          <div className="popup-background">
            <ContactPopup company={selectedCompany} />
            <button
              className="close-button"
              onClick={() => setSelectedCompany(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CarsForSale;
