const express = require('express');
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, ticketController.generateTicket);
router.get('/:id', authMiddleware, ticketController.getTicketById);

module.exports = router;