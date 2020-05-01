const postModel = require("../models/post");

function addPost(req, res) {
    const { author, content } = req.body;
    const newPost = postModel.addPost({ author, content });

    return res.json(newPost);
};

function getAllPost(req, res) {
    return res.json(postModel.getAllPost());
};

function getPostById(req, res) {
    const { id } = req.params;
    const post = postModel.getPostById(id);
    return res.json(post);
};

function updatePostById(req, res) {
    const { id } = req.params;
    const { author, content } = req.body;

    const post = postModel.updatePostById(id, { author, content });
    return res.json(post);
};

function deletePostById(req, res) {
    const { id } = req.params;
    const deletedPost = postModel.deletePostById(id);

    return res.json(deletedPost);
};

module.exports = {
    addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById
}