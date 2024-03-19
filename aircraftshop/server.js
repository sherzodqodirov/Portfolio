    import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import planesRoute from "./routes/planes.js"
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
dotenv.config()
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/static', express.static(__dirname + "/assets"))

app.get('/', (req, res) => res.status(200).json({message: " Backend Node.js "}))

app.use('/api/planes', planesRoute)


async function start() {
    try {
        await mongoose.connect("mongodb://localhost:27017",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        app.listen(PORT, () => {
            console.log(`server start ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}

start()