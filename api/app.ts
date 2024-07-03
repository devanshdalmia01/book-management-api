import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "../routes/authRoutes";
import bookRoutes from "../routes/bookRoutes";
import mongoose from "mongoose";

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

app.use(
    "/",
    router.get("/", (req, res) => {
        res.json("Hello World");
    })
);
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

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

export default app;
