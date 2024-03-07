const express = require('express');
const router = express.Router();

// get all
router.get('/', (req,res,next) =>{
    // res.send('List of all Employees');
    next(new Error("Cannot get all Employees"));
});

//post
router.post('/', (req,res,next) =>{
    res.send('Create a new employee');
});

//get single
router.get('/:id', (req,res,next) =>{
    res.send('List of single Employees');
});

//patch single
router.patch('/:id', (req,res,next) =>{
    res.send('Patch a single');
});

//delete
router.delete('/:id', (req,res,next) =>{
    res.send('Delete a employee');
});

module.exports = router;