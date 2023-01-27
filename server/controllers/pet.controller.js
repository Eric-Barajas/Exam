const { Pet } = require('../models/pet.model');

const handleCreatePet = async (req, res) => {
    try {
        const newPet = await Pet.create(req.body);
        return res.json(newPet);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        return res.json(pets);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id)
        return res.json(pet);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const deletePetById = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id)
        return res.json(deletedPet);
    } catch (err) {
        return res.status(400).json(error);
    }
}

const updatePetById = async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
            // re-run our validaitons
            runValidators: true,
        })
        return res.json(updatedPet);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreatePet,
    getAllPets,
    getPetById,
    deletePetById,
    updatePetById
}