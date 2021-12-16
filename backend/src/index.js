const express = require("express");

const app = express();
app.use(express.json());


const suggestController = require('./controllers/suggest.controller');


app.use("/suggest", suggestController);

module.exports = app;