require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const subs = require("./routes/subscribers");

// mongoose.Promise = global.Promise;
//instantiation
const app = express();

//middleware for handling json
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//shorthand
const db = mongoose.connection;

//db launch/fail
db.on("error", err => {
  console.error(err);
});
db.once("open", () => {
  console.log("WE OPEN FOR BUSINESS");
});

app.use("/subs", subs);

//listen
app.listen(3000, () => {
  console.log("Server Launched");
});
