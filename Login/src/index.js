const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection=require("./mongodb")

const templatePath=path.join(__dirname,'../templates')
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded())

app.set("view engine", "hbs")
app.set("views",templatePath)

app.get("/",(req, res)=>
{
    res.render("login")
})

app.post("/login",async(req, res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        email2:req.body.email2,
        password2:req.body.password2
    }

    try {
        const result = await collection.insertMany([data]);
        console.log(`${result.insertedCount} documents were inserted successfully.`);
    } catch (error) {
        console.error("Error inserting documents:", error);
    }
    

    res.render("submitted")
})

app.listen(3000, ()=>
{
    console.log("port connected");
})