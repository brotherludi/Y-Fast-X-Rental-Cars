// import { Router } from 'express';
// const router = Router();

// // Contact Route
// router.get('/contact', (req, res) => {
//   res.json({ message: 'Contact us at support@fastxrentalsforsale.com' });
// });

// export default router;
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    return res.status(200).send({ message: "This is contact 👍🏻" });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
