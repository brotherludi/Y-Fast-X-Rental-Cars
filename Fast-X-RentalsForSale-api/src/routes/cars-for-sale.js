const router = require("express").Router();



//const { getCarsForSale } = require("../db/")

// Cars for Sale Route - Fetch All Cars for Sale
function carsRoute(db) {
  console.log("+++++++cars route");
}
//This Route is /cars
router.get("/", async (req, res) => {
  try {
    //const carsForSale = await getCarsForSale();

// Sample data - This would be replaced with data from your database
let cars = [
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
  {
    id: 2,
    car_make: 'Honda',
    car_model: 'Civic',
    mileage: 30000,
    price: 18000.00,
    year: 2019,
    color: 'Black',
    images: ['image3.jpg', 'image4.jpg'],
    visibility: true,
    car_luxury: false,
  },
  {
    id: 3,
    car_make: 'Ford',
    car_model: 'Fusion',
    mileage: 25000,
    price: 17000.00,
    year: 2020,
    color: 'White',
    images: ['image5.jpg', 'image6.jpg'],
    visibility: true,
    car_luxury: false,
  },
  {
    id: 4,
    car_make: 'Chevrolet',
    car_model: 'Malibu',
    mileage: 28000,
    price: 19000.00,
    year: 2019,
    color: 'Silver',
    images: ['image7.jpg', 'image8.jpg'],
    visibility: true,
    car_luxury: false,
  },
  {
    id: 5,
    car_make: 'Toyota',
    car_model: 'Camry',
    mileage: 15000,
    price: 16000.00,
    year: 2021,
    color: 'Red',
    images: ['image9.jpg', 'image10.jpg'],
    visibility: true,
    car_luxury: true,
  },
];



    return res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }const express = require("express");
  const app = express();
  const PORT = 3000;
  
  // Middleware to parse JSON requests
  app.use(express.json());
  
  
  // POST request to add a new car
  app.post("/cars", (req, res) => {
    const newCar = req.body;
    // Assign a unique ID to the new car (you can use a library like 'uuid' for this)
    newCar.id = cars.length + 1;
    cars.push(newCar);
    res.json(newCar);
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
});

router.post("/", async (req, res) => {
  try {
    //const carsForSale = await getCarsForSale();
    return res
      .status(200)
      .send({ message: "This is post cars", data: req.body });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/borrow", async (req, res) => {
  try {
    //const carsForSale = await getCarsForSale();
    return res.status(200).send({ message: "This is borrow" });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
