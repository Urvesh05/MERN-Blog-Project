const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongo connection success")
}).catch((e)=>{
    console.log("conection fail!",e)
}); 

// app.use("/", (req, res)=>{
//     console.log("hello");
// })

app.listen ( 8000, ()=>{
    console.log("server is running ...")
});