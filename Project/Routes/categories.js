const express = require('express');
const {Category , validate} = require('../models/categoriesmodel')
const router = express.Router();

router.get('/', async (req, res) => {
    let newCategory = await Category.find();
    res.send(newCategory);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const newCategory = new Category({
        name: req.body.name
    });
    await newCategory.save(); // Use the newCategory instance to save
    res.send(newCategory);
});

router.put('/:id', async (req, res) => {

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

   const newCategory = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new:true})

   if(!newCategory) return res.status(404).send("not found");

   res.send(newCategory);

});

router.delete('/:id', async (req, res) => {
    const newCategory = await Category.findByIdAndRemove(req.params.id)
    if(!newCategory) return res.status(404).send("not found")

    res.send(newCategory);
});

router.get('/:id', async (req, res) => {
    const newCategory = Category.findById(req.params.id);
    if(!newCategory) return res.status(404).send("not found");

    res.send(newCategory);
});


module.exports = router;
