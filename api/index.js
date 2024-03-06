import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDb');
})
.catch(() =>{
    console.log(err);
})

const app = express();

app.listen(3000, ()=> {
    console.log('Sever listening on port 3000');
})










