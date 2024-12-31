import express from "express";
import { deletePets, getPets, createPets, updatePets } from "../controllers/pet.controller.js";

const router = express.Router();

router.get("/", getPets);
router.post("/", createPets);
router.put("/:id", updatePets);
router.delete("/:id", deletePets);

export default router;