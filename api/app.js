import express from "express";
import eventRoute from "./routes/events.route.js";

const app = express();

app.use(express.json());
app.use("/api/events", eventRoute);

app.listen(8800, () => {
  console.log("Server raita baba!!");
});
