const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

exports.add = (req, res) => {
    if(!req.body.topic){
        res.status(400).send({
            message: "Topic can't be empty!"
        });
        return;
    }
    const post = {
        topic: req.body.topic,
        news: req.body.news,
        tags: req.body.tags
    };

    Post.add(post)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error occured while creating post"
            })
        });
};

exports.list = (req, res) => {
    const topic = req.query.topic;
    let condition = topic ? {topic{[Op.like]: '%topic'}}  : null;

    Post.list({where: condition})
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error occured while finding post"
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;
    Post.update(req.body, {where: {id:id}
    }).then((result) => {
        if(result == 1){
            res.send({
                message: "Post updated"
            });
        }else{
            res.send({
                message: "Post update failed"
            })
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Post.destroy({where: {id: id}
    }).then((result) => {
        if(result == 1){
            res.send({
                message: "Post deleted"
            })
        }else{
            res.send({
                message: "Post delete failed"
            })
        }
    });
};