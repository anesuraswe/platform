const prisma = require('../lib/prisma.js');

// Create a booking
const createBooking = async (req, res) => {
  const { userId, eventId, seatId } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: { userId, eventId, seatId },
    });
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

// Get all bookings for a user
const getBookingsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const bookings = await prisma.booking.findMany({ where: { userId } });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

module.exports = { createBooking, getBookingsByUserId };