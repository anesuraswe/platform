const prisma = require('../lib/prisma.js');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await prisma.event.findUnique({
      where: { id },
      include: { seats: true },
    });
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event' });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  const { name, date, venue, totalSeats } = req.body;
  try {
    const event = await prisma.event.create({
      data: { name, date, venue, totalSeats },
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};

module.exports = { getAllEvents, getEventById, createEvent };