const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/QueryForm")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>
{
    console.log("failed to connect");
})

const querySchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    email2:{
        type:String
    },
    password:{
        type:String
    },
    password2:{
        type:String
    },
})

const collection=new mongoose.model("Collcetion2", querySchema)

module.exports=collection