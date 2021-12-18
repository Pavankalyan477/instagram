const express = require("express");

const app = express();
app.use(express.json());

const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");


const userRoute = require("./controllers/users.controller.js");
const authRoute = require("./controllers/auth.controller.js");
const postRoute = require("./controllers/posts.controller.js")


const suggestController = require('./controllers/suggest.controller');


app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);



app.use("/suggest", suggestController);

module.exports = app;