const prisma = require('../lib/prisma.js');
const QRCode = require('qrcode');

// Generate a ticket with QR code
const generateTicket = async (req, res) => {
  const { bookingId } = req.body;
  try {
    // Generate QR code
    const qrCodeData = `Booking ID: ${bookingId}`;
    const qrCode = await QRCode.toDataURL(qrCodeData);

    // Create the ticket
    const ticket = await prisma.ticket.create({
      data: { bookingId, qrCode },
    });

    res.json({ message: 'Ticket generated successfully', ticket });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate ticket' });
  }
};

// Get ticket by ID
const getTicketById = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await prisma.ticket.findUnique({ where: { id } });
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ticket' });
  }
};

module.exports = { generateTicket, getTicketById };