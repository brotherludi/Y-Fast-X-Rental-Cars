const router = require("express").Router();

// About Us Route
router.get('/about-us', (req, res) => {
  res.json({ message: 'Welcome to Fast-X-RentalsForSale About Us page!' });
});

export default router;

