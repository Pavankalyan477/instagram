const router = require("express").Router(); 
const User = require("../models/User");
const bcrypt = require("bcryptjs");
//REGISTER
router.post("/register",async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt)
       
        //create new user
        const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPass,
    });
        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
         res.status(500).json(err)
        
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
      
        const validPass = await bcrypt.compare(req.body.password, user.password)
        !validPass && res.status(400).json("wrong passwword");

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
   }
   });


module.exports = router;