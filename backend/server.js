const dotenv=require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
  res.send("Home page");
})

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
      app.listen(PORT,()=>{
        console.log(`Server running on Port ${PORT}`)
      })
    })
    .catch((err)=>console.log(err))