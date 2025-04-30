export const addEvent = (req, res) => {
    try {
      const seatLayout = req.body;
      console.log("Received seat layout:", seatLayout);
      
      // Here you would typically save to database
      // Example: await Event.create({ seatLayout });
      
      res.status(201).json({ 
        success: true,
        message: "Event created",
        data: seatLayout 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getEvents = (req, res) => {
    // Implement your database fetch logic here
    res.json({ message: "All events" });
  };