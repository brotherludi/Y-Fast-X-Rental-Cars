/* cars-for-sale.js */
const router = require("express").Router();
const db = require("../db"); // Import the database module

// Cars for Sale Route - Fetch All Cars for Sale
router.get("/", async (req, res) => {
  try {
    // Database query to fetch cars for sale from the "cars" table
    const query = "SELECT * FROM cars_for_sale";
    const result = await db.query(query);

    // Extract the cars from the result
    const carsForSale = result.rows;

    return res.status(200).json(carsForSale);
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
