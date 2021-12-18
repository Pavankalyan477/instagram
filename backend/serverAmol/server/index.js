const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const path = require("path");
const multer = require("multer");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true }, () => {
    console.log('connected to mongo')
    
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    distination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    
    try {
         
        return res.status(200).json("file uploaded successfully");
     } catch (err) {
 res.status(404).json(err);
     }
});
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(5656, () => {
    console.log("DB is ready for you")
});