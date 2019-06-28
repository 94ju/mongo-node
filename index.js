const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/playgroungcheck').
    then(
        ()=>{
            console.log('Connected to mongoDB')
        }
    ).catch(
        error=>console.log('connection failed',error)
    );

const courseSchema= new mongoose.Schema(
    {
        name:String,
        author:String,
        tags:[String],
        date:{
            type:Date,
            default:Date.now
        },
        isPublished:Boolean
    }
)

const Course = mongoose.model('Course',courseSchema);
const course = new Course(
    {
        name:'NodeJs',
        author:'Jnanith',
        tags:['node','backend'],
        isPublished:true
    }
);

course.save().then(
    (result)=>console.log(result)
).catch(
    error=>console.log(error)
)