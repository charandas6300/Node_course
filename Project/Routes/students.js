const express = require('express');
const {Student , validate} = require('../models/studentmodel')
const router = express.Router();


router.get('/', async (req, res) => {
    let students = await Student.find();
    res.send(students);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const student = new Student({
        name: req.body.name,
        enrolled: req.body.enrolled,
        Phone: req.body.Phone
        
    });
    await student.save(); // Use the newCategory instance to save
    res.send(student);
});

router.put('/:id', async (req, res) => {

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

   const student = await Student.findByIdAndUpdate(req.params.id, {name: req.body.name, Phone:req.body.Phone, enrolled:req.body.enrolled}, {new:true})

   if(!student) return res.status(404).send("not found");

   res.send(student);

});

router.delete('/:id', async (req, res) => {
    const student = await Student.findByIdAndRemove(req.params.id)
    if(!student) return res.status(404).send("not found")

    res.send(student);
});

router.get('/:id', async (req, res) => {
    const student = Student.findById(req.params.id);
    if(!student) return res.status(404).send("not found");

    res.send(student);
});



module.exports = router;
