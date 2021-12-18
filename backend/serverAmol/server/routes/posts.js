const { Mongoose } = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");
const Upload = require("../models/Upload")
const router = require("express").Router();

//create a post

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)

    } catch (err) {
        console.log('err:', err)

    }
});

//update a post
router.put("/:id",async (req, res) => {
    try {
       const post =await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("post has been updated")
    } else {
        res.status(403).json("u can update only ur post")
    }
    } catch (err) {
        res.status(500).json(err);
     }
});

//delete a post
router.delete("/:id",async (req, res) => {
    try {
       const post =await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("post has been deleted")
    } else {
        res.status(403).json("u can delete only ur post")
    }
    } catch (err) {
        res.status(500).json(err);
     }
});
//like dislike a post
router.put("/:id/like", async (req, res) => {
  
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(500).json("post has been liked")
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("post has been disliked")

        }
   
    } catch (err) {
        res.status(500).json(ReferenceError)
    };
});
//get a post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
     } catch (err) {
        res.status(500).json(err);
    }
})

//get timeline posts

router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const currentUserPosts = await Post.find({ userId: currentUser._id });
        const friendPost = await Promise.all(
            currentUser.followins.map(friendId => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(currentUserPosts.concat(...friendPost));
    } catch (err) {
        res.status(500).json(err)
    }
});

//get users all post
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username })
        const posts = await Post.find({userId: user._id })
 res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;