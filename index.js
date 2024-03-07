const express = require('express');
const app = express();

const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employee'), EmployeeRoute);

const UserRoute = require('./Routes/User.route');
app.use(('/user'), UserRoute);

const DepartmentRoute = require('./Routes/Department.route');
app.use(('/department'), DepartmentRoute);


//error if wrong endpoint
app.use((req,res,next)=>{
    const err = new Error("Not Found");
    err.status= 404;
    next(err);
})

//middleware express handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
});


app.listen(3000, ()=>{
    console.log('Listening to port 3000');
});