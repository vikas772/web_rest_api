const express = require("express");
const validator = require("validator");
require("./database/conn");
const Studnet = require("./models/students");
const port = process.env.port || 3000;
const app = express();
app.use(express.json());

//create a new students

app.post("/students", (req, res)=>{
    console.log(req.body);
    const user = new Studnet(req.body);
    user.save().then(() =>{
        res.status(201).send(user);
    })
    .catch((err) =>{
        res.status(400).send(err);
    })


})

app.listen(port, ()=>
{
    console.log(`conection is setup at ${port}`);
})