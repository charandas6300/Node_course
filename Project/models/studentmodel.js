const mongoose = require('mongoose');
const joi = require('joi');
const string = require('joi/lib/types/string');



const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 20 },
    enrolled:{type:Boolean, default:false},
    Phone:{type:string, required:true, minlength:10, maxlength:20}
});

const Student = mongoose.model('Student', studentSchema);

function validateData(student) {
    const schema = {
        name: joi.string().min(3).max(30).required(),
        enrolled: joi.Boolean(),
        Phone: joi.string().min(10).max(20).required(),
    };
    return joi.validate(student, schema);
}

exports.Student = Student;
exports.validate = validateData;