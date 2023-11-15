const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

router.post('/create', PostController.createPost);
router.delete('/delete/:postId', PostController.deletePost);
router.get('/', PostController.getPosts);

module.exports = router;
