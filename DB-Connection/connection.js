const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

// using mongoose connect

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then((data)=>{
    console.log("mongodb atlas connected to server");
}).catch((err)=>{
    console.log("mongodb connection failed");
})