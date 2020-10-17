const express = require("express");
const router = express.Router();

const comments = require('../db/comments.json');
const posts = require('../db/posts.json');

router.get("/",(req, res)=>{
    res.send(posts)
});

router.get("/:id",(req, res)=>{
    const postId = parseInt(req.params.id);
    res.send(posts.find(post => post.id === postId))
});

router.get("/:id/comments",(req, res)=>{
    const postId = parseInt(req.params.id);
    res.send(comments.find(comment => comment.postId === postId))
})

module.exports = router;