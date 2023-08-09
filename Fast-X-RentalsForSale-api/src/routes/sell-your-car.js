const router = require("express").Router();
const db = require("../db");
const upload = require("../multer-config");

// Sell Your Car Route - Add a New Car for Sale
router.post("/", upload.single("images"), async (req, res) => {
  console.log("backend received request");
  try {
    console.log('Request Body:', req.body);
    console.log('Uploaded File:', req.file);
    const {
      car_make,
      car_model,
      mileage,
      price,
      year,
      color,
      images,
      car_luxury,
    } = req.body;

     // Check if a file was uploaded
     if (!req.file) {
      console.log('No File Uploaded');
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageFilename = req.file.filename;

    // Check if required fields are provided
    if (!car_make || !car_model || !price || !color || !year) {
      return res.status(400).json({ message: "Incomplete Form" });
    }
    
    // Insert the new car listing into the database
    const {rows} = await db.query(
      `INSERT INTO car_listings (car_make, car_model, mileage, price, year, color, images, visibility, car_luxury)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        car_make,
        car_model,
        parseInt(mileage),
        parseInt(price),
        parseInt(year),
        color,
        [imageFilename],
        true,
        car_luxury,
      ]
    );
    const car = rows[0]
    // Send success response
    return res.status(200).json({ message: "Car added for sale successfully", car });
  } catch (error) {
    console.error("Error adding car for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:car_id", async (req, res) => {
  const car_id = req.params.car_id;

  try {
    const {
      mileage,
      price,
      year,
    } = req.body;

    // Check if required fields are provided
    if (!mileage || !price || !year) {
      return res.status(400).json({ message: "Incomplete Form" });
    }

    // Insert the new car listing into the database
    const {rows} = await db.query(
      `UPDATE car_listings set mileage=$1, price=$2, year=$3
       WHERE id = $4 RETURNING *`,
      [ 
        mileage,
        price,
        year,
        car_id
      ]
    );

    const car = rows[0]
    // Send success response
    return res.status(200).json({ message: "Updated Successfully", car });
  } catch (error) {
    console.error("Error adding car for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
