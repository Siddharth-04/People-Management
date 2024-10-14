const express = require('express');
const router = express.Router();
const Person = require("../models/personSchema");

router.get('/',async(req,res)=>{
    try{
        const people = await Person.find();
        res.json(people);
    }catch(err){
        res.status(500).json({message:err.message})
    }
});

router.post('/',async(req,res)=>{
    const newPerson = new Person({
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        mobile : req.body.mobile,
    });
    try{
        const createPerson = await newPerson.save();
        res.status(201).json(createPerson);
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
});

router.put('/:mobile',async(req,res)=>{
    try{
        const updatedPerson = await Person.findOneAndUpdate(
            {mobile : req.params.mobile}, //using mobile for updating
            req.body,
            req.body,
            {new :true}
        );
    
        if(!updatedPerson){
            return res.status(404).json({message : "Person not found"})
        }
    
        res.json(updatedPerson);

    }catch(err){
       res.status(400).json({message : err.message});
    }
})

router.delete('/:mobile',async(req,res)=>{
    try{
        const deletePerson = await Person.findOneAndDelete({
            mobile : req.params.mobile
        });
        
        if(!deletePerson){
            res.status(404).json({message : "Person not found"});
        }
        res.json({message : "Person deleted successfully"});
        
    }catch(err){
        res.status(400).json({message : err.message})
    }
});

module.exports = router;