const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./db");
const ENV = require("./environment");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

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
