import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connecting to MongoDB
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit with failure code if connection fails
    }
};

export default connectDB;
