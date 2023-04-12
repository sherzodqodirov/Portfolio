const express=require("express")
const mongoose=require("mongoose")
require('dotenv').config
const app=express()
const port=process.env.PORT||8000;

app.get('/',(req,res)=>{
    res.send("server ok")
})

mongoose.connect()