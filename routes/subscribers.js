const express = require("express");
const router = express.Router();
const sub = require("../models/subSchema");

//middleware more like topware haha
const getSub = async (req, res, next) => {
  let subscriber;
  try {
    subscriber = await sub.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    console.log("YO ITS YA BOI THE MIDDLE WARE");
    res.status(500).json({ message: err.message });
  }
  res.subscriber = subscriber;
  next();
};

//get all
router.get("/", async (req, res) => {
  // console.log("ALL");
  try {
    const subscribers = await sub.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get one
router.get("/:id", getSub, (req, res) => {
  console.log("ONE ", req.params.id, res);
  res.send(res.subscriber);
});

//create one
router.post("/", async (req, res) => {
  // console.log("POST ");
  // console.log("MITE KUDASAI", req.body);
  const subscriber = new sub({
    name: req.body.name,
    subbedTo: req.body.subbedTo
  });

  try {
    const newSub = await subscriber.save();
    res.status(201).json(newSub);
  } catch (err) {
    // console.error(err);
    res.status(400).json({ message: err.message });
  }
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
