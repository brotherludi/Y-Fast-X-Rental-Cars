const router = require("express").Router();
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
router.get("/", async (req, res) => {
  try {
    return res.status(200).send({ message: "This is sell your car🚗" });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    return res
      .status(200)
      .send({ message: "This is post sell your cars🚗", data: req.body });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
