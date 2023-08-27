const express = require('express');

const app = express()

const myMiddle = require('./middle');
const morgan = require('morgan');

//middlewares
app.use(express.json())


app.use(myMiddle);

app.use(morgan('tiny'))

const courses = [
    {id:1, name:'js'},
    {id:2, name:'py'},
    {id:3, name:'c++'},
]

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.get("/next",(req,res)=>{
    res.send("this is next page")
})

app.get('/courses',(req,res)=>{
    res.send(courses);
})
//post
app.post('/courses',(req,res)=>{
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course);
    res.send(course);
})

//update
app.put('/courses/:name',(req,res)=>{
    let course = courses.find(course => course.name === req.params.name);

    if(!course){res.status(404).send("ID DOESN'T EXIST");}
    course.name = req.body.name;
    res.send(course);

})
//Delete
app.delete('/courses/:id', (req, res) => {
    let course = courses.find(course=>course.id === parseInt(req.params.id));
    if(!course){ res.status(404).send("ID DOESN'T EXIST")
    }
    courses.pop(course);
    res.send(course);
    })

//Route parameters
app.get("/courses/:name",(req,res)=>{
    let course = courses.find(course => course.name === req.params.name);
    // res.send(`this is ${course.id}`);
    // console.log(course.id)
    if(!course) res.status(404).send("PAGE DOEN'T EXIST")
    res.send(`${course.id}course name is ${course.name}`);
})

app.get("*",(req,res)=>{
    res.status(404).send("PAGE DOESN'T EXIST");
})


let port = process.env.PORT || 3000
app.listen(port,()=>{console.log(`server is running on ${port}`)});