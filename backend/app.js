import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// Load environment variables
dotenv.config();

const app = express();

// Database connection
dbConnection();

// Enable CORS for your frontend app (only localhost:5173 in this case)
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only the frontend origin
    credentials: true, // Allow cookies and credentials
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/reservation", reservationRouter);

// Root route (for testing server response)
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Custom error middleware for handling errors
app.use(errorMiddleware);

export default app;
