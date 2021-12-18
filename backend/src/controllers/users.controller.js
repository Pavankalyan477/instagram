const User = require("../models/User.model")
const router = require("express").Router();
const bcrypt = require("bcryptjs");
//update User
router.put("/:id",async (req, res) => {
    if (req.body.userId == req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
             } catch (err) {
                res.status(500).json(err);       
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body,});
res.status(200).json("Account has been updated")
         } catch (err) {
           res.status(403).json(err)
            
        }
    } else {
      return res.status(403).json("u can update only ur account")
    }
})

//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId == req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            console.log('user:', user)
            res.status(200).json("Account has been updated")
        } catch (err) {
            res.status(403).json(err)
            
        }
    } else {
        return res.status(403).json("u can delete only ur account")
    }
});
//get user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
       
        const { password, updatedAt, ...other } = user._doc
       
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
});
//follow user
router.put("/:id/followme", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        
        try {
            const user = await User.findById(req.params.id); ///given input id  wala
            const currentUser = await User.findById(req.body.userId); // which is trying to make request

            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: {followins:req.params.id }})
                res.status(200).json("user has been followed");     
            } else {
                res.status(403).json("you already follow this user")
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you cant follow urself")
    }
})

//unfollow user
router.put("/:id/unfollowme", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        
        try {
            const user = await User.findById(req.params.id); ///given input-id  wala
            const currentUser = await User.findById(req.body.userId); // which is trying to make request

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: {followins:req.params.id }})
                res.status(200).json("user has been unfollowed");     
            } else {
                res.status(403).json("you dont follow this user")
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you cant unfollow urself")
    }
})
module.exports = router;