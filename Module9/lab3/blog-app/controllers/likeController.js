const Like = require('../models/like');

exports.likePost = async (req, res) => {
    try {
        const like = await Like.create({ UserId: req.user.id, PostId: req.params.postId });
        res.status(201).json(like);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
