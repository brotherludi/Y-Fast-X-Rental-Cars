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
