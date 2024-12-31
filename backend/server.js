import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import petRoutes from "./routes/pet.route.js"
import userRoutes from "./routes/user.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//alow us json data in the req.body

app.use("/api/pets", petRoutes);

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

