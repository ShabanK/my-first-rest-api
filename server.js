require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

// db.on("error", err => {
//   console.error(err);
// });
db.once("open", () => {
  console.log("WE OPEN FOR BUSINESS");
});
app.listen(3000, () => {
  console.log("Server Launched");
});
