const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Registro de usuario
router.post('/register', userController.registerUser);

// Inicio de sesión de usuario
router.post('/login', userController.loginUser);

module.exports = router;
