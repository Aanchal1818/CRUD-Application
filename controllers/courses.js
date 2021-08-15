const express =require ("express");
const mongoose=require("mongoose");

const router = express.Router();

const CourseModel = mongoose.model("Course");
router.get("/",(req,res)=>{
    res.send("course Controller")
});

router.get("/add",(req,res)=>{
   res.render("add-course")
});

router.post("/add",(req,res)=>{
console.log(req.body);
    var course = new CourseModel();
    course.courseName= req.body.courseName;
    course.courseId = Math.ceil(Math.random() * 10000000);
    course.courseDuration= req.body.courseDuration;
    course.courseFees= req.body.courseFees;
 

    course.save((err,doc)=>{
        if(!err)
        {
            res.redirect("/course/list")
        }
        else{
            res.send("error occured");
        }
    })
    
});



router.get("/list",(req,res)=>{
    CourseModel.find((err, docs)=>{
       if(!err)
       {
           console.log(docs);
           res.render("list",{data: docs.map(doc => doc.toJSON())})
           }  
       else{
        res.send("course controller");
       }
})});

module.exports = router;