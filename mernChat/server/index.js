import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.status(200).json({message: "MERN Chat server"}))






startServer()
 function startServer(){
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB start');

        app.listen(process.env.PORT,()=>{
            console.log(`Starting server on port ${process.env.PORT}`);
        })
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}