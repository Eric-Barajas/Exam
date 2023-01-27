const express = require('express');

const {
    handleCreatePet,
    getAllPets,
    getPetById,
    deletePetById,
    updatePetById
} = require('../controllers/pet.controller');


const router = express.Router()

router.post('/', handleCreatePet);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.delete('/:id', deletePetById);
router.put('/:id', updatePetById);

module.exports = { petRouter: router }