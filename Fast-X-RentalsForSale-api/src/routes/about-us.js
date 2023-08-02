// const router = require("express").Router();

// // About Us Route
// router.get('/about-us', (req, res) => {
//   res.json({ message: 'Welcome to Fast-X-RentalsForSale About Us page!' });
// });

// export default router;
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    return res.status(200).send({ message: "This is about-us 🎉" });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
