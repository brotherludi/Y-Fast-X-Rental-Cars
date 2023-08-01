const router = require("express").Router();

//const { getCarsForSale } = require("../db/")

// Cars for Sale Route - Fetch All Cars for Sale
function carsRoute(db) {
  console.log("+++++++cars route");
}

router.get("/", async (req, res) => {
  try {
    //const carsForSale = await getCarsForSale();
    return res.status(200).send({ message: "This is cars" });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    //const carsForSale = await getCarsForSale();
    return res.status(200).send({ message: "This is post cars", data:req.body });
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

// export default router;
