import express from "express";
import { addEvent, getEvents } from "../controllers/events.controller.js";

const router = express.Router();

router.post("/addEvent", addEvent);
router.get("/", getEvents); // Changed from getEvent to getEvents

export default router;