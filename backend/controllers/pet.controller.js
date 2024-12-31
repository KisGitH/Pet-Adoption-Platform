import mongoose from "mongoose";
import Pet from "../models/pet.model.js";

export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({});
        res.status(200).json({ success: true, data: pets });
    } catch (error) {
        console.log("error in fetching pets", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}

export const createPets = async (req,res) => {
    const pet = req.body;// user will send this data

    if(!pet.name || !pet.catagory || !pet.gender || !pet.age || !pet.image){
        return res.status(400).json({ success:false, message: "Please provide all field" });
    }

    const newPet = new Pet(pet);

    try {
        await newPet.save();
        res.status(201).json({ success: true, data: newPet});
    } catch (error) {
        console.error("Error in Create Pet:", error.message);
        return res.status(500).json({ success:false, message: "Server Error" });
    }
}

export const updatePets = async (req, res) => {
    const {id} = req.params;

    const pet = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Pet Id"});
    }
    try {
        const updatedPet = await Pet.findByIdAndUpdate(id, pet, {new: true});
        res.status(200).json({ success: true, data: updatedPet });
    } catch (error) {
        console.log("error in updating pets", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}

export const deletePets = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Pet Id"});
    }

    try {
        await Pet.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Pet deleted"});
    } catch (error) {
        console.log("error in deleting pets", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}
