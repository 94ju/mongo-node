const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/playgroungcheck').
    then(
        ()=>{
            console.log('Connected to mongoDB')
        }
    ).catch(
        error=>console.log('connection failed',error)
    )