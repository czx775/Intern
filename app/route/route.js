module.exports = app => {
    const posts = require("../crud/crud.js");
    let router = require("express").Router();

    router.post("/", posts.add);
    
    app.use("/api/posts", router);
}