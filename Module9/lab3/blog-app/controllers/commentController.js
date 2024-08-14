const Comment = require('../models/comment');

exports.createComment = async (req, res) => {
    try {
        const { content } = req.body;
        const comment = await Comment.create({ content, UserId: req.user.id, PostId: req.params.postId });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
