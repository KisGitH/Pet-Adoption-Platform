import User from "../models/user.model.js";

// Register a new user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "Name, email, and password are required." });
    }

    try {
        // Check if the name or email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already in use." });
        }

        // Create a new user
        const user = await User.create({ name, email, password });
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        console.error("Error in registering user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Login user
export const loginUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ success: false, message: "Name and password are required." });
    }

    try {
        const user = await User.findOne({ name });

        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, message: "Invalid name or password." });
        }

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error("Error in logging in user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get all users (for testing)
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error in fetching users:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
