//import { Router } from 'express';
//const router = Router();
//import { registerUser } from './db/queries';

// Login/Register Route - Register a New User
// router.post('/register', async (req, res) => {
//   const userData = req.body;
//   try {
//     const newUser = await registerUser(userData);
//     res.json(newUser);
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// export default router;
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    return res.status(200).send({ message: "This is login/register✅" });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    return res
      .status(200)
      .send({ message: "This is post login/register✅", data: req.body });
  } catch (error) {
    console.error("Error fetching cars for sale:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
