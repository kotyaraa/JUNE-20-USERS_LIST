const express = require("express");
const router = express.Router();
const fs = require("fs");

const comments = require('../db/comments.json');
const posts = require('../db/posts.json');

router.get("/",(req, res)=>{
    res.send(posts)
});
function getPosts(){
   return JSON.parse(fs.readFileSync("../db/posts.json"));
    
}

router.get("/:id",(req, res)=>{
    const postId = parseInt(req.params.id);
    res.send(posts.find(post => post.id === postId))
});

router.get("/:id/comments",(req, res)=>{
    const postId = parseInt(req.params.id);
    res.send(comments.find(comment => comment.postId === postId))
})

router.post("/", (req, res)=>{
    res.send(req.body)

})
router.delete("/:id", (req, res)=>{
    let posts = getPosts();
    const postId = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === postId)
    if(index < 0){
       res.status(204).send();
       return;
    }
     posts.splice(index, 1)
    fs.writeFileSync("../db/posts.json", JSON.stringify(posts))
    
    res.send(posts)
})
router.put("/:id", (req, res) => {
    res.send(req.body)
})

module.exports = router;