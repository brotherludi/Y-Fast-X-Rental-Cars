const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../db");

const router = express.Router();

router.get("/register", (req, res) => {
  const { username, password } = req.query;
  // Now you have the username and password
  console.log(`Username: ${username}, Password: ${password}`);

  // Make sure you do not send password back in the response.
  // This is just for demonstration.
  res.send(`Username: ${username}, Password: ${password}`);
});

router.post("/register", async (req, res) => {
  try {
    const { first_name, email, password, last_name, username, userType } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    let newUserString =
      "INSERT INTO users (first_name, email, password, last_name, username, user_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, username, email";
    let newUserParams = [
      first_name,
      email,
      hashedPassword,
      last_name,
      username,
      userType,
    ];

    const newUser = await pool.query(newUserString, newUserParams);

    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/login", async (req, res) => {
  const { username, password } = req.query;

  // In a real-world application, you would typically hash the password and compare it against
  // the hashed password in your database. In this case, you're simply checking if the username
  // and password match the string "test".

  if (username === "test" && password === "test") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (!user.rows.length) {
      return res.status(404).json({ error: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // res.status(200).json({ message: 'Login successful' });
    delete user.rows[0].password;
    res.status(200).json(user.rows[0]);
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
