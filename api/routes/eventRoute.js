const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();

router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getEventById);
router.post("/", eventController.createEvent);

module.exports = router;
