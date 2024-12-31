import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import petRoutes from "./routes/pet.route.js";
import userRoutes from "./routes/user.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());//alow us json data in the req.body

app.use("/api/pets", petRoutes);

app.use("/api/users", userRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

