const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/New')
.then(()=>{
    console.log("mongodb connected succefully");
})
.catch((err)=>{
    console.log('error occur: ',err);
});

// schema
const schema = new mongoose.Schema({
    First_Name:{
        type:String,
        require:true,
    },
    Last_Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
        unique:true,
    },
    Mobile:{
        type:Number,
        require:true,
    }
})
// model
const person = mongoose.model('person',schema);
module.exports = person;