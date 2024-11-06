import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet"; // Security middleware
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbconnection.js";

const app = express();
dotenv.config({ path: "./config.env" });

// Security middleware for setting HTTP headers
app.use(helmet());

// CORS setup to allow requests from the frontend
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Frontend URL from environment variable
    methods: ["GET", "POST", "PUT", "DELETE"], // Expanded to support other methods
    credentials: true, // To allow cookies and credentials
  })
);

// Body parsers for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for reservations
app.use("/api/v1/reservation", reservationRouter);

// Basic route to check API status
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Database connection
dbConnection();

// Custom error handling middleware
app.use(errorMiddleware);

export default app;
