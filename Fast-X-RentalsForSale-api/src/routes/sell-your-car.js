const router = require("express").Router();
const db = require("../db");

// Sell Your Car Route - Add a New Car for Sale
router.post("/sell-your-car", async (req, res) => {
  try {
    const {
      company_id,
      car_make,
      car_model,
      mileage,
      price,
      year,
      color,
      images,
      car_luxury,
    } = req.body;

    // Check if required fields are provided
    if (!car_make || !car_model || !price || !color || !year) {
      return res.status(400).json({ message: "Incomplete Form" });
    }

    // Insert the new car listing into the database
    await db.query(
      `INSERT INTO car_listings (company_id, car_make, car_model, mileage, price, year, color, images, visibility, car_luxury)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [
        company_id,
        car_make,
        car_model,
        mileage,
        price,
        year,
        color,
        images,
        true,
        car_luxury,
      ]
    );

    // Send success response
    return res.status(200).json({ message: "Car added for sale successfully" });
  } catch (error) {
    console.error("Error adding car for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

//import { addCarForSale } from './db/queries';


// Sell Your Car Route - Add a New Car for Sale
// router.post('/sell-your-car', async (req, res) => {
//   const carData = req.body;
//   try {
//     const newCar = await addCarForSale(carData);
//     res.json(newCar);
//   } catch (error) {
//     console.error('Error adding car for sale:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// export default router;
// router.get("/", async (req, res) => {
//   try {
//     return res.status(200).send({ message: "This is sell your car🚗" });
//   } catch (error) {
//     console.error("Error fetching cars for sale:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const {company_id, car_make, car_model, mileage, price, year, color, images, car_luxury} = req.body;
//     if (!car_make || !car_model || !price || !color || !year ) {
//       return res.status(400).send({message: "Incomplete Form"});
//     } 

//     await db.query(`INSERT INTO car_listings (company_id, car_make, car_model, mileage, price, year, color, images, visibility, car_luxury)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,  
//      [company_id, car_make, car_model, mileage, price, year, color, images, true, car_luxury ])
    
    //need to make a new car listing - look back at mid term
    //make the form and use the same name as variable 


//       return res
//       .status(200)
//       .send({ message: "This is post sell your cars🚗", data: req.body });
//   } catch (error) {
//     console.error("Error fetching cars for sale:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;
