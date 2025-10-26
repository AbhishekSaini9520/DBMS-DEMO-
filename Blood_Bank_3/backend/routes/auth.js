const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authController');
const {validateUserRegistration, validateLogin} = require('../middleware/validation');


// Public routes
router.post('/signup', validateUserRegistration, registerUser);
router.post('/login', validateLogin, loginUser);

module.exports = router;
