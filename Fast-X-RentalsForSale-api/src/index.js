// index.js
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./db");
const ENV = require("./environment");

const carsForSaleRoute = require("./routes/cars-for-sale");
const aboutUsRoute = require("./routes/about-us");
const sellYourCarRoute = require("./routes/sell-your-car");
const contactRoute = require("./routes/contact");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Sample data for each route
const carsForSaleData = [
  {
    id: 1,
    car_make: "Toyota",
    car_model: "Corolla",
    mileage: 20000,
    price: 15000.0,
    year: 2018,
    color: "Blue",
    images: ["image1.jpg", "image2.jpg"],
    visibility: true,
    car_luxury: false,
  },
  // Add more cars here...
];


// Home Route - View All Cars
app.get("/", (req, res) => {
  res.json(carsForSaleData);
});

// Cars for Sale Route - Fetch All Cars for Sale
app.get("/cars-for-sale", (req, res) => {
  res.json(carsForSaleData);
});

// About Us Route
app.get("/about-us", (req, res) => {
  res.send("Welcome to Fast-X-RentalsForSale About Us page!");
});

// Sell Your Car Route - Add a New Car for Sale
app.route("/sell-your-car")
  .get((req, res) => {
    // Logic to fetch cars for sale data from the database goes here...
    res.json(carsForSaleData);
  })
  .post((req, res) => {
    const carData = req.body;
    // Logic to add the car data to the database goes here...
    res.json(carData);
  });

// Contact Route
app.get("/contact", (req, res) => {
  res.send("Contact us at support@fastxrentalsforsale.com");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${ENV} mode.`);
});
