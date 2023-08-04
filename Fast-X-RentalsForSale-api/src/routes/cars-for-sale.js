const router = require("express").Router();

const db = require("../db/")

// Cars for Sale Route - Fetch All Cars for Sale
function carsRoute() {
  console.log("+++++++cars route");
  return db.query(`SELECT * FROM car_listings;`).then((data)=> data.rows)
}
//This Route is /cars
router.get("/", async (req, res) => {
  try {
    const carsForSale = await carsRoute();
console.log(carsForSale);



    return res.status(200).json(carsForSale );
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
  
  
  // POST request to add a new car
  router.post("/cars", (req, res) => {
    const newCar = req.body;
    // Assign a unique ID to the new car (you can use a library like 'uuid' for this)
    // newCar.id = cars.length + 1;
    // cars.push(newCar);
    res.json(newCar);
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
