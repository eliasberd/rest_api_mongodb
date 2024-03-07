const express = require('express');
const router = express.Router();

// get all
router.get('/', (req,res,next) =>{
    res.send('List of all Users');
});

//post
router.post('/', (req,res,next) =>{
    res.send('Create a new users');
});

//get single
router.get('/:id', (req,res,next) =>{
    res.send('List of all users');
});

//patch single
router.patch('/:id', (req,res,next) =>{
    res.send('Patch a single');
});

//delete
router.delete('/:id', (req,res,next) =>{
    res.send('Delete a users');
});

module.exports = router;