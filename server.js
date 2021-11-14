const express = require("express");
const config = require("config");
const port = config.get('port');
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const connectDB = require("./config/db");
const app = express();
connectDB();

app.get("/",(req,res)=>{
    res.json({success:true})
})
app.use("/api/auth",auth);
app.use("/api/users/",users);
app.listen(port,(err)=>{
    if(err){
        console.log("connection failed"+err)
    }else{
        console.log(`connected at port ${port}`)
    }
})