const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection=require("./mongodb")

const templatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine", "hbs")
app.set("views",templatePath)

app.get("/",(req, res)=>
{
    res.render("query")
})

app.post("/query",async(req, res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
    }

    try {
        const result = await collection.insertMany([data]);
        console.log(`${result.insertedCount} documents were inserted successfully.`);
    } catch (error) {
        console.error("Error inserting documents:", error);
    }
    

    res.render("submitted")
})

app.listen(5000, ()=>
{
    console.log("port connected");
})