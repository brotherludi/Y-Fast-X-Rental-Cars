const router = require("express").Router();
const db = require("../db/");

// Cars for Sale Route - Fetch All Cars for Sale
function carsRoute() {
  return db.query(`SELECT * FROM car_listings;`).then((data) => data.rows);
}

// function carsRoute() {
//   return db.query(`
//     SELECT
//       cl.*,
//       c.company_name,
//       c.location AS company_location,
//       c.email AS company_email,
//       c.phone_number AS company_phone,
//       c.street_address AS company_address
//     FROM car_listings cl
//     JOIN companies c ON cl.company_id = c.id;
//   `).then((data) => data.rows);
// }

router.get("/", async (req, res) => {
  try {
    const carsForSale = await carsRoute();
    return res.status(200).json(carsForSale);
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;