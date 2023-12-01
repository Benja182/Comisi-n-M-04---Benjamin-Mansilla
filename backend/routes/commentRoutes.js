const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/:postId', authMiddleware, commentController.createComment);

module.exports = router;
