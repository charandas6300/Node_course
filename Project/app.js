const express = require('express')
const mongoose = require('mongoose')
const categories = require('F:/Node/Project/Routes/categories')
const students = require('./Routes/students')
const app = express();


mongoose.connect('mongodb://localhost/courseProject')
.then(()=>console.log("connection is successful"))
.catch(err=>console.log(`coudn't connect`, err))
app.use(express.json())
app.use('/api/category',categories)
app.use('/api/students',students)


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on ${port}`))
