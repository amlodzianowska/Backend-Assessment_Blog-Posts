const PostController = require("../controllers/post.controller")

module.exports = app => {
    app.get("/api/posts", PostController.findAllPosts)

}