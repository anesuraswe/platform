const express = require('express');
const seatController = require('../controllers/seatController');
const router = express.Router();

router.get('/:eventId', seatController.getSeatsByEventId);
router.put('/:seatId/reserve', seatController.reserveSeat);

module.exports = router;