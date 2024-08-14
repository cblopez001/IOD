const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

exports.createPost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const post = new Post({
            title,
            description,
            image: req.file.path,
            author: req.user.id
        });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author').populate('comments');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post.likes.includes(req.user.id)) {
            post.likes.push(req.user.id);
            await post.save();
            return res.status(200).json({ message: 'Post liked' });
        }
        res.status(400).json({ error: 'You have already liked this post' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.commentOnPost = async (req, res) => {
    try {
        const { text } = req.body;
        const comment = new Comment({
            text,
            author: req.user.id,
            post: req.params.postId
        });
        await comment.save();

        const post = await Post.findById(req.params.postId);
        post.comments.push(comment._id);
        await post.save();

        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
