const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");

const carsForSale = require("./routes/cars-for-sale");
const sellYourCar = require("./routes/sell-your-car");
const aboutUs = require("./routes/about-us");
const contact = require("./routes/contact");
const loginRegister = require("./routes/loginRegister");

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
  app.use("/about-us", aboutUs);
  app.use("/contact", contact);
  app.use("/loginRegister", loginRegister);

  app.close = function () {
    return db.end();
  };

  return app;
};