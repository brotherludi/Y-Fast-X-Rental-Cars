// routes/sell-your-car.js
const router = require("express").Router();
const db = require("../db"); // Import the database module

// Sell Your Car Route - Add a New Car for Sale
router.post("/", async (req, res) => {
  try {
    const carData = req.body;

    // Database query to add a new car for sale to the "cars_for_sale" table
    const query = `
      INSERT INTO cars_for_sale (car_make, car_model, mileage, price, year, color, images, visibility, car_luxury)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *`;
    const values = [
      carData.car_make,
      carData.car_model,
      carData.mileage,
      carData.price,
      carData.year,
      carData.color,
      carData.images,
      carData.visibility,
      carData.car_luxury,
    ];
    const result = await db.query(query, values);

    // Get the newly added car for sale from the result
    const newCar = result.rows[0];

    return res.status(201).json(newCar);
  } catch (error) {
    console.error("Error adding car for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
