// routes/about-us.js
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    return res.status(200).send({ message: "This is the About Us page" });
  } catch (error) {
    console.error("Error fetching About Us page:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
