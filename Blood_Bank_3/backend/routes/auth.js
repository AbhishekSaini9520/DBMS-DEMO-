const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authController');
const {validateUserRegistration, validateLogin} = require('../middleware/validation');


// Public routes
router.post('/signup', validateUserRegistration, registerUser);
router.post('/login', validateLogin, loginUser);

// Protected routes
router.get('/profile', authenticateToken, getUserProfile);
router.put('/profile', authenticateToken, updateUserProfile);

module.exports = router;
