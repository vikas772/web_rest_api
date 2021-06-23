const express = require("express");
const router = new express.Router();
const Studnet  = require("../models/students");

// we need to define the router
router.get("/vikas", (req, res) => {
    res.send("hello from router");
}); 


router.post("/students", async(req, res)=>{ //by using async await
    try{
        const user = new Studnet(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(err){
        res.status(400).send(err); 
    }
 

})



//read the data

router.get("/students", async(req, res) => {
    try{
        const readUser = await Studnet.find();
        res.send(readUser);
    }catch(err){
        res.status(400).send(err); 
    }
})

// to get single user data

router.get("/students/:id", async(req, res) => {
   
    try{
        const _id = req.params.id;
        const studentData = await Studnet.findById(_id);
        if(!studentData){
            console.log(studentData);
            return res.status(404).send();
        }
        else{
            res.send(studentData);
        }
    }catch(err){
        res.status(500).send(err);
    }
})

//update

router.patch("/students/:id", async(req, res) => {
   
    try{
        const _id = req.params.id;
        const UpdateStudentData = await Studnet.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(UpdateStudentData);
    }catch(err){
        res.status(404).send(err);
    }
})

router.delete("/students/:id", async(req, res) => {
   
    try{
        const DeleteStudentData = await Studnet.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(DeleteStudentData);
    }catch(err){
        res.status(404).send(err);
    }
})

module.exports = router; 