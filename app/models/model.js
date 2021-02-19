module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        topic: {
            type: Sequelize.STRING
        },
        news: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.STRING
        }
    });

    return Post;
}