const express = require("express");
const router = express.Router();
const sub = require("../models/subSchema");

//get all
router.get("/", (req, res) => {
  console.log("ALL");
});
//get one
router.get("/:id", (req, res) => {
  console.log("ONE ", req.params.id);
});
//create one
router.post("/", (req, res) => {
  console.log("POST ");
});
//update one
router.patch("/:id", (req, res) => {
  console.log("Patch ", req.params.id);
});
//delete one
router.delete("/:id", (req, res) => {
  console.log("Delete ", req.params.id);
});

module.exports = router;
