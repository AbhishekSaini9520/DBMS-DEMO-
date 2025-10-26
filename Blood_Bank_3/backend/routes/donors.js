const express = require('express');
const router = express.Router();
const {getAllDonors,getDonorById, getDonorsByBloodGroup, createDonor,getDonorStats} = require('../controllers/donorController');
const {validateDonorRegistration} = require('../middleware/validation');
const { authenticateToken} = require('../middleware/auth');

// Public routes
router.get('/blood/:bloodGroup', getDonorsByBloodGroup);

// Protected routes
router.get('/', authenticateToken, getAllDonors);
router.get('/stats', authenticateToken, getDonorStats);
// router.get('/:donorId', authenticateToken, getDonorById);

// Donor-specific routes
router.post('/', authenticateToken, validateDonorRegistration, createDonor);
// router.put('/:donorId', authenticateToken, updateDonor);
// router.delete('/:donorId', authenticateToken, deleteDonor);

module.exports = router;
