import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
    } catch (error) {
        process.exit(1);
    }
}
