const express=require("express")
const mongoose=require("mongoose")
require('dotenv').config
const app=express()
const port=process.env.PORT||8000;

// application/json
app.use(express.json);

//application/x-www-from-urlencoded
app.use(express.urlencoded({extended:true}))

app.use("/static",express.static(__dirname+"assets"))
app.get('/',(req,res)=>{
    res.send("my app")
})

mongoose.connect("mongodb+srv://admin:admin1@cluster0.ib1moir.mongodb.net/test")
.then(()=>{
    app.listen(port,()=>{
        console.log(` server run ${port}`);
    })
})
.catch(()=>{
    console.log("server error");
})