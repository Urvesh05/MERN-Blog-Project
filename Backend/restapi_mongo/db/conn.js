const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodejs_rest_api',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection success")
}).catch((e)=>{
    console.log("conection fail!")
});
