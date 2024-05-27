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
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collecetion1", querySchema)

module.exports=collection