import express from "express";
import mongoose from "mongoose";

const app =express();
const PORT=process.env.PORT || 5000;

 async function start() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin1@cluster0.ib1moir.mongodb.net/todo?retryWrites=true&w=majority", {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true,
        })

        app.listen(PORT,()=>{
            console.log(`server start ${PORT}` )
        })
    } catch (e) {
        console.log(e)
    }
}
start()
