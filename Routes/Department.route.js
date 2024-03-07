const express = require('express');
const router = express.Router();
const department = [
    {
        id: 1,
        name: "Finance"
    },
    {
        id:2,
        name: "Accounting"

    }
];

router.post('/', (req,res,next)=> {
    res.send(department);
});

router.get('/', (req,res,next)=>{
    res.send('List all department');
});

module.exports = router;