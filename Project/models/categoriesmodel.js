const mongoose = require('mongoose');
const joi = require('joi');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 20 }
});

const Category = mongoose.model('Category', categorySchema);


function validateData(newCategory) {
    const schema = {
        name: joi.string().min(3).required()
    };
    return joi.validate(newCategory, schema);
}

exports.Category = Category;
exports.validate = validateData;