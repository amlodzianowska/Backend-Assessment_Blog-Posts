const express = require("express");
const PostController = require("./server/controllers/post.controller")


const app = express();
const port = 8000;

app.use(express.json())
// app.use(express.urlencoded({extended:true}))

require("./server/routes/posts.routes")(app)
// app.get("/", (req, res, next) => {
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//    });

// app.get("/api/posts", PostController.findAllPosts)


app.listen(port, ()=>console.log(`listening on port ${port}`))