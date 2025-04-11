const prisma = require('../lib/prisma.js');

// Process payment
const processPayment = async (req, res) => {
  const { bookingId, paymentMethod, amount, transactionId } = req.body;
  try {
    const payment = await prisma.payment.create({
      data: { bookingId, paymentMethod, amount, transactionId },
    });

    // Update booking status to "completed"
    await prisma.booking.update({
      where: { id: bookingId },
      data: { paymentStatus: 'completed' },
    });

    res.json({ message: 'Payment processed successfully', payment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process payment' });
  }
};

module.exports = { processPayment };