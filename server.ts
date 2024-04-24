import mongoose from "mongoose";
import app from "./app";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL as string);
    } catch (err) {
        console.error(err);
    }
};

const start = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}...`));
    } catch (err) {
        console.error(err);
    }
};

start();
