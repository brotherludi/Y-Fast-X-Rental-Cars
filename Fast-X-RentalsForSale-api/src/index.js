//index.js

require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./db");
const ENV = require("./environment");
const application = require("./application");
const carsRoute = require("./routes/cars-for-sale");
const app = express();
const loginRegister = require("./routes/loginRegister.js");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/cars", carsRoute);
app.use(application(ENV));
// app.use("/loginRegister", loginRegister)
// app.use("/login", loginRegister)
// app.use("/register", loginRegister)
//^changed to the following single line

app.use('/', loginRegister);

// Add your routes here
/* 
const usersRoutes = require("./routes/users");
app.use("/api/users", usersRoutes);
 */
// Close the database connection when the app is closed
app.on("close", () => {
  db.end();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${ENV} mode.`);
});

