const express = require('express');
const router = express.Router();
const Employee = require('../Model/Employee.model');



//post
router.post('/', async (req,res,next) =>{
    // res.send('Create a new employee');
    try{
        const employee = new Employee(req.body);
        const result = await employee.save();
        res.send(result);

    }catch(error){
        res.send(error.message);
    }
});

//get
router.get('/', async (req,res,next) =>{
    // res.send('List of single Employees');
    try{
        const result = await Employee.find({},{__v:0});
        res.send(result);
    }catch(error){
        res.send(error.message)

    }
});

//get by id
router.get('/:id', async (req,res,next) =>{
    // res.send('List of single Employees');
    const id = req.params.id;
    try{
        const result = await Employee.findById(id);
        res.send(result);
    }catch(error){
        res.send(error.message)

    }
});

//patch by id
router.patch('/:id', async (req,res,next) =>{
    
    try{
        const id = req.params.id;
        const update = req.body;
        const result = await Employee.findByIdAndUpdate(id, update);
        res.send(result);

    }catch(error){
        res.send(error.message)
    }
});

//delete
router.delete('/:id', async (req,res,next) =>{
    const id = req.params.id;
    try{
        const result = await Employee.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        res.send(error.message)

    }
});

module.exports = router;