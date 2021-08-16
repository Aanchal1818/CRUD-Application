const connection = require ("./model");
const express =require ("express");
const app=express();
const path = require ("path");
const expressHandlebars= require ("express-handlebars");
const bodyparser = require ("body-parser");
 const CourseController= require("./controllers/courses");

app.use(bodyparser.urlencoded({
    extended:true
}));
app.engine("hbs", expressHandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname+"/views/layouts"
}));

app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index",{})
});

app.use("/course", CourseController);
app.listen(process.env.PORT  || 3000,()=>{
    console.log("server started in port ${PORT}");
});

