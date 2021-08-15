const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/Department", { useNewUrlParser: true } , (err)=>{
    if (!err)
    {
        console.log('success connected');
    }
    else
    {
        console.log("error");
    }
});

const Course = require("./course.model");