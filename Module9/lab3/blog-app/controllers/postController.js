const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, description, imageUrl } = req.body;
        const post = await Post.create({ title, description, imageUrl, UserId: req.user.id });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
