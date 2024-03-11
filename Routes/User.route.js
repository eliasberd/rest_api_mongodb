const express = require('express');
const router = express.Router();

const User = require('../Model/Users.model');

// get all
router.get('/', (req,res,next) =>{
    res.send('List of all Users');
});

//post
router.post('/', async (req,res,next) =>{
    try{
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);

    }
    catch(error){
        res.send(error.message);

    }

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