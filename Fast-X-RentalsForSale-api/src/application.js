const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");

const carsForSale = require("./routes/cars-for-sale");
console.log("++++++++++++", carsForSale);
const sellYourCar = require("./routes/sell-your-car");
// const aboutUs = require("./routes/about-us");
// const contact = require("./routes/contact");
// const loginRegister = require("./routes/loginRegister");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(ENV) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  // Define routes for each page
  app.use("/cars", carsForSale);
  app.use("/sell-your-car", sellYourCar);
  // app.use("/about-us", aboutUs(db));
  // app.use("/contact", contact(db));
  // app.use("/login-register", loginRegister(db));

  if (ENV === "car_used_rental" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`)),
    ])
      .then(([create, seed]) => {
        app.get("/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function () {
    return db.end();
  };

  return app;
};
