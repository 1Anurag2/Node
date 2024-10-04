import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/main.js";

// Load environment variables from .env file
dotenv.config({
    path: './.env'
});

// Initialize Express app
const app = express();

// Middleware example (optional)
app.use(express.json()); // Middleware to parse JSON requests

// Test route (optional)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect to MongoDB and start server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!", err);
    });
