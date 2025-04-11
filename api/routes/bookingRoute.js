const express = require('express');
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, bookingController.createBooking);
router.get('/:userId', authMiddleware, bookingController.getBookingsByUserId);

module.exports = router;