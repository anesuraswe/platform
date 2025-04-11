const prisma = require('../lib/prisma.js');

// Get all seats for an event
const getSeatsByEventId = async (req, res) => {
  const { eventId } = req.params;
  try {
    const seats = await prisma.seat.findMany({ where: { eventId } });
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch seats' });
  }
};

// Reserve a seat
const reserveSeat = async (req, res) => {
  const { seatId } = req.params;
  try {
    const seat = await prisma.seat.update({
      where: { id: seatId },
      data: { status: 'reserved' },
    });
    res.json({ message: 'Seat reserved successfully', seat });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reserve seat' });
  }
};

module.exports = { getSeatsByEventId, reserveSeat };