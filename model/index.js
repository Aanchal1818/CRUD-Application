const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Aanchal:Aanchal18@cluster0.3v8ta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true } , (err)=>{
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