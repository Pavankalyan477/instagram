const express = require("express");
const router = express.Router();

const Suggest = require("../models/suggest.model");

//post

router.post("/", async (req, res) => {
  let item = await Suggest.create(req.body);

  return res.status(201).send({ item });
});

router.get("/all", async (req, res) => {
  let item = await Suggest.find().lean().exec();

  return res.status(200).send({ item });
});
// router.patch("/update/:id", async (req, res) => {
//     let item = await Suggest.findByIdAndUpdate(req.params.id, req.body, {new : true});

//     return res.status(201).send({item});
// })

//findbyid   find({movies_name:"Torque"})

router.get("/one/:name", async (req, res) => {
  let item = await Suggest.find({ user_name: req.params.name }).lean().exec();

  return res.status(200).send({ item });
});

router.get("/id/:id", async (req, res) => {
  let item = await Suggest.find({ _id: req.params.id }).lean().exec();

  return res.status(200).send({ item });
});

module.exports = router;
