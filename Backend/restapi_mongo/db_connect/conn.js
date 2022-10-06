const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test',{
// const URI = process.env.MONGODB_URL;
// mongoose.connect(URI, { useUnifiedTopology: true } 
// );

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// } )


mongoose.connect("mongodb://127.0.0.1:27017/nodejs_rest_api",{
 useNewUrlParser:true,
 useUnifiedTopology:true
}).then(()=>{
    console.log("connection success")
}).catch((e)=>{
    console.log(e,"connection fail!")
})


// import mongoose from 'mongoose';
    
    // const db = process.env.MONGO_URI;
    
    // const connectDB = async () => {
    //   try {
    //     console.log(db);
    //     await mongoose.connect(`${db}`, {
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //     });
    //     console.log('MongoDB connected');
    //   } catch (error) {
    //     console.log(error.message);
    //     process.exit(1);
    //   }
    // };