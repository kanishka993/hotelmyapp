const express = require('express');
const path= require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

const port = process.env.port||3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const config=require('./config/database')
const user = require('./routes/users')

const connection=mongoose.connect(config.database);
if(connection){
    console.log("db connected")
}
else{
    console.log("db unconnected")
}
app.use(express.static(path.join(__dirname,"public")));



app.use('/user',user)

app.get("/",(req,res)=>{
    res.send("hellos");
})

app.listen(port,function () {
    console.log("listing to port"+port)
    
    
});

