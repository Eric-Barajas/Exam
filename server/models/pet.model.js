const mongoose = require('mongoose');

/* 
{PATH} will be replaced with the field name, such as "location".
*/
const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        type: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        description: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        skill: {
            type: String
        },
        skill2: {
            type: String
        },
        skill3: {
            type: String
        }
    },
    { timestamps: true }
)

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Pet = mongoose.model('Pet', PetSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Pet };