const express = require('express');
const { createPost, getPosts, likePost, commentOnPost } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getPosts);
router.post('/', authMiddleware, upload.single('image'), createPost);
router.post('/:postId/like', authMiddleware, likePost);
router.post('/:postId/comment', authMiddleware, commentOnPost);

module.exports = router;
